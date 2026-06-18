import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/* ─── Floating Data Card ─── */
const FLOAT_CARDS = [
  { emoji: "❤️", label: "Heart Rate", value: "72 bpm", color: "#E5504D", delay: 0 },
  { emoji: "🫁", label: "Lung Cap.", value: "4.8 L", color: "#00E5C4", delay: 0.4 },
  { emoji: "🧠", label: "Neurons", value: "86 Billion", color: "#A855F7", delay: 0.8 },
  { emoji: "🦴", label: "Bones", value: "206 total", color: "#F5A623", delay: 1.2 },
];

/* ─── Orbital Ring SVG ─── */
function OrbitalRings() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 800 800"
      fill="none"
      aria-hidden="true"
    >
      {/* Outer ring */}
      <ellipse
        cx="400" cy="400" rx="340" ry="120"
        stroke="url(#ringGrad1)" strokeWidth="0.8" strokeDasharray="4 8"
        className="animate-spin-slow"
        style={{ transformOrigin: "400px 400px" }}
      />
      {/* Middle ring */}
      <ellipse
        cx="400" cy="400" rx="260" ry="90"
        stroke="url(#ringGrad2)" strokeWidth="0.6" strokeDasharray="3 6"
        style={{
          transformOrigin: "400px 400px",
          animation: "spin-reverse 18s linear infinite",
        }}
      />
      {/* Inner ring */}
      <ellipse
        cx="400" cy="400" rx="180" ry="60"
        stroke="url(#ringGrad3)" strokeWidth="0.5" strokeDasharray="2 5"
        className="animate-spin-slow"
        style={{ transformOrigin: "400px 400px", animationDuration: "12s" }}
      />

      {/* Orbit dots */}
      <circle cx="740" cy="400" r="4" fill="#00E5C4" opacity="0.8">
        <animateMotion dur="22s" repeatCount="indefinite" path="M340,0 A340,120 0 1,1 -0.01,0 Z" />
      </circle>
      <circle cx="400" cy="280" r="3" fill="#A855F7" opacity="0.7">
        <animateMotion dur="14s" repeatCount="indefinite" begin="-7s" path="M260,0 A260,90 0 1,0 0.01,0 Z" />
      </circle>
      <circle cx="580" cy="400" r="2.5" fill="#F5A623" opacity="0.6">
        <animateMotion dur="9s" repeatCount="indefinite" begin="-3s" path="M180,0 A180,60 0 1,1 -0.01,0 Z" />
      </circle>

      <defs>
        <linearGradient id="ringGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00E5C4" stopOpacity="0" />
          <stop offset="30%" stopColor="#00E5C4" stopOpacity="0.4" />
          <stop offset="70%" stopColor="#6B4FA0" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#6B4FA0" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="ringGrad2" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#A855F7" stopOpacity="0" />
          <stop offset="40%" stopColor="#A855F7" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="ringGrad3" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F5A623" stopOpacity="0" />
          <stop offset="50%" stopColor="#F5A623" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#F5A623" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ─── Animated Human Body Silhouette ─── */
