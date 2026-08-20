"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { SECOES } from "@/lib/data/sections-and-chapters";
import { Capitulo } from "@/lib/types";
import {
  BookOpen,
  Sparkles,
  Eye,
  Edit3,
  Columns,
  Highlighter,
  List,
  ListOrdered,
  AlertTriangle,
  Lightbulb,
  Pin,
  Table,
  Image,
  ListChecks,
  Check,
  RotateCcw,
} from "lucide-react";

interface ScientificChapterEditorProps {
  initialData?: Capitulo | Partial<Capitulo> | null;
  onSubmit: (formData: FormData) => void | Promise<void>;
  isPending: boolean;
  onClear?: () => void;
}

export default function ScientificChapterEditor({
  initialData,
  onSubmit,
  isPending,
  onClear,
}: ScientificChapterEditorProps) {
  // Form State
  const [numero, setNumero] = useState(initialData?.numero?.toString() || "");
  const [secaoId, setSecaoId] = useState(initialData?.secao_id?.toString() || "1");
  const [status, setStatus] = useState(initialData?.status || "publicado");
  const [autores, setAutores] = useState(initialData?.autores || "");
  const [tituloPt, setTituloPt] = useState(initialData?.titulo_pt || "");
  const [tituloEn, setTituloEn] = useState(initialData?.titulo_en || "");
  const [tituloEs, setTituloEs] = useState(initialData?.titulo_es || "");
  const [resumoPt, setResumoPt] = useState(initialData?.resumo_pt || "");
  const [conteudoPt, setConteudoPt] = useState(initialData?.conteudo_pt || "");
  const [referencias, setReferencias] = useState(initialData?.referencias || "");

  // Editor View Mode: "edit" | "preview" | "split"
  const [viewMode, setViewMode] = useState<"edit" | "preview" | "split">("split");
  const [activeTabLang, setActiveTabLang] = useState<"pt" | "en" | "es">("pt");
  const [lastSavedTime, setLastSavedTime] = useState<string | null>(null);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Sync when initialData changes (e.g. clicking edit on chapter list)
  useEffect(() => {
    if (initialData) {
      setNumero(initialData.numero?.toString() || "");
      setSecaoId(initialData.secao_id?.toString() || "1");
      setStatus(initialData.status || "publicado");
      setAutores(initialData.autores || "");
      setTituloPt(initialData.titulo_pt || "");
      setTituloEn(initialData.titulo_en || "");
      setTituloEs(initialData.titulo_es || "");
      setResumoPt(initialData.resumo_pt || "");
      setConteudoPt(initialData.conteudo_pt || "");
      setReferencias(initialData.referencias || "");
    }
  }, [initialData]);

  // Autosave draft in localStorage
  useEffect(() => {
    const draftKey = `sbc_chapter_draft_${numero || "new"}`;
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
        } catch {
          // ignore quota error
        }
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [numero, secaoId, status, autores, tituloPt, tituloEn, tituloEs, resumoPt, conteudoPt, referencias]);

  // Calculate text metrics
  const metrics = useMemo(() => {
    const text = conteudoPt.trim();
    const words = text ? text.split(/\s+/).filter(Boolean).length : 0;
    const chars = text.length;
    const readingTimeMin = Math.max(1, Math.ceil(words / 200));
    return { words, chars, readingTimeMin };
  }, [conteudoPt]);

  // Helper to insert markdown at cursor position
  const insertMarkdown = (before: string, after: string = "", defaultText: string = "") => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end) || defaultText;

    const replacement = before + selectedText + after;
    const newValue = textarea.value.substring(0, start) + replacement + textarea.value.substring(end);

    setConteudoPt(newValue);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + before.length, start + before.length + selectedText.length);
    }, 50);
  };

  // Templates
  const handleInsertFullStructure = () => {
    const template = `## 1. Introdução & Contexto Clínico
A abordagem cirúrgica contemporânea das patologias vertebrais exige profundo entendimento biomecânico e análise criteriosa dos parâmetros espinopélvicos.

> **PONTO CHAVE:** A restauração do equilíbrio sagital global está diretamente associada à melhora dos escores de qualidade de vida (SRS-22, ODI) e à redução de complicações mecânicas.

## 2. Anatomia Cirúrgica e Considerações Biomecânicas
A correlação anatômica tridimensional entre a incidência pélvica (PI) e a lordose lombar (LL) rege o alinhamento fisiológico espinhal.

| Parâmetro Espinopélvico | Valor de Referência | Interpretação Clínica |
| :--- | :--- | :--- |
| **Incidência Pélvica (PI)** | 40° a 65° (Fixo) | Determina a morfologia sagital individual |
| **Inclinação Pélvica (PT)** | < 20° | Mecanismo compensatório retroversivo |
| **Mismatch PI - LL** | < 10° | Alvo primordial no planejamento corretivo |

## 3. Avaliação Diagnóstica e Exames de Imagem
- **Radiografias Panorâmicas de Coluna Total (Espinograma):** Em posição ortostática com cotovelos fletidos a 45°.
- **Ressonância Magnética (RM):** Avaliação de compressão radicular, degeneração discal e estenose foraminal.
- **Tomografia Computadorizada (TC):** Planejamento da instrumentação pedicular e análise de osteófitos.

## 4. Técnica Cirúrgica Passo a Passo

### 4.1 Posicionamento e Acesso Cirúrgico
1. Paciente sob anestesia geral em mesa radiotransparente (decúbito ventral).
2. Proteção de proeminências ósseas e liberação da pressão abdominal para reduzir o sangramento venoso peridural.
3. Incisão mediana longitudinal e dissecação subperiosteal minuciosa da musculatura paravertebral.

> **ALERTA CIRÚRGICO:** Manter a hemostasia rigorosa durante a exposição das lâminas e articulares facetárias para prevenir sangramento da veia epidural.

### 4.2 Descompressão e Instrumentação Pedicular
- Inserção de parafusos pediculares sob navegação ou radioscopia biplanar intraoperatória.
- Realização de facetectomias e foraminotomias ampliadas quando indicado.
- Implante de cage intersomático para ganho de altura discal e restauração da lordose segmentar.

## 5. Cuidados Pós-Operatórios & Complicações
- Monitorização neurológica contínua no pós-operatório imediato.
- Deambulação precoce no 1º dia pós-operatório com auxílio fisioterapêutico.
- Profilaxia tromboembólica e manejo multimodal da dor pós-operatória.

## 6. Conclusões
O sucesso a longo prazo reside na individualização do plano cirúrgico, respeito à anatomia funcional e restauração harmônica dos eixos coronais e sagitais.`;

    if (conteudoPt && !window.confirm("Deseja substituir o conteúdo atual pelo modelo científico completo?")) {
      return;
    }
    setConteudoPt(template);
  };

  const handleInsertStepByStep = () => {
    const snippet = `\n\n### Técnica Cirúrgica Passo a Passo\n1. **Incisão e Acesso:** Incisão mediana posterior com dissecção cuidadosa.\n2. **Exposição Óssea:** Desperiostização bilateral até as pontas dos processos transversos.\n3. **Instrumentação Pedicular:** Preparação do trajeto com sonda e teste da integridade das paredes ósseas.\n4. **Descompressão:** Laminectomia e flavectomia sob visualização microscópica.\n5. **Artrodese e Fechamento:** Decorticação óssea, enxertia e sutura por planos anatômicos.\n`;
    insertMarkdown(snippet);
  };

  const handleInsertAlert = () => {
    const snippet = `\n> **ALERTA CIRÚRGICO:** Atenção crítica às raízes nervosas emergentes e plexo venoso peridural durante a manipulação foraminocanalicular.\n`;
    insertMarkdown(snippet);
  };

  const handleInsertTable = () => {
    const snippet = `\n| Critério / Nível | Grau 1 | Grau 2 | Grau 3 |\n| :--- | :--- | :--- | :--- |\n| **Escore Clínico** | Normal (< 5%) | Moderado (5-15%) | Grave (> 15%) |\n| **Conduta Sugerida** | Conservador | Descompressão | Artrodese 360° |\n`;
    insertMarkdown(snippet);
  };

  const handleInsertImage = () => {
    const snippet = `\n![Figura: Ressonância Magnética demonstrando estenose foraminal e alinhamento sagital](/assets/book-cover.png)\n*Legenda da Figura: Corte sagital ponderado em T2 evidenciando compressão discal no nível L4-L5.*\n`;
    insertMarkdown(snippet);
  };

  const handleInsertVancouverRef = () => {
    const snippet = `\n1. Schwab F, Patel A, Ungar B, Farcy JP, Lafage V. Adult spinal deformity—postoperative standing imbalance. Spine. 2010;35(22):2224–31.\n2. Sociedade Brasileira de Coluna (SBC). Diretrizes de Cirurgia da Coluna Vertebral, 2026.\n`;
    setReferencias((prev) => (prev ? prev + snippet : snippet.trim()));
  };

  const handleClearAll = () => {
    if (window.confirm("Tem certeza que deseja limpar todos os campos deste formulário?")) {
      setNumero("");
      setSecaoId("1");
      setStatus("publicado");
      setAutores("");
      setTituloPt("");
      setTituloEn("");
      setTituloEs("");
      setResumoPt("");
      setConteudoPt("");
      setReferencias("");
      if (onClear) onClear();
    }
  };

  // Convert markdown simple formatting to HTML for live preview
  const renderedPreviewHtml = useMemo(() => {
    if (!conteudoPt) {
      return "<p style='color: #94a3b8; font-style: italic; text-align: center; padding: 40px 20px;'>O conteúdo digitado no editor será renderizado em tempo real aqui com a tipografia oficial do Tratado SBC...</p>";
    }

    let html = conteudoPt
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Blockquotes & Callouts
    html = html.replace(/^&gt; (?:⚠️ )?\*\*ALERTA CIRÚRGICO:\*\*(.*)$/gim, '<div class="preview-alert alert-warning"><div><strong>ALERTA CIRÚRGICO:</strong>$1</div></div>');
    html = html.replace(/^&gt; (?:💡 )?\*\*DICA PRÁTICA:\*\*(.*)$/gim, '<div class="preview-alert alert-tip"><div><strong>DICA PRÁTICA:</strong>$1</div></div>');
    html = html.replace(/^&gt; (?:📌 )?\*\*PONTO CHAVE:\*\*(.*)$/gim, '<div class="preview-alert alert-info"><div><strong>PONTO CHAVE:</strong>$1</div></div>');
    html = html.replace(/^&gt; (?:🔬 )?\*\*NÍVEL DE EVIDÊNCIA:\*\*(.*)$/gim, '<div class="preview-alert alert-evidence"><div><strong>NÍVEL DE EVIDÊNCIA:</strong>$1</div></div>');
    html = html.replace(/^&gt; (.*)$/gim, '<blockquote class="preview-blockquote">$1</blockquote>');

    // Headings
    html = html.replace(/^### (.*$)/gim, '<h3 class="preview-h3">$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="preview-h2">$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1 class="preview-h1">$1</h1>');

    // Bold & Italic
    html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    html = html.replace(/~~(.*?)~~/g, '<del>$1</del>');
    html = html.replace(/==(.*?)==/g, '<mark style="background: #fef08a; padding: 2px 6px; border-radius: 4px;">$1</mark>');

    // Images
    html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<figure class="preview-figure"><img src="$2" alt="$1" style="max-width: 100%; border-radius: 8px; border: 1px solid #e2e8f0; box-shadow: 0 4px 14px rgba(0,0,0,0.06);" /><figcaption style="font-size: 13px; color: #64748b; margin-top: 6px; text-align: center; font-style: italic;">$1</figcaption></figure>');

    // Links
    html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" style="color: #0284c7; text-decoration: underline; font-weight: 600;">$1</a>');

    // Tables
    html = html.replace(/\|(.+)\|/g, (match) => {
      const cells = match.split("|").filter((c, i, arr) => i > 0 && i < arr.length - 1);
      if (cells.some((c) => c.includes("---"))) {
        return ""; // header separator row
      }
      return `<tr>${cells.map((c) => `<td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-size: 13.5px;">${c.trim()}</td>`).join("")}</tr>`;
    });

    // Paragraphs / linebreaks
    html = html.replace(/\n\n/g, "</p><p style='margin-bottom: 16px; line-height: 1.75; color: #334155; font-size: 15px;'>");
    html = html.replace(/\n/g, "<br />");

    return `<p style='margin-bottom: 16px; line-height: 1.75; color: #334155; font-size: 15px;'>${html}</p>`;
  }, [conteudoPt]);

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: 20,
        padding: "36px",
        border: "1px solid #e2e8f0",
        boxShadow: "0 10px 35px rgba(0, 30, 80, 0.04)",
        marginBottom: "40px",
      }}
    >
      {/* ================= HEADER BAR ================= */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 28,
          borderBottom: "1px solid #f1f5f9",
          paddingBottom: 22,
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "4px 10px",
                borderRadius: 6,
                background: "linear-gradient(135deg, rgba(245, 34, 56, 0.12) 0%, rgba(0, 51, 130, 0.12) 100%)",
                color: "#f52238",
                fontSize: 11.5,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              <BookOpen size={14} className="text-rose-500" />
              <span>Editor Científico da Obra</span>
            </span>

            {lastSavedTime && (
              <span style={{ fontSize: 12, color: "#16a34a", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 4 }}>
                <Check size={14} />
                <span>Rascunho salvo às {lastSavedTime}</span>
              </span>
            )}
          </div>

          <h2 style={{ fontSize: 24, fontWeight: 900, color: "#001a3d", margin: 0, letterSpacing: "-0.02em" }}>
            {numero ? `Editando Capítulo ${numero}: ${tituloPt || "Sem Título"}` : "Cadastrar / Publicar Novo Capítulo"}
          </h2>
          <p style={{ fontSize: 13.5, color: "#64748b", margin: "4px 0 0" }}>
            Editor avançado com suporte a Markdown, tabelas médicas, avisos cirúrgicos e pré-visualização científica instantânea.
          </p>
        </div>

        {/* Quick Presets & Form Actions */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
          <button
            type="button"
            onClick={handleInsertFullStructure}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 14px",
              borderRadius: 8,
              border: "1px solid #cbd5e1",
              background: "#f8fafc",
              color: "#1e293b",
              fontSize: 12.5,
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
            title="Preencher com estrutura padrão completa de capítulo do Tratado"
          >
            <Sparkles size={14} className="text-amber-500" />
            <span>Modelo Científico Completo</span>
          </button>

          {numero && (
            <a
              href={`/pt/capitulo-new/${numero}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 14px",
                borderRadius: 8,
                border: "1px solid #bfdbfe",
                background: "#eff6ff",
                color: "#1d4ed8",
                fontSize: 12.5,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              <Eye size={14} />
              <span>Ver no Leitor</span>
            </a>
          )}

          <button
            type="button"
            onClick={handleClearAll}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 14px",
              borderRadius: 8,
              border: "1px solid #e2e8f0",
              background: "#fff",
              color: "#64748b",
              fontSize: 12.5,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            <RotateCcw size={13} />
            <span>Limpar</span>
          </button>
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          onSubmit(formData);
        }}
      >
        {/* ================= 1. METADADOS ================= */}
        <div style={{ marginBottom: 28 }}>
          <h3 style={{ fontSize: 13.5, fontWeight: 800, color: "#001a3d", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 14 }}>
            1. Metadados & Classificação do Capítulo
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            <div>
              <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
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
                  borderRadius: 10,
                  border: "1px solid #cbd5e1",
                  fontSize: 13.5,
                  background: "#fff",
                  fontWeight: 600,
                  color: "#0f172a",
                }}
              >
                {SECOES.map((s) => (
                  <option key={s.id} value={s.id}>
                    Seção {s.id}: {s.titulo_pt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                Número do Capítulo *
              </label>
              <input
                type="number"
                name="numero"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                placeholder="Ex: 8"
                required
                min={1}
                max={200}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: "1px solid #cbd5e1",
                  fontSize: 14,
                  fontWeight: 800,
                  color: "#f52238",
                  textAlign: "center",
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                Status de Publicação *
              </label>
              <select
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: "1px solid #cbd5e1",
                  fontSize: 13.5,
                  fontWeight: 700,
                  color: status === "publicado" ? "#166534" : "#92400e",
                  background: status === "publicado" ? "#f0fdf4" : "#fefce8",
                }}
              >
                <option value="publicado">Publicado Oficial</option>
                <option value="rascunho">Rascunho / Em Revisão</option>
              </select>
            </div>

            <div>
              <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                Autores / Especialistas Responsáveis
              </label>
              <input
                type="text"
                name="autores"
                value={autores}
                onChange={(e) => setAutores(e.target.value)}
                placeholder="Ex: Dr. Marcelo Ítalo Risso Neto, Dr. Paulo Cavali"
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: "1px solid #cbd5e1",
                  fontSize: 13.5,
                  color: "#0f172a",
                }}
              />
            </div>
          </div>
        </div>

        {/* ================= 2. TÍTULOS MULTILÍNGUES ================= */}
        <div style={{ marginBottom: 28, background: "#f8fafc", padding: "20px", borderRadius: 14, border: "1px solid #e2e8f0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <h3 style={{ fontSize: 13.5, fontWeight: 800, color: "#001a3d", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>
              2. Títulos da Obra (Multilíngue)
            </h3>
            <div style={{ display: "flex", gap: 6 }}>
              {(["pt", "en", "es"] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setActiveTabLang(lang)}
                  style={{
                    padding: "4px 10px",
                    borderRadius: 6,
                    border: "none",
                    background: activeTabLang === lang ? "#001a3d" : "rgba(0,0,0,0.06)",
                    color: activeTabLang === lang ? "#fff" : "#475569",
                    fontSize: 11.5,
                    fontWeight: 700,
                    cursor: "pointer",
                    textTransform: "uppercase",
                  }}
                >
                  {lang === "pt" ? "🇧🇷 PT" : lang === "en" ? "🇺🇸 EN" : "🇪🇸 ES"}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            <div>
              <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                🇧🇷 Título em Português *
              </label>
              <input
                type="text"
                name="titulo_pt"
                value={tituloPt}
                onChange={(e) => setTituloPt(e.target.value)}
                placeholder="Ex: Equilíbrio Sagital e Parâmetros Espinopélvicos"
                required
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: "1px solid #cbd5e1",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#0f172a",
                  background: "#fff",
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#64748b", marginBottom: 6 }}>
                🇺🇸 Título em Inglês (Opcional)
              </label>
              <input
                type="text"
                name="titulo_en"
                value={tituloEn}
                onChange={(e) => setTituloEn(e.target.value)}
                placeholder="Ex: Sagittal Balance and Spinopelvic Parameters"
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: "1px solid #cbd5e1",
                  fontSize: 14,
                  background: "#fff",
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#64748b", marginBottom: 6 }}>
                🇪🇸 Título em Espanhol (Opcional)
              </label>
              <input
                type="text"
                name="titulo_es"
                value={tituloEs}
                onChange={(e) => setTituloEs(e.target.value)}
                placeholder="Ex: Equilibrio Sagital y Parámetros Espinopélvicos"
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: "1px solid #cbd5e1",
                  fontSize: 14,
                  background: "#fff",
                }}
              />
            </div>
          </div>
        </div>

        {/* ================= 3. RESUMO CLÍNICO ================= */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <label style={{ fontSize: 13, fontWeight: 700, color: "#334155" }}>
              3. Resumo Clínico / Abstract Estruturado
            </label>
            <span style={{ fontSize: 12, color: "#64748b" }}>
              {resumoPt.length} caracteres • Síntese dos objetivos e relevância clínica
            </span>
          </div>
          <textarea
            name="resumo_pt"
            value={resumoPt}
            onChange={(e) => setResumoPt(e.target.value)}
            rows={3}
            placeholder="Síntese dos objetivos, métodos diagnósticos, indicações cirúrgicas e relevância clínica deste tema..."
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: 10,
              border: "1px solid #cbd5e1",
              fontSize: 14,
              lineHeight: 1.55,
              color: "#1e293b",
            }}
          />
        </div>

        {/* ================= 4. EDITOR CIENTÍFICO AVANÇADO ================= */}
        <div style={{ marginBottom: 28 }}>
          {/* Header do Bloco 4 com Métricas e View Switcher */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10,
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div>
              <label style={{ fontSize: 13.5, fontWeight: 800, color: "#001a3d", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                4. Conteúdo Científico Completo
              </label>
              <div style={{ fontSize: 12, color: "#64748b", marginTop: 2 }}>
                {metrics.words} palavras • {metrics.chars} caracteres • ~{metrics.readingTimeMin} min de leitura
              </div>
            </div>

            {/* View Mode Toggle: Edit / Split / Preview */}
            <div
              style={{
                display: "inline-flex",
                background: "#f1f5f9",
                padding: "3px",
                borderRadius: 10,
                border: "1px solid #e2e8f0",
              }}
            >
              <button
                type="button"
                onClick={() => setViewMode("edit")}
                style={{
                  padding: "6px 12px",
                  borderRadius: 7,
                  border: "none",
                  background: viewMode === "edit" ? "#ffffff" : "transparent",
                  color: viewMode === "edit" ? "#001a3d" : "#64748b",
                  fontWeight: viewMode === "edit" ? 800 : 600,
                  fontSize: 12,
                  cursor: "pointer",
                  boxShadow: viewMode === "edit" ? "0 2px 6px rgba(0,0,0,0.08)" : "none",
                  transition: "all 0.15s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <Edit3 size={13} />
                <span>Editor</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode("split")}
                style={{
                  padding: "6px 12px",
                  borderRadius: 7,
                  border: "none",
                  background: viewMode === "split" ? "#001a3d" : "transparent",
                  color: viewMode === "split" ? "#ffffff" : "#64748b",
                  fontWeight: viewMode === "split" ? 800 : 600,
                  fontSize: 12,
                  cursor: "pointer",
                  boxShadow: viewMode === "split" ? "0 2px 6px rgba(0,0,0,0.12)" : "none",
                  transition: "all 0.15s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <Columns size={13} />
                <span>Lado a Lado</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode("preview")}
                style={{
                  padding: "6px 12px",
                  borderRadius: 7,
                  border: "none",
                  background: viewMode === "preview" ? "#ffffff" : "transparent",
                  color: viewMode === "preview" ? "#001a3d" : "#64748b",
                  fontWeight: viewMode === "preview" ? 800 : 600,
                  fontSize: 12,
                  cursor: "pointer",
                  boxShadow: viewMode === "preview" ? "0 2px 6px rgba(0,0,0,0.08)" : "none",
                  transition: "all 0.15s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <Eye size={13} />
                <span>Pré-Visualização</span>
              </button>
            </div>
          </div>

          {/* ================= TOOLBAR DE FORMATAÇÃO ================= */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              padding: "8px 12px",
              background: "#00142e",
              borderRadius: "12px 12px 0 0",
              border: "1px solid #00224d",
              borderBottom: "none",
              flexWrap: "wrap",
              color: "#fff",
            }}
          >
            {/* Grupo 1: Títulos */}
            <div style={{ display: "flex", gap: 3, alignItems: "center", borderRight: "1px solid rgba(255,255,255,0.15)", paddingRight: 6, marginRight: 4 }}>
              <button
                type="button"
                onClick={() => insertMarkdown("## ", "\n", "Título da Seção")}
                style={toolbarBtnStyle}
                title="Título H2 (Seção Principal)"
              >
                H2
              </button>
              <button
                type="button"
                onClick={() => insertMarkdown("### ", "\n", "Subtítulo do Tópico")}
                style={toolbarBtnStyle}
                title="Título H3 (Subtítulo)"
              >
                H3
              </button>
            </div>

            {/* Grupo 2: Estilos Básicos */}
            <div style={{ display: "flex", gap: 3, alignItems: "center", borderRight: "1px solid rgba(255,255,255,0.15)", paddingRight: 6, marginRight: 4 }}>
              <button
                type="button"
                onClick={() => insertMarkdown("**", "**", "texto em negrito")}
                style={{ ...toolbarBtnStyle, fontWeight: 900 }}
                title="Negrito (**texto**)"
              >
                B
              </button>
              <button
                type="button"
                onClick={() => insertMarkdown("*", "*", "texto em itálico")}
                style={{ ...toolbarBtnStyle, fontStyle: "italic" }}
                title="Itálico (*texto*)"
              >
                I
              </button>
              <button
                type="button"
                onClick={() => insertMarkdown("~~", "~~", "texto tachado")}
                style={{ ...toolbarBtnStyle, textDecoration: "line-through" }}
                title="Tachado (~~texto~~)"
              >
                S
              </button>
              <button
                type="button"
                onClick={() => insertMarkdown("==", "==", "termo chave")}
                style={{ ...toolbarBtnStyle, display: "inline-flex", alignItems: "center", justifyContent: "center" }}
                title="Marca-texto amarelo (==termo==)"
              >
                <Highlighter size={13} />
              </button>
            </div>

            {/* Grupo 3: Listas */}
            <div style={{ display: "flex", gap: 3, alignItems: "center", borderRight: "1px solid rgba(255,255,255,0.15)", paddingRight: 6, marginRight: 4 }}>
              <button
                type="button"
                onClick={() => insertMarkdown("- ", "\n", "Item com marcador")}
                style={{ ...toolbarBtnStyle, display: "inline-flex", alignItems: "center", gap: 4 }}
                title="Lista com Marcadores"
              >
                <List size={13} />
                <span>Lista</span>
              </button>
              <button
                type="button"
                onClick={() => insertMarkdown("1. ", "\n", "Primeiro passo cirúrgico")}
                style={{ ...toolbarBtnStyle, display: "inline-flex", alignItems: "center", gap: 4 }}
                title="Lista Numerada"
              >
                <ListOrdered size={13} />
                <span>Passos</span>
              </button>
            </div>

            {/* Grupo 4: Alertas e Blocos Cirúrgicos */}
            <div style={{ display: "flex", gap: 3, alignItems: "center", borderRight: "1px solid rgba(255,255,255,0.15)", paddingRight: 6, marginRight: 4 }}>
              <button
                type="button"
                onClick={handleInsertAlert}
                style={{ ...toolbarBtnStyle, color: "#fca5a5", display: "inline-flex", alignItems: "center", gap: 4 }}
                title="Inserir Caixa de Alerta Cirúrgico"
              >
                <AlertTriangle size={13} />
                <span>Alerta</span>
              </button>
              <button
                type="button"
                onClick={() => insertMarkdown("\n> **DICA PRÁTICA:** ", "\n", "Orientação clínica cirúrgica...")}
                style={{ ...toolbarBtnStyle, color: "#fef08a", display: "inline-flex", alignItems: "center", gap: 4 }}
                title="Inserir Dica Prática"
              >
                <Lightbulb size={13} />
                <span>Dica</span>
              </button>
              <button
                type="button"
                onClick={() => insertMarkdown("\n> **PONTO CHAVE:** ", "\n", "Conceito fundamental...")}
                style={{ ...toolbarBtnStyle, color: "#93c5fd", display: "inline-flex", alignItems: "center", gap: 4 }}
                title="Inserir Ponto Chave"
              >
                <Pin size={13} />
                <span>Ponto</span>
              </button>
            </div>

            {/* Grupo 5: Tabelas e Imagens */}
            <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
              <button
                type="button"
                onClick={handleInsertTable}
                style={{ ...toolbarBtnStyle, display: "inline-flex", alignItems: "center", gap: 4 }}
                title="Inserir Tabela Médica"
              >
                <Table size={13} />
                <span>Tabela</span>
              </button>
              <button
                type="button"
                onClick={handleInsertImage}
                style={{ ...toolbarBtnStyle, display: "inline-flex", alignItems: "center", gap: 4 }}
                title="Inserir Figura / Radiografia com legenda"
              >
                <Image size={13} />
                <span>Imagem</span>
              </button>
              <button
                type="button"
                onClick={handleInsertStepByStep}
                style={{ ...toolbarBtnStyle, display: "inline-flex", alignItems: "center", gap: 4 }}
                title="Inserir Estrutura de Técnica Cirúrgica"
              >
                <ListChecks size={13} />
                <span>Passo a Passo</span>
              </button>
            </div>
          </div>

          {/* ================= CORPO DO EDITOR / PREVIEW ================= */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                viewMode === "split" ? "1fr 1fr" : "1fr",
              gap: viewMode === "split" ? 16 : 0,
              minHeight: 480,
              background: "#fafbfd",
              borderRadius: "0 0 12px 12px",
              border: "1px solid #cbd5e1",
              borderTop: "none",
              padding: viewMode === "split" ? "16px" : "0",
            }}
          >
            {/* PAINEL DE ESCRITA (TEXTAREA) */}
            {(viewMode === "edit" || viewMode === "split") && (
              <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                {viewMode === "split" && (
                  <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", color: "#64748b", marginBottom: 6, letterSpacing: "0.05em" }}>
                    Código Markdown
                  </div>
                )}
                <textarea
                  ref={textareaRef}
                  name="conteudo_pt"
                  value={conteudoPt}
                  onChange={(e) => setConteudoPt(e.target.value)}
                  rows={viewMode === "split" ? 22 : 18}
                  placeholder="Escreva o capítulo em markdown estruturado... Use a barra de ferramentas acima para formatar tabelas, avisos cirúrgicos e listas."
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: 420,
                    padding: "16px",
                    borderRadius: viewMode === "split" ? 8 : "0 0 12px 12px",
                    border: viewMode === "split" ? "1px solid #cbd5e1" : "none",
                    fontSize: 14,
                    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                    lineHeight: 1.65,
                    background: "#ffffff",
                    color: "#0f172a",
                    resize: "vertical",
                    outline: "none",
                  }}
                />
              </div>
            )}

            {/* PAINEL DE PRÉ-VISUALIZAÇÃO CIENTÍFICA AO VIVO */}
            {(viewMode === "preview" || viewMode === "split") && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  maxHeight: 600,
                  overflowY: "auto",
                  padding: "20px 24px",
                  background: "#ffffff",
                  borderRadius: viewMode === "split" ? 8 : "0 0 12px 12px",
                  border: viewMode === "split" ? "1px solid #e2e8f0" : "none",
                  boxShadow: "inset 0 2px 6px rgba(0,0,0,0.02)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #f1f5f9", paddingBottom: 10, marginBottom: 16 }}>
                  <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", color: "#003382", letterSpacing: "0.05em", display: "flex", alignItems: "center", gap: 6 }}>
                    <span>🔬</span> Pré-visualização do Tratado
                  </span>
                  <span style={{ fontSize: 11, color: "#94a3b8" }}>
                    Renderização em tempo real
                  </span>
                </div>

                {/* Simulated Chapter Title in Preview */}
                {tituloPt && (
                  <div style={{ marginBottom: 18, borderBottom: "2px solid #f52238", paddingBottom: 12 }}>
                    <div style={{ fontSize: 12, fontWeight: 800, color: "#f52238", textTransform: "uppercase" }}>
                      Capítulo {numero || "?"} • {SECOES.find((s) => s.id.toString() === secaoId)?.titulo_pt || `Seção ${secaoId}`}
                    </div>
                    <h1 style={{ fontSize: 20, fontWeight: 900, color: "#001a3d", margin: "4px 0 6px" }}>
                      {tituloPt}
                    </h1>
                    {autores && (
                      <div style={{ fontSize: 12.5, color: "#64748b", fontStyle: "italic" }}>
                        Por: {autores}
                      </div>
                    )}
                  </div>
                )}

                {/* Rendered HTML */}
                <div
                  className="scientific-content-preview"
                  dangerouslySetInnerHTML={{ __html: renderedPreviewHtml }}
                  style={{
                    fontSize: 14.5,
                    lineHeight: 1.7,
                    color: "#334155",
                  }}
                />
              </div>
            )}
          </div>
        </div>

        {/* ================= 5. REFERÊNCIAS BIBLIOGRÁFICAS ================= */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <label style={{ fontSize: 13, fontWeight: 700, color: "#334155" }}>
              5. Referências Bibliográficas (Estilo Vancouver / ABNT)
            </label>
            <button
              type="button"
              onClick={handleInsertVancouverRef}
              style={{
                fontSize: 12,
                color: "#003382",
                fontWeight: 700,
                background: "none",
                border: "none",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              + Inserir Exemplo Vancouver
            </button>
          </div>
          <textarea
            name="referencias"
            value={referencias}
            onChange={(e) => setReferencias(e.target.value)}
            rows={4}
            placeholder="1. Schwab F, et al. Sagittal parameters in spinal deformity. Spine, 2012.&#10;2. Sociedade Brasileira de Coluna. Diretrizes Clínicas, 2026."
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: 10,
              border: "1px solid #cbd5e1",
              fontSize: 13.5,
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
              color: "#1e293b",
            }}
          />
        </div>

        {/* ================= BOTÃO DE SALVAMENTO ================= */}
        <button
          type="submit"
          disabled={isPending}
          style={{
            width: "100%",
            padding: "16px 24px",
            borderRadius: 12,
            border: "none",
            background: "linear-gradient(135deg, #001a3d 0%, #003366 100%)",
            color: "#fff",
            fontSize: 15.5,
            fontWeight: 800,
            cursor: isPending ? "not-allowed" : "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            boxShadow: "0 6px 20px rgba(0, 26, 61, 0.25)",
            transition: "all 0.2s ease",
            opacity: isPending ? 0.7 : 1,
          }}
        >
          <span>{isPending ? "Salvando no Banco de Dados..." : "💾 Publicar / Salvar Capítulo no Tratado"}</span>
        </button>
      </form>

      {/* Embedded CSS for Preview Stylings */}
      <style jsx global>{`
        .scientific-content-preview h1.preview-h1 {
          font-size: 1.4rem;
          font-weight: 850;
          color: #001a3d;
          margin: 24px 0 10px;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 6px;
        }
        .scientific-content-preview h2.preview-h2 {
          font-size: 1.25rem;
          font-weight: 800;
          color: #001a3d;
          margin: 20px 0 10px;
          border-left: 4px solid #f52238;
          padding-left: 10px;
        }
        .scientific-content-preview h3.preview-h3 {
          font-size: 1.1rem;
          font-weight: 750;
          color: #1e293b;
          margin: 16px 0 8px;
        }
        .scientific-content-preview .preview-alert {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 14px 16px;
          border-radius: 10px;
          margin: 16px 0;
          font-size: 14px;
          line-height: 1.6;
        }
        .scientific-content-preview .preview-alert.alert-warning {
          background: #fff1f2;
          border-left: 4px solid #f43f5e;
          color: #881337;
        }
        .scientific-content-preview .preview-alert.alert-tip {
          background: #fefce8;
          border-left: 4px solid #eab308;
          color: #713f12;
        }
        .scientific-content-preview .preview-alert.alert-info {
          background: #eff6ff;
          border-left: 4px solid #3b82f6;
          color: #1e3a8a;
        }
        .scientific-content-preview .preview-alert.alert-evidence {
          background: #f0fdf4;
          border-left: 4px solid #22c55e;
          color: #14532d;
        }
        .scientific-content-preview .preview-blockquote {
          border-left: 4px solid #cbd5e1;
          padding-left: 14px;
          color: #64748b;
          font-style: italic;
          margin: 14px 0;
        }
        .scientific-content-preview table {
          width: 100%;
          border-collapse: collapse;
          margin: 18px 0;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
        }
        .scientific-content-preview th,
        .scientific-content-preview td {
          padding: 10px 14px;
          border-bottom: 1px solid #e2e8f0;
        }
      `}</style>
    </div>
  );
}

const toolbarBtnStyle: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.08)",
  border: "1px solid rgba(255, 255, 255, 0.12)",
  borderRadius: 6,
  color: "#ffffff",
  fontSize: 11.5,
  fontWeight: 700,
  padding: "4px 8px",
  cursor: "pointer",
  transition: "all 0.15s ease",
};
