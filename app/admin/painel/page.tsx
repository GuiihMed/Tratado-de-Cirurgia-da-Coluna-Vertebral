"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase, isSupabaseConfigured } from "@/lib/supabase/client";
import { Capitulo } from "@/lib/types";
import { SECOES, INITIAL_CHAPTERS } from "@/lib/data/sections-and-chapters";
import { cadastrarCapituloAction, excluirCapituloAction } from "../actions";

export default function AdminPainelPage() {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  // Form states
  const [secaoId, setSecaoId] = useState("1");
  const [numero, setNumero] = useState("");
  const [tituloPt, setTituloPt] = useState("");
  const [tituloEn, setTituloEn] = useState("");
  const [tituloEs, setTituloEs] = useState("");
  const [autores, setAutores] = useState("");
  const [resumoPt, setResumoPt] = useState("");
  const [conteudoPt, setConteudoPt] = useState("");
  const [referencias, setReferencias] = useState("");
  const [status, setStatus] = useState("publicado");

  const [feedback, setFeedback] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [isPending, startTransition] = useTransition();

  // Chapters listing
  const [chapters, setChapters] = useState<Capitulo[]>([]);
  const [filterSecao, setFilterSecao] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loadingList, setLoadingList] = useState(false);

  // 1. Check active session on mount
  useEffect(() => {
    async function checkSession() {
      try {
        if (isSupabaseConfigured()) {
          const { data } = await supabase.auth.getSession();
          if (!data.session) {
            router.push("/admin/login");
            return;
          }
          setUserEmail(data.session.user.email || "autor@sbc.med.br");
        } else {
          // Local fallback check
          const localSession = localStorage.getItem("sbc_admin_session");
          if (!localSession) {
            router.push("/admin/login");
            return;
          }
          const parsed = JSON.parse(localSession);
          setUserEmail(parsed.email || "autor@sbc.med.br");
        }
        setCheckingAuth(false);
      } catch (err) {
        router.push("/admin/login");
      }
    }

    checkSession();
  }, [router]);

  // 2. Fetch chapters for the table
  const fetchChapters = async () => {
    setLoadingList(true);
    try {
      if (isSupabaseConfigured()) {
        const { data, error } = await supabase
          .from("capitulos")
          .select("*")
          .order("numero", { ascending: true });

        if (!error && data && data.length > 0) {
          setChapters(data as Capitulo[]);
          setLoadingList(false);
          return;
        }
      }
      // Fallback
      setChapters(INITIAL_CHAPTERS);
    } catch (e) {
      setChapters(INITIAL_CHAPTERS);
    } finally {
      setLoadingList(false);
    }
  };

  useEffect(() => {
    if (!checkingAuth) {
      fetchChapters();
    }
  }, [checkingAuth]);

  // Handle Logout
  const handleLogout = async () => {
    if (isSupabaseConfigured()) {
      await supabase.auth.signOut();
    }
    localStorage.removeItem("sbc_admin_session");
    router.push("/admin/login");
  };

  // Load a chapter into the form for editing
  const handleEditChapter = (cap: Capitulo) => {
    setSecaoId(cap.secao_id.toString());
    setNumero(cap.numero.toString());
    setTituloPt(cap.titulo_pt || "");
    setTituloEn(cap.titulo_en || "");
    setTituloEs(cap.titulo_es || "");
    setAutores(cap.autores || "");
    setResumoPt(cap.resumo_pt || "");
    setConteudoPt(cap.conteudo_pt || "");
    setReferencias(cap.referencias || "");
    setStatus(cap.status || "publicado");

    window.scrollTo({ top: 120, behavior: "smooth" });
    setFeedback({
      type: "success",
      message: `Capítulo ${cap.numero} carregado para edição. Altere os campos e clique em Salvar.`,
    });
  };

  // Clear form
  const handleClearForm = () => {
    setNumero("");
    setTituloPt("");
    setTituloEn("");
    setTituloEs("");
    setAutores("");
    setResumoPt("");
    setConteudoPt("");
    setReferencias("");
    setStatus("publicado");
    setFeedback({ type: null, message: "" });
  };

  // Insert Standard Scientific Template
  const handleInsertTemplate = () => {
    if (!resumoPt) {
      setResumoPt(
        "Este capítulo aborda os fundamentos anátomo-cirúrgicos, princípios biomecânicos essenciais e o processo de tomada de decisão clínica na abordagem dos pacientes com afecções vertebrais. Destacam-se as indicações precisas, armadilhas diagnósticas e estratégias para prevenção de complicações perioperatórias."
      );
    }
    if (!conteudoPt) {
      setConteudoPt(
        `## 1. Introdução e Contexto Clínico\nA cirurgia da coluna vertebral passou por profundas transformações conceituais e tecnológicas nas últimas décadas. O domínio das bases anatômicas e dos parâmetros espinopélvicos é o pilar indispensável para o sucesso dos procedimentos reconstrutivos e descompressivos.\n\n## 2. Anatomia Cirúrgica Aplicada e Vias de Acesso\nO planejamento pré-operatório criterioso requer o conhecimento milimétrico das relações entre os elementos ósseos, estruturas neurais (saco dural, raízes espinhais) e vasculares adjacentes. A preservação dos estabilizadores musculoligamentares posteriores contribui diretamente para a redução da dor residual e prevenção da doença do nível adjacente.\n\n## 3. Avaliação Radiográfica e Parâmetros Chave\n- Alinhamento no plano sagital e coronal\n- Avaliação tomográfica da densidade óssea e integridade dos pedículos\n- Ressonância magnética para graduação da estenose de canal e compressão foraminal\n\n## 4. Técnica Cirúrgica Passo a Passo\n1. Posicionamento adequado do paciente em mesa radiotransparente com alívio da pressão abdominal.\n2. Localização fluoroscópica precisa do nível operatório.\n3. Descompressão microcirúrgica cuidadosa sob magnificação e controle hemostático rigoroso.\n4. Instrumentação guiada por marcos anatômicos ou navegação intraoperatória.\n\n## 5. Cuidados Pós-Operatórios e Reabilitação\nMobilização precoce assistida, analgesia multimodal preemptiva e protocolo de seguimento radiográfico com 30 dias, 3 meses, 6 meses e 1 ano pós-operatório.`
      );
    }
    if (!referencias) {
      setReferencias(
        `1. Sociedade Brasileira de Coluna (SBC). Diretrizes Clínicas em Cirurgia da Coluna. 2026.\n2. Bridwell KH, et al. The Textbook of Spinal Surgery. 4th ed. Wolters Kluwer, 2020.\n3. Schwab F, et al. Sagittal parameters in spinal deformity: radiographic assessment and clinical relevance. Spine, 2012.`
      );
    }
    setFeedback({
      type: "success",
      message: "Modelo de texto científico inserido com sucesso nos campos de Resumo, Conteúdo e Referências!",
    });
  };

  // Submit form handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeedback({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const res = await cadastrarCapituloAction(null, formData);
      if (res.success) {
        setFeedback({ type: "success", message: res.message });
        await fetchChapters();
      } else {
        setFeedback({ type: "error", message: res.message });
      }
    });
  };

  // Handle Delete
  const handleDelete = async (num: number, title: string) => {
    const confirm = window.confirm(
      `Tem certeza que deseja excluir o Capítulo ${num}: "${title}"?`
    );
    if (!confirm) return;

    const res = await excluirCapituloAction(num);
    if (res.success) {
      setFeedback({ type: "success", message: res.message });
      await fetchChapters();
    } else {
      setFeedback({ type: "error", message: res.message });
    }
  };

  // Filtered listing
  const displayedChapters = chapters.filter((c) => {
    const matchesSecao =
      filterSecao === "all" || c.secao_id.toString() === filterSecao;
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !q ||
      c.numero.toString().includes(q) ||
      c.titulo_pt.toLowerCase().includes(q) ||
      (c.autores && c.autores.toLowerCase().includes(q)) ||
      (c.titulo_en && c.titulo_en.toLowerCase().includes(q));

    return matchesSecao && matchesQuery;
  });

  if (checkingAuth) {
    return (
      <div style={{ display: "grid", placeItems: "center", minHeight: "100vh", background: "#f8fafc" }}>
        <p style={{ color: "#475569", fontWeight: 600 }}>Verificando credenciais de acesso...</p>
      </div>
    );
  }

  return (
    <div style={{ background: "#f1f5f9", minHeight: "100vh", paddingBottom: "80px" }}>
      {/* Top Navigation Bar */}
      <header
        style={{
          background: "#001a3d",
          color: "#fff",
          padding: "16px 24px",
          borderBottom: "3px solid #f52238",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
        }}
      >
        <div
          style={{
            maxWidth: 1300,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: "#f52238",
                display: "grid",
                placeItems: "center",
                fontWeight: 800,
                fontSize: 18,
              }}
            >
              SBC
            </span>
            <div>
              <h1 style={{ fontSize: 18, fontWeight: 700, margin: 0, letterSpacing: "-0.01em" }}>
                Portal Editorial dos Autores
              </h1>
              <span style={{ fontSize: 12, color: "#94a3b8" }}>
                Gestão e Publicação de Capítulos • Tratado de Cirurgia da Coluna Vertebral
              </span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontSize: 13, color: "#cbd5e1" }}>
              👤 Conectado como: <strong>{userEmail}</strong>
            </span>
            <Link
              href="/pt/indice-new"
              target="_blank"
              style={{
                fontSize: 13,
                color: "#67e8f9",
                textDecoration: "none",
                padding: "6px 12px",
                borderRadius: 6,
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
              }}
            >
              Ver Índice Público ↗
            </Link>
            <button
              onClick={handleLogout}
              style={{
                padding: "6px 14px",
                borderRadius: 6,
                border: "none",
                background: "#ef4444",
                color: "#fff",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 1300, margin: "36px auto", padding: "0 20px" }}>
        {/* ================= EDITOR DE CONTEÚDO DO CAPÍTULO ================= */}
        <section
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "32px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 10px 30px rgba(0, 30, 80, 0.04)",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: 24,
              borderBottom: "1px solid #f1f5f9",
              paddingBottom: 16,
            }}
          >
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "4px 10px", borderRadius: 6, background: "rgba(245, 34, 56, 0.1)", color: "#f52238", fontSize: 12, fontWeight: 700, textTransform: "uppercase", marginBottom: 6 }}>
                ✍️ Editor de Capítulos &amp; Publicação
              </div>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: "#001a3d", margin: 0 }}>
                {numero ? `Editando Capítulo ${numero}` : "Novo Capítulo / Artigo"}
              </h2>
            </div>

            <div style={{ display: "flex", gap: 10 }}>
              <button
                type="button"
                onClick={handleInsertTemplate}
                style={{
                  padding: "8px 14px",
                  borderRadius: 8,
                  border: "1px solid #cbd5e1",
                  background: "#f8fafc",
                  color: "#334155",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                📄 Inserir Modelo Científico
              </button>
              {numero && (
                <Link
                  href={`/pt/capitulo/${numero}`}
                  target="_blank"
                  style={{
                    padding: "8px 14px",
                    borderRadius: 8,
                    border: "1px solid #93c5fd",
                    background: "#eff6ff",
                    color: "#1d4ed8",
                    fontSize: 13,
                    fontWeight: 600,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  Visualizar Leitor ↗
                </Link>
              )}
              <button
                type="button"
                onClick={handleClearForm}
                style={{
                  padding: "8px 14px",
                  borderRadius: 8,
                  border: "1px solid #e2e8f0",
                  background: "#fff",
                  color: "#64748b",
                  fontSize: 13,
                  cursor: "pointer",
                }}
              >
                Limpar Campos
              </button>
            </div>
          </div>

          {/* Feedback Alert */}
          {feedback.message && (
            <div
              style={{
                padding: "14px 18px",
                borderRadius: 8,
                marginBottom: 24,
                fontSize: 14,
                fontWeight: 600,
                background: feedback.type === "success" ? "#dcfce7" : "#fee2e2",
                color: feedback.type === "success" ? "#166534" : "#991b1b",
                border: `1px solid ${feedback.type === "success" ? "#86efac" : "#fca5a5"}`,
              }}
            >
              {feedback.message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Linha 1: Seção, Número, Status e Autores */}
            <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 2fr", gap: 16, marginBottom: 18 }}>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                  Seção Temática *
                </label>
                <select
                  name="secao_id"
                  value={secaoId}
                  onChange={(e) => setSecaoId(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: "1px solid #cbd5e1",
                    fontSize: 14,
                    background: "#fff",
                  }}
                >
                  {SECOES.map((s) => (
                    <option key={s.id} value={s.id}>
                      Seção {s.numero} – {s.titulo_pt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                  Número do Capítulo *
                </label>
                <input
                  type="number"
                  name="numero"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                  placeholder="Ex: 8"
                  min="1"
                  required
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: "1px solid #cbd5e1",
                    fontSize: 14,
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                  Status de Publicação
                </label>
                <select
                  name="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: "1px solid #cbd5e1",
                    fontSize: 14,
                    background: "#fff",
                  }}
                >
                  <option value="publicado">🟢 Publicado</option>
                  <option value="rascunho">🟡 Rascunho</option>
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                  Autores e Colaboradores
                </label>
                <input
                  type="text"
                  name="autores"
                  value={autores}
                  onChange={(e) => setAutores(e.target.value)}
                  placeholder="Ex: Dr. Marcelo Risso • Dr. Paulo Cavali"
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: "1px solid #cbd5e1",
                    fontSize: 14,
                  }}
                />
              </div>
            </div>

            {/* Linha 2: Títulos (PT, EN, ES) */}
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 16, marginBottom: 18 }}>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                  Título em Português (PT) *
                </label>
                <input
                  type="text"
                  name="titulo_pt"
                  value={tituloPt}
                  onChange={(e) => setTituloPt(e.target.value)}
                  placeholder="Ex: Coluna Vertebral no Plano Sagital"
                  required
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: "1px solid #cbd5e1",
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                  Título em Inglês (EN)
                </label>
                <input
                  type="text"
                  name="titulo_en"
                  value={tituloEn}
                  onChange={(e) => setTituloEn(e.target.value)}
                  placeholder="Ex: Spine in the Sagittal Plane"
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: "1px solid #cbd5e1",
                    fontSize: 14,
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                  Título em Espanhol (ES)
                </label>
                <input
                  type="text"
                  name="titulo_es"
                  value={tituloEs}
                  onChange={(e) => setTituloEs(e.target.value)}
                  placeholder="Ex: Columna Vertebral en el Plano Sagital"
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: "1px solid #cbd5e1",
                    fontSize: 14,
                  }}
                />
              </div>
            </div>

            {/* Linha 3: Resumo Executivo / Abstract */}
            <div style={{ marginBottom: 18 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                Resumo Executivo / Abstract do Capítulo
              </label>
              <textarea
                name="resumo_pt"
                value={resumoPt}
                onChange={(e) => setResumoPt(e.target.value)}
                placeholder="Breve resumo com objetivos do capítulo, parâmetros anatômicos e principais mensagens clínicas..."
                rows={3}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: 8,
                  border: "1px solid #cbd5e1",
                  fontSize: 14,
                  lineHeight: 1.5,
                  fontFamily: "inherit",
                }}
              />
            </div>

            {/* Linha 4: Texto Integral do Artigo / Capítulo */}
            <div style={{ marginBottom: 18 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <label style={{ fontSize: 13, fontWeight: 700, color: "#334155" }}>
                  Conteúdo Completo do Capítulo (Texto, Seções e Subtítulos)
                </label>
                <span style={{ fontSize: 12, color: "#64748b" }}>
                  Suporta títulos (# ou ##), listas (-) e quebras de parágrafo
                </span>
              </div>
              <textarea
                name="conteudo_pt"
                value={conteudoPt}
                onChange={(e) => setConteudoPt(e.target.value)}
                placeholder="Escreva ou cole aqui o texto integral do capítulo..."
                rows={12}
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: 8,
                  border: "1px solid #cbd5e1",
                  fontSize: 14,
                  lineHeight: 1.6,
                  fontFamily: "monospace, sans-serif",
                }}
              />
            </div>

            {/* Linha 5: Referências Bibliográficas */}
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                Referências Bibliográficas
              </label>
              <textarea
                name="referencias"
                value={referencias}
                onChange={(e) => setReferencias(e.target.value)}
                placeholder="1. Autor AB, et al. Título do artigo. Revista, 2026.&#10;2. Livro de Referência SBC..."
                rows={3}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: 8,
                  border: "1px solid #cbd5e1",
                  fontSize: 13,
                  lineHeight: 1.5,
                  fontFamily: "inherit",
                }}
              />
            </div>

            {/* Botão de Envio */}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 14 }}>
              <button
                type="submit"
                disabled={isPending}
                style={{
                  padding: "12px 32px",
                  borderRadius: 8,
                  background: "linear-gradient(135deg, #f52238 0%, #d01428 100%)",
                  color: "#fff",
                  fontSize: 15,
                  fontWeight: 700,
                  border: "none",
                  cursor: isPending ? "not-allowed" : "pointer",
                  boxShadow: "0 4px 14px rgba(245, 34, 56, 0.35)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                {isPending ? "Salvando no Banco..." : "💾 Salvar e Publicar Capítulo"}
              </button>
            </div>
          </form>
        </section>

        {/* ================= LISTA E GESTÃO DOS 109 CAPÍTULOS ================= */}
        <section
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "32px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 10px 30px rgba(0, 30, 80, 0.04)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 24,
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: "#001a3d", margin: "0 0 4px" }}>
                Acervo de Capítulos ({chapters.length})
              </h2>
              <span style={{ fontSize: 13, color: "#64748b" }}>
                Filtre por seção ou pesquise para editar o conteúdo de qualquer capítulo
              </span>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              {/* Filtro por Seção */}
              <select
                value={filterSecao}
                onChange={(e) => setFilterSecao(e.target.value)}
                style={{
                  padding: "8px 12px",
                  borderRadius: 8,
                  border: "1px solid #cbd5e1",
                  fontSize: 13,
                  background: "#fff",
                }}
              >
                <option value="all">Todas as Seções (1–10)</option>
                {SECOES.map((s) => (
                  <option key={s.id} value={s.id.toString()}>
                    Seção {s.numero} – {s.titulo_pt}
                  </option>
                ))}
              </select>

              {/* Busca */}
              <input
                type="text"
                placeholder="Buscar por número, título ou autor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  padding: "8px 14px",
                  borderRadius: 8,
                  border: "1px solid #cbd5e1",
                  fontSize: 13,
                  width: 260,
                }}
              />
            </div>
          </div>

          {/* Tabela de Capítulos */}
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "#f8fafc", borderBottom: "2px solid #e2e8f0", color: "#475569" }}>
                  <th style={{ padding: "12px 14px", width: 60 }}>#</th>
                  <th style={{ padding: "12px 14px" }}>Título do Capítulo</th>
                  <th style={{ padding: "12px 14px", width: 180 }}>Seção</th>
                  <th style={{ padding: "12px 14px", width: 200 }}>Autores</th>
                  <th style={{ padding: "12px 14px", width: 100 }}>Status</th>
                  <th style={{ padding: "12px 14px", width: 180, textAlign: "right" }}>Ações</th>
                </tr>
              </thead>
              <tbody>
                {loadingList ? (
                  <tr>
                    <td colSpan={6} style={{ padding: 30, textAlign: "center", color: "#64748b" }}>
                      Carregando catálogo de capítulos...
                    </td>
                  </tr>
                ) : displayedChapters.length === 0 ? (
                  <tr>
                    <td colSpan={6} style={{ padding: 30, textAlign: "center", color: "#64748b" }}>
                      Nenhum capítulo encontrado para o filtro selecionado.
                    </td>
                  </tr>
                ) : (
                  displayedChapters.map((c) => {
                    const sec = SECOES.find((s) => s.id === c.secao_id);
                    return (
                      <tr
                        key={c.numero}
                        style={{ borderBottom: "1px solid #f1f5f9", transition: "background 0.15s ease" }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "#f8fafc")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                      >
                        <td style={{ padding: "12px 14px", fontWeight: 800, color: "#f52238" }}>
                          {c.numero}
                        </td>
                        <td style={{ padding: "12px 14px" }}>
                          <strong style={{ color: "#0f172a" }}>{c.titulo_pt}</strong>
                          {c.titulo_en && (
                            <div style={{ fontSize: 12, color: "#64748b", fontStyle: "italic" }}>
                              EN: {c.titulo_en}
                            </div>
                          )}
                        </td>
                        <td style={{ padding: "12px 14px", color: "#334155", fontSize: 13 }}>
                          Seção {c.secao_id}: {sec?.titulo_pt || `Seção ${c.secao_id}`}
                        </td>
                        <td style={{ padding: "12px 14px", color: "#64748b", fontSize: 13 }}>
                          {c.autores || "Corpo Editorial SBC"}
                        </td>
                        <td style={{ padding: "12px 14px" }}>
                          <span
                            style={{
                              padding: "3px 8px",
                              borderRadius: 12,
                              fontSize: 11,
                              fontWeight: 700,
                              background: c.status === "rascunho" ? "#fef3c7" : "#dcfce7",
                              color: c.status === "rascunho" ? "#92400e" : "#15803d",
                            }}
                          >
                            {c.status === "rascunho" ? "Rascunho" : "Publicado"}
                          </span>
                        </td>
                        <td style={{ padding: "12px 14px", textAlign: "right" }}>
                          <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
                            <button
                              type="button"
                              onClick={() => handleEditChapter(c)}
                              style={{
                                padding: "4px 10px",
                                borderRadius: 6,
                                border: "1px solid #cbd5e1",
                                background: "#fff",
                                color: "#0f172a",
                                fontSize: 12,
                                fontWeight: 600,
                                cursor: "pointer",
                              }}
                            >
                              ✏️ Editar
                            </button>
                            <Link
                              href={`/pt/capitulo/${c.numero}`}
                              target="_blank"
                              style={{
                                padding: "4px 10px",
                                borderRadius: 6,
                                border: "1px solid #93c5fd",
                                background: "#eff6ff",
                                color: "#1d4ed8",
                                fontSize: 12,
                                fontWeight: 600,
                                textDecoration: "none",
                              }}
                            >
                              👁 Ver
                            </Link>
                            <button
                              type="button"
                              onClick={() => handleDelete(c.numero, c.titulo_pt)}
                              style={{
                                padding: "4px 8px",
                                borderRadius: 6,
                                border: "1px solid #fecaca",
                                background: "#fff1f2",
                                color: "#b91c1c",
                                fontSize: 12,
                                cursor: "pointer",
                              }}
                            >
                              🗑
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
