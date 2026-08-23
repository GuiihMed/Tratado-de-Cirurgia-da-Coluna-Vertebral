"use client";

import { useState, use, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import ModernHeader from "@/components/modern/ModernHeader";
import ModernFooter from "@/components/modern/ModernFooter";
import { Locale, Capitulo } from "@/lib/types";
import { SECOES, INITIAL_CHAPTERS, getChapterApproachObjective } from "@/lib/data/sections-and-chapters";
import { getAuthorsByChapter } from "@/lib/data/authors";
import SectionIcon from "@/components/SectionIcon";
import {
  LayoutGrid,
  List,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Copy,
  Check,
  ArrowRight,
  ExternalLink,
  Search,
  Users,
  User,
  Target,
  Sparkles,
} from "lucide-react";

interface IndiceNewProps {
  params: Promise<{ locale: string }>;
}

export default function IndiceNewPage({ params }: IndiceNewProps) {
  const resolvedParams = use(params);
  const rawLocale = resolvedParams.locale;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";

  const [searchQuery, setSearchQuery] = useState("");
  const [layoutView, setLayoutView] = useState<"accordion" | "grid" | "compact">("accordion");
  const [selectedSecao, setSelectedSecao] = useState<number | "all">("all");
  const [activeModalChapter, setActiveModalChapter] = useState<Capitulo | null>(null);
  const [copiedChapter, setCopiedChapter] = useState<number | null>(null);


  // Open / Closed state for all 10 sections (all open by default)
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
  });

  const toggleSection = (secaoId: number) => {
    setOpenSections((prev) => ({
      ...prev,
      [secaoId]: !prev[secaoId],
    }));
  };

  const setAllSections = (open: boolean) => {
    const newState: Record<number, boolean> = {};
    SECOES.forEach((s) => {
      newState[s.id] = open;
    });
    setOpenSections(newState);
  };

  // Filter chapters based on search query and section
  const filteredChapters = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return INITIAL_CHAPTERS.filter((cap) => {
      const matchSection = selectedSecao === "all" || cap.secao_id === selectedSecao;
      if (!matchSection) return false;

      if (!q) return true;

      return (
        cap.numero.toString() === q ||
        cap.titulo_pt.toLowerCase().includes(q) ||
        (cap.titulo_en && cap.titulo_en.toLowerCase().includes(q)) ||
        (cap.titulo_es && cap.titulo_es.toLowerCase().includes(q))
      );
    });
  }, [searchQuery, selectedSecao]);

  const getChapterTitle = (cap: Capitulo) => {
    if (locale === "en" && cap.titulo_en) return cap.titulo_en;
    if (locale === "es" && cap.titulo_es) return cap.titulo_es;
    return cap.titulo_pt;
  };

  const getSectionName = (secaoId: number) => {
    const sec = SECOES.find((s) => s.id === secaoId);
    if (!sec) return `Seção ${secaoId}`;
    if (locale === "en") return sec.titulo_en;
    if (locale === "es") return sec.titulo_es;
    return sec.titulo_pt;
  };

  const copyCitation = (cap: Capitulo) => {
    const citation = `Tratado de Cirurgia da Coluna Vertebral. SBC, 2026. Cap. ${cap.numero}: "${cap.titulo_pt}".`;
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(citation);
      setCopiedChapter(cap.numero);
      setTimeout(() => setCopiedChapter(null), 2500);
    }
  };

  return (
    <div style={{ background: "#001026", color: "#e6f1ff", minHeight: "100vh" }}>
      <ModernHeader locale={locale} currentPage="indice-new" />

      <main>
        {/* ================= HERO SEARCH & CONTROLS ================= */}
        <section
          style={{
            marginTop: "-88px",
            paddingTop: "135px",
            paddingBottom: "50px",
            background: "radial-gradient(circle at 50% 25%, rgba(245, 34, 56, 0.18) 0%, rgba(14, 101, 162, 0.35) 45%, transparent 70%), linear-gradient(180deg, #001026 0%, #04142b 60%, #0a192f 100%)",
            position: "relative",
            overflow: "hidden",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div className="modern-hero-ambient" />

          <div className="shell" style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
            {/* Breadcrumb */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                color: "rgba(255, 255, 255, 0.75)",
                marginBottom: 20,
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
                {locale === "en" ? "Index" : locale === "es" ? "Índice" : "Índice"}
              </span>
            </div>

            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 16px",
                borderRadius: 999,
                background: "linear-gradient(135deg, rgba(245, 34, 56, 0.15) 0%, rgba(0, 51, 130, 0.3) 100%)",
                border: "1px solid rgba(245, 34, 56, 0.35)",
                fontSize: 13,
                fontWeight: 700,
                color: "#ff8090",
                marginBottom: 20,
                boxShadow: "0 4px 15px rgba(245, 34, 56, 0.2)",
              }}
            >
              <span className="pulse-dot" style={{ background: "#f52238" }} />
              <span style={{ color: "#ffffff" }}>
                {locale === "en"
                  ? "Official Index • 10 Sections & 109 Chapters"
                  : locale === "es"
                  ? "Índice Oficial • 10 Secciones & 109 Capítulos"
                  : "Índice Oficial • 10 Seções & 109 Capítulos"}
              </span>
            </div>

            <h1 style={{ fontSize: 50, letterSpacing: "-0.035em", margin: "0 0 16px", fontWeight: 700, color: "#fff", lineHeight: 1.15 }}>
              {locale === "en"
                ? "Interactive Master Index"
                : locale === "es"
                ? "Índice Maestro Interactivo"
                : "Índice Completo da Obra"}
            </h1>

            <p style={{ fontSize: 18, color: "#94b8db", maxWidth: 680, margin: "0 auto 34px", lineHeight: 1.55 }}>
              {locale === "en"
                ? "Navigate the complete 10 thematic sections and 109 chapters with real-time multilingual search."
                : locale === "es"
                ? "Navegue por las 10 secciones temáticas y 109 capítulos con busca multilingüe en tiempo real."
                : "Navegue pela estrutura completa das 10 seções temáticas e 109 capítulos com busca instantânea e modos flexíveis de visualização."}
            </p>

            {/* Live Search Bar */}
            <div
              className="modern-search-bar"
              style={{
                background: "rgba(255, 255, 255, 0.96)",
                boxShadow: "0 12px 36px rgba(0, 10, 30, 0.35)",
                marginBottom: 26,
              }}
            >
              <Search size={22} color="#f52238" style={{ flexShrink: 0 }} />
              <input
                type="text"
                className="modern-search-input"
                placeholder={
                  locale === "en"
                    ? "Search chapter title, number or keywords (e.g. '8', 'sagital', 'endoscopia')..."
                    : locale === "es"
                    ? "Buscar por título, número o tema (ej. '8', 'sagital', 'endoscopia')..."
                    : "Pesquise por título, número ou palavra-chave (ex: '8', 'sagital', 'endoscopia')..."
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  className="modern-search-clear"
                  onClick={() => setSearchQuery("")}
                >
                  {locale === "en" ? "Clear ✕" : locale === "es" ? "Limpiar ✕" : "Limpar ✕"}
                </button>
              )}
            </div>
          </div>
        </section>

        {/* ================= CONTROLS & LAYOUT TOOLBAR ================= */}
        <section style={{ padding: "20px 0 16px", background: "rgba(0, 12, 28, 0.7)", borderBottom: "1px solid rgba(255, 255, 255, 0.08)", position: "relative" }}>
          <div className="shell">
            <div className="modern-controls-bar" style={{ margin: 0, width: "100%" }}>
              <span style={{ color: "#c2dcf5", fontWeight: 500 }}>
                {locale === "en" ? "Showing " : locale === "es" ? "Mostrando " : "Exibindo "}
                <strong style={{ color: "#ffffff" }}>{filteredChapters.length}</strong>
                {locale === "en" ? " of 109 chapters" : locale === "es" ? " de 109 capítulos" : " de 109 capítulos"}
                {searchQuery && (locale === "en" ? ` for "${searchQuery}"` : locale === "es" ? ` para "${searchQuery}"` : ` para "${searchQuery}"`)}
              </span>

              {/* Layout Display Switcher */}
              <div className="modern-controls-switcher">
                <button
                  type="button"
                  onClick={() => setLayoutView("accordion")}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "7px 14px",
                    borderRadius: 8,
                    border: "none",
                    background: layoutView === "accordion" ? "linear-gradient(135deg, #f52238 0%, #003382 100%)" : "transparent",
                    color: layoutView === "accordion" ? "#ffffff" : "#94a3b8",
                    fontSize: 12.5,
                    fontWeight: layoutView === "accordion" ? 800 : 600,
                    boxShadow: layoutView === "accordion" ? "0 4px 14px rgba(245, 34, 56, 0.35)" : "none",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  <List size={14} />
                  <span>{locale === "en" ? "By Sections" : locale === "es" ? "Por Secciones" : "Por Seções"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setLayoutView("grid")}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "7px 14px",
                    borderRadius: 8,
                    border: "none",
                    background: layoutView === "grid" ? "linear-gradient(135deg, #f52238 0%, #003382 100%)" : "transparent",
                    color: layoutView === "grid" ? "#ffffff" : "#94a3b8",
                    fontSize: 12.5,
                    fontWeight: layoutView === "grid" ? 800 : 600,
                    boxShadow: layoutView === "grid" ? "0 4px 14px rgba(245, 34, 56, 0.35)" : "none",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  <LayoutGrid size={14} />
                  <span>{locale === "en" ? "Card Grid" : locale === "es" ? "Cuadrícula" : "Grade de Cards"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setLayoutView("compact")}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "7px 14px",
                    borderRadius: 8,
                    border: "none",
                    background: layoutView === "compact" ? "linear-gradient(135deg, #f52238 0%, #003382 100%)" : "transparent",
                    color: layoutView === "compact" ? "#ffffff" : "#94a3b8",
                    fontSize: 12.5,
                    fontWeight: layoutView === "compact" ? 800 : 600,
                    boxShadow: layoutView === "compact" ? "0 4px 14px rgba(245, 34, 56, 0.35)" : "none",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  <List size={14} />
                  <span>{locale === "en" ? "Compact Table" : locale === "es" ? "Tabla Compacta" : "Tabela Compacta"}</span>
                </button>
              </div>

              {/* Accordion Expand / Collapse Buttons */}
              {layoutView === "accordion" && (
                <div className="modern-controls-actions">
                  <button
                    onClick={() => setAllSections(true)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                      padding: "6px 14px",
                      borderRadius: 8,
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      background: "rgba(255, 255, 255, 0.08)",
                      color: "#fff",
                      fontSize: 12,
                      fontWeight: 650,
                      cursor: "pointer",
                    }}
                  >
                    <span>{locale === "en" ? "Expand All" : locale === "es" ? "Expandir Todos" : "Expandir Todos"}</span>
                    <ChevronDown size={13} />
                  </button>
                  <button
                    onClick={() => setAllSections(false)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                      padding: "6px 14px",
                      borderRadius: 8,
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      background: "rgba(255, 255, 255, 0.08)",
                      color: "#fff",
                      fontSize: 12,
                      fontWeight: 650,
                      cursor: "pointer",
                    }}
                  >
                    <span>{locale === "en" ? "Collapse All" : locale === "es" ? "Contraer Todos" : "Recolher Todos"}</span>
                    <ChevronUp size={13} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ================= DYNAMIC LAYOUT DISPLAY VIEWS ================= */}
        <section style={{ padding: "36px 0 90px" }}>
          <div className="shell">
            {/* VIEW 1: ACCORDION BY SECTIONS (ESTRUTURA EM SANFONA) */}
            {layoutView === "accordion" && (
              <div>
                {SECOES.filter((s) => selectedSecao === "all" || s.id === selectedSecao).map((secao) => {
                  const isOpen = Boolean(openSections[secao.id]);
                  const secChapters = filteredChapters.filter(
                    (c) => c.secao_id === secao.id
                  );
                  const isSection8 = secao.id === 8;

                  if (searchQuery && secChapters.length === 0) return null;

                  return (
                    <article
                      key={secao.id}
                      id={secao.tag}
                      className={`modern-section-accordion ${isOpen ? "is-open" : ""}`}
                      style={{
                        marginBottom: 16,
                        borderRadius: 16,
                        background: "rgba(0, 16, 38, 0.85)",
                        backdropFilter: "blur(24px)",
                        WebkitBackdropFilter: "blur(24px)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        borderLeft: "5px solid #f52238",
                        boxShadow: "0 10px 30px rgba(0, 5, 20, 0.4)",
                        overflow: "hidden",
                        transition: "all 0.25s ease",
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => toggleSection(secao.id)}
                        aria-expanded={isOpen}
                        style={{
                          width: "100%",
                          textAlign: "left",
                          padding: "18px 22px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          background: "transparent",
                          border: "none",
                          cursor: "pointer",
                          color: "#fff",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 42,
                              height: 42,
                              borderRadius: 12,
                              background: "linear-gradient(135deg, #f52238 0%, #003382 100%)",
                              color: "#ffffff",
                              boxShadow: "0 4px 14px rgba(245, 34, 56, 0.4)",
                              flexShrink: 0,
                            }}
                          >
                            <SectionIcon sectionId={secao.id} size={20} color="#fff" />
                          </span>
                          <div>
                            <strong style={{ fontSize: 19, fontWeight: 700, display: "block", color: "#fff", letterSpacing: "-0.01em", lineHeight: 1.2 }}>
                              {locale === "en" ? secao.titulo_en : locale === "es" ? secao.titulo_es : secao.titulo_pt}
                            </strong>
                            <span style={{ fontSize: 13, color: "#94a3b8", fontWeight: 500, marginTop: 2, display: "block" }}>
                              {secChapters.length} {locale === "en" ? "chapters in this section" : locale === "es" ? "capítulos en esta sección" : "capítulos nesta seção"}
                            </span>
                          </div>
                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: 8, paddingLeft: 10 }}>
                          <span style={{ fontSize: 16, color: "#cbd5e1", fontWeight: 700, display: "flex", alignItems: "center" }}>
                            {isOpen ? <ChevronUp size={20} color="#94a3b8" /> : <ChevronDown size={20} color="#94a3b8" />}
                          </span>
                        </div>
                      </button>

                      {isOpen && (
                        <div
                          className="indice-section-chapters-grid"
                          style={{
                            margin: 0,
                            padding: "0 22px 22px 22px",
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gap: 10,
                          }}
                        >
                          {secChapters.map((cap) => {
                            const isMatch =
                              searchQuery &&
                              (cap.numero.toString() === searchQuery.trim() ||
                                cap.titulo_pt.toLowerCase().includes(searchQuery.toLowerCase()));

                            return (
                              <Link
                                key={cap.numero}
                                href={`/${locale}/capitulo-new/${cap.numero}`}
                                className="modern-chapter-card-link"
                                style={{
                                  padding: "14px 16px",
                                  borderRadius: 12,
                                  textDecoration: "none",
                                  transition: "all 0.2s ease",
                                  background: isMatch ? "rgba(245, 34, 56, 0.22)" : "rgba(255, 255, 255, 0.05)",
                                  border: isMatch ? "1px solid rgba(245, 34, 56, 0.5)" : "1px solid rgba(255, 255, 255, 0.09)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  gap: 12,
                                }}
                              >
                                <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0, flex: 1 }}>
                                  <span
                                    style={{
                                      display: "inline-flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      minWidth: 28,
                                      height: 28,
                                      padding: "0 6px",
                                      borderRadius: 6,
                                      background: "rgba(245, 34, 56, 0.15)",
                                      color: "#ff6677",
                                      fontWeight: 700,
                                      fontSize: 13,
                                      flexShrink: 0,
                                    }}
                                  >
                                    {cap.numero}
                                  </span>
                                  <span
                                    style={{
                                      color: "#edf5ff",
                                      fontSize: 14.5,
                                      fontWeight: 600,
                                      lineHeight: 1.3,
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                      display: "-webkit-box",
                                      WebkitLineClamp: 2,
                                      WebkitBoxOrient: "vertical",
                                    }}
                                  >
                                    {getChapterTitle(cap)}
                                  </span>
                                </div>
                                <span
                                  style={{
                                    fontSize: 12,
                                    color: "#60b5ff",
                                    background: "rgba(14, 101, 162, 0.25)",
                                    border: "1px solid rgba(14, 101, 162, 0.4)",
                                    padding: "5px 10px",
                                    borderRadius: 6,
                                    fontWeight: 700,
                                    flexShrink: 0,
                                  }}
                                >
                                  {locale === "en" ? "View →" : locale === "es" ? "Ver →" : "Ver →"}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            )}

            {/* VIEW 2: 3D CARD GRID (GRADE VISUAL DE CARDS COM GRADIENTE PADRÃO) */}
            {layoutView === "grid" && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                  gap: 22,
                }}
              >
                {filteredChapters.map((cap) => {
                  const sec = SECOES.find((s) => s.id === cap.secao_id);

                  return (
                    <article
                      key={cap.numero}
                      style={{
                        background: "#ffffff",
                        borderRadius: 18,
                        overflow: "hidden",
                        border: "1px solid rgba(226, 232, 240, 0.9)",
                        boxShadow: "0 10px 30px rgba(0, 20, 60, 0.08)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        transition: "all 0.25s ease",
                      }}
                    >
                      {/* Top Signature Gradient Ribbon */}
                      <div style={{ height: 4, width: "100%", background: "linear-gradient(90deg, #f52238 0%, #003382 100%)" }} />

                      <div style={{ padding: "22px 22px 14px" }}>
                        {/* Header Badges */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                          <span
                            style={{
                              background: "linear-gradient(135deg, #f52238 0%, #003382 100%)",
                              color: "#ffffff",
                              fontSize: 12,
                              fontWeight: 700,
                              padding: "4px 11px",
                              borderRadius: 6,
                              boxShadow: "0 3px 10px rgba(245, 34, 56, 0.3)",
                            }}
                          >
                            {locale === "en" ? `Chapter ${cap.numero}` : locale === "es" ? `Capítulo ${cap.numero}` : `Capítulo ${cap.numero}`}
                          </span>
                          <span style={{ fontSize: 11.5, fontWeight: 700, color: "#003382", background: "rgba(0, 51, 130, 0.07)", padding: "3px 8px", borderRadius: 4, border: "1px solid rgba(0, 51, 130, 0.15)" }}>
                            {locale === "en" ? `Section ${cap.secao_id}` : locale === "es" ? `Sección ${cap.secao_id}` : `Seção ${cap.secao_id}`}
                          </span>
                        </div>

                        <h3 style={{ fontSize: 17, fontWeight: 700, color: "#001a3d", margin: "0 0 10px", lineHeight: 1.35 }}>
                          {getChapterTitle(cap)}
                        </h3>

                        <p style={{ fontSize: 12.5, color: "#64748b", margin: "0 0 16px", lineHeight: 1.4 }}>
                          {sec ? (locale === "en" ? sec.titulo_en : locale === "es" ? sec.titulo_es : sec.titulo_pt) : ""}
                        </p>
                      </div>

                      {/* Actions */}
                      <div style={{ padding: "0 22px 22px", borderTop: "1px solid #f1f5f9", paddingTop: 14, display: "flex", gap: 8, flexWrap: "wrap" }}>
                        <Link
                          href={`/${locale}/capitulo-new/${cap.numero}`}
                          style={{
                            flex: 1,
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 6,
                            background: "linear-gradient(135deg, #f52238 0%, #003382 100%)",
                            color: "#ffffff",
                            padding: "9px 12px",
                            borderRadius: 8,
                            textDecoration: "none",
                            fontSize: 12.5,
                            fontWeight: 700,
                            boxShadow: "0 3px 10px rgba(245, 34, 56, 0.35)",
                          }}
                        >
                          <span>{locale === "en" ? "View Chapter" : locale === "es" ? "Ver Capítulo" : "Ver Capítulo"}</span>
                          <ArrowRight size={13} />
                        </Link>
                        <button
                          type="button"
                          onClick={() => setActiveModalChapter(cap)}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            padding: "9px 12px",
                            borderRadius: 8,
                            background: "#f8fafc",
                            border: "1px solid #cbd5e1",
                            color: "#001a3d",
                            fontSize: 12.5,
                            fontWeight: 700,
                            cursor: "pointer",
                          }}
                        >
                          <BookOpen size={13} />
                          <span>{locale === "en" ? "Abstract" : locale === "es" ? "Resumen" : "Resumo"}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => copyCitation(cap)}
                          title={locale === "en" ? "Copy citation" : locale === "es" ? "Copiar cita" : "Copiar citação ABNT"}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "9px 10px",
                            borderRadius: 8,
                            background: "#f8fafc",
                            border: "1px solid #cbd5e1",
                            color: "#001a3d",
                            fontSize: 12,
                            fontWeight: 700,
                            cursor: "pointer",
                          }}
                        >
                          {copiedChapter === cap.numero ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}

            {/* VIEW 3: COMPACT CLINICAL TABLE (TABELA MÉDICA COMPACTA COM GRADIENTE PADRÃO) */}
            {layoutView === "compact" && (
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: 18,
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 10px 35px rgba(0, 20, 60, 0.08)",
                  overflow: "hidden",
                }}
              >
                {/* Top Signature Gradient Ribbon */}
                <div style={{ height: 4, width: "100%", background: "linear-gradient(90deg, #f52238 0%, #003382 100%)" }} />

                <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
                  <table style={{ width: "100%", minWidth: 600, borderCollapse: "collapse", textAlign: "left" }}>
                  <thead>
                    <tr style={{ background: "linear-gradient(135deg, #00122e 0%, #002255 100%)", color: "#ffffff", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                      <th style={{ padding: "16px 20px", width: 75, textAlign: "center" }}>Nº</th>
                      <th style={{ padding: "16px 20px" }}>{locale === "en" ? "Chapter Title" : locale === "es" ? "Título del Capítulo" : "Título do Capítulo"}</th>
                      <th style={{ padding: "16px 20px", width: 240 }}>{locale === "en" ? "Thematic Section" : locale === "es" ? "Sección Temática" : "Seção Temática"}</th>
                      <th style={{ padding: "16px 20px", width: 220, textAlign: "right" }}>{locale === "en" ? "Quick Actions" : locale === "es" ? "Acciones Rápidas" : "Ações Rápidas"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredChapters.map((cap, index) => {
                      const sec = SECOES.find((s) => s.id === cap.secao_id);
                      const isEven = index % 2 === 0;

                      return (
                        <tr
                          key={cap.numero}
                          style={{
                            background: isEven ? "#ffffff" : "#f8fafc",
                            borderBottom: "1px solid #e2e8f0",
                            transition: "background 0.15s ease",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(245, 34, 56, 0.04)")}
                          onMouseLeave={(e) => (e.currentTarget.style.background = isEven ? "#ffffff" : "#f8fafc")}
                        >
                          <td style={{ padding: "14px 20px", textAlign: "center" }}>
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 32,
                                height: 32,
                                borderRadius: 8,
                                background: "linear-gradient(135deg, #f52238 0%, #003382 100%)",
                                color: "#ffffff",
                                fontSize: 12,
                                fontWeight: 700,
                                boxShadow: "0 2px 8px rgba(245, 34, 56, 0.3)",
                              }}
                            >
                              {cap.numero}
                            </span>
                          </td>
                          <td style={{ padding: "14px 20px" }}>
                            <Link
                              href={`/${locale}/capitulo-new/${cap.numero}`}
                              style={{
                                color: "#001a3d",
                                fontWeight: 700,
                                fontSize: 14.5,
                                textDecoration: "none",
                              }}
                            >
                              {getChapterTitle(cap)}
                            </Link>
                          </td>
                          <td style={{ padding: "14px 20px", fontSize: 13, color: "#64748b", fontWeight: 600 }}>
                            {sec ? `${locale === "en" ? "Section" : locale === "es" ? "Sección" : "Seção"} ${sec.numero}: ${locale === "en" ? sec.titulo_en : locale === "es" ? sec.titulo_es : sec.titulo_pt}` : ""}
                          </td>
                          <td style={{ padding: "14px 20px", textAlign: "right" }}>
                            <div style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
                              <Link
                                href={`/${locale}/capitulo-new/${cap.numero}`}
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: 4,
                                  padding: "6px 14px",
                                  borderRadius: 6,
                                  background: "linear-gradient(135deg, #f52238 0%, #003382 100%)",
                                  color: "#ffffff",
                                  fontSize: 12,
                                  fontWeight: 700,
                                  textDecoration: "none",
                                  boxShadow: "0 2px 8px rgba(245, 34, 56, 0.25)",
                                }}
                              >
                                <span>{locale === "en" ? "Open" : locale === "es" ? "Abrir" : "Abrir"}</span>
                                <ArrowRight size={12} />
                              </Link>
                              <button
                                type="button"
                                onClick={() => setActiveModalChapter(cap)}
                                style={{
                                  padding: "6px 10px",
                                  borderRadius: 6,
                                  background: "#f1f5f9",
                                  border: "1px solid #cbd5e1",
                                  color: "#001a3d",
                                  fontSize: 12,
                                  fontWeight: 700,
                                  cursor: "pointer",
                                }}
                              >
                                {locale === "en" ? "Abstract" : locale === "es" ? "Resumen" : "Resumo"}
                              </button>
                              <button
                                type="button"
                                onClick={() => copyCitation(cap)}
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  padding: "6px 8px",
                                  borderRadius: 6,
                                  background: "#f1f5f9",
                                  border: "1px solid #cbd5e1",
                                  color: "#001a3d",
                                  fontSize: 12,
                                  cursor: "pointer",
                                }}
                                title={locale === "en" ? "Copy citation" : locale === "es" ? "Copiar cita" : "Copiar citação"}
                              >
                                {copiedChapter === cap.numero ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* MODAL: RESUMO RÁPIDO DO CAPÍTULO (ESCRITORES E OBJETIVO DA ABORDAGEM) */}
        {activeModalChapter && (() => {
          const modalAuthors = getAuthorsByChapter(activeModalChapter.numero);
          const modalApproach = getChapterApproachObjective(
            activeModalChapter.numero,
            activeModalChapter.secao_id,
            locale
          );

          return (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 16, 38, 0.82)",
                backdropFilter: "blur(12px)",
                zIndex: 9999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px 16px",
              }}
              onClick={() => setActiveModalChapter(null)}
            >
              <div
                style={{
                  background: "linear-gradient(145deg, #001a3d 0%, #000c1e 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.16)",
                  borderRadius: 22,
                  padding: "32px 30px",
                  maxWidth: 680,
                  width: "100%",
                  maxHeight: "90vh",
                  overflowY: "auto",
                  boxShadow: "0 30px 70px rgba(0, 0, 0, 0.7), 0 0 30px rgba(245, 34, 56, 0.15)",
                  position: "relative",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveModalChapter(null)}
                  style={{
                    position: "absolute",
                    top: 18,
                    right: 18,
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    color: "#94a3b8",
                    display: "grid",
                    placeItems: "center",
                    cursor: "pointer",
                    fontWeight: 700,
                    fontSize: 16,
                  }}
                  title={locale === "en" ? "Close" : locale === "es" ? "Cerrar" : "Fechar"}
                >
                  ✕
                </button>

                {/* Section & Chapter Tag */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
                  <span
                    style={{
                      background: "linear-gradient(135deg, #f52238 0%, #b80f21 100%)",
                      color: "#fff",
                      fontSize: 11,
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: 6,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {locale === "en" ? `Chapter ${activeModalChapter.numero}` : locale === "es" ? `Capítulo ${activeModalChapter.numero}` : `Capítulo ${activeModalChapter.numero}`}
                  </span>
                  <span style={{ fontSize: 13, color: "#8cb7e4", fontWeight: 700 }}>
                    {locale === "en" ? "Section" : locale === "es" ? "Sección" : "Seção"} {activeModalChapter.secao_id}: {getSectionName(activeModalChapter.secao_id)}
                  </span>
                </div>

                {/* Chapter Title */}
                <h2 style={{ fontSize: "clamp(20px, 3vw, 24px)", color: "#fff", margin: "0 0 20px", lineHeight: 1.3, fontWeight: 700 }}>
                  {getChapterTitle(activeModalChapter)}
                </h2>

                {/* ================= 1. ESCRITORES DO CAPÍTULO ================= */}
                <div style={{ marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                    <Users size={16} className="text-rose-400" />
                    <h3 style={{ fontSize: 13.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#ff8290", margin: 0 }}>
                      {locale === "en"
                        ? "Chapter Authors & Writers"
                        : locale === "es"
                        ? "Escritores y Autores del Capítulo"
                        : "Escritores do Capítulo"}
                    </h3>
                  </div>

                  {modalAuthors.length > 0 ? (
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))", gap: 10 }}>
                      {modalAuthors.map((author) => (
                        <div
                          key={author.id}
                          style={{
                            padding: "12px 14px",
                            borderRadius: 12,
                            background: "rgba(255, 255, 255, 0.04)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                          }}
                        >
                          <img
                            src={author.foto_url || "/assets/avatar-placeholder.png"}
                            alt={author.nome}
                            style={{
                              width: 42,
                              height: 42,
                              borderRadius: 10,
                              objectFit: "cover",
                              border: "1.5px solid rgba(245, 34, 56, 0.4)",
                              flexShrink: 0,
                            }}
                          />
                          <div style={{ minWidth: 0, flex: 1 }}>
                            <div style={{ fontSize: 13.5, fontWeight: 700, color: "#ffffff", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                              {author.nome}
                            </div>
                            <div style={{ fontSize: 11.5, color: "#94a3b8", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginTop: 2 }}>
                              {author.instituicao || author.cargo}
                            </div>
                            <Link
                              href={`/${locale}/autor-new/${author.slug}`}
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 4,
                                fontSize: 11.5,
                                color: "#38bdf8",
                                fontWeight: 700,
                                textDecoration: "none",
                                marginTop: 4,
                              }}
                            >
                              <span>{locale === "en" ? "View Profile" : locale === "es" ? "Ver Perfil" : "Ver Perfil"}</span>
                              <span>→</span>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div
                      style={{
                        padding: "12px 16px",
                        borderRadius: 10,
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        fontSize: 13.5,
                        color: "#e2e8f0",
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <User size={16} className="text-rose-400 flex-shrink-0" />
                      <span>{activeModalChapter.autores || (locale === "en" ? "SBC Treatise Editorial Board" : locale === "es" ? "Cuerpo Editorial Tratado SBC" : "Corpo Editorial Oficial do Tratado SBC")}</span>
                    </div>
                  )}
                </div>

                {/* ================= 2. OBJETIVO DA ABORDAGEM ================= */}
                <div style={{ marginBottom: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                    <Target size={16} className="text-sky-400" />
                    <h3 style={{ fontSize: 13.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#38bdf8", margin: 0 }}>
                      {locale === "en"
                        ? "Clinical & Surgical Approach Objective"
                        : locale === "es"
                        ? "Objetivo del Abordaje Clínico y Quirúrgico"
                        : "Objetivo da Abordagem"}
                    </h3>
                  </div>

                  <div
                    style={{
                      borderRadius: 14,
                      background: "rgba(14, 101, 162, 0.12)",
                      border: "1px solid rgba(14, 101, 162, 0.35)",
                      borderLeft: "4px solid #0099ff",
                      padding: "18px 20px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                    }}
                  >
                    <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "#e2effe" }}>
                      {modalApproach.objetivo}
                    </p>

                    {modalApproach.focoClinico && (
                      <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: 10 }}>
                        <strong style={{ fontSize: 11.5, color: "#7dd3fc", textTransform: "uppercase", letterSpacing: "0.04em", display: "block", marginBottom: 3 }}>
                          🔬 {locale === "en" ? "Clinical & Surgical Focus" : locale === "es" ? "Enfoque Clínico y Quirúrgico" : "Foco Clínico & Cirúrgico"}
                        </strong>
                        <span style={{ fontSize: 13, color: "#cbd5e1", lineHeight: 1.5 }}>
                          {modalApproach.focoClinico}
                        </span>
                      </div>
                    )}

                    {modalApproach.indicacoes && (
                      <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: 10 }}>
                        <strong style={{ fontSize: 11.5, color: "#86efac", textTransform: "uppercase", letterSpacing: "0.04em", display: "block", marginBottom: 3 }}>
                          📋 {locale === "en" ? "Core Indications" : locale === "es" ? "Indicaciones Principales" : "Principais Indicações"}
                        </strong>
                        <span style={{ fontSize: 13, color: "#cbd5e1", lineHeight: 1.5 }}>
                          {modalApproach.indicacoes}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Print Treatise Exclusive Notice */}
                <p style={{ fontSize: 12.5, color: "#94a3b8", lineHeight: 1.5, margin: "0 0 22px" }}>
                  {locale === "en"
                    ? "The complete content, surgical techniques, algorithms, high-resolution figures, and references are published exclusively in the official printed edition."
                    : locale === "es"
                    ? "El contenido completo, técnicas quirúrgicas paso a paso, algoritmos, figuras en alta resolución y referencias constan con exclusividad en la edición impresa oficial."
                    : "O conteúdo completo, técnicas cirúrgicas passo a passo, algoritmos, figuras em alta definição e referências constam com exclusividade na obra impressa oficial."}
                </p>

                {/* Action Buttons */}
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <Link
                    href={`/${locale}/capitulo-new/${activeModalChapter.numero}`}
                    className="modern-btn-glow"
                    style={{ height: 44, fontSize: 13, flex: "1 1 200px", textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8 }}
                  >
                    <BookOpen size={16} />
                    <span>{locale === "en" ? "Read Full Chapter" : locale === "es" ? "Leer Capítulo Completo" : "Ler Capítulo Completo"}</span>
                  </Link>
                  <button
                    onClick={() => copyCitation(activeModalChapter)}
                    className="modern-btn-glass"
                    style={{ height: 44, fontSize: 13, padding: "0 16px", display: "inline-flex", alignItems: "center", gap: 6 }}
                  >
                    {copiedChapter === activeModalChapter.numero ? (
                      <>
                        <Check size={14} className="text-emerald-400" />
                        <span>{locale === "en" ? "Citation Copied!" : locale === "es" ? "¡Cita Copiada!" : "Citação Copiada!"}</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>{locale === "en" ? "Copy Citation" : locale === "es" ? "Copiar Cita" : "Copiar Citação"}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })()}
      </main>

      <ModernFooter locale={locale} />
    </div>
  );
}
