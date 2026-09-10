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
      style={{
        margin: 0,
        padding: "24px 0 40px",
        minHeight: "100vh",
        background: "#f8fafc",
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
