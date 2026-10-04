import { useState } from "react";
import { useGreyMarketStore, type MoleculeEntry } from "@/store/useGreyMarketStore";
import greyMarketDb from "@/data/grey_market_db.json";
import { CheckCircle2, AlertTriangle, ScanSearch } from "lucide-react";

export function PrescriptionScanner() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<MoleculeEntry[] | null>(null);
  const setSelectedMolecule = useGreyMarketStore((s) => s.setSelectedMolecule);

  const handleScan = () => {
    if (!input.trim()) {
      setResults(null);
      return;
    }

    const ingredients = input
      .split(",")
      .map((i) => i.trim().toLowerCase())
      .filter(Boolean);
    const matches: MoleculeEntry[] = [];
    const db = greyMarketDb as unknown as MoleculeEntry[];

    for (const entry of db) {
      const entryMolecule = entry.molecule.toLowerCase();
      const entryBrands = entry.brands.map((b: string) => b.toLowerCase());

      const isMatch = ingredients.some((ingredient) => {
        if (ingredient.includes(entryMolecule) || entryMolecule.includes(ingredient)) return true;
        return entryBrands.some(
          (brand: string) => ingredient.includes(brand) || brand.includes(ingredient),
        );
      });

      if (isMatch) {
        matches.push(entry);
      }
    }

    setResults(matches);
  };

  const getRiskColor = (level: string) => {
    if (level === "CRITICAL") return "text-[#FF3B30] border-[#FF3B30]/30 bg-[#FF3B30]/10";
    if (level === "HIGH") return "text-[#FF9500] border-[#FF9500]/30 bg-[#FF9500]/10";
    return "text-[#0A84FF] border-[#0A84FF]/30 bg-[#0A84FF]/10";
  };

  return (
    <div className="w-full h-full bg-[#0F0F0F] border border-[#222222] rounded-lg p-5 flex flex-col overflow-hidden">
      <div className="flex items-center gap-3 mb-3 shrink-0">
        <ScanSearch className="w-5 h-5 text-[#EAEAEA]" />
        <div>
          <h2 className="text-lg font-semibold text-[#EAEAEA] font-space">
            Regulatory Watchlist Search
          </h2>
          <p className="text-xs text-[#8A8F98]">
            Cross-reference ingredient names against public statutory alerts and recall notices.
          </p>
        </div>
      </div>

      {/* Educational & Non-Diagnostic Disclaimer */}
      <div className="mb-4 p-3 bg-amber-500/10 border border-amber-500/20 rounded-md text-xs text-amber-200/90 font-mono leading-relaxed shrink-0">
        <strong className="text-amber-300 uppercase tracking-wider block mb-1">
          ⚠️ Educational Registry Match Only
        </strong>
        Performs exact text matching against public regulatory advisories (FDA, EFSA, FSSAI). Does
        NOT evaluate clinical efficacy, drug-drug interactions, or personal safety. A "no matches"
        result does NOT confirm clinical safety or appropriateness. Never start, stop, or alter
        prescribed medication regimens without consulting your prescribing physician.
      </div>

      <textarea
        className="w-full bg-[#030303] border border-[#222222] rounded-md p-3 text-[#EAEAEA] placeholder:text-[#8A8F98] focus:outline-none focus:border-[#FC3D21] font-mono text-sm transition-colors min-h-[90px] shrink-0"
        placeholder="Type ingredient or brand names from packaging, separated by commas (e.g. Nimesulide, Potassium Bromate, Konjac)."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={handleScan}
        className="mt-3 px-4 py-2 bg-[#FC3D21]/20 text-[#FC3D21] border border-[#FC3D21]/50 rounded-md font-medium hover:bg-[#FC3D21]/30 transition-colors w-full shrink-0"
      >
        Check Against Regulatory Watchlists
      </button>

      {results !== null && (
        <div className="mt-6 space-y-3 flex-1 overflow-y-auto custom-scrollbar pr-1">
          {results.length === 0 ? (
            <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/30 text-green-400 rounded-md">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-medium text-sm">
                No flagged substances detected in this scan.
              </span>
            </div>
          ) : (
            results.map((match, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-md border flex flex-col gap-4 ${getRiskColor(match.risk)}`}
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold font-space uppercase tracking-wide">
                      {match.brands.join(", ")}
                    </h3>
                    <div className="text-xs opacity-90 mt-1 font-mono">
                      Chemical Name: {match.molecule} | Risk: {match.risk} | India:{" "}
                      {match.status_india}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMolecule(match)}
                  className="shrink-0 w-full px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded text-xs font-semibold uppercase tracking-wider transition-colors text-center"
                >
                  View Full Profile
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
