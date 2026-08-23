"use client";

import { use, useState, useMemo } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Locale } from "@/lib/types";
import { EDITORES_TRATADO } from "@/lib/data/institutional-data";
import { AUTHORS_DIRECTORY, AuthorProfile } from "@/lib/data/authors";

interface AutoresPageProps {
  params: Promise<{ locale: string }>;
}

export default function AutoresPage({ params }: AutoresPageProps) {
  const resolvedParams = use(params);
  const rawLocale = resolvedParams.locale;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeLetter, setActiveLetter] = useState<string>("TODOS");

  // Available letters from actual authors
  const letters = useMemo(() => {
    const letterSet = new Set<string>();
    for (const a of AUTHORS_DIRECTORY) {
      const cleanName = a.nome.replace(/^(Dr\.|Dra\.|Prof\.|Profa\.)\s*/i, "").trim();
      const firstChar = cleanName.charAt(0).toUpperCase();
      if (firstChar >= "A" && firstChar <= "Z") {
        letterSet.add(firstChar);
      }
    }
    return ["TODOS", ...Array.from(letterSet).sort()];
  }, []);

  // Filter authors by search and letter
  const filteredAuthors = useMemo(() => {
    return AUTHORS_DIRECTORY.filter((a) => {
      const cleanName = a.nome.replace(/^(Dr\.|Dra\.|Prof\.|Profa\.)\s*/i, "").trim();
      const firstChar = cleanName.charAt(0).toUpperCase();

      if (activeLetter !== "TODOS" && firstChar !== activeLetter) {
        return false;
      }

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = a.nome.toLowerCase().includes(query);
        const matchesCargo = a.cargo.toLowerCase().includes(query);
        const matchesInst = a.instituicao.toLowerCase().includes(query);
        const matchesChapters = a.capitulos_tratado.some(
          (c) =>
            c.titulo.toLowerCase().includes(query) ||
            c.num.toString() === query ||
            c.secao_nome.toLowerCase().includes(query)
        );
        return matchesName || matchesCargo || matchesInst || matchesChapters;
      }

      return true;
    });
  }, [activeLetter, searchQuery]);

  // Group filtered authors by first letter
  const groupedAuthors = useMemo(() => {
    const groups: Record<string, AuthorProfile[]> = {};
    for (const a of filteredAuthors) {
      const cleanName = a.nome.replace(/^(Dr\.|Dra\.|Prof\.|Profa\.)\s*/i, "").trim();
      const firstChar = cleanName.charAt(0).toUpperCase();
      if (!groups[firstChar]) {
        groups[firstChar] = [];
      }
      groups[firstChar].push(a);
    }
    return groups;
  }, [filteredAuthors]);

  return (
    <>
      <Header locale={locale} currentPage="autores" />

      <main style={{ background: "#f8fafc", minHeight: "100vh" }}>
        {/* ========================================================================= */}
        {/* HERO SECTION (Clássica - Autores Responsivo com Fundo Oficial) */}
        {/* ========================================================================= */}
        <section
          className="relative w-full overflow-hidden text-white pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-white/10"
          style={{
            background:
              "radial-gradient(circle at 12% 35%, rgba(220, 20, 45, 0.6) 0%, transparent 45%), linear-gradient(105deg, #a80f22 0%, #2f193e 24%, #052b5b 54%, #005a9c 100%)",
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
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              
              {/* Left Column: 3D Book Cover */}
              <div className="md:col-span-5 flex justify-center md:justify-end">
                <div className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[320px] transition-transform duration-300 hover:scale-[1.03]">
                  <img
                    src="/assets/book-cover.png"
                    alt="Tratado de Cirurgia da Coluna Vertebral"
                    className="w-full h-auto rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.65)]"
                  />
                </div>
              </div>

              {/* Right Column: Hero Info */}
              <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-3">
                  {locale === "en" ? "Authors & Editors" : locale === "es" ? "Autores y Editores" : "Autores e Editores"}
                </h1>

                <p className="text-base sm:text-lg font-bold text-slate-100 leading-snug max-w-xl mb-3">
                  {locale === "en"
                    ? "Meet the editors, authors, and contributors of the Treatise on Spine Surgery."
                    : locale === "es"
                    ? "Conozca a los editores, autores y colaboradores del Tratado de Cirugía de Columna Vertebral."
                    : "Conheça os editores, autores e colaboradores do Tratado de Cirurgia da Coluna Vertebral."}
                </p>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl mb-6">
                  {locale === "en"
                    ? "The complete masterwork is exclusively available in printed format. This portal organizes authors, chapters, summaries, and references for clinical study."
                    : locale === "es"
                    ? "La obra completa existe exclusivamente en formato impreso. Este portal organiza autores, capítulos, resúmenes y referencias para estudio y consulta."
                    : "A obra completa existe exclusivamente em formato impresso. Este site organiza autores, capítulos, resumos e referências para estudo e consulta."}
                </p>

                {/* Print Notice Box */}
                <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-[#001433]/70 border border-white/20 backdrop-blur-md text-xs sm:text-sm text-slate-200 text-left shadow-lg">
                  <div className="w-7 h-7 rounded-lg bg-red-600/20 text-red-400 flex items-center justify-center flex-shrink-0 border border-red-500/30">
                    <svg className="w-4 h-4 text-red-400"><use href="#i-book"></use></svg>
                  </div>
                  <span className="font-medium leading-snug">
                    {locale === "en"
                      ? "The complete treatise is exclusively available in printed format."
                      : locale === "es"
                      ? "La obra completa existe exclusivamente en formato impreso."
                      : "A obra completa existe exclusivamente em formato impresso."}
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SEÇÃO 1: EDITORES */}
        {/* ========================================================================= */}
        <section style={{ maxWidth: 1200, margin: "48px auto 40px", padding: "0 24px" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: 26,
              fontWeight: 700,
              color: "#001a3d",
              margin: "0 0 32px",
              letterSpacing: "-0.01em",
            }}
          >
            {locale === "en" ? "Editors" : locale === "es" ? "Editores" : "Editores"}
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            {EDITORES_TRATADO.map((editor, idx) => (
              <div
                key={idx}
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  padding: "24px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.05)",
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  transition: "all 0.2s ease",
                }}
              >
                <div
                  style={{
                    width: 90,
                    height: 105,
                    borderRadius: 10,
                    overflow: "hidden",
                    background: "#e2e8f0",
                    border: "1px solid #cbd5e1",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={editor.foto_url}
                    alt={editor.nome}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                <div>
                  <h3 style={{ margin: "0 0 6px", fontSize: 17, fontWeight: 700, color: "#001a3d" }}>
                    <Link
                      href={`/${locale}/autor/${idx === 0 ? "edson-pudles" : idx === 1 ? "helton-luiz-aparecido-defino" : "marcelo-italo-risso-neto"}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                      className="hover:underline hover:text-blue-700"
                    >
                      {editor.nome}
                    </Link>
                  </h3>
                  <p style={{ margin: "0 0 10px", fontSize: 13, color: "#64748b", lineHeight: 1.4 }}>
                    {editor.cargo}
                  </p>
                  <Link
                    href={`/${locale}/autor/${idx === 0 ? "edson-pudles" : idx === 1 ? "helton-luiz-aparecido-defino" : "marcelo-italo-risso-neto"}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                      fontSize: 12.5,
                      fontWeight: 700,
                      color: "#e11d48",
                      textDecoration: "none",
                    }}
                  >
                    <span>Ver perfil & capítulos</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SEÇÃO 2: AUTORES E COLABORADORES (BUSCA & ORDEM ALFABÉTICA) */}
        {/* ========================================================================= */}
        <section style={{ maxWidth: 1200, margin: "0 auto 64px", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: "#001a3d", margin: "0 0 6px" }}>
              {locale === "en" ? "Authors and Contributors" : locale === "es" ? "Autores y Colaboradores" : "Autores e Colaboradores"}
            </h2>
            <p style={{ fontSize: 14, color: "#64748b", margin: "0 0 20px" }}>
              {locale === "en"
                ? "204 Specialists contributing across 109 Chapters"
                : locale === "es"
                ? "204 Especialistas contribuyendo en 109 Capítulos"
                : "204 Especialistas distribuídos nos 109 Capítulos"}
            </p>

            {/* Instant Search Bar */}
            <div style={{ maxWidth: 520, margin: "0 auto 24px", position: "relative" }}>
              <input
                type="text"
                placeholder={
                  locale === "en"
                    ? "Search author by name, chapter or subject..."
                    : locale === "es"
                    ? "Buscar autor por nombre, capítulo o tema..."
                    : "Buscar autor por nome, capítulo ou assunto..."
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 18px 12px 42px",
                  borderRadius: 12,
                  border: "1.5px solid #cbd5e1",
                  fontSize: 14,
                  outline: "none",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              />
              <span style={{ position: "absolute", left: 14, top: 12, fontSize: 16, color: "#94a3b8" }}>
                🔍
              </span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  style={{
                    position: "absolute",
                    right: 12,
                    top: 10,
                    background: "none",
                    border: "none",
                    fontSize: 14,
                    color: "#94a3b8",
                    cursor: "pointer",
                  }}
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Alphabet Filter Pills */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 6,
              marginBottom: 36,
            }}
          >
            {letters.map((letra) => {
              const isSelected = activeLetter === letra;
              return (
                <button
                  key={letra}
                  onClick={() => {
                    setActiveLetter(letra);
                    setSearchQuery("");
                  }}
                  style={{
                    padding: letra === "TODOS" ? "6px 14px" : "6px 10px",
                    borderRadius: 20,
                    border: isSelected ? "none" : "1px solid #cbd5e1",
                    background: isSelected ? "#002b66" : "#fff",
                    color: isSelected ? "#fff" : "#475569",
                    fontSize: 12.5,
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                    boxShadow: isSelected ? "0 2px 8px rgba(0, 43, 102, 0.25)" : "none",
                  }}
                >
                  {letra === "TODOS" ? (locale === "en" ? "All" : locale === "es" ? "Todos" : "Todos") : letra}
                </button>
              );
            })}
          </div>

          {/* Authors List Grid */}
          {Object.keys(groupedAuthors).length === 0 ? (
            <div style={{ textAlign: "center", padding: "48px 20px", background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0" }}>
              <p style={{ fontSize: 16, color: "#64748b", margin: 0 }}>
                Nenhum autor encontrado para a busca \"{searchQuery}\".
              </p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {Object.entries(groupedAuthors).map(([letra, lista]) => (
                <div key={letra} style={{ background: "#fff", borderRadius: 16, padding: "28px", border: "1px solid #e2e8f0", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)" }}>
                  {/* Letter Header */}
                  <div
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#e11d48",
                      borderBottom: "2px solid #ffe4e6",
                      paddingBottom: 6,
                      marginBottom: 20,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>{letra}</span>
                    <span style={{ fontSize: 13, color: "#94a3b8", fontWeight: 600 }}>
                      {lista.length} {lista.length === 1 ? "autor" : "autores"}
                    </span>
                  </div>

                  {/* Authors Grid */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 18 }}>
                    {lista.map((autor) => (
                      <div
                        key={autor.slug}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 14,
                          padding: "14px",
                          borderRadius: 12,
                          background: "#f8fafc",
                          border: "1px solid #e2e8f0",
                          transition: "transform 0.15s ease, border-color 0.15s ease",
                        }}
                      >
                        <img
                          src={autor.foto_url}
                          alt={autor.nome}
                          style={{
                            width: 48,
                            height: 48,
                            borderRadius: "50%",
                            objectFit: "cover",
                            border: "2px solid #001a3d",
                            flexShrink: 0,
                          }}
                        />

                        <div style={{ flex: 1, minWidth: 0 }}>
                          <Link
                            href={`/${locale}/autor/${autor.slug}`}
                            style={{
                              fontSize: 15,
                              fontWeight: 700,
                              color: "#001a3d",
                              textDecoration: "none",
                              display: "block",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                            className="hover:underline hover:text-blue-700"
                          >
                            {autor.nome}
                          </Link>

                          <div style={{ fontSize: 11.5, color: "#64748b", margin: "2px 0 8px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                            {autor.cargo}
                          </div>

                          {/* Chapters Contributed Badges */}
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 8 }}>
                            {autor.capitulos_tratado.map((c) => (
                              <Link
                                key={c.num}
                                href={`/${locale}/capitulo/${c.num}`}
                                style={{
                                  fontSize: 11,
                                  fontWeight: 700,
                                  color: "#0284c7",
                                  background: "#e0f2fe",
                                  padding: "2px 6px",
                                  borderRadius: 4,
                                  textDecoration: "none",
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: 2,
                                }}
                                title={`Capítulo ${c.num}: ${c.titulo}`}
                              >
                                <span>📖 Cap. {c.num}</span>
                              </Link>
                            ))}
                          </div>

                          <Link
                            href={`/${locale}/autor/${autor.slug}`}
                            style={{
                              fontSize: 11.5,
                              fontWeight: 700,
                              color: "#e11d48",
                              textDecoration: "none",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 3,
                            }}
                          >
                            <span>Ver currículo completo</span>
                            <span>→</span>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ========================================================================= */}
        {/* BOTTOM CTA BANNER */}
        {/* ========================================================================= */}
        <section
          style={{
            maxWidth: 1200,
            margin: "0 auto 60px",
            padding: "0 24px",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #001a3d 0%, #001026 100%)",
              borderRadius: 16,
              padding: "32px 40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
              color: "#fff",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <img
                src="/assets/book-cover.png"
                alt="Livro"
                style={{ width: 70, height: "auto", borderRadius: 4, boxShadow: "0 6px 16px rgba(0,0,0,0.4)" }}
              />
              <div>
                <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 12px", color: "#fff" }}>
                  {locale === "en"
                    ? "A landmark masterwork for clinical practice, study, and reference — exclusively printed."
                    : locale === "es"
                    ? "Una obra de referencia para consulta y estudio — exclusivamente en formato impreso."
                    : "Uma obra para consulta, estudo e referência — exclusivamente em formato impresso."}
                </h3>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap", fontSize: 12.5, color: "rgba(255, 255, 255, 0.8)", marginBottom: 16 }}>
                  <span>✓ {locale === "en" ? "Full content available only in the printed edition" : locale === "es" ? "Contenido completo disponible solo en edición impresa" : "Conteúdo completo disponível apenas na edição impressa"}</span>
                  <span>✓ {locale === "en" ? "Peer-reviewed and continuously updated" : locale === "es" ? "Revisado por especialistas reconocidos" : "Atualização contínua e revista por especialistas"}</span>
                  <span>✓ {locale === "en" ? "Editorial excellence for hospitals and specialists" : locale === "es" ? "Calidad editorial para bibliotecas y profesionales" : "Qualidade editorial para bibliotecas e profissionais"}</span>
                </div>
              </div>
            </div>

            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <p style={{ margin: "0 0 10px", fontSize: 13.5, fontWeight: 700, color: "rgba(255, 255, 255, 0.9)" }}>
                {locale === "en" ? "Acquire your printed edition published by DiLivros and SBC." : locale === "es" ? "Adquiera su edición impresa con la calidad DiLivros y el sello SBC." : "Adquira sua edição impressa com a qualidade DiLivros e o selo da SBC."}
              </p>
              <a
                href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 22px",
                  borderRadius: 8,
                  background: "#e11d48",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 14,
                  textDecoration: "none",
                }}
              >
                <span>{locale === "en" ? "Where to Buy" : locale === "es" ? "Dónde Comprar" : "Onde Comprar"}</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
