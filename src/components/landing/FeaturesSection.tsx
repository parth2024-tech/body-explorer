import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  Compass,
  FileQuestion,
  Calendar,
  Layers,
  BookOpen,
  ArrowRight,
  ShieldAlert,
  Apple,
} from "lucide-react";

const FEATURES = [
  {
    id: "explore",
    icon: Compass,
    code: "XPL",
    color: "#00E5C4",
    title: "Interactive Body Map",
    tagline: "Explore Regional Anatomy",
    desc: "30+ anatomical zones mapped across physiological layers. Click any organ to view verified biological mechanisms and clinical facts.",
    stats: ["30+ Organs", "Interactive Vectors", "Layered Views"],
    link: "/explore",
  },
  {
    id: "food",
    icon: Apple,
    code: "NTR",
    color: "#00E5C4",
    title: "Nutrition & Food Spectrum",
    tagline: "4-Level Nutrition & Synergies",
    desc: "Clinically graded 4-level food spectrum, glucose-balancing meal sequencing, personalized protein/fiber targets, and life-saving drug-food interaction alerts.",
    stats: ["4-Tier Hierarchy", "Daily Calculator", "Food Synergies"],
    link: "/food",
  },
  {
    id: "explain",
    icon: FileQuestion,
    code: "EXP",
    color: "#38BDF8",
    title: "Terminology Explainer",
    tagline: "Demystify Medical Terms",
    desc: "Describe medical terms or clinical concepts in plain language. Get context, anatomical connections, and doctor discussion guides.",
    stats: ["Plain Language", "Doctor Prep", "Organ Connections"],
    link: "/explain",
  },
  {
    id: "daily",
    icon: Calendar,
    code: "DLY",
    color: "#00E5C4",
    title: "Daily Clinical Insight",
    tagline: "One Fact, One Micro-Action",
    desc: "A daily rotating peer-reviewed physiological insight paired with a practical 30-second evidence-based habit.",
    stats: ["Daily Rotation", "290+ Facts", "Habit Guidance"],
    link: "/facts",
  },
  {
    id: "emergency",
    icon: ShieldAlert,
    code: "EMG",
    color: "#F43F5E",
    title: "Emergency Red Flags",
    tagline: "Critical Triage Warnings",
    desc: "Immediate emergency warning signs separated from non-urgent symptoms. Know when to call emergency services versus scheduling a routine visit.",
    stats: ["Urgency Tiers", "Emergency 911/112", "Clinical Safety"],
    link: "/emergency",
  },
  {
    id: "library",
    icon: BookOpen,
    code: "LIB",
    color: "#F5A623",
    title: "Anatomical Library",
    tagline: "Evidence-Based Index",
    desc: "Peer-reviewed medical literature indexed by system, organ, and condition. Grounded in CDC, WHO, and AHA clinical standards.",
    stats: ["Tier 1/2 Sources", "Cross-Linked", "Peer-Reviewed"],
    link: "/library",
  },
  {
    id: "symptoms",
    icon: Layers,
    code: "SYM",
    color: "#38BDF8",
    title: "Symptom Navigator",
    tagline: "Organ-Guided Context",
    desc: "Understand how localized symptoms correlate with specific anatomical structures, complete with discussion prompts for physicians.",
    stats: ["Educational Focus", "Anatomy-Linked", "Doctor Questions"],
    link: "/symptoms",
  },
];

function FeatureCard({ feat, index }: { feat: typeof FEATURES[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = feat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative"
    >
      <Link
        to={feat.link}
        className="group block rounded-xl border border-[#1E2844] bg-[#0D1428]/70 p-6 backdrop-blur-sm transition-all duration-300 overflow-hidden hover:border-[#2D3B66] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00E5C4]"
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5 opacity-40 group-hover:opacity-100 transition-opacity"
          style={{
            background: `linear-gradient(90deg, transparent, ${feat.color}, transparent)`,
          }}
          aria-hidden="true"
        />

        <div className="relative z-10">
          {/* Header row */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg"
                style={{
                  background: `${feat.color}15`,
                  border: `1px solid ${feat.color}30`,
                  color: feat.color,
                }}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-mono text-[9px] tracking-[0.2em] text-[#7B8199] uppercase">
                  {feat.code}
                </div>
                <h3 className="text-base font-bold text-[#E8E0D5] group-hover:text-[#00E5C4] transition-colors">
                  {feat.title}
                </h3>
              </div>
            </div>
            <ArrowRight
              className="h-4 w-4 text-[#7B8199] group-hover:text-[#00E5C4] transition-all transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </div>

          {/* Tagline */}
          <div
            className="mb-2 font-mono text-[10px] tracking-wider uppercase font-semibold"
            style={{ color: feat.color }}
          >
            {feat.tagline}
          </div>

          {/* Description */}
          <p className="text-xs md:text-sm leading-relaxed text-[#8B8FA3] mb-5">{feat.desc}</p>

          {/* Stats pills */}
          <div className="flex flex-wrap gap-1.5">
            {feat.stats.map((s) => (
              <span
                key={s}
                className="rounded-md px-2.5 py-1 font-mono text-[10px] tracking-wide"
                style={{
                  background: `${feat.color}08`,
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
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="mb-4 inline-flex items-center gap-2 rounded-md border border-[#1E2844] bg-[#0D1428] px-3.5 py-1"
          >
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#00E5C4] uppercase">
              Core Modules
            </span>
          </motion.div>
          <motion.h2
            id="features-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[clamp(1.9rem,4vw,2.75rem)] font-bold tracking-tight text-[#E8E0D5]"
          >
            Structured Tools for Practical Health Literacy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-xs md:text-sm text-[#7B8199] leading-relaxed"
          >
            Each module is designed for clinical accuracy and clear patient understanding.
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feat, i) => (
            <FeatureCard key={feat.id} feat={feat} index={i} />
          ))}
        </div>

        {/* Bottom link */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#00E5C4] hover:underline"
          >
            <span>Launch Complete Anatomical Explorer</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
