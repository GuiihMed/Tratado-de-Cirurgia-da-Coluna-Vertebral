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
    pt: "Termos de Uso | Tratado de Cirurgia da Coluna Vertebral",
    en: "Terms of Use | SBC Treatise on Spine Surgery",
    es: "Términos de Uso | Tratado de Cirugía de la Columna SBC",
  };

  const descriptions = {
    pt: "Termos de Uso e aviso legal do Tratado de Cirurgia da Coluna Vertebral da Sociedade Brasileira de Coluna (SBC).",
    en: "Terms of Use and medical disclaimer for the Brazilian Spine Society (SBC) Treatise platform.",
    es: "Términos de Uso y aviso legal del Tratado de Cirugía de la Columna Vertebral (SBC).",
  };

  const currentTitle = titles[locale] || titles.pt;
  const currentDesc = descriptions[locale] || descriptions.pt;
  const pageUrl = `https://www.tratadodecoluna.com.br/${locale}/termos-de-uso`;

  return {
    title: currentTitle,
    description: currentDesc,
    alternates: {
      canonical: pageUrl,
      languages: {
        pt: "https://www.tratadodecoluna.com.br/pt/termos-de-uso",
        en: "https://www.tratadodecoluna.com.br/en/termos-de-uso",
        es: "https://www.tratadodecoluna.com.br/es/termos-de-uso",
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
          alt: "Termos de Uso SBC",
        },
      ],
    },
  };
}

export default async function TermosDeUsoClassicPage({ params }: PageProps) {
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
              Condições Legais & Direitos
            </span>

            <h1 style={{ fontSize: 32, fontWeight: 800, color: "#001026", margin: "0 0 16px" }}>
              {locale === "en" ? "Terms of Use" : locale === "es" ? "Términos de Uso" : "Termos de Uso"}
            </h1>

            <p style={{ fontSize: 14, color: "#64748b", margin: "0 0 32px" }}>
              {locale === "en" ? "Last updated: February 2026" : locale === "es" ? "Última actualización: Febrero de 2026" : "Última atualização: Fevereiro de 2026"}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 24, fontSize: 15, lineHeight: 1.7, color: "#334155" }}>
              <section>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: "#001026", margin: "0 0 8px" }}>
                  1. Aceitação
                </h2>
                <p style={{ margin: 0 }}>
                  O acesso e uso desta plataforma do Tratado de Cirurgia da Coluna Vertebral (SBC / DiLivros Editora) regem-se por estes Termos de Uso.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: "#001026", margin: "0 0 8px" }}>
                  2. Direitos Autorais e Citação Acadêmica
                </h2>
                <p style={{ margin: 0 }}>
                  Todo o acervo pertence à SBC e à DiLivros Editora. Citações acadêmicas são permitidas mediante menção expressa aos autores e à obra. É expressamente vedada a reprodução total ou cópia sem autorização prévia por escrito.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: "#001026", margin: "0 0 8px" }}>
                  3. Aviso Médico e Isenção de Responsabilidade
                </h2>
                <p style={{ margin: 0 }}>
                  O conteúdo possui finalidade didática e de referência médica especializada. Não substitui o exame clínico, o julgamento médico individualizado ou o consentimento esclarecido na prática cirúrgica diária.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: "#001026", margin: "0 0 8px" }}>
                  4. Suporte e Fale Conosco
                </h2>
                <p style={{ margin: "0 0 12px" }}>
                  Para dúvidas e esclarecimentos com a equipe editorial:
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
