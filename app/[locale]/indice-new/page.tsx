"use client";

import { useState, use, useMemo } from "react";
import Link from "next/link";
import ModernHeader from "@/components/modern/ModernHeader";
import ModernFooter from "@/components/modern/ModernFooter";
import { Locale, Capitulo } from "@/lib/types";
import { SECOES, INITIAL_CHAPTERS } from "@/lib/data/sections-and-chapters";

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

  // Filter chapters based on search query
  const filteredChapters = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return INITIAL_CHAPTERS;

    return INITIAL_CHAPTERS.filter((cap) => {
      return (
        cap.numero.toString() === q ||
        cap.titulo_pt.toLowerCase().includes(q) ||
        (cap.titulo_en && cap.titulo_en.toLowerCase().includes(q)) ||
        (cap.titulo_es && cap.titulo_es.toLowerCase().includes(q))
      );
    });
  }, [searchQuery]);

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

  const sectionWord =
    locale === "en" ? "Section" : locale === "es" ? "Sección" : "Seção";

  return (
    <div style={{ background: "#0a192f", color: "#e6f1ff", minHeight: "100vh" }}>
      <ModernHeader locale={locale} currentPage="indice-new" />

      <main>
        {/* ================= HERO SEARCH & CONTROLS ================= */}
        <section
          style={{
            padding: "100px 0 45px",
            background: "radial-gradient(circle at 50% 20%, rgba(14, 101, 162, 0.4), transparent 60%), linear-gradient(180deg, #020c1b 0%, #0a192f 100%)",
            position: "relative",
            overflow: "hidden",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div className="modern-hero-ambient" />

          <div className="shell" style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
            <div className="modern-hero-badge" style={{ margin: "0 auto 18px" }}>
              <span className="pulse-dot" />
              <span>Índice Oficial • 10 Seções &amp; 109 Capítulos</span>
            </div>

            <h1 style={{ fontSize: 50, letterSpacing: "-0.035em", margin: "0 0 16px", fontWeight: 800, color: "#fff" }}>
              {locale === "en"
                ? "Interactive Master Index"
                : locale === "es"
                ? "Índice Maestro Interactivo"
                : "Índice Completo da Obra"}
            </h1>

            <p style={{ fontSize: 18, color: "#94b8db", maxWidth: 660, margin: "0 auto 32px", lineHeight: 1.5 }}>
              {locale === "en"
                ? "Navigate the complete 10 thematic sections and 109 chapters with real-time multilingual search."
                : locale === "es"
                ? "Navegue por las 10 secciones temáticas y 109 capítulos con búsqueda multilingüe en tiempo real."
                : "Navegue pela estrutura completa das 10 seções temáticas e 109 capítulos com busca instantânea em tempo real."}
            </p>

            {/* Live Search Bar */}
            <div className="modern-search-bar" style={{ background: "rgba(255, 255, 255, 0.95)" }}>
              <svg style={{ width: 22, height: 22, color: "#0e65a2", flexShrink: 0 }}>
                <use href="#i-search"></use>
              </svg>
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
                  Limpar ✕
                </button>
              )}
            </div>

            {/* Controls Bar (Expand / Collapse All & Match Counter) */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                maxWidth: 800,
                margin: "0 auto",
                padding: "10px 20px",
                borderRadius: 14,
                background: "rgba(255, 255, 255, 0.06)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                fontSize: 13.5,
              }}
            >
              <span style={{ color: "#c2dcf5" }}>
                Exibindo <strong>{filteredChapters.length}</strong> de 109 capítulos
                {searchQuery && ` para "${searchQuery}"`}
              </span>

              <div style={{ display: "flex", gap: 10 }}>
                <button
                  onClick={() => setAllSections(true)}
                  style={{
                    padding: "5px 12px",
                    borderRadius: 6,
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    background: "rgba(255, 255, 255, 0.08)",
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: 650,
                    cursor: "pointer",
                  }}
                >
                  Expandir Todos ↓
                </button>
                <button
                  onClick={() => setAllSections(false)}
                  style={{
                    padding: "5px 12px",
                    borderRadius: 6,
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    background: "rgba(255, 255, 255, 0.08)",
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: 650,
                    cursor: "pointer",
                  }}
                >
                  Recolher Todos ↑
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION FILTER PILLS ================= */}
        <section style={{ padding: "24px 0 16px", background: "rgba(0, 15, 35, 0.5)" }}>
          <div className="shell">
            <div className="modern-filter-row" style={{ marginBottom: 0 }}>
              <button
                onClick={() => setSelectedSecao("all")}
                className={`modern-filter-chip ${selectedSecao === "all" ? "active" : ""}`}
                style={{
                  background: selectedSecao === "all" ? "#f52238" : "rgba(255, 255, 255, 0.06)",
                  borderColor: selectedSecao === "all" ? "#f52238" : "rgba(255, 255, 255, 0.12)",
                  color: "#fff",
                }}
              >
                <span>Todas as 10 Seções</span>
                <span className="modern-filter-count">109</span>
              </button>

              {SECOES.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => setSelectedSecao(sec.id)}
                  className={`modern-filter-chip ${selectedSecao === sec.id ? "active" : ""}`}
                  style={{
                    background: selectedSecao === sec.id ? (sec.id <= 5 ? "#f52238" : "#0e65a2") : "rgba(255, 255, 255, 0.06)",
                    borderColor: selectedSecao === sec.id ? "transparent" : "rgba(255, 255, 255, 0.12)",
                    color: "#fff",
                  }}
                >
                  <span>
                    Seção {sec.numero}: {locale === "en" ? sec.titulo_en : locale === "es" ? sec.titulo_es : sec.titulo_pt}
                  </span>
                  <span className="modern-filter-count">{sec.totalCapitulos}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ================= MODERNIZED CLASSIC OUTLINE SECTION ================= */}
        <section style={{ padding: "30px 0 80px" }}>
          <div className="shell">
            {SECOES.filter((s) => selectedSecao === "all" || s.id === selectedSecao).map((secao) => {
              const isOpen = Boolean(openSections[secao.id]);
              const secChapters = filteredChapters.filter(
                (c) => c.secao_id === secao.id
              );
              const isSection8 = secao.id === 8;

              // Hide section if searching and no matches in this section
              if (searchQuery && secChapters.length === 0) return null;

              return (
                <article
                  key={secao.id}
                  id={secao.tag}
                  className={`outline-row ${secao.colorClass} ${
                    isSection8 ? "section-eight" : ""
                  } ${isOpen ? "is-open" : ""}`}
                  style={{
                    marginBottom: 10,
                    borderRadius: 14,
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.16)",
                    boxShadow: "0 8px 24px rgba(0, 10, 30, 0.35)",
                    transition: "all 0.25s ease",
                  }}
                >
                  {/* Row Toggle Header Button */}
                  <button
                    className="row-toggle"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`chapters-${secao.id}`}
                    onClick={() => toggleSection(secao.id)}
                    id={`toggle-secao-${secao.id}`}
                  >
                    <span className="row-title">
                      <span
                        className="row-icon"
                        style={{
                          background: secao.id <= 5 ? "rgba(245, 34, 56, 0.2)" : "rgba(14, 101, 162, 0.25)",
                          borderColor: secao.id <= 5 ? "rgba(245, 34, 56, 0.5)" : "rgba(14, 101, 162, 0.5)",
                        }}
                      >
                        <svg>
                          <use href={`#${secao.iconId}`}></use>
                        </svg>
                      </span>
                      <span>
                        <b style={{ color: secao.id <= 5 ? "#ff5b6e" : "#45c2ff" }}>
                          {sectionWord} {secao.numero}
                        </b>
                        <strong style={{ color: "#fff", fontSize: 22 }}>
                          {locale === "en"
                            ? secao.titulo_en
                            : locale === "es"
                            ? secao.titulo_es
                            : secao.titulo_pt}
                        </strong>
                        <small style={{ color: "#a5c4e8" }}>
                          {secao.range} ({secChapters.length} capítulos)
                        </small>
                      </span>
                    </span>

                    <span className="toggle-icon">
                      <svg>
                        <use href="#i-down"></use>
                      </svg>
                    </span>
                  </button>

                  {/* 3-Column Chapters List (The Classic Format Upgraded) */}
                  <ol
                    id={`chapters-${secao.id}`}
                    className={`chapters ${secao.isCompact ? "compact" : ""}`}
                    style={{
                      padding: "24px 20px 20px 32px",
                    }}
                  >
                    {secChapters.map((cap) => {
                      const isMatch =
                        searchQuery &&
                        (cap.titulo_pt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cap.numero.toString() === searchQuery.trim());

                      return (
                        <li
                          key={cap.numero}
                          onClick={() => setActiveModalChapter(cap)}
                          style={{
                            cursor: "pointer",
                            padding: "6px 8px",
                            borderRadius: 6,
                            transition: "background 0.15s ease, transform 0.15s ease",
                            background: isMatch ? "rgba(245, 34, 56, 0.25)" : "transparent",
                            border: isMatch ? "1px solid rgba(245, 34, 56, 0.5)" : "1px solid transparent",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
                            e.currentTarget.style.transform = "translateX(2px)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = isMatch ? "rgba(245, 34, 56, 0.25)" : "transparent";
                            e.currentTarget.style.transform = "translateX(0px)";
                          }}
                        >
                          <b style={{ color: secao.id <= 5 ? "#ff7382" : "#55cdfc", marginRight: 5 }}>
                            {cap.numero}.
                          </b>{" "}
                          <span style={{ color: "#edf5ff" }}>
                            {getChapterTitle(cap)}
                          </span>
                        </li>
                      );
                    })}
                  </ol>
                </article>
              );
            })}
          </div>
        </section>

        {/* ================= CHAPTER DETAIL MODAL ================= */}
        {activeModalChapter && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 999,
              background: "rgba(0, 10, 25, 0.75)",
              backdropFilter: "blur(12px)",
              display: "grid",
              placeItems: "center",
              padding: 20,
            }}
            onClick={() => setActiveModalChapter(null)}
          >
            <div
              className="glass-card"
              style={{
                maxWidth: 600,
                width: "100%",
                padding: 36,
                background: "#061833",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#fff",
                position: "relative",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.6)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalChapter(null)}
                style={{
                  position: "absolute",
                  top: 18,
                  right: 18,
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "none",
                  borderRadius: "50%",
                  width: 34,
                  height: 34,
                  cursor: "pointer",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#cbd5e1",
                }}
              >
                ✕
              </button>

              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span
                  style={{
                    background: "#f52238",
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: 800,
                    padding: "4px 10px",
                    borderRadius: 6,
                  }}
                >
                  Capítulo {activeModalChapter.numero}
                </span>
                <span style={{ fontSize: 13, color: "#8cb7e4", fontWeight: 700 }}>
                  Seção {activeModalChapter.secao_id}: {getSectionName(activeModalChapter.secao_id)}
                </span>
              </div>

              <h2 style={{ fontSize: 24, color: "#fff", margin: "0 0 18px", lineHeight: 1.25 }}>
                {activeModalChapter.titulo_pt}
              </h2>

              <div style={{ padding: 16, borderRadius: 12, background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", marginBottom: 20 }}>
                <div style={{ fontSize: 11.5, fontWeight: 700, textTransform: "uppercase", color: "#8da9cc", marginBottom: 8 }}>
                  Títulos em outros idiomas:
                </div>
                <div style={{ fontSize: 13.5, color: "#e2effe", marginBottom: 6 }}>
                  🇺🇸 <strong>EN:</strong> {activeModalChapter.titulo_en || "Disponível na edição impressa"}
                </div>
                <div style={{ fontSize: 13.5, color: "#e2effe" }}>
                  🇪🇸 <strong>ES:</strong> {activeModalChapter.titulo_es || "Disponible en la edición impresa"}
                </div>
              </div>

              <p style={{ fontSize: 13.5, color: "#9db8d7", lineHeight: 1.55, margin: "0 0 24px" }}>
                O conteúdo completo, técnica cirúrgica passo a passo, algoritmos e referências deste capítulo constam com exclusividade na obra impressa oficial do Tratado.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link
                  href={`/${locale}/capitulo/${activeModalChapter.numero}`}
                  className="modern-btn-glow"
                  style={{ height: 44, fontSize: 13, flex: "1 1 180px", textDecoration: "none", display: "inline-flex", justifyContent: "center" }}
                >
                  Ler Capítulo Completo 📖
                </Link>
                <button
                  onClick={() => copyCitation(activeModalChapter)}
                  className="modern-btn-glass"
                  style={{ height: 44, fontSize: 13, padding: "0 16px" }}
                >
                  {copiedChapter === activeModalChapter.numero ? "Citação Copiada! ✓" : "Copiar Citação"}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <ModernFooter locale={locale} />
    </div>
  );
}
