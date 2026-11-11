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
  Sparkles,
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
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30 shadow-[0_0_15px_rgba(29,185,84,0.2)]">
          <SpotifyIcon size={22} color="#1DB954" />
        </span>
      );
    }
    if (icon === "pageviews") {
      return (
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/30 shadow-[0_0_15px_rgba(66,133,244,0.2)]">
          <Eye className="h-5 w-5" />
        </span>
      );
    }
    if (icon === "duration") {
      return (
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
          <Clock className="h-5 w-5" />
        </span>
      );
    }
    return (
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
        <Users className="h-5 w-5" />
      </span>
    );
  };

  // Compute values for dynamic SVG chart scaling
  const maxPageviews = Math.max(...data.timeSeries.map((t) => t.pageviews), 100);
  const maxStreams = Math.max(...data.timeSeries.map((t) => t.spotifyStreams), 10);
  const chartHeight = 240;
  const chartWidth = 760;
  const stepX = chartWidth / (data.timeSeries.length - 1 || 1);

  // SVG path for Pageviews
  const pageviewsPoints = data.timeSeries.map((pt, i) => {
    const x = i * stepX;
    const y = chartHeight - (pt.pageviews / maxPageviews) * (chartHeight - 44) - 20;
    return `${x},${y}`;
  });

  const pageviewsPath = `M ${pageviewsPoints.join(" L ")}`;
  const pageviewsArea = `${pageviewsPath} L ${(data.timeSeries.length - 1) * stepX},${chartHeight} L 0,${chartHeight} Z`;

  // SVG path for Spotify Streams
  const streamsPoints = data.timeSeries.map((pt, i) => {
    const x = i * stepX;
    const y = chartHeight - (pt.spotifyStreams / maxStreams) * (chartHeight - 44) - 20;
    return `${x},${y}`;
  });
  const streamsPath = `M ${streamsPoints.join(" L ")}`;

  return (
    <div className="relative w-full min-h-screen bg-[#021226] text-white pb-24 selection:bg-sbc-red selection:text-white">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[120px]" />
        <div className="absolute top-80 right-10 h-[450px] w-[450px] rounded-full bg-emerald-500/10 blur-[130px]" />
        <div className="absolute bottom-20 left-10 h-[400px] w-[400px] rounded-full bg-rose-600/10 blur-[140px]" />
      </div>

      {/* Hero Header Section */}
      <section className="relative border-b border-white/10 bg-slate-950/40 backdrop-blur-2xl">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-cyan-300 border border-white/15 backdrop-blur-md">
                  <BarChart3 className="h-3.5 w-3.5 text-sbc-red" />
                  SBC Analytics New • GA4 & Spotify
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/30">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  {data.summary.activeUsersNow} cirurgiões online agora
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                Painel Executivo de{" "}
                <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                  Audiência & Streaming
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
                Monitoramento consolidado do portal oficial{" "}
                <a
                  href="https://www.tratadodecoluna.com.br/pt"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-cyan-300 underline underline-offset-4 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  tratadodecoluna.com.br <ExternalLink className="h-3.5 w-3.5" />
                </a>{" "}
                integrando tráfego web do <strong>Google Analytics 4 (Propriedade 406694675)</strong> e reproduções do podcast <strong>Spotify (&quot;Tratado em Debate&quot;)</strong>.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowConfigModal(true)}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-semibold text-slate-200 backdrop-blur-md hover:bg-white/10 hover:border-white/30 transition-all focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <HelpCircle className="h-4 w-4 text-cyan-400" />
                Credenciais & Status
              </button>

              <button
                onClick={handleExportJSON}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-semibold text-slate-200 backdrop-blur-md hover:bg-white/10 hover:border-white/30 transition-all focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Download className="h-4 w-4 text-slate-300" />
                Exportar JSON
              </button>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sbc-red to-rose-600 px-4 py-2.5 text-xs font-bold text-white shadow-[0_0_20px_rgba(245,34,56,0.4)] hover:brightness-110 active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-rose-400"
              >
                <Printer className="h-4 w-4" />
                Imprimir Relatório
              </button>
            </div>
          </div>

          {/* Time Range & Navigation Tabs */}
          <div className="mt-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 border-t border-white/10 pt-6">
            {/* Nav Tabs */}
            <div
              role="tablist"
              aria-label="Navegação do relatório"
              className="flex items-center gap-1.5 rounded-2xl bg-white/5 p-1.5 border border-white/10 backdrop-blur-xl overflow-x-auto"
            >
              <button
                role="tab"
                aria-selected={activeTab === "overview"}
                onClick={() => setActiveTab("overview")}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all ${
                  activeTab === "overview"
                    ? "bg-white/15 text-white border border-white/25 shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Layers className="h-3.5 w-3.5" />
                Visão Geral
              </button>
              <button
                role="tab"
                aria-selected={activeTab === "content"}
                onClick={() => setActiveTab("content")}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all ${
                  activeTab === "content"
                    ? "bg-white/15 text-white border border-white/25 shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Eye className="h-3.5 w-3.5 text-blue-400" />
                Capítulos Mais Lidos
              </button>
              <button
                role="tab"
                aria-selected={activeTab === "spotify"}
                onClick={() => setActiveTab("spotify")}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all ${
                  activeTab === "spotify"
                    ? "bg-white/15 text-white border border-white/25 shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <SpotifyIcon size={14} color="#1DB954" />
                Spotify & Podcasts
              </button>
              <button
                role="tab"
                aria-selected={activeTab === "traffic"}
                onClick={() => setActiveTab("traffic")}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all ${
                  activeTab === "traffic"
                    ? "bg-white/15 text-white border border-white/25 shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Globe2 className="h-3.5 w-3.5 text-teal-400" />
                Origem & Dispositivos
              </button>
            </div>

            {/* Range Selector */}
            <div className="flex items-center gap-1.5 rounded-2xl bg-white/5 p-1.5 border border-white/10 backdrop-blur-xl">
              <span className="flex items-center gap-1 px-3 text-xs font-medium text-slate-400">
                <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                Período:
              </span>
              {(["7d", "30d", "90d", "all"] as AnalyticsTimeRange[]).map((r) => (
                <button
                  key={r}
                  disabled={isPending}
                  onClick={() => handleRangeChange(r)}
                  className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all ${
                    timeRange === r
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(66,133,244,0.4)]"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {r === "7d" ? "7 Dias" : r === "30d" ? "30 Dias" : r === "90d" ? "90 Dias" : "Geral"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <main className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 space-y-10">
        {/* Source Filter Switcher (Google Analytics & Spotify only) */}
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-4 backdrop-blur-xl shadow-xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1">
              Filtro por Canal:
            </span>

            {/* Google Analytics 4 */}
            <button
              onClick={() => setSourceFilter(sourceFilter === "google" ? "all" : "google")}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all border ${
                sourceFilter === "google"
                  ? "bg-blue-600/90 text-white border-blue-400 shadow-[0_0_18px_rgba(66,133,244,0.4)]"
                  : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              <span className="font-extrabold text-blue-400">G</span>
              <span>Google Analytics (GA4: 406694675)</span>
              {data.isLive.google ? (
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              ) : (
                <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-cyan-300 font-mono">
                  Ativo
                </span>
              )}
            </button>

            {/* Spotify */}
            <button
              onClick={() => setSourceFilter(sourceFilter === "spotify" ? "all" : "spotify")}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all border ${
                sourceFilter === "spotify"
                  ? "bg-emerald-600/90 text-white border-emerald-400 shadow-[0_0_18px_rgba(29,185,84,0.4)]"
                  : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              <SpotifyIcon size={15} color={sourceFilter === "spotify" ? "#ffffff" : "#1DB954"} />
              <span>Spotify Podcasts</span>
              {data.isLive.spotify ? (
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              ) : (
                <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-emerald-300 font-mono">
                  Ativo
                </span>
              )}
            </button>

            {sourceFilter !== "all" && (
              <button
                onClick={() => setSourceFilter("all")}
                className="text-xs font-bold text-sbc-red hover:underline ml-2"
              >
                Limpar Filtro
              </button>
            )}
          </div>

          <div className="text-xs text-slate-400 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Sincronizado:{" "}
            <span className="font-mono text-slate-200">
              {new Date(data.generatedAt).toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        </div>

        {/* 6 Modern Glassmorphic KPI Cards */}
        <section aria-labelledby="kpi-cards-title">
          <h2 id="kpi-cards-title" className="sr-only">
            Métricas Chave
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredKpis.map((kpi, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {kpi.title}
                  </span>
                  {renderKpiIcon(kpi.icon, kpi.source)}
                </div>

                <div className="mt-5 flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono">
                    {kpi.value}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 px-2 py-0.5 text-xs font-bold text-emerald-400 border border-emerald-500/20">
                    <TrendingUp className="h-3.5 w-3.5" />
                    +{kpi.changePercent}%
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-slate-400 border-t border-white/5 pt-3">
                  <span>{kpi.subtitle}</span>
                  <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] uppercase font-bold text-slate-300 font-mono">
                    {kpi.source === "spotify" ? "Spotify" : kpi.source === "google" ? "GA4" : "Unificado"}
                  </span>
                </div>

                {/* Bottom Neon Accent Bar */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 ${
                    kpi.source === "spotify"
                      ? "bg-gradient-to-r from-emerald-500 to-teal-400 group-hover:h-1.5"
                      : kpi.source === "google"
                      ? "bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:h-1.5"
                      : "bg-gradient-to-r from-sbc-red to-rose-400 group-hover:h-1.5"
                  }`}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Temporal Evolution Chart & Acquisition Channels */}
        {(activeTab === "overview" || activeTab === "traffic") && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* SVG Interactive Time Series Chart */}
            <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-cyan-400" />
                      Evolução de Leituras & Reproduções
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Visualizações no portal web (Google Analytics) vs reproduções de episódios no Spotify
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
                    <span className="flex items-center gap-2 text-blue-300">
                      <span className="h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(66,133,244,0.8)] inline-block" />
                      Capítulos Web (GA4)
                    </span>
                    <span className="flex items-center gap-2 text-emerald-300">
                      <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(29,185,84,0.8)] inline-block" />
                      Streams Spotify
                    </span>
                  </div>
                </div>

                {/* SVG Visual Graph */}
                <div
                  role="img"
                  aria-label={`Gráfico de linha comparando histórico de leituras com pico de ${maxPageviews} visualizações e streams com pico de ${maxStreams}.`}
                  className="w-full overflow-hidden pt-2"
                >
                  <svg
                    viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                    className="w-full h-64 overflow-visible"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="pageviewsGradientNew" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4285F4" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#4285F4" stopOpacity="0.0" />
                      </linearGradient>
                      <linearGradient id="streamsGradientNew" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1DB954" stopOpacity="0.30" />
                        <stop offset="100%" stopColor="#1DB954" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Dark gridlines */}
                    {[0.25, 0.5, 0.75, 1].map((ratio, idx) => {
                      const y = chartHeight - ratio * (chartHeight - 44) - 20;
                      return (
                        <g key={idx}>
                          <line
                            x1="0"
                            y1={y}
                            x2={chartWidth}
                            y2={y}
                            stroke="rgba(255, 255, 255, 0.08)"
                            strokeDasharray="4 4"
                            strokeWidth="1"
                          />
                          <text x="4" y={y - 4} fill="#64748b" fontSize="10" fontFamily="monospace">
                            {Math.round(maxPageviews * ratio)}
                          </text>
                        </g>
                      );
                    })}

                    {/* Web Pageviews Area & Neon Line */}
                    <path d={pageviewsArea} fill="url(#pageviewsGradientNew)" />
                    <path
                      d={pageviewsPath}
                      fill="none"
                      stroke="#4285F4"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ filter: "drop-shadow(0 0 6px rgba(66, 133, 244, 0.5))" }}
                    />

                    {/* Spotify Streams Neon Line */}
                    <path
                      d={streamsPath}
                      fill="none"
                      stroke="#1DB954"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ filter: "drop-shadow(0 0 6px rgba(29, 185, 84, 0.5))" }}
                    />
                  </svg>

                  {/* Horizontal Date Axis */}
                  <div className="flex justify-between text-[11px] font-mono text-slate-400 pt-3 border-t border-white/10">
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
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">Canais de Aquisição</h3>
                <p className="text-xs text-slate-400 mb-6">
                  Origens de tráfego registradas no Google Analytics & Spotify
                </p>

                <div className="space-y-4">
                  {data.trafficSources.map((source, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200">{source.name}</span>
                        <span className="font-mono text-slate-400">
                          {source.sessions.toLocaleString("pt-BR")} ({source.percentage}%)
                        </span>
                      </div>
                      <div className="h-2.5 w-full rounded-full bg-white/5 overflow-hidden border border-white/5">
                        <div
                          className="h-full rounded-full transition-all duration-500 shadow-sm"
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
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Distribuição por Dispositivo
                </h4>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-xl bg-white/5 p-3 border border-white/10">
                    <Smartphone className="h-4 w-4 mx-auto text-cyan-400 mb-1" />
                    <div className="text-sm font-extrabold text-white font-mono">{data.devices[0]?.percentage}%</div>
                    <div className="text-[10px] text-slate-400">Celular</div>
                  </div>
                  <div className="rounded-xl bg-white/5 p-3 border border-white/10">
                    <Laptop className="h-4 w-4 mx-auto text-blue-400 mb-1" />
                    <div className="text-sm font-extrabold text-white font-mono">{data.devices[1]?.percentage}%</div>
                    <div className="text-[10px] text-slate-400">Computador</div>
                  </div>
                  <div className="rounded-xl bg-white/5 p-3 border border-white/10">
                    <Radio className="h-4 w-4 mx-auto text-emerald-400 mb-1" />
                    <div className="text-sm font-extrabold text-white font-mono">{data.devices[2]?.percentage}%</div>
                    <div className="text-[10px] text-slate-400">Tablet</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section 2: Top Pages & Chapters (Responsive Accessible Table) */}
        {(activeTab === "overview" || activeTab === "content") && (
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Capítulos e Páginas Mais Lidas
                </h3>
                <p className="text-xs text-slate-400">
                  Métricas de visualização direta e tempo de leitura nos 109 capítulos (Google Analytics 4)
                </p>
              </div>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 border border-white/10">
                {data.topPages.length} páginas mapeadas
              </span>
            </div>

            {/* Accessible Responsive Table Wrapper */}
            <div
              tabIndex={0}
              role="region"
              aria-labelledby="top-pages-table-caption-new"
              className="table-wrapper relative overflow-x-auto max-h-[520px] rounded-2xl border border-white/10"
            >
              <table className="w-full text-left text-sm border-collapse">
                <caption id="top-pages-table-caption-new" className="sr-only">
                  Capítulos e páginas mais visualizadas no portal do Tratado de Cirurgia da Coluna Vertebral
                </caption>
                <thead className="sticky top-0 z-10 bg-slate-950/90 backdrop-blur-md text-xs uppercase font-bold text-slate-400 border-b border-white/10 shadow-lg">
                  <tr>
                    <th scope="col" className="py-3.5 px-4">
                      Capítulo / Página
                    </th>
                    <th scope="col" className="py-3.5 px-4">
                      Categoria
                    </th>
                    <th scope="col" className="py-3.5 px-4 text-right">
                      Visualizações
                    </th>
                    <th scope="col" className="py-3.5 px-4 text-right">
                      Visitantes Únicos
                    </th>
                    <th scope="col" className="py-3.5 px-4 text-right">
                      Tempo Médio
                    </th>
                    <th scope="col" className="py-3.5 px-4 text-right">
                      Rejeição
                    </th>
                    <th scope="col" className="py-3.5 px-4 text-center">
                      Acessar
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 bg-slate-900/30">
                  {data.topPages.map((page, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.04] transition-colors">
                      <th
                        scope="row"
                        className="py-3.5 px-4 font-bold text-white max-w-sm truncate"
                        title={page.title}
                      >
                        <div className="flex flex-col">
                          <span className="truncate">{page.title}</span>
                          <span className="text-xs font-normal text-cyan-300/70 font-mono">
                            {page.path}
                          </span>
                        </div>
                      </th>
                      <td className="py-3.5 px-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
                            page.category === "capitulo"
                              ? "bg-blue-500/10 text-blue-300 border-blue-500/30"
                              : page.category === "debate"
                              ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
                              : page.category === "secao"
                              ? "bg-purple-500/10 text-purple-300 border-purple-500/30"
                              : "bg-white/5 text-slate-300 border-white/10"
                          }`}
                        >
                          {page.category}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right font-extrabold text-white font-mono">
                        {page.views.toLocaleString("pt-BR")}
                      </td>
                      <td className="py-3.5 px-4 text-right text-slate-300 font-mono">
                        {page.uniqueVisitors.toLocaleString("pt-BR")}
                      </td>
                      <td className="py-3.5 px-4 text-right text-emerald-400 font-mono text-xs">
                        {page.avgDuration}
                      </td>
                      <td className="py-3.5 px-4 text-right text-slate-400 font-mono text-xs">
                        {page.bounceRate}
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <Link
                          href={page.path}
                          className="inline-flex items-center justify-center h-8 w-8 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/15 transition-all"
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
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-3.5">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30 shadow-[0_0_20px_rgba(29,185,84,0.3)]">
                  <SpotifyIcon size={26} color="#1DB954" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Audiência no Spotify • &quot;Tratado em Debate&quot;
                  </h3>
                  <p className="text-xs text-slate-400">
                    Episódios em áudio e vídeo com os cirurgiões autores dos capítulos
                  </p>
                </div>
              </div>
              <a
                href="https://open.spotify.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 text-xs font-bold text-emerald-300 hover:bg-emerald-500/20 transition-all shadow-[0_0_15px_rgba(29,185,84,0.2)]"
              >
                Abrir Canal no Spotify <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Episodes List Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.spotifyEpisodes.map((ep) => (
                <div
                  key={ep.id}
                  className="rounded-2xl border border-white/10 bg-slate-950/40 p-5 backdrop-blur-md hover:border-emerald-500/40 hover:shadow-[0_0_25px_rgba(29,185,84,0.15)] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                      <span className="font-bold text-emerald-400 uppercase tracking-wider">
                        Episódio #{ep.episodeNumber} • Capítulo {ep.chapterNumber}
                      </span>
                      <span className="font-mono text-[11px] text-slate-500">{ep.releaseDate}</span>
                    </div>
                    <h4 className="font-bold text-sm text-white line-clamp-2 leading-snug">
                      {ep.title}
                    </h4>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-white/5 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-slate-500">Streams: </span>
                      <strong className="text-white font-mono">{ep.streams.toLocaleString("pt-BR")}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500">Retenção: </span>
                      <strong className="text-emerald-400 font-mono">{ep.completionRate}%</strong>
                    </div>
                    <div>
                      <span className="text-slate-500">Duração: </span>
                      <span className="font-mono text-slate-300">{ep.avgListeningTime}</span>
                    </div>
                    <a
                      href={ep.spotifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-emerald-600/90 hover:bg-emerald-500 px-3 py-1.5 rounded-xl shadow-[0_0_12px_rgba(29,185,84,0.3)] transition-all active:scale-95"
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
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl shadow-xl">
            <h3 className="text-xl font-bold text-white mb-1">Alcance Internacional</h3>
            <p className="text-xs text-slate-400 mb-6">
              Distribuição geográfica dos especialistas que acessam o Tratado de Coluna
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {data.countries.map((c, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-center backdrop-blur-sm"
                >
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {c.country} ({c.code})
                  </div>
                  <div className="text-2xl font-extrabold text-white mt-1.5 font-mono">
                    {c.percentage}%
                  </div>
                  <div className="text-[11px] text-cyan-300/80 font-mono mt-0.5">
                    {c.sessions.toLocaleString("pt-BR")} acessos
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Modern API Config Modal */}
      {showConfigModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="api-modal-title-new"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
        >
          <div className="w-full max-w-xl rounded-3xl border border-white/15 bg-slate-950 p-6 sm:p-8 shadow-2xl space-y-5 text-white">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <AlertCircle className="h-5 w-5 text-cyan-400" />
                <h3 id="api-modal-title-new" className="text-lg font-bold text-white">
                  Conexão Google Analytics 4 & Spotify
                </h3>
              </div>
              <button
                onClick={() => setShowConfigModal(false)}
                className="text-slate-400 hover:text-white text-base font-bold transition-colors"
              >
                ✕
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              O dashboard opera conectado à propriedade GA4 do livro. Para habilitar a extração contínua em tempo real na Vercel, confirme as seguintes variáveis no arquivo <code className="bg-white/10 px-1.5 py-0.5 rounded text-cyan-300 font-mono">.env.local</code> e no painel da Vercel:
            </p>

            <div className="rounded-2xl bg-black/80 border border-white/10 p-5 text-xs font-mono text-emerald-400 space-y-2 overflow-x-auto">
              <div className="text-slate-500"># 1. Google Analytics 4 (Propriedade Oficial)</div>
              <div>GA4_PROPERTY_ID=406694675</div>
              <div>GOOGLE_CLIENT_EMAIL=service-account@xxx.iam.gserviceaccount.com</div>
              <div>GOOGLE_PRIVATE_KEY=&quot;-----BEGIN PRIVATE KEY...&quot;</div>
              <br />
              <div className="text-slate-500"># 2. Spotify Web API (Videocast Oficial)</div>
              <div>SPOTIFY_CLIENT_ID=seu_client_id</div>
              <div>SPOTIFY_CLIENT_SECRET=seu_client_secret</div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowConfigModal(false)}
                className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-xs font-bold text-white hover:brightness-110 transition-all shadow-[0_0_15px_rgba(66,133,244,0.4)]"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
