import { useState } from "react";
import { useFoodRegulatoryNewsStore } from "@/store/useFoodRegulatoryNewsStore";
import {
  Radio,
  Gavel,
  Scale,
  ShieldAlert,
  Search,
  RefreshCw,
  ExternalLink,
  Wheat,
  Milk,
  Flame,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  Layers,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export function FoodRegulatoryRadar() {
  const {
    items,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    isScanning,
    scanLiveFeeds,
    lastScannedAt,
    filteredItems,
  } = useFoodRegulatoryNewsStore();

  const [expandedId, setExpandedId] = useState<string | null>(items[0]?.id || null);

  const fineCount = items.filter((i) => i.actionType === "FINE_PENALTY").length;
  const grainCount = items.filter((i) => i.productCategory === "grain_flour").length;
  const dairyCount = items.filter((i) => i.productCategory === "dairy_paneer").length;
  const babyCount = items.filter((i) => i.productCategory === "baby_food").length;
  const sweetCount = items.filter((i) => i.productCategory === "sugar_confectionery").length;
  const drinkCount = items.filter((i) => i.productCategory === "beverages").length;
  const spiceCount = items.filter((i) => i.productCategory === "spices_condiments").length;

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="regulatory-radar"
      aria-labelledby="radar-heading"
      className="rounded-2xl sm:rounded-3xl border border-red-500/30 bg-gradient-to-br from-red-950/20 via-black to-[#0A0E1A] p-4 sm:p-6 lg:p-8 backdrop-blur-xl shadow-2xl mb-12"
    >
      {/* ─── Header & Live Radar Ping ─── */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
              Live Regulatory Radar Online
            </span>
            <span className="text-[11px] font-mono text-[#8A8F98]">
              Automated FSSAI & CCPA Detection Stream
            </span>
          </div>

          <h2
            id="radar-heading"
            className="text-xl sm:text-3xl font-space font-extrabold text-white tracking-tight uppercase"
          >
            Food Regulatory <span className="text-[#00E5C4]">Watchdog</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#8A8F98] mt-1.5 max-w-3xl leading-relaxed">
            Our automated scanner monitors official government orders, consumer court rulings, and
            food safety crackdowns across India. When a brand gets fined for deceptive labels or
            fake ingredients, it is captured and decoded here in plain English.
          </p>
        </div>

        {/* Live Scan Trigger */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={scanLiveFeeds}
            disabled={isScanning}
            className="flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white transition-all cursor-pointer disabled:opacity-50 touch-manipulation shadow-sm"
            title="Scan live FSSAI and CCPA news feeds"
          >
            <RefreshCw
              className={`w-3.5 h-3.5 text-[#00E5C4] ${isScanning ? "animate-spin" : ""}`}
            />
            <span>{isScanning ? "Scanning Official Feeds..." : "Scan Live Feeds Now"}</span>
          </button>
        </div>
      </div>

      {/* ─── Search & Category Filters ─── */}
      <div className="pt-6 pb-4 space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-xl">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A8F98]" />
          <input
            type="text"
            placeholder="Search brand (Britannia, Bournvita), fine, or rule..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-xs sm:text-sm text-[#EAEAEA] placeholder:text-[#8A8F98] focus:outline-none focus:border-[#00E5C4]/50 focus:bg-white/[0.05] transition-all"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 touch-scroll">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 min-h-[38px] rounded-xl text-xs font-mono transition-all cursor-pointer border ${
              selectedCategory === "all"
                ? "bg-white text-black font-bold border-white"
                : "bg-white/[0.03] text-[#8A8F98] border-white/10 hover:text-white"
            }`}
          >
            <span>All Detected ({items.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory("fines")}
            className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 min-h-[38px] rounded-xl text-xs font-mono transition-all cursor-pointer border ${
              selectedCategory === "fines"
                ? "bg-rose-500 text-white font-bold border-rose-500 shadow-md shadow-rose-500/20"
                : "bg-rose-500/10 text-rose-300 border-rose-500/30 hover:bg-rose-500/20"
            }`}
          >
            <Gavel className="w-3.5 h-3.5" />
            <span>Fines & Penalties ({fineCount})</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory("grain_flour")}
            className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 min-h-[38px] rounded-xl text-xs font-mono transition-all cursor-pointer border ${
              selectedCategory === "grain_flour"
                ? "bg-[#00E5C4] text-black font-bold border-[#00E5C4]"
                : "bg-white/[0.03] text-[#8A8F98] border-white/10 hover:text-white"
            }`}
          >
            <Wheat className="w-3.5 h-3.5" />
            <span>Bread & Flour ({grainCount})</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory("dairy_paneer")}
            className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 min-h-[38px] rounded-xl text-xs font-mono transition-all cursor-pointer border ${
              selectedCategory === "dairy_paneer"
                ? "bg-[#00E5C4] text-black font-bold border-[#00E5C4]"
                : "bg-white/[0.03] text-[#8A8F98] border-white/10 hover:text-white"
            }`}
          >
            <Milk className="w-3.5 h-3.5" />
            <span>Dairy & Paneer ({dairyCount})</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory("baby_food")}
            className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 min-h-[38px] rounded-xl text-xs font-mono transition-all cursor-pointer border ${
              selectedCategory === "baby_food"
                ? "bg-[#00E5C4] text-black font-bold border-[#00E5C4]"
                : "bg-white/[0.03] text-[#8A8F98] border-white/10 hover:text-white"
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Infant Food ({babyCount})</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory("sugar_confectionery")}
            className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 min-h-[38px] rounded-xl text-xs font-mono transition-all cursor-pointer border ${
              selectedCategory === "sugar_confectionery"
                ? "bg-[#00E5C4] text-black font-bold border-[#00E5C4]"
                : "bg-white/[0.03] text-[#8A8F98] border-white/10 hover:text-white"
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Honey & Sweets ({sweetCount})</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory("beverages")}
            className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 min-h-[38px] rounded-xl text-xs font-mono transition-all cursor-pointer border ${
              selectedCategory === "beverages"
                ? "bg-[#00E5C4] text-black font-bold border-[#00E5C4]"
                : "bg-white/[0.03] text-[#8A8F98] border-white/10 hover:text-white"
            }`}
          >
            <Radio className="w-3.5 h-3.5" />
            <span>Drinks & Juices ({drinkCount})</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory("spices_condiments")}
            className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 min-h-[38px] rounded-xl text-xs font-mono transition-all cursor-pointer border ${
              selectedCategory === "spices_condiments"
                ? "bg-[#00E5C4] text-black font-bold border-[#00E5C4]"
                : "bg-white/[0.03] text-[#8A8F98] border-white/10 hover:text-white"
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Spices ({spiceCount})</span>
          </button>
        </div>
      </div>

      {/* ─── Detected News Stories Feed ─── */}
      <div className="mt-4 space-y-4">
        {filteredItems.length === 0 ? (
          <div className="p-8 text-center rounded-2xl border border-white/5 bg-white/[0.02]">
            <p className="text-sm text-[#8A8F98] font-mono">
              No regulatory reports found matching your current filter. Try searching for
              "Britannia", "Paneer", or "Sugar".
            </p>
          </div>
        ) : (
          filteredItems.map((item) => {
            const isExpanded = expandedId === item.id;
            const dateStr = item.publishedAt
              ? new Date(item.publishedAt).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              : "Recent Regulatory Order";

            return (
              <article
                key={item.id}
                className="rounded-2xl border border-white/10 bg-black/60 hover:border-white/20 transition-all overflow-hidden"
              >
                {/* Header Row */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-3 cursor-pointer select-none"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Scale className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30">
                          {item.penaltyAmount}
                        </span>
                        <span className="text-[10px] font-mono text-teal-400 font-semibold">
                          {item.authority}
                        </span>
                        <span className="text-[10px] font-mono text-[#8A8F98] flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {dateStr}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
                    <span className="text-xs font-mono text-[#8A8F98]">
                      {isExpanded ? "Hide Details" : "Read Breakdown"}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-[#00E5C4]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#8A8F98]" />
                    )}
                  </div>
                </div>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="px-4 sm:px-5 pb-5 pt-2 border-t border-white/5 space-y-4">
                    {/* The Front Claim vs Government Reality */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-300 block mb-1">
                          ❌ What the Front Packet Claimed:
                        </span>
                        <p className="text-xs text-white/90 leading-relaxed">
                          {item.deceptiveClaim}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-teal-500/[0.04] border border-teal-500/30">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-300 block mb-1">
                          ⚖️ What Official Lab Audits Proved:
                        </span>
                        <p className="text-xs text-teal-100 leading-relaxed">
                          {item.investigationFinding}
                        </p>
                      </div>
                    </div>

                    {/* Kitchen Table Plain Language Health Impact */}
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1 flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                        Why This Matters For Your Body (Plain Language):
                      </h4>
                      <p className="text-xs text-[#EAEAEA] leading-relaxed">
                        {item.kitchenTableExplanation}
                      </p>
                    </div>

                    {/* Actionable Kitchen Checklist */}
                    <div className="p-3.5 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/25 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-emerald-300 block mb-0.5">
                          What to Check Before You Buy:
                        </span>
                        <p className="text-xs text-emerald-100/90 leading-relaxed">
                          {item.actionableAdvice}
                        </p>
                      </div>
                    </div>

                    {/* Source & Citation Footer */}
                    <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#8A8F98]">
                      <span>Source: {item.source}</span>
                      {item.sourceUrl && (
                        <a
                          href={item.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#00E5C4] hover:underline"
                        >
                          <span>Read Original Media Report</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </article>
            );
          })
        )}
      </div>
    </section>
  );
}
