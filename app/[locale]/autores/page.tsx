import Link from "next/link";
import Header from "@/components/Header";
import StatsBar from "@/components/StatsBar";
import Footer from "@/components/Footer";
import { Locale } from "@/lib/types";
import { getDictionary } from "@/lib/i18n/dictionaries";

export const revalidate = 0;

interface AutoresPageProps {
  params: Promise<{ locale: string }>;
}

const AUTHORS_DATA = [
  {
    id: "1",
    nome: "Dr. Edson Pudles",
    cargo: "Editor-Chefe / SBC",
    instituicao: "Sociedade Brasileira de Coluna (SBC)",
    destaque: "Coordenação Editorial de 109 Capítulos",
    foto_url: "/assets/edson-pudles.png",
    bio: "Presidente de Honra e Referência Nacional em Cirurgia e Deformidades da Coluna Vertebral. Liderança na concepção e coordenação científica das diretrizes editoriais do Tratado de Cirurgia da Coluna Vertebral pela Sociedade Brasileira de Coluna.",
    capitulos: [
      { num: 1, titulo: "Histórico da Cirurgia da Coluna Vertebral no Brasil" },
      { num: 2, titulo: "Princípios Éticos e Médico-Legais na Prática Espinhal" },
      { num: 25, titulo: "Planejamento Cirúrgico em Deformidades Complexas" },
    ],
    titulacao: "Membro Emérito da Sociedade Brasileira de Coluna e Sociedade Brasileira de Ortopedia e Traumatologia (SBOT).",
    especialidades: ["Deformidades da Coluna", "Liderança Científica", "Diretrizes SBC"],
  },
  {
    id: "2",
    nome: "Dr. Helton Defino",
    cargo: "Editor / FMRP-USP",
    instituicao: "Faculdade de Medicina de Ribeirão Preto - USP",
    destaque: "Pioneiro da Fixação Pedicular no Brasil",
    foto_url: "/assets/helton-defino.png",
    bio: "Professor Titular do Departamento de Ortopedia e Anestesiologia da Faculdade de Medicina de Ribeirão Preto (USP). Reconhecido internacionalmente pelo pioneirismo e desenvolvimento de pesquisas biomecânicas em fixação pedicular e traumatologia espinhal.",
    capitulos: [
      { num: 3, titulo: "Biomecânica da Coluna Vertebral e Fixação Pedicular" },
      { num: 14, titulo: "Fraturas Toracolombares: Classificação e Tratamento Cirúrgico" },
      { num: 42, titulo: "Artrodese e Biologia da Fusão Óssea na Coluna" },
    ],
    titulacao: "Professor Titular da USP. Ex-Presidente da Sociedade Brasileira de Coluna e Membro Internacional da Scoliosis Research Society (SRS).",
    especialidades: ["Biomecânica Espinhal", "Fixação Pedicular", "Trauma Raquimedular"],
  },
  {
    id: "3",
    nome: "Dr. Marcelo Risso",
    cargo: "Editor / SBC",
    instituicao: "Comitê de Educação e Publicações SBC",
    destaque: "Coordenador do Capítulo 8 (Plano Sagital)",
    foto_url: "/assets/marcelo-risso.png",
    bio: "Especialista em Equilíbrio Sagital Global, Osteotomias Tridimensionais de Alta Complexidade e Cirurgia Minimamente Invasiva da Coluna Vertebral. Ampla atuação no Comitê Científico da SBC e formação de especialistas.",
    capitulos: [
      { num: 8, titulo: "Avaliação Radiográfica do Equilíbrio Sagital da Coluna Vertebral" },
      { num: 33, titulo: "Osteotomias da Coluna: PSO, Smith-Petersen e VCR" },
      { num: 76, titulo: "Tratamento Cirúrgico da Deformidade do Adulto" },
    ],
    titulacao: "Mestre e Doutor em Ciências Médicas. Coordenador da Comissão de Publicações e Ensino da Sociedade Brasileira de Coluna.",
    especialidades: ["Equilíbrio Sagital", "Osteotomias 3D", "Minimamente Invasiva"],
  },
  {
    id: "4",
    nome: "Dr. Cristiano Menezes",
    cargo: "Editor Associado / MIS",
    instituicao: "Hospital Ortopédico de Belo Horizonte",
    destaque: "Referência em Cirurgia Endoscópica e TLIF/LLIF",
    foto_url: "/assets/avatar-1.png",
    bio: "Pioneiro na introdução e desenvolvimento de técnicas cirúrgicas minimamente invasivas (MIS), artrodese intersomática lateral (LLIF) e descompressão endoscópica da coluna no cenário brasileiro e latino-americano.",
    capitulos: [
      { num: 55, titulo: "Técnicas Minimamente Invasivas: TLIF e LLIF na Coluna Lombar" },
      { num: 62, titulo: "Cirurgia Endoscópica da Coluna: Indicações e Curva de Aprendizado" },
    ],
    titulacao: "Membro Titular da SBC e North American Spine Society (NASS).",
    especialidades: ["Cirurgia Endoscópica", "MIS", "Artrodese Lateral (LLIF)"],
  },
  {
    id: "5",
    nome: "Dr. Robert Meves",
    cargo: "Editor Associado / Santa Casa SP",
    instituicao: "Faculdade de Ciências Médicas da Santa Casa de São Paulo",
    destaque: "Especialista em Deformidades da Infância e Trauma",
    foto_url: "/assets/avatar-2.png",
    bio: "Professor Adjunto e Chefe do Grupo de Coluna da Santa Casa de São Paulo. Ampla produção científica em traumatologia da coluna, lesões cervicais e deformidades pediátricas.",
    capitulos: [
      { num: 19, titulo: "Traumatismo Cranioencefálico e Lesões Cervicais Altas (C1-C2)" },
      { num: 48, titulo: "Escoliose Idiopática do Adolescente: Princípios de Correção" },
    ],
    titulacao: "Livre-Docente em Ortopedia. Membro Ativo do Scoliosis Research Society (SRS) e SBC.",
    especialidades: ["Escoliose Idiopática", "Trauma Cervical", "Cirurgia Pediátrica"],
  },
];

