import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";

const FEATURES = [
  {
    id: "explore",
    icon: "🗺️",
    code: "XPL",
    color: "#00E5C4",
    title: "Living Map",
    tagline: "Navigate your anatomy",
    desc: "30+ interactive zones across 5 data layers. Tap any organ to reveal what biology class never taught you. Real-time MRI-quality visualization.",
    stats: ["30+ organs", "5 data layers", "Real-time"],
    link: "/explore",
    preview: {
      bg: "radial-gradient(ellipse at center, rgba(0,229,196,0.12) 0%, transparent 70%)",
      icon: "🫀",
      label: "Cardiovascular",
    },
  },
  {
    id: "diary",
    icon: "📓",
    code: "DRY",
    color: "#F5A623",
    title: "Body Diary",
    tagline: "Track, understand, discover",
    desc: "Log how your body feels daily. Annotate by organ, intensity, and time. Watch patterns emerge across 30-day heatmaps.",
    stats: ["Daily logging", "30-day trends", "Organ specific"],
    link: "/diary",
    preview: {
      bg: "radial-gradient(ellipse at center, rgba(245,166,35,0.1) 0%, transparent 70%)",
      icon: "📊",
      label: "Today's Entry",
    },
  },
  {
    id: "explain",
    icon: "🧠",
    code: "EXP",
    color: "#A855F7",
    title: "Explain This",
    tagline: "AI-guided body clarity",
    desc: "Describe what you feel in plain language. Get educational context, organ connections, and smart questions to ask your doctor.",
    stats: ["Plain language", "Doctor prep", "Organ maps"],
    link: "/explain",
    preview: {
      bg: "radial-gradient(ellipse at center, rgba(168,85,247,0.1) 0%, transparent 70%)",
      icon: "💬",
      label: "Symptom Analysis",
    },
  },
  {
    id: "daily",
    icon: "⚡",
    code: "DLY",
    color: "#00E5C4",
    title: "Daily Insight",
    tagline: "One fact. One action.",
    desc: "Every day, one carefully chosen body fact + one 30-second action. Streak tracking, reminders, knowledge that accumulates.",
    stats: ["Daily streak", "200+ facts", "30s actions"],
    link: "/daily",
    preview: {
      bg: "radial-gradient(ellipse at center, rgba(0,229,196,0.1) 0%, transparent 70%)",
      icon: "🔥",
      label: "Day 12 Streak",
    },
  },
  {
    id: "quest",
    icon: "🏆",
    code: "QST",
    color: "#F5A623",
    title: "Weekly Quest",
    tagline: "Learn together",
    desc: "Community challenges every week. Complete quests, earn verified certificates, compete on the global leaderboard.",
    stats: ["Weekly reset", "Certificates", "Leaderboard"],
    link: "/quest",
    preview: {
      bg: "radial-gradient(ellipse at center, rgba(245,166,35,0.1) 0%, transparent 70%)",
      icon: "🎖️",
      label: "Quest Active",
    },
  },
  {
    id: "library",
    icon: "📚",
    code: "LIB",
    color: "#6B4FA0",
    title: "Body Library",
    tagline: "Deep knowledge base",
    desc: "Curated medical knowledge, cross-referenced by system, organ, and condition. Sourced from verified medical literature.",
    stats: ["500+ articles", "Verified sources", "Cross-linked"],
    link: "/library",
    preview: {
      bg: "radial-gradient(ellipse at center, rgba(107,79,160,0.12) 0%, transparent 70%)",
      icon: "🔍",
      label: "Digestive System",
    },
  },
];

function FeatureCard({ feat, index }: { feat: typeof FEATURES[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative"
    >
      <Link
        to={feat.link}
        className="group block rounded-3xl border border-[#1E2844] bg-[#0D1428]/60 p-6 backdrop-blur-sm transition-all duration-500 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        style={{
          borderColor: hovered ? `${feat.color}40` : undefined,
          boxShadow: hovered ? `0 0 40px ${feat.color}10, 0 8px 32px rgba(0,0,0,0.4)` : undefined,
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          outline: `2px solid transparent`,
        }}
      >
        {/* Background gradient on hover */}
        <div
          className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
          style={{
            background: feat.preview.bg,
            opacity: hovered ? 1 : 0,
          }}
          aria-hidden="true"
        />

        {/* Top shimmer line */}
        <div
          className="absolute top-0 left-0 right-0 h-px transition-opacity duration-300"
          style={{
            background: `linear-gradient(90deg, transparent, ${feat.color}60, transparent)`,
            opacity: hovered ? 1 : 0,
          }}
          aria-hidden="true"
        />

        <div className="relative z-10">
          {/* Header row */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl text-2xl transition-transform duration-300"
                style={{
                  background: `linear-gradient(135deg, ${feat.color}20, ${feat.color}08)`,
                  border: `1px solid ${feat.color}30`,
                  transform: hovered ? "scale(1.08)" : "scale(1)",
                }}
              >
                {feat.icon}
              </div>
              <div>
                <div className="font-mono text-[9px] tracking-[0.2em] text-[#7B8199] uppercase mb-0.5">
                  {feat.code}
                </div>
                <h3
                  className="text-base font-bold transition-colors duration-300"
                  style={{ color: hovered ? feat.color : "#E8E0D5" }}
                >
                  {feat.title}
                </h3>
              </div>
            </div>
            <div
              className="font-mono text-xs transition-all duration-300"
              style={{
                color: feat.color,
                opacity: hovered ? 1 : 0.4,
                transform: hovered ? "translate(2px, -2px)" : "translate(0,0)",
              }}
              aria-hidden="true"
            >
              ↗
            </div>
          </div>

          {/* Tagline */}
          <div
            className="mb-2 font-mono text-[10px] tracking-wider uppercase"
            style={{ color: feat.color, opacity: 0.7 }}
          >
            {feat.tagline}
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-[#7B8199] mb-5">{feat.desc}</p>

          {/* Stats pills */}
          <div className="flex flex-wrap gap-2">
            {feat.stats.map((s) => (
              <span
                key={s}
                className="rounded-full px-2.5 py-1 font-mono text-[10px] tracking-wider"
                style={{
                  background: `${feat.color}10`,
                  border: `1px solid ${feat.color}25`,
                  color: feat.color,
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function FeaturesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden" aria-labelledby="features-heading">
      {/* Section background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 70% 40% at 50% 50%, rgba(107,79,160,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1E2844] bg-[#0D1428]/60 px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="font-mono text-[10px] tracking-[0.25em] text-[#00E5C4] uppercase">Platform</span>
          </motion.div>
          <motion.h2
            id="features-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-[-0.03em] text-[#E8E0D5]"
          >
            Six ways to know{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00E5C4, #A855F7)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              your body
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-xl mx-auto text-base text-[#7B8199]"
          >
            Each module is a complete experience. Together, they form the most
            comprehensive self-education health platform ever built.
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feat, i) => (
            <FeatureCard key={feat.id} feat={feat} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 text-center"
        >
          <Link
            to="/explore"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#00E5C4] hover:text-[#00BFA0] transition-colors"
          >
            Explore the full platform
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
