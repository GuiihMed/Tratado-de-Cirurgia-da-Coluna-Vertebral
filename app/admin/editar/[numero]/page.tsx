"use client";

import { useEffect, useState, useTransition, useMemo, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { supabase, isSupabaseConfigured } from "@/lib/supabase/client";
import { Capitulo } from "@/lib/types";
import { SECOES, INITIAL_CHAPTERS } from "@/lib/data/sections-and-chapters";
import { cadastrarCapituloAction } from "../../actions";
import {
  BookOpen,
  ArrowLeft,
  Save,
  Eye,
  Sparkles,
  Sun,
  Moon,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Pin,
  Table,
  Image as ImageIcon,
  Edit3,
} from "lucide-react";

export default function ChapterEditPage() {
  const params = useParams();
  const router = useRouter();
  const chapterParam = (params?.numero as string) || "1";
  const isNew = chapterParam === "novo";

  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isPending, startTransition] = useTransition();
  const [feedback, setFeedback] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  });

  // Form State
  const [numero, setNumero] = useState<string>(isNew ? "" : chapterParam);
  const [secaoId, setSecaoId] = useState<string>("1");
  const [status, setStatus] = useState<string>("publicado");
  const [autores, setAutores] = useState<string>("");
  const [tituloPt, setTituloPt] = useState<string>("");
  const [tituloEn, setTituloEn] = useState<string>("");
  const [tituloEs, setTituloEs] = useState<string>("");
  const [resumoPt, setResumoPt] = useState<string>("");
  const [conteudoPt, setConteudoPt] = useState<string>("");
  const [referencias, setReferencias] = useState<string>("");

  // Editor View Mode: "edit" | "preview" | "split"
  const [viewMode, setViewMode] = useState<"edit" | "preview" | "split">("split");
  const [lastSavedTime, setLastSavedTime] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Initialize theme
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("sbc_admin_theme");
      if (savedTheme === "light" || savedTheme === "dark") {
        setTheme(savedTheme);
      }
    } catch (e) {}
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("sbc_admin_theme", next);
    } catch (e) {}
  };

  const isDark = theme === "dark";

  // Load Chapter Data
  useEffect(() => {
    let isMounted = true;

    async function loadChapter() {
      setLoading(true);

      if (isNew) {
        setNumero(String(INITIAL_CHAPTERS.length + 1));
        setSecaoId("1");
        setTituloPt("");
        setAutores("Corpo Editorial SBC");
        setResumoPt("");
        setConteudoPt("");
        setLoading(false);
        return;
      }

      const numInt = parseInt(chapterParam, 10);
      let found: Partial<Capitulo> | undefined;

      // 1. Try LocalStorage
      try {
        const localCustom = localStorage.getItem("sbc_custom_chapters");
        if (localCustom) {
          const parsed = JSON.parse(localCustom) as Capitulo[];
          found = parsed.find((c) => c.numero === numInt);
        }
      } catch (e) {}

      // 2. Try Supabase
      if (!found && isSupabaseConfigured()) {
        try {
          const { data } = await supabase.from("capitulos").select("*").eq("numero", numInt).single();
          if (data) found = data;
        } catch (e) {}
      }

      // 3. Fallback to INITIAL_CHAPTERS
      if (!found) {
        found = INITIAL_CHAPTERS.find((c) => c.numero === numInt);
      }

      if (isMounted && found) {
        setNumero(String(found.numero || chapterParam));
        setSecaoId(String(found.secao_id || "1"));
        setStatus(found.status || "publicado");
        setAutores(found.autores || "Corpo Editorial SBC");
        setTituloPt(found.titulo_pt || "");
        setTituloEn(found.titulo_en || "");
        setTituloEs(found.titulo_es || "");
        setResumoPt(found.resumo_pt || "");
        setConteudoPt(found.conteudo_pt || "");
        setReferencias(found.referencias || "");
      }

      if (isMounted) setLoading(false);
    }

    loadChapter();

    return () => {
      isMounted = false;
    };
  }, [chapterParam, isNew]);

  // Auto-save draft to localStorage
  useEffect(() => {
    if (!numero) return;
    const draftKey = "sbc_chapter_draft_" + numero;
    const timer = setTimeout(() => {
      if (conteudoPt || tituloPt || resumoPt) {
        try {
          localStorage.setItem(
            draftKey,
            JSON.stringify({
              numero,
              secaoId,
              status,
              autores,
              tituloPt,
              tituloEn,
              tituloEs,
              resumoPt,
              conteudoPt,
              referencias,
              savedAt: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
            })
          );
          setLastSavedTime(new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }));
        } catch (e) {}
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [numero, secaoId, status, autores, tituloPt, tituloEn, tituloEs, resumoPt, conteudoPt, referencias]);

  // Helper to insert markdown in textarea
  const insertMarkdown = (syntaxBefore: string, syntaxAfter = "") => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const previousText = textarea.value;
    const selectedText = previousText.substring(start, end) || "Texto destacado";

    const replacement = syntaxBefore + selectedText + syntaxAfter;
    const newContent = previousText.substring(0, start) + replacement + previousText.substring(end);

    setConteudoPt(newContent);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + syntaxBefore.length, start + syntaxBefore.length + selectedText.length);
    }, 50);
  };

  // Quick surgical template
  const handleInsertSurgicalTemplate = () => {
    const template = "## 1. Introdução & Contexto Anatômico\nA abordagem cirúrgica da coluna requer conhecimento tridimensional da anatomia das vértebras, discos intervertebrais e das estruturas neurais adjacentes.\n\n## 2. Indicações Cirúrgicas e Contraindicações\n- **Indicação Primária:** Instabilidade mecânica progressiva com déficit neurológico associado.\n- **Indicação Secundária:** Falha do tratamento conservador otimizado após 12 semanas.\n- **Contraindicações:** Infecção ativa não tratada ou osteoporose severa sem suporte biológico.\n\n> **PONTO CHAVE:** A avaliação precisa do equilíbrio sagital é indispensável antes de qualquer fixação segmentar.\n\n## 3. Avaliação Diagnóstica e Exames de Imagem\n- **Radiografias Panorâmicas de Coluna Total (Espinograma):** Em posição ortostática com cotovelos fletidos a 45°.\n- **Ressonância Magnética (RM):** Avaliação de compressão radicular, degeneração discal e estenose foraminal.\n- **Tomografia Computadorizada (TC):** Planejamento da instrumentação pedicular e análise de osteófitos.\n\n## 4. Técnica Cirúrgica Passo a Passo\n\n### 4.1 Posicionamento e Acesso Cirúrgico\n1. Paciente sob anestesia geral em mesa radiotransparente (decúbito ventral).\n2. Proteção de proeminências ósseas e liberação da pressão abdominal para reduzir o sangramento venoso peridural.\n3. Incisão mediana longitudinal e dissecação subperiosteal minuciosa da musculatura paravertebral.\n\n> **ALERTA CIRÚRGICO:** Manter a hemostasia rigorosa durante a exposição das lâminas e articulares facetárias para prevenir sangramento da veia epidural.\n\n### 4.2 Descompressão e Instrumentação Pedicular\n- Inserção de parafusos pediculares sob navegação ou radioscopia biplanar intraoperatória.\n- Realização de facetectomias e foraminotomias ampliadas quando indicado.\n- Implante de cage intersomático para ganho de altura discal e restauração da lordose segmentar.\n\n## 5. Cuidados Pós-Operatórios & Complicações\n- Monitorização neurológica contínua no pós-operatório imediato.\n- Deambulação precoce no 1º dia pós-operatório com auxílio fisioterapêutico.\n- Profilaxia tromboembólica e manejo multimodal da dor pós-operatória.\n\n## 6. Conclusões\nO sucesso a longo prazo reside na individualização do plano cirúrgico, respeito à anatomia funcional e restauração harmônica dos eixos coronais e sagitais.";

    if (conteudoPt && !window.confirm("Deseja substituir o conteúdo atual pelo modelo cirúrgico padrão?")) {
      return;
    }
    setConteudoPt(template);
  };

  // Convert markdown to HTML for preview
  const renderedPreviewHtml = useMemo(() => {
    if (!conteudoPt) {
      return "<p style='color: #94a3b8; font-style: italic; text-align: center; padding: 40px 20px;'>O conteúdo digitado no editor será renderizado em tempo real aqui com a tipografia oficial do Tratado SBC...</p>";
    }

    let html = conteudoPt
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Callouts
    html = html.replace(/^&gt; (?:⚠️ )?\*\*ALERTA CIRÚRGICO:\*\*(.*)$/gim, "<div style='margin: 18px 0; padding: 16px 20px; border-radius: 12px; background: rgba(225, 29, 72, 0.1); border-left: 4px solid #f43f5e; color: #fda4af; font-size: 14px; line-height: 1.6;'><strong>⚠️ ALERTA CIRÚRGICO:</strong>$1</div>");
    html = html.replace(/^&gt; (?:💡 )?\*\*DICA PRÁTICA:\*\*(.*)$/gim, "<div style='margin: 18px 0; padding: 16px 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.1); border-left: 4px solid #f59e0b; color: #fcd34d; font-size: 14px; line-height: 1.6;'><strong>💡 DICA PRÁTICA:</strong>$1</div>");
    html = html.replace(/^&gt; (?:📌 )?\*\*PONTO CHAVE:\*\*(.*)$/gim, "<div style='margin: 18px 0; padding: 16px 20px; border-radius: 12px; background: rgba(2, 132, 199, 0.1); border-left: 4px solid #0284c7; color: #7dd3fc; font-size: 14px; line-height: 1.6;'><strong>📌 PONTO CHAVE:</strong>$1</div>");
    html = html.replace(/^&gt; (.*)$/gim, "<blockquote style='margin: 16px 0; padding: 12px 18px; border-left: 4px solid #64748b; background: rgba(255,255,255,0.03); color: #cbd5e1; font-style: italic;'>$1</blockquote>");

    // Headings
    html = html.replace(/^### (.*$)/gim, "<h3 style='font-size: 17px; font-weight: 700; color: #38bdf8; margin: 24px 0 10px; letter-spacing: -0.01em;'>$1</h3>");
    html = html.replace(/^## (.*$)/gim, "<h2 style='font-size: 20px; font-weight: 700; color: #f43f5e; margin: 28px 0 12px; letter-spacing: -0.02em; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 6px;'>$1</h2>");
    html = html.replace(/^# (.*$)/gim, "<h1 style='font-size: 24px; font-weight: 700; color: #ffffff; margin: 32px 0 16px;'>$1</h1>");

    // Bold, Italic, Marks
    html = html.replace(/\*\*\*(.*?)\*\*\*/g, "<strong><em>$1</em></strong>");
    html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");
    html = html.replace(/==(.*?)==/g, "<mark style='background: #fef08a; color: #000; padding: 2px 6px; border-radius: 4px;'>$1</mark>");

    // Figures & Images
    html = html.replace(/!\[(.*?)\]\((.*?)\)/g, "<figure style='margin: 20px 0; text-align: center;'><img src='$2' alt='$1' style='max-width: 100%; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 25px rgba(0,0,0,0.4);' /><figcaption style='font-size: 12.5px; color: #94a3b8; margin-top: 8px; font-style: italic;'>$1</figcaption></figure>");

    // Paragraphs
    html = html.replace(/\n\n/g, "</p><p style='margin-bottom: 16px; line-height: 1.75; font-size: 14.5px;'>");
    html = html.replace(/\n/g, "<br />");

    return "<p style='margin-bottom: 16px; line-height: 1.75; font-size: 14.5px;'>" + html + "</p>";
  }, [conteudoPt]);

  // Form Submit Handler
  const handleSave = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!numero || !tituloPt.trim()) {
      setFeedback({ type: "error", message: "Por favor, preencha o número do capítulo e o título em português." });
      return;
    }

    startTransition(async () => {
      try {
        const formData = new FormData();
        formData.append("numero", numero);
        formData.append("secao_id", secaoId);
        formData.append("status", status);
        formData.append("autores", autores);
        formData.append("titulo_pt", tituloPt.trim());
        formData.append("titulo_en", tituloEn.trim());
        formData.append("titulo_es", tituloEs.trim());
        formData.append("resumo_pt", resumoPt.trim());
        formData.append("conteudo_pt", conteudoPt.trim());
        formData.append("referencias", referencias.trim());

        const res = await cadastrarCapituloAction(null, formData);

        // Also persist in localStorage for instant updates
        const numInt = parseInt(numero, 10);
        const updatedChapter = {
          id: "cap-" + numInt,
          secao_id: parseInt(secaoId, 10),
          numero: numInt,
          titulo_pt: tituloPt.trim(),
          titulo_en: tituloEn.trim() || undefined,
          titulo_es: tituloEs.trim() || undefined,
          autores: autores.trim() || "Corpo Editorial SBC",
          resumo_pt: resumoPt.trim() || undefined,
          conteudo_pt: conteudoPt.trim() || undefined,
          referencias: referencias.trim() || undefined,
          status: status || "publicado",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };

        try {
          const localCustom = localStorage.getItem("sbc_custom_chapters");
          let list: Capitulo[] = localCustom ? JSON.parse(localCustom) : [...INITIAL_CHAPTERS];
          const existIdx = list.findIndex((c) => c.numero === numInt);
          if (existIdx >= 0) {
            list[existIdx] = { ...list[existIdx], ...updatedChapter };
          } else {
            list.push(updatedChapter);
          }
          list.sort((a, b) => a.numero - b.numero);
          localStorage.setItem("sbc_custom_chapters", JSON.stringify(list));
        } catch (e) {}

        setFeedback({
          type: "success",
          message: res?.success
            ? "Capítulo " + numero + " salvo com sucesso no banco de dados e sincronizado!"
            : "Capítulo " + numero + " atualizado com sucesso!",
        });

        // Clear draft
        localStorage.removeItem("sbc_chapter_draft_" + numero);
      } catch (err: any) {
        setFeedback({ type: "error", message: err?.message || "Ocorreu um erro ao salvar o capítulo." });
      }
    });
  };

  const pageBg = isDark ? "#020617" : "#f8fafc";
  const cardBg = isDark ? "rgba(15, 23, 42, 0.7)" : "#ffffff";
  const cardBorder = isDark ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid #e2e8f0";
  const textPrimary = isDark ? "#ffffff" : "#0f172a";
  const textSecondary = isDark ? "#cbd5e1" : "#334155";
  const textMuted = isDark ? "#94a3b8" : "#64748b";
  const inputBg = isDark ? "rgba(15, 23, 42, 0.85)" : "#ffffff";
  const inputBorder = isDark ? "1px solid rgba(255, 255, 255, 0.12)" : "1px solid #cbd5e1";

  if (loading) {
    return (
      <div style={{ display: "grid", placeItems: "center", minHeight: "100vh", background: pageBg, color: textPrimary }}>
        <div style={{ textAlign: "center" }}>
          <img src={isDark ? "/assets/sbc-logo-white.png" : "/assets/sbc-logo.png"} alt="SBC" style={{ height: 44, margin: "0 auto 16px", objectFit: "contain" }} />
          <p style={{ color: textMuted, fontWeight: 700, fontSize: 14 }}>Carregando editor científico...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: pageBg,
        backgroundImage: isDark
          ? "radial-gradient(at 100% 0%, rgba(244, 63, 94, 0.08) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(14, 165, 233, 0.08) 0px, transparent 50%)"
          : "radial-gradient(at 100% 0%, rgba(244, 63, 94, 0.04) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(14, 165, 233, 0.05) 0px, transparent 50%)",
        color: textPrimary,
        fontFamily: "'Inter', 'Plus Jakarta Sans', system-ui, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ================= TOPBAR ================= */}
      <header
        style={{
          height: 68,
          background: isDark ? "rgba(15, 23, 42, 0.85)" : "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: cardBorder,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 28px",
          position: "sticky",
          top: 0,
          zIndex: 50,
          boxShadow: isDark ? "0 4px 20px rgba(0, 0, 0, 0.25)" : "0 2px 10px rgba(0, 30, 80, 0.04)",
        }}
      >
        {/* Left: Back to Painel & Chapter Breadcrumbs */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <button
            type="button"
            onClick={() => router.push("/admin/painel")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              padding: "8px 14px",
              borderRadius: 10,
              background: isDark ? "rgba(255, 255, 255, 0.06)" : "#f1f5f9",
              border: isDark ? "1px solid rgba(255, 255, 255, 0.12)" : "1px solid #cbd5e1",
              color: textPrimary,
              fontSize: 12.5,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            <ArrowLeft size={15} />
            <span>Voltar ao Painel</span>
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: textMuted }}>
            <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Capítulo {numero}
            </span>
            <span>•</span>
            <span style={{ color: textPrimary, fontWeight: 700, maxWidth: 350, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {tituloPt || "Novo Capítulo"}
            </span>
          </div>
        </div>

        {/* Right: Status, Draft indicator, View in reader, Theme Toggle & Save Button */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {lastSavedTime && (
            <span style={{ fontSize: 11.5, color: textMuted, fontWeight: 600 }}>
              Rascunho salvo às {lastSavedTime}
            </span>
          )}

          {!isNew && (
            <Link
              href={"/pt/capitulo/" + numero}
              target="_blank"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 14px",
                borderRadius: 10,
                background: isDark ? "rgba(2, 132, 199, 0.15)" : "#e0f2fe",
                border: isDark ? "1px solid rgba(2, 132, 199, 0.35)" : "1px solid #bae6fd",
                color: isDark ? "#38bdf8" : "#0284c7",
                fontSize: 12.5,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              <Eye size={14} />
              <span>Ver no Leitor</span>
            </Link>
          )}

          <button
            type="button"
            onClick={toggleTheme}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 12px",
              borderRadius: 10,
              background: isDark ? "rgba(255, 255, 255, 0.08)" : "#f1f5f9",
              border: isDark ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid #cbd5e1",
              color: textPrimary,
              fontSize: 12,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            {isDark ? <Sun size={14} color="#f59e0b" /> : <Moon size={14} color="#6366f1" />}
          </button>

          <button
            type="button"
            onClick={() => handleSave()}
            disabled={isPending}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "9px 20px",
              borderRadius: 10,
              background: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
              border: "none",
              color: "#fff",
              fontSize: 13,
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 4px 16px rgba(225, 29, 72, 0.4)",
            }}
          >
            <Save size={15} />
            <span>{isPending ? "Salvando..." : "Salvar Alterações"}</span>
          </button>
        </div>
      </header>

      {/* ================= MAIN CONTAINER ================= */}
      <main style={{ maxWidth: 1500, width: "100%", margin: "0 auto", padding: "28px 32px", boxSizing: "border-box", flex: 1, display: "flex", flexDirection: "column", gap: 24 }}>
        {/* Feedback Alert */}
        {feedback.message && (
          <div
            style={{
              padding: "14px 20px",
              borderRadius: 12,
              fontSize: 13.5,
              fontWeight: 700,
              background: feedback.type === "success" ? (isDark ? "rgba(16, 185, 129, 0.15)" : "#ecfdf5") : (isDark ? "rgba(225, 29, 72, 0.15)" : "#fef2f2"),
              color: feedback.type === "success" ? (isDark ? "#6ee7b7" : "#065f46") : (isDark ? "#fda4af" : "#991b1b"),
              border: feedback.type === "success" ? "1px solid #10b981" : "1px solid #f43f5e",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              {feedback.type === "success" ? <CheckCircle2 size={18} /> : <AlertTriangle size={18} />}
              <span>{feedback.message}</span>
            </div>
            <button
              onClick={() => setFeedback({ type: null, message: "" })}
              style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", fontWeight: 700, fontSize: 16 }}
            >
              ✕
            </button>
          </div>
        )}

        <form onSubmit={handleSave} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {/* ================= METADATA CARD (SEÇÃO, NÚMERO, STATUS, TÍTULO, AUTORES) ================= */}
          <div
            style={{
              background: cardBg,
              border: cardBorder,
              borderRadius: 20,
              padding: "24px 28px",
              boxShadow: isDark ? "0 10px 30px rgba(0,0,0,0.3)" : "0 6px 20px rgba(0,30,80,0.03)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {/* Seção */}
            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: textMuted, marginBottom: 6 }}>
                Seção Temática do Tratado *
              </label>
              <select
                value={secaoId}
                onChange={(e) => setSecaoId(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: 12,
                  background: inputBg,
                  border: inputBorder,
                  color: textPrimary,
                  fontSize: 13,
                  fontWeight: 700,
                  outline: "none",
                  boxSizing: "border-box",
                }}
              >
                {SECOES.map((s) => (
                  <option key={s.id} value={s.id.toString()}>
                    Seção {s.id}: {s.titulo_pt}
                  </option>
                ))}
              </select>
            </div>

            {/* Número */}
            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: textMuted, marginBottom: 6 }}>
                Número do Capítulo (1 a 109) *
              </label>
              <input
                type="number"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                min={1}
                max={150}
                required
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: 12,
                  background: inputBg,
                  border: inputBorder,
                  color: textPrimary,
                  fontSize: 13.5,
                  fontWeight: 700,
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* Status */}
            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: textMuted, marginBottom: 6 }}>
                Status de Publicação
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: 12,
                  background: inputBg,
                  border: inputBorder,
                  color: textPrimary,
                  fontSize: 13,
                  fontWeight: 700,
                  outline: "none",
                  boxSizing: "border-box",
                }}
              >
                <option value="publicado">Publicado (Visível no site)</option>
                <option value="rascunho">Rascunho Editorial (Em revisão)</option>
              </select>
            </div>

            {/* Autores */}
            <div style={{ gridColumn: "1 / -1" }}>
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: textMuted, marginBottom: 6 }}>
                Autores e Colaboradores do Capítulo
              </label>
              <input
                type="text"
                value={autores}
                onChange={(e) => setAutores(e.target.value)}
                placeholder="Ex: Prof. Dr. Edson Pudles, Dr. Helton Defino, Dr. Marcelo Risso"
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: 12,
                  background: inputBg,
                  border: inputBorder,
                  color: textPrimary,
                  fontSize: 13.5,
                  fontWeight: 600,
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* Títulos Multilíngues */}
            <div style={{ gridColumn: "1 / -1", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
              <div>
                <label style={{ display: "block", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: textMuted, marginBottom: 6 }}>
                  Título em Português *
                </label>
                <input
                  type="text"
                  value={tituloPt}
                  onChange={(e) => setTituloPt(e.target.value)}
                  placeholder="Ex: Embriologia da Coluna Vertebral"
                  required
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: 12,
                    background: inputBg,
                    border: inputBorder,
                    color: textPrimary,
                    fontSize: 14,
                    fontWeight: 700,
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: textMuted, marginBottom: 6 }}>
                  Título em Inglês (EN)
                </label>
                <input
                  type="text"
                  value={tituloEn}
                  onChange={(e) => setTituloEn(e.target.value)}
                  placeholder="Ex: Embryology of the Spine"
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: 12,
                    background: inputBg,
                    border: inputBorder,
                    color: textPrimary,
                    fontSize: 13.5,
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: textMuted, marginBottom: 6 }}>
                  Título em Espanhol (ES)
                </label>
                <input
                  type="text"
                  value={tituloEs}
                  onChange={(e) => setTituloEs(e.target.value)}
                  placeholder="Ex: Embriología de la Columna Vertebral"
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: 12,
                    background: inputBg,
                    border: inputBorder,
                    color: textPrimary,
                    fontSize: 13.5,
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            </div>
          </div>

          {/* ================= RESUMO ESTRUTURADO ================= */}
          <div
            style={{
              background: cardBg,
              border: cardBorder,
              borderRadius: 20,
              padding: "24px 28px",
              boxShadow: isDark ? "0 10px 30px rgba(0,0,0,0.3)" : "0 6px 20px rgba(0,30,80,0.03)",
            }}
          >
            <label style={{ display: "block", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: textMuted, marginBottom: 8 }}>
              Resumo Estruturado / Abstract Clínico
            </label>
            <textarea
              value={resumoPt}
              onChange={(e) => setResumoPt(e.target.value)}
              rows={3}
              placeholder="Descreva a fundamentação anatômica, objetivos cirúrgicos e pontos-chave deste capítulo..."
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: 12,
                background: inputBg,
                border: inputBorder,
                color: textPrimary,
                fontSize: 13.5,
                lineHeight: 1.6,
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* ================= EDITOR CIENTÍFICO WYSIWYG / SPLIT ================= */}
          <div
            style={{
              background: cardBg,
              border: cardBorder,
              borderRadius: 20,
              padding: "24px 28px",
              boxShadow: isDark ? "0 10px 30px rgba(0,0,0,0.3)" : "0 6px 20px rgba(0,30,80,0.03)",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {/* Editor Toolbar Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, borderBottom: cardBorder, paddingBottom: 14 }}>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: textPrimary, margin: 0, display: "flex", alignItems: "center", gap: 8 }}>
                  <Edit3 size={18} color="#f43f5e" />
                  <span>Conteúdo Clínico &amp; Redação Cirúrgica</span>
                </h3>
                <span style={{ fontSize: 12, color: textMuted }}>
                  Use as ferramentas de formatação, alertas cirúrgicos e figuras para compor o capítulo.
                </span>
              </div>

              {/* View Mode Switcher */}
              <div style={{ display: "flex", gap: 6, background: isDark ? "rgba(2, 6, 23, 0.6)" : "#f1f5f9", padding: 4, borderRadius: 10, border: cardBorder }}>
                <button
                  type="button"
                  onClick={() => setViewMode("edit")}
                  style={{
                    padding: "6px 12px",
                    borderRadius: 8,
                    border: "none",
                    background: viewMode === "edit" ? (isDark ? "rgba(255, 255, 255, 0.15)" : "#fff") : "transparent",
                    color: viewMode === "edit" ? textPrimary : textMuted,
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Editor
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("split")}
                  style={{
                    padding: "6px 12px",
                    borderRadius: 8,
                    border: "none",
                    background: viewMode === "split" ? (isDark ? "rgba(255, 255, 255, 0.15)" : "#fff") : "transparent",
                    color: viewMode === "split" ? textPrimary : textMuted,
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Lado a Lado
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("preview")}
                  style={{
                    padding: "6px 12px",
                    borderRadius: 8,
                    border: "none",
                    background: viewMode === "preview" ? (isDark ? "rgba(255, 255, 255, 0.15)" : "#fff") : "transparent",
                    color: viewMode === "preview" ? textPrimary : textMuted,
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Prévia em Tempo Real
                </button>
              </div>
            </div>

            {/* Quick Action Snippet Buttons */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
              <button
                type="button"
                onClick={handleInsertSurgicalTemplate}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "6px 12px",
                  borderRadius: 8,
                  background: isDark ? "rgba(225, 29, 72, 0.15)" : "#fff1f2",
                  border: isDark ? "1px solid rgba(225, 29, 72, 0.3)" : "1px solid #fecdd3",
                  color: isDark ? "#fda4af" : "#be123c",
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                <Sparkles size={13} />
                <span>Inserir Modelo Cirúrgico Completo</span>
              </button>

              <button
                type="button"
                onClick={() => insertMarkdown("\n> **ALERTA CIRÚRGICO:** ", "\n")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  padding: "6px 11px",
                  borderRadius: 8,
                  background: isDark ? "rgba(244, 63, 94, 0.1)" : "#ffe4e6",
                  border: isDark ? "1px solid rgba(244, 63, 94, 0.25)" : "1px solid #fecdd3",
                  color: isDark ? "#fb7185" : "#e11d48",
                  fontSize: 11.5,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                <AlertTriangle size={13} />
                <span>Alerta Cirúrgico</span>
              </button>

              <button
                type="button"
                onClick={() => insertMarkdown("\n> **DICA PRÁTICA:** ", "\n")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  padding: "6px 11px",
                  borderRadius: 8,
                  background: isDark ? "rgba(245, 158, 11, 0.1)" : "#fffbeb",
                  border: isDark ? "1px solid rgba(245, 158, 11, 0.25)" : "1px solid #fde68a",
                  color: isDark ? "#fbbf24" : "#b45309",
                  fontSize: 11.5,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                <Lightbulb size={13} />
                <span>Dica Prática</span>
              </button>

              <button
                type="button"
                onClick={() => insertMarkdown("\n> **PONTO CHAVE:** ", "\n")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  padding: "6px 11px",
                  borderRadius: 8,
                  background: isDark ? "rgba(2, 132, 199, 0.1)" : "#f0f9ff",
                  border: isDark ? "1px solid rgba(2, 132, 199, 0.25)" : "1px solid #bae6fd",
                  color: isDark ? "#38bdf8" : "#0284c7",
                  fontSize: 11.5,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                <Pin size={13} />
                <span>Ponto Chave</span>
              </button>

              <button
                type="button"
                onClick={() => insertMarkdown("\n| Critério | Grau 1 | Grau 2 |\n| :--- | :--- | :--- |\n| **Achado** | Normal | Alterado |\n")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  padding: "6px 11px",
                  borderRadius: 8,
                  background: isDark ? "rgba(255, 255, 255, 0.06)" : "#f1f5f9",
                  border: cardBorder,
                  color: textPrimary,
                  fontSize: 11.5,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                <Table size={13} />
                <span>Tabela</span>
              </button>

              <button
                type="button"
                onClick={() => insertMarkdown("\n![Legenda da Figura de Imagem](/assets/capa-tratado-da-coluna.svg)\n*Figura 1: Corte tomográfico evidenciando anatomia vertebral.*\n")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  padding: "6px 11px",
                  borderRadius: 8,
                  background: isDark ? "rgba(255, 255, 255, 0.06)" : "#f1f5f9",
                  border: cardBorder,
                  color: textPrimary,
                  fontSize: 11.5,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                <ImageIcon size={13} />
                <span>Figura / Imagem</span>
              </button>
            </div>

            {/* Split / Single View Layout */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: viewMode === "split" ? "1fr 1fr" : "1fr",
                gap: 20,
                minHeight: 500,
              }}
            >
              {/* Left: Markdown Code Editor */}
              {(viewMode === "edit" || viewMode === "split") && (
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: textMuted }}>
                    <span>Código Markdown</span>
                    <span>{conteudoPt.length} caracteres</span>
                  </div>
                  <textarea
                    ref={textareaRef}
                    value={conteudoPt}
                    onChange={(e) => setConteudoPt(e.target.value)}
                    placeholder="Escreva a íntegra do capítulo científico aqui..."
                    style={{
                      width: "100%",
                      flex: 1,
                      minHeight: 480,
                      padding: "16px",
                      borderRadius: 14,
                      background: isDark ? "rgba(2, 6, 23, 0.75)" : "#ffffff",
                      border: inputBorder,
                      color: textPrimary,
                      fontFamily: "monospace",
                      fontSize: 13.5,
                      lineHeight: 1.6,
                      outline: "none",
                      resize: "vertical",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              )}

              {/* Right: Live Medical Preview */}
              {(viewMode === "preview" || viewMode === "split") && (
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: textMuted }}>
                    <span>Prévia em Tempo Real (Tipografia Tratado SBC)</span>
                    <span style={{ color: "#10b981", display: "flex", alignItems: "center", gap: 4 }}>
                      <CheckCircle2 size={12} />
                      <span>Live Sync</span>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      flex: 1,
                      minHeight: 480,
                      maxHeight: 700,
                      overflowY: "auto",
                      padding: "24px 28px",
                      borderRadius: 14,
                      background: isDark ? "rgba(15, 23, 42, 0.95)" : "#f8fafc",
                      border: cardBorder,
                      color: textSecondary,
                      boxSizing: "border-box",
                    }}
                    dangerouslySetInnerHTML={{ __html: renderedPreviewHtml }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* ================= REFERÊNCIAS BIBLIOGRÁFICAS ================= */}
          <div
            style={{
              background: cardBg,
              border: cardBorder,
              borderRadius: 20,
              padding: "24px 28px",
              boxShadow: isDark ? "0 10px 30px rgba(0,0,0,0.3)" : "0 6px 20px rgba(0,30,80,0.03)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: textMuted }}>
                Referências Bibliográficas (Normas Vancouver / SBC)
              </label>
              <button
                type="button"
                onClick={() => setReferencias((prev) => (prev ? prev + "\n1. Schwab F, Patel A, Ungar B. Spinal alignment and balance. Spine. 2010;35(22):2224–31." : "1. Schwab F, Patel A, Ungar B. Spinal alignment and balance. Spine. 2010;35(22):2224–31."))}
                style={{
                  background: "none",
                  border: "none",
                  color: isDark ? "#38bdf8" : "#0284c7",
                  fontSize: 11.5,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                + Inserir Exemplo Vancouver
              </button>
            </div>
            <textarea
              value={referencias}
              onChange={(e) => setReferencias(e.target.value)}
              rows={4}
              placeholder="1. Schwab F, Patel A, Ungar B. Spine. 2010;35(22):2224–31.&#10;2. Sociedade Brasileira de Coluna. Diretrizes 2026."
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: 12,
                background: inputBg,
                border: inputBorder,
                color: textPrimary,
                fontSize: 13,
                lineHeight: 1.6,
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Bottom Floating Save Action Bar */}
          <div
            style={{
              position: "sticky",
              bottom: 20,
              background: isDark ? "rgba(15, 23, 42, 0.95)" : "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: cardBorder,
              borderRadius: 16,
              padding: "14px 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
              zIndex: 40,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: textMuted }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981" }} />
              <span>Capítulo {numero} • {tituloPt || "Novo Capítulo"}</span>
            </div>

            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <button
                type="button"
                onClick={() => router.push("/admin/painel")}
                style={{
                  padding: "10px 18px",
                  borderRadius: 10,
                  background: isDark ? "rgba(255, 255, 255, 0.08)" : "#f1f5f9",
                  border: isDark ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid #cbd5e1",
                  color: textPrimary,
                  fontSize: 12.5,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Cancelar &amp; Voltar
              </button>

              <button
                type="submit"
                disabled={isPending}
                style={{
                  padding: "10px 24px",
                  borderRadius: 10,
                  background: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
                  border: "none",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 4px 16px rgba(225, 29, 72, 0.4)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Save size={15} />
                <span>{isPending ? "Salvando Capítulo..." : "Salvar Alterações do Capítulo"}</span>
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