export function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }, { locale: "es" }];
}

export default async function AutoresPage({ params }: AutoresPageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";

  const dict = getDictionary(locale);

  return (
    <>
      <Header locale={locale} currentPage="other" />

      <main style={{ minHeight: "100vh", background: "#f8fafc" }}>
        {/* HERO AUTORES (ESTILO CLÁSSICO FIDEDIGNO) */}
        <section className="hero-index" style={{ minHeight: "680px" }}>
          <img
            className="hero-anatomy"
            src="/assets/hero-spine.png"
            alt="Ilustração anatômica da coluna vertebral"
          />
          <div className="hero-light"></div>
          <div className="shell hero-main" style={{ paddingTop: "60px", paddingBottom: "20px" }}>
            <div className="hero-copy">
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(245, 34, 56, 0.2)",
                  border: "1px solid rgba(245, 34, 56, 0.4)",
                  padding: "6px 16px",
                  borderRadius: 20,
                  fontSize: 13.5,
                  fontWeight: 700,
                  color: "#ff808f",
                  marginBottom: 16,
                }}
              >
                <span>👥 CORPO EDITORIAL E AUTORIA</span>
              </div>
              <h1 style={{ fontSize: "clamp(38px, 4vw, 56px)", marginBottom: 18 }}>
                {locale === "en"
                  ? "Authors & Editorial Board"
                  : locale === "es"
                  ? "Autores y Consejo Editorial"
                  : "Autores e Corpo Editorial"}
              </h1>
              <p style={{ fontSize: "clamp(18px, 1.6vw, 22px)", maxWidth: 860, lineHeight: 1.4, marginBottom: 26 }}>
                {locale === "en"
                  ? "Meet the distinguished spine surgeons, professors, and researchers who contributed to the 109 chapters of the Brazilian Spine Society Treatise."
                  : locale === "es"
                  ? "Conozca a los destacados cirujanos de columna, profesores e investigadores que contribuyeron a los 109 capítulos del Tratado da Sociedade Brasileira de Coluna."
                  : "Conheça os eminentes cirurgiões de coluna, professores universitários e pesquisadores responsáveis pela coordenação e redação dos 109 capítulos do Tratado da Sociedade Brasileira de Coluna."}
              </p>
              <div className="hero-actions" style={{ marginBottom: 30 }}>
                <a className="btn btn-primary" href="#lista-autores">
                  {locale === "en" ? "Explore Authors" : locale === "es" ? "Ver Autores" : "Ver Corpo Editorial"} <span>↓</span>
                </a>
                <Link className="btn btn-outline" href={`/${locale}/indice`}>
                  {locale === "en" ? "Browse Chapters" : locale === "es" ? "Explorar Capítulos" : "Explorar Capítulos"}{" "}
                  <svg>
                    <use href="#i-arrow"></use>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <StatsBar locale={locale} variant="home" />
        </section>

        {/* LISTA DE AUTORES E EDITORES */}
        <section id="lista-autores" style={{ padding: "70px 0 90px" }}>
          <div className="shell">
            <div style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 50px" }}>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#003382",
                }}
              >
                Excelência Acadêmica e Cirúrgica
              </span>
              <h2 style={{ fontSize: 36, fontWeight: 800, color: "#001a3d", margin: "8px 0 16px" }}>
                Editores e Principais Contribuidores
              </h2>
              <p style={{ fontSize: 18, color: "#475569", lineHeight: 1.5 }}>
                Os maiores nomes da cirurgia da coluna vertebral do Brasil reunidos em uma obra definitiva de 10 seções temáticas.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
              {AUTHORS_DATA.map((author, index) => (
                <article
                  key={author.id}
                  style={{
                    background: "#ffffff",
                    borderRadius: 16,
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 10px 30px rgba(0, 20, 60, 0.05)",
                    padding: "36px",
                    display: "grid",
                    gridTemplateColumns: "240px 1fr",
                    gap: 36,
                    alignItems: "start",
                  }}
                >
                  {/* Foto e Badges */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                    <div
                      style={{
                        width: 170,
                        height: 200,
                        borderRadius: 14,
                        overflow: "hidden",
                        background: "#001738",
                        border: "3px solid #e2e8f0",
                        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)",
                        marginBottom: 16,
                      }}
                    >
                      <img
                        src={author.foto_url}
                        alt={author.nome}
                        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                      />
                    </div>
                    <span
                      style={{
                        background: "rgba(0, 51, 130, 0.08)",
                        color: "#003382",
                        padding: "4px 12px",
                        borderRadius: 20,
                        fontSize: 12,
                        fontWeight: 700,
                        border: "1px solid rgba(0, 51, 130, 0.15)",
                        marginBottom: 8,
                      }}
                    >
                      {author.cargo}
                    </span>
                    <span style={{ fontSize: 13, color: "#64748b", fontWeight: 500 }}>
                      {author.instituicao}
                    </span>
                  </div>

                  {/* Detalhes e Biografia */}
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, borderBottom: "1px solid #f1f5f9", paddingBottom: 16, marginBottom: 18 }}>
                      <div>
                        <h3 style={{ fontSize: 26, fontWeight: 800, color: "#001a3d", margin: "0 0 6px" }}>
                          <Link href={`/${locale}/autor/${author.id}`} style={{ color: "inherit", textDecoration: "none" }}>
                            {author.nome}
                          </Link>
                        </h3>
                        <p style={{ fontSize: 14.5, color: "#e11d48", fontWeight: 700, margin: 0 }}>
                          ⭐ {author.destaque}
                        </p>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <Link
                          href={`/${locale}/autor/${author.id}`}
                          style={{
                            background: "#003382",
                            color: "#ffffff",
                            padding: "6px 14px",
                            borderRadius: 8,
                            fontSize: 12.5,
                            fontWeight: 700,
                            textDecoration: "none",
                          }}
                        >
                          Ver Perfil Completo →
                        </Link>
                        <span style={{ fontSize: 12.5, fontWeight: 800, color: "#94a3b8", background: "#f8fafc", padding: "6px 12px", borderRadius: 8, border: "1px solid #e2e8f0" }}>
                          AUTOR #{author.id.padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: "#334155", lineHeight: 1.6, marginBottom: 20 }}>
                      {author.bio}
                    </p>

                    <div style={{ background: "#f8fafc", borderRadius: 12, padding: "16px 20px", border: "1px solid #e2e8f0", marginBottom: 20 }}>
                      <strong style={{ display: "block", fontSize: 13, textTransform: "uppercase", color: "#003382", letterSpacing: "0.05em", marginBottom: 6 }}>
                        Titulação & Vinculação Acadêmica:
                      </strong>
                      <p style={{ fontSize: 14.5, color: "#475569", margin: 0, lineHeight: 1.5 }}>
                        {author.titulacao}
                      </p>
                    </div>

                    {/* Capítulos Relacionados */}
                    <div>
                      <strong style={{ display: "block", fontSize: 13, textTransform: "uppercase", color: "#001a3d", letterSpacing: "0.05em", marginBottom: 10 }}>
                        Capítulos Sob Sua Autoria / Coordenação no Tratado:
                      </strong>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        {author.capitulos.map((cap) => (
                          <Link
                            key={cap.num}
                            href={`/${locale}/capitulo/${cap.num}`}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              background: "#ffffff",
                              padding: "10px 16px",
                              borderRadius: 8,
                              border: "1px solid #e2e8f0",
                              textDecoration: "none",
                              color: "#001a3d",
                              fontSize: 14.5,
                              fontWeight: 600,
                              transition: "all 0.2s ease",
                            }}
                          >
                            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                              <span style={{ background: "#001a3d", color: "#fff", padding: "2px 8px", borderRadius: 4, fontSize: 12, fontWeight: 700 }}>
                                Cap. {cap.num}
                              </span>
                              <span>{cap.titulo}</span>
                            </div>
                            <span style={{ color: "#e11d48", fontSize: 13, fontWeight: 700 }}>Acessar Capítulo →</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Especialidades */}
                    <div style={{ marginTop: 20, display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {author.especialidades.map((esp, i) => (
                        <span
                          key={i}
                          style={{
                            background: "#f1f5f9",
                            color: "#475569",
                            padding: "4px 12px",
                            borderRadius: 6,
                            fontSize: 12.5,
                            fontWeight: 600,
                          }}
                        >
                          🏷️ {esp}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