function BodyGlyph() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Glow aura */}
      <div
        className="absolute w-56 h-[420px] rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(0,229,196,0.15) 0%, rgba(107,79,160,0.08) 60%, transparent 80%)",
          filter: "blur(30px)",
        }}
      />
      {/* Body SVG */}
      <svg
        viewBox="0 0 160 400"
        className="relative z-10 w-40 h-auto"
        fill="none"
        aria-label="Human body silhouette"
      >
        {/* Head */}
        <ellipse cx="80" cy="38" rx="26" ry="30" fill="url(#bodyGrad)" stroke="#00E5C4" strokeWidth="0.8" strokeOpacity="0.6">
          <animate attributeName="stroke-opacity" values="0.4;0.9;0.4" dur="3s" repeatCount="indefinite" />
        </ellipse>
        {/* Neck */}
        <rect x="72" y="65" width="16" height="14" rx="4" fill="url(#bodyGrad)" stroke="#00E5C4" strokeWidth="0.6" strokeOpacity="0.5" />
        {/* Torso */}
        <path d="M45 79 Q40 130 42 190 L118 190 Q120 130 115 79 Z" fill="url(#bodyGrad)" stroke="#00E5C4" strokeWidth="0.8" strokeOpacity="0.5">
          <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" begin="-1s" />
        </path>

        {/* Organ highlights */}
        {/* Heart */}
        <path d="M70 110 Q68 105 72 103 Q76 101 78 106 Q80 101 84 103 Q88 105 86 110 L78 122 Z"
          fill="#E5504D" fillOpacity="0.7" stroke="#E5504D" strokeWidth="0.5">
          <animate attributeName="fill-opacity" values="0.5;0.9;0.5" dur="0.8s" repeatCount="indefinite" />
        </path>
        {/* Lungs - left */}
        <path d="M55 110 Q50 120 52 140 Q56 148 65 145 Q70 140 68 120 Z"
          fill="#00E5C4" fillOpacity="0.25" stroke="#00E5C4" strokeWidth="0.5" strokeOpacity="0.6">
          <animate attributeName="fill-opacity" values="0.15;0.35;0.15" dur="2s" repeatCount="indefinite" />
        </path>
        {/* Lungs - right */}
        <path d="M105 110 Q110 120 108 140 Q104 148 95 145 Q90 140 92 120 Z"
          fill="#00E5C4" fillOpacity="0.25" stroke="#00E5C4" strokeWidth="0.5" strokeOpacity="0.6">
          <animate attributeName="fill-opacity" values="0.15;0.35;0.15" dur="2s" repeatCount="indefinite" begin="-0.2s" />
        </path>
        {/* Stomach */}
        <ellipse cx="78" cy="162" rx="18" ry="12" fill="#F5A623" fillOpacity="0.2" stroke="#F5A623" strokeWidth="0.5" strokeOpacity="0.5">
          <animate attributeName="fill-opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite" />
        </ellipse>

        {/* Arms */}
        <path d="M45 82 Q28 100 24 155 Q22 170 30 175" stroke="#00E5C4" strokeWidth="12" strokeOpacity="0.15" strokeLinecap="round" fill="none" />
        <path d="M45 82 Q28 100 24 155 Q22 170 30 175" stroke="#00E5C4" strokeWidth="0.8" strokeOpacity="0.5" fill="none" />
        <path d="M115 82 Q132 100 136 155 Q138 170 130 175" stroke="#00E5C4" strokeWidth="12" strokeOpacity="0.15" strokeLinecap="round" fill="none" />
        <path d="M115 82 Q132 100 136 155 Q138 170 130 175" stroke="#00E5C4" strokeWidth="0.8" strokeOpacity="0.5" fill="none" />

        {/* Hands */}
        <ellipse cx="30" cy="180" rx="10" ry="8" fill="url(#bodyGrad)" stroke="#00E5C4" strokeWidth="0.6" strokeOpacity="0.4" />
        <ellipse cx="130" cy="180" rx="10" ry="8" fill="url(#bodyGrad)" stroke="#00E5C4" strokeWidth="0.6" strokeOpacity="0.4" />

        {/* Pelvis */}
        <path d="M42 190 Q40 215 55 220 Q70 225 80 222 Q90 225 105 220 Q120 215 118 190 Z"
          fill="url(#bodyGrad)" stroke="#00E5C4" strokeWidth="0.7" strokeOpacity="0.4" />

        {/* Legs */}
        <path d="M55 222 Q50 280 52 340 Q54 360 65 365" stroke="#00E5C4" strokeWidth="18" strokeOpacity="0.12" strokeLinecap="round" fill="none" />
        <path d="M55 222 Q50 280 52 340 Q54 360 65 365" stroke="#00E5C4" strokeWidth="0.8" strokeOpacity="0.4" fill="none" />
        <path d="M105 222 Q110 280 108 340 Q106 360 95 365" stroke="#00E5C4" strokeWidth="18" strokeOpacity="0.12" strokeLinecap="round" fill="none" />
        <path d="M105 222 Q110 280 108 340 Q106 360 95 365" stroke="#00E5C4" strokeWidth="0.8" strokeOpacity="0.4" fill="none" />

        {/* Feet */}
        <ellipse cx="65" cy="372" rx="16" ry="7" fill="url(#bodyGrad)" stroke="#00E5C4" strokeWidth="0.6" strokeOpacity="0.4" />
        <ellipse cx="95" cy="372" rx="16" ry="7" fill="url(#bodyGrad)" stroke="#00E5C4" strokeWidth="0.6" strokeOpacity="0.4" />

        {/* Neural/vascular lines */}
        <line x1="78" y1="68" x2="78" y2="188" stroke="#00E5C4" strokeWidth="0.3" strokeOpacity="0.3" strokeDasharray="4 6" />
        <path d="M78 110 Q60 120 55 140" stroke="#E5504D" strokeWidth="0.4" strokeOpacity="0.4" fill="none" strokeDasharray="3 5" />
        <path d="M78 110 Q96 120 105 140" stroke="#E5504D" strokeWidth="0.4" strokeOpacity="0.4" fill="none" strokeDasharray="3 5" />

        <defs>
          <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E2A4A" />
            <stop offset="100%" stopColor="#0D1428" />
          </linearGradient>
        </defs>
      </svg>

      {/* Data points on body */}
      {[
        { x: "15%", y: "28%", label: "❤️", pulse: true },
        { x: "78%", y: "22%", label: "🧠", pulse: false },
        { x: "8%", y: "42%", label: "🫁", pulse: true },
        { x: "50%", y: "50%", label: "🍃", pulse: false },
      ].map((pt, i) => (
        <div
          key={i}
          className="absolute text-xs pointer-events-none"
          style={{ left: pt.x, top: pt.y }}
        >
          <span className={pt.pulse ? "animate-pulse" : ""}>{pt.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── Magnetic Button ─── */
function MagneticButton({
  children,
  className,
  ...props
}: { children: React.ReactNode; className?: string; to?: string; [key: string]: unknown }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    x.set(dx * 0.25);
    y.set(dy * 0.25);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className="relative inline-block"
    >
      <Link className={className} {...(props as Parameters<typeof Link>[0])}>
        {children}
      </Link>
    </motion.div>
  );
}

/* ─── Hero Section ─── */
export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [4, -4]);
  const rotateY = useTransform(mouseX, [-300, 300], [-4, 4]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
      aria-label="Hero"
    >
      {/* Cinematic background gradients */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(107,79,160,0.35) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 80% 60%, rgba(0,229,196,0.12) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 40% 40% at 10% 80%, rgba(245,166,35,0.06) 0%, transparent 60%)",
          }}
        />
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,229,196,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,229,196,1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
        {/* Scan line */}
        <div
          className="absolute left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(0,229,196,0.4), transparent)",
            animation: "scanLine 6s linear infinite",
            top: "30%",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center min-h-screen py-24 lg:py-0">
          {/* Left: text content */}
          <div className="flex flex-col items-start">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[#1E2844] bg-[#0D1428]/80 px-4 py-2 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00E5C4] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00E5C4]" />
              </span>
              <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#00E5C4] uppercase">
                Atlas v2.0 · Live
              </span>
              <span className="h-3 w-px bg-[#1E2844]" />
              <span className="font-mono text-[10px] text-[#8B8FA3] tracking-[0.1em]">
                30+ organs mapped
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-[clamp(2.8rem,7vw,6rem)] font-bold leading-[0.95] tracking-[-0.04em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Your body has{" "}
              <span
                className="relative inline-block"
                style={{
                  background: "linear-gradient(135deg, #00E5C4 0%, #00BFA0 40%, #6B4FA0 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  textShadow: "none",
                  filter: "drop-shadow(0 0 30px rgba(0,229,196,0.4))",
                }}
              >
                37 trillion
              </span>
              <br />
              <span className="text-[#E8E0D5]">cells.</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
              className="mt-6 max-w-[480px] text-[clamp(1rem,2vw,1.2rem)] leading-relaxed text-[#7B8199]"
            >
              The world's most immersive anatomy platform. Explore every organ,
              system, and cell through a living interactive atlas —{" "}
              <span className="text-[#E8E0D5]">built for curious humans.</span>
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <MagneticButton
                to="/explore"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-[#00E5C4] px-8 py-4 text-sm font-bold text-[#0A0E1A] shadow-[0_0_40px_rgba(0,229,196,0.35)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(0,229,196,0.5)] hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00E5C4]"
              >
                <span className="relative z-10">Explore the Atlas</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                {/* Shimmer */}
                <span
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                  aria-hidden="true"
                />
              </MagneticButton>


            </motion.div>

            {/* Trust stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-14 flex flex-wrap items-center gap-6"
            >
              {[
                { num: "30+", label: "Organs" },
                { num: "200+", label: "Body Facts" },
                { num: "5", label: "Data Layers" },
                { num: "0", label: "Textbooks" },
              ].map((stat, i) => (
                <div key={i} className="flex items-baseline gap-2">
                  <span
                    className="font-mono text-2xl font-bold text-[#00E5C4]"
                    style={{ textShadow: "0 0 20px rgba(0,229,196,0.4)" }}
                  >
                    {stat.num}
                  </span>
                  <span className="text-xs text-[#7B8199]">{stat.label}</span>
                  {i < 3 && <span className="ml-4 h-4 w-px bg-[#1E2844]" />}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: 3D body visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative flex items-center justify-center"
            style={{ perspective: "1000px" }}
          >
            <motion.div
              style={{ rotateX, rotateY }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="relative w-full max-w-lg h-[500px] lg:h-[620px]"
            >
              {/* Orbital rings */}
              <OrbitalRings />

              {/* Body glyph */}
              <BodyGlyph />

              {/* Floating data cards */}
              {FLOAT_CARDS.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + card.delay }}
                  className="absolute"
                  style={{
                    ...[
                      { top: "12%", left: "0%" },
                      { top: "8%", right: "0%" },
                      { bottom: "28%", left: "2%" },
                      { bottom: "20%", right: "4%" },
                    ][i],
                    animation: `floatCard${i} ${5 + i * 0.7}s ease-in-out infinite`,
                    animationDelay: `${i * 1.2}s`,
                  }}
                >
                  <div
                    className="flex items-center gap-2.5 rounded-2xl border px-3.5 py-2.5 backdrop-blur-md"
                    style={{
                      background: `linear-gradient(135deg, rgba(13,20,40,0.9), rgba(20,24,38,0.85))`,
                      borderColor: `${card.color}30`,
                      boxShadow: `0 4px 24px rgba(0,0,0,0.4), 0 0 0 0.5px ${card.color}20`,
                    }}
                  >
                    <span className="text-xl">{card.emoji}</span>
                    <div>
                      <div className="font-mono text-[9px] tracking-wider text-[#7B8199] uppercase">
                        {card.label}
                      </div>
                      <div
                        className="font-bold text-sm"
                        style={{ color: card.color }}
                      >
                        {card.value}
                      </div>
                    </div>
                    {/* Live indicator */}
                    <span
                      className="ml-1 h-1.5 w-1.5 rounded-full animate-pulse"
                      style={{ background: card.color }}
                    />
                  </div>
                </motion.div>
              ))}

              {/* Center glow */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{
                  width: "200px",
                  height: "400px",
                  background: "radial-gradient(ellipse, rgba(0,229,196,0.08) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }}
                aria-hidden="true"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-mono text-[9px] tracking-[0.25em] text-[#7B8199] uppercase">Scroll</span>
        <div className="h-10 w-px overflow-hidden bg-[#1E2844]">
          <div
            className="h-4 w-px bg-gradient-to-b from-transparent via-[#00E5C4] to-transparent"
            style={{ animation: "scrollDot 2s ease-in-out infinite" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
