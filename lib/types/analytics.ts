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
  streams: number;
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
    vercel: boolean;
    google: boolean;
    spotify: boolean;
  };
  summary: {
    totalVisitors: number;
    totalPageviews: number;
    totalSpotifyStreams: number;
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
  countries: CountryMetric[];
}
