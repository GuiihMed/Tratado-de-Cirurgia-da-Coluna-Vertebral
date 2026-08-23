"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import ModernHeader from "@/components/modern/ModernHeader";
import ModernFooter from "@/components/modern/ModernFooter";
import { Locale } from "@/lib/types";
import { supabase, isSupabaseConfigured } from "@/lib/supabase/client";
import { Users, Award, ArrowDown, ArrowRight, Search, BookOpen, ExternalLink } from "lucide-react";
import { AUTHORS_DIRECTORY } from "@/lib/data/authors";

interface AutoresNewProps {
  params: Promise<{ locale: string }>;
}

interface ChapterContrib {
  num: number;
  titulo: string;
}

interface AuthorItem {
  id: string;
  num: string;
  name: string;
  role: string;
  institution: string;
  highlight: string;
  photo: string;
  bio: string;
  titulacao: string;
  specialties: string[];
  capitulos: ChapterContrib[];
}

const DEFAULT_AUTHORS: AuthorItem[] = AUTHORS_DIRECTORY.map((a, idx) => ({
  id: a.slug,
  num: (idx + 1) < 10 ? `0${idx + 1}` : `${idx + 1}`,
  name: a.nome,
  role: a.cargo,
  institution: a.instituicao,
  highlight: a.destaque,
  photo: a.foto_url,
  bio: a.bio_completa,
  titulacao: a.titulacao_academica[0] || "Membro Especialista da Sociedade Brasileira de Coluna (SBC)",
  specialties: a.especialidades,
  capitulos: a.capitulos_tratado.map(c => ({ num: c.num, titulo: c.titulo }))
}));

