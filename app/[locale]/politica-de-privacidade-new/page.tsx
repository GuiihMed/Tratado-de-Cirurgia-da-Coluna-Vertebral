import type { Metadata } from "next";
import Link from "next/link";
import ModernHeader from "@/components/modern/ModernHeader";
import ModernFooter from "@/components/modern/ModernFooter";
import { Locale } from "@/lib/types";
import { ShieldCheck, Lock, FileText, CheckCircle2, Building2, HelpCircle, ExternalLink, Scale } from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";

  const titles = {
    pt: "Política de Privacidade | Tratado de Cirurgia da Coluna Vertebral",
    en: "Privacy Policy | SBC Treatise on Spine Surgery",
    es: "Política de Privacidad | Tratado de Cirugía de la Columna SBC",
  };

  const descriptions = {
    pt: "Conheça a Política de Privacidade e Proteção de Dados (LGPD) da plataforma digital do Tratado de Cirurgia da Coluna Vertebral da Sociedade Brasileira de Coluna (SBC).",
    en: "Read the Privacy Policy and Data Protection guidelines for the official Brazilian Spine Society (SBC) Treatise digital platform.",
    es: "Conozca la Política de Privacidad y Protección de Datos de la plataforma digital del Tratado de Cirugía de la Columna Vertebral (SBC).",
  };

  const currentTitle = titles[locale] || titles.pt;
  const currentDesc = descriptions[locale] || descriptions.pt;
  const pageUrl = `https://livro-sbc.vercel.app/${locale}/politica-de-privacidade-new`;

  return {
    title: currentTitle,
    description: currentDesc,
    keywords: [
      "Política de Privacidade",
      "LGPD",
      "Proteção de Dados",
      "Sociedade Brasileira de Coluna",
      "SBC",
      "DiLivros",
      "Tratado de Coluna",
    ],
    alternates: {
      canonical: pageUrl,
      languages: {
        pt: "https://livro-sbc.vercel.app/pt/politica-de-privacidade-new",
        en: "https://livro-sbc.vercel.app/en/politica-de-privacidade-new",
        es: "https://livro-sbc.vercel.app/es/politica-de-privacidade-new",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : locale === "es" ? "es_ES" : "pt_BR",
      url: pageUrl,
      siteName: "Tratado de Cirurgia da Coluna Vertebral - SBC",
      title: currentTitle,
      description: currentDesc,
      images: [
        {
          url: "https://livro-sbc.vercel.app/assets/og-cover.png",
          width: 1200,
          height: 630,
          type: "image/png",
          alt: "Política de Privacidade - Tratado de Cirurgia da Coluna Vertebral SBC",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: currentTitle,
      description: currentDesc,
      images: ["https://livro-sbc.vercel.app/assets/og-cover.png"],
    },
  };
}

export default async function PoliticaPrivacidadeNewPage({ params }: PageProps) {
  const resolvedParams = await params;
  const rawLocale = resolvedParams.locale;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";

  const content = {
    pt: {
      tag: "Transparência & Governança de Dados",
      title: "Política de Privacidade",
      updated: "Última atualização: Fevereiro de 2026",
      subtitle:
        "Este documento estabelece as diretrizes de conformidade, privacidade e proteção de dados pessoais e acadêmicos na plataforma digital do Tratado de Cirurgia da Coluna Vertebral (SBC / DiLivros Editora).",
      sections: [
        {
          id: "1",
          title: "1. Introdução e Compromisso Institucional",
          icon: ShieldCheck,
          text: "A Sociedade Brasileira de Coluna (SBC), em parceria com a DiLivros Editora Ltda., reafirma seu compromisso com a privacidade, segurança da informação e a estrita observância da Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD) e regulamentações internacionais pertinentes. Esta Política de Privacidade descreve de forma clara e transparente como coletamos, utilizamos, armazenamos e protegemos as informações dos usuários, médicos, autores e visitantes que acessam nossa plataforma institucional.",
        },
        {
          id: "2",
          title: "2. Dados Coletados e Finalidade do Tratamento",
          icon: FileText,
          text: "Nossa plataforma opera primordialmente como um ambiente de divulgação científica, consulta de sumários, referências e perfis autorais. Os dados tratados restringem-se a:",
          bullets: [
            "**Dados de Navegação Técnica:** Registros anônimos de acesso (endereço IP criptografado, tipo de navegador, sistema operacional e páginas consultadas) coletados com o propósito exclusivo de garantir a segurança operacional e otimizar o desempenho do servidor.",
            "**Dados de Autores e Editores:** Nomes científicos, titulações acadêmicas, afiliações institucionais, fotos e identificadores públicos (como ORCID e Lattes), publicados sob anuência expressa dos próprios autores para fins de atribuição científica de autoria da obra.",
            "**Formulários de Contato e Suporte:** Dados voluntariamente fornecidos pelo usuário (nome, e-mail e mensagem) para esclarecimento de dúvidas editoriais e aquisição da obra impressa.",
          ],
        },
        {
          id: "3",
          title: "3. Propriedade Intelectual e Proteção Editorial",
          icon: Lock,
          text: "Todo o conteúdo científico, resumos clínicos, descritores DeCS/MeSH, tabelas e estruturas pedagógicas disponibilizadas na plataforma pertencem à Sociedade Brasileira de Coluna e à DiLivros Editora, sob proteção da Lei de Direitos Autorais (Lei nº 9.610/1998). O uso das informações é estritamente pessoal, acadêmico e não comercial.",
        },
        {
          id: "4",
          title: "4. Cookies e Tecnologias de Sessão",
          icon: CheckCircle2,
          text: "Utilizamos unicamente cookies essenciais de sessão e preferências de navegação (como idioma selecionado entre Português, Inglês e Espanhol e modo de visualização). Não utilizamos cookies invasivos de rastreamento de terceiros para publicidade comportamental sem consentimento explícito.",
        },
        {
          id: "5",
          title: "5. Direitos do Titular dos Dados (LGPD)",
          icon: Scale,
          text: "Em conformidade com o Artigo 18 da LGPD, os titulares de dados pessoais possuem o direito de solicitar a qualquer momento:",
          bullets: [
            "Confirmação da existência de tratamento e acesso aos dados.",
            "Correção de dados incompletos, inexatos ou desatualizados.",
            "Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei.",
            "Revogação do consentimento previamente concedido.",
          ],
        },
        {
          id: "6",
          title: "6. Encarregado de Proteção de Dados (DPO) e Contato",
          icon: Building2,
          text: "Para exercer seus direitos de titular, esclarecer dúvidas sobre o tratamento de informações ou enviar requisições de privacidade, utilize nosso canal oficial de atendimento:",
          contactLink: "https://dilivros.com.br/fale-conosco",
          contactLabel: "Acessar Canal Oficial de Contato (DiLivros / SBC)",
        },
      ],
    },
    en: {
      tag: "Transparency & Data Governance",
      title: "Privacy Policy",
      updated: "Last updated: February 2026",
      subtitle:
        "This document defines the privacy and data protection principles applied to the digital platform of the Treatise on Spine Surgery (SBC / DiLivros Publishing).",
      sections: [
        {
          id: "1",
          title: "1. Introduction & Institutional Commitment",
          icon: ShieldCheck,
          text: "The Brazilian Spine Society (SBC), together with DiLivros Editora Ltda., is committed to privacy, information security, and international data protection best practices. This Privacy Policy details how we handle academic, technical, and contact information on our platform.",
        },
        {
          id: "2",
          title: "2. Information Collected & Purpose",
          icon: FileText,
          text: "Our digital portal serves as a scientific hub for abstracts, chapter indexes, and faculty profiles. Data processing is restricted to:",
          bullets: [
            "**Technical Logs:** Anonymous access records (IP, browser type, consulted paths) used strictly for performance and system security.",
            "**Faculty Metadata:** Names, academic degrees, affiliations, and public IDs (ORCID/Lattes) published under author consent for proper academic attribution.",
            "**Inquiry Records:** Contact data voluntarily provided when requesting editorial support or purchase inquiries.",
          ],
        },
        {
          id: "3",
          title: "3. Intellectual Property & Copyright",
          icon: Lock,
          text: "All scientific summaries, DeCS/MeSH terms, and pedagogical structures belong to SBC and DiLivros Editora under copyright legislation. Content is for academic and clinical research reference only.",
        },
        {
          id: "4",
          title: "4. Cookies & Preferences",
          icon: CheckCircle2,
          text: "We use only essential cookies required for language preferences (PT/EN/ES) and UI rendering. No behavioral third-party advertising trackers are used.",
        },
        {
          id: "5",
          title: "5. User Rights & Data Requests",
          icon: Scale,
          text: "Users and authors may request data confirmation, updates, or rectifications at any time in compliance with data privacy regulations.",
        },
        {
          id: "6",
          title: "6. Data Officer & Editorial Contact",
          icon: Building2,
          text: "For questions or privacy requests, please reach our official editorial support desk:",
          contactLink: "https://dilivros.com.br/fale-conosco",
          contactLabel: "Open Official Support Desk (DiLivros / SBC)",
        },
      ],
    },
    es: {
      tag: "Transparencia y Gobernanza de Datos",
      title: "Política de Privacidad",
      updated: "Última actualización: Febrero de 2026",
      subtitle:
        "Este documento establece las directrices de privacidad y protección de datos en la plataforma digital del Tratado de Cirugía de la Columna Vertebral (SBC / DiLivros Editora).",
      sections: [
        {
          id: "1",
          title: "1. Introducción y Compromiso Institucional",
          icon: ShieldCheck,
          text: "La Sociedad Brasileña de Columna (SBC) y DiLivros Editora reafirman su compromiso con la seguridad de la información y la privacidad de los profesionales médicos, autores y visitantes de nuestro portal científico.",
        },
        {
          id: "2",
          title: "2. Datos Recopilados y Finalidad",
          icon: FileText,
          text: "La plataforma opera como un entorno de divulgación científica. El tratamiento de datos se limita a:",
          bullets: [
            "**Registros Técnicos:** Datos anónimos de navegación para optimización del servidor y seguridad.",
            "**Datos de Autores:** Nombres, filiaciones y registros ORCID publicados con fines de atribución académica.",
            "**Consultas:** Información enviada voluntariamente a través del canal de atención.",
          ],
        },
        {
          id: "3",
          title: "3. Propiedad Intelectual",
          icon: Lock,
          text: "Todo el material científico y pedagógico está protegido por las leyes de derecho de autor en favor de la SBC y DiLivros Editora.",
        },
        {
          id: "4",
          title: "4. Cookies y Preferencias",
          icon: CheckCircle2,
          text: "Utilizamos únicamente cookies técnicas esenciales para la selección de idioma y el funcionamiento de la plataforma.",
        },
        {
          id: "5",
          title: "5. Derechos del Usuario",
          icon: Scale,
          text: "Los titulares pueden solicitar en cualquier momento la confirmación, rectificación o actualización de sus datos.",
        },
        {
          id: "6",
          title: "6. Canal de Contacto Oficial",
          icon: Building2,
          text: "Para consultas sobre privacidad y soporte editorial, acceda a nuestro canal oficial:",
          contactLink: "https://dilivros.com.br/fale-conosco",
          contactLabel: "Acceder al Canal de Contacto Oficial (DiLivros / SBC)",
        },
      ],
    },
  }[locale] || {
    tag: "Privacidade",
    title: "Política de Privacidade",
    updated: "Fevereiro de 2026",
    subtitle: "Diretrizes de privacidade e proteção de dados.",
    sections: [],
  };

  return (
    <div style={{ background: "#001026", color: "#1e293b", minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <ModernHeader locale={locale} currentPage="other" />

      <main>
        {/* Hero Section */}
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
              width: "500px",
              height: "600px",
              backgroundImage: "url('/assets/hero-spine.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              opacity: 0.14,
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
              <span style={{ color: "#ffffff", fontWeight: 700 }}>{content.title}</span>
            </nav>

            <div style={{ maxWidth: 840 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(245, 34, 56, 0.2)",
                  border: "1px solid rgba(245, 34, 56, 0.4)",
                  padding: "5px 14px",
                  borderRadius: 20,
                  fontSize: 12.5,
                  fontWeight: 700,
                  color: "#ff808f",
                  marginBottom: 16,
                }}
              >
                <ShieldCheck size={14} />
                <span>{content.tag}</span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(30px, 4.5vw, 48px)",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  margin: "0 0 16px",
                  letterSpacing: "-0.03em",
                }}
              >
                {content.title}
              </h1>

              <p style={{ fontSize: 17, lineHeight: 1.6, color: "#cbd5e1", margin: "0 0 16px", fontWeight: 400 }}>
                {content.subtitle}
              </p>

              <div style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.6)", fontWeight: 500 }}>
                📅 {content.updated}
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section style={{ background: "#f8fafc", padding: "60px 0 100px" }}>
          <div className="shell" style={{ maxWidth: 880 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {content.sections.map((sec) => {
                const IconComp = sec.icon;
                return (
                  <article
                    key={sec.id}
                    style={{
                      background: "#ffffff",
                      borderRadius: 20,
                      padding: "36px 40px",
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 4px 20px rgba(0, 20, 60, 0.03)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 10,
                          background: "rgba(245, 34, 56, 0.08)",
                          color: "#f52238",
                          display: "grid",
                          placeItems: "center",
                          flexShrink: 0,
                        }}
                      >
                        <IconComp size={20} />
                      </div>
                      <h2 style={{ fontSize: 20, fontWeight: 700, color: "#001a3d", margin: 0 }}>
                        {sec.title}
                      </h2>
                    </div>

                    <p style={{ fontSize: 15.5, lineHeight: 1.75, color: "#334155", margin: "0 0 14px" }}>
                      {sec.text}
                    </p>

                    {sec.bullets && (
                      <ul style={{ margin: "12px 0 16px", paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                        {sec.bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            style={{ fontSize: 15, lineHeight: 1.7, color: "#334155" }}
                            dangerouslySetInnerHTML={{
                              __html: bullet.replace(/\*\*(.*?)\*\*/g, "<strong style='color:#001a3d'>$1</strong>"),
                            }}
                          />
                        ))}
                      </ul>
                    )}

                    {sec.contactLink && (
                      <div style={{ marginTop: 20 }}>
                        <a
                          href={sec.contactLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            background: "#001a3d",
                            color: "#ffffff",
                            padding: "12px 24px",
                            borderRadius: 12,
                            fontSize: 14.5,
                            fontWeight: 700,
                            textDecoration: "none",
                            transition: "all 0.2s ease",
                          }}
                        >
                          <span>{sec.contactLabel}</span>
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <ModernFooter locale={locale} />
    </div>
  );
}
