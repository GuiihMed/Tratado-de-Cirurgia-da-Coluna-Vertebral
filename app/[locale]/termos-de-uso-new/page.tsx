import type { Metadata } from "next";
import Link from "next/link";
import ModernHeader from "@/components/modern/ModernHeader";
import ModernFooter from "@/components/modern/ModernFooter";
import { Locale } from "@/lib/types";
import { Scale, BookOpen, AlertTriangle, Copyright, ExternalLink, ShieldCheck, FileCheck } from "lucide-react";

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
    pt: "Termos de Uso | Tratado de Cirurgia da Coluna Vertebral",
    en: "Terms of Use | SBC Treatise on Spine Surgery",
    es: "Términos de Uso | Tratado de Cirugía de la Columna SBC",
  };

  const descriptions = {
    pt: "Termos de Uso, condições de acesso e aviso legal da plataforma digital do Tratado de Cirurgia da Coluna Vertebral (Sociedade Brasileira de Coluna / DiLivros Editora).",
    en: "Terms of Use, access conditions, and medical disclaimer for the Brazilian Spine Society (SBC) Treatise digital platform.",
    es: "Términos de Uso, condiciones de acceso y aviso legal de la plataforma digital del Tratado de Cirugía de la Columna Vertebral (SBC / DiLivros).",
  };

  const currentTitle = titles[locale] || titles.pt;
  const currentDesc = descriptions[locale] || descriptions.pt;
  const pageUrl = `https://www.tratadodecoluna.com.br/${locale}/termos-de-uso-new`;

  return {
    title: currentTitle,
    description: currentDesc,
    keywords: [
      "Termos de Uso",
      "Condições de Uso",
      "Aviso Legal",
      "Sociedade Brasileira de Coluna",
      "SBC",
      "DiLivros",
      "Tratado de Coluna",
    ],
    alternates: {
      canonical: pageUrl,
      languages: {
        pt: "https://www.tratadodecoluna.com.br/pt/termos-de-uso-new",
        en: "https://www.tratadodecoluna.com.br/en/termos-de-uso-new",
        es: "https://www.tratadodecoluna.com.br/es/termos-de-uso-new",
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
          url: "https://www.tratadodecoluna.com.br/assets/og-cover.png",
          width: 1200,
          height: 630,
          type: "image/png",
          alt: "Termos de Uso - Tratado de Cirurgia da Coluna Vertebral SBC",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: currentTitle,
      description: currentDesc,
      images: ["https://www.tratadodecoluna.com.br/assets/og-cover.png"],
    },
  };
}

