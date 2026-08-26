"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Lock, ArrowUp } from "lucide-react";
import { Locale } from "@/lib/types";

interface ModernFooterProps {
  locale: Locale;
}

export default function ModernFooter({ locale }: ModernFooterProps) {
  const pathname = usePathname();

  const getLocalePath = (targetLocale: Locale) => {
    if (!pathname) return `/${targetLocale}/home-new`;
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) return `/${targetLocale}/home-new`;
    if (["pt", "en", "es"].includes(segments[0])) {
      segments[0] = targetLocale;
    } else {
      segments.unshift(targetLocale);
    }
    return `/${segments.join("/")}`;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const t = {
    pt: {
      brand: "Tratado de Cirurgia da Coluna Vertebral",
      mission:
        "A principal referência científica e cirúrgica da coluna vertebral na América Latina. Reunindo os maiores especialistas da SBC em um tratado completo de 10 seções e 109 capítulos.",
      navTitle: "Navegação",
      overview: "Visão Geral da Obra",
      preface: "Prefácio dos Editores",
      presentation: "Apresentação Institucional",
      index: "Índice Interativo (109 Cap.)",
      authors: "Autores e Colaboradores",
      editionsTitle: "Edições & Idiomas",
      certifiedTitle: "Edição Oficial Impressa",
      certifiedDesc:
        "A obra completa existe exclusivamente no formato impresso para garantir integridade acadêmica e qualidade editorial.",
      backToTop: "Voltar ao topo ↑",
      copyright: "© 2026 Tratado de Cirurgia da Coluna Vertebral • Sociedade Brasileira de Coluna (SBC).",
      terms: "Termos de Uso",
      privacy: "Privacidade",
      support: "Suporte Editorial",
    },
    en: {
      brand: "Treatise on Spine Surgery",
      mission:
        "The leading scientific and surgical spine reference in Latin America. Bringing together top SBC specialists in a comprehensive work of 10 sections and 109 chapters.",
      navTitle: "Navigation",
      overview: "Overview",
      preface: "Editors Preface",
      presentation: "Institutional Presentation",
      index: "Interactive Index (109 Chapters)",
      authors: "Authors & Collaborators",
      editionsTitle: "Editions & Languages",
      certifiedTitle: "Official Printed Edition",
      certifiedDesc:
        "The complete treatise is available exclusively in printed format to ensure academic integrity and editorial excellence.",
      backToTop: "Back to top ↑",
      copyright: "© 2026 Treatise on Spine Surgery • Brazilian Spine Society (SBC).",
      terms: "Terms of Use",
      privacy: "Privacy Policy",
      support: "Editorial Support",
    },
    es: {
      brand: "Tratado de Cirugía de la Columna Vertebral",
      mission:
        "La principal referencia científica y quirúrgica de columna vertebral en América Latina. Reuniendo a los mayores especialistas de la SBC en una obra completa de 10 secciones y 109 capítulos.",
      navTitle: "Navegación",
      overview: "Visión General",
      preface: "Prefacio de los Editores",
      presentation: "Presentación Institucional",
      index: "Índice Interactivo (109 Cap.)",
      authors: "Autores y Colaboradores",
      editionsTitle: "Ediciones e Idiomas",
      certifiedTitle: "Edición Oficial Impresa",
      certifiedDesc:
        "La obra completa existe exclusivamente en formato impreso para garantizar integridad académica y calidad editorial.",
      backToTop: "Volver arriba ↑",
      copyright: "© 2026 Tratado de Cirugía de la Columna Vertebral • Sociedad Brasileña de Coluna (SBC).",
      terms: "Términos de Uso",
      privacy: "Privacidad",
      support: "Soporte Editorial",
    },
  }[locale] || {
    brand: "Tratado de Cirurgia da Coluna Vertebral",
    mission: "A principal referência científica e cirúrgica da coluna vertebral na América Latina.",
    navTitle: "Navegação",
    overview: "Visão Geral",
    preface: "Prefácio",
    presentation: "Apresentação",
    index: "Índice",
    authors: "Autores",
    editionsTitle: "Idiomas",
    certifiedTitle: "Edição Oficial Impressa",
    certifiedDesc: "A obra completa existe exclusivamente no formato impresso.",
    backToTop: "Voltar ao topo ↑",
    copyright: "© 2026 Tratado de Cirurgia da Coluna Vertebral.",
    terms: "Termos",
    privacy: "Privacidade",
    support: "Suporte",
  };

  return (
    <footer className="w-full bg-gradient-to-b from-[#001026] to-[#000814] text-white pt-14 pb-10 border-t border-white/10 relative z-20">
      <div className="shell">
        {/* Mobile: Vertical Stack (1. Tratado, 2. Navegação, 3. Idiomas) | Desktop: 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12 mb-12">
          
          {/* 1. O Tratado com o texto dele & Logos oficiais */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-xl bg-[#f52238] flex items-center justify-center shadow-lg shadow-red-600/40 flex-shrink-0">
                <svg className="w-5 h-5 text-white">
                  <use href="#i-spine"></use>
                </svg>
              </span>
              <strong className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
                {t.brand}
              </strong>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-md mb-6">
              {t.mission}
            </p>

            {/* Institutional Logos */}
            <div className="flex items-center gap-6 pt-2">
              <img
                src="/assets/sbc-logo-white.svg"
                alt="Sociedade Brasileira de Coluna"
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <div className="border-l border-white/20 h-9" />
              <a
                href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
                target="_blank"
                rel="noopener noreferrer"
                title="DiLivros Editora"
                className="inline-flex items-center hover:opacity-90 transition-opacity"
              >
                <img
                  src="/assets/dilivros-logo.png"
                  alt="DiLivros Editora"
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </a>
            </div>

            {/* Edition & ISBN Metadata */}
            <div className="mt-4 flex flex-col gap-1 text-xs text-slate-300">
              <span className="font-semibold text-slate-100">© 2026 Tratado de Cirurgia da Coluna Vertebral.</span>
              <span className="text-slate-400">1 edição | ISBN: 978-85-8053-292-0 | Rio de Janeiro</span>
            </div>
          </div>

          {/* 2. Navegação (Embaixo no mobile) */}
          <div className="md:col-span-3 flex flex-col">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>{t.navTitle}</span>
            </h4>
            
            <nav className="flex flex-col gap-2.5" aria-label="Navegação do rodapé">
              <Link href={`/${locale}/home-new`} className="text-sm text-slate-300 hover:text-white transition-colors">
                {t.overview}
              </Link>
              <Link href={`/${locale}/prefacio-new`} className="text-sm text-slate-300 hover:text-white transition-colors">
                {t.preface}
              </Link>
              <Link href={`/${locale}/apresentacao-new`} className="text-sm text-slate-300 hover:text-white transition-colors">
                {t.presentation}
              </Link>
              <Link href={`/${locale}/indice-new`} className="text-sm text-slate-300 hover:text-white transition-colors">
                {t.index}
              </Link>
              <Link href={`/${locale}/autores-new`} className="text-sm text-slate-300 hover:text-white transition-colors">
                {t.authors}
              </Link>
              <Link href={`/${locale}/referencias-new`} className="text-sm text-slate-300 hover:text-white transition-colors">
                {locale === "en" ? "Bibliographic References" : locale === "es" ? "Referencias Bibliográficas" : "Referências Bibliográficas"}
              </Link>
            </nav>
          </div>

          {/* 3. Edições e Idiomas & Painel Autores (Depois no mobile) */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <div>
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span>{t.editionsTitle}</span>
              </h4>

              <div className="flex flex-col gap-2.5">
                <Link
                  href={getLocalePath("pt")}
                  className="inline-flex items-center gap-2.5 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-white/10 text-sky-300 border border-white/10">
                    PT
                  </span>
                  <span>Português (Brasil)</span>
                </Link>

                <Link
                  href={getLocalePath("en")}
                  className="inline-flex items-center gap-2.5 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-white/10 text-sky-300 border border-white/10">
                    EN
                  </span>
                  <span>English (Abstracts)</span>
                </Link>

                <Link
                  href={getLocalePath("es")}
                  className="inline-flex items-center gap-2.5 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-white/10 text-sky-300 border border-white/10">
                    ES
                  </span>
                  <span>Español (Resúmenes)</span>
                </Link>
              </div>
            </div>

            {/* Certified Edition Box & Back to Top Button */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-4 h-4 text-red-500"><use href="#i-award"></use></svg>
                <strong className="text-xs sm:text-sm font-bold text-slate-100">{t.certifiedTitle}</strong>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                {t.certifiedDesc}
              </p>
              <button
                onClick={scrollToTop}
                className="w-full py-2 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <span>{t.backToTop}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Links */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400 text-center sm:text-left">
          <span>{t.copyright}</span>
          <div className="flex items-center gap-4">
            <Link
              href={`/${locale}/termos-de-uso-new`}
              className="hover:text-slate-200 transition-colors"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {t.terms}
            </Link>
            <span>•</span>
            <Link
              href={`/${locale}/politica-de-privacidade-new`}
              className="hover:text-slate-200 transition-colors"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {t.privacy}
            </Link>
            <span>•</span>
            <a
              href="https://dilivros.com.br/fale-conosco"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200 transition-colors"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {t.support}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
