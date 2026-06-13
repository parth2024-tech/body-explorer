import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useBodyStore } from "@/store/useBodyStore";
import {
  FACTS,
  MYTHS,
  REMEDIES,
  HACKS,
  BODY_MARVELS,
  SENSORY_FACTS,
  QA_ENTRIES,
  BODY_PARTS,
  TRANSLATIONS,
} from "@/data/content";

export const Route = createFileRoute("/library")({
  head: () => ({
    meta: [
      { title: "Library — The Living Body Atlas" },
      { name: "description", content: "Explore anatomy facts, natural remedies, seasonal hacks, and health myths." }
    ]
  }),
  component: LibraryPage,
});

function LibraryPage() {
  const { language, bookmarks, addBookmark, removeBookmark, isBookmarked, addHistoryEntry } = useBodyStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"all" | "remedies" | "hacks" | "myths" | "marvels">("all");
  const [triedCounts, setTriedCounts] = useState<Record<string, number>>({});
  const [expandedMythId, setExpandedMythId] = useState<string | null>(null);

  useEffect(() => {
    addHistoryEntry("/library");
  }, []);

  const t = (key: keyof typeof TRANSLATIONS.en) => {
    const dict = TRANSLATIONS[language] || TRANSLATIONS.en;
    return (dict as any)[key] || (TRANSLATIONS.en as any)[key] || key;
  };

  // Pre-seed mock tried counts on client side
  useEffect(() => {
    const counts: Record<string, number> = {};
    HACKS.forEach((h) => {
      counts[h.id] = Math.floor(Math.random() * 2000) + 1200;
    });
    setTriedCounts(counts);
  }, []);

  const handleTryAction = (actionId: string) => {
    setTriedCounts((prev) => ({
      ...prev,
      [actionId]: (prev[actionId] || 0) + 1,
    }));
  };

  // Filter content
  const filteredRemedies = REMEDIES.filter((r) => {
    const matchesSearch =
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.ailment.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !selectedTag || r.evidenceRating === selectedTag;
    return matchesSearch && matchesTag;
  });

  const filteredHacks = HACKS.filter((h) => {
    return (
      h.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.practice.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const filteredMyths = MYTHS.filter((m) => {
    return (
      m.myth.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.reality.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const allTags = ["studied", "traditional", "anecdotal", "unproven"];

  return (
    <div className="mx-auto max-w-7xl px-5 py-8 page-enter">
      {/* Header section */}
      <div className="mb-10 text-center md:text-left">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00E5C4]">
          {t("library")}
        </span>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-[#E8E0D5] sm:text-5xl">
          Core Content <span className="gradient-text">Engine</span>
        </h1>
        <p className="mt-4 max-w-2xl text-[#8B8FA3]">
          Browse evidence-based natural remedies, ancient healing arts, posture checks, body sensory anomalies, and myth-busting sciences.
        </p>
      </div>

      {/* Global Search Bar */}
      <div className="relative mb-8 max-w-2xl">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t("searchPlaceholder")}
          className="w-full rounded-2xl border border-border bg-[#141826]/80 px-6 py-4 text-base text-[#E8E0D5] placeholder-[#8B8FA3] outline-none transition-all focus:border-[#00E5C4]/50 focus:shadow-[0_0_20px_rgba(0,229,196,0.15)]"
        />
        <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[#8B8FA3] text-xl">🔍</span>
      </div>

      {/* Seasonal Alert Widget */}
      <div className="mb-10 rounded-2xl border border-[#F5A623]/20 bg-gradient-to-r from-[#141826] to-[#1E2028] p-6 shadow-lg">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🌦️</span>
          <div>
            <h3 className="font-bold text-[#F5A623]">Seasonal Body Tuning</h3>
            <p className="mt-1 text-sm text-[#8B8FA3]">
              Current Climate Transition Advice: Hydrate joint cartilages dynamically. High barometric fluctuations can increase synovial fluid pressure, leading to knee twinges. Keep joints warm and double up on liquid intake.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-8 flex gap-2 overflow-x-auto border-b border-border/40 pb-2 scrollbar-none">
        {(["all", "remedies", "hacks", "myths", "marvels"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition-all ${
              activeTab === tab
                ? "bg-[#00E5C4]/15 text-[#00E5C4] border border-[#00E5C4]/30"
                : "text-[#8B8FA3] hover:text-[#E8E0D5]"
            }`}
          >
            {tab === "all" ? "All Discoveries" : tab}
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left/Middle Column: Content Cards */}
        <div className="lg:col-span-2 space-y-8">
          {/* Remedies Section */}
          {(activeTab === "all" || activeTab === "remedies") && (
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#E8E0D5]">Ancient & Modern Remedies</h2>
                <div className="flex flex-wrap gap-1.5">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                      className={`rounded-md px-2.5 py-1 text-xs font-semibold uppercase tracking-wider transition-all ${
                        selectedTag === tag
                          ? "bg-[#00E5C4] text-[#0A0E1A]"
                          : "bg-[#1E2340] text-[#8B8FA3] hover:text-[#E8E0D5]"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {filteredRemedies.length === 0 ? (
                <p className="text-sm text-[#8B8FA3]">No remedies match your search.</p>
              ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {filteredRemedies.map((remedy) => (
                    <motion.div
                      layout
                      key={remedy.id}
                      className="rounded-xl border border-border bg-[#111525] p-5 transition-all hover:border-[#00E5C4]/30"
                    >
                      <div className="flex justify-between items-start">
                        <span className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                          remedy.evidenceRating === "studied" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                          remedy.evidenceRating === "traditional" ? "bg-purple-500/10 text-purple-400 border border-purple-500/20" :
                          "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        }`}>
                          {remedy.evidenceRating} evidence
                        </span>
                        <button
                          onClick={() => isBookmarked(remedy.id) ? removeBookmark(remedy.id) : addBookmark(remedy.id)}
                          className="text-[#8B8FA3] hover:text-[#00E5C4]"
                        >
                          {isBookmarked(remedy.id) ? "❤️" : "🤍"}
                        </button>
                      </div>
                      <h3 className="mt-3 font-bold text-[#E8E0D5]">{remedy.name}</h3>
                      <p className="mt-1 text-xs text-[#F5A623]">Target: {remedy.ailment}</p>
                      <p className="mt-3 text-sm text-[#8B8FA3]">{remedy.description}</p>
                      <div className="mt-4 border-t border-border/40 pt-3 text-[11px] text-[#8B8FA3]">
                        <span className="font-bold text-[#00E5C4]">Scientific Base:</span> {remedy.evidenceDetails}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Health Hacks Section */}
          {(activeTab === "all" || activeTab === "hacks") && (
            <div className="pt-6">
              <h2 className="mb-4 text-2xl font-bold text-[#E8E0D5]">Home & Natural Hacks</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {filteredHacks.map((hack) => (
                  <div key={hack.id} className="rounded-xl border border-border bg-[#111525] p-5">
                    <h3 className="font-bold text-[#E8E0D5]">{hack.title}</h3>
                    <p className="mt-2 text-sm text-[#8B8FA3]">{hack.practice}</p>
                    <div className="mt-3 rounded-lg bg-[#00E5C4]/5 p-3 text-xs text-[#00E5C4] border border-[#00E5C4]/10">
                      <strong>How it works:</strong> {hack.scienceBasis}
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <button
                        onClick={() => handleTryAction(hack.id)}
                        className="rounded-full bg-[#00E5C4]/10 px-4 py-1.5 text-xs font-semibold text-[#00E5C4] transition-all hover:bg-[#00E5C4]/25"
                      >
                        ⚡ Done it!
                      </button>
                      <span className="text-[11px] text-[#8B8FA3]">
                        {triedCounts[hack.id] || 0} tried this today
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Myths Section */}
          {(activeTab === "all" || activeTab === "myths") && (
            <div className="pt-6">
              <h2 className="mb-4 text-2xl font-bold text-[#E8E0D5]">{t("myths")}</h2>
              <div className="space-y-3">
                {filteredMyths.map((myth) => {
                  const isExpanded = expandedMythId === myth.id;
                  return (
                    <div
                      key={myth.id}
                      onClick={() => setExpandedMythId(isExpanded ? null : myth.id)}
                      className="cursor-pointer rounded-xl border border-border bg-[#111525] p-5 transition-all hover:border-[#6B4FA0]/40"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="font-bold text-[#E54D4D] flex items-center gap-2">
                          ❌ Myth: <span className="text-[#E8E0D5] font-medium">{myth.myth}</span>
                        </h3>
                        <span className="text-[#8B8FA3] text-sm">{isExpanded ? "▲" : "▼"}</span>
                      </div>
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 border-t border-border/40 pt-4 text-sm text-[#8B8FA3]">
                              <strong className="text-[#00E5C4] block mb-1">✅ Science Truth:</strong>
                              {myth.reality}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Weekly Marvels Section */}
          {(activeTab === "all" || activeTab === "marvels") && (
            <div className="pt-6">
              <h2 className="mb-4 text-2xl font-bold text-[#E8E0D5]">Body Marvels (Deep Dives)</h2>
              {BODY_MARVELS.map((marvel) => (
                <div key={marvel.id} className="rounded-xl border border-border bg-[#111525] p-6">
                  <span className="rounded bg-[#6B4FA0]/20 px-2 py-0.5 text-xs font-bold text-[#A855F7] uppercase tracking-wider">
                    Weekly Deep-Dive
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-[#E8E0D5]">{marvel.title}</h3>
                  <p className="mt-2 text-sm text-[#8B8FA3] italic">{marvel.introduction}</p>
                  <div className="mt-6 space-y-4">
                    {marvel.sections.map((sect, i) => (
                      <div key={i} className="rounded-lg bg-[#0A0E1A] p-4 border border-border/40">
                        <h4 className="font-bold text-[#00E5C4]">{sect.heading}</h4>
                        <p className="mt-1 text-sm text-[#8B8FA3]">{sect.body}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-sm text-[#8B8FA3] border-l-2 border-[#00E5C4] pl-4">
                    {marvel.conclusion}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Bookmarks, Sensory Facts & Details */}
        <div className="space-y-8">
          {/* Sensory Facts ("Did You Feel That?") */}
          <div className="rounded-xl border border-border bg-[#141826] p-5">
            <h3 className="text-lg font-bold text-[#00E5C4] mb-4">Did You Feel That?</h3>
            <div className="space-y-4">
              {SENSORY_FACTS.map((sf) => (
                <div key={sf.id} className="rounded-lg bg-[#0d101d] p-4 border border-border/40">
                  <h4 className="font-bold text-[#E8E0D5] text-sm">❓ {sf.sensation}</h4>
                  <p className="mt-1.5 text-xs text-[#8B8FA3]">{sf.cause}</p>
                  <div className="mt-3 text-xs text-[#F5A623] bg-[#F5A623]/5 p-2 rounded border border-[#F5A623]/10">
                    💡 <strong>Tip:</strong> {sf.tip}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bookmarks Section */}
          <div className="rounded-xl border border-border bg-[#141826] p-5">
            <h3 className="text-lg font-bold text-[#E8E0D5] mb-4">{t("bookmarks")}</h3>
            {bookmarks.length === 0 ? (
              <p className="text-xs text-[#8B8FA3]">No saved remedies or facts yet.</p>
            ) : (
              <div className="space-y-2">
                {bookmarks.map((bId) => {
                  const remedy = REMEDIES.find((r) => r.id === bId);
                  const fact = FACTS.find((f) => f.id === bId);
                  return (
                    <div key={bId} className="flex items-center justify-between bg-[#111525] p-3 rounded-lg border border-border/40">
                      <div className="truncate max-w-[80%]">
                        <p className="text-xs font-bold text-[#00E5C4] truncate">
                          {remedy ? remedy.name : "Saved Fact"}
                        </p>
                        <p className="text-[10px] text-[#8B8FA3] truncate">
                          {remedy ? remedy.ailment : fact ? fact.text : "Content item"}
                        </p>
                      </div>
                      <button
                        onClick={() => removeBookmark(bId)}
                        className="text-xs text-[#E54D4D] hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Medical review notification */}
          <div className="rounded-xl border border-border/40 bg-[#141826] p-4 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
              🛡️ {t("medicalReviewed")}
            </span>
            <p className="mt-2 text-[10px] text-[#8B8FA3]">
              Every article and remedy is cross-referenced with medical databases (NLM, PubMed) and reviewed by board-certified physicians.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
