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
    pt: "Explore a estrutura científica completa do Tratado de Cirurgia da Coluna Vertebral: 10 seções temáticas, 109 capítulos especializados, anatomia, trauma, deformidades e técnicas cirúrgicas.",
    en: "Explore the full scientific architecture of the SBC Treatise: 10 thematic sections, 109 specialized chapters covering anatomy, trauma, deformities, and surgical techniques.",
    es: "Explore la estructura científica completa del Tratado de la SBC: 10 secciones temáticas, 109 capítulos especializados en anatomía, trauma, deformidades y técnicas quirúrgicas.",
  };

  const currentTitle = titles[locale] || titles.pt;
  const currentDesc = descriptions[locale] || descriptions.pt;
  const pageUrl = `https://www.tratadodecoluna.com.br/${locale}/indice-new`;

  return {
    title: currentTitle,
    description: currentDesc,
    keywords: [
      "Sumário",
      "Índice de Capítulos",
      "109 Capítulos",
      "10 Seções",
      "Tratado de Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna",
      "SBC",
    ],
    alternates: {
      canonical: pageUrl,
      languages: {
        pt: "https://www.tratadodecoluna.com.br/pt/indice-new",
        en: "https://www.tratadodecoluna.com.br/en/indice-new",
        es: "https://www.tratadodecoluna.com.br/es/indice-new",
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
          url: "https://www.tratadodecoluna.com.br/assets/og-cover.png",
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
      images: ["https://www.tratadodecoluna.com.br/assets/og-cover.png"],
    },
  };
}

export default function IndiceNewLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
