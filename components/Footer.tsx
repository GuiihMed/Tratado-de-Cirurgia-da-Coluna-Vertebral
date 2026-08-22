import Link from "next/link";
import { Locale } from "@/lib/types";
import { getDictionary } from "@/lib/i18n/dictionaries";

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const dict = getDictionary(locale);

  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <strong>
            {dict.footer.brand1}
            <br />
            {dict.footer.brand2}
          </strong>
          <div className="footer-logos" style={{ display: "flex", alignItems: "center", gap: 20 }}>
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
          <small>{dict.footer.copyright}</small>
        </div>

        <div className="footer-links">
          <h3>{dict.footer.navTitle}</h3>
          <Link href={`/${locale}/prefacio`}>{dict.nav.preface}</Link>
          <Link href={`/${locale}/apresentacao`}>{dict.nav.presentation}</Link>
          <Link href={`/${locale}/indice`}>{dict.nav.index}</Link>
          <Link href={`/${locale}/autores`}>{dict.nav.authors}</Link>
        </div>

        <div className="footer-links">
          <h3>{dict.footer.contentTitle}</h3>
          <Link href={`/${locale}#referencias`}>{dict.nav.references}</Link>
          <Link href={`/${locale}#debate`}>{dict.nav.debate}</Link>
          <a
            href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            {dict.nav.buy}
          </a>
          <Link href="/admin/login" style={{ color: "#ff8290" }}>
            {dict.nav.admin}
          </Link>
        </div>

        <div className="footer-note">
          <h3>{dict.footer.noticeTitle}</h3>
          <p>{dict.footer.noticeText}</p>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>
          {dict.footer.privacy} &nbsp; | &nbsp; {dict.footer.terms} &nbsp; | &nbsp; {dict.footer.contact}
        </span>
        <div className="social">
          <b>in</b>
          <b>◎</b>
          <b>▶</b>
        </div>
      </div>
    </footer>
  );
}
