import { useState, useMemo } from "react";
import { useBodyStore } from "@/store/useBodyStore";
import {
  FOOD_FACTS,
  FOOD_SYNERGIES,
  DRUG_FOOD_WARNINGS,
  INDIAN_NUTRITION_GAPS,
  NUTRITIONAL_DOMAINS,
  ESSENTIAL_NUTRIENTS_LIBRARY,
  IndianNutritionGap,
  NutritionalDomain,
  EssentialNutrient,
  FoodFactEntry,
} from "@/data/nutrition";
import {
  Apple,
  Sparkles,
  ShieldAlert,
  Activity,
  Flame,
  Scale,
  Search,
  AlertTriangle,
  HeartPulse,
  Brain,
  Leaf,
  Layers,
  ExternalLink,
  Calendar,
  Stethoscope,
  XCircle,
  Clock,
  Check,
  X,
  Filter,
  Shuffle,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Eye,
  Droplets,
  Dna,
  Sun,
  Bone,
  ShieldCheck,
  Info,
} from "lucide-react";
import { useShuffledList } from "@/lib/shuffle";

export function FoodNutritionHub() {
  const { language } = useBodyStore();

  // Active expanded Indian nutrition gap card (null or gap-id)
  const [activeGapId, setActiveGapId] = useState<string | null>("gap-b12");

  // Domain selection for food filtering ("all" or domain id)
  const [selectedDomain, setSelectedDomain] = useState<string>("all");

  // Target nutrient gap filter
  const [selectedNutrientGap, setSelectedNutrientGap] = useState<string>("all");

  // Food directory search query
  const [foodSearchQuery, setFoodSearchQuery] = useState("");

  // Searchable nutrient library filters
  const [nutrientSearchQuery, setNutrientSearchQuery] = useState("");
  const [nutrientCategoryFilter, setNutrientCategoryFilter] = useState<
    "all" | "vitamin" | "mineral" | "essential_component"
  >("all");

  // Shuffled dynamic lists (hydrated safely so visitors discover fresh foods & insights)
  const { items: shuffledFoods, reshuffle: reshuffleFoods } = useShuffledList(FOOD_FACTS);
  const { items: shuffledGaps, reshuffle: reshuffleGaps } = useShuffledList(INDIAN_NUTRITION_GAPS);
  const { items: shuffledSynergies, reshuffle: reshuffleSynergies } =
    useShuffledList(FOOD_SYNERGIES);
  const { items: shuffledWarnings, reshuffle: reshuffleWarnings } =
    useShuffledList(DRUG_FOOD_WARNINGS);

  // Filtered Food Intelligence Entries
  const filteredFoods = useMemo(() => {
    return shuffledFoods.filter((entry) => {
      // 1. Domain match
      let matchesDomain = true;
      if (selectedDomain !== "all") {
        if (entry.domainIds && entry.domainIds.length > 0) {
          matchesDomain = entry.domainIds.includes(selectedDomain);
        } else {
          // Fallback matching
          if (selectedDomain === "blood_oxygen") {
            matchesDomain =
              entry.system === "metabolism" ||
              entry.category === "legume" ||
              entry.foodName.toLowerCase().includes("amla") ||
              entry.foodName.toLowerCase().includes("chana");
          } else if (selectedDomain === "bones_teeth") {
            matchesDomain =
              entry.system === "muscle_bone" ||
              entry.foodName.toLowerCase().includes("ragi") ||
              entry.foodName.toLowerCase().includes("curd") ||
              entry.foodName.toLowerCase().includes("sesame") ||
              entry.foodName.toLowerCase().includes("soy");
          } else if (selectedDomain === "brain_nerves") {
            matchesDomain =
              entry.system === "brain" ||
              entry.foodName.toLowerCase().includes("flaxseed") ||
              entry.foodName.toLowerCase().includes("walnut") ||
              entry.foodName.toLowerCase().includes("salt");
          } else if (selectedDomain === "vision_eyes") {
            matchesDomain =
              entry.foodName.toLowerCase().includes("papaya") ||
              entry.foodName.toLowerCase().includes("moringa") ||
              entry.category === "fruit";
          } else if (selectedDomain === "digestion_gut") {
            matchesDomain =
              entry.system === "gut" ||
              entry.category === "fermented" ||
              entry.foodName.toLowerCase().includes("chana") ||
              entry.foodName.toLowerCase().includes("guava") ||
              entry.foodName.toLowerCase().includes("papaya");
          } else if (selectedDomain === "skin_connective") {
            matchesDomain =
              entry.foodName.toLowerCase().includes("amla") ||
              entry.foodName.toLowerCase().includes("guava") ||
              entry.foodName.toLowerCase().includes("soy") ||
              entry.foodName.toLowerCase().includes("turmeric");
          } else if (selectedDomain === "heart_circulation") {
            matchesDomain =
              entry.system === "heart" ||
              entry.foodName.toLowerCase().includes("flaxseed") ||
              entry.foodName.toLowerCase().includes("beetroot") ||
              entry.foodName.toLowerCase().includes("makhana");
          } else if (selectedDomain === "immunity_defense") {
            matchesDomain =
              entry.foodName.toLowerCase().includes("amla") ||
              entry.foodName.toLowerCase().includes("moong") ||
              entry.foodName.toLowerCase().includes("ginger") ||
              entry.foodName.toLowerCase().includes("turmeric");
          } else if (selectedDomain === "thyroid_metabolism") {
            matchesDomain =
              entry.system === "metabolism" ||
              entry.foodName.toLowerCase().includes("salt") ||
              entry.foodName.toLowerCase().includes("curd");
          }
        }
      }

      // 2. Target Nutrient Gap filter match
      let matchesNutrientGap = true;
      if (selectedNutrientGap !== "all") {
        const q = selectedNutrientGap.toLowerCase();
        matchesNutrientGap = Boolean(
          entry.whatItContains.toLowerCase().includes(q) ||
          entry.provenBenefit.toLowerCase().includes(q) ||
          (entry.keyNutrientsList &&
            entry.keyNutrientsList.some((k) => k.toLowerCase().includes(q))) ||
          (entry.nutritionalGap && entry.nutritionalGap.toLowerCase().includes(q)) ||
          (entry.takeaway && entry.takeaway.toLowerCase().includes(q)),
        );
      }

      // 3. Search query
      const q = foodSearchQuery.toLowerCase().trim();
      const matchesSearch = Boolean(
        !q ||
        entry.foodName.toLowerCase().includes(q) ||
        entry.hindiName.toLowerCase().includes(q) ||
        entry.whatItContains.toLowerCase().includes(q) ||
        entry.provenBenefit.toLowerCase().includes(q) ||
        (entry.takeaway && entry.takeaway.toLowerCase().includes(q)) ||
        (entry.nutritionalGap && entry.nutritionalGap.toLowerCase().includes(q)) ||
        (entry.keyNutrientsList && entry.keyNutrientsList.some((k) => k.toLowerCase().includes(q))),
      );

      return matchesDomain && matchesNutrientGap && matchesSearch;
    });
  }, [shuffledFoods, selectedDomain, selectedNutrientGap, foodSearchQuery]);

  // Filtered Nutrients Library
  const filteredNutrients = useMemo(() => {
    return ESSENTIAL_NUTRIENTS_LIBRARY.filter((n) => {
      const matchesCat = nutrientCategoryFilter === "all" || n.category === nutrientCategoryFilter;
      const q = nutrientSearchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        n.name.toLowerCase().includes(q) ||
        n.keyFunction.toLowerCase().includes(q) ||
        n.indianFoodExamples.some((f) => f.toLowerCase().includes(q)) ||
        n.absorptionTip.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [nutrientCategoryFilter, nutrientSearchQuery]);

  // Domain icon resolver helper
  const getDomainIcon = (domainId: string) => {
    switch (domainId) {
      case "blood_oxygen":
        return Droplets;
      case "bones_teeth":
        return Bone;
      case "brain_nerves":
        return Brain;
      case "vision_eyes":
        return Eye;
      case "digestion_gut":
        return Activity;
      case "skin_connective":
        return Sparkles;
      case "heart_circulation":
        return HeartPulse;
      case "immunity_defense":
        return ShieldCheck;
      case "thyroid_metabolism":
        return Flame;
      default:
        return Layers;
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-[#EAEAEA] font-sans selection:bg-[#00E5C4]/30 pb-32 pb-[calc(7.5rem+env(safe-area-inset-bottom))]">
      {/* ─── Clinical Medical Disclaimer Banner ─── */}
      <div className="w-full bg-red-950/70 border-b-2 border-red-500/50 px-3.5 sm:px-4 py-3 flex items-start sm:items-center justify-center gap-3">
        <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5 sm:mt-0" />
        <p className="text-[11px] sm:text-xs font-sans text-red-200 leading-relaxed max-w-5xl text-left">
          <strong className="text-white uppercase tracking-wider">
            CLINICAL & NUTRITIONAL DISCLAIMER:
          </strong>{" "}
          This module provides evidence-based individual food and nutrient intelligence benchmarked
          against the ICMR–NIN Dietary Guidelines for Indians (2024) and the Indian Food Composition
          Tables (IFCT). It does NOT provide meal plans or individualized Medical Nutrition Therapy
          (MNT). Suspected nutrient deficiencies require clinical laboratory testing and
          professional medical treatment. Never alter prescribed medical therapy without consulting
          your doctor or clinical pharmacist.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-12">
        {/* ─── Hero Header & Food Intelligence Manifesto ─── */}
        <header className="text-center max-w-4xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-[11px] sm:text-xs font-bold tracking-wide uppercase mb-3 sm:mb-4">
            <Apple className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-400" />
            <span>FOOD INTELLIGENCE • ICMR-NIN 2024 EVIDENCE BASE</span>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-6xl font-space font-black tracking-tight text-white uppercase">
            Food <span className="text-[#00E5C4]">Intelligence</span>
          </h1>

          <p className="text-base sm:text-xl font-bold text-white/90 mt-2">
            Small Food Choices. Big Nutritional Impact.
          </p>

          <p className="text-xs sm:text-sm font-mono text-teal-300/80 mt-1">
            Individual foods • Nutrient intelligence • Indian dietary needs • Evidence-based tips
          </p>

          <p className="mt-4 sm:mt-6 text-xs sm:text-base text-[#8A8F98] leading-relaxed max-w-3xl mx-auto">
            Your body depends on dozens of essential nutrients. Yet many people focus on calories
            alone and overlook nutrients that support blood formation, nerves, bones, immunity,
            vision, muscles and metabolism. Food Intelligence explores individual foods and the
            science behind them — strictly without complex meal prep recipes or restrictive diets.
            Discover what a food actually contributes, which nutritional gaps it helps address, how
            to maximize absorption, and what you should not expect from it.
          </p>

          {/* The 3-Standard Framework (ICMR-NIN 2024) */}
          <div className="mt-6 sm:mt-8 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-left">
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#00E5C4] flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-teal-400" />
                The ICMR-NIN 3-Standard Evaluation Rule
              </span>
              <span className="text-[10px] font-mono text-[#8A8F98]">NIN Guidelines 2024</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <strong className="text-teal-300 block mb-1">1. Nutrient Content</strong>
                <p className="text-[#8A8F98] leading-relaxed">
                  How much of a nutrient is physically present in the food (measured per 100g in
                  laboratory tests).
                </p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <strong className="text-teal-300 block mb-1">2. Nutritional Contribution</strong>
                <p className="text-[#8A8F98] leading-relaxed">
                  How much a realistic, everyday serving (e.g., 1 katori or 1 spoon) actually
                  contributes toward your daily need.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <strong className="text-teal-300 block mb-1">3. Health Outcome</strong>
                <p className="text-[#8A8F98] leading-relaxed">
                  What clinical trials actually prove about human health, rather than what is merely
                  claimed in marketing.
                </p>
              </div>
            </div>
            <p className="text-[11px] font-mono text-center text-teal-300/90 mt-3 pt-2 border-t border-white/5">
              "Understand the food. Understand the nutrient. Understand the evidence."
            </p>
          </div>

          {/* The 5 Diagnostic Questions Banner */}
          <div className="mt-4 p-3 sm:p-4 rounded-xl bg-teal-500/[0.04] border border-teal-500/20 text-left">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-teal-400 mb-2 block">
              Every individual food is evaluated through 5 core questions:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 text-[11px] text-[#C5C8CE]">
              <div className="flex items-start gap-1.5">
                <span className="text-teal-400 font-bold shrink-0">Q1.</span>
                <span>What nutrients does it actually provide?</span>
              </div>
              <div className="flex items-start gap-1.5">
                <span className="text-teal-400 font-bold shrink-0">Q2.</span>
                <span>Which body functions depend on those nutrients?</span>
              </div>
              <div className="flex items-start gap-1.5">
                <span className="text-teal-400 font-bold shrink-0">Q3.</span>
                <span>Which nutritional gaps might it help address?</span>
              </div>
              <div className="flex items-start gap-1.5">
                <span className="text-teal-400 font-bold shrink-0">Q4.</span>
                <span>How can you get the most nutritional value from it?</span>
              </div>
              <div className="flex items-start gap-1.5">
                <span className="text-teal-400 font-bold shrink-0">Q5.</span>
                <span>What are its limitations, and who should be careful?</span>
              </div>
            </div>
          </div>
        </header>

        {/* ─── Sticky Quick Navigation Bar ─── */}
        <nav
          aria-label="Food Intelligence Navigation"
          className="sticky top-[48px] z-20 -mx-4 px-4 py-2 bg-[#030303]/90 backdrop-blur-md border-y border-white/10 mb-8 flex items-center gap-2 overflow-x-auto touch-scroll"
        >
          {[
            { id: "gaps", label: "Indian Gaps (6)", icon: Sparkles },
            { id: "domains", label: "9 Body Domains", icon: Layers },
            { id: "nutrients", label: "Nutrient Library", icon: BookOpen },
            { id: "foods", label: "36 Foods Directory", icon: Apple },
            { id: "synergies", label: "Synergies", icon: Flame },
            { id: "interactions", label: "Safety Alerts", icon: ShieldAlert },
          ].map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-[#EAEAEA] shrink-0 active:bg-[#00E5C4]/20 active:text-[#00E5C4] hover:bg-white/10 transition-all"
            >
              <sec.icon className="w-3.5 h-3.5 text-[#00E5C4]" />
              <span>{sec.label}</span>
            </a>
          ))}
        </nav>

        {/* ─── SECTION 1: Special Indian Nutrition Series (6 Gaps) ─── */}
        <section id="gaps" aria-labelledby="gaps-heading" className="mb-14 sm:mb-20 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8">
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#00E5C4] block">
                ICMR-NIN Priority Gaps • Evidence Series
              </span>
              <h2
                id="gaps-heading"
                className="text-xl sm:text-3xl font-bold text-white tracking-tight mt-1"
              >
                Special Indian Nutrition Series
              </h2>
              <p className="text-xs sm:text-sm text-[#8A8F98] mt-1.5 max-w-2xl leading-relaxed">
                Critical nutrients that require heightened clinical attention in Indian dietary
                patterns, especially where diets are restrictive, monotonous, or lack fortified
                foods.
              </p>
            </div>
            <button
              type="button"
              onClick={reshuffleGaps}
              className="self-start sm:self-auto shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#00E5C4]/40 text-xs font-mono text-[#EAEAEA] transition-all cursor-pointer"
              title="Shuffle gaps order"
            >
              <Shuffle className="w-3.5 h-3.5 text-[#00E5C4]" />
              <span>Shuffle Series</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {shuffledGaps.map((gap) => {
              const isExpanded = activeGapId === gap.id;
              return (
                <div
                  key={gap.id}
                  className={`rounded-2xl border p-5 sm:p-6 transition-all flex flex-col justify-between ${
                    isExpanded
                      ? "border-teal-500/40 bg-teal-950/10 shadow-xl ring-1 ring-teal-500/30"
                      : "border-white/10 bg-[#0A0E1A] hover:border-white/25"
                  }`}
                >
                  <div>
                    {/* Badge & Nutrient */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-teal-500/10 text-teal-300 border border-teal-500/30">
                        {gap.badge}
                      </span>
                      <span className="text-[10px] font-mono text-[#8A8F98]">ICMR-NIN 2024</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white mb-1 leading-snug">
                      {gap.title}
                    </h3>
                    <p className="text-xs text-teal-300/90 font-medium mb-3">{gap.subtitle}</p>

                    {/* Core Insight */}
                    <div className="rounded-xl bg-white/[0.02] border border-white/5 p-3 mb-3 text-xs text-[#C5C8CE] leading-relaxed">
                      <strong className="text-white block text-[11px] mb-1">
                        💡 Key Nutritional Insight:
                      </strong>
                      <p>{gap.coreInsight}</p>
                    </div>

                    {/* Expandable Deep Clinical Nuance */}
                    {isExpanded && (
                      <div className="space-y-3 pt-2 text-xs border-t border-white/10">
                        <div>
                          <strong className="text-white block text-[11px] mb-0.5">
                            🩺 Why It Matters to Your Body:
                          </strong>
                          <p className="text-[#8A8F98] leading-relaxed">{gap.whyItMatters}</p>
                        </div>

                        <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-200">
                          <strong className="text-amber-400 block text-[11px] mb-0.5">
                            ⚠️ Clinical Reality Check:
                          </strong>
                          <p className="text-[11px] leading-relaxed">{gap.clinicalReality}</p>
                        </div>

                        <div className="p-3 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-200">
                          <strong className="text-teal-300 block text-[11px] mb-0.5">
                            📋 ICMR-NIN 2024 Benchmark:
                          </strong>
                          <p className="text-[11px] leading-relaxed">{gap.icmrStandard}</p>
                        </div>

                        <div>
                          <strong className="text-white/80 block text-[11px] mb-1">
                            Affordable Indian Food Sources:
                          </strong>
                          <div className="flex flex-wrap gap-1">
                            {gap.foodExamples.map((food, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-[#EAEAEA]"
                              >
                                {food}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-3 mt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <button
                      type="button"
                      onClick={() => setActiveGapId(isExpanded ? null : gap.id)}
                      className="inline-flex items-center gap-1 text-teal-400 hover:text-teal-300 font-semibold cursor-pointer"
                    >
                      <span>{isExpanded ? "Collapse Details" : "Read Clinical Breakdown"}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <a
                      href={gap.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#8A8F98] hover:text-white text-[10px] font-mono"
                    >
                      <span>Guideline</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── SECTION 2: The 9 Body Nutritional Domains ─── */}
        <section
          id="domains"
          aria-labelledby="domains-heading"
          className="mb-14 sm:mb-20 scroll-mt-24"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8">
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#00E5C4] block">
                Targeted Physiology • Whole Body Science
              </span>
              <h2
                id="domains-heading"
                className="text-xl sm:text-3xl font-bold text-white tracking-tight mt-1"
              >
                9 Nutritional Domains Across Your Body
              </h2>
              <p className="text-xs sm:text-sm text-[#8A8F98] mt-1.5 max-w-2xl leading-relaxed">
                Your body functions are interconnected. Explore which specific nutrients and foods
                support each domain, and filter the food directory below with one click.
              </p>
            </div>
            {selectedDomain !== "all" && (
              <button
                type="button"
                onClick={() => setSelectedDomain("all")}
                className="self-start sm:self-auto shrink-0 px-3 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold hover:bg-teal-500/20 cursor-pointer"
              >
                Clear Domain Filter (Showing All)
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {NUTRITIONAL_DOMAINS.map((domain) => {
              const Icon = getDomainIcon(domain.id);
              const isSelected = selectedDomain === domain.id;
              return (
                <div
                  key={domain.id}
                  onClick={() => setSelectedDomain(isSelected ? "all" : domain.id)}
                  className={`rounded-2xl border p-4 sm:p-5 flex flex-col justify-between transition-all cursor-pointer ${
                    isSelected
                      ? "border-[#00E5C4] bg-teal-950/20 shadow-lg ring-1 ring-[#00E5C4]"
                      : "border-white/10 bg-[#0A0E1A] hover:border-white/30"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-[#00E5C4]" />
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-white">
                          {domain.title}
                        </h3>
                      </div>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                          isSelected
                            ? "bg-[#00E5C4] text-black font-bold border-[#00E5C4]"
                            : "bg-white/5 text-[#8A8F98] border-white/10"
                        }`}
                      >
                        {isSelected ? "Filtered ✓" : "Click to Filter"}
                      </span>
                    </div>

                    <p className="text-xs text-[#8A8F98] leading-relaxed mb-3">
                      {domain.bodyFunctionSummary}
                    </p>

                    <div className="mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300 block mb-1">
                        Key Nutrients:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {domain.keyNutrients.map((nut, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-white/90"
                          >
                            {nut}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-[#8A8F98]">
                      <strong className="text-white/70 block mb-0.5">Top Indian Foods:</strong>
                      <span>{domain.foodExamples.join(", ")}</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-white/10 text-[10px] text-amber-300/80 leading-snug">
                    <strong className="text-amber-400">Caution:</strong> {domain.clinicalCaution}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── SECTION 3: Searchable Nutrient Library (13 Vitamins + 11 Minerals + 5 Essentials) ─── */}
        <section
          id="nutrients"
          aria-labelledby="nutrients-heading"
          className="mb-14 sm:mb-20 scroll-mt-24"
        >
          <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0A0E1A] p-4 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-2.5">
                  <BookOpen className="w-3.5 h-3.5 text-teal-400" />
                  <span>Comprehensive Nutrient Observatory</span>
                </div>
                <h2
                  id="nutrients-heading"
                  className="text-xl sm:text-3xl font-bold text-white tracking-tight"
                >
                  Essential Vitamins & Major Minerals Library
                </h2>
                <p className="text-xs sm:text-sm text-[#8A8F98] mt-1.5 max-w-2xl leading-relaxed">
                  All 13 recognized vitamins, 11 essential minerals, and 5 foundational dietary
                  components explained with affordable Indian food sources and absorption
                  principles.
                </p>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10 shrink-0 overflow-x-auto touch-scroll">
                {(
                  [
                    { id: "all", label: "All (29)" },
                    { id: "vitamin", label: "Vitamins (13)" },
                    { id: "mineral", label: "Minerals (11)" },
                    { id: "essential_component", label: "Essentials (5)" },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setNutrientCategoryFilter(tab.id)}
                    className={`min-h-[38px] px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
                      nutrientCategoryFilter === tab.id
                        ? "bg-[#00E5C4] text-black shadow-sm font-bold"
                        : "text-[#8A8F98] hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Nutrient Search Bar */}
            <div className="relative w-full max-w-md mb-6">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A8F98]" />
              <input
                type="text"
                value={nutrientSearchQuery}
                onChange={(e) => setNutrientSearchQuery(e.target.value)}
                placeholder="Search B12, Zinc, Iron, Omega-3, Calcium, Folate..."
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] pl-10 pr-9 py-2.5 text-sm text-white placeholder-[#8A8F98] outline-none focus:border-[#00E5C4]/50 transition-all"
              />
              {nutrientSearchQuery && (
                <button
                  type="button"
                  onClick={() => setNutrientSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8A8F98] hover:text-white p-1 text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Nutrients Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredNutrients.map((nut) => (
                <div
                  key={nut.id}
                  className="rounded-xl border border-white/10 bg-white/[0.02] p-4 flex flex-col justify-between hover:border-teal-500/30 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-white leading-tight">{nut.name}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20 shrink-0">
                        {nut.categoryLabel}
                      </span>
                    </div>

                    <p className="text-xs text-[#C5C8CE] leading-relaxed mb-3">{nut.keyFunction}</p>

                    <div className="mb-2.5 p-2 rounded-lg bg-white/[0.02] border border-white/5 text-[11px]">
                      <strong className="text-teal-300 block mb-0.5">
                        Affordable Indian Foods:
                      </strong>
                      <span className="text-white/80">{nut.indianFoodExamples.join(", ")}</span>
                    </div>

                    <div className="mb-2.5 text-[11px] text-amber-200/90">
                      <strong className="text-amber-400 block mb-0.5">
                        Deficiency / Gap Risk:
                      </strong>
                      <p>{nut.deficiencyOrGapNote}</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/5 text-[10px] font-mono text-teal-300/80">
                    💡 <strong>Absorption Tip:</strong> {nut.absorptionTip}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 4: Individual Food Intelligence Directory (36 Foods & Staples) ─── */}
        <section id="foods" aria-labelledby="foods-heading" className="mb-14 sm:mb-20 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#00E5C4] block">
                Evidence-Backed • 36 Indian Power Foods & Staples
              </span>
              <h2
                id="foods-heading"
                className="text-xl sm:text-3xl font-bold text-white tracking-tight mt-1"
              >
                Individual Food Intelligence Directory
              </h2>
              <p className="text-xs sm:text-sm text-[#8A8F98] mt-1.5 max-w-2xl leading-relaxed">
                What each food actually provides, which nutritional gaps it helps address, how to
                maximize absorption, and its clinical limitations — across the whole body. No meal
                prep. No fake claims.
              </p>
            </div>

            {/* Search Input & Shuffle Button */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A8F98]" />
                <input
                  type="text"
                  value={foodSearchQuery}
                  onChange={(e) => setFoodSearchQuery(e.target.value)}
                  placeholder="Search curd, amla, chana, soy chunks, flaxseed, salt, ragi..."
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] pl-10 pr-9 py-2.5 text-base sm:text-sm text-white placeholder-[#8A8F98] outline-none focus:border-[#00E5C4]/50 transition-all"
                />
                {foodSearchQuery && (
                  <button
                    type="button"
                    onClick={() => setFoodSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8A8F98] hover:text-white p-1 text-xs"
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div>
              <button
                type="button"
                onClick={reshuffleFoods}
                className="shrink-0 flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#00E5C4]/40 text-xs font-mono text-[#EAEAEA] transition-all cursor-pointer"
                title="Shuffle foods order"
              >
                <Shuffle className="w-3.5 h-3.5 text-[#00E5C4]" />
                <span className="hidden sm:inline">Shuffle</span>
              </button>
            </div>
          </div>

          {/* Target Nutrient Gap Filter Bar */}
          <div className="mb-6 p-3 sm:p-4 rounded-2xl bg-teal-500/[0.04] border border-teal-500/20">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#00E5C4] mb-2.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              Filter by Target Nutrient Need / Dietary Gap:
            </span>
            <div className="flex gap-2 overflow-x-auto pb-1 touch-scroll -mx-2 px-2 sm:mx-0 sm:px-0">
              {[
                { id: "all", label: "All 36 Indian Foods" },
                { id: "b12", label: "🧬 Vitamin B12 & Nervous System" },
                { id: "iron", label: "🩸 Iron & Oxygen Transport" },
                { id: "protein", label: "💪 Plant Protein & Muscle" },
                { id: "calcium", label: "🦴 Calcium & Bone Health" },
                { id: "fibre", label: "🌿 Dietary Fibre & Digestion" },
                { id: "omega", label: "🫀 Plant Omega-3 (ALA) & Heart" },
                { id: "vitamin c", label: "🍋 Vitamin C & Collagen" },
                { id: "potassium", label: "⚡ Potassium & BP Balance" },
              ].map((gap) => {
                const isSelected = selectedNutrientGap === gap.id;
                return (
                  <button
                    key={gap.id}
                    type="button"
                    onClick={() => setSelectedNutrientGap(gap.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap border transition-all ${
                      isSelected
                        ? "bg-[#00E5C4] text-black border-[#00E5C4] shadow-md ring-1 ring-[#00E5C4]/30"
                        : "bg-white/[0.03] text-[#C5C8CE] border-white/10 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {gap.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 36 Food Cards Grid (The 5-Question Format) */}
          {filteredFoods.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-white/10 p-8 sm:p-12 text-center text-[#8A8F98]">
              <Apple className="w-10 h-10 mx-auto text-[#8A8F98] mb-3 opacity-50" />
              <h3 className="text-base font-bold text-white mb-1">
                No matching food entries found
              </h3>
              <p className="text-xs">
                Try clearing your search query or switching the nutrient gap filter to 'All 36
                Indian Foods'.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {filteredFoods.map((entry) => {
                const displayName = entry.foodName;
                const takeaway =
                  entry.takeaway ||
                  `${entry.foodName} is a nutrient-dense Indian staple that provides ${entry.whatItContains} to support ${entry.systemLabel.toLowerCase()}.`;
                const keyNutrients =
                  entry.keyNutrientsList && entry.keyNutrientsList.length > 0
                    ? entry.keyNutrientsList
                    : entry.whatItContains.split(", ").map((s) => s.trim());
                const nutritionalGap = entry.nutritionalGap || entry.situationTag;
                const howToMaximize = entry.howToMaximize || entry.bestPairing;
                const budgetEstimate = entry.budgetEstimate || "₹5–₹15 per typical daily serving";
                const whatItDoesNotDo = entry.whatItDoesNotDo || entry.mythCheck.reality;

                return (
                  <article
                    key={entry.id}
                    className="rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0A0E1A] p-5 sm:p-7 flex flex-col justify-between hover:border-teal-500/30 transition-all shadow-xl"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <span className="px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-semibold text-teal-300 bg-teal-500/10 border border-teal-500/30">
                            {entry.categoryLabel}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono text-[#8A8F98] bg-white/5 border border-white/10">
                            {entry.indianServingContext}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-teal-400/90 font-medium">
                          {entry.readingGrade}
                        </span>
                      </div>

                      {/* Food Name Header */}
                      <div className="mb-3">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {displayName}
                        </h3>
                        <div className="text-xs font-mono text-[#8A8F98] mt-0.5">
                          {entry.hindiName} • {entry.systemLabel}
                        </div>
                      </div>

                      {/* The Takeaway Banner */}
                      <div className="mb-4 rounded-xl bg-teal-500/10 border border-teal-500/30 p-3.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 block mb-1 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                          The Takeaway:
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-white leading-snug">
                          {takeaway}
                        </p>
                      </div>

                      {/* Question 1: What Nutrients Does It Actually Provide? */}
                      <div className="mb-3.5 rounded-xl bg-white/[0.02] border border-white/5 p-3.5 text-xs text-[#EAEAEA] leading-relaxed">
                        <strong className="text-teal-300 uppercase tracking-wider text-[10px] block mb-1.5">
                          Q1. What nutrients does it actually provide?
                        </strong>
                        <div className="flex flex-wrap gap-1.5 mb-1.5">
                          {keyNutrients.map((nut, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] text-white/90 font-medium"
                            >
                              {nut}
                            </span>
                          ))}
                        </div>
                        <p className="text-[11px] text-[#8A8F98]">{entry.whatItContains}</p>
                      </div>

                      {/* Question 2: Which Body Functions Depend on Those Nutrients? */}
                      <div className="mb-3.5 rounded-xl bg-white/[0.02] border border-white/5 p-3.5 text-xs text-[#EAEAEA] leading-relaxed">
                        <strong className="text-teal-300 uppercase tracking-wider text-[10px] block mb-1">
                          Q2. Which body functions depend on those nutrients?
                        </strong>
                        <p className="text-white/90 font-medium">{entry.provenBenefit}</p>
                      </div>

                      {/* Question 3: Which Nutritional Gaps Might It Help Address? */}
                      <div className="mb-3.5 rounded-xl bg-white/[0.02] border border-white/5 p-3.5 text-xs text-[#EAEAEA] leading-relaxed">
                        <strong className="text-teal-300 uppercase tracking-wider text-[10px] block mb-1">
                          Q3. Which nutritional gaps might it help address?
                        </strong>
                        <p className="text-[#C5C8CE]">{nutritionalGap}</p>
                      </div>

                      {/* Question 4: How Can You Get the Most Value From It? */}
                      <div className="mb-3.5 rounded-xl bg-teal-500/[0.03] border border-teal-500/20 p-3.5 text-xs text-[#EAEAEA] leading-relaxed">
                        <strong className="text-teal-300 uppercase tracking-wider text-[10px] block mb-1">
                          Q4. How to get the most nutritional value from it?
                        </strong>
                        <p className="text-white/90 mb-1">{howToMaximize}</p>
                        <div className="text-[10px] font-mono text-[#8A8F98] pt-1 border-t border-teal-500/10">
                          🍛 <strong>Best Food Pairing:</strong> {entry.bestPairing}
                        </div>
                      </div>

                      {/* Question 5: What Are Its Limitations, and Who Should Be Careful? */}
                      <div className="mb-4 space-y-2">
                        {/* What It Does NOT Do */}
                        <div className="rounded-xl bg-amber-500/10 border border-amber-500/25 p-3 text-xs leading-relaxed">
                          <strong className="text-amber-400 uppercase tracking-wider text-[10px] block mb-1 flex items-center gap-1.5">
                            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                            Q5a. What it does NOT do (Limitations & Myth Check):
                          </strong>
                          <p className="text-amber-100/90 text-[11px] leading-relaxed mb-1">
                            {whatItDoesNotDo}
                          </p>
                          <div className="text-[10px] text-amber-300/80 italic">
                            Myth: "{entry.mythCheck.claim}" → Reality: {entry.mythCheck.reality}
                          </div>
                        </div>

                        {/* Who Should Be Careful */}
                        <div className="rounded-xl bg-rose-500/10 border border-rose-500/25 p-3 text-xs text-rose-200 leading-relaxed">
                          <strong className="text-rose-400 uppercase tracking-wider text-[10px] block mb-1 flex items-center gap-1.5">
                            <XCircle className="w-3.5 h-3.5 text-rose-400" />
                            Q5b. Who should be careful (Medical Exclusions):
                          </strong>
                          <ul className="list-disc list-inside space-y-0.5 text-[11px] text-rose-200/90">
                            {entry.whoShouldLimit.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Budget Intelligence & Serving Cost */}
                      <div className="mb-4 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/5 text-[11px] flex items-center justify-between text-[#8A8F98]">
                        <span>
                          <strong className="text-white/70">Budget Intelligence:</strong>{" "}
                          {budgetEstimate}
                        </span>
                        <span className="font-mono text-teal-400">Affordable Staple</span>
                      </div>

                      {/* Clinical Triad: Do / Don't / Ask Doctor If */}
                      <div className="my-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8F98] mb-2 block">
                          Guidance Rules (Do / Don't / Ask a Doctor If):
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                          {/* DO */}
                          <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-2.5 flex flex-col">
                            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1 mb-1">
                              <Check className="w-3 h-3 text-emerald-400" />
                              DO
                            </span>
                            <p className="text-[11px] text-emerald-200/90 leading-snug">
                              {entry.guidance.do}
                            </p>
                          </div>

                          {/* DON'T */}
                          <div className="rounded-lg bg-rose-500/10 border border-rose-500/20 p-2.5 flex flex-col">
                            <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1 mb-1">
                              <X className="w-3 h-3 text-rose-400" />
                              DON'T
                            </span>
                            <p className="text-[11px] text-rose-200/90 leading-snug">
                              {entry.guidance.dont}
                            </p>
                          </div>

                          {/* ASK A DOCTOR IF */}
                          <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 p-2.5 flex flex-col">
                            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1 mb-1">
                              <Stethoscope className="w-3 h-3 text-amber-400" />
                              ASK DOCTOR
                            </span>
                            <p className="text-[11px] text-amber-200/90 leading-snug">
                              {entry.guidance.askDoctorIf}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Footer: Evidence Tier & Official Source */}
                    <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-[10px] font-mono text-[#8A8F98]">
                      <span className="flex items-center gap-1.5 text-[#8A8F98]">
                        <Calendar className="w-3 h-3 text-teal-400" />
                        <span>
                          Reviewed: {entry.lastReviewed} • {entry.evidenceTier}
                        </span>
                      </span>
                      <a
                        href={entry.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-teal-400 hover:text-teal-300 font-medium"
                      >
                        <span>ICMR-NIN / PubMed Source</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        {/* ─── SECTION 5: Biochemical Food Synergy Multipliers ─── */}
        <section
          id="synergies"
          aria-labelledby="synergy-heading"
          className="mb-14 sm:mb-20 scroll-mt-24"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8">
            <div className="max-w-3xl">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#00E5C4] block">
                Biochemical Synergy • Bioavailability Science
              </span>
              <h2
                id="synergy-heading"
                className="text-xl sm:text-3xl font-bold text-white tracking-tight mt-1"
              >
                Food Synergies: The 1 + 1 = 10 Bioavailability Multipliers
              </h2>
              <p className="text-xs sm:text-sm text-[#8A8F98] mt-2 leading-relaxed">
                Certain vitamins and minerals are difficult for your body to absorb on their own.
                When paired with natural catalysts like Vitamin C, black pepper, or healthy fats,
                your body absorbs up to 20 times more.
              </p>
            </div>
            <button
              type="button"
              onClick={reshuffleSynergies}
              className="self-start sm:self-auto shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#00E5C4]/40 text-xs font-mono text-[#EAEAEA] transition-all cursor-pointer"
              title="Shuffle synergies order"
            >
              <Shuffle className="w-3.5 h-3.5 text-[#00E5C4]" />
              <span>Shuffle Pairs</span>
            </button>
          </div>

          <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory touch-scroll">
            {shuffledSynergies.map((syn) => (
              <div
                key={syn.id}
                className="w-[82vw] max-w-[280px] shrink-0 sm:w-auto snap-center sm:snap-align-none rounded-2xl border border-white/10 bg-[#0A0E1A] p-4 sm:p-5 flex flex-col justify-between hover:border-teal-500/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-2.5 sm:mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded">
                      {syn.multiplier}
                    </span>
                    <Sparkles className="w-4 h-4 text-amber-400" />
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white mb-2 leading-tight">
                    {syn.synergyOutcome}
                  </h3>

                  <div className="bg-white/5 rounded-xl p-2.5 mb-3 border border-white/5 text-xs text-teal-300 font-mono">
                    <div className="font-semibold text-white">{syn.foodA}</div>
                    <div className="text-center text-white/50 text-[10px] my-0.5">+ WITH +</div>
                    <div className="font-semibold text-white">{syn.foodB}</div>
                  </div>

                  <p className="text-xs text-[#8A8F98] leading-relaxed mb-3 sm:mb-4">
                    {syn.mechanism}
                  </p>
                </div>

                <div className="pt-2.5 sm:pt-3 border-t border-white/5 text-[11px] text-white/80 italic">
                  "{syn.culinaryIdea}"
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── SECTION 6: Critical Drug-Food Interactions (Safety Alerts) ─── */}
        <section
          id="interactions"
          aria-labelledby="safety-heading"
          className="mb-14 sm:mb-20 scroll-mt-24"
        >
          <div className="rounded-2xl sm:rounded-3xl border border-red-500/30 bg-red-500/5 p-4 sm:p-8 backdrop-blur-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6">
              <div className="flex items-start sm:items-center gap-3">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-red-500 text-white font-bold mt-0.5 sm:mt-0">
                  <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 block">
                    Life-Saving Medical Alerts
                  </span>
                  <h2
                    id="safety-heading"
                    className="text-lg sm:text-2xl font-bold text-white tracking-tight"
                  >
                    Dangerous Food-Medication Interactions
                  </h2>
                </div>
              </div>
              <button
                type="button"
                onClick={reshuffleWarnings}
                className="self-start sm:self-auto shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 text-xs font-mono text-red-200 transition-all cursor-pointer"
                title="Shuffle warnings order"
              >
                <Shuffle className="w-3.5 h-3.5 text-red-400" />
                <span>Shuffle Alerts</span>
              </button>
            </div>

            <p className="text-xs sm:text-sm text-[#8A8F98] mb-4 sm:mb-6 leading-relaxed max-w-3xl">
              Common foods contain natural active plant nutrients that can slow down how your liver
              clears prescription drugs or stop antibiotics from working. Never ignore these
              clinically documented interactions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {shuffledWarnings.map((warn) => (
                <div
                  key={warn.id}
                  className="rounded-xl sm:rounded-2xl border border-red-500/20 bg-black/40 p-4 sm:p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                        {warn.food}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30">
                        {warn.riskSeverity} RISK
                      </span>
                    </div>

                    <div className="text-xs font-mono text-white mb-2.5 sm:mb-3">
                      <strong className="text-white/60">Interacting Rx:</strong>{" "}
                      {warn.medicationClass}
                    </div>

                    <p className="text-xs text-[#8A8F98] leading-relaxed mb-3 sm:mb-4">
                      {warn.clinicalConsequence}
                    </p>
                  </div>

                  <div className="pt-2.5 sm:pt-3 border-t border-red-500/20 text-xs font-medium text-red-300">
                    🩺 <strong>Action:</strong> {warn.doctorDirective}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
