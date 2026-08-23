"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/lib/types";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { supabase, isSupabaseConfigured } from "@/lib/supabase/client";

interface HeaderProps {
  locale: Locale;
  currentPage?: "home" | "indice" | "prefacio" | "apresentacao" | "autores" | "other";
}

export default function Header({ locale, currentPage = "home" }: HeaderProps) {
  const dict = getDictionary(locale);
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userAccount, setUserAccount] = useState<{ email: string; nome?: string; role?: string } | null>(null);

  useEffect(() => {
    async function loadAccount() {
      try {
        if (isSupabaseConfigured()) {
          const { data } = await supabase.auth.getSession();
          if (data?.session) {
            setUserAccount({
              email: data.session.user.email || "edson.pudles@sbc.med.br",
              nome: data.session.user.user_metadata?.nome || "Dr. Edson Pudles",
              role: "Super Admin",
            });
            return;
          }
        }
        const local = localStorage.getItem("sbc_admin_session");
        if (local) {
          const parsed = JSON.parse(local);
          setUserAccount({
            email: parsed.email || "edson.pudles@sbc.med.br",
            nome: parsed.nome || "Dr. Edson Pudles",
            role: parsed.role === "super_admin" ? "Super Admin" : "Autor SBC",
          });
        }
      } catch (e) {}
    }
    loadAccount();
  }, []);

  // Helper to switch locale in the current URL path
  const getLocalePath = (targetLocale: Locale) => {
    if (!pathname) return `/${targetLocale}`;
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) return `/${targetLocale}`;
    segments[0] = targetLocale;
    return `/${segments.join("/")}`;
  };

  return (
    <header className="topbar">
      <div className="shell nav-shell">
        <Link href={`/${locale}`} className="brand" aria-label="Página inicial" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "#fff", flexShrink: 0 }}>
          <img
            src="/assets/sbc-logo-white.svg"
            alt="Logo Sociedade Brasileira de Coluna"
            style={{ height: 36, width: "auto", objectFit: "contain" }}
          />
          <div className="brand-text hidden min-[1240px]:flex" style={{ flexDirection: "column", justifyContent: "center" }}>
            <span style={{ fontSize: 13.5, fontWeight: 600, lineHeight: 1.15, color: "#e2e8f0", letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>
              {dict.brand.line1}
            </span>
            <strong style={{ fontSize: 15.5, fontWeight: 700, lineHeight: 1.15, color: "#ffffff", letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>
              {dict.brand.line2}
            </strong>
          </div>
        </Link>

        {/* Desktop Navigation (Totalmente Centralizada) */}
        <nav className="nav-links desktop-only-nav" aria-label="Navegação principal">
          <Link
            href={`/${locale}/prefacio`}
            className={currentPage === "prefacio" || pathname?.includes("/prefacio") ? "active" : ""}
          >
            <span>{dict.nav.preface}</span>
          </Link>
          <Link
            href={`/${locale}/apresentacao`}
            className={currentPage === "apresentacao" || pathname?.includes("/apresentacao") ? "active" : ""}
          >
            <span>{dict.nav.presentation}</span>
          </Link>
          <Link
            href={`/${locale}/indice`}
            className={currentPage === "indice" && !pathname?.includes("#conteudo") ? "active" : ""}
          >
            <span>{dict.nav.index}</span>
          </Link>
          <Link
            href={`/${locale}/indice#conteudo`}
            className=""
          >
            <span>{dict.nav.chapters}</span>
          </Link>
          <Link
            href={`/${locale}/autores`}
            className={currentPage === "autores" || pathname?.includes("/autores") ? "active" : ""}
          >
            <span>{dict.nav.authors}</span>
          </Link>
          <Link
            href={`/${locale}/referencias`}
            className={currentPage === "other" && pathname?.includes("/referencias") ? "active" : ""}
          >
            <span>{dict.nav.references}</span>
          </Link>
          <Link href={`/${locale}#debate`}>
            <span>{dict.nav.debate}</span>
          </Link>
        </nav>

        {/* Right Side: Onde Comprar + Idiomas */}
        <div className="desktop-only-nav nav-actions" style={{ display: "flex", alignItems: "center", gap: 18, flexShrink: 0 }}>
          <a
            href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-buy-link"
          >
            {dict.nav.buy}
          </a>

          {/* Languages Divider */}
          <div style={{ borderLeft: "1px solid rgba(255, 255, 255, 0.2)", height: 20, margin: "0 2px" }} />

          {/* Languages */}
          <div className="languages">
            {locale === "pt" ? <b className="active-lang">PT</b> : <Link href={getLocalePath("pt")}>PT</Link>}
            {locale === "es" ? <b className="active-lang">ES</b> : <Link href={getLocalePath("es")}>ES</Link>}
            {locale === "en" ? <b className="active-lang">EN</b> : <Link href={getLocalePath("en")}>EN</Link>}
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="mobile-burger-btn"
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
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "#001026",
            borderBottom: "3px solid #f52238",
            padding: "20px 16px 24px",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.9)",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { href: `/${locale}/prefacio`, label: dict.nav.preface, active: pathname?.includes("/prefacio") },
              { href: `/${locale}/apresentacao`, label: dict.nav.presentation, active: pathname?.includes("/apresentacao") },
              { href: `/${locale}/indice`, label: dict.nav.index, active: currentPage === "indice" },
              { href: `/${locale}/indice#conteudo`, label: dict.nav.chapters, active: false },
              { href: `/${locale}/autores`, label: dict.nav.authors, active: pathname?.includes("/autores") },
              { href: `/${locale}/referencias`, label: dict.nav.references, active: pathname?.includes("/referencias") },
              { href: `/${locale}#debate`, label: dict.nav.debate, active: false },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 16px",
                  borderRadius: 10,
                  background: item.active ? "#f52238" : "rgba(255, 255, 255, 0.05)",
                  border: item.active ? "1px solid #f52238" : "1px solid rgba(255, 255, 255, 0.08)",
                  color: "#ffffff",
                  fontSize: 14.5,
                  fontWeight: 650,
                  textDecoration: "none",
                  transition: "all 0.15s ease",
                }}
              >
                <span>{item.label}</span>
                <span style={{ fontSize: 13, opacity: 0.6 }}>›</span>
              </Link>
            ))}

            {/* Buy Book CTA */}
            <a
              href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "14px 16px",
                borderRadius: 10,
                background: "linear-gradient(135deg, #f52238 0%, #be123c 100%)",
                color: "#ffffff",
                fontSize: 14.5,
                fontWeight: 700,
                textDecoration: "none",
                marginTop: 4,
                boxShadow: "0 6px 20px rgba(245, 34, 56, 0.35)",
              }}
            >
              <span>{dict.nav.buy}</span>
              <span style={{ fontSize: 16 }}>🛒</span>
            </a>
          </nav>

          {/* Languages Row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 16,
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <span style={{ fontSize: 13, color: "#94a3b8", fontWeight: 600 }}>Idioma:</span>
            <div style={{ display: "flex", gap: 8 }}>
              {["pt", "es", "en"].map((lang) => (
                <Link
                  key={lang}
                  href={getLocalePath(lang as Locale)}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    padding: "6px 14px",
                    borderRadius: 8,
                    background: locale === lang ? "#f52238" : "rgba(255, 255, 255, 0.08)",
                    border: locale === lang ? "1px solid #f52238" : "1px solid rgba(255, 255, 255, 0.15)",
                    color: "#ffffff",
                    fontSize: 13,
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  {lang.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
