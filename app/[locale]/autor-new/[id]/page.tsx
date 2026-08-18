"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ModernHeader from "@/components/modern/ModernHeader";
import ModernFooter from "@/components/modern/ModernFooter";
import { Locale } from "@/lib/types";
import { AUTHORS_DIRECTORY, getAuthorByIdOrSlug } from "@/lib/data/authors";

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

  const author = getAuthorByIdOrSlug(id) || AUTHORS_DIRECTORY[0];

  if (!author) {
    notFound();
  }

  const [activeTab, setActiveTab] = useState<"bio" | "capitulos" | "publicacoes">("bio");

  const otherAuthors = AUTHORS_DIRECTORY.filter((a) => a.id !== author.id);

  return (
    <div style={{ background: "#001026", color: "#1e293b", minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* ================= MODERN HEADER ================= */}
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
          {/* Subtle Spinal Anatomy Glow Overlay */}
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
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                color: "#94a3b8",
                marginBottom: 24,
              }}
            >
              <Link href={`/${locale}/home-new`} style={{ color: "#94a3b8", textDecoration: "none" }}>
                Início
              </Link>
              <span>/</span>
              <Link href={`/${locale}/autores-new`} style={{ color: "#94a3b8", textDecoration: "none" }}>
                Autores
              </Link>
              <span>/</span>
              <span style={{ color: "#ffffff", fontWeight: 700 }}>{author.nome}</span>
            </nav>

            <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 36, alignItems: "center" }}>
              {/* Foto com Zoom e Glow */}
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
                }}
              >
                <img
                  src={author.foto_url}
                  alt={author.nome}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                />
              </div>

              {/* Informações Principais */}
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
                  <span
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      padding: "4px 12px",
                      borderRadius: 20,
                      fontSize: 12.5,
                      fontWeight: 600,
                      color: "#cbd5e1",
                    }}
                  >
                    📋 {author.crm}
                  </span>
                </div>

                <h1
                  style={{
                    fontSize: "clamp(30px, 3.8vw, 46px)",
                    fontWeight: 800,
                    lineHeight: 1.15,
                    margin: "0 0 10px",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {author.nome}
                </h1>

                <p style={{ fontSize: 16, color: "#cbd5e1", margin: "0 0 16px", fontWeight: 500 }}>
                  🏛️ {author.instituicao} • <span style={{ color: "#94a3b8" }}>{author.cidade_estado}</span>
                </p>

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
        </section>

        {/* ================= 2-COLUMN MODERN CONTENT SECTION ================= */}
        <section style={{ padding: "45px 0 85px", background: "#f1f5f9" }}>
          <div className="shell" style={{ display: "grid", gridTemplateColumns: "2.3fr 1fr", gap: 36, alignItems: "start" }}>
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
                  📖 Biografia & Perfil
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("capitulos")}
                  style={{
                    flex: 1,
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
                  📚 Capítulos no Tratado ({author.capitulos_tratado.length})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("publicacoes")}
                  style={{
                    flex: 1,
                    padding: "10px 16px",
                    borderRadius: 10,
                    border: "none",
                    background: activeTab === "publicacoes" ? "#001a3d" : "transparent",
                    color: activeTab === "publicacoes" ? "#ffffff" : "#475569",
                    fontWeight: 700,
                    fontSize: 14,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  🔬 Produção Científica
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
                  <h2 style={{ fontSize: 22, fontWeight: 800, color: "#001a3d", margin: "0 0 16px" }}>
                    Trajetória Acadêmica e Cirúrgica
                  </h2>
                  <p style={{ fontSize: 16, color: "#334155", lineHeight: 1.75, margin: "0 0 28px" }}>
                    {author.bio_completa}
                  </p>

                  <h3 style={{ fontSize: 18, fontWeight: 800, color: "#001a3d", margin: "0 0 14px" }}>
                    Linhas de Pesquisa e Investigação Clínica
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                    {author.linhas_pesquisa.map((linha, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                          background: "#f8fafc",
                          padding: "12px 18px",
                          borderRadius: 10,
                          border: "1px solid #e2e8f0",
                          fontSize: 14.5,
                          fontWeight: 600,
                          color: "#1e293b",
                        }}
                      >
                        <span style={{ color: "#003382" }}>🔍</span>
                        <span>{linha}</span>
                      </div>
                    ))}
                  </div>

                  <h3 style={{ fontSize: 18, fontWeight: 800, color: "#001a3d", margin: "0 0 14px" }}>
                    Especialidades e Áreas de Domínio
                  </h3>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {author.especialidades.map((esp, i) => (
                      <span
                        key={i}
                        style={{
                          background: "rgba(0, 51, 130, 0.06)",
                          color: "#003382",
                          border: "1px solid rgba(0, 51, 130, 0.15)",
                          padding: "6px 14px",
                          borderRadius: 8,
                          fontSize: 13,
                          fontWeight: 700,
                        }}
                      >
                        🏷️ {esp}
                      </span>
                    ))}
                  </div>
                </article>
              )}

              {/* TAB 2: CAPÍTULOS NO TRATADO */}
              {activeTab === "capitulos" && (
                <article
                  style={{
                    background: "#ffffff",
                    borderRadius: 20,
                    padding: "36px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 10px 30px rgba(0, 20, 60, 0.05)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                    <h2 style={{ fontSize: 22, fontWeight: 800, color: "#001a3d", margin: 0 }}>
                      Capítulos Escritos / Coordenados ({author.capitulos_tratado.length})
                    </h2>
                    <span style={{ fontSize: 12.5, fontWeight: 700, color: "#f52238", background: "#fef2f2", padding: "4px 12px", borderRadius: 20, border: "1px solid #fecaca" }}>
                      Tratado Oficial SBC
                    </span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    {author.capitulos_tratado.map((cap) => (
                      <div
                        key={cap.num}
                        style={{
                          borderRadius: 14,
                          padding: "22px",
                          background: "#f8fafc",
                          border: "1px solid #e2e8f0",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 10 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <span style={{ background: "#001a3d", color: "#fff", padding: "4px 10px", borderRadius: 6, fontSize: 12.5, fontWeight: 800 }}>
                              Capítulo {cap.num}
                            </span>
                            <span style={{ fontSize: 13, color: "#64748b", fontWeight: 600 }}>
                              Seção {cap.secao_id}: {cap.secao_nome}
                            </span>
                          </div>
                          <Link
                            href={`/${locale}/capitulo-new/${cap.num}`}
                            className="modern-btn-glow"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 6,
                              padding: "6px 14px",
                              borderRadius: 8,
                              fontSize: 12.5,
                              fontWeight: 700,
                              textDecoration: "none",
                            }}
                          >
                            <span>Ver Capítulo</span>
                            <span>→</span>
                          </Link>
                        </div>

                        <h3 style={{ fontSize: 19, fontWeight: 800, color: "#001a3d", margin: "0 0 10px" }}>
                          {cap.titulo}
                        </h3>

                        <p style={{ fontSize: 14.5, color: "#475569", lineHeight: 1.55, margin: "0 0 14px" }}>
                          {cap.resumo_breve}
                        </p>

                        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                          {cap.decs_mesh.map((tag, i) => (
                            <span
                              key={i}
                              style={{
                                background: "#ffffff",
                                color: "#003382",
                                fontSize: 12,
                                fontWeight: 600,
                                padding: "3px 10px",
                                borderRadius: 6,
                                border: "1px solid #cbd5e1",
                              }}
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              )}

              {/* TAB 3: PRODUÇÃO CIENTÍFICA */}
              {activeTab === "publicacoes" && (
                <article
                  style={{
                    background: "#ffffff",
                    borderRadius: 20,
                    padding: "36px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 10px 30px rgba(0, 20, 60, 0.05)",
                  }}
                >
                  <h2 style={{ fontSize: 22, fontWeight: 800, color: "#001a3d", margin: "0 0 16px" }}>
                    Publicações Científicas de Referência
                  </h2>

                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {author.publicacoes_destaque.map((pub, i) => (
                      <div
                        key={i}
                        style={{
                          padding: "16px 20px",
                          borderRadius: 12,
                          background: "#f8fafc",
                          border: "1px solid #e2e8f0",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                          <span style={{ fontSize: 12, fontWeight: 800, color: "#003382", background: "#e0f2fe", padding: "3px 10px", borderRadius: 6 }}>
                            {pub.ano}
                          </span>
                          <span style={{ fontSize: 13.5, fontWeight: 700, color: "#64748b" }}>
                            {pub.periodico}
                          </span>
                        </div>
                        <p style={{ fontSize: 16, fontWeight: 700, color: "#001a3d", margin: "0 0 8px" }}>
                          {pub.titulo}
                        </p>
                        {pub.doi && (
                          <span style={{ fontSize: 13, color: "#0284c7", fontWeight: 600 }}>
                            DOI: {pub.doi}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </article>
              )}
            </div>

            {/* BARRA LATERAL (SIDEBAR) */}
            <aside style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {/* CARD: TITULAÇÃO */}
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: 20,
                  padding: "26px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 10px 30px rgba(0, 20, 60, 0.05)",
                }}
              >
                <h3 style={{ fontSize: 16, fontWeight: 800, color: "#001a3d", margin: "0 0 14px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  Titulação Acadêmica
                </h3>
                <ul style={{ margin: 0, paddingLeft: 18, color: "#475569", fontSize: 13.5, lineHeight: 1.6 }}>
                  {author.titulacao_academica.map((tit, i) => (
                    <li key={i} style={{ marginBottom: 6 }}>
                      {tit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CARD: CARGOS EM SOCIEDADES */}
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: 20,
                  padding: "26px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 10px 30px rgba(0, 20, 60, 0.05)",
                }}
              >
                <h3 style={{ fontSize: 16, fontWeight: 800, color: "#001a3d", margin: "0 0 14px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  Cargos em Sociedades
                </h3>
                <ul style={{ margin: 0, paddingLeft: 18, color: "#475569", fontSize: 13.5, lineHeight: 1.6 }}>
                  {author.cargos_sociedades.map((cargo, i) => (
                    <li key={i} style={{ marginBottom: 6 }}>
                      {cargo}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CARD: DEMAIS EDITORES */}
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: 20,
                  padding: "26px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 10px 30px rgba(0, 20, 60, 0.05)",
                }}
              >
                <h3 style={{ fontSize: 16, fontWeight: 800, color: "#001a3d", margin: "0 0 14px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  Outros Editores do Tratado
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {otherAuthors.map((other) => (
                    <Link
                      key={other.id}
                      href={`/${locale}/autor-new/${other.id}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "8px 12px",
                        borderRadius: 10,
                        background: "#f8fafc",
                        textDecoration: "none",
                        border: "1px solid #e2e8f0",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 8,
                          overflow: "hidden",
                          background: "#001738",
                          flexShrink: 0,
                        }}
                      >
                        <img
                          src={other.foto_url}
                          alt={other.nome}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>
                      <div>
                        <div style={{ fontSize: 13.5, fontWeight: 800, color: "#001a3d" }}>
                          {other.nome}
                        </div>
                        <div style={{ fontSize: 11.5, color: "#64748b" }}>
                          {other.cargo}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      {/* ================= MODERN FOOTER ================= */}
      <ModernFooter locale={locale} />
    </div>
  );
}
