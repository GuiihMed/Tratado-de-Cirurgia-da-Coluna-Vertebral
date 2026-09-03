"use client";

import SectionIcon from "./SectionIcon";
import Link from "next/link";
import { Capitulo, Locale, SecaoInfo } from "@/lib/types";
import { SECOES } from "@/lib/data/sections-and-chapters";

interface ChapterAccordionProps {
  initialCapitulos: Capitulo[];
  locale: Locale;
  isLoading?: boolean;
}

export default function ChapterAccordion({
  initialCapitulos,
  locale,
  isLoading = false,
}: ChapterAccordionProps) {
  const getChapterTitle = (cap: Capitulo) => {
    if (locale === "en" && cap.titulo_en) return cap.titulo_en;
    if (locale === "es" && cap.titulo_es) return cap.titulo_es;
    return cap.titulo_pt;
  };

  const getSectionTitle = (secao: SecaoInfo) => {
    if (locale === "en") return secao.titulo_en;
    if (locale === "es") return secao.titulo_es;
    return secao.titulo_pt;
  };

  const sectionPrefix =
    locale === "en" ? "Section" : locale === "es" ? "Sección" : "Seção";

  return (
    <section id="conteudo" className="outline">
      <div className="shell">
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <h2
            style={{
              fontSize: "clamp(30px, 3.4vw, 40px)",
              fontWeight: 700,
              color: "#001738",
              letterSpacing: "-0.025em",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            {locale === "en"
              ? "Complete Structure & Summaries — 109 Chapters"
              : locale === "es"
              ? "Estructura y Resúmenes de la Obra — 109 capítulos"
              : "Estrutura e Resumos da Obra — 109 Capítulos"}
          </h2>
        </div>

        {isLoading ? (
          <div
            style={{
              padding: "40px",
              textAlign: "center",
              fontSize: "18px",
              color: "var(--muted)",
            }}
          >
            <span className="spinner spinner-dark" style={{ marginRight: 12 }} />
            {locale === "en"
              ? "Loading chapters..."
              : locale === "es"
              ? "Cargando capítulos..."
              : "Carregando capítulos do banco de dados..."}
          </div>
        ) : (
          SECOES.map((secao) => {
            const chapters = initialCapitulos.filter(
              (c) => Number(c.secao_id) === secao.id
            );
            const isSection8 = secao.id === 8;

            return (
              <article
                key={secao.id}
                id={secao.tag}
                className={`outline-row ${secao.colorClass} ${
                  isSection8 ? "section-eight" : ""
                } is-open`}
              >
                <div className="row-title">
                  <span className="row-icon" style={{ display: "grid", placeItems: "center" }}>
                    <SectionIcon sectionId={secao.id} size={18} />
                  </span>
                  <span>
                    <b>
                      {sectionPrefix} {secao.numero}
                    </b>
                    <strong>{getSectionTitle(secao)}</strong>
                    <small>{secao.range}</small>
                  </span>
                </div>

                <ol
                  id={`chapters-${secao.id}`}
                  className={`chapters ${secao.isCompact ? "compact" : ""}`}
                >
                  {chapters.length > 0 ? (
                    chapters.map((cap) => (
                      <li key={cap.numero}>
                        <Link
                          href={`/${locale}/capitulo/${cap.numero}`}
                          style={{ color: "inherit", textDecoration: "none", display: "inline-block" }}
                          title={`${locale === "en" ? "View Summary of Chapter" : locale === "es" ? "Ver Resumen del Capítulo" : "Ver Resumo do Capítulo"} ${cap.numero}: ${getChapterTitle(cap)}`}
                        >
                          <b>{cap.numero}.</b> {getChapterTitle(cap)}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li style={{ gridColumn: "1 / -1", opacity: 0.7 }}>
                      {locale === "en"
                        ? "No chapters registered for this section."
                        : locale === "es"
                        ? "No hay capítulos registrados para esta sección."
                        : "Nenhum capítulo cadastrado nesta seção."}
                    </li>
                  )}
                </ol>
              </article>
            );
          })
        )}
      </div>
    </section>
  );
}
