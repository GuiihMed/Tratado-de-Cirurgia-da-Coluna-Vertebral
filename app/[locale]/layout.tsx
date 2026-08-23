import type { Metadata } from "next";
import { ReactNode } from "react";
import { Locale } from "@/lib/types";
import MobileBottomNav from "@/components/MobileBottomNav";

export async function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = ["pt", "en", "es"].includes(rawLocale) ? rawLocale : "pt";

  const titles = {
    pt: "Tratado de Cirurgia da Coluna Vertebral | Obra Oficial SBC",
    en: "Treatise on Spine Surgery | Official SBC Publication",
    es: "Tratado de Cirugía de la Columna Vertebral | Obra Oficial SBC",
  };

  const descriptions = {
    pt: "Plataforma digital e científica da maior obra de referência em cirurgia espinhal do Brasil. 109 capítulos especializados e coordenação da Sociedade Brasileira de Coluna.",
    en: "Digital and scientific platform of Brazil's foremost reference treatise in spinal surgery. 109 specialized chapters and official guidelines by the Brazilian Spine Society (SBC).",
    es: "Plataforma digital y científica de la mayor obra de referencia en cirugía espinal de Brasil. 109 capítulos especializados y directrices oficiales de la Sociedad Brasileña de Columna (SBC).",
  };

  const currentTitle = titles[locale as keyof typeof titles] || titles.pt;
  const currentDesc = descriptions[locale as keyof typeof descriptions] || descriptions.pt;

  return {
    title: {
      default: currentTitle,
      template: `%s | ${currentTitle}`,
    },
    description: currentDesc,
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : locale === "es" ? "es_ES" : "pt_BR",
      url: `https://livro-sbc.vercel.app/${locale}`,
      siteName: "Tratado de Cirurgia da Coluna Vertebral - SBC",
      title: currentTitle,
      description: currentDesc,
      images: [
        {
          url: "https://livro-sbc.vercel.app/assets/og-cover.png",
          width: 1200,
          height: 630,
          type: "image/png",
          alt: "Tratado de Cirurgia da Coluna Vertebral - Sociedade Brasileira de Coluna (SBC)",
        },
        {
          url: "https://livro-sbc.vercel.app/assets/book-cover.png",
          width: 964,
          height: 1244,
          type: "image/png",
          alt: "Capa Oficial do Tratado de Cirurgia da Coluna Vertebral - SBC",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: currentTitle,
      description: currentDesc,
      images: [
        "https://livro-sbc.vercel.app/assets/og-cover.png",
        "https://livro-sbc.vercel.app/assets/book-cover.png",
      ],
    },
  };
}

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";

  return (
    <>
      <div className="pb-16 md:pb-0 min-h-screen flex flex-col justify-between">
        <div className="flex-1">
          {children}
        </div>
      </div>
      <MobileBottomNav locale={locale} />
    </>
  );
}
