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
        <Link href={`/${locale}`} className="brand" aria-label="Página inicial" style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <img
            src="/assets/sbc-logo-white.svg"
            alt="Logo Sociedade Brasileira de Coluna"
            style={{ height: 40, width: "auto", objectFit: "contain" }}
          />
          <div>
            <span>{dict.brand.line1}</span>
            <strong>{dict.brand.line2}</strong>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links desktop-only-nav" aria-label="Navegação principal">
          <Link
            href={`/${locale}/prefacio`}
            className={currentPage === "prefacio" ? "active" : ""}
          >
            {dict.nav.preface}
          </Link>
          <Link
            href={`/${locale}/apresentacao`}
            className={currentPage === "apresentacao" ? "active" : ""}
          >
            {dict.nav.presentation}
          </Link>
          <Link
            href={`/${locale}/indice`}
            className={currentPage === "indice" ? "active" : ""}
          >
            {dict.nav.index}
          </Link>
          <Link
            href={`/${locale}/indice#conteudo`}
            className=""
          >
            {dict.nav.chapters}
          </Link>
          <Link
            href={`/${locale}/autores`}
            className={currentPage === "autores" || pathname?.includes("/autores") ? "active" : ""}
          >
            {dict.nav.authors}
          </Link>
          <Link href={`/${locale}#referencias`}>{dict.nav.references}</Link>
          <Link href={`/${locale}#debate`}>{dict.nav.debate}</Link>
          <Link href={`/${locale}#comprar`}>{dict.nav.buy}</Link>
        </nav>

        {/* Desktop Languages & Account */}
        <div className="desktop-only-nav" style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div className="languages">
            {locale === "pt" ? <b>PT</b> : <Link href={getLocalePath("pt")}>PT</Link>}
            {locale === "es" ? <b>ES</b> : <Link href={getLocalePath("es")}>ES</Link>}
            {locale === "en" ? <b>EN</b> : <Link href={getLocalePath("en")}>EN</Link>}
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
        <div className="mobile-menu-drawer">
          <nav className="mobile-drawer-nav">
            <Link
              href={`/${locale}/prefacio`}
              className={pathname?.includes("/prefacio") ? "active" : ""}
              onClick={() => setMobileMenuOpen(false)}
            >
              {dict.nav.preface}
            </Link>
            <Link
              href={`/${locale}/apresentacao`}
              className={pathname?.includes("/apresentacao") ? "active" : ""}
              onClick={() => setMobileMenuOpen(false)}
            >
              {dict.nav.presentation}
            </Link>
            <Link
              href={`/${locale}/indice`}
              className={currentPage === "indice" ? "active" : ""}
              onClick={() => setMobileMenuOpen(false)}
            >
              {dict.nav.index}
            </Link>
            <Link
              href={`/${locale}/indice#conteudo`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {dict.nav.chapters}
            </Link>
            <Link
              href={`/${locale}/autores`}
              className={pathname?.includes("/autores") ? "active" : ""}
              onClick={() => setMobileMenuOpen(false)}
            >
              {dict.nav.authors}
            </Link>
            <Link
              href={`/${locale}#referencias`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {dict.nav.references}
            </Link>
            <Link
              href={`/${locale}#debate`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {dict.nav.debate}
            </Link>
            <Link
              href={`/${locale}#comprar`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {dict.nav.buy}
            </Link>
          </nav>

          <div className="mobile-drawer-footer">
            <div className="mobile-drawer-langs">
              <span>Idioma:</span>
              <div className="mobile-lang-row">
                <Link
                  href={getLocalePath("pt")}
                  className={locale === "pt" ? "active" : ""}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  PT
                </Link>
                <Link
                  href={getLocalePath("es")}
                  className={locale === "es" ? "active" : ""}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ES
                </Link>
                <Link
                  href={getLocalePath("en")}
                  className={locale === "en" ? "active" : ""}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  EN
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
