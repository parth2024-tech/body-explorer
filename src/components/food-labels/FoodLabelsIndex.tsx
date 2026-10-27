import { useEffect, useState } from "react";
import { useFoodLabelStore } from "@/store/useFoodLabelStore";
import {
  AlertTriangle,
  Printer,
  Search,
  Shuffle,
  Scale,
  Gavel,
  Wheat,
  Coffee,
  Flame,
  Radio,
  Layers,
} from "lucide-react";
import { FoodLabelCard } from "./FoodLabelCard";
import { FoodRegulatoryRadar } from "./FoodRegulatoryRadar";

export function FoodLabelsIndex() {
  const [activeView, setActiveView] = useState<"all" | "radar" | "xray">("all");
  const {
    entries,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    filteredEntries,
    shuffleEntries,
  } = useFoodLabelStore();

  useEffect(() => {
    shuffleEntries();
  }, [shuffleEntries]);

  const handlePrint = () => {
    window.print();
  };

  const regulatoryCount = entries.filter((e) => !!e.regulatoryCase).length;
  const grainCount = entries.filter((e) => e.category === "grain_flour").length;
  const sugarCount = entries.filter((e) => e.category === "sugar_sweetener").length;
  const beverageCount = entries.filter((e) => e.category === "beverage_health").length;

  return (
    <div className="min-h-screen bg-[#030303] text-[#EAEAEA] font-sans selection:bg-[#FC3D21]/30">
      {/* Disclaimer Banner */}
      <div className="w-full bg-[#FC3D21]/10 border-b border-[#FC3D21]/30 px-4 py-3 flex items-start gap-3 sm:items-center justify-center print:hidden">
        <AlertTriangle className="w-5 h-5 text-[#FC3D21] shrink-0 mt-0.5 sm:mt-0" />
        <p className="text-xs font-mono text-[#FC3D21] leading-snug max-w-5xl">
          <strong className="uppercase tracking-wider">
            Statutory Nutritional & Regulatory Notice:
          </strong>{" "}
          This educational index evaluates statutory labeling criteria (Codex Alimentarius, US FDA
          21 CFR 101, and FSSAI Food Safety and Standards Regulations) regarding marketing claims
          like "Natural", "Multigrain", or "Zero Sugar". It analyzes generalized consumer marketing
          conventions and does not constitute individualized dietary prescription or brand dispute
          adjudication. Always read the complete mandatory ingredient declaration.
        </p>
      </div>

      <div className="max-w-[1600px] mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 relative">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-space font-extrabold uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#8A8F98]">
              Food Label <span className="text-[#00E5C4]">X-Ray</span>
            </h1>
            <p className="text-[#8A8F98] mt-3 font-mono text-sm max-w-2xl leading-relaxed">
              Supermarket shelves are filled with deceptive "health" claims. Learn how to X-Ray the
              front label and read the hidden chemical truths on the back of the packet. Click
              "Scan" on any label below to reveal its biological impact.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 relative z-10 w-full sm:w-auto">
            {/* Search Bar */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A8F98]" />
              <input
                type="text"
                placeholder="Search claims, brands, laws..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-base sm:text-sm text-[#EAEAEA] placeholder:text-[#8A8F98] focus:outline-none focus:border-[#00E5C4]/50 focus:bg-white/[0.05] transition-all"
              />
            </div>

            <button
              onClick={shuffleEntries}
              className="shrink-0 flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] bg-white/5 hover:bg-white/10 hover:border-[#00E5C4]/40 border border-white/10 rounded-xl text-sm font-mono text-[#EAEAEA] transition-colors print:hidden cursor-pointer touch-manipulation"
              title="Shuffle labels order"
            >
              <Shuffle className="w-4 h-4 text-[#00E5C4]" /> Shuffle Labels
            </button>

            <button
              onClick={handlePrint}
              className="shrink-0 flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-mono transition-colors print:hidden touch-manipulation"
            >
              <Printer className="w-4 h-4" /> Print Guide
            </button>
          </div>
        </header>

        {/* ─── View Switcher: Live Regulatory Radar vs Deceptive Label X-Ray ─── */}
        <div className="mb-8 flex items-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 w-fit print:hidden overflow-x-auto touch-scroll">
          <button
            type="button"
            onClick={() => setActiveView("all")}
            className={`flex items-center gap-2 px-4 py-2 min-h-[40px] rounded-xl text-xs font-mono font-bold transition-all cursor-pointer shrink-0 ${
              activeView === "all"
                ? "bg-[#00E5C4] text-black shadow-md shadow-[#00E5C4]/20"
                : "text-[#8A8F98] hover:text-white"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Full Watchdog (Both)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveView("radar")}
            className={`flex items-center gap-2 px-4 py-2 min-h-[40px] rounded-xl text-xs font-mono font-bold transition-all cursor-pointer shrink-0 ${
              activeView === "radar"
                ? "bg-rose-500 text-white shadow-md shadow-rose-500/20"
                : "text-[#8A8F98] hover:text-white"
            }`}
          >
            <Radio className="w-3.5 h-3.5" />
            <span>Live Regulatory Radar</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveView("xray")}
            className={`flex items-center gap-2 px-4 py-2 min-h-[40px] rounded-xl text-xs font-mono font-bold transition-all cursor-pointer shrink-0 ${
              activeView === "xray"
                ? "bg-white text-black shadow-md"
                : "text-[#8A8F98] hover:text-white"
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Deceptive Label X-Ray ({entries.length})</span>
          </button>
        </div>

        {/* ─── LIVE REGULATORY RADAR (Automated Live Stream) ─── */}
        {(activeView === "all" || activeView === "radar") && <FoodRegulatoryRadar />}

        {/* ─── SPOTLIGHT BANNER & X-RAY SECTION ─── */}
        {(activeView === "all" || activeView === "xray") && (
          <div>
            <section
              aria-labelledby="regulatory-spotlight-heading"
              className="mb-8 rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-950/20 via-black to-[#0A0E1A] p-4 sm:p-6 backdrop-blur-xl print:hidden shadow-xl"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Gavel className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30 font-bold">
                        Statutory Legal Crackdowns
                      </span>
                      <span className="text-[10px] font-mono text-[#8A8F98]">
                        CCPA & FSSAI Enforcement Orders
                      </span>
                    </div>
                    <h2
                      id="regulatory-spotlight-heading"
                      className="text-base sm:text-lg font-bold text-white tracking-tight"
                    >
                      Britannia Fined ₹1 Lakh for 62% Atta Bread • Bournvita De-Listed from "Health
                      Drinks"
                    </h2>
                    <p className="text-xs sm:text-sm text-[#8A8F98] mt-1 max-w-3xl leading-relaxed">
                      Indian authorities (Central Consumer Protection Authority & FSSAI) are
                      actively cracking down on deceptive food claims. Brands can no longer write
                      "100% Whole Wheat" while hiding 38% refined maida, call sugary powders "Health
                      Drinks", or brand fruit concentrates as "100% Real Juice".
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedCategory(selectedCategory === "regulatory" ? "all" : "regulatory")
                  }
                  className={`shrink-0 flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl text-xs font-mono font-bold transition-all cursor-pointer border ${
                    selectedCategory === "regulatory"
                      ? "bg-[#00E5C4] text-black border-[#00E5C4] shadow-md shadow-[#00E5C4]/20"
                      : "bg-red-500/10 hover:bg-red-500/20 text-red-200 border-red-500/30 hover:border-red-500/60"
                  }`}
                >
                  <Scale className="w-4 h-4" />
                  <span>
                    {selectedCategory === "regulatory"
                      ? "Showing 8 Regulatory Crackdowns (Reset)"
                      : `Filter to ${regulatoryCount} Landmark Government Rulings`}
                  </span>
                </button>
              </div>
            </section>

            {/* ─── Category Filter Chips ─── */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 print:hidden touch-scroll">
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className={`shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer border ${
                  selectedCategory === "all"
                    ? "bg-white text-black font-bold border-white"
                    : "bg-white/[0.03] text-[#8A8F98] border-white/10 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                <span>All Claims ({entries.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedCategory("regulatory")}
                className={`shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer border ${
                  selectedCategory === "regulatory"
                    ? "bg-red-500 text-white font-bold border-red-500 shadow-md shadow-red-500/20"
                    : "bg-red-500/10 text-red-300 border-red-500/30 hover:bg-red-500/20"
                }`}
              >
                <Gavel className="w-3.5 h-3.5" />
                <span>Government Fines & Orders ({regulatoryCount})</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedCategory("grains")}
                className={`shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer border ${
                  selectedCategory === "grains"
                    ? "bg-[#00E5C4] text-black font-bold border-[#00E5C4]"
                    : "bg-white/[0.03] text-[#8A8F98] border-white/10 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                <Wheat className="w-3.5 h-3.5" />
                <span>Whole Wheat & Flour Dilution ({grainCount})</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedCategory("sugar")}
                className={`shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer border ${
                  selectedCategory === "sugar"
                    ? "bg-[#00E5C4] text-black font-bold border-[#00E5C4]"
                    : "bg-white/[0.03] text-[#8A8F98] border-white/10 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                <span>Sugar & Sweeteners ({sugarCount})</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedCategory("beverage")}
                className={`shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer border ${
                  selectedCategory === "beverage"
                    ? "bg-[#00E5C4] text-black font-bold border-[#00E5C4]"
                    : "bg-white/[0.03] text-[#8A8F98] border-white/10 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                <Coffee className="w-3.5 h-3.5" />
                <span>Drinks & Juices ({beverageCount})</span>
              </button>
            </div>

            {/* Educational Note when Regulatory Category is Selected */}
            {selectedCategory === "regulatory" && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-200 leading-relaxed font-mono print:hidden">
                <strong className="text-white block mb-1">
                  ⚖️ What is a Deceptive Food Claim Under Indian Law?
                </strong>
                Under Section 2(28) and Section 89 of the Consumer Protection Act, 2019 and FSSAI
                Food Safety and Standards (Advertising and Display) Regulations, 2020: A
                manufacturer violates the law when packaging claims ("100% Whole Wheat", "Health
                Drink", "Real Fruit Juice") contradict the Quantitative Ingredient Declaration
                (QUID) on the back. The CCPA can impose fines up to ₹10 Lakh for first offences and
                order immediate product recalls.
              </div>
            )}

            {/* X-Ray Grid */}
            <div className="print:hidden">
              {filteredEntries.length === 0 ? (
                <div className="w-full border border-white/5 rounded-xl border-dashed flex flex-col items-center justify-center text-center p-16 bg-white/[0.02]">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                    <AlertTriangle className="w-8 h-8 text-[#8A8F98]" />
                  </div>
                  <h3 className="text-xl font-space font-bold text-[#EAEAEA] mb-2 uppercase tracking-wide">
                    No Deceptive Claims Found
                  </h3>
                  <p className="text-[#8A8F98] text-sm max-w-md font-mono">
                    Try searching for something else like "Sugar", "Multigrain", or "Protein".
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-max">
                  {filteredEntries.map((entry) => (
                    <div key={entry.id} className="h-fit">
                      <FoodLabelCard label={entry} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Print-only layout */}
      <div className="hidden print:block p-8 text-black bg-white min-h-screen">
        <h1 className="text-3xl font-bold border-b-2 border-black pb-4 mb-6">
          Food Label X-Ray - Survival Guide
        </h1>
        {entries.map((entry) => (
          <div key={entry.id} className="mb-8 border-b border-gray-300 pb-6">
            <h2 className="text-xl font-bold uppercase mb-2">Claim: "{entry.marketing_claim}"</h2>
            <p className="mb-2">
              <strong>Hidden Truth:</strong> {entry.real_meaning}
            </p>
            <p className="mb-2">
              <strong>Biological Impact:</strong> {entry.biological_impact}
            </p>
            <p className="mb-2">
              <strong>How to Spot:</strong> {entry.how_to_spot}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Found in:</strong> {entry.common_products.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
