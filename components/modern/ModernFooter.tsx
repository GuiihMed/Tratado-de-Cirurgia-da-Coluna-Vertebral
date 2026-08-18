"use client";

import Link from "next/link";
import { Locale } from "@/lib/types";

interface ModernFooterProps {
  locale: Locale;
}

export default function ModernFooter({ locale }: ModernFooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #04142b 0%, #010a17 100%)",
        color: "#fff",
        paddingTop: "70px",
        paddingBottom: "40px",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        position: "relative",
      }}
    >
      <div className="shell">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1.2fr",
            gap: "50px",
            marginBottom: "50px",
          }}
        >
          {/* Brand & Mission */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <span
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: "#f52238",
                  display: "grid",
                  placeItems: "center",
                  boxShadow: "0 4px 12px rgba(245, 34, 56, 0.4)",
                }}
              >
                <svg style={{ width: 20, height: 20 }}>
                  <use href="#i-spine"></use>
                </svg>
              </span>
              <strong style={{ fontSize: 20, letterSpacing: "-0.02em" }}>
                Tratado de Cirurgia da Coluna Vertebral
              </strong>
            </div>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#9db8d7", maxWidth: 420 }}>
              A principal referência científica e cirúrgica da coluna vertebral na América Latina.
              Reunindo os maiores especialistas da SBC em um tratado completo de 10 seções e 109 capítulos.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 28, marginTop: 24 }}>
              <img
                src="/assets/sbc-logo-white.svg"
                alt="Sociedade Brasileira de Coluna"
                style={{ height: 48, width: "auto", objectFit: "contain" }}
              />
              <div style={{ borderLeft: "1px solid rgba(255, 255, 255, 0.15)", height: 36 }} />
              <div style={{ fontSize: 22, fontWeight: 700, color: "#e2edfa" }}>Di Livros</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 18, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Navegação
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link href={`/${locale}/home-new`} style={{ color: "#a5c2e2", textDecoration: "none", fontSize: 14 }}>
                Visão Geral da Obra
              </Link>
              <Link href={`/${locale}/indice-new`} style={{ color: "#a5c2e2", textDecoration: "none", fontSize: 14 }}>
                Índice Interativo (109 Cap.)
              </Link>
              <Link href={`/${locale}/home-new#sobre`} style={{ color: "#a5c2e2", textDecoration: "none", fontSize: 14 }}>
                Sobre o Tratado
              </Link>
              <Link href={`/${locale}/home-new#autores`} style={{ color: "#a5c2e2", textDecoration: "none", fontSize: 14 }}>
                Autores e Colaboradores
              </Link>
            </div>
          </div>

          {/* Languages & Resources */}
          <div>
            <h4 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 18, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Edições &amp; Idiomas
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link href="/pt/home-new" style={{ color: "#a5c2e2", textDecoration: "none", fontSize: 14 }}>
                🇧🇷 Português (Brasil)
              </Link>
              <Link href="/en/home-new" style={{ color: "#a5c2e2", textDecoration: "none", fontSize: 14 }}>
                🇺🇸 English (Abstracts)
              </Link>
              <Link href="/es/home-new" style={{ color: "#a5c2e2", textDecoration: "none", fontSize: 14 }}>
                🇪🇸 Español (Resúmenes)
              </Link>
              <Link href="/admin/login" style={{ color: "#ff7380", textDecoration: "none", fontSize: 14, fontWeight: 600 }}>
                🔐 Painel de Autores
              </Link>
            </div>
          </div>

          {/* Certified Edition Box */}
          <div
            style={{
              padding: 24,
              borderRadius: 16,
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <span style={{ color: "#f52238" }}>
                <svg style={{ width: 22, height: 22 }}>
                  <use href="#i-award"></use>
                </svg>
              </span>
              <strong style={{ fontSize: 15 }}>Edição Oficial Impressa</strong>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.5, color: "#8faecf", margin: "0 0 16px" }}>
              A obra completa existe exclusivamente no formato impresso para garantir integridade acadêmica e qualidade editorial.
            </p>
            <button
              onClick={scrollToTop}
              style={{
                width: "100%",
                padding: "9px 14px",
                borderRadius: 8,
                border: "1px solid rgba(255, 255, 255, 0.2)",
                background: "rgba(255, 255, 255, 0.08)",
                color: "#fff",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
            >
              Voltar ao topo ↑
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: 24,
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 13,
            color: "#7e9bbd",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <span>© 2026 Tratado de Cirurgia da Coluna Vertebral • Sociedade Brasileira de Coluna (SBC).</span>
          <div style={{ display: "flex", gap: 20 }}>
            <span>Termos de Uso</span>
            <span>Privacidade</span>
            <span>Suporte Editorial</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
