import Link from "next/link";
import { Locale, SecaoInfo } from "@/lib/types";
import SectionIcon from "./SectionIcon";

interface SectionCardProps {
  secao: SecaoInfo;
  locale: Locale;
  variant?: "home-area" | "indice-structure";
}

export default function SectionCard({
  secao,
  locale,
  variant = "home-area",
}: SectionCardProps) {
  const title =
    locale === "en"
      ? secao.titulo_en
      : locale === "es"
      ? secao.titulo_es
      : secao.titulo_pt;

  if (variant === "home-area") {
    return (
      <Link
        href={`/${locale}/indice#${secao.tag}`}
        className="area-card"
        id={`area-card-${secao.numero}`}
      >
        <span className="area-icon" style={{ display: "grid", placeItems: "center" }}>
          <SectionIcon sectionId={secao.id} size={24} />
        </span>
        <b>{secao.numero}</b>
        <h3>{title}</h3>
      </Link>
    );
  }

  const sectionWord =
    locale === "en" ? "Section" : locale === "es" ? "Sección" : "Seção";
  const chaptersWord =
    locale === "en"
      ? "chapters"
      : locale === "es"
      ? "capítulos"
      : "capítulos";

  return (
    <a className="section-card" href={`#${secao.tag}`}>
      <span className="section-icon" style={{ display: "grid", placeItems: "center" }}>
        <SectionIcon sectionId={secao.id} size={24} />
      </span>
      <b>
        {sectionWord} {secao.numero}
      </b>
      <h3>{title}</h3>
      <small>
        {secao.totalCapitulos} {chaptersWord}
      </small>
    </a>
  );
}
