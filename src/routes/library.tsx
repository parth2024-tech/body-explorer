import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useBodyStore } from "@/store/useBodyStore";
import {
  FACTS,
  MYTHS,
  REMEDIES,
  BODY_MARVELS,
  SENSORY_FACTS,
  TRANSLATIONS,
} from "@/data/content";
import { BookOpen, Leaf, Zap, Bookmark as BookmarkIcon, Heart, Search } from "lucide-react";

export const Route = createFileRoute("/library")({
  head: () => ({
    meta: [
      { title: "Core Library — The Living Body Atlas" },
      { name: "description", content: "Explore anatomy facts, natural remedies, seasonal hacks, and health myths." },
    ],
  }),
  component: LibraryPage,
});

function LibraryPage() {
  const { language, bookmarks, addBookmark, removeBookmark, isBookmarked, addHistoryEntry } =
    useBodyStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"remedies" | "myths" | "marvels" | "bookmarks">("remedies");

  const [shuffledRemedies, setShuffledRemedies] = useState<typeof REMEDIES>(REMEDIES);
  const [shuffledMyths, setShuffledMyths] = useState<typeof MYTHS>(MYTHS);

  useEffect(() => {
    addHistoryEntry("/library");
    const shuffleArray = <T,>(array: T[]): T[] => {
      const arr = [...array];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    };
    setShuffledRemedies(shuffleArray(REMEDIES));
    setShuffledMyths(shuffleArray(MYTHS));
  }, []);

  const t = (key: keyof typeof TRANSLATIONS.en) => {
    const dict = TRANSLATIONS[language] || TRANSLATIONS.en;
    return (dict as any)[key] || (TRANSLATIONS.en as any)[key] || key;
  };

  const filteredRemedies = shuffledRemedies.filter((r) => {
    const matchesSearch =
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.ailment.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (r.genZContext && r.genZContext.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesTag = !selectedTag || r.evidenceRating === selectedTag;
    return matchesSearch && matchesTag;
  });

  const filteredMyths = shuffledMyths.filter((m) => {
    return (
      m.myth.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.reality.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const allTags = ["studied", "traditional", "anecdotal", "unproven"];

  return (
    <div className="min-h-screen bg-[#030303] text-[#EAEAEA] font-sans selection:bg-[#00E5C4]/30 pb-32">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-5 pt-12 pb-8">
        <header className="relative text-center max-w-3xl mx-auto">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-96 bg-[#00E5C4]/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00E5C4]">
              {t("library")}
            </span>
            <h1 className="mt-4 text-5xl md:text-6xl font-space font-extrabold tracking-tighter text-white">
              Core Content <span className="text-[#00E5C4]">Engine</span>
            </h1>
            <p className="text-[#8A8F98] mt-6 font-mono text-sm leading-relaxed">
              Browse evidence-based natural remedies, ancient healing arts, posture checks, body sensory anomalies, and myth-busting sciences.
            </p>
          </div>
        </header>
      </div>

      <div className="max-w-7xl mx-auto px-5">
        
        {/* Navigation Tabs (Glassmorphism) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 relative z-10">
          {[
            { id: "remedies", label: "Natural Remedies", icon: <Leaf className="w-4 h-4" /> },
            { id: "myths", label: "Medical Myths", icon: <Zap className="w-4 h-4" /> },
            { id: "marvels", label: "Body Marvels", icon: <BookOpen className="w-4 h-4" /> },
            { id: "bookmarks", label: "Saved Items", icon: <BookmarkIcon className="w-4 h-4" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as any);
                setSelectedTag(null);
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all backdrop-blur-md border ${
                activeTab === tab.id
                  ? "bg-[#00E5C4] text-black border-[#00E5C4] shadow-[0_0_20px_rgba(0,229,196,0.3)]"
                  : "bg-white/[0.02] text-[#8A8F98] border-white/10 hover:text-white hover:bg-white/[0.05]"
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Global Search (Hidden on Marvels/Bookmarks) */}
        {(activeTab === "remedies" || activeTab === "myths") && (
          <div className="relative mb-12 max-w-3xl mx-auto z-10">
            <input
              type="text"
              placeholder={`Search ${activeTab}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/[0.02] pl-14 pr-6 py-4 text-sm text-white placeholder-[#555] outline-none focus:border-[#00E5C4]/50 focus:bg-white/[0.04] transition-all backdrop-blur-md"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8A8F98]" />
          </div>
        )}

        {/* Main Content Grid */}
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              
              {/* REMEDIES */}
              {activeTab === "remedies" && (
                <div>
                  <div className="flex flex-wrap justify-center gap-3 mb-10">
                    <button
                      onClick={() => setSelectedTag(null)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all border ${
                        !selectedTag ? "bg-white text-black border-white" : "bg-transparent text-[#8A8F98] border-white/10 hover:border-white/30 hover:text-white"
                      }`}
                    >
                      All Evidence
                    </button>
                    {allTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`px-4 py-2 rounded-lg text-xs font-bold capitalize transition-all border ${
                          selectedTag === tag ? "bg-white text-black border-white" : "bg-transparent text-[#8A8F98] border-white/10 hover:border-white/30 hover:text-white"
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredRemedies.map((remedy) => (
                      <div key={remedy.id} className="rounded-3xl border border-white/10 bg-[#0F0F0F]/80 p-6 backdrop-blur-xl flex flex-col justify-between hover:border-[#00E5C4]/30 transition-all hover:shadow-[0_0_30px_rgba(0,229,196,0.1)]">
                        <div>
                          <div className="flex justify-between items-start mb-4">
                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                              remedy.evidenceRating === "studied" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" :
                              remedy.evidenceRating === "traditional" ? "bg-purple-500/10 text-purple-400 border-purple-500/20" :
                              "bg-amber-500/10 text-amber-400 border-amber-500/20"
                            }`}>
                              {remedy.evidenceRating}
                            </span>
                            <button
                              onClick={() => isBookmarked(remedy.id) ? removeBookmark(remedy.id) : addBookmark(remedy.id)}
                              className="text-[#8A8F98] hover:scale-110 transition-transform"
                            >
                              <Heart className={`w-5 h-5 ${isBookmarked(remedy.id) ? 'fill-[#FC3D21] text-[#FC3D21]' : ''}`} />
                            </button>
                          </div>
                          
                          <h3 className="text-xl font-bold text-white">{remedy.name}</h3>
                          <p className="text-[10px] text-[#F5A623] uppercase tracking-widest font-bold mt-1">Target: {remedy.ailment}</p>
                          
                          <p className="mt-4 text-sm text-[#8A8F98] leading-relaxed">
                            {remedy.description}
                          </p>

                          {remedy.genZContext && (
                            <div className="mt-4 bg-[#A855F7]/10 border border-[#A855F7]/20 p-3 rounded-xl">
                              <p className="text-[10px] font-bold text-[#A855F7] uppercase tracking-wider mb-1">Gen Z Context</p>
                              <p className="text-xs text-[#EAEAEA]">{remedy.genZContext}</p>
                            </div>
                          )}
                        </div>
                        
                        <div className="mt-6 pt-4 border-t border-white/5">
                          <p className="text-[10px] font-bold text-[#00E5C4] uppercase tracking-wider mb-1">Scientific Base</p>
                          <p className="text-xs text-[#8A8F98] leading-relaxed">{remedy.evidenceDetails}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* MYTHS */}
              {activeTab === "myths" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredMyths.map((myth) => (
                    <div key={myth.id} className="rounded-3xl border border-white/10 bg-[#0F0F0F]/80 p-6 backdrop-blur-xl hover:border-blue-500/30 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                      <div className="flex justify-between items-start mb-4">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border bg-red-500/10 text-red-500 border-red-500/20">
                          Myth Busted
                        </span>
                        <button
                          onClick={() => isBookmarked(myth.id) ? removeBookmark(myth.id) : addBookmark(myth.id)}
                          className="text-[#8A8F98] hover:scale-110 transition-transform"
                        >
                          <Heart className={`w-5 h-5 ${isBookmarked(myth.id) ? 'fill-[#FC3D21] text-[#FC3D21]' : ''}`} />
                        </button>
                      </div>

                      <h3 className="text-lg font-bold text-red-400 line-through decoration-red-500/50 decoration-2 mb-4">
                        <span className="text-white decoration-transparent">{myth.myth}</span>
                      </h3>

                      <div className="bg-emerald-500/5 border border-emerald-500/20 p-4 rounded-2xl">
                        <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-2">✅ Science Truth</p>
                        <p className="text-sm text-emerald-50 leading-relaxed">{myth.reality}</p>
                      </div>

                      {(myth.dangerAlert || myth.actionableTip) && (
                        <div className="mt-4 space-y-3">
                          {myth.dangerAlert && (
                            <div className="bg-rose-500/10 border border-rose-500/20 p-3 rounded-xl">
                              <p className="text-[10px] font-bold text-rose-500 uppercase tracking-wider mb-1">🚨 Danger Alert</p>
                              <p className="text-xs text-rose-200">{myth.dangerAlert}</p>
                            </div>
                          )}
                          {myth.actionableTip && (
                            <div className="bg-blue-500/10 border border-blue-500/20 p-3 rounded-xl">
                              <p className="text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-1">🎯 Try This</p>
                              <p className="text-xs text-blue-100">{myth.actionableTip}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* MARVELS */}
              {activeTab === "marvels" && (
                <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
                  {BODY_MARVELS.map((marvel) => (
                    <div key={marvel.id} className="rounded-[2.5rem] border border-white/10 bg-[#0F0F0F]/80 p-8 md:p-12 backdrop-blur-xl">
                      <span className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border bg-purple-500/10 text-purple-400 border-purple-500/20">
                        Weekly Deep-Dive
                      </span>
                      <h3 className="mt-6 text-3xl md:text-4xl font-space font-extrabold text-white">{marvel.title}</h3>
                      <p className="mt-4 text-lg text-[#8A8F98] italic font-serif">"{marvel.introduction}"</p>
                      
                      <div className="mt-10 space-y-8">
                        {marvel.sections.map((sect, i) => (
                          <div key={i}>
                            <h4 className="font-bold text-[#00E5C4] text-lg mb-2">{sect.heading}</h4>
                            <p className="text-[#EAEAEA] leading-relaxed">{sect.body}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-10 p-6 bg-white/[0.02] border border-white/10 rounded-2xl text-center">
                        <p className="text-sm text-[#8A8F98] font-medium leading-relaxed">{marvel.conclusion}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* BOOKMARKS */}
              {activeTab === "bookmarks" && (
                <div className="max-w-4xl mx-auto text-center py-20">
                  <BookmarkIcon className="w-16 h-16 text-white/20 mx-auto mb-6" />
                  <h2 className="text-2xl font-bold text-white mb-2">Your Saved Collection</h2>
                  <p className="text-[#8A8F98] mb-8">Items you star across the library will appear here.</p>
                  
                  {bookmarks.length === 0 ? (
                    <div className="inline-block px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm text-[#8A8F98]">
                      Collection is empty
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                      {bookmarks.map((bId) => {
                        const remedy = REMEDIES.find((r) => r.id === bId);
                        const fact = FACTS.find((f) => f.id === bId);
                        const myth = MYTHS.find((m) => m.id === bId);
                        
                        return (
                          <div key={bId} className="flex items-center justify-between bg-white/[0.02] p-4 rounded-2xl border border-white/10 hover:border-white/30 transition-all">
                            <div className="truncate pr-4">
                              <p className="text-sm font-bold text-white truncate">
                                {remedy ? remedy.name : myth ? myth.myth : "Saved Fact"}
                              </p>
                              <p className="text-xs text-[#8A8F98] truncate mt-1">
                                {remedy ? "Remedy" : myth ? "Myth" : fact ? "Fact" : ""}
                              </p>
                            </div>
                            <button
                              onClick={() => removeBookmark(bId)}
                              className="text-white hover:scale-110 transition-transform shrink-0"
                            >
                              <Heart className="w-5 h-5 fill-[#FC3D21] text-[#FC3D21]" />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
