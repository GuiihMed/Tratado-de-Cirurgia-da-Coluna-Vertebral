"use client";

import { use, useState, useMemo } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Locale } from "@/lib/types";
import { SECOES } from "@/lib/data/sections-and-chapters";
import { ALL_CHAPTER_REFERENCES, ChapterFullReference } from "@/lib/data/references";

interface ReferenciasPageProps {
  params: Promise<{ locale: string }>;
}

export default function ReferenciasPage({ params }: ReferenciasPageProps) {
  const resolvedParams = use(params);
  const rawLocale = resolvedParams.locale;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedSecao, setSelectedSecao] = useState<number | "all">("all");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  const toggleExpandCard = (chapNum: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [chapNum]: !prev[chapNum],
    }));
  };

  const copyToClipboard = (text: string, id: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  // Filter references based on selected section and search query
  const filteredChapters = useMemo(() => {
    return ALL_CHAPTER_REFERENCES.filter((chap) => {
      if (selectedSecao !== "all" && chap.secao_id !== selectedSecao) {
        return false;
      }

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesNum =
          chap.numero.toString() === query ||
          `cap ${chap.numero}` === query ||
          `capitulo ${chap.numero}` === query ||
          `chapter ${chap.numero}` === query;
        const matchesTitle = chap.titulo_pt.toLowerCase().includes(query);
        const matchesSecao =
          chap.secao_nome.toLowerCase().includes(query) ||
          chap.secao_nome_en.toLowerCase().includes(query) ||
          chap.secao_nome_es.toLowerCase().includes(query);
        const matchesAuthor = chap.autores.some((a) => a.nome.toLowerCase().includes(query));
        const matchesRefs = chap.referencias.some((r) => r.text.toLowerCase().includes(query));

        return matchesNum || matchesTitle || matchesSecao || matchesAuthor || matchesRefs;
      }

      return true;
    });
  }, [selectedSecao, searchQuery]);

  const getSecaoTitle = (secaoId: number) => {
    const s = SECOES.find((item) => item.id === secaoId);
    if (!s) return `Seção ${secaoId}`;
    if (locale === "en") return s.titulo_en;
    if (locale === "es") return s.titulo_es;
    return s.titulo_pt;
  };

  return (
    <div style={{ background: "#f8fafc", color: "#1e293b", minHeight: "100vh", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      {/* Header */}
      <Header locale={locale} currentPage="referencias" />

      <main style={{ paddingBottom: 80 }}>
        {/* ================= HERO SECTION ================= */}
        <section
          className="relative w-full overflow-hidden text-white pt-8 pb-16 border-b border-white/10"
          style={{
            background:
              "radial-gradient(circle at 19% 24%, rgba(255, 87, 86, 0.45), transparent 34%), linear-gradient(105deg, #c9142a 0%, #39244c 28%, #052b5b 58%, #0062a7 100%)",
          }}
        >
          {/* Subtle Anatomical Spine Background Overlay */}
          <img
            src="/assets/hero-spine.png"
            alt=""
            className="absolute right-0 top-0 h-full w-auto max-w-[62%] object-contain pointer-events-none opacity-25 hidden md:block"
            style={{ mixBlendMode: "screen", filter: "contrast(1.2) brightness(1.1)" }}
          />

          <div className="w-full px-4 sm:px-6 md:px-8 mx-auto max-w-7xl relative z-10">
            {/* Breadcrumb */}
            <div style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.7)", marginBottom: 24, display: "flex", alignItems: "center", gap: 8 }}>
              <Link href={`/${locale}`} style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "none" }}>
                {locale === "en" ? "Home" : locale === "es" ? "Inicio" : "Início"}
              </Link>
              <span>›</span>
              <span style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                {locale === "en" ? "The Treatise" : locale === "es" ? "El Tratado" : "O Tratado"}
              </span>
              <span>›</span>
              <span style={{ color: "#fff", fontWeight: 700 }}>
                {locale === "en"
                  ? "Bibliographic References"
                  : locale === "es"
                  ? "Referencias Bibliográficas"
                  : "Referências Bibliográficas"}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              {/* Left Column: 3D Book Cover */}
              <div className="md:col-span-5 flex justify-center md:justify-end">
                <div className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[320px] transition-transform duration-300 hover:scale-[1.03]">
                  <img
                    src="/assets/capa-tratado.png"
                    alt="Tratado de Cirurgia da Coluna Vertebral"
                    className="w-full h-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.65)]"
                  />
                </div>
              </div>

              {/* Right Column: Hero Info */}
              <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
                {/* Badge */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "rgba(245, 34, 56, 0.22)",
                    border: "1px solid rgba(245, 34, 56, 0.4)",
                    padding: "6px 14px",
                    borderRadius: 20,
                    fontSize: 12.5,
                    fontWeight: 700,
                    color: "#ff8090",
                    marginBottom: 16,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <span>📚</span>
                  <span>
                    {locale === "en"
                      ? "OFFICIAL SCIENTIFIC INDEX • 109 CHAPTERS"
                      : locale === "es"
                      ? "ÍNDICE CIENTÍFICO OFICIAL • 109 CAPÍTULOS"
                      : "INDEXAÇÃO CIENTÍFICA OFICIAL • 109 CAPÍTULOS"}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-3">
                  {locale === "en"
                    ? "Bibliographic References"
                    : locale === "es"
                    ? "Referencias Bibliográficas"
                    : "Referências Bibliográficas"}
                </h1>

                <p className="text-base sm:text-lg font-bold text-slate-100 leading-snug max-w-xl mb-3">
                  {locale === "en"
                    ? "Explore scientific citations, journals, and evidence mapped across all 109 Chapters."
                    : locale === "es"
                    ? "Explore citas científicas, revistas y evidencias a lo largo de los 109 Capítulos."
                    : "Consulte as referências científicas completas, artigos indexados e diretrizes clínicas dos 109 capítulos da obra."}
                </p>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl mb-6">
                  {locale === "en"
                    ? "The complete masterwork is exclusively available in printed format. This portal organizes authors, chapters, summaries, and references for clinical study."
                    : locale === "es"
                    ? "La obra completa existe exclusivamente en formato impreso. Este portal organiza autores, capítulos, resúmenes y referencias para estudio y consulta."
                    : "A obra completa existe exclusivamente em formato impresso. Este site organiza autores, capítulos, resumos e referências para estudo e consulta."}
                </p>

                {/* Print Notice Box */}
                <div
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-white/40 mb-6 max-w-xl text-xs sm:text-sm font-semibold"
                  style={{
                    background: "rgba(0, 20, 50, 0.4)",
                    color: "#ffffff",
                  }}
                >
                  <svg className="w-5 h-5 text-[#f52238] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                  <span>
                    {locale === "en"
                      ? "The complete treatise is exclusively available in printed format."
                      : locale === "es"
                      ? "La obra completa existe exclusivamente en formato impreso."
                      : "A obra completa existe exclusivamente em formato impresso."}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3.5 items-center">
                  <a
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#f52238] hover:bg-[#d9142a] text-white font-bold text-sm sm:text-base shadow-lg shadow-red-600/30 transition-all active:scale-[0.98]"
                    href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <span>{locale === "en" ? "Where to Buy" : locale === "es" ? "Dónde Comprar" : "Onde Comprar"}</span>
                    <span>🛒</span>
                  </a>
                  <a
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/40 backdrop-blur-sm transition-all active:scale-[0.98]"
                    href="#tabela-referencias"
                    style={{ textDecoration: "none" }}
                  >
                    <span>{locale === "en" ? "Explore References" : locale === "es" ? "Explorar Referencias" : "Explorar Referências"}</span>
                    <span>↓</span>
                  </a>
                  <Link
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/40 backdrop-blur-sm transition-all active:scale-[0.98]"
                    href={`/${locale}/indice`}
                    style={{ textDecoration: "none" }}
                  >
                    <span>{locale === "en" ? "Chapter Index" : locale === "es" ? "Índice de Capítulos" : "Índice de Capítulos"}</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom 5-Item Stats Bar */}
            <div className="w-full rounded-2xl bg-[#001533]/85 border border-white/15 backdrop-blur-xl p-4 sm:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.4)] mt-10 sm:mt-12">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-0 md:divide-x md:divide-white/10 text-center">
                {/* 1. Capítulos */}
                <div className="flex flex-col items-center justify-center px-2 py-1">
                  <span className="text-2xl mb-1">📖</span>
                  <strong className="text-2xl sm:text-3xl font-bold text-white leading-tight">109</strong>
                  <span className="text-xs text-slate-300 font-semibold mt-0.5">
                    {locale === "en" ? "chapters" : locale === "es" ? "capítulos" : "capítulos"}
                  </span>
                </div>

                {/* 2. Seções Temáticas */}
                <div className="flex flex-col items-center justify-center px-2 py-1">
                  <span className="text-2xl mb-1">🗂️</span>
                  <strong className="text-2xl sm:text-3xl font-bold text-white leading-tight">10</strong>
                  <span className="text-xs text-slate-300 font-semibold mt-0.5">
                    {locale === "en" ? "thematic sections" : locale === "es" ? "secciones temáticas" : "seções temáticas"}
                  </span>
                </div>

                {/* 3. Autores */}
                <div className="flex flex-col items-center justify-center px-2 py-1">
                  <span className="text-2xl mb-1">👥</span>
                  <strong className="text-2xl sm:text-3xl font-bold text-white leading-tight">204</strong>
                  <span className="text-xs text-slate-300 font-semibold mt-0.5">
                    {locale === "en" ? "specialist authors" : locale === "es" ? "autores especialistas" : "autores especialistas"}
                  </span>
                </div>

                {/* 4. Indexação */}
                <div className="flex flex-col items-center justify-center px-2 py-1">
                  <span className="text-2xl mb-1">🌐</span>
                  <strong className="text-base sm:text-lg font-bold text-white leading-snug mt-0.5">DOI &amp; PubMed</strong>
                  <span className="text-xs text-slate-300 font-semibold mt-0.5">
                    {locale === "en" ? "scientific index" : locale === "es" ? "indexación" : "indexação científica"}
                  </span>
                </div>

                {/* 5. Citações / Referências */}
                <div className="col-span-2 sm:col-span-1 flex flex-col items-center justify-center px-2 py-1">
                  <span className="text-2xl mb-1">📑</span>
                  <strong className="text-base sm:text-lg font-bold text-white leading-snug mt-0.5">
                    {locale === "en" ? "References" : locale === "es" ? "Referencias" : "Referências"}
                  </strong>
                  <span className="text-xs text-slate-300 font-semibold mt-0.5">
                    {locale === "en" ? "by chapter" : locale === "es" ? "por capítulo" : "por capítulo"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTROLS & FILTER SECTION ================= */}
        <section id="tabela-referencias" style={{ maxWidth: 1440, margin: "0 auto", padding: "32px 20px 0" }}>
          <div
            style={{
              background: "#ffffff",
              borderRadius: 16,
              padding: "24px",
              boxShadow: "0 4px 20px rgba(0, 30, 80, 0.05)",
              border: "1px solid #e2e8f0",
              marginBottom: 28,
            }}
          >
            {/* Search, View Switcher and Summary */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto auto",
                gap: 14,
                alignItems: "center",
                marginBottom: 20,
              }}
              className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto]"
            >
              {/* Search Bar Input */}
              <div style={{ position: "relative", width: "100%" }}>
                <span
                  style={{
                    position: "absolute",
                    left: 16,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#94a3b8",
                    fontSize: 16,
                    pointerEvents: "none",
                  }}
                >
                  🔍
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    locale === "en"
                      ? "Search by chapter, section, author name, keyword or citation..."
                      : locale === "es"
                      ? "Buscar por capítulo, sección, autor, palabra clave o cita..."
                      : "Buscar por capítulo, seção, autor, palavra-chave ou citação..."
                  }
                  style={{
                    width: "100%",
                    padding: "13px 44px 13px 46px",
                    borderRadius: 10,
                    border: "1.5px solid #cbd5e1",
                    fontSize: 14.5,
                    color: "#0f172a",
                    outline: "none",
                    background: "#f8fafc",
                    transition: "all 0.2s ease",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#003382";
                    e.currentTarget.style.background = "#ffffff";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0, 51, 130, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#cbd5e1";
                    e.currentTarget.style.background = "#f8fafc";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    style={{
                      position: "absolute",
                      right: 14,
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "none",
                      border: "none",
                      color: "#94a3b8",
                      fontSize: 14,
                      cursor: "pointer",
                      fontWeight: 700,
                    }}
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* View Mode Toggle: 3-Colunas Cards vs 3-Colunas Tabela */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "#f1f5f9",
                  padding: "4px",
                  borderRadius: 10,
                  border: "1px solid #e2e8f0",
                  gap: 4,
                }}
              >
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  style={{
                    padding: "8px 14px",
                    borderRadius: 7,
                    fontSize: 13,
                    fontWeight: 700,
                    border: "none",
                    background: viewMode === "grid" ? "#001a3d" : "transparent",
                    color: viewMode === "grid" ? "#ffffff" : "#64748b",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    transition: "all 0.15s ease",
                  }}
                  title="3 Capítulos por Linha (Grade de 3 Colunas)"
                >
                  <span>🔲</span>
                  <span>{locale === "en" ? "3-Col Grid" : locale === "es" ? "Grid 3 Col" : "Grade 3 Colunas"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode("table")}
                  style={{
                    padding: "8px 14px",
                    borderRadius: 7,
                    fontSize: 13,
                    fontWeight: 700,
                    border: "none",
                    background: viewMode === "table" ? "#001a3d" : "transparent",
                    color: viewMode === "table" ? "#ffffff" : "#64748b",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    transition: "all 0.15s ease",
                  }}
                  title="Tabela Estruturada de 3 Colunas"
                >
                  <span>📑</span>
                  <span>{locale === "en" ? "3-Col Table" : locale === "es" ? "Tabla 3 Col" : "Tabela 3 Colunas"}</span>
                </button>
              </div>

              {/* Counter Result Badge */}
              <div
                style={{
                  background: "#f1f5f9",
                  padding: "10px 18px",
                  borderRadius: 10,
                  fontSize: 13.5,
                  fontWeight: 600,
                  color: "#475569",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}
              >
                <strong style={{ color: "#001a3d", fontWeight: 800 }}>{filteredChapters.length}</strong>{" "}
                <span>
                  {locale === "en"
                    ? `of ${ALL_CHAPTER_REFERENCES.length} chapters`
                    : locale === "es"
                    ? `de ${ALL_CHAPTER_REFERENCES.length} capítulos`
                    : `de ${ALL_CHAPTER_REFERENCES.length} capítulos`}
                </span>
              </div>
            </div>

            {/* Section Filter Pills */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
              <span
                style={{
                  fontSize: 12.5,
                  fontWeight: 700,
                  color: "#64748b",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  marginRight: 4,
                }}
              >
                {locale === "en" ? "Filter Section:" : locale === "es" ? "Filtrar Sección:" : "Filtrar Seção:"}
              </span>

              {/* All Sections */}
              <button
                type="button"
                onClick={() => setSelectedSecao("all")}
                style={{
                  padding: "6px 14px",
                  borderRadius: 20,
                  fontSize: 12.5,
                  fontWeight: 700,
                  border: selectedSecao === "all" ? "1px solid #001a3d" : "1px solid #e2e8f0",
                  background: selectedSecao === "all" ? "#001a3d" : "#f8fafc",
                  color: selectedSecao === "all" ? "#ffffff" : "#475569",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                {locale === "en" ? "All Sections (1–10)" : locale === "es" ? "Todas las Secciones (1–10)" : "Todas as Seções (1–10)"}
              </button>

              {/* 10 Sections Buttons */}
              {SECOES.map((sec) => {
                const isSelected = selectedSecao === sec.id;
                return (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => setSelectedSecao(sec.id)}
                    style={{
                      padding: "6px 14px",
                      borderRadius: 20,
                      fontSize: 12.5,
                      fontWeight: 700,
                      border: isSelected ? "1px solid #dc2626" : "1px solid #e2e8f0",
                      background: isSelected ? "#dc2626" : "#f8fafc",
                      color: isSelected ? "#ffffff" : "#475569",
                      cursor: "pointer",
                      transition: "all 0.15s ease",
                    }}
                  >
                    <span>{locale === "en" ? `Section ${sec.id}` : locale === "es" ? `Sección ${sec.id}` : `Seção ${sec.id}`}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ================= EMPTY STATE ================= */}
          {filteredChapters.length === 0 && (
            <div style={{ background: "#ffffff", borderRadius: 16, border: "1px solid #e2e8f0", padding: "60px 20px", textAlign: "center", color: "#64748b" }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>🔍</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#001a3d", margin: "0 0 8px" }}>
                {locale === "en"
                  ? "No references found"
                  : locale === "es"
                  ? "No se encontraron referencias"
                  : "Nenhuma referência encontrada"}
              </h3>
              <p style={{ fontSize: 14, margin: "0 0 16px" }}>
                {locale === "en"
                  ? "Try adjusting your search terms or clearing the active filters."
                  : locale === "es"
                  ? "Intente ajustar sus términos de búsqueda o limpiar los filtros activos."
                  : "Tente ajustar os termos da busca ou limpar os filtros selecionados."}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedSecao("all");
                }}
                style={{
                  padding: "8px 20px",
                  borderRadius: 8,
                  background: "#001a3d",
                  color: "#ffffff",
                  border: "none",
                  fontWeight: 700,
                  fontSize: 13.5,
                  cursor: "pointer",
                }}
              >
                {locale === "en" ? "Clear Filters" : locale === "es" ? "Limpiar Filtros" : "Limpar Filtros"}
              </button>
            </div>
          )}

          {/* ================= VIEW 1: 3-COLUMN CARD GRID (EXACTLY 3 CHAPTERS PER ROW) ================= */}
          {filteredChapters.length > 0 && viewMode === "grid" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {filteredChapters.map((chap) => {
                const isExpanded = !!expandedCards[chap.numero];
                const displayedRefs = isExpanded ? chap.referencias : chap.referencias.slice(0, 3);
                const hasMoreRefs = chap.referencias.length > 3;

                return (
                  <div
                    key={chap.numero}
                    className="flex flex-col bg-white rounded-2xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,30,80,0.05)] hover:shadow-[0_12px_32px_rgba(0,30,80,0.12)] transition-all duration-300 overflow-hidden h-full"
                  >
                    {/* Card Header */}
                    <div className="p-5 border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white">
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider ${
                            chap.secao_id <= 5
                              ? "bg-red-50 text-red-700 border border-red-200/80"
                              : "bg-sky-50 text-sky-800 border border-sky-200/80"
                          }`}
                        >
                          <span>{locale === "en" ? `Section ${chap.secao_id}` : locale === "es" ? `Sección ${chap.secao_id}` : `Seção ${chap.secao_id}`}</span>
                        </span>

                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#001738] text-white text-xs font-extrabold shadow-sm">
                          {chap.numero}
                        </span>
                      </div>

                      {/* Section Title */}
                      <p className="text-xs font-semibold text-slate-500 line-clamp-1 mb-1.5">
                        {getSecaoTitle(chap.secao_id)}
                      </p>

                      {/* Chapter Title */}
                      <h2 className="text-base font-bold text-slate-900 leading-snug hover:text-red-600 transition-colors min-h-[44px]">
                        <Link href={`/${locale}/capitulo/${chap.numero}`} className="hover:underline">
                          {chap.titulo_pt}
                        </Link>
                      </h2>
                    </div>

                    {/* Authors Box */}
                    <div className="px-5 py-3 bg-slate-50/60 border-b border-slate-100 min-h-[68px]">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                        <span>👥</span>
                        <span>{locale === "en" ? "Authors" : locale === "es" ? "Autores" : "Autores"}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {chap.autores.map((autor, aIdx) => (
                          <span
                            key={aIdx}
                            className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white border border-slate-200/80 text-[11.5px] font-semibold text-slate-700 shadow-2xs"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                            <span>{autor.nome}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* References List */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                            <span>📚</span>
                            <span>
                              {locale === "en"
                                ? `${chap.referencias.length} Citations`
                                : locale === "es"
                                ? `${chap.referencias.length} Citas`
                                : `${chap.referencias.length} Referências`}
                            </span>
                          </span>
                        </div>

                        <div className="space-y-2.5">
                          {displayedRefs.map((ref, rIdx) => {
                            const refId = `card-ref-${chap.numero}-${rIdx}`;
                            const isCopied = copiedId === refId;
                            return (
                              <div
                                key={rIdx}
                                className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-slate-300 transition-colors text-xs text-slate-700 leading-relaxed"
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <p className="flex-1 text-[11.5px] text-slate-800 font-medium">
                                    <strong className="text-red-600 font-bold mr-1">{rIdx + 1}.</strong>
                                    {ref.text}
                                  </p>
                                </div>

                                <div className="mt-2 pt-1.5 border-t border-slate-200/60 flex items-center justify-between flex-wrap gap-2">
                                  <div className="flex items-center gap-1.5">
                                    {ref.doi ? (
                                      <a
                                        href={`https://doi.org/${ref.doi}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-sky-100 text-sky-800 text-[10px] font-bold hover:bg-sky-200 transition-colors"
                                      >
                                        <span>doi</span>
                                        <span>↗</span>
                                      </a>
                                    ) : (
                                      <a
                                        href={`https://scholar.google.com/scholar?q=${encodeURIComponent(ref.text)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-sky-100/80 text-sky-800 text-[10px] font-bold hover:bg-sky-200 transition-colors"
                                      >
                                        <span>doi</span>
                                        <span>↗</span>
                                      </a>
                                    )}

                                    {ref.pmid ? (
                                      <a
                                        href={`https://pubmed.ncbi.nlm.nih.gov/${ref.pmid}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold hover:bg-emerald-200 transition-colors"
                                      >
                                        <span>PubMed</span>
                                        <span>↗</span>
                                      </a>
                                    ) : (
                                      <a
                                        href={`https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(ref.text)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-100/80 text-emerald-800 text-[10px] font-bold hover:bg-emerald-200 transition-colors"
                                      >
                                        <span>PubMed</span>
                                        <span>↗</span>
                                      </a>
                                    )}
                                  </div>

                                  <button
                                    type="button"
                                    onClick={() => copyToClipboard(ref.text, refId)}
                                    className="inline-flex items-center gap-1 text-[10.5px] font-semibold text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                                  >
                                    <span>{isCopied ? "✓ Copiado" : "Copiar"}</span>
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {hasMoreRefs && (
                          <button
                            type="button"
                            onClick={() => toggleExpandCard(chap.numero)}
                            className="mt-3 w-full py-1.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                          >
                            {isExpanded
                              ? (locale === "en" ? "▲ Show less" : locale === "es" ? "▲ Mostrar menos" : "▲ Mostrar menos")
                              : (locale === "en"
                                  ? `▼ Show +${chap.referencias.length - 3} citations`
                                  : locale === "es"
                                  ? `▼ Ver +${chap.referencias.length - 3} citas`
                                  : `▼ Ver +${chap.referencias.length - 3} referências`)}
                          </button>
                        )}
                      </div>

                      {/* Card Bottom Link */}
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <Link
                          href={`/${locale}/capitulo/${chap.numero}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#003382] hover:text-red-600 transition-colors"
                        >
                          <span>{locale === "en" ? "View Full Chapter" : locale === "es" ? "Ver Capítulo Completo" : "Ver Capítulo Completo"}</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* ================= VIEW 2: 3-COLUMN STRUCTURED TABLE ================= */}
          {filteredChapters.length > 0 && viewMode === "table" && (
            <div
              style={{
                background: "#ffffff",
                borderRadius: 16,
                border: "1px solid #e2e8f0",
                boxShadow: "0 10px 30px rgba(0, 20, 60, 0.04)",
                overflow: "hidden",
              }}
            >
              {/* 3-Column Table Header */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "360px 280px 1fr",
                  gap: 24,
                  padding: "16px 24px",
                  background: "#001738",
                  color: "#ffffff",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
                className="hidden lg:grid"
              >
                <div>1. {locale === "en" ? "Chapter & Section" : locale === "es" ? "Capítulo y Sección" : "Capítulo e Seção"}</div>
                <div>2. {locale === "en" ? "Authors / Specialists" : locale === "es" ? "Autores / Especialistas" : "Autores / Especialistas"}</div>
                <div>3. {locale === "en" ? "Bibliographic References" : locale === "es" ? "Referencias Bibliográficas" : "Referências Bibliográficas"}</div>
              </div>

              {/* 3-Column Rows */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                {filteredChapters.map((chap, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <article
                      key={chap.numero}
                      style={{
                        padding: "24px",
                        background: isEven ? "#ffffff" : "#fcfdfe",
                        borderBottom: index === filteredChapters.length - 1 ? "none" : "1px solid #edf2f7",
                        transition: "background 0.2s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#f1f6fd")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = isEven ? "#ffffff" : "#fcfdfe")}
                    >
                      <div
                        style={{
                          display: "grid",
                          gap: 24,
                          alignItems: "flex-start",
                        }}
                        className="grid grid-cols-1 lg:grid-cols-[360px_280px_1fr]"
                      >
                        {/* Coluna 1: CAPÍTULO & SEÇÃO */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold uppercase ${
                                chap.secao_id <= 5
                                  ? "bg-red-50 text-red-700 border border-red-200"
                                  : "bg-sky-50 text-sky-800 border border-sky-200"
                              }`}
                            >
                              {locale === "en" ? `Section ${chap.secao_id}` : locale === "es" ? `Sección ${chap.secao_id}` : `Seção ${chap.secao_id}`}
                            </span>
                            <span className="text-xs font-bold text-slate-400">•</span>
                            <span className="text-xs font-bold text-red-600 uppercase">
                              {locale === "en" ? `Chapter ${chap.numero}` : locale === "es" ? `Capítulo ${chap.numero}` : `Capítulo ${chap.numero}`}
                            </span>
                          </div>

                          <h2 style={{ fontSize: 16, fontWeight: 700, color: "#001a3d", margin: "0 0 8px", lineHeight: 1.35 }}>
                            <Link
                              href={`/${locale}/capitulo/${chap.numero}`}
                              style={{
                                color: "inherit",
                                textDecoration: "none",
                                transition: "color 0.2s ease",
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.color = "#dc2626")}
                              onMouseLeave={(e) => (e.currentTarget.style.color = "#001a3d")}
                            >
                              {chap.titulo_pt}
                            </Link>
                          </h2>

                          <p className="text-xs text-slate-500 font-medium mb-3">
                            {getSecaoTitle(chap.secao_id)}
                          </p>

                          <Link
                            href={`/${locale}/capitulo/${chap.numero}`}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 6,
                              fontSize: 12.5,
                              fontWeight: 700,
                              color: "#003382",
                              textDecoration: "none",
                            }}
                          >
                            <span>{locale === "en" ? "View chapter" : locale === "es" ? "Ver capítulo" : "Ver capítulo"}</span>
                            <span>→</span>
                          </Link>
                        </div>

                        {/* Coluna 2: AUTORES / ESPECIALISTAS */}
                        <div>
                          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                            {chap.autores.map((autor, aIdx) => (
                              <div
                                key={aIdx}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 8,
                                  fontSize: 13,
                                  color: "#334155",
                                  fontWeight: 600,
                                }}
                              >
                                <span style={{ fontSize: 14 }}>👤</span>
                                <span>{autor.nome}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Coluna 3: REFERÊNCIAS BIBLIOGRÁFICAS */}
                        <div>
                          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            {chap.referencias.map((ref, rIdx) => {
                              const refId = `table-ref-${chap.numero}-${rIdx}`;
                              const isCopied = copiedId === refId;
                              return (
                                <div
                                  key={rIdx}
                                  style={{
                                    padding: "12px 14px",
                                    borderRadius: 10,
                                    background: "#f8fafc",
                                    border: "1px solid #e2e8f0",
                                    fontSize: 13,
                                    lineHeight: 1.5,
                                    color: "#334155",
                                  }}
                                >
                                  <div style={{ marginBottom: 6 }}>
                                    <strong style={{ color: "#001a3d", marginRight: 6 }}>{rIdx + 1}.</strong>
                                    <span>{ref.text}</span>
                                  </div>

                                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginTop: 6 }}>
                                    {ref.doi ? (
                                      <a
                                        href={`https://doi.org/${ref.doi}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                          display: "inline-flex",
                                          alignItems: "center",
                                          gap: 4,
                                          fontSize: 11,
                                          fontWeight: 700,
                                          padding: "3px 8px",
                                          borderRadius: 4,
                                          background: "rgba(0, 51, 130, 0.08)",
                                          color: "#003382",
                                          textDecoration: "none",
                                          border: "1px solid rgba(0, 51, 130, 0.2)",
                                        }}
                                      >
                                        <span>doi</span>
                                        <span>↗</span>
                                      </a>
                                    ) : (
                                      <a
                                        href={`https://scholar.google.com/scholar?q=${encodeURIComponent(ref.text)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                          display: "inline-flex",
                                          alignItems: "center",
                                          gap: 4,
                                          fontSize: 11,
                                          fontWeight: 700,
                                          padding: "3px 8px",
                                          borderRadius: 4,
                                          background: "rgba(0, 51, 130, 0.08)",
                                          color: "#003382",
                                          textDecoration: "none",
                                          border: "1px solid rgba(0, 51, 130, 0.2)",
                                        }}
                                      >
                                        <span>doi</span>
                                        <span>↗</span>
                                      </a>
                                    )}

                                    {ref.pmid ? (
                                      <a
                                        href={`https://pubmed.ncbi.nlm.nih.gov/${ref.pmid}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                          display: "inline-flex",
                                          alignItems: "center",
                                          gap: 4,
                                          fontSize: 11,
                                          fontWeight: 700,
                                          padding: "3px 8px",
                                          borderRadius: 4,
                                          background: "rgba(16, 185, 129, 0.1)",
                                          color: "#047857",
                                          textDecoration: "none",
                                          border: "1px solid rgba(16, 185, 129, 0.25)",
                                        }}
                                      >
                                        <span>PubMed</span>
                                        <span>↗</span>
                                      </a>
                                    ) : (
                                      <a
                                        href={`https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(ref.text)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                          display: "inline-flex",
                                          alignItems: "center",
                                          gap: 4,
                                          fontSize: 11,
                                          fontWeight: 700,
                                          padding: "3px 8px",
                                          borderRadius: 4,
                                          background: "rgba(16, 185, 129, 0.1)",
                                          color: "#047857",
                                          textDecoration: "none",
                                          border: "1px solid rgba(16, 185, 129, 0.25)",
                                        }}
                                      >
                                        <span>PubMed</span>
                                        <span>↗</span>
                                      </a>
                                    )}

                                    <button
                                      type="button"
                                      onClick={() => copyToClipboard(ref.text, refId)}
                                      style={{
                                        border: "none",
                                        background: "none",
                                        color: "#64748b",
                                        fontSize: 11.5,
                                        fontWeight: 600,
                                        cursor: "pointer",
                                        marginLeft: "auto",
                                      }}
                                    >
                                      {isCopied ? "✓ Copiado" : "Copiar"}
                                    </button>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <Footer locale={locale} />
    </div>
  );
}
