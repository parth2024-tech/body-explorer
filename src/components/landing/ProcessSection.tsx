import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Search, FileEdit, CheckCircle2, BookOpen } from "lucide-react";

const STEPS = [
  {
    num: "01",
    color: "#00E5C4",
    icon: MapPin,
    title: "Open the Interactive Map",
    desc: "Launch the anatomical body map. Navigate 30+ organs across distinct physiological systems: cardiovascular, respiratory, nervous, digestive, and musculoskeletal.",
    detail: "Immediate access",
  },
  {
    num: "02",
    color: "#38BDF8",
    icon: Search,
    title: "Select an Organ Structure",
    desc: "Click any anatomical region to view verified physiological functions, common clinical conditions, and evidence-based health guidance.",
    detail: "Multi-layered clinical views",
  },
  {
    num: "03",
    color: "#F5A623",
    icon: FileEdit,
    title: "Record Localized Observations",
    desc: "Track sensations, symptoms, or notes linked directly to specific anatomical structures. Your entries stay stored privately in your browser.",
    detail: "Local-first privacy",
  },
  {
    num: "04",
    color: "#00E5C4",
    icon: CheckCircle2,
    title: "Review Daily Insights",
    desc: "Read a daily peer-reviewed biological fact paired with a 30-second evidence-based lifestyle micro-action.",
    detail: "Habit formation",
  },
  {
    num: "05",
    color: "#38BDF8",
    icon: BookOpen,
    title: "Prepare for Doctor Consultations",
    desc: "Generate structured, clinically informed questions to bring to your primary care physician or specialist appointments.",
    detail: "Informed communication",
  },
];

function StepCard({ step, index }: { step: (typeof STEPS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex items-start gap-4 md:gap-6"
    >
      {/* Step number badge */}
      <div className="flex flex-col items-center shrink-0">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-lg border text-sm font-bold font-mono"
          style={{
            borderColor: `${step.color}50`,
            background: `${step.color}15`,
            color: step.color,
          }}
        >
          {step.num}
        </div>
        {index < STEPS.length - 1 && (
          <div
            className="my-2 w-px h-12"
            style={{
              background: `linear-gradient(180deg, ${step.color}40, transparent)`,
            }}
          />
        )}
      </div>

      {/* Content card */}
      <div className="flex-1 rounded-xl border border-[#1E2844] bg-[#0D1428]/70 p-5 md:p-6 backdrop-blur-sm mb-4">
        <div className="flex items-center gap-2.5 mb-2">
          <Icon className="h-4 w-4" style={{ color: step.color }} />
          <h3 className="text-sm md:text-base font-bold text-[#E8E0D5]">{step.title}</h3>
          <span className="ml-auto font-mono text-[10px] text-[#7B8199] hidden sm:inline">
            {step.detail}
          </span>
        </div>
        <p className="text-xs md:text-sm text-[#8B8FA3] leading-relaxed">{step.desc}</p>
      </div>
    </motion.div>
  );
}

export function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden" aria-labelledby="process-heading">
      <div className="relative z-10 mx-auto max-w-4xl px-5 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="mb-4 inline-flex items-center gap-2 rounded-md border border-[#1E2844] bg-[#0D1428] px-3.5 py-1"
          >
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#00E5C4] uppercase">
              How It Works
            </span>
          </motion.div>
          <motion.h2
            id="process-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-[clamp(1.9rem,4vw,2.75rem)] font-bold tracking-tight text-[#E8E0D5]"
          >
            A Systematic Workflow for Health Literacy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-3 text-xs md:text-sm text-[#7B8199] leading-relaxed"
          >
            From anatomical exploration to productive medical appointments in five steps.
          </motion.p>
        </div>

        {/* Steps list */}
        <div className="space-y-2">
          {STEPS.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
