import Link from "next/link";
import Header from "@/components/Header";
import StatsBar from "@/components/StatsBar";
import SectionCard from "@/components/SectionCard";
import PurchaseSection from "@/components/PurchaseSection";
import Footer from "@/components/Footer";
import { Locale } from "@/lib/types";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { SECOES } from "@/lib/data/sections-and-chapters";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";

  const dict = getDictionary(locale);

  return (
    <>
      <Header locale={locale} currentPage="home" />

      <main>
        {/* HERO SECTION */}
        <section className="hero">
          <img
            className="hero-anatomy"
            src="/assets/hero-spine.png"
            alt="Ilustração anatômica da coluna vertebral"
          />
          <div className="hero-glow"></div>
          <div className="shell hero-content">
            <div className="book-wrap">
              <img
                className="book-cover"
                src="/assets/book-cover.png"
                alt="Capa impressa do Tratado de Cirurgia da Coluna Vertebral"
              />
            </div>
            <div className="hero-copy">
              <h1>
                {dict.heroHome.titleLine1}
                <br />
                {dict.heroHome.titleLine2}
              </h1>
              <p className="hero-lead">{dict.heroHome.lead}</p>
              <div className="print-notice">
                <svg>
                  <use href="#i-book"></use>
                </svg>
                <span>{dict.heroHome.printNotice}</span>
              </div>
              <div className="hero-actions">
                <Link className="btn btn-primary" href={`/${locale}/indice`}>
                  {dict.heroHome.exploreIndex}{" "}
                  <svg>
                    <use href="#i-arrow"></use>
                  </svg>
                </Link>
                <Link
                  className="btn btn-outline"
                  href={`/${locale}/indice#conteudo`}
                >
                  {dict.heroHome.seeChapters}{" "}
                  <svg>
                    <use href="#i-arrow"></use>
                  </svg>
                </Link>
                <a
                  className="btn btn-outline"
                  href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {dict.heroHome.whereToBuy} <span className="cart">⌑</span>
                </a>
              </div>
              <p className="online-note">
                <svg>
                  <use href="#i-globe"></use>
                </svg>
                {dict.heroHome.onlineNote}
              </p>
            </div>
          </div>

          <StatsBar locale={locale} variant="home" />
        </section>

        {/* SOBRE O TRATADO */}
        <section id="sobre" className="about section-light">
          <img className="about-anatomy" src="/assets/hero-spine.png" alt="" />
          <div className="shell about-inner">
            <h2>{dict.about.title}</h2>
            <p>{dict.about.p1}</p>
            <p>{dict.about.p2}</p>
            <div className="accent-line">{dict.about.accent}</div>
          </div>
        </section>

        {/* EXPLORE POR ÁREAS */}
        <section id="areas" className="areas section-light">
          <div className="shell">
            <h2 className="center-title">{dict.areas.title}</h2>
            <div className="title-rule"></div>
            <div className="area-grid">
              {SECOES.map((secao) => (
                <SectionCard
                  key={secao.id}
                  secao={secao}
                  locale={locale}
                  variant="home-area"
                />
              ))}
            </div>
          </div>
        </section>

        {/* DESTAQUE DE CAPÍTULO */}
        <section id="capitulo" className="chapter-section section-light">
          <div className="shell chapter-card">
            <div className="chapter-number">
              <span>{dict.chapterHighlight.badge}</span>
              <strong>{dict.chapterHighlight.number}</strong>
            </div>
            <div className="chapter-copy">
              <h2>{dict.chapterHighlight.title}</h2>
              <p className="chapter-authors">
                <i></i> {dict.chapterHighlight.authors[0]} <i></i>{" "}
                {dict.chapterHighlight.authors[1]}
              </p>
              <p className="chapter-summary">{dict.chapterHighlight.summary}</p>
              <div className="chips">
                {dict.chapterHighlight.chips.map((chip, index) => (
                  <span key={index}>{chip}</span>
                ))}
              </div>
            </div>
            <div className="chapter-visual">
              <img
                src="/assets/chapter-spine.png"
                alt="Radiografia esquemática da coluna no plano sagital"
              />
            </div>
            <div className="chapter-actions">
              <Link className="btn btn-primary" href={`/${locale}/indice#secao-1`}>
                {dict.chapterHighlight.btnSummary}{" "}
                <svg>
                  <use href="#i-arrow"></use>
                </svg>
              </Link>
              <a className="btn btn-outline" href="#referencias">
                {dict.chapterHighlight.btnRef}{" "}
                <svg>
                  <use href="#i-ref"></use>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* TRATADO EM DEBATE */}
        <section id="debate" className="debate section-light">
          <div className="shell debate-panel">
            <div className="debate-thumb">
              <div className="episode">
                <small>{dict.debate.ep}</small>
                <strong>{dict.debate.epNumber}</strong>
              </div>
              <svg className="play">
                <use href="#i-play"></use>
              </svg>
              <img
                src="/assets/tratado-em-debate-logo.png"
                alt="Tratado em Debate"
              />
            </div>
            <div className="debate-copy">
              <h2>{dict.debate.title}</h2>
              <p className="kicker">{dict.debate.kicker}</p>
              <h3>{dict.debate.subtitle}</h3>
              <p>{dict.debate.description}</p>
              <a className="btn btn-small" href="#debate">
                {dict.debate.cta}{" "}
                <svg>
                  <use href="#i-arrow"></use>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* AUTORES E IDIOMAS */}
        <section id="autores" className="info-section section-light">
          <div className="shell info-grid">
            <article className="info-card authors-card">
              <h2>
                <svg>
                  <use href="#i-users"></use>
                </svg>
                {dict.info.authorsTitle}
              </h2>
              <p>{dict.info.authorsDesc}</p>
              <div className="portraits">
                <img src="/assets/edson-pudles.png" alt="Edson Pudles" />
                <img src="/assets/helton-defino.png" alt="Helton Defino" />
                <img src="/assets/marcelo-risso.png" alt="Marcelo Risso" />
                <img src="/assets/avatar-1.png" alt="Autor" />
                <img src="/assets/avatar-2.png" alt="Autor" />
              </div>
              <a className="btn btn-small" href="#autores">
                {dict.info.authorsBtn}{" "}
                <svg>
                  <use href="#i-arrow"></use>
                </svg>
              </a>
            </article>

            <article id="referencias" className="info-card language-card">
              <h2>
                <svg>
                  <use href="#i-globe"></use>
                </svg>
                {dict.info.langTitle}
              </h2>
              <p>{dict.info.langDesc}</p>
              <div className="flags">
                <Link
                  href={`/pt${typeof window !== "undefined" ? window.location.hash : ""}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <span className="flag br">
                    <i></i>
                  </span>
                  <b style={{ color: locale === "pt" ? "var(--red)" : "inherit" }}>
                    Português {locale === "pt" && "✓"}
                  </b>
                </Link>
                <Link
                  href={`/es${typeof window !== "undefined" ? window.location.hash : ""}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <span className="flag es">
                    <i></i>
                  </span>
                  <b style={{ color: locale === "es" ? "var(--red)" : "inherit" }}>
                    Español {locale === "es" && "✓"}
                  </b>
                </Link>
                <Link
                  href={`/en${typeof window !== "undefined" ? window.location.hash : ""}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <span className="flag us">
                    <i></i>
                  </span>
                  <b style={{ color: locale === "en" ? "var(--red)" : "inherit" }}>
                    English {locale === "en" && "✓"}
                  </b>
                </Link>
              </div>
              <Link className="btn btn-small" href={`/${locale}/indice`}>
                {dict.info.langBtn}{" "}
                <svg>
                  <use href="#i-globe"></use>
                </svg>
              </Link>
            </article>
          </div>
        </section>

        {/* ONDE COMPRAR */}
        <PurchaseSection locale={locale} variant="home" />
      </main>

      <Footer locale={locale} />
    </>
  );
}
