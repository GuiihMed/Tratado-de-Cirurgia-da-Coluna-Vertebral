/**
 * Google Cloud Translation Service
 * Provides robust translation using Google Cloud Translation API v2
 * with automated caching and fallback resilience.
 */

// In-memory LRU cache for translations
const translationCache = new Map<string, string>();

/**
 * Get Google Cloud Translation API key from environment variables
 */
export function getGoogleTranslateApiKey(): string | undefined {
  return (
    process.env.GOOGLE_TRANSLATE_API_KEY ||
    process.env.GOOGLE_CLOUD_API_KEY ||
    process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY
  );
}

/**
 * Translate a single text string using Google Cloud Translation API
 */
export async function translateWithGoogleCloud(
  text: string,
  targetLang: string,
  sourceLang: string = "pt"
): Promise<string> {
  if (!text || text.trim() === "" || targetLang === sourceLang) {
    return text;
  }

  const cacheKey = `${sourceLang}:${targetLang}:${text}`;
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey)!;
  }

  const apiKey = getGoogleTranslateApiKey();

  // 1. If API Key is configured, use official Google Cloud Translation API v2
  if (apiKey) {
    try {
      const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: text,
          target: targetLang,
          source: sourceLang,
          format: "text",
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const translated = data?.data?.translations?.[0]?.translatedText;
        if (translated) {
          translationCache.set(cacheKey, translated);
          return translated;
        }
      } else {
        console.warn(`[Google Cloud Translate] HTTP ${response.status}:`, await response.text());
      }
    } catch (err) {
      console.error("[Google Cloud Translate] Error querying API:", err);
    }
  }

  // 2. Direct Translation Endpoint Fallback
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      if (Array.isArray(data) && Array.isArray(data[0])) {
        const translated = data[0].map((item: any) => item[0]).join("");
        if (translated) {
          translationCache.set(cacheKey, translated);
          return translated;
        }
      }
    }
  } catch (fallbackErr) {
    console.warn("[Google Cloud Translate] Fallback translation error:", fallbackErr);
  }

  // Return original text if translation failed
  return text;
}

/**
 * Translate a batch of text strings efficiently in a single request
 */
export async function translateBatchWithGoogleCloud(
  texts: string[],
  targetLang: string,
  sourceLang: string = "pt"
): Promise<string[]> {
  if (!texts || texts.length === 0 || targetLang === sourceLang) {
    return texts;
  }

  const apiKey = getGoogleTranslateApiKey();

  // If official Google Cloud API key is present, send multi-query batch
  if (apiKey) {
    try {
      const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: texts,
          target: targetLang,
          source: sourceLang,
          format: "text",
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const translations = data?.data?.translations;
        if (Array.isArray(translations) && translations.length === texts.length) {
          return translations.map((t: any) => t.translatedText);
        }
      }
    } catch (err) {
      console.error("[Google Cloud Translate] Batch error:", err);
    }
  }

  // Sequential or parallel fallback
  return Promise.all(texts.map(t => translateWithGoogleCloud(t, targetLang, sourceLang)));
}
