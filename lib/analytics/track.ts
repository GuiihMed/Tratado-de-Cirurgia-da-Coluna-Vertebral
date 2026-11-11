/**
 * Client-side Google Analytics event tracking utility.
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export function trackSpotifyClick(params: {
  episodeNumber: number;
  episodeTitle: string;
  spotifyUrl: string;
  sourceLocation?: string;
}) {
  if (typeof window === "undefined") return;

  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", "spotify_listen", {
        event_category: "podcast",
        event_label: `Episódio ${params.episodeNumber} - ${params.episodeTitle}`,
        episode_number: params.episodeNumber,
        episode_title: params.episodeTitle,
        spotify_url: params.spotifyUrl,
        source_location: params.sourceLocation || "web_player",
        value: 1,
      });

      // Also fire generic outbound click
      window.gtag("event", "click", {
        event_category: "outbound",
        event_label: params.spotifyUrl,
        transport_type: "beacon",
      });
    }

    // Persist click count locally as immediate feedback
    const storageKey = `sbc_spotify_clicks_ep_${params.episodeNumber}`;
    const current = parseInt(localStorage.getItem(storageKey) || "0", 10);
    localStorage.setItem(storageKey, (current + 1).toString());
  } catch (err) {
    console.warn("Analytics tracking error:", err);
  }
}
