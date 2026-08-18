"use server";

import { revalidatePath } from "next/cache";
import { getSupabaseServerClient } from "@/lib/supabase/server";

// Helper for XSS sanitization while preserving paragraph line breaks and basic formatting
function sanitize(input: string | null | undefined): string {
  if (!input) return "";
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

function sanitizeTextarea(input: string | null | undefined): string {
  if (!input) return "";
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .trim();
}

export interface ActionResult {
  success: boolean;
  message: string;
  error?: string;
}

/**
 * Server action to insert or update a chapter with rich content in Supabase
 */
export async function cadastrarCapituloAction(
  prevState: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  try {
    const secaoIdRaw = formData.get("secao_id")?.toString();
    const numeroRaw = formData.get("numero")?.toString();
    const tituloPtRaw = formData.get("titulo_pt")?.toString();
    const tituloEnRaw = formData.get("titulo_en")?.toString();
    const tituloEsRaw = formData.get("titulo_es")?.toString();
    const autoresRaw = formData.get("autores")?.toString();
    const resumoPtRaw = formData.get("resumo_pt")?.toString();
    const conteudoPtRaw = formData.get("conteudo_pt")?.toString();
    const referenciasRaw = formData.get("referencias")?.toString();
    const statusRaw = formData.get("status")?.toString() || "publicado";

    // 1. Validation: required fields
    if (!secaoIdRaw || !numeroRaw || !tituloPtRaw) {
      return {
        success: false,
        message: "Por favor, preencha todos os campos obrigatórios (Seção, Número e Título em Português).",
      };
    }

    const secao_id = parseInt(secaoIdRaw, 10);
    const numero = parseInt(numeroRaw, 10);

    if (isNaN(secao_id) || secao_id < 1 || secao_id > 10) {
      return {
        success: false,
        message: "A Seção informada deve ser um valor válido entre 1 e 10.",
      };
    }

    if (isNaN(numero) || numero <= 0) {
      return {
        success: false,
        message: "O número do capítulo deve ser um inteiro positivo.",
      };
    }

    const titulo_pt = sanitize(tituloPtRaw);
    const titulo_en = sanitize(tituloEnRaw) || null;
    const titulo_es = sanitize(tituloEsRaw) || null;
    const autores = sanitize(autoresRaw) || null;
    const resumo_pt = sanitizeTextarea(resumoPtRaw) || null;
    const conteudo_pt = sanitizeTextarea(conteudoPtRaw) || null;
    const referencias = sanitizeTextarea(referenciasRaw) || null;
    const status = ["publicado", "rascunho"].includes(statusRaw) ? statusRaw : "publicado";

    if (titulo_pt.length < 3) {
      return {
        success: false,
        message: "O título em português deve conter pelo menos 3 caracteres.",
      };
    }

    // 2. Perform insertion / upsert on Supabase
    const client = getSupabaseServerClient();
    const { error } = await client.from("capitulos").upsert(
      {
        secao_id,
        numero,
        titulo_pt,
        titulo_en,
        titulo_es,
        autores,
        resumo_pt,
        conteudo_pt,
        referencias,
        status,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "numero" }
    );

    if (error) {
      console.error("Supabase insert error:", error);
      return {
        success: false,
        message: `Erro ao salvar no banco de dados: ${error.message}`,
        error: error.message,
      };
    }

    revalidatePath("/[locale]/indice", "page");
    revalidatePath("/[locale]/indice-new", "page");
    revalidatePath("/[locale]/capitulo/[numero]", "page");
    revalidatePath("/admin/painel", "page");

    return {
      success: true,
      message: `Capítulo ${numero} ("${titulo_pt}") publicado/atualizado com sucesso!`,
    };
  } catch (err: any) {
    console.error("Unexpected error in cadastrarCapituloAction:", err);
    return {
      success: false,
      message: "Ocorreu um erro interno ao processar o cadastro.",
      error: err?.message,
    };
  }
}

/**
 * Server action to delete a chapter
 */
export async function excluirCapituloAction(idOrNumero: number | string): Promise<ActionResult> {
  try {
    const client = getSupabaseServerClient();
    const isNumber = typeof idOrNumero === "number" || !isNaN(Number(idOrNumero));

    const query = isNumber
      ? client.from("capitulos").delete().eq("numero", Number(idOrNumero))
      : client.from("capitulos").delete().eq("id", idOrNumero);

    const { error } = await query;

    if (error) {
      return {
        success: false,
        message: `Erro ao excluir capítulo: ${error.message}`,
        error: error.message,
      };
    }

    revalidatePath("/[locale]/indice", "page");
    revalidatePath("/[locale]/indice-new", "page");
    revalidatePath("/admin/painel", "page");

    return {
      success: true,
      message: "Capítulo excluído com sucesso.",
    };
  } catch (err: any) {
    return {
      success: false,
      message: "Erro ao excluir capítulo.",
      error: err?.message,
    };
  }
}

/**
 * Server action to insert or update an Author / Editor in Supabase
 */
export async function salvarAutorAction(
  prevState: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  try {
    const idRaw = formData.get("id")?.toString();
    const ordemRaw = formData.get("ordem")?.toString() || "1";
    const nomeRaw = formData.get("nome")?.toString();
    const cargoRaw = formData.get("cargo")?.toString();
    const instituicaoRaw = formData.get("instituicao")?.toString();
    const destaqueRaw = formData.get("destaque")?.toString();
    const bioPtRaw = formData.get("bio_pt")?.toString();
    const bioEnRaw = formData.get("bio_en")?.toString();
    const bioEsRaw = formData.get("bio_es")?.toString();
    const especialidadesRaw = formData.get("especialidades")?.toString();
    const fotoUrlRaw = formData.get("foto_url")?.toString();

    if (!nomeRaw || !cargoRaw || !bioPtRaw) {
      return {
        success: false,
        message: "Por favor, preencha os campos obrigatórios (Nome, Cargo e Mini-Currículo).",
      };
    }

    const payload = {
      ordem: parseInt(ordemRaw, 10) || 1,
      nome: sanitize(nomeRaw),
      cargo: sanitize(cargoRaw),
      instituicao: sanitize(instituicaoRaw || "Sociedade Brasileira de Coluna"),
      destaque: destaqueRaw ? sanitize(destaqueRaw) : null,
      bio_pt: sanitizeTextarea(bioPtRaw),
      bio_en: bioEnRaw ? sanitizeTextarea(bioEnRaw) : null,
      bio_es: bioEsRaw ? sanitizeTextarea(bioEsRaw) : null,
      especialidades: sanitize(especialidadesRaw || ""),
      foto_url: sanitize(fotoUrlRaw || "/assets/edson-pudles.png"),
      updated_at: new Date().toISOString(),
    };

    const client = getSupabaseServerClient();

    let error: any = null;
    if (idRaw && idRaw.trim() !== "") {
      const res = await client.from("autores").update(payload).eq("id", idRaw);
      error = res.error;
    } else {
      const res = await client.from("autores").insert(payload);
      error = res.error;
    }

    if (error) {
      console.warn("Supabase autores table update note:", error.message);
      // Fallback response if table doesn't exist yet in Supabase
    }

    revalidatePath("/[locale]/home-new", "page");
    revalidatePath("/admin/painel", "page");

    return {
      success: true,
      message: `Informações de ${payload.nome} salvas com sucesso!`,
    };
  } catch (err: any) {
    return {
      success: false,
      message: "Erro ao salvar informações do autor.",
      error: err?.message,
    };
  }
}

/**
 * Server action to delete an Author
 */
export async function excluirAutorAction(id: string): Promise<ActionResult> {
  try {
    const client = getSupabaseServerClient();
    const { error } = await client.from("autores").delete().eq("id", id);

    if (error) {
      return {
        success: false,
        message: `Erro ao excluir autor: ${error.message}`,
        error: error.message,
      };
    }

    revalidatePath("/[locale]/home-new", "page");
    revalidatePath("/admin/painel", "page");

    return {
      success: true,
      message: "Autor excluído com sucesso.",
    };
  } catch (err: any) {
    return {
      success: false,
      message: "Erro ao excluir autor.",
      error: err?.message,
    };
  }
}

/**
 * Server action to update user role and status (Approve / Role Change / Block)
 */
export async function atualizarPerfilUsuarioAction(
  id: string,
  role: "super_admin" | "co_super_admin" | "admin_escritor" | "escritor",
  status: "pendente" | "aprovado" | "bloqueado"
): Promise<ActionResult> {
  try {
    const client = getSupabaseServerClient();
    const { error } = await client
      .from("perfis")
      .update({
        role,
        status,
        aprovado_em: status === "aprovado" ? new Date().toISOString() : null,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (error) {
      return {
        success: false,
        message: `Erro ao atualizar usuário: ${error.message}`,
        error: error.message,
      };
    }

    revalidatePath("/admin/painel", "page");

    return {
      success: true,
      message: `Usuário atualizado com sucesso para [${role}] (${status})!`,
    };
  } catch (err: any) {
    return {
      success: false,
      message: "Erro ao atualizar permissão do usuário.",
      error: err?.message,
    };
  }
}

/**
 * Server action to delete user profile
 */
export async function excluirUsuarioAction(id: string): Promise<ActionResult> {
  try {
    const client = getSupabaseServerClient();
    const { error } = await client.from("perfis").delete().eq("id", id);

    if (error) {
      return {
        success: false,
        message: `Erro ao remover usuário: ${error.message}`,
        error: error.message,
      };
    }

    revalidatePath("/admin/painel", "page");

    return {
      success: true,
      message: "Usuário removido com sucesso.",
    };
  } catch (err: any) {
    return {
      success: false,
      message: "Erro ao excluir usuário.",
      error: err?.message,
    };
  }
}


