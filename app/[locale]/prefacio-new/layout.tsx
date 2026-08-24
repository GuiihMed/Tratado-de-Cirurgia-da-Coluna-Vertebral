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
    pt: "Prefácio de Honra | Tratado de Cirurgia da Coluna Vertebral",
    en: "Honorary Preface | Treatise on Spine Surgery SBC",
    es: "Prefacio de Honor | Tratado de Cirugía de la Columna Vertebral",
  };

  const descriptions = {
    pt: "Prefácio de honra da Sociedade Brasileira de Coluna (SBC). Uma homenagem aos pioneiros, à evolução cirúrgica espinhal e ao compromisso ético e humanitário da medicina nacional.",
    en: "Honorary preface of the Brazilian Spine Society (SBC). A tribute to pioneers, surgical evolution, and the highest standards of spine healthcare in Brazil.",
    es: "Prefacio de honor de la Sociedad Brasileña de Columna (SBC). Un tributo a los pioneros, la evolución quirúrgica y el compromiso ético de la medicina espinal.",
  };

  const currentTitle = titles[locale] || titles.pt;
  const currentDesc = descriptions[locale] || descriptions.pt;
  const pageUrl = `https://www.tratadodecoluna.com.br/${locale}/prefacio-new`;

  return {
    title: currentTitle,
    description: currentDesc,
    keywords: [
      "Prefácio",
      "Prefácio de Honra",
      "Tratado de Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna",
      "SBC",
      "História da Cirurgia de Coluna",
    ],
    alternates: {
      canonical: pageUrl,
      languages: {
        pt: "https://www.tratadodecoluna.com.br/pt/prefacio-new",
        en: "https://www.tratadodecoluna.com.br/en/prefacio-new",
        es: "https://www.tratadodecoluna.com.br/es/prefacio-new",
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
          url: "https://www.tratadodecoluna.com.br/assets/og-cover.png",
          width: 1200,
          height: 630,
          type: "image/png",
          alt: "Prefácio do Tratado de Cirurgia da Coluna Vertebral - SBC",
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

export default function PrefacioNewLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
