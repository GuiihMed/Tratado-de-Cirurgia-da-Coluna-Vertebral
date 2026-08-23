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
    pt: "Aplicativo Oficial SBC | Tratado de Cirurgia da Coluna Vertebral",
    en: "Official Mobile App | SBC Spine Surgery Treatise",
    es: "Aplicación Oficial Móvil | Tratado de Cirugía de la Columna SBC",
  };

  const descriptions = {
    pt: "Baixe o aplicativo móvel do Tratado da Sociedade Brasileira de Coluna (SBC). Consulta rápida dos 109 capítulos, calculadoras espinopélvicas e atlas cirúrgico no iOS e Android.",
    en: "Download the official Brazilian Spine Society (SBC) Treatise mobile app. Fast chapter lookup, spinopelvic calculators, and surgical atlas on iOS and Android.",
    es: "Descargue la aplicación móvil oficial del Tratado de la SBC. Consulta rápida de 109 capítulos, calculadoras espinopélvicas y atlas quirúrgico en iOS y Android.",
  };

  const currentTitle = titles[locale] || titles.pt;
  const currentDesc = descriptions[locale] || descriptions.pt;
  const pageUrl = `https://livro-sbc.vercel.app/${locale}/app`;

  return {
    title: currentTitle,
    description: currentDesc,
    keywords: [
      "Aplicativo SBC",
      "App Tratado de Coluna",
      "Calculadoras Espinopélvicas",
      "Atlas de Cirurgia da Coluna",
      "iOS",
      "Android",
      "Sociedade Brasileira de Coluna",
    ],
    alternates: {
      canonical: pageUrl,
      languages: {
        pt: "https://livro-sbc.vercel.app/pt/app",
        en: "https://livro-sbc.vercel.app/en/app",
        es: "https://livro-sbc.vercel.app/es/app",
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
          alt: "Aplicativo Oficial do Tratado de Cirurgia da Coluna Vertebral - SBC",
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

export default function AppLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
