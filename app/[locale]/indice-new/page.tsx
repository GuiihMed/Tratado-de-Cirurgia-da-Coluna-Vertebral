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
  const [viewMode, setViewMode] = useState<"grid" | "accordion">("grid");
  const [activeModalChapter, setActiveModalChapter] = useState<Capitulo | null>(null);
  const [copiedChapter, setCopiedChapter] = useState<number | null>(null);

  // Filter chapters based on search query and selected section
  const filteredChapters = useMemo(() => {
    return INITIAL_CHAPTERS.filter((cap) => {
      const matchesSecao =
        selectedSecao === "all" || cap.secao_id === selectedSecao;

      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        cap.numero.toString() === q ||
        cap.titulo_pt.toLowerCase().includes(q) ||
        (cap.titulo_en && cap.titulo_en.toLowerCase().includes(q)) ||
        (cap.titulo_es && cap.titulo_es.toLowerCase().includes(q));

      return matchesSecao && matchesQuery;
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
    <div style={{ background: "#f5f8fc", color: "var(--ink)", minHeight: "100vh" }}>
      <ModernHeader locale={locale} currentPage="indice-new" />

      <main>
        {/* ================= HERO SEARCH & CONTROLS ================= */}
        <section
          style={{
            padding: "110px 0 50px",
            background: "linear-gradient(135deg, #021226 0%, #062b5b 50%, #001f46 100%)",
            color: "#fff",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="modern-hero-ambient" />
          <div className="modern-hero-glow" />

          <div className="shell" style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
            <div className="modern-hero-badge" style={{ margin: "0 auto 20px" }}>
              <span className="pulse-dot" />
              <span>Índice Geral &amp; Navegador Interativo</span>
            </div>

            <h1 style={{ fontSize: 52, letterSpacing: "-0.035em", margin: "0 0 16px", fontWeight: 800 }}>
              Explorador Científico dos 109 Capítulos
            </h1>

            <p style={{ fontSize: 18, color: "#c8ddf4", maxWidth: 680, margin: "0 auto 36px", lineHeight: 1.5 }}>
              Pesquise instantaneamente por títulos em português, inglês e espanhol, navegue por áreas de especialidade e filtre por seções cirúrgicas.
            </p>

            {/* Live Search Input */}
            <div className="modern-search-bar">
              <svg style={{ width: 24, height: 24, color: "#0e65a2", flexShrink: 0 }}>
                <use href="#i-search"></use>
              </svg>
              <input
                type="text"
                className="modern-search-input"
                placeholder={
                  locale === "en"
                    ? "Search by chapter number, topic or keywords (e.g., '8', 'sagital', 'endoscopia')..."
                    : locale === "es"
                    ? "Buscar por número, tema o palabras clave (ej., '8', 'sagital', 'endoscopia')..."
                    : "Buscar por número do capítulo, título ou palavra-chave (ex: '8', 'sagital', 'endoscopia')..."
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

            {/* View Mode & Quick Stats Bar */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                maxWidth: 800,
                margin: "0 auto",
                padding: "8px 16px",
                borderRadius: 12,
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                fontSize: 13.5,
              }}
            >
              <span style={{ color: "#d6e7f8" }}>
                Exibindo <strong>{filteredChapters.length}</strong> de 109 capítulos
              </span>

              <div style={{ display: "flex", gap: 6 }}>
                <button
                  onClick={() => setViewMode("grid")}
                  style={{
                    padding: "6px 14px",
                    borderRadius: 8,
                    border: "none",
                    background: viewMode === "grid" ? "#f52238" : "rgba(255, 255, 255, 0.1)",
                    color: "#fff",
                    fontSize: 12.5,
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  Cards (Grade)
                </button>
                <button
                  onClick={() => setViewMode("accordion")}
                  style={{
                    padding: "6px 14px",
                    borderRadius: 8,
                    border: "none",
                    background: viewMode === "accordion" ? "#f52238" : "rgba(255, 255, 255, 0.1)",
                    color: "#fff",
                    fontSize: 12.5,
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  Seções (Accordion)
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION FILTER PILLS ================= */}
        <section style={{ padding: "30px 0 10px" }}>
          <div className="shell">
            <div className="modern-filter-row">
              <button
                onClick={() => setSelectedSecao("all")}
                className={`modern-filter-chip ${selectedSecao === "all" ? "active" : ""}`}
              >
                <span>Todas as Seções</span>
                <span className="modern-filter-count">109</span>
              </button>

              {SECOES.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => setSelectedSecao(sec.id)}
                  className={`modern-filter-chip ${selectedSecao === sec.id ? "active" : ""}`}
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

        {/* ================= CHAPTERS DISPLAY ================= */}
        <section style={{ padding: "10px 0 90px" }}>
          <div className="shell">
            {filteredChapters.length === 0 ? (
              <div
                className="glass-card"
                style={{
                  padding: 60,
                  textAlign: "center",
                  maxWidth: 600,
                  margin: "40px auto",
                }}
              >
                <span
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "#f0f5fa",
                    color: "#839bb8",
                    display: "inline-grid",
                    placeItems: "center",
                    marginBottom: 16,
                  }}
                >
                  <svg style={{ width: 32, height: 32 }}>
                    <use href="#i-search"></use>
                  </svg>
                </span>
                <h3 style={{ fontSize: 22, color: "var(--navy)", margin: "0 0 8px" }}>
                  Nenhum capítulo encontrado
                </h3>
                <p style={{ fontSize: 15, color: "#647c99", margin: "0 0 20px" }}>
                  Não encontramos nenhum capítulo para o termo &quot;{searchQuery}&quot;. Tente buscar por número ou outro termo clínico.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedSecao("all");
                  }}
                  className="modern-btn-glow"
                  style={{ height: 44, fontSize: 13 }}
                >
                  Redefinir Filtros
                </button>
              </div>
            ) : viewMode === "grid" ? (
              /* GRID CARDS VIEW */
              <div className="modern-chapters-grid">
                {filteredChapters.map((cap) => (
                  <article
                    key={cap.numero}
                    className="modern-chapter-card"
                    onClick={() => setActiveModalChapter(cap)}
                    style={{ cursor: "pointer" }}
                  >
                    <div>
                      <div className="modern-chapter-header">
                        <span className="modern-chapter-num">
                          Capítulo {cap.numero < 10 ? `0${cap.numero}` : cap.numero}
                        </span>
                        <span className="modern-chapter-section-badge">
                          Seção {cap.secao_id}
                        </span>
                      </div>

                      <h3 className="modern-chapter-title">
                        {getChapterTitle(cap)}
                      </h3>

                      {locale !== "en" && cap.titulo_en && (
                        <div style={{ fontSize: 13, color: "#748ba5", fontStyle: "italic", marginBottom: 6 }}>
                          EN: {cap.titulo_en}
                        </div>
                      )}
                    </div>

                    <div className="modern-chapter-footer">
                      <span style={{ color: "#063c79", fontWeight: 600 }}>
                        {getSectionName(cap.secao_id)}
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          copyCitation(cap);
                        }}
                        style={{
                          background: copiedChapter === cap.numero ? "#dcfce7" : "#f0f4f9",
                          color: copiedChapter === cap.numero ? "#15803d" : "#33557a",
                          border: "none",
                          borderRadius: 6,
                          padding: "4px 8px",
                          fontSize: 11,
                          fontWeight: 700,
                          cursor: "pointer",
                          transition: "all 0.15s ease",
                        }}
                        title="Copiar referência do capítulo"
                      >
                        {copiedChapter === cap.numero ? "Copiado! ✓" : "Citar"}
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              /* ACCORDION GROUPED VIEW */
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {SECOES.filter(
                  (s) => selectedSecao === "all" || s.id === selectedSecao
                ).map((sec) => {
                  const secChapters = filteredChapters.filter(
                    (c) => c.secao_id === sec.id
                  );
                  if (secChapters.length === 0) return null;

                  return (
                    <div
                      key={sec.id}
                      className="glass-card"
                      style={{ padding: 28 }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 14,
                          marginBottom: 20,
                          paddingBottom: 14,
                          borderBottom: "1.5px solid #edf3f9",
                        }}
                      >
                        <span
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: 12,
                            background: sec.id <= 5 ? "#f52238" : "#0e65a2",
                            color: "#fff",
                            display: "grid",
                            placeItems: "center",
                          }}
                        >
                          <svg style={{ width: 24, height: 24 }}>
                            <use href={`#${sec.iconId}`}></use>
                          </svg>
                        </span>
                        <div>
                          <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", color: sec.id <= 5 ? "#f52238" : "#0e65a2" }}>
                            Seção {sec.numero} ({secChapters.length} capítulos)
                          </div>
                          <h3 style={{ fontSize: 22, color: "var(--navy)", margin: 0, fontWeight: 800 }}>
                            {locale === "en" ? sec.titulo_en : locale === "es" ? sec.titulo_es : sec.titulo_pt}
                          </h3>
                        </div>
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 14 }}>
                        {secChapters.map((cap) => (
                          <div
                            key={cap.numero}
                            onClick={() => setActiveModalChapter(cap)}
                            style={{
                              padding: "14px 18px",
                              borderRadius: 10,
                              background: "#fff",
                              border: "1px solid #e2edf7",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 10,
                              transition: "all 0.15s ease",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#0e65a2")}
                            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#e2edf7")}
                          >
                            <span style={{ fontSize: 13, fontWeight: 800, color: "#f52238", minWidth: 26 }}>
                              {cap.numero}.
                            </span>
                            <span style={{ fontSize: 14, fontWeight: 650, color: "#163a63", lineHeight: 1.3 }}>
                              {getChapterTitle(cap)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* ================= CHAPTER DETAIL MODAL / DRAWER ================= */}
        {activeModalChapter && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 999,
              background: "rgba(0, 15, 40, 0.65)",
              backdropFilter: "blur(8px)",
              display: "grid",
              placeItems: "center",
              padding: 20,
            }}
            onClick={() => setActiveModalChapter(null)}
          >
            <div
              className="glass-card"
              style={{
                maxWidth: 620,
                width: "100%",
                padding: 36,
                background: "#fff",
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalChapter(null)}
                style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  background: "#f0f4f9",
                  border: "none",
                  borderRadius: "50%",
                  width: 36,
                  height: 36,
                  cursor: "pointer",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#64748b",
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
                <span style={{ fontSize: 13, color: "#063c79", fontWeight: 700 }}>
                  Seção {activeModalChapter.secao_id}: {getSectionName(activeModalChapter.secao_id)}
                </span>
              </div>

              <h2 style={{ fontSize: 26, color: "var(--navy)", margin: "0 0 18px", lineHeight: 1.2 }}>
                {activeModalChapter.titulo_pt}
              </h2>

              <div style={{ padding: 16, borderRadius: 12, background: "#f6f9fc", border: "1px solid #e1ebf5", marginBottom: 20 }}>
                <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", color: "#64748b", marginBottom: 8 }}>
                  Títulos em outros idiomas:
                </div>
                <div style={{ fontSize: 14, color: "#1e3a5f", marginBottom: 6 }}>
                  🇺🇸 <strong>EN:</strong> {activeModalChapter.titulo_en || "Disponível na edição impressa"}
                </div>
                <div style={{ fontSize: 14, color: "#1e3a5f" }}>
                  🇪🇸 <strong>ES:</strong> {activeModalChapter.titulo_es || "Disponible en la edición impresa"}
                </div>
              </div>

              <p style={{ fontSize: 14, color: "#546e8c", lineHeight: 1.55, margin: "0 0 24px" }}>
                O conteúdo cirúrgico completo, ilustrações anatômicas esquemáticas e vídeos de demonstração deste capítulo estão disponíveis com exclusividade na obra impressa do Tratado.
              </p>

              <div style={{ display: "flex", gap: 12 }}>
                <button
                  onClick={() => copyCitation(activeModalChapter)}
                  className="modern-btn-glow"
                  style={{ height: 46, fontSize: 13, flex: 1 }}
                >
                  {copiedChapter === activeModalChapter.numero ? "Referência Copiada! ✓" : "Copiar Citação"}
                </button>
                <Link
                  href={`/${locale}/home-new#comprar`}
                  className="modern-btn-glass"
                  style={{ height: 46, fontSize: 13, color: "#052d5e", borderColor: "#c8daf0", background: "#edf4fb" }}
                >
                  Onde Adquirir
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>

      <ModernFooter locale={locale} />
    </div>
  );
}
