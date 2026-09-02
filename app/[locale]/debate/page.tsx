import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PurchaseSection from "@/components/PurchaseSection";
import { Locale } from "@/lib/types";
import { DEBATE_EPISODES } from "@/lib/data/debate-episodes";
import DebateClassicClientView from "@/components/DebateClassicClientView";

export const revalidate = 0;

interface DebatePageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({
  params,
}: DebatePageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";

  const titles = {
    pt: "Tratado em Debate • Videocast Oficial SBC | Cirurgia da Coluna Vertebral",
    en: "Treatise in Debate • Official SBC Videocast | Spine Surgery",
    es: "Tratado en Debate • Videocast Oficial SBC | Cirugía de Columna",
  };

  const descriptions = {
    pt: "Assista aos episódios do Tratado em Debate, o videocast científico oficial da Sociedade Brasileira de Coluna (SBC). Discussões aprofundadas com os autores dos 109 capítulos da obra.",
    en: "Watch episodes of the Treatise in Debate, the official scientific videocast of the Brazilian Spine Society (SBC). In-depth surgical discussions with the authors of the 109 chapters.",
    es: "Vea los episodios del Tratado en Debate, el videocast científico oficial de la Sociedad Brasileña de Columna (SBC). Debates clínicos con los autores de los 109 capítulos.",
  };

  const currentTitle = titles[locale] || titles.pt;
  const currentDesc = descriptions[locale] || descriptions.pt;
  const pageUrl = `https://www.tratadodecoluna.com.br/${locale}/debate`;

  return {
    title: currentTitle,
    description: currentDesc,
    keywords: [
      "Tratado em Debate",
      "Videocast SBC",
      "Cirurgia de Coluna",
      "Episódio 01",
      "Coluna Vertebral no Plano Sagital",
      "Dr. Marcelo Risso",
      "Dr. Paulo Cavali",
      "Sociedade Brasileira de Coluna",
    ],
    alternates: {
      canonical: pageUrl,
      languages: {
        pt: "https://www.tratadodecoluna.com.br/pt/debate",
        en: "https://www.tratadodecoluna.com.br/en/debate",
        es: "https://www.tratadodecoluna.com.br/es/debate",
      },
    },
    openGraph: {
      type: "video.other",
      locale: locale === "en" ? "en_US" : locale === "es" ? "es_ES" : "pt_BR",
      url: pageUrl,
      siteName: "Tratado de Cirurgia da Coluna Vertebral - SBC",
      title: currentTitle,
      description: currentDesc,
      images: [
        {
          url: "https://www.tratadodecoluna.com.br/assets/og-cover.png",
          width: 1200,
          height: 630,
          type: "image/png",
          alt: "Tratado em Debate - Videocast Oficial SBC",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: currentTitle,
      description: currentDesc,
      images: ["https://www.tratadodecoluna.com.br/assets/og-cover.png"],
    },
  };
}

export default async function DebatePage({ params }: DebatePageProps) {
  const resolvedParams = await params;
  const rawLocale = resolvedParams.locale;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";

  const videoJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VideoObject",
        "@id": `https://www.tratadodecoluna.com.br/${locale}/debate#video`,
        "name": "Episódio 01: Coluna Vertebral no Plano Sagital — Tratado em Debate",
        "description": "Videocast científico oficial da Sociedade Brasileira de Coluna (SBC) com Dr. Marcelo Risso e Dr. Paulo Cavali debatendo o alinhamento no plano sagital e parâmetros espinopélvicos (Capítulo 8).",
        "thumbnailUrl": [
          "https://www.tratadodecoluna.com.br/assets/og-cover.png",
          "https://www.tratadodecoluna.com.br/assets/debate-artwork.png"
        ],
        "uploadDate": "2024-05-15T08:00:00+00:00",
        "duration": "PT45M",
        "embedUrl": "https://player.vimeo.com/video/1037756184",
        "publisher": {
          "@type": "MedicalOrganization",
          "name": "Sociedade Brasileira de Coluna (SBC)",
          "logo": "https://www.tratadodecoluna.com.br/assets/sbc-logo.svg"
        }
      },
      {
        "@type": "PodcastEpisode",
        "@id": `https://www.tratadodecoluna.com.br/${locale}/debate#podcast`,
        "name": "Episódio 01: Coluna Vertebral no Plano Sagital — Tratado em Debate",
        "description": "Episódio em áudio no Spotify sobre o Capítulo 8 do Tratado de Cirurgia da Coluna Vertebral.",
        "url": "https://open.spotify.com/episode/7hhh4RRDMS4xfx67QkUEZY?si=mkVupBTQSUOdg64qlboZ3Q"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />
      <Header locale={locale} currentPage="debate" />

      <main style={{ background: "#f8fafc", minHeight: "100vh" }}>
        {/* ================= HERO SECTION (DESIGN CLÁSSICO RESPONSIVO) ================= */}
        <section
          className="relative w-full overflow-hidden text-white pt-5 pb-8 sm:pt-10 sm:pb-14 border-b border-white/10"
          style={{
            background:
              "radial-gradient(circle at 19% 24%, rgba(255, 87, 86, 0.45), transparent 34%), linear-gradient(105deg, #c9142a 0%, #39244c 28%, #052b5b 58%, #0062a7 100%)",
          }}
        >
          {/* Subtle Anatomical Spine Background Overlay */}
          <img
            src="/assets/hero-spine.png"
            alt=""
            className="absolute right-0 top-0 h-full w-auto max-w-[62%] object-contain pointer-events-none opacity-20 hidden md:block"
            style={{ mixBlendMode: "screen", filter: "contrast(1.2) brightness(1.1)" }}
          />

          <div className="w-full px-4 sm:px-6 md:px-8 mx-auto max-w-7xl relative z-10">
            {/* Breadcrumb */}
            <div className="text-xs sm:text-sm text-white/80 mb-3 sm:mb-5 flex items-center flex-wrap gap-1.5 sm:gap-2">
              <Link href={`/${locale}`} className="text-white/85 hover:text-white transition-colors no-underline">
                {locale === "en" ? "Home" : locale === "es" ? "Inicio" : "Início"}
              </Link>
              <span>›</span>
              <span className="text-white/85">
                {locale === "en" ? "The Treatise" : locale === "es" ? "El Tratado" : "O Tratado"}
              </span>
              <span>›</span>
              <span className="text-white font-bold">
                {locale === "en" ? "Treatise in Debate" : locale === "es" ? "Tratado en Debate" : "Tratado em Debate"}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-12 items-center">
              {/* Right Column / Primary Info on Mobile */}
              <div className="md:col-span-8 order-1 md:order-2 flex flex-col items-start text-left">
                {/* Institutional Badge */}
                <div
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded bg-[#001030]/60 border border-white/30 text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-wider mb-2.5 sm:mb-3.5 backdrop-blur-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-[#ff3047] animate-pulse" />
                  <span>
                    {locale === "en"
                      ? "OFFICIAL SBC SCIENTIFIC VIDEOCAST"
                      : locale === "es"
                      ? "VIDEOCAST CIENTÍFICO OFICIAL SBC"
                      : "VIDEOCAST CIENTÍFICO OFICIAL SBC"}
                  </span>
                </div>

                {/* Main Hero Title */}
                <h1
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-2 sm:mb-3"
                >
                  {locale === "en" ? "Treatise in Debate" : locale === "es" ? "Tratado en Debate" : "Tratado em Debate"}
                </h1>

                {/* Subtitle */}
                <p
                  className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed max-w-2xl font-normal m-0"
                >
                  {locale === "en"
                    ? "Scientific clinical discussions and surgical insights directly with the authors of each chapter of the SBC Spine Treatise."
                    : locale === "es"
                    ? "Debates clínicos y enfoques quirúrgicos directamente con los autores de cada capítulo del Tratado de la SBC."
                    : "Debates clínicos aprofundados e condutas cirúrgicas práticas diretamente com os autores e especialistas dos capítulos da obra."}
                </p>
              </div>

              {/* Book Photo (Compact and clean on mobile, full size on desktop) */}
              <div className="md:col-span-4 order-2 md:order-1 flex justify-center md:justify-end">
                <img
                  src="/assets/capa-tratado.png"
                  alt="Tratado de Cirurgia da Coluna Vertebral"
                  className="w-[125px] sm:w-[170px] md:w-[240px] h-auto drop-shadow-[0_15px_35px_rgba(0,0,0,0.5)] transition-transform hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= VIDEOCAST CLASSIC CLIENT VIEW ================= */}
        <section style={{ background: "#f8fafc" }} className="pt-8 pb-12 sm:pt-12 sm:pb-16 border-t border-slate-200">
          <DebateClassicClientView locale={locale} />
        </section>

        {/* ================= ONDE COMPRAR SECTION ================= */}
        <PurchaseSection locale={locale} variant="home" />
      </main>

      <Footer locale={locale} />
    </>
  );
}
