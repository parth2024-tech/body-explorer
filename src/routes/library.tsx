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
      r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (r.genZContext && r.genZContext.toLowerCase().includes(searchQuery.toLowerCase()));
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
        <span className="text-xs font-bold uppercase tracking-widest text-[#FC3D21]">
          {t("library")}
        </span>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-[#EAEAEA] sm:text-5xl">
          Core Content <span className="gradient-text">Engine</span>
        </h1>
        <p className="mt-4 max-w-2xl text-[#8A8F98]">
          Browse evidence-based natural remedies, ancient healing arts, posture checks, body sensory anomalies, and myth-busting sciences.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Main Content Area */}
        <div className="lg:col-span-3">
          {/* Navigation Tabs */}
          <div className="mb-6 border-b border-border">
            <div className="flex flex-wrap gap-2 pb-px">
              {(["all", "remedies", "hacks", "myths", "marvels"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setSelectedTag(null);
                  }}
                  className={`border-b-2 px-4 py-2 text-sm font-semibold transition-all ${
                    activeTab === tab
                      ? "border-[#FC3D21] text-[#EAEAEA]"
                      : "border-transparent text-[#8A8F98] hover:text-[#EAEAEA]"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Search bar and Filters */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <input
              type="text"
              placeholder="Search content engine..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-border bg-[#0D0D0D] px-4 py-3 text-sm text-[#EAEAEA] placeholder-[#8A8F98]/50 focus:border-[#FC3D21] focus:outline-none"
            />
          </div>

          {/* Remedies Section */}
          {(activeTab === "all" || activeTab === "remedies") && (
            <div className="mb-12">
              <div className="mb-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <h2 className="text-2xl font-bold text-[#EAEAEA]">Natural Remedies</h2>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedTag(null)}
                    className={`rounded-full px-3.5 py-1 text-xs font-semibold border transition-all ${
                      !selectedTag
                        ? "bg-[#FC3D21] text-white border-transparent"
                        : "bg-transparent text-[#8A8F98] border-border hover:border-[#8A8F98]/50"
                    }`}
                  >
                    All Evidence
                  </button>
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className={`rounded-full px-3.5 py-1 text-xs font-semibold border transition-all ${
                        selectedTag === tag
                          ? "bg-[#FC3D21] text-white border-transparent"
                          : "bg-transparent text-[#8A8F98] border-border hover:border-[#8A8F98]/50"
                      }`}
                    >
                      {tag.charAt(0).toUpperCase() + tag.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {filteredRemedies.length === 0 ? (
                <p className="text-sm text-[#8A8F98]">No remedies match your search.</p>
              ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {filteredRemedies.map((remedy) => (
                    <motion.div
                      layout
                      key={remedy.id}
                      className="rounded-xl border border-border bg-[#0D0D0D] p-5 transition-all hover:border-[#FC3D21]/30 flex flex-col justify-between"
                    >
                      <div>
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
                            className="text-[#8A8F98] hover:text-[#FC3D21]"
                          >
                            {isBookmarked(remedy.id) ? "❤️" : "🤍"}
                          </button>
                        </div>
                        <h3 className="mt-3 font-bold text-[#EAEAEA]">{remedy.name}</h3>
                        <p className="mt-1 text-xs text-[#F5A623]">Target: {remedy.ailment}</p>
                        <p className="mt-3 text-sm text-[#8A8F98]">{remedy.description}</p>
                        {remedy.genZContext && (
                          <div className="mt-3.5 rounded-lg bg-[#FC3D21]/5 border border-[#FC3D21]/10 p-3 text-xs text-[#EAEAEA]/90">
                            <span className="font-bold text-[#FC3D21]">Gen Z Context:</span> {remedy.genZContext}
                          </div>
                        )}
                      </div>
                      <div className="mt-4 border-t border-border/40 pt-3 text-[11px] text-[#8A8F98]">
                        <span className="font-bold text-[#FC3D21]">Scientific Base:</span> {remedy.evidenceDetails}
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
              <h2 className="mb-4 text-2xl font-bold text-[#EAEAEA]">Home & Natural Hacks</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {filteredHacks.map((hack) => (
                  <div key={hack.id} className="rounded-xl border border-border bg-[#0D0D0D] p-5">
                    <h3 className="font-bold text-[#EAEAEA]">{hack.title}</h3>
                    <p className="mt-2 text-sm text-[#8A8F98]">{hack.practice}</p>
                    <div className="mt-3 rounded-lg bg-[#FC3D21]/5 p-3 text-xs text-[#FC3D21] border border-[#FC3D21]/10">
                      <strong>How it works:</strong> {hack.scienceBasis}
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <button
                        onClick={() => handleTryAction(hack.id)}
                        className="rounded-full bg-[#FC3D21]/10 px-4 py-1.5 text-xs font-semibold text-[#FC3D21] transition-all hover:bg-[#FC3D21]/25"
                      >
                        ⚡ Done it!
                      </button>
                      <span className="text-[11px] text-[#8A8F98]">
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
              <h2 className="mb-4 text-2xl font-bold text-[#EAEAEA]">{t("myths")}</h2>
              <div className="space-y-3">
                {filteredMyths.map((myth) => {
                  const isExpanded = expandedMythId === myth.id;
                  return (
                    <div
                      key={myth.id}
                      onClick={() => setExpandedMythId(isExpanded ? null : myth.id)}
                      className="cursor-pointer rounded-xl border border-border bg-[#0D0D0D] p-5 transition-all hover:border-[#0B3D91]/40"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="font-bold text-[#FC3D21] flex items-center gap-2">
                          ❌ Myth: <span className="text-[#EAEAEA] font-medium">{myth.myth}</span>
                        </h3>
                        <span className="text-[#8A8F98] text-sm">{isExpanded ? "▲" : "▼"}</span>
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
                            <div className="mt-4 border-t border-border/40 pt-4 text-sm text-[#8A8F98]">
                              <strong className="text-[#FC3D21] block mb-1">✅ Science Truth:</strong>
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
              <h2 className="mb-4 text-2xl font-bold text-[#EAEAEA]">Body Marvels (Deep Dives)</h2>
              {BODY_MARVELS.map((marvel) => (
                <div key={marvel.id} className="rounded-xl border border-border bg-[#0D0D0D] p-6">
                  <span className="rounded bg-[#0B3D91]/20 px-2 py-0.5 text-xs font-bold text-[#A855F7] uppercase tracking-wider">
                    Weekly Deep-Dive
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-[#EAEAEA]">{marvel.title}</h3>
                  <p className="mt-2 text-sm text-[#8A8F98] italic">{marvel.introduction}</p>
                  <div className="mt-6 space-y-4">
                    {marvel.sections.map((sect, i) => (
                      <div key={i} className="rounded-lg bg-[#030303] p-4 border border-border/40">
                        <h4 className="font-bold text-[#FC3D21]">{sect.heading}</h4>
                        <p className="mt-1 text-sm text-[#8A8F98]">{sect.body}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-sm text-[#8A8F98] border-l-2 border-[#FC3D21] pl-4">
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
          <div className="rounded-xl border border-border bg-[#0F0F0F] p-5">
            <h3 className="text-lg font-bold text-[#FC3D21] mb-4">Did You Feel That?</h3>
            <div className="space-y-4">
              {SENSORY_FACTS.map((sf) => (
                <div key={sf.id} className="rounded-lg bg-[#0d101d] p-4 border border-border/40">
                  <h4 className="font-bold text-[#EAEAEA] text-sm">❓ {sf.sensation}</h4>
                  <p className="mt-1.5 text-xs text-[#8A8F98]">{sf.cause}</p>
                  <div className="mt-3 text-xs text-[#F5A623] bg-[#F5A623]/5 p-2 rounded border border-[#F5A623]/10">
                    💡 <strong>Tip:</strong> {sf.tip}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bookmarks Section */}
          <div className="rounded-xl border border-border bg-[#0F0F0F] p-5">
            <h3 className="text-lg font-bold text-[#EAEAEA] mb-4">{t("bookmarks")}</h3>
            {bookmarks.length === 0 ? (
              <p className="text-xs text-[#8A8F98]">No saved remedies or facts yet.</p>
            ) : (
              <div className="space-y-2">
                {bookmarks.map((bId) => {
                  const remedy = REMEDIES.find((r) => r.id === bId);
                  const fact = FACTS.find((f) => f.id === bId);
                  return (
                    <div key={bId} className="flex items-center justify-between bg-[#0D0D0D] p-3 rounded-lg border border-border/40">
                      <div className="truncate max-w-[80%]">
                        <p className="text-xs font-bold text-[#FC3D21] truncate">
                          {remedy ? remedy.name : "Saved Fact"}
                        </p>
                        <p className="text-[10px] text-[#8A8F98] truncate">
                          {remedy ? remedy.ailment : fact ? fact.text : "Content item"}
                        </p>
                      </div>
                      <button
                        onClick={() => removeBookmark(bId)}
                        className="text-xs text-[#FC3D21] hover:underline"
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
          <div className="rounded-xl border border-border/40 bg-[#0F0F0F] p-4 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
              🛡️ {t("medicalReviewed")}
            </span>
            <p className="mt-2 text-[10px] text-[#8A8F98]">
              Every article and remedy is cross-referenced with medical databases (NLM, PubMed) and reviewed by board-certified physicians.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
