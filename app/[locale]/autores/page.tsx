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

const ALPHABET_LIST = [
  "Todos",
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Z"
];

// Layout columns distribution matching the official design
const COLUMN_MAPPING: string[][] = [
  ["A", "B", "C", "T"],
  ["D", "E", "F", "G", "V"],
  ["H", "I", "J", "K", "L", "W"],
  ["M", "N", "O", "X"],
  ["P", "R", "S", "Z"],
];

function normalizeFirstLetter(name: string): string {
  const cleanName = name.replace(/^(Dr\.|Dra\.|Prof\.|Profa\.)\s*/i, "").trim();
  const normalized = cleanName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return normalized.charAt(0).toUpperCase();
}

export default function AutoresPage({ params }: AutoresPageProps) {
  const resolvedParams = use(params);
  const rawLocale = resolvedParams.locale;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeLetter, setActiveLetter] = useState<string>("Todos");

  // Filter and group authors by normalized first letter
  const groupedAuthors = useMemo(() => {
    const groups: Record<string, AuthorProfile[]> = {};

    const filtered = AUTHORS_DIRECTORY.filter((a) => {
      const firstChar = normalizeFirstLetter(a.nome);

      if (activeLetter !== "Todos" && firstChar !== activeLetter) {
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

    // Sort alphabetically by clean name
    const sorted = [...filtered].sort((a, b) => {
      const nameA = a.nome.replace(/^(Dr\.|Dra\.|Prof\.|Profa\.)\s*/i, "").trim();
      const nameB = b.nome.replace(/^(Dr\.|Dra\.|Prof\.|Profa\.)\s*/i, "").trim();
      return nameA.localeCompare(nameB, "pt", { sensitivity: "base" });
    });

    for (const a of sorted) {
      const firstChar = normalizeFirstLetter(a.nome);
      if (!groups[firstChar]) {
        groups[firstChar] = [];
      }
      groups[firstChar].push(a);
    }

    return groups;
  }, [activeLetter, searchQuery]);

  return (
    <>
      <Header locale={locale} currentPage="autores" />

      <main style={{ background: "#f8fafc", minHeight: "100vh" }}>
        {/* ========================================================================= */}
        {/* HERO SECTION */}
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
                    <svg className="w-4 h-4 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
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
        <section className="w-full px-4 sm:px-6 md:px-8 mx-auto max-w-7xl pt-12 pb-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001a3d] tracking-tight">
              {locale === "en" ? "Editors" : locale === "es" ? "Editores" : "Editores"}
            </h2>
            <div className="w-10 h-1 bg-[#dc2626] rounded-full mx-auto mt-2.5 mb-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Editor 1: Edson Pudles */}
            <Link
              href={`/${locale}/autor/edson-pudles`}
              className="bg-white rounded-2xl border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden flex flex-row items-stretch transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              style={{ textDecoration: "none" }}
            >
              <div className="w-[125px] sm:w-[145px] flex-shrink-0 bg-slate-100 overflow-hidden relative">
                <img
                  src="/assets/edson-pudles.png"
                  alt="Edson Pudles"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ minHeight: "180px" }}
                />
              </div>
              <div className="p-4 sm:p-5 flex flex-col justify-center flex-1 min-w-0">
                <h3 className="text-base sm:text-[17px] font-extrabold text-[#001a3d] leading-tight group-hover:text-blue-900 transition-colors">
                  Edson Pudles
                </h3>
                <div className="w-7 h-0.5 bg-[#dc2626] rounded-full my-2.5" />
                <p className="text-xs sm:text-[13px] font-semibold text-[#001a3d] leading-snug">
                  Médico Ortopedista e Traumatologista
                </p>
                <p className="text-[11px] sm:text-xs font-semibold text-[#001a3d] mt-3">
                  ORCID: 0000-0001-9816-2945
                </p>
              </div>
            </Link>

            {/* Editor 2: Helton Luiz Aparecido Defino */}
            <Link
              href={`/${locale}/autor/helton-luiz-aparecido-defino`}
              className="bg-white rounded-2xl border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden flex flex-row items-stretch transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              style={{ textDecoration: "none" }}
            >
              <div className="w-[125px] sm:w-[145px] flex-shrink-0 bg-slate-100 overflow-hidden relative">
                <img
                  src="/assets/helton-defino.png"
                  alt="Helton Luiz Aparecido Defino"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ minHeight: "180px" }}
                />
              </div>
              <div className="p-4 sm:p-5 flex flex-col justify-center flex-1 min-w-0">
                <h3 className="text-base sm:text-[17px] font-extrabold text-[#001a3d] leading-tight group-hover:text-blue-900 transition-colors">
                  Helton Luiz Aparecido Defino
                </h3>
                <div className="w-7 h-0.5 bg-[#dc2626] rounded-full my-2.5" />
                <p className="text-xs sm:text-[13px] font-semibold text-[#001a3d] leading-snug">
                  Médico Ortopedista e Traumatologista
                </p>
                <p className="text-[11px] sm:text-xs font-semibold text-[#001a3d] mt-3">
                  ORCID: 0000-0003-4274-0130
                </p>
              </div>
            </Link>

            {/* Editor 3: Marcelo Italo Risso Neto */}
            <Link
              href={`/${locale}/autor/marcelo-italo-risso-neto`}
              className="bg-white rounded-2xl border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden flex flex-row items-stretch transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              style={{ textDecoration: "none" }}
            >
              <div className="w-[125px] sm:w-[145px] flex-shrink-0 bg-slate-100 overflow-hidden relative">
                <img
                  src="/assets/marcelo-risso.png"
                  alt="Marcelo Italo Risso Neto"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ minHeight: "180px" }}
                />
              </div>
              <div className="p-4 sm:p-5 flex flex-col justify-center flex-1 min-w-0">
                <h3 className="text-base sm:text-[17px] font-extrabold text-[#001a3d] leading-tight group-hover:text-blue-900 transition-colors">
                  Marcelo Italo Risso Neto
                </h3>
                <div className="w-7 h-0.5 bg-[#dc2626] rounded-full my-2.5" />
                <p className="text-xs sm:text-[13px] font-semibold text-[#001a3d] leading-snug">
                  Médico Ortopedista e Traumatologista
                </p>
                <p className="text-[11px] sm:text-xs font-semibold text-[#001a3d] mt-3">
                  ORCID: 0000-0003-0990-6901
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SEÇÃO 2: AUTORES E COLABORADORES */}
        {/* ========================================================================= */}
        <section className="w-full px-4 sm:px-6 md:px-8 mx-auto max-w-7xl pb-16">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001a3d] tracking-tight">
              {locale === "en" ? "Authors and Contributors" : locale === "es" ? "Autores y Colaboradores" : "Autores e colaboradores"}
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-[#001a3d]/80 mt-1">
              {locale === "en" ? "Alphabetical order" : locale === "es" ? "Orden alfabético" : "Ordem alfabética"}
            </p>
          </div>

          {/* Alphabet Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 mb-6 max-w-4xl mx-auto">
            {ALPHABET_LIST.map((letra) => {
              const isSelected = activeLetter === letra;
              return (
                <button
                  key={letra}
                  onClick={() => {
                    setActiveLetter(letra);
                    setSearchQuery("");
                  }}
                  className={`transition-all duration-150 font-bold text-xs sm:text-sm ${
                    isSelected
                      ? "bg-[#001a3d] text-white shadow-md border-transparent"
                      : "bg-white text-[#001a3d] border border-[#cbd5e1] hover:border-[#001a3d] hover:bg-slate-50"
                  } ${
                    letra === "Todos"
                      ? "px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full"
                      : "w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center"
                  }`}
                >
                  {letra === "Todos" ? (locale === "en" ? "All" : locale === "es" ? "Todos" : "Todos") : letra}
                </button>
              );
            })}
          </div>

          {/* Discreet Search Input */}
          <div className="max-w-md mx-auto mb-8 relative">
            <input
              type="text"
              placeholder={
                locale === "en"
                  ? "Search author by name or chapter..."
                  : locale === "es"
                  ? "Buscar autor por nombre o capítulo..."
                  : "Buscar autor por nome ou capítulo..."
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm rounded-full border border-slate-300 bg-white focus:outline-none focus:border-[#001a3d] shadow-sm"
            />
            <span className="absolute left-3 top-2.5 text-xs text-slate-400">🔍</span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2 text-xs text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>

          {/* Directory Master Card */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-[0_8px_30px_rgba(0,30,80,0.04)] p-6 sm:p-8 md:p-10">
            {Object.keys(groupedAuthors).length === 0 ? (
              <div className="text-center py-12 text-slate-500">
                <p className="text-sm">
                  {locale === "en" ? "No authors found." : locale === "es" ? "No se encontraron autores." : "Nenhum autor encontrado para a busca."}
                </p>
              </div>
            ) : activeLetter === "Todos" && !searchQuery.trim() ? (
              /* Official 5-Column Grid Layout */
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-start">
                {COLUMN_MAPPING.map((lettersInCol, colIdx) => (
                  <div key={colIdx} className="flex flex-col gap-6">
                    {lettersInCol.map((letter) => {
                      const list = groupedAuthors[letter];
                      if (!list || list.length === 0) return null;

                      return (
                        <div key={letter} id={`letra-${letter}`} className="flex flex-col">
                          {/* Letter Heading */}
                          <h3 className="text-lg sm:text-xl font-extrabold text-[#dc2626] mb-2 leading-none">
                            {letter}
                          </h3>

                          {/* Authors List */}
                          <div className="flex flex-col gap-1.5">
                            {list.map((autor) => (
                              <Link
                                key={autor.slug}
                                href={`/${locale}/autor/${autor.slug}`}
                                className="group inline-flex items-center gap-1.5 text-[12px] sm:text-[12.5px] font-semibold text-[#001a3d] hover:text-[#dc2626] hover:underline transition-colors leading-snug"
                                style={{ textDecoration: "none" }}
                              >
                                <svg
                                  className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#dc2626] flex-shrink-0 transition-colors"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                  <circle cx="12" cy="7" r="4" />
                                </svg>
                                <span>{autor.nome}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            ) : (
              /* Filtered / Search Multi-Column Grid */
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 items-start">
                {Object.entries(groupedAuthors).map(([letter, list]) => (
                  <div key={letter} className="flex flex-col">
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#dc2626] mb-2 leading-none">
                      {letter}
                    </h3>
                    <div className="flex flex-col gap-1.5">
                      {list.map((autor) => (
                        <Link
                          key={autor.slug}
                          href={`/${locale}/autor/${autor.slug}`}
                          className="group inline-flex items-center gap-1.5 text-[12px] sm:text-[12.5px] font-semibold text-[#001a3d] hover:text-[#dc2626] hover:underline transition-colors leading-snug"
                          style={{ textDecoration: "none" }}
                        >
                          <svg
                            className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#dc2626] flex-shrink-0 transition-colors"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                          <span>{autor.nome}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
