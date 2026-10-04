import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Activity, Wind, Brain, Bone, ArrowRight, ShieldCheck, Apple } from "lucide-react";

/* ─── Clinical Data Cards ─── */
const FLOAT_CARDS = [
  { icon: Activity, label: "Cardiac Output", value: "72 bpm / 5 L/min", color: "#F43F5E", delay: 0 },
  { icon: Wind, label: "Pulmonary Capillaries", value: "100 m² surface", color: "#00E5C4", delay: 0.2 },
  { icon: Brain, label: "Glymphatic Clearance", value: "Active in deep sleep", color: "#38BDF8", delay: 0.4 },
  { icon: Bone, label: "Skeletal Framework", value: "206 articulating bones", color: "#F5A623", delay: 0.6 },
];

/* ─── Anatomical Silhouette ─── */
function BodyGlyph() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background medical glow aura */}
      <div
        className="absolute w-56 h-[420px] rounded-2xl opacity-20"
        style={{
          background: "radial-gradient(ellipse, rgba(0,229,196,0.2) 0%, rgba(56,189,248,0.1) 50%, transparent 80%)",
          filter: "blur(35px)",
        }}
      />

      {/* Body SVG */}
      <svg
        viewBox="0 0 160 400"
        className="relative z-10 w-44 h-auto"
        fill="none"
        aria-label="Human body anatomical silhouette"
      >
        {/* Head */}
        <ellipse cx="80" cy="38" rx="26" ry="30" fill="url(#bodyGrad)" stroke="#00E5C4" strokeWidth="0.8" strokeOpacity="0.6" />
        {/* Neck */}
        <rect x="72" y="65" width="16" height="14" rx="4" fill="url(#bodyGrad)" stroke="#00E5C4" strokeWidth="0.6" strokeOpacity="0.5" />
        {/* Torso */}
        <path d="M45 79 Q40 130 42 190 L118 190 Q120 130 115 79 Z" fill="url(#bodyGrad)" stroke="#00E5C4" strokeWidth="0.8" strokeOpacity="0.5" />

        {/* Heart */}
        <path
          d="M70 110 Q68 105 72 103 Q76 101 78 106 Q80 101 84 103 Q88 105 86 110 L78 122 Z"
          fill="#F43F5E"
          fillOpacity="0.8"
          stroke="#F43F5E"
          strokeWidth="0.5"
        >
          <animate attributeName="fill-opacity" values="0.5;0.95;0.5" dur="1s" repeatCount="indefinite" />
        </path>

        {/* Lungs */}
        <path
          d="M55 110 Q50 120 52 140 Q56 148 65 145 Q70 140 68 120 Z"
          fill="#00E5C4"
          fillOpacity="0.25"
          stroke="#00E5C4"
          strokeWidth="0.5"
        />
        <path
          d="M105 110 Q110 120 108 140 Q104 148 95 145 Q90 140 92 120 Z"
          fill="#00E5C4"
          fillOpacity="0.25"
          stroke="#00E5C4"
          strokeWidth="0.5"
        />

        {/* Stomach */}
        <ellipse cx="78" cy="162" rx="18" ry="12" fill="#F5A623" fillOpacity="0.25" stroke="#F5A623" strokeWidth="0.5" strokeOpacity="0.6" />

        {/* Arms */}
        <path d="M45 82 Q28 100 24 155 Q22 170 30 175" stroke="#00E5C4" strokeWidth="0.8" strokeOpacity="0.5" fill="none" />
        <path d="M115 82 Q132 100 136 155 Q138 170 130 175" stroke="#00E5C4" strokeWidth="0.8" strokeOpacity="0.5" fill="none" />

        {/* Pelvis & Legs */}
        <path d="M42 190 Q40 215 55 220 Q70 225 80 222 Q90 225 105 220 Q120 215 118 190 Z" fill="url(#bodyGrad)" stroke="#00E5C4" strokeWidth="0.7" strokeOpacity="0.4" />
        <path d="M55 222 Q50 280 52 340 Q54 360 65 365" stroke="#00E5C4" strokeWidth="0.8" strokeOpacity="0.4" fill="none" />
        <path d="M105 222 Q110 280 108 340 Q106 360 95 365" stroke="#00E5C4" strokeWidth="0.8" strokeOpacity="0.4" fill="none" />

        {/* Neural line */}
        <line x1="78" y1="68" x2="78" y2="188" stroke="#38BDF8" strokeWidth="0.6" strokeOpacity="0.4" strokeDasharray="4 6" />

        <defs>
          <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E2844" />
            <stop offset="100%" stopColor="#0B0F19" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* ─── Hero Section ─── */
