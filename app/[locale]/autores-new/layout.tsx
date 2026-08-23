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
    pt: "Corpo Autoral & Especialistas | Tratado de Cirurgia da Coluna Vertebral",
    en: "Authors & Faculty Directory | SBC Spine Surgery Treatise",
    es: "Cuerpo Autoral y Especialistas | Tratado de Cirugía de la Columna SBC",
  };

  const descriptions = {
    pt: "Conheça os mais de 250 cirurgiões de coluna, neurocirurgiões, ortopedistas e pesquisadores das maiores instituições médicas do Brasil que escreveram o Tratado SBC.",
    en: "Meet the 250+ spine surgeons, neurosurgeons, orthopedists, and researchers from leading medical institutions across Brazil who authored the official SBC Treatise.",
    es: "Conozca a los más de 250 cirujanos de columna, neurocirujanos, ortopedistas e investigadores de las principales instituciones de Brasil que escribieron el Tratado SBC.",
  };

  const currentTitle = titles[locale] || titles.pt;
  const currentDesc = descriptions[locale] || descriptions.pt;
  const pageUrl = `https://livro-sbc.vercel.app/${locale}/autores-new`;

  return {
    title: currentTitle,
    description: currentDesc,
    keywords: [
      "Autores",
      "Corpo Autoral",
      "Especialistas em Coluna",
      "Cirurgiões de Coluna",
      "Sociedade Brasileira de Coluna",
      "SBC",
      "Edson Pudles",
      "Helton Defino",
    ],
    alternates: {
      canonical: pageUrl,
      languages: {
        pt: "https://livro-sbc.vercel.app/pt/autores-new",
        en: "https://livro-sbc.vercel.app/en/autores-new",
        es: "https://livro-sbc.vercel.app/es/autores-new",
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
          alt: "Corpo Autoral do Tratado de Cirurgia da Coluna Vertebral - SBC",
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

export default function AutoresNewLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
