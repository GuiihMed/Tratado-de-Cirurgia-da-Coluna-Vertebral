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
    pt: "Galeria completa dos mais de 250 autores, pesquisadores e cirurgiões especialistas do Tratado de Cirurgia da Coluna Vertebral (SBC).",
    en: "Complete directory of 250+ authors, researchers, and specialist surgeons of the SBC Spine Treatise.",
    es: "Directorio completo de más de 250 autores e investigadores del Tratado de Cirugía de la Columna Vertebral (SBC).",
  };

  const currentTitle = titles[locale] || titles.pt;
  const currentDesc = descriptions[locale] || descriptions.pt;
  const pageUrl = `https://livro-sbc.vercel.app/${locale}/autores`;

  return {
    title: currentTitle,
    description: currentDesc,
    keywords: [
      "Autores",
      "Corpo Autoral",
      "Especialistas em Coluna",
      "Sociedade Brasileira de Coluna",
      "SBC",
    ],
    alternates: {
      canonical: pageUrl,
      languages: {
        pt: "https://livro-sbc.vercel.app/pt/autores",
        en: "https://livro-sbc.vercel.app/en/autores",
        es: "https://livro-sbc.vercel.app/es/autores",
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

export default function AutoresClassicLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
