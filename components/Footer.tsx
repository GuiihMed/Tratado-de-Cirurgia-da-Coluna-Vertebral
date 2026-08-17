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
          <div className="footer-logos">
            <span className="sbc">
              SBC
              <small>
                {dict.footer.sbc.split("\n").map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
              </small>
            </span>
            <span className="dilivros">{dict.footer.dilivros}</span>
          </div>
          <small>{dict.footer.copyright}</small>
        </div>

        <div className="footer-links">
          <h3>{dict.footer.navTitle}</h3>
          <Link href={`/${locale}#sobre`}>{dict.nav.about}</Link>
          <Link href={`/${locale}/indice`}>{dict.nav.index}</Link>
          <Link href={`/${locale}/indice#conteudo`}>{dict.nav.chapters}</Link>
          <Link href={`/${locale}#autores`}>{dict.nav.authors}</Link>
        </div>

        <div className="footer-links">
          <h3>{dict.footer.contentTitle}</h3>
          <Link href={`/${locale}#referencias`}>{dict.nav.references}</Link>
          <Link href={`/${locale}#debate`}>{dict.nav.debate}</Link>
          <Link href={`/${locale}#comprar`}>{dict.nav.buy}</Link>
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
