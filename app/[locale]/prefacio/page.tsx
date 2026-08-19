import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Locale } from "@/lib/types";
import { getPrefacioData, EDITORES_TRATADO } from "@/lib/data/institutional-data";

export const revalidate = 0;

interface PrefacioPageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }, { locale: "es" }];
}

export default async function PrefacioPage({ params }: PrefacioPageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";
  const PREFACIO_DATA = getPrefacioData(locale);

  return (
    <>
      <Header locale={locale} currentPage="prefacio" />

      <main style={{ background: "#f8fafc", minHeight: "100vh" }}>
        {/* ========================================================================= */}
        {/* HERO SECTION (Clássica) */}
        {/* ========================================================================= */}
        <section
          style={{
            position: "relative",
            background: "radial-gradient(ellipse at 70% 30%, #00224d 0%, #00122b 50%, #000917 100%)",
            color: "#fff",
            padding: "48px 0 0",
            overflow: "hidden",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* Glowing spine illustration background */}
          <div
            style={{
              position: "absolute",
              right: "4%",
              top: 0,
              bottom: 0,
              width: "48%",
              backgroundImage: "url('/assets/hero-spine.png')",
              backgroundPosition: "top right",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              opacity: 0.35,
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "0 24px",
              position: "relative",
              zIndex: 2,
            }}
          >
            {/* Breadcrumb */}
            <div style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.6)", marginBottom: 28, display: "flex", alignItems: "center", gap: 8 }}>
              <Link href={`/${locale}/home-new`} style={{ color: "rgba(255, 255, 255, 0.7)", textDecoration: "none" }}>
                Início
              </Link>
              <span>›</span>
              <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>O Tratado</span>
              <span>›</span>
              <span style={{ color: "#fff", fontWeight: 700 }}>Prefácio</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 48, alignItems: "center" }}>
              {/* 3D Book Cover */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src="/assets/book-cover.png"
                  alt="Tratado de Cirurgia da Coluna Vertebral"
                  style={{
                    width: 260,
                    height: "auto",
                    borderRadius: "6px 14px 14px 6px",
                    boxShadow: "0 24px 50px rgba(0, 0, 0, 0.6), 0 4px 16px rgba(0, 0, 0, 0.4)",
                    transform: "perspective(1000px) rotateY(-8deg)",
                  }}
                />
              </div>

              {/* Hero Info */}
              <div>
                {/* Institutional Badge */}
                <div
                  style={{
                    display: "inline-block",
                    padding: "4px 12px",
                    borderRadius: 4,
                    border: "1px solid rgba(255, 255, 255, 0.35)",
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    color: "rgba(255, 255, 255, 0.9)",
                    marginBottom: 16,
                    textTransform: "uppercase",
                  }}
                >
                  {PREFACIO_DATA.badge}
                </div>

                <h1
                  style={{
                    fontSize: " clamp(32px, 4.5vw, 44px)",
                    fontWeight: 900,
                    margin: "0 0 12px",
                    color: "#fff",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.15,
                  }}
                >
                  {PREFACIO_DATA.titulo}
                </h1>

                <p
                  style={{
                    fontSize: 16,
                    color: "rgba(255, 255, 255, 0.85)",
                    margin: "0 0 14px",
                    lineHeight: 1.5,
                    maxWidth: 700,
                  }}
                >
                  {PREFACIO_DATA.subtitulo}
                </p>

                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "rgba(255, 255, 255, 0.75)",
                    margin: "0 0 20px",
                  }}
                >
                  {PREFACIO_DATA.autoresLinha}
                </p>

                {/* Print Notice Box */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "12px 18px",
                    borderRadius: 8,
                    background: "rgba(0, 24, 60, 0.65)",
                    border: "1px solid rgba(255, 255, 255, 0.18)",
                    marginBottom: 24,
                    maxWidth: 640,
                  }}
                >
                  <span style={{ fontSize: 20, color: "#f43f5e" }}>📖</span>
                  <span style={{ fontSize: 13.5, color: "rgba(255, 255, 255, 0.9)", lineHeight: 1.4 }}>
                    {PREFACIO_DATA.avisoImpresso}
                  </span>
                </div>

                {/* Action Buttons */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
                  <a
                    href="https://www.dilivros.com.br/"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "12px 22px",
                      borderRadius: 8,
                      background: "#e11d48",
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: 14,
                      textDecoration: "none",
                      boxShadow: "0 4px 14px rgba(225, 29, 72, 0.4)",
                      transition: "all 0.2s",
                    }}
                  >
                    <span>Onde Comprar</span>
                    <span>🛒</span>
                  </a>

                  <Link
                    href={`/${locale}/apresentacao`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "12px 20px",
                      borderRadius: 8,
                      background: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.25)",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: 14,
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                  >
                    <span>Ver apresentação</span>
                    <span>📄</span>
                  </Link>

                  <Link
                    href={`/${locale}/indice`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "12px 20px",
                      borderRadius: 8,
                      background: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.25)",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: 14,
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                  >
                    <span>Ver índice</span>
                    <span>📑</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Strip Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: 12,
                marginTop: 20,
                padding: "14px 16px",
                background: "rgba(0, 16, 40, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.14)",
                borderRadius: 10,
                transform: "translateY(50%)",
                backdropFilter: "blur(6px)",
              }}
            >
              {[
                { icon: "🏛️", title: "Texto institucional" },
                { icon: "📖", title: "Prefácio" },
                { icon: "👥", title: "Editores da obra", href: `/${locale}/autores` },
                { icon: "📚", title: "Obra impressa" },
                { icon: "🌐", title: "Navegação do site" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8px 12px",
                    borderRight: idx < 4 ? "1px solid rgba(255, 255, 255, 0.12)" : "none",
                    textAlign: "center",
                    gap: 4,
                  }}
                >
                  <span style={{ fontSize: 20 }}>{item.icon}</span>
                  <span style={{ fontSize: 12.5, fontWeight: 700, color: "rgba(255, 255, 255, 0.9)" }}>
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* MAIN BODY CONTENT (2 Columns) */}
        {/* ========================================================================= */}
        <section style={{ maxWidth: 1200, margin: "64px auto 48px", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 32, alignItems: "start" }}>
            {/* LEFT COLUMN: Main Text & Highlights */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {/* Card 1: Texto do Prefácio */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: "32px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <span style={{ fontSize: 22 }}>📄</span>
                  <h2 style={{ fontSize: 20, fontWeight: 900, color: "#001a3d", margin: 0 }}>
                    Texto do prefácio
                  </h2>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 16, color: "#334155", fontSize: 15, lineHeight: 1.75 }}>
                  {PREFACIO_DATA.paragrafos.map((p, idx) => (
                    <p key={idx} style={{ margin: 0 }}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              {/* Card 2: Mensagem Central */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: "28px 32px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <span style={{ fontSize: 22 }}>💬</span>
                  <h3 style={{ fontSize: 18, fontWeight: 900, color: "#001a3d", margin: 0 }}>
                    Mensagem central
                  </h3>
                </div>

                <div
                  style={{
                    background: "#eff6ff",
                    border: "1px solid #bfdbfe",
                    borderRadius: 10,
                    padding: "20px 24px",
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ fontSize: 32, color: "#2563eb", lineHeight: 1, fontWeight: 900 }}>❝</span>
                  <p style={{ margin: 0, fontSize: 15.5, fontWeight: 700, color: "#1e3a8a", lineHeight: 1.6 }}>
                    {PREFACIO_DATA.mensagemCentral}
                  </p>
                </div>
              </div>

              {/* Card 3: Destaques do Prefácio */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: "28px 32px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <span style={{ fontSize: 22 }}>⭐</span>
                  <h3 style={{ fontSize: 18, fontWeight: 900, color: "#001a3d", margin: 0 }}>
                    Destaques do prefácio
                  </h3>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                  {PREFACIO_DATA.destaques.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        borderRadius: 10,
                        padding: "18px 16px",
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                      }}
                    >
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: "50%",
                          background:
                            item.cor === "red"
                              ? "linear-gradient(135deg, #e11d48 0%, #be123c 100%)"
                              : item.cor === "blue"
                              ? "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)"
                              : "linear-gradient(135deg, #1e3a8a 0%, #172554 100%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontSize: 18,
                        }}
                      >
                        {item.cor === "red" ? "🏛️" : item.cor === "blue" ? "👥" : "🔬"}
                      </div>
                      <div>
                        <h4 style={{ margin: "0 0 4px", fontSize: 14.5, fontWeight: 800, color: "#001a3d" }}>
                          {item.titulo}
                        </h4>
                        <p style={{ margin: 0, fontSize: 12.5, color: "#64748b", lineHeight: 1.45 }}>
                          {item.descricao}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 4: Sobre a obra */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: "28px 32px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <span style={{ fontSize: 22 }}>📖</span>
                  <h3 style={{ fontSize: 18, fontWeight: 900, color: "#001a3d", margin: 0 }}>
                    Sobre a obra
                  </h3>
                </div>
                <p style={{ margin: 0, fontSize: 14.5, color: "#475569", lineHeight: 1.65 }}>
                  {PREFACIO_DATA.sobreAObra}
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: Sidebar */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {/* Autores do Prefácio */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: "24px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <span style={{ fontSize: 20 }}>👥</span>
                  <h3 style={{ fontSize: 16.5, fontWeight: 900, color: "#001a3d", margin: 0 }}>
                    Autores do prefácio
                  </h3>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {EDITORES_TRATADO.map((editor, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: "50%",
                          overflow: "hidden",
                          background: "#e2e8f0",
                          border: "1px solid #cbd5e1",
                          flexShrink: 0,
                        }}
                      >
                        <img
                          src={editor.foto_url}
                          alt={editor.nome}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>
                      <div>
                        <h4 style={{ margin: "0 0 2px", fontSize: 14, fontWeight: 800, color: "#001a3d" }}>
                          {editor.nome}
                        </h4>
                        <span style={{ fontSize: 12, color: "#64748b" }}>
                          {editor.role}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tipo de Conteúdo */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: "24px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <span style={{ fontSize: 20 }}>📄</span>
                  <h3 style={{ fontSize: 16.5, fontWeight: 900, color: "#001a3d", margin: 0 }}>
                    Tipo de conteúdo
                  </h3>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#334155", fontSize: 13.5, fontWeight: 700 }}>
                    <span>📄</span>
                    <span>Texto institucional</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#334155", fontSize: 13.5, fontWeight: 700 }}>
                    <span>📖</span>
                    <span>Prefácio</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#334155", fontSize: 13.5, fontWeight: 700 }}>
                    <span>📚</span>
                    <span>Apoio à leitura</span>
                  </div>
                </div>
              </div>

              {/* Aviso Importante */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: "24px",
                  border: "1px solid #fed7aa",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12, color: "#ea580c" }}>
                  <span style={{ fontSize: 18 }}>🛡️</span>
                  <h3 style={{ fontSize: 15, fontWeight: 800, margin: 0, color: "#c2410c" }}>
                    Aviso importante
                  </h3>
                </div>

                <p style={{ fontSize: 12.5, fontWeight: 700, color: "#475569", margin: "0 0 10px", lineHeight: 1.4 }}>
                  Este site é uma plataforma de apoio à leitura.
                </p>

                <p style={{ fontSize: 12.5, color: "#64748b", margin: 0, lineHeight: 1.5 }}>
                  O conteúdo integral do prefácio e de toda a obra está disponível exclusivamente na edição impressa do Tratado de Cirurgia da Coluna Vertebral.
                </p>

                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 14 }}>
                  <span style={{ fontSize: 40, opacity: 0.25, color: "#ea580c" }}>📖</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* BOTTOM CTA BANNER (Uma obra para consulta...) */}
        {/* ========================================================================= */}
        <section
          style={{
            maxWidth: 1200,
            margin: "0 auto 60px",
            padding: "0 24px",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #001a3d 0%, #001026 100%)",
              borderRadius: 16,
              padding: "32px 40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
              color: "#fff",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <img
                src="/assets/book-cover.png"
                alt="Livro"
                style={{ width: 70, height: "auto", borderRadius: 4, boxShadow: "0 6px 16px rgba(0,0,0,0.4)" }}
              />
              <div>
                <h3 style={{ fontSize: 19, fontWeight: 900, margin: "0 0 12px", color: "#fff" }}>
                  Uma obra para consulta, estudo e referência — exclusivamente em formato impresso.
                </h3>
                <a
                  href="https://www.dilivros.com.br/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 20px",
                    borderRadius: 8,
                    background: "#e11d48",
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: 13.5,
                    textDecoration: "none",
                  }}
                >
                  <span>Onde Comprar</span>
                  <span>🛒</span>
                </a>
              </div>
            </div>

            <div style={{ fontSize: 60, opacity: 0.2, color: "#fff" }}>
              📖
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
