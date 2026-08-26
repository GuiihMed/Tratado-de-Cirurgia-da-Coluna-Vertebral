"use client";

import { useState } from "react";
import { Locale } from "@/lib/types";

interface VancouverCitationCardProps {
  numero: number;
  referenciaVancouver: string;
  autoresVancouver?: string;
  paginas?: string;
  locale?: Locale;
  variant?: "light" | "dark" | "compact";
}

export default function VancouverCitationCard({
  numero,
  referenciaVancouver,
  autoresVancouver,
  paginas,
  locale = "pt",
  variant = "light",
}: VancouverCitationCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(referenciaVancouver);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const isDark = variant === "dark";
  const isCompact = variant === "compact";

  const titleText =
    locale === "en"
      ? "How to Cite this Chapter (Vancouver Format)"
      : locale === "es"
      ? "Cómo Citar este Capítulo (Formato Vancouver)"
      : "Como Citar este Capítulo (Formato Vancouver)";

  const buttonText = copied
    ? (locale === "en" ? "✓ Citation Copied!" : locale === "es" ? "✓ ¡Cita Copiada!" : "✓ Citação Copiada!")
    : (locale === "en" ? "Copy Vancouver Citation" : locale === "es" ? "Copiar Cita Vancouver" : "Copiar Citação Vancouver");

  if (isCompact) {
    return (
      <div
        style={{
          background: isDark ? "rgba(0, 20, 50, 0.6)" : "#f8fafc",
          border: isDark ? "1px solid rgba(255, 255, 255, 0.12)" : "1px solid #e2e8f0",
          borderRadius: 12,
          padding: "14px 16px",
          marginTop: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, marginBottom: 8 }}>
          <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: isDark ? "#94a3b8" : "#64748b" }}>
            {locale === "en" ? "Vancouver Reference" : locale === "es" ? "Referencia Vancouver" : "Referência Vancouver"}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            style={{
              background: copied ? "#10b981" : isDark ? "rgba(255, 255, 255, 0.1)" : "#ffffff",
              color: copied ? "#ffffff" : isDark ? "#ffffff" : "#001a3d",
              border: isDark ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid #cbd5e1",
              borderRadius: 6,
              padding: "4px 10px",
              fontSize: 11,
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
          >
            {copied ? "✓ Copiado" : "Copiar"}
          </button>
        </div>
        <p style={{ fontSize: 12.5, lineHeight: 1.5, color: isDark ? "#e2e8f0" : "#334155", margin: 0 }}>
          {referenciaVancouver}
        </p>
      </div>
    );
  }

  return (
    <article
      id="citacao-vancouver"
      style={{
        background: isDark
          ? "linear-gradient(135deg, rgba(0, 24, 60, 0.85) 0%, rgba(3, 14, 38, 0.95) 100%)"
          : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
        borderRadius: 16,
        padding: "26px 28px",
        border: isDark ? "1px solid rgba(245, 34, 56, 0.3)" : "1px solid #e2e8f0",
        boxShadow: isDark
          ? "0 12px 36px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.06) inset"
          : "0 8px 28px rgba(0, 30, 80, 0.06)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative accent glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3.5,
          background: "linear-gradient(90deg, #f52238, #0284c7, #10b981)",
        }}
      />

      {/* Header Info */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 14, marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: isDark ? "rgba(245, 34, 56, 0.2)" : "#fee2e2",
              color: "#f52238",
              display: "grid",
              placeItems: "center",
              fontSize: 18,
              fontWeight: 800,
              flexShrink: 0,
            }}
          >
            📑
          </span>
          <div>
            <h3 style={{ fontSize: 16.5, fontWeight: 700, color: isDark ? "#ffffff" : "#001a3d", margin: 0, lineHeight: 1.25 }}>
              {titleText}
            </h3>
            <span style={{ fontSize: 12, color: isDark ? "#94a3b8" : "#64748b", fontWeight: 500 }}>
              {locale === "en"
                ? "Official bibliographic indexing and citation guidelines"
                : locale === "es"
                ? "Indexación bibliográfica oficial y directrices de citación"
                : "Indexação bibliográfica oficial do Tratado SBC"}
            </span>
          </div>
        </div>

        {/* Badges */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
          {paginas && (
            <span
              style={{
                fontSize: 11.5,
                fontWeight: 700,
                padding: "4px 10px",
                borderRadius: 20,
                background: isDark ? "rgba(255, 255, 255, 0.08)" : "#f1f5f9",
                color: isDark ? "#e2e8f0" : "#475569",
                border: isDark ? "1px solid rgba(255, 255, 255, 0.12)" : "1px solid #e2e8f0",
              }}
            >
              📖 {locale === "en" ? "Pages: " : locale === "es" ? "Págs: " : "Páginas: "} {paginas}
            </span>
          )}

          <span
            style={{
              fontSize: 11.5,
              fontWeight: 700,
              padding: "4px 10px",
              borderRadius: 20,
              background: isDark ? "rgba(245, 34, 56, 0.15)" : "#fee2e2",
              color: "#ef4444",
              border: isDark ? "1px solid rgba(245, 34, 56, 0.3)" : "1px solid #fecaca",
            }}
          >
            Vancouver Style
          </span>
        </div>
      </div>

      {/* Author Vancouver Pill (if available) */}
      {autoresVancouver && (
        <div style={{ marginBottom: 12, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <span style={{ fontSize: 11.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.03em", color: isDark ? "#94a3b8" : "#64748b" }}>
            {locale === "en" ? "Authors (Vancouver):" : locale === "es" ? "Autores (Vancouver):" : "Autores (Vancouver):"}
          </span>
          <span
            style={{
              fontSize: 12.5,
              fontWeight: 700,
              color: isDark ? "#38bdf8" : "#0284c7",
              background: isDark ? "rgba(56, 189, 248, 0.1)" : "#f0f9ff",
              padding: "2px 8px",
              borderRadius: 6,
              border: isDark ? "1px solid rgba(56, 189, 248, 0.25)" : "1px solid #bae6fd",
            }}
          >
            {autoresVancouver}
          </span>
        </div>
      )}

      {/* Citation Box */}
      <div
        style={{
          background: isDark ? "rgba(0, 10, 28, 0.65)" : "#f8fafc",
          border: isDark ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid #e2e8f0",
          borderRadius: 12,
          padding: "16px 20px",
          position: "relative",
          marginBottom: 16,
        }}
      >
        <p
          style={{
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
            fontSize: 13,
            lineHeight: 1.6,
            color: isDark ? "#f1f5f9" : "#1e293b",
            margin: 0,
            userSelect: "all",
          }}
        >
          {referenciaVancouver}
        </p>
      </div>

      {/* Action Row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <span style={{ fontSize: 12, color: isDark ? "#94a3b8" : "#64748b" }}>
          ISBN: <strong>978-85-8053-292-0</strong> • 1.ª Edição • Dilivros Editora
        </span>

        <button
          type="button"
          onClick={handleCopy}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 20px",
            borderRadius: 10,
            fontSize: 13,
            fontWeight: 700,
            cursor: "pointer",
            transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            background: copied
              ? "#10b981"
              : isDark
              ? "linear-gradient(135deg, #f52238 0%, #b91c1c 100%)"
              : "#001a3d",
            color: "#ffffff",
            border: "none",
            boxShadow: copied
              ? "0 4px 14px rgba(16, 185, 129, 0.35)"
              : "0 4px 14px rgba(0, 26, 61, 0.25)",
          }}
        >
          <span>{copied ? "✓" : "📋"}</span>
          <span>{buttonText}</span>
        </button>
      </div>
    </article>
  );
}
