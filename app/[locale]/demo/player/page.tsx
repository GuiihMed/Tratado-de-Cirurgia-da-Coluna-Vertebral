import React from "react";
import type { Metadata } from "next";
import { Locale } from "@/lib/types";
import DemoPlayerClientView from "./DemoPlayerClientView";

export const revalidate = 0;

interface DemoPlayerPageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({
  params,
}: DemoPlayerPageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";

  return {
    title: "Ambiente Demonstrativo • Player Harmonioso SBC | Tratado de Coluna",
    description:
      "Ambiente de demonstração para testar o player de vídeo harmonioso com a identidade visual da SBC mantendo todos os comandos e atalhos nativos do Vimeo.",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function DemoPlayerPage({ params }: DemoPlayerPageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";

  return <DemoPlayerClientView locale={locale} />;
}
