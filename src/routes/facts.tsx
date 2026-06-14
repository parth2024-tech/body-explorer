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

export const Route = createFileRoute("/facts")({
  head: () => ({
    meta: [
      { title: "Body Facts Explorer — The Living Body Atlas" },
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
  }, []);

  const t = (key: keyof typeof TRANSLATIONS.en) => {
    const dict = TRANSLATIONS[language] || TRANSLATIONS.en;
    return (dict as any)[key] || (TRANSLATIONS.en as any)[key] || key;
  };

  // Generate a new random fact
  const handleNextRandomFact = () => {
    if (shuffledFacts.length === 0) return;
    setIsRotating(true);
    setTimeout(() => {
      let nextIndex = Math.floor(Math.random() * shuffledFacts.length);
      // Avoid showing the exact same fact consecutively if there are multiple
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

  // TTS Reader
  const handleSpeak = (text: string, id: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    if (speakingFactId === id) {
      window.speechSynthesis.cancel();
      setSpeakingFactId(null);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set language voice
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

  // Stop speaking when leaving component
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Filtered facts
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

  // Organized Categories list for filter pills
  const categoriesList = Object.keys(CATEGORY_META) as Category[];
  const raritiesList = Object.keys(RARITY_META) as Rarity[];

  return (
    <div className="mx-auto max-w-7xl px-5 py-8 page-enter">
      {/* Page Header */}
      <div className="mb-10 text-center md:text-left">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FC3D21]">
          {t("facts")}
        </span>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-[#EAEAEA] sm:text-5xl">
          Anatomy <span className="gradient-text">Facts</span> Archive
        </h1>
        <p className="mt-4 max-w-2xl text-[#8A8F98]">
          Explore a rich, medically-validated catalog of biological facts, records, health guidance, and anatomical mysteries.
        </p>
      </div>

      {/* Hero Interactive Segment: Random Fact Generator */}
      {randomFact && (
        <div className="mb-12">
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-[#0F0F0F]/40 p-6 md:p-10 shadow-2xl backdrop-blur-xl">
            {/* Background glowing gradients */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#FC3D21]/10 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[#0B3D91]/15 blur-3xl" />

            <div className="relative flex flex-col items-center text-center">
              <span className="rounded-full bg-[#FC3D21]/10 px-4 py-1.5 text-xs font-bold text-[#FC3D21] uppercase tracking-wider">
                💡 Did You Know?
              </span>

              <AnimatePresence mode="wait">
                <motion.div
                  key={randomFact.id}
                  initial={{ opacity: 0, scale: 0.98, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="mt-6 min-h-[140px] flex flex-col justify-center items-center max-w-3xl"
                >
                  <p className="text-xl md:text-2xl font-semibold leading-relaxed text-[#EAEAEA]">
                    "{randomFact.text}"
                  </p>
                  
                  <div className="mt-6 flex flex-wrap justify-center items-center gap-3">
                    {randomFactPart && (
                      <span className="inline-flex items-center gap-1 text-sm text-[#8A8F98] font-medium">
                        <span>{randomFactPart.emoji}</span>
                        <span className="text-[#FC3D21] underline underline-offset-4 decoration-border/60">
                          {randomFactPart.name}
                        </span>
                      </span>
                    )}
                    <span className="h-1.5 w-1.5 rounded-full bg-[#222222]" />
                    <span className={`rounded px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide border ${RARITY_META[randomFact.rarity].tokenClass}`}>
                      {RARITY_META[randomFact.rarity].label}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#222222]" />
                    <span className="inline-flex items-center gap-1 text-xs text-[#8A8F98]">
                      {CATEGORY_META[randomFact.category].icon} {CATEGORY_META[randomFact.category].label}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button
                  onClick={handleNextRandomFact}
                  disabled={isRotating}
                  className="inline-flex items-center gap-2 rounded-full bg-[#FC3D21] px-6 py-3 text-sm font-bold text-[#030303] transition-all hover:scale-105 active:scale-98 shadow-[0_0_20px_rgba(252,61,33,0.25)]"
                >
                  <span className={`inline-block ${isRotating ? "animate-spin" : ""}`}>🔄</span>
                  Next Random Fact
                </button>
                <button
                  onClick={() => handleSpeak(randomFact.text, randomFact.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold border transition-all hover:scale-105 ${
                    speakingFactId === randomFact.id
                      ? "bg-rose-500/10 border-rose-500 text-rose-400"
                      : "border-border/60 bg-[#0D0D0D] text-[#8A8F98] hover:text-[#EAEAEA]"
                  }`}
                >
                  <span>{speakingFactId === randomFact.id ? "⏹️ Stop" : "🔊 Listen"}</span>
                </button>
                <button
                  onClick={() =>
                    isBookmarked(randomFact.id)
                      ? removeBookmark(randomFact.id)
                      : addBookmark(randomFact.id)
                  }
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold border transition-all hover:scale-105 ${
                    isBookmarked(randomFact.id)
                      ? "bg-amber-500/10 border-amber-500 text-amber-400"
                      : "border-border/60 bg-[#0D0D0D] text-[#8A8F98] hover:text-[#EAEAEA]"
                  }`}
                >
                  <span>{isBookmarked(randomFact.id) ? "❤️ Saved" : "🤍 Save Fact"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Filter Controls */}
      <div className="mb-8 rounded-2xl border border-border bg-[#0F0F0F]/40 p-5 space-y-4">
        {/* Search Input and Body Part selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search facts or body parts..."
              className="w-full rounded-xl border border-border bg-[#0F121F] pl-10 pr-4 py-3 text-sm text-[#EAEAEA] placeholder-[#8A8F98] outline-none transition-all focus:border-[#FC3D21]/40"
            />
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-[#8A8F98]">🔍</span>
          </div>

          <div className="relative">
            <select
              value={selectedBodyPart}
              onChange={(e) => setSelectedBodyPart(e.target.value)}
              className="w-full rounded-xl border border-border bg-[#0F121F] px-4 py-3 text-sm text-[#EAEAEA] outline-none focus:border-[#FC3D21]/40 appearance-none"
            >
              <option value="all">All Body Parts</option>
              {BODY_PARTS.map((part) => (
                <option key={part.id} value={part.id}>
                  {part.emoji} {part.name}
                </option>
              ))}
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-[#8A8F98]">▼</span>
          </div>
        </div>

        {/* Categories Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-xs font-bold text-[#8A8F98] mr-2 uppercase tracking-wider">Category:</span>
          <button
            onClick={() => setSelectedCategory("all")}
            className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
              selectedCategory === "all"
                ? "bg-[#FC3D21] text-[#030303]"
                : "bg-[#0F121F] border border-border/50 text-[#8A8F98] hover:text-[#EAEAEA]"
            }`}
          >
            All
          </button>
          {categoriesList.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedCategory === cat
                  ? "bg-[#FC3D21] text-[#030303]"
                  : "bg-[#0F121F] border border-border/50 text-[#8A8F98] hover:text-[#EAEAEA]"
              }`}
            >
              <span>{CATEGORY_META[cat].icon}</span>
              <span>{CATEGORY_META[cat].label}</span>
            </button>
          ))}
        </div>

        {/* Rarity Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-bold text-[#8A8F98] mr-2 uppercase tracking-wider">Rarity:</span>
          <button
            onClick={() => setSelectedRarity("all")}
            className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
              selectedRarity === "all"
                ? "bg-[#FC3D21] text-[#030303]"
                : "bg-[#0F121F] border border-border/50 text-[#8A8F98] hover:text-[#EAEAEA]"
            }`}
          >
            All
          </button>
          {raritiesList.map((rar) => (
            <button
              key={rar}
              onClick={() => setSelectedRarity(rar)}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                selectedRarity === rar
                  ? "bg-[#FC3D21] text-[#030303]"
                  : "bg-[#0F121F] border border-border/50 text-[#8A8F98] hover:text-[#EAEAEA]"
              }`}
            >
              {RARITY_META[rar].label}
            </button>
          ))}
        </div>
      </div>

      {/* Facts Card Grid */}
      <div className="mb-6 flex justify-between items-center">
        <span className="text-xs font-bold text-[#8A8F98]">
          Showing {filteredFacts.length} of {FACTS.length} Facts
        </span>
      </div>

      {filteredFacts.length === 0 ? (
        <div className="rounded-2xl border border-border bg-[#0F0F0F]/40 p-12 text-center">
          <span className="text-3xl">🔍</span>
          <h3 className="font-bold text-[#EAEAEA] mt-3">No facts matched your filters</h3>
          <p className="text-sm text-[#8A8F98] mt-1">Try resetting the search terms or category selectors.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacts.map((fact) => {
            const part = BODY_PARTS.find((p) => p.id === fact.bodyPartId);
            return (
              <motion.div
                layout
                key={fact.id}
                className="relative rounded-2xl border border-border/60 bg-[#0D0D0D]/80 p-5 flex flex-col justify-between hover:border-[#FC3D21]/30 transition-all hover:scale-[1.01] hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
              >
                <div>
                  <div className="flex justify-between items-start">
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#8A8F98]">
                      <span>{part?.emoji}</span>
                      <span className="font-semibold text-border-glow hover:underline cursor-pointer">
                        {part?.name}
                      </span>
                    </span>
                    
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleSpeak(fact.text, fact.id)}
                        className={`text-xs p-1.5 rounded-full border transition-all ${
                          speakingFactId === fact.id
                            ? "bg-rose-500/10 border-rose-500 text-rose-400"
                            : "border-border/60 text-[#8A8F98] hover:text-[#FC3D21]"
                        }`}
                        title="Read aloud"
                      >
                        🔊
                      </button>
                      <button
                        onClick={() =>
                          isBookmarked(fact.id) ? removeBookmark(fact.id) : addBookmark(fact.id)
                        }
                        className="text-[#8A8F98] hover:text-[#FC3D21] text-xs p-1"
                      >
                        {isBookmarked(fact.id) ? "❤️" : "🤍"}
                      </button>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-[#EAEAEA]">
                    "{fact.text}"
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-border/40 flex items-center justify-between">
                  <span className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider border ${RARITY_META[fact.rarity].tokenClass}`}>
                    {RARITY_META[fact.rarity].label}
                  </span>
                  
                  <span className="text-[10px] font-semibold text-[#8A8F98] flex items-center gap-1">
                    {CATEGORY_META[fact.category].icon} {CATEGORY_META[fact.category].label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
