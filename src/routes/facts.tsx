import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo, useRef } from "react";
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
import { Heart, Search, Volume2, Square, RefreshCcw, Lightbulb } from "lucide-react";

export const Route = createFileRoute("/facts")({
  head: () => ({
    meta: [
      { title: "Body Facts Explorer — The Living Body Atlas" },
      {
        name: "description",
        content:
          "Explore hundreds of fascinating, medically-backed anatomical facts about your 37 trillion cells.",
      },
    ],
  }),
  component: FactsPage,
});

function FactsPage() {
  const { language, bookmarks, addBookmark, removeBookmark, isBookmarked, addHistoryEntry } =
    useBodyStore();

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

  const t = (key: keyof (typeof TRANSLATIONS)["en"]) => {
    const dict = (TRANSLATIONS[language] || TRANSLATIONS.en) as Record<string, string>;
    return dict[key] || TRANSLATIONS.en[key] || key;
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

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const handleSpeak = (text: string, id: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    if (speakingFactId === id) {
      window.speechSynthesis.cancel();
      setSpeakingFactId(null);
      return;
    }

    window.speechSynthesis.cancel();

    // Create utterance and store a strong reference to prevent garbage collection
    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance;

    if (language === "hi") {
      utterance.lang = "hi-IN";
    } else {
      utterance.lang = "en-US";
    }

    utterance.onend = () => {
      setSpeakingFactId(null);
      utteranceRef.current = null;
    };
    utterance.onerror = (e) => {
      console.error("Speech synthesis error:", e);
      setSpeakingFactId(null);
      utteranceRef.current = null;
    };

    // Use a small timeout to let the cancel operation finish in the browser before speaking the new text
    setTimeout(() => {
      setSpeakingFactId(id);
      if (utteranceRef.current === utterance) {
        window.speechSynthesis.speak(utterance);
      }
    }, 50);
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
    <div className="min-h-screen bg-[#030303] text-[#EAEAEA] font-sans selection:bg-[#00E5C4]/30 pb-32">
      <div className="max-w-7xl mx-auto px-5 pt-12 pb-8">
        {/* Header */}
        <header className="relative text-center max-w-3xl mx-auto mb-16">
          <div className="relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00E5C4]">
              {t("facts")}
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-space font-black tracking-tight text-white">
              Anatomy <span className="text-[#00E5C4]">Archive</span>
            </h1>
            <p className="text-[#8A8F98] mt-4 font-mono text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Explore a rich catalog of verified biological mechanisms, anatomical records, and
              clinical facts across human organ systems.
            </p>
          </div>
        </header>

        {/* Hero Interactive Segment: Random Fact Generator */}
        {randomFact && (
          <div className="mb-16 relative z-10">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0D1428]/80 p-6 md:p-10 shadow-lg backdrop-blur-xl max-w-4xl mx-auto">
              <div className="relative flex flex-col items-center text-center">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-[#00E5C4]/10 border border-[#00E5C4]/30 px-3 py-1 text-[10px] font-bold text-[#00E5C4] uppercase tracking-wider">
                  <Lightbulb className="w-3 h-3 text-[#00E5C4]" />
                  Featured Fact
                </span>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={randomFact.id}
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.3, type: "spring", bounce: 0.3 }}
                    className="mt-6 min-h-[140px] flex flex-col justify-center items-center max-w-3xl w-full"
                  >
                    <p className="text-xl sm:text-2xl md:text-3xl font-space font-bold leading-snug text-white tracking-tight">
                      "{randomFact.text}"
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center items-center gap-2.5">
                      {randomFactPart && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/5 px-3 py-1 rounded-md border border-white/10">
                          <span>{randomFactPart.emoji}</span>
                          <span>{randomFactPart.name}</span>
                        </span>
                      )}
                      <span
                        className={`rounded-md px-3 py-1 text-[11px] font-bold uppercase tracking-wider border ${RARITY_META[randomFact.rarity].tokenClass}`}
                      >
                        {RARITY_META[randomFact.rarity].label}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-white/5 text-white border border-white/10 px-3 py-1 rounded-md">
                        {CATEGORY_META[randomFact.category].icon}{" "}
                        {CATEGORY_META[randomFact.category].label}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-12 flex flex-wrap justify-center gap-3.5">
                  <button
                    onClick={handleNextRandomFact}
                    disabled={isRotating}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#00E5C4] px-6 py-3.5 text-sm font-bold text-[#0A0E1A] transition-colors hover:bg-[#00cbb0] active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <RefreshCcw className={`w-4 h-4 ${isRotating ? "animate-spin" : ""}`} />
                    Next Random Fact
                  </button>
                  <button
                    onClick={() => handleSpeak(randomFact.text, randomFact.id)}
                    className={`inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold border transition-all active:scale-98 ${
                      speakingFactId === randomFact.id
                        ? "bg-rose-500/10 border-rose-500 text-rose-400"
                        : "border-white/10 bg-white/[0.02] text-white hover:bg-white/5"
                    }`}
                  >
                    {speakingFactId === randomFact.id ? (
                      <Square className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                    {speakingFactId === randomFact.id ? "Stop" : "Listen"}
                  </button>
                  <button
                    onClick={() =>
                      isBookmarked(randomFact.id)
                        ? removeBookmark(randomFact.id)
                        : addBookmark(randomFact.id)
                    }
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg border transition-all active:scale-98 ${
                      isBookmarked(randomFact.id)
                        ? "bg-rose-500/10 border-rose-500 text-rose-500"
                        : "border-white/10 bg-white/[0.02] text-white hover:bg-white/5 hover:text-rose-500"
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${isBookmarked(randomFact.id) ? "fill-rose-500" : ""}`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filters Panel (Glassmorphism) */}
        <div className="mb-12 rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-xl relative z-10 max-w-5xl mx-auto">
          {/* Search Input and Body Part selector */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="md:col-span-2 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search facts or body parts..."
                className="w-full rounded-xl border border-white/10 bg-black/40 pl-12 pr-6 py-4 text-base sm:text-sm text-white placeholder-[#555] outline-none transition-all focus:border-[#00E5C4]/50 focus:bg-black/60"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8A8F98]" />
            </div>

            <div className="relative">
              <select
                value={selectedBodyPart}
                onChange={(e) => setSelectedBodyPart(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-6 py-4 text-base sm:text-sm text-white outline-none focus:border-[#00E5C4]/50 appearance-none transition-all"
              >
                <option value="all">All Organs & Systems</option>
                {BODY_PARTS.map((part) => (
                  <option key={part.id} value={part.id} className="bg-black text-white">
                    {part.emoji} {part.name}
                  </option>
                ))}
              </select>
              <span className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-[#8A8F98]">
                ▼
              </span>
            </div>
          </div>

          <div className="space-y-6">
            {/* Categories Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-bold text-[#8A8F98] mr-2 uppercase tracking-widest">
                Category
              </span>
              <button
                onClick={() => setSelectedCategory("all")}
                className={`rounded-lg px-4 sm:px-5 py-2 text-xs font-bold transition-all border min-h-[38px] flex items-center ${
                  selectedCategory === "all"
                    ? "bg-[#00E5C4] text-black border-[#00E5C4]"
                    : "bg-transparent border-white/10 text-[#8A8F98] hover:text-white hover:border-white/30"
                }`}
              >
                All Categories
              </button>
              {categoriesList.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-lg px-4 sm:px-5 py-2 text-xs font-bold transition-all flex items-center gap-2 border min-h-[38px] ${
                    selectedCategory === cat
                      ? "bg-[#00E5C4] text-black border-[#00E5C4]"
                      : "bg-transparent border-white/10 text-[#8A8F98] hover:text-white hover:border-white/30"
                  }`}
                >
                  <span>{CATEGORY_META[cat].icon}</span>
                  <span>{CATEGORY_META[cat].label}</span>
                </button>
              ))}
            </div>

            {/* Rarity Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-bold text-[#8A8F98] mr-2 uppercase tracking-widest">
                Rarity Level
              </span>
              <button
                onClick={() => setSelectedRarity("all")}
                className={`rounded-lg px-4 sm:px-5 py-2 text-xs font-bold transition-all border min-h-[38px] flex items-center ${
                  selectedRarity === "all"
                    ? "bg-white text-black border-white"
                    : "bg-transparent border-white/10 text-[#8A8F98] hover:text-white hover:border-white/30"
                }`}
              >
                All Rarities
              </button>
              {raritiesList.map((rar) => (
                <button
                  key={rar}
                  onClick={() => setSelectedRarity(rar)}
                  className={`rounded-lg px-4 sm:px-5 py-2 text-xs font-bold transition-all border min-h-[38px] flex items-center ${
                    selectedRarity === rar
                      ? "bg-white text-black border-white"
                      : "bg-transparent border-white/10 text-[#8A8F98] hover:text-white hover:border-white/30"
                  }`}
                >
                  {RARITY_META[rar].label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Facts Card Grid */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-8 flex justify-between items-center border-b border-white/10 pb-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-3">
              Filtered Archive{" "}
              <span className="bg-white/10 text-white text-xs px-2.5 py-0.5 rounded-md font-mono">
                {filteredFacts.length}
              </span>
            </h2>
          </div>

          {filteredFacts.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-16 text-center backdrop-blur-md">
              <Search className="w-12 h-12 text-[#8A8F98] mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-bold text-white">No facts matched your filters</h3>
              <p className="text-sm text-[#8A8F98] mt-2">
                Try resetting the search terms or category selectors.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFacts.map((fact) => {
                const part = BODY_PARTS.find((p) => p.id === fact.bodyPartId);
                return (
                  <motion.div
                    layout
                    key={fact.id}
                    className="group relative rounded-2xl border border-white/10 bg-[#0F0F0F]/80 p-6 flex flex-col justify-between hover:border-[#00E5C4]/40 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,229,196,0.08)] backdrop-blur-xl"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="inline-flex items-center gap-2 text-xs text-white bg-white/5 border border-white/10 px-3 py-1 rounded-md font-semibold">
                          <span>{part?.emoji}</span>
                          <span>{part?.name}</span>
                        </span>

                        <div className="flex items-center gap-2 opacity-100 md:opacity-50 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => handleSpeak(fact.text, fact.id)}
                            className={`p-2 rounded-lg border transition-all ${
                              speakingFactId === fact.id
                                ? "bg-rose-500/10 border-rose-500 text-rose-500"
                                : "border-white/10 bg-white/5 text-white hover:border-white/30"
                            }`}
                            title="Read aloud"
                          >
                            {speakingFactId === fact.id ? (
                              <Square className="w-3 h-3" />
                            ) : (
                              <Volume2 className="w-3 h-3" />
                            )}
                          </button>
                          <button
                            onClick={() =>
                              isBookmarked(fact.id) ? removeBookmark(fact.id) : addBookmark(fact.id)
                            }
                            className={`p-2 rounded-lg border transition-all ${
                              isBookmarked(fact.id)
                                ? "bg-rose-500/10 border-rose-500 text-rose-500"
                                : "border-white/10 bg-white/5 text-white hover:border-white/30 hover:text-rose-500"
                            }`}
                          >
                            <Heart
                              className={`w-3 h-3 ${isBookmarked(fact.id) ? "fill-rose-500" : ""}`}
                            />
                          </button>
                        </div>
                      </div>

                      <p className="text-[15px] leading-relaxed text-[#EAEAEA] font-medium">
                        "{fact.text}"
                      </p>
                    </div>

                    <div className="mt-8 flex items-center justify-between">
                      <span
                        className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest border ${RARITY_META[fact.rarity].tokenClass}`}
                      >
                        {RARITY_META[fact.rarity].label}
                      </span>

                      <span className="text-xs font-bold text-[#8A8F98] flex items-center gap-1.5">
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
    </div>
  );
}
