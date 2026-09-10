import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Locale } from "@/lib/types";
import DebateEmbedClientPage from "@/app/embed/debate/DebateEmbedClientPage";

export function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }, { locale: "es" }];
}

export const metadata: Metadata = {
  title: "Tratado em Debate • SBC (Player Oficial)",
  description: "Widget oficial para incorporação do videocast científico Tratado em Debate da Sociedade Brasileira de Coluna (SBC).",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LocalizedDebateEmbedPage() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: "100vh",
            background: "#001026",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            fontFamily: "sans-serif",
            fontSize: "14px",
          }}
        >
          Carregando Tratado em Debate...
        </div>
      }
    >
      <DebateEmbedClientPage />
    </Suspense>
  );
}
