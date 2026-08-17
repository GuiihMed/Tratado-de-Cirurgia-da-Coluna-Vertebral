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
        {/* HERO INDEX */}
        <section className="hero-index">
          <img
            className="hero-anatomy"
            src="/assets/hero-spine.png"
            alt="Ilustração anatômica da coluna vertebral"
          />
          <div className="hero-light"></div>
          <div className="shell hero-main">
            <div className="hero-copy">
              <h1>{dict.heroIndice.title}</h1>
              <p>{dict.heroIndice.lead}</p>
              <div className="print-notice">
                <svg>
                  <use href="#i-book"></use>
                </svg>
                <span>{dict.heroIndice.printNotice}</span>
              </div>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#estrutura">
                  {dict.heroIndice.exploreSections} <span>↓</span>
                </a>
                <a className="btn btn-outline" href="#conteudo">
                  {dict.heroIndice.seeAllChapters}{" "}
                  <svg>
                    <use href="#i-arrow"></use>
                  </svg>
                </a>
                <a className="btn btn-outline" href="#comprar">
                  {dict.heroIndice.whereToBuy}{" "}
                  <svg>
                    <use href="#i-cart"></use>
                  </svg>
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
