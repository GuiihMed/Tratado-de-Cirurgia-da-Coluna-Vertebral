"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase, isSupabaseConfigured } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setLoading(true);

    try {
      if (!email.trim() || !password.trim()) {
        setErrorMessage("Por favor, preencha o e-mail e a senha.");
        setLoading(false);
        return;
      }

      if (isSupabaseConfigured()) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          setErrorMessage(error.message || "Credenciais inválidas. Verifique seu e-mail e senha.");
          setLoading(false);
          return;
        }
      } else {
        // Mock session in localStorage when Supabase live keys aren't configured yet
        localStorage.setItem(
          "sbc_admin_session",
          JSON.stringify({
            email,
            authenticatedAt: new Date().toISOString(),
          })
        );
      }

      router.push("/admin/painel");
    } catch (err: any) {
      setErrorMessage(err.message || "Erro inesperado ao realizar login.");
      setLoading(false);
    }
  };

  return (
    <div className="admin-body">
      <header className="admin-nav">
        <div className="shell admin-nav-inner">
          <Link href="/pt" className="admin-brand">
            <span className="admin-badge">Admin</span>
            <span>Tratado de Cirurgia da Coluna Vertebral</span>
          </Link>
          <Link href="/pt" style={{ color: "#c2d6ed", textDecoration: "none", fontSize: 14 }}>
            ← Voltar ao site público
          </Link>
        </div>
      </header>

      <main className="admin-container">
        <div className="admin-login-box">
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <span
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                background: "#001832",
                color: "#ff3047",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 16,
              }}
            >
              <svg style={{ width: 28, height: 28 }}>
                <use href="#i-shield"></use>
              </svg>
            </span>
            <h1>Acesso Restrito</h1>
            <p>Painel de Gestão dos Autores &amp; Editores</p>
          </div>

          {errorMessage && (
            <div className="admin-alert admin-alert-error" role="alert">
              <svg style={{ width: 18, height: 18, flexShrink: 0 }}>
                <use href="#i-alert"></use>
              </svg>
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">E-mail corporativo / autor</label>
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="autor@sbc.med.br"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Senha de acesso</label>
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%", marginTop: 8 }}
              disabled={loading}
              id="btn-login-submit"
            >
              {loading ? (
                <>
                  <span className="spinner" />
                  <span>Autenticando...</span>
                </>
              ) : (
                <>
                  <span>Entrar no Painel</span>
                  <svg>
                    <use href="#i-arrow"></use>
                  </svg>
                </>
              )}
            </button>
          </form>

          <div
            style={{
              marginTop: 24,
              paddingTop: 16,
              borderTop: "1px solid #eef3f8",
              fontSize: 12,
              color: "#788ea5",
              textAlign: "center",
            }}
          >
            Acesso protegido por Supabase Authentication &amp; RLS.
          </div>
        </div>
      </main>
    </div>
  );
}
