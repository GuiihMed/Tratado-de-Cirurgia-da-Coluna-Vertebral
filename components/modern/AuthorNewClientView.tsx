"use client";

import { useState } from "react";
import Link from "next/link";
import { Locale } from "@/lib/types";
import { AuthorProfile } from "@/lib/data/authors";
import { BookOpen, Layers, Tag, ArrowRight, Award, Building2 } from "lucide-react";

interface AuthorNewClientViewProps {
  author: AuthorProfile;
  locale: Locale;
}

export default function AuthorNewClientView({ author, locale }: AuthorNewClientViewProps) {
  const [activeTab, setActiveTab] = useState<"bio" | "capitulos">("bio");
  const capitulos = author.capitulos_tratado || [];
  const titulos = author.titulacao_academica || [];

  return (
    <div className="shell" style={{ padding: "40px 0 80px" }}>
      {/* Tab Navigation */}
      <div
        style={{
          display: "flex",
          gap: 12,
          borderBottom: "1px solid #e2e8f0",
          marginBottom: 32,
          paddingBottom: 4,
        }}
      >
        <button
          onClick={() => setActiveTab("bio")}
          style={{
            padding: "12px 24px",
            borderRadius: "12px 12px 0 0",
            border: "none",
            background: activeTab === "bio" ? "#ffffff" : "transparent",
            color: activeTab === "bio" ? "#001a3d" : "#64748b",
            fontWeight: 700,
            fontSize: 15,
            cursor: "pointer",
            borderBottom: activeTab === "bio" ? "3px solid #f52238" : "3px solid transparent",
            display: "flex",
            alignItems: "center",
            gap: 8,
            transition: "all 0.2s ease",
          }}
        >
          <Award size={18} className={activeTab === "bio" ? "text-rose-600" : ""} />
          <span>{locale === "en" ? "Academic Trajectory" : locale === "es" ? "Trayectoria Académica" : "Trajetória Acadêmica"}</span>
        </button>

        <button
          onClick={() => setActiveTab("capitulos")}
          style={{
            padding: "12px 24px",
            borderRadius: "12px 12px 0 0",
            border: "none",
            background: activeTab === "capitulos" ? "#ffffff" : "transparent",
            color: activeTab === "capitulos" ? "#001a3d" : "#64748b",
            fontWeight: 700,
            fontSize: 15,
            cursor: "pointer",
            borderBottom: activeTab === "capitulos" ? "3px solid #f52238" : "3px solid transparent",
            display: "flex",
            alignItems: "center",
            gap: 8,
            transition: "all 0.2s ease",
          }}
        >
          <BookOpen size={18} className={activeTab === "capitulos" ? "text-rose-600" : ""} />
          <span>{locale === "en" ? `Treatise Chapters (${capitulos.length})` : locale === "es" ? `Capítulos del Tratado (${capitulos.length})` : `Capítulos no Tratado (${capitulos.length})`}</span>
        </button>
      </div>

      {/* Tab Content: Trajetória */}
      {activeTab === "bio" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 32 }}>
          <div
            style={{
              background: "#ffffff",
              borderRadius: 20,
              padding: "36px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 10px 30px rgba(0, 20, 60, 0.04)",
            }}
          >
            <h3 style={{ fontSize: 20, fontWeight: 700, color: "#001a3d", margin: "0 0 16px" }}>
              {locale === "en" ? "Biographical Summary" : locale === "es" ? "Resumen Biográfico" : "Resumo Biográfico"}
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "#334155", margin: 0 }}>
              {author.bio_completa || (locale === "en" ? "Renowned spine specialist contributing to the official SBC Treatise." : locale === "es" ? "Reconocido especialista en columna que contribuye al Tratado oficial de la SBC." : "Renomado especialista em cirurgia da coluna vertebral com contribuição de referência no Tratado Oficial da SBC.")}
            </p>

            {titulos.length > 0 && (
              <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid #f1f5f9" }}>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: "#001a3d", margin: "0 0 12px" }}>
                  {locale === "en" ? "Titles & Fellowships" : locale === "es" ? "Títulos y Membresías" : "Títulos & Membros"}
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {titulos.map((t, i) => (
                    <span
                      key={i}
                      style={{
                        padding: "6px 14px",
                        borderRadius: 20,
                        background: "#f1f5f9",
                        border: "1px solid #cbd5e1",
                        fontSize: 13,
                        color: "#001a3d",
                        fontWeight: 600,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            style={{
              background: "#ffffff",
              borderRadius: 20,
              padding: "36px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 10px 30px rgba(0, 20, 60, 0.04)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <h3 style={{ fontSize: 20, fontWeight: 700, color: "#001a3d", margin: 0 }}>
              {locale === "en" ? "Institutional Information" : locale === "es" ? "Información Institucional" : "Informações Institucionais"}
            </h3>

            <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{ width: 42, height: 42, borderRadius: 10, background: "rgba(245, 34, 56, 0.08)", color: "#f52238", display: "grid", placeItems: "center", flexShrink: 0 }}>
                <Building2 size={20} />
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>
                  {locale === "en" ? "Institution" : locale === "es" ? "Institución" : "Instituição Principal"}
                </div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#001a3d", marginTop: 2 }}>
                  {author.instituicao || "Sociedade Brasileira de Coluna"}
                </div>
              </div>
            </div>

            {author.cargo && (
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 42, height: 42, borderRadius: 10, background: "rgba(2, 132, 199, 0.08)", color: "#0284c7", display: "grid", placeItems: "center", flexShrink: 0 }}>
                  <Award size={20} />
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>
                    {locale === "en" ? "Academic Position" : locale === "es" ? "Cargo Académico" : "Cargo Acadêmico"}
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#001a3d", marginTop: 2 }}>
                    {author.cargo}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab Content: Capítulos */}
      {activeTab === "capitulos" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {capitulos.map((cap) => (
            <div
              key={cap.num}
              style={{
                background: "#ffffff",
                borderRadius: 16,
                padding: "24px 28px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 6px 20px rgba(0, 20, 60, 0.03)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 20,
                flexWrap: "wrap",
              }}
            >
              <div>
                <span
                  style={{
                    display: "inline-block",
                    padding: "4px 10px",
                    borderRadius: 8,
                    background: "rgba(245, 34, 56, 0.08)",
                    color: "#f52238",
                    fontSize: 12,
                    fontWeight: 800,
                    marginBottom: 8,
                  }}
                >
                  {locale === "en" ? `Chapter ${cap.num}` : `Capítulo ${cap.num}`}
                </span>
                <h4 style={{ fontSize: 17, fontWeight: 700, color: "#001a3d", margin: "0 0 6px" }}>
                  {cap.titulo}
                </h4>
                <p style={{ fontSize: 13.5, color: "#64748b", margin: 0 }}>
                  {cap.secao_nome || (locale === "en" ? `Section ${cap.secao_id}` : locale === "es" ? `Sección ${cap.secao_id}` : `Seção ${cap.secao_id}`)}
                </p>
              </div>

              <Link
                href={`/${locale}/capitulo-new/${cap.num}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 18px",
                  borderRadius: 10,
                  background: "#001a3d",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: 13.5,
                  fontWeight: 700,
                  transition: "all 0.2s ease",
                }}
              >
                <span>{locale === "en" ? "View Chapter" : locale === "es" ? "Ver Capítulo" : "Ver Capítulo"}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
