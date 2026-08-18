import Link from "next/link";
import { notFound } from "next/navigation";
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

  for (const locale of locales) {
    for (const author of AUTHORS_DIRECTORY) {
      params.push({ locale, id: author.id });
      params.push({ locale, id: author.slug });
    }
  }

  return params;
}

export default async function AutorPage({ params }: AutorPageProps) {
  const { locale: rawLocale, id } = await params;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";

  const author = getAuthorByIdOrSlug(id) || AUTHORS_DIRECTORY[0];

  if (!author) {
    notFound();
  }

  return (
    <>
      <Header locale={locale} currentPage="other" />

      <main style={{ minHeight: "100vh", background: "#f4f7fb", paddingBottom: "90px" }}>
        {/* ================= HERO PERFIL AUTOR CLÁSSICO ================= */}
        <section
          style={{
            background: "radial-gradient(circle at 10% 20%, rgba(245, 34, 56, 0.45) 0%, rgba(0, 34, 77, 0.95) 55%, #00122e 100%)",
            color: "#ffffff",
            padding: "50px 0 60px",
            position: "relative",
            overflow: "hidden",
            borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
          }}
        >
          {/* Fundo Anatômico da Coluna */}
          <div
            style={{
              position: "absolute",
              right: "-5%",
              top: "-15%",
              width: "500px",
              height: "600px",
              backgroundImage: "url('/assets/hero-spine.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              opacity: 0.22,
              pointerEvents: "none",
            }}
          />

          <div className="shell" style={{ position: "relative", zIndex: 2 }}>
            {/* Breadcrumbs */}
            <nav
              aria-label="Breadcrumb"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                color: "#94a3b8",
                marginBottom: 26,
              }}
            >
              <Link href={`/${locale}`} style={{ color: "#cbd5e1", textDecoration: "none" }}>
                Início
              </Link>
              <span>/</span>
              <Link href={`/${locale}/autores`} style={{ color: "#cbd5e1", textDecoration: "none" }}>
                Autores
              </Link>
              <span>/</span>
              <span style={{ color: "#ffffff", fontWeight: 700 }}>{author.nome}</span>
            </nav>

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

                <h1 style={{ fontSize: "clamp(32px, 3.5vw, 46px)", fontWeight: 800, margin: "0 0 8px", letterSpacing: "-0.03em" }}>
                  {author.nome}
                </h1>

                <p style={{ fontSize: 16, color: "#e2e8f0", margin: "0 0 6px", fontWeight: 600 }}>
                  🏛️ {author.instituicao} • <span style={{ color: "#94a3b8" }}>{author.cidade_estado}</span>
                </p>

                <p style={{ fontSize: 14, color: "#94a3b8", margin: "0 0 18px" }}>
                  📋 {author.crm}
                </p>

                <div
                  style={{
                    display: "inline-block",
                    background: "rgba(0, 0, 0, 0.3)",
                    borderLeft: "3px solid #ff3047",
                    padding: "8px 16px",
                    borderRadius: "0 8px 8px 0",
                    fontSize: 14,
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
                <h2 style={{ fontSize: 22, fontWeight: 800, color: "#001a3d", margin: "0 0 16px", display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: "#003382" }}>📖</span> Biografia e Trajetória Profissional
                </h2>
                <p style={{ fontSize: 16, color: "#334155", lineHeight: 1.7, margin: 0 }}>
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
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                  <h2 style={{ fontSize: 22, fontWeight: 800, color: "#001a3d", margin: 0, display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ color: "#e11d48" }}>📚</span> Capítulos no Tratado de Coluna ({author.capitulos_tratado.length})
                  </h2>
                  <span style={{ fontSize: 12.5, fontWeight: 700, color: "#003382", background: "#f0f7ff", padding: "4px 12px", borderRadius: 12, border: "1px solid #dbeafe" }}>
                    Obra Oficial SBC
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
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 8 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span style={{ background: "#001a3d", color: "#fff", padding: "4px 10px", borderRadius: 6, fontSize: 13, fontWeight: 800 }}>
                            Cap. {cap.num}
                          </span>
                          <span style={{ fontSize: 13, color: "#64748b", fontWeight: 600 }}>
                            Seção {cap.secao_id}: {cap.secao_nome}
                          </span>
                        </div>
                        <Link
                          href={`/${locale}/capitulo/${cap.num}`}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4,
                            fontSize: 13,
                            fontWeight: 700,
                            color: "#e11d48",
                            textDecoration: "none",
                          }}
                        >
                          <span>Acessar Capítulo</span>
                          <span>→</span>
                        </Link>
                      </div>

                      <h3 style={{ fontSize: 18, fontWeight: 800, color: "#001a3d", margin: "0 0 8px" }}>
                        {cap.titulo}
                      </h3>

                      <p style={{ fontSize: 14.5, color: "#475569", lineHeight: 1.5, margin: "0 0 12px" }}>
                        {cap.resumo_breve}
                      </p>

                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        {cap.decs_mesh.map((tag, i) => (
                          <span
                            key={i}
                            style={{
                              background: "#e2e8f0",
                              color: "#334155",
                              fontSize: 11.5,
                              fontWeight: 600,
                              padding: "2px 8px",
                              borderRadius: 4,
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

              {/* CARD 3: PUBLICAÇÕES DE DESTAQUE & LATTES */}
              <article
                style={{
                  background: "#ffffff",
                  borderRadius: 16,
                  padding: "36px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 10px 30px rgba(0, 20, 60, 0.05)",
                }}
              >
                <h2 style={{ fontSize: 22, fontWeight: 800, color: "#001a3d", margin: "0 0 16px", display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: "#003382" }}>🔬</span> Publicações Científicas de Referência
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {author.publicacoes_destaque.map((pub, i) => (
                    <div
                      key={i}
                      style={{
                        padding: "14px 18px",
                        borderRadius: 10,
                        background: "#f8fafc",
                        border: "1px solid #e2e8f0",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                        <span style={{ fontSize: 12, fontWeight: 800, color: "#003382", background: "#e0f2fe", padding: "2px 8px", borderRadius: 4 }}>
                          {pub.ano}
                        </span>
                        <span style={{ fontSize: 13, fontWeight: 700, color: "#64748b" }}>
                          {pub.periodico}
                        </span>
                      </div>
                      <p style={{ fontSize: 15, fontWeight: 700, color: "#001a3d", margin: "0 0 6px" }}>
                        {pub.titulo}
                      </p>
                      {pub.doi && (
                        <span style={{ fontSize: 12.5, color: "#0284c7", fontWeight: 600 }}>
                          DOI: {pub.doi}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </article>
            </div>

            {/* BARRA LATERAL (SIDEBAR) */}
            <aside style={{ display: "flex", flexDirection: "column", gap: 26 }}>
              {/* CARD: TITULAÇÃO E AFILIAÇÕES */}
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: 16,
                  padding: "28px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 10px 30px rgba(0, 20, 60, 0.05)",
                }}
              >
                <h3 style={{ fontSize: 17, fontWeight: 800, color: "#001a3d", margin: "0 0 16px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  Titulação Acadêmica
                </h3>
                <ul style={{ margin: 0, paddingLeft: 18, color: "#475569", fontSize: 14, lineHeight: 1.6 }}>
                  {author.titulacao_academica.map((tit, i) => (
                    <li key={i} style={{ marginBottom: 8 }}>
                      {tit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CARD: CARGOS EM SOCIEDADES */}
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: 16,
                  padding: "28px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 10px 30px rgba(0, 20, 60, 0.05)",
                }}
              >
                <h3 style={{ fontSize: 17, fontWeight: 800, color: "#001a3d", margin: "0 0 16px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  Cargos em Sociedades
                </h3>
                <ul style={{ margin: 0, paddingLeft: 18, color: "#475569", fontSize: 14, lineHeight: 1.6 }}>
                  {author.cargos_sociedades.map((cargo, i) => (
                    <li key={i} style={{ marginBottom: 8 }}>
                      {cargo}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CARD: ESPECIALIDADES CIRÚRGICAS */}
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: 16,
                  padding: "28px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 10px 30px rgba(0, 20, 60, 0.05)",
                }}
              >
                <h3 style={{ fontSize: 17, fontWeight: 800, color: "#001a3d", margin: "0 0 14px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  Áreas de Atuação
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
                <h4 style={{ fontSize: 18, fontWeight: 800, margin: "0 0 10px" }}>
                  Corpo Editorial Completo
                </h4>
                <p style={{ fontSize: 13.5, color: "#cbd5e1", margin: "0 0 18px", lineHeight: 1.5 }}>
                  Conheça os demais editores e autores responsáveis pelos 109 capítulos da obra.
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
                  Ver Todos os Autores →
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
