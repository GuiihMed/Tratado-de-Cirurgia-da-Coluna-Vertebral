import type { Metadata } from "next";
import { ReactNode } from "react";
import { Locale } from "@/lib/types";

interface HomeNewLayoutProps {
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
    pt: "Tratado de Cirurgia da Coluna Vertebral | Edição Digital Oficial SBC",
    en: "Treatise on Spine Surgery | Official SBC Digital Edition",
    es: "Tratado de Cirugía de la Columna Vertebral | Edición Digital Oficial SBC",
  };

  const descriptions = {
    pt: "Plataforma científica digital do Tratado de Coluna da Sociedade Brasileira de Coluna. 109 capítulos especializados, videocast oficial Tratado em Debate, atlas cirúrgico e corpo autoral de excelência.",
    en: "Official scientific digital platform of the Brazilian Spine Society (SBC) Treatise. 109 specialized chapters, official videocast, surgical atlas, and world-class faculty.",
    es: "Plataforma científica digital del Tratado de Columna de la Sociedad Brasileña de Columna (SBC). 109 capítulos especializados, videocast oficial, atlas quirúrgico y cuerpo autoral de excelencia.",
  };

  const currentTitle = titles[locale] || titles.pt;
  const currentDesc = descriptions[locale] || descriptions.pt;
  const pageUrl = `https://www.tratadodecoluna.com.br/${locale}/home-new`;

  return {
    title: currentTitle,
    description: currentDesc,
    keywords: [
      "Tratado de Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna",
      "SBC",
      "Tratado em Debate",
      "Videocast SBC",
      "Cirurgia de Coluna",
      "109 Capítulos",
      "Equilíbrio Sagital",
      "Deformidades da Coluna",
      "Edson Pudles",
      "Helton Defino",
    ],
    alternates: {
      canonical: pageUrl,
      languages: {
        pt: "https://www.tratadodecoluna.com.br/pt/home-new",
        en: "https://www.tratadodecoluna.com.br/en/home-new",
        es: "https://www.tratadodecoluna.com.br/es/home-new",
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
          alt: "Tratado de Cirurgia da Coluna Vertebral - Sociedade Brasileira de Coluna (SBC)",
        },
        {
          url: "https://www.tratadodecoluna.com.br/assets/capa-tratado-da-coluna.svg",
          width: 964,
          height: 1244,
          type: "image/png",
          alt: "Capa do Livro Tratado de Cirurgia da Coluna Vertebral",
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

export default function HomeNewLayout({ children }: HomeNewLayoutProps) {
  return <>{children}</>;
}
