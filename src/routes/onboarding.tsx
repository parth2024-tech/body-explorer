import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useBodyStore } from "@/store/useBodyStore";
import { TRANSLATIONS } from "@/data/content";

export const Route = createFileRoute("/onboarding")({
  head: () => ({
    meta: [
      { title: "Personalize Your Atlas — Onboarding" },
      { name: "description", content: "Select your health interests and check in your current body mood." }
    ]
  }),
  component: OnboardingPage,
});

// --- Constants & Types ---
const INTEREST_TOPICS = [
  { id: "brain", label: "Brain & Sleep", icon: "🧠" },
  { id: "digestion", label: "Digestion & Gut", icon: "🍽️" },
  { id: "remedies", label: "Natural Remedies", icon: "🌿" },
  { id: "fitness", label: "Movement & Joints", icon: "💪" },
  { id: "hacks", label: "Life Hacks & Breath", icon: "🌬️" },
  { id: "circulation", label: "Heart & Blood", icon: "❤️" },
] as const;

const MOODS = [
  { id: "energized", label: "Energized", emoji: "⚡" },
  { id: "sore", label: "Sore / Stiff", emoji: "🦴" },
  { id: "tired", label: "Tired / Sleepy", emoji: "😴" },
  { id: "curious", label: "Curious", emoji: "🧐" },
  { id: "anxious", label: "Anxious / Tight", emoji: "🌪️" },
] as const;

