import Link from "next/link";
import Header from "@/components/Header";
import StatsBar from "@/components/StatsBar";
import SectionCard from "@/components/SectionCard";
import ChapterAccordion from "@/components/ChapterAccordion";
import PurchaseSection from "@/components/PurchaseSection";
import Footer from "@/components/Footer";
import { Locale } from "@/lib/types";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { SECOES } from "@/lib/data/sections-and-chapters";
import { getCapitulos } from "@/lib/supabase/server";

export const revalidate = 0; // Dynamic data fetching for Supabase

interface IndicePageProps {
  params: Promise<{ locale: string }>;
}

export default async function IndicePage({ params }: IndicePageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";

  const dict = getDictionary(locale);

  // Asynchronously query chapters from Supabase (with resilient fallback)
  const { data: capitulos } = await getCapitulos();

  return (
    <>
      <Header locale={locale} currentPage="indice" />

      <main>
        {/* HERO INDEX (LAYOUT ORIGINAL IDÊNTICO AO DESIGN DA REFERÊNCIA) */}
        <section
          className="hero-index relative w-full overflow-hidden text-white pt-8 pb-16 border-b border-white/10"
          style={{
            background:
              "radial-gradient(circle at 19% 24%, rgba(255, 87, 86, 0.45), transparent 34%), linear-gradient(105deg, #c9142a 0%, #39244c 28%, #052b5b 58%, #0062a7 100%)",
          }}
        >
          {/* Anatomical background spine overlay */}
          <img
            className="hero-anatomy absolute right-0 top-0 h-full w-auto max-w-[62%] object-contain pointer-events-none opacity-25 hidden md:block"
            src="/assets/hero-spine.png"
            alt="Ilustração anatômica da coluna vertebral"
            style={{ mixBlendMode: "screen", filter: "contrast(1.2) brightness(1.1)" }}
          />

          <div className="shell relative z-10">
            {/* Breadcrumb */}
            <div style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.7)", marginBottom: 24, display: "flex", alignItems: "center", gap: 8 }}>
              <Link href={`/${locale}`} style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "none" }}>
                {locale === "en" ? "Home" : locale === "es" ? "Inicio" : "Início"}
              </Link>
              <span>›</span>
              <span style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                {locale === "en" ? "The Treatise" : locale === "es" ? "El Tratado" : "O Tratado"}
              </span>
              <span>›</span>
              <span style={{ color: "#fff", fontWeight: 700 }}>
                {locale === "en" ? "Index" : locale === "es" ? "Índice" : "Índice"}
              </span>
            </div>

            <div className="hero-copy max-w-2xl text-left">
              <h1 className="text-3xl sm:text-4xl md:text-[50px] font-bold text-white leading-[1.08] tracking-tight mb-4">
                {dict.heroIndice.title}
              </h1>
              <p className="text-sm sm:text-base md:text-[17px] text-slate-100 leading-relaxed mb-6 whitespace-pre-line">
                {dict.heroIndice.lead}
              </p>
              
              {/* Notice Box */}
              <div
                className="inline-flex items-center gap-3.5 px-5 py-3 rounded-xl border border-white/40 mb-8 max-w-xl text-xs sm:text-sm font-semibold"
                style={{
                  background: "rgba(0, 20, 50, 0.4)",
                  color: "#ffffff",
                }}
              >
                <svg className="w-5 h-5 text-[#f52238] flex-shrink-0">
                  <use href="#i-book"></use>
                </svg>
                <span>{dict.heroIndice.printNotice}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 items-stretch sm:items-center mb-8">
                <a
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#f52238] hover:bg-[#d9142a] text-white font-bold text-sm sm:text-base shadow-lg shadow-red-600/30 transition-all active:scale-[0.98]"
                  href="#estrutura"
                  style={{ textDecoration: "none" }}
                >
                  <span>{dict.heroIndice.exploreSections}</span>
                  <span>↓</span>
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/40 backdrop-blur-sm transition-all active:scale-[0.98]"
                  href="#conteudo"
                  style={{ textDecoration: "none" }}
                >
                  <span>{dict.heroIndice.seeAllChapters}</span>
                  <svg className="w-4 h-4"><use href="#i-arrow"></use></svg>
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/40 backdrop-blur-sm transition-all active:scale-[0.98]"
                  href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <span>{dict.heroIndice.whereToBuy}</span>
                  <svg className="w-4 h-4"><use href="#i-cart"></use></svg>
                </a>
              </div>
            </div>

            {/* Stats Bar */}
            <StatsBar locale={locale} variant="indice" />
          </div>
        </section>

        {/* ESTRUTURA DA OBRA (10 SEÇÕES) */}
        <section id="estrutura" className="structure">
          <img
            className="structure-spine"
            src="/assets/hero-spine.png"
            alt=""
          />
          <div className="shell structure-inner">
            <h2>{dict.structure.title}</h2>
            <p>{dict.structure.desc}</p>
            <div className="section-cards">
              {SECOES.map((secao) => (
                <SectionCard
                  key={secao.id}
                  secao={secao}
                  locale={locale}
                  variant="indice-structure"
                />
              ))}
            </div>
          </div>
        </section>

        {/* CONTEÚDO COMPLETO (ACCORDION DINÂMICO DOS 109 CAPÍTULOS) */}
        <ChapterAccordion initialCapitulos={capitulos} locale={locale} />

        {/* COMPRAR (VARIANTE ÍNDICE) */}
        <PurchaseSection locale={locale} variant="indice" />
      </main>

      <Footer locale={locale} />
    </>
  );
}
