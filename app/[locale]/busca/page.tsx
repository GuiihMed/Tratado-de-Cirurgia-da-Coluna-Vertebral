"use client";

import { useState, useMemo, use, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Locale } from "@/lib/types";
import { searchTreatise, SearchResults } from "@/lib/data/global-search";
import {
  Search,
  BookOpen,
  Users,
  Tv,
  Layers,
  ArrowRight,
  Sparkles,
  X,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

interface SearchPageContentProps {
  locale: Locale;
}

function SearchPageContent({ locale }: SearchPageContentProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [activeTab, setActiveTab] = useState<"all" | "chapters" | "authors" | "episodes" | "sections">("all");

  const results: SearchResults = useMemo(() => {
    return searchTreatise(query, locale, false);
  }, [query, locale]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/${locale}/busca?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleQuickTagClick = (tag: string) => {
    setQuery(tag);
    router.push(`/${locale}/busca?q=${encodeURIComponent(tag)}`);
  };

  const clearSearch = () => {
    setQuery("");
    router.push(`/${locale}/busca`);
  };

  const t = {
    pt: {
      title: "Busca no Tratado",
      subtitle: "Pesquise em todos os 109 capítulos, autores especialistas, episódios em debate e seções temáticas.",
      placeholder: "Digite o que procura (ex: Equilíbrio Sagital, Escoliose, Marcelo Risso, Capítulo 8...)",
      all: "Todos os Resultados",
      chapters: "Capítulos",
      authors: "Autores",
      episodes: "Tratado em Debate",
      sections: "Seções Temáticas",
      resultsFound: "resultado(s) encontrado(s) para",
      typeToSearch: "Digite um termo para pesquisar em toda a obra",
      noResults: "Nenhum resultado encontrado para sua busca.",
      tryKeywords: "Tente buscar por termos médicos, números de capítulo, nomes de autores ou especialidades:",
      viewChapter: "Ver Capítulo",
      viewProfile: "Ver Perfil",
      watchEpisode: "Assistir Episódio",
      exploreSection: "Explorar Seção",
      section: "Seção",
      authorsLabel: "Autores:",
      coauthoredChapters: "capítulo(s) no Tratado",
    },
    en: {
      title: "Search the Treatise",
      subtitle: "Search across all 109 chapters, specialist authors, debate episodes, and thematic sections.",
      placeholder: "Type what you're looking for (e.g. Sagittal Balance, Scoliosis, Chapter 8...)",
      all: "All Results",
      chapters: "Chapters",
      authors: "Authors",
      episodes: "Treatise in Debate",
      sections: "Thematic Sections",
      resultsFound: "result(s) found for",
      typeToSearch: "Type a term to search across the entire work",
      noResults: "No results found for your query.",
      tryKeywords: "Try searching for medical keywords, chapter numbers, author names or topics:",
      viewChapter: "View Chapter",
      viewProfile: "View Profile",
      watchEpisode: "Watch Episode",
      exploreSection: "Explore Section",
      section: "Section",
      authorsLabel: "Authors:",
      coauthoredChapters: "chapter(s) in Treatise",
    },
    es: {
      title: "Buscar en el Tratado",
      subtitle: "Busque en los 109 capítulos, autores especialistas, episodios en debate y secciones temáticas.",
      placeholder: "Escriba lo que busca (ej: Equilibrio Sagital, Escoliosis, Capítulo 8...)",
      all: "Todos los Resultados",
      chapters: "Capítulos",
      authors: "Autores",
      episodes: "Tratado en Debate",
      sections: "Secciones Temáticas",
      resultsFound: "resultado(s) encontrado(s) para",
      typeToSearch: "Escriba un término para buscar en toda la obra",
      noResults: "No se encontraron resultados para su búsqueda.",
      tryKeywords: "Intente buscar términos médicos, números de capítulo, nombres de autores o especialidades:",
      viewChapter: "Ver Capítulo",
      viewProfile: "Ver Perfil",
      watchEpisode: "Ver Episodio",
      exploreSection: "Explorar Sección",
      section: "Sección",
      authorsLabel: "Autores:",
      coauthoredChapters: "capítulo(s) en el Tratado",
    },
  }[locale] || {
    title: "Busca no Tratado",
    subtitle: "Pesquise em toda a obra.",
    placeholder: "Digite o que procura...",
    all: "Todos os Resultados",
    chapters: "Capítulos",
    authors: "Autores",
    episodes: "Tratado em Debate",
    sections: "Seções Temáticas",
    resultsFound: "resultado(s) para",
    typeToSearch: "Digite para pesquisar",
    noResults: "Nenhum resultado encontrado.",
    tryKeywords: "Sugestões de busca:",
    viewChapter: "Ver Capítulo",
    viewProfile: "Ver Perfil",
    watchEpisode: "Assistir Episódio",
    exploreSection: "Explorar Seção",
    section: "Seção",
    authorsLabel: "Autores:",
    coauthoredChapters: "capítulos",
  };

  const SUGGESTED_TAGS = [
    "Equilíbrio Sagital",
    "Escoliose",
    "Hérnia de Disco",
    "Trauma Raquimedular",
    "Biomecânica",
    "Estenose Lombar",
    "Deformidade",
    "Capítulo 8",
    "Dr. Marcelo Risso",
    "Dr. Helton Defino",
    "Dr. Edson Pudles",
  ];

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header locale={locale} currentPage="busca" />

      <main style={{ flex: 1 }}>
        {/* ================= HERO SEARCH SECTION (CLASSIC DESIGN) ================= */}
        <section
          className="relative w-full overflow-hidden text-white pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-white/10"
          style={{
            background:
              "radial-gradient(circle at 19% 24%, rgba(255, 87, 86, 0.45), transparent 34%), linear-gradient(105deg, #c9142a 0%, #39244c 28%, #052b5b 58%, #0062a7 100%)",
          }}
        >
          {/* Subtle Anatomical Spine Background Overlay */}
          <img
            src="/assets/hero-spine.png"
            alt=""
            className="absolute right-0 top-0 h-full w-auto max-w-[60%] object-contain pointer-events-none opacity-25 hidden md:block"
            style={{ mixBlendMode: "screen", filter: "contrast(1.2) brightness(1.1)" }}
          />

          <div className="w-full px-4 sm:px-6 md:px-8 mx-auto max-w-5xl relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 mb-4">
              <Link href={`/${locale}`} className="hover:text-white transition-colors">
                {locale === "en" ? "Home" : locale === "es" ? "Inicio" : "Início"}
              </Link>
              <span>›</span>
              <span className="text-white font-semibold">{t.title}</span>
            </div>

            {/* Title & Subtitle */}
            <div className="text-center sm:text-left mb-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2">
                {t.title}
              </h1>
              <p className="text-slate-200 text-sm sm:text-base max-w-2xl leading-relaxed">
                {t.subtitle}
              </p>
            </div>

            {/* Main Search Input Box */}
            <form onSubmit={handleSearchSubmit} className="relative w-full max-w-3xl mb-4">
              <div className="relative flex items-center bg-white rounded-2xl p-1.5 shadow-2xl border border-white/20">
                <Search className="w-5 h-5 text-slate-400 ml-3.5 flex-shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t.placeholder}
                  className="w-full px-3.5 py-3 text-slate-900 placeholder:text-slate-400 text-sm sm:text-base font-medium outline-none bg-transparent"
                  autoFocus
                />
                {query && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors mr-1"
                    title="Limpar"
                  >
                    <X size={18} />
                  </button>
                )}
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-sm sm:text-base shadow-md transition-all flex items-center gap-2 flex-shrink-0 active:scale-[0.98]"
                >
                  <span className="hidden sm:inline">Pesquisar</span>
                  <Search size={16} />
                </button>
              </div>
            </form>

            {/* Suggested Quick Tags */}
            <div className="flex items-center gap-2 flex-wrap text-xs text-slate-200">
              <span className="font-semibold text-white flex items-center gap-1">
                <Sparkles size={13} className="text-amber-300" />
                Sugestões:
              </span>
              {SUGGESTED_TAGS.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleQuickTagClick(tag)}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/25 border border-white/15 text-white transition-all active:scale-95"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ================= RESULTS CONTENT SECTION ================= */}
        <section className="w-full px-4 sm:px-6 md:px-8 mx-auto max-w-5xl py-10">
          {query.trim() ? (
            <div>
              {/* Results Summary Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    <span className="text-red-600 font-extrabold">{results.total}</span> {t.resultsFound}{" "}
                    <span className="text-slate-700 font-bold">"{query}"</span>
                  </h2>
                </div>

                {/* Filter Tabs */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                  <button
                    type="button"
                    onClick={() => setActiveTab("all")}
                    className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                      activeTab === "all"
                        ? "bg-[#001738] text-white shadow-sm"
                        : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    {t.all} ({results.total})
                  </button>
                  {results.chapters.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setActiveTab("chapters")}
                      className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                        activeTab === "chapters"
                          ? "bg-red-600 text-white shadow-sm"
                          : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                      }`}
                    >
                      {t.chapters} ({results.chapters.length})
                    </button>
                  )}
                  {results.authors.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setActiveTab("authors")}
                      className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                        activeTab === "authors"
                          ? "bg-sky-600 text-white shadow-sm"
                          : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                      }`}
                    >
                      {t.authors} ({results.authors.length})
                    </button>
                  )}
                  {results.episodes.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setActiveTab("episodes")}
                      className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                        activeTab === "episodes"
                          ? "bg-rose-600 text-white shadow-sm"
                          : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                      }`}
                    >
                      {t.episodes} ({results.episodes.length})
                    </button>
                  )}
                  {results.sections.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setActiveTab("sections")}
                      className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                        activeTab === "sections"
                          ? "bg-amber-600 text-white shadow-sm"
                          : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                      }`}
                    >
                      {t.sections} ({results.sections.length})
                    </button>
                  )}
                </div>
              </div>

              {/* Zero Results State */}
              {results.total === 0 && (
                <div className="p-12 text-center rounded-2xl bg-white border border-slate-200 shadow-sm max-w-xl mx-auto my-8">
                  <div className="w-14 h-14 rounded-full bg-red-50 text-red-500 mx-auto flex items-center justify-center mb-4 border border-red-100">
                    <Search size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{t.noResults}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{t.tryKeywords}</p>
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    {SUGGESTED_TAGS.slice(0, 6).map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => handleQuickTagClick(tag)}
                        className="px-3 py-1 rounded-md bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-700 text-xs font-semibold border border-slate-200 transition-all"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Results Groups */}
              <div className="space-y-8">
                {/* 1. Chapters Results */}
                {(activeTab === "all" || activeTab === "chapters") && results.chapters.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen size={18} className="text-red-600" />
                      <h3 className="text-lg font-bold text-slate-900">
                        {t.chapters} ({results.chapters.length})
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 gap-3.5">
                      {results.chapters.map((ch) => (
                        <Link
                          key={ch.numero}
                          href={ch.url}
                          className="group block p-4 sm:p-5 rounded-xl bg-white border border-slate-200 hover:border-red-400 hover:shadow-md transition-all text-slate-800 text-decoration-none"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="space-y-1.5 flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="px-2.5 py-0.5 rounded-md bg-red-600 text-white text-xs font-extrabold">
                                  Capítulo {ch.numero}
                                </span>
                                <span className="text-xs font-semibold text-slate-500">
                                  {ch.secaoNome}
                                </span>
                              </div>
                              <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                                {ch.titulo}
                              </h4>
                              {ch.snippet && (
                                <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                                  {ch.snippet}
                                </p>
                              )}
                              {ch.autores.length > 0 && (
                                <p className="text-xs text-slate-500 font-medium pt-1">
                                  <span className="font-semibold text-slate-700">{t.authorsLabel}</span>{" "}
                                  {ch.autores.join(", ")}
                                </p>
                              )}
                            </div>
                            <div className="hidden sm:flex items-center text-red-600 font-bold text-xs gap-1 group-hover:translate-x-1 transition-transform flex-shrink-0 mt-2">
                              <span>{t.viewChapter}</span>
                              <ChevronRight size={15} />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. Authors Results */}
                {(activeTab === "all" || activeTab === "authors") && results.authors.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Users size={18} className="text-sky-600" />
                      <h3 className="text-lg font-bold text-slate-900">
                        {t.authors} ({results.authors.length})
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {results.authors.map((a) => (
                        <Link
                          key={String(a.id)}
                          href={a.url}
                          className="group flex items-center gap-3.5 p-4 rounded-xl bg-white border border-slate-200 hover:border-sky-400 hover:shadow-md transition-all text-decoration-none"
                        >
                          <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 border border-slate-200 flex-shrink-0 flex items-center justify-center">
                            {a.fotoUrl && a.fotoUrl !== "/assets/avatar-placeholder.png" ? (
                              <img src={a.fotoUrl} alt={a.name} className="w-full h-full object-cover" />
                            ) : (
                              <Users className="w-6 h-6 text-slate-400" />
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors truncate">
                              {a.name}
                            </h4>
                            <p className="text-xs text-slate-500 truncate">{a.role || a.institution || "Autor SBC"}</p>
                            <p className="text-[11px] text-sky-700 font-semibold mt-0.5">
                              {a.chaptersCount} {t.coauthoredChapters}
                            </p>
                          </div>
                          <ChevronRight size={16} className="text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. Debate Episodes Results */}
                {(activeTab === "all" || activeTab === "episodes") && results.episodes.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Tv size={18} className="text-rose-600" />
                      <h3 className="text-lg font-bold text-slate-900">
                        {t.episodes} ({results.episodes.length})
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 gap-3.5">
                      {results.episodes.map((ep) => (
                        <Link
                          key={ep.episodeNumber}
                          href={ep.url}
                          className="group block p-4 sm:p-5 rounded-xl bg-white border border-slate-200 hover:border-rose-400 hover:shadow-md transition-all text-decoration-none"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="space-y-1.5 flex-1">
                              <div className="flex items-center gap-2">
                                <span className="px-2.5 py-0.5 rounded-md bg-rose-600 text-white text-xs font-extrabold">
                                  EP {ep.episodeNumber}
                                </span>
                                <span className="text-xs font-semibold text-slate-500">
                                  Capítulo {ep.chapterNumber}
                                </span>
                              </div>
                              <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                                {ep.title}
                              </h4>
                              <p className="text-xs sm:text-sm text-slate-600 line-clamp-2">
                                {ep.description}
                              </p>
                            </div>
                            <div className="hidden sm:flex items-center text-rose-600 font-bold text-xs gap-1 group-hover:translate-x-1 transition-transform flex-shrink-0 mt-2">
                              <span>{t.watchEpisode}</span>
                              <ChevronRight size={15} />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. Sections Results */}
                {(activeTab === "all" || activeTab === "sections") && results.sections.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Layers size={18} className="text-amber-600" />
                      <h3 className="text-lg font-bold text-slate-900">
                        {t.sections} ({results.sections.length})
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {results.sections.map((sec) => (
                        <Link
                          key={sec.numero}
                          href={sec.url}
                          className="group p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all text-decoration-none"
                        >
                          <span className="text-xs font-extrabold text-amber-600">
                            {t.section} {sec.numero} • {sec.range}
                          </span>
                          <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors mt-1">
                            {sec.nome}
                          </h4>
                          <div className="flex items-center justify-between pt-2 mt-2 border-t border-slate-100">
                            <span className="text-xs text-slate-500 font-medium">
                              {sec.chaptersCount} capítulos
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600">
                              {t.exploreSection} <ArrowRight size={13} />
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Empty initial prompt */
            <div className="p-12 text-center rounded-2xl bg-white border border-slate-200 shadow-sm max-w-2xl mx-auto my-8">
              <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center mb-4">
                <Search size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t.typeToSearch}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">{t.tryKeywords}</p>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {SUGGESTED_TAGS.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => handleQuickTagClick(tag)}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#001738] hover:text-white text-slate-700 text-xs font-semibold border border-slate-200 transition-all"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  );
}

export default function SearchPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = use(params);
  const locale = (resolvedParams.locale as Locale) || "pt";

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center text-slate-600">
          <div className="animate-spin w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full" />
        </div>
      }
    >
      <SearchPageContent locale={locale} />
    </Suspense>
  );
}
