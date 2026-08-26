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
      url: `https://www.tratadodecoluna.com.br/${locale}`,
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
          url: "https://www.tratadodecoluna.com.br/assets/capa-tratado.png",
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
        "https://www.tratadodecoluna.com.br/assets/og-cover.png",
        "https://www.tratadodecoluna.com.br/assets/capa-tratado.png",
      ],
    },
    verification: {
      google: "nhqkwGi2V-nPklIFwAEOKvqtEJLjYJ_Tt5B8PTtNtTM",
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `https://www.tratadodecoluna.com.br/${locale}#webpage`,
        "url": `https://www.tratadodecoluna.com.br/${locale}`,
        "name": "Tratado de Cirurgia da Coluna Vertebral - Sociedade Brasileira de Coluna (SBC)",
        "description": "Plataforma científica oficial do Tratado de Cirurgia da Coluna Vertebral da Sociedade Brasileira de Coluna (SBC). 109 capítulos, 10 seções temáticas, diretrizes clínicas e videocast oficial.",
        "inLanguage": locale === "en" ? "en-US" : locale === "es" ? "es-ES" : "pt-BR",
        "publisher": {
          "@type": "MedicalOrganization",
          "name": "Sociedade Brasileira de Coluna (SBC)",
          "url": "https://www.tratadodecoluna.com.br",
          "logo": "https://www.tratadodecoluna.com.br/assets/sbc-logo.svg"
        },
        "about": [
          { "@type": "MedicalCondition", "name": "Doenças da Coluna Vertebral" },
          { "@type": "MedicalCondition", "name": "Escoliose" },
          { "@type": "MedicalCondition", "name": "Hérnia Discal" },
          { "@type": "MedicalCondition", "name": "Espondilolistese" },
          { "@type": "MedicalCondition", "name": "Estenose Espinhal" },
          { "@type": "MedicalProcedure", "name": "Cirurgia da Coluna Vertebral" },
          { "@type": "MedicalProcedure", "name": "Artrodese da Coluna Vertebral" },
          { "@type": "MedicalProcedure", "name": "Equilíbrio Sagital Espinopélvico" }
        ]
      },
      {
        "@type": "Book",
        "@id": "https://www.tratadodecoluna.com.br/#book",
        "name": "Tratado de Cirurgia da Coluna Vertebral",
        "isbn": "9788580532920",
        "numberOfPages": 1450,
        "bookFormat": "https://schema.org/Hardcover",
        "inLanguage": ["pt-BR", "en-US", "es-ES"],
        "datePublished": "2024",
        "editor": [
          { "@type": "Person", "name": "Dr. Edson Pudles" },
          { "@type": "Person", "name": "Prof. Dr. Helton Defino" },
          { "@type": "Person", "name": "Dr. Marcelo Risso" }
        ],
        "publisher": {
          "@type": "Organization",
          "name": "Editora DiLivros",
          "url": "https://dilivros.com.br"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "BRL"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "O que é o Tratado de Cirurgia da Coluna Vertebral?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "O Tratado de Cirurgia da Coluna Vertebral é a principal obra científica de referência nacional em cirurgia espinhal, publicada pela Sociedade Brasileira de Coluna (SBC) e Editora DiLivros, composta por 109 capítulos distribuídos em 10 seções temáticas e escrita por mais de 200 especialistas."
            }
          },
          {
            "@type": "Question",
            "name": "Quem são os editores do Tratado de Cirurgia da Coluna Vertebral?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Os editores-chefes da obra são o Dr. Edson Pudles (Presidente e Editor-Chefe), o Prof. Dr. Helton Defino (Professor Titular FMRP-USP) e o Dr. Marcelo Risso (Especialista em Cirurgia da Coluna)."
            }
          },
          {
            "@type": "Question",
            "name": "Onde comprar a edição impressa do Tratado de Cirurgia da Coluna Vertebral?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A edição impressa oficial do Tratado é comercializada exclusivamente pela Editora DiLivros através do link https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html ou pelo canal Fale Conosco em https://dilivros.com.br/fale-conosco."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pb-16 md:pb-0 min-h-screen flex flex-col justify-between">
        <div className="flex-1">
          {children}
        </div>
      </div>
      <MobileBottomNav locale={locale} />
    </>
  );
}
