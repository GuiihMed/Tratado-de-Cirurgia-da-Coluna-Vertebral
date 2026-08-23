import type { Metadata } from "next";
import { ReactNode } from "react";
import { Locale } from "@/lib/types";

interface LayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";

  const titles = {
    pt: "Central de Referências Bibliográficas | Tratado de Coluna SBC",
    en: "Bibliographic References Database | SBC Spine Surgery Treatise",
    es: "Base de Referencias Bibliográficas | Tratado de Columna SBC",
  };

  const descriptions = {
    pt: "Consulte todas as referências bibliográficas dos 109 capítulos do Tratado de Cirurgia da Coluna Vertebral da Sociedade Brasileira de Coluna (SBC).",
    en: "Browse all bibliographic citations across the 109 chapters of the Brazilian Spine Society (SBC) Treatise.",
    es: "Consulte todas las referencias bibliográficas de los 109 capítulos del Tratado de la SBC.",
  };

  const currentTitle = titles[locale] || titles.pt;
  const currentDesc = descriptions[locale] || descriptions.pt;
  const pageUrl = `https://livro-sbc.vercel.app/${locale}/referencias`;

  return {
    title: currentTitle,
    description: currentDesc,
    keywords: [
      "Referências Bibliográficas",
      "Literatura Científica",
      "PubMed",
      "DOI",
      "Tratado de Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna",
      "SBC",
    ],
    alternates: {
      canonical: pageUrl,
      languages: {
        pt: "https://livro-sbc.vercel.app/pt/referencias",
        en: "https://livro-sbc.vercel.app/en/referencias",
        es: "https://livro-sbc.vercel.app/es/referencias",
      },
    },
    openGraph: {
      type: "website",
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
          alt: "Central de Referências do Tratado de Cirurgia da Coluna Vertebral - SBC",
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

export default function ReferenciasClassicLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
