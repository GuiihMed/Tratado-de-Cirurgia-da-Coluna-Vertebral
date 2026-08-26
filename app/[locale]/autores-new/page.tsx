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

const normalizeLetter = (char: string) => {
  return char
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
};

const SORTED_AUTHORS = [...AUTHORS_DIRECTORY].sort((a, b) => {
  const nameA = a.nome.replace(/^(Dr\.|Dra\.|Prof\.|Profa\.)\s+/i, "").trim();
  const nameB = b.nome.replace(/^(Dr\.|Dra\.|Prof\.|Profa\.)\s+/i, "").trim();
  return nameA.localeCompare(nameB, "pt-BR", { sensitivity: "base" });
});

const DEFAULT_AUTHORS: AuthorItem[] = SORTED_AUTHORS.map((a, idx) => ({
  id: a.slug,
  num: (idx + 1) < 10 ? `0${idx + 1}` : `${idx + 1}`,
  name: a.nome,
  role: a.cargo,
  institution: a.instituicao,
  highlight: a.destaque,
  photo: a.foto_url || "/assets/avatar-placeholder.png",
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
    <div style={{ background: "#000c1e", color: "#ffffff", minHeight: "100vh", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      {/* ================= MODERN HEADER ================= */}
      <ModernHeader locale={locale} currentPage="autores-new" />

      <main>
        {/* ================= MODERN HERO SECTION ================= */}
        <section
          style={{
            position: "relative",
            background:
              "radial-gradient(circle at 19% 24%, rgba(255, 87, 86, 0.45), transparent 34%), linear-gradient(105deg, #c9142a 0%, #39244c 28%, #052b5b 58%, #0062a7 100%)",
            color: "#ffffff",
            padding: "130px 24px 70px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            overflow: "hidden",
          }}
        >
          {/* Subtle Spinal Anatomy Glow Overlay */}
          <img
            src="/assets/hero-spine.png"
            alt=""
            className="absolute right-0 top-0 h-full w-auto max-w-[62%] object-contain pointer-events-none opacity-25 hidden md:block"
            style={{ mixBlendMode: "screen", filter: "contrast(1.2) brightness(1.1)" }}
          />

          <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
            {/* Breadcrumb */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                color: "rgba(255, 255, 255, 0.75)",
                marginBottom: 28,
              }}
            >
              <Link
                href={`/${locale}/home-new`}
                style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "none" }}
              >
                {locale === "en" ? "Home" : locale === "es" ? "Inicio" : "Início"}
              </Link>
              <span>›</span>
              <span style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                {locale === "en" ? "The Treatise" : locale === "es" ? "El Tratado" : "O Tratado"}
              </span>
              <span>›</span>
              <span style={{ color: "#ffffff", fontWeight: 700 }}>
                {locale === "en"
                  ? "Authors & Editors"
                  : locale === "es"
                  ? "Autores y Editores"
                  : "Autores e Editores"}
              </span>
            </div>

            {/* Hero Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              {/* Left: 3D Book Cover */}
              <div className="md:col-span-5 flex justify-center md:justify-end">
                <div className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[320px] transition-transform duration-300 hover:scale-[1.03]">
                  <img
                    src="/assets/capa-tratado.png"
                    alt="Capa do Livro Tratado de Cirurgia da Coluna Vertebral"
                    className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)]"
                  />
                </div>
              </div>

              {/* Right: Content */}
              <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#f52238] animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    {locale === "en"
                      ? "SCIENTIFIC EDITORIAL BOARD • 204 SPECIALISTS"
                      : locale === "es"
                      ? "CUERPO EDITORIAL CIENTÍFICO • 204 ESPECIALISTAS"
                      : "CORPO EDITORIAL CIENTÍFICO • 204 ESPECIALISTAS"}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-3">
                  {locale === "en"
                    ? "Authors & Editors"
                    : locale === "es"
                    ? "Autores y Editores"
                    : "Autores e Editores"}
                </h1>

                <p className="text-base sm:text-lg font-bold text-slate-100 leading-snug max-w-xl mb-3">
                  {locale === "en"
                    ? "Meet the editors, authors, and clinical leaders of the Treatise on Spine Surgery."
                    : locale === "es"
                    ? "Conozca a los editores, autores y líderes clínicos del Tratado de Cirugía de Columna Vertebral."
                    : "Conheça os editores, autores e especialistas responsáveis pelos 109 capítulos do Tratado de Cirurgia da Coluna Vertebral."}
                </p>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl mb-6">
                  {locale === "en"
                    ? "The complete masterwork is exclusively available in printed format. This portal organizes authors, chapters, summaries, and references for clinical study."
                    : locale === "es"
                    ? "La obra completa existe exclusivamente en formato impreso. Este portal organiza autores, capítulos, resúmenes y referencias para estudio y consulta."
                    : "A obra completa existe exclusivamente em formato impresso. Este site organiza autores, capítulos, resumos e referências para estudo e consulta."}
                </p>

                {/* Print Notice Box */}
                <div
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-white/40 mb-6 max-w-xl text-xs sm:text-sm font-semibold"
                  style={{
                    background: "rgba(0, 20, 50, 0.4)",
                    color: "#ffffff",
                  }}
                >
                  <svg className="w-5 h-5 text-[#f52238] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                  <span>
                    {locale === "en"
                      ? "The complete treatise is exclusively available in printed format."
                      : locale === "es"
                      ? "La obra completa existe exclusivamente en formato impreso."
                      : "A obra completa existe exclusivamente em formato impresso."}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3.5 items-center">
                  <a
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#f52238] hover:bg-[#d9142a] text-white font-bold text-sm sm:text-base shadow-lg shadow-red-600/30 transition-all active:scale-[0.98]"
                    href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <span>{locale === "en" ? "Where to Buy" : locale === "es" ? "Dónde Comprar" : "Onde Comprar"}</span>
                    <span>🛒</span>
                  </a>
                  <a
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/40 backdrop-blur-sm transition-all active:scale-[0.98]"
                    href="#busca-autores"
                    style={{ textDecoration: "none" }}
                  >
                    <span>{locale === "en" ? "Explore Directory" : locale === "es" ? "Explorar Directorio" : "Explorar Diretório"}</span>
                    <span>↓</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom 5-Item Stats Bar */}
            <div className="w-full rounded-2xl bg-[#001533]/85 border border-white/15 backdrop-blur-xl p-4 sm:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.4)] mt-10 sm:mt-12">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-0 md:divide-x md:divide-white/10 text-center">
                {/* 1. Especialistas */}
                <div className="flex flex-col items-center justify-center px-2 py-1">
                  <svg className="w-6 h-6 text-sky-400 mb-1.5"><use href="#i-users"></use></svg>
                  <strong className="text-2xl sm:text-3xl font-bold text-white leading-tight">204</strong>
                  <span className="text-xs text-slate-300 font-semibold mt-0.5">
                    {locale === "en" ? "specialists" : locale === "es" ? "especialistas" : "especialistas"}
                  </span>
                </div>

                {/* 2. Editores Chefes */}
                <div className="flex flex-col items-center justify-center px-2 py-1">
                  <svg className="w-6 h-6 text-red-400 mb-1.5"><use href="#i-book"></use></svg>
                  <strong className="text-2xl sm:text-3xl font-bold text-white leading-tight">3</strong>
                  <span className="text-xs text-slate-300 font-semibold mt-0.5">
                    {locale === "en" ? "chief editors" : locale === "es" ? "editores en jefe" : "editores-chefes"}
                  </span>
                </div>

                {/* 3. Seções Temáticas */}
                <div className="flex flex-col items-center justify-center px-2 py-1">
                  <svg className="w-6 h-6 text-indigo-400 mb-1.5"><use href="#i-grid"></use></svg>
                  <strong className="text-2xl sm:text-3xl font-bold text-white leading-tight">10</strong>
                  <span className="text-xs text-slate-300 font-semibold mt-0.5">
                    {locale === "en" ? "thematic sections" : locale === "es" ? "secciones temáticas" : "seções temáticas"}
                  </span>
                </div>

                {/* 4. Idiomas */}
                <div className="flex flex-col items-center justify-center px-2 py-1">
                  <svg className="w-6 h-6 text-teal-400 mb-1.5"><use href="#i-globe"></use></svg>
                  <div className="text-xs text-slate-200 font-bold leading-tight mt-0.5">
                    <div>Português</div>
                    <div>Español</div>
                    <div>English</div>
                  </div>
                </div>

                {/* 5. Diretório A-Z */}
                <div className="col-span-2 sm:col-span-1 flex flex-col items-center justify-center px-2 py-1">
                  <svg className="w-6 h-6 text-amber-400 mb-1.5"><use href="#i-ref"></use></svg>
                  <strong className="text-base sm:text-lg font-bold text-white leading-snug mt-1">
                    {locale === "en" ? "A-Z Directory" : locale === "es" ? "Directorio A-Z" : "Diretório A-Z"}
                  </strong>
                  <span className="text-xs text-slate-300 font-semibold">
                    {locale === "en" ? "with ORCID" : locale === "es" ? "con ORCID" : "com ORCID"}
                  </span>
                </div>
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
