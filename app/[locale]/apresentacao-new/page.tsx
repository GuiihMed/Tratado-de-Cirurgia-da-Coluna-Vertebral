import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Locale } from "@/lib/types";
import { getApresentacaoData } from "@/lib/data/institutional-data";
import {
  BookOpen,
  ShoppingCart,
  FileText,
  Layers,
  Building2,
  User,
  Globe,
  Quote,
  Award,
  Target,
  ShieldCheck,
} from "lucide-react";

export const revalidate = 0;

interface ApresentacaoPageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }, { locale: "es" }];
}

export default async function ApresentacaoPage({ params }: ApresentacaoPageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";
  const APRESENTACAO_DATA = getApresentacaoData(locale);

  return (
    <>
      <Header locale={locale} currentPage="apresentacao" />

      <main style={{ background: "#f8fafc", minHeight: "100vh" }}>
        {/* ========================================================================= */}
        {/* HERO SECTION (PADRÃO HOME - Apresentação) */}
        <section
          className="relative w-full overflow-hidden text-white pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-white/10"
          style={{
            background:
              "radial-gradient(circle at 19% 24%, rgba(255, 87, 86, 0.45), transparent 34%), linear-gradient(105deg, #c9142a 0%, #39244c 28%, #052b5b 58%, #0062a7 100%)",
          }}
        >
          {/* Subtle Anatomical Spine Background Overlay */}
          <img
            src="/assets/hero-spine.png"
            alt=""
            className="absolute right-0 top-0 h-full w-auto max-w-[62%] object-contain pointer-events-none opacity-25 hidden md:block"
            style={{ mixBlendMode: "screen", filter: "contrast(1.2) brightness(1.1)" }}
          />

          <div className="w-full px-4 sm:px-6 md:px-8 mx-auto max-w-7xl relative z-10">
            {/* Breadcrumb */}
            <div style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.7)", marginBottom: 24, display: "flex", alignItems: "center", gap: 8 }}>
              <Link href={`/${locale}`} style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "none" }}>
                {locale === "en" ? "Home" : locale === "es" ? "Inicio" : "Início"}
              </Link>
              <span>›</span>
              <span style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                {locale === "en" ? "The Treatise" : locale === "es" ? "El Tratado" : "O Tratado"}
              </span>
              <span>›</span>
              <span style={{ color: "#fff", fontWeight: 700 }}>
                {locale === "en" ? "Presentation" : locale === "es" ? "Presentación" : "Apresentação"}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              {/* 3D Book Cover */}
              <div className="md:col-span-5 flex justify-center md:justify-end">
                <img
                  src="/assets/capa-tratado.png"
                  alt="Tratado de Cirurgia da Coluna Vertebral"
                  style={{
                    width: 260,
                    height: "auto",
                    filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.65))",
                  }}
                />
              </div>

              {/* Hero Info */}
              <div className="md:col-span-7">
                {/* Institutional Badge */}
                <div
                  style={{
                    display: "inline-block",
                    padding: "4px 12px",
                    borderRadius: 4,
                    border: "1px solid rgba(255, 255, 255, 0.35)",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "rgba(255, 255, 255, 0.9)",
                    marginBottom: 16,
                    textTransform: "uppercase",
                  }}
                >
                  {APRESENTACAO_DATA.badge}
                </div>

                <h1
                  style={{
                    fontSize: "clamp(32px, 4.5vw, 44px)",
                    fontWeight: 700,
                    margin: "0 0 12px",
                    color: "#fff",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.15,
                  }}
                >
                  {APRESENTACAO_DATA.titulo}
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
                  {APRESENTACAO_DATA.subtitulo}
                </p>

                {/* Author Title & Details */}
                <div style={{ marginBottom: 20 }}>
                  <Link
                    href={`/${locale}/autor/${APRESENTACAO_DATA.autor.slug || "elcio-landim"}`}
                    style={{ textDecoration: "none", color: "inherit", display: "inline-block" }}
                    className="hover:underline"
                  >
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "#fff", margin: "0 0 4px" }}>
                      {APRESENTACAO_DATA.autor.nome} →
                    </h3>
                  </Link>
                  <p style={{ fontSize: 12.5, color: "rgba(255, 255, 255, 0.7)", margin: 0, lineHeight: 1.4, maxWidth: 680 }}>
                    {APRESENTACAO_DATA.autor.titulos.join(" • ")}
                  </p>
                </div>

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
                  <BookOpen size={20} className="text-rose-400" />
                  <span style={{ fontSize: 13.5, color: "rgba(255, 255, 255, 0.9)", lineHeight: 1.4 }}>
                    {APRESENTACAO_DATA.avisoImpresso}
                  </span>
                </div>

                {/* Action Buttons */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 12 }}>
                  <a
                    href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "12px 22px",
                      borderRadius: 8,
                      background: "#e11d48",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: 14,
                      textDecoration: "none",
                      boxShadow: "0 4px 14px rgba(225, 29, 72, 0.4)",
                      transition: "all 0.2s",
                    }}
                  >
                    <span>{locale === "en" ? "Where to Buy" : locale === "es" ? "Dónde Comprar" : "Onde Comprar"}</span>
                    <ShoppingCart size={15} />
                  </a>

                  <Link
                    href={`/${locale}/prefacio`}
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
                    <span>{locale === "en" ? "View Preface" : locale === "es" ? "Ver Prefacio" : "Ver prefácio"}</span>
                    <BookOpen size={15} />
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
                    <span>{locale === "en" ? "View Index" : locale === "es" ? "Ver Índice" : "Ver índice"}</span>
                    <Layers size={15} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Strip Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 12,
                marginTop: 36,
                padding: "14px 16px",
                background: "rgba(0, 16, 40, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.14)",
                borderRadius: 10,
                backdropFilter: "blur(6px)",
              }}
            >
              {[
                { icon: <Building2 size={18} className="text-blue-400" />, title: locale === "en" ? "Institutional text" : locale === "es" ? "Texto institucional" : "Texto institucional" },
                { icon: <BookOpen size={18} className="text-rose-400" />, title: locale === "en" ? "Presentation" : locale === "es" ? "Presentación" : "Apresentação" },
                { icon: <User size={18} className="text-purple-400" />, title: "Professor Elcio Landim" },
                { icon: <Layers size={18} className="text-emerald-400" />, title: locale === "en" ? "Printed work" : locale === "es" ? "Obra impresa" : "Obra impressa" },
                { icon: <Globe size={18} className="text-cyan-400" />, title: locale === "en" ? "Site navigation" : locale === "es" ? "Navegación del sitio" : "Navegação do site" },
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
                    gap: 6,
                  }}
                >
                  <div>{item.icon}</div>
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
        <section style={{ maxWidth: 1200, margin: "40px auto 48px", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 32, alignItems: "start" }}>
            {/* LEFT COLUMN: Main Text & Highlights */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {/* Card 1: Texto da Apresentação */}
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
                  <FileText size={22} className="text-blue-700" />
                  <h2 style={{ fontSize: 20, fontWeight: 700, color: "#001a3d", margin: 0 }}>
                    {locale === "en" ? "Presentation Text" : locale === "es" ? "Texto de la Presentación" : "Texto da apresentação"}
                  </h2>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 16, color: "#334155", fontSize: 15, lineHeight: 1.75 }}>
                  {APRESENTACAO_DATA.paragrafos.map((p, idx) => (
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
                  <Quote size={20} className="text-rose-600" />
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#001a3d", margin: 0 }}>
                    {locale === "en" ? "Core Message" : locale === "es" ? "Mensaje Central" : "Mensagem central"}
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
                  <Quote size={28} className="text-blue-600 flex-shrink-0" />
                  <p style={{ margin: 0, fontSize: 15.5, fontWeight: 700, color: "#1e3a8a", lineHeight: 1.6 }}>
                    {APRESENTACAO_DATA.mensagemCentral}
                  </p>
                </div>
              </div>

              {/* Card 3: Destaques da Apresentação */}
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
                  <Award size={22} className="text-amber-500" />
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#001a3d", margin: 0 }}>
                    {locale === "en" ? "Presentation Highlights" : locale === "es" ? "Aspectos Destacados" : "Destaques da apresentação"}
                  </h3>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                  {APRESENTACAO_DATA.destaques.map((item, idx) => (
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
                        }}
                      >
                        {item.cor === "red" ? (
                          <Building2 size={20} />
                        ) : item.cor === "blue" ? (
                          <User size={20} />
                        ) : (
                          <Target size={20} />
                        )}
                      </div>
                      <div>
                        <h4 style={{ margin: "0 0 4px", fontSize: 14.5, fontWeight: 700, color: "#001a3d" }}>
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
                  <BookOpen size={20} className="text-blue-700" />
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#001a3d", margin: 0 }}>
                    {locale === "en" ? "About the Work" : locale === "es" ? "Sobre la Obra" : "Sobre a obra"}
                  </h3>
                </div>
                <p style={{ margin: 0, fontSize: 14.5, color: "#475569", lineHeight: 1.65 }}>
                  {APRESENTACAO_DATA.sobreAObra}
                </p>
                <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid #f1f5f9", display: "flex", flexDirection: "column", gap: 6, fontSize: 14, color: "#334155" }}>
                  <div>
                    <strong>Editores na ficha catalográfica:</strong>{" "}
                    <span>Edson Pudles; Helton Defino; Marcelo Risso</span>
                  </div>
                  <div>
                    <strong>Editores na referência:</strong>{" "}
                    <span>Pudles E, Defino H, Risso M</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Sidebar */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {/* Autor da Apresentação */}
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
                  <User size={18} className="text-blue-700" />
                  <h3 style={{ fontSize: 16.5, fontWeight: 700, color: "#001a3d", margin: 0 }}>
                    {locale === "en" ? "Author of Presentation" : locale === "es" ? "Autor de la Presentación" : "Autor da apresentação"}
                  </h3>
                </div>

                <Link
                  href={`/${locale}/autor/${APRESENTACAO_DATA.autor.slug || "elcio-landim"}`}
                  style={{ display: "flex", flexDirection: "column", gap: 14, textDecoration: "none", color: "inherit" }}
                  className="hover:opacity-85 transition-opacity"
                >
                  <div
                    style={{
                      width: "100%",
                      borderRadius: 10,
                      overflow: "hidden",
                      background: "#e2e8f0",
                      border: "1px solid #cbd5e1",
                    }}
                  >
                    <img
                      src={APRESENTACAO_DATA.autor.foto_url}
                      alt={APRESENTACAO_DATA.autor.nome}
                      style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <h4 style={{ margin: "0 0 6px", fontSize: 16, fontWeight: 700, color: "#001a3d" }}>
                      {APRESENTACAO_DATA.autor.nome} →
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                      {APRESENTACAO_DATA.autor.titulos.map((t, idx) => (
                        <p key={idx} style={{ margin: 0, fontSize: 12, color: "#64748b", lineHeight: 1.35 }}>
                          • {t}
                        </p>
                      ))}
                    </div>
                  </div>
                </Link>
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
                  <Layers size={18} className="text-blue-700" />
                  <h3 style={{ fontSize: 16.5, fontWeight: 700, color: "#001a3d", margin: 0 }}>
                    {locale === "en" ? "Content Type" : locale === "es" ? "Tipo de Contenido" : "Tipo de conteúdo"}
                  </h3>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#334155", fontSize: 13.5, fontWeight: 700 }}>
                    <FileText size={15} className="text-blue-600" />
                    <span>{locale === "en" ? "Institutional Text" : locale === "es" ? "Texto Institucional" : "Texto institucional"}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#334155", fontSize: 13.5, fontWeight: 700 }}>
                    <BookOpen size={15} className="text-rose-600" />
                    <span>{locale === "en" ? "Presentation" : locale === "es" ? "Presentación" : "Apresentação"}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#334155", fontSize: 13.5, fontWeight: 700 }}>
                    <Layers size={15} className="text-emerald-600" />
                    <span>{locale === "en" ? "Reading Companion" : locale === "es" ? "Apoyo a la Lectura" : "Apoio à leitura"}</span>
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
                  <ShieldCheck size={18} className="text-amber-600" />
                  <h3 style={{ fontSize: 15, fontWeight: 700, margin: 0, color: "#c2410c" }}>
                    {locale === "en" ? "Important Notice" : locale === "es" ? "Aviso Importante" : "Aviso importante"}
                  </h3>
                </div>

                <p style={{ fontSize: 12.5, fontWeight: 700, color: "#475569", margin: "0 0 10px", lineHeight: 1.4 }}>
                  {locale === "en"
                    ? "This website is a reading companion platform."
                    : locale === "es"
                    ? "Este sitio web es una plataforma de apoyo a la lectura."
                    : "Este site é uma plataforma de apoio à leitura."}
                </p>

                <p style={{ fontSize: 12.5, color: "#64748b", margin: 0, lineHeight: 1.5 }}>
                  {locale === "en"
                    ? "The full content of the presentation and the entire treatise is published exclusively in the printed edition."
                    : locale === "es"
                    ? "El contenido íntegro de la presentación y de toda la obra está disponible exclusivamente en la edición impresa del Tratado."
                    : "O conteúdo integral da apresentação e de toda a obra está disponível exclusivamente na edição impressa do Tratado de Cirurgia da Coluna Vertebral."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* BOTTOM CTA BANNER */}
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
                src="/assets/capa-tratado.png"
                alt="Livro"
                style={{ width: 70, height: "auto", filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.4))" }}
              />
              <div>
                <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 12px", color: "#fff" }}>
                  {locale === "en"
                    ? "A masterwork for consultation, study, and clinical reference — exclusively in print."
                    : locale === "es"
                    ? "Una obra para consulta, estudio y referencia — exclusivamente en formato impreso."
                    : "Uma obra para consulta, estudo e referência — exclusivamente em formato impresso."}
                </h3>
                <a
                  href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 20px",
                    borderRadius: 8,
                    background: "#e11d48",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 13.5,
                    textDecoration: "none",
                  }}
                >
                  <span>{locale === "en" ? "Where to Buy" : locale === "es" ? "Dónde Comprar" : "Onde Comprar"}</span>
                  <ShoppingCart size={15} />
                </a>
              </div>
            </div>

            <div style={{ opacity: 0.15, color: "#fff" }}>
              <BookOpen size={64} />
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
