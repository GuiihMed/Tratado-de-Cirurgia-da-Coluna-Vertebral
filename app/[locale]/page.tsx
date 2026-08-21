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
        {/* HERO SECTION (MOBILE-FIRST TAILWIND) */}
        <section className="relative w-full pt-6 pb-12 sm:pt-10 sm:pb-16 overflow-hidden bg-gradient-to-b from-[#001026] via-[#021d42] to-[#001026]">
          {/* Ambient Background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="w-full px-4 sm:px-6 md:px-8 mx-auto max-w-7xl relative z-10 flex flex-col items-center">
            {/* Top Badge */}
            <div className="text-xs py-1.5 px-3 mb-4 rounded-full font-medium inline-flex items-center gap-2 bg-red-500/15 text-red-300 border border-red-500/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>SBC • Edição Oficial</span>
            </div>

            {/* Main Title */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight text-center text-white mb-4 tracking-tight">
              {dict.heroHome.titleLine1} <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-red-400 via-rose-300 to-sky-300 bg-clip-text text-transparent">
                {dict.heroHome.titleLine2}
              </span>
            </h1>

            {/* Subtitle / Lead */}
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl mx-auto text-center mb-6">
              {dict.heroHome.lead}
            </p>

            {/* Book Cover Image */}
            <div className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-md mx-auto my-6 h-auto drop-shadow-2xl flex justify-center">
              <img
                src="/assets/book-cover.png"
                alt="Capa do Tratado de Cirurgia da Coluna Vertebral"
                className="w-full h-auto rounded-xl shadow-2xl transition-transform hover:scale-105 duration-300"
              />
            </div>

            {/* Action CTAs (Vertical on mobile, horizontal on sm+) */}
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto mb-6">
              <Link
                href={`/${locale}/indice`}
                className="w-full h-12 py-3 px-5 text-sm sm:text-base font-semibold rounded-xl flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-600/30 hover:brightness-110 active:scale-[0.98] transition-all"
              >
                <span>{dict.heroHome.exploreIndex}</span>
                <svg className="w-5 h-5">
                  <use href="#i-arrow"></use>
                </svg>
              </Link>

              <a
                href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 py-3 px-5 text-sm sm:text-base font-semibold rounded-xl flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-md active:scale-[0.98] transition-all"
              >
                <span>{dict.heroHome.whereToBuy}</span>
                <span className="text-red-400 font-bold">🛒</span>
              </a>
            </div>

            {/* Format Notice */}
            <div className="inline-flex items-center gap-2.5 py-2 px-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-sky-200 backdrop-blur-sm mb-8 text-center">
              <svg className="w-4 h-4 text-red-400 flex-shrink-0">
                <use href="#i-book"></use>
              </svg>
              <span>{dict.heroHome.printNotice}</span>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl mx-auto">
              <div className="p-3.5 sm:p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center gap-3 backdrop-blur-md">
                <div className="w-9 h-9 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5"><use href="#i-book"></use></svg>
                </div>
                <div>
                  <strong className="block text-lg sm:text-xl font-bold text-white leading-tight">109</strong>
                  <span className="text-xs text-neutral-400 font-medium">Capítulos</span>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center gap-3 backdrop-blur-md">
                <div className="w-9 h-9 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5"><use href="#i-grid"></use></svg>
                </div>
                <div>
                  <strong className="block text-lg sm:text-xl font-bold text-white leading-tight">10</strong>
                  <span className="text-xs text-neutral-400 font-medium">Seções</span>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center gap-3 backdrop-blur-md">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5"><use href="#i-users"></use></svg>
                </div>
                <div>
                  <strong className="block text-lg sm:text-xl font-bold text-white leading-tight">200+</strong>
                  <span className="text-xs text-neutral-400 font-medium">Autores</span>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center gap-3 backdrop-blur-md">
                <div className="w-9 h-9 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5"><use href="#i-globe"></use></svg>
                </div>
                <div>
                  <strong className="block text-lg sm:text-xl font-bold text-white leading-tight">3</strong>
                  <span className="text-xs text-neutral-400 font-medium">Idiomas</span>
                </div>
              </div>
            </div>
          </div>
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
