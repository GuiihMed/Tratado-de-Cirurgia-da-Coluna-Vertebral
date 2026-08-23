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
    pt: "Sumário Geral & Índice dos 109 Capítulos | Tratado de Coluna SBC",
    en: "Table of Contents & 109 Chapters Index | SBC Spine Treatise",
    es: "Sumario General e Índice de los 109 Capítulos | Tratado SBC",
  };

  const descriptions = {
    pt: "Estrutura editorial e índice completo dos 109 capítulos do Tratado de Cirurgia da Coluna Vertebral da Sociedade Brasileira de Coluna (SBC).",
    en: "Complete editorial index and table of contents of the 109 chapters of the Brazilian Spine Society (SBC) Treatise.",
    es: "Índice editorial completo y sumario de los 109 capítulos del Tratado de Cirugía de la Columna Vertebral de la SBC.",
  };

  const currentTitle = titles[locale] || titles.pt;
  const currentDesc = descriptions[locale] || descriptions.pt;
  const pageUrl = `https://livro-sbc.vercel.app/${locale}/indice`;

  return {
    title: currentTitle,
    description: currentDesc,
    keywords: [
      "Sumário",
      "Índice de Capítulos",
      "109 Capítulos",
      "Tratado de Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna",
      "SBC",
    ],
    alternates: {
      canonical: pageUrl,
      languages: {
        pt: "https://livro-sbc.vercel.app/pt/indice",
        en: "https://livro-sbc.vercel.app/en/indice",
        es: "https://livro-sbc.vercel.app/es/indice",
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
          alt: "Índice dos 109 Capítulos do Tratado de Cirurgia da Coluna Vertebral - SBC",
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

export default function IndiceClassicLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
