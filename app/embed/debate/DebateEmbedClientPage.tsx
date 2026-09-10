"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { Locale } from "@/lib/types";
import DebateEmbedWidget from "@/components/DebateEmbedWidget";

export default function DebateEmbedClientPage() {
  const searchParams = useSearchParams();
  
  const epParam = searchParams.get("ep");
  const initialEp = epParam ? parseInt(epParam, 10) || 2 : 2;

  const rawLocale = searchParams.get("locale");
  const locale: Locale = rawLocale && ["pt", "en", "es"].includes(rawLocale) ? (rawLocale as Locale) : "pt";

  const rawTheme = searchParams.get("theme");
  const theme: "dark" | "light" = rawTheme === "light" ? "light" : "dark";

  const rawPlaylist = searchParams.get("playlist");
  const showPlaylist = rawPlaylist === "false" || rawPlaylist === "0" ? false : true;

  return (
    <main
      style={{
        margin: 0,
        padding: 0,
        minHeight: "100vh",
        background: theme === "light" ? "#f8fafc" : "#001026",
      }}
    >
      <DebateEmbedWidget
        initialEpisodeNumber={initialEp}
        locale={locale}
        theme={theme}
        showPlaylist={showPlaylist}
      />
    </main>
  );
}
