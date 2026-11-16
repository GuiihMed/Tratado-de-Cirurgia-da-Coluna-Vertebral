export type AnalyticsTimeRange = "7d" | "30d" | "90d" | "all";
export type AnalyticsSourceFilter = "all" | "vercel" | "google" | "spotify";

export interface MetricCardData {
  title: string;
  value: string | number;
  changePercent: number; // e.g. +14.2
  trend: "up" | "down" | "neutral";
  subtitle: string;
  source: "vercel" | "google" | "spotify" | "unified";
  icon: "visitors" | "pageviews" | "duration" | "bounce" | "spotify" | "audio" | "users";
}

export interface TimeSeriesPoint {
  date: string;
  label: string;
  pageviews: number;
  visitors: number;
  spotifyStreams: number;
}

export interface TopPageMetric {
  path: string;
  title: string;
  views: number;
  uniqueVisitors: number;
  avgDuration: string;
  bounceRate: string;
  category: "capitulo" | "secao" | "institucional" | "debate" | "home";
}

export interface SpotifyEpisodeMetric {
  id: string;
  episodeNumber: number;
  title: string;
  chapterNumber: number;
  streams: number; // Reproduções / Inícios (Starts)
  listeners?: number; // Ouvintes Únicos (Streams no Spotify)
  completionRate: number; // e.g. 78%
  avgListeningTime: string;
  spotifyUrl: string;
  releaseDate: string;
}

export interface ChannelShareMetric {
  name: string;
  percentage: number;
  sessions: number;
  color: string;
}

export interface DeviceMetric {
  device: string;
  percentage: number;
  users: number;
}

export interface OperatingSystemMetric {
  name: string;
  percentage: number;
  users?: number;
}

export interface ReferrerMetric {
  referrer: string;
  visitors: number;
  percentage: number;
}

export interface CountryMetric {
  country: string;
  code: string;
  sessions: number;
  percentage: number;
}

export interface AnalyticsResponseData {
  timeRange: AnalyticsTimeRange;
  generatedAt: string;
  isLive: {
    google: boolean;
    spotify: boolean;
    vercel?: boolean;
  };
  diagnostics?: {
    google: {
      configured: boolean;
      hasEmail: boolean;
      hasKey: boolean;
      keyValidFormat: boolean;
      error?: string;
    };
    spotify: {
      configured: boolean;
      hasClientId: boolean;
      hasSecret: boolean;
    };
  };
  summary: {
    totalVisitors: number;
    totalPageviews: number;
    totalSpotifyStreams: number;
    totalSpotifyPlays?: number;
    vercelVisitors?: number;
    vercelPageviews?: number;
    ga4ActiveUsers?: number;
    ga4Pageviews?: number;
    ga4Events?: number;
    avgSessionDuration: string;
    avgBounceRate: string;
    activeUsersNow: number;
    growthVsPrevious: number;
  };
  kpis: MetricCardData[];
  timeSeries: TimeSeriesPoint[];
  topPages: TopPageMetric[];
  spotifyEpisodes: SpotifyEpisodeMetric[];
  trafficSources: ChannelShareMetric[];
  devices: DeviceMetric[];
  operatingSystems?: OperatingSystemMetric[];
  countries: CountryMetric[];
  referrers?: ReferrerMetric[];
}
