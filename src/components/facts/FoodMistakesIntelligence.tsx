import { useState, useMemo } from "react";
import {
  FOOD_MISTAKES_CATALOG,
  INDIAN_FOOD_MYTHS,
  FOOD_MYTH_QUIZ_QUESTIONS,
  SPECIAL_CIRCUMSTANCES,
  FoodMistakeItem,
  MistakePhase,
  MistakeRiskLevel,
} from "@/data/foodMistakes";
import {
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  Info,
  Clock,
  ShieldAlert,
  Sparkles,
  RefreshCcw,
  Shuffle,
  Search,
  Coffee,
  Droplets,
  Flame,
  Activity,
  HeartPulse,
  Smile,
  Layers,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { useShuffledList } from "@/lib/shuffle";

export function FoodMistakesIntelligence() {
  // Phase filter: "all" | "before" | "during" | "after"
  const [selectedPhase, setSelectedPhase] = useState<MistakePhase | "all">("all");

  // Risk filter: "all" | "genuine_risk" | "context_dependent" | "popular_myth"
  const [selectedRisk, setSelectedRisk] = useState<MistakeRiskLevel | "all">("all");

  // Search input
  const [searchQuery, setSearchQuery] = useState("");

  // Shuffled lists for live freshness
  const { items: shuffledMistakes, reshuffle: reshuffleMistakes } =
    useShuffledList(FOOD_MISTAKES_CATALOG);
  const { items: shuffledMyths, reshuffle: reshuffleMyths } = useShuffledList(INDIAN_FOOD_MYTHS);

  // Interactive Quiz State
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Record<string, boolean>>({});

  // Filtered Mistakes
  const filteredMistakes = useMemo(() => {
    return shuffledMistakes.filter((item) => {
      const matchesPhase = selectedPhase === "all" || item.phase === selectedPhase;
      const matchesRisk = selectedRisk === "all" || item.riskLevel === selectedRisk;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.mistake.toLowerCase().includes(q) ||
        item.whyItMatters.toLowerCase().includes(q) ||
        item.betterPractice.toLowerCase().includes(q) ||
        item.plainSummary.toLowerCase().includes(q);
      return matchesPhase && matchesRisk && matchesSearch;
    });
  }, [shuffledMistakes, selectedPhase, selectedRisk, searchQuery]);

  // Quiz question helpers
  const currentQuiz = FOOD_MYTH_QUIZ_QUESTIONS[currentQuizIndex];

  const handleSelectQuizAnswer = (option: "Fact" | "Myth" | "Context-dependent") => {
    if (selectedAnswer !== null) return; // already answered this question
    setSelectedAnswer(option);
    setShowExplanation(true);
    const isCorrect = option === currentQuiz.correctAnswer;
    if (isCorrect && !answeredQuestions[currentQuiz.id]) {
      setQuizScore((prev) => prev + 1);
    }
    setAnsweredQuestions((prev) => ({ ...prev, [currentQuiz.id]: true }));
  };

  const handleNextQuiz = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setCurrentQuizIndex((prev) => (prev + 1) % FOOD_MYTH_QUIZ_QUESTIONS.length);
  };

  const handleResetQuiz = () => {
    setCurrentQuizIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setQuizScore(0);
    setAnsweredQuestions({});
  };

  // Helper for risk badge styling
  const getRiskBadge = (level: MistakeRiskLevel, label: string) => {
    switch (level) {
      case "genuine_risk":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-500/10 text-red-400 border border-red-500/30">
            <ShieldAlert className="w-3 h-3 text-red-400" />
            <span>{label}</span>
          </span>
        );
      case "context_dependent":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/30">
            <AlertTriangle className="w-3 h-3 text-amber-400" />
            <span>{label}</span>
          </span>
        );
      case "popular_myth":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-teal-500/10 text-teal-300 border border-teal-500/30">
            <CheckCircle2 className="w-3 h-3 text-teal-400" />
            <span>{label}</span>
          </span>
        );
    }
  };

  return (
    <div id="food-mistakes" className="w-full text-[#EAEAEA] scroll-mt-24">
      {/* ─── Header & Editorial Positioning ─── */}
      <div className="relative rounded-3xl border border-white/10 bg-[#0A0E1A] p-6 sm:p-10 mb-10 overflow-hidden shadow-2xl backdrop-blur-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-bold uppercase tracking-wide mb-4">
          <Sparkles className="w-3.5 h-3.5 text-teal-400" />
          <span>FOOD MISTAKES INTELLIGENCE • EVIDENCE-BASED</span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-space font-black tracking-tight text-white">
          Food Mistakes <span className="text-[#00E5C4]">Intelligence</span>
        </h2>

        <p className="text-base sm:text-lg text-white/90 font-medium mt-2 max-w-2xl">
          Before you eat. While you eat. After you eat. Understand what actually matters.
        </p>

        <p className="mt-4 text-xs sm:text-sm text-[#8A8F98] leading-relaxed max-w-3xl">
          The unique angle of this guide is separating genuine biological mistakes from harmless
          everyday myths. For example, drinking water with meals is generally fine; there is no need
          to endure a dry throat. But kitchen hand hygiene, drinking tea with iron-rich lentils,
          unsafe room-temperature food storage, and taking supplements without checking medicine
          interactions deserve serious attention.
        </p>

        {/* The 3-Tier Classification Rule */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/30 flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-red-300 block mb-0.5">1. Genuine Health Risks</strong>
              <p className="text-red-200/80 text-[11px] leading-relaxed">
                Proven microbiological hazards (hand hygiene, raw meat cross-contamination, leaving
                cooked rice out in warm heat) or chemical drug blocks.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30 flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-300 block mb-0.5">2. Context-Dependent Habits</strong>
              <p className="text-amber-200/80 text-[11px] leading-relaxed">
                Matters crucially for specific individuals: chai timing for low iron, upright
                posture for acid reflux, and portion structure for blood sugar.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-teal-950/20 border border-teal-500/30 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-teal-300 block mb-0.5">3. Popular Myths Debunked</strong>
              <p className="text-teal-200/80 text-[11px] leading-relaxed">
                Harmless everyday habits falsely labeled as dangerous (water with meals, fruit only
                on an empty stomach, or walking after eating).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── SECTION 1: Interactive Meal Timing Directory (Before, During, After) ─── */}
      <section className="mb-14 sm:mb-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#00E5C4] block">
              Timing Matters • Biological Reality Checks
            </span>
            <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              What to Avoid Across Meal Phases
            </h3>
            <p className="text-xs sm:text-sm text-[#8A8F98] mt-1 max-w-2xl leading-relaxed">
              Explore evidence-backed habits filtered by meal phase and clinical risk level.
            </p>
          </div>
          <button
            type="button"
            onClick={reshuffleMistakes}
            className="self-start sm:self-auto shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#00E5C4]/40 text-xs font-mono text-[#EAEAEA] transition-all cursor-pointer"
            title="Shuffle mistakes order"
          >
            <Shuffle className="w-3.5 h-3.5 text-[#00E5C4]" />
            <span>Shuffle Mistakes</span>
          </button>
        </div>

        {/* Phase Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          {/* Phase Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10 overflow-x-auto touch-scroll">
            {(
              [
                { id: "all", label: "All Phases (12)" },
                { id: "before", label: "1. Before Eating" },
                { id: "during", label: "2. During Eating" },
                { id: "after", label: "3. After Eating" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedPhase(tab.id)}
                className={`min-h-[44px] sm:min-h-[38px] px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 cursor-pointer touch-manipulation ${
                  selectedPhase === tab.id
                    ? "bg-[#00E5C4] text-black font-bold shadow-sm"
                    : "text-[#8A8F98] hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A8F98]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search hygiene, tea, water, reflux, walking..."
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] pl-10 pr-9 py-2.5 text-base sm:text-sm text-white placeholder-[#8A8F98] outline-none focus:border-[#00E5C4]/50 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8A8F98] hover:text-white p-1 text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Risk Level Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-6 text-xs">
          <span className="text-[10px] font-bold text-[#8A8F98] uppercase tracking-wider mr-1">
            Filter Risk:
          </span>
          {(
            [
              { id: "all", label: "All Categories" },
              { id: "genuine_risk", label: "🔴 Genuine Risks" },
              { id: "context_dependent", label: "🟡 Context-Dependent" },
              { id: "popular_myth", label: "🟢 Myths Debunked" },
            ] as const
          ).map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setSelectedRisk(filter.id)}
              className={`px-3 py-1 rounded-lg border transition-all text-xs cursor-pointer ${
                selectedRisk === filter.id
                  ? "bg-white text-black font-bold border-white"
                  : "bg-white/5 text-[#8A8F98] border-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Mistakes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredMistakes.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-white/10 bg-[#0A0E1A] p-5 sm:p-6 flex flex-col justify-between hover:border-teal-500/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono text-teal-300/80">{item.phaseLabel}</span>
                  {getRiskBadge(item.riskLevel, item.riskLabel)}
                </div>

                <h4 className="text-base font-bold text-white mb-2 leading-snug">{item.mistake}</h4>

                {/* Why It Matters */}
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-[#C5C8CE] leading-relaxed mb-3">
                  <strong className="text-white block text-[11px] mb-0.5">
                    🧬 Biological Reality:
                  </strong>
                  <p>{item.whyItMatters}</p>
                </div>

                {/* Better Practice Box */}
                <div className="p-3 rounded-xl bg-teal-500/[0.05] border border-teal-500/20 text-xs text-teal-100 leading-relaxed mb-3">
                  <strong className="text-teal-300 block text-[11px] mb-0.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    Better Practice:
                  </strong>
                  <p>{item.betterPractice}</p>
                </div>
              </div>

              {/* Clinical Note Footer */}
              <div className="pt-2.5 border-t border-white/10 text-[10px] font-mono text-[#8A8F98] leading-snug">
                🩺 <strong className="text-white/70">Clinical Note:</strong> {item.clinicalNote}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─── SECTION 2: The Indian Food Myths Worth Challenging ─── */}
      <section className="mb-14 sm:mb-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#00E5C4] block">
              Cultural Food Truths • Science vs Lore
            </span>
            <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              Indian Food Myths Worth Challenging
            </h3>
            <p className="text-xs sm:text-sm text-[#8A8F98] mt-1 max-w-2xl leading-relaxed">
              We test popular claims about curd at night, water with meals, fruit timing, and
              post-meal movement against human physiology.
            </p>
          </div>
          <button
            type="button"
            onClick={reshuffleMyths}
            className="self-start sm:self-auto shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#00E5C4]/40 text-xs font-mono text-[#EAEAEA] transition-all cursor-pointer"
            title="Shuffle myths order"
          >
            <Shuffle className="w-3.5 h-3.5 text-[#00E5C4]" />
            <span>Shuffle Myths</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {shuffledMyths.map((myth) => (
            <article
              key={myth.id}
              className="rounded-2xl border border-white/10 bg-[#0A0E1A] p-5 sm:p-6 flex flex-col justify-between hover:border-teal-500/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-[10px] font-mono text-[#8A8F98] px-2 py-0.5 rounded bg-white/5 border border-white/10">
                    {myth.foodConcerned}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${
                      myth.verdictType === "myth_busted"
                        ? "bg-teal-500/10 text-teal-300 border-teal-500/30"
                        : "bg-amber-500/10 text-amber-300 border-amber-500/30"
                    }`}
                  >
                    {myth.verdictType === "myth_busted" ? "Myth Busted ✕" : "Context Matters ⚖️"}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-2 leading-snug">"{myth.myth}"</h4>

                <div className="p-3 rounded-xl bg-teal-500/[0.04] border border-teal-500/20 text-xs text-teal-100 leading-relaxed mb-3">
                  <strong className="text-teal-300 block text-[11px] mb-0.5">
                    💡 The Biological Reality:
                  </strong>
                  <p>{myth.reality}</p>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-[#C5C8CE] leading-relaxed mb-3">
                  <strong className="text-white block text-[11px] mb-0.5">
                    🔬 Scientific Explanation:
                  </strong>
                  <p>{myth.scientificExplanation}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 text-xs font-medium text-amber-200">
                👉 <strong>Actionable Verdict:</strong> {myth.actionableVerdict}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─── SECTION 3: Interactive Feature: Food Myth Quiz (Fact, Myth, or Context-Dependent?) ─── */}
      <section className="mb-14 sm:mb-20">
        <div className="rounded-2xl sm:rounded-3xl border border-teal-500/30 bg-[#0A0E1A] p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-2">
                <HelpCircle className="w-3.5 h-3.5 text-teal-400" />
                <span>Interactive Learning Simulator</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
                Food Myth Quiz: Fact, Myth, or Context-Dependent?
              </h3>
              <p className="text-xs sm:text-sm text-[#8A8F98] mt-1">
                Test your nutrition intuition against human biology. Click an answer below.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-teal-300">
                Score: {quizScore} / {FOOD_MYTH_QUIZ_QUESTIONS.length}
              </span>
              <button
                type="button"
                onClick={handleResetQuiz}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/10 text-xs font-mono text-[#8A8F98] hover:text-white cursor-pointer"
                title="Reset quiz"
              >
                <RefreshCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Current Question Progress */}
          <div className="flex items-center justify-between text-xs text-[#8A8F98] mb-3">
            <span className="font-mono text-teal-300 font-bold">
              Question {currentQuizIndex + 1} of {FOOD_MYTH_QUIZ_QUESTIONS.length}
            </span>
            <div className="flex gap-1.5">
              {FOOD_MYTH_QUIZ_QUESTIONS.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-6 h-1.5 rounded-full transition-all ${
                    idx === currentQuizIndex
                      ? "bg-[#00E5C4]"
                      : idx < currentQuizIndex
                        ? "bg-teal-500/40"
                        : "bg-white/10"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Question Text */}
          <div className="my-6">
            <h4 className="text-lg sm:text-2xl font-bold text-white leading-snug">
              "{currentQuiz.question}"
            </h4>
          </div>

          {/* Option Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {currentQuiz.options.map((option) => {
              const isSelected = selectedAnswer === option;
              const isCorrectAnswer = option === currentQuiz.correctAnswer;
              let btnClass =
                "bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-teal-500/40";

              if (showExplanation) {
                if (isCorrectAnswer) {
                  btnClass = "bg-teal-500/20 border-teal-500 text-teal-300 font-bold";
                } else if (isSelected && !isCorrectAnswer) {
                  btnClass = "bg-red-500/20 border-red-500 text-red-300 font-bold";
                } else {
                  btnClass = "bg-white/[0.02] border-white/5 text-white/40 opacity-60";
                }
              }

              return (
                <button
                  key={option}
                  type="button"
                  disabled={showExplanation}
                  onClick={() => handleSelectQuizAnswer(option)}
                  className={`p-4 rounded-2xl border text-sm sm:text-base font-bold transition-all text-center cursor-pointer ${btnClass}`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {/* Explanation Outcome */}
          {showExplanation && (
            <div
              className={`p-5 rounded-2xl border mb-6 text-xs sm:text-sm ${
                selectedAnswer === currentQuiz.correctAnswer
                  ? "bg-teal-950/30 border-teal-500/40 text-teal-200"
                  : "bg-amber-950/30 border-amber-500/40 text-amber-200"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {selectedAnswer === currentQuiz.correctAnswer ? (
                  <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
                )}
                <span className="font-bold uppercase tracking-wider text-white">
                  {selectedAnswer === currentQuiz.correctAnswer
                    ? "Correct! 🎯"
                    : `Actually, it is ${currentQuiz.correctAnswer}`}
                </span>
              </div>
              <p className="leading-relaxed mb-3">{currentQuiz.explanation}</p>
              <div className="pt-2.5 border-t border-white/10 text-xs font-mono text-white/90">
                👉 <strong>Takeaway:</strong> {currentQuiz.practicalTakeaway}
              </div>
            </div>
          )}

          {/* Next Button */}
          {showExplanation && (
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleNextQuiz}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00E5C4] hover:bg-[#00cbb0] text-black font-bold text-xs sm:text-sm cursor-pointer transition-all"
              >
                <span>
                  {currentQuizIndex + 1 === FOOD_MYTH_QUIZ_QUESTIONS.length
                    ? "Finish & Review"
                    : "Next Question"}
                </span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ─── SECTION 4: Special Circumstances Matrix (Context Matters) ─── */}
      <section className="mb-14 sm:mb-20">
        <div className="mb-6">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#00E5C4] block">
            Personal Health Context • Beyond Generic Advice
          </span>
          <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight mt-1">
            Special Circumstances: When Habits Truly Matter
          </h3>
          <p className="text-xs sm:text-sm text-[#8A8F98] mt-1 max-w-2xl leading-relaxed">
            Generic nutrition advice fails because human bodies are different. Here is how habits
            change when managing specific health situations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SPECIAL_CIRCUMSTANCES.map((circ) => (
            <article
              key={circ.id}
              className="rounded-2xl border border-white/10 bg-[#0A0E1A] p-5 sm:p-6 flex flex-col justify-between hover:border-teal-500/40 transition-all"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center shrink-0">
                    <HeartPulse className="w-4 h-4 text-[#00E5C4]" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white">{circ.condition}</h4>
                </div>

                <div className="p-3 rounded-xl bg-red-950/20 border border-red-500/30 text-xs text-red-200 mb-3">
                  <strong className="text-red-400 block text-[11px] mb-0.5">
                    ⚠️ Critical Mistake:
                  </strong>
                  <p className="leading-relaxed">{circ.criticalMistake}</p>
                </div>

                <div className="p-3 rounded-xl bg-teal-500/[0.05] border border-teal-500/20 text-xs text-teal-100 mb-3">
                  <strong className="text-teal-300 block text-[11px] mb-0.5">
                    ✓ Smart Daily Habit:
                  </strong>
                  <p className="leading-relaxed">{circ.smartHabit}</p>
                </div>
              </div>

              <div className="pt-2.5 border-t border-white/10 text-[10px] text-[#8A8F98] leading-snug">
                🧬 <strong className="text-white/70">Why It Matters:</strong> {circ.whyItMatters}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
