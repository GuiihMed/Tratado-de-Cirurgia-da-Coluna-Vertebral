"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit?: () => void;
  }
}

interface GoogleTranslateWidgetProps {
  currentLocale: string;
}

export default function GoogleTranslateWidget({ currentLocale }: GoogleTranslateWidgetProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Only load if not already initialized
    if (document.getElementById("google-translate-script")) {
      setIsLoaded(true);
      return;
    }

    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: currentLocale,
            includedLanguages: "en,es,pt,fr,de,it,zh-CN,ja,ar,ru",
            autoDisplay: false,
            layout: window.google.translate.TranslateElement.InlineLayout?.SIMPLE || 0,
          },
          "google_translate_element"
        );
        setIsLoaded(true);
      }
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, [currentLocale]);

  return (
    <div className="google-translate-wrapper relative inline-flex items-center">
      {/* Hidden Mount Container */}
      <div id="google_translate_element" className="sr-only" />

      {/* Global Translate Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors border border-white/20"
        title="Google Translate (100+ idiomas)"
        aria-label="Google Cloud Translate"
      >
        <svg className="w-3.5 h-3.5 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        <span className="text-[11px] uppercase tracking-wider text-slate-200 hidden sm:inline">Google AI Translate</span>
      </button>

      {/* Dropdown for quick global translation */}
      {isOpen && (
        <div
          className="absolute right-0 top-full mt-2 w-48 rounded-xl bg-[#001533] border border-white/20 shadow-2xl p-2 z-50 text-left text-xs backdrop-blur-xl animate-in fade-in zoom-in-95"
          onClick={() => setIsOpen(false)}
        >
          <div className="px-2 py-1 font-bold text-slate-300 border-b border-white/10 mb-1 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Google Cloud Translate</span>
          </div>
          
          <div className="flex flex-col gap-0.5">
            <a
              href="/pt"
              className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white/10 text-white font-medium transition-colors"
            >
              <img src="/assets/flags/brasil.png" alt="PT" className="w-4 h-auto" />
              <span>Português (Oficial SBC)</span>
            </a>
            <a
              href="/en"
              className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white/10 text-white font-medium transition-colors"
            >
              <img src="/assets/flags/eua.png" alt="EN" className="w-4 h-auto" />
              <span>English (Official SBC)</span>
            </a>
            <a
              href="/es"
              className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white/10 text-white font-medium transition-colors"
            >
              <img src="/assets/flags/espanha.png" alt="ES" className="w-4 h-auto" />
              <span>Español (Oficial SBC)</span>
            </a>
          </div>

          <div className="mt-1 pt-1 border-t border-white/10 text-[10px] text-slate-400 px-2 leading-snug">
            Google Cloud Translation API v2 ativo
          </div>
        </div>
      )}
    </div>
  );
}
