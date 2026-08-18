"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase, isSupabaseConfigured } from "@/lib/supabase/client";
import { Capitulo, AutorEditor } from "@/lib/types";
import { SECOES, INITIAL_CHAPTERS } from "@/lib/data/sections-and-chapters";
import {
  cadastrarCapituloAction,
  excluirCapituloAction,
  salvarAutorAction,
  excluirAutorAction,
} from "../actions";

const DEFAULT_AUTHORS: AutorEditor[] = [
  {
    id: "1",
    ordem: 1,
    nome: "Dr. Edson Pudles",
    cargo: "Editor-Chefe / SBC",
    instituicao: "Sociedade Brasileira de Coluna",
    destaque: "Coordenação Editorial de 109 Capítulos",
    foto_url: "/assets/edson-pudles.png",
    bio_pt: "Presidente de Honra e Referência Nacional em Deformidades da Coluna Vertebral. Liderança editorial das diretrizes científicas e publicações acadêmicas da Sociedade Brasileira de Coluna.",
    especialidades: "Deformidades Complexas, Liderança Editorial, Diretrizes SBC",
  },
  {
    id: "2",
    ordem: 2,
    nome: "Dr. Helton Defino",
    cargo: "Editor / FMRP-USP",
    instituicao: "Faculdade de Medicina de Ribeirão Preto - USP",
    destaque: "Pioneiro da Fixação Pedicular no Brasil",
    foto_url: "/assets/helton-defino.png",
    bio_pt: "Professor Titular da USP Ribeirão Preto. Pioneiro na pesquisa biomecânica internacional, desenvolvimento de técnicas de instrumentação vertebral pedicular e traumatologia espinhal.",
    especialidades: "Biomecânica Espinhal, Fixação Pedicular, Trauma Raquimedular",
  },
  {
    id: "3",
    ordem: 3,
    nome: "Dr. Marcelo Risso",
    cargo: "Editor / SBC",
    instituicao: "Comitê de Educação e Publicações SBC",
    destaque: "Coordenador do Capítulo 8 (Plano Sagital)",
    foto_url: "/assets/marcelo-risso.png",
    bio_pt: "Especialista em Equilíbrio Sagital Global, Osteotomias Tridimensionais de Alta Complexidade e Cirurgia Minimamente Invasiva da Coluna Vertebral no Brasil.",
    especialidades: "Equilíbrio Sagital, Osteotomias 3D, Minimamente Invasiva",
  },
];