export default async function TermosDeUsoNewPage({ params }: PageProps) {
  const resolvedParams = await params;
  const rawLocale = resolvedParams.locale;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";

  const content = {
    pt: {
      tag: "Diretrizes Legais & Condições",
      title: "Termos de Uso da Plataforma",
      updated: "Última atualização: Fevereiro de 2026",
      subtitle:
        "Condições gerais de navegação, direitos autorais e diretrizes para utilização acadêmica da plataforma digital do Tratado de Cirurgia da Coluna Vertebral.",
      sections: [
        {
          id: "1",
          title: "1. Aceitação dos Termos",
          icon: FileCheck,
          text: "Ao acessar ou utilizar a plataforma digital do Tratado de Cirurgia da Coluna Vertebral (desenvolvida sob a chancela da Sociedade Brasileira de Coluna - SBC e publicada pela DiLivros Editora Ltda.), você declara concordar integralmente com as disposições aqui descritas. Caso discorde de qualquer cláusula, solicitamos a interrupção do acesso.",
        },
        {
          id: "2",
          title: "2. Propriedade Intelectual e Direitos Autorais",
          icon: Copyright,
          text: "Todo o acervo presente nesta plataforma — incluindo, sem limitação, sumários, sínteses editoriais, resumos clínicos, descritores DeCS/MeSH, tabelas e identidade visual — constitui propriedade intelectual protegida pela legislação brasileira (Lei nº 9.610/1998) e tratados internacionais de direitos autorais.",
          bullets: [
            "**Uso Permitido:** É permitida a citação acadêmica e referência de trechos curtos para fins de estudo e pesquisa, desde que expressamente citada a fonte (Tratado de Cirurgia da Coluna Vertebral, SBC/DiLivros Editora) e os respectivos autores.",
            "**Vedações Explícitas:** É estritamente vedada a reprodução total ou parcial, engenharia reversa, raspagem automatizada de dados (*data scraping*), comercialização ou disponibilização do conteúdo em bases não autorizadas sem prévia anuência por escrito da SBC e da DiLivros.",
          ],
        },
        {
          id: "3",
          title: "3. Natureza Técnico-Científica e Aviso Médico (Disclaimer)",
          icon: AlertTriangle,
          text: "O Tratado de Cirurgia da Coluna Vertebral é uma obra de referência técnico-científica elaborada por especialistas para fins de educação médica continuada, especialização e aprimoramento profissional.",
          bullets: [
            "As informações e técnicas cirúrgicas descritas refletem a melhor evidência científica disponível no momento da publicação.",
            "O conteúdo **não substitui o julgamento clínico individualizado** do médico assistente, tampouco serve como protocolo rígido ou recomendação terapêutica direta para pacientes leigos.",
            "A tomada de decisão cirúrgica deve sempre considerar a avaliação personalizada, exames complementares e condições particulares de cada paciente.",
          ],
        },
        {
          id: "4",
          title: "4. Edição Integral Impressa",
          icon: BookOpen,
          text: "A plataforma digital oferece índice analítico, resumos, citações e referências bibliográficas. O conteúdo integral dos 109 capítulos — incluindo descrições passo a passo de técnicas cirúrgicas, atlas de vias de acesso e centenas de ilustrações anatômicas de alta definição — está disponível com exclusividade na edição impressa oficial.",
        },
        {
          id: "5",
          title: "5. Links Externos e Serviços Integrados",
          icon: ExternalLink,
          text: "A plataforma pode conter hiperlinks para repositórios acadêmicos externos (como PubMed, DOI e Google Scholar) e players de vídeo (Vimeo). A SBC e a DiLivros Editora não se responsabilizam pelo conteúdo, termos ou políticas de privacidade de plataformas de terceiros.",
        },
        {
          id: "6",
          title: "6. Dúvidas, Suporte Editorial e Aquisição",
          icon: Scale,
          text: "Para esclarecer dúvidas sobre os Termos de Uso, solicitar permissão de uso editorial de citações ou obter suporte para aquisição da obra impressa, entre em contato com a equipe editorial:",
          contactLink: "https://dilivros.com.br/fale-conosco",
          contactLabel: "Fale Conosco / Suporte Editorial (DiLivros)",
        },
      ],
    },
    en: {
      tag: "Legal Guidelines & Terms",
      title: "Terms of Use",
      updated: "Last updated: February 2026",
      subtitle:
        "General conditions, copyright policies, and academic guidelines for utilizing the Brazilian Spine Society (SBC) Treatise digital platform.",
      sections: [
        {
          id: "1",
          title: "1. Acceptance of Terms",
          icon: FileCheck,
          text: "By accessing this platform, developed under the auspices of the Brazilian Spine Society (SBC) and published by DiLivros Editora, you agree to comply with these terms.",
        },
        {
          id: "2",
          title: "2. Intellectual Property & Copyright",
          icon: Copyright,
          text: "All content, summaries, indexes, author bios, and graphic assets are protected under international copyright legislation.",
          bullets: [
            "**Academic Citation:** Brief citations are permitted for academic purposes provided clear attribution is given to SBC and the original chapter authors.",
            "**Prohibitions:** Unauthorized commercial distribution, automated scraping, or wholesale reproduction without written consent is strictly prohibited.",
          ],
        },
        {
          id: "3",
          title: "3. Technical Nature & Medical Disclaimer",
          icon: AlertTriangle,
          text: "The Treatise on Spine Surgery is an advanced medical reference intended for spine specialists, orthopedists, neurosurgeons, and researchers.",
          bullets: [
            "Information is provided for educational and academic consultation purposes only.",
            "It **does not replace individualized medical clinical judgment** or patient diagnostic consultations.",
          ],
        },
        {
          id: "4",
          title: "4. Official Printed Edition",
          icon: BookOpen,
          text: "The full text, comprehensive surgical step-by-step guides, and high-resolution anatomical plates are available exclusively in the hardcover printed publication.",
        },
        {
          id: "5",
          title: "5. Third-Party Integrations",
          icon: ExternalLink,
          text: "External links to PubMed, DOI registries, and Vimeo streaming are governed by their respective independent terms.",
        },
        {
          id: "6",
          title: "6. Editorial Inquiries & Contact",
          icon: Scale,
          text: "For licensing requests, permissions, or purchase inquiries, please contact our publisher desk:",
          contactLink: "https://dilivros.com.br/fale-conosco",
          contactLabel: "Contact Editorial Support (DiLivros)",
        },
      ],
    },
    es: {
      tag: "Directrices Legales y Términos",
      title: "Términos de Uso",
      updated: "Última actualización: Febrero de 2026",
      subtitle:
        "Condiciones generales de acceso, derechos de autor y aviso legal de la plataforma digital del Tratado de Cirugía de la Columna Vertebral.",
      sections: [
        {
          id: "1",
          title: "1. Aceptación de los Términos",
          icon: FileCheck,
          text: "El uso de la plataforma del Tratado Oficial de la Sociedad Brasileña de Columna (SBC) y DiLivros Editora implica la aceptación plena de estas condiciones.",
        },
        {
          id: "2",
          title: "2. Propiedad Intelectual",
          icon: Copyright,
          text: "Todo el material científico y los activos de la plataforma están protegidos por leyes de propiedad intelectual.",
          bullets: [
            "**Citas Académicas:** Se permite la citación de fragmentos con fines de investigación citando debidamente la fuente y los autores.",
            "**Prohibiciones:** Queda prohibida la reproducción masiva no autorizada o extracción automatizada de datos.",
          ],
        },
        {
          id: "3",
          title: "3. Naturaleza Científica y Descargo Médico",
          icon: AlertTriangle,
          text: "La obra está dirigida a profesionales médicos para su educación médica continua. No sustituye el criterio médico individualizado.",
        },
        {
          id: "4",
          title: "4. Edición Impresa Oficial",
          icon: BookOpen,
          text: "El texto íntegro y las técnicas quirúrgicas paso a paso se encuentran disponibles en la edición impresa de DiLivros Editora.",
        },
        {
          id: "5",
          title: "5. Enlaces Externos",
          icon: ExternalLink,
          text: "Los enlaces a PubMed, DOI y Vimeo están sujetos a sus propios términos de servicio.",
        },
        {
          id: "6",
          title: "6. Contacto y Soporte Editorial",
          icon: Scale,
          text: "Para consultas sobre el uso de contenidos o adquisición de la obra:",
          contactLink: "https://dilivros.com.br/fale-conosco",
          contactLabel: "Contactar a DiLivros / SBC",
        },
      ],
    },
  }[locale] || {
    tag: "Termos",
    title: "Termos de Uso",
    updated: "Fevereiro de 2026",
    subtitle: "Condições gerais de uso da plataforma.",
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
                <Scale size={14} />
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
