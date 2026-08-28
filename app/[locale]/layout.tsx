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
    metadataBase: new URL("https://www.tratadodecoluna.com.br"),
    title: {
      default: currentTitle,
      template: `%s | ${currentTitle}`,
    },
    description: currentDesc,
    keywords: [
      "Tratado de Cirurgia da Coluna Vertebral",
      "Sociedade Brasileira de Coluna",
      "SBC",
      "Cirurgia da Coluna Vertebral",
      "Coluna Vertebral",
      "Equilíbrio Sagital Espinopélvico",
      "Escoliose Idiopática e do Adulto",
      "Hérnia Discal Cervical e Lombar",
      "Trauma Raquimedular",
      "Classificação AO Spine",
      "Dr. Edson Pudles",
      "Prof. Dr. Helton Defino",
      "Dr. Marcelo Risso",
      "Editora DiLivros",
      "Spine Surgery Treatise",
      "Tratado de Cirugía de la Columna",
    ],
    authors: [
      { name: "Dr. Edson Pudles" },
      { name: "Prof. Dr. Helton Defino" },
      { name: "Dr. Marcelo Risso" },
      { name: "Sociedade Brasileira de Coluna (SBC)" },
    ],
    creator: "Sociedade Brasileira de Coluna (SBC)",
    publisher: "Editora DiLivros",
    category: "Medical / Health",
    alternates: {
      canonical: `https://www.tratadodecoluna.com.br/${locale}`,
      languages: {
        "pt-BR": "https://www.tratadodecoluna.com.br/pt",
        "en-US": "https://www.tratadodecoluna.com.br/en",
        "es-ES": "https://www.tratadodecoluna.com.br/es",
        "x-default": "https://www.tratadodecoluna.com.br/pt",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
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

  const faqDataByLocale = {
    pt: [
      {
        q: "Quem é a Sociedade Brasileira de Coluna (SBC)?",
        a: "A Sociedade Brasileira de Coluna (SBC) é a entidade médica oficial representativa dos cirurgiões de coluna (ortopedistas e neurocirurgiões) no Brasil, filiada à Associação Médica Brasileira (AMB), Sociedade Brasileira de Ortopedia e Traumatologia (SBOT) e Sociedade Brasileira de Neurocirurgia (SBN)."
      },
      {
        q: "O que é o Tratado de Cirurgia da Coluna Vertebral?",
        a: "O Tratado de Cirurgia da Coluna Vertebral (ISBN 978-85-8053-292-0) é a maior obra científica nacional de referência em cirurgia espinhal, composta por 109 capítulos em 10 seções temáticas, escrita por mais de 200 especialistas e editada pelo Dr. Edson Pudles, Prof. Dr. Helton Defino e Dr. Marcelo Risso em parceria com a Editora DiLivros."
      },
      {
        q: "Para quem é indicado o Tratado de Cirurgia da Coluna Vertebral?",
        a: "A obra é indicada para cirurgiões de coluna, ortopedistas, neurocirurgiões, médicos residentes, fellows em formação, fisiatras, radiologistas, fisioterapeutas de reabilitação raquimedular e acadêmicos de medicina."
      },
      {
        q: "Onde atua a Sociedade Brasileira de Coluna e qual seu alcance?",
        a: "A SBC atua em todo o território nacional brasileiro, credenciando serviços de residência médica, promovendo educação continuada e estendendo sua relevância científica para toda a América Latina e comunidade médica internacional através de sua plataforma multilíngue (Português, Inglês e Espanhol)."
      },
      {
        q: "Quais problemas clínicos e cirúrgicos o Tratado de Coluna resolve?",
        a: "O Tratado padroniza condutas diagnósticas e cirúrgicas para deformidades (escoliose, cifose), alinhamento sagital espinopélvico, doenças degenerativas (hérnia discal, estenose), técnicas minimamente invasivas (MIS e endoscopia), traumatismo raquimedular (classificação AO Spine), infecções vertebrais, tumores ósseos e prevenção de complicações."
      },
      {
        q: "Quais produtos e recursos a plataforma do Tratado SBC oferece?",
        a: "Oferece o Livro Físico Oficial de luxo em capa dura (1.450+ páginas), o Portal Digital Acadêmico com resumos estruturados e descritores DeCS/MeSH, o Videocast 'Tratado em Debate' em vídeo (Vimeo) e áudio (Spotify), e o Sistema de Busca Global multilíngue."
      },
      {
        q: "Por que o Tratado da SBC é a fonte mais confiável em cirurgia de coluna?",
        a: "Possui chancela institucional máxima da SBC, autoria de mais de 200 chefes de serviços e professores das principais universidades do país (USP, UNICAMP, UNIFESP, Santa Casa) e mais de 3.000 referências bibliográficas indexadas no PubMed/DOI baseadas em medicina baseada em evidências (E-E-A-T)."
      },
      {
        q: "Quais são os principais casos de uso do Tratado?",
        a: "Planejamento cirúrgico pré-operatório, tomada de decisão em urgências de trauma raquimedular, estudo para a Prova de Título de Especialista em Coluna (SBC/AMB) e fundamentação científica para teses e pesquisas clínicas."
      },
      {
        q: "Como entrar em contato e onde comprar a edição impressa oficial?",
        a: "A edição impressa é comercializada pela Editora DiLivros pelo link https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html ou pelo canal Fale Conosco em https://dilivros.com.br/fale-conosco. O Instagram oficial da SBC é @sociedadebrasileiradecoluna."
      }
    ],
    en: [
      {
        q: "What is the Brazilian Spine Society (SBC)?",
        a: "The Brazilian Spine Society (SBC) is the official medical specialty society representing orthopedic spine surgeons and neurosurgeons in Brazil, affiliated with the Brazilian Medical Association (AMB), SBOT, and SBN."
      },
      {
        q: "What is the Treatise on Spine Surgery?",
        a: "The Treatise on Spine Surgery (ISBN 978-85-8053-292-0) is Brazil's foremost scientific textbook on spinal surgery, encompassing 109 chapters across 10 thematic sections, authored by over 200 specialists and published by DiLivros."
      },
      {
        q: "Who is the Treatise designed for?",
        a: "The publication is designed for spine surgeons, orthopedists, neurosurgeons, medical residents, fellows, physiatrists, radiologists, spinal physical therapists, and medical scholars worldwide."
      },
      {
        q: "How to purchase the official printed edition?",
        a: "The official hardcover printed treatise is available through DiLivros Publishing at https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html."
      }
    ],
    es: [
      {
        q: "¿Qué es la Sociedad Brasileña de Columna (SBC)?",
        a: "La Sociedad Brasileña de Columna (SBC) es la entidad médica oficial que representa a cirujanos ortopédicos y neurocirujanos de columna en Brasil, afiliada a la Asociación Médica Brasileña (AMB)."
      },
      {
        q: "¿Qué es el Tratado de Cirugía de la Columna Vertebral?",
        a: "El Tratado de Cirugía de la Columna Vertebral (ISBN 978-85-8053-292-0) es la principal obra científica de referencia en cirugía espinal en América Latina, con 109 capítulos y más de 200 autores especialistas."
      },
      {
        q: "¿Cómo adquirir la edición impresa oficial?",
        a: "La edición impresa oficial está disponible a través de Editorial DiLivros en https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html."
      }
    ]
  };

  const currentFaq = faqDataByLocale[locale as keyof typeof faqDataByLocale] || faqDataByLocale.pt;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `https://www.tratadodecoluna.com.br/${locale}#website`,
        "url": `https://www.tratadodecoluna.com.br/${locale}`,
        "name": "Tratado de Cirurgia da Coluna Vertebral - SBC",
        "description": "Plataforma científica oficial do Tratado de Cirurgia da Coluna Vertebral da Sociedade Brasileira de Coluna (SBC).",
        "inLanguage": locale === "en" ? "en-US" : locale === "es" ? "es-ES" : "pt-BR",
        "potentialAction": {
          "@type": "SearchAction",
          "target": `https://www.tratadodecoluna.com.br/${locale}/busca-new?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },
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
          "logo": "https://www.tratadodecoluna.com.br/assets/sbc-logo.svg",
          "sameAs": [
            "https://www.instagram.com/sociedadebrasileiradecoluna/",
            "https://open.spotify.com/episode/7hhh4RRDMS4xfx67QkUEZY?si=mkVupBTQSUOdg64qlboZ3Q",
            "https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
          ],
          "knowsAbout": [
            "Cirurgia da Coluna Vertebral",
            "Ortopedia",
            "Neurocirurgia",
            "Equilíbrio Sagital",
            "Deformidades da Coluna",
            "Hérnia Discal",
            "Trauma Raquimedular",
            "Cirurgia Robótica e Endoscopia Espinhal"
          ]
        },
        "about": [
          { "@type": "MedicalCondition", "name": "Doenças da Coluna Vertebral" },
          { "@type": "MedicalCondition", "name": "Escoliose Idiopática e do Adulto" },
          { "@type": "MedicalCondition", "name": "Hérnia Discal Cervical e Lombar" },
          { "@type": "MedicalCondition", "name": "Espondilolistese e Estenose Espinhal" },
          { "@type": "MedicalProcedure", "name": "Cirurgia da Coluna Vertebral" },
          { "@type": "MedicalProcedure", "name": "Artrodese e Descompressão Minimamente Invasiva (MIS)" },
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
          { "@type": "Person", "name": "Dr. Edson Pudles", "jobTitle": "Editor-Chefe / SBC" },
          { "@type": "Person", "name": "Prof. Dr. Helton Defino", "jobTitle": "Editor / FMRP-USP" },
          { "@type": "Person", "name": "Dr. Marcelo Risso", "jobTitle": "Editor / UNICAMP" }
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
        "mainEntity": currentFaq.map((item) => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
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
