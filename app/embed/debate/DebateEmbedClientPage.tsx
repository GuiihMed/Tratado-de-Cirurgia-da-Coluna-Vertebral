"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { Locale } from "@/lib/types";
import DebateClassicClientView from "@/components/DebateClassicClientView";

export default function DebateEmbedClientPage() {
  const searchParams = useSearchParams();
  
  const epParam = searchParams.get("ep");
  const initialEp = epParam ? parseInt(epParam, 10) || 1 : 1;

  const rawLocale = searchParams.get("locale");
  const locale: Locale = rawLocale && ["pt", "en", "es"].includes(rawLocale) ? (rawLocale as Locale) : "pt";

  return (
    <main
      className="w-full min-h-screen bg-[#f8fafc] py-2.5 sm:py-6 md:py-8 overflow-x-hidden"
      style={{
        margin: 0,
        boxSizing: "border-box",
      }}
    >
      <DebateClassicClientView
        initialEpisodeNumber={initialEp}
        locale={locale}
        isEmbed={true}
      />
    </main>
  );
}
