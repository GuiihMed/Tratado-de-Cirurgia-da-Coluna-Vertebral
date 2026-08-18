"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase, isSupabaseConfigured } from "@/lib/supabase/client";
import { Capitulo, AutorEditor } from "@/lib/types";
import { SECOES, INITIAL_CHAPTERS } from "@/lib/data/sections-and-chapters";
import {
  cadastrarCapituloAction,
  excluirCapituloAction,
  salvarAutorAction,
  excluirAutorAction,
  atualizarPerfilUsuarioAction,
  excluirUsuarioAction,
} from "../actions";

// ============================================================================
// SVG ICONS (Medical & Modern UI)
// ============================================================================

function IconBook({ className = "w-5 h-5", size = 20 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function IconUsers({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconLayers({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function IconCheckCircle({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function IconEdit({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}

function IconEye({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IconTrash({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
    </svg>
  );
}

function IconSearch({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function IconPlus({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function IconSave({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
      <polyline points="17 21 17 13 7 13 7 21" />
      <polyline points="7 3 7 8 15 8" />
    </svg>
  );
}

function IconSparkles({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" />
    </svg>
  );
}

function IconExternal({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function IconLogout({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );
}

const DEFAULT_AUTHORS: AutorEditor[] = [
  {
    id: "1",
    ordem: 1,
    nome: "Dr. Edson Pudles",
    cargo: "Editor-Chefe / SBC",
    instituicao: "Sociedade Brasileira de Coluna",
    destaque: "Coordenação Editorial de 109 Capítulos",
    foto_url: "/assets/edson-pudles.png",
    bio_pt: "Presidente de Honra e Referência Nacional em Deformidades da Coluna Vertebral. Liderança editorial das diretrizes científicas e publicações acadêmicas da Sociedade Brasileira de Coluna.",
    especialidades: "Deformidades Complexas, Liderança Editorial, Diretrizes SBC",
  },
  {
    id: "2",
    ordem: 2,
    nome: "Dr. Helton Defino",
    cargo: "Editor / FMRP-USP",
    instituicao: "Faculdade de Medicina de Ribeirão Preto - USP",
    destaque: "Pioneiro da Fixação Pedicular no Brasil",
    foto_url: "/assets/helton-defino.png",
    bio_pt: "Professor Titular da USP Ribeirão Preto. Pioneiro na pesquisa biomecânica internacional, desenvolvimento de técnicas de instrumentação vertebral pedicular e traumatologia espinhal.",
    especialidades: "Biomecânica Espinhal, Fixação Pedicular, Trauma Raquimedular",
  },
  {
    id: "3",
    ordem: 3,
    nome: "Dr. Marcelo Risso",
    cargo: "Editor / SBC",
    instituicao: "Comitê de Educação e Publicações SBC",
    destaque: "Coordenador do Capítulo 8 (Plano Sagital)",
    foto_url: "/assets/marcelo-risso.png",
    bio_pt: "Especialista em Equilíbrio Sagital Global, Osteotomias Tridimensionais de Alta Complexidade e Cirurgia Minimamente Invasiva da Coluna Vertebral no Brasil.",
    especialidades: "Equilíbrio Sagital, Osteotomias 3D, Minimamente Invasiva",
  },
];


function IconShield({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function IconUserCheck({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 11 18 13 22 9" />
    </svg>
  );
}

function IconUserX({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="18" y1="8" x2="23" y2="13" />
      <line x1="23" y1="8" x2="18" y2="13" />
    </svg>
  );
}

export type UserRole = "super_admin" | "co_super_admin" | "admin_escritor" | "escritor";
export type UserStatus = "pendente" | "aprovado" | "bloqueado";

export interface PerfilUsuario {
  id: string;
  nome: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  cargo_instituicao?: string;
  created_at: string;
}

export default function AdminPainelPage() {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  // Active Tab
  const [activeTab, setActiveTab] = useState<"capitulos" | "autores" | "usuarios">("capitulos");
  const [currentUserRole, setCurrentUserRole] = useState<UserRole>("super_admin");
  const [usuarios, setUsuarios] = useState<PerfilUsuario[]>([]);
  const [loadingUsuarios, setLoadingUsuarios] = useState(false);

  // Chapter Form states
  const [secaoId, setSecaoId] = useState("1");
  const [numero, setNumero] = useState("");
  const [tituloPt, setTituloPt] = useState("");
  const [tituloEn, setTituloEn] = useState("");
  const [tituloEs, setTituloEs] = useState("");
  const [autores, setAutores] = useState("");
  const [resumoPt, setResumoPt] = useState("");
  const [conteudoPt, setConteudoPt] = useState("");
  const [referencias, setReferencias] = useState("");
  const [status, setStatus] = useState("publicado");

  // Author Form states
  const [authorId, setAuthorId] = useState("");
  const [authorOrdem, setAuthorOrdem] = useState("1");
  const [authorNome, setAuthorNome] = useState("");
  const [authorCargo, setAuthorCargo] = useState("");
  const [authorInstituicao, setAuthorInstituicao] = useState("");
  const [authorDestaque, setAuthorDestaque] = useState("");
  const [authorFotoUrl, setAuthorFotoUrl] = useState("/assets/edson-pudles.png");
  const [authorBioPt, setAuthorBioPt] = useState("");
  const [authorEspecialidades, setAuthorEspecialidades] = useState("");

  const [feedback, setFeedback] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [isPending, startTransition] = useTransition();

  // Chapters & Authors listings
  const [chapters, setChapters] = useState<Capitulo[]>([]);
  const [authors, setAuthors] = useState<AutorEditor[]>(DEFAULT_AUTHORS);
  const [filterSecao, setFilterSecao] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loadingList, setLoadingList] = useState(false);

  
  const fetchUsuarios = async () => {
    setLoadingUsuarios(true);
    try {
      if (isSupabaseConfigured()) {
        const { data, error } = await supabase
          .from("perfis")
          .select("*")
          .order("created_at", { ascending: false });

        if (!error && data) {
          setUsuarios(data as PerfilUsuario[]);
        }
      }
    } catch (err) {
      console.warn("Error loading perfis:", err);
    } finally {
      setLoadingUsuarios(false);
    }
  };

  const handleUpdateUserStatus = async (
    id: string,
    role: UserRole,
    status: UserStatus
  ) => {
    startTransition(async () => {
      const res = await atualizarPerfilUsuarioAction(id, role, status);
      setFeedback({
        type: res.success ? "success" : "error",
        message: res.message,
      });
      fetchUsuarios();
    });
  };

  const handleDeleteUser = async (id: string, nome: string) => {
    if (!confirm()) return;
    startTransition(async () => {
      const res = await excluirUsuarioAction(id);
      setFeedback({
        type: res.success ? "success" : "error",
        message: res.message,
      });
      fetchUsuarios();
    });
  };

  // 1. Check active session on mount
  useEffect(() => {
    async function checkSession() {
      try {
        if (isSupabaseConfigured()) {
          const { data } = await supabase.auth.getSession();
          if (!data.session) {
            router.push("/admin/login");
            return;
          }
          setUserEmail(data.session.user.email || "autor@sbc.med.br");
        } else {
          // Local fallback check
          const localSession = localStorage.getItem("sbc_admin_session");
          if (!localSession) {
            router.push("/admin/login");
            return;
          }
          const parsed = JSON.parse(localSession);
          setUserEmail(parsed.email || "autor@sbc.med.br");
        }
        setCheckingAuth(false);
        fetchUsuarios();
      } catch (err) {
        router.push("/admin/login");
      }
    }

    checkSession();
  }, [router]);

  // 2. Fetch chapters for the table
  const fetchChapters = async () => {
    setLoadingList(true);
    try {
      if (isSupabaseConfigured()) {
        const { data, error } = await supabase
          .from("capitulos")
          .select("*")
          .order("numero", { ascending: true });

        if (!error && data && data.length > 0) {
          setChapters(data as Capitulo[]);
          setLoadingList(false);
          return;
        }
      }
      // Fallback
      setChapters(INITIAL_CHAPTERS);
    } catch (e) {
      setChapters(INITIAL_CHAPTERS);
    } finally {
      setLoadingList(false);
    }
  };

  // 3. Fetch authors for the table
  const fetchAuthors = async () => {
    try {
      if (isSupabaseConfigured()) {
        const { data, error } = await supabase
          .from("autores")
          .select("*")
          .order("ordem", { ascending: true });

        if (!error && data && data.length > 0) {
          setAuthors(data as AutorEditor[]);
          localStorage.setItem("sbc_custom_authors", JSON.stringify(data));
          return;
        }
      }
      const savedLocal = localStorage.getItem("sbc_custom_authors");
      if (savedLocal) {
        setAuthors(JSON.parse(savedLocal));
      } else {
        setAuthors(DEFAULT_AUTHORS);
      }
    } catch (e) {
      const savedLocal = localStorage.getItem("sbc_custom_authors");
      if (savedLocal) {
        setAuthors(JSON.parse(savedLocal));
      } else {
        setAuthors(DEFAULT_AUTHORS);
      }
    }
  };

  useEffect(() => {
    if (!checkingAuth) {
      fetchChapters();
      fetchAuthors();
    }
  }, [checkingAuth]);

  // Handle Logout
  const handleLogout = async () => {
    if (isSupabaseConfigured()) {
      await supabase.auth.signOut();
    }
    localStorage.removeItem("sbc_admin_session");
    router.push("/admin/login");
  };

  // Load a chapter into the form for editing
  const handleEditChapter = (cap: Capitulo) => {
    setSecaoId(cap.secao_id.toString());
    setNumero(cap.numero.toString());
    setTituloPt(cap.titulo_pt || "");
    setTituloEn(cap.titulo_en || "");
    setTituloEs(cap.titulo_es || "");
    setAutores(cap.autores || "");
    setResumoPt(cap.resumo_pt || "");
    setConteudoPt(cap.conteudo_pt || "");
    setReferencias(cap.referencias || "");
    setStatus(cap.status || "publicado");

    window.scrollTo({ top: 220, behavior: "smooth" });
    setFeedback({
      type: "success",
      message: `Capítulo ${cap.numero} ("${cap.titulo_pt}") carregado para edição. Altere os campos e clique em Salvar.`,
    });
  };

  // Clear chapter form
  const handleClearForm = () => {
    setNumero("");
    setTituloPt("");
    setTituloEn("");
    setTituloEs("");
    setAutores("");
    setResumoPt("");
    setConteudoPt("");
    setReferencias("");
    setStatus("publicado");
    setFeedback({ type: null, message: "" });
  };

  // Insert Standard Scientific Template
  const handleInsertTemplate = () => {
    if (!resumoPt) {
      setResumoPt(
        "Este capítulo aborda os fundamentos anátomo-cirúrgicos, princípios biomecânicos essenciais e o processo de tomada de decisão clínica na abordagem dos pacientes com afecções vertebrais. Destacam-se as indicações precisas, armadilhas diagnósticas e estratégias para prevenção de complicações perioperatórias."
      );
    }
    if (!conteudoPt) {
      setConteudoPt(
        `## 1. Introdução e Contexto Clínico\nA cirurgia da coluna vertebral passou por profundas transformações conceituais e tecnológicas nas últimas décadas. O domínio das bases anatômicas e dos parâmetros espinopélvicos é o pilar indispensável para o sucesso dos procedimentos reconstrutivos e descompressivos.\n\n## 2. Anatomia Cirúrgica Aplicada e Vias de Acesso\nO planejamento pré-operatório criterioso requer o conhecimento milimétrico das relações entre os elementos ósseos, estruturas neurais (saco dural, raízes espinhais) e vasculares adjacentes. A preservação dos estabilizadores musculoligamentares posteriores contribui diretamente para a redução da dor residual e prevenção da doença do nível adjacente.\n\n## 3. Avaliação Radiográfica e Parâmetros Chave\n- Alinhamento no plano sagital e coronal\n- Avaliação tomográfica da densidade óssea e integridade dos pedículos\n- Ressonância magnética para graduação da estenose de canal e compressão foraminal\n\n## 4. Técnica Cirúrgica Passo a Passo\n1. Posicionamento adequado do paciente em mesa radiotransparente com alívio da pressão abdominal.\n2. Localização fluoroscópica precisa do nível operatório.\n3. Descompressão microcirúrgica cuidadosa sob magnificação e controle hemostático rigoroso.\n4. Instrumentação guiada por marcos anatômicos ou navegação intraoperatória.\n\n## 5. Cuidados Pós-Operatórios e Reabilitação\nMobilização precoce assistida, analgesia multimodal preemptiva e protocolo de seguimento radiográfico com 30 dias, 3 meses, 6 meses e 1 ano pós-operatório.`
      );
    }
    if (!referencias) {
      setReferencias(
        `1. Sociedade Brasileira de Coluna (SBC). Diretrizes Clínicas em Cirurgia da Coluna. 2026.\n2. Bridwell KH, et al. The Textbook of Spinal Surgery. 4th ed. Wolters Kluwer, 2020.\n3. Schwab F, et al. Sagittal parameters in spinal deformity: radiographic assessment and clinical relevance. Spine, 2012.`
      );
    }
    setFeedback({
      type: "success",
      message: "Modelo científico inserido com sucesso nos campos de Resumo, Conteúdo e Referências!",
    });
  };

  // Submit Chapter Form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeedback({ type: null, message: "" });
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const res = await cadastrarCapituloAction(null, formData);
      if (res.success) {
        setFeedback({ type: "success", message: res.message });
        await fetchChapters();
      } else {
        setFeedback({ type: "error", message: res.message });
      }
    });
  };

  // Delete Chapter
  const handleDelete = async (num: number, title: string) => {
    const confirm = window.confirm(
      `Tem certeza que deseja excluir o Capítulo ${num}: "${title}"?`
    );
    if (!confirm) return;

    const res = await excluirCapituloAction(num);
    if (res.success) {
      setFeedback({ type: "success", message: res.message });
      await fetchChapters();
    } else {
      setFeedback({ type: "error", message: res.message });
    }
  };

  // Load an author into form for editing
  const handleEditAuthor = (author: AutorEditor) => {
    setAuthorId(author.id || "");
    setAuthorOrdem((author.ordem || 1).toString());
    setAuthorNome(author.nome || "");
    setAuthorCargo(author.cargo || "");
    setAuthorInstituicao(author.instituicao || "");
    setAuthorDestaque(author.destaque || "");
    setAuthorFotoUrl(author.foto_url || "/assets/edson-pudles.png");
    setAuthorBioPt(author.bio_pt || "");
    setAuthorEspecialidades(author.especialidades || "");
    window.scrollTo({ top: 220, behavior: "smooth" });
    setFeedback({
      type: "success",
      message: `Autor "${author.nome}" carregado para edição. Faça as alterações e clique em Salvar.`,
    });
  };

  // Clear Author Form
  const handleClearAuthorForm = () => {
    setAuthorId("");
    setAuthorOrdem((authors.length + 1).toString());
    setAuthorNome("");
    setAuthorCargo("");
    setAuthorInstituicao("");
    setAuthorDestaque("");
    setAuthorFotoUrl("/assets/edson-pudles.png");
    setAuthorBioPt("");
    setAuthorEspecialidades("");
    setFeedback({ type: null, message: "" });
  };

  // Submit Author Form
  const handleAuthorSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeedback({ type: null, message: "" });
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const res = await salvarAutorAction(null, formData);

      const updatedAuthor: AutorEditor = {
        id: authorId || Date.now().toString(),
        ordem: parseInt(authorOrdem, 10) || 1,
        nome: authorNome,
        cargo: authorCargo,
        instituicao: authorInstituicao,
        destaque: authorDestaque,
        foto_url: authorFotoUrl,
        bio_pt: authorBioPt,
        especialidades: authorEspecialidades,
      };

      setAuthors((prev) => {
        const idx = prev.findIndex((a) => a.id === authorId || a.nome === authorNome);
        let nextList: AutorEditor[];
        if (idx >= 0) {
          nextList = [...prev];
          nextList[idx] = updatedAuthor;
        } else {
          nextList = [...prev, updatedAuthor];
        }
        nextList.sort((a, b) => a.ordem - b.ordem);
        localStorage.setItem("sbc_custom_authors", JSON.stringify(nextList));
        return nextList;
      });

      if (res.success) {
        setFeedback({ type: "success", message: res.message });
      } else {
        setFeedback({ type: "success", message: `Autor "${updatedAuthor.nome}" atualizado com sucesso no portal!` });
      }
      await fetchAuthors();
    });
  };

  // Delete Author
  const handleDeleteAuthor = async (id: string, name: string) => {
    const confirm = window.confirm(`Tem certeza que deseja remover o autor "${name}"?`);
    if (!confirm) return;

    await excluirAutorAction(id);
    setAuthors((prev) => {
      const nextList = prev.filter((a) => a.id !== id && a.nome !== name);
      localStorage.setItem("sbc_custom_authors", JSON.stringify(nextList));
      return nextList;
    });

    setFeedback({ type: "success", message: `Autor "${name}" removido com sucesso.` });
    await fetchAuthors();
  };

  // Filtered listing
  const displayedChapters = chapters.filter((c) => {
    const matchesSecao =
      filterSecao === "all" || c.secao_id.toString() === filterSecao;
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !q ||
      c.numero.toString().includes(q) ||
      c.titulo_pt.toLowerCase().includes(q) ||
      (c.autores && c.autores.toLowerCase().includes(q)) ||
      (c.titulo_en && c.titulo_en.toLowerCase().includes(q));

    return matchesSecao && matchesQuery;
  });

  if (checkingAuth) {
    return (
      <div style={{ display: "grid", placeItems: "center", minHeight: "100vh", background: "#001026" }}>
        <div style={{ textAlign: "center", color: "#fff" }}>
          <img src="/assets/sbc-logo-white.svg" alt="SBC" style={{ height: 48, margin: "0 auto 16px" }} />
          <p style={{ color: "#94a3b8", fontWeight: 600, fontSize: 15 }}>Autenticando acesso editorial...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "#f1f5f9", minHeight: "100vh", paddingBottom: "100px" }}>
      {/* ================= TOP NAVIGATION BAR ================= */}
      <header
        style={{
          background: "#001a3d",
          color: "#fff",
          padding: "14px 28px",
          borderBottom: "3px solid #f52238",
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.25)",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: 1380,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Link href="/pt/home-new" style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/assets/sbc-logo-white.svg"
                alt="Sociedade Brasileira de Coluna"
                style={{ height: 42, width: "auto", objectFit: "contain" }}
              />
            </Link>
            <div style={{ borderLeft: "1px solid rgba(255, 255, 255, 0.2)", paddingLeft: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <h1 style={{ fontSize: 17, fontWeight: 800, margin: 0, letterSpacing: "-0.01em" }}>
                  Portal Editorial &amp; Autores
                </h1>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    padding: "2px 8px",
                    borderRadius: 4,
                    background: "rgba(245, 34, 56, 0.25)",
                    border: "1px solid rgba(245, 34, 56, 0.5)",
                    color: "#ff808f",
                    textTransform: "uppercase",
                  }}
                >
                  SBC Oficial
                </span>
              </div>
              <span style={{ fontSize: 12, color: "#94a3b8" }}>
                Gestão e Publicação Científica • Tratado de Cirurgia da Coluna Vertebral
              </span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                borderRadius: 8,
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                fontSize: 13,
                color: "#cbd5e1",
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e" }} />
              <span>{userEmail}</span>
            </div>

            <Link
              href="/pt/indice-new"
              target="_blank"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 13,
                fontWeight: 600,
                color: "#67e8f9",
                textDecoration: "none",
                padding: "7px 14px",
                borderRadius: 8,
                background: "rgba(103, 232, 249, 0.1)",
                border: "1px solid rgba(103, 232, 249, 0.3)",
                transition: "all 0.2s ease",
              }}
            >
              <span>Ver Índice Público</span>
              <IconExternal size={13} />
            </Link>

            <button
              onClick={handleLogout}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "7px 14px",
                borderRadius: 8,
                border: "none",
                background: "rgba(239, 68, 68, 0.2)",
                color: "#fca5a5",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "rgba(239, 68, 68, 0.4)",
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <IconLogout size={14} />
              <span>Sair</span>
            </button>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 1380, margin: "28px auto 0", padding: "0 24px" }}>
        {/* ================= METRICS & KPI STRIP ================= */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
            marginBottom: 28,
          }}
        >
          {/* Card 1: Total Chapters */}
          <div
            style={{
              background: "#fff",
              padding: "20px 24px",
              borderRadius: 14,
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 12px rgba(0, 30, 80, 0.03)",
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: "rgba(0, 26, 61, 0.08)",
                color: "#001a3d",
                display: "grid",
                placeItems: "center",
              }}
            >
              <IconBook size={24} />
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Capítulos Cadastrados
              </div>
              <div style={{ fontSize: 26, fontWeight: 900, color: "#001a3d", lineHeight: 1.2 }}>
                {chapters.length} <span style={{ fontSize: 13, fontWeight: 600, color: "#059669" }}>• 100% da Obra</span>
              </div>
            </div>
          </div>

          {/* Card 2: Sections */}
          <div
            style={{
              background: "#fff",
              padding: "20px 24px",
              borderRadius: 14,
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 12px rgba(0, 30, 80, 0.03)",
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: "rgba(14, 116, 144, 0.1)",
                color: "#0e7490",
                display: "grid",
                placeItems: "center",
              }}
            >
              <IconLayers size={24} />
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Seções Temáticas
              </div>
              <div style={{ fontSize: 26, fontWeight: 900, color: "#001a3d", lineHeight: 1.2 }}>
                10 <span style={{ fontSize: 13, fontWeight: 600, color: "#64748b" }}>Módulos Clínicos</span>
              </div>
            </div>
          </div>

          {/* Card 3: Authors */}
          <div
            style={{
              background: "#fff",
              padding: "20px 24px",
              borderRadius: 14,
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 12px rgba(0, 30, 80, 0.03)",
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: "rgba(245, 34, 56, 0.1)",
                color: "#f52238",
                display: "grid",
                placeItems: "center",
              }}
            >
              <IconUsers size={24} />
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Corpo Editorial
              </div>
              <div style={{ fontSize: 26, fontWeight: 900, color: "#001a3d", lineHeight: 1.2 }}>
                {authors.length} <span style={{ fontSize: 13, fontWeight: 600, color: "#f52238" }}>Editores Oficiais</span>
              </div>
            </div>
          </div>

          {/* Card 4: Status */}
          <div
            style={{
              background: "#fff",
              padding: "20px 24px",
              borderRadius: 14,
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 12px rgba(0, 30, 80, 0.03)",
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: "rgba(16, 185, 129, 0.1)",
                color: "#059669",
                display: "grid",
                placeItems: "center",
              }}
            >
              <IconCheckCircle size={24} />
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Status de Publicação
              </div>
              <div style={{ fontSize: 26, fontWeight: 900, color: "#059669", lineHeight: 1.2 }}>
                Ativo <span style={{ fontSize: 13, fontWeight: 600, color: "#64748b" }}>• Online</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= TAB SWITCHER ================= */}
        <div
          style={{
            background: "#fff",
            padding: "8px",
            borderRadius: 16,
            border: "1px solid #e2e8f0",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.02)",
            display: "inline-flex",
            gap: 8,
            marginBottom: 28,
            flexWrap: "wrap",
          }}
        >
          <button
            type="button"
            onClick={() => {
              setActiveTab("capitulos");
              setFeedback({ type: null, message: "" });
            }}
            style={{
              padding: "12px 24px",
              borderRadius: 10,
              border: "none",
              background: activeTab === "capitulos" ? "#001a3d" : "transparent",
              color: activeTab === "capitulos" ? "#fff" : "#475569",
              fontWeight: 700,
              fontSize: 14.5,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              boxShadow: activeTab === "capitulos" ? "0 4px 14px rgba(0, 26, 61, 0.25)" : "none",
              transition: "all 0.2s ease",
            }}
          >
            <IconBook size={18} />
            <span>Gestão dos 109 Capítulos</span>
            <span
              style={{
                fontSize: 11,
                fontWeight: 800,
                padding: "2px 8px",
                borderRadius: 12,
                background: activeTab === "capitulos" ? "rgba(255, 255, 255, 0.2)" : "#e2e8f0",
                color: activeTab === "capitulos" ? "#fff" : "#475569",
              }}
            >
              {chapters.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab("autores");
              setFeedback({ type: null, message: "" });
            }}
            style={{
              padding: "12px 24px",
              borderRadius: 10,
              border: "none",
              background: activeTab === "autores" ? "#f52238" : "transparent",
              color: activeTab === "autores" ? "#fff" : "#475569",
              fontWeight: 700,
              fontSize: 14.5,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              boxShadow: activeTab === "autores" ? "0 4px 14px rgba(245, 34, 56, 0.3)" : "none",
              transition: "all 0.2s ease",
            }}
          >
            <IconUsers size={18} />
            <span>Corpo Editorial &amp; Autores</span>
            <span
              style={{
                fontSize: 11,
                fontWeight: 800,
                padding: "2px 8px",
                borderRadius: 12,
                background: activeTab === "autores" ? "rgba(255, 255, 255, 0.25)" : "#e2e8f0",
                color: activeTab === "autores" ? "#fff" : "#475569",
              }}
            >
              {authors.length}
            </span>
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab("usuarios");
              setFeedback({ type: null, message: "" });
            }}
            style={{
              padding: "12px 24px",
              borderRadius: 10,
              border: "none",
              background: activeTab === "usuarios" ? "#7c3aed" : "transparent",
              color: activeTab === "usuarios" ? "#fff" : "#475569",
              fontWeight: 700,
              fontSize: 14.5,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              boxShadow: activeTab === "usuarios" ? "0 4px 14px rgba(124, 58, 237, 0.3)" : "none",
              transition: "all 0.2s ease",
            }}
          >
            <IconShield size={18} />
            <span>Usuários &amp; Acessos</span>
            <span
              style={{
                fontSize: 11,
                fontWeight: 800,
                padding: "2px 8px",
                borderRadius: 12,
                background: activeTab === "usuarios" ? "rgba(255, 255, 255, 0.25)" : "#e2e8f0",
                color: activeTab === "usuarios" ? "#fff" : "#475569",
              }}
            >
              {usuarios.length}
            </span>
            {usuarios.filter(u => u.status === 'pendente').length > 0 && (
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 900,
                  padding: "2px 6px",
                  borderRadius: 10,
                  background: "#ef4444",
                  color: "#ffffff",
                  marginLeft: -4,
                }}
              >
                {usuarios.filter(u => u.status === 'pendente').length} novo
              </span>
            )}
          </button>

        </div>

        {/* Feedback Alert */}
        {feedback.message && (
          <div
            style={{
              padding: "16px 20px",
              borderRadius: 12,
              marginBottom: 28,
              fontSize: 14,
              fontWeight: 600,
              background: feedback.type === "success" ? "#ecfdf5" : "#fef2f2",
              color: feedback.type === "success" ? "#065f46" : "#991b1b",
              border: feedback.type === "success" ? "1px solid #a7f3d0" : "1px solid #fecaca",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              {feedback.type === "success" ? <IconCheckCircle size={20} /> : <IconTrash size={20} />}
              <span>{feedback.message}</span>
            </div>
            <button
              onClick={() => setFeedback({ type: null, message: "" })}
              style={{
                background: "none",
                border: "none",
                color: "inherit",
                cursor: "pointer",
                fontWeight: 800,
                fontSize: 16,
                padding: "4px",
              }}
            >
              ✕
            </button>
          </div>
        )}

        {/* ================= ABA 1: GESTÃO DE CAPÍTULOS ================= */}
        {activeTab === "capitulos" && (
          <>
            {/* Editor de Conteúdo do Capítulo */}
            <section
              style={{
                background: "#fff",
                borderRadius: 18,
                padding: "36px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 10px 30px rgba(0, 30, 80, 0.04)",
                marginBottom: "40px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 28,
                  borderBottom: "1px solid #f1f5f9",
                  paddingBottom: 20,
                  flexWrap: "wrap",
                  gap: 16,
                }}
              >
                <div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "4px 10px",
                      borderRadius: 6,
                      background: "rgba(245, 34, 56, 0.1)",
                      color: "#f52238",
                      fontSize: 12,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: 6,
                    }}
                  >
                    <IconBook size={14} />
                    <span>Editor Científico da Obra</span>
                  </div>
                  <h2 style={{ fontSize: 24, fontWeight: 900, color: "#001a3d", margin: 0, letterSpacing: "-0.02em" }}>
                    {numero ? `Editando Capítulo ${numero}: ${tituloPt || "Sem Título"}` : "Cadastrar / Publicar Novo Capítulo"}
                  </h2>
                  <p style={{ fontSize: 13.5, color: "#64748b", margin: "4px 0 0" }}>
                    Preencha os metadados, títulos e o texto completo com formatação científica estruturada.
                  </p>
                </div>

                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <button
                    type="button"
                    onClick={handleInsertTemplate}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "9px 16px",
                      borderRadius: 8,
                      border: "1px solid #cbd5e1",
                      background: "#f8fafc",
                      color: "#334155",
                      fontSize: 13,
                      fontWeight: 700,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <IconSparkles size={15} />
                    <span>Inserir Modelo Científico</span>
                  </button>

                  {numero && (
                    <Link
                      href={`/pt/capitulo/${numero}`}
                      target="_blank"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "9px 16px",
                        borderRadius: 8,
                        border: "1px solid #93c5fd",
                        background: "#eff6ff",
                        color: "#1d4ed8",
                        fontSize: 13,
                        fontWeight: 700,
                        textDecoration: "none",
                      }}
                    >
                      <IconEye size={15} />
                      <span>Visualizar Leitor</span>
                    </Link>
                  )}

                  <button
                    type="button"
                    onClick={handleClearForm}
                    style={{
                      padding: "9px 16px",
                      borderRadius: 8,
                      border: "1px solid #e2e8f0",
                      background: "#fff",
                      color: "#64748b",
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    Limpar Formulário
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* BLOCO 1: METADADOS */}
                <div style={{ marginBottom: 28 }}>
                  <h3 style={{ fontSize: 14, fontWeight: 800, color: "#001a3d", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 14 }}>
                    1. Metadados do Capítulo
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1.4fr 120px 140px 2fr", gap: 16, flexWrap: "wrap" }}>
                    <div>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                        Seção Temática *
                      </label>
                      <select
                        name="secao_id"
                        value={secaoId}
                        onChange={(e) => setSecaoId(e.target.value)}
                        required
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          borderRadius: 8,
                          border: "1px solid #cbd5e1",
                          fontSize: 14,
                          background: "#fff",
                          fontWeight: 600,
                          color: "#0f172a",
                        }}
                      >
                        {SECOES.map((s) => (
                          <option key={s.id} value={s.id}>
                            Seção {s.id}: {s.titulo_pt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                        Número *
                      </label>
                      <input
                        type="number"
                        name="numero"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                        placeholder="Ex: 8"
                        required
                        min={1}
                        max={200}
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          borderRadius: 8,
                          border: "1px solid #cbd5e1",
                          fontSize: 14,
                          fontWeight: 800,
                          color: "#f52238",
                          textAlign: "center",
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                        Status *
                      </label>
                      <select
                        name="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          borderRadius: 8,
                          border: "1px solid #cbd5e1",
                          fontSize: 14,
                          fontWeight: 700,
                          color: status === "publicado" ? "#166534" : "#92400e",
                          background: status === "publicado" ? "#f0fdf4" : "#fefce8",
                        }}
                      >
                        <option value="publicado">Publicado</option>
                        <option value="rascunho">Rascunho</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                        Autores do Artigo
                      </label>
                      <input
                        type="text"
                        name="autores"
                        value={autores}
                        onChange={(e) => setAutores(e.target.value)}
                        placeholder="Ex: Dr. Edson Pudles, Dr. Helton Defino"
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          borderRadius: 8,
                          border: "1px solid #cbd5e1",
                          fontSize: 14,
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* BLOCO 2: TÍTULOS MULTILÍNGUES */}
                <div style={{ marginBottom: 28, background: "#f8fafc", padding: "20px", borderRadius: 12, border: "1px solid #e2e8f0" }}>
                  <h3 style={{ fontSize: 14, fontWeight: 800, color: "#001a3d", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 14 }}>
                    2. Títulos da Obra (Multilíngue)
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
                    <div>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                        🇧🇷 Título em Português *
                      </label>
                      <input
                        type="text"
                        name="titulo_pt"
                        value={tituloPt}
                        onChange={(e) => setTituloPt(e.target.value)}
                        placeholder="Ex: Equilíbrio Sagital e Parâmetros Espinopélvicos"
                        required
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          borderRadius: 8,
                          border: "1px solid #cbd5e1",
                          fontSize: 14,
                          fontWeight: 600,
                          color: "#0f172a",
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#64748b", marginBottom: 6 }}>
                        🇺🇸 Título em Inglês (Opcional)
                      </label>
                      <input
                        type="text"
                        name="titulo_en"
                        value={tituloEn}
                        onChange={(e) => setTituloEn(e.target.value)}
                        placeholder="Ex: Sagittal Balance and Spinopelvic Parameters"
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          borderRadius: 8,
                          border: "1px solid #cbd5e1",
                          fontSize: 14,
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#64748b", marginBottom: 6 }}>
                        🇪🇸 Título em Espanhol (Opcional)
                      </label>
                      <input
                        type="text"
                        name="titulo_es"
                        value={tituloEs}
                        onChange={(e) => setTituloEs(e.target.value)}
                        placeholder="Ex: Equilibrio Sagital y Parámetros Espinopélvicos"
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          borderRadius: 8,
                          border: "1px solid #cbd5e1",
                          fontSize: 14,
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* BLOCO 3: RESUMO CLÍNICO */}
                <div style={{ marginBottom: 28 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                    3. Resumo Clínico / Abstract do Capítulo
                  </label>
                  <textarea
                    name="resumo_pt"
                    value={resumoPt}
                    onChange={(e) => setResumoPt(e.target.value)}
                    rows={3}
                    placeholder="Síntese dos objetivos, métodos diagnósticos, indicações cirúrgicas e relevância clínica deste tema..."
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: 8,
                      border: "1px solid #cbd5e1",
                      fontSize: 14,
                      lineHeight: 1.5,
                    }}
                  />
                </div>

                {/* BLOCO 4: CONTEÚDO COMPLETO EM MARKDOWN */}
                <div style={{ marginBottom: 28 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                    <label style={{ fontSize: 13, fontWeight: 700, color: "#334155" }}>
                      4. Conteúdo Científico do Capítulo (Markdown Completo)
                    </label>
                    <span style={{ fontSize: 12, color: "#64748b" }}>
                      Suporta títulos ##, listas -, tabelas, imagens e citações
                    </span>
                  </div>
                  <textarea
                    name="conteudo_pt"
                    value={conteudoPt}
                    onChange={(e) => setConteudoPt(e.target.value)}
                    rows={12}
                    placeholder="## 1. Introdução&#10;Texto explicativo...&#10;&#10;## 2. Técnica Cirúrgica Passo a Passo&#10;1. Incisão...&#10;2. Exposição..."
                    style={{
                      width: "100%",
                      padding: "14px",
                      borderRadius: 8,
                      border: "1px solid #cbd5e1",
                      fontSize: 14,
                      fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                      lineHeight: 1.6,
                      background: "#fafbfd",
                    }}
                  />
                </div>

                {/* BLOCO 5: REFERÊNCIAS BIBLIOGRÁFICAS */}
                <div style={{ marginBottom: 32 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                    5. Referências Bibliográficas (Estilo Vancouver / ABNT)
                  </label>
                  <textarea
                    name="referencias"
                    value={referencias}
                    onChange={(e) => setReferencias(e.target.value)}
                    rows={4}
                    placeholder="1. Schwab F, et al. Sagittal parameters in spinal deformity. Spine, 2012.&#10;2. Sociedade Brasileira de Coluna. Diretrizes Clínicas, 2026."
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: 8,
                      border: "1px solid #cbd5e1",
                      fontSize: 13.5,
                      fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                    }}
                  />
                </div>

                {/* BOTÃO DE SALVAMENTO */}
                <button
                  type="submit"
                  disabled={isPending}
                  style={{
                    width: "100%",
                    padding: "16px",
                    borderRadius: 12,
                    border: "none",
                    background: "linear-gradient(135deg, #001a3d 0%, #003366 100%)",
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: 800,
                    cursor: isPending ? "not-allowed" : "pointer",
                    boxShadow: "0 8px 24px rgba(0, 26, 61, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    transition: "all 0.2s ease",
                  }}
                >
                  <IconSave size={20} />
                  <span>{isPending ? "Processando publicação..." : "Publicar / Salvar Capítulo no Tratado"}</span>
                </button>
              </form>
            </section>

            {/* ================= TABELA DE CAPÍTULOS ================= */}
            <section
              style={{
                background: "#fff",
                borderRadius: 18,
                padding: "32px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 10px 30px rgba(0, 30, 80, 0.04)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 24,
                  flexWrap: "wrap",
                  gap: 16,
                }}
              >
                <div>
                  <h3 style={{ fontSize: 20, fontWeight: 900, color: "#001a3d", margin: "0 0 4px" }}>
                    Catálogo Geral da Obra ({displayedChapters.length} de {chapters.length} Capítulos)
                  </h3>
                  <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>
                    Navegue por seções, busque títulos ou edite o conteúdo de qualquer capítulo em tempo real.
                  </p>
                </div>

                {/* Filtros e Busca */}
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ position: "absolute", left: 12, color: "#94a3b8" }}>
                      <IconSearch size={16} />
                    </div>
                    <input
                      type="text"
                      placeholder="Buscar por título ou autor..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      style={{
                        padding: "9px 14px 9px 36px",
                        borderRadius: 8,
                        border: "1px solid #cbd5e1",
                        fontSize: 13.5,
                        width: 260,
                      }}
                    />
                  </div>

                  <select
                    value={filterSecao}
                    onChange={(e) => setFilterSecao(e.target.value)}
                    style={{
                      padding: "9px 14px",
                      borderRadius: 8,
                      border: "1px solid #cbd5e1",
                      fontSize: 13.5,
                      background: "#fff",
                      color: "#0f172a",
                      fontWeight: 600,
                    }}
                  >
                    <option value="all">Todas as 10 Seções</option>
                    {SECOES.map((s) => (
                      <option key={s.id} value={s.id.toString()}>
                        Seção {s.id}: {s.titulo_pt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Tabela */}
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: 14 }}>
                  <thead>
                    <tr style={{ background: "#f8fafc", borderBottom: "2px solid #e2e8f0", color: "#475569" }}>
                      <th style={{ padding: "12px 14px", width: 60 }}>#</th>
                      <th style={{ padding: "12px 14px" }}>Título do Capítulo</th>
                      <th style={{ padding: "12px 14px", width: 220 }}>Seção</th>
                      <th style={{ padding: "12px 14px", width: 180 }}>Autores</th>
                      <th style={{ padding: "12px 14px", width: 110 }}>Status</th>
                      <th style={{ padding: "12px 14px", width: 160, textAlign: "right" }}>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loadingList ? (
                      <tr>
                        <td colSpan={6} style={{ padding: 40, textAlign: "center", color: "#64748b" }}>
                          Carregando catálogo de capítulos...
                        </td>
                      </tr>
                    ) : displayedChapters.length === 0 ? (
                      <tr>
                        <td colSpan={6} style={{ padding: 40, textAlign: "center", color: "#64748b" }}>
                          Nenhum capítulo encontrado para o filtro selecionado.
                        </td>
                      </tr>
                    ) : (
                      displayedChapters.map((c) => {
                        const sec = SECOES.find((s) => s.id === c.secao_id);
                        return (
                          <tr
                            key={c.numero}
                            style={{ borderBottom: "1px solid #f1f5f9", transition: "background 0.15s ease" }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = "#f8fafc")}
                            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                          >
                            <td style={{ padding: "12px 14px", fontWeight: 900, color: "#f52238" }}>
                              {c.numero}
                            </td>
                            <td style={{ padding: "12px 14px" }}>
                              <strong style={{ color: "#001a3d" }}>{c.titulo_pt}</strong>
                              {c.titulo_en && (
                                <div style={{ fontSize: 12, color: "#64748b", fontStyle: "italic" }}>
                                  EN: {c.titulo_en}
                                </div>
                              )}
                            </td>
                            <td style={{ padding: "12px 14px", color: "#334155", fontSize: 13 }}>
                              <span
                                style={{
                                  display: "inline-block",
                                  padding: "2px 8px",
                                  borderRadius: 6,
                                  fontSize: 11.5,
                                  fontWeight: 700,
                                  background: sec?.colorClass === "red-row" ? "#fee2e2" : "#e0f2fe",
                                  color: sec?.colorClass === "red-row" ? "#991b1b" : "#0369a1",
                                }}
                              >
                                S{c.secao_id} • {sec?.titulo_pt || `Seção ${c.secao_id}`}
                              </span>
                            </td>
                            <td style={{ padding: "12px 14px", color: "#64748b", fontSize: 13 }}>
                              {c.autores || "Corpo Editorial SBC"}
                            </td>
                            <td style={{ padding: "12px 14px" }}>
                              <span
                                style={{
                                  padding: "3px 10px",
                                  borderRadius: 12,
                                  fontSize: 11.5,
                                  fontWeight: 700,
                                  background: c.status === "rascunho" ? "#fef3c7" : "#dcfce7",
                                  color: c.status === "rascunho" ? "#92400e" : "#15803d",
                                }}
                              >
                                {c.status === "rascunho" ? "Rascunho" : "Publicado"}
                              </span>
                            </td>
                            <td style={{ padding: "12px 14px", textAlign: "right" }}>
                              <div style={{ display: "flex", justifyContent: "flex-end", gap: 6 }}>
                                <button
                                  type="button"
                                  onClick={() => handleEditChapter(c)}
                                  title="Editar Capítulo"
                                  style={{
                                    padding: "6px 10px",
                                    borderRadius: 6,
                                    border: "1px solid #cbd5e1",
                                    background: "#fff",
                                    color: "#001a3d",
                                    fontSize: 12,
                                    fontWeight: 700,
                                    cursor: "pointer",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 4,
                                  }}
                                >
                                  <IconEdit size={13} />
                                  <span>Editar</span>
                                </button>
                                <Link
                                  href={`/pt/capitulo/${c.numero}`}
                                  target="_blank"
                                  title="Abrir no Leitor"
                                  style={{
                                    padding: "6px 10px",
                                    borderRadius: 6,
                                    border: "1px solid #93c5fd",
                                    background: "#eff6ff",
                                    color: "#1d4ed8",
                                    fontSize: 12,
                                    fontWeight: 700,
                                    textDecoration: "none",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 4,
                                  }}
                                >
                                  <IconEye size={13} />
                                  <span>Ver</span>
                                </Link>
                                <button
                                  type="button"
                                  onClick={() => handleDelete(c.numero, c.titulo_pt)}
                                  title="Excluir Capítulo"
                                  style={{
                                    padding: "6px 8px",
                                    borderRadius: 6,
                                    border: "1px solid #fecaca",
                                    background: "#fff1f2",
                                    color: "#b91c1c",
                                    fontSize: 12,
                                    cursor: "pointer",
                                  }}
                                >
                                  <IconTrash size={13} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}

        {/* ================= ABA 2: GESTÃO DO CORPO EDITORIAL & AUTORES ================= */}
        {activeTab === "autores" && (
          <div style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 32, alignItems: "start" }}>
            {/* Form de Cadastro / Edição de Autor */}
            <section
              style={{
                background: "#fff",
                borderRadius: 18,
                padding: "36px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 10px 30px rgba(0, 30, 80, 0.04)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 24,
                  borderBottom: "1px solid #f1f5f9",
                  paddingBottom: 18,
                }}
              >
                <div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "4px 10px",
                      borderRadius: 6,
                      background: "rgba(245, 34, 56, 0.1)",
                      color: "#f52238",
                      fontSize: 12,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: 6,
                    }}
                  >
                    <IconUsers size={14} />
                    <span>Gestão do Corpo Editorial</span>
                  </div>
                  <h2 style={{ fontSize: 24, fontWeight: 900, color: "#001a3d", margin: 0 }}>
                    {authorId ? `Editando: ${authorNome}` : "Cadastrar Novo Autor / Editor"}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={handleClearAuthorForm}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "8px 14px",
                    borderRadius: 8,
                    border: "1px solid #e2e8f0",
                    background: "#fff",
                    color: "#64748b",
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  <IconPlus size={14} />
                  <span>Novo Autor</span>
                </button>
              </div>

              <form onSubmit={handleAuthorSubmit}>
                <input type="hidden" name="id" value={authorId} />

                <div style={{ display: "grid", gridTemplateColumns: "1fr 120px", gap: 16, marginBottom: 18 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                      Nome Completo do Médico / Autor *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={authorNome}
                      onChange={(e) => setAuthorNome(e.target.value)}
                      placeholder="Ex: Dr. Edson Pudles"
                      required
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        borderRadius: 8,
                        border: "1px solid #cbd5e1",
                        fontSize: 14,
                        fontWeight: 600,
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                      Ordem #
                    </label>
                    <input
                      type="number"
                      name="ordem"
                      value={authorOrdem}
                      onChange={(e) => setAuthorOrdem(e.target.value)}
                      min={1}
                      max={99}
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        borderRadius: 8,
                        border: "1px solid #cbd5e1",
                        fontSize: 14,
                        textAlign: "center",
                        fontWeight: 800,
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 18 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                      Cargo / Título Oficial *
                    </label>
                    <input
                      type="text"
                      name="cargo"
                      value={authorCargo}
                      onChange={(e) => setAuthorCargo(e.target.value)}
                      placeholder="Ex: Editor-Chefe / SBC"
                      required
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        borderRadius: 8,
                        border: "1px solid #cbd5e1",
                        fontSize: 14,
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                      Instituição / Universidade
                    </label>
                    <input
                      type="text"
                      name="instituicao"
                      value={authorInstituicao}
                      onChange={(e) => setAuthorInstituicao(e.target.value)}
                      placeholder="Ex: Sociedade Brasileira de Coluna"
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        borderRadius: 8,
                        border: "1px solid #cbd5e1",
                        fontSize: 14,
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: 18 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                    Destaque / Principal Conquista Editorial
                  </label>
                  <input
                    type="text"
                    name="destaque"
                    value={authorDestaque}
                    onChange={(e) => setAuthorDestaque(e.target.value)}
                    placeholder="Ex: Coordenação Editorial de 109 Capítulos"
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: 8,
                      border: "1px solid #cbd5e1",
                      fontSize: 14,
                    }}
                  />
                </div>

                {/* Foto Picker com Prévia */}
                <div style={{ marginBottom: 18, background: "#f8fafc", padding: "16px", borderRadius: 12, border: "1px solid #e2e8f0" }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 8 }}>
                    Foto Oficial do Autor *
                  </label>
                  <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
                    <img
                      src={authorFotoUrl}
                      alt="Prévia"
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "3px solid #fff",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        background: "#021a3a",
                      }}
                    />
                    <input
                      type="text"
                      name="foto_url"
                      value={authorFotoUrl}
                      onChange={(e) => setAuthorFotoUrl(e.target.value)}
                      placeholder="/assets/edson-pudles.png"
                      required
                      style={{
                        flex: 1,
                        padding: "9px 12px",
                        borderRadius: 8,
                        border: "1px solid #cbd5e1",
                        fontSize: 13.5,
                        background: "#fff",
                      }}
                    />
                  </div>

                  {/* Quick Photo Buttons */}
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                    <span style={{ fontSize: 12, color: "#64748b", fontWeight: 600 }}>
                      Fotos Oficiais:
                    </span>
                    <button
                      type="button"
                      onClick={() => setAuthorFotoUrl("/assets/edson-pudles.png")}
                      style={{
                        fontSize: 12,
                        padding: "5px 12px",
                        borderRadius: 6,
                        border: authorFotoUrl === "/assets/edson-pudles.png" ? "2px solid #001a3d" : "1px solid #cbd5e1",
                        background: authorFotoUrl === "/assets/edson-pudles.png" ? "#001a3d" : "#fff",
                        color: authorFotoUrl === "/assets/edson-pudles.png" ? "#fff" : "#334155",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      Dr. Edson Pudles
                    </button>
                    <button
                      type="button"
                      onClick={() => setAuthorFotoUrl("/assets/helton-defino.png")}
                      style={{
                        fontSize: 12,
                        padding: "5px 12px",
                        borderRadius: 6,
                        border: authorFotoUrl === "/assets/helton-defino.png" ? "2px solid #001a3d" : "1px solid #cbd5e1",
                        background: authorFotoUrl === "/assets/helton-defino.png" ? "#001a3d" : "#fff",
                        color: authorFotoUrl === "/assets/helton-defino.png" ? "#fff" : "#334155",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      Dr. Helton Defino
                    </button>
                    <button
                      type="button"
                      onClick={() => setAuthorFotoUrl("/assets/marcelo-risso.png")}
                      style={{
                        fontSize: 12,
                        padding: "5px 12px",
                        borderRadius: 6,
                        border: authorFotoUrl === "/assets/marcelo-risso.png" ? "2px solid #001a3d" : "1px solid #cbd5e1",
                        background: authorFotoUrl === "/assets/marcelo-risso.png" ? "#001a3d" : "#fff",
                        color: authorFotoUrl === "/assets/marcelo-risso.png" ? "#fff" : "#334155",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      Dr. Marcelo Risso
                    </button>
                  </div>
                </div>

                <div style={{ marginBottom: 18 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                    Mini-Currículo e Trajetória Acadêmica *
                  </label>
                  <textarea
                    name="bio_pt"
                    value={authorBioPt}
                    onChange={(e) => setAuthorBioPt(e.target.value)}
                    rows={4}
                    placeholder="Descreva a formação médica, títulos acadêmicos e contribuição para a cirurgia da coluna..."
                    required
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: 8,
                      border: "1px solid #cbd5e1",
                      fontSize: 14,
                      lineHeight: 1.5,
                    }}
                  />
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                    Especialidades &amp; Áreas de Foco (separadas por vírgula)
                  </label>
                  <input
                    type="text"
                    name="especialidades"
                    value={authorEspecialidades}
                    onChange={(e) => setAuthorEspecialidades(e.target.value)}
                    placeholder="Ex: Deformidades Complexas, Liderança Editorial, Diretrizes SBC"
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: 8,
                      border: "1px solid #cbd5e1",
                      fontSize: 14,
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  style={{
                    width: "100%",
                    padding: "15px",
                    borderRadius: 10,
                    border: "none",
                    background: "linear-gradient(135deg, #f52238 0%, #b80f21 100%)",
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: 800,
                    cursor: isPending ? "not-allowed" : "pointer",
                    boxShadow: "0 8px 24px rgba(245, 34, 56, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    transition: "all 0.2s ease",
                  }}
                >
                  <IconSave size={18} />
                  <span>{isPending ? "Salvando informações..." : "Salvar Informações do Autor"}</span>
                </button>
              </form>
            </section>

            {/* Listagem dos Autores Cadastrados */}
            <section
              style={{
                background: "#fff",
                borderRadius: 18,
                padding: "32px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 10px 30px rgba(0, 30, 80, 0.04)",
              }}
            >
              <div style={{ marginBottom: 20, borderBottom: "1px solid #f1f5f9", paddingBottom: 16 }}>
                <h3 style={{ fontSize: 20, fontWeight: 900, color: "#001a3d", margin: "0 0 4px" }}>
                  👥 Corpo Editorial Cadastrado ({authors.length})
                </h3>
                <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>
                  Estes são os autores e editores exibidos na página inicial e nos capítulos do Tratado.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {authors.map((author, idx) => (
                  <div
                    key={author.id || idx}
                    style={{
                      display: "flex",
                      gap: 16,
                      padding: 18,
                      borderRadius: 14,
                      border: authorId === author.id ? "2px solid #f52238" : "1px solid #e2e8f0",
                      background: authorId === author.id ? "#fff5f6" : "#f8fafc",
                      alignItems: "center",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <img
                      src={author.foto_url}
                      alt={author.nome}
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "3px solid #fff",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        background: "#021a3a",
                      }}
                    />

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 4 }}>
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 800,
                            padding: "3px 8px",
                            borderRadius: 4,
                            background: "#f52238",
                            color: "#fff",
                            textTransform: "uppercase",
                          }}
                        >
                          {author.cargo}
                        </span>
                        <span style={{ fontSize: 11.5, color: "#64748b", fontWeight: 700 }}>
                          Ordem #{author.ordem}
                        </span>
                      </div>

                      <h4 style={{ fontSize: 16.5, fontWeight: 800, margin: "2px 0", color: "#001a3d" }}>
                        {author.nome}
                      </h4>

                      <p style={{ fontSize: 12.5, color: "#64748b", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {author.instituicao}
                      </p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <button
                        type="button"
                        onClick={() => handleEditAuthor(author)}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 4,
                          padding: "6px 12px",
                          borderRadius: 6,
                          border: "1px solid #cbd5e1",
                          background: "#fff",
                          color: "#001a3d",
                          fontSize: 12,
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                      >
                        <IconEdit size={13} />
                        <span>Editar</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteAuthor(author.id || "", author.nome)}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 4,
                          padding: "5px 8px",
                          borderRadius: 6,
                          border: "1px solid #fecaca",
                          background: "#fff1f2",
                          color: "#b91c1c",
                          fontSize: 11,
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                      >
                        <IconTrash size={12} />
                        <span>Excluir</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 24, textAlign: "center" }}>
                <Link
                  href="/pt/home-new#autores"
                  target="_blank"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#0284c7",
                    textDecoration: "none",
                  }}
                >
                  <span>Visualizar Seção de Autores no Site</span>
                  <IconExternal size={13} />
                </Link>
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}
