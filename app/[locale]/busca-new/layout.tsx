import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  const isEs = locale === "es";

  const title = isEn
    ? "Search | Treatise on Spine Surgery SBC"
    : isEs
    ? "Búsqueda | Tratado de Cirugía de la Columna Vertebral SBC"
    : "Busca no Site | Tratado de Cirurgia da Coluna Vertebral SBC";

  const description = isEn
    ? "Search across all 109 chapters, authors, debate episodes, and thematic sections of the SBC Treatise on Spine Surgery."
    : isEs
    ? "Busque en los 109 capítulos, autores, episodios en debate y secciones temáticas del Tratado de Cirugía de la Columna Vertebral SBC."
    : "Pesquise em todos os 109 capítulos, autores, episódios em debate e seções temáticas do Tratado de Cirurgia da Coluna Vertebral SBC.";

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
