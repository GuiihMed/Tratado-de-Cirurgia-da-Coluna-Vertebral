"use client";

import { useState } from "react";
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
  // Store open state for each section (all 10 sections open by default as in static template)
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
  });

  const toggleSection = (secaoId: number) => {
    setOpenSections((prev) => ({
      ...prev,
      [secaoId]: !prev[secaoId],
    }));
  };

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
        <h2>
          {locale === "en"
            ? "Complete Content — 109 Chapters"
            : locale === "es"
            ? "Contenido completo — 109 capítulos"
            : "Conteúdo completo — 109 capítulos"}
        </h2>

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
            const isOpen = Boolean(openSections[secao.id]);
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
                } ${isOpen ? "is-open" : ""}`}
              >
                <button
                  className="row-toggle"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`chapters-${secao.id}`}
                  onClick={() => toggleSection(secao.id)}
                  id={`toggle-secao-${secao.id}`}
                >
                  <span className="row-title">
                    <span className="row-icon">
                      <svg>
                        <use href={`#${secao.iconId}`}></use>
                      </svg>
                    </span>
                    <span>
                      <b>
                        {sectionPrefix} {secao.numero}
                      </b>
                      <strong>{getSectionTitle(secao)}</strong>
                      <small>{secao.range}</small>
                    </span>
                  </span>
                  <span className="toggle-icon">
                    <svg>
                      <use href="#i-down"></use>
                    </svg>
                  </span>
                </button>

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
                          title={`Ler Capítulo ${cap.numero}: ${getChapterTitle(cap)}`}
                        >
                          <b>{cap.numero}.</b> {getChapterTitle(cap)}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li style={{ gridColumn: "1 / -1", opacity: 0.7 }}>
                      {locale === "en"
                        ? "No chapters registered for this section."
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
