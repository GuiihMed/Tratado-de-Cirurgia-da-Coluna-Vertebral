import { createClient } from "@supabase/supabase-js";
import { Capitulo } from "../types";
import { INITIAL_CHAPTERS } from "../data/sections-and-chapters";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-coluna-sbc.supabase.co";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

export const getSupabaseServerClient = () => {
  return createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: false,
    },
  });
};

/**
 * Fetch all chapters from Supabase database.
 * If Supabase is unreachable or not configured, safely returns the full initial catalog.
 */
export async function getCapitulos(): Promise<{ data: Capitulo[]; isFromDb: boolean; error?: string }> {
  try {
    const isConfigured =
      Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) &&
      !process.env.NEXT_PUBLIC_SUPABASE_URL?.includes("placeholder") &&
      Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) &&
      !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.includes("placeholder");

    if (!isConfigured) {
      return { data: INITIAL_CHAPTERS, isFromDb: false };
    }

    const client = getSupabaseServerClient();
    const { data, error } = await client
      .from("capitulos")
      .select("*")
      .order("numero", { ascending: true });

    if (error || !data || data.length === 0) {
      console.warn("Supabase query returned empty or error, falling back to initial data:", error?.message);
      return { data: INITIAL_CHAPTERS, isFromDb: false, error: error?.message };
    }

    return { data: data as Capitulo[], isFromDb: true };
  } catch (err: any) {
    console.error("Exception fetching chapters from Supabase:", err);
    return { data: INITIAL_CHAPTERS, isFromDb: false, error: err?.message };
  }
}

/**
 * Fetch a single chapter by its number (1 to 109).
 */
export async function getCapituloByNumero(
  numero: number
): Promise<{ data: Capitulo | null; isFromDb: boolean }> {
  try {
    const isConfigured =
      Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) &&
      !process.env.NEXT_PUBLIC_SUPABASE_URL?.includes("placeholder") &&
      Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) &&
      !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.includes("placeholder");

    if (isConfigured) {
      const client = getSupabaseServerClient();
      const { data, error } = await client
        .from("capitulos")
        .select("*")
        .eq("numero", numero)
        .maybeSingle();

      if (!error && data) {
        return { data: data as Capitulo, isFromDb: true };
      }
    }

    // Fallback to local catalog
    const local = INITIAL_CHAPTERS.find((c) => c.numero === numero) || null;
    return { data: local, isFromDb: false };
  } catch (err) {
    const local = INITIAL_CHAPTERS.find((c) => c.numero === numero) || null;
    return { data: local, isFromDb: false };
  }
}
