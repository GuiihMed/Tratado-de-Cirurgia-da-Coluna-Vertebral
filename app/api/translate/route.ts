import { NextRequest, NextResponse } from "next/server";
import {
  translateWithGoogleCloud,
  translateBatchWithGoogleCloud,
  getGoogleTranslateApiKey,
} from "@/lib/services/google-translate";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { text, texts, target = "en", source = "pt" } = body;

    if (!target) {
      return NextResponse.json(
        { error: "Target language 'target' is required (e.g. 'en', 'es', 'pt')" },
        { status: 400 }
      );
    }

    // Batch translation
    if (Array.isArray(texts)) {
      const translations = await translateBatchWithGoogleCloud(texts, target, source);
      return NextResponse.json({
        success: true,
        translations,
        source,
        target,
        provider: getGoogleTranslateApiKey() ? "google-cloud-translate-api" : "google-translate-service",
      });
    }

    // Single text translation
    if (typeof text === "string") {
      const translatedText = await translateWithGoogleCloud(text, target, source);
      return NextResponse.json({
        success: true,
        translatedText,
        source,
        target,
        provider: getGoogleTranslateApiKey() ? "google-cloud-translate-api" : "google-translate-service",
      });
    }

    return NextResponse.json(
      { error: "Either 'text' (string) or 'texts' (array of strings) must be provided" },
      { status: 400 }
    );
  } catch (error: any) {
    console.error("[API /api/translate] Translation error:", error);
    return NextResponse.json(
      { error: "Translation failed", message: error?.message },
      { status: 500 }
    );
  }
}
