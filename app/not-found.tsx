"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Locale } from "@/lib/types";

export default function NotFound() {
  const pathname = usePathname() || "";
  const router = useRouter();
  const [chapterNumInput, setChapterNumInput] = useState("");

  // Determine active locale from pathname
  const segments = pathname.split("/").filter(Boolean);
  const rawLocale = segments[0];
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale) ? (rawLocale as Locale) : "pt";

  const handleChapterJump = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseInt(chapterNumInput.trim(), 10);
    if (!isNaN(num) && num >= 1 && num <= 109) {
      router.push(`/${locale}/capitulo/${num}`);
    }
  };

  const texts = {
    pt: {
      tag: "Erro 404 • Conteúdo Não Localizado",
      title: "Página Não Encontrada",
      desc: "O link ou capítulo que você tentou acessar não foi encontrado, foi alterado ou não existe na plataforma oficial do Tratado de Cirurgia da Coluna Vertebral.",
      jumpLabel: "Ir direto para um capítulo (1 a 109):",
      jumpPlaceholder: "Digite o número do capítulo (ex: 8)...",
      jumpButton: "Acessar Capítulo",
      quickLinksTitle: "Atalhos Rápidos de Navegação",
      homeTitle: "Página Inicial",
      homeDesc: "Voltar para a apresentação oficial da obra e destaques.",
      indiceTitle: "Índice Completo",
      indiceDesc: "Explorar os 109 capítulos organizados em 10 seções temáticas.",
      autoresTitle: "Quadro de Autores",
      autoresDesc: "Consultar os mais de 200 cirurgiões especialistas da SBC.",
      referenciasTitle: "Referências Bibliográficas",
      referenciasDesc: "Consultar a literatura científica e citações Vancouver.",
      debateTitle: "Tratado em Debate",
      debateDesc: "Assistir às discussões clínicas e videocasts com os autores.",
      helpText: "Se precisar de suporte adicional, entre em contato através dos canais oficiais da Sociedade Brasileira de Coluna (SBC).",
      backButton: "← Voltar à Página Anterior",
    },
    en: {
      tag: "Error 404 • Page Not Found",
      title: "Page Not Found",
      desc: "The link or chapter you tried to access was not found, has been moved, or does not exist in the Treatise on Spine Surgery platform.",
      jumpLabel: "Jump directly to a chapter (1 to 109):",
      jumpPlaceholder: "Enter chapter number (e.g. 8)...",
      jumpButton: "Go to Chapter",
      quickLinksTitle: "Quick Navigation Shortcuts",
      homeTitle: "Home Page",
      homeDesc: "Return to the official overview and treatise presentation.",
      indiceTitle: "Complete Index",
      indiceDesc: "Explore all 109 chapters organized across 10 sections.",
      autoresTitle: "Authors Directory",
      autoresDesc: "Meet the specialized spine surgeons and editors.",
      referenciasTitle: "Bibliographic References",
      referenciasDesc: "Access Vancouver citations and indexed medical literature.",
      debateTitle: "Treatise in Debate",
      debateDesc: "Watch videocasts and clinical discussions with the authors.",
      helpText: "If you require further assistance, please contact the Brazilian Spine Society (SBC).",
      backButton: "← Go Back",
    },
    es: {
      tag: "Error 404 • Contenido No Localizado",
      title: "Página No Encontrada",
      desc: "El enlace o capítulo al que intentó acceder no fue encontrado, fue modificado o no existe en la plataforma oficial del Tratado de Cirugía de la Columna Vertebral.",
      jumpLabel: "Ir directamente a un capítulo (1 a 109):",
      jumpPlaceholder: "Ingrese el número de capítulo (ej: 8)...",
      jumpButton: "Acceder al Capítulo",
      quickLinksTitle: "Accesos Rápidos de Navegación",
      homeTitle: "Página de Inicio",
      homeDesc: "Volver a la presentación oficial de la obra y destacados.",
      indiceTitle: "Índice Completo",
      indiceDesc: "Explorar los 109 capítulos organizados en 10 secciones temáticas.",
      autoresTitle: "Directorio de Autores",
      autoresDesc: "Conocer a los cirujanos especialistas y editores de la SBC.",
      referenciasTitle: "Referencias Bibliográficas",
      referenciasDesc: "Consultar las citas Vancouver y la literatura médica indexada.",
      debateTitle: "Tratado en Debate",
      debateDesc: "Ver los episodios clínicos y debates con los autores.",
      helpText: "Si necesita asistencia adicional, comuníquese con la Sociedad Brasileña de Columna (SBC).",
      backButton: "← Volver a la Página Anterior",
    },
  };

  const t = texts[locale] || texts.pt;

  return (
    <div style={{ background: "#001026", color: "#f8fafc", minHeight: "100vh", display: "flex", flexDirection: "column", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* Header */}
      <Header locale={locale} currentPage="other" />

      {/* Main 404 Hero Section */}
      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 20px 100px", position: "relative", overflow: "hidden" }}>
        {/* Background glow radial accents */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "500px",
            background: "radial-gradient(ellipse at center, rgba(245, 34, 56, 0.18) 0%, rgba(2, 132, 199, 0.12) 40%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div style={{ maxWidth: "860px", width: "100%", position: "relative", zIndex: 1, textAlign: "center" }}>
          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 24, background: "rgba(245, 34, 56, 0.2)", border: "1px solid rgba(245, 34, 56, 0.4)", color: "#ff808f", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 20 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#f52238" }} />
            <span>{t.tag}</span>
          </div>

          {/* Large 404 Graphic Headline */}
          <div style={{ position: "relative", display: "inline-block", margin: "0 0 16px" }}>
            <h1
              style={{
                fontSize: "clamp(80px, 14vw, 150px)",
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: "-0.05em",
                margin: 0,
                background: "linear-gradient(180deg, #ffffff 30%, rgba(255, 255, 255, 0.3) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
              }}
            >
              404
            </h1>
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "clamp(20px, 3.5vw, 36px)",
                fontWeight: 800,
                color: "#ff3047",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                pointerEvents: "none",
                opacity: 0.85,
              }}
            >
              🦴
            </span>
          </div>

          <h2 style={{ fontSize: "clamp(24px, 3.2vw, 36px)", fontWeight: 800, color: "#ffffff", margin: "0 0 14px", lineHeight: 1.2 }}>
            {t.title}
          </h2>

          <p style={{ fontSize: "clamp(15px, 1.8vw, 17px)", color: "#94a3b8", lineHeight: 1.6, maxWidth: "680px", margin: "0 auto 36px" }}>
            {t.desc}
          </p>

          {/* Quick Chapter Jump Form */}
          <div
            style={{
              background: "rgba(0, 24, 60, 0.75)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: 16,
              padding: "24px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
              maxWidth: "600px",
              margin: "0 auto 40px",
              backdropFilter: "blur(12px)",
            }}
          >
            <label style={{ display: "block", fontSize: 13.5, fontWeight: 700, color: "#e2e8f0", marginBottom: 12, textAlign: "left" }}>
              📖 {t.jumpLabel}
            </label>

            <form onSubmit={handleChapterJump} style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <input
                type="number"
                min="1"
                max="109"
                value={chapterNumInput}
                onChange={(e) => setChapterNumInput(e.target.value)}
                placeholder={t.jumpPlaceholder}
                style={{
                  flex: 1,
                  minWidth: "220px",
                  padding: "12px 16px",
                  borderRadius: 10,
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  background: "rgba(0, 10, 28, 0.6)",
                  color: "#ffffff",
                  fontSize: 14,
                  outline: "none",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "12px 24px",
                  borderRadius: 10,
                  background: "#f52238",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: 14,
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 14px rgba(245, 34, 56, 0.4)",
                  transition: "all 0.15s ease",
                }}
              >
                {t.jumpButton} →
              </button>
            </form>
          </div>

          {/* Quick Navigation Cards Grid */}
          <div style={{ textAlign: "left", marginTop: 20 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: "#cbd5e1", textTransform: "uppercase", letterSpacing: "0.05em", textAlign: "center", marginBottom: 20 }}>
              {t.quickLinksTitle}
            </h3>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))", gap: 16 }}>
              {/* Home */}
              <Link
                href={`/${locale}`}
                style={{
                  padding: "20px",
                  borderRadius: 14,
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.borderColor = "rgba(245, 34, 56, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                }}
              >
                <div style={{ fontSize: 24, marginBottom: 4 }}>🏠</div>
                <strong style={{ fontSize: 16, color: "#ffffff" }}>{t.homeTitle}</strong>
                <span style={{ fontSize: 12.5, color: "#94a3b8", lineHeight: 1.4 }}>{t.homeDesc}</span>
              </Link>

              {/* Indice */}
              <Link
                href={`/${locale}/indice-new`}
                style={{
                  padding: "20px",
                  borderRadius: 14,
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.borderColor = "rgba(245, 34, 56, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                }}
              >
                <div style={{ fontSize: 24, marginBottom: 4 }}>📖</div>
                <strong style={{ fontSize: 16, color: "#ffffff" }}>{t.indiceTitle}</strong>
                <span style={{ fontSize: 12.5, color: "#94a3b8", lineHeight: 1.4 }}>{t.indiceDesc}</span>
              </Link>

              {/* Autores */}
              <Link
                href={`/${locale}/autores-new`}
                style={{
                  padding: "20px",
                  borderRadius: 14,
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.borderColor = "rgba(245, 34, 56, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                }}
              >
                <div style={{ fontSize: 24, marginBottom: 4 }}>👥</div>
                <strong style={{ fontSize: 16, color: "#ffffff" }}>{t.autoresTitle}</strong>
                <span style={{ fontSize: 12.5, color: "#94a3b8", lineHeight: 1.4 }}>{t.autoresDesc}</span>
              </Link>

              {/* Referencias */}
              <Link
                href={`/${locale}/referencias`}
                style={{
                  padding: "20px",
                  borderRadius: 14,
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.borderColor = "rgba(245, 34, 56, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                }}
              >
                <div style={{ fontSize: 24, marginBottom: 4 }}>📑</div>
                <strong style={{ fontSize: 16, color: "#ffffff" }}>{t.referenciasTitle}</strong>
                <span style={{ fontSize: 12.5, color: "#94a3b8", lineHeight: 1.4 }}>{t.referenciasDesc}</span>
              </Link>
            </div>
          </div>

          {/* Action Row */}
          <div style={{ marginTop: 40, display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={() => router.back()}
              style={{
                padding: "10px 22px",
                borderRadius: 10,
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#ffffff",
                fontSize: 13.5,
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
            >
              {t.backButton}
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer locale={locale} />
    </div>
  );
}
