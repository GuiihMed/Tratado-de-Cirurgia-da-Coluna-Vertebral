"use client";

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
          <div className="modern-brand-symbol">
            <svg>
              <use href="#i-spine"></use>
            </svg>
          </div>
          <div className="modern-brand-text">
            <span>Tratado Oficial • SBC</span>
            <strong>Cirurgia da Coluna Vertebral</strong>
          </div>
        </Link>

        <nav className="modern-nav-pills">
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
          <Link href={`/${locale}/home-new#autores`} className="modern-nav-link">
            {locale === "en" ? "Authors" : locale === "es" ? "Autores" : "Autores"}
          </Link>
          <Link href={`/${locale}/home-new#comprar`} className="modern-nav-link">
            {locale === "en" ? "Get Book" : locale === "es" ? "Comprar" : "Adquirir Obra"}
          </Link>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {/* Classic Version Toggle */}
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

          {/* Language Switcher */}
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
      </header>
    </div>
  );
}
