import { Locale } from "@/lib/types";
import { getDictionary } from "@/lib/i18n/dictionaries";

interface StatsBarProps {
  locale: Locale;
  variant?: "home" | "indice";
}

export default function StatsBar({ locale, variant = "home" }: StatsBarProps) {
  const dict = getDictionary(locale);

  return (
    <div className="stats-bar w-full">
      <div className="stat">
        <svg>
          <use href="#i-book"></use>
        </svg>
        <strong>{dict.stats.stat1Number}</strong>
        <span>{dict.stats.stat1Label}</span>
      </div>
      <div className="stat">
        <svg>
          <use href="#i-grid"></use>
        </svg>
        <strong>{dict.stats.stat2Number}</strong>
        <span>{dict.stats.stat2Label}</span>
      </div>
      <div className="stat">
        <svg>
          <use href="#i-users"></use>
        </svg>
        <span className="stat-text">{dict.stats.stat3Text}</span>
      </div>
      <div className="stat">
        <svg>
          <use href="#i-globe"></use>
        </svg>
        <span className="stat-text">{dict.stats.stat4Text}</span>
      </div>
      <div className="stat">
        <svg>
          <use href="#i-ref"></use>
        </svg>
        <span className="stat-text">
          {variant === "home" ? dict.stats.stat5HomeText : dict.stats.stat5IndiceText}
        </span>
      </div>
    </div>
  );
}
