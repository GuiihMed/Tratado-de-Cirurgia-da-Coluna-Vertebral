import type { Metadata } from "next";
import ModernHeader from "@/components/modern/ModernHeader";
import ModernFooter from "@/components/modern/ModernFooter";
import { Locale } from "@/lib/types";
import { getUnifiedAnalytics } from "@/lib/services/analytics";
import AnalyticsDashboard from "@/components/analytics/AnalyticsDashboard";

export const revalidate = 60; // ISR cache for 60 seconds

interface AnalyticsPageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({
  params,
}: AnalyticsPageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";

  const titles = {
    pt: "Relatório de Analytics New | Tratado de Cirurgia da Coluna SBC",
    en: "Analytics New Report | Treatise on Spine Surgery SBC",
    es: "Informe de Analítica New | Tratado de Cirugía de Columna SBC",
  };

  const descriptions = {
    pt: "Painel executivo New de audiência, engajamento e métricas integradas de Google Analytics 4 e Spotify Podcasts para o Tratado de Coluna.",
    en: "Executive New audience, engagement, and integrated metrics dashboard from Google Analytics 4 and Spotify Podcasts.",
    es: "Panel ejecutivo New de audiencia, compromiso y métricas integradas de Google Analytics 4 y Spotify Podcasts.",
  };

  return {
    title: titles[locale] || titles.pt,
    description: descriptions[locale] || descriptions.pt,
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: `https://www.tratadodecoluna.com.br/${locale}/analytics`,
    },
  };
}

export default async function AnalyticsPage({ params }: AnalyticsPageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";

  const initialData = await getUnifiedAnalytics("30d");

  return (
    <div className="min-h-screen flex flex-col bg-[#021226] text-white">
      <ModernHeader locale={locale} currentPage="other" />
      <div className="flex-1">
        <AnalyticsDashboard initialData={initialData} locale={locale} />
      </div>
      <ModernFooter locale={locale} />
    </div>
  );
}
