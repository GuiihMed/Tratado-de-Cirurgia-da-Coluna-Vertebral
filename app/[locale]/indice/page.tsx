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
        {/* HERO INDEX (RESPONSIVO COM FUNDO OFICIAL E STATS REFINADOS) */}
        <section
          className="hero-index relative w-full overflow-hidden text-white pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-white/10"
          style={{
            background:
              "radial-gradient(circle at 12% 35%, rgba(220, 20, 45, 0.6) 0%, transparent 45%), linear-gradient(105deg, #a80f22 0%, #2f193e 24%, #052b5b 54%, #005a9c 100%)",
          }}
        >
          {/* Anatomical background spine overlay */}
          <img
            className="hero-anatomy absolute right-0 top-0 h-full w-auto max-w-[62%] object-contain pointer-events-none opacity-25 hidden md:block"
            src="/assets/hero-spine.png"
            alt="Ilustração anatômica da coluna vertebral"
            style={{ mixBlendMode: "screen", filter: "contrast(1.2) brightness(1.1)" }}
          />

          <div className="shell hero-main relative z-10 text-center max-w-4xl mx-auto px-4">
            <div className="hero-copy">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-3">
                {dict.heroIndice.title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto mb-5">
                {dict.heroIndice.lead}
              </p>
              
              {/* Notice Box */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border mb-6 text-xs sm:text-sm font-medium"
                style={{
                  background: "rgba(0, 16, 40, 0.6)",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  color: "#ffebee",
                }}
              >
                <svg className="w-4 h-4 text-rose-400 flex-shrink-0"><use href="#i-book"></use></svg>
                <span>{dict.heroIndice.printNotice}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto mb-8">
                <a
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#f52238] hover:bg-[#d9142a] text-white font-bold text-sm shadow-lg shadow-red-600/30 transition-all active:scale-[0.98]"
                  href="#estrutura"
                  style={{ textDecoration: "none" }}
                >
                  <span>{dict.heroIndice.exploreSections}</span>
                  <span>↓</span>
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 backdrop-blur-sm transition-all active:scale-[0.98]"
                  href="#conteudo"
                  style={{ textDecoration: "none" }}
                >
                  <span>{dict.heroIndice.seeAllChapters}</span>
                  <svg className="w-4 h-4"><use href="#i-arrow"></use></svg>
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 backdrop-blur-sm transition-all active:scale-[0.98]"
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
          </div>

          <StatsBar locale={locale} variant="indice" />
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
