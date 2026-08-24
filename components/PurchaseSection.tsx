import { Locale } from "@/lib/types";
import { getDictionary } from "@/lib/i18n/dictionaries";

interface PurchaseSectionProps {
  locale: Locale;
  variant?: "home" | "indice";
}

export default function PurchaseSection({
  locale,
  variant = "home",
}: PurchaseSectionProps) {
  const dict = getDictionary(locale);

  if (variant === "home") {
    return (
      <section
        id="comprar"
        className="py-12 sm:py-16 lg:py-20 text-white relative overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 68% 45%, rgba(16, 120, 190, 0.38), transparent 35%), linear-gradient(100deg, #001f49 0%, #004b87 50%, #001f49 100%)",
        }}
      >
        <div className="shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* 1. Left Column: Title & 3 Feature Badges */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white leading-tight tracking-tight mb-8">
                {dict.purchaseHome.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/15">
                {/* Benefit 1 */}
                <div className="flex items-start gap-3 sm:border-r sm:border-white/20 sm:pr-4">
                  <svg className="w-6 h-6 text-sky-300 flex-shrink-0 mt-0.5">
                    <use href="#i-book"></use>
                  </svg>
                  <span className="text-xs sm:text-[13px] leading-snug text-slate-200 font-medium">
                    {dict.purchaseHome.b1}
                  </span>
                </div>

                {/* Benefit 2 */}
                <div className="flex items-start gap-3 sm:border-r sm:border-white/20 sm:pr-4">
                  <svg className="w-6 h-6 text-sky-300 flex-shrink-0 mt-0.5">
                    <use href="#i-shield"></use>
                  </svg>
                  <span className="text-xs sm:text-[13px] leading-snug text-slate-200 font-medium">
                    {dict.purchaseHome.b2}
                  </span>
                </div>

                {/* Benefit 3 */}
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-sky-300 flex-shrink-0 mt-0.5">
                    <use href="#i-award"></use>
                  </svg>
                  <span className="text-xs sm:text-[13px] leading-snug text-slate-200 font-medium">
                    {dict.purchaseHome.b3}
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Middle Column: 3D Book Cover */}
            <div className="lg:col-span-3 flex justify-center py-2">
              <img
                src="/assets/capa-tratado-da-coluna.svg"
                alt="Capa do livro impresso"
                className="max-h-[260px] sm:max-h-[300px] lg:max-h-[340px] w-auto drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* 3. Right Column: CTA Text and Buy Button */}
            <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">
              <p className="text-base sm:text-lg text-white font-bold leading-snug mb-6 max-w-sm">
                {dict.purchaseHome.ctaText}
              </p>

              <a
                href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
                target="_blank"
                rel="noopener noreferrer"
                id="btn-comprar-home"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#f52238] hover:bg-[#db152a] text-white font-bold text-base shadow-xl shadow-red-600/35 transition-all active:scale-[0.98]"
                style={{ textDecoration: "none" }}
              >
                <span>{dict.purchaseHome.ctaBtn}</span>
                <svg className="w-4 h-4 text-white">
                  <use href="#i-arrow"></use>
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="comprar"
      className="py-12 sm:py-16 text-white relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 46% 45%, rgba(229, 44, 60, 0.38), transparent 25%), radial-gradient(circle at 74% 45%, rgba(31, 132, 206, 0.28), transparent 25%), linear-gradient(100deg, #001c47, #073d78 52%, #001b43)",
      }}
    >
      <div className="shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 flex flex-col">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight mb-2">
              {dict.purchaseIndice.title}
            </h2>
            <div className="w-14 h-1.5 rounded-full bg-[#f52238] mb-4" />
            <p className="text-sm sm:text-base text-slate-200 mb-6 leading-relaxed">
              {dict.purchaseIndice.subtitle}
            </p>
            <div>
              <a
                href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
                target="_blank"
                rel="noopener noreferrer"
                id="btn-comprar-indice"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#f52238] hover:bg-[#db152a] text-white font-bold text-sm sm:text-base shadow-xl shadow-red-600/35 transition-all active:scale-[0.98]"
                style={{ textDecoration: "none" }}
              >
                <span>{dict.purchaseIndice.ctaBtn}</span>
                <svg className="w-4 h-4 text-white">
                  <use href="#i-cart"></use>
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 flex justify-center">
            <img
              src="/assets/capa-tratado-da-coluna.svg"
              alt="Capa da edição impressa"
              className="max-h-[260px] sm:max-h-[300px] w-auto drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)]"
            />
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="w-8 h-8 rounded-lg bg-red-600/30 text-red-400 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4"><use href="#i-book"></use></svg>
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-snug m-0">
                {dict.purchaseIndice.b1}
              </p>
            </div>

            <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="w-8 h-8 rounded-lg bg-blue-600/30 text-sky-400 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4"><use href="#i-academic"></use></svg>
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-snug m-0">
                {dict.purchaseIndice.b2}
              </p>
            </div>

            <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="w-8 h-8 rounded-lg bg-emerald-600/30 text-emerald-400 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4"><use href="#i-clipboard"></use></svg>
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-snug m-0">
                {dict.purchaseIndice.b3}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
