"use client";

import { useState, useMemo, use, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import ModernHeader from "@/components/modern/ModernHeader";
import ModernFooter from "@/components/modern/ModernFooter";
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
    return searchTreatise(query, locale, true);
  }, [query, locale]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/${locale}/busca-new?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleQuickTagClick = (tag: string) => {
    setQuery(tag);
    router.push(`/${locale}/busca-new?q=${encodeURIComponent(tag)}`);
  };

  const clearSearch = () => {
    setQuery("");
    router.push(`/${locale}/busca-new`);
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
    "Risso Neto",
  ];

  return (
    <div className="min-h-screen bg-[#000814] text-slate-100 flex flex-col selection:bg-red-500/30 selection:text-white font-sans">
      <ModernHeader locale={locale} currentPage="other" />

      <main className="flex-grow pt-8 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Banner */}
          <div className="text-center max-w-3xl mx-auto mb-10 pt-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles size={13} />
              <span>{t.title}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
              {t.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          {/* Search Box Card */}
          <div className="max-w-3xl mx-auto mb-10">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <div className="absolute left-4.5 sm:left-5 text-slate-400 pointer-events-none flex items-center">
                <Search size={20} />
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.placeholder}
                autoFocus
                className="w-full pl-12 sm:pl-14 pr-24 py-4 sm:py-4.5 rounded-2xl bg-white/10 border border-white/15 text-white text-base placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 backdrop-blur-xl shadow-2xl transition-all"
              />
              <div className="absolute right-3 flex items-center gap-2">
                {query && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                    title="Limpar"
                  >
                    <X size={18} />
                  </button>
                )}
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#f52238] hover:bg-[#d9142a] text-white text-sm font-bold shadow-lg shadow-red-500/30 transition-all flex items-center gap-1.5"
                >
                  <Search size={15} />
                  <span className="hidden sm:inline">Buscar</span>
                </button>
              </div>
            </form>

            {/* Quick Keyword Pills */}
            <div className="mt-4 flex items-center gap-2 flex-wrap text-xs text-slate-400 justify-center">
              <span className="font-semibold text-slate-300">Sugestões:</span>
              {SUGGESTED_TAGS.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleQuickTagClick(tag)}
                  className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-all"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Results Summary and Category Tabs */}
          {query.trim() ? (
            <div>
              {/* Category Filter Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 border-b border-white/10 scrollbar-none">
                <button
                  type="button"
                  onClick={() => setActiveTab("all")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
                    activeTab === "all"
                      ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
                      : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  <Sparkles size={14} />
                  <span>{t.all}</span>
                  <span className="px-1.5 py-0.5 rounded-full text-[11px] bg-black/20">{results.total}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("chapters")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
                    activeTab === "chapters"
                      ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
                      : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  <BookOpen size={14} />
                  <span>{t.chapters}</span>
                  <span className="px-1.5 py-0.5 rounded-full text-[11px] bg-black/20">{results.chapters.length}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("authors")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
                    activeTab === "authors"
                      ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
                      : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  <Users size={14} />
                  <span>{t.authors}</span>
                  <span className="px-1.5 py-0.5 rounded-full text-[11px] bg-black/20">{results.authors.length}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("episodes")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
                    activeTab === "episodes"
                      ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
                      : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  <Tv size={14} />
                  <span>{t.episodes}</span>
                  <span className="px-1.5 py-0.5 rounded-full text-[11px] bg-black/20">{results.episodes.length}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("sections")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
                    activeTab === "sections"
                      ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
                      : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  <Layers size={14} />
                  <span>{t.sections}</span>
                  <span className="px-1.5 py-0.5 rounded-full text-[11px] bg-black/20">{results.sections.length}</span>
                </button>
              </div>

              {/* Search Count Feedback */}
              <div className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-white">{results.total}</span> {t.resultsFound} &quot;<span className="text-red-400 font-bold">{query}</span>&quot;
              </div>

              {/* If no results */}
              {results.total === 0 && (
                <div className="p-12 text-center rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md max-w-2xl mx-auto my-8">
                  <div className="w-16 h-16 rounded-2xl bg-red-500/15 text-red-400 mx-auto flex items-center justify-center mb-4">
                    <Search size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{t.noResults}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">{t.tryKeywords}</p>
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    {SUGGESTED_TAGS.slice(0, 6).map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => handleQuickTagClick(tag)}
                        className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-red-500 text-white text-xs font-semibold transition-all"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* RESULTS SECTIONS */}
              <div className="space-y-10">

                {/* 1. Capítulos Section */}
                {(activeTab === "all" || activeTab === "chapters") && results.chapters.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                        <BookOpen size={18} className="text-red-500" />
                        <span>{t.chapters}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-slate-300 font-normal">
                          {results.chapters.length}
                        </span>
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {results.chapters.map((ch) => (
                        <Link
                          key={ch.numero}
                          href={ch.url}
                          className="group p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/40 transition-all flex flex-col justify-between"
                          style={{ textDecoration: "none" }}
                        >
                          <div>
                            <div className="flex items-center gap-2 mb-2.5 flex-wrap">
                              <span className="px-2.5 py-0.5 rounded-md bg-red-500/20 border border-red-500/30 text-red-300 text-xs font-black">
                                Cap. {ch.numero}
                              </span>
                              <span className="text-xs text-slate-400 font-medium">
                                {ch.secaoNome}
                              </span>
                            </div>
                            <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-red-300 transition-colors leading-snug mb-2">
                              {ch.titulo}
                            </h3>
                            {ch.snippet && (
                              <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed mb-3">
                                {ch.snippet}
                              </p>
                            )}
                          </div>

                          <div className="pt-3 border-t border-white/10 flex items-center justify-between mt-auto">
                            <span className="text-xs text-slate-400 line-clamp-1 max-w-[70%]">
                              {ch.autores.slice(0, 2).join(", ")}
                              {ch.autores.length > 2 && ` +${ch.autores.length - 2}`}
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-red-400 group-hover:translate-x-1 transition-transform">
                              {t.viewChapter} <ArrowRight size={13} />
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. Autores Section */}
                {(activeTab === "all" || activeTab === "authors") && results.authors.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                        <Users size={18} className="text-sky-400" />
                        <span>{t.authors}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-slate-300 font-normal">
                          {results.authors.length}
                        </span>
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {results.authors.map((a) => (
                        <Link
                          key={String(a.id)}
                          href={a.url}
                          className="group p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-500/40 transition-all flex items-center gap-3.5 min-w-0 overflow-hidden"
                          style={{ textDecoration: "none" }}
                        >
                          <div
                            style={{
                              width: 52,
                              height: 52,
                              minWidth: 52,
                              minHeight: 52,
                              maxWidth: 52,
                              maxHeight: 52,
                              borderRadius: "50%",
                              background: "#0f172a",
                              border: "1px solid rgba(255, 255, 255, 0.15)",
                              overflow: "hidden",
                              flexShrink: 0,
                              display: "grid",
                              placeItems: "center",
                            }}
                          >
                            {a.fotoUrl ? (
                              <img
                                src={a.fotoUrl}
                                alt={a.name}
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  display: "block",
                                }}
                              />
                            ) : (
                              <span style={{ fontSize: 13, fontWeight: 700, color: "#cbd5e1" }}>
                                {a.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                              </span>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors truncate">
                              {a.name}
                            </h3>
                            <p className="text-xs text-slate-400 truncate mt-0.5">
                              {a.role || a.institution || "Especialista SBC"}
                            </p>
                            <span className="inline-block text-[11px] font-semibold text-sky-400/90 mt-1">
                              {a.chaptersCount} {t.coauthoredChapters}
                            </span>
                          </div>
                          <ChevronRight size={16} className="text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. Tratado em Debate Section */}
                {(activeTab === "all" || activeTab === "episodes") && results.episodes.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                        <Tv size={18} className="text-red-500" />
                        <span>{t.episodes}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-slate-300 font-normal">
                          {results.episodes.length}
                        </span>
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {results.episodes.map((ep) => (
                        <Link
                          key={ep.episodeNumber}
                          href={ep.url}
                          className="group p-5 rounded-2xl bg-gradient-to-br from-white/8 to-white/3 hover:from-white/12 hover:to-white/6 border border-white/10 hover:border-red-500/40 transition-all flex flex-col justify-between"
                          style={{ textDecoration: "none" }}
                        >
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="px-2.5 py-0.5 rounded-md bg-red-500 text-white text-[11px] font-bold">
                                EP {ep.episodeNumber}
                              </span>
                              <span className="text-xs text-slate-400">
                                Cap. {ep.chapterNumber} • {ep.chapterTitle}
                              </span>
                            </div>
                            <h3 className="text-base font-bold text-white group-hover:text-red-300 transition-colors mb-2">
                              {ep.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed mb-3">
                              {ep.description}
                            </p>
                          </div>
                          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                            <span className="text-xs text-slate-400">
                              Convidados: {ep.guests.join(", ")}
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-red-400">
                              {t.watchEpisode} <ArrowRight size={13} />
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. Seções Section */}
                {(activeTab === "all" || activeTab === "sections") && results.sections.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                        <Layers size={18} className="text-amber-400" />
                        <span>{t.sections}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-slate-300 font-normal">
                          {results.sections.length}
                        </span>
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {results.sections.map((sec) => (
                        <Link
                          key={sec.numero}
                          href={sec.url}
                          className="group p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between"
                          style={{ textDecoration: "none" }}
                        >
                          <div>
                            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1 block">
                              {t.section} {sec.numero}
                            </span>
                            <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                              {sec.nome}
                            </h3>
                            {sec.range && (
                              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                                {sec.range}
                              </p>
                            )}
                          </div>
                          <div className="pt-3 border-t border-white/10 flex items-center justify-between mt-auto">
                            <span className="text-xs text-slate-400">
                              {sec.chaptersCount} capítulos
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-400">
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
            <div className="p-12 text-center rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md max-w-2xl mx-auto my-4">
              <div className="w-16 h-16 rounded-2xl bg-white/10 text-slate-300 mx-auto flex items-center justify-center mb-4">
                <Search size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t.typeToSearch}</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">{t.tryKeywords}</p>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {SUGGESTED_TAGS.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => handleQuickTagClick(tag)}
                    className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-red-500 text-white text-xs font-semibold transition-all"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      <ModernFooter locale={locale} />
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
        <div className="min-h-screen bg-[#000814] flex items-center justify-center text-white">
          <div className="animate-spin w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full" />
        </div>
      }
    >
      <SearchPageContent locale={locale} />
    </Suspense>
  );
}
