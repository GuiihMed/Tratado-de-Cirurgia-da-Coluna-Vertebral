"use client";

import { useState, useEffect } from "react";
import { DebateEpisode } from "@/lib/data/debate-episodes";

// Cache em memória para evitar requisições redundantes durante a mesma sessão
const thumbnailCache: Record<string, string> = {};

/**
 * Hook para obter as capas mais recentes diretamente da API oEmbed do Vimeo.
 * Garante que sempre que a capa for alterada no Vimeo, o site atualiza automaticamente online.
 */
export function useVimeoThumbnails(episodes: DebateEpisode[]): Record<string, string> {
  const [thumbnails, setThumbnails] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    for (const ep of episodes) {
      if (!ep.vimeoId) continue;
      if (typeof window !== "undefined") {
        const cached =
          sessionStorage.getItem(`vimeo_thumb_${ep.vimeoId}`) ||
          thumbnailCache[ep.vimeoId];
        if (cached) {
          initial[ep.vimeoId] = cached;
          continue;
        }
      }
      initial[ep.vimeoId] =
        ep.vimeoThumbnailUrl ||
        ep.thumbnailUrl ||
        `/assets/debate-ep${ep.numero}-cover.jpg`;
    }
    return initial;
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchAllLiveThumbnails() {
      const updates: Record<string, string> = {};
      let hasChanges = false;

      await Promise.allSettled(
        episodes.map(async (ep) => {
          if (!ep.vimeoId) return;
          try {
            const res = await fetch(
              `https://vimeo.com/api/oembed.json?url=https://player.vimeo.com/video/${ep.vimeoId}`
            );
            if (!res.ok) return;
            const data = await res.json();
            if (data && data.thumbnail_url) {
              const hdThumb = data.thumbnail_url.replace(/_\d+x\d+/, "_1280x720");
              updates[ep.vimeoId] = hdThumb;
              thumbnailCache[ep.vimeoId] = hdThumb;
              try {
                sessionStorage.setItem(`vimeo_thumb_${ep.vimeoId}`, hdThumb);
              } catch (_) {}
              if (thumbnails[ep.vimeoId] !== hdThumb) {
                hasChanges = true;
              }
            }
          } catch (_) {
            // Em caso de falha de rede temporária, mantém a capa padrão
          }
        })
      );

      if (isMounted && hasChanges) {
        setThumbnails((prev) => ({ ...prev, ...updates }));
      }
    }

    fetchAllLiveThumbnails();

    return () => {
      isMounted = false;
    };
  }, [episodes]);

  return thumbnails;
}
