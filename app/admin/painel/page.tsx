"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase, isSupabaseConfigured } from "@/lib/supabase/client";
import { Capitulo } from "@/lib/types";
import { SECOES, INITIAL_CHAPTERS } from "@/lib/data/sections-and-chapters";
import { cadastrarCapituloAction, excluirCapituloAction } from "../actions";

export default function AdminPainelPage() {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  // Form states
  const [secaoId, setSecaoId] = useState("1");
  const [numero, setNumero] = useState("");
  const [tituloPt, setTituloPt] = useState("");
  const [tituloEn, setTituloEn] = useState("");
  const [tituloEs, setTituloEs] = useState("");

  const [feedback, setFeedback] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [isPending, startTransition] = useTransition();

  // Chapters listing
  const [chapters, setChapters] = useState<Capitulo[]>([]);
  const [filterSecao, setFilterSecao] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loadingList, setLoadingList] = useState(false);

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

  useEffect(() => {
    if (!checkingAuth) {
      fetchChapters();
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

  // Handle Submit Form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeedback({ type: null, message: "" });

    const formData = new FormData();
    formData.append("secao_id", secaoId);
    formData.append("numero", numero);
    formData.append("titulo_pt", tituloPt);
    formData.append("titulo_en", tituloEn);
    formData.append("titulo_es", tituloEs);

    startTransition(async () => {
      const result = await cadastrarCapituloAction(null, formData);
      if (result.success) {
        setFeedback({ type: "success", message: result.message });
        // Reset form
        setNumero("");
        setTituloPt("");
        setTituloEn("");
        setTituloEs("");
        fetchChapters();
      } else {
        setFeedback({ type: "error", message: result.message });
      }
    });
  };

  // Handle Delete Chapter
  const handleDelete = async (num: number) => {
    if (!confirm(`Deseja realmente excluir o Capítulo ${num}?`)) return;

    startTransition(async () => {
      const result = await excluirCapituloAction(num);
      if (result.success) {
        setFeedback({ type: "success", message: `Capítulo ${num} excluído com sucesso.` });
        setChapters((prev) => prev.filter((c) => c.numero !== num));
      } else {
        setFeedback({ type: "error", message: result.message });
      }
    });
  };

  if (checkingAuth) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#f4f7fb",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <span className="spinner spinner-dark" style={{ width: 36, height: 36 }} />
          <p style={{ marginTop: 16, color: "#475569", fontWeight: 600 }}>
            Verificando credenciais de acesso...
          </p>
        </div>
      </div>
    );
  }

  const filteredChapters = chapters.filter((c) => {
    const matchesSecao =
      filterSecao === "all" || String(c.secao_id) === filterSecao;
    const matchesQuery =
      !searchQuery ||
      c.titulo_pt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      String(c.numero).includes(searchQuery);
    return matchesSecao && matchesQuery;
  });

  return (
    <div className="admin-body">
      <header className="admin-nav">
        <div className="shell admin-nav-inner">
          <div className="admin-brand">
            <span className="admin-badge">Admin</span>
            <span>Tratado de Cirurgia da Coluna Vertebral</span>
          </div>
          <div className="admin-user-bar">
            <span>👤 {userEmail}</span>
            <Link
              href="/pt"
              target="_blank"
              style={{ color: "#d1e2f5", textDecoration: "none" }}
            >
              Visualizar Site ↗
            </Link>
            <button
              onClick={handleLogout}
              className="admin-action-btn delete"
              style={{ padding: "6px 14px", fontWeight: 700 }}
              id="btn-logout"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="admin-container">
        {/* CADASTRO DE CAPÍTULO */}
        <section className="admin-card">
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
            <span
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "#001832",
                color: "#fff",
                display: "grid",
                placeItems: "center",
              }}
            >
              <svg style={{ width: 24, height: 24 }}>
                <use href="#i-tools"></use>
              </svg>
            </span>
            <div>
              <h1 style={{ fontSize: 24, margin: 0, color: "#001832" }}>
                Cadastro &amp; Atualização de Capítulos
              </h1>
              <p style={{ margin: "4px 0 0", color: "#596f88", fontSize: 14 }}>
                Insira ou modifique os dados do capítulo diretamente no Supabase.
              </p>
            </div>
          </div>

          {feedback.message && (
            <div
              className={`admin-alert ${
                feedback.type === "success"
                  ? "admin-alert-success"
                  : "admin-alert-error"
              }`}
              role="alert"
            >
              <svg style={{ width: 20, height: 20, flexShrink: 0 }}>
                <use href={feedback.type === "success" ? "#i-check" : "#i-alert"}></use>
              </svg>
              <span>{feedback.message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-grid-2">
              <div className="form-group">
                <label htmlFor="secao_id">Tag / Seção Temática *</label>
                <select
                  id="secao_id"
                  className="form-control"
                  value={secaoId}
                  onChange={(e) => setSecaoId(e.target.value)}
                  required
                >
                  {SECOES.map((sec) => (
                    <option key={sec.id} value={sec.id}>
                      Seção {sec.numero}: {sec.titulo_pt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="numero">Número do Capítulo (1 a 109) *</label>
                <input
                  id="numero"
                  type="number"
                  min="1"
                  max="200"
                  className="form-control"
                  placeholder="Ex: 8"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-grid-3">
              <div className="form-group">
                <label htmlFor="titulo_pt">Título em Português (PT) *</label>
                <input
                  id="titulo_pt"
                  type="text"
                  className="form-control"
                  placeholder="Título oficial do capítulo"
                  value={tituloPt}
                  onChange={(e) => setTituloPt(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="titulo_en">Título em Inglês (EN)</label>
                <input
                  id="titulo_en"
                  type="text"
                  className="form-control"
                  placeholder="Title in English"
                  value={tituloEn}
                  onChange={(e) => setTituloEn(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="titulo_es">Título em Espanhol (ES)</label>
                <input
                  id="titulo_es"
                  type="text"
                  className="form-control"
                  placeholder="Título en Español"
                  value={tituloEs}
                  onChange={(e) => setTituloEs(e.target.value)}
                />
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isPending}
                id="btn-salvar-capitulo"
              >
                {isPending ? (
                  <>
                    <span className="spinner" />
                    <span>Salvando no banco...</span>
                  </>
                ) : (
                  <>
                    <span>Salvar Capítulo no Banco</span>
                    <svg>
                      <use href="#i-check"></use>
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        </section>

        {/* LISTAGEM DE CAPÍTULOS */}
        <section className="admin-card">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 20,
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div>
              <h2 style={{ fontSize: 20, margin: 0, color: "#001832" }}>
                Capítulos Cadastrados ({filteredChapters.length})
              </h2>
              <p style={{ margin: "4px 0 0", color: "#596f88", fontSize: 13 }}>
                Lista sincronizada com a base de dados do Tratado.
              </p>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <select
                className="form-control"
                style={{ width: 220 }}
                value={filterSecao}
                onChange={(e) => setFilterSecao(e.target.value)}
              >
                <option value="all">Todas as Seções</option>
                {SECOES.map((s) => (
                  <option key={s.id} value={String(s.id)}>
                    Seção {s.numero} ({s.titulo_pt})
                  </option>
                ))}
              </select>

              <input
                type="text"
                className="form-control"
                placeholder="Buscar por título ou número..."
                style={{ width: 260 }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {loadingList ? (
            <div style={{ padding: 40, textAlign: "center", color: "#64748b" }}>
              <span className="spinner spinner-dark" /> Carregando lista...
            </div>
          ) : (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th style={{ width: 80 }}>Cap.</th>
                    <th style={{ width: 140 }}>Seção</th>
                    <th>Título (Português)</th>
                    <th>Título (Inglês)</th>
                    <th>Título (Espanhol)</th>
                    <th style={{ width: 100, textAlign: "center" }}>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredChapters.map((cap) => (
                    <tr key={cap.numero}>
                      <td>
                        <strong>{cap.numero}</strong>
                      </td>
                      <td>
                        <span
                          style={{
                            background: "#e8f1fb",
                            color: "#0a4c87",
                            padding: "3px 8px",
                            borderRadius: 4,
                            fontSize: 12,
                            fontWeight: 650,
                          }}
                        >
                          Seção {cap.secao_id}
                        </span>
                      </td>
                      <td>{cap.titulo_pt}</td>
                      <td style={{ color: cap.titulo_en ? "#314861" : "#94a3b8" }}>
                        {cap.titulo_en || "—"}
                      </td>
                      <td style={{ color: cap.titulo_es ? "#314861" : "#94a3b8" }}>
                        {cap.titulo_es || "—"}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <button
                          onClick={() => handleDelete(cap.numero)}
                          className="admin-action-btn delete"
                          disabled={isPending}
                          title="Excluir capítulo"
                        >
                          Excluir
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
