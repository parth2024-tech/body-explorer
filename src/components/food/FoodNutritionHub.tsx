import { useState, useMemo } from "react";
import { useBodyStore } from "@/store/useBodyStore";
import {
  NUTRITION_LEVELS,
  NUTRITION_LEVEL_TIPS_FACTS,
  FOOD_FACTS,
  FOOD_SYNERGIES,
  DRUG_FOOD_WARNINGS,
  NutritionLevel,
  FoodFactEntry,
} from "@/data/nutrition";
import {
  Apple,
  Sparkles,
  ShieldAlert,
  Activity,
  Flame,
  Droplets,
  Scale,
  Search,
  CheckCircle2,
  AlertTriangle,
  HeartPulse,
  Brain,
  Leaf,
  Layers,
  ArrowRight,
  Info,
  ExternalLink,
  Calendar,
  Stethoscope,
  XCircle,
  Clock,
  Check,
  X,
  Filter,
} from "lucide-react";

export function FoodNutritionHub() {
  const { language } = useBodyStore();
  const [selectedLevel, setSelectedLevel] = useState<NutritionLevel | "all">("all");
  const [selectedSystem, setSelectedSystem] = useState<string>("all");
  const [selectedSituation, setSelectedSituation] = useState<string>("all");
  const [selectedBenefit, setSelectedBenefit] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Small facts & tips filter state
  const [levelTipsFilter, setLevelTipsFilter] = useState<NutritionLevel | "all">("all");
  const [levelTipsType, setLevelTipsType] = useState<"all" | "fact" | "tip">("all");

  const filteredLevelTipsFacts = useMemo(() => {
    return NUTRITION_LEVEL_TIPS_FACTS.filter((item) => {
      const matchesLevel = levelTipsFilter === "all" || item.level === levelTipsFilter;
      const matchesType = levelTipsType === "all" || item.type === levelTipsType;
      return matchesLevel && matchesType;
    });
  }, [levelTipsFilter, levelTipsType]);

  // Filtered Food Facts
  const filteredFacts = useMemo(() => {
    return FOOD_FACTS.filter((entry) => {
      const matchesLevel = selectedLevel === "all" || entry.level === selectedLevel;
      const matchesSystem = selectedSystem === "all" || entry.system === selectedSystem;

      let matchesBenefit = true;
      if (selectedBenefit === "blood_sugar") {
        matchesBenefit =
          entry.system === "metabolism" ||
          entry.situationTag.toLowerCase().includes("diabetes") ||
          entry.situationTag.toLowerCase().includes("sugar") ||
          entry.provenBenefit.toLowerCase().includes("sugar") ||
          entry.provenBenefit.toLowerCase().includes("glucose") ||
          entry.foodName.toLowerCase().includes("jamun") ||
          entry.foodName.toLowerCase().includes("karela") ||
          entry.foodName.toLowerCase().includes("methi") ||
          entry.foodName.toLowerCase().includes("jowar");
      } else if (selectedBenefit === "heart_bp") {
        matchesBenefit =
          entry.system === "heart" ||
          entry.situationTag.toLowerCase().includes("bp") ||
          entry.situationTag.toLowerCase().includes("pressure") ||
          entry.situationTag.toLowerCase().includes("cholesterol") ||
          entry.provenBenefit.toLowerCase().includes("blood pressure") ||
          entry.provenBenefit.toLowerCase().includes("cholesterol") ||
          entry.provenBenefit.toLowerCase().includes("arter") ||
          entry.foodName.toLowerCase().includes("beetroot") ||
          entry.foodName.toLowerCase().includes("alsi") ||
          entry.foodName.toLowerCase().includes("makhana");
      } else if (selectedBenefit === "gut_acidity") {
        matchesBenefit =
          entry.system === "gut" ||
          entry.category === "fermented" ||
          entry.situationTag.toLowerCase().includes("acid") ||
          entry.situationTag.toLowerCase().includes("constipation") ||
          entry.provenBenefit.toLowerCase().includes("digest") ||
          entry.provenBenefit.toLowerCase().includes("bowel") ||
          entry.provenBenefit.toLowerCase().includes("stomach") ||
          entry.foodName.toLowerCase().includes("sabja") ||
          entry.foodName.toLowerCase().includes("papaya") ||
          entry.foodName.toLowerCase().includes("guava") ||
          entry.foodName.toLowerCase().includes("adrak");
      } else if (selectedBenefit === "bone_muscle") {
        matchesBenefit =
          entry.system === "muscle_bone" ||
          entry.provenBenefit.toLowerCase().includes("muscle") ||
          entry.provenBenefit.toLowerCase().includes("bone") ||
          entry.provenBenefit.toLowerCase().includes("calcium") ||
          entry.provenBenefit.toLowerCase().includes("protein") ||
          entry.foodName.toLowerCase().includes("rajgira") ||
          entry.foodName.toLowerCase().includes("sattu") ||
          entry.foodName.toLowerCase().includes("ragi");
      } else if (selectedBenefit === "immunity_skin") {
        matchesBenefit =
          entry.provenBenefit.toLowerCase().includes("immunity") ||
          entry.provenBenefit.toLowerCase().includes("infection") ||
          entry.provenBenefit.toLowerCase().includes("skin") ||
          entry.provenBenefit.toLowerCase().includes("vitamin c") ||
          entry.situationTag.toLowerCase().includes("immunity") ||
          entry.situationTag.toLowerCase().includes("monsoon") ||
          entry.category === "supergreen" ||
          entry.foodName.toLowerCase().includes("amla") ||
          entry.foodName.toLowerCase().includes("moringa") ||
          entry.foodName.toLowerCase().includes("guava");
      }

      let matchesSituation = true;
      if (selectedSituation === "bp") {
        matchesSituation =
          entry.situationTag.toLowerCase().includes("bp") ||
          entry.situationTag.toLowerCase().includes("pressure") ||
          entry.situationTag.toLowerCase().includes("heart");
      } else if (selectedSituation === "diabetes") {
        matchesSituation =
          entry.situationTag.toLowerCase().includes("diabetes") ||
          entry.situationTag.toLowerCase().includes("sugar") ||
          entry.situationTag.toLowerCase().includes("prediabetes");
      } else if (selectedSituation === "fasting") {
        matchesSituation =
          entry.situationTag.toLowerCase().includes("fasting") ||
          entry.category === "millet" ||
          entry.category === "sweetener";
      } else if (selectedSituation === "immunity") {
        matchesSituation =
          entry.situationTag.toLowerCase().includes("monsoon") ||
          entry.situationTag.toLowerCase().includes("winter") ||
          entry.situationTag.toLowerCase().includes("immunity");
      } else if (selectedSituation === "kidney") {
        matchesSituation = entry.whoShouldLimit.some(
          (w) =>
            w.toLowerCase().includes("kidney") ||
            w.toLowerCase().includes("ckd") ||
            w.toLowerCase().includes("stone"),
        );
      }

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        entry.foodName.toLowerCase().includes(query) ||
        entry.hindiName.toLowerCase().includes(query) ||
        entry.whatItContains.toLowerCase().includes(query) ||
        entry.provenBenefit.toLowerCase().includes(query) ||
        entry.situationTag.toLowerCase().includes(query) ||
        entry.mythCheck.claim.toLowerCase().includes(query) ||
        entry.mythCheck.reality.toLowerCase().includes(query) ||
        entry.bestPairing.toLowerCase().includes(query) ||
        entry.hi.foodName.includes(query) ||
        entry.hi.whatItContains.includes(query);

      return matchesLevel && matchesSystem && matchesSituation && matchesBenefit && matchesSearch;
    });
  }, [selectedLevel, selectedSystem, selectedSituation, selectedBenefit, searchQuery]);

  const systems = [
    { id: "all", label: language === "hi" ? "सभी प्रणालियां" : "All Systems", icon: Layers },
    {
      id: "metabolism",
      label: language === "hi" ? "चयापचय / शुगर" : "Metabolism & Glucose",
      icon: Flame,
    },
    {
      id: "gut",
      label: language === "hi" ? "आंत / माइक्रोबायोम" : "Gut Microbiome",
      icon: Activity,
    },
    {
      id: "heart",
      label: language === "hi" ? "हृदय / नसें" : "Heart & Arteries",
      icon: HeartPulse,
    },
    {
      id: "brain",
      label: language === "hi" ? "मस्तिष्क / एकाग्रता" : "Brain & Cognition",
      icon: Brain,
    },
    {
      id: "muscle_bone",
      label: language === "hi" ? "मांसपेशी / हड्डियां" : "Muscles & Bone",
      icon: Scale,
    },
    { id: "liver", label: language === "hi" ? "लिवर स्वास्थ्य" : "Liver Defense", icon: Leaf },
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-[#EAEAEA] font-sans selection:bg-[#00E5C4]/30 pb-32 pb-[calc(7.5rem+env(safe-area-inset-bottom))]">
      {/* Clinical Medical Disclaimer Banner */}
      <div className="w-full bg-red-950/70 border-b-2 border-red-500/50 px-3.5 sm:px-4 py-3 flex items-start sm:items-center justify-center gap-3">
        <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5 sm:mt-0" />
        <p className="text-[11px] sm:text-xs font-sans text-red-200 leading-relaxed max-w-5xl text-left">
          <strong className="text-white uppercase tracking-wider">
            {language === "hi" ? "चिकित्सा व पोषण अस्वीकरण:" : "CLINICAL & NUTRITIONAL DISCLAIMER:"}
          </strong>{" "}
          {language === "hi"
            ? "यह हब WHO/FAO और NOVA खाद्य वर्गीकरण पर आधारित जनसंख्या-स्तरीय पोषण शिक्षा प्रदान करता है। यह व्यक्तिगत मेडिकल न्यूट्रिशन थेरेपी (MNT) का विकल्प नहीं है। दवा-खाद्य इंटरैक्शन केवल डॉक्टर के साथ चर्चा के लिए हैं।"
            : "This module provides population-level dietary education based on WHO/FAO nutritional guidelines, the NOVA food processing framework, and evidence-graded studies. It does NOT constitute individualized Medical Nutrition Therapy (MNT). Food-drug interaction alerts are provided for patient-physician discussion; never alter prescribed medical therapy without consulting your doctor or clinical pharmacist."}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-12">
        {/* Header Hero Section */}
        <header className="text-center max-w-3xl mx-auto mb-6 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-[11px] sm:text-xs font-bold tracking-wide uppercase mb-3 sm:mb-4">
            <Apple className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-400" />
            <span>
              {language === "hi" ? "सत्यापित पोषण गाइड" : "Clinical Food & Nutrition Hub"}
            </span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-space font-black tracking-tight text-white uppercase">
            {language === "hi" ? "भोजन और" : "Nutrition"}{" "}
            <span className="text-[#00E5C4]">
              {language === "hi" ? "पोषण स्तर" : "Intelligence"}
            </span>
          </h1>

          <p className="mt-3 sm:mt-6 text-xs sm:text-base text-[#8A8F98] leading-relaxed">
            {language === "hi"
              ? "कोशिकीय जैव रसायन को अपनी रसोई की थाली में बदलें। 4-स्तरीय पोषण वर्गीकरण, शुगर नियंत्रित करने वाले भोजन नियम, और खाद्य-दवा इंटरैक्शन का वैज्ञानिक विश्लेषण।"
              : "Translating cellular biochemistry into kitchen-table clarity. Explore the 4-level food spectrum, glucose-balancing protocols, synergistic pairings, and life-saving food-medication safety bounds."}
          </p>
        </header>

        {/* ─── Mobile Sticky Quick-Jump Navigation (Phone Viewport Only) ─── */}
        <nav
          aria-label="Mobile section quick navigation"
          className="md:hidden sticky top-[48px] z-20 -mx-4 px-4 py-2 bg-[#030303]/90 backdrop-blur-md border-y border-white/10 mb-8 flex items-center gap-1.5 overflow-x-auto touch-scroll"
        >
          {[
            { id: "spectrum", label: language === "hi" ? "4 स्तर" : "4 Levels", icon: Layers },
            {
              id: "level-tips",
              label: language === "hi" ? "टिप्स व फैक्ट्स" : "Tips & Facts",
              icon: Sparkles,
            },
            { id: "facts", label: language === "hi" ? "फूड फैक्ट्स" : "Food Facts", icon: Apple },
            { id: "synergies", label: language === "hi" ? "तालमेल" : "Synergies", icon: Flame },
            {
              id: "interactions",
              label: language === "hi" ? "दवा चेतावनी" : "Drug Alerts",
              icon: ShieldAlert,
            },
          ].map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-semibold text-[#EAEAEA] shrink-0 active:bg-[#00E5C4]/20 active:text-[#00E5C4] transition-all"
            >
              <sec.icon className="w-3 h-3 text-[#00E5C4]" />
              <span>{sec.label}</span>
            </a>
          ))}
        </nav>

        {/* ─── SECTION 1: The 4-Tier Nutrition Level Spectrum ─── */}
        <section
          id="spectrum"
          aria-labelledby="levels-heading"
          className="mb-12 sm:mb-16 scroll-mt-24"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#00E5C4] block">
                {language === "hi" ? "वर्गीकरण ढांचा" : "Nutritional Hierarchy"}
              </span>
              <h2
                id="levels-heading"
                className="text-xl sm:text-3xl font-bold text-white tracking-tight"
              >
                {language === "hi" ? "4-स्तरीय पोषण स्पेक्ट्रम" : "The 4-Level Food Spectrum"}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#8A8F98] max-w-md">
              {language === "hi"
                ? "प्रत्येक स्तर दर्शाता है कि कोई खाद्य पदार्थ आपके शरीर में कोशिका स्तर पर क्या प्रभाव छोड़ता है।"
                : "A clinical grading of foods based on micronutrient density, glycemic index, and inflammatory load."}
            </p>
          </div>

          {/* Swipeable Carousel on Mobile Phones, Grid on Tablet/Desktop */}
          <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory touch-scroll">
            {([1, 2, 3, 4] as NutritionLevel[]).map((lvl) => {
              const meta = NUTRITION_LEVELS[lvl];
              const isSelected = selectedLevel === lvl;

              return (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setSelectedLevel(selectedLevel === lvl ? "all" : lvl)}
                  className={`w-[82vw] max-w-[290px] shrink-0 sm:w-auto snap-center sm:snap-align-none text-left rounded-2xl border p-4 sm:p-5 transition-all flex flex-col justify-between min-h-[210px] sm:min-h-[220px] active:scale-[0.98] ${meta.borderClass} ${meta.bgClass} ${
                    isSelected ? "ring-2 ring-white/40 shadow-xl" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-3">
                      <span
                        className={`px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-bold uppercase tracking-wider border ${meta.badgeClass}`}
                      >
                        Level {lvl}
                      </span>
                      <span className="text-xs font-mono text-[#8A8F98]">{meta.targetShare}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 leading-snug">
                      {meta.title}
                    </h3>
                    <p className="text-xs text-[#8A8F98] leading-relaxed mb-3 sm:mb-4">
                      {meta.description}
                    </p>
                  </div>

                  <div className="pt-2.5 sm:pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold">
                    <span className="text-white/80">{meta.recommendation}</span>
                    <span className="text-white font-mono shrink-0 ml-2">
                      {isSelected ? "Active ✓" : "Filter →"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Mobile phone swipe hint */}
          <div className="flex sm:hidden items-center justify-between text-[11px] text-[#8A8F98] mt-2 px-1">
            <span>
              {language === "hi"
                ? "👈 स्तरों की तुलना के लिए स्वाइप करें 👉"
                : "👈 Swipe to compare levels 👉"}
            </span>
            <span className="font-mono text-teal-400">1 — 4</span>
          </div>

          {selectedLevel !== "all" && (
            <div className="mt-3 sm:mt-4 flex items-center justify-end">
              <button
                type="button"
                onClick={() => setSelectedLevel("all")}
                className="min-h-[44px] px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-[#EAEAEA] hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <span>✕</span>
                <span>
                  {language === "hi"
                    ? "सभी स्तर दिखाएं (फिल्टर हटाएं)"
                    : "Show all levels (Clear filter)"}
                </span>
              </button>
            </div>
          )}
        </section>

        {/* ─── SECTION 2: Small Facts & Practical Tips for Every Nutrition Level ─── */}
        <section
          id="level-tips"
          aria-labelledby="level-tips-heading"
          className="mb-12 sm:mb-16 scroll-mt-24"
        >
          <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0A0E1A] p-4 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-2.5">
                  <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                  <span>
                    {language === "hi"
                      ? "छोटे फैक्ट्स और रसोई टिप्स"
                      : "Bite-Sized Facts & Kitchen Tips"}
                  </span>
                </div>
                <h2
                  id="level-tips-heading"
                  className="text-xl sm:text-3xl font-bold text-white tracking-tight"
                >
                  {language === "hi"
                    ? "प्रत्येक पोषण स्तर के आसान फैक्ट्स और टिप्स"
                    : "Easy Facts & Tips for Every Nutrition Level"}
                </h2>
                <p className="text-xs sm:text-sm text-[#8A8F98] mt-1.5 max-w-2xl leading-relaxed">
                  {language === "hi"
                    ? "कठिन वैज्ञानिक शब्दों के बिना, अपनी दैनिक थाली और रसोई के लिए सरल, सिद्ध और आजमाने योग्य बातें।"
                    : "Clear everyday wisdom for your kitchen table. Learn what each food level really does to your body without complicated words."}
                </p>
              </div>

              {/* Type Toggle: All / Facts / Tips */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10 self-start md:self-auto shrink-0">
                {(
                  [
                    { id: "all", label: language === "hi" ? "सभी (32)" : "All (32)" },
                    { id: "fact", label: language === "hi" ? "फैक्ट्स (16)" : "Facts (16)" },
                    { id: "tip", label: language === "hi" ? "टिप्स (16)" : "Tips (16)" },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setLevelTipsType(tab.id)}
                    className={`min-h-[38px] px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      levelTipsType === tab.id
                        ? "bg-[#00E5C4] text-black shadow-sm font-bold"
                        : "text-[#8A8F98] hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Level Selector Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 touch-scroll -mx-4 px-4 sm:mx-0 sm:px-0">
              <span className="text-[11px] font-bold text-[#8A8F98] uppercase tracking-wider shrink-0 mr-1">
                {language === "hi" ? "स्तर चुनें:" : "Filter Level:"}
              </span>
              {[
                {
                  id: "all",
                  label: language === "hi" ? "सभी 4 स्तर (32)" : "All 4 Levels (32)",
                  color: "border-white/20 text-white",
                },
                {
                  id: 1,
                  label:
                    language === "hi"
                      ? "स्तर 1: ताजी सब्जियां व फल (8)"
                      : "Level 1: Whole Foods (8)",
                  color: "border-teal-500/40 text-teal-300",
                },
                {
                  id: 2,
                  label:
                    language === "hi" ? "स्तर 2: अनाज, दाल व दही (8)" : "Level 2: Grains & Dal (8)",
                  color: "border-sky-500/40 text-sky-300",
                },
                {
                  id: 3,
                  label:
                    language === "hi"
                      ? "स्तर 3: तेल, घी व गुड़ (8)"
                      : "Level 3: Fats & Moderation (8)",
                  color: "border-amber-500/40 text-amber-300",
                },
                {
                  id: 4,
                  label:
                    language === "hi"
                      ? "स्तर 4: पैकेटबंद स्नैक्स (8)"
                      : "Level 4: Packaged Snacks (8)",
                  color: "border-red-500/40 text-red-300",
                },
              ].map((pill) => {
                const isActive = levelTipsFilter === pill.id;
                return (
                  <button
                    key={String(pill.id)}
                    type="button"
                    onClick={() => setLevelTipsFilter(pill.id as NutritionLevel | "all")}
                    className={`min-h-[40px] px-3.5 py-1.5 rounded-xl text-xs font-semibold shrink-0 border transition-all flex items-center gap-1.5 ${
                      isActive
                        ? "bg-white/15 border-white text-white shadow-md ring-1 ring-white/30"
                        : `bg-white/[0.03] ${pill.color} hover:bg-white/[0.07]`
                    }`}
                  >
                    <span>{pill.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Facts and Tips Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredLevelTipsFacts.map((item) => {
                const meta = NUTRITION_LEVELS[item.level];
                const isFact = item.type === "fact";

                return (
                  <div
                    key={item.id}
                    className={`rounded-2xl border p-4 sm:p-5 flex flex-col justify-between transition-all hover:border-white/30 ${meta.borderClass} ${meta.bgClass}`}
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span
                          className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${meta.badgeClass}`}
                        >
                          Level {item.level}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${
                            isFact
                              ? "bg-sky-500/10 text-sky-300 border-sky-500/30"
                              : "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
                          }`}
                        >
                          {isFact
                            ? language === "hi"
                              ? "छोटा फैक्ट"
                              : "Quick Fact"
                            : language === "hi"
                              ? "आसान टिप"
                              : "Kitchen Tip"}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-sm sm:text-base font-bold text-white mb-2 leading-snug">
                        {item.title[language]}
                      </h3>

                      {/* Content in Simple Words */}
                      <p className="text-xs text-[#C5C8CE] leading-relaxed mb-4">
                        {item.content[language]}
                      </p>
                    </div>

                    {/* Key Takeaway Pill */}
                    <div className="pt-3 border-t border-white/10">
                      <div className="rounded-xl bg-white/[0.04] border border-white/10 p-2.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#00E5C4] block mb-0.5">
                          {language === "hi" ? "मुख्य सीख / टिप:" : "Easy takeaway:"}
                        </span>
                        <p className="text-[11px] font-medium text-white/90 leading-tight">
                          {item.takeaway[language]}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── SECTION 3: Food Facts: What Each Food Really Does ─── */}
        <section id="facts" aria-labelledby="facts-heading" className="mb-12 sm:mb-16 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#00E5C4] block">
                {language === "hi"
                  ? "आईसीएमआर व पबमेड साक्ष्य वेधशाला • 36 खाद्य पदार्थ"
                  : "ICMR-NIN & PubMed Evidence Observatory • 36 Power Foods"}
              </span>
              <h2
                id="facts-heading"
                className="text-xl sm:text-3xl font-bold text-white tracking-tight"
              >
                {language === "hi"
                  ? "खाद्य निर्देशिका: 36 भोजन और उनके वास्तविक लाभ"
                  : "Food Directory: Discover 36 Foods & How You Benefit"}
              </h2>
              <p className="text-xs sm:text-sm text-[#8A8F98] mt-1 max-w-2xl">
                {language === "hi"
                  ? "अक्सर लोग सभी पारंपरिक खाद्य पदार्थों और उनके असली फायदों के बारे में नहीं जान पाते। 36 भारतीय अनाजों, साग, बीजों और फलों के वास्तविक लाभ, सही खाने का तरीका और सावधानियां सरल भाषा में जानें।"
                  : "People often miss out on the incredible benefits of everyday staples. Explore 36 traditional Indian grains, seeds, greens, and fruits with proven health benefits, best food pairings, and who should limit them."}
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A8F98]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  language === "hi"
                    ? "सर्च: रागी, काला चना, जीरा, सौंफ, तिल, मखाना, बीपी..."
                    : "Search ragi, chana, jeera, saunf, til, BP..."
                }
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] pl-10 pr-9 py-2.5 text-base sm:text-sm text-white placeholder-[#8A8F98] outline-none focus:border-[#00E5C4]/50 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8A8F98] hover:text-white p-1 text-xs"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Primary Filter Bar: "How Can I Benefit From These Foods?" */}
          <div className="mb-4 p-3 sm:p-4 rounded-2xl bg-teal-500/[0.04] border border-teal-500/20">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#00E5C4] mb-2.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              {language === "hi"
                ? "आपको क्या लाभ चाहिए? (स्वास्थ्य लाभ अनुसार खाद्य पदार्थ चुनें):"
                : "How Can I Benefit? (Discover Foods by Target Health Goal):"}
            </span>
            <div className="flex gap-2 overflow-x-auto pb-1 touch-scroll -mx-2 px-2 sm:mx-0 sm:px-0">
              {[
                { id: "all", label: language === "hi" ? "सभी 36 खाद्य पदार्थ" : "All 36 Foods" },
                {
                  id: "blood_sugar",
                  label:
                    language === "hi"
                      ? "🩸 ब्लड शुगर व निरंतर ऊर्जा"
                      : "🩸 Blood Sugar & Steady Energy",
                },
                {
                  id: "heart_bp",
                  label:
                    language === "hi" ? "🫀 दिल, BP व कोलेस्ट्रॉल" : "🫀 Heart, BP & Cholesterol",
                },
                {
                  id: "gut_acidity",
                  label:
                    language === "hi" ? "🌿 पेट, एसिडिटी व पाचन" : "🌿 Digestion & Acidity Relief",
                },
                {
                  id: "bone_muscle",
                  label:
                    language === "hi"
                      ? "🦴 मजबूत हड्डियां व मांसपेशियां"
                      : "🦴 Bones & Muscle Strength",
                },
                {
                  id: "immunity_skin",
                  label:
                    language === "hi"
                      ? "🛡️ रोग प्रतिरोधक क्षमता व त्वचा"
                      : "🛡️ Immunity & Skin Defense",
                },
              ].map((ben) => {
                const isSelected = selectedBenefit === ben.id;
                return (
                  <button
                    key={ben.id}
                    type="button"
                    onClick={() => setSelectedBenefit(ben.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap border transition-all ${
                      isSelected
                        ? "bg-[#00E5C4] text-black border-[#00E5C4] shadow-md ring-1 ring-[#00E5C4]/30"
                        : "bg-white/[0.03] text-[#C5C8CE] border-white/10 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {ben.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Situational Scenario Filter Pills */}
          <div className="mb-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8F98] mb-2 block flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-teal-400" />
              {language === "hi"
                ? "परिस्थिति अनुसार फिल्टर (सिचुएशनल टिप्स):"
                : "Situational Context Filter:"}
            </span>
            <div className="flex gap-2 overflow-x-auto pb-2 touch-scroll -mx-4 px-4 sm:mx-0 sm:px-0">
              {[
                { id: "all", label: language === "hi" ? "सभी खाद्य पदार्थ" : "All Indian Foods" },
                {
                  id: "diabetes",
                  label:
                    language === "hi"
                      ? "शुगर / प्रीडायबिटीज"
                      : "If you have Diabetes / Sugar Spikes",
                },
                {
                  id: "bp",
                  label: language === "hi" ? "BP / दिल की दवाएं" : "If you're on BP / Heart Meds",
                },
                {
                  id: "fasting",
                  label: language === "hi" ? "त्योहार व व्रत" : "If you're Fasting for Festivals",
                },
                {
                  id: "immunity",
                  label: language === "hi" ? "मानसून व सर्दी सुरक्षा" : "Monsoon & Winter Safety",
                },
                {
                  id: "kidney",
                  label:
                    language === "hi" ? "किडनी / पथरी सावधानी" : "If you have Kidney / Stone Risk",
                },
              ].map((sit) => {
                const isSelected = selectedSituation === sit.id;
                return (
                  <button
                    key={sit.id}
                    type="button"
                    onClick={() => setSelectedSituation(sit.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap border transition-all ${
                      isSelected
                        ? "bg-teal-500/20 text-teal-300 border-teal-500/50 shadow-sm"
                        : "bg-white/[0.02] text-[#8A8F98] border-white/10 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {sit.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* System Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-3 mb-6 sm:mb-8 touch-scroll -mx-4 px-4 sm:mx-0 sm:px-0">
            {systems.map((sys) => {
              const Icon = sys.icon;
              const isSelected = selectedSystem === sys.id;
              return (
                <button
                  key={sys.id}
                  type="button"
                  onClick={() => setSelectedSystem(sys.id)}
                  className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap min-h-[44px] shrink-0 border transition-all ${
                    isSelected
                      ? "bg-white text-black border-white shadow-md"
                      : "bg-white/[0.02] text-[#8A8F98] border-white/10 hover:text-white hover:bg-white/5 active:bg-white/10"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{sys.label}</span>
                </button>
              );
            })}
          </div>

          {/* Facts Grid */}
          {filteredFacts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-white/10 p-8 sm:p-12 text-center text-[#8A8F98]">
              <Apple className="w-10 h-10 mx-auto text-[#8A8F98] mb-3 opacity-50" />
              <h3 className="text-base font-bold text-white mb-1">
                {language === "hi"
                  ? "कोई खाद्य पदार्थ नहीं मिला"
                  : "No matching food entries found"}
              </h3>
              <p className="text-xs">
                {language === "hi"
                  ? "कृपया फिल्टर बदलें या खोज शब्द रीसेट करें।"
                  : "Try clearing your search query or selecting 'All Situations'."}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {filteredFacts.map((entry) => {
                const levelMeta = NUTRITION_LEVELS[entry.level];
                const displayName = language === "hi" ? entry.hi.foodName : entry.foodName;
                const displayNutrients =
                  language === "hi" ? entry.hi.whatItContains : entry.whatItContains;
                const displayBenefit =
                  language === "hi" ? entry.hi.provenBenefit : entry.provenBenefit;
                const displayMythClaim =
                  language === "hi" ? entry.hi.mythClaim : entry.mythCheck.claim;
                const displayMythReality =
                  language === "hi" ? entry.hi.mythReality : entry.mythCheck.reality;
                const displayPairing = language === "hi" ? entry.hi.bestPairing : entry.bestPairing;
                const displayDo = language === "hi" ? entry.hi.do : entry.guidance.do;
                const displayDont = language === "hi" ? entry.hi.dont : entry.guidance.dont;
                const displayAsk =
                  language === "hi" ? entry.hi.askDoctorIf : entry.guidance.askDoctorIf;

                return (
                  <article
                    key={entry.id}
                    className="rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0A0E1A] p-5 sm:p-7 flex flex-col justify-between hover:border-teal-500/30 transition-all shadow-xl"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <span
                            className={`px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-bold uppercase tracking-wider border ${levelMeta.badgeClass}`}
                          >
                            Level {entry.level}
                          </span>
                          <span className="px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-mono text-[#8A8F98] bg-white/5 border border-white/10">
                            {entry.categoryLabel}
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
                          {entry.systemLabel}
                        </div>
                      </div>

                      {/* Situational Scenario Tag */}
                      <div className="mb-4 px-3 py-2 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-medium flex items-center gap-2">
                        <Clock className="w-4 h-4 shrink-0 text-teal-400" />
                        <span>{entry.situationTag}</span>
                      </div>

                      {/* Block 1: What It Contains */}
                      <div className="mb-4 rounded-xl bg-white/[0.02] border border-white/5 p-3.5 text-xs text-[#EAEAEA] leading-relaxed">
                        <strong className="text-teal-300 uppercase tracking-wider text-[10px] block mb-1">
                          🌿{" "}
                          {language === "hi"
                            ? "इसमें क्या पोषक तत्व हैं (सरल भाषा में):"
                            : "What It Contains (Plain Language):"}
                        </strong>
                        <p>{displayNutrients}</p>
                      </div>

                      {/* Block 2: How You Benefit (Proven Daily Benefit) */}
                      <div className="mb-4 rounded-xl bg-teal-500/10 border-2 border-teal-500/30 p-3.5 text-xs text-[#EAEAEA] leading-relaxed shadow-sm">
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <strong className="text-teal-300 uppercase tracking-wider text-[11px] font-bold flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                            {language === "hi"
                              ? "स्वास्थ्य लाभ (प्रमाणित प्रभाव):"
                              : "Proven Daily Value (Benefits):"}
                          </strong>
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/40">
                            {entry.evidenceTier}
                          </span>
                        </div>
                        <p className="mb-2 text-white font-medium text-xs sm:text-sm leading-relaxed">
                          {displayBenefit}
                        </p>
                        <div className="pt-2 border-t border-teal-500/20 flex items-center justify-between text-[10px] font-mono text-[#8A8F98]">
                          <span className="truncate max-w-[280px]" title={entry.sourceCitation}>
                            {entry.sourceCitation}
                          </span>
                          <a
                            href={entry.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-teal-400 hover:text-teal-300 underline underline-offset-2 shrink-0 ml-2 font-semibold"
                          >
                            <span>Study</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>

                      {/* Block 3: Myth Check (Overhyped Claims) */}
                      <div className="mb-4 rounded-xl bg-amber-500/10 border border-amber-500/20 p-3.5 text-xs leading-relaxed space-y-1.5">
                        <div className="flex items-center gap-1.5 text-amber-300 font-bold uppercase tracking-wider text-[10px]">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>
                            {language === "hi"
                              ? "मिथक जांच (दावों की सच्चाई):"
                              : "Myth Check (Unproven / Overhyped Claims):"}
                          </span>
                        </div>
                        <p className="text-amber-200/90 text-[11px]">
                          <strong className="text-amber-400">
                            {language === "hi" ? "दावा:" : "Claim:"}
                          </strong>{" "}
                          {displayMythClaim}
                        </p>
                        <p className="text-amber-100 text-[11px]">
                          <strong className="text-emerald-400">
                            {language === "hi" ? "हकीकत:" : "Reality:"}
                          </strong>{" "}
                          {displayMythReality}
                        </p>
                      </div>

                      {/* Block 4: Who Should Limit It */}
                      <div className="mb-4 rounded-xl bg-rose-500/10 border border-rose-500/20 p-3.5 text-xs text-rose-200 leading-relaxed">
                        <strong className="text-rose-400 uppercase tracking-wider text-[10px] block mb-1.5 flex items-center gap-1.5">
                          <XCircle className="w-3.5 h-3.5 text-rose-400" />
                          {language === "hi"
                            ? "किन्हें सावधानी बरतनी चाहिए (चिकित्सा सीमा):"
                            : "Who Should Limit It (Clinical Exclusions):"}
                        </strong>
                        <ul className="list-disc list-inside space-y-0.5 text-[11px] text-rose-200/90">
                          {entry.whoShouldLimit.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Block 5: Best Pairing & Indian-Context Serving */}
                      <div className="mb-4 rounded-xl bg-white/[0.02] border border-white/5 p-3.5 text-xs text-[#8A8F98] leading-relaxed space-y-1.5">
                        <div>
                          <strong className="text-teal-300 uppercase tracking-wider text-[10px] block mb-0.5">
                            🍛{" "}
                            {language === "hi"
                              ? "सर्वश्रेष्ठ भारतीय भोजन तालमेल:"
                              : "Best Pairing & Indian Combination:"}
                          </strong>
                          <span className="text-[#EAEAEA]">{displayPairing}</span>
                        </div>
                        <div className="pt-1.5 border-t border-white/5 text-[11px]">
                          <strong className="text-white/60">
                            {language === "hi" ? "अनुशंसित मात्रा:" : "Recommended Portion:"}
                          </strong>{" "}
                          <span>{entry.indianServingContext}</span>
                        </div>
                      </div>

                      {/* Block 6: "Do / Don't / Ask a Doctor If" 3-Column Micro-Grid */}
                      <div className="my-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8F98] mb-2 block">
                          {language === "hi"
                            ? "थाली नियम (करें / न करें / डॉक्टर से पूछें):"
                            : "Guidance Rules (Do / Don't / Ask a Doctor If):"}
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                          {/* DO */}
                          <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-2.5 flex flex-col">
                            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1 mb-1">
                              <Check className="w-3 h-3 text-emerald-400" />
                              {language === "hi" ? "करें (DO)" : "DO"}
                            </span>
                            <p className="text-[11px] text-emerald-200/90 leading-snug">
                              {displayDo}
                            </p>
                          </div>

                          {/* DON'T */}
                          <div className="rounded-lg bg-rose-500/10 border border-rose-500/20 p-2.5 flex flex-col">
                            <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1 mb-1">
                              <X className="w-3 h-3 text-rose-400" />
                              {language === "hi" ? "न करें (DON'T)" : "DON'T"}
                            </span>
                            <p className="text-[11px] text-rose-200/90 leading-snug">
                              {displayDont}
                            </p>
                          </div>

                          {/* ASK A DOCTOR IF */}
                          <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 p-2.5 flex flex-col">
                            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1 mb-1">
                              <Stethoscope className="w-3 h-3 text-amber-400" />
                              {language === "hi" ? "डॉक्टर से पूछें" : "ASK DOCTOR IF"}
                            </span>
                            <p className="text-[11px] text-amber-200/90 leading-snug">
                              {displayAsk}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Footer: Last Reviewed & Primary Source */}
                    <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-[10px] font-mono text-[#8A8F98]">
                      <span className="flex items-center gap-1.5 text-[#8A8F98]">
                        <Calendar className="w-3 h-3 text-teal-400" />
                        <span>
                          {language === "hi" ? "समीक्षा तिथि:" : "Last Medically Reviewed:"}{" "}
                          {entry.lastReviewed}
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

        {/* ─── SECTION 4: Food Synergy Matrix (The Multipliers) ─── */}
        <section
          id="synergies"
          aria-labelledby="synergy-heading"
          className="mb-12 sm:mb-16 scroll-mt-24"
        >
          <div className="max-w-3xl mb-6 sm:mb-8">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#00E5C4] block">
              {language === "hi" ? "पोषक तत्वों का तालमेल" : "Biochemical Synergy"}
            </span>
            <h2
              id="synergy-heading"
              className="text-xl sm:text-3xl font-bold text-white tracking-tight mt-1"
            >
              {language === "hi"
                ? "खाद्य तालमेल: 1 + 1 = 10 का विज्ञान"
                : "The Food Synergy Multiplier Matrix"}
            </h2>
            <p className="text-xs sm:text-sm text-[#8A8F98] mt-2 leading-relaxed">
              {language === "hi"
                ? "कुछ पोषक तत्व अकेले खाने पर ठीक से अवशोषित नहीं होते, लेकिन सही भोजन के साथ मिलते ही उनका लाभ कई गुना तक बढ़ जाता है।"
                : "Certain vitamins and minerals are difficult for your body to absorb on their own. But when paired with healthy fats, herbs, or lemon drops, your body absorbs up to 20 times more."}
            </p>
          </div>

          {/* Swipeable Carousel on Mobile Phones, Grid on Tablet/Desktop */}
          <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory touch-scroll">
            {FOOD_SYNERGIES.map((syn) => (
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

          {/* Mobile phone swipe hint */}
          <div className="flex sm:hidden items-center justify-between text-[11px] text-[#8A8F98] mt-2 px-1">
            <span>
              {language === "hi"
                ? "👈 तालमेल देखने के लिए स्वाइप करें 👉"
                : "👈 Swipe to view synergies 👉"}
            </span>
            <span className="font-mono text-amber-400">1 — {FOOD_SYNERGIES.length}</span>
          </div>
        </section>

        {/* ─── SECTION 5: Critical Drug-Food Interactions ─── */}
        <section
          id="interactions"
          aria-labelledby="drug-food-heading"
          className="mb-12 sm:mb-16 scroll-mt-24"
        >
          <div className="rounded-2xl sm:rounded-3xl border border-red-500/30 bg-red-500/5 p-4 sm:p-8 backdrop-blur-xl">
            <div className="flex items-start sm:items-center gap-3 mb-4 sm:mb-6">
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-red-500 text-white font-bold mt-0.5 sm:mt-0">
                <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 block">
                  {language === "hi" ? "महत्वपूर्ण सुरक्षा चेतावनी" : "Life-Saving Medical Alert"}
                </span>
                <h2
                  id="drug-food-heading"
                  className="text-lg sm:text-2xl font-bold text-white tracking-tight"
                >
                  {language === "hi"
                    ? "घातक खाद्य-दवा परस्पर क्रिया (इंटरैक्शन)"
                    : "Dangerous Food-Medication Interactions"}
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#8A8F98] mb-4 sm:mb-6 leading-relaxed max-w-3xl">
              {language === "hi"
                ? "प्राकृतिक और स्वास्थ्यवर्धक माने जाने वाले कुछ खाद्य पदार्थ यदि विशेष दवाओं के साथ खाए जाएं, तो वे लिवर एंजाइम को बाधित कर रक्त में दवा का स्तर 300% से अधिक बढ़ा सकते हैं या उसके प्रभाव को निष्क्रिय कर सकते हैं।"
                : "Common foods contain natural active plant nutrients that can slow down how your liver clears prescription drugs or stop antibiotics from working. Never ignore these clinically documented interactions."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {DRUG_FOOD_WARNINGS.map((warn) => (
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
