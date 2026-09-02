import Link from "next/link";
import { Locale } from "@/lib/types";
import { getDictionary } from "@/lib/i18n/dictionaries";

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const dict = getDictionary(locale);

  return (
    <footer
      className="footer w-full relative z-10"
      style={{
        background: "#001832",
        color: "#ffffff",
        height: "auto",
        minHeight: 340,
        paddingTop: 48,
        paddingBottom: "max(110px, calc(85px + env(safe-area-inset-bottom, 24px)))",
      }}
    >
      <div className="shell footer-grid">
        <div className="footer-brand">
          <strong style={{ fontSize: 24, lineHeight: 1.15, display: "block" }}>
            {dict.footer.brand1}
            <br />
            {dict.footer.brand2}
          </strong>
          <div className="footer-logos" style={{ display: "flex", alignItems: "center", gap: 18, margin: "20px 0", flexWrap: "wrap" }}>
            <img
              src="/assets/sbc-logo-white.svg"
              alt="Sociedade Brasileira de Coluna"
              style={{ height: 40, width: "auto", objectFit: "contain" }}
            />
            <div style={{ width: 1, height: 32, background: "rgba(255, 255, 255, 0.25)" }} />
            <a
              href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
              target="_blank"
              rel="noopener noreferrer"
              title="DiLivros Editora"
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              <img
                src="/assets/dilivros-logo.png"
                alt="DiLivros Editora"
                style={{ height: 36, width: "auto", objectFit: "contain", maxWidth: "160px" }}
              />
            </a>
          </div>
          <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 3 }}>
            <small style={{ fontSize: 13, color: "#f1f5f9", lineHeight: 1.4, display: "block", fontWeight: 600 }}>
              © 2026 Tratado de Cirurgia da Coluna Vertebral.
            </small>
            <small style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.4, display: "block" }}>
              1ª edição | ISBN: 978-85-8053-292-0 | Rio de Janeiro
            </small>
          </div>
        </div>

        <div className="footer-links">
          <h3 style={{ fontSize: 16, margin: "0 0 14px", fontWeight: 700 }}>{dict.footer.navTitle}</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Link href={`/${locale}/prefacio`}>{dict.nav.preface}</Link>
            <Link href={`/${locale}/apresentacao`}>{dict.nav.presentation}</Link>
            <Link href={`/${locale}/indice`}>{dict.nav.index}</Link>
            <Link href={`/${locale}/autores`}>{dict.nav.authors}</Link>
          </div>
        </div>

        <div className="footer-links">
          <h3 style={{ fontSize: 16, margin: "0 0 14px", fontWeight: 700 }}>{dict.footer.contentTitle}</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Link href={`/${locale}/referencias`}>{dict.nav.references}</Link>
            <Link href={`/${locale}#debate`}>{dict.nav.debate}</Link>
            <a
              href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.nav.buy}
            </a>
          </div>
        </div>

        <div className="footer-note">
          <h3 style={{ fontSize: 16, margin: "0 0 14px", fontWeight: 700 }}>{dict.footer.noticeTitle}</h3>
          <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "#d5e1ee", margin: 0 }}>{dict.footer.noticeText}</p>
        </div>
      </div>

      <div className="shell footer-bottom">
        <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
          <Link
            href={`/${locale}/politica-de-privacidade`}
            style={{ color: "#cbd5e1", textDecoration: "none", fontSize: 13 }}
            className="hover:text-white transition-colors"
          >
            {dict.footer.privacy}
          </Link>
          <span style={{ color: "rgba(255, 255, 255, 0.25)" }}>|</span>
          <Link
            href={`/${locale}/termos-de-uso`}
            style={{ color: "#cbd5e1", textDecoration: "none", fontSize: 13 }}
            className="hover:text-white transition-colors"
          >
            {dict.footer.terms}
          </Link>
          <span style={{ color: "rgba(255, 255, 255, 0.25)" }}>|</span>
          <a
            href="https://dilivros.com.br/fale-conosco"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#cbd5e1", textDecoration: "none", fontSize: 13 }}
            className="hover:text-white transition-colors"
          >
            {dict.footer.contact}
          </a>
        </div>
        <div className="social" style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
          <a
            href="https://coluna.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            title="Sociedade Brasileira de Coluna (SBC)"
            style={{ color: "#cbd5e1", textDecoration: "none", fontSize: 13, fontWeight: 700 }}
            className="hover:text-white transition-colors"
          >
            SBC
          </a>
          <span style={{ color: "rgba(255, 255, 255, 0.25)" }}>•</span>
          <a
            href="https://www.instagram.com/sociedadebrasileiradecoluna/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram SBC"
            style={{ color: "#cbd5e1", textDecoration: "none", fontSize: 13, fontWeight: 700 }}
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
          <span style={{ color: "rgba(255, 255, 255, 0.25)" }}>•</span>
          <a
            href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
            target="_blank"
            rel="noopener noreferrer"
            title="DiLivros Editora"
            style={{ color: "#f52238", textDecoration: "none", fontSize: 13, fontWeight: 700 }}
            className="hover:underline transition-colors"
          >
            DiLivros
          </a>
        </div>
      </div>
    </footer>
  );
}