// --- Animation Variants ---
const stepVariants = {
  hidden: { opacity: 0, x: 20, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: "easeOut" as any, staggerChildren: 0.1 }
  },
  exit: { opacity: 0, x: -20, filter: "blur(4px)", transition: { duration: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

function OnboardingPage() {
  const {
    language,
    interests,
    toggleInterest,
    addMoodLog,
    streak,
    updateStreak,
    addHistoryEntry,
  } = useBodyStore();

  const [step, setStep] = useState(1);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  useEffect(() => {
    addHistoryEntry("/onboarding");
    updateStreak();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMoodSelect = (moodId: string) => {
    setSelectedMood(moodId);
    addMoodLog(moodId);
  };

  // Improved type-safe translation helper
  const t = (key: string, fallback: string) => {
    const dict = TRANSLATIONS[language] || TRANSLATIONS.en;
    return (dict as Record<string, string>)[key] || fallback;
  };

  return (
    <div className="mx-auto max-w-xl px-5 py-16 flex flex-col items-center justify-center min-h-[80vh]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full rounded-2xl border border-border bg-[#141826]/80 p-8 shadow-2xl relative overflow-hidden"
      >
        {/* Animated Glow indicator */}
        <motion.div 
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" as any }}
          className="absolute top-0 left-0 w-1/2 h-[3px] bg-gradient-to-r from-transparent via-[#00E5C4] to-transparent" 
        />

        {/* Step indicator */}
        <div className="flex justify-between items-center mb-8 border-b border-border/40 pb-4">
          <span className="text-xs font-bold text-[#8B8FA3] tracking-wide">
            {t("step_counter", `Step ${step} of 3`)}
          </span>
          <div className="flex gap-1.5">
            {[1, 2, 3].map((i) => (
              <motion.span 
                key={i}
                layout
                className={`h-1.5 rounded-full transition-colors duration-300 ${
                  step >= i ? "w-6 bg-[#00E5C4]" : "w-4 bg-[#1E2844]"
                }`} 
              />
            ))}
          </div>
        </div>

        {/* Dynamic Step Content */}
        <div className="min-h-[320px]">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                <div className="text-center">
                  <motion.h2 variants={itemVariants} className="text-2xl font-bold text-[#E8E0D5]">
                    {t("onboarding_q1", "What are you curious about?")}
                  </motion.h2>
                  <motion.p variants={itemVariants} className="text-xs text-[#8B8FA3] mt-2">
                    {t("onboarding_desc1", "Select topics to personalize the discover cards in your Library and Explore feeds.")}
                  </motion.p>
                </div>

                <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
                  {INTEREST_TOPICS.map((topic) => {
                    const active = interests.includes(topic.id);
                    return (
                      <motion.button
                        key={topic.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => toggleInterest(topic.id)}
                        className={`flex items-center gap-3 p-4 rounded-xl border text-left font-bold transition-colors ${
                          active
                            ? "bg-[#00E5C4]/10 border-[#00E5C4] text-[#E8E0D5]"
                            : "bg-[#111525] border-border/60 text-[#8B8FA3] hover:text-[#E8E0D5] hover:border-border"
                        }`}
                      >
                        <span className="text-xl" role="img" aria-hidden="true">{topic.icon}</span>
                        <span className="text-xs">{topic.label}</span>
                      </motion.button>
                    );
                  })}
                </motion.div>

                <motion.button
                  variants={itemVariants}
                  whileHover={interests.length > 0 ? { scale: 1.02 } : {}}
                  whileTap={interests.length > 0 ? { scale: 0.98 } : {}}
                  onClick={() => setStep(2)}
                  disabled={interests.length === 0}
                  className="w-full rounded-xl bg-[#00E5C4] text-[#0A0E1A] py-3 text-sm font-bold shadow-[0_0_20px_rgba(0,229,196,0.2)] hover:shadow-[0_0_25px_rgba(0,229,196,0.4)] disabled:opacity-50 disabled:shadow-none transition-all"
                >
                  {t("continue", "Continue")}
                </motion.button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                <div className="text-center">
                  <motion.h2 variants={itemVariants} className="text-2xl font-bold text-[#E8E0D5]">
                    {t("onboarding_q2", "How is your body feeling today?")}
                  </motion.h2>
                  <motion.p variants={itemVariants} className="text-xs text-[#8B8FA3] mt-2">
                    {t("onboarding_desc2", "An anonymous check-in. Logging this influences content suggestions.")}
                  </motion.p>
                </div>

                <motion.div variants={itemVariants} className="space-y-2.5">
                  {MOODS.map((mood) => {
                    const active = selectedMood === mood.id;
                    return (
                      <motion.button
                        key={mood.id}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => handleMoodSelect(mood.id)}
                        className={`w-full flex items-center justify-between p-4 rounded-xl border font-bold transition-colors ${
                          active
                            ? "bg-[#F5A623]/10 border-[#F5A623] text-[#E8E0D5]"
                            : "bg-[#111525] border-border/60 text-[#8B8FA3] hover:text-[#E8E0D5] hover:border-border"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span role="img" aria-hidden="true">{mood.emoji}</span>
                          <span className="text-sm">{mood.label}</span>
                        </div>
                        <AnimatePresence>
                          {active && (
                            <motion.span 
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              className="text-[#F5A623] text-sm flex items-center gap-1"
                            >
                              ✓ {t("checked_in", "Checked In")}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    );
                  })}
                </motion.div>

                <motion.div variants={itemVariants} className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setStep(1)}
                    className="flex-1 rounded-xl border border-border bg-[#111525] text-[#8B8FA3] py-3 text-sm font-bold hover:text-[#E8E0D5] transition-colors"
                  >
                    {t("back", "Back")}
                  </motion.button>
                  <motion.button
                    whileHover={selectedMood ? { scale: 1.02 } : {}}
                    whileTap={selectedMood ? { scale: 0.98 } : {}}
                    onClick={() => setStep(3)}
                    disabled={!selectedMood}
                    className="flex-1 rounded-xl bg-[#00E5C4] text-[#0A0E1A] py-3 text-sm font-bold shadow-[0_0_20px_rgba(0,229,196,0.2)] disabled:opacity-50 transition-all"
                  >
                    {t("continue", "Continue")}
                  </motion.button>
                </motion.div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6 text-center">
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                  className="mx-auto flex h-16 w-16 place-items-center justify-center rounded-2xl bg-[#00E5C4]/15 text-3xl text-[#00E5C4]"
                >
                  ✨
                </motion.div>
                
                <div className="space-y-2">
                  <motion.h2 variants={itemVariants} className="text-2xl font-bold text-[#E8E0D5]">
                    {t("atlas_configured", "Atlas Configured!")}
                  </motion.h2>
                  <motion.p variants={itemVariants} className="text-xs text-[#8B8FA3]">
                    {t("atlas_desc", "Your streak has begun. Explore daily to understand the 37 trillion cells keeping you alive.")}
                  </motion.p>
                </div>

                {/* Animated Streak Counter Waveform */}
                <motion.div variants={itemVariants} className="rounded-xl bg-[#0F121F] p-5 border border-border/60 relative overflow-hidden">
                  <span className="text-[10px] uppercase font-bold text-[#F5A623] tracking-widest block relative z-10">
                    {t("current_streak", "Your Current Streak")}
                  </span>
                  <motion.span 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-5xl font-extrabold text-[#E8E0D5] font-mono mt-2 block relative z-10"
                  >
                    {streak} <span className="text-xl text-[#8B8FA3]">{streak === 1 ? t("day", "Day") : t("days", "Days")}</span>
                  </motion.span>

                  <div className="mt-6 flex justify-center">
                    <svg width="200" height="40" className="opacity-90 overflow-visible">
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                        d={`M 10 20 Q 30 ${streak > 1 ? "0" : "20"}, 50 20 T 90 20 T 130 20 T 170 20 T 190 20`}
                        fill="none"
                        stroke="url(#streakGradient)"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="streakGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#F5A623" />
                          <stop offset="100%" stopColor="#FF7A00" />
                        </linearGradient>
                      </defs>
                      
                      {/* Animated Node Dots */}
                      {[10, 50, 90, 130, 170].map((cx, index) => {
                        const isActive = streak > index;
                        return (
                          <motion.circle 
                            key={cx}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.8 + (index * 0.1), type: "spring" }}
                            cx={cx} 
                            cy="20" 
                            r={isActive ? "5" : "4"} 
                            fill={isActive ? "#F5A623" : "#1A2038"} 
                            stroke={isActive ? "#0F121F" : "none"}
                            strokeWidth="2"
                          />
                        );
                      })}
                    </svg>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setStep(2)}
                    className="flex-1 rounded-xl border border-border bg-[#111525] text-[#8B8FA3] py-3 text-sm font-bold hover:text-[#E8E0D5] transition-colors"
                  >
                    {t("back", "Back")}
                  </motion.button>
                  <Link
                    to="/explore"
                    className="flex-1"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full inline-flex items-center justify-center rounded-xl bg-[#00E5C4] text-[#0A0E1A] py-3 text-sm font-bold shadow-[0_0_20px_rgba(0,229,196,0.2)] hover:shadow-[0_0_25px_rgba(0,229,196,0.4)] transition-all"
                    >
                      {t("enter_atlas", "Enter Atlas →")}
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
