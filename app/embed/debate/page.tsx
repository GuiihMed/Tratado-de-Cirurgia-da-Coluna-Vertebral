import React, { Suspense } from "react";
import type { Metadata } from "next";
import DebateEmbedClientPage from "./DebateEmbedClientPage";

export const metadata: Metadata = {
  title: "Tratado em Debate • SBC (Player Oficial)",
  description: "Widget oficial para incorporação do videocast científico Tratado em Debate da Sociedade Brasileira de Coluna (SBC).",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DebateEmbedPage() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: "100vh",
            background: "#f8fafc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#001733",
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
