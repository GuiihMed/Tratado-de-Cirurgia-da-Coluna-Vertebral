"use client";

import React, { useState, useTransition } from "react";
import Link from "next/link";
import {
  AnalyticsResponseData,
  AnalyticsSourceFilter,
  AnalyticsTimeRange,
  MetricCardData,
} from "@/lib/types/analytics";
import {
  TrendingUp,
  Users,
  Eye,
  Clock,
  Radio,
  ExternalLink,
  Calendar,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Globe2,
  Smartphone,
  Laptop,
  Check,
  Info,
} from "lucide-react";
import SpotifyIcon from "@/components/icons/SpotifyIcon";

interface AnalyticsDashboardProps {
  initialData: AnalyticsResponseData;
  locale: string;
}

export default function AnalyticsDashboard({
  initialData,
  locale,
}: AnalyticsDashboardProps) {
  const [data, setData] = useState<AnalyticsResponseData>(initialData);
  const [timeRange, setTimeRange] = useState<AnalyticsTimeRange>(initialData.timeRange);
  const [sourceFilter, setSourceFilter] = useState<AnalyticsSourceFilter>("all");
  const [isPending, startTransition] = useTransition();
  const [activeTab, setActiveTab] = useState<"overview" | "content" | "spotify" | "traffic">("overview");

  // Filter KPI cards according to source (Vercel, Google, Spotify, or Unified)
  const filteredKpis = data.kpis.filter((kpi) => {
    if (sourceFilter === "all") {
      // Exibir os 4 indicadores essenciais de alto impacto
      return kpi.title !== "Eventos Clínicos Registrados" && kpi.title !== "Episódios no Videocast";
    }
    if (sourceFilter === "vercel") return kpi.source === "vercel";
    if (sourceFilter === "google") return kpi.source === "google";
    if (sourceFilter === "spotify") return kpi.source === "spotify";
    return true;
  });

  // Handle changing range via client fetch
  const handleRangeChange = (newRange: AnalyticsTimeRange) => {
    setTimeRange(newRange);
    startTransition(async () => {
      try {
        const res = await fetch(`/api/analytics?range=${newRange}`);
        if (res.ok) {
          const freshData: AnalyticsResponseData = await res.json();
          setData(freshData);
        }
      } catch (err) {
        console.error("Failed to load range:", err);
      }
    });
  };



  // Helper for KPI icon
  const renderKpiIcon = (icon: MetricCardData["icon"], source: MetricCardData["source"]) => {
    if (source === "spotify" || icon === "spotify" || icon === "audio") {
      return (
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200">
          <SpotifyIcon size={20} color="#1DB954" />
        </span>
      );
    }
    if (source === "vercel") {
      return (
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white shadow-xs">
          <svg width={15} height={15} viewBox="0 0 76 65" fill="currentColor">
            <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
          </svg>
        </span>
      );
    }
    if (icon === "pageviews") {
      return (
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 border border-blue-200">
          <Eye className="h-5 w-5" />
        </span>
      );
    }
    if (icon === "duration") {
      return (
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-600 border border-purple-200">
          <Clock className="h-5 w-5" />
        </span>
      );
    }
    return (
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-50 text-rose-600 border border-rose-200">
        <Users className="h-5 w-5" />
      </span>
    );
  };

  // Compute values for dynamic SVG chart scaling
  const maxPageviews = Math.max(...data.timeSeries.map((t) => t.pageviews), 100);
  const maxStreams = Math.max(...data.timeSeries.map((t) => t.spotifyStreams), 10);
  const chartHeight = 220;
  const chartWidth = 720;
  const stepX = chartWidth / (data.timeSeries.length - 1 || 1);

  // SVG path for Pageviews
  const pageviewsPoints = data.timeSeries.map((pt, i) => {
    const x = i * stepX;
    const y = chartHeight - (pt.pageviews / maxPageviews) * (chartHeight - 40) - 20;
    return `${x},${y}`;
  });

  const pageviewsPath = `M ${pageviewsPoints.join(" L ")}`;
  const pageviewsArea = `${pageviewsPath} L ${(data.timeSeries.length - 1) * stepX},${chartHeight} L 0,${chartHeight} Z`;

  // SVG path for Spotify Streams
  const streamsPoints = data.timeSeries.map((pt, i) => {
    const x = i * stepX;
    const y = chartHeight - (pt.spotifyStreams / maxStreams) * (chartHeight - 40) - 20;
    return `${x},${y}`;
  });
  const streamsPath = `M ${streamsPoints.join(" L ")}`;

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 pb-24 font-sans">
      {/* ========================================================================= */}
      {/* CLASSIC HERO HEADER (Identidade Visual Oficial SBC) */}
      {/* ========================================================================= */}
      <section
        className="relative w-full overflow-hidden text-white py-8 sm:py-10 shadow-md"
        style={{
          background:
            "radial-gradient(circle at 14% 30%, rgba(220, 20, 45, 0.45), transparent 42%), linear-gradient(105deg, #a80f22 0%, #2f193e 26%, #052b5b 54%, #005a9c 100%)",
        }}
      >
        {/* Subtle Anatomical Spine Background Overlay */}
        <img
          src="/assets/hero-spine.png"
          alt=""
          className="absolute right-0 top-0 h-full w-auto max-w-[55%] object-contain pointer-events-none opacity-20 hidden md:block"
          style={{ mixBlendMode: "screen", filter: "contrast(1.2) brightness(1.1)" }}
        />

        <div className="w-full px-4 sm:px-6 md:px-8 mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-3xl">
              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                Painel de Audiência & Streaming
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BARRA DE CONTROLE: PLATAFORMA & FILTRO DE PERÍODO */}
      {/* ========================================================================= */}
      <section className="border-b border-slate-200 bg-white py-3 shadow-2xs">
        <div className="w-full px-4 sm:px-6 md:px-8 mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            {/* Filter by Platform Source */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">
                Plataforma:
              </span>
              <button
                onClick={() => setSourceFilter("all")}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                  sourceFilter === "all"
                    ? "bg-[#001a3d] text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Todas (Consolidado)
              </button>
              <button
                onClick={() => setSourceFilter("vercel")}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
                  sourceFilter === "vercel"
                    ? "bg-black text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <svg width={10} height={9} viewBox="0 0 76 65" fill="currentColor">
                  <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
                </svg>
                Vercel (1.886)
              </button>
              <button
                onClick={() => setSourceFilter("google")}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
                  sourceFilter === "google"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <span className="font-extrabold text-[11px]">G</span>
                GA4 (296)
              </button>
              <button
                onClick={() => setSourceFilter("spotify")}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
                  sourceFilter === "spotify"
                    ? "bg-[#1DB954] text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <SpotifyIcon size={13} color={sourceFilter === "spotify" ? "#ffffff" : "#1DB954"} />
                Spotify (993)
              </button>
            </div>

            {/* Time filter buttons */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs text-slate-500 font-medium flex items-center gap-1 mr-1">
                <Calendar className="h-3.5 w-3.5 text-slate-400" />
                Período:
              </span>
              {(["7d", "30d", "90d", "all"] as AnalyticsTimeRange[]).map((r) => (
                <button
                  key={r}
                  disabled={isPending}
                  onClick={() => handleRangeChange(r)}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                    timeRange === r
                      ? "bg-[#001a3d] text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {r === "7d" ? "7 Dias" : r === "30d" ? "30 Dias" : r === "90d" ? "90 Dias" : "Total"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MAIN CONTENT / DASHBOARD */}
      {/* ========================================================================= */}
      <main className="w-full px-4 sm:px-6 md:px-8 mx-auto max-w-7xl pt-8 space-y-8">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-3 overflow-x-auto">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === "overview"
                ? "bg-[#001a3d] text-white shadow-xs"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            Visão Geral
          </button>

          <button
            onClick={() => setActiveTab("content")}
            className={`px-4 py-2 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === "content"
                ? "bg-[#001a3d] text-white shadow-xs"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <Eye className="h-3.5 w-3.5 text-blue-600" />
            Capítulos do Livro
          </button>

          <button
            onClick={() => setActiveTab("spotify")}
            className={`px-4 py-2 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === "spotify"
                ? "bg-[#001a3d] text-white shadow-xs"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <SpotifyIcon size={14} color="#1DB954" />
            Videocast Spotify
          </button>

          <button
            onClick={() => setActiveTab("traffic")}
            className={`px-4 py-2 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === "traffic"
                ? "bg-[#001a3d] text-white shadow-xs"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <Globe2 className="h-3.5 w-3.5 text-teal-600" />
            Origem & Dispositivos
          </button>
        </div>

        {/* KPI Cards Grid */}
        <section aria-labelledby="kpi-heading-classic">
          <h2 id="kpi-heading-classic" className="sr-only">
            Métricas Chave
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filteredKpis.map((kpi, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {kpi.title}
                  </span>
                  {renderKpiIcon(kpi.icon, kpi.source)}
                </div>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold tracking-tight text-[#001a3d]">
                    {kpi.value}
                  </span>
                  <span
                    className={`inline-flex items-center gap-0.5 text-xs font-bold ${
                      kpi.trend === "up" ? "text-emerald-700" : "text-rose-700"
                    }`}
                  >
                    <TrendingUp className="h-3.5 w-3.5" />+{kpi.changePercent}%
                  </span>
                </div>

                <div className="mt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-2">
                  <span>{kpi.subtitle}</span>
                  <span className="font-bold text-slate-400">
                    {kpi.source === "spotify"
                      ? "Spotify"
                      : kpi.source === "vercel"
                      ? "Vercel Web"
                      : "Google Analytics"}
                  </span>
                </div>

                {/* Bottom colored indicator bar */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 ${
                    kpi.source === "spotify"
                      ? "bg-[#1DB954]"
                      : kpi.source === "google"
                      ? "bg-[#4285F4]"
                      : kpi.source === "vercel"
                      ? "bg-slate-900"
                      : "bg-[#f52238]"
                  }`}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Charts & Traffic Sources */}
        {(activeTab === "overview" || activeTab === "traffic") && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* SVG Interactive Time Series Chart */}
            <div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-[#001a3d]">
                      Evolução de Leituras & Reproduções
                    </h3>
                    <p className="text-xs text-slate-500">
                      Comparação temporal entre visualizações no portal (GA4) e streams no Spotify
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-semibold">
                    <span className="flex items-center gap-1.5 text-slate-700">
                      <span className="h-3 w-3 rounded-full bg-[#4285F4] inline-block" />
                      Visualizações Web (GA4)
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-700">
                      <span className="h-3 w-3 rounded-full bg-[#1DB954] inline-block" />
                      Spotify Streams
                    </span>
                  </div>
                </div>

                {/* Accessible SVG Chart */}
                <div
                  role="img"
                  aria-label={`Gráfico de linha mostrando histórico de leituras com pico de ${maxPageviews} visualizações e streams com pico de ${maxStreams}.`}
                  className="w-full overflow-hidden"
                >
                  <svg
                    viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                    className="w-full h-56 overflow-visible"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="pageviewsGradientClassic2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4285F4" stopOpacity="0.20" />
                        <stop offset="100%" stopColor="#4285F4" stopOpacity="0.0" />
                      </linearGradient>
                      <linearGradient id="streamsGradientClassic2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1DB954" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#1DB954" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Horizontal grid lines */}
                    {[0.25, 0.5, 0.75, 1].map((ratio, idx) => {
                      const y = chartHeight - ratio * (chartHeight - 40) - 20;
                      return (
                        <g key={idx}>
                          <line
                            x1="0"
                            y1={y}
                            x2={chartWidth}
                            y2={y}
                            stroke="#e2e8f0"
                            strokeDasharray="4 4"
                            strokeWidth="1"
                          />
                          <text x="4" y={y - 4} fill="#94a3b8" fontSize="10" fontFamily="sans-serif">
                            {Math.round(maxPageviews * ratio)}
                          </text>
                        </g>
                      );
                    })}

                    {/* Web Pageviews Area & Line */}
                    <path d={pageviewsArea} fill="url(#pageviewsGradientClassic2)" />
                    <path
                      d={pageviewsPath}
                      fill="none"
                      stroke="#4285F4"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Spotify Streams Line */}
                    <path
                      d={streamsPath}
                      fill="none"
                      stroke="#1DB954"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {/* Horizontal Dates Axis */}
                  <div className="flex justify-between text-[11px] text-slate-400 pt-3 border-t border-slate-100">
                    {data.timeSeries
                      .filter((_, idx) => idx % Math.ceil(data.timeSeries.length / 6) === 0)
                      .map((pt, i) => (
                        <span key={i}>{pt.label}</span>
                      ))}
                    <span>{data.timeSeries[data.timeSeries.length - 1]?.label}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Channels & Traffic Sources Breakdown */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#001a3d]">Canais de Aquisição</h3>
                <p className="text-xs text-slate-500 mb-6">
                  Distribuição das origens de tráfego de cirurgiões e leitores
                </p>

                <div className="space-y-4">
                  {data.trafficSources.map((source, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-slate-700">{source.name}</span>
                        <span className="text-slate-500 font-bold">
                          {source.sessions.toLocaleString("pt-BR")} ({source.percentage}%)
                        </span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${source.percentage}%`,
                            backgroundColor: source.color,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Devices & OS Split */}
              <div className="mt-8 pt-6 border-t border-slate-100 space-y-5">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Dispositivos (Vercel Web Analytics)
                  </h4>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-200/80">
                      <Laptop className="h-4 w-4 mx-auto text-slate-600 mb-1" />
                      <div className="text-xs font-bold text-[#001a3d]">{data.devices[0]?.percentage || 77}%</div>
                      <div className="text-[10px] text-slate-500 font-medium">Desktop</div>
                    </div>
                    <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-200/80">
                      <Smartphone className="h-4 w-4 mx-auto text-slate-600 mb-1" />
                      <div className="text-xs font-bold text-[#001a3d]">{data.devices[1]?.percentage || 23}%</div>
                      <div className="text-[10px] text-slate-500 font-medium">Celular</div>
                    </div>
                    <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-200/80">
                      <Radio className="h-4 w-4 mx-auto text-slate-600 mb-1" />
                      <div className="text-xs font-bold text-[#001a3d]">{data.devices[2]?.percentage || 0.4}%</div>
                      <div className="text-[10px] text-slate-500 font-medium">Tablet</div>
                    </div>
                  </div>
                </div>

                {/* Operating Systems */}
                {data.operatingSystems && data.operatingSystems.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                      Sistemas Operacionais
                    </h4>
                    <div className="grid grid-cols-5 gap-1.5 text-center text-xs">
                      {data.operatingSystems.map((os, i) => (
                        <div key={i} className="rounded bg-slate-50 p-2 border border-slate-200/70">
                          <span className="block text-[11px] font-bold text-[#001a3d]">{os.name}</span>
                          <span className="text-[10px] text-slate-500 font-semibold">{os.percentage}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Top Referrers */}
                {data.referrers && data.referrers.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Principais Referenciadores
                    </h4>
                    <div className="space-y-1.5 text-xs">
                      {data.referrers.slice(0, 4).map((ref, idx) => (
                        <div key={idx} className="flex items-center justify-between py-1 border-b border-slate-100 last:border-none">
                          <span className="text-slate-600 font-medium truncate max-w-[180px]">{ref.referrer}</span>
                          <span className="font-bold text-[#001a3d]">{ref.visitors} leitores</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Section 2: Top Pages & Chapters */}
        {(activeTab === "overview" || activeTab === "content") && (
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="text-lg font-bold text-[#001a3d]">
                  Capítulos e Páginas Mais Lidas
                </h3>
                <p className="text-xs text-slate-500">
                  Visualizações e retenção de leitura nos 109 capítulos (Google Analytics 4)
                </p>
              </div>
              <span className="text-xs font-bold text-slate-500">
                {data.topPages.length} capítulos mapeados
              </span>
            </div>

            {/* Responsive Table */}
            <div
              tabIndex={0}
              role="region"
              aria-labelledby="top-pages-table-caption-classic-view"
              className="table-wrapper relative overflow-x-auto max-h-[500px] rounded-lg border border-slate-200"
            >
              <table className="w-full text-left text-sm border-collapse">
                <caption id="top-pages-table-caption-classic-view" className="sr-only">
                  Capítulos mais lidos no portal do Tratado de Coluna SBC
                </caption>
                <thead className="sticky top-0 z-10 bg-slate-50 text-xs uppercase font-bold text-slate-600 border-b border-slate-200">
                  <tr>
                    <th scope="col" className="py-3 px-4">
                      Capítulo / Seção
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Categoria
                    </th>
                    <th scope="col" className="py-3 px-4 text-right">
                      Visualizações
                    </th>
                    <th scope="col" className="py-3 px-4 text-right">
                      Visitantes Únicos
                    </th>
                    <th scope="col" className="py-3 px-4 text-right">
                      Tempo Médio
                    </th>
                    <th scope="col" className="py-3 px-4 text-right">
                      Rejeição
                    </th>
                    <th scope="col" className="py-3 px-4 text-center">
                      Acessar
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {data.topPages.map((page, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <th
                        scope="row"
                        className="py-3 px-4 font-bold text-[#001a3d] max-w-xs truncate"
                        title={page.title}
                      >
                        <div className="flex flex-col">
                          <span className="truncate">{page.title}</span>
                          <span className="text-xs font-normal text-slate-400 font-mono">
                            {page.path}
                          </span>
                        </div>
                      </th>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold ${
                            page.category === "capitulo"
                              ? "bg-blue-50 text-blue-700 border border-blue-200"
                              : page.category === "debate"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : page.category === "secao"
                              ? "bg-purple-50 text-purple-700 border border-purple-200"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {page.category}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right font-extrabold text-[#001a3d]">
                        {page.views.toLocaleString("pt-BR")}
                      </td>
                      <td className="py-3 px-4 text-right text-slate-600">
                        {page.uniqueVisitors.toLocaleString("pt-BR")}
                      </td>
                      <td className="py-3 px-4 text-right text-emerald-700 font-semibold text-xs">
                        {page.avgDuration}
                      </td>
                      <td className="py-3 px-4 text-right text-slate-600 text-xs">
                        {page.bounceRate}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <Link
                          href={page.path}
                          className="inline-flex items-center justify-center h-7 w-7 rounded bg-slate-100 text-slate-600 hover:text-[#001a3d] hover:bg-slate-200 transition-colors"
                          title={`Ver página: ${page.title}`}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Section 3: Spotify Videocast Ranking */}
        {(activeTab === "overview" || activeTab === "spotify") && (
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200">
                  <SpotifyIcon size={22} color="#1DB954" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[#001a3d]">
                    Audiência no Spotify • Série &quot;Tratado em Debate&quot;
                  </h3>
                  <p className="text-xs text-slate-500">
                    Episódios em áudio com os cirurgiões autores dos capítulos da obra
                  </p>
                </div>
              </div>
              <a
                href="https://open.spotify.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 underline"
              >
                Abrir Canal no Spotify <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Episodes List Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {data.spotifyEpisodes.map((ep) => (
                <div
                  key={ep.id}
                  className="rounded-lg border border-slate-200 p-4 hover:border-emerald-300 hover:shadow-xs transition-all flex flex-col justify-between bg-white"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span className="font-bold text-emerald-800">
                        Episódio #{ep.episodeNumber} • Capítulo {ep.chapterNumber}
                      </span>
                      <span>{ep.releaseDate}</span>
                    </div>
                    <h4 className="font-bold text-sm text-[#001a3d] line-clamp-2">
                      {ep.title}
                    </h4>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs flex-wrap gap-2">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-semibold">Reproduções</span>
                      <strong className="text-slate-800 text-sm">{ep.streams.toLocaleString("pt-BR")}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-semibold">Ouvintes Únicos</span>
                      <strong className="text-emerald-700 text-sm">{(ep.listeners || Math.round(ep.streams * 0.58)).toLocaleString("pt-BR")}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-semibold">Duração</span>
                      <span className="font-medium text-slate-700 text-sm">{ep.avgListeningTime}</span>
                    </div>
                    <div>
                      <a
                        href={ep.spotifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded hover:bg-emerald-100 transition-colors"
                      >
                        Ouvir <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 4: Geographic Reach */}
        {(activeTab === "overview" || activeTab === "traffic") && (
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
            <h3 className="text-lg font-bold text-[#001a3d] mb-1">Alcance Internacional</h3>
            <p className="text-xs text-slate-500 mb-6">
              Distribuição dos cirurgiões de coluna e especialistas que consultam a obra
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {data.countries.map((c, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-slate-200 bg-slate-50/70 p-3.5 text-center"
                >
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {c.country} ({c.code})
                  </div>
                  <div className="text-xl font-extrabold text-[#001a3d] mt-1">
                    {c.percentage}%
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {c.sessions.toLocaleString("pt-BR")} acessos
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
