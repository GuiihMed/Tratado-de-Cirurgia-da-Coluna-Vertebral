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
      breadcrumbHome: "Início",
      breadcrumb404: "Erro 404",
      tag: "ERRO 404 • PÁGINA NÃO ENCONTRADA",
      title: "404 — Conteúdo Não Localizado",
      lead: "O link, capítulo ou página que você tentou acessar não foi encontrado, foi alterado ou não existe na plataforma oficial do Tratado de Cirurgia da Coluna Vertebral.",
      notice: "A obra oficial de referência da Sociedade Brasileira de Coluna (SBC) conta com 109 capítulos especializados divididos em 10 seções.",
      btnHome: "Ir para a Página Inicial",
      btnIndice: "Consultar o Índice Completo",
      jumpTitle: "Ir direto para um capítulo específico (1 a 109)",
      jumpSubtitle: "Digite o número do capítulo para ser direcionado imediatamente:",
      jumpPlaceholder: "Ex: 1, 8, 12, 45, 62...",
      jumpBtn: "Acessar Capítulo",
      shortcutsTitle: "Atalhos Principais de Navegação",
      cardHomeTitle: "Página Inicial",
      cardHomeDesc: "Apresentação geral da obra, editores e diretrizes clínicas.",
      cardIndiceTitle: "Índice Completo",
      cardIndiceDesc: "Navegação estruturada pelos 109 capítulos e 10 seções temáticas.",
      cardAutoresTitle: "Quadro de Autores",
      cardAutoresDesc: "Diretório de mais de 200 cirurgiões especialistas da SBC.",
      cardRefsTitle: "Referências Bibliográficas",
      cardRefsDesc: "Citações oficiais em formato Vancouver e literatura médica indexada.",
      popularTitle: "Capítulos Mais Consultados",
      backBtn: "← Voltar à página anterior",
    },
    en: {
      breadcrumbHome: "Home",
      breadcrumb404: "Error 404",
      tag: "ERROR 404 • PAGE NOT FOUND",
      title: "404 — Content Not Found",
      lead: "The link, chapter, or page you attempted to access was not found, has been moved, or does not exist in the official Treatise of Spine Surgery platform.",
      notice: "The official reference treatise by the Brazilian Spine Society (SBC) features 109 specialized chapters organized into 10 thematic sections.",
      btnHome: "Go to Home Page",
      btnIndice: "Explore Complete Index",
      jumpTitle: "Jump directly to a specific chapter (1 to 109)",
      jumpSubtitle: "Enter chapter number to navigate immediately:",
      jumpPlaceholder: "E.g.: 1, 8, 12, 45, 62...",
      jumpBtn: "Go to Chapter",
      shortcutsTitle: "Main Navigation Shortcuts",
      cardHomeTitle: "Home Page",
      cardHomeDesc: "Official treatise overview, chief editors, and clinical guidelines.",
      cardIndiceTitle: "Complete Index",
      cardIndiceDesc: "Structured navigation across 109 chapters and 10 thematic sections.",
      cardAutoresTitle: "Authors Directory",
      cardAutoresDesc: "Directory of over 200 specialized spine surgeons and contributors.",
      cardRefsTitle: "Bibliographic References",
      cardRefsDesc: "Official Vancouver format citations and indexed peer-reviewed literature.",
      popularTitle: "Frequently Consulted Chapters",
      backBtn: "← Return to previous page",
    },
    es: {
      breadcrumbHome: "Inicio",
      breadcrumb404: "Error 404",
      tag: "ERROR 404 • PÁGINA NO ENCONTRADA",
      title: "404 — Contenido No Encontrado",
      lead: "El enlace, capítulo o página a la que intentó acceder no fue encontrada, ha sido modificada o no existe en la plataforma oficial del Tratado de Cirugía de la Columna Vertebral.",
      notice: "La obra oficial de referencia de la Sociedad Brasileña de Columna (SBC) cuenta con 109 capítulos especializados divididos en 10 secciones temáticas.",
      btnHome: "Ir a la Página de Inicio",
      btnIndice: "Consultar el Índice Completo",
      jumpTitle: "Ir directamente a un capítulo específico (1 a 109)",
      jumpSubtitle: "Ingrese el número de capítulo para navegar de inmediato:",
      jumpPlaceholder: "Ej: 1, 8, 12, 45, 62...",
      jumpBtn: "Acceder al Capítulo",
      shortcutsTitle: "Accesos Principales de Navegación",
      cardHomeTitle: "Página de Inicio",
      cardHomeDesc: "Presentación general de la obra, editores y directrices clínicas.",
      cardIndiceTitle: "Índice Completo",
      cardIndiceDesc: "Navegación estructurada por los 109 capítulos y 10 secciones temáticas.",
      cardAutoresTitle: "Directorio de Autores",
      cardAutoresDesc: "Directorio de más de 200 cirujanos especialistas de la SBC.",
      cardRefsTitle: "Referencias Bibliográficas",
      cardRefsDesc: "Citas oficiales en formato Vancouver y literatura médica indexada.",
      popularTitle: "Capítulos Más Consultados",
      backBtn: "← Volver a la página anterior",
    },
  };

  const t = texts[locale] || texts.pt;

  const popularChapters = [
    { num: 1, title: locale === "en" ? "Embryology of the Spine" : locale === "es" ? "Embriología de la Columna Vertebral" : "Embriologia da Coluna Vertebral", sec: 1 },
    { num: 8, title: locale === "en" ? "Sagittal Plane Spinal Alignment" : locale === "es" ? "Columna Vertebral en el Plano Sagital" : "Coluna Vertebral no Plano Sagital", sec: 1 },
    { num: 12, title: locale === "en" ? "History and Physical Examination" : locale === "es" ? "Anamnesis y Examen Físico" : "Anamnese e Exame Físico da Coluna Vertebral", sec: 2 },
    { num: 43, title: locale === "en" ? "Cervical Disc Herniation" : locale === "es" ? "Hernia de Disco Cervical" : "Hérnia de Disco Cervical", sec: 5 },
    { num: 45, title: locale === "en" ? "Lumbar Disc Herniation" : locale === "es" ? "Hernia de Disco Lumbar" : "Hérnia de Disco Lombar", sec: 5 },
    { num: 62, title: locale === "en" ? "Transforaminal Endoscopy" : locale === "es" ? "Endoscopia Transforaminal" : "Endoscopia Transforaminal na Coluna Lombossacra", sec: 8 },
  ];

  return (
    <div style={{ background: "#f4f7fb", color: "#1e293b", minHeight: "100vh", display: "flex", flexDirection: "column", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* Header Clássico */}
      <Header locale={locale} currentPage="other" />

      <main style={{ flex: 1, paddingBottom: "80px" }}>
        {/* ================= HERO SECTION (PADRÃO CLÁSSICO HOME / ÍNDICE) ================= */}
        <section
          className="relative w-full overflow-hidden text-white pt-8 pb-16 border-b border-white/10"
          style={{
            background:
              "radial-gradient(circle at 19% 24%, rgba(255, 87, 86, 0.45), transparent 34%), linear-gradient(105deg, #c9142a 0%, #39244c 28%, #052b5b 58%, #0062a7 100%)",
          }}
        >
          {/* Anatomical background spine overlay */}
          <img
            className="absolute right-0 top-0 h-full w-auto max-w-[60%] object-contain pointer-events-none opacity-25 hidden md:block"
            src="/assets/hero-spine.png"
            alt=""
            style={{ mixBlendMode: "screen", filter: "contrast(1.2) brightness(1.1)" }}
          />

          <div className="w-full px-4 sm:px-6 md:px-8 mx-auto max-w-7xl relative z-10">
            {/* Breadcrumb */}
            <div style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.7)", marginBottom: 24, display: "flex", alignItems: "center", gap: 8 }}>
              <Link href={`/${locale}`} style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "none" }}>
                {t.breadcrumbHome}
              </Link>
              <span>›</span>
              <span style={{ color: "#ffffff", fontWeight: 700 }}>
                {t.breadcrumb404}
              </span>
            </div>

            <div className="max-w-2xl text-left">
              {/* Pill Tag */}
              <div className="mb-3.5">
                <span
                  className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border"
                  style={{
                    background: "rgba(245, 34, 56, 0.25)",
                    borderColor: "rgba(245, 34, 56, 0.5)",
                    color: "#ff94a2",
                  }}
                >
                  {t.tag}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
                {t.title}
              </h1>

              {/* Lead Text */}
              <p className="text-sm sm:text-base md:text-[17px] text-slate-100 leading-relaxed mb-6">
                {t.lead}
              </p>

              {/* Print Notice Box Clássico */}
              <div
                className="inline-flex items-center gap-3.5 px-5 py-3 rounded-xl border border-white/40 mb-8 max-w-xl text-xs sm:text-sm font-semibold"
                style={{
                  background: "rgba(0, 20, 50, 0.4)",
                  color: "#ffffff",
                }}
              >
                <span style={{ fontSize: 18 }}>📖</span>
                <span>{t.notice}</span>
              </div>

              {/* Action Buttons Clássicos */}
              <div className="flex flex-wrap gap-3.5 items-center">
                <Link
                  href={`/${locale}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#f52238] hover:bg-[#d9142a] text-white font-bold text-sm sm:text-base shadow-lg shadow-red-600/30 transition-all active:scale-[0.98]"
                  style={{ textDecoration: "none" }}
                >
                  <span>🏠</span>
                  <span>{t.btnHome}</span>
                </Link>

                <Link
                  href={`/${locale}/indice` }
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/40 backdrop-blur-sm transition-all active:scale-[0.98]"
                  style={{ textDecoration: "none" }}
                >
                  <span>📖</span>
                  <span>{t.btnIndice}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ================= BODY CONTENT (PADRÃO CLÁSSICO BRANCO/CARD) ================= */}
        <section className="w-full px-4 sm:px-6 md:px-8 mx-auto max-w-7xl mt-10">
          {/* CARD 1: SALTO RÁPIDO PARA CAPÍTULO */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: 16,
              padding: "32px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 20px rgba(0, 30, 80, 0.05)",
              marginBottom: 32,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <span style={{ fontSize: 24 }}>🔍</span>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#001a3d", margin: 0 }}>
                {t.jumpTitle}
              </h2>
            </div>
            <p style={{ fontSize: 13.5, color: "#64748b", margin: "0 0 20px" }}>
              {t.jumpSubtitle}
            </p>

            <form onSubmit={handleChapterJump} style={{ display: "flex", gap: 12, flexWrap: "wrap", maxWidth: "600px" }}>
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
                  border: "1px solid #cbd5e1",
                  background: "#f8fafc",
                  color: "#0f172a",
                  fontSize: 14,
                  fontWeight: 600,
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
                  boxShadow: "0 4px 14px rgba(245, 34, 56, 0.25)",
                  transition: "all 0.15s ease",
                }}
              >
                {t.jumpBtn} →
              </button>
            </form>
          </div>

          {/* CARD 2: ATALHOS PRINCIPAIS */}
          <div style={{ marginBottom: 40 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <span style={{ fontSize: 20 }}>🧭</span>
              <h3 style={{ fontSize: 16.5, fontWeight: 700, color: "#001a3d", margin: 0, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                {t.shortcutsTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Home Card */}
              <Link
                href={`/${locale}`}
                style={{
                  background: "#ffffff",
                  borderRadius: 14,
                  padding: "24px",
                  border: "1px solid #e2e8f0",
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(0, 30, 80, 0.03)",
                  transition: "all 0.2s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                className="hover:border-red-500 hover:shadow-md"
              >
                <div>
                  <span style={{ fontSize: 28, display: "block", marginBottom: 12 }}>🏠</span>
                  <h4 style={{ fontSize: 16, fontWeight: 700, color: "#001a3d", margin: "0 0 6px" }}>
                    {t.cardHomeTitle}
                  </h4>
                  <p style={{ fontSize: 13, color: "#64748b", margin: 0, lineHeight: 1.5 }}>
                    {t.cardHomeDesc}
                  </p>
                </div>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: "#f52238", marginTop: 16, display: "inline-flex", alignItems: "center", gap: 4 }}>
                  <span>Acessar</span>
                  <span>→</span>
                </span>
              </Link>

              {/* Indice Card */}
              <Link
                href={`/${locale}/indice` }
                style={{
                  background: "#ffffff",
                  borderRadius: 14,
                  padding: "24px",
                  border: "1px solid #e2e8f0",
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(0, 30, 80, 0.03)",
                  transition: "all 0.2s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                className="hover:border-red-500 hover:shadow-md"
              >
                <div>
                  <span style={{ fontSize: 28, display: "block", marginBottom: 12 }}>📖</span>
                  <h4 style={{ fontSize: 16, fontWeight: 700, color: "#001a3d", margin: "0 0 6px" }}>
                    {t.cardIndiceTitle}
                  </h4>
                  <p style={{ fontSize: 13, color: "#64748b", margin: 0, lineHeight: 1.5 }}>
                    {t.cardIndiceDesc}
                  </p>
                </div>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: "#f52238", marginTop: 16, display: "inline-flex", alignItems: "center", gap: 4 }}>
                  <span>Acessar</span>
                  <span>→</span>
                </span>
              </Link>

              {/* Autores Card */}
              <Link
                href={`/${locale}/autores` }
                style={{
                  background: "#ffffff",
                  borderRadius: 14,
                  padding: "24px",
                  border: "1px solid #e2e8f0",
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(0, 30, 80, 0.03)",
                  transition: "all 0.2s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                className="hover:border-red-500 hover:shadow-md"
              >
                <div>
                  <span style={{ fontSize: 28, display: "block", marginBottom: 12 }}>👥</span>
                  <h4 style={{ fontSize: 16, fontWeight: 700, color: "#001a3d", margin: "0 0 6px" }}>
                    {t.cardAutoresTitle}
                  </h4>
                  <p style={{ fontSize: 13, color: "#64748b", margin: 0, lineHeight: 1.5 }}>
                    {t.cardAutoresDesc}
                  </p>
                </div>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: "#f52238", marginTop: 16, display: "inline-flex", alignItems: "center", gap: 4 }}>
                  <span>Acessar</span>
                  <span>→</span>
                </span>
              </Link>

              {/* Referencias Card */}
              <Link
                href={`/${locale}/referencias` }
                style={{
                  background: "#ffffff",
                  borderRadius: 14,
                  padding: "24px",
                  border: "1px solid #e2e8f0",
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(0, 30, 80, 0.03)",
                  transition: "all 0.2s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                className="hover:border-red-500 hover:shadow-md"
              >
                <div>
                  <span style={{ fontSize: 28, display: "block", marginBottom: 12 }}>📑</span>
                  <h4 style={{ fontSize: 16, fontWeight: 700, color: "#001a3d", margin: "0 0 6px" }}>
                    {t.cardRefsTitle}
                  </h4>
                  <p style={{ fontSize: 13, color: "#64748b", margin: 0, lineHeight: 1.5 }}>
                    {t.cardRefsDesc}
                  </p>
                </div>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: "#f52238", marginTop: 16, display: "inline-flex", alignItems: "center", gap: 4 }}>
                  <span>Acessar</span>
                  <span>→</span>
                </span>
              </Link>
            </div>
          </div>

          {/* CARD 3: CAPÍTULOS DE DESTAQUE */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: 16,
              padding: "32px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 20px rgba(0, 30, 80, 0.04)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <span style={{ fontSize: 20 }}>⭐</span>
              <h3 style={{ fontSize: 16.5, fontWeight: 700, color: "#001a3d", margin: 0, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                {t.popularTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularChapters.map((c) => (
                <Link
                  key={c.num}
                  href={`/${locale}/capitulo/${c.num}`}
                  style={{
                    padding: "16px 18px",
                    borderRadius: 12,
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    textDecoration: "none",
                    transition: "all 0.15s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                  }}
                  className="hover:bg-blue-50 hover:border-blue-200"
                >
                  <span
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "#001738",
                      color: "#ffffff",
                      display: "grid",
                      placeItems: "center",
                      fontSize: 13,
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    {c.num}
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#f52238", textTransform: "uppercase", display: "block" }}>
                      {locale === "en" ? `Section ${c.sec}` : locale === "es" ? `Sección ${c.sec}` : `Seção ${c.sec}`}
                    </span>
                    <strong style={{ fontSize: 13.5, color: "#001a3d", display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {c.title}
                    </strong>
                  </div>
                  <span style={{ color: "#94a3b8", fontSize: 16 }}>→</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div style={{ marginTop: 32, textAlign: "center" }}>
            <button
              type="button"
              onClick={() => router.back()}
              style={{
                padding: "10px 24px",
                borderRadius: 10,
                background: "#ffffff",
                border: "1px solid #cbd5e1",
                color: "#475569",
                fontSize: 13.5,
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                transition: "all 0.15s ease",
              }}
            >
              {t.backBtn}
            </button>
          </div>
        </section>
      </main>

      {/* Footer Clássico */}
      <Footer locale={locale} />
    </div>
  );
}
