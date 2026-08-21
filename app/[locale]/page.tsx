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
        {/* ========================================================================= */}
        {/* HERO SECTION (RÉPLICA EXATA DO DESIGN OFICIAL) */}
        {/* ========================================================================= */}
        <section
          className="relative w-full overflow-hidden text-white pt-8 pb-14 sm:pt-12 sm:pb-20"
          style={{
            background: "radial-gradient(circle at 14% 30%, rgba(220, 20, 45, 0.52), transparent 42%), linear-gradient(105deg, #a80f22 0%, #2f193e 26%, #052b5b 54%, #005a9c 100%)",
          }}
        >
          {/* Subtle Anatomical Spine Background Overlay */}
          <img
            src="/assets/hero-spine.png"
            alt=""
            className="absolute right-0 top-0 h-full w-auto max-w-[62%] object-contain pointer-events-none opacity-25 hidden md:block"
            style={{ mixBlendMode: "screen", filter: "contrast(1.2) brightness(1.1)" }}
          />

          <div className="w-full px-4 sm:px-6 md:px-8 mx-auto max-w-7xl relative z-10">
            {/* Top 2-Column Content on Desktop / Clean Stack on Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center mb-12">
              
              {/* Left Column: 3D Book Cover */}
              <div className="md:col-span-5 flex justify-center md:justify-end">
                <div className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-[350px] transition-transform duration-300 hover:scale-[1.03]">
                  <img
                    src="/assets/book-cover.png"
                    alt="Capa do Tratado de Cirurgia da Coluna Vertebral"
                    className="w-full h-auto rounded-lg shadow-[0_25px_60px_rgba(0,0,0,0.65)]"
                  />
                </div>
              </div>

              {/* Right Column: Copy & Actions */}
              <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-white leading-[1.08] tracking-tight mb-4 drop-shadow-md">
                  {dict.heroHome.titleLine1} <br />
                  {dict.heroHome.titleLine2}
                </h1>

                {/* Subtitle / Lead */}
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl mb-6 font-normal">
                  {dict.heroHome.lead}
                </p>

                {/* Print Format Notice Box */}
                <div className="w-full max-w-md inline-flex items-center gap-3.5 px-4 py-3 rounded-xl bg-[#001433]/70 border border-white/20 backdrop-blur-md text-xs sm:text-sm text-slate-200 mb-6 text-left shadow-lg">
                  <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-400 flex items-center justify-center flex-shrink-0 border border-red-500/30">
                    <svg className="w-4 h-4 text-red-400">
                      <use href="#i-book"></use>
                    </svg>
                  </div>
                  <span className="font-medium leading-snug">
                    {dict.heroHome.printNotice}
                  </span>
                </div>

                {/* Action Buttons Row (3 Buttons) */}
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-lg mb-5">
                  <Link
                    href={`/${locale}/indice`}
                    className="w-full sm:w-auto h-12 px-6 rounded-lg bg-[#f52238] hover:bg-[#db152a] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition-all active:scale-[0.98]"
                  >
                    <span>{dict.heroHome.exploreIndex}</span>
                    <svg className="w-4 h-4"><use href="#i-arrow"></use></svg>
                  </Link>

                  <Link
                    href={`/${locale}/indice#conteudo`}
                    className="w-full sm:w-auto h-12 px-5 rounded-lg bg-[#001f4d]/50 hover:bg-[#001f4d]/80 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 border border-white/30 backdrop-blur-sm transition-all active:scale-[0.98]"
                  >
                    <span>{dict.heroHome.seeChapters}</span>
                    <svg className="w-4 h-4"><use href="#i-arrow"></use></svg>
                  </Link>

                  <a
                    href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto h-12 px-5 rounded-lg bg-[#001f4d]/50 hover:bg-[#001f4d]/80 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 border border-white/30 backdrop-blur-sm transition-all active:scale-[0.98]"
                  >
                    <span>{dict.heroHome.whereToBuy}</span>
                    <span className="text-sm">🛒</span>
                  </a>
                </div>

                {/* Online Note */}
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
                  <svg className="w-4 h-4 text-sky-400"><use href="#i-globe"></use></svg>
                  <span>{dict.heroHome.onlineNote}</span>
                </div>
              </div>
            </div>

            {/* Bottom 5-Item Stats Bar (Exact Reference Banner) */}
            <div className="w-full rounded-2xl bg-[#001533]/85 border border-white/15 backdrop-blur-xl p-4 sm:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-0 md:divide-x md:divide-white/10 text-center">
                
                {/* 1. Capítulos */}
                <div className="flex flex-col items-center justify-center px-2 py-1">
                  <svg className="w-6 h-6 text-sky-400 mb-1.5"><use href="#i-book"></use></svg>
                  <strong className="text-2xl sm:text-3xl font-black text-white leading-tight">109</strong>
                  <span className="text-xs text-slate-300 font-semibold mt-0.5">capítulos</span>
                </div>

                {/* 2. Seções */}
                <div className="flex flex-col items-center justify-center px-2 py-1">
                  <svg className="w-6 h-6 text-red-400 mb-1.5"><use href="#i-grid"></use></svg>
                  <strong className="text-2xl sm:text-3xl font-black text-white leading-tight">10</strong>
                  <span className="text-xs text-slate-300 font-semibold mt-0.5">seções temáticas</span>
                </div>

                {/* 3. Autores */}
                <div className="flex flex-col items-center justify-center px-2 py-1">
                  <svg className="w-6 h-6 text-indigo-400 mb-1.5"><use href="#i-users"></use></svg>
                  <strong className="text-base sm:text-lg font-bold text-white leading-snug mt-1">Autores</strong>
                  <span className="text-xs text-slate-300 font-semibold">especialistas</span>
                </div>

                {/* 4. Idiomas */}
                <div className="flex flex-col items-center justify-center px-2 py-1">
                  <svg className="w-6 h-6 text-teal-400 mb-1.5"><use href="#i-globe"></use></svg>
                  <div className="text-xs text-slate-200 font-bold leading-tight mt-0.5">
                    <div>Português</div>
                    <div>Español</div>
                    <div>English</div>
                  </div>
                </div>

                {/* 5. Referências */}
                <div className="col-span-2 sm:col-span-1 flex flex-col items-center justify-center px-2 py-1">
                  <svg className="w-6 h-6 text-amber-400 mb-1.5"><use href="#i-ref"></use></svg>
                  <strong className="text-base sm:text-lg font-bold text-white leading-snug mt-1">Referências</strong>
                  <span className="text-xs text-slate-300 font-semibold">por capítulo</span>
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
            
            {/* Card Autores - Layout compacto sem espaço vazio */}
            <article className="info-card authors-card" style={{ padding: "32px 36px", display: "flex", flexDirection: "column", gap: 14, minHeight: "auto" }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, color: "#001026", display: "flex", alignItems: "center", gap: 12, margin: 0 }}>
                <svg style={{ width: 28, height: 28, color: "#093c78" }}>
                  <use href="#i-users"></use>
                </svg>
                <span>{dict.info.authorsTitle}</span>
              </h2>
              
              <p style={{ fontSize: 15, lineHeight: 1.55, color: "#475569", margin: 0 }}>
                {dict.info.authorsDesc}
              </p>

              {/* 3 Real Editors with Direct Links */}
              <div className="portraits" style={{ display: "flex", gap: 14, margin: "6px 0 10px", alignItems: "center" }}>
                <Link href={`/${locale}/autor/edson-pudles`} title="Dr. Edson Pudles - Editor-Chefe" style={{ textDecoration: "none", transition: "transform 0.2s ease" }} className="hover:scale-105">
                  <img
                    src="/assets/edson-pudles.png"
                    alt="Dr. Edson Pudles"
                    style={{ width: 68, height: 68, borderRadius: "50%", objectFit: "cover", border: "3px solid #fff", boxShadow: "0 4px 12px rgba(9, 60, 120, 0.2)" }}
                  />
                </Link>
                <Link href={`/${locale}/autor/helton-defino`} title="Dr. Helton L. A. Defino - Coeditor" style={{ textDecoration: "none", transition: "transform 0.2s ease" }} className="hover:scale-105">
                  <img
                    src="/assets/helton-defino.png"
                    alt="Dr. Helton Defino"
                    style={{ width: 68, height: 68, borderRadius: "50%", objectFit: "cover", border: "3px solid #fff", boxShadow: "0 4px 12px rgba(9, 60, 120, 0.2)" }}
                  />
                </Link>
                <Link href={`/${locale}/autor/marcelo-risso`} title="Dr. Marcelo Risso - Coeditor" style={{ textDecoration: "none", transition: "transform 0.2s ease" }} className="hover:scale-105">
                  <img
                    src="/assets/marcelo-risso.png"
                    alt="Dr. Marcelo Risso"
                    style={{ width: 68, height: 68, borderRadius: "50%", objectFit: "cover", border: "3px solid #fff", boxShadow: "0 4px 12px rgba(9, 60, 120, 0.2)" }}
                  />
                </Link>
              </div>

              <div>
                <Link className="btn btn-small" href={`/${locale}/autores`} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 18px", background: "#06366d", color: "#fff", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
                  <span>{dict.info.authorsBtn}</span>
                  <svg style={{ width: 15, height: 15 }}>
                    <use href="#i-arrow"></use>
                  </svg>
                </Link>
              </div>
            </article>

            {/* Card Trilíngue - Volta exatamente para #referencias */}
            <article id="referencias" className="info-card language-card" style={{ padding: "32px 36px", borderLeft: "1px solid #dce4ed", display: "flex", flexDirection: "column", gap: 14, minHeight: "auto" }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, color: "#001026", display: "flex", alignItems: "center", gap: 12, margin: 0 }}>
                <svg style={{ width: 28, height: 28, color: "#093c78" }}>
                  <use href="#i-globe"></use>
                </svg>
                <span>{dict.info.langTitle}</span>
              </h2>
              
              <p style={{ fontSize: 15, lineHeight: 1.55, color: "#475569", margin: 0 }}>
                {dict.info.langDesc}
              </p>

              {/* 3 Interactive Official Flags (Click to reload directly in the same section #referencias) */}
              <div style={{ display: "flex", gap: 16, margin: "6px 0 0", alignItems: "center" }}>
                <Link
                  href="/pt#referencias"
                  title="Mudar para Português"
                  scroll={true}
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6,
                    padding: "8px 14px",
                    borderRadius: 12,
                    background: locale === "pt" ? "rgba(245, 34, 56, 0.08)" : "#f8fafc",
                    border: locale === "pt" ? "2px solid #f52238" : "1.5px solid #e2e8f0",
                    transition: "all 0.2s ease",
                  }}
                  className="hover:scale-105"
                >
                  <div style={{ width: 48, height: 32, borderRadius: 5, overflow: "hidden", boxShadow: "0 3px 8px rgba(0,0,0,0.12)", border: "1px solid rgba(0,0,0,0.08)" }}>
                    <img src="/assets/flags/br.svg" alt="Brasil" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <span style={{ fontSize: 12.5, fontWeight: 800, color: locale === "pt" ? "#f52238" : "#334155" }}>
                    Português {locale === "pt" && "✓"}
                  </span>
                </Link>

                <Link
                  href="/es#referencias"
                  title="Cambiar a Español"
                  scroll={true}
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6,
                    padding: "8px 14px",
                    borderRadius: 12,
                    background: locale === "es" ? "rgba(245, 34, 56, 0.08)" : "#f8fafc",
                    border: locale === "es" ? "2px solid #f52238" : "1.5px solid #e2e8f0",
                    transition: "all 0.2s ease",
                  }}
                  className="hover:scale-105"
                >
                  <div style={{ width: 48, height: 32, borderRadius: 5, overflow: "hidden", boxShadow: "0 3px 8px rgba(0,0,0,0.12)", border: "1px solid rgba(0,0,0,0.08)" }}>
                    <img src="/assets/flags/es.svg" alt="España" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <span style={{ fontSize: 12.5, fontWeight: 800, color: locale === "es" ? "#f52238" : "#334155" }}>
                    Español {locale === "es" && "✓"}
                  </span>
                </Link>

                <Link
                  href="/en#referencias"
                  title="Switch to English"
                  scroll={true}
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6,
                    padding: "8px 14px",
                    borderRadius: 12,
                    background: locale === "en" ? "rgba(245, 34, 56, 0.08)" : "#f8fafc",
                    border: locale === "en" ? "2px solid #f52238" : "1.5px solid #e2e8f0",
                    transition: "all 0.2s ease",
                  }}
                  className="hover:scale-105"
                >
                  <div style={{ width: 48, height: 32, borderRadius: 5, overflow: "hidden", boxShadow: "0 3px 8px rgba(0,0,0,0.12)", border: "1px solid rgba(0,0,0,0.08)" }}>
                    <img src="/assets/flags/us.svg" alt="English" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <span style={{ fontSize: 12.5, fontWeight: 800, color: locale === "en" ? "#f52238" : "#334155" }}>
                    English {locale === "en" && "✓"}
                  </span>
                </Link>
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
