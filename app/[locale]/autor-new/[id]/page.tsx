"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import ModernHeader from "@/components/modern/ModernHeader";
import ModernFooter from "@/components/modern/ModernFooter";
import { Locale } from "@/lib/types";
import { AUTHORS_DIRECTORY, getAuthorByIdOrSlug } from "@/lib/data/authors";
import { BookOpen, Layers, Search, Tag, ArrowRight, Award, Building2 } from "lucide-react";

interface AutorNewPageProps {
  params: Promise<{ locale: string; id: string }>;
}

export default function AutorNewPage({ params }: AutorNewPageProps) {
  const resolvedParams = use(params);
  const rawLocale = resolvedParams.locale;
  const id = resolvedParams.id;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";

  const author = getAuthorByIdOrSlug(id);

  if (!author) {
    notFound();
  }

  if (id !== author.slug && author.slug) {
    redirect(`/${locale}/autor-new/${author.slug}`);
  }

  const [activeTab, setActiveTab] = useState<"bio" | "capitulos">("bio");

  return (
    <div style={{ background: "#001026", color: "#1e293b", minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <ModernHeader locale={locale} currentPage="other" />

      <main>
        {/* ================= MODERN HERO SECTION ================= */}
        <section
          style={{
            position: "relative",
            background: "radial-gradient(ellipse at 85% 20%, rgba(245, 34, 56, 0.28) 0%, rgba(0, 26, 61, 0.95) 50%, #001026 100%)",
            color: "#ffffff",
            padding: "125px 0 60px",
            marginTop: "-88px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: "-5%",
              top: "-10%",
              width: "550px",
              height: "650px",
              backgroundImage: "url('/assets/hero-spine.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              opacity: 0.16,
              filter: "blur(2px)",
              pointerEvents: "none",
            }}
          />

          <div className="shell" style={{ position: "relative", zIndex: 2 }}>
            <nav
              aria-label="Breadcrumb"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                color: "rgba(255, 255, 255, 0.75)",
                marginBottom: 24,
              }}
            >
              <Link href={`/${locale}/home-new`} style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "none" }}>
                {locale === "en" ? "Home" : locale === "es" ? "Inicio" : "Início"}
              </Link>
              <span>›</span>
              <span style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                {locale === "en" ? "The Treatise" : locale === "es" ? "El Tratado" : "O Tratado"}
              </span>
              <span>›</span>
              <Link href={`/${locale}/autores-new`} style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "none" }}>
                {locale === "en" ? "Authors" : locale === "es" ? "Autores" : "Autores"}
              </Link>
              <span>›</span>
              <span style={{ color: "#ffffff", fontWeight: 700 }}>{author.nome}</span>
            </nav>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: 32, alignItems: "center" }}>
              <div
                style={{
                  width: 200,
                  height: 230,
                  borderRadius: 18,
                  overflow: "hidden",
                  background: "#001738",
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
                  position: "relative",
                  margin: "0 auto",
                }}
              >
                <img
                  src={author.foto_url || "/assets/avatar-placeholder.png"}
                  alt={author.nome}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                />
              </div>

              <div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", marginBottom: 12 }}>
                  <span
                    style={{
                      background: "rgba(245, 34, 56, 0.25)",
                      border: "1px solid rgba(245, 34, 56, 0.4)",
                      padding: "4px 14px",
                      borderRadius: 20,
                      fontSize: 12.5,
                      fontWeight: 700,
                      color: "#ff808f",
                    }}
                  >
                    {author.cargo}
                  </span>
                </div>

                <h1
                  style={{
                    fontSize: "clamp(28px, 3.8vw, 44px)",
                    fontWeight: 700,
                    lineHeight: 1.15,
                    margin: "0 0 10px",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {author.nome}
                </h1>

                <p style={{ fontSize: 16, color: "#cbd5e1", margin: "0 0 14px", fontWeight: 500 }}>
                  🏛️ {author.instituicao}
                </p>

                {author.orcid && (
                  <div style={{ margin: "0 0 16px", display: "inline-block" }}>
                    <a
                      href={author.orcid_url || `https://orcid.org/${author.orcid}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        background: "rgba(166, 206, 57, 0.18)",
                        border: "1px solid rgba(166, 206, 57, 0.45)",
                        color: "#a6ce39",
                        padding: "6px 14px",
                        borderRadius: 10,
                        fontSize: 13.5,
                        fontWeight: 600,
                        textDecoration: "none",
                      }}
                    >
                      <svg width="17" height="17" viewBox="0 0 256 256" fill="#a6ce39">
                        <path d="M256 128c0 70.7-57.3 128-128 128S0 198.7 0 128 57.3 0 128 0s128 57.3 128 128z"/>
                        <path fill="#fff" d="M86.3 186.2H70.9V79.1h15.4v107.1zm-7.7-121.7c-5.4 0-9.8-4.4-9.8-9.8s4.4-9.8 9.8-9.8 9.8 4.4 9.8 9.8-4.4 9.8-9.8 9.8zm114.7 65.5c0 30.6-20.8 56.2-54.8 56.2h-31V79.1h32.2c33 0 53.6 25.4 53.6 50.9zm-15.6 0c0-21.7-13.6-37.4-38.3-37.4h-15v74.9h14.9c25.4 0 38.4-15.8 38.4-37.5z"/>
                      </svg>
                      <span>ORCID: {author.orcid}</span>
                      <span style={{ fontSize: 11, opacity: 0.8 }}>↗</span>
                    </a>
                  </div>
                )}

                <div>
                  <div
                    style={{
                      display: "inline-block",
                      background: "linear-gradient(135deg, rgba(245, 34, 56, 0.15) 0%, rgba(0, 51, 130, 0.2) 100%)",
                      borderLeft: "3px solid #f52238",
                      padding: "8px 16px",
                      borderRadius: "0 8px 8px 0",
                      fontSize: 13.5,
                      fontWeight: 700,
                      color: "#ff808f",
                    }}
                  >
                    ⭐ {author.destaque}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 2-COLUMN MODERN CONTENT SECTION ================= */}
        <section style={{ padding: "45px 0 85px", background: "#f1f5f9" }}>
          <div className="shell" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 36, alignItems: "start" }}>
            {/* COLUNA PRINCIPAL */}
            <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
              {/* TAB SWITCHER */}
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  background: "#ffffff",
                  padding: "8px",
                  borderRadius: 14,
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 15px rgba(0, 20, 60, 0.04)",
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveTab("bio")}
                  style={{
                    flex: 1,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "10px 16px",
                    borderRadius: 10,
                    border: "none",
                    background: activeTab === "bio" ? "#001a3d" : "transparent",
                    color: activeTab === "bio" ? "#ffffff" : "#475569",
                    fontWeight: 700,
                    fontSize: 14,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  <BookOpen size={15} />
                  <span>{locale === "en" ? "Biography & Profile" : locale === "es" ? "Biografía y Perfil" : "Biografia & Perfil"}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("capitulos")}
                  style={{
                    flex: 1,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "10px 16px",
                    borderRadius: 10,
                    border: "none",
                    background: activeTab === "capitulos" ? "#001a3d" : "transparent",
                    color: activeTab === "capitulos" ? "#ffffff" : "#475569",
                    fontWeight: 700,
                    fontSize: 14,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  <Layers size={15} />
                  <span>
                    {locale === "en"
                      ? `Treatise Chapters (${author.capitulos_tratado.length})`
                      : locale === "es"
                      ? `Capítulos en el Tratado (${author.capitulos_tratado.length})`
                      : `Capítulos no Tratado (${author.capitulos_tratado.length})`}
                  </span>
                </button>
              </div>

              {/* TAB 1: BIOGRAFIA COMPLETA */}
              {activeTab === "bio" && (
                <article
                  style={{
                    background: "#ffffff",
                    borderRadius: 20,
                    padding: "36px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 10px 30px rgba(0, 20, 60, 0.05)",
                  }}
                >
                  <h2 style={{ fontSize: 22, fontWeight: 700, color: "#001a3d", margin: "0 0 16px" }}>
                    {locale === "en" ? "Academic & Surgical Career" : locale === "es" ? "Trayectoria Académica y Quirúrgica" : "Trajetória Acadêmica e Cirúrgica"}
                  </h2>
                  <p style={{ fontSize: 16, color: "#334155", lineHeight: 1.75, margin: "0 0 28px" }}>
                    {author.bio_completa}
                  </p>

                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#001a3d", margin: "0 0 14px" }}>
                    {locale === "en" ? "Specialties & Areas of Expertise" : locale === "es" ? "Especialidades y Áreas de Dominio" : "Especialidades e Áreas de Domínio"}
                  </h3>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {author.especialidades.map((esp, i) => (
                      <span
                        key={i}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          background: "rgba(0, 51, 130, 0.06)",
                          color: "#003382",
                          border: "1px solid rgba(0, 51, 130, 0.15)",
                          padding: "6px 14px",
                          borderRadius: 8,
                          fontSize: 13,
                          fontWeight: 700,
                        }}
                      >
                        <Tag size={12} className="text-blue-600" />
                        <span>{esp}</span>
                      </span>
                    ))}
                  </div>
                </article>
              )}

              {/* TAB 2: CAPÍTULOS AUTORADOS */}
              {activeTab === "capitulos" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {author.capitulos_tratado.map((cap) => (
                    <article
                      key={cap.num}
                      style={{
                        background: "#ffffff",
                        borderRadius: 16,
                        padding: "24px 28px",
                        border: "1px solid #e2e8f0",
                        boxShadow: "0 4px 20px rgba(0, 20, 60, 0.04)",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, marginBottom: 12, flexWrap: "wrap" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span style={{ background: "#001a3d", color: "#ffffff", padding: "4px 10px", borderRadius: 6, fontSize: 13, fontWeight: 700 }}>
                            {locale === "en" ? "Ch." : locale === "es" ? "Cap." : "Cap."} {cap.num}
                          </span>
                          <span style={{ fontSize: 13, color: "#64748b", fontWeight: 600 }}>
                            {locale === "en" ? "Section" : locale === "es" ? "Sección" : "Seção"} {cap.secao_id}: {cap.secao_nome}
                          </span>
                        </div>
                        <Link
                          href={`/${locale}/capitulo-new/${cap.num}`}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            fontSize: 13.5,
                            fontWeight: 700,
                            color: "#ffffff",
                            background: "linear-gradient(135deg, #002b66 0%, #001a3d 100%)",
                            padding: "8px 16px",
                            borderRadius: 8,
                            textDecoration: "none",
                          }}
                        >
                          <span>{locale === "en" ? "Read in Interactive Viewer" : locale === "es" ? "Leer en Visor Interactivo" : "Ler no Leitor Interativo"}</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>

                      <h3 style={{ fontSize: 18, fontWeight: 700, color: "#001a3d", margin: 0 }}>
                        <Link href={`/${locale}/capitulo-new/${cap.num}`} style={{ color: "inherit", textDecoration: "none" }}>
                          {cap.titulo}
                        </Link>
                      </h3>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {/* BARRA LATERAL */}
            <aside style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {author.orcid && (
                <div
                  style={{
                    background: "#ffffff",
                    borderRadius: 18,
                    padding: "24px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 6px 25px rgba(0, 20, 60, 0.04)",
                  }}
                >
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#001a3d", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    {locale === "en" ? "Scientific Identifier" : locale === "es" ? "Identificador Científico" : "Identificador Científico"}
                  </h3>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#f8fafc", padding: "12px", borderRadius: 8, border: "1px solid #e2e8f0" }}>
                    <svg width="24" height="24" viewBox="0 0 256 256" fill="#a6ce39">
                      <path d="M256 128c0 70.7-57.3 128-128 128S0 198.7 0 128 57.3 0 128 0s128 57.3 128 128z"/>
                      <path fill="#fff" d="M86.3 186.2H70.9V79.1h15.4v107.1zm-7.7-121.7c-5.4 0-9.8-4.4-9.8-9.8s4.4-9.8 9.8-9.8 9.8 4.4 9.8 9.8-4.4 9.8-9.8 9.8zm114.7 65.5c0 30.6-20.8 56.2-54.8 56.2h-31V79.1h32.2c33 0 53.6 25.4 53.6 50.9zm-15.6 0c0-21.7-13.6-37.4-38.3-37.4h-15v74.9h14.9c25.4 0 38.4-15.8 38.4-37.5z"/>
                    </svg>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#64748b" }}>ORCID iD</div>
                      <a
                        href={author.orcid_url || `https://orcid.org/${author.orcid}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: 13.5, fontWeight: 700, color: "#003382", textDecoration: "none", wordBreak: "break-all" }}
                      >
                        {author.orcid} ↗
                      </a>
                    </div>
                  </div>
                </div>
              )}

              <div
                style={{
                  background: "#ffffff",
                  borderRadius: 18,
                  padding: "24px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 6px 25px rgba(0, 20, 60, 0.04)",
                }}
              >
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#001a3d", margin: "0 0 14px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  {locale === "en" ? "Academic Credentials" : locale === "es" ? "Titulación Académica" : "Titulação Acadêmica"}
                </h3>
                <ul style={{ margin: 0, paddingLeft: 18, color: "#475569", fontSize: 14, lineHeight: 1.6 }}>
                  {author.titulacao_academica.map((tit, i) => (
                    <li key={i} style={{ marginBottom: 8 }}>
                      {tit}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  background: "linear-gradient(135deg, #001a3d 0%, #002b66 100%)",
                  borderRadius: 18,
                  padding: "26px",
                  color: "#ffffff",
                  textAlign: "center",
                }}
              >
                <Award size={28} className="text-red-400 mx-auto mb-3" />
                <h4 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 10px" }}>
                  {locale === "en" ? "Editorial Board & Authors" : locale === "es" ? "Cuerpo Editorial y Autores" : "Corpo Editorial e Autores"}
                </h4>
                <p style={{ fontSize: 13.5, color: "#cbd5e1", margin: "0 0 18px", lineHeight: 1.5 }}>
                  {locale === "en"
                    ? "Explore the full list of 204 experts responsible for the SBC Treatise."
                    : locale === "es"
                    ? "Explore la lista completa de 204 especialistas del Tratado SBC."
                    : "Explore a lista completa dos 204 especialistas que compõem o Tratado SBC."}
                </p>
                <Link
                  href={`/${locale}/autores-new`}
                  style={{
                    display: "inline-block",
                    width: "100%",
                    padding: "10px 0",
                    borderRadius: 10,
                    background: "linear-gradient(135deg, #f52238 0%, #b80f21 100%)",
                    color: "#ffffff",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: 14,
                    boxSizing: "border-box",
                  }}
                >
                  {locale === "en" ? "View Authors Directory →" : locale === "es" ? "Ver Directorio de Autores →" : "Ver Diretório de Autores →"}
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <ModernFooter locale={locale} />
    </div>
  );
}
