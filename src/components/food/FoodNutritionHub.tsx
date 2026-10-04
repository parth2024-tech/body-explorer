import { useState, useMemo } from "react";
import { useBodyStore } from "@/store/useBodyStore";
import {
  NUTRITION_LEVELS,
  FOOD_TIPS,
  FOOD_SYNERGIES,
  DRUG_FOOD_WARNINGS,
  NutritionLevel,
  FoodTip,
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
} from "lucide-react";

export function FoodNutritionHub() {
  const { language } = useBodyStore();
  const [selectedLevel, setSelectedLevel] = useState<NutritionLevel | "all">("all");
  const [selectedSystem, setSelectedSystem] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Calculator state
  const [bodyWeight, setBodyWeight] = useState<number>(70);
  const [activityFactor, setActivityFactor] = useState<"sedentary" | "moderate" | "active">("moderate");

  // Calculate personalized nutrition benchmarks
  const nutritionTargets = useMemo(() => {
    const weight = Math.max(30, Math.min(200, bodyWeight || 70));
    let proteinMultiplier = 1.2;
    let waterMultiplier = 35; // ml per kg

    if (activityFactor === "moderate") {
      proteinMultiplier = 1.4;
      waterMultiplier = 38;
    } else if (activityFactor === "active") {
      proteinMultiplier = 1.8;
      waterMultiplier = 42;
    }

    const dailyProtein = Math.round(weight * proteinMultiplier);
    const dailyWaterLiters = ((weight * waterMultiplier) / 1000).toFixed(1);
    const dailyFiber = weight > 75 ? 35 : 30; // standard clinical recommendation

    return {
      protein: dailyProtein,
      fiber: dailyFiber,
      water: dailyWaterLiters,
    };
  }, [bodyWeight, activityFactor]);

  // Filtered Food Tips
  const filteredTips = useMemo(() => {
    return FOOD_TIPS.filter((tip) => {
      const matchesLevel = selectedLevel === "all" || tip.level === selectedLevel;
      const matchesSystem = selectedSystem === "all" || tip.system === selectedSystem;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        tip.title.toLowerCase().includes(query) ||
        tip.foodName.toLowerCase().includes(query) ||
        tip.actionableTip.toLowerCase().includes(query) ||
        tip.biologicalMechanism.toLowerCase().includes(query) ||
        tip.hi.title.includes(query) ||
        tip.hi.foodName.includes(query);

      return matchesLevel && matchesSystem && matchesSearch;
    });
  }, [selectedLevel, selectedSystem, searchQuery]);

  const systems = [
    { id: "all", label: language === "hi" ? "सभी प्रणालियां" : "All Systems", icon: Layers },
    { id: "metabolism", label: language === "hi" ? "चयापचय / शुगर" : "Metabolism & Glucose", icon: Flame },
    { id: "gut", label: language === "hi" ? "आंत / माइक्रोबायोम" : "Gut Microbiome", icon: Activity },
    { id: "heart", label: language === "hi" ? "हृदय / नसें" : "Heart & Arteries", icon: HeartPulse },
    { id: "brain", label: language === "hi" ? "मस्तिष्क / एकाग्रता" : "Brain & Cognition", icon: Brain },
    { id: "muscle_bone", label: language === "hi" ? "मांसपेशी / हड्डियां" : "Muscles & Bone", icon: Scale },
    { id: "liver", label: language === "hi" ? "लिवर स्वास्थ्य" : "Liver Defense", icon: Leaf },
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-[#EAEAEA] font-sans selection:bg-[#00E5C4]/30 pb-32 pb-[calc(7.5rem+env(safe-area-inset-bottom))]">
      
      {/* Clinical Medical Disclaimer Banner */}
      <div className="w-full bg-[#FC3D21]/10 border-b border-[#FC3D21]/30 px-3.5 sm:px-4 py-2 sm:py-2.5 flex items-start sm:items-center justify-center gap-2.5 sm:gap-3">
        <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-[#FC3D21] shrink-0 mt-0.5 sm:mt-0" />
        <p className="text-[11px] sm:text-xs font-mono text-[#FC3D21] leading-snug max-w-4xl text-left sm:text-center">
          <strong className="uppercase tracking-wider">
            {language === "hi" ? "चिकित्सा अस्वीकरण:" : "CLINICAL DISCLAIMER:"}
          </strong>{" "}
          {language === "hi"
            ? "यह अनुभाग केवल वैज्ञानिक और पोषण शिक्षा के लिए है। यह किसी व्यक्तिगत चिकित्सा उपचार या आहार विशेषज्ञ के परामर्श का विकल्प नहीं है।"
            : "This module provides clinical nutrition education vetted against Tier 1/2 evidence. It does not replace individualized medical nutrition therapy or physician guidance."}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-12">
        
        {/* Header Hero Section */}
        <header className="text-center max-w-3xl mx-auto mb-6 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-[11px] sm:text-xs font-bold tracking-wide uppercase mb-3 sm:mb-4">
            <Apple className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-400" />
            <span>{language === "hi" ? "सत्यापित पोषण गाइड" : "Clinical Food & Nutrition Hub"}</span>
          </div>
          
          <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-space font-black tracking-tight text-white uppercase">
            {language === "hi" ? "भोजन और" : "Nutrition"}{" "}
            <span className="text-[#00E5C4]">{language === "hi" ? "पोषण स्तर" : "Intelligence"}</span>
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
            { id: "calculator", label: language === "hi" ? "कैलकुलेटर" : "Calculator", icon: Scale },
            { id: "tips", label: language === "hi" ? "नियम व टिप्स" : "Tips & Rules", icon: Apple },
            { id: "synergies", label: language === "hi" ? "तालमेल" : "Synergies", icon: Sparkles },
            { id: "interactions", label: language === "hi" ? "दवा चेतावनी" : "Drug Alerts", icon: ShieldAlert },
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
        <section id="spectrum" aria-labelledby="levels-heading" className="mb-12 sm:mb-16 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#00E5C4] block">
                {language === "hi" ? "वर्गीकरण ढांचा" : "Nutritional Hierarchy"}
              </span>
              <h2 id="levels-heading" className="text-xl sm:text-3xl font-bold text-white tracking-tight">
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
                      <span className={`px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-bold uppercase tracking-wider border ${meta.badgeClass}`}>
                        Level {lvl}
                      </span>
                      <span className="text-xs font-mono text-[#8A8F98]">
                        {meta.targetShare}
                      </span>
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
            <span>{language === "hi" ? "👈 स्तरों की तुलना के लिए स्वाइप करें 👉" : "👈 Swipe to compare levels 👉"}</span>
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
                <span>{language === "hi" ? "सभी स्तर दिखाएं (फिल्टर हटाएं)" : "Show all levels (Clear filter)"}</span>
              </button>
            </div>
          )}
        </section>

        {/* ─── SECTION 2: Interactive Daily Nutrition Calculator ─── */}
        <section id="calculator" aria-labelledby="calc-heading" className="mb-12 sm:mb-16 scroll-mt-24">
          <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0A0E1A] p-4 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl mb-6 sm:mb-8">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#00E5C4] block">
                {language === "hi" ? "दैनिक पोषण लक्ष्य" : "Clinical Target Calculator"}
              </span>
              <h2 id="calc-heading" className="text-xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                {language === "hi" ? "अपनी व्यक्तिगत पोषण आवश्यकताएं जानें" : "Personalized Daily Nutrition Benchmarks"}
              </h2>
              <p className="text-xs sm:text-sm text-[#8A8F98] mt-2 leading-relaxed">
                {language === "hi"
                  ? "अपने वजन और शारीरिक सक्रियता के अनुसार दैनिक प्रोटीन, आहार फाइबर और पानी की अनुशंसित मात्रा की गणना करें।"
                  : "Calculate baseline protein distribution, dietary fiber thresholds, and cellular hydration targets based on clinical RDA formulas."}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              {/* Inputs */}
              <div className="lg:col-span-5 space-y-5 sm:space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2.5">
                    <label htmlFor="weight-input" className="text-xs font-bold uppercase tracking-wider text-[#8A8F98]">
                      {language === "hi" ? "शरीर का वजन" : "Body Weight"}
                    </label>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => setBodyWeight((w) => Math.max(35, w - 5))}
                        aria-label="Decrease weight by 5 kg"
                        className="h-7 w-7 rounded-md bg-white/5 border border-white/10 text-white font-mono font-bold text-xs flex items-center justify-center active:scale-95 active:bg-white/20 transition-all"
                      >
                        -5
                      </button>
                      <span className="text-xs sm:text-sm font-mono font-bold text-[#00E5C4] px-1">
                        {bodyWeight} kg ({(bodyWeight * 2.20462).toFixed(0)} lbs)
                      </span>
                      <button
                        type="button"
                        onClick={() => setBodyWeight((w) => Math.min(140, w + 5))}
                        aria-label="Increase weight by 5 kg"
                        className="h-7 w-7 rounded-md bg-white/5 border border-white/10 text-white font-mono font-bold text-xs flex items-center justify-center active:scale-95 active:bg-white/20 transition-all"
                      >
                        +5
                      </button>
                    </div>
                  </div>
                  <input
                    id="weight-input"
                    type="range"
                    min="35"
                    max="140"
                    step="1"
                    value={bodyWeight}
                    onChange={(e) => setBodyWeight(Number(e.target.value))}
                    className="w-full h-3 bg-white/10 rounded-lg cursor-pointer appearance-none accent-[#00E5C4] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#00E5C4] [&::-webkit-slider-thumb]:shadow-lg active:[&::-webkit-slider-thumb]:scale-110"
                  />
                  <div className="flex justify-between text-[10px] text-[#8A8F98] font-mono mt-1.5">
                    <span>35 kg</span>
                    <span>70 kg</span>
                    <span>140 kg</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#8A8F98] mb-2">
                    {language === "hi" ? "शारीरिक सक्रियता स्तर" : "Physical Activity Level"}
                  </label>
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                    {(
                      [
                        { id: "sedentary", label: language === "hi" ? "बैठे रहना" : "Desk / Light" },
                        { id: "moderate", label: language === "hi" ? "मध्यम" : "Moderate" },
                        { id: "active", label: language === "hi" ? "सक्रिय" : "Heavy / Sport" },
                      ] as const
                    ).map((lvl) => (
                      <button
                        key={lvl.id}
                        type="button"
                        onClick={() => setActivityFactor(lvl.id)}
                        className={`min-h-[46px] px-2 sm:px-3 py-2 rounded-xl text-[11px] sm:text-xs font-bold border transition-all text-center leading-tight flex items-center justify-center ${
                          activityFactor === lvl.id
                            ? "bg-[#00E5C4] text-black border-[#00E5C4] shadow-md shadow-teal-500/20"
                            : "bg-white/[0.03] text-[#8A8F98] border-white/10 hover:text-white"
                        }`}
                      >
                        {lvl.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Output Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {/* Protein Target */}
                <div className="rounded-xl sm:rounded-2xl border border-teal-500/30 bg-teal-500/5 p-4 sm:p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest">
                      {language === "hi" ? "दैनिक प्रोटीन" : "Daily Protein"}
                    </span>
                    <Scale className="w-4 h-4 text-teal-400" />
                  </div>
                  <div>
                    <span className="text-3xl sm:text-4xl font-mono font-black text-white">
                      {nutritionTargets.protein}
                    </span>
                    <span className="text-xs font-mono text-teal-300 ml-1">g / day</span>
                  </div>
                  <p className="text-[11px] text-[#8A8F98] mt-2.5 sm:mt-3 leading-tight">
                    {language === "hi"
                      ? "प्रति भोजन 25-30g बांटकर खाएं ताकि मांसपेशियों का रखरखाव हो सके।"
                      : "Paced evenly across 3-4 meals (~25-30g each) for optimal muscle protein synthesis."}
                  </p>
                </div>

                {/* Fiber Target */}
                <div className="rounded-xl sm:rounded-2xl border border-sky-500/30 bg-sky-500/5 p-4 sm:p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest">
                      {language === "hi" ? "आहार फाइबर" : "Dietary Fiber"}
                    </span>
                    <Activity className="w-4 h-4 text-sky-400" />
                  </div>
                  <div>
                    <span className="text-3xl sm:text-4xl font-mono font-black text-white">
                      {nutritionTargets.fiber}
                    </span>
                    <span className="text-xs font-mono text-sky-300 ml-1">g / day</span>
                  </div>
                  <p className="text-[11px] text-[#8A8F98] mt-2.5 sm:mt-3 leading-tight">
                    {language === "hi"
                      ? "आंतों के अच्छे बैक्टीरिया को पोषित करने और शुगर स्पाइक रोकने के लिए आवश्यक।"
                      : "Gold standard for short-chain fatty acid (butyrate) production and steady glucose curves."}
                  </p>
                </div>

                {/* Water Target */}
                <div className="rounded-xl sm:rounded-2xl border border-blue-500/30 bg-blue-500/5 p-4 sm:p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                      {language === "hi" ? "जलयोजन (पानी)" : "Hydration"}
                    </span>
                    <Droplets className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <span className="text-3xl sm:text-4xl font-mono font-black text-white">
                      {nutritionTargets.water}
                    </span>
                    <span className="text-xs font-mono text-blue-300 ml-1">L / day</span>
                  </div>
                  <p className="text-[11px] text-[#8A8F98] mt-2.5 sm:mt-3 leading-tight">
                    {language === "hi"
                      ? "गुर्दे की निस्पंदन और कोशिका कार्यप्रणाली को बनाए रखने के लिए आधारभूत मात्रा।"
                      : "Baseline fluid requirement before factoring in excessive sweat or humid climates."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 3: Clinical Food Tips & Guidance Cards ─── */}
        <section id="tips" aria-labelledby="tips-heading" className="mb-12 sm:mb-16 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#00E5C4] block">
                {language === "hi" ? "व्यावहारिक सुझाव" : "Evidence-Based Protocols"}
              </span>
              <h2 id="tips-heading" className="text-xl sm:text-3xl font-bold text-white tracking-tight">
                {language === "hi" ? "भोजन और पोषण के प्रमुख नियम" : "Clinical Food Tips & Nutrition Rules"}
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A8F98]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === "hi" ? "भोजन या लाभ खोजें..." : "Search foods, organs, nutrients..."}
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

          {/* Tips Grid */}
          {filteredTips.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-white/10 p-8 sm:p-12 text-center text-[#8A8F98]">
              <Apple className="w-10 h-10 mx-auto text-[#8A8F98] mb-3 opacity-50" />
              <h3 className="text-base font-bold text-white mb-1">
                {language === "hi" ? "कोई सुझाव नहीं मिला" : "No matching nutrition tips found"}
              </h3>
              <p className="text-xs">
                {language === "hi" ? "कृपया फिल्टर बदलें या खोज शब्द रीसेट करें।" : "Try clearing your search query or selecting a different system filter."}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {filteredTips.map((tip) => {
                const levelMeta = NUTRITION_LEVELS[tip.level];
                const displayTitle = language === "hi" ? tip.hi.title : tip.title;
                const displayFood = language === "hi" ? tip.hi.foodName : tip.foodName;
                const displayAction = language === "hi" ? tip.hi.actionableTip : tip.actionableTip;
                const displayMechanism = language === "hi" ? tip.hi.biologicalMechanism : tip.biologicalMechanism;

                return (
                  <article
                    key={tip.id}
                    className="rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0A0E1A] p-4 sm:p-7 flex flex-col justify-between hover:border-white/20 transition-all shadow-lg"
                  >
                    <div>
                      {/* Card Header Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5 sm:mb-4">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <span className={`px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-bold uppercase tracking-wider border ${levelMeta.badgeClass}`}>
                            Level {tip.level}
                          </span>
                          <span className="px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-mono text-[#8A8F98] bg-white/5 border border-white/10">
                            {tip.systemLabel}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-teal-400/90 font-medium">
                          {tip.readingGrade}
                        </span>
                      </div>

                      {/* Title & Food */}
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 leading-snug">
                        {displayTitle}
                      </h3>
                      <p className="text-xs font-mono text-[#00E5C4] mb-3.5 sm:mb-4">
                        <strong className="text-white/60">{language === "hi" ? "खाद्य स्रोत:" : "Key Foods:"}</strong> {displayFood}
                      </p>

                      {/* Actionable Tip Box */}
                      <div className="rounded-xl border border-teal-500/20 bg-teal-500/5 p-3.5 sm:p-4 mb-3.5 sm:mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300 block mb-1">
                          {language === "hi" ? "👉 थाली में आज ही अपनाएं (स्मार्ट टिप)" : "👉 Try This Today (Action Rule)"}
                        </span>
                        <p className="text-xs sm:text-sm text-[#EAEAEA] leading-relaxed font-medium">
                          {displayAction}
                        </p>
                      </div>

                      {/* Biological Mechanism */}
                      <div className="space-y-1 sm:space-y-1.5 mb-3.5 sm:mb-4 text-xs text-[#8A8F98] leading-relaxed">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white/50 block">
                          {language === "hi" ? "कोशिकीय जैव रसायन (कैसे काम करता है):" : "Biological Cellular Mechanism:"}
                        </span>
                        <p>{displayMechanism}</p>
                      </div>

                      {/* Synergy Hack */}
                      {tip.synergyHack && (
                        <div className="rounded-lg bg-white/[0.02] border border-white/5 p-2.5 sm:p-3 mb-3.5 sm:mb-4 text-xs text-[#8A8F98]">
                          <strong className="text-amber-400 block mb-0.5">
                            ⚡ {language === "hi" ? "सुपरचार्जर तालमेल:" : "Synergy Multiplier:"}
                          </strong>
                          <span>{tip.synergyHack}</span>
                        </div>
                      )}

                      {/* Caution Alert */}
                      {tip.cautionAlert && (
                        <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-2.5 sm:p-3 mb-3.5 sm:mb-4 text-xs text-red-300">
                          <strong className="text-red-400 block mb-0.5">
                            ⚠️ {language === "hi" ? "सावधानी / चेतावनी:" : "Clinical Caution:"}
                          </strong>
                          <span>{tip.cautionAlert}</span>
                        </div>
                      )}
                    </div>

                    {/* Card Footer: Evidence & Citation */}
                    <div className="pt-3 sm:pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-mono text-[#8A8F98]">
                      <span className="text-teal-400 font-semibold">{tip.quickStat}</span>
                      <span className="break-words sm:truncate max-w-full sm:max-w-xs text-left sm:text-right" title={tip.citation}>
                        {tip.citation}
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        {/* ─── SECTION 4: Food Synergy Matrix (The Multipliers) ─── */}
        <section id="synergies" aria-labelledby="synergy-heading" className="mb-12 sm:mb-16 scroll-mt-24">
          <div className="max-w-3xl mb-6 sm:mb-8">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#00E5C4] block">
              {language === "hi" ? "पोषक तत्वों का तालमेल" : "Biochemical Synergy"}
            </span>
            <h2 id="synergy-heading" className="text-xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              {language === "hi" ? "खाद्य तालमेल: 1 + 1 = 10 का विज्ञान" : "The Food Synergy Multiplier Matrix"}
            </h2>
            <p className="text-xs sm:text-sm text-[#8A8F98] mt-2 leading-relaxed">
              {language === "hi"
                ? "कुछ पोषक तत्व अकेले खाने पर ठीक से अवशोषित नहीं होते, लेकिन सही भोजन के साथ मिलते ही उनका लाभ 20 गुना तक बढ़ जाता है।"
                : "Certain micronutrients have low standalone bioavailability until paired with specific lipid, enzymatic, or acidic cofactors."}
            </p>
          </div>

          {/* Swipeable Carousel on Mobile Phones, Grid on Tablet/Desktop */}
          <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory touch-scroll">
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
                  💡 "{syn.culinaryIdea}"
                </div>
              </div>
            ))}
          </div>

          {/* Mobile phone swipe hint */}
          <div className="flex sm:hidden items-center justify-between text-[11px] text-[#8A8F98] mt-2 px-1">
            <span>{language === "hi" ? "👈 तालमेल देखने के लिए स्वाइप करें 👉" : "👈 Swipe to view synergies 👉"}</span>
            <span className="font-mono text-amber-400">1 — 4</span>
          </div>
        </section>

        {/* ─── SECTION 5: Critical Drug-Food Interactions ─── */}
        <section id="interactions" aria-labelledby="drug-food-heading" className="mb-12 sm:mb-16 scroll-mt-24">
          <div className="rounded-2xl sm:rounded-3xl border border-red-500/30 bg-red-500/5 p-4 sm:p-8 backdrop-blur-xl">
            <div className="flex items-start sm:items-center gap-3 mb-4 sm:mb-6">
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-red-500 text-white font-bold mt-0.5 sm:mt-0">
                <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 block">
                  {language === "hi" ? "महत्वपूर्ण सुरक्षा चेतावनी" : "Life-Saving Medical Alert"}
                </span>
                <h2 id="drug-food-heading" className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                  {language === "hi" ? "घातक खाद्य-दवा परस्पर क्रिया (इंटरैक्शन)" : "Dangerous Food-Medication Interactions"}
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#8A8F98] mb-4 sm:mb-6 leading-relaxed max-w-3xl">
              {language === "hi"
                ? "प्राकृतिक और स्वास्थ्यवर्धक माने जाने वाले कुछ खाद्य पदार्थ यदि विशेष दवाओं के साथ खाए जाएं, तो वे लिवर एंजाइम को बाधित कर रक्त में दवा का स्तर 300% से अधिक बढ़ा सकते हैं या उसके प्रभाव को निष्क्रिय कर सकते हैं।"
                : "Common foods contain potent phytochemicals that can inhibit cytochrome P450 enzymes or chelate antibiotics. Never ignore these clinically documented interactions."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
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
                      <strong className="text-white/60">Interacting Rx:</strong> {warn.medicationClass}
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
