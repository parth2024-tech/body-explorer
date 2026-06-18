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
  }, [addHistoryEntry]);

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
    <div className="min-h-screen bg-background text-foreground font-body pb-32">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8">
        <header className="mb-16 border-b-2 border-charcoal dark:border-bone pb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Section 04 — Literature
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-display text-charcoal dark:text-bone">
            The Reading Room.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Browse evidence-based natural remedies, ancient healing arts, posture checks, body sensory anomalies, and myth-busting sciences.
          </p>
        </header>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Navigation Tabs - Magazine Style */}
        <div className="flex flex-wrap border-b border-border mb-16">
          {[
            { id: "remedies", label: "Natural Remedies" },
            { id: "myths", label: "Medical Myths" },
            { id: "marvels", label: "Body Marvels" },
            { id: "bookmarks", label: "Saved Items" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as any);
                setSelectedTag(null);
              }}
              className={`px-8 py-4 font-mono text-xs uppercase tracking-widest font-bold transition-colors ${
                activeTab === tab.id
                  ? "bg-charcoal text-bone dark:bg-bone dark:text-charcoal border-b-2 border-charcoal dark:border-bone"
                  : "bg-transparent text-muted-foreground hover:bg-muted"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Global Search (Hidden on Marvels/Bookmarks) */}
        {(activeTab === "remedies" || activeTab === "myths") && (
          <div className="relative mb-16 max-w-4xl mx-auto">
            <input
              type="text"
              placeholder={`Search ${activeTab}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border-b border-border bg-transparent pl-12 pr-6 py-6 font-display text-xl md:text-2xl text-foreground placeholder-muted-foreground outline-none focus:border-accent transition-colors"
            />
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
          </div>
        )}

        {/* Main Content Grid */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              
              {/* REMEDIES */}
              {activeTab === "remedies" && (
                <div>
                  <div className="flex flex-wrap items-center gap-4 mb-12">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">Filter by Evidence:</span>
                    <button
                      onClick={() => setSelectedTag(null)}
                      className={`px-4 py-2 font-mono text-[10px] uppercase tracking-widest font-bold transition-colors border ${
                        !selectedTag ? "bg-foreground text-background border-foreground" : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
                      }`}
                    >
                      All
                    </button>
                    {allTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`px-4 py-2 font-mono text-[10px] uppercase tracking-widest font-bold transition-colors border ${
                          selectedTag === tag ? "bg-foreground text-background border-foreground" : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  {/* Asymmetrical Magazine Layout for Remedies */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                    {filteredRemedies.map((remedy, idx) => {
                      // Alternate between full width, half width, and side-by-side to create a magazine feel
                      const spanClass = idx % 5 === 0 ? "md:col-span-12" : (idx % 5 === 1 || idx % 5 === 2) ? "md:col-span-6" : (idx % 5 === 3) ? "md:col-span-8" : "md:col-span-4";
                      const isLarge = idx % 5 === 0;

                      return (
                        <div key={remedy.id} className={`border border-border bg-card p-8 md:p-12 flex flex-col justify-between hover:bg-muted transition-colors ${spanClass}`}>
                          <div>
                            <div className="flex justify-between items-start mb-8 border-b border-border pb-4">
                              <span className={`px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest border ${
                                remedy.evidenceRating === "studied" ? "bg-accent/10 text-accent border-accent/20" :
                                remedy.evidenceRating === "traditional" ? "bg-sage/10 text-sage border-sage/20" :
                                "bg-muted text-muted-foreground border-border"
                              }`}>
                                {remedy.evidenceRating}
                              </span>
                              <button
                                onClick={() => isBookmarked(remedy.id) ? removeBookmark(remedy.id) : addBookmark(remedy.id)}
                                className="text-muted-foreground hover:text-rose-500 transition-colors"
                              >
                                <Heart className={`w-5 h-5 ${isBookmarked(remedy.id) ? 'fill-rose-500 text-rose-500' : ''}`} />
                              </button>
                            </div>
                            
                            <h3 className={`${isLarge ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"} font-display text-charcoal dark:text-bone mb-2`}>{remedy.name}</h3>
                            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-6 border-l-2 border-accent pl-3 py-1">Indication: {remedy.ailment}</p>
                            
                            <div className={`mt-6 text-muted-foreground leading-relaxed font-body ${isLarge ? "text-lg md:columns-2 gap-8" : "text-base"}`}>
                              {remedy.description}
                            </div>

                            {remedy.genZContext && (
                              <div className="mt-8 bg-muted border border-border p-5 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-2 text-6xl text-muted-foreground/10 font-display italic pointer-events-none">"</div>
                                <p className="font-mono text-[10px] font-bold text-foreground uppercase tracking-widest mb-2">Modern Translation</p>
                                <p className="font-body text-sm text-muted-foreground italic">{remedy.genZContext}</p>
                              </div>
                            )}
                          </div>
                          
                          <div className="mt-10 pt-6 border-t border-border">
                            <p className="font-mono text-[10px] font-bold text-charcoal dark:text-bone uppercase tracking-widest mb-2">Scientific Base</p>
                            <p className="font-body text-sm text-muted-foreground leading-relaxed">{remedy.evidenceDetails}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* MYTHS */}
              {activeTab === "myths" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                  {filteredMyths.map((myth) => (
                    <div key={myth.id} className="border-t-4 border-accent bg-card p-8 md:p-12 shadow-sm">
                      <div className="flex justify-between items-start mb-8">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent border border-accent/20 bg-accent/5 px-3 py-1">
                          Myth Busted
                        </span>
                        <button
                          onClick={() => isBookmarked(myth.id) ? removeBookmark(myth.id) : addBookmark(myth.id)}
                          className="text-muted-foreground hover:text-rose-500 transition-colors"
                        >
                          <Heart className={`w-5 h-5 ${isBookmarked(myth.id) ? 'fill-rose-500 text-rose-500' : ''}`} />
                        </button>
                      </div>

                      <h3 className="text-2xl font-display text-muted-foreground line-through decoration-accent decoration-2 mb-8 italic">
                        "{myth.myth}"
                      </h3>

                      <div className="bg-muted border border-border p-6 mb-8">
                        <p className="font-mono text-[10px] font-bold text-charcoal dark:text-bone uppercase tracking-widest mb-3">Clinical Reality</p>
                        <p className="font-body text-foreground leading-relaxed">{myth.reality}</p>
                      </div>

                      {(myth.dangerAlert || myth.actionableTip) && (
                        <div className="space-y-4">
                          {myth.dangerAlert && (
                            <div className="bg-rose-500/10 border-l-2 border-rose-500 p-4">
                              <p className="font-mono text-[10px] font-bold text-rose-500 uppercase tracking-widest mb-2">🚨 Danger Alert</p>
                              <p className="font-body text-sm text-foreground">{myth.dangerAlert}</p>
                            </div>
                          )}
                          {myth.actionableTip && (
                            <div className="bg-sage/10 border-l-2 border-sage p-4">
                              <p className="font-mono text-[10px] font-bold text-sage uppercase tracking-widest mb-2">Targeted Action</p>
                              <p className="font-body text-sm text-foreground">{myth.actionableTip}</p>
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
                <div className="grid grid-cols-1 gap-20 max-w-4xl mx-auto">
                  {BODY_MARVELS.map((marvel) => (
                    <article key={marvel.id} className="border-b border-border pb-20 last:border-0">
                      <header className="mb-12 text-center">
                        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-6">
                          Deep Dive Essay
                        </span>
                        <h3 className="text-4xl md:text-6xl font-display text-charcoal dark:text-bone leading-tight mb-8">
                          {marvel.title}
                        </h3>
                        <p className="text-xl md:text-2xl text-accent font-display italic px-8">
                          "{marvel.introduction}"
                        </p>
                      </header>
                      
                      <div className="prose prose-lg dark:prose-invert max-w-none font-body text-muted-foreground">
                        {marvel.sections.map((sect, i) => (
                          <div key={i} className="mb-10">
                            <h4 className="font-display text-2xl text-charcoal dark:text-bone mb-4 border-b border-border pb-2 inline-block">
                              {sect.heading}
                            </h4>
                            <p className="leading-relaxed whitespace-pre-wrap">{sect.body}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-16 p-8 bg-muted border border-border text-center">
                        <p className="font-display italic text-lg text-charcoal dark:text-bone leading-relaxed">
                          {marvel.conclusion}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {/* BOOKMARKS */}
              {activeTab === "bookmarks" && (
                <div className="max-w-4xl mx-auto text-center py-20">
                  <BookmarkIcon className="w-12 h-12 text-muted-foreground mx-auto mb-6 opacity-50" />
                  <h2 className="text-3xl font-display text-charcoal dark:text-bone mb-4">Personal Archive</h2>
                  <p className="font-body text-muted-foreground mb-12">A curated collection of your saved records across the Atlas.</p>
                  
                  {bookmarks.length === 0 ? (
                    <div className="inline-block px-8 py-4 border border-border bg-muted font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      Archive is empty
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                      {bookmarks.map((bId) => {
                        const remedy = REMEDIES.find((r) => r.id === bId);
                        const fact = FACTS.find((f) => f.id === bId);
                        const myth = MYTHS.find((m) => m.id === bId);
                        
                        return (
                          <div key={bId} className="flex items-center justify-between bg-card p-6 border border-border hover:bg-muted transition-colors">
                            <div className="truncate pr-6">
                              <p className="font-display text-lg text-charcoal dark:text-bone truncate mb-1">
                                {remedy ? remedy.name : myth ? myth.myth : fact ? "Fact Record" : "Saved Item"}
                              </p>
                              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                                {remedy ? "Remedy" : myth ? "Myth" : fact ? "Fact" : ""}
                              </p>
                            </div>
                            <button
                              onClick={() => removeBookmark(bId)}
                              className="text-muted-foreground hover:text-rose-500 transition-colors shrink-0 p-2"
                            >
                              <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
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
