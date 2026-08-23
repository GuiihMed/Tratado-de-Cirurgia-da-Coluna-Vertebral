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

  // Filter references based on selected section and search query
  const filteredChapters = useMemo(() => {
    return ALL_CHAPTER_REFERENCES.filter((chap) => {
      // Section filter
      if (selectedSecao !== "all" && chap.secao_id !== selectedSecao) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesNum = chap.numero.toString() === query || `cap ${chap.numero}` === query || `capitulo ${chap.numero}` === query;
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

  // Section title getter helper
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
      <Header locale={locale} currentPage="other" />

      <main style={{ paddingBottom: 80 }}>
        {/* ================= HERO SECTION ================= */}
        <section
          style={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            color: "#ffffff",
            padding: "40px 0 50px",
            background:
              "radial-gradient(circle at 12% 35%, rgba(220, 20, 45, 0.55) 0%, transparent 45%), linear-gradient(105deg, #a80f22 0%, #2f193e 24%, #052b5b 54%, #005a9c 100%)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          {/* Anatomical background graphic silhouette */}
          <img
            src="/assets/hero-spine.png"
            alt=""
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              height: "100%",
              width: "auto",
              maxWidth: "55%",
              objectFit: "contain",
              pointerEvents: "none",
              opacity: 0.2,
              mixBlendMode: "screen",
              filter: "contrast(1.2) brightness(1.1)",
            }}
          />

          <div className="shell" style={{ position: "relative", zIndex: 2 }}>
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                color: "#cbd5e1",
                marginBottom: 20,
              }}
            >
              <Link href={`/${locale}`} style={{ color: "#cbd5e1", textDecoration: "none" }}>
                {locale === "en" ? "Home" : locale === "es" ? "Inicio" : "Início"}
              </Link>
              <span>›</span>
              <span style={{ color: "#ffffff", fontWeight: 700 }}>
                {locale === "en"
                  ? "Bibliographic References"
                  : locale === "es"
                  ? "Referencias Bibliográficas"
                  : "Referências Bibliográficas"}
              </span>
            </nav>

            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "center" }}>
              <div style={{ maxWidth: 840 }}>
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

                <h1
                  style={{
                    fontSize: "clamp(30px, 3.8vw, 48px)",
                    fontWeight: 800,
                    lineHeight: 1.15,
                    margin: "0 0 14px",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {locale === "en"
                    ? "Treatise Bibliographic References"
                    : locale === "es"
                    ? "Referencias Bibliográficas del Tratado"
                    : "Referências Bibliográficas do Tratado"}
                </h1>

                <p
                  style={{
                    fontSize: "clamp(15px, 1.4vw, 18px)",
                    lineHeight: 1.55,
                    color: "#dbeafe",
                    margin: "0 0 24px",
                    maxWidth: 760,
                  }}
                >
                  {locale === "en"
                    ? "Explore the comprehensive bibliographic citations, scientific journals, and clinical evidence mapped across the 10 Sections and 109 Chapters of the Brazilian Spine Society Treatise."
                    : locale === "es"
                    ? "Explore las citas bibliográficas, revistas científicas y evidencias clínicas organizadas a lo largo de las 10 Secciones y 109 Capítulos del Tratado de la Sociedad Brasileña de Columna."
                    : "Consulte as referências científicas completas, artigos indexados e diretrizes clínicas organizadas por Seção, Capítulo e Autores dos 109 capítulos do Tratado de Cirurgia da Coluna Vertebral (SBC)."}
                </p>

                {/* Quick metrics pills */}
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.12)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: 10,
                      padding: "8px 16px",
                      fontSize: 13,
                      fontWeight: 600,
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    <strong style={{ color: "#ffffff", fontWeight: 800 }}>109</strong>{" "}
                    <span>{locale === "en" ? "Chapters" : locale === "es" ? "Capítulos" : "Capítulos"}</span>
                  </div>
                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.12)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: 10,
                      padding: "8px 16px",
                      fontSize: 13,
                      fontWeight: 600,
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    <strong style={{ color: "#ffffff", fontWeight: 800 }}>10</strong>{" "}
                    <span>{locale === "en" ? "Sections" : locale === "es" ? "Seções" : "Seções"}</span>
                  </div>
                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.12)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: 10,
                      padding: "8px 16px",
                      fontSize: 13,
                      fontWeight: 600,
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    <strong style={{ color: "#ffffff", fontWeight: 800 }}>204</strong>{" "}
                    <span>{locale === "en" ? "Authors" : locale === "es" ? "Autores" : "Autores"}</span>
                  </div>
                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.12)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: 10,
                      padding: "8px 16px",
                      fontSize: 13,
                      fontWeight: 600,
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    <strong style={{ color: "#ffffff", fontWeight: 800 }}>340+</strong>{" "}
                    <span>{locale === "en" ? "References" : locale === "es" ? "Referencias" : "Referências"}</span>
                  </div>
                </div>
              </div>

              {/* Book cover visual */}
              <div style={{ display: "none" }} className="md:flex justify-end">
                <img
                  src="/assets/book-cover.png"
                  alt="Tratado SBC"
                  style={{
                    width: 170,
                    height: "auto",
                    borderRadius: 8,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTROLS & FILTER BAR ================= */}
        <section style={{ maxWidth: 1440, margin: "0 auto", padding: "30px 20px 0" }}>
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
            {/* Search and Summary */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 16,
                alignItems: "center",
                marginBottom: 20,
              }}
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

              {/* All Sections button */}
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
                    <span>{`Seção ${sec.id}`}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ================= TABLE / GRID OF REFERENCES ================= */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: 16,
              border: "1px solid #e2e8f0",
              boxShadow: "0 10px 30px rgba(0, 20, 60, 0.04)",
              overflow: "hidden",
            }}
          >
            {/* Table Header (Visible on Desktop / Tablet) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "180px 280px 290px 1fr",
                gap: 20,
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
              <div>{locale === "en" ? "Section" : locale === "es" ? "Sección" : "Seção"}</div>
              <div>{locale === "en" ? "Chapter" : locale === "es" ? "Capítulo" : "Capítulo"}</div>
              <div>{locale === "en" ? "Authors / Contributors" : locale === "es" ? "Autores / Colaboradores" : "Autores / Colaboradores"}</div>
              <div>{locale === "en" ? "Bibliographic References" : locale === "es" ? "Referencias Bibliográficas" : "Referências Bibliográficas"}</div>
            </div>

            {/* Empty State */}
            {filteredChapters.length === 0 ? (
              <div style={{ padding: "60px 20px", textAlign: "center", color: "#64748b" }}>
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
            ) : (
              /* Rows of Chapters */
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
                      {/* Responsive Grid layout for Desktop / Tablet */}
                      <div
                        style={{
                          display: "grid",
                          gap: 20,
                          alignItems: "flex-start",
                        }}
                        className="grid grid-cols-1 lg:grid-cols-[180px_280px_290px_1fr]"
                      >
                        {/* 1. SEÇÃO */}
                        <div>
                          <div
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 6,
                              background: chap.secao_id <= 5 ? "rgba(220, 38, 38, 0.08)" : "rgba(0, 51, 130, 0.08)",
                              border: chap.secao_id <= 5 ? "1px solid rgba(220, 38, 38, 0.2)" : "1px solid rgba(0, 51, 130, 0.2)",
                              color: chap.secao_id <= 5 ? "#b91c1c" : "#003382",
                              padding: "4px 10px",
                              borderRadius: 6,
                              fontSize: 11.5,
                              fontWeight: 700,
                              marginBottom: 6,
                            }}
                          >
                            <span>{`Seção ${chap.secao_id}`}</span>
                          </div>
                          <div
                            style={{
                              fontSize: 13,
                              fontWeight: 600,
                              color: "#475569",
                              lineHeight: 1.35,
                            }}
                          >
                            {getSecaoTitle(chap.secao_id)}
                          </div>
                        </div>

                        {/* 2. CAPÍTULO */}
                        <div>
                          <div style={{ fontSize: 12, fontWeight: 700, color: "#dc2626", marginBottom: 3, textTransform: "uppercase" }}>
                            {`Capítulo ${chap.numero}`}
                          </div>
                          <h2 style={{ fontSize: 15.5, fontWeight: 700, color: "#001a3d", margin: "0 0 8px", lineHeight: 1.35 }}>
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
                          <Link
                            href={`/${locale}/capitulo/${chap.numero}`}
                            style={{
                              fontSize: 12,
                              fontWeight: 700,
                              color: "#0284c7",
                              textDecoration: "none",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 4,
                            }}
                          >
                            <span>{locale === "en" ? "View chapter" : locale === "es" ? "Ver capítulo" : "Ver capítulo"}</span>
                            <span>→</span>
                          </Link>
                        </div>

                        {/* 3. AUTORES / COLABORADORES */}
                        <div>
                          <div style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", marginBottom: 6 }} className="lg:hidden">
                            {locale === "en" ? "Authors / Contributors:" : locale === "es" ? "Autores / Colaboradores:" : "Autores / Colaboradores:"}
                          </div>
                          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                            {chap.autores.map((author, aIdx) => (
                              <li key={aIdx} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#334155" }}>
                                <span
                                  style={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: "50%",
                                    background: "#e2e8f0",
                                    color: "#64748b",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 10,
                                    fontWeight: 700,
                                    flexShrink: 0,
                                  }}
                                >
                                  👤
                                </span>
                                <Link
                                  href={`/${locale}/autor/${author.slug}`}
                                  style={{
                                    color: "#1e293b",
                                    textDecoration: "none",
                                    fontWeight: 500,
                                    lineHeight: 1.3,
                                    transition: "color 0.15s ease",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.color = "#dc2626";
                                    e.currentTarget.style.textDecoration = "underline";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.color = "#1e293b";
                                    e.currentTarget.style.textDecoration = "none";
                                  }}
                                >
                                  {author.nome}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* 4. REFERÊNCIAS BIBLIOGRÁFICAS */}
                        <div>
                          <div style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", marginBottom: 6 }} className="lg:hidden">
                            {locale === "en" ? "Bibliographic References:" : locale === "es" ? "Referencias Bibliográficas:" : "Referências Bibliográficas:"}
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            {chap.referencias.map((ref) => (
                              <div
                                key={ref.num}
                                style={{
                                  background: "#f8fafc",
                                  border: "1px solid #e2e8f0",
                                  borderRadius: 8,
                                  padding: "10px 14px",
                                  fontSize: 13,
                                  lineHeight: 1.5,
                                  color: "#334155",
                                }}
                              >
                                <div style={{ marginBottom: 6 }}>
                                  <strong style={{ color: "#001a3d", fontWeight: 700 }}>{ref.num}.</strong>{" "}
                                  <span>{ref.text}</span>
                                </div>
                                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                                  {ref.doi && (
                                    <a
                                      href={ref.doi}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: 3,
                                        padding: "2px 8px",
                                        borderRadius: 4,
                                        background: "#e0f2fe",
                                        border: "1px solid #bae6fd",
                                        color: "#0369a1",
                                        fontSize: 11,
                                        fontWeight: 700,
                                        textDecoration: "none",
                                      }}
                                    >
                                      <span>doi ↗</span>
                                    </a>
                                  )}
                                  {ref.pmid && (
                                    <a
                                      href={ref.pmid}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: 3,
                                        padding: "2px 8px",
                                        borderRadius: 4,
                                        background: "#dcfce7",
                                        border: "1px solid #bbf7d0",
                                        color: "#15803d",
                                        fontSize: 11,
                                        fontWeight: 700,
                                        textDecoration: "none",
                                      }}
                                    >
                                      <span>PubMed ↗</span>
                                    </a>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>

          {/* ================= COMPLEMENTARY FOOTNOTE BANNER ================= */}
          <div
            style={{
              marginTop: 32,
              background: "linear-gradient(135deg, #001738 0%, #002d6a 100%)",
              borderRadius: 16,
              padding: "28px 32px",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <div style={{ maxWidth: 740 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <span style={{ fontSize: 20 }}>📖</span>
                <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: "#ffffff" }}>
                  {locale === "en"
                    ? "Printed Treatise by DiLivros Publisher"
                    : locale === "es"
                    ? "Tratado Impreso por Editorial DiLivros"
                    : "Obra Impressa Oficial pela Editora DiLivros"}
                </h3>
              </div>
              <p style={{ fontSize: 14, color: "#cbd5e1", lineHeight: 1.5, margin: 0 }}>
                {locale === "en"
                  ? "All illustrations, full surgical protocols, and in-depth scientific literature are published exclusively in the 2-volume printed edition of the Treatise."
                  : locale === "es"
                  ? "Todas las ilustraciones, protocolos quirúrgicos completos y bibliografía detallada están publicados exclusivamente en la edición impresa de 2 volúmenes del Tratado."
                  : "Todos os esquemas cirúrgicos originais, lâminas anatômicas em alta resolução e o texto científico integral estão disponíveis com exclusividade nos 2 volumes da edição impressa oficial."}
              </p>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <Link
                href={`/${locale}/indice`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#ffffff",
                  color: "#001a3d",
                  padding: "10px 20px",
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 14,
                  textDecoration: "none",
                }}
              >
                <span>{locale === "en" ? "Chapters Index" : locale === "es" ? "Índice de Capítulos" : "Índice de Capítulos"}</span>
                <span>→</span>
              </Link>
              <Link
                href={`/${locale}/autores`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(255, 255, 255, 0.12)",
                  color: "#ffffff",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  padding: "10px 20px",
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 14,
                  textDecoration: "none",
                }}
              >
                <span>{locale === "en" ? "Authors Directory" : locale === "es" ? "Directorio de Autores" : "Diretório de Autores"}</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer locale={locale} />
    </div>
  );
}
