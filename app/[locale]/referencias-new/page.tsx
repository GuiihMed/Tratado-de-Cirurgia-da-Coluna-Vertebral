"use client";

import { use, useState, useMemo, useEffect } from "react";
import Link from "next/link";
import ModernHeader from "@/components/modern/ModernHeader";
import ModernFooter from "@/components/modern/ModernFooter";
import { Locale } from "@/lib/types";
import { ALL_CHAPTER_REFERENCES } from "@/lib/data/references";
import { SECOES, INITIAL_CHAPTERS } from "@/lib/data/sections-and-chapters";
import {
  Search,
  Filter,
  Copy,
  Check,
  ExternalLink,
  Users,
  ArrowRight,
  BookOpen,
  LayoutGrid,
  List,
} from "lucide-react";

interface ReferenciasNewProps {
  params: Promise<{ locale: string }>;
}

export default function ReferenciasNewPage({ params }: ReferenciasNewProps) {
  const resolvedParams = use(params);
  const rawLocale = resolvedParams.locale;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSecao, setSelectedSecao] = useState<number | "all">("all");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  // Pagination states
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number | "all">(12);

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

  // Filtered chapters list
  const filteredChapters = useMemo(() => {
    return ALL_CHAPTER_REFERENCES.filter((chap) => {
      if (selectedSecao !== "all" && chap.secao_id !== selectedSecao) {
        return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesNum =
          chap.numero.toString() === q ||
          `cap ${chap.numero}` === q ||
          `capitulo ${chap.numero}` === q ||
          `chapter ${chap.numero}` === q;
        const matchesTitle = chap.titulo_pt.toLowerCase().includes(q);
        const matchesSecao =
          chap.secao_nome.toLowerCase().includes(q) ||
          chap.secao_nome_en.toLowerCase().includes(q) ||
          chap.secao_nome_es.toLowerCase().includes(q);
        const matchesAuthor = chap.autores.some((a) => a.nome.toLowerCase().includes(q));
        const matchesRefs = chap.referencias.some((r) => r.text.toLowerCase().includes(q));

        return matchesNum || matchesTitle || matchesSecao || matchesAuthor || matchesRefs;
      }

      return true;
    });
  }, [selectedSecao, searchQuery]);

  // Reset to page 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedSecao, pageSize]);

  // Pagination calculations
  const totalItems = filteredChapters.length;
  const itemsPerPage = pageSize === "all" ? (totalItems || 1) : pageSize;
  const totalPages = pageSize === "all" || totalItems === 0 ? 1 : Math.ceil(totalItems / itemsPerPage);
  const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages);

  const paginatedChapters = useMemo(() => {
    if (pageSize === "all") return filteredChapters;
    const start = (safeCurrentPage - 1) * itemsPerPage;
    return filteredChapters.slice(start, start + itemsPerPage);
  }, [filteredChapters, safeCurrentPage, itemsPerPage, pageSize]);

  const startItem = totalItems === 0 ? 0 : (safeCurrentPage - 1) * itemsPerPage + 1;
  const endItem = pageSize === "all" ? totalItems : Math.min(safeCurrentPage * itemsPerPage, totalItems);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    if (typeof window !== "undefined") {
      const el = document.getElementById("tabela-referencias");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const getPageNumbers = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (safeCurrentPage <= 4) {
      return [1, 2, 3, 4, 5, "...", totalPages];
    }
    if (safeCurrentPage >= totalPages - 3) {
      return [1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, "...", safeCurrentPage - 1, safeCurrentPage, safeCurrentPage + 1, "...", totalPages];
  };

  const getSecaoTitle = (secaoId: number) => {
    const s = SECOES.find((item) => item.id === secaoId);
    if (!s) return `Seção ${secaoId}`;
    if (locale === "en") return s.titulo_en;
    if (locale === "es") return s.titulo_es;
    return s.titulo_pt;
  };

  return (
    <div style={{ background: "#000d1e", color: "#f8fafc", minHeight: "100vh", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      {/* Header */}
      <ModernHeader locale={locale} currentPage="referencias-new" />

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
              <Link href={`/${locale}/home-new`} style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "none" }}>
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

            {/* Hero Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              {/* Left Column: 3D Book Cover */}
              <div className="md:col-span-5 flex justify-center md:justify-end">
                <div className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[320px] transition-transform duration-300 hover:scale-[1.03]">
                  <img
                    src="/assets/capa-tratado.png"
                    alt="Capa do Livro Tratado de Cirurgia da Coluna Vertebral"
                    className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)]"
                  />
                </div>
              </div>

              {/* Right Column: Hero Content */}
              <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
                {/* Institutional Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#f52238] animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    {locale === "en"
                      ? "OFFICIAL SCIENTIFIC CORPUS • 109 CHAPTERS"
                      : locale === "es"
                      ? "CORPUS CIENTÍFICO OFICIAL • 109 CAPÍTULOS"
                      : "CORPO CIENTÍFICO OFICIAL • 109 CAPÍTULOS"}
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
                    href={`/${locale}/indice-new`}
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

        {/* ================= CONTROLS & TABLE SECTION ================= */}
        <section id="tabela-referencias" style={{ maxWidth: 1440, margin: "0 auto", padding: "40px 20px 0" }}>
          {/* Controls Bar */}
          <div
            style={{
              background: "rgba(0, 20, 50, 0.8)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: 18,
              padding: "24px",
              backdropFilter: "blur(16px)",
              marginBottom: 32,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
            }}
          >
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
              {/* Search input */}
              <div style={{ position: "relative", width: "100%" }}>
                <Search
                  size={18}
                  style={{
                    position: "absolute",
                    left: 14,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#94a3b8",
                  }}
                />
                <input
                  type="text"
                  placeholder={
                    locale === "en"
                      ? "Search by chapter, author, journal, or keyword..."
                      : locale === "es"
                      ? "Buscar por capítulo, autor, revista o palabra clave..."
                      : "Buscar por capítulo, autor, periódico ou palavra-chave..."
                  }
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "13px 44px 13px 46px",
                    borderRadius: 12,
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.18)",
                    color: "#ffffff",
                    fontSize: 14.5,
                    outline: "none",
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
                  background: "rgba(0, 15, 35, 0.6)",
                  padding: "4px",
                  borderRadius: 10,
                  border: "1px solid rgba(255, 255, 255, 0.15)",
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
                    background: viewMode === "grid" ? "#f52238" : "transparent",
                    color: "#ffffff",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    transition: "all 0.15s ease",
                  }}
                  title="3 Capítulos por Linha (Grade de 3 Colunas)"
                >
                  <LayoutGrid size={15} />
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
                    background: viewMode === "table" ? "#f52238" : "transparent",
                    color: "#ffffff",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    transition: "all 0.15s ease",
                  }}
                  title="Tabela Estruturada de 3 Colunas"
                >
                  <List size={15} />
                  <span>{locale === "en" ? "3-Col Table" : locale === "es" ? "Tabla 3 Col" : "Tabela 3 Colunas"}</span>
                </button>
              </div>

              {/* Results count badge & items per page */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    padding: "10px 16px",
                    borderRadius: 10,
                    fontSize: 13.5,
                    fontWeight: 600,
                    color: "#cbd5e1",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                  }}
                >
                  <strong style={{ color: "#ffffff", fontWeight: 800 }}>{filteredChapters.length}</strong>{" "}
                  <span>
                    {locale === "en"
                      ? `of ${ALL_CHAPTER_REFERENCES.length} chapters`
                      : locale === "es"
                      ? `de ${ALL_CHAPTER_REFERENCES.length} capítulos`
                      : `de ${ALL_CHAPTER_REFERENCES.length} capítulos`}
                  </span>
                </div>

                {/* Page Size Selector */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    background: "rgba(255, 255, 255, 0.06)",
                    padding: "3px 4px",
                    borderRadius: 10,
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    gap: 3,
                  }}
                >
                  {[12, 24, 48, "all"].map((size) => {
                    const isSelected = pageSize === size;
                    const label = size === "all" ? (locale === "en" ? "All" : locale === "es" ? "Todos" : "Todos") : `${size}`;
                    return (
                      <button
                        key={String(size)}
                        type="button"
                        onClick={() => setPageSize(size as number | "all")}
                        style={{
                          padding: "6px 10px",
                          borderRadius: 7,
                          fontSize: 12,
                          fontWeight: 700,
                          border: "none",
                          background: isSelected ? "#f52238" : "transparent",
                          color: "#ffffff",
                          cursor: "pointer",
                          transition: "all 0.15s ease",
                        }}
                        title={size === "all" ? "Exibir todos os capítulos" : `Exibir ${size} capítulos por página`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Section Filter Pills */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#94a3b8",
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
                  border: selectedSecao === "all" ? "1px solid #f52238" : "1px solid rgba(255, 255, 255, 0.15)",
                  background: selectedSecao === "all" ? "#f52238" : "rgba(255, 255, 255, 0.05)",
                  color: "#ffffff",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                {locale === "en" ? "All Sections (1–10)" : locale === "es" ? "Todas las Secciones (1–10)" : "Todas as Seções (1–10)"}
              </button>

              {/* 10 Sections */}
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
                      border: isSelected ? "1px solid #f52238" : "1px solid rgba(255, 255, 255, 0.15)",
                      background: isSelected ? "#f52238" : "rgba(255, 255, 255, 0.05)",
                      color: "#ffffff",
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

          {/* Current Page Range Info Bar (when paginated) */}
          {totalItems > 0 && pageSize !== "all" && totalPages > 1 && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 12,
                margin: "0 0 20px 0",
                padding: "10px 16px",
                background: "rgba(0, 20, 50, 0.6)",
                borderRadius: 12,
                border: "1px solid rgba(255, 255, 255, 0.12)",
                fontSize: 13,
                color: "#94a3b8",
              }}
            >
              <div>
                <span>
                  {locale === "en" ? "Showing chapters " : locale === "es" ? "Mostrando capítulos " : "Exibindo capítulos "}
                </span>
                <strong style={{ color: "#ffffff" }}>{startItem}–{endItem}</strong>
                <span>
                  {locale === "en" ? ` of ${totalItems}` : locale === "es" ? ` de ${totalItems}` : ` de ${totalItems}`}
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontWeight: 600, color: "#e2e8f0" }}>
                  {locale === "en" ? `Page ${safeCurrentPage} of ${totalPages}` : locale === "es" ? `Página ${safeCurrentPage} de ${totalPages}` : `Página ${safeCurrentPage} de ${totalPages}`}
                </span>
              </div>
            </div>
          )}

          {/* ================= EMPTY STATE ================= */}
          {filteredChapters.length === 0 && (
            <div
              style={{
                background: "rgba(0, 20, 50, 0.6)",
                borderRadius: 16,
                border: "1px solid rgba(255, 255, 255, 0.15)",
                padding: "60px 20px",
                textAlign: "center",
                color: "#94a3b8",
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 12 }}>🔍</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#ffffff", margin: "0 0 8px" }}>
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
                  background: "#f52238",
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
              {paginatedChapters.map((chap) => {
                const isExpanded = !!expandedCards[chap.numero];
                const displayedRefs = isExpanded ? chap.referencias : chap.referencias.slice(0, 3);
                const hasMoreRefs = chap.referencias.length > 3;

                return (
                  <div
                    key={chap.numero}
                    className="flex flex-col bg-[#001738]/90 rounded-2xl border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:border-red-500/50 transition-all duration-300 overflow-hidden h-full backdrop-blur-md"
                  >
                    {/* Card Header */}
                    <div className="p-5 border-b border-white/10 bg-gradient-to-br from-white/5 to-transparent">
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider ${
                            chap.secao_id <= 5
                              ? "bg-red-500/20 text-red-300 border border-red-500/30"
                              : "bg-sky-500/20 text-sky-300 border border-sky-500/30"
                          }`}
                        >
                          <span>{locale === "en" ? `Section ${chap.secao_id}` : locale === "es" ? `Sección ${chap.secao_id}` : `Seção ${chap.secao_id}`}</span>
                        </span>

                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-600 text-white text-xs font-extrabold shadow-sm">
                          {chap.numero}
                        </span>
                      </div>

                      {/* Section Title */}
                      <p className="text-xs font-semibold text-slate-400 line-clamp-1 mb-1.5">
                        {getSecaoTitle(chap.secao_id)}
                      </p>

                      {/* Chapter Title */}
                      <h2 className="text-base font-bold text-white leading-snug hover:text-red-400 transition-colors min-h-[44px]">
                        <Link href={`/${locale}/capitulo-new/${chap.numero}`} className="hover:underline">
                          {chap.titulo_pt}
                        </Link>
                      </h2>
                    </div>

                    {/* Authors Box */}
                    <div className="px-5 py-3 bg-black/20 border-b border-white/10 min-h-[68px]">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center justify-between gap-1.5">
                        <div className="flex items-center gap-1.5">
                          <Users size={13} className="text-slate-400" />
                          <span>{locale === "en" ? "Authors" : locale === "es" ? "Autores" : "Autores"}</span>
                        </div>
                        {chap.pagina_inicial && chap.pagina_final && (
                          <span className="text-[10.5px] font-bold text-slate-300 bg-white/10 px-2 py-0.5 rounded border border-white/10">
                            📖 {locale === "en" ? "p. " : locale === "es" ? "p. " : "p. "}{chap.pagina_inicial}–{chap.pagina_final}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {chap.autores.map((autor, aIdx) => (
                          <span
                            key={aIdx}
                            className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/10 border border-white/10 text-[11.5px] font-semibold text-slate-200"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                            <span>{autor.nome}</span>
                          </span>
                        ))}
                      </div>
                      {chap.autores_vancouver && (
                        <div className="text-[11px] text-sky-300 bg-sky-950/40 px-2 py-1 rounded border border-sky-500/20 font-medium">
                          <strong>Vancouver:</strong> {chap.autores_vancouver}
                        </div>
                      )}
                    </div>

                    {/* Official Chapter Vancouver Reference Card */}
                    {chap.referencia_vancouver && (
                      <div className="px-5 py-3 bg-red-950/30 border-b border-red-500/20">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-[10.5px] font-bold text-red-400 uppercase tracking-wider flex items-center gap-1">
                            <span>📑</span>
                            <span>{locale === "en" ? "Official Chapter Citation" : locale === "es" ? "Cita Oficial del Capítulo" : "Citação Oficial do Capítulo"}</span>
                          </span>
                          <button
                            type="button"
                            onClick={() => copyToClipboard(chap.referencia_vancouver || "", `van-card-new-${chap.numero}`)}
                            className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30 hover:bg-red-500/30 transition-colors cursor-pointer"
                          >
                            {copiedId === `van-card-new-${chap.numero}` ? "✓ Copiado" : "Copiar"}
                          </button>
                        </div>
                        <p className="text-[11.5px] text-slate-300 leading-relaxed font-mono select-all">
                          {chap.referencia_vancouver}
                        </p>
                      </div>
                    )}

                    {/* References List */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                            <BookOpen size={13} className="text-sky-400" />
                            <span>
                              {locale === "en"
                                ? `${chap.referencias.length} Citations`
                                : locale === "es"
                                ? `${chap.referencias.length} Citas`
                                : `${chap.referencias.length} Referências Citadas`}
                            </span>
                          </span>
                        </div>

                        <div className="space-y-2.5">
                          {displayedRefs.map((ref, rIdx) => {
                            const refId = `new-card-ref-${chap.numero}-${rIdx}`;
                            const isCopied = copiedId === refId;
                            return (
                              <div
                                key={rIdx}
                                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors text-xs text-slate-300 leading-relaxed"
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <p className="flex-1 text-[11.5px] text-slate-200 font-medium">
                                    <strong className="text-red-400 font-bold mr-1">{rIdx + 1}.</strong>
                                    {ref.text}
                                  </p>
                                </div>

                                <div className="mt-2 pt-1.5 border-t border-white/10 flex items-center justify-between flex-wrap gap-2">
                                  <div className="flex items-center gap-1.5">
                                    {ref.doi ? (
                                      <a
                                        href={`https://doi.org/${ref.doi}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 text-[10px] font-bold hover:bg-sky-500/30 transition-colors border border-sky-500/30"
                                      >
                                        <span>doi</span>
                                        <span>↗</span>
                                      </a>
                                    ) : (
                                      <a
                                        href={`https://scholar.google.com/scholar?q=${encodeURIComponent(ref.text)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 text-[10px] font-bold hover:bg-sky-500/30 transition-colors border border-sky-500/30"
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
                                        className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold hover:bg-emerald-500/30 transition-colors border border-emerald-500/30"
                                      >
                                        <span>PubMed</span>
                                        <span>↗</span>
                                      </a>
                                    ) : (
                                      <a
                                        href={`https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(ref.text)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold hover:bg-emerald-500/30 transition-colors border border-emerald-500/30"
                                      >
                                        <span>PubMed</span>
                                        <span>↗</span>
                                      </a>
                                    )}
                                  </div>

                                  <button
                                    type="button"
                                    onClick={() => copyToClipboard(ref.text, refId)}
                                    className="inline-flex items-center gap-1 text-[10.5px] font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
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
                            className="mt-3 w-full py-1.5 px-3 rounded-lg bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-bold transition-colors cursor-pointer border border-white/10"
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
                      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                        <Link
                          href={`/${locale}/capitulo-new/${chap.numero}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-red-400 transition-colors"
                        >
                          <span>{locale === "en" ? "View Full Chapter" : locale === "es" ? "Ver Capítulo Completo" : "Ver Capítulo Completo"}</span>
                          <ArrowRight size={13} />
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
                background: "rgba(0, 16, 40, 0.7)",
                borderRadius: 16,
                border: "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
                overflow: "hidden",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* 3-Column Table Header */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "360px 280px 1fr",
                  gap: 24,
                  padding: "16px 24px",
                  background: "rgba(0, 8, 24, 0.9)",
                  color: "#ffffff",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                }}
                className="hidden lg:grid"
              >
                <div>1. {locale === "en" ? "Chapter & Section" : locale === "es" ? "Capítulo y Sección" : "Capítulo e Seção"}</div>
                <div>2. {locale === "en" ? "Authors / Specialists" : locale === "es" ? "Autores / Especialistas" : "Autores / Especialistas"}</div>
                <div>3. {locale === "en" ? "Bibliographic References" : locale === "es" ? "Referencias Bibliográficas" : "Referências Bibliográficas"}</div>
              </div>

              {/* 3-Column Rows */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                {paginatedChapters.map((chap, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <article
                      key={chap.numero}
                      style={{
                        padding: "24px",
                        background: isEven ? "rgba(255, 255, 255, 0.02)" : "rgba(255, 255, 255, 0.05)",
                        borderBottom: index === paginatedChapters.length - 1 ? "none" : "1px solid rgba(255, 255, 255, 0.08)",
                        transition: "background 0.2s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = isEven ? "rgba(255, 255, 255, 0.02)" : "rgba(255, 255, 255, 0.05)")}
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
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <span
                              className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold uppercase ${
                                chap.secao_id <= 5
                                  ? "bg-red-500/20 text-red-400 border border-red-500/30"
                                  : "bg-sky-500/20 text-sky-400 border border-sky-500/30"
                              }`}
                            >
                              {locale === "en" ? `Section ${chap.secao_id}` : locale === "es" ? `Sección ${chap.secao_id}` : `Seção ${chap.secao_id}`}
                            </span>
                            <span className="text-xs font-bold text-slate-500">•</span>
                            <span className="text-xs font-bold text-red-400 uppercase">
                              {locale === "en" ? `Chapter ${chap.numero}` : locale === "es" ? `Capítulo ${chap.numero}` : `Capítulo ${chap.numero}`}
                            </span>
                            {chap.pagina_inicial && chap.pagina_final && (
                              <span className="text-[11px] font-bold text-slate-300 bg-white/10 px-2 py-0.5 rounded border border-white/10">
                                p. {chap.pagina_inicial}–{chap.pagina_final}
                              </span>
                            )}
                          </div>

                          <h2 style={{ fontSize: 16, fontWeight: 700, color: "#ffffff", margin: "0 0 8px", lineHeight: 1.35 }}>
                            <Link
                              href={`/${locale}/capitulo-new/${chap.numero}`}
                              style={{
                                color: "inherit",
                                textDecoration: "none",
                                transition: "color 0.2s ease",
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.color = "#f52238")}
                              onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
                            >
                              {chap.titulo_pt}
                            </Link>
                          </h2>

                          <p className="text-xs text-slate-400 font-medium mb-3">
                            {getSecaoTitle(chap.secao_id)}
                          </p>

                          <Link
                            href={`/${locale}/capitulo-new/${chap.numero}`}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 6,
                              fontSize: 12.5,
                              fontWeight: 700,
                              color: "#f52238",
                              textDecoration: "none",
                            }}
                          >
                            <span>{locale === "en" ? "View chapter" : locale === "es" ? "Ver capítulo" : "Ver capítulo"}</span>
                            <ArrowRight size={14} />
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
                                  color: "#cbd5e1",
                                  fontWeight: 600,
                                }}
                              >
                                <span style={{ fontSize: 14 }}>👤</span>
                                <span>{autor.nome}</span>
                              </div>
                            ))}

                            {chap.autores_vancouver && (
                              <div style={{ marginTop: 6, padding: "6px 10px", borderRadius: 8, background: "rgba(56, 189, 248, 0.1)", border: "1px solid rgba(56, 189, 248, 0.25)", fontSize: 11.5, color: "#38bdf8", lineHeight: 1.4 }}>
                                <strong style={{ display: "block", fontSize: 10.5, textTransform: "uppercase", letterSpacing: "0.04em", color: "#94a3b8", marginBottom: 2 }}>
                                  {locale === "en" ? "Vancouver Author Names" : locale === "es" ? "Autores en Vancouver" : "Nomes em Vancouver"}
                                </strong>
                                <span>{chap.autores_vancouver}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Coluna 3: REFERÊNCIAS BIBLIOGRÁFICAS */}
                        <div>
                          {/* Official Chapter Reference Box */}
                          {chap.referencia_vancouver && (
                            <div
                              style={{
                                marginBottom: 14,
                                padding: "12px 14px",
                                borderRadius: 10,
                                background: "rgba(245, 34, 56, 0.15)",
                                border: "1px solid rgba(245, 34, 56, 0.3)",
                                fontSize: 12.5,
                                lineHeight: 1.5,
                              }}
                            >
                              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 6 }}>
                                <strong style={{ color: "#fca5a5", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                                  📑 {locale === "en" ? "Chapter Vancouver Reference" : locale === "es" ? "Referencia Vancouver del Capítulo" : "Referência Vancouver do Capítulo"}
                                </strong>
                                <button
                                  type="button"
                                  onClick={() => copyToClipboard(chap.referencia_vancouver || "", `table-van-new-${chap.numero}`)}
                                  style={{
                                    border: "1px solid rgba(245, 34, 56, 0.4)",
                                    background: "rgba(245, 34, 56, 0.25)",
                                    color: "#ffffff",
                                    fontSize: 11,
                                    fontWeight: 700,
                                    padding: "3px 8px",
                                    borderRadius: 6,
                                    cursor: "pointer",
                                  }}
                                >
                                  {copiedId === `table-van-new-${chap.numero}` ? "✓ Copiado" : "Copiar Citação"}
                                </button>
                              </div>
                              <p style={{ margin: 0, color: "#f1f5f9", fontFamily: "ui-monospace, monospace", fontSize: 12 }}>
                                {chap.referencia_vancouver}
                              </p>
                            </div>
                          )}

                          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            {chap.referencias.map((ref, rIdx) => {
                              const refId = `new-table-ref-${chap.numero}-${rIdx}`;
                              const isCopied = copiedId === refId;
                              return (
                                <div
                                  key={rIdx}
                                  style={{
                                    padding: "12px 14px",
                                    borderRadius: 10,
                                    background: "rgba(255, 255, 255, 0.05)",
                                    border: "1px solid rgba(255, 255, 255, 0.1)",
                                    fontSize: 13,
                                    lineHeight: 1.5,
                                    color: "#e2e8f0",
                                  }}
                                >
                                  <div style={{ marginBottom: 6 }}>
                                    <strong style={{ color: "#ffffff", marginRight: 6 }}>{rIdx + 1}.</strong>
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
                                          background: "rgba(56, 189, 248, 0.15)",
                                          color: "#38bdf8",
                                          textDecoration: "none",
                                          border: "1px solid rgba(56, 189, 248, 0.3)",
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
                                          background: "rgba(56, 189, 248, 0.15)",
                                          color: "#38bdf8",
                                          textDecoration: "none",
                                          border: "1px solid rgba(56, 189, 248, 0.3)",
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
                                          background: "rgba(16, 185, 129, 0.15)",
                                          color: "#34d399",
                                          textDecoration: "none",
                                          border: "1px solid rgba(16, 185, 129, 0.3)",
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
                                          background: "rgba(16, 185, 129, 0.15)",
                                          color: "#34d399",
                                          textDecoration: "none",
                                          border: "1px solid rgba(16, 185, 129, 0.3)",
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
                                        color: "#94a3b8",
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

          {/* ================= PAGINATION CONTROLS ================= */}
          {totalItems > 0 && pageSize !== "all" && totalPages > 1 && (
            <div
              style={{
                marginTop: 36,
                padding: "20px 24px",
                background: "rgba(0, 20, 50, 0.7)",
                borderRadius: 16,
                border: "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 16,
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Left Info: Current slice */}
              <div style={{ fontSize: 13.5, color: "#94a3b8" }}>
                <span>{locale === "en" ? "Showing chapters " : locale === "es" ? "Mostrando capítulos " : "Exibindo capítulos "}</span>
                <strong style={{ color: "#ffffff", fontWeight: 700 }}>{startItem}–{endItem}</strong>
                <span>{locale === "en" ? ` of ${totalItems} total` : locale === "es" ? ` de ${totalItems} en total` : ` de ${totalItems} no total`}</span>
              </div>

              {/* Center Page Numbers and Prev/Next buttons */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {/* Previous Button */}
                <button
                  type="button"
                  onClick={() => handlePageChange(safeCurrentPage - 1)}
                  disabled={safeCurrentPage <= 1}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "8px 14px",
                    borderRadius: 10,
                    fontSize: 13,
                    fontWeight: 700,
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    background: safeCurrentPage <= 1 ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0.1)",
                    color: safeCurrentPage <= 1 ? "#64748b" : "#ffffff",
                    cursor: safeCurrentPage <= 1 ? "not-allowed" : "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  <span>←</span>
                  <span>{locale === "en" ? "Previous" : locale === "es" ? "Anterior" : "Anterior"}</span>
                </button>

                {/* Page Number Buttons */}
                {getPageNumbers().map((num, idx) => {
                  if (num === "...") {
                    return (
                      <span
                        key={`ellipsis-${idx}`}
                        style={{
                          padding: "0 6px",
                          color: "#64748b",
                          fontWeight: 700,
                          fontSize: 14,
                        }}
                      >
                        ...
                      </span>
                    );
                  }

                  const isCurrent = safeCurrentPage === num;
                  return (
                    <button
                      key={String(num)}
                      type="button"
                      onClick={() => handlePageChange(Number(num))}
                      style={{
                        minWidth: 38,
                        height: 38,
                        padding: "0 10px",
                        borderRadius: 10,
                        fontSize: 13.5,
                        fontWeight: 700,
                        border: isCurrent ? "1px solid #f52238" : "1px solid rgba(255, 255, 255, 0.12)",
                        background: isCurrent ? "#f52238" : "rgba(255, 255, 255, 0.05)",
                        color: "#ffffff",
                        cursor: "pointer",
                        boxShadow: isCurrent ? "0 4px 14px rgba(245, 34, 56, 0.4)" : "none",
                        transition: "all 0.15s ease",
                      }}
                    >
                      {num}
                    </button>
                  );
                })}

                {/* Next Button */}
                <button
                  type="button"
                  onClick={() => handlePageChange(safeCurrentPage + 1)}
                  disabled={safeCurrentPage >= totalPages}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "8px 14px",
                    borderRadius: 10,
                    fontSize: 13,
                    fontWeight: 700,
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    background: safeCurrentPage >= totalPages ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0.1)",
                    color: safeCurrentPage >= totalPages ? "#64748b" : "#ffffff",
                    cursor: safeCurrentPage >= totalPages ? "not-allowed" : "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  <span>{locale === "en" ? "Next" : locale === "es" ? "Próximo" : "Próximo"}</span>
                  <span>→</span>
                </button>
              </div>

              {/* Right: Items per page quick switcher */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#94a3b8" }}>
                <span>{locale === "en" ? "Per page:" : locale === "es" ? "Por pág:" : "Por página:"}</span>
                <div style={{ display: "flex", gap: 4 }}>
                  {[12, 24, 48, "all"].map((size) => (
                    <button
                      key={String(size)}
                      type="button"
                      onClick={() => setPageSize(size as number | "all")}
                      style={{
                        padding: "4px 8px",
                        borderRadius: 6,
                        fontSize: 12,
                        fontWeight: 700,
                        border: pageSize === size ? "1px solid #f52238" : "1px solid rgba(255, 255, 255, 0.12)",
                        background: pageSize === size ? "#f52238" : "rgba(255, 255, 255, 0.05)",
                        color: "#ffffff",
                        cursor: "pointer",
                      }}
                    >
                      {size === "all" ? (locale === "en" ? "All" : locale === "es" ? "Todos" : "Todos") : size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <ModernFooter locale={locale} />
    </div>
  );
}
