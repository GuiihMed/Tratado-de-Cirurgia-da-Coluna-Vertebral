import type { Metadata, Viewport } from "next";
import "./globals.css";
import SvgSprite from "@/components/SvgSprite";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#001026",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tratado-de-cirurgiada-coluna-verteb.vercel.app"),
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
    url: "https://tratado-de-cirurgiada-coluna-verteb.vercel.app",
    siteName: "Tratado de Cirurgia da Coluna Vertebral - SBC",
    title: "Tratado de Cirurgia da Coluna Vertebral | Obra Oficial SBC",
    description:
      "Plataforma digital e científica da maior obra de referência em cirurgia espinhal do Brasil. 109 capítulos especializados, diretrizes clínicas e coordenação da Sociedade Brasileira de Coluna.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tratado de Cirurgia da Coluna Vertebral | Sociedade Brasileira de Coluna (SBC)",
    description:
      "Obra oficial de referência médica nacional com 109 capítulos especializados e diretrizes científicas da SBC.",
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SvgSprite />
        {children}
      </body>
    </html>
  );
}
