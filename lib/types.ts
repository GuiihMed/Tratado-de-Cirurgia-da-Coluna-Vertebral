export type Locale = "pt" | "en" | "es";

export interface Capitulo {
  id?: string;
  secao_id: number;
  numero: number;
  titulo_pt: string;
  titulo_en?: string | null;
  titulo_es?: string | null;
  resumo_pt?: string | null;
  resumo_en?: string | null;
  resumo_es?: string | null;
  autores?: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface SecaoInfo {
  id: number;
  tag: string;
  numero: number;
  titulo_pt: string;
  titulo_en: string;
  titulo_es: string;
  range: string;
  iconId: string;
  colorClass: "red-row" | "blue-row";
  totalCapitulos: number;
  isCompact?: boolean;
}
