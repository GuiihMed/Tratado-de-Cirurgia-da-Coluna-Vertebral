"use client";

import { use, useState, useMemo } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Locale } from "@/lib/types";
import { EDITORES_TRATADO, TODOS_AUTORES_AZ } from "@/lib/data/institutional-data";

interface AutoresPageProps {
  params: Promise<{ locale: string }>;
}

export default function AutoresPage({ params }: AutoresPageProps) {
  const resolvedParams = use(params);
  const rawLocale = resolvedParams.locale;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";

  const [activeLetter, setActiveLetter] = useState<string>("TODOS");

  const letters = useMemo(() => {
    return ["TODOS", ...Object.keys(TODOS_AUTORES_AZ).sort()];
  }, []);

  const filteredAuthorsAZ = useMemo(() => {
    if (activeLetter === "TODOS") {
      return TODOS_AUTORES_AZ;
    }
    return {
      [activeLetter]: TODOS_AUTORES_AZ[activeLetter] || [],
    };
  }, [activeLetter]);

  return (
    <>
      <Header locale={locale} currentPage="autores" />

      <main style={{ background: "#f8fafc", minHeight: "100vh" }}>
        {/* ========================================================================= */}
        {/* HERO SECTION (Clássica - Autores) */}
        {/* ========================================================================= */}
        <section
          style={{
            position: "relative",
            background: "radial-gradient(ellipse at 70% 30%, #00224d 0%, #00122b 50%, #000917 100%)",
            color: "#fff",
            padding: "48px 0 32px",
            overflow: "hidden",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* Glowing spine illustration background */}
          <div
            style={{
              position: "absolute",
              right: "4%",
              top: 0,
              bottom: 0,
              width: "48%",
              backgroundImage: "url('/assets/hero-spine.png')",
              backgroundPosition: "top right",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              opacity: 0.35,
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "0 24px",
              position: "relative",
              zIndex: 2,
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 48, alignItems: "center" }}>
              {/* 3D Book Cover */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src="/assets/book-cover.png"
                  alt="Tratado de Cirurgia da Coluna Vertebral"
                  style={{
                    width: 260,
                    height: "auto",
                    borderRadius: "6px 14px 14px 6px",
                    boxShadow: "0 24px 50px rgba(0, 0, 0, 0.6), 0 4px 16px rgba(0, 0, 0, 0.4)",
                    transform: "perspective(1000px) rotateY(-8deg)",
                  }}
                />
              </div>

              {/* Hero Info */}
              <div>
                <h1
                  style={{
                    fontSize: "clamp(34px, 5vw, 48px)",
                    fontWeight: 900,
                    margin: "0 0 12px",
                    color: "#fff",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.15,
                  }}
                >
                  {locale === "en" ? "Authors" : locale === "es" ? "Autores" : "Autores"}
                </h1>

                <p
                  style={{
                    fontSize: 16.5,
                    fontWeight: 700,
                    color: "rgba(255, 255, 255, 0.95)",
                    margin: "0 0 12px",
                    lineHeight: 1.45,
                    maxWidth: 700,
                  }}
                >
                  {locale === "en"
                    ? "Meet the editors, authors, and contributors of the Treatise on Spine Surgery."
                    : locale === "es"
                    ? "Conozca a los editores, autores y colaboradores del Tratado de Cirugía de Columna Vertebral."
                    : "Conheça os editores, autores e colaboradores do Tratado de Cirurgia da Coluna Vertebral."}
                </p>

                <p
                  style={{
                    fontSize: 14.5,
                    color: "rgba(255, 255, 255, 0.75)",
                    margin: "0 0 20px",
                    lineHeight: 1.5,
                    maxWidth: 680,
                  }}
                >
                  {locale === "en"
                    ? "The complete masterwork is exclusively available in printed format. This portal organizes authors, chapters, summaries, and references for clinical study."
                    : locale === "es"
                    ? "La obra completa existe exclusivamente en formato impreso. Este portal organiza autores, capítulos, resúmenes y referencias para estudio y consulta."
                    : "A obra completa existe exclusivamente em formato impresso. Este site organiza autores, capítulos, resumos e referências para estudo e consulta."}
                </p>

                {/* Print Notice Box */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "10px 18px",
                    borderRadius: 8,
                    background: "rgba(0, 24, 60, 0.65)",
                    border: "1px solid rgba(255, 255, 255, 0.18)",
                  }}
                >
                  <span style={{ fontSize: 18, color: "#f43f5e" }}>📖</span>
                  <span style={{ fontSize: 13.5, color: "rgba(255, 255, 255, 0.9)" }}>
                    {locale === "en"
                      ? "The complete treatise is exclusively available in printed format."
                      : locale === "es"
                      ? "La obra completa existe exclusivamente en formato impreso."
                      : "A obra completa existe exclusivamente em formato impresso."}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SEÇÃO 1: EDITORES */}
        {/* ========================================================================= */}
        <section style={{ maxWidth: 1200, margin: "48px auto 40px", padding: "0 24px" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: 26,
              fontWeight: 900,
              color: "#001a3d",
              margin: "0 0 32px",
              letterSpacing: "-0.01em",
            }}
          >
            {locale === "en" ? "Editors" : locale === "es" ? "Editores" : "Editores"}
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            {EDITORES_TRATADO.map((editor, idx) => (
              <div
                key={idx}
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  padding: "24px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.05)",
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  transition: "all 0.2s ease",
                }}
              >
                <div
                  style={{
                    width: 90,
                    height: 105,
                    borderRadius: 10,
                    overflow: "hidden",
                    background: "#e2e8f0",
                    border: "1px solid #cbd5e1",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={editor.foto_url}
                    alt={editor.nome}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                <div>
                  <h3 style={{ margin: "0 0 6px", fontSize: 17, fontWeight: 900, color: "#001a3d" }}>
                    <Link
                      href={`/${locale}/autor/${idx === 0 ? "edson-pudles" : idx === 1 ? "helton-defino" : "marcelo-risso"}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                      className="hover:underline hover:text-blue-700"
                    >
                      {editor.nome}
                    </Link>
                  </h3>
                  <p style={{ margin: "0 0 10px", fontSize: 13, color: "#64748b", lineHeight: 1.4 }}>
                    {editor.cargo}
                  </p>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "3px 8px",
                      borderRadius: 4,
                      background: "#f1f5f9",
                      border: "1px solid #e2e8f0",
                      fontSize: 11.5,
                      fontWeight: 700,
                      color: "#475569",
                    }}
                  >
                    <span>ORCID:</span>
                    <span>{editor.orcid}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SEÇÃO 2: AUTORES E COLABORADORES (ORDEM ALFABÉTICA) */}
        {/* ========================================================================= */}
        <section style={{ maxWidth: 1200, margin: "0 auto 64px", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <h2 style={{ fontSize: 24, fontWeight: 900, color: "#001a3d", margin: "0 0 6px" }}>
              {locale === "en" ? "Authors and Contributors" : locale === "es" ? "Autores y Colaboradores" : "Autores e colaboradores"}
            </h2>
            <p style={{ fontSize: 14, color: "#64748b", margin: 0 }}>
              {locale === "en" ? "Alphabetical Order" : locale === "es" ? "Orden Alfabético" : "Ordem alfabética"}
            </p>
          </div>

          {/* Alphabet Filter Pills */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 6,
              marginBottom: 36,
            }}
          >
            {letters.map((letra) => {
              const isSelected = activeLetter === letra;
              return (
                <button
                  key={letra}
                  onClick={() => setActiveLetter(letra)}
                  style={{
                    padding: letra === "TODOS" ? "6px 14px" : "6px 10px",
                    borderRadius: 20,
                    border: isSelected ? "none" : "1px solid #cbd5e1",
                    background: isSelected ? "#002b66" : "#fff",
                    color: isSelected ? "#fff" : "#475569",
                    fontSize: 12.5,
                    fontWeight: 800,
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                    boxShadow: isSelected ? "0 2px 8px rgba(0, 43, 102, 0.25)" : "none",
                  }}
                >
                  {letra === "TODOS" ? (locale === "en" ? "All" : locale === "es" ? "Todos" : "Todos") : letra}
                </button>
              );
            })}
          </div>

          {/* Authors A-Z Grid */}
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: "36px 32px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
              columnCount: 4,
              columnGap: "32px",
            }}
          >
            {Object.entries(filteredAuthorsAZ).map(([letra, lista]) => (
              <div
                key={letra}
                style={{
                  breakInside: "avoid",
                  marginBottom: 28,
                }}
              >
                {/* Letter Header */}
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 900,
                    color: "#e11d48",
                    borderBottom: "1.5px solid #ffe4e6",
                    paddingBottom: 4,
                    marginBottom: 12,
                  }}
                >
                  {letra}
                </div>

                {/* Author Items */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {lista.map((autorNome, aIdx) => (
                    <div
                      key={aIdx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        fontSize: 12.5,
                        color: "#1e293b",
                        fontWeight: 600,
                        lineHeight: 1.35,
                      }}
                    >
                      <span style={{ color: "#0284c7", fontSize: 13, flexShrink: 0 }}>👤</span>
                      <span>{autorNome}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* BOTTOM CTA BANNER */}
        {/* ========================================================================= */}
        <section
          style={{
            maxWidth: 1200,
            margin: "0 auto 60px",
            padding: "0 24px",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #001a3d 0%, #001026 100%)",
              borderRadius: 16,
              padding: "32px 40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
              color: "#fff",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <img
                src="/assets/book-cover.png"
                alt="Livro"
                style={{ width: 70, height: "auto", borderRadius: 4, boxShadow: "0 6px 16px rgba(0,0,0,0.4)" }}
              />
              <div>
                <h3 style={{ fontSize: 19, fontWeight: 900, margin: "0 0 12px", color: "#fff" }}>
                  {locale === "en"
                    ? "A landmark masterwork for clinical practice, study, and reference — exclusively printed."
                    : locale === "es"
                    ? "Una obra de referencia para consulta y estudio — exclusivamente en formato impreso."
                    : "Uma obra para consulta, estudo e referência — exclusivamente em formato impresso."}
                </h3>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap", fontSize: 12.5, color: "rgba(255, 255, 255, 0.8)", marginBottom: 16 }}>
                  <span>✓ {locale === "en" ? "Full content available only in the printed edition" : locale === "es" ? "Contenido completo disponible solo en edición impresa" : "Conteúdo completo disponível apenas na edição impressa"}</span>
                  <span>✓ {locale === "en" ? "Peer-reviewed and continuously updated" : locale === "es" ? "Revisado por especialistas reconocidos" : "Atualização contínua e revista por especialistas"}</span>
                  <span>✓ {locale === "en" ? "Editorial excellence for hospitals and specialists" : locale === "es" ? "Calidad editorial para bibliotecas y profesionales" : "Qualidade editorial para bibliotecas e profissionais"}</span>
                </div>
              </div>
            </div>

            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <p style={{ margin: "0 0 10px", fontSize: 13.5, fontWeight: 700, color: "rgba(255, 255, 255, 0.9)" }}>
                {locale === "en" ? "Acquire your printed edition published by DiLivros and SBC." : locale === "es" ? "Adquiera su edición impresa con la calidad DiLivros y el sello SBC." : "Adquira sua edição impressa com a qualidade DiLivros e o selo da SBC."}
              </p>
              <a
                href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 22px",
                  borderRadius: 8,
                  background: "#e11d48",
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: 14,
                  textDecoration: "none",
                }}
              >
                <span>{locale === "en" ? "Where to Buy" : locale === "es" ? "Dónde Comprar" : "Onde Comprar"}</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
