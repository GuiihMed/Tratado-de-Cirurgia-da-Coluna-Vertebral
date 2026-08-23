"use client";

import { use, useState, useMemo } from "react";
import Link from "next/link";
import ModernHeader from "@/components/modern/ModernHeader";
import ModernFooter from "@/components/modern/ModernFooter";
import { Locale } from "@/lib/types";
import { ALL_CHAPTER_REFERENCES } from "@/lib/data/references";
import { SECOES } from "@/lib/data/sections-and-chapters";
import {
  Search,
  Filter,
  Copy,
  Check,
  ExternalLink,
  Users,
  ArrowRight,
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
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Flattened reference rows with metadata
  const allRows = useMemo(() => {
    const rows: {
      id: string;
      secaoId: number;
      secaoNome: string;
      capituloNum: number;
      capituloTitulo: string;
      autores: string;
      referencia: string;
      refIndex: number;
      doi?: string;
      pmid?: string;
    }[] = [];

    ALL_CHAPTER_REFERENCES.forEach((item) => {
      const autoresString = item.autores.map((a) => a.nome).join(", ");
      item.referencias.forEach((ref, idx) => {
        rows.push({
          id: `ref-${item.numero}-${idx}`,
          secaoId: item.secao_id,
          secaoNome:
            locale === "en"
              ? item.secao_nome_en
              : locale === "es"
              ? item.secao_nome_es
              : item.secao_nome,
          capituloNum: item.numero,
          capituloTitulo: item.titulo_pt,
          autores: autoresString,
          referencia: ref.text,
          refIndex: ref.num || idx + 1,
          doi: ref.doi,
          pmid: ref.pmid,
        });
      });
    });

    return rows;
  }, [locale]);

  // Filtered rows
  const filteredRows = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return allRows.filter((row) => {
      const matchSecao = selectedSecao === "all" || row.secaoId === selectedSecao;
      if (!matchSecao) return false;

      if (!q) return true;

      return (
        row.capituloNum.toString() === q ||
        row.capituloTitulo.toLowerCase().includes(q) ||
        row.autores.toLowerCase().includes(q) ||
        row.referencia.toLowerCase().includes(q) ||
        row.secaoNome.toLowerCase().includes(q)
      );
    });
  }, [allRows, searchQuery, selectedSecao]);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const getPubMedSearchUrl = (citation: string) => {
    const cleanQuery = citation.replace(/[^a-zA-Z0-9\s]/g, " ").slice(0, 120);
    return `https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(cleanQuery)}`;
  };

  const getGoogleScholarUrl = (citation: string) => {
    return `https://scholar.google.com/scholar?q=${encodeURIComponent(citation.slice(0, 150))}`;
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000c1e",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <ModernHeader locale={locale} currentPage="referencias-new" />

      <main style={{ flex: 1 }}>
        {/* ================= HERO SECTION ================= */}
        <section
          style={{
            position: "relative",
            padding: "130px 24px 70px",
            background:
              "radial-gradient(circle at 19% 24%, rgba(255, 87, 86, 0.45), transparent 34%), linear-gradient(105deg, #c9142a 0%, #39244c 28%, #052b5b 58%, #0062a7 100%)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            overflow: "hidden",
          }}
        >
          {/* Spine Graphic */}
          <img
            src="/assets/hero-spine.png"
            alt=""
            className="absolute right-0 top-0 h-full w-auto max-w-[62%] object-contain pointer-events-none opacity-25 hidden md:block"
            style={{ mixBlendMode: "screen", filter: "contrast(1.2) brightness(1.1)" }}
          />

          <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
            {/* Breadcrumb */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                color: "rgba(255, 255, 255, 0.75)",
                marginBottom: 28,
              }}
            >
              <Link
                href={`/${locale}/home-new`}
                style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "none" }}
              >
                {locale === "en" ? "Home" : locale === "es" ? "Inicio" : "Início"}
              </Link>
              <span>›</span>
              <span style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                {locale === "en" ? "The Treatise" : locale === "es" ? "El Tratado" : "O Tratado"}
              </span>
              <span>›</span>
              <span style={{ color: "#ffffff", fontWeight: 700 }}>
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
                    src="/assets/book-cover.png"
                    alt="Capa do Livro Tratado de Cirurgia da Coluna Vertebral"
                    className="w-full h-auto object-contain rounded-2xl shadow-2xl border border-white/20"
                    style={{
                      boxShadow: "0 25px 60px rgba(0, 10, 30, 0.7), 0 0 40px rgba(245, 34, 56, 0.25)",
                    }}
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
                  <svg className="w-6 h-6 text-sky-400 mb-1.5"><use href="#i-book"></use></svg>
                  <strong className="text-2xl sm:text-3xl font-bold text-white leading-tight">109</strong>
                  <span className="text-xs text-slate-300 font-semibold mt-0.5">
                    {locale === "en" ? "chapters" : locale === "es" ? "capítulos" : "capítulos"}
                  </span>
                </div>

                {/* 2. Seções Temáticas */}
                <div className="flex flex-col items-center justify-center px-2 py-1">
                  <svg className="w-6 h-6 text-red-400 mb-1.5"><use href="#i-grid"></use></svg>
                  <strong className="text-2xl sm:text-3xl font-bold text-white leading-tight">10</strong>
                  <span className="text-xs text-slate-300 font-semibold mt-0.5">
                    {locale === "en" ? "thematic sections" : locale === "es" ? "secciones temáticas" : "seções temáticas"}
                  </span>
                </div>

                {/* 3. Autores */}
                <div className="flex flex-col items-center justify-center px-2 py-1">
                  <svg className="w-6 h-6 text-indigo-400 mb-1.5"><use href="#i-users"></use></svg>
                  <strong className="text-2xl sm:text-3xl font-bold text-white leading-tight">204</strong>
                  <span className="text-xs text-slate-300 font-semibold mt-0.5">
                    {locale === "en" ? "specialist authors" : locale === "es" ? "autores especialistas" : "autores especialistas"}
                  </span>
                </div>

                {/* 4. Indexação */}
                <div className="flex flex-col items-center justify-center px-2 py-1">
                  <svg className="w-6 h-6 text-teal-400 mb-1.5"><use href="#i-globe"></use></svg>
                  <strong className="text-base sm:text-lg font-bold text-white leading-snug mt-0.5">DOI &amp; PubMed</strong>
                  <span className="text-xs text-slate-300 font-semibold mt-0.5">
                    {locale === "en" ? "scientific index" : locale === "es" ? "indexación" : "indexação científica"}
                  </span>
                </div>

                {/* 5. Citações / Referências */}
                <div className="col-span-2 sm:col-span-1 flex flex-col items-center justify-center px-2 py-1">
                  <svg className="w-6 h-6 text-amber-400 mb-1.5"><use href="#i-ref"></use></svg>
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
        <section id="tabela-referencias" style={{ maxWidth: 1340, margin: "0 auto", padding: "40px 24px 80px" }}>
          {/* Controls Bar */}
          <div
            style={{
              background: "rgba(0, 20, 50, 0.75)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: 18,
              padding: "24px",
              backdropFilter: "blur(16px)",
              marginBottom: 32,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "space-between" }}>
              {/* Search input */}
              <div style={{ position: "relative", flex: "1 1 300px", maxWidth: 500 }}>
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
                    padding: "12px 16px 12px 44px",
                    borderRadius: 12,
                    background: "rgba(255, 255, 255, 0.07)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    color: "#ffffff",
                    fontSize: 14,
                    outline: "none",
                  }}
                />
              </div>

              {/* Section Filter Dropdown */}
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Filter size={16} style={{ color: "#94a3b8" }} />
                <select
                  value={selectedSecao}
                  onChange={(e) => setSelectedSecao(e.target.value === "all" ? "all" : Number(e.target.value))}
                  style={{
                    padding: "11px 16px",
                    borderRadius: 12,
                    background: "#001838",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "#ffffff",
                    fontSize: 13,
                    fontWeight: 600,
                    outline: "none",
                    cursor: "pointer",
                  }}
                >
                  <option value="all">
                    {locale === "en" ? "All 10 Sections" : locale === "es" ? "Todas las 10 Secciones" : "Todas as 10 Seções"}
                  </option>
                  {SECOES.map((sec) => (
                    <option key={sec.id} value={sec.id}>
                      {sec.id}. {locale === "en" ? sec.titulo_en : locale === "es" ? sec.titulo_es : sec.titulo_pt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results count */}
            <div style={{ marginTop: 16, fontSize: 13, color: "#94a3b8", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>
                {locale === "en"
                  ? `Showing ${filteredRows.length} citations`
                  : locale === "es"
                  ? `Mostrando ${filteredRows.length} citas`
                  : `Exibindo ${filteredRows.length} referências científicas`}
              </span>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#f52238",
                    cursor: "pointer",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  {locale === "en" ? "Clear search" : locale === "es" ? "Limpiar búsqueda" : "Limpar busca"}
                </button>
              )}
            </div>
          </div>

          {/* Reference List / Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {filteredRows.map((row) => (
              <div
                key={row.id}
                style={{
                  background: "rgba(0, 20, 50, 0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: 16,
                  padding: "22px 24px",
                  backdropFilter: "blur(12px)",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: 20,
                  alignItems: "center",
                  transition: "all 0.2s ease",
                }}
                className="hover:border-white/30 hover:bg-[#001738]/80"
              >
                {/* Left: Section & Chapter Info */}
                <div style={{ minWidth: 240 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        padding: "3px 8px",
                        borderRadius: 6,
                        background: "rgba(245, 34, 56, 0.15)",
                        border: "1px solid rgba(245, 34, 56, 0.3)",
                        color: "#ff5757",
                      }}
                    >
                      {locale === "en" ? `Sec. ${row.secaoId}` : locale === "es" ? `Sec. ${row.secaoId}` : `Seção ${row.secaoId}`}
                    </span>
                    <span style={{ fontSize: 12, color: "#94a3b8", fontWeight: 600 }}>
                      {row.secaoNome}
                    </span>
                  </div>

                  <Link
                    href={`/${locale}/capitulo-new/${row.capituloNum}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#ffffff",
                      textDecoration: "none",
                      marginBottom: 6,
                    }}
                    className="hover:text-[#ff5757] transition-colors"
                  >
                    <span>{locale === "en" ? `Chapter ${row.capituloNum}` : locale === "es" ? `Capítulo ${row.capituloNum}` : `Capítulo ${row.capituloNum}`}: {row.capituloTitulo}</span>
                    <ArrowRight size={14} />
                  </Link>

                  <div style={{ fontSize: 13, color: "#8da9cc", display: "flex", alignItems: "center", gap: 6 }}>
                    <Users size={13} style={{ color: "#38bdf8" }} />
                    <span>{row.autores}</span>
                  </div>
                </div>

                {/* Middle: Reference Text */}
                <div style={{ flex: 1, padding: "0 10px" }}>
                  <div
                    style={{
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: "#e2e8f0",
                      fontFamily: "Georgia, serif",
                      borderLeft: "2px solid rgba(245, 34, 56, 0.4)",
                      paddingLeft: 14,
                    }}
                  >
                    {row.referencia}
                  </div>
                </div>

                {/* Right: Actions */}
                <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", flexWrap: "wrap" }}>
                  <button
                    type="button"
                    onClick={() => handleCopy(row.referencia, row.id)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "8px 14px",
                      borderRadius: 8,
                      background: copiedId === row.id ? "rgba(34, 197, 94, 0.2)" : "rgba(255, 255, 255, 0.08)",
                      border: `1px solid ${copiedId === row.id ? "rgba(34, 197, 94, 0.4)" : "rgba(255, 255, 255, 0.15)"}`,
                      color: copiedId === row.id ? "#4ade80" : "#ffffff",
                      fontSize: 12,
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {copiedId === row.id ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copiedId === row.id ? (locale === "en" ? "Copied!" : locale === "es" ? "¡Copiado!" : "Copiado!") : (locale === "en" ? "Copy Citation" : locale === "es" ? "Copiar Cita" : "Copiar Citação")}</span>
                  </button>

                  <a
                    href={row.pmid || getPubMedSearchUrl(row.referencia)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "8px 14px",
                      borderRadius: 8,
                      background: "rgba(56, 189, 248, 0.1)",
                      border: "1px solid rgba(56, 189, 248, 0.3)",
                      color: "#38bdf8",
                      fontSize: 12,
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                    className="hover:bg-sky-500/20"
                  >
                    <span>PubMed</span>
                    <ExternalLink size={12} />
                  </a>

                  <a
                    href={row.doi || getGoogleScholarUrl(row.referencia)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "8px 14px",
                      borderRadius: 8,
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      color: "#cbd5e1",
                      fontSize: 12,
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                    className="hover:bg-white/10 hover:text-white"
                  >
                    <span>{row.doi ? "DOI" : "Scholar"}</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <ModernFooter locale={locale} />
    </div>
  );
}
