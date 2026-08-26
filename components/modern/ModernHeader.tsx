"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/lib/types";
import { getDictionary } from "@/lib/i18n/dictionaries";
import DebateMiniPlayer from "@/components/DebateMiniPlayer";

interface ModernHeaderProps {
  locale: Locale;
  currentPage?: "home-new" | "indice-new" | "prefacio-new" | "apresentacao-new" | "autores-new" | "referencias-new" | "debate-new" | "debate" | "other" | string;
}

export default function ModernHeader({
  locale,
  currentPage = "home-new",
}: ModernHeaderProps) {
  const dict = getDictionary(locale);
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [miniPlayerOpen, setMiniPlayerOpen] = useState(false);

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
        {/* Brand Logo & Title */}
        <Link href={`/${locale}/home-new`} className="modern-brand-link" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "#fff", flexShrink: 0 }}>
          <img
            src="/assets/sbc-logo-white.svg"
            alt="Logo Sociedade Brasileira de Coluna (SBC)"
            style={{ height: 36, width: "auto", objectFit: "contain" }}
          />
          <div className="modern-brand-text hidden min-[1240px]:flex" style={{ flexDirection: "column", justifyContent: "center", borderLeft: "1px solid rgba(255, 255, 255, 0.2)", paddingLeft: 12 }}>
            <span style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.15, color: "#94a3b8", letterSpacing: "0.02em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
              Tratado Oficial
            </span>
            <strong style={{ fontSize: 15.5, fontWeight: 700, lineHeight: 1.15, color: "#ffffff", letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>
              Cirurgia da Coluna Vertebral
            </strong>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-only-nav" aria-label="Navegação principal" style={{ display: "flex", alignItems: "center", gap: 4, margin: "0 auto" }}>
          <Link
            href={`/${locale}/prefacio-new`}
            className={`modern-nav-link ${currentPage === "prefacio-new" || pathname?.includes("/prefacio") ? "active" : ""}`}
            style={{ whiteSpace: "nowrap" }}
          >
            <span>{dict.nav.preface}</span>
          </Link>

          <Link
            href={`/${locale}/apresentacao-new`}
            className={`modern-nav-link ${currentPage === "apresentacao-new" || pathname?.includes("/apresentacao") ? "active" : ""}`}
            style={{ whiteSpace: "nowrap" }}
          >
            <span>{dict.nav.presentation}</span>
          </Link>

          <Link
            href={`/${locale}/indice-new`}
            className={`modern-nav-link ${currentPage === "indice-new" && !pathname?.includes("#conteudo") ? "active" : ""}`}
            style={{ whiteSpace: "nowrap" }}
          >
            <span>{dict.nav.index}</span>
          </Link>

          <Link
            href={`/${locale}/indice-new#conteudo`}
            className="modern-nav-link"
            style={{ whiteSpace: "nowrap" }}
          >
            <span>{dict.nav.chapters}</span>
          </Link>

          <Link
            href={`/${locale}/autores-new`}
            className={`modern-nav-link ${currentPage === "autores-new" || pathname?.includes("/autores") || pathname?.includes("/autor-") ? "active" : ""}`}
            style={{ whiteSpace: "nowrap" }}
          >
            <span>{dict.nav.authors}</span>
          </Link>

          <Link
            href={`/${locale}/referencias-new`}
            className={`modern-nav-link ${currentPage === "referencias-new" || pathname?.includes("/referencias") ? "active" : ""}`}
            style={{ whiteSpace: "nowrap" }}
          >
            <span>{dict.nav.references}</span>
          </Link>

          <button
            type="button"
            onClick={() => setMiniPlayerOpen(true)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: "#ffffff",
              font: "inherit",
              fontSize: 13.5,
              fontWeight: 600,
              padding: "7px 12px",
              borderRadius: 20,
              whiteSpace: "nowrap",
              flexShrink: 0,
              transition: "all 0.2s ease",
            }}
            className="hover:bg-white/10 text-slate-200 hover:text-white"
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
            <span style={{ whiteSpace: "nowrap" }}>{dict.nav.debate}</span>
          </button>
        </nav>

        {/* Desktop Right Side: Botão Onde Comprar + Idiomas */}
        <div className="desktop-only-nav" style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          {/* Botão Onde Comprar */}
          <a
            href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "7px 15px",
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
            <span style={{ fontSize: 13 }}>🛒</span>
          </a>

          {/* Languages Divider */}
          <div style={{ width: 1, height: 20, background: "rgba(255, 255, 255, 0.2)" }} />

          {/* Languages Switcher */}
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {[
              { code: "pt", flag: "/assets/flags/brasil.png", label: "PT" },
              { code: "es", flag: "/assets/flags/espanha.png", label: "ES" },
              { code: "en", flag: "/assets/flags/estados-unidos.png", label: "EN" },
            ].map((item) => {
              const isActive = locale === item.code;
              return (
                <Link
                  key={item.code}
                  href={getLocalePath(item.code as Locale)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    padding: "4px 8px",
                    borderRadius: 6,
                    fontSize: 12,
                    fontWeight: 700,
                    textDecoration: "none",
                    transition: "all 0.15s ease",
                    background: isActive ? "#f52238" : "rgba(255, 255, 255, 0.08)",
                    color: isActive ? "#ffffff" : "rgba(255, 255, 255, 0.75)",
                    border: isActive ? "1px solid #f52238" : "1px solid rgba(255, 255, 255, 0.15)",
                  }}
                  className={isActive ? "" : "hover:bg-white/20 hover:text-white"}
                  title={item.code === "pt" ? "Português" : item.code === "en" ? "English" : "Español"}
                >
                  <img
                    src={item.flag}
                    alt={item.label}
                    style={{ width: 15, height: 11, objectFit: "cover", borderRadius: 2 }}
                  />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="mobile-only-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menu"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "#ffffff",
            padding: 8,
            borderRadius: 8,
            cursor: "pointer",
            display: "none",
          }}
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
            padding: "24px 20px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Link
              href={`/${locale}/home-new`}
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: "12px 16px", borderRadius: 10, background: "rgba(255, 255, 255, 0.05)", color: "#ffffff", fontWeight: 700, textDecoration: "none", fontSize: 16 }}
            >
              🏠 {dict.nav.presentation}
            </Link>
            <Link
              href={`/${locale}/prefacio-new`}
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: "12px 16px", borderRadius: 10, background: "rgba(255, 255, 255, 0.05)", color: "#ffffff", fontWeight: 700, textDecoration: "none", fontSize: 16 }}
            >
              📜 {dict.nav.preface}
            </Link>
            <Link
              href={`/${locale}/apresentacao-new`}
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: "12px 16px", borderRadius: 10, background: "rgba(255, 255, 255, 0.05)", color: "#ffffff", fontWeight: 700, textDecoration: "none", fontSize: 16 }}
            >
              📄 {dict.nav.presentation}
            </Link>
            <Link
              href={`/${locale}/indice-new`}
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: "12px 16px", borderRadius: 10, background: "rgba(255, 255, 255, 0.05)", color: "#ffffff", fontWeight: 700, textDecoration: "none", fontSize: 16 }}
            >
              📖 {dict.nav.index}
            </Link>
            <Link
              href={`/${locale}/indice-new#conteudo`}
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: "12px 16px", borderRadius: 10, background: "rgba(255, 255, 255, 0.05)", color: "#ffffff", fontWeight: 700, textDecoration: "none", fontSize: 16 }}
            >
              📑 {dict.nav.chapters}
            </Link>
            <Link
              href={`/${locale}/autores-new`}
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: "12px 16px", borderRadius: 10, background: "rgba(255, 255, 255, 0.05)", color: "#ffffff", fontWeight: 700, textDecoration: "none", fontSize: 16 }}
            >
              👥 {dict.nav.authors}
            </Link>
            <Link
              href={`/${locale}/referencias-new`}
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: "12px 16px", borderRadius: 10, background: "rgba(255, 255, 255, 0.05)", color: "#ffffff", fontWeight: 700, textDecoration: "none", fontSize: 16 }}
            >
              📚 {dict.nav.references}
            </Link>
            <Link
              href={`/${locale}/debate-new`}
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: "12px 16px", borderRadius: 10, background: "rgba(245, 34, 56, 0.15)", border: "1px solid rgba(245, 34, 56, 0.4)", color: "#ff808f", fontWeight: 700, textDecoration: "none", fontSize: 16, display: "flex", alignItems: "center", gap: 8 }}
            >
              <span>▶</span>
              <span>{dict.nav.debate}</span>
            </Link>
          </div>

          {/* Mobile Languages */}
          <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid rgba(255, 255, 255, 0.1)", display: "flex", gap: 8 }}>
            {[
              { code: "pt", flag: "/assets/flags/brasil.png", label: "Português" },
              { code: "es", flag: "/assets/flags/espanha.png", label: "Español" },
              { code: "en", flag: "/assets/flags/estados-unidos.png", label: "English" },
            ].map((item) => (
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
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <a
            href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: 10,
              padding: "14px",
              borderRadius: 10,
              background: "#f52238",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: 16,
              textAlign: "center",
              textDecoration: "none",
              display: "block",
            }}
          >
            {dict.nav.buy} 🛒
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
