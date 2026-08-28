"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Locale } from "@/lib/types";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { ShoppingCart, Search, X, BookOpen, Users, Tv, Layers, ArrowRight } from "lucide-react";
import DebateMiniPlayer from "@/components/DebateMiniPlayer";
import { searchTreatise } from "@/lib/data/global-search";

interface ModernHeaderProps {
  locale: Locale;
  currentPage?: "home-new" | "indice-new" | "prefacio-new" | "apresentacao-new" | "autores-new" | "referencias-new" | "debate-new" | "debate" | "other" | string;
}

const LANGUAGES = [
  { code: "pt", flag: "/assets/flags/brasil.png", label: "PT", fullName: "Português" },
  { code: "es", flag: "/assets/flags/espanha.png", label: "ES", fullName: "Español" },
  { code: "en", flag: "/assets/flags/eua.png", label: "EN", fullName: "English" },
];

export default function ModernHeader({
  locale,
  currentPage = "home-new",
}: ModernHeaderProps) {
  const dict = getDictionary(locale);
  const pathname = usePathname();
  const router = useRouter();

  // Dropdown States
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [tratadoDropdownOpen, setTratadoDropdownOpen] = useState(false);
  const [indiceDropdownOpen, setIndiceDropdownOpen] = useState(false);
  const [miniPlayerOpen, setMiniPlayerOpen] = useState(false);

  // Search States
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find((l) => l.code === locale) || LANGUAGES[0];

  const getLocalePath = (targetLocale: Locale) => {
    if (!pathname) return `/${targetLocale}/home-new`;
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) return `/${targetLocale}/home-new`;
    segments[0] = targetLocale;
    return `/${segments.join("/")}`;
  };

  // Close search suggestions on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Compute live search suggestions
  const liveResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    return searchTreatise(searchQuery, locale, true);
  }, [searchQuery, locale]);

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchFocused(false);
      setMobileMenuOpen(false);
      router.push(`/${locale}/busca-new?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const isTratadoActive =
    currentPage === "prefacio-new" ||
    currentPage === "apresentacao-new" ||
    pathname?.includes("/prefacio") ||
    pathname?.includes("/apresentacao");

  const isIndiceActive =
    currentPage === "indice-new" ||
    currentPage === "referencias-new" ||
    pathname?.includes("/indice") ||
    pathname?.includes("/referencias");

  const searchPlaceholder =
    locale === "en" ? "Search site..." : locale === "es" ? "Buscar..." : "Busque no site...";

  return (
    <div className="modern-nav-sticky">
      <header className="modern-nav-bar">
        {/* Brand Logo & Title */}
        <Link
          href={`/${locale}/home-new`}
          className="modern-brand-link"
          style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "#fff", flexShrink: 0 }}
        >
          <img
            src="/assets/sbc-logo-white.svg"
            alt="Logo Sociedade Brasileira de Coluna (SBC)"
            style={{ height: 36, width: "auto", objectFit: "contain" }}
          />
          <div
            className="modern-brand-text hidden min-[1240px]:flex"
            style={{ flexDirection: "column", justifyContent: "center", borderLeft: "1px solid rgba(255, 255, 255, 0.2)", paddingLeft: 12 }}
          >
            <span style={{ fontSize: 13.5, fontWeight: 600, lineHeight: 1.15, color: "#e2e8f0", letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>
              {dict.brand.line1}
            </span>
            <strong style={{ fontSize: 15.5, fontWeight: 700, lineHeight: 1.15, color: "#ffffff", letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>
              {dict.brand.line2}
            </strong>
          </div>
        </Link>

        {/* Desktop Navigation Links with Container Pill */}
        <nav
          className="desktop-only-nav"
          aria-label="Navegação principal"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            margin: "0 auto",
            background: "rgba(255, 255, 255, 0.06)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: 30,
            padding: "4px 8px",
          }}
        >
          {/* 1. O Tratado (Dropdown com Prefácio & Apresentação) */}
          <div
            className="relative"
            onMouseEnter={() => setTratadoDropdownOpen(true)}
            onMouseLeave={() => setTratadoDropdownOpen(false)}
            style={{ position: "relative" }}
          >
            <button
              type="button"
              onClick={() => setTratadoDropdownOpen(!tratadoDropdownOpen)}
              className={`modern-nav-link ${isTratadoActive ? "active" : ""}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                whiteSpace: "nowrap",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: 13.5,
              }}
              aria-expanded={tratadoDropdownOpen}
            >
              <span>{dict.nav.about || (locale === "en" ? "The Treatise" : locale === "es" ? "El Tratado" : "O Tratado")}</span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                style={{
                  transform: tratadoDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                  opacity: 0.8,
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {tratadoDropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  paddingTop: 8,
                  zIndex: 110,
                  minWidth: 170,
                }}
              >
                <div
                  style={{
                    background: "rgba(0, 20, 50, 0.96)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    borderRadius: 12,
                    backdropFilter: "blur(16px)",
                    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5)",
                    padding: 6,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <Link
                    href={`/${locale}/prefacio-new`}
                    onClick={() => setTratadoDropdownOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 12px",
                      borderRadius: 8,
                      fontSize: 13,
                      fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
                      fontWeight: 700,
                      textDecoration: "none",
                      color: pathname?.includes("/prefacio") ? "#ff808f" : "#ffffff",
                      background: pathname?.includes("/prefacio") ? "rgba(245, 34, 56, 0.2)" : "transparent",
                    }}
                    className="hover:bg-white/10"
                  >
                    <span style={{ fontSize: 14 }}>📜</span>
                    <span>{dict.nav.preface}</span>
                  </Link>

                  <Link
                    href={`/${locale}/apresentacao-new`}
                    onClick={() => setTratadoDropdownOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 12px",
                      borderRadius: 8,
                      fontSize: 13,
                      fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
                      fontWeight: 700,
                      textDecoration: "none",
                      color: pathname?.includes("/apresentacao") ? "#ff808f" : "#ffffff",
                      background: pathname?.includes("/apresentacao") ? "rgba(245, 34, 56, 0.2)" : "transparent",
                    }}
                    className="hover:bg-white/10"
                  >
                    <span style={{ fontSize: 14 }}>📄</span>
                    <span>{dict.nav.presentation}</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* 2. Índice (Dropdown com Capítulos & Referências) */}
          <div
            className="relative"
            onMouseEnter={() => setIndiceDropdownOpen(true)}
            onMouseLeave={() => setIndiceDropdownOpen(false)}
            style={{ position: "relative" }}
          >
            <button
              type="button"
              onClick={() => setIndiceDropdownOpen(!indiceDropdownOpen)}
              className={`modern-nav-link ${isIndiceActive ? "active" : ""}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                whiteSpace: "nowrap",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: 13.5,
              }}
              aria-expanded={indiceDropdownOpen}
            >
              <span>{dict.nav.index}</span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                style={{
                  transform: indiceDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                  opacity: 0.8,
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {indiceDropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  paddingTop: 8,
                  zIndex: 110,
                  minWidth: 175,
                }}
              >
                <div
                  style={{
                    background: "rgba(0, 20, 50, 0.96)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    borderRadius: 12,
                    backdropFilter: "blur(16px)",
                    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5)",
                    padding: 6,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <Link
                    href={`/${locale}/indice-new`}
                    onClick={() => setIndiceDropdownOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 12px",
                      borderRadius: 8,
                      fontSize: 13,
                      fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
                      fontWeight: 700,
                      textDecoration: "none",
                      color: pathname?.includes("/indice") ? "#ff808f" : "#ffffff",
                      background: pathname?.includes("/indice") ? "rgba(245, 34, 56, 0.2)" : "transparent",
                    }}
                    className="hover:bg-white/10"
                  >
                    <span style={{ fontSize: 14 }}>📑</span>
                    <span>{dict.nav.chapters} (109)</span>
                  </Link>

                  <Link
                    href={`/${locale}/referencias-new`}
                    onClick={() => setIndiceDropdownOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 12px",
                      borderRadius: 8,
                      fontSize: 13,
                      fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
                      fontWeight: 700,
                      textDecoration: "none",
                      color: pathname?.includes("/referencias") ? "#ff808f" : "#ffffff",
                      background: pathname?.includes("/referencias") ? "rgba(245, 34, 56, 0.2)" : "transparent",
                    }}
                    className="hover:bg-white/10"
                  >
                    <span style={{ fontSize: 14 }}>📚</span>
                    <span>{dict.nav.references}</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* 3. Autores */}
          <Link
            href={`/${locale}/autores-new`}
            className={`modern-nav-link ${currentPage === "autores-new" || pathname?.includes("/autores") || pathname?.includes("/autor-") ? "active" : ""}`}
            style={{
              whiteSpace: "nowrap",
              fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
              fontWeight: 700,
            }}
          >
            <span>{dict.nav.authors}</span>
          </Link>

          {/* 4. Tratado em Debate */}
          <Link
            href={`/${locale}/debate-new`}
            className={`modern-nav-link ${currentPage === "debate-new" || pathname?.includes("/debate") ? "active" : ""}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              whiteSpace: "nowrap",
              fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
              fontWeight: 700,
            }}
          >
            <span
              style={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #f52238 0%, #b80f21 100%)",
                display: "grid",
                placeItems: "center",
                fontSize: 8,
                color: "#fff",
                boxShadow: "0 0 8px rgba(245, 34, 56, 0.6)",
                flexShrink: 0,
              }}
            >
              ▶
            </span>
            <span>{dict.nav.debate}</span>
          </Link>

          {/* 5. Busque no site com Autocomplete Live & Botão de Lupa */}
          <div
            ref={searchContainerRef}
            className="relative search-widget-container"
            style={{ position: "relative", marginLeft: 4 }}
          >
            <form
              onSubmit={handleSearchSubmit}
              style={{
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                placeholder={searchPlaceholder}
                style={{
                  width: isSearchFocused || searchQuery ? 190 : 135,
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  background: isSearchFocused ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.08)",
                  border: isSearchFocused ? "1px solid rgba(245, 34, 56, 0.6)" : "1px solid rgba(255, 255, 255, 0.14)",
                  borderRadius: 20,
                  padding: "5px 30px 5px 12px",
                  fontSize: 12.5,
                  color: "#ffffff",
                  outline: "none",
                }}
                className="placeholder:text-slate-400"
              />
              <button
                type="submit"
                style={{
                  position: "absolute",
                  right: 3,
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  border: "none",
                  background: isSearchFocused || searchQuery ? "#f52238" : "transparent",
                  color: "#ffffff",
                  display: "grid",
                  placeItems: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: isSearchFocused || searchQuery ? "0 2px 6px rgba(245, 34, 56, 0.4)" : "none",
                }}
                title={locale === "en" ? "Search" : locale === "es" ? "Buscar" : "Pesquisar"}
              >
                <Search size={12} />
              </button>
            </form>

            {/* LIVE AUTOCOMPLETE SUGGESTIONS POPOVER */}
            {isSearchFocused && liveResults && liveResults.total > 0 && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  paddingTop: 8,
                  zIndex: 200,
                  width: 320,
                }}
              >
                <div
                  style={{
                    background: "rgba(0, 16, 38, 0.98)",
                    border: "1px solid rgba(255, 255, 255, 0.18)",
                    borderRadius: 14,
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 20px 45px rgba(0, 0, 0, 0.6)",
                    padding: 8,
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    maxHeight: 380,
                    overflowY: "auto",
                  }}
                  className="scrollbar-none"
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 8px" }}>
                    <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#94a3b8" }}>
                      Sugestões Rápidas ({liveResults.total})
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsSearchFocused(false)}
                      style={{ background: "transparent", border: "none", color: "#64748b", cursor: "pointer" }}
                    >
                      <X size={13} />
                    </button>
                  </div>

                  {/* Chapters matching */}
                  {liveResults.chapters.slice(0, 3).map((ch) => (
                    <Link
                      key={ch.numero}
                      href={ch.url}
                      onClick={() => setIsSearchFocused(false)}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 8,
                        padding: "7px 10px",
                        borderRadius: 8,
                        textDecoration: "none",
                        background: "rgba(255, 255, 255, 0.04)",
                        transition: "background 0.15s ease",
                      }}
                      className="hover:bg-white/10"
                    >
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 800,
                          padding: "2px 5px",
                          borderRadius: 4,
                          background: "#f52238",
                          color: "#fff",
                          flexShrink: 0,
                          marginTop: 1,
                        }}
                      >
                        Cap. {ch.numero}
                      </span>
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <span style={{ fontSize: 12, fontWeight: 600, color: "#fff", display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {ch.titulo}
                        </span>
                        <span style={{ fontSize: 10.5, color: "#94a3b8", display: "block" }}>
                          {ch.secaoNome}
                        </span>
                      </div>
                    </Link>
                  ))}

                  {/* Authors matching */}
                  {liveResults.authors.slice(0, 2).map((a) => (
                    <Link
                      key={String(a.id)}
                      href={a.url}
                      onClick={() => setIsSearchFocused(false)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "6px 10px",
                        borderRadius: 8,
                        textDecoration: "none",
                        background: "rgba(255, 255, 255, 0.04)",
                      }}
                      className="hover:bg-white/10"
                    >
                      <div
                        style={{
                          width: 22,
                          height: 22,
                          borderRadius: "50%",
                          background: "rgba(56, 189, 248, 0.2)",
                          color: "#38bdf8",
                          display: "grid",
                          placeItems: "center",
                          fontSize: 10,
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        <Users size={12} />
                      </div>
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <span style={{ fontSize: 12, fontWeight: 600, color: "#e2e8f0", display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {a.name}
                        </span>
                        <span style={{ fontSize: 10.5, color: "#94a3b8", display: "block" }}>
                          {a.role || a.institution || "Autor SBC"}
                        </span>
                      </div>
                    </Link>
                  ))}

                  {/* Debate matching */}
                  {liveResults.episodes.slice(0, 1).map((ep) => (
                    <Link
                      key={ep.episodeNumber}
                      href={ep.url}
                      onClick={() => setIsSearchFocused(false)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "6px 10px",
                        borderRadius: 8,
                        textDecoration: "none",
                        background: "rgba(245, 34, 56, 0.12)",
                      }}
                      className="hover:bg-red-500/20"
                    >
                      <Tv size={13} className="text-red-400 flex-shrink-0" />
                      <span style={{ fontSize: 12, fontWeight: 600, color: "#ff808f", flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        EP {ep.episodeNumber}: {ep.title}
                      </span>
                    </Link>
                  ))}

                  {/* See all results button */}
                  <Link
                    href={`/${locale}/busca-new?q=${encodeURIComponent(searchQuery.trim())}`}
                    onClick={() => setIsSearchFocused(false)}
                    style={{
                      marginTop: 4,
                      padding: "8px 10px",
                      borderRadius: 8,
                      background: "rgba(245, 34, 56, 0.2)",
                      border: "1px solid rgba(245, 34, 56, 0.4)",
                      color: "#ffffff",
                      fontSize: 12,
                      fontWeight: 700,
                      textAlign: "center",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                    }}
                    className="hover:bg-red-500 hover:text-white transition-all"
                  >
                    <span>Ver todos os {liveResults.total} resultados</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Desktop Right Side: Botão Comprar + Language Dropdown */}
        <div className="desktop-only-nav" style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          {/* Botão Comprar */}
          <a
            href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "7.5px 15px",
              borderRadius: 10,
              background: "linear-gradient(135deg, #f52238 0%, #d9142a 100%)",
              color: "#ffffff",
              fontSize: 13,
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(245, 34, 56, 0.4)",
              whiteSpace: "nowrap",
              transition: "all 0.2s ease",
            }}
            className="hover:brightness-110 active:scale-[0.98]"
          >
            <span>{dict.nav.buy}</span>
            <ShoppingCart size={14} className="text-white" />
          </a>

          {/* Languages Divider */}
          <div style={{ width: 1, height: 20, background: "rgba(255, 255, 255, 0.2)" }} />

          {/* Languages Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setLangDropdownOpen(true)}
            onMouseLeave={() => setLangDropdownOpen(false)}
            style={{ position: "relative" }}
          >
            <button
              type="button"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 12px",
                borderRadius: 8,
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                color: "#ffffff",
                fontSize: 12.5,
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
              className="hover:bg-white/15"
              aria-label="Selecionar idioma"
            >
              <img
                src={currentLang.flag}
                alt={currentLang.label}
                style={{ width: 16, height: 12, objectFit: "cover", borderRadius: 2 }}
              />
              <span>{currentLang.label}</span>
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                style={{
                  transform: langDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                  opacity: 0.8,
                }}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {langDropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  paddingTop: 8,
                  zIndex: 120,
                  minWidth: 145,
                }}
              >
                <div
                  style={{
                    background: "rgba(0, 20, 50, 0.96)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    borderRadius: 12,
                    backdropFilter: "blur(16px)",
                    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5)",
                    padding: 6,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  {LANGUAGES.map((item) => {
                    const isActive = locale === item.code;
                    return (
                      <Link
                        key={item.code}
                        href={getLocalePath(item.code as Locale)}
                        onClick={() => setLangDropdownOpen(false)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "8px 12px",
                          borderRadius: 8,
                          fontSize: 13,
                          fontWeight: 600,
                          textDecoration: "none",
                          transition: "all 0.15s ease",
                          background: isActive ? "rgba(245, 34, 56, 0.25)" : "transparent",
                          color: isActive ? "#ff808f" : "#ffffff",
                        }}
                        className={isActive ? "" : "hover:bg-white/10"}
                      >
                        <img
                          src={item.flag}
                          alt={item.label}
                          style={{ width: 16, height: 12, objectFit: "cover", borderRadius: 2 }}
                        />
                        <span>{item.fullName}</span>
                        {isActive && <span style={{ marginLeft: "auto", fontSize: 11, color: "#f52238", fontWeight: 700 }}>✓</span>}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="modern-mobile-burger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: 72,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 16, 38, 0.98)",
            backdropFilter: "blur(20px)",
            zIndex: 9999,
            padding: "20px 16px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {/* Mobile Search Bar */}
          <form onSubmit={handleSearchSubmit} style={{ position: "relative" }}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={searchPlaceholder}
              style={{
                width: "100%",
                padding: "12px 42px 12px 14px",
                borderRadius: 12,
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#ffffff",
                fontSize: 14,
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                position: "absolute",
                right: 8,
                top: 8,
                bottom: 8,
                width: 32,
                borderRadius: 8,
                background: "#f52238",
                color: "#fff",
                border: "none",
                display: "grid",
                placeItems: "center",
                cursor: "pointer",
              }}
            >
              <Search size={15} />
            </button>
          </form>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {/* O Tratado Section */}
            <div style={{ padding: "8px 12px", borderRadius: 10, background: "rgba(255, 255, 255, 0.04)" }}>
              <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "#94a3b8", display: "block", marginBottom: 6 }}>
                {dict.nav.about || "O Tratado"}
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <Link
                  href={`/${locale}/prefacio-new`}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ padding: "8px 10px", borderRadius: 6, color: "#ffffff", fontWeight: 600, textDecoration: "none", fontSize: 14, display: "flex", alignItems: "center", gap: 8 }}
                >
                  <span>📜</span>
                  <span>{dict.nav.preface}</span>
                </Link>
                <Link
                  href={`/${locale}/apresentacao-new`}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ padding: "8px 10px", borderRadius: 6, color: "#ffffff", fontWeight: 600, textDecoration: "none", fontSize: 14, display: "flex", alignItems: "center", gap: 8 }}
                >
                  <span>📄</span>
                  <span>{dict.nav.presentation}</span>
                </Link>
              </div>
            </div>

            {/* Índice Section */}
            <div style={{ padding: "8px 12px", borderRadius: 10, background: "rgba(255, 255, 255, 0.04)" }}>
              <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "#94a3b8", display: "block", marginBottom: 6 }}>
                {dict.nav.index}
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <Link
                  href={`/${locale}/indice-new`}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ padding: "8px 10px", borderRadius: 6, color: "#ffffff", fontWeight: 600, textDecoration: "none", fontSize: 14, display: "flex", alignItems: "center", gap: 8 }}
                >
                  <span>📑</span>
                  <span>{dict.nav.chapters} (109)</span>
                </Link>
                <Link
                  href={`/${locale}/referencias-new`}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ padding: "8px 10px", borderRadius: 6, color: "#ffffff", fontWeight: 600, textDecoration: "none", fontSize: 14, display: "flex", alignItems: "center", gap: 8 }}
                >
                  <span>📚</span>
                  <span>{dict.nav.references}</span>
                </Link>
              </div>
            </div>

            {/* Autores */}
            <Link
              href={`/${locale}/autores-new`}
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: "12px 16px", borderRadius: 10, background: "rgba(255, 255, 255, 0.05)", color: "#ffffff", fontWeight: 700, textDecoration: "none", fontSize: 15 }}
            >
              👥 {dict.nav.authors}
            </Link>

            {/* Tratado em Debate */}
            <Link
              href={`/${locale}/debate-new`}
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: "12px 16px", borderRadius: 10, background: "rgba(245, 34, 56, 0.15)", border: "1px solid rgba(245, 34, 56, 0.4)", color: "#ff808f", fontWeight: 700, textDecoration: "none", fontSize: 15, display: "flex", alignItems: "center", gap: 8 }}
            >
              <span>▶</span>
              <span>{dict.nav.debate}</span>
            </Link>
          </div>

          {/* Mobile Languages */}
          <div style={{ marginTop: "auto", paddingTop: 16, borderTop: "1px solid rgba(255, 255, 255, 0.1)", display: "flex", gap: 8 }}>
            {LANGUAGES.map((item) => (
              <Link
                key={item.code}
                href={getLocalePath(item.code as Locale)}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  padding: "10px",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 700,
                  textDecoration: "none",
                  background: locale === item.code ? "#f52238" : "rgba(255, 255, 255, 0.08)",
                  color: "#ffffff",
                }}
              >
                <img src={item.flag} alt={item.label} style={{ width: 18, height: 13, borderRadius: 2 }} />
                <span>{item.fullName}</span>
              </Link>
            ))}
          </div>

          <a
            href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "13px",
              borderRadius: 10,
              background: "#f52238",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: 15,
              textAlign: "center",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <span>{dict.nav.buy}</span>
            <ShoppingCart size={17} className="text-white" />
          </a>
        </div>
      )}

      {/* Mini Player Modal */}
      <DebateMiniPlayer
        locale={locale}
        isOpen={miniPlayerOpen}
        onClose={() => setMiniPlayerOpen(false)}
      />
    </div>
  );
}
