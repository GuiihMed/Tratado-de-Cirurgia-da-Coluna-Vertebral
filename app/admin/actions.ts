"use server";

import { revalidatePath } from "next/cache";
import { getSupabaseServerClient } from "@/lib/supabase/server";

// Helper for XSS sanitization
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

export interface ActionResult {
  success: boolean;
  message: string;
  error?: string;
}

/**
 * Server action to insert or update a chapter in Supabase
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
    revalidatePath("/admin/painel", "page");

    return {
      success: true,
      message: `Capítulo ${numero} ("${titulo_pt}") salvo com sucesso no banco de dados!`,
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
