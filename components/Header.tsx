"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/lib/types";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { ShoppingCart } from "lucide-react";
import { supabase, isSupabaseConfigured } from "@/lib/supabase/client";
import DebateMiniPlayer from "@/components/DebateMiniPlayer";

interface HeaderProps {
  locale: Locale;
  currentPage?: "home" | "indice" | "prefacio" | "apresentacao" | "autores" | "referencias" | "debate" | "other" | string;
}

const LANGUAGES = [
  { code: "pt", flag: "/assets/flags/brasil.png", label: "PT", fullName: "Português" },
  { code: "es", flag: "/assets/flags/espanha.png", label: "ES", fullName: "Español" },
  { code: "en", flag: "/assets/flags/eua.png", label: "EN", fullName: "English" },
];

export default function Header({ locale, currentPage = "home" }: HeaderProps) {
  const dict = getDictionary(locale);
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [miniPlayerOpen, setMiniPlayerOpen] = useState(false);
  const [userAccount, setUserAccount] = useState<{ email: string; nome?: string; role?: string } | null>(null);

  const currentLang = LANGUAGES.find((l) => l.code === locale) || LANGUAGES[0];

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

        {/* Desktop Navigation */}
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
            className={currentPage === "indice" ? "active" : ""}
          >
            <span>{dict.nav.theWork || "A Obra"}</span>
          </Link>
          <Link
            href={`/${locale}/autores`}
            className={currentPage === "autores" || pathname?.includes("/autores") ? "active" : ""}
          >
            <span>{dict.nav.authors}</span>
          </Link>
          <Link
            href={`/${locale}/referencias`}
            className={currentPage === "referencias" || pathname?.includes("/referencias") ? "active" : ""}
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
              padding: "6px 8px",
              borderRadius: 8,
              whiteSpace: "nowrap",
              flexShrink: 0,
              transition: "all 0.2s ease",
            }}
            className="hover:text-rose-400"
            title="Assistir Videocast Oficial (Mini Player)"
          >
            <span style={{ width: 16, height: 16, borderRadius: "50%", background: "#f52238", display: "grid", placeItems: "center", fontSize: 8.5, color: "#fff", flexShrink: 0 }}>
              ▶
            </span>
            <span style={{ whiteSpace: "nowrap" }}>{dict.nav.debate}</span>
          </button>
        </nav>

        {/* Right Side: Comprar + Idiomas */}
        <div className="desktop-only-nav nav-actions" style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          <a
            href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "6.5px 14px",
              borderRadius: 8,
              background: "linear-gradient(135deg, #f52238 0%, #d9142a 100%)",
              color: "#ffffff",
              fontSize: 13,
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 3px 10px rgba(245, 34, 56, 0.35)",
              whiteSpace: "nowrap",
              transition: "all 0.2s ease",
            }}
            className="hover:brightness-110 active:scale-[0.98]"
          >
            <span>{dict.nav.buy}</span>
            <ShoppingCart size={14} className="text-white" />
          </a>

          {/* Languages Divider */}
          <div style={{ width: 1, height: 18, background: "rgba(255, 255, 255, 0.2)" }} />

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
                  zIndex: 100,
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
              { href: `/${locale}/indice`, label: dict.nav.theWork || "A Obra", active: currentPage === "indice" },
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
              <ShoppingCart size={16} className="text-white" />
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
              {[
                { code: "pt", flag: "/assets/flags/brasil.png", label: "PT" },
                { code: "es", flag: "/assets/flags/espanha.png", label: "ES" },
                { code: "en", flag: "/assets/flags/eua.png", label: "EN" },
              ].map(({ code, flag, label }) => (
                <Link
                  key={code}
                  href={getLocalePath(code as Locale)}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "6px 12px",
                    borderRadius: 8,
                    background: locale === code ? "#f52238" : "rgba(255, 255, 255, 0.08)",
                    border: locale === code ? "1px solid #f52238" : "1px solid rgba(255, 255, 255, 0.15)",
                    color: "#ffffff",
                    fontSize: 13,
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  <img src={flag} alt={label} style={{ width: 18, height: "auto" }} />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Floating / Modal Mini Player */}
      <DebateMiniPlayer
        locale={locale}
        isOpen={miniPlayerOpen}
        onClose={() => setMiniPlayerOpen(false)}
        isModern={false}
      />
    </header>
  );
}
