import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Locale } from "@/lib/types";
import { AUTHORS_DIRECTORY, getAuthorByIdOrSlug } from "@/lib/data/authors";

export const revalidate = 0;

interface AutorPageProps {
  params: Promise<{ locale: string; id: string }>;
}

export function generateStaticParams() {
  const locales = ["pt", "en", "es"];
  const params: { locale: string; id: string }[] = [];
  const extraSlugs = ["helton-defino", "marcelo-risso", "elcio-landim", "luiz-roberto-gomes-vialle", "edson-pudles"];

  for (const locale of locales) {
    for (const author of AUTHORS_DIRECTORY) {
      params.push({ locale, id: author.id });
      params.push({ locale, id: author.slug });
    }
    for (const slug of extraSlugs) {
      params.push({ locale, id: slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: AutorPageProps): Promise<Metadata> {
  const { locale: rawLocale, id } = await params;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";

  const author = getAuthorByIdOrSlug(id);
  if (!author) {
    return {
      title: "Autor | Tratado de Cirurgia da Coluna Vertebral",
    };
  }

  const title = `${author.nome} | Autor do Tratado de Coluna SBC`;
  const descRaw =
    author.bio_completa ||
    `Perfil e capítulos de autoria de ${author.nome} no Tratado de Cirurgia da Coluna Vertebral da Sociedade Brasileira de Coluna (SBC). Filiação: ${author.instituicao || "SBC"}.`;
  const description =
    descRaw.length > 200 ? `${descRaw.slice(0, 197)}...` : descRaw;

  const pageUrl = `https://www.tratadodecoluna.com.br/${locale}/autor/${author.slug || author.id}`;
  const authorPhoto =
    author.foto_url && author.foto_url.startsWith("http")
      ? author.foto_url
      : author.foto_url && author.foto_url.startsWith("/")
      ? `https://www.tratadodecoluna.com.br${author.foto_url}`
      : "https://www.tratadodecoluna.com.br/assets/og-cover.png";

  return {
    title,
    description,
    keywords: [
      author.nome,
      author.instituicao || "SBC",
      "Autor do Tratado de Coluna",
      "Sociedade Brasileira de Coluna",
      "Cirurgião de Coluna",
      ...(author.titulacao_academica || []),
    ],
    authors: [{ name: author.nome }],
    alternates: {
      canonical: pageUrl,
      languages: {
        pt: `https://www.tratadodecoluna.com.br/pt/autor/${author.slug || author.id}`,
        en: `https://www.tratadodecoluna.com.br/en/autor/${author.slug || author.id}`,
        es: `https://www.tratadodecoluna.com.br/es/autor/${author.slug || author.id}`,
      },
    },
    openGraph: {
      type: "profile",
      locale: locale === "en" ? "en_US" : locale === "es" ? "es_ES" : "pt_BR",
      url: pageUrl,
      siteName: "Tratado de Cirurgia da Coluna Vertebral - SBC",
      title: `${author.nome} — Autor Oficial SBC`,
      description,
      images: [
        {
          url: authorPhoto,
          width: 1200,
          height: 630,
          type: "image/png",
          alt: `${author.nome} - Tratado de Cirurgia da Coluna Vertebral (SBC)`,
        },
        {
          url: "https://www.tratadodecoluna.com.br/assets/og-cover.png",
          width: 1200,
          height: 630,
          type: "image/png",
          alt: "Tratado de Cirurgia da Coluna Vertebral",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${author.nome} — Autor Oficial SBC`,
      description,
      images: [authorPhoto],
    },
  };
}

export default async function AutorPage({ params }: AutorPageProps) {
  const { locale: rawLocale, id } = await params;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";

  const author = getAuthorByIdOrSlug(id);

  if (!author) {
    notFound();
  }

  // Redirect numerical ID to clean author slug URL (e.g. /autor/3 -> /autor/alberto-ofenhejm-gotfryd)
  if (id !== author.slug && author.slug) {
    redirect(`/${locale}/autor/${author.slug}`);
  }

  const authorJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "@id": `https://www.tratadodecoluna.com.br/${locale}/autor/${author.slug || author.id}#person`,
        "url": `https://www.tratadodecoluna.com.br/${locale}/autor/${author.slug || author.id}`,
        "name": author.nome,
        "jobTitle": author.cargo,
        "description": author.bio_completa || author.destaque,
        "image": author.foto_url ? (author.foto_url.startsWith("http") ? author.foto_url : `https://www.tratadodecoluna.com.br${author.foto_url}`) : undefined,
        "sameAs": author.orcid_url ? [author.orcid_url] : undefined,
        "worksFor": {
          "@type": "MedicalOrganization",
          "name": author.instituicao || "Sociedade Brasileira de Coluna"
        },
        "medicalSpecialty": [
          "Cirurgia da Coluna Vertebral",
          "Ortopedia e Traumatologia",
          "Neurocirurgia"
        ],
        "knowsAbout": author.especialidades || ["Cirurgia Espinhal", "Deformidades", "Trauma"],
        "alumnusOf": author.titulacao_academica?.map((t) => ({
          "@type": "EducationalOrganization",
          "name": t
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": locale === "en" ? "Home" : locale === "es" ? "Inicio" : "Início",
            "item": `https://www.tratadodecoluna.com.br/${locale}`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": locale === "en" ? "Authors" : locale === "es" ? "Autores" : "Autores",
            "item": `https://www.tratadodecoluna.com.br/${locale}/autores`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": author.nome,
            "item": `https://www.tratadodecoluna.com.br/${locale}/autor/${author.slug || author.id}`
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorJsonLd) }}
      />
      <Header locale={locale} currentPage="autores" />

      <main style={{ minHeight: "100vh", background: "#f4f7fb", paddingBottom: "90px" }}>
        {/* ================= HERO PERFIL AUTOR (PADRÃO HOME) ================= */}
        <section
          className="relative w-full overflow-hidden text-white pt-8 pb-14 sm:pt-12 sm:pb-16 border-b border-white/10"
          style={{
            background:
              "radial-gradient(circle at 19% 24%, rgba(255, 87, 86, 0.45), transparent 34%), linear-gradient(105deg, #c9142a 0%, #39244c 28%, #052b5b 58%, #0062a7 100%)",
          }}
        >
          {/* Anatomical Spine Background Overlay */}
          <img
            src="/assets/hero-spine.png"
            alt=""
            className="absolute right-0 top-0 h-full w-auto max-w-[62%] object-contain pointer-events-none opacity-25 hidden md:block"
            style={{ mixBlendMode: "screen", filter: "contrast(1.2) brightness(1.1)" }}
          />

          <div className="shell relative z-10">
            {/* Breadcrumbs */}
            <div style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.7)", marginBottom: 24, display: "flex", alignItems: "center", gap: 8 }}>
              <Link href={`/${locale}`} style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "none" }}>
                {locale === "en" ? "Home" : locale === "es" ? "Inicio" : "Início"}
              </Link>
              <span>›</span>
              <span style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                {locale === "en" ? "The Treatise" : locale === "es" ? "El Tratado" : "O Tratado"}
              </span>
              <span>›</span>
              <Link href={`/${locale}/autores`} style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "none" }}>
                {locale === "en" ? "Authors" : locale === "es" ? "Autores" : "Autores"}
              </Link>
              <span>›</span>
              <span style={{ color: "#ffffff", fontWeight: 700 }}>{author.nome}</span>
            </div>

            {(() => {
              const hasRealPhoto = Boolean(
                author.foto_url &&
                !author.foto_url.includes("avatar-placeholder") &&
                author.foto_url.trim() !== ""
              );

              if (hasRealPhoto) {
                return (
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: 32, alignItems: "center" }}>
                    {/* Foto do Autor */}
                    <div
                      style={{
                        width: 200,
                        height: 230,
                        borderRadius: 16,
                        overflow: "hidden",
                        background: "#001738",
                        border: "3px solid rgba(255, 255, 255, 0.3)",
                        boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5)",
                        margin: "0 auto",
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
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          background: "rgba(245, 34, 56, 0.25)",
                          border: "1px solid rgba(245, 34, 56, 0.5)",
                          padding: "4px 14px",
                          borderRadius: 20,
                          fontSize: 12,
                          fontWeight: 700,
                          color: "#ff808f",
                          marginBottom: 12,
                        }}
                      >
                        <span>{author.cargo}</span>
                      </div>

                      <h1 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, margin: "0 0 8px", letterSpacing: "-0.03em" }}>
                        {author.nome}
                      </h1>

                      <p style={{ fontSize: 16, color: "#e2e8f0", margin: "0 0 10px", fontWeight: 600 }}>
                        🏛️ {author.instituicao}
                      </p>

                      {/* Badges / ORCID & Vancouver */}
                      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 12px", marginBottom: 14 }}>
                        {author.orcid && (
                          <a
                            href={author.orcid_url || `https://orcid.org/${author.orcid}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 8,
                              background: "rgba(166, 206, 57, 0.15)",
                              border: "1px solid rgba(166, 206, 57, 0.4)",
                              color: "#a6ce39",
                              padding: "5px 12px",
                              borderRadius: 8,
                              fontSize: 13,
                              fontWeight: 600,
                              textDecoration: "none",
                            }}
                          >
                            <svg width="16" height="16" viewBox="0 0 256 256" fill="#a6ce39">
                              <path d="M256 128c0 70.7-57.3 128-128 128S0 198.7 0 128 57.3 0 128 0s128 57.3 128 128z"/>
                              <path fill="#fff" d="M86.3 186.2H70.9V79.1h15.4v107.1zm-7.7-121.7c-5.4 0-9.8-4.4-9.8-9.8s4.4-9.8 9.8-9.8 9.8 4.4 9.8 9.8-4.4 9.8-9.8 9.8zm114.7 65.5c0 30.6-20.8 56.2-54.8 56.2h-31V79.1h32.2c33 0 53.6 25.4 53.6 50.9zm-15.6 0c0-21.7-13.6-37.4-38.3-37.4h-15v74.9h14.9c25.4 0 38.4-15.8 38.4-37.5z"/>
                            </svg>
                            <span>ORCID: {author.orcid}</span>
                            <span style={{ fontSize: 11, opacity: 0.8 }}>↗</span>
                          </a>
                        )}

                        {author.nome_vancouver && (
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 6,
                              background: "rgba(56, 189, 248, 0.15)",
                              border: "1px solid rgba(56, 189, 248, 0.4)",
                              color: "#38bdf8",
                              padding: "5px 12px",
                              borderRadius: 8,
                              fontSize: 13,
                              fontWeight: 600,
                            }}
                          >
                            <span>📑 {locale === "en" ? "Vancouver Citation:" : locale === "es" ? "Cita Vancouver:" : "Citação Vancouver:"}</span>
                            <strong style={{ color: "#ffffff" }}>{author.nome_vancouver}</strong>
                          </span>
                        )}
                      </div>

                      {author.destaque && (
                        <div>
                          <div
                            style={{
                              display: "inline-block",
                              background: "rgba(0, 0, 0, 0.3)",
                              borderLeft: "3px solid #ff3047",
                              padding: "8px 16px",
                              borderRadius: "0 8px 8px 0",
                              color: "#ffffff",
                              fontSize: 13,
                              fontWeight: 600,
                            }}
                          >
                            <span>⭐ {author.destaque}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              }

              // When author has NO photo: left-align everything directly aligned with lower boxes
              return (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", maxWidth: "860px" }}>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background: "rgba(245, 34, 56, 0.25)",
                      border: "1px solid rgba(245, 34, 56, 0.5)",
                      padding: "4px 14px",
                      borderRadius: 20,
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#ff808f",
                      marginBottom: 12,
                    }}
                  >
                    <span>{author.cargo}</span>
                  </div>

                  <h1 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, margin: "0 0 8px", letterSpacing: "-0.03em" }}>
                    {author.nome}
                  </h1>

                  <p style={{ fontSize: 16, color: "#e2e8f0", margin: "0 0 14px", fontWeight: 600 }}>
                    🏛️ {author.instituicao}
                  </p>

                  {/* Badges / ORCID & Vancouver */}
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 12px", marginBottom: 14 }}>
                    {author.orcid && (
                      <a
                        href={author.orcid_url || `https://orcid.org/${author.orcid}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          background: "rgba(166, 206, 57, 0.15)",
                          border: "1px solid rgba(166, 206, 57, 0.4)",
                          color: "#a6ce39",
                          padding: "5px 12px",
                          borderRadius: 8,
                          fontSize: 13,
                          fontWeight: 600,
                          textDecoration: "none",
                        }}
                      >
                        <svg width="16" height="16" viewBox="0 0 256 256" fill="#a6ce39">
                          <path d="M256 128c0 70.7-57.3 128-128 128S0 198.7 0 128 57.3 0 128 0s128 57.3 128 128z"/>
                          <path fill="#fff" d="M86.3 186.2H70.9V79.1h15.4v107.1zm-7.7-121.7c-5.4 0-9.8-4.4-9.8-9.8s4.4-9.8 9.8-9.8 9.8-9.8 9.8 4.4 9.8 9.8-4.4 9.8-9.8 9.8zm114.7 65.5c0 30.6-20.8 56.2-54.8 56.2h-31V79.1h32.2c33 0 53.6 25.4 53.6 50.9zm-15.6 0c0-21.7-13.6-37.4-38.3-37.4h-15v74.9h14.9c25.4 0 38.4-15.8 38.4-37.5z"/>
                        </svg>
                        <span>ORCID: {author.orcid}</span>
                        <span style={{ fontSize: 11, opacity: 0.8 }}>↗</span>
                      </a>
                    )}

                    {author.nome_vancouver && (
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          background: "rgba(56, 189, 248, 0.15)",
                          border: "1px solid rgba(56, 189, 248, 0.4)",
                          color: "#38bdf8",
                          padding: "5px 12px",
                          borderRadius: 8,
                          fontSize: 13,
                          fontWeight: 600,
                        }}
                      >
                        <span>📑 {locale === "en" ? "Vancouver Citation:" : locale === "es" ? "Cita Vancouver:" : "Citação Vancouver:"}</span>
                        <strong style={{ color: "#ffffff" }}>{author.nome_vancouver}</strong>
                      </span>
                    )}
                  </div>

                  {author.destaque && (
                    <div>
                      <div
                        style={{
                          display: "inline-block",
                          background: "rgba(0, 0, 0, 0.3)",
                          borderLeft: "3px solid #ff3047",
                          padding: "8px 16px",
                          borderRadius: "0 8px 8px 0",
                          color: "#ffffff",
                          fontSize: 13,
                          fontWeight: 600,
                        }}
                      >
                        <span>⭐ {author.destaque}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        </section>

        {/* ================= 2-COLUMN CONTENT SECTION ================= */}
        <section style={{ padding: "45px 0 85px", background: "#f8fafc" }}>
          <div className="shell author-detail-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 36, alignItems: "start" }}>
            {/* COLUNA PRINCIPAL */}
            <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
              {/* CARD 1: BIOGRAFIA COMPLETA E TRAJETÓRIA */}
              <article
                style={{
                  background: "#ffffff",
                  borderRadius: 16,
                  padding: "36px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 10px 30px rgba(0, 20, 60, 0.05)",
                }}
              >
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#001a3d", margin: "0 0 16px", display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: "#003382" }}>📖</span> {locale === "en" ? "Biography and Professional Trajectory" : locale === "es" ? "Biografía y Trayectoria Profesional" : "Biografia e Trajetória Profissional"}
                </h2>
                <p style={{ fontSize: 16, color: "#334155", lineHeight: 1.75, margin: 0 }}>
                  {author.bio_completa}
                </p>
              </article>

              {/* CARD 2: CAPÍTULOS AUTORADOS NO TRATADO */}
              <article
                style={{
                  background: "#ffffff",
                  borderRadius: 16,
                  padding: "36px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 10px 30px rgba(0, 20, 60, 0.05)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
                  <h2 style={{ fontSize: 22, fontWeight: 700, color: "#001a3d", margin: 0, display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ color: "#e11d48" }}>📚</span> {locale === "en" ? `Chapters in Treatise (${author.capitulos_tratado.length})` : locale === "es" ? `Capítulos en el Tratado (${author.capitulos_tratado.length})` : `Capítulos no Tratado de Coluna (${author.capitulos_tratado.length})`}
                  </h2>
                  <span style={{ fontSize: 12.5, fontWeight: 700, color: "#003382", background: "#f0f7ff", padding: "4px 12px", borderRadius: 12, border: "1px solid #dbeafe" }}>
                    {locale === "en" ? "Official SBC Masterwork" : locale === "es" ? "Obra Oficial SBC" : "Obra Oficial SBC"}
                  </span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  {author.capitulos_tratado.map((cap) => (
                    <div
                      key={cap.num}
                      style={{
                        border: "1px solid #e2e8f0",
                        borderRadius: 12,
                        padding: "20px",
                        background: "#f8fafc",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 10, flexWrap: "wrap" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span style={{ background: "#001a3d", color: "#fff", padding: "4px 10px", borderRadius: 6, fontSize: 13, fontWeight: 700 }}>
                            {locale === "en" ? "Ch." : locale === "es" ? "Cap." : "Cap."} {cap.num}
                          </span>
                          <span style={{ fontSize: 13, color: "#64748b", fontWeight: 600 }}>
                            {locale === "en" ? "Section" : locale === "es" ? "Sección" : "Seção"} {cap.secao_id}: {cap.secao_nome}
                          </span>
                        </div>
                        <Link
                          href={`/${locale}/capitulo/${cap.num}`}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            fontSize: 13.5,
                            fontWeight: 700,
                            color: "#ffffff",
                            background: "linear-gradient(135deg, #002b66 0%, #001a3d 100%)",
                            padding: "6px 14px",
                            borderRadius: 8,
                            textDecoration: "none",
                          }}
                        >
                          <span>{locale === "en" ? "Read Chapter" : locale === "es" ? "Leer Capítulo" : "Ler Capítulo"}</span>
                          <span>→</span>
                        </Link>
                      </div>

                      <h3 style={{ fontSize: 18, fontWeight: 700, color: "#001a3d", margin: "0" }}>
                        <Link href={`/${locale}/capitulo/${cap.num}`} style={{ color: "inherit", textDecoration: "none" }}>
                          {cap.titulo}
                        </Link>
                      </h3>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            {/* BARRA LATERAL (SIDEBAR) */}
            <aside style={{ display: "flex", flexDirection: "column", gap: 26 }}>
              {/* CARD: ORCID & IDENTIFICAÇÃO CIENTÍFICA */}
              {author.orcid && (
                <div
                  style={{
                    background: "#ffffff",
                    borderRadius: 16,
                    padding: "24px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 10px 30px rgba(0, 20, 60, 0.05)",
                  }}
                >
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#001a3d", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
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

              {/* CARD: ESPECIALIDADES */}
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: 16,
                  padding: "24px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 10px 30px rgba(0, 20, 60, 0.05)",
                }}
              >
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#001a3d", margin: "0 0 14px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  {locale === "en" ? "Practice Areas" : locale === "es" ? "Áreas de Práctica" : "Áreas de Atuação"}
                </h3>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {author.especialidades.map((esp, i) => (
                    <span
                      key={i}
                      style={{
                        background: "#f1f5f9",
                        color: "#003382",
                        padding: "6px 12px",
                        borderRadius: 6,
                        fontSize: 12.5,
                        fontWeight: 700,
                        border: "1px solid #e2e8f0",
                      }}
                    >
                      {esp}
                    </span>
                  ))}
                </div>
              </div>

              {/* CARD: VOLTAR PARA LISTA DE AUTORES */}
              <div
                style={{
                  background: "linear-gradient(135deg, #001a3d 0%, #002b66 100%)",
                  borderRadius: 16,
                  padding: "26px",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                <h4 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 10px" }}>
                  {locale === "en" ? "Complete Editorial Board" : locale === "es" ? "Cuerpo Editorial Completo" : "Corpo Editorial Completo"}
                </h4>
                <p style={{ fontSize: 13.5, color: "#cbd5e1", margin: "0 0 18px", lineHeight: 1.5 }}>
                  {locale === "en"
                    ? "Meet all 204 contributing authors across the 109 chapters."
                    : locale === "es"
                    ? "Conozca a los 204 autores colaboradores de los 109 capítulos."
                    : "Conheça os 204 autores colaboradores presentes nos 109 capítulos da obra."}
                </p>
                <Link
                  href={`/${locale}/autores`}
                  style={{
                    display: "inline-block",
                    width: "100%",
                    padding: "10px 0",
                    borderRadius: 8,
                    background: "linear-gradient(135deg, #f52238 0%, #b80f21 100%)",
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: 14,
                    boxSizing: "border-box",
                  }}
                >
                  {locale === "en" ? "View All Authors →" : locale === "es" ? "Ver Todos los Autores →" : "Ver Todos os Autores →"}
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
