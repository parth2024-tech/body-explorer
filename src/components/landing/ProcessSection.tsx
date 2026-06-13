import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const STEPS = [
  {
    num: "01",
    color: "#00E5C4",
    icon: "🗺️",
    title: "Open the Atlas",
    desc: "Launch the interactive 3D body map. 30+ organs across 5 scientific data layers — neural, circulatory, digestive, skeletal, endocrine.",
    detail: "No sign-up required",
  },
  {
    num: "02",
    color: "#A855F7",
    icon: "🔍",
    title: "Pick Any Organ",
    desc: "Tap a region. The Atlas zooms in, revealing rich fact cards, common conditions, fun superpowers, and your personal connection to that system.",
    detail: "5 lenses per organ",
  },
  {
    num: "03",
    color: "#F5A623",
    icon: "📓",
    title: "Log Your Experience",
    desc: "Felt something today? Pin it to the exact organ. Add intensity, time, and context. Your Body Diary builds your personal health map over time.",
    detail: "30-day heatmaps",
  },
  {
    num: "04",
    color: "#00E5C4",
    icon: "⚡",
    title: "Build Your Streak",
    desc: "Complete the Daily Insight each morning. One body fact + one 30-second action. Do it 7 days straight and unlock your first certificate.",
    detail: "Earn certificates",
  },
  {
    num: "05",
    color: "#6B4FA0",
    icon: "🏆",
    title: "Join the Community",
    desc: "Weekly quests, global leaderboards, community challenges. Learn in public. See how your body knowledge ranks with others worldwide.",
    detail: "Weekly resets",
  },
];

function StepCard({ step, index }: { step: typeof STEPS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      className={`flex items-start gap-6 ${index % 2 === 0 ? "flex-row" : "flex-row md:flex-row-reverse"}`}
    >
      {/* Step number + connector */}
      <div className="flex flex-col items-center shrink-0">
        <div
          className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 text-xl font-bold transition-all duration-500"
          style={{
            borderColor: step.color,
            background: `linear-gradient(135deg, ${step.color}20, ${step.color}05)`,
            boxShadow: inView ? `0 0 30px ${step.color}30, 0 0 60px ${step.color}10` : "none",
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            color: step.color,
            letterSpacing: "0.1em",
          }}
        >
          {step.num}
          {/* Pulse ring */}
          {inView && (
            <span
              className="absolute inset-0 rounded-full border-2 animate-ping"
              style={{ borderColor: step.color, opacity: 0.2, animationDuration: "3s" }}
            />
          )}
        </div>
        {/* Vertical connector */}
        {index < STEPS.length - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-3 w-px origin-top"
            style={{
              height: "60px",
              background: `linear-gradient(180deg, ${step.color}50, transparent)`,
            }}
          />
        )}
      </div>

      {/* Content */}
      <div
        className="flex-1 rounded-2xl border border-[#1E2844] bg-[#0D1428]/60 p-6 backdrop-blur-sm mb-4"
        style={{
          boxShadow: inView ? `0 4px 30px rgba(0,0,0,0.3)` : "none",
        }}
      >
        <div className="flex items-start gap-4">
          <span className="text-3xl shrink-0">{step.icon}</span>
          <div>
            <div
              className="mb-1 font-mono text-[10px] tracking-[0.25em] uppercase"
              style={{ color: step.color, opacity: 0.8 }}
            >
              Step {step.num} · {step.detail}
            </div>
            <h3 className="text-xl font-bold text-[#E8E0D5] mb-2">{step.title}</h3>
            <p className="text-sm leading-relaxed text-[#7B8199]">{step.desc}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden" aria-labelledby="process-heading">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 100% 50%, rgba(0,229,196,0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-5 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1E2844] bg-[#0D1428]/60 px-4 py-1.5"
          >
            <span className="font-mono text-[10px] tracking-[0.25em] text-[#A855F7] uppercase">How it Works</span>
          </motion.div>
          <motion.h2
            id="process-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-[-0.03em]"
          >
            From zero to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #A855F7, #00E5C4)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              body expert
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-md mx-auto text-base text-[#7B8199]"
          >
            Five steps to go from "what is a pancreas?" to owning your health
            narrative like a medical professional.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Scroll progress track (decorative) */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px bg-[#1E2844]"
            aria-hidden="true"
          >
            <motion.div
              className="w-full bg-gradient-to-b from-[#00E5C4] to-[#A855F7] origin-top"
              style={{ height: progressHeight }}
            />
          </div>

          {/* Step cards */}
          <div className="space-y-6 pl-2">
            {STEPS.map((step, i) => (
              <StepCard key={step.num} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
