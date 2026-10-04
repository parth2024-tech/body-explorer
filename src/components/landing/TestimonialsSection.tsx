import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Stethoscope, CheckCheck, AlertOctagon, HelpCircle } from "lucide-react";

const PRINCIPLES = [
  {
    icon: Stethoscope,
    title: "Clinical Source Triangulation",
    tagline: "Primary Medical Literature Only",
    desc: "We verify every physiological fact and remedy against Tier 1 and Tier 2 medical guidelines from organizations like the AHA, CDC, and Cochrane Database before publication.",
    color: "#00E5C4",
  },
  {
    icon: CheckCheck,
    title: "Plain Language Translation",
    tagline: "Grade 6 to 8 Health Literacy",
    desc: "Complex medical jargon is translated into intuitive, accessible English so patients can walk into clinical consultations equipped with actionable questions.",
    color: "#38BDF8",
  },
  {
    icon: AlertOctagon,
    title: "Explicit Red Flag Triage",
    tagline: "Safety Always Takes Precedence",
    desc: "We never bury emergency symptoms in paragraphs of text. Life-threatening warning signs are isolated into prominent high-contrast alerts directing users to emergency care.",
    color: "#F43F5E",
  },
  {
    icon: HelpCircle,
    title: "Uncertainty Transparency",
    tagline: "No Fabricated Medical Certainty",
    desc: "When clinical evidence for a popular remedy is mixed, preliminary, or unproven, we explicitly state its limitations rather than inventing false consensus.",
    color: "#F5A623",
  },
];

export function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden"
      aria-labelledby="editorial-heading"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-5 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="mb-4 inline-flex items-center gap-2 rounded-md border border-[#1E2844] bg-[#0D1428] px-3.5 py-1"
          >
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#00E5C4] uppercase">
              Editorial Protocol
            </span>
          </motion.div>
          <motion.h2
            id="editorial-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-[clamp(1.9rem,4vw,2.75rem)] font-bold tracking-tight text-[#E8E0D5]"
          >
            Four Core Tenets of Medical Content Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xs md:text-sm text-[#7B8199] leading-relaxed"
          >
            How our editorial guidelines prevent medical misinformation, eliminate promotional slop,
            and ensure patient safety.
          </motion.p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRINCIPLES.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-7 rounded-xl border border-[#1E2844] bg-[#0D1428]/70 backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-lg"
                      style={{
                        background: `${p.color}15`,
                        border: `1px solid ${p.color}35`,
                        color: p.color,
                      }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-[#7B8199]">
                        {p.tagline}
                      </div>
                      <h3 className="text-base font-bold text-[#E8E0D5]">{p.title}</h3>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed text-[#8B8FA3]">{p.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
