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
  conteudo_pt?: string | null;
  conteudo_en?: string | null;
  conteudo_es?: string | null;
  autores?: string | null;
  referencias?: string | null;
  status?: "publicado" | "rascunho" | string;
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

export interface AutorEditor {
  id?: string;
  ordem: number;
  nome: string;
  cargo: string;
  instituicao: string;
  destaque?: string | null;
  bio_pt: string;
  bio_en?: string | null;
  bio_es?: string | null;
  especialidades: string;
  foto_url: string;
  created_at?: string;
  updated_at?: string;
}

export type UserRole = "super_admin" | "co_super_admin" | "admin_escritor" | "escritor";
export type UserStatus = "pendente" | "aprovado" | "bloqueado";

export interface PerfilUsuario {
  id: string;
  email: string;
  nome: string;
  cargo_instituicao?: string | null;
  role: UserRole;
  status: UserStatus;
  foto_url?: string | null;
  aprovado_em?: string | null;
  created_at?: string;
  updated_at?: string;
}