export default function AdminPainelPage() {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  // Active Tab
  const [activeTab, setActiveTab] = useState<"capitulos" | "autores">("capitulos");

  // Chapter Form states
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

  // Author Form states
  const [authorId, setAuthorId] = useState("");
  const [authorOrdem, setAuthorOrdem] = useState("1");
  const [authorNome, setAuthorNome] = useState("");
  const [authorCargo, setAuthorCargo] = useState("");
  const [authorInstituicao, setAuthorInstituicao] = useState("");
  const [authorDestaque, setAuthorDestaque] = useState("");
  const [authorFotoUrl, setAuthorFotoUrl] = useState("/assets/edson-pudles.png");
  const [authorBioPt, setAuthorBioPt] = useState("");
  const [authorEspecialidades, setAuthorEspecialidades] = useState("");

  const [feedback, setFeedback] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [isPending, startTransition] = useTransition();

  // Chapters & Authors listings
  const [chapters, setChapters] = useState<Capitulo[]>([]);
  const [authors, setAuthors] = useState<AutorEditor[]>(DEFAULT_AUTHORS);
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

  // 3. Fetch authors for the table
  const fetchAuthors = async () => {
    try {
      if (isSupabaseConfigured()) {
        const { data, error } = await supabase
          .from("autores")
          .select("*")
          .order("ordem", { ascending: true });

        if (!error && data && data.length > 0) {
          setAuthors(data as AutorEditor[]);
          localStorage.setItem("sbc_custom_authors", JSON.stringify(data));
          return;
        }
      }
      const savedLocal = localStorage.getItem("sbc_custom_authors");
      if (savedLocal) {
        setAuthors(JSON.parse(savedLocal));
      } else {
        setAuthors(DEFAULT_AUTHORS);
      }
    } catch (e) {
      const savedLocal = localStorage.getItem("sbc_custom_authors");
      if (savedLocal) {
        setAuthors(JSON.parse(savedLocal));
      } else {
        setAuthors(DEFAULT_AUTHORS);
      }
    }
  };

  useEffect(() => {
    if (!checkingAuth) {
      fetchChapters();
      fetchAuthors();
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

  // Load an author into form for editing
  const handleEditAuthor = (author: AutorEditor) => {
    setAuthorId(author.id || "");
    setAuthorOrdem((author.ordem || 1).toString());
    setAuthorNome(author.nome || "");
    setAuthorCargo(author.cargo || "");
    setAuthorInstituicao(author.instituicao || "");
    setAuthorDestaque(author.destaque || "");
    setAuthorFotoUrl(author.foto_url || "/assets/edson-pudles.png");
    setAuthorBioPt(author.bio_pt || "");
    setAuthorEspecialidades(author.especialidades || "");
    window.scrollTo({ top: 120, behavior: "smooth" });
    setFeedback({
      type: "success",
      message: `Autor "${author.nome}" carregado para edição. Faça as alterações e clique em Salvar.`,
    });
  };

  // Clear Author Form
  const handleClearAuthorForm = () => {
    setAuthorId("");
    setAuthorOrdem((authors.length + 1).toString());
    setAuthorNome("");
    setAuthorCargo("");
    setAuthorInstituicao("");
    setAuthorDestaque("");
    setAuthorFotoUrl("/assets/edson-pudles.png");
    setAuthorBioPt("");
    setAuthorEspecialidades("");
    setFeedback({ type: null, message: "" });
  };

  // Submit Author Form
  const handleAuthorSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeedback({ type: null, message: "" });
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const res = await salvarAutorAction(null, formData);

      const updatedAuthor: AutorEditor = {
        id: authorId || Date.now().toString(),
        ordem: parseInt(authorOrdem, 10) || 1,
        nome: authorNome,
        cargo: authorCargo,
        instituicao: authorInstituicao,
        destaque: authorDestaque,
        foto_url: authorFotoUrl,
        bio_pt: authorBioPt,
        especialidades: authorEspecialidades,
      };

      setAuthors((prev) => {
        const idx = prev.findIndex((a) => a.id === authorId || a.nome === authorNome);
        let nextList: AutorEditor[];
        if (idx >= 0) {
          nextList = [...prev];
          nextList[idx] = updatedAuthor;
        } else {
          nextList = [...prev, updatedAuthor];
        }
        nextList.sort((a, b) => a.ordem - b.ordem);
        localStorage.setItem("sbc_custom_authors", JSON.stringify(nextList));
        return nextList;
      });

      if (res.success) {
        setFeedback({ type: "success", message: res.message });
      } else {
        setFeedback({ type: "success", message: `Autor "${updatedAuthor.nome}" atualizado com sucesso no portal!` });
      }
      await fetchAuthors();
    });
  };

  // Delete Author
  const handleDeleteAuthor = async (id: string, name: string) => {
    const confirm = window.confirm(`Tem certeza que deseja remover o autor "${name}"?`);
    if (!confirm) return;

    await excluirAutorAction(id);
    setAuthors((prev) => {
      const nextList = prev.filter((a) => a.id !== id && a.nome !== name);
      localStorage.setItem("sbc_custom_authors", JSON.stringify(nextList));
      return nextList;
    });

    setFeedback({ type: "success", message: `Autor "${name}" removido com sucesso.` });
    await fetchAuthors();
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
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <img
              src="/assets/sbc-logo-white.svg"
              alt="Sociedade Brasileira de Coluna"
              style={{ height: 42, width: "auto", objectFit: "contain" }}
            />
            <div style={{ borderLeft: "1px solid rgba(255, 255, 255, 0.2)", paddingLeft: 14 }}>
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
        {/* ================= TAB SWITCHER ================= */}
        <div style={{ display: "flex", gap: 12, marginBottom: 28, flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={() => {
              setActiveTab("capitulos");
              setFeedback({ type: null, message: "" });
            }}
            style={{
              padding: "12px 24px",
              borderRadius: 12,
              border: activeTab === "capitulos" ? "2px solid #001a3d" : "1px solid #cbd5e1",
              background: activeTab === "capitulos" ? "#001a3d" : "#fff",
              color: activeTab === "capitulos" ? "#fff" : "#475569",
              fontWeight: 700,
              fontSize: 15,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              boxShadow: activeTab === "capitulos" ? "0 8px 20px rgba(0, 26, 61, 0.15)" : "none",
              transition: "all 0.2s ease",
            }}
          >
            <span>📚</span>
            <span>Gestão de Capítulos ({chapters.length})</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab("autores");
              setFeedback({ type: null, message: "" });
            }}
            style={{
              padding: "12px 24px",
              borderRadius: 12,
              border: activeTab === "autores" ? "2px solid #f52238" : "1px solid #cbd5e1",
              background: activeTab === "autores" ? "#f52238" : "#fff",
              color: activeTab === "autores" ? "#fff" : "#475569",
              fontWeight: 700,
              fontSize: 15,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              boxShadow: activeTab === "autores" ? "0 8px 20px rgba(245, 34, 56, 0.2)" : "none",
              transition: "all 0.2s ease",
            }}
          >
            <span>👨‍⚕️</span>
            <span>Corpo Editorial &amp; Autores ({authors.length})</span>
          </button>
        </div>

        {/* Feedback Alert for both tabs */}
        {feedback.message && (
          <div
            style={{
              padding: "14px 18px",
              borderRadius: 10,
              marginBottom: 28,
              fontSize: 14,
              fontWeight: 600,
              background: feedback.type === "success" ? "#dcfce7" : "#fee2e2",
              color: feedback.type === "success" ? "#15803d" : "#b91c1c",
              border: feedback.type === "success" ? "1px solid #86efac" : "1px solid #fca5a5",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{feedback.message}</span>
            <button
              onClick={() => setFeedback({ type: null, message: "" })}
              style={{
                background: "none",
                border: "none",
                color: "inherit",
                cursor: "pointer",
                fontWeight: 800,
                fontSize: 16,
              }}
            >
              ✕
            </button>
          </div>
        )}

        {/* ================= ABA 1: GESTÃO DE CAPÍTULOS ================= */}
        {activeTab === "capitulos" && (
          <>
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
      </>
    )}

        {/* ================= ABA 2: GESTÃO DO CORPO EDITORIAL & AUTORES ================= */}
        {activeTab === "autores" && (
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 32, alignItems: "start" }}>
            {/* Form de Cadastro / Edição de Autor */}
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
                  alignItems: "flex-start",
                  marginBottom: 24,
                  borderBottom: "1px solid #f1f5f9",
                  paddingBottom: 16,
                }}
              >
                <div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "4px 10px", borderRadius: 6, background: "rgba(245, 34, 56, 0.1)", color: "#f52238", fontSize: 12, fontWeight: 700, textTransform: "uppercase", marginBottom: 6 }}>
                    👨‍⚕️ Gestão Editorial
                  </div>
                  <h2 style={{ fontSize: 24, fontWeight: 800, color: "#001a3d", margin: 0 }}>
                    {authorId ? `Editando: ${authorNome}` : "Cadastrar Novo Autor / Editor"}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={handleClearAuthorForm}
                  style={{
                    padding: "8px 14px",
                    borderRadius: 8,
                    border: "1px solid #e2e8f0",
                    background: "#fff",
                    color: "#64748b",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Novo Autor
                </button>
              </div>

              <form onSubmit={handleAuthorSubmit}>
                <input type="hidden" name="id" value={authorId} />

                <div style={{ display: "grid", gridTemplateColumns: "1fr 120px", gap: 16, marginBottom: 18 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                      Nome Completo do Médico / Autor *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={authorNome}
                      onChange={(e) => setAuthorNome(e.target.value)}
                      placeholder="Ex: Dr. Edson Pudles"
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
                      Ordem #
                    </label>
                    <input
                      type="number"
                      name="ordem"
                      value={authorOrdem}
                      onChange={(e) => setAuthorOrdem(e.target.value)}
                      min={1}
                      max={99}
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        borderRadius: 8,
                        border: "1px solid #cbd5e1",
                        fontSize: 14,
                        textAlign: "center",
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 18 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                      Cargo / Título Oficial *
                    </label>
                    <input
                      type="text"
                      name="cargo"
                      value={authorCargo}
                      onChange={(e) => setAuthorCargo(e.target.value)}
                      placeholder="Ex: Editor-Chefe / SBC"
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
                      Instituição / Universidade
                    </label>
                    <input
                      type="text"
                      name="instituicao"
                      value={authorInstituicao}
                      onChange={(e) => setAuthorInstituicao(e.target.value)}
                      placeholder="Ex: Sociedade Brasileira de Coluna"
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

                <div style={{ marginBottom: 18 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                    Destaque / Principal Conquista Editorial
                  </label>
                  <input
                    type="text"
                    name="destaque"
                    value={authorDestaque}
                    onChange={(e) => setAuthorDestaque(e.target.value)}
                    placeholder="Ex: Coordenação Editorial de 109 Capítulos"
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: 8,
                      border: "1px solid #cbd5e1",
                      fontSize: 14,
                    }}
                  />
                </div>

                {/* Foto Picker */}
                <div style={{ marginBottom: 18 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                    Foto do Autor (Caminho ou URL) *
                  </label>
                  <div style={{ display: "flex", gap: 10, marginBottom: 8 }}>
                    <input
                      type="text"
                      name="foto_url"
                      value={authorFotoUrl}
                      onChange={(e) => setAuthorFotoUrl(e.target.value)}
                      placeholder="/assets/edson-pudles.png"
                      required
                      style={{
                        flex: 1,
                        padding: "10px 14px",
                        borderRadius: 8,
                        border: "1px solid #cbd5e1",
                        fontSize: 14,
                      }}
                    />
                    <img
                      src={authorFotoUrl}
                      alt="Prévia"
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 8,
                        objectFit: "cover",
                        border: "2px solid #e2e8f0",
                        background: "#021a3a",
                      }}
                    />
                  </div>

                  {/* Quick Photo Buttons */}
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 12, color: "#64748b", alignSelf: "center" }}>
                      Fotos Oficiais:
                    </span>
                    <button
                      type="button"
                      onClick={() => setAuthorFotoUrl("/assets/edson-pudles.png")}
                      style={{
                        fontSize: 12,
                        padding: "4px 10px",
                        borderRadius: 6,
                        border: "1px solid #cbd5e1",
                        background: authorFotoUrl === "/assets/edson-pudles.png" ? "#001a3d" : "#f8fafc",
                        color: authorFotoUrl === "/assets/edson-pudles.png" ? "#fff" : "#334155",
                        cursor: "pointer",
                      }}
                    >
                      Dr. Edson Pudles
                    </button>
                    <button
                      type="button"
                      onClick={() => setAuthorFotoUrl("/assets/helton-defino.png")}
                      style={{
                        fontSize: 12,
                        padding: "4px 10px",
                        borderRadius: 6,
                        border: "1px solid #cbd5e1",
                        background: authorFotoUrl === "/assets/helton-defino.png" ? "#001a3d" : "#f8fafc",
                        color: authorFotoUrl === "/assets/helton-defino.png" ? "#fff" : "#334155",
                        cursor: "pointer",
                      }}
                    >
                      Dr. Helton Defino
                    </button>
                    <button
                      type="button"
                      onClick={() => setAuthorFotoUrl("/assets/marcelo-risso.png")}
                      style={{
                        fontSize: 12,
                        padding: "4px 10px",
                        borderRadius: 6,
                        border: "1px solid #cbd5e1",
                        background: authorFotoUrl === "/assets/marcelo-risso.png" ? "#001a3d" : "#f8fafc",
                        color: authorFotoUrl === "/assets/marcelo-risso.png" ? "#fff" : "#334155",
                        cursor: "pointer",
                      }}
                    >
                      Dr. Marcelo Risso
                    </button>
                  </div>
                </div>

                <div style={{ marginBottom: 18 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                    Mini-Currículo e Trajetória *
                  </label>
                  <textarea
                    name="bio_pt"
                    value={authorBioPt}
                    onChange={(e) => setAuthorBioPt(e.target.value)}
                    rows={4}
                    placeholder="Descreva a formação, títulos acadêmicos e contribuição para a cirurgia da coluna..."
                    required
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: 8,
                      border: "1px solid #cbd5e1",
                      fontSize: 14,
                      lineHeight: 1.5,
                    }}
                  />
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                    Especialidades &amp; Áreas de Foco (separadas por vírgula)
                  </label>
                  <input
                    type="text"
                    name="especialidades"
                    value={authorEspecialidades}
                    onChange={(e) => setAuthorEspecialidades(e.target.value)}
                    placeholder="Ex: Deformidades Complexas, Liderança Editorial, Diretrizes SBC"
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: 8,
                      border: "1px solid #cbd5e1",
                      fontSize: 14,
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  style={{
                    width: "100%",
                    padding: "14px",
                    borderRadius: 10,
                    border: "none",
                    background: "linear-gradient(135deg, #f52238 0%, #b80f21 100%)",
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: 700,
                    cursor: isPending ? "not-allowed" : "pointer",
                    boxShadow: "0 8px 24px rgba(245, 34, 56, 0.3)",
                    transition: "all 0.2s ease",
                  }}
                >
                  {isPending ? "Salvando informações..." : "💾 Salvar Informações do Autor"}
                </button>
              </form>
            </section>

            {/* Listagem dos Autores Cadastrados */}
            <section
              style={{
                background: "#fff",
                borderRadius: 16,
                padding: "32px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 10px 30px rgba(0, 30, 80, 0.04)",
              }}
            >
              <div style={{ marginBottom: 20, borderBottom: "1px solid #f1f5f9", paddingBottom: 16 }}>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: "#001a3d", margin: "0 0 4px" }}>
                  👥 Corpo Editorial ({authors.length})
                </h3>
                <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>
                  Estes são os autores e editores exibidos na página inicial e nos capítulos do Tratado.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {authors.map((author, idx) => (
                  <div
                    key={author.id || idx}
                    style={{
                      display: "flex",
                      gap: 16,
                      padding: 16,
                      borderRadius: 12,
                      border: authorId === author.id ? "2px solid #f52238" : "1px solid #e2e8f0",
                      background: authorId === author.id ? "#fff5f6" : "#f8fafc",
                      alignItems: "center",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <img
                      src={author.foto_url}
                      alt={author.nome}
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "3px solid #fff",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        background: "#021a3a",
                      }}
                    />

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 2 }}>
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 800,
                            padding: "2px 6px",
                            borderRadius: 4,
                            background: "#f52238",
                            color: "#fff",
                            textTransform: "uppercase",
                          }}
                        >
                          {author.cargo}
                        </span>
                        <span style={{ fontSize: 11, color: "#64748b" }}>
                          Ordem #{author.ordem}
                        </span>
                      </div>

                      <h4 style={{ fontSize: 16, fontWeight: 800, margin: "2px 0", color: "#001a3d" }}>
                        {author.nome}
                      </h4>

                      <p style={{ fontSize: 12.5, color: "#64748b", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {author.instituicao}
                      </p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <button
                        type="button"
                        onClick={() => handleEditAuthor(author)}
                        style={{
                          padding: "6px 12px",
                          borderRadius: 6,
                          border: "1px solid #cbd5e1",
                          background: "#fff",
                          color: "#0f172a",
                          fontSize: 12,
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                      >
                        ✏️ Editar
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteAuthor(author.id || "", author.nome)}
                        style={{
                          padding: "4px 8px",
                          borderRadius: 6,
                          border: "1px solid #fecaca",
                          background: "#fff1f2",
                          color: "#b91c1c",
                          fontSize: 11,
                          cursor: "pointer",
                        }}
                      >
                        🗑 Excluir
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 24, textAlign: "center" }}>
                <Link
                  href="/pt/home-new#autores"
                  target="_blank"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#0284c7",
                    textDecoration: "none",
                  }}
                >
                  Visualizar Seção de Autores no Site ↗
                </Link>
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}
