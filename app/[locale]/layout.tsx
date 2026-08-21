import { ReactNode } from "react";
import { Locale } from "@/lib/types";
import MobileBottomNav from "@/components/MobileBottomNav";

export async function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }, { locale: "es" }];
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

  return (
    <>
      <div className="pb-16 md:pb-0 min-h-screen flex flex-col justify-between">
        <div className="flex-1">
          {children}
        </div>
      </div>
      <MobileBottomNav locale={locale} />
    </>
  );
}
