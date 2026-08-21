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

        {/* DESTAQUE DE CAPÍTULO (RÉPLICA EXATA DO DESIGN DESKTOP & MOBILE) */}
        <section id="capitulo" className="py-12 sm:py-16 bg-slate-50 relative overflow-hidden">
          <div className="shell">
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl p-6 sm:p-8 lg:p-10 text-white"
              style={{
                background: "radial-gradient(circle at 8% 25%, rgba(220, 20, 50, 0.55), transparent 38%), linear-gradient(110deg, #38173f 0%, #08295b 45%, #003875 100%)",
                boxShadow: "0 25px 60px rgba(0, 20, 55, 0.25)",
              }}
            >
              {/* Spine Graphic Background Overlay */}
              <img
                src="/assets/chapter-spine.png"
                alt=""
                className="absolute right-10 top-0 bottom-0 h-full w-auto max-w-[45%] object-contain pointer-events-none opacity-20 hidden md:block"
                style={{ mixBlendMode: "screen" }}
              />

              {/* Grid: 3 columns on Desktop / Clean stacked flow on Mobile */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                
                {/* 1. Chapter Number Badge */}
                <div className="lg:col-span-2 flex flex-row lg:flex-col items-center justify-start lg:justify-center gap-3 lg:gap-1 pb-4 lg:pb-0 border-b lg:border-b-0 lg:border-r border-white/20 lg:pr-6">
                  <span className="text-sm sm:text-base font-bold uppercase tracking-wider text-slate-200">
                    {dict.chapterHighlight.badge}
                  </span>
                  <strong className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-none">
                    {dict.chapterHighlight.number}
                  </strong>
                </div>

                {/* 2. Chapter Content & Chips */}
                <div className="lg:col-span-7 flex flex-col justify-center lg:px-2">
                  <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-white leading-tight tracking-tight mb-3">
                    {dict.chapterHighlight.title}
                  </h2>

                  {/* Authors with red squares */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm font-semibold text-slate-200 mb-3">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-2 h-2 rounded-[2px] bg-[#f52238] inline-block" />
                      {dict.chapterHighlight.authors[0]}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="w-2 h-2 rounded-[2px] bg-[#f52238] inline-block" />
                      {dict.chapterHighlight.authors[1]}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl mb-4 font-normal">
                    {dict.chapterHighlight.summary}
                  </p>

                  {/* Keyword Chips */}
                  <div className="flex flex-wrap gap-2">
                    {dict.chapterHighlight.chips.map((chip, index) => (
                      <span
                        key={index}
                        className="text-xs font-semibold px-3 py-1 rounded-md bg-white/10 hover:bg-white/15 border border-white/25 text-white transition-colors"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3. Action Buttons */}
                <div className="lg:col-span-3 flex flex-col gap-3 justify-center w-full pt-2 lg:pt-0">
                  <Link
                    href={`/${locale}/capitulo/8`}
                    className="w-full h-12 px-5 rounded-xl bg-[#f52238] hover:bg-[#db152a] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition-all active:scale-[0.98]"
                    style={{ textDecoration: "none" }}
                  >
                    <span>{dict.chapterHighlight.btnSummary}</span>
                    <svg className="w-4 h-4"><use href="#i-arrow"></use></svg>
                  </Link>

                  <a
                    href="#referencias"
                    className="w-full h-12 px-5 rounded-xl bg-[#001f4d]/60 hover:bg-[#001f4d]/90 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 border border-white/30 backdrop-blur-sm transition-all active:scale-[0.98]"
                    style={{ textDecoration: "none" }}
                  >
                    <span>{dict.chapterHighlight.btnRef}</span>
                    <svg className="w-4 h-4 text-sky-400"><use href="#i-ref"></use></svg>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* TRATADO EM DEBATE (RESPONSIVO COM ARTE EM PRIMEIRO LUGAR) */}
        <section id="debate" className="py-10 sm:py-16 bg-slate-50 relative">
          <div className="shell">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/50">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                
                {/* 1. Imagem / Arte do Debate em Primeiro (Antes do Episódio) */}
                <div className="lg:col-span-5 order-1 flex justify-center">
                  <div className="relative w-full max-w-md lg:max-w-full rounded-2xl overflow-hidden shadow-xl aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center border border-slate-300 group"
                    style={{
                      background: "radial-gradient(circle at 15% 22%, rgba(240, 48, 61, 0.8), transparent 45%), linear-gradient(125deg, #1b0d22, #052e61 58%, #00457e)",
                      boxShadow: "0 16px 36px rgba(6, 34, 72, 0.22)",
                    }}
                  >
                    {/* Episode Number in bottom-left */}
                    <div className="absolute left-5 bottom-4 z-10">
                      <small className="block text-xs font-extrabold uppercase tracking-widest text-slate-300">
                        {dict.debate.ep}
                      </small>
                      <strong className="block text-4xl sm:text-5xl font-black text-white leading-none">
                        {dict.debate.epNumber}
                      </strong>
                    </div>

                    {/* Central Play Icon */}
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white shadow-xl group-hover:scale-110 transition-transform">
                        <svg className="w-7 h-7 text-white ml-1">
                          <use href="#i-play"></use>
                        </svg>
                      </div>
                    </div>

                    {/* Logo Overlay */}
                    <img
                      src="/assets/tratado-em-debate-logo.png"
                      alt="Tratado em Debate"
                      className="absolute right-4 bottom-4 w-36 sm:w-44 opacity-95 pointer-events-none drop-shadow-md"
                    />
                  </div>
                </div>

                {/* 2. Textos e Informações do Episódio */}
                <div className="lg:col-span-7 order-2 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#093c78] text-xs font-bold uppercase tracking-wider mb-3 w-max">
                    <span className="w-2 h-2 rounded-full bg-[#f52238] animate-pulse" />
                    <span>{dict.debate.title}</span>
                  </div>

                  <p className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wide mb-1">
                    {dict.debate.kicker}
                  </p>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#001026] leading-tight tracking-tight mb-3">
                    {dict.debate.subtitle}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mb-6">
                    {dict.debate.description}
                  </p>

                  <div>
                    <Link
                      href={`/${locale}/video`}
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#06366d] hover:bg-[#001f4d] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-blue-900/20 transition-all active:scale-[0.98]"
                      style={{ textDecoration: "none" }}
                    >
                      <span>{dict.debate.cta}</span>
                      <svg className="w-4 h-4"><use href="#i-arrow"></use></svg>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* AUTORES E IDIOMAS (RESPONSIVO) */}
        <section id="autores" className="py-10 sm:py-16 bg-white">
          <div className="shell">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-2 border-slate-200 rounded-3xl overflow-hidden bg-[#fbfcfe] shadow-lg">
              
              {/* Card Autores */}
              <article className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#001026] flex items-center gap-3 mb-3">
                    <svg className="w-7 h-7 text-[#093c78]">
                      <use href="#i-users"></use>
                    </svg>
                    <span>{dict.info.authorsTitle}</span>
                  </h2>
                  
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {dict.info.authorsDesc}
                  </p>

                  {/* 3 Real Editors with Direct Links */}
                  <div className="flex gap-3.5 mb-6 items-center flex-wrap">
                    <Link href={`/${locale}/autor/edson-pudles`} title="Dr. Edson Pudles - Editor-Chefe" className="hover:scale-105 transition-transform">
                      <img
                        src="/assets/edson-pudles.png"
                        alt="Dr. Edson Pudles"
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-[#093c78]/30 shadow-md"
                      />
                    </Link>
                    <Link href={`/${locale}/autor/helton-defino`} title="Dr. Helton Defino - Editor" className="hover:scale-105 transition-transform">
                      <img
                        src="/assets/helton-defino.png"
                        alt="Dr. Helton Defino"
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-[#093c78]/30 shadow-md"
                      />
                    </Link>
                    <Link href={`/${locale}/autor/marcelo-risso`} title="Dr. Marcelo Risso - Editor" className="hover:scale-105 transition-transform">
                      <img
                        src="/assets/marcelo-risso.png"
                        alt="Dr. Marcelo Risso"
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-[#093c78]/30 shadow-md"
                      />
                    </Link>
                  </div>
                </div>

                <div>
                  <Link
                    href={`/${locale}/autores`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#001f4d] hover:bg-[#003073] text-white font-bold text-sm shadow-md transition-all active:scale-[0.98]"
                    style={{ textDecoration: "none" }}
                  >
                    <span>{dict.info.authorsBtn}</span>
                    <svg className="w-4 h-4"><use href="#i-arrow"></use></svg>
                  </Link>
                </div>
              </article>

              {/* Card Idiomas */}
              <article id="referencias" className="p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#001433] to-[#042452] text-white flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3 mb-3">
                    <svg className="w-7 h-7 text-sky-400">
                      <use href="#i-globe"></use>
                    </svg>
                    <span>{dict.info.langTitle}</span>
                  </h2>
                  
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6">
                    {dict.info.langDesc}
                  </p>

                  <div className="flex flex-col gap-3 mb-6">
                    <Link href="/pt#referencias" className="inline-flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-sm font-semibold transition-all">
                      <img src="https://flagcdn.com/w40/br.png" alt="Brasil" className="w-6 h-auto rounded shadow" />
                      <span>Português (Brasil)</span>
                    </Link>
                    <Link href="/en#referencias" className="inline-flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-sm font-semibold transition-all">
                      <img src="https://flagcdn.com/w40/us.png" alt="USA" className="w-6 h-auto rounded shadow" />
                      <span>English (Abstracts)</span>
                    </Link>
                    <Link href="/es#referencias" className="inline-flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-sm font-semibold transition-all">
                      <img src="https://flagcdn.com/w40/es.png" alt="Spain" className="w-6 h-auto rounded shadow" />
                      <span>Español (Resúmenes)</span>
                    </Link>
                  </div>
                </div>

                <p className="text-xs text-slate-300 italic">
                  * Navegue pela estrutura e referências nos três idiomas oficiais.
                </p>
              </article>

            </div>
          </div>
        </section>

        {/* ONDE COMPRAR */}
        <PurchaseSection locale={locale} variant="home" />
      </main>

      <Footer locale={locale} />
    </>
  );
}
