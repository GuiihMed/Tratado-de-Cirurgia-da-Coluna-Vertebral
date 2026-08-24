import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import "./globals.css";
import SvgSprite from "@/components/SvgSprite";
import GlobalScrollRestorer from "@/components/GlobalScrollRestorer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#001026",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tratadodecoluna.com.br"),
  title: {
    default: "Tratado de Cirurgia da Coluna Vertebral | Sociedade Brasileira de Coluna (SBC)",
    template: "%s | Tratado de Cirurgia da Coluna Vertebral",
  },
  description:
    "Obra oficial de referência nacional da Sociedade Brasileira de Coluna (SBC). 109 capítulos especializados, 10 seções temáticas, diretrizes clínicas e produção científica dos maiores cirurgiões de coluna do Brasil.",
  applicationName: "Tratado de Cirurgia da Coluna Vertebral",
  keywords: [
    "Tratado de Cirurgia da Coluna Vertebral",
    "Sociedade Brasileira de Coluna",
    "SBC",
    "Cirurgia de Coluna",
    "Ortopedia Espinhal",
    "Neurocirurgia",
    "Equilíbrio Sagital",
    "Escoliose Idiopática",
    "Fixação Pedicular",
    "Edson Pudles",
    "Helton Defino",
    "Marcelo Risso",
  ],
  authors: [
    { name: "Sociedade Brasileira de Coluna (SBC)", url: "https://coluna.org.br" },
    { name: "Dr. Edson Pudles" },
    { name: "Dr. Helton Defino" },
    { name: "Dr. Marcelo Risso" },
  ],
  creator: "Sociedade Brasileira de Coluna (SBC)",
  publisher: "Sociedade Brasileira de Coluna (SBC)",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: ["en_US", "es_ES"],
    url: "https://www.tratadodecoluna.com.br",
    siteName: "Tratado de Cirurgia da Coluna Vertebral - SBC",
    title: "Tratado de Cirurgia da Coluna Vertebral | Obra Oficial SBC",
    description:
      "Plataforma digital e científica da maior obra de referência em cirurgia espinhal do Brasil. 109 capítulos especializados, diretrizes clínicas e coordenação da Sociedade Brasileira de Coluna.",
    images: [
      {
        url: "https://www.tratadodecoluna.com.br/assets/og-cover.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Tratado de Cirurgia da Coluna Vertebral - Sociedade Brasileira de Coluna (SBC)",
      },
      {
        url: "https://www.tratadodecoluna.com.br/assets/book-cover.png",
        width: 964,
        height: 1244,
        type: "image/png",
        alt: "Capa Oficial do Livro Tratado de Cirurgia da Coluna Vertebral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tratado de Cirurgia da Coluna Vertebral | Sociedade Brasileira de Coluna (SBC)",
    description:
      "Obra oficial de referência médica nacional com 109 capítulos especializados e diretrizes científicas da SBC.",
    images: [
      "https://www.tratadodecoluna.com.br/assets/og-cover.png",
      "https://www.tratadodecoluna.com.br/assets/book-cover.png",
    ],
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
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta property="og:image" content="https://www.tratadodecoluna.com.br/assets/og-cover.png" />
        <meta property="og:image:secure_url" content="https://www.tratadodecoluna.com.br/assets/og-cover.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Capa Oficial do Tratado de Cirurgia da Coluna Vertebral - SBC" />
        <meta name="twitter:image" content="https://www.tratadodecoluna.com.br/assets/og-cover.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Suspense fallback={null}>
          <GlobalScrollRestorer />
        </Suspense>
        <SvgSprite />
        {children}
      </body>
    </html>
  );
}
