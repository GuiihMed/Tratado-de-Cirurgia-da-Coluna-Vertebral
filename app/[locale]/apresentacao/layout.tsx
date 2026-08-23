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
    pt: "Apresentação da Obra | Tratado de Cirurgia da Coluna Vertebral",
    en: "Treatise Presentation | Treatise on Spine Surgery SBC",
    es: "Presentación de la Obra | Tratado de Cirugía de la Columna Vertebral",
  };

  const descriptions = {
    pt: "Apresentação oficial pelos Editores-Chefes Dr. Edson Pudles e Dr. Helton L. A. Defino. Concepção editorial, rigor científico e legado do Tratado da Sociedade Brasileira de Coluna.",
    en: "Official presentation by Editors-in-Chief Dr. Edson Pudles and Dr. Helton L. A. Defino. Editorial vision, scientific rigor, and academic legacy of the SBC Treatise.",
    es: "Presentación oficial por los Editores en Jefe Dr. Edson Pudles y Dr. Helton L. A. Defino. Visión editorial, rigor científico y legado del Tratado de la SBC.",
  };

  const currentTitle = titles[locale] || titles.pt;
  const currentDesc = descriptions[locale] || descriptions.pt;
  const pageUrl = `https://livro-sbc.vercel.app/${locale}/apresentacao`;

  return {
    title: currentTitle,
    description: currentDesc,
    keywords: [
      "Apresentação",
      "Edson Pudles",
      "Helton Defino",
      "Tratado de Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna",
      "SBC",
    ],
    alternates: {
      canonical: pageUrl,
      languages: {
        pt: "https://livro-sbc.vercel.app/pt/apresentacao",
        en: "https://livro-sbc.vercel.app/en/apresentacao",
        es: "https://livro-sbc.vercel.app/es/apresentacao",
      },
    },
    openGraph: {
      type: "article",
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
          alt: "Apresentação do Tratado de Cirurgia da Coluna Vertebral - SBC",
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

export default function ApresentacaoClassicLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
