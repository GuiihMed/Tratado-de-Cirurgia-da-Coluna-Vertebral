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
  BarChart3,
  TrendingUp,
  Users,
  Eye,
  Clock,
  Radio,
  ExternalLink,
  Download,
  Printer,
  Calendar,
  Layers,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Globe2,
  Smartphone,
  Laptop,
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
  const [showConfigModal, setShowConfigModal] = useState(false);

  // Filter KPI cards according to source (Google, Spotify, or Unified)
  const filteredKpis = data.kpis.filter((kpi) => {
    if (sourceFilter === "all") return true;
    if (sourceFilter === "google") return kpi.source === "google" || kpi.source === "unified";
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

  // Export JSON Report
  const handleExportJSON = () => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(data, null, 2)
    )}`;
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", jsonString);
    downloadAnchor.setAttribute(
      "download",
      `analytics-sbc-${timeRange}.json`
    );
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Print Report
  const handlePrint = () => {
    window.print();
  };

  // Helper for KPI icon
  const renderKpiIcon = (icon: MetricCardData["icon"], source: MetricCardData["source"]) => {
    if (source === "spotify" || icon === "spotify" || icon === "audio") {
      return (
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 shadow-xs ring-1 ring-emerald-100">
          <SpotifyIcon size={20} color="#1DB954" />
        </span>
      );
    }
    if (icon === "pageviews") {
      return (
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-xs ring-1 ring-blue-100">
          <Eye className="h-5 w-5" />
        </span>
      );
    }
    if (icon === "duration") {
      return (
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 shadow-xs ring-1 ring-amber-100">
          <Clock className="h-5 w-5" />
        </span>
      );
    }
    return (
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-navy-800 shadow-xs ring-1 ring-indigo-100">
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
    <div className="w-full bg-[#f8fafc] text-slate-800 pb-20">
      {/* Top Banner / Classic Header */}
      <section className="border-b border-slate-200 bg-white shadow-xs">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy-800">
                  <BarChart3 className="h-3.5 w-3.5 text-sbc-red" />
                  Métricas Oficiais SBC
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-emerald-600/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {data.summary.activeUsersNow} leitores online (GA4)
                </span>
              </div>
              <h1 className="mt-2 text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
                Relatório de Audiência & Streaming
              </h1>
              <p className="mt-1 text-sm text-slate-600">
                Consolidação de dados do portal oficial{" "}
                <a
                  href="https://www.tratadodecoluna.com.br/pt"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-navy-800 underline hover:text-sbc-red inline-flex items-center gap-0.5"
                >
                  tratadodecoluna.com.br <ExternalLink className="h-3 w-3" />
                </a>{" "}
                integrando tráfego web do <strong>Google Analytics 4 (Propriedade 406694675)</strong> e reproduções do videocast no <strong>Spotify (&quot;Tratado em Debate&quot;)</strong>.
              </p>
            </div>

            {/* Actions Bar */}
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={() => setShowConfigModal(true)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-2xs hover:bg-slate-50 transition-colors focus-visible:ring-2 focus-visible:ring-navy-700"
              >
                <HelpCircle className="h-4 w-4 text-slate-500" />
                Configurar Credenciais
              </button>

              <button
                onClick={handleExportJSON}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-2xs hover:bg-slate-50 transition-colors focus-visible:ring-2 focus-visible:ring-navy-700"
              >
                <Download className="h-4 w-4 text-slate-500" />
                Exportar JSON
              </button>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 rounded-lg bg-navy-900 px-3.5 py-2 text-xs font-medium text-white shadow-sm hover:bg-navy-800 transition-colors focus-visible:ring-2 focus-visible:ring-navy-700"
              >
                <Printer className="h-4 w-4" />
                Imprimir Relatório
              </button>
            </div>
          </div>

          {/* Time Range & Navigation Tabs */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-slate-100 pt-6">
            {/* View Mode Tabs */}
            <div
              role="tablist"
              aria-label="Navegação de seções analíticas"
              className="flex items-center rounded-xl bg-slate-100 p-1 text-xs font-medium text-slate-600 overflow-x-auto"
            >
              <button
                role="tab"
                aria-selected={activeTab === "overview"}
                onClick={() => setActiveTab("overview")}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 whitespace-nowrap transition-all ${
                  activeTab === "overview"
                    ? "bg-white text-navy-900 shadow-xs font-semibold"
                    : "hover:text-slate-900"
                }`}
              >
                <Layers className="h-3.5 w-3.5" />
                Visão Geral
              </button>
              <button
                role="tab"
                aria-selected={activeTab === "content"}
                onClick={() => setActiveTab("content")}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 whitespace-nowrap transition-all ${
                  activeTab === "content"
                    ? "bg-white text-navy-900 shadow-xs font-semibold"
                    : "hover:text-slate-900"
                }`}
              >
                <Eye className="h-3.5 w-3.5 text-blue-600" />
                Capítulos Mais Lidos
              </button>
              <button
                role="tab"
                aria-selected={activeTab === "spotify"}
                onClick={() => setActiveTab("spotify")}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 whitespace-nowrap transition-all ${
                  activeTab === "spotify"
                    ? "bg-white text-navy-900 shadow-xs font-semibold"
                    : "hover:text-slate-900"
                }`}
              >
                <SpotifyIcon size={14} color="#1DB954" />
                Spotify & Podcasts
              </button>
              <button
                role="tab"
                aria-selected={activeTab === "traffic"}
                onClick={() => setActiveTab("traffic")}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 whitespace-nowrap transition-all ${
                  activeTab === "traffic"
                    ? "bg-white text-navy-900 shadow-xs font-semibold"
                    : "hover:text-slate-900"
                }`}
              >
                <Globe2 className="h-3.5 w-3.5 text-teal-600" />
                Origem & Dispositivos
              </button>
            </div>

            {/* Time Filter Buttons */}
            <div className="flex items-center gap-1 rounded-xl bg-slate-100 p-1 text-xs font-medium text-slate-600">
              <span className="flex items-center gap-1 px-2 text-slate-400">
                <Calendar className="h-3.5 w-3.5" />
                Período:
              </span>
              {(["7d", "30d", "90d", "all"] as AnalyticsTimeRange[]).map((r) => (
                <button
                  key={r}
                  disabled={isPending}
                  onClick={() => handleRangeChange(r)}
                  className={`rounded-lg px-3 py-1 transition-all ${
                    timeRange === r
                      ? "bg-white text-navy-900 shadow-xs font-semibold"
                      : "hover:text-slate-900"
                  }`}
                >
                  {r === "7d" ? "7 Dias" : r === "30d" ? "30 Dias" : r === "90d" ? "90 Dias" : "Tudo"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
        {/* Source Provider Badges (Google GA4 & Spotify) */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-2">
              Provedores Conectados:
            </span>

            {/* Google GA4 */}
            <button
              onClick={() => setSourceFilter(sourceFilter === "google" ? "all" : "google")}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium border transition-colors ${
                sourceFilter === "google"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              <span className="font-bold text-[#4285F4]">G</span>
              <span>Google Analytics (GA4: 406694675)</span>
              {data.isLive.google ? (
                <CheckCircle2 className="h-3 w-3 text-emerald-500" />
              ) : (
                <span className="text-[10px] text-slate-500 bg-white/60 px-1 rounded border border-slate-200">Ativo</span>
              )}
            </button>

            {/* Spotify */}
            <button
              onClick={() => setSourceFilter(sourceFilter === "spotify" ? "all" : "spotify")}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium border transition-colors ${
                sourceFilter === "spotify"
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              <SpotifyIcon size={14} color={sourceFilter === "spotify" ? "#ffffff" : "#1DB954"} />
              <span>Spotify Podcasts</span>
              {data.isLive.spotify ? (
                <CheckCircle2 className="h-3 w-3 text-emerald-500" />
              ) : (
                <span className="text-[10px] text-slate-500 bg-white/60 px-1 rounded border border-slate-200">Ativo</span>
              )}
            </button>

            {sourceFilter !== "all" && (
              <button
                onClick={() => setSourceFilter("all")}
                className="text-xs text-sbc-red font-semibold hover:underline ml-2"
              >
                Limpar filtro
              </button>
            )}
          </div>

          <div className="text-xs text-slate-500">
            Atualizado em:{" "}
            <span className="font-medium text-slate-700">
              {new Date(data.generatedAt).toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        </div>

        {/* 6 Classic KPI Cards Grid */}
        <section aria-labelledby="kpi-heading-classic">
          <h2 id="kpi-heading-classic" className="sr-only">
            Indicadores Principais
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredKpis.map((kpi, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {kpi.title}
                  </span>
                  {renderKpiIcon(kpi.icon, kpi.source)}
                </div>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold tracking-tight text-navy-900 font-mono">
                    {kpi.value}
                  </span>
                  <span
                    className={`inline-flex items-center gap-0.5 text-xs font-semibold ${
                      kpi.trend === "up" ? "text-emerald-600" : "text-rose-600"
                    }`}
                  >
                    <TrendingUp className="h-3.5 w-3.5" />+{kpi.changePercent}%
                  </span>
                </div>

                <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                  <span>{kpi.subtitle}</span>
                  <span className="capitalize font-medium text-slate-400">
                    {kpi.source === "spotify" ? "Spotify" : kpi.source === "google" ? "GA4" : "Unificado"}
                  </span>
                </div>

                {/* Bottom colored indicator line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 ${
                    kpi.source === "spotify"
                      ? "bg-emerald-500"
                      : kpi.source === "google"
                      ? "bg-blue-500"
                      : "bg-sbc-red"
                  }`}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Overview Chart & Traffic Split */}
        {(activeTab === "overview" || activeTab === "traffic") && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* SVG Interactive Time Series Chart */}
            <div className="lg:col-span-2 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-navy-900">
                    Evolução de Tráfego e Reproduções
                  </h3>
                  <p className="text-xs text-slate-500">
                    Comparação temporal entre visualizações de páginas (Google Analytics) e reproduções no Spotify
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <span className="flex items-center gap-1.5 font-medium text-slate-700">
                    <span className="h-3 w-3 rounded-full bg-[#4285F4] inline-block" />
                    Páginas Web (GA4)
                  </span>
                  <span className="flex items-center gap-1.5 font-medium text-slate-700">
                    <span className="h-3 w-3 rounded-full bg-emerald-500 inline-block" />
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
                    <linearGradient id="pageviewsGradientClassic" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4285F4" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="#4285F4" stopOpacity="0.01" />
                    </linearGradient>
                    <linearGradient id="streamsGradientClassic" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1DB954" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#1DB954" stopOpacity="0.02" />
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
                        <text x="4" y={y - 4} fill="#94a3b8" fontSize="10" fontFamily="monospace">
                          {Math.round(maxPageviews * ratio)}
                        </text>
                      </g>
                    );
                  })}

                  {/* Web Pageviews Area & Line */}
                  <path d={pageviewsArea} fill="url(#pageviewsGradientClassic)" />
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

                {/* X Axis Dates */}
                <div className="flex justify-between text-[11px] text-slate-400 pt-3 border-t border-slate-100 font-mono">
                  {data.timeSeries
                    .filter((_, idx) => idx % Math.ceil(data.timeSeries.length / 6) === 0)
                    .map((pt, i) => (
                      <span key={i}>{pt.label}</span>
                    ))}
                  <span>{data.timeSeries[data.timeSeries.length - 1]?.label}</span>
                </div>
              </div>
            </div>

            {/* Channels & Traffic Sources Breakdown */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-navy-900">Canais de Aquisição</h3>
                <p className="text-xs text-slate-500 mb-6">
                  Origens de tráfego registradas no Google Analytics & Spotify
                </p>

                <div className="space-y-4">
                  {data.trafficSources.map((source, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-700">{source.name}</span>
                        <span className="text-slate-500 font-mono">
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

              {/* Devices Split */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Distribuição por Dispositivo
                </h4>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-xl bg-slate-50 p-2.5 border border-slate-100">
                    <Smartphone className="h-4 w-4 mx-auto text-slate-600 mb-1" />
                    <div className="text-xs font-bold text-navy-900 font-mono">{data.devices[0]?.percentage}%</div>
                    <div className="text-[10px] text-slate-500">Celular</div>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-2.5 border border-slate-100">
                    <Laptop className="h-4 w-4 mx-auto text-slate-600 mb-1" />
                    <div className="text-xs font-bold text-navy-900 font-mono">{data.devices[1]?.percentage}%</div>
                    <div className="text-[10px] text-slate-500">Computador</div>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-2.5 border border-slate-100">
                    <Radio className="h-4 w-4 mx-auto text-slate-600 mb-1" />
                    <div className="text-xs font-bold text-navy-900 font-mono">{data.devices[2]?.percentage}%</div>
                    <div className="text-[10px] text-slate-500">Tablet</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section 2: Top Pages & Chapters (Modern Web Guidance responsive-table compliant) */}
        {(activeTab === "overview" || activeTab === "content") && (
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="text-lg font-bold text-navy-900">
                  Capítulos e Páginas Mais Lidas
                </h3>
                <p className="text-xs text-slate-500">
                  Métricas de visualização direta e tempo de leitura nos 109 capítulos (Google Analytics 4)
                </p>
              </div>
              <span className="text-xs font-medium text-slate-500">
                Total de {data.topPages.length} páginas mapeadas
              </span>
            </div>

            {/* Accessible Responsive Table Wrapper */}
            <div
              tabIndex={0}
              role="region"
              aria-labelledby="top-pages-table-caption-classic"
              className="table-wrapper relative overflow-x-auto max-h-[500px] rounded-xl border border-slate-200"
            >
              <table className="w-full text-left text-sm border-collapse">
                <caption id="top-pages-table-caption-classic" className="sr-only">
                  Lista das páginas e capítulos mais visualizados no portal Tratado de Cirurgia da Coluna Vertebral
                </caption>
                <thead className="sticky top-0 z-10 bg-slate-50 text-xs uppercase font-semibold text-slate-600 border-b border-slate-200 shadow-2xs">
                  <tr>
                    <th scope="col" className="py-3 px-4">
                      Capítulo / Página
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
                        className="py-3 px-4 font-semibold text-slate-900 max-w-xs truncate"
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
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium ${
                            page.category === "capitulo"
                              ? "bg-blue-50 text-blue-700 ring-1 ring-blue-700/10"
                              : page.category === "debate"
                              ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-700/10"
                              : page.category === "secao"
                              ? "bg-purple-50 text-purple-700 ring-1 ring-purple-700/10"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {page.category}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right font-medium text-slate-900 font-mono">
                        {page.views.toLocaleString("pt-BR")}
                      </td>
                      <td className="py-3 px-4 text-right text-slate-600 font-mono">
                        {page.uniqueVisitors.toLocaleString("pt-BR")}
                      </td>
                      <td className="py-3 px-4 text-right text-emerald-700 font-mono text-xs">
                        {page.avgDuration}
                      </td>
                      <td className="py-3 px-4 text-right text-slate-600 font-mono text-xs">
                        {page.bounceRate}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <Link
                          href={page.path}
                          className="inline-flex items-center justify-center h-7 w-7 rounded-lg text-slate-400 hover:text-navy-900 hover:bg-slate-100 transition-colors"
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
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                  <SpotifyIcon size={24} color="#1DB954" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-navy-900">
                    Audiência do Videocast no Spotify
                  </h3>
                  <p className="text-xs text-slate-500">
                    Episódios da série científica &quot;Tratado em Debate&quot; transmitidos via streaming
                  </p>
                </div>
              </div>
              <a
                href="https://open.spotify.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-700 underline"
              >
                Abrir Canal no Spotify <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Episodes List Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {data.spotifyEpisodes.map((ep) => (
                <div
                  key={ep.id}
                  className="rounded-xl border border-slate-200 p-4 hover:border-emerald-300 hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span className="font-semibold text-emerald-700">
                        Episódio #{ep.episodeNumber} • Cap. {ep.chapterNumber}
                      </span>
                      <span>{ep.releaseDate}</span>
                    </div>
                    <h4 className="font-bold text-sm text-navy-900 line-clamp-2">
                      {ep.title}
                    </h4>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-slate-400">Streams: </span>
                      <strong className="text-slate-800 font-mono">{ep.streams.toLocaleString("pt-BR")}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400">Retenção: </span>
                      <strong className="text-emerald-600 font-mono">{ep.completionRate}%</strong>
                    </div>
                    <div>
                      <span className="text-slate-400">Duração: </span>
                      <span className="font-mono text-slate-700">{ep.avgListeningTime}</span>
                    </div>
                    <a
                      href={ep.spotifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md hover:bg-emerald-100 transition-colors"
                    >
                      Ouvir <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 4: Geographic Reach */}
        {(activeTab === "overview" || activeTab === "traffic") && (
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs">
            <h3 className="text-lg font-bold text-navy-900 mb-1">Alcance Geográfico</h3>
            <p className="text-xs text-slate-500 mb-6">
              Distribuição dos cirurgiões e especialistas que acessam a obra
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {data.countries.map((c, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 text-center"
                >
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {c.country} ({c.code})
                  </div>
                  <div className="text-xl font-bold text-navy-900 mt-1 font-mono">
                    {c.percentage}%
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5 font-mono">
                    {c.sessions.toLocaleString("pt-BR")} acessos
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Classic API Config Modal */}
      {showConfigModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="api-modal-title-classic"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4"
        >
          <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-navy-800" />
                <h3 id="api-modal-title-classic" className="text-lg font-bold text-navy-900">
                  Credenciais Google Analytics 4 & Spotify
                </h3>
              </div>
              <button
                onClick={() => setShowConfigModal(false)}
                className="text-slate-400 hover:text-slate-700 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              O sistema conecta à propriedade GA4 <strong>406694675</strong> e ao videocast oficial. Para produção na Vercel, certifique-se de configurar as variáveis no arquivo <code className="bg-slate-100 px-1 py-0.5 rounded text-navy-900 font-mono">.env.local</code> e no painel da Vercel:
            </p>

            <div className="rounded-xl bg-slate-900 p-4 text-xs font-mono text-emerald-400 space-y-1.5 overflow-x-auto">
              <div className="text-slate-500"># 1. Google Analytics 4 (Propriedade Oficial)</div>
              <div>GA4_PROPERTY_ID=406694675</div>
              <div>GOOGLE_CLIENT_EMAIL=analytics-dashboard@tratado-da-coluna-sbc.iam.gserviceaccount.com</div>
              <div>GOOGLE_PRIVATE_KEY=&quot;-----BEGIN PRIVATE KEY...&quot;</div>
              <br />
              <div className="text-slate-500"># 2. Spotify Web API (Videocast Oficial)</div>
              <div>SPOTIFY_CLIENT_ID=seu_client_id</div>
              <div>SPOTIFY_CLIENT_SECRET=seu_client_secret</div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowConfigModal(false)}
                className="rounded-lg bg-navy-900 px-4 py-2 text-xs font-semibold text-white hover:bg-navy-800 transition-colors"
              >
                Entendi, fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