export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden py-16 lg:py-24" aria-label="Hero">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(0,229,196,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,229,196,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,229,196,1) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Text copy */}
          <div className="flex flex-col items-start">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6 inline-flex items-center gap-2 rounded-md border border-[#1E2844] bg-[#0D1428]/80 px-3 py-1.5"
            >
              <span className="h-2 w-2 rounded-full bg-[#00E5C4]" />
              <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-[#00E5C4] uppercase">
                Clinical Health Intelligence
              </span>
              <span className="h-3 w-px bg-[#1E2844]" />
              <span className="font-mono text-[10px] text-[#8B8FA3]">
                Tier 1 Medical Sources
              </span>
            </motion.div>

            {/* Clear, specific, non-vague headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[clamp(2.4rem,5.5vw,4.25rem)] font-bold leading-[1.05] tracking-tight text-[#E8E0D5]"
            >
              Interactive Human Anatomy and Clinical Physiology
            </motion.h1>

            {/* Sub-headline: high clarity, zero marketing slop */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 max-w-xl text-base md:text-lg leading-relaxed text-[#8B8FA3]"
            >
              Explore 30+ anatomical structures, 290+ peer-reviewed physiological mechanisms,
              and evidence-rated natural remedies vetted against AHA, CDC, and WHO clinical guidelines.
            </motion.p>

            {/* Structured CTAs (no pill shapes) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <Link
                to="/explore"
                className="inline-flex items-center gap-2 rounded-lg bg-[#00E5C4] px-7 py-3.5 text-sm font-semibold text-[#0A0E1A] transition-colors hover:bg-[#00cbb0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00E5C4]"
              >
                <span>Launch Interactive Atlas</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/food"
                className="inline-flex items-center gap-2 rounded-lg border border-[#1E2844] bg-[#0D1428] px-6 py-3.5 text-sm font-medium text-[#E8E0D5] transition-colors hover:border-[#2D3B66] hover:bg-[#111A33] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00E5C4]"
              >
                <Apple className="h-4 w-4 text-[#00E5C4]" />
                <span>Food & Nutrition</span>
              </Link>
            </motion.div>

            {/* Verified factual stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#1C2540] w-full"
            >
              {[
                { num: "30+", label: "Organs Mapped" },
                { num: "297", label: "Peer-Reviewed Facts" },
                { num: "58", label: "Debunked Myths" },
                { num: "39", label: "Studied Remedies" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-mono text-2xl font-bold text-[#00E5C4]">
                    {stat.num}
                  </span>
                  <span className="text-xs text-[#7B8199] mt-0.5">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Clean anatomical visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex items-center justify-center min-h-[460px]"
          >
            <div className="relative w-full max-w-md h-[460px] rounded-2xl border border-[#1E2844] bg-[#0D1428]/60 p-6 backdrop-blur-sm flex items-center justify-center">
              <BodyGlyph />

              {/* Verified clinical cards */}
              {FLOAT_CARDS.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.label}
                    className="absolute"
                    style={{
                      ...[
                        { top: "6%", left: "4%" },
                        { top: "6%", right: "4%" },
                        { bottom: "10%", left: "4%" },
                        { bottom: "10%", right: "4%" },
                      ][i],
                    }}
                  >
                    <div
                      className="flex items-center gap-2.5 rounded-lg border px-3 py-2 bg-[#090D16]/90 backdrop-blur-md"
                      style={{
                        borderColor: `${card.color}35`,
                      }}
                    >
                      <div
                        className="flex h-7 w-7 items-center justify-center rounded-md shrink-0"
                        style={{ background: `${card.color}15`, color: card.color }}
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="font-mono text-[9px] uppercase tracking-wider text-[#7B8199]">
                          {card.label}
                        </div>
                        <div className="font-semibold text-xs text-[#E8E0D5]">
                          {card.value}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
