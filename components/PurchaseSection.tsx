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
      <section id="comprar" className="purchase purchase-home">
        <div className="shell purchase-grid">
          <div className="purchase-copy">
            <h2>{dict.purchaseHome.title}</h2>
            <div className="purchase-benefits">
              <div>
                <svg>
                  <use href="#i-book"></use>
                </svg>
                <span>{dict.purchaseHome.b1}</span>
              </div>
              <div>
                <svg>
                  <use href="#i-shield"></use>
                </svg>
                <span>{dict.purchaseHome.b2}</span>
              </div>
              <div>
                <svg>
                  <use href="#i-award"></use>
                </svg>
                <span>{dict.purchaseHome.b3}</span>
              </div>
            </div>
          </div>
          <img
            className="purchase-book"
            src="/assets/book-cover.png"
            alt="Capa do livro impresso"
          />
          <div className="purchase-cta">
            <p>{dict.purchaseHome.ctaText}</p>
            <a
              className="btn btn-primary"
              href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
              target="_blank"
              rel="noopener noreferrer"
              id="btn-comprar-home"
            >
              {dict.purchaseHome.ctaBtn}{" "}
              <svg>
                <use href="#i-arrow"></use>
              </svg>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="comprar" className="purchase purchase-indice">
      <div className="shell purchase-grid">
        <div className="purchase-copy">
          <h2>{dict.purchaseIndice.title}</h2>
          <div className="red-rule"></div>
          <p>{dict.purchaseIndice.subtitle}</p>
          <a
            className="btn btn-primary"
            href="https://dilivros.com.br/livro-tratado-de-cirurgia-da-coluna-vertebral-9788580532920,pu6756.html"
            target="_blank"
            rel="noopener noreferrer"
            id="btn-comprar-indice"
          >
            {dict.purchaseIndice.ctaBtn}{" "}
            <svg>
              <use href="#i-cart"></use>
            </svg>
          </a>
        </div>
        <img
          className="purchase-book"
          src="/assets/book-cover.png"
          alt="Capa da edição impressa"
        />
        <div className="purchase-benefits">
          <div>
            <span className="benefit-icon">
              <svg>
                <use href="#i-book"></use>
              </svg>
            </span>
            <p>{dict.purchaseIndice.b1}</p>
          </div>
          <div>
            <span className="benefit-icon">
              <svg>
                <use href="#i-academic"></use>
              </svg>
            </span>
            <p>{dict.purchaseIndice.b2}</p>
          </div>
          <div>
            <span className="benefit-icon">
              <svg>
                <use href="#i-clipboard"></use>
              </svg>
            </span>
            <p>{dict.purchaseIndice.b3}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