export default function AutoresNewPage({ params }: AutoresNewProps) {
  const resolvedParams = use(params);
  const rawLocale = resolvedParams.locale;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";

  const [authorsList, setAuthorsList] = useState<AuthorItem[]>(DEFAULT_AUTHORS);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("ALL");
  const [hoveredAuthor, setHoveredAuthor] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        if (isSupabaseConfigured()) {
          const { data, error } = await supabase
            .from("autores")
            .select("*")
            .order("ordem", { ascending: true });

          if (!error && data && data.length > 0) {
            const formatted = data.map((a: any, i: number) => ({
              id: a.id || `autor-${i}`,
              num: a.ordem < 10 ? `0${a.ordem}` : `${a.ordem}`,
              name: a.nome,
              role: a.cargo,
              institution: a.instituicao,
              highlight: a.destaque || "",
              photo: a.foto_url || "/assets/avatar-placeholder.png",
              bio: a.bio_pt,
              titulacao: a.instituicao || "Membro Titular SBC",
              specialties: a.especialidades
                ? a.especialidades.split(",").map((s: string) => s.trim()).filter(Boolean)
                : [],
              capitulos: [
                { num: 1, titulo: "Coordenação Científica" },
                { num: 8, titulo: "Equilíbrio Sagital e Diretrizes Cirúrgicas" },
              ],
            }));
            setAuthorsList(formatted);
          }
        }
      } catch (e) {
        // Fallback to DEFAULT_AUTHORS
      }
    }
    loadData();
  }, []);

  const allSpecialties = Array.from(
    new Set(authorsList.flatMap((a) => a.specialties))
  );

  const filteredAuthors = authorsList.filter((a) => {
    const matchSearch =
      a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.bio.toLowerCase().includes(searchQuery.toLowerCase());

    const matchSpec =
      selectedSpecialty === "ALL" || a.specialties.includes(selectedSpecialty);

    return matchSearch && matchSpec;
  });

  return (
    <div style={{ background: "#001026", color: "#1e293b", minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* ================= MODERN HEADER ================= */}
      <ModernHeader locale={locale} currentPage="other" />

      <main>
        {/* ================= MODERN HERO SECTION ================= */}
        <section
          style={{
            position: "relative",
            background: "radial-gradient(ellipse at 80% 20%, rgba(245, 34, 56, 0.25) 0%, rgba(0, 26, 61, 0.95) 50%, #001026 100%)",
            color: "#ffffff",
            padding: "125px 0 65px",
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
              opacity: 0.15,
              filter: "blur(2px)",
              pointerEvents: "none",
            }}
          />

          <div className="shell" style={{ position: "relative", zIndex: 2 }}>
            <div style={{ maxWidth: 840 }}>
              {/* Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(245, 34, 56, 0.2)",
                  border: "1px solid rgba(245, 34, 56, 0.4)",
                  padding: "6px 16px",
                  borderRadius: 20,
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#ff6b7d",
                  marginBottom: 18,
                  backdropFilter: "blur(8px)",
                }}
              >
                <Users size={14} />
                <span>
                  {locale === "en"
                    ? "SCIENTIFIC EDITORIAL BOARD"
                    : locale === "es"
                    ? "CUERPO EDITORIAL CIENTÍFICO"
                    : "CORPO EDITORIAL CIENTÍFICO"}
                </span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(36px, 4.2vw, 54px)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  margin: "0 0 16px",
                  letterSpacing: "-0.03em",
                }}
              >
                {locale === "en"
                  ? "Distinguished Authors & Editors"
                  : locale === "es"
                  ? "Distintos Autores y Editores"
                  : "Autores e Editores do Tratado"}
              </h1>

              <p
                style={{
                  fontSize: "clamp(17px, 1.6vw, 21px)",
                  lineHeight: 1.5,
                  color: "#cbd5e1",
                  margin: "0 0 28px",
                }}
              >
                {locale === "en"
                  ? "Explore the academic credentials, surgical specialties, and authored chapters of the clinical leadership behind the Brazilian Spine Society Treatise."
                  : locale === "es"
                  ? "Explore las credenciales académicas, especialidades quirúrgicas y capítulos de la dirección clínica detrás del Tratado da Sociedade Brasileira de Coluna."
                  : "Conheça os cirurgiões de coluna, professores titulares e pesquisadores que coordenaram a elaboração científica dos 109 capítulos que compõem esta obra de referência nacional."}
              </p>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a
                  href="#busca-autores"
                  className="modern-btn-glow"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "12px 24px",
                    borderRadius: 10,
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: 14.5,
                  }}
                >
                  <span>{locale === "en" ? "Explore Authors" : locale === "es" ? "Explorar Autores" : "Explorar Autores"}</span>
                  <ArrowDown size={14} />
                </a>
                <Link
                  href={`/${locale}/indice-new`}
                  className="modern-btn-glass"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "12px 24px",
                    borderRadius: 10,
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: 14.5,
                  }}
                >
                  <span>{locale === "en" ? "109 Chapters Index" : locale === "es" ? "Índice de 109 Capítulos" : "Índice dos 109 Capítulos"}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 2-COLUMN MODERN CONTENT SECTION ================= */}
        <section id="busca-autores" style={{ padding: "50px 0 85px", background: "#f1f5f9" }}>
          <div className="shell">
            {/* Search and Filters Bar */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: 18,
                padding: "24px 30px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 10px 30px rgba(0, 20, 60, 0.05)",
                marginBottom: 36,
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
                {/* Search Input */}
                <div style={{ position: "relative", flex: "1 1 320px", maxWidth: 460 }}>
                  <input
                    type="text"
                    placeholder={
                      locale === "en"
                        ? "Search author by name, role or institution..."
                        : locale === "es"
                        ? "Buscar autor por nombre, cargo o institución..."
                        : "Buscar autor por nome, cargo ou instituição..."
                    }
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "12px 16px 12px 42px",
                      borderRadius: 10,
                      border: "1px solid #cbd5e1",
                      fontSize: 14.5,
                      background: "#f8fafc",
                      color: "#001a3d",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                  <Search size={16} style={{ position: "absolute", left: 14, top: 14, color: "#64748b" }} />
                </div>

                <div style={{ fontSize: 13.5, color: "#64748b", fontWeight: 600 }}>
                  {locale === "en" ? "Showing " : locale === "es" ? "Mostrando " : "Exibindo "}
                  <strong>{filteredAuthors.length}</strong>
                  {locale === "en" ? ` of ${authorsList.length} specialists` : locale === "es" ? ` de ${authorsList.length} especialistas` : ` de ${authorsList.length} especialistas`}
                </div>
              </div>

              {/* Specialty Chips */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: "#64748b", textTransform: "uppercase", marginRight: 4 }}>
                  {locale === "en" ? "Filter by Area:" : locale === "es" ? "Filtrar por Área:" : "Filtrar por Área:"}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedSpecialty("ALL")}
                  style={{
                    padding: "6px 14px",
                    borderRadius: 20,
                    fontSize: 12.5,
                    fontWeight: 700,
                    border: selectedSpecialty === "ALL" ? "1px solid #001a3d" : "1px solid #e2e8f0",
                    background: selectedSpecialty === "ALL" ? "#001a3d" : "#f8fafc",
                    color: selectedSpecialty === "ALL" ? "#ffffff" : "#475569",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {locale === "en" ? "All Areas" : locale === "es" ? "Todas las Áreas" : "Todas as Áreas"}
                </button>
                {allSpecialties.map((spec) => (
                  <button
                    key={spec}
                    type="button"
                    onClick={() => setSelectedSpecialty(spec)}
                    style={{
                      padding: "6px 14px",
                      borderRadius: 20,
                      fontSize: 12.5,
                      fontWeight: 700,
                      border: selectedSpecialty === spec ? "1px solid #f52238" : "1px solid #e2e8f0",
                      background: selectedSpecialty === spec ? "#f52238" : "#f8fafc",
                      color: selectedSpecialty === spec ? "#ffffff" : "#475569",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {spec}
                  </button>
                ))}
              </div>
            </div>

            {/* Authors Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))", gap: 24 }}>
              {filteredAuthors.map((author) => {
                const isHovered = hoveredAuthor === author.id;
                return (
                  <article
                    key={author.id}
                    onMouseEnter={() => setHoveredAuthor(author.id)}
                    onMouseLeave={() => setHoveredAuthor(null)}
                    style={{
                      background: "#ffffff",
                      borderRadius: 20,
                      padding: "28px",
                      border: isHovered ? "1px solid #003382" : "1px solid #e2e8f0",
                      boxShadow: isHovered
                        ? "0 20px 40px rgba(0, 30, 80, 0.12)"
                        : "0 10px 30px rgba(0, 20, 60, 0.05)",
                      transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                      transition: "all 0.3s cubic-bezier(0.2, 0, 0, 1)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      {/* Top Header Card */}
                      <div style={{ display: "flex", gap: 18, alignItems: "center", marginBottom: 20 }}>
                        <div
                          style={{
                            width: 80,
                            height: 90,
                            borderRadius: 14,
                            overflow: "hidden",
                            background: "#001738",
                            flexShrink: 0,
                            border: "2px solid #e2e8f0",
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          <img
                            src={author.photo}
                            alt={author.name}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              objectPosition: "top",
                              transform: isHovered ? "scale(1.08)" : "scale(1)",
                              transition: "transform 0.4s ease",
                            }}
                          />
                        </div>

                        <div>
                          <span
                            style={{
                              background: "rgba(0, 51, 130, 0.08)",
                              color: "#003382",
                              padding: "3px 10px",
                              borderRadius: 20,
                              fontSize: 11.5,
                              fontWeight: 700,
                              display: "inline-block",
                              marginBottom: 4,
                            }}
                          >
                            {author.role}
                          </span>
                          <h3 style={{ fontSize: 20, fontWeight: 700, color: "#001a3d", margin: "0 0 2px" }}>
                            <Link href={`/${locale}/autor-new/${author.id}`} style={{ color: "inherit", textDecoration: "none" }}>
                              {author.name}
                            </Link>
                          </h3>
                          <p style={{ fontSize: 12.5, color: "#64748b", margin: 0, fontWeight: 500 }}>
                            {author.institution}
                          </p>
                        </div>
                      </div>

                      {/* Highlight Banner */}
                      <div
                        style={{
                          background: "linear-gradient(135deg, rgba(245, 34, 56, 0.08) 0%, rgba(0, 51, 130, 0.04) 100%)",
                          borderLeft: "3px solid #f52238",
                          padding: "10px 14px",
                          borderRadius: "0 8px 8px 0",
                          fontSize: 13,
                          fontWeight: 700,
                          color: "#be123c",
                          marginBottom: 16,
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                        }}
                      >
                        <Award size={15} />
                        <span>{author.highlight}</span>
                      </div>

                      {/* Bio */}
                      <p style={{ fontSize: 14, color: "#334155", lineHeight: 1.55, margin: "0 0 18px" }}>
                        {author.bio}
                      </p>

                      {/* Specialty tags */}
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
                        {author.specialties.map((esp, i) => (
                          <span
                            key={i}
                            style={{
                              background: "#f1f5f9",
                              color: "#475569",
                              padding: "4px 10px",
                              borderRadius: 6,
                              fontSize: 11.5,
                              fontWeight: 600,
                            }}
                          >
                            {esp}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer / Authored Chapters Action */}
                    <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: 16 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: "#001a3d", textTransform: "uppercase" }}>
                          {locale === "en" ? "Treatise Chapters:" : locale === "es" ? "Capítulos en el Tratado:" : "Capítulos no Tratado:"}
                        </span>
                        <Link
                          href={`/${locale}/autor-new/${author.id}`}
                          style={{ fontSize: 12.5, fontWeight: 700, color: "#003382", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}
                        >
                          <span>{locale === "en" ? "View Full Profile" : locale === "es" ? "Ver Perfil Completo" : "Ver Perfil Completo"}</span>
                          <ArrowRight size={13} />
                        </Link>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        {author.capitulos.map((cap) => (
                          <Link
                            key={cap.num}
                            href={`/${locale}/capitulo-new/${cap.num}`}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              background: "#f8fafc",
                              padding: "8px 12px",
                              borderRadius: 8,
                              textDecoration: "none",
                              color: "#001a3d",
                              fontSize: 13,
                              fontWeight: 600,
                              border: "1px solid #e2e8f0",
                              transition: "all 0.2s ease",
                            }}
                          >
                            <span>{locale === "en" ? `Ch. ${cap.num}` : `Cap. ${cap.num}`} - {cap.titulo.length > 28 ? cap.titulo.slice(0, 28) + "..." : cap.titulo}</span>
                            <ArrowRight size={13} className="text-rose-600" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* ================= MODERN FOOTER ================= */}
      <ModernFooter locale={locale} />
    </div>
  );
}
