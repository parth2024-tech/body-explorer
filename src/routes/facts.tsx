import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { useBodyStore } from "@/store/useBodyStore";
import {
  FACTS,
  BODY_PARTS,
  TRANSLATIONS,
  CATEGORY_META,
  RARITY_META,
  Category,
  Rarity,
} from "@/data/content";
import { Heart, Search, Volume2, Square, RefreshCcw } from "lucide-react";

export const Route = createFileRoute("/facts")({
  head: () => ({
    meta: [
      { title: "Body Facts Archive — The Living Body Atlas" },
      { name: "description", content: "Explore hundreds of fascinating, medically-backed anatomical facts about your 37 trillion cells." }
    ]
  }),
  component: FactsPage,
});

function FactsPage() {
  const {
    language,
    bookmarks,
    addBookmark,
    removeBookmark,
    isBookmarked,
    addHistoryEntry,
  } = useBodyStore();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all");
  const [selectedRarity, setSelectedRarity] = useState<Rarity | "all">("all");
  const [selectedBodyPart, setSelectedBodyPart] = useState<string>("all");
  
  // Random fact card state
  const [randomFactIndex, setRandomFactIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [speakingFactId, setSpeakingFactId] = useState<string | null>(null);

  const [shuffledFacts, setShuffledFacts] = useState<typeof FACTS>(FACTS);

  useEffect(() => {
    addHistoryEntry("/facts");
    
    // Shuffle facts array on mount
    const shuffleArray = <T,>(array: T[]): T[] => {
      const arr = [...array];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    };
    const shuffled = shuffleArray(FACTS);
    setShuffledFacts(shuffled);

    // Pick a random fact initially
    if (shuffled.length > 0) {
      setRandomFactIndex(Math.floor(Math.random() * shuffled.length));
    }
  }, [addHistoryEntry]);

  const t = (key: keyof typeof TRANSLATIONS.en) => {
    const dict = TRANSLATIONS[language] || TRANSLATIONS.en;
    return (dict as any)[key] || (TRANSLATIONS.en as any)[key] || key;
  };

  const handleNextRandomFact = () => {
    if (shuffledFacts.length === 0) return;
    setIsRotating(true);
    setTimeout(() => {
      let nextIndex = Math.floor(Math.random() * shuffledFacts.length);
      if (shuffledFacts.length > 1) {
        while (nextIndex === randomFactIndex) {
          nextIndex = Math.floor(Math.random() * shuffledFacts.length);
        }
      }
      setRandomFactIndex(nextIndex);
      setIsRotating(false);
    }, 300);
  };

  const randomFact = shuffledFacts[randomFactIndex];
  const randomFactPart = useMemo(() => {
    return BODY_PARTS.find((p) => p.id === randomFact?.bodyPartId);
  }, [randomFact]);

  const handleSpeak = (text: string, id: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    if (speakingFactId === id) {
      window.speechSynthesis.cancel();
      setSpeakingFactId(null);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    if (language === "hi") {
      utterance.lang = "hi-IN";
    } else {
      utterance.lang = "en-US";
    }

    utterance.onend = () => setSpeakingFactId(null);
    utterance.onerror = () => setSpeakingFactId(null);

    setSpeakingFactId(id);
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const filteredFacts = useMemo(() => {
    return shuffledFacts.filter((fact) => {
      const part = BODY_PARTS.find((p) => p.id === fact.bodyPartId);
      
      const matchesSearch =
        fact.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (part?.name || "").toLowerCase().includes(searchQuery.toLowerCase());
        
      const matchesCategory = selectedCategory === "all" || fact.category === selectedCategory;
      const matchesRarity = selectedRarity === "all" || fact.rarity === selectedRarity;
      const matchesBodyPart = selectedBodyPart === "all" || fact.bodyPartId === selectedBodyPart;

      return matchesSearch && matchesCategory && matchesRarity && matchesBodyPart;
    });
  }, [shuffledFacts, searchQuery, selectedCategory, selectedRarity, selectedBodyPart]);

  const categoriesList = Object.keys(CATEGORY_META) as Category[];
  const raritiesList = Object.keys(RARITY_META) as Rarity[];

  return (
    <div className="min-h-screen bg-background text-foreground font-body pb-32">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8">
        {/* Header */}
        <header className="mb-20 border-b-2 border-charcoal dark:border-bone pb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Section 03 — Records
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-display text-charcoal dark:text-bone">
            Anatomy Archive.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Explore a rich, medically-validated catalog of biological facts, records, health guidance, and anatomical mysteries across your 37 trillion cells.
          </p>
        </header>

        {/* Hero Interactive Segment: Random Fact Generator */}
        {randomFact && (
          <div className="mb-24">
            <div className="bg-card border-2 border-charcoal dark:border-bone p-8 md:p-16 max-w-4xl mx-auto shadow-[8px_8px_0_0_rgba(0,0,0,0.1)] dark:shadow-[8px_8px_0_0_rgba(255,255,255,0.1)] transition-shadow">
              
              <div className="flex flex-col items-center text-center">
                <span className="bg-foreground text-background px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-widest">
                  Featured Record
                </span>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={randomFact.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="mt-12 min-h-[160px] flex flex-col justify-center items-center w-full"
                  >
                    <p className="text-3xl md:text-5xl font-display font-bold leading-tight text-charcoal dark:text-bone italic">
                      "{randomFact.text}"
                    </p>
                    
                    <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
                      {randomFactPart && (
                        <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest bg-muted border border-border px-4 py-2">
                          <span>{randomFactPart.emoji}</span>
                          <span>{randomFactPart.name}</span>
                        </span>
                      )}
                      <span className="px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest border border-border bg-background">
                        {RARITY_META[randomFact.rarity].label}
                      </span>
                      <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest bg-background border border-border px-4 py-2">
                        {CATEGORY_META[randomFact.category].icon} {CATEGORY_META[randomFact.category].label}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-12 flex flex-wrap justify-center gap-4">
                  <button
                    onClick={handleNextRandomFact}
                    disabled={isRotating}
                    className="inline-flex items-center gap-3 bg-charcoal text-bone dark:bg-bone dark:text-charcoal px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white dark:hover:bg-accent transition-colors disabled:opacity-50"
                  >
                    <RefreshCcw className={`w-4 h-4 ${isRotating ? "animate-spin" : ""}`} />
                    Next Record
                  </button>
                  <button
                    onClick={() => handleSpeak(randomFact.text, randomFact.id)}
                    className={`inline-flex items-center gap-3 px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest border transition-colors ${
                      speakingFactId === randomFact.id
                        ? "bg-accent/10 border-accent text-accent"
                        : "border-border bg-background text-foreground hover:bg-muted"
                    }`}
                  >
                    {speakingFactId === randomFact.id ? <Square className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    {speakingFactId === randomFact.id ? "Stop" : "Dictate"}
                  </button>
                  <button
                    onClick={() =>
                      isBookmarked(randomFact.id)
                        ? removeBookmark(randomFact.id)
                        : addBookmark(randomFact.id)
                    }
                    className={`inline-flex items-center justify-center w-14 h-14 border transition-colors ${
                      isBookmarked(randomFact.id)
                        ? "bg-rose-500/10 border-rose-500 text-rose-500"
                        : "border-border bg-background text-foreground hover:bg-muted hover:text-rose-500"
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isBookmarked(randomFact.id) ? "fill-rose-500" : ""}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filters Panel */}
        <div className="mb-16 border border-border bg-muted p-6 md:p-8">
          
          {/* Search Input and Body Part selector */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="md:col-span-2 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Query records by text or organ..."
                className="w-full bg-input border border-border pl-12 pr-6 py-4 font-body text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>

            <div className="relative">
              <select
                value={selectedBodyPart}
                onChange={(e) => setSelectedBodyPart(e.target.value)}
                className="w-full bg-input border border-border px-6 py-4 font-body text-sm text-foreground focus:outline-none focus:border-accent appearance-none transition-colors"
              >
                <option value="all">All Systems</option>
                {BODY_PARTS.map((part) => (
                  <option key={part.id} value={part.id}>
                    {part.emoji} {part.name}
                  </option>
                ))}
              </select>
              <span className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-muted-foreground">▼</span>
            </div>
          </div>

          <div className="space-y-6">
            {/* Categories Pills */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest font-mono">Category</span>
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 font-mono text-[10px] uppercase tracking-widest font-bold transition-colors border ${
                  selectedCategory === "all"
                    ? "bg-foreground text-background border-foreground"
                    : "bg-background border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                All Categories
              </button>
              {categoriesList.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 font-mono text-[10px] uppercase tracking-widest font-bold transition-colors border flex items-center gap-2 ${
                    selectedCategory === cat
                      ? "bg-foreground text-background border-foreground"
                      : "bg-background border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span>{CATEGORY_META[cat].icon}</span>
                  <span>{CATEGORY_META[cat].label}</span>
                </button>
              ))}
            </div>

            {/* Rarity Pills */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest font-mono">Classification</span>
              <button
                onClick={() => setSelectedRarity("all")}
                className={`px-4 py-2 font-mono text-[10px] uppercase tracking-widest font-bold transition-colors border ${
                  selectedRarity === "all"
                    ? "bg-foreground text-background border-foreground"
                    : "bg-background border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                All Classifications
              </button>
              {raritiesList.map((rar) => (
                <button
                  key={rar}
                  onClick={() => setSelectedRarity(rar)}
                  className={`px-4 py-2 font-mono text-[10px] uppercase tracking-widest font-bold transition-colors border ${
                    selectedRarity === rar
                      ? "bg-foreground text-background border-foreground"
                      : "bg-background border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {RARITY_META[rar].label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Facts Card Grid - Masonry/Editorial Layout */}
        <div className="mb-12 flex justify-between items-end border-b border-border pb-4">
          <h2 className="text-2xl font-display text-charcoal dark:text-bone">
            Index Results
          </h2>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {filteredFacts.length} Records Found
          </span>
        </div>

        {filteredFacts.length === 0 ? (
          <div className="border border-border bg-muted p-16 text-center">
            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-display text-charcoal dark:text-bone">No records matched your criteria</h3>
            <p className="text-sm text-muted-foreground mt-2 font-body">Refine your query to explore the archive.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
            {filteredFacts.map((fact, index) => {
              const part = BODY_PARTS.find((p) => p.id === fact.bodyPartId);
              // Mix component sizes based on index
              const isLarge = index % 7 === 0;
              const isWide = index % 5 === 0 && !isLarge;
              
              return (
                <motion.div
                  layout
                  key={fact.id}
                  className={`group relative border border-border bg-card p-8 flex flex-col justify-between hover:bg-muted transition-colors ${
                    isLarge ? "md:col-span-2 lg:col-span-2 row-span-2" : isWide ? "md:col-span-2 lg:col-span-1" : "col-span-1"
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground border-b border-border pb-1">
                        <span>{part?.emoji}</span>
                        <span>{part?.name}</span>
                      </span>
                      
                      <div className="flex items-center gap-2 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => handleSpeak(fact.text, fact.id)}
                          className={`p-2 border transition-colors ${
                            speakingFactId === fact.id
                              ? "bg-accent/10 border-accent text-accent"
                              : "border-border bg-background text-muted-foreground hover:text-foreground"
                          }`}
                          title="Dictate"
                        >
                          {speakingFactId === fact.id ? <Square className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
                        </button>
                        <button
                          onClick={() =>
                            isBookmarked(fact.id) ? removeBookmark(fact.id) : addBookmark(fact.id)
                          }
                          className={`p-2 border transition-colors ${
                            isBookmarked(fact.id)
                              ? "bg-rose-500/10 border-rose-500 text-rose-500"
                              : "border-border bg-background text-muted-foreground hover:text-rose-500"
                          }`}
                        >
                          <Heart className={`w-3 h-3 ${isBookmarked(fact.id) ? "fill-rose-500" : ""}`} />
                        </button>
                      </div>
                    </div>

                    <p className={`font-body text-foreground leading-relaxed ${isLarge ? "text-2xl md:text-3xl font-display italic" : "text-base"}`}>
                      "{fact.text}"
                    </p>
                  </div>

                  <div className="mt-12 flex items-center justify-between pt-6 border-t border-border">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-foreground">
                      {RARITY_META[fact.rarity].label}
                    </span>
                    
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                      {CATEGORY_META[fact.category].icon} {CATEGORY_META[fact.category].label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
