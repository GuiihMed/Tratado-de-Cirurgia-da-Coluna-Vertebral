import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import ModernHeader from "@/components/modern/ModernHeader";
import ModernFooter from "@/components/modern/ModernFooter";
import { Locale } from "@/lib/types";
import { AUTHORS_DIRECTORY, getAuthorByIdOrSlug } from "@/lib/data/authors";
import AuthorNewClientView from "@/components/modern/AuthorNewClientView";

export const revalidate = 0;

interface AutorNewPageProps {
  params: Promise<{ locale: string; id: string }>;
}

export function generateStaticParams() {
  const locales = ["pt", "en", "es"];
  const params: { locale: string; id: string }[] = [];
  const extraSlugs = [
    "helton-defino",
    "marcelo-risso",
    "elcio-landim",
    "luiz-roberto-gomes-vialle",
    "edson-pudles",
  ];

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
}: AutorNewPageProps): Promise<Metadata> {
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
    `Perfil acadêmico e capítulos de autoria de ${author.nome} no Tratado de Cirurgia da Coluna Vertebral da Sociedade Brasileira de Coluna (SBC). Filiação: ${author.instituicao || "SBC"}.`;
  const description =
    descRaw.length > 200 ? `${descRaw.slice(0, 197)}...` : descRaw;

  const pageUrl = `https://livro-sbc.vercel.app/${locale}/autor-new/${author.slug || author.id}`;
  const authorPhoto =
    author.foto_url && author.foto_url.startsWith("http")
      ? author.foto_url
      : author.foto_url && author.foto_url.startsWith("/")
      ? `https://livro-sbc.vercel.app${author.foto_url}`
      : "https://livro-sbc.vercel.app/assets/og-cover.png";

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
        pt: `https://livro-sbc.vercel.app/pt/autor-new/${author.slug || author.id}`,
        en: `https://livro-sbc.vercel.app/en/autor-new/${author.slug || author.id}`,
        es: `https://livro-sbc.vercel.app/es/autor-new/${author.slug || author.id}`,
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
          url: "https://livro-sbc.vercel.app/assets/og-cover.png",
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

export default async function AutorNewPage({ params }: AutorNewPageProps) {
  const resolvedParams = await params;
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

  return (
    <div
      style={{
        background: "#001026",
        color: "#1e293b",
        minHeight: "100vh",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <ModernHeader locale={locale} currentPage="other" />

      <main>
        {/* ================= MODERN HERO SECTION ================= */}
        <section
          style={{
            position: "relative",
            background:
              "radial-gradient(ellipse at 85% 20%, rgba(245, 34, 56, 0.28) 0%, rgba(0, 26, 61, 0.95) 50%, #001026 100%)",
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
              <Link
                href={`/${locale}/home-new`}
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  textDecoration: "none",
                }}
              >
                {locale === "en" ? "Home" : locale === "es" ? "Inicio" : "Início"}
              </Link>
              <span>›</span>
              <span style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                {locale === "en"
                  ? "The Treatise"
                  : locale === "es"
                  ? "El Tratado"
                  : "O Tratado"}
              </span>
              <span>›</span>
              <Link
                href={`/${locale}/autores-new`}
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  textDecoration: "none",
                }}
              >
                {locale === "en"
                  ? "Authors"
                  : locale === "es"
                  ? "Autores"
                  : "Autores"}
              </Link>
              <span>›</span>
              <span style={{ color: "#ffffff", fontWeight: 700 }}>
                {author.nome}
              </span>
            </nav>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
                gap: 32,
                alignItems: "center",
              }}
            >
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
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
              </div>

              <div>
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    flexWrap: "wrap",
                    alignItems: "center",
                    marginBottom: 12,
                  }}
                >
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

                <p
                  style={{
                    fontSize: 16,
                    color: "#cbd5e1",
                    margin: "0 0 14px",
                    fontWeight: 500,
                  }}
                >
                  🏛️ {author.instituicao}
                </p>

                {author.orcid && (
                  <div style={{ margin: "0 0 16px", display: "inline-block" }}>
                    <a
                      href={
                        author.orcid_url ||
                        `https://orcid.org/${author.orcid}`
                      }
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
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 256 256"
                        fill="#a6ce39"
                      >
                        <path d="M128,0A128,128,0,1,0,256,128,128,128,0,0,0,128,0ZM86.4,185.6H67.2V70.4H86.4ZM76.8,57.6a14.4,14.4,0,1,1,14.4-14.4A14.4,14.4,0,0,1,76.8,57.6Zm112,80c0,27.2-17.6,48-48,48H108.8V70.4h32C171.2,70.4,188.8,91.2,188.8,137.6Zm-19.2,0c0-17.6-9.6-32-28.8-32H128v64h12.8C160,169.6,169.6,155.2,169.6,137.6Z" />
                      </svg>
                      <span>ORCID: {author.orcid}</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Tab View */}
        <section style={{ background: "#f1f5f9" }}>
          <AuthorNewClientView author={author} locale={locale} />
        </section>
      </main>

      <ModernFooter locale={locale} />
    </div>
  );
}
