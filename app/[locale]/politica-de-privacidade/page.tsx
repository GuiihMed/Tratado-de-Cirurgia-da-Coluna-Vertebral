import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Locale } from "@/lib/types";

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
    pt: "Política de Privacidade e Proteção de Dados (LGPD) do Tratado de Cirurgia da Coluna Vertebral da Sociedade Brasileira de Coluna (SBC).",
    en: "Privacy Policy and Data Protection guidelines for the Brazilian Spine Society (SBC) Treatise platform.",
    es: "Política de Privacidad y Protección de Datos del Tratado de Cirugía de la Columna Vertebral (SBC).",
  };

  const currentTitle = titles[locale] || titles.pt;
  const currentDesc = descriptions[locale] || descriptions.pt;
  const pageUrl = `https://www.tratadodecoluna.com.br/${locale}/politica-de-privacidade`;

  return {
    title: currentTitle,
    description: currentDesc,
    alternates: {
      canonical: pageUrl,
      languages: {
        pt: "https://www.tratadodecoluna.com.br/pt/politica-de-privacidade",
        en: "https://www.tratadodecoluna.com.br/en/politica-de-privacidade",
        es: "https://www.tratadodecoluna.com.br/es/politica-de-privacidade",
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
          alt: "Política de Privacidade SBC",
        },
      ],
    },
  };
}

export default async function PoliticaPrivacidadeClassicPage({ params }: PageProps) {
  const resolvedParams = await params;
  const rawLocale = resolvedParams.locale;
  const locale: Locale = ["pt", "en", "es"].includes(rawLocale)
    ? (rawLocale as Locale)
    : "pt";

  return (
    <>
      <Header locale={locale} currentPage="other" />

      <main style={{ padding: "40px 0 80px", background: "#f8fafc", minHeight: "80vh" }}>
        <div className="shell" style={{ maxWidth: 860, margin: "0 auto" }}>
          <div
            style={{
              background: "#ffffff",
              borderRadius: 16,
              padding: "48px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
              border: "1px solid #e2e8f0",
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "4px 12px",
                borderRadius: 20,
                background: "rgba(220, 20, 45, 0.1)",
                color: "#dc142d",
                fontSize: 12,
                fontWeight: 700,
                marginBottom: 12,
              }}
            >
              LGPD & Governança de Dados
            </span>

            <h1 style={{ fontSize: 32, fontWeight: 800, color: "#001026", margin: "0 0 16px" }}>
              {locale === "en" ? "Privacy Policy" : locale === "es" ? "Política de Privacidad" : "Política de Privacidade"}
            </h1>

            <p style={{ fontSize: 14, color: "#64748b", margin: "0 0 32px" }}>
              {locale === "en" ? "Last updated: February 2026" : locale === "es" ? "Última actualización: Febrero de 2026" : "Última atualização: Fevereiro de 2026"}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 24, fontSize: 15, lineHeight: 1.7, color: "#334155" }}>
              <section>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: "#001026", margin: "0 0 8px" }}>
                  1. Compromisso com a Privacidade
                </h2>
                <p style={{ margin: 0 }}>
                  A Sociedade Brasileira de Coluna (SBC) e a DiLivros Editora Ltda. respeitam a privacidade dos usuários e a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Este portal atua exclusivamente para divulgação técnico-científica e consulta editorial.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: "#001026", margin: "0 0 8px" }}>
                  2. Coleta de Informações
                </h2>
                <p style={{ margin: 0 }}>
                  Não realizamos coleta invasiva de dados. As informações técnicas registradas limitam-se a registros anônimos de acesso para estabilidade do servidor e preferências de idioma.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: "#001026", margin: "0 0 8px" }}>
                  3. Direitos Autorais e Proteção Intelectual
                </h2>
                <p style={{ margin: 0 }}>
                  Os resumos, artigos e descritores pertencem à SBC e aos respectivos autores, protegidos pela Lei de Direitos Autorais (Lei nº 9.610/1998).
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: "#001026", margin: "0 0 8px" }}>
                  4. Atendimento e Suporte Oficial
                </h2>
                <p style={{ margin: "0 0 12px" }}>
                  Para exercer seus direitos de titular ou esclarecer dúvidas de privacidade:
                </p>
                <a
                  href="https://dilivros.com.br/fale-conosco"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#001026",
                    color: "#ffffff",
                    padding: "10px 20px",
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Fale Conosco (DiLivros / SBC) →
                </a>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer locale={locale} />
    </>
  );
}
