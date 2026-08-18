"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase, isSupabaseConfigured } from "@/lib/supabase/client";

function IconLock({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function IconMail({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconArrowRight({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

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
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #001026 0%, #001f4d 50%, #032b69 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow Effects */}
      <div
        style={{
          position: "absolute",
          top: "-15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245, 34, 56, 0.18) 0%, rgba(0, 0, 0, 0) 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Top Bar */}
      <header
        style={{
          padding: "20px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <Link href="/pt" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <img
            src="/assets/sbc-logo-white.svg"
            alt="Sociedade Brasileira de Coluna"
            style={{ height: 40, width: "auto" }}
          />
        </Link>
        <Link
          href="/pt"
          style={{
            color: "#93c5fd",
            textDecoration: "none",
            fontSize: 13.5,
            fontWeight: 600,
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "6px 14px",
            borderRadius: 8,
            background: "rgba(255, 255, 255, 0.06)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          ← Voltar ao site público
        </Link>
      </header>

      {/* Login Card */}
      <main style={{ display: "grid", placeItems: "center", padding: "20px", zIndex: 10 }}>
        <div
          style={{
            width: "100%",
            maxWidth: 440,
            background: "#ffffff",
            color: "#0f172a",
            borderRadius: 20,
            padding: "40px",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.4)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <img
              src="/assets/sbc-logo.svg"
              alt="Sociedade Brasileira de Coluna"
              style={{ height: 60, width: "auto", margin: "0 auto 16px", objectFit: "contain" }}
            />
            <h1 style={{ fontSize: 22, fontWeight: 900, color: "#001a3d", margin: "0 0 6px", letterSpacing: "-0.02em" }}>
              Portal Editorial SBC
            </h1>
            <p style={{ fontSize: 13.5, color: "#64748b", margin: 0 }}>
              Área de Gestão dos 109 Capítulos &amp; Autores
            </p>
          </div>

          {errorMessage && (
            <div
              style={{
                padding: "12px 16px",
                borderRadius: 10,
                background: "#fee2e2",
                color: "#991b1b",
                border: "1px solid #fecaca",
                fontSize: 13.5,
                fontWeight: 600,
                marginBottom: 20,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span>⚠️ {errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 18 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                E-mail institucional / autor
              </label>
              <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                <div style={{ position: "absolute", left: 12, color: "#94a3b8" }}>
                  <IconMail size={16} />
                </div>
                <input
                  type="email"
                  placeholder="autor@sbc.med.br"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  style={{
                    width: "100%",
                    padding: "12px 14px 12px 38px",
                    borderRadius: 10,
                    border: "1px solid #cbd5e1",
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: 24 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                Senha de acesso
              </label>
              <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                <div style={{ position: "absolute", left: 12, color: "#94a3b8" }}>
                  <IconLock size={16} />
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  style={{
                    width: "100%",
                    padding: "12px 14px 12px 38px",
                    borderRadius: 10,
                    border: "1px solid #cbd5e1",
                    fontSize: 14,
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: 10,
                border: "none",
                background: "linear-gradient(135deg, #f52238 0%, #b80f21 100%)",
                color: "#fff",
                fontSize: 15,
                fontWeight: 800,
                cursor: loading ? "not-allowed" : "pointer",
                boxShadow: "0 8px 24px rgba(245, 34, 56, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                transition: "all 0.2s ease",
              }}
            >
              <span>{loading ? "Autenticando..." : "Entrar no Painel"}</span>
              {!loading && <IconArrowRight size={16} />}
            </button>
          </form>

          <div
            style={{
              marginTop: 24,
              paddingTop: 18,
              borderTop: "1px solid #f1f5f9",
              fontSize: 12,
              color: "#64748b",
              textAlign: "center",
            }}
          >
            Acesso restrito à Sociedade Brasileira de Coluna (SBC).
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          padding: "16px",
          textAlign: "center",
          fontSize: 12,
          color: "#94a3b8",
          zIndex: 10,
        }}
      >
        Tratado de Cirurgia da Coluna Vertebral • Todos os direitos reservados.
      </footer>
    </div>
  );
}
