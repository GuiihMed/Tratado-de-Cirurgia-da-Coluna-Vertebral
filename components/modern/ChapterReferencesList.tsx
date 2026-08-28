"use client";

import { useState } from "react";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { Locale } from "@/lib/types";

export interface ChapterReferenceItem {
  num: number;
  text: string;
  doi?: string;
  pmid?: string;
}

interface ChapterReferencesListProps {
  references: ChapterReferenceItem[];
  locale: Locale;
}

export default function ChapterReferencesList({
  references,
  locale,
}: ChapterReferencesListProps) {
  const [expanded, setExpanded] = useState(false);

  const initialLimit = 3;
  const hasMore = references.length > initialLimit;
  const visibleRefs = expanded ? references : references.slice(0, initialLimit);

  const t = {
    pt: {
      title: "Referências Bibliográficas Selecionadas",
      subtitle: "Literatura de alto impacto indexada no PubMed / DOI",
      badge: "Referências",
      showMore: (count: number) => `Ver mais referências (+${count})`,
      showLess: "Ver menos referências",
    },
    en: {
      title: "Selected Bibliographic References",
      subtitle: "High-impact peer-reviewed literature indexed on PubMed / DOI",
      badge: "References",
      showMore: (count: number) => `View more references (+${count})`,
      showLess: "View fewer references",
    },
    es: {
      title: "Referencias Bibliográficas Seleccionadas",
      subtitle: "Literatura de alto impacto indexada en PubMed / DOI",
      badge: "Referencias",
      showMore: (count: number) => `Ver más referencias (+${count})`,
      showLess: "Ver menos referencias",
    },
  }[locale] || {
    title: "Referências Bibliográficas Selecionadas",
    subtitle: "Literatura indexada no PubMed / DOI",
    badge: "Referências",
    showMore: (count: number) => `Ver mais referências (+${count})`,
    showLess: "Ver menos",
  };

  return (
    <article
      id="referencias"
      style={{
        background: "#ffffff",
        borderRadius: 20,
        border: "1px solid #e2e8f0",
        boxShadow: "0 10px 30px rgba(0, 20, 60, 0.05)",
      }}
      className="p-5 sm:p-8"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
          borderBottom: "1px solid #f1f5f9",
          paddingBottom: 16,
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        <div>
          <h3
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#001a3d",
              margin: "0 0 4px",
              fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
            }}
          >
            {t.title}
          </h3>
          <span style={{ fontSize: 13, color: "#64748b" }}>
            {t.subtitle}
          </span>
        </div>
        <span
          style={{
            fontSize: 12,
            fontWeight: 700,
            padding: "4px 12px",
            borderRadius: 12,
            background: "#f1f5f9",
            color: "#475569",
            fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
          }}
        >
          {references.length} {t.badge}
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {visibleRefs.map((ref) => (
          <div
            key={ref.num}
            style={{
              padding: "14px 16px",
              borderRadius: 12,
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              alignItems: "center",
            }}
            className="flex flex-col sm:grid sm:grid-cols-[1fr_auto] gap-3 sm:gap-4"
          >
            <div>
              <div
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.6,
                  color: "#1e293b",
                  fontFamily: "Georgia, serif",
                }}
              >
                <span style={{ fontWeight: 700, color: "#001a3d", marginRight: 6 }}>
                  {ref.num}.
                </span>
                {ref.text}
              </div>
            </div>

            <div style={{ display: "flex", gap: 8, flexShrink: 0 }} className="self-start sm:self-center">
              {ref.doi && (
                <a
                  href={ref.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "6px 12px",
                    borderRadius: 6,
                    border: "1px solid #93c5fd",
                    background: "#eff6ff",
                    color: "#1d4ed8",
                    fontSize: 12,
                    fontWeight: 700,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                  className="hover:bg-blue-100 transition-colors"
                >
                  <span>DOI</span>
                  <ExternalLink size={12} />
                </a>
              )}
              {ref.pmid && (
                <a
                  href={ref.pmid}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "6px 12px",
                    borderRadius: 6,
                    border: "1px solid #86efac",
                    background: "#f0fdf4",
                    color: "#15803d",
                    fontSize: 12,
                    fontWeight: 700,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                  className="hover:bg-green-100 transition-colors"
                >
                  <span>PubMed</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Ver Mais / Ver Menos Button */}
      {hasMore && (
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 22px",
              borderRadius: 12,
              background: expanded ? "rgba(0, 26, 61, 0.08)" : "linear-gradient(135deg, #f52238 0%, #d9142a 100%)",
              color: expanded ? "#001a3d" : "#ffffff",
              border: expanded ? "1px solid #cbd5e1" : "none",
              fontSize: 13.5,
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
              transition: "all 0.2s ease",
              boxShadow: expanded ? "none" : "0 4px 14px rgba(245, 34, 56, 0.35)",
            }}
            className="hover:brightness-105 active:scale-95"
          >
            <span>{expanded ? t.showLess : t.showMore(references.length - initialLimit)}</span>
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      )}
    </article>
  );
}
