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
        <section id="debate" className="debate section-light" style={{ padding: "40px 0 20px" }}>
          <div className="shell debate-panel" style={{ minHeight: "auto", height: "auto", padding: "36px 40px", display: "grid", gridTemplateColumns: "minmax(280px, 420px) 1fr", gap: "36px", alignItems: "center", borderRadius: 16, border: "2px solid #dde5ef", background: "#f8fafc" }}>
            <div className="debate-thumb" style={{ height: 230, borderRadius: 14, overflow: "hidden", position: "relative", background: "radial-gradient(circle at 15% 22%, rgba(240, 48, 61, 0.75), transparent 32%), linear-gradient(125deg, #1b0d22, #052e61 58%, #00457e)", boxShadow: "0 12px 28px rgba(6, 34, 72, 0.18)" }}>
              <div className="episode" style={{ position: "absolute", left: 24, bottom: 20 }}>
                <small style={{ display: "block", fontSize: 13, letterSpacing: "0.12em", fontWeight: 700, color: "#cbd5e1" }}>{dict.debate.ep}</small>
                <strong style={{ display: "block", fontSize: 64, lineHeight: 0.9, fontWeight: 900, color: "#fff" }}>{dict.debate.epNumber}</strong>
              </div>
              <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: 56, height: 56, borderRadius: "50%", background: "rgba(255, 255, 255, 0.2)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid rgba(255, 255, 255, 0.6)" }}>
                <svg style={{ width: 26, height: 26, color: "#fff", marginLeft: 3 }}>
                  <use href="#i-play"></use>
                </svg>
              </div>
              <img
                src="/assets/tratado-em-debate-logo.png"
                alt="Tratado em Debate"
                style={{ position: "absolute", right: 18, bottom: 20, width: 210, opacity: 0.9 }}
              />
            </div>

            <div className="debate-copy" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <h2 style={{ fontSize: 36, fontWeight: 900, color: "#001026", margin: 0, letterSpacing: "-0.02em" }}>{dict.debate.title}</h2>
              <p className="kicker" style={{ fontSize: 15, fontWeight: 700, color: "#64748b", margin: 0 }}>{dict.debate.kicker}</p>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: "#093c78", margin: "4px 0", lineHeight: 1.25 }}>{dict.debate.subtitle}</h3>
              <p style={{ fontSize: 15.5, lineHeight: 1.55, color: "#475569", margin: "0 0 12px" }}>{dict.debate.description}</p>
              <div>
                <Link className="btn btn-small" href={`/${locale}/video`} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", background: "#06366d", color: "#fff", borderRadius: 8, fontWeight: 700, textDecoration: "none" }}>
                  <span>{dict.debate.cta}</span>
                  <svg style={{ width: 16, height: 16 }}>
                    <use href="#i-arrow"></use>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* AUTORES E IDIOMAS */}
        <section id="autores" className="info-section section-light" style={{ padding: "20px 0 50px" }}>
          <div className="shell info-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", border: "2px solid #dce4ed", borderRadius: 16, overflow: "hidden", background: "#fbfcfe" }}>
            
            {/* Card Autores */}
            <article className="info-card authors-card" style={{ padding: "36px 40px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h2 style={{ fontSize: 28, fontWeight: 900, color: "#001026", display: "flex", alignItems: "center", gap: 12, margin: "0 0 14px" }}>
                  <svg style={{ width: 30, height: 30, color: "#093c78" }}>
                    <use href="#i-users"></use>
                  </svg>
                  <span>{dict.info.authorsTitle}</span>
                </h2>
                <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "#475569", margin: "0 0 20px" }}>
                  {dict.info.authorsDesc}
                </p>

                {/* 3 Real Editors with Direct Links */}
                <div className="portraits" style={{ display: "flex", gap: 16, margin: "12px 0 24px", alignItems: "center" }}>
                  <Link href={`/${locale}/autor/edson-pudles`} title="Dr. Edson Pudles - Editor-Chefe" style={{ textDecoration: "none", transition: "transform 0.2s ease" }} className="hover:scale-105">
                    <img
                      src="/assets/edson-pudles.png"
                      alt="Dr. Edson Pudles"
                      style={{ width: 72, height: 72, borderRadius: "50%", objectFit: "cover", border: "3px solid #fff", boxShadow: "0 4px 12px rgba(9, 60, 120, 0.2)" }}
                    />
                  </Link>
                  <Link href={`/${locale}/autor/helton-defino`} title="Dr. Helton L. A. Defino - Coeditor" style={{ textDecoration: "none", transition: "transform 0.2s ease" }} className="hover:scale-105">
                    <img
                      src="/assets/helton-defino.png"
                      alt="Dr. Helton Defino"
                      style={{ width: 72, height: 72, borderRadius: "50%", objectFit: "cover", border: "3px solid #fff", boxShadow: "0 4px 12px rgba(9, 60, 120, 0.2)" }}
                    />
                  </Link>
                  <Link href={`/${locale}/autor/marcelo-risso`} title="Dr. Marcelo Risso - Coeditor" style={{ textDecoration: "none", transition: "transform 0.2s ease" }} className="hover:scale-105">
                    <img
                      src="/assets/marcelo-risso.png"
                      alt="Dr. Marcelo Risso"
                      style={{ width: 72, height: 72, borderRadius: "50%", objectFit: "cover", border: "3px solid #fff", boxShadow: "0 4px 12px rgba(9, 60, 120, 0.2)" }}
                    />
                  </Link>
                </div>
              </div>

              <div>
                <Link className="btn btn-small" href={`/${locale}/autores`} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", background: "#06366d", color: "#fff", borderRadius: 8, fontWeight: 700, textDecoration: "none" }}>
                  <span>{dict.info.authorsBtn}</span>
                  <svg style={{ width: 16, height: 16 }}>
                    <use href="#i-arrow"></use>
                  </svg>
                </Link>
              </div>
            </article>

            {/* Card Trilíngue */}
            <article id="referencias" className="info-card language-card" style={{ padding: "36px 40px", borderLeft: "1px solid #dce4ed", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h2 style={{ fontSize: 28, fontWeight: 900, color: "#001026", display: "flex", alignItems: "center", gap: 12, margin: "0 0 14px" }}>
                  <svg style={{ width: 30, height: 30, color: "#093c78" }}>
                    <use href="#i-globe"></use>
                  </svg>
                  <span>{dict.info.langTitle}</span>
                </h2>
                <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "#475569", margin: "0 0 20px" }}>
                  {dict.info.langDesc}
                </p>

                {/* 3 Interactive Official Flags (Click to switch language directly) */}
                <div style={{ display: "flex", gap: 24, margin: "16px 0 20px", alignItems: "center" }}>
                  <Link
                    href="/pt"
                    title="Mudar para Português"
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 12px",
                      borderRadius: 12,
                      background: locale === "pt" ? "rgba(245, 34, 56, 0.08)" : "transparent",
                      border: locale === "pt" ? "2px solid #f52238" : "2px solid transparent",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <div style={{ width: 54, height: 36, borderRadius: 6, overflow: "hidden", boxShadow: "0 4px 10px rgba(0,0,0,0.15)", border: "1px solid rgba(0,0,0,0.1)" }}>
                      <img src="/assets/flags/br.svg" alt="Brasil" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 800, color: locale === "pt" ? "#f52238" : "#334155" }}>
                      Português {locale === "pt" && "✓"}
                    </span>
                  </Link>

                  <Link
                    href="/es"
                    title="Cambiar a Español"
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 12px",
                      borderRadius: 12,
                      background: locale === "es" ? "rgba(245, 34, 56, 0.08)" : "transparent",
                      border: locale === "es" ? "2px solid #f52238" : "2px solid transparent",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <div style={{ width: 54, height: 36, borderRadius: 6, overflow: "hidden", boxShadow: "0 4px 10px rgba(0,0,0,0.15)", border: "1px solid rgba(0,0,0,0.1)" }}>
                      <img src="/assets/flags/es.svg" alt="España" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 800, color: locale === "es" ? "#f52238" : "#334155" }}>
                      Español {locale === "es" && "✓"}
                    </span>
                  </Link>

                  <Link
                    href="/en"
                    title="Switch to English"
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 12px",
                      borderRadius: 12,
                      background: locale === "en" ? "rgba(245, 34, 56, 0.08)" : "transparent",
                      border: locale === "en" ? "2px solid #f52238" : "2px solid transparent",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <div style={{ width: 54, height: 36, borderRadius: 6, overflow: "hidden", boxShadow: "0 4px 10px rgba(0,0,0,0.15)", border: "1px solid rgba(0,0,0,0.1)" }}>
                      <img src="/assets/flags/us.svg" alt="English" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 800, color: locale === "en" ? "#f52238" : "#334155" }}>
                      English {locale === "en" && "✓"}
                    </span>
                  </Link>
                </div>
              </div>
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
