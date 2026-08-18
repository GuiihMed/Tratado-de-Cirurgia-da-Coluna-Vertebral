"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/lib/types";
import { getDictionary } from "@/lib/i18n/dictionaries";

interface HeaderProps {
  locale: Locale;
  currentPage?: "home" | "indice" | "other";
}

export default function Header({ locale, currentPage = "home" }: HeaderProps) {
  const dict = getDictionary(locale);
  const pathname = usePathname();

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
            style={{ height: 42, width: "auto", objectFit: "contain" }}
          />
          <div>
            <span>{dict.brand.line1}</span>
            <strong>{dict.brand.line2}</strong>
          </div>
        </Link>
        <nav className="nav-links" aria-label="Navegação principal">
          <Link
            href={`/${locale}#sobre`}
            className={currentPage === "home" ? "" : ""}
          >
            {dict.nav.about}
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
            className={currentPage === "other" && pathname?.includes("/autores") ? "active" : ""}
          >
            {dict.nav.authors}
          </Link>
          <Link href={`/${locale}#referencias`}>{dict.nav.references}</Link>
          <Link href={`/${locale}#debate`}>{dict.nav.debate}</Link>
          <Link href={`/${locale}#comprar`}>{dict.nav.buy}</Link>
        </nav>
        <div className="languages">
          {locale === "pt" ? (
            <b>PT</b>
          ) : (
            <Link href={getLocalePath("pt")}>PT</Link>
          )}
          {locale === "es" ? (
            <b>ES</b>
          ) : (
            <Link href={getLocalePath("es")}>ES</Link>
          )}
          {locale === "en" ? (
            <b>EN</b>
          ) : (
            <Link href={getLocalePath("en")}>EN</Link>
          )}
        </div>
      </div>
    </header>
  );
}
