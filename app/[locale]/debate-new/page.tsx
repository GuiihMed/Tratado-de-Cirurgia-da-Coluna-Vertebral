import type { Metadata } from "next";
import Link from "next/link";
import ModernHeader from "@/components/modern/ModernHeader";
import ModernFooter from "@/components/modern/ModernFooter";
import { Locale } from "@/lib/types";
import { DEBATE_EPISODES, getDebateEpisodes } from "@/lib/data/debate-episodes";
import DebateEpisodesClientView from "@/components/modern/DebateEpisodesClientView";

export const revalidate = 0;

interface DebateNewPageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({
  params,
}: DebateNewPageProps): Promise<Metadata> {
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
  const pageUrl = `https://www.tratadodecoluna.com.br/${locale}/debate-new`;

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
        pt: "https://www.tratadodecoluna.com.br/pt/debate-new",
        en: "https://www.tratadodecoluna.com.br/en/debate-new",
        es: "https://www.tratadodecoluna.com.br/es/debate-new",
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

export default async function DebateNewPage({ params }: DebateNewPageProps) {
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
        "@id": `https://www.tratadodecoluna.com.br/${locale}/debate-new#video`,
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
        "@id": `https://www.tratadodecoluna.com.br/${locale}/debate-new#podcast`,
        "name": "Episódio 01: Coluna Vertebral no Plano Sagital — Tratado em Debate",
        "description": "Episódio em áudio no Spotify sobre o Capítulo 8 do Tratado de Cirurgia da Coluna Vertebral.",
        "url": "https://open.spotify.com/episode/7hhh4RRDMS4xfx67QkUEZY?si=mkVupBTQSUOdg64qlboZ3Q"
      }
    ]
  };

  return (
    <div
      style={{
        background: "#001026",
        color: "#ffffff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />
      <ModernHeader locale={locale} currentPage="debate-new" />

      <main style={{ flex: 1 }}>
        {/* ================= HERO SECTION ================= */}
        <section
          style={{
            position: "relative",
            padding: "135px 24px 60px",
            marginTop: "-88px",
            background:
              "radial-gradient(circle at 75% 20%, rgba(245, 34, 56, 0.22) 0%, rgba(0, 51, 130, 0.35) 45%, transparent 70%), linear-gradient(180deg, #001026 0%, #03142b 60%, #001026 100%)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            overflow: "hidden",
          }}
        >
          {/* Anatomical Spine Background Asset */}
          <img
            src="/assets/hero-spine.png"
            alt=""
            className="absolute right-0 top-0 h-full w-auto max-w-[55%] object-contain pointer-events-none opacity-20 hidden md:block"
            style={{ mixBlendMode: "screen", filter: "contrast(1.2) brightness(1.1)" }}
          />

          <div className="shell" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
            {/* Breadcrumb */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                color: "rgba(255, 255, 255, 0.75)",
                marginBottom: 20,
              }}
            >
              <Link
                href={`/${locale}/home-new`}
                style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "none" }}
              >
                {locale === "en" ? "Home" : locale === "es" ? "Inicio" : "Início"}
              </Link>
              <span>›</span>
              <span style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                {locale === "en" ? "The Treatise" : locale === "es" ? "El Tratado" : "O Tratado"}
              </span>
              <span>›</span>
              <span style={{ color: "#ffffff", fontWeight: 700 }}>
                {locale === "en" ? "Treatise in Debate" : locale === "es" ? "Tratado en Debate" : "Tratado em Debate"}
              </span>
            </div>

            {/* Institutional Badge */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 16px",
                  borderRadius: 999,
                  background: "linear-gradient(135deg, rgba(245, 34, 56, 0.18) 0%, rgba(0, 51, 130, 0.3) 100%)",
                  border: "1px solid rgba(245, 34, 56, 0.35)",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#ff8290",
                  marginBottom: 16,
                  boxShadow: "0 4px 15px rgba(245, 34, 56, 0.2)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[#f52238] animate-pulse" />
                <span style={{ color: "#ffffff" }}>
                  {locale === "en"
                    ? "OFFICIAL SBC VIDEOCAST SERIES"
                    : locale === "es"
                    ? "SERIE DE VIDEOCAST OFICIAL SBC"
                    : "SÉRIE DE VIDEOCAST OFICIAL SBC"}
                </span>
              </div>
            </div>

            {/* Main Hero Title */}
            <h1
              style={{
                fontSize: "clamp(32px, 4.2vw, 52px)",
                letterSpacing: "-0.035em",
                margin: "0 0 16px",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.15,
              }}
            >
              {locale === "en" ? "Treatise in Debate" : locale === "es" ? "Tratado en Debate" : "Tratado em Debate"}
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "clamp(16px, 1.8vw, 19px)",
                color: "#94b8db",
                maxWidth: 720,
                margin: "0 auto",
                lineHeight: 1.55,
                fontWeight: 500,
              }}
            >
              {locale === "en"
                ? "Scientific clinical discussions and surgical insights directly with the authors of each chapter of the SBC Spine Treatise."
                : locale === "es"
                ? "Debates clínicos y enfoques quirúrgicos directamente con los autores de cada capítulo del Tratado de la SBC."
                : "Debates clínicos aprofundados e condutas cirúrgicas práticas diretamente com os autores e especialistas dos capítulos da obra."}
            </p>
          </div>
        </section>

        {/* ================= VIDEOCAST CLIENT VIEW ================= */}
        <section style={{ background: "#000c1e" }}>
          <DebateEpisodesClientView locale={locale} />
        </section>
      </main>

      <ModernFooter locale={locale} />
    </div>
  );
}
