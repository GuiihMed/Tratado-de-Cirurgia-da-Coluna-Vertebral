"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/lib/types";
import DebateMiniPlayer from "@/components/DebateMiniPlayer";
import GoogleTranslateWidget from "@/components/GoogleTranslateWidget";

interface ModernHeaderProps {
  locale: Locale;
  currentPage?: "home-new" | "indice-new" | "prefacio-new" | "apresentacao-new" | "autores-new" | "referencias-new" | "debate-new" | "debate" | "other" | string;
}

export default function ModernHeader({
  locale,
  currentPage = "home-new",
}: ModernHeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tratadoDropdownOpen, setTratadoDropdownOpen] = useState(false);
  const [miniPlayerOpen, setMiniPlayerOpen] = useState(false);

  const getLocalePath = (targetLocale: Locale) => {
    if (!pathname) return `/${targetLocale}/home-new`;
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) return `/${targetLocale}/home-new`;
    segments[0] = targetLocale;
    return `/${segments.join("/")}`;
  };

  const isTratadoActive =
    currentPage === "home-new" ||
    currentPage === "prefacio-new" ||
    currentPage === "apresentacao-new" ||
    pathname?.includes("/prefacio-new") ||
    pathname?.includes("/apresentacao-new");

  return (
    <div className="modern-nav-sticky">
      <header className="modern-nav-bar">
        <Link href={`/${locale}/home-new`} className="modern-brand-link">
          <img
            src="/assets/sbc-logo-white.svg"
            alt="Logo Sociedade Brasileira de Coluna (SBC)"
            style={{ height: 38, width: "auto", objectFit: "contain" }}
          />
          <div className="modern-brand-text hidden min-[1240px]:block" style={{ borderLeft: "1px solid rgba(255, 255, 255, 0.2)", paddingLeft: 12 }}>
            <span>Tratado Oficial</span>
            <strong>Cirurgia da Coluna Vertebral</strong>
          </div>
        </Link>

        {/* Desktop Navigation (Centralizada) */}
        <nav className="modern-nav-pills desktop-only-nav" style={{ margin: "0 auto", display: "flex", alignItems: "center", gap: 6 }}>
          {/* Dropdown O Tratado */}
          <div
            className="relative"
            onMouseEnter={() => setTratadoDropdownOpen(true)}
            onMouseLeave={() => setTratadoDropdownOpen(false)}
          >
            <button
              type="button"
              className={`modern-nav-link ${isTratadoActive ? "active" : ""}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => setTratadoDropdownOpen(!tratadoDropdownOpen)}
            >
              <span>{locale === "en" ? "The Treatise" : locale === "es" ? "El Tratado" : "O Tratado"}</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                style={{
                  transform: tratadoDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {tratadoDropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  paddingTop: 8,
                  zIndex: 100,
                  minWidth: 200,
                }}
              >
                <div
                  style={{
                    background: "rgba(0, 20, 50, 0.95)",
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
                    href={`/${locale}/home-new`}
                    className="dropdown-item"
                    style={{
                      padding: "8px 14px",
                      borderRadius: 8,
                      color: pathname?.endsWith("/home-new") ? "#f52238" : "#ffffff",
                      fontSize: 13,
                      fontWeight: 600,
                      textDecoration: "none",
                      display: "block",
                      transition: "background 0.2s ease",
                    }}
                  >
                    {locale === "en" ? "Overview" : locale === "es" ? "Visión General" : "Visão Geral"}
                  </Link>
                  <Link
                    href={`/${locale}/prefacio-new`}
                    className="dropdown-item"
                    style={{
                      padding: "8px 14px",
                      borderRadius: 8,
                      color: pathname?.includes("/prefacio-new") ? "#f52238" : "#ffffff",
                      fontSize: 13,
                      fontWeight: 600,
                      textDecoration: "none",
                      display: "block",
                      transition: "background 0.2s ease",
                    }}
                  >
                    {locale === "en" ? "Preface" : locale === "es" ? "Prefacio" : "Prefácio"}
                  </Link>
                  <Link
                    href={`/${locale}/apresentacao-new`}
                    className="dropdown-item"
                    style={{
                      padding: "8px 14px",
                      borderRadius: 8,
                      color: pathname?.includes("/apresentacao-new") ? "#f52238" : "#ffffff",
                      fontSize: 13,
                      fontWeight: 600,
                      textDecoration: "none",
                      display: "block",
                      transition: "background 0.2s ease",
                    }}
                  >
                    {locale === "en" ? "Presentation" : locale === "es" ? "Presentación" : "Apresentação"}
                  </Link>
                  <Link
                    href={`/${locale}/debate-new`}
                    className="dropdown-item"
                    style={{
                      padding: "8px 14px",
                      borderRadius: 8,
                      color: pathname?.includes("/debate") ? "#f52238" : "#ffffff",
                      fontSize: 13,
                      fontWeight: 600,
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      transition: "background 0.2s ease",
                    }}
                  >
                    <span style={{ color: "#f52238", fontSize: 11 }}>▶</span>
                    <span>{locale === "en" ? "Debate Videocast" : locale === "es" ? "Tratado en Debate" : "Tratado em Debate"}</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href={`/${locale}/indice-new`}
            className={`modern-nav-link ${currentPage === "indice-new" || pathname?.includes("/indice-new") ? "active" : ""}`}
          >
            {locale === "en" ? "Index" : locale === "es" ? "Índice" : "Índice"}
          </Link>
          <button
            type="button"
            onClick={() => setMiniPlayerOpen(true)}
            className="modern-nav-link"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            title={locale === "en" ? "Watch Official Videocast (Mini Player)" : locale === "es" ? "Ver Videocast Oficial (Mini Player)" : "Assistir Videocast Oficial (Mini Player)"}
          >
            <span
              style={{
                width: 17,
                height: 17,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #f52238 0%, #b80f21 100%)",
                display: "grid",
                placeItems: "center",
                fontSize: 8.5,
                color: "#fff",
                boxShadow: "0 0 8px rgba(245, 34, 56, 0.6)",
                flexShrink: 0,
              }}
            >
              ▶
            </span>
            <span>{locale === "en" ? "Debate Cast" : "Tratado em Debate"}</span>
          </button>
          <Link
            href={`/${locale}/autores-new`}
            className={`modern-nav-link ${currentPage === "autores-new" || pathname?.includes("/autores-new") || pathname?.includes("/autor-new") ? "active" : ""}`}
          >
            {locale === "en" ? "Authors" : locale === "es" ? "Autores" : "Autores"}
          </Link>
          <Link
            href={`/${locale}/referencias-new`}
            className={`modern-nav-link ${currentPage === "referencias-new" || pathname?.includes("/referencias-new") ? "active" : ""}`}
          >
            {locale === "en" ? "References" : locale === "es" ? "Referencias" : "Referências"}
          </Link>
        </nav>

        {/* Desktop Right Side: Botão Onde Comprar + Idiomas */}
        <div className="desktop-only-nav" style={{ display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }}>
          {/* Botão Onde Comprar */}
          <a
            href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "7.5px 16px",
              borderRadius: 8,
              background: "linear-gradient(135deg, #f52238 0%, #d9142a 100%)",
              color: "#ffffff",
              fontSize: 13,
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 3px 12px rgba(245, 34, 56, 0.4)",
              transition: "all 0.2s ease",
            }}
            className="hover:brightness-110 active:scale-[0.98]"
          >
            <span>{locale === "en" ? "Buy Book" : locale === "es" ? "Dónde Comprar" : "Onde Comprar"}</span>
            <span>🛒</span>
          </a>

          {/* Divisor Vertical */}
          <div style={{ width: 1, height: 22, background: "rgba(255, 255, 255, 0.2)" }} />

          {/* Desktop Language Switcher */}
          <div className="modern-lang-pills" style={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Link
              href={getLocalePath("pt")}
              className={`modern-lang-btn ${locale === "pt" ? "active" : ""}`}
              style={{ display: "inline-flex", alignItems: "center", gap: 5 }}
            >
              <img src="/assets/flags/brasil.png" alt="Português" style={{ width: 16, height: "auto" }} />
              <span>PT</span>
            </Link>
            <Link
              href={getLocalePath("es")}
              className={`modern-lang-btn ${locale === "es" ? "active" : ""}`}
              style={{ display: "inline-flex", alignItems: "center", gap: 5 }}
            >
              <img src="/assets/flags/espanha.png" alt="Español" style={{ width: 16, height: "auto" }} />
              <span>ES</span>
            </Link>
            <Link
              href={getLocalePath("en")}
              className={`modern-lang-btn ${locale === "en" ? "active" : ""}`}
              style={{ display: "inline-flex", alignItems: "center", gap: 5 }}
            >
              <img src="/assets/flags/eua.png" alt="English" style={{ width: 16, height: "auto" }} />
              <span>EN</span>
            </Link>
            <div style={{ width: 1, height: 18, background: "rgba(255, 255, 255, 0.2)", margin: "0 4px" }} />
            <GoogleTranslateWidget currentLocale={locale} />
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="modern-mobile-burger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </header>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="modern-mobile-drawer">
          <nav className="modern-drawer-links">
            <Link
              href={`/${locale}/home-new`}
              className={pathname?.endsWith("/home-new") ? "active" : ""}
              onClick={() => setMobileMenuOpen(false)}
            >
              {locale === "en" ? "The Treatise - Overview" : locale === "es" ? "El Tratado - Visión General" : "O Tratado - Visão Geral"}
            </Link>
            <Link
              href={`/${locale}/prefacio-new`}
              className={pathname?.includes("/prefacio-new") ? "active" : ""}
              onClick={() => setMobileMenuOpen(false)}
            >
              {locale === "en" ? "Preface" : locale === "es" ? "Prefacio" : "Prefácio"}
            </Link>
            <Link
              href={`/${locale}/apresentacao-new`}
              className={pathname?.includes("/apresentacao-new") ? "active" : ""}
              onClick={() => setMobileMenuOpen(false)}
            >
              {locale === "en" ? "Presentation" : locale === "es" ? "Presentación" : "Apresentação"}
            </Link>
            <Link
              href={`/${locale}/indice-new`}
              className={pathname?.includes("/indice-new") ? "active" : ""}
              onClick={() => setMobileMenuOpen(false)}
            >
              {locale === "en" ? "Interactive Index" : locale === "es" ? "Índice Interactivo" : "Índice Interativo"}
            </Link>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setMiniPlayerOpen(true);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 14px",
                borderRadius: 10,
                background: "rgba(245, 34, 56, 0.15)",
                border: "1px solid rgba(245, 34, 56, 0.35)",
                color: "#ff8290",
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
                textAlign: "left",
                width: "100%",
              }}
            >
              <span
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: "#f52238",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 10,
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                ▶
              </span>
              <span>{locale === "en" ? "Watch Debate Cast (Mini Player)" : locale === "es" ? "Ver Tratado en Debate (Mini Player)" : "Assistir Tratado em Debate (Mini Player)"}</span>
            </button>
            <Link
              href={`/${locale}/autores-new`}
              className={pathname?.includes("/autores-new") ? "active" : ""}
              onClick={() => setMobileMenuOpen(false)}
            >
              {locale === "en" ? "Authors & Editors" : locale === "es" ? "Autores y Editores" : "Autores e Editores"}
            </Link>
            <Link
              href={`/${locale}/referencias-new`}
              className={pathname?.includes("/referencias-new") ? "active" : ""}
              onClick={() => setMobileMenuOpen(false)}
            >
              {locale === "en" ? "References" : locale === "es" ? "Referencias" : "Referências"}
            </Link>
            <a
              href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              {locale === "en" ? "Get Book 🛒" : locale === "es" ? "Comprar 🛒" : "Adquirir Obra 🛒"}
            </a>
          </nav>

          <div className="modern-drawer-footer">
            <div className="modern-drawer-langs">
              <span style={{ fontSize: 13, color: "#8da9cc" }}>Idioma:</span>
              <div className="modern-lang-pills" style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <Link
                  href={getLocalePath("pt")}
                  className={`modern-lang-btn ${locale === "pt" ? "active" : ""}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: 5 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <img src="/assets/flags/brasil.png" alt="Português" style={{ width: 16, height: "auto" }} />
                  <span>PT</span>
                </Link>
                <Link
                  href={getLocalePath("es")}
                  className={`modern-lang-btn ${locale === "es" ? "active" : ""}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: 5 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <img src="/assets/flags/espanha.png" alt="Español" style={{ width: 16, height: "auto" }} />
                  <span>ES</span>
                </Link>
                <Link
                  href={getLocalePath("en")}
                  className={`modern-lang-btn ${locale === "en" ? "active" : ""}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: 5 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <img src="/assets/flags/eua.png" alt="English" style={{ width: 16, height: "auto" }} />
                  <span>EN</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating / Modal Mini Player */}
      <DebateMiniPlayer
        locale={locale}
        isOpen={miniPlayerOpen}
        onClose={() => setMiniPlayerOpen(false)}
        isModern={true}
      />
    </div>
  );
}
