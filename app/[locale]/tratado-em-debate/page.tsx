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
  const pageUrl = `https://livro-sbc.vercel.app/${locale}/debate`;

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
        pt: "https://livro-sbc.vercel.app/pt/debate",
        en: "https://livro-sbc.vercel.app/en/debate",
        es: "https://livro-sbc.vercel.app/es/debate",
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
          url: "https://livro-sbc.vercel.app/assets/og-cover.png",
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
      images: ["https://livro-sbc.vercel.app/assets/og-cover.png"],
    },
  };
}

export default async function DebatePage({ params }: DebatePageProps) {
  const resolvedParams = await params;
  const rawLocale = resolvedParams.locale;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";

  return (
    <>
      <Header locale={locale} currentPage="debate" />

      <main style={{ background: "#f8fafc", minHeight: "100vh" }}>
        {/* ================= HERO SECTION (DESIGN CLÁSSICO) ================= */}
        <section
          className="relative w-full overflow-hidden text-white pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-white/10"
          style={{
            background:
              "radial-gradient(circle at 19% 24%, rgba(255, 87, 86, 0.45), transparent 34%), linear-gradient(105deg, #c9142a 0%, #39244c 28%, #052b5b 58%, #0062a7 100%)",
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
            {/* Breadcrumb */}
            <div style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.8)", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
              <Link href={`/${locale}`} style={{ color: "rgba(255, 255, 255, 0.85)", textDecoration: "none" }}>
                {locale === "en" ? "Home" : locale === "es" ? "Inicio" : "Início"}
              </Link>
              <span>›</span>
              <span style={{ color: "rgba(255, 255, 255, 0.85)" }}>
                {locale === "en" ? "The Treatise" : locale === "es" ? "El Tratado" : "O Tratado"}
              </span>
              <span>›</span>
              <span style={{ color: "#ffffff", fontWeight: 700 }}>
                {locale === "en" ? "Treatise in Debate" : locale === "es" ? "Tratado en Debate" : "Tratado em Debate"}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              {/* Left Column: Book Photo */}
              <div className="md:col-span-4 flex justify-center md:justify-end">
                <img
                  src="/assets/book-cover.png"
                  alt="Tratado de Cirurgia da Coluna Vertebral"
                  style={{
                    width: 240,
                    height: "auto",
                    borderRadius: "8px",
                    boxShadow: "0 20px 45px rgba(0, 0, 0, 0.5)",
                  }}
                />
              </div>

              {/* Right Column: Hero Info */}
              <div className="md:col-span-8">
                {/* Institutional Badge */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "4px 12px",
                    borderRadius: 4,
                    border: "1px solid rgba(255, 255, 255, 0.35)",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#fff",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 14,
                    background: "rgba(0, 16, 48, 0.4)",
                  }}
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
                  style={{
                    fontSize: "clamp(30px, 3.8vw, 48px)",
                    letterSpacing: "-0.03em",
                    margin: "0 0 14px",
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
                    fontSize: "clamp(15px, 1.6vw, 18px)",
                    color: "#e2e8f0",
                    maxWidth: 680,
                    margin: 0,
                    lineHeight: 1.55,
                    fontWeight: 400,
                  }}
                >
                  {locale === "en"
                    ? "Scientific clinical discussions and surgical insights directly with the authors of each chapter of the SBC Spine Treatise."
                    : locale === "es"
                    ? "Debates clínicos y enfoques quirúrgicos directamente con los autores de cada capítulo del Tratado de la SBC."
                    : "Debates clínicos aprofundados e condutas cirúrgicas práticas diretamente com os autores e especialistas dos capítulos da obra."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= VIDEOCAST CLASSIC CLIENT VIEW ================= */}
        <section style={{ background: "#f8fafc" }}>
          <DebateClassicClientView locale={locale} />
        </section>

        {/* ================= ONDE COMPRAR SECTION ================= */}
        <PurchaseSection locale={locale} variant="home" />
      </main>

      <Footer locale={locale} />
    </>
  );
}
