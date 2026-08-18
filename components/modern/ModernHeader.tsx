"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/lib/types";

interface ModernHeaderProps {
  locale: Locale;
  currentPage?: "home-new" | "indice-new" | "other";
}

export default function ModernHeader({
  locale,
  currentPage = "home-new",
}: ModernHeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getLocalePath = (targetLocale: Locale) => {
    if (!pathname) return `/${targetLocale}/home-new`;
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) return `/${targetLocale}/home-new`;
    segments[0] = targetLocale;
    return `/${segments.join("/")}`;
  };

  return (
    <div className="modern-nav-sticky">
      <header className="modern-nav-bar">
        <Link href={`/${locale}/home-new`} className="modern-brand-link">
          <img
            src="/assets/sbc-logo-white.svg"
            alt="Logo Sociedade Brasileira de Coluna (SBC)"
            style={{ height: 38, width: "auto", objectFit: "contain" }}
          />
          <div className="modern-brand-text" style={{ borderLeft: "1px solid rgba(255, 255, 255, 0.2)", paddingLeft: 12 }}>
            <span>Tratado Oficial</span>
            <strong>Cirurgia da Coluna Vertebral</strong>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="modern-nav-pills desktop-only-nav">
          <Link
            href={`/${locale}/home-new`}
            className={`modern-nav-link ${currentPage === "home-new" ? "active" : ""}`}
          >
            {locale === "en" ? "Overview" : locale === "es" ? "Inicio" : "Visão Geral"}
          </Link>
          <Link
            href={`/${locale}/indice-new`}
            className={`modern-nav-link ${currentPage === "indice-new" ? "active" : ""}`}
          >
            {locale === "en" ? "Interactive Index" : locale === "es" ? "Índice Interactivo" : "Índice Interativo"}
          </Link>
          <Link href={`/${locale}/home-new#debate`} className="modern-nav-link">
            {locale === "en" ? "Debate Cast" : "Videocast"}
          </Link>
          <Link
            href={`/${locale}/autores-new`}
            className={`modern-nav-link ${pathname?.includes("/autores-new") ? "active" : ""}`}
          >
            {locale === "en" ? "Authors" : locale === "es" ? "Autores" : "Autores"}
          </Link>
          <Link href={`/${locale}/home-new#comprar`} className="modern-nav-link">
            {locale === "en" ? "Get Book" : locale === "es" ? "Comprar" : "Adquirir Obra"}
          </Link>
        </nav>

        {/* Desktop Language Switcher & Classic Switcher */}
        <div className="desktop-only-nav" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link
            href={`/${locale}`}
            title="Ver versão clássica"
            style={{
              fontSize: 12,
              color: "#9dbad9",
              textDecoration: "none",
              padding: "6px 12px",
              borderRadius: 8,
              border: "1px solid rgba(255, 255, 255, 0.12)",
              background: "rgba(255, 255, 255, 0.04)",
              fontWeight: 600,
            }}
          >
            ↺ Versão Clássica
          </Link>

          <div className="modern-lang-pills">
            <Link
              href={getLocalePath("pt")}
              className={`modern-lang-btn ${locale === "pt" ? "active" : ""}`}
            >
              PT
            </Link>
            <Link
              href={getLocalePath("es")}
              className={`modern-lang-btn ${locale === "es" ? "active" : ""}`}
            >
              ES
            </Link>
            <Link
              href={getLocalePath("en")}
              className={`modern-lang-btn ${locale === "en" ? "active" : ""}`}
            >
              EN
            </Link>
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
              className={currentPage === "home-new" ? "active" : ""}
              onClick={() => setMobileMenuOpen(false)}
            >
              {locale === "en" ? "Overview" : locale === "es" ? "Inicio" : "Visão Geral"}
            </Link>
            <Link
              href={`/${locale}/indice-new`}
              className={currentPage === "indice-new" ? "active" : ""}
              onClick={() => setMobileMenuOpen(false)}
            >
              {locale === "en" ? "Interactive Index" : locale === "es" ? "Índice Interactivo" : "Índice Interativo"}
            </Link>
            <Link
              href={`/${locale}/home-new#debate`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {locale === "en" ? "Debate Cast" : "Videocast"}
            </Link>
            <Link
              href={`/${locale}/autores-new`}
              className={pathname?.includes("/autores-new") ? "active" : ""}
              onClick={() => setMobileMenuOpen(false)}
            >
              {locale === "en" ? "Authors" : locale === "es" ? "Autores" : "Autores"}
            </Link>
            <Link
              href={`/${locale}/home-new#comprar`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {locale === "en" ? "Get Book" : locale === "es" ? "Comprar" : "Adquirir Obra"}
            </Link>
          </nav>

          <div className="modern-drawer-footer">
            <Link
              href={`/${locale}`}
              className="modern-switch-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              ↺ Alternar para Versão Clássica
            </Link>

            <div className="modern-drawer-langs">
              <span style={{ fontSize: 13, color: "#8da9cc" }}>Idioma:</span>
              <div className="modern-lang-pills">
                <Link
                  href={getLocalePath("pt")}
                  className={`modern-lang-btn ${locale === "pt" ? "active" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  PT
                </Link>
                <Link
                  href={getLocalePath("es")}
                  className={`modern-lang-btn ${locale === "es" ? "active" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ES
                </Link>
                <Link
                  href={getLocalePath("en")}
                  className={`modern-lang-btn ${locale === "en" ? "active" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  EN
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
