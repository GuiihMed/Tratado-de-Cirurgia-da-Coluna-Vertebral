"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/lib/types";

interface MobileBottomNavProps {
  locale: Locale;
}

export default function MobileBottomNav({ locale }: MobileBottomNavProps) {
  const pathname = usePathname();

  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;
  const isCapitulos = pathname?.includes("/indice") || pathname?.includes("/capitulo");
  const isAutores = pathname?.includes("/autor") || pathname?.includes("/autores");
  const isDebate = pathname?.includes("/video");

  const labels = {
    pt: {
      home: "Início",
      chapters: "Capítulos",
      authors: "Autores",
      debate: "Debate",
      buy: "Onde Comprar",
    },
    es: {
      home: "Inicio",
      chapters: "Capítulos",
      authors: "Autores",
      debate: "Debate",
      buy: "Dónde Comprar",
    },
    en: {
      home: "Home",
      chapters: "Chapters",
      authors: "Authors",
      debate: "Debate",
      buy: "Buy Book",
    },
  }[locale] || {
    home: "Início",
    chapters: "Capítulos",
    authors: "Autores",
    debate: "Debate",
    buy: "Onde Comprar",
  };

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "rgba(0, 16, 38, 0.94)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.12)",
        boxShadow: "0 -10px 30px rgba(0, 0, 0, 0.5)",
        paddingBottom: "max(6px, env(safe-area-inset-bottom))",
      }}
      aria-label="Navegação inferior mobile"
    >
      <div className="grid grid-cols-5 items-center justify-around px-1 py-1.5 max-w-lg mx-auto">
        {/* 1. Início */}
        <Link
          href={`/${locale}`}
          className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all duration-200 ${
            isHome ? "text-[#f52238] font-bold" : "text-slate-300 hover:text-white"
          }`}
          style={{ textDecoration: "none" }}
        >
          <div
            className={`p-1 rounded-lg transition-transform duration-200 ${
              isHome ? "bg-red-600/15 scale-110" : ""
            }`}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill={isHome ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth={isHome ? "1" : "2"}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <span className="text-[10.5px] tracking-tight leading-tight mt-0.5">
            {labels.home}
          </span>
        </Link>

        {/* 2. Capítulos */}
        <Link
          href={`/${locale}/indice`}
          className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all duration-200 ${
            isCapitulos ? "text-[#f52238] font-bold" : "text-slate-300 hover:text-white"
          }`}
          style={{ textDecoration: "none" }}
        >
          <div
            className={`p-1 rounded-lg transition-transform duration-200 ${
              isCapitulos ? "bg-red-600/15 scale-110" : ""
            }`}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
              <path d="M6 6h10" />
              <path d="M6 10h10" />
            </svg>
          </div>
          <span className="text-[10.5px] tracking-tight leading-tight mt-0.5">
            {labels.chapters}
          </span>
        </Link>

        {/* 3. Autores */}
        <Link
          href={`/${locale}/autores`}
          className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all duration-200 ${
            isAutores ? "text-[#f52238] font-bold" : "text-slate-300 hover:text-white"
          }`}
          style={{ textDecoration: "none" }}
        >
          <div
            className={`p-1 rounded-lg transition-transform duration-200 ${
              isAutores ? "bg-red-600/15 scale-110" : ""
            }`}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <span className="text-[10.5px] tracking-tight leading-tight mt-0.5">
            {labels.authors}
          </span>
        </Link>

        {/* 4. Debate */}
        <Link
          href={`/${locale}/video`}
          className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all duration-200 ${
            isDebate ? "text-[#f52238] font-bold" : "text-slate-300 hover:text-white"
          }`}
          style={{ textDecoration: "none" }}
        >
          <div
            className={`p-1 rounded-lg transition-transform duration-200 ${
              isDebate ? "bg-red-600/15 scale-110" : ""
            }`}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m22 8-6 4 6 4V8Z" />
              <rect width="14" height="12" x="2" y="6" rx="2" />
            </svg>
          </div>
          <span className="text-[10.5px] tracking-tight leading-tight mt-0.5">
            {labels.debate}
          </span>
        </Link>

        {/* 5. Onde Comprar */}
        <a
          href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-slate-300 hover:text-white transition-all duration-200 active:scale-95"
          style={{ textDecoration: "none" }}
        >
          <div className="p-1 rounded-lg">
            <svg
              className="w-5 h-5 text-amber-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </div>
          <span className="text-[10.5px] tracking-tight leading-tight mt-0.5 font-semibold text-slate-200">
            {labels.buy}
          </span>
        </a>
      </div>
    </nav>
  );
}
