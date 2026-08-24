"use client";

import { use, useState } from "react";
import Link from "next/link";
import ModernHeader from "@/components/modern/ModernHeader";
import ModernFooter from "@/components/modern/ModernFooter";
import { Locale } from "@/lib/types";
import { getApresentacaoData } from "@/lib/data/institutional-data";
import {
  BookOpen,
  ShoppingCart,
  FileText,
  Layers,
  ChevronRight,
  ExternalLink,
  Award,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

interface ApresentacaoNewProps {
  params: Promise<{ locale: string }>;
}

export default function ApresentacaoNewPage({ params }: ApresentacaoNewProps) {
  const resolvedParams = use(params);
  const rawLocale = resolvedParams.locale;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";
  const APRESENTACAO_DATA = getApresentacaoData(locale);

  const [fontSizeMultiplier, setFontSizeMultiplier] = useState<number>(1);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000c1e",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <ModernHeader locale={locale} />

      <main style={{ flex: 1 }}>
        {/* ================= HERO SECTION ================= */}
        <section
          style={{
            position: "relative",
            padding: "140px 24px 70px",
            background:
              "radial-gradient(circle at 12% 35%, rgba(220, 20, 45, 0.6) 0%, transparent 45%), linear-gradient(105deg, #a80f22 0%, #2f193e 24%, #052b5b 54%, #005a9c 100%)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            overflow: "hidden",
          }}
        >
          <img src="/assets/hero-spine.png" alt="" className="absolute right-0 top-0 h-full w-auto max-w-[62%] object-contain pointer-events-none opacity-25 hidden md:block" style={{ mixBlendMode: "screen", filter: "contrast(1.2) brightness(1.1)" }} /><div style={{ maxWidth: 1240, margin: "0 auto", position: "relative", zIndex: 2 }}>
            {/* Breadcrumb */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                color: "#94a3b8",
                marginBottom: 32,
              }}
            >
              <Link
                href={`/${locale}/home-new`}
                style={{ color: "#94a3b8", textDecoration: "none" }}
              >
                {locale === "en" ? "Home" : locale === "es" ? "Inicio" : "Início"}
              </Link>
              <span>›</span>
              <span style={{ color: "#cbd5e1" }}>
                {locale === "en" ? "The Treatise" : locale === "es" ? "El Tratado" : "O Tratado"}
              </span>
              <span>›</span>
              <span style={{ color: "#f52238", fontWeight: 700 }}>
                {locale === "en" ? "Presentation" : locale === "es" ? "Presentación" : "Apresentação"}
              </span>
            </div>

            {/* Hero Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: 48,
                alignItems: "center",
              }}
            >
              {/* Book Cover */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      position: "absolute",
                      inset: -12,
                      background: "linear-gradient(135deg, rgba(245, 34, 56, 0.35), rgba(14, 101, 162, 0.35))",
                      borderRadius: 20,
                      filter: "blur(28px)",
                      zIndex: 0,
                    }}
                  />
                  <img
                    src="/assets/capa-tratado-da-coluna.svg"
                    alt="Tratado de Cirurgia da Coluna Vertebral"
                    style={{
                      position: "relative",
                      zIndex: 1,
                      width: "100%",
                      maxWidth: 280,
                      height: "auto",
                      filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.7))",
                    }}
                  />
                </div>
              </div>

              {/* Text Info */}
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "6px 14px",
                    borderRadius: 20,
                    background: "rgba(245, 34, 56, 0.15)",
                    border: "1px solid rgba(245, 34, 56, 0.35)",
                    color: "#ff8290",
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    width: "fit-content",
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#f52238",
                      boxShadow: "0 0 10px #f52238",
                    }}
                  />
                  {APRESENTACAO_DATA.badge}
                </div>

                <h1
                  style={{
                    fontSize: "clamp(30px, 4.5vw, 48px)",
                    fontWeight: 700,
                    lineHeight: 1.15,
                    letterSpacing: "-0.03em",
                    margin: 0,
                    color: "#ffffff",
                  }}
                >
                  {APRESENTACAO_DATA.titulo}
                </h1>

                <p
                  style={{
                    fontSize: "clamp(16px, 1.8vw, 19px)",
                    color: "#cbd5e1",
                    lineHeight: 1.6,
                    margin: 0,
                    fontWeight: 400,
                  }}
                >
                  {APRESENTACAO_DATA.subtitulo}
                </p>

                {/* Author badge */}
                {APRESENTACAO_DATA.autor && (
                  <Link
                    href={`/${locale}/autor-new/${APRESENTACAO_DATA.autor.slug || "elcio-landim"}`}
                    style={{
                      padding: "16px 20px",
                      borderRadius: 14,
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      backdropFilter: "blur(12px)",
                      textDecoration: "none",
                      color: "inherit",
                      display: "block",
                      transition: "all 0.2s ease",
                    }}
                    className="hover:border-red-500/50 hover:bg-white/10"
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                      <span style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>
                        {APRESENTACAO_DATA.autor.nome}
                      </span>
                      <span style={{ fontSize: 12, color: "#ff8290", fontWeight: 600 }}>
                        {locale === "en" ? "View Profile →" : locale === "es" ? "Ver Perfil →" : "Ver Perfil →"}
                      </span>
                    </div>
                    <div style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.5 }}>
                      {APRESENTACAO_DATA.autor.titulos.join(" • ")}
                    </div>
                  </Link>
                )}

                {/* Print Notice Box */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "14px 18px",
                    borderRadius: 12,
                    background: "rgba(0, 34, 77, 0.4)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                  }}
                >
                  <BookOpen size={22} color="#f52238" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: 13.5, color: "#e2e8f0", lineHeight: 1.4 }}>
                    {APRESENTACAO_DATA.avisoImpresso}
                  </span>
                </div>

                {/* Action Buttons */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12, paddingTop: 6 }}>
                  <a
                    href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "14px 24px",
                      borderRadius: 12,
                      background: "linear-gradient(135deg, #f52238 0%, #be123c 100%)",
                      color: "#fff",
                      fontSize: 14,
                      fontWeight: 700,
                      textDecoration: "none",
                      boxShadow: "0 8px 24px rgba(245, 34, 56, 0.35)",
                    }}
                  >
                    <span>{locale === "en" ? "Purchase Printed Book" : locale === "es" ? "Comprar Libro Impreso" : "Adquirir Livro Impresso"}</span>
                    <ShoppingCart size={16} />
                  </a>

                  <Link
                    href={`/${locale}/prefacio-new`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "14px 20px",
                      borderRadius: 12,
                      background: "rgba(255, 255, 255, 0.08)",
                      border: "1px solid rgba(255, 255, 255, 0.16)",
                      color: "#e2e8f0",
                      fontSize: 14,
                      fontWeight: 650,
                      textDecoration: "none",
                    }}
                  >
                    <span>{locale === "en" ? "View Preface" : locale === "es" ? "Ver Prefacio" : "Ver Prefácio"}</span>
                    <FileText size={16} />
                  </Link>

                  <Link
                    href={`/${locale}/indice-new`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "14px 20px",
                      borderRadius: 12,
                      background: "rgba(255, 255, 255, 0.08)",
                      border: "1px solid rgba(255, 255, 255, 0.16)",
                      color: "#e2e8f0",
                      fontSize: 14,
                      fontWeight: 650,
                      textDecoration: "none",
                    }}
                  >
                    <span>{locale === "en" ? "Explore Index" : locale === "es" ? "Explorar Índice" : "Explorar Índice"}</span>
                    <Layers size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= MAIN BODY CONTENT ================= */}
        <section style={{ maxWidth: 1240, margin: "0 auto", padding: "60px 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 36,
              alignItems: "start",
            }}
          >
            {/* Reading Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: 32, gridColumn: "span 2" }}>
              {/* Reading Card */}
              <div
                style={{
                  padding: "36px 40px",
                  borderRadius: 20,
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* Header Controls */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingBottom: 24,
                    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                    marginBottom: 28,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: "rgba(245, 34, 56, 0.15)",
                        color: "#f52238",
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      <FileText size={20} />
                    </div>
                    <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0, color: "#fff" }}>
                      {locale === "en" ? "Official Presentation Text" : locale === "es" ? "Texto Oficial de la Presentación" : "Texto Oficial da Apresentação"}
                    </h2>
                  </div>

                  {/* Size toggles */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      background: "rgba(0, 0, 0, 0.4)",
                      padding: 4,
                      borderRadius: 10,
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    {[0.9, 1, 1.15].map((multiplier, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setFontSizeMultiplier(multiplier)}
                        style={{
                          padding: "4px 10px",
                          borderRadius: 6,
                          background: fontSizeMultiplier === multiplier ? "#f52238" : "transparent",
                          color: fontSizeMultiplier === multiplier ? "#fff" : "#94a3b8",
                          border: "none",
                          fontSize: 12,
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                      >
                        {idx === 0 ? "A-" : idx === 1 ? "A" : "A+"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Paragraphs */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 22,
                    fontSize: `${17 * fontSizeMultiplier}px`,
                    color: "#d1d5db",
                    lineHeight: 1.8,
                    fontWeight: 350,
                  }}
                >
                  {APRESENTACAO_DATA.paragrafos.map((p, idx) => (
                    <p key={idx} style={{ margin: 0 }}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              {/* Central Message Highlight */}
              {APRESENTACAO_DATA.mensagemCentral && (
                <div
                  style={{
                    padding: "32px 36px",
                    borderRadius: 16,
                    background: "linear-gradient(135deg, rgba(245, 34, 56, 0.12) 0%, rgba(14, 101, 162, 0.12) 100%)",
                    border: "1px solid rgba(245, 34, 56, 0.25)",
                    borderLeft: "6px solid #f52238",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  <div style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", color: "#ff8290", letterSpacing: "0.05em" }}>
                    {locale === "en" ? "Core Message" : locale === "es" ? "Mensaje Central" : "Mensagem Central"}
                  </div>
                  <div style={{ fontSize: 18, fontStyle: "italic", lineHeight: 1.6, color: "#f8fafc" }}>
                    "{APRESENTACAO_DATA.mensagemCentral}"
                  </div>
                </div>
              )}

              {/* Destaques Grid */}
              {APRESENTACAO_DATA.destaques && APRESENTACAO_DATA.destaques.length > 0 && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: 16,
                  }}
                >
                  {APRESENTACAO_DATA.destaques.map((d, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: 22,
                        borderRadius: 14,
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <Sparkles size={18} color="#f52238" />
                        <strong style={{ fontSize: 15, color: "#fff" }}>{d.titulo}</strong>
                      </div>
                      <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.5, margin: 0 }}>
                        {d.descricao}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {/* Book Overview KPI Card */}
              <div
                style={{
                  padding: 28,
                  borderRadius: 18,
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 16px", color: "#fff" }}>
                  {locale === "en" ? "Publication Details" : locale === "es" ? "Datos de Publicación" : "Dados da Publicação"}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                    <span style={{ color: "#94a3b8" }}>{locale === "en" ? "Chapters" : locale === "es" ? "Capítulos" : "Capítulos"}</span>
                    <strong style={{ color: "#fff" }}>{locale === "en" ? "109 Chapters" : locale === "es" ? "109 Capítulos" : "109 Capítulos"}</strong>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                    <span style={{ color: "#94a3b8" }}>{locale === "en" ? "Thematic Sections" : locale === "es" ? "Secciones Temáticas" : "Seções Temáticas"}</span>
                    <strong style={{ color: "#fff" }}>{locale === "en" ? "10 Sections" : locale === "es" ? "10 Secciones" : "10 Seções"}</strong>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                    <span style={{ color: "#94a3b8" }}>{locale === "en" ? "Authors & Specialists" : locale === "es" ? "Autores y Especialistas" : "Autores e Colaboradores"}</span>
                    <strong style={{ color: "#fff" }}>{locale === "en" ? "204 Specialists" : locale === "es" ? "204 Especialistas" : "204 Especialistas"}</strong>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                    <span style={{ color: "#94a3b8" }}>{locale === "en" ? "Official Seal" : locale === "es" ? "Sello Oficial" : "Chancela Oficial"}</span>
                    <strong style={{ color: "#f52238" }}>SBC & DiLivros</strong>
                  </div>
                </div>

                <a
                  href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    marginTop: 20,
                    padding: "12px 16px",
                    borderRadius: 10,
                    background: "rgba(245, 34, 56, 0.15)",
                    border: "1px solid rgba(245, 34, 56, 0.3)",
                    color: "#ff8290",
                    fontSize: 13,
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  <span>{locale === "en" ? "Purchase at DiLivros" : locale === "es" ? "Comprar en DiLivros" : "Adquirir no site da DiLivros"}</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Autor da Apresentação */}
              <div
                style={{
                  padding: 28,
                  borderRadius: 18,
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 16px", color: "#fff" }}>
                  {locale === "en" ? "Author of Presentation" : locale === "es" ? "Autor de la Presentación" : "Autor da Apresentação"}
                </h3>
                <Link
                  href={`/${locale}/autor-new/${APRESENTACAO_DATA.autor.slug || "elcio-landim"}`}
                  style={{ display: "flex", gap: 14, textDecoration: "none", color: "inherit", alignItems: "center" }}
                  className="hover:opacity-85 transition-opacity"
                >
                  <img
                    src={APRESENTACAO_DATA.autor.foto_url}
                    alt={APRESENTACAO_DATA.autor.nome}
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 12,
                      objectFit: "cover",
                      border: "2px solid rgba(245, 34, 56, 0.4)",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <h4 style={{ margin: "0 0 4px", fontSize: 15, fontWeight: 700, color: "#fff" }}>
                      {APRESENTACAO_DATA.autor.nome}
                    </h4>
                    <p style={{ margin: 0, fontSize: 12, color: "#94a3b8", lineHeight: 1.35 }}>
                      {locale === "en" ? "Former SBC President (1987–1988) • View Profile →" : locale === "es" ? "Ex-Presidente de la SBC (1987–1988) • Ver Perfil →" : "Ex-Presidente da SBC (1987–1988) • Ver Perfil do Autor →"}
                    </p>
                  </div>
                </Link>
              </div>

              {/* Navigation Jump Card */}
              <div
                style={{
                  padding: 28,
                  borderRadius: 18,
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 16px", color: "#fff" }}>
                  {locale === "en" ? "Quick Navigation" : locale === "es" ? "Navegación Rápida" : "Navegação Rápida"}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <Link
                    href={`/${locale}/prefacio-new`}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "10px 14px",
                      borderRadius: 8,
                      background: "rgba(255, 255, 255, 0.03)",
                      color: "#cbd5e1",
                      textDecoration: "none",
                      fontSize: 13.5,
                      fontWeight: 600,
                    }}
                  >
                    <span>{locale === "en" ? "Editors' Preface" : locale === "es" ? "Prefacio de los Editores" : "Prefácio dos Editores"}</span>
                    <ChevronRight size={16} color="#94a3b8" />
                  </Link>
                  <Link
                    href={`/${locale}/indice-new`}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "10px 14px",
                      borderRadius: 8,
                      background: "rgba(255, 255, 255, 0.03)",
                      color: "#cbd5e1",
                      textDecoration: "none",
                      fontSize: 13.5,
                      fontWeight: 600,
                    }}
                  >
                    <span>{locale === "en" ? "Full Chapter Index" : locale === "es" ? "Índice Completo de Capítulos" : "Índice Completo de Capítulos"}</span>
                    <ChevronRight size={16} color="#94a3b8" />
                  </Link>
                  <Link
                    href={`/${locale}/autores-new`}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "10px 14px",
                      borderRadius: 8,
                      background: "rgba(255, 255, 255, 0.03)",
                      color: "#cbd5e1",
                      textDecoration: "none",
                      fontSize: 13.5,
                      fontWeight: 600,
                    }}
                  >
                    <span>{locale === "en" ? "Editorial Board & Authors" : locale === "es" ? "Cuerpo Editorial y Autores" : "Corpo Editorial e Autores"}</span>
                    <ChevronRight size={16} color="#94a3b8" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ModernFooter locale={locale} />
    </div>
  );
}
