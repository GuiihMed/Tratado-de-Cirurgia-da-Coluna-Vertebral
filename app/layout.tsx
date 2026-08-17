import type { Metadata } from "next";
import "./globals.css";
import SvgSprite from "@/components/SvgSprite";

export const metadata: Metadata = {
  title: "Tratado de Cirurgia da Coluna Vertebral",
  description: "Site oficial de apoio à obra impressa Tratado de Cirurgia da Coluna Vertebral.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
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
