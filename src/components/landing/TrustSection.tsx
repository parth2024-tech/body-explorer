import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const LOGOS = [
  { name: "WebMD", icon: "🩺" },
  { name: "Mayo Clinic", icon: "🏥" },
  { name: "Harvard Health", icon: "🎓" },
  { name: "NIH", icon: "🔬" },
  { name: "WHO", icon: "🌍" },
  { name: "Nature", icon: "📰" },
  { name: "PubMed", icon: "📚" },
  { name: "Lancet", icon: "⚕️" },
];

const TESTIMONIALS_MINI = [
  {
    quote: "The most beautiful anatomy app I've ever used. Period.",
    author: "Dr. Priya Sharma",
    role: "Cardiologist",
    avatar: "👩‍⚕️",
  },
  {
    quote: "My students finally understand what a liver does. Atlas changed that.",
    author: "Prof. James Liu",
    role: "Biology Professor",
    avatar: "👨‍🏫",
  },
  {
    quote: "I track my symptoms here daily. It's become part of my health routine.",
    author: "Meera K.",
    role: "Verified User",
    avatar: "🧑",
  },
];

function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
    >
      <motion.span
        initial={{ scale: 0.5 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      >
        {inView ? (
          <CountUp end={end} suffix={suffix} />
        ) : (
          "0"
        )}
      </motion.span>
    </motion.span>
  );
}

function CountUp({ end, suffix = "" }: { end: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={0}
      animate={inView ? end : 0}
      transition={{ duration: 2, ease: "easeOut" }}
      onUpdate={(latest) => {
        if (ref.current) {
          ref.current.textContent = Math.round(latest as number).toLocaleString() + suffix;
        }
      }}
    >
      0{suffix}
    </motion.span>
  );
}

export function TrustSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden" aria-label="Trust and social proof">
      {/* Divider line with glow */}
      <div className="absolute top-0 left-0 right-0 h-px" aria-hidden="true">
        <div
          className="h-full"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(0,229,196,0.3) 30%, rgba(107,79,160,0.3) 70%, transparent 100%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center font-mono text-[10px] tracking-[0.3em] text-[#7B8199] uppercase mb-10"
        >
          Trusted by scientists, educators & curious minds
        </motion.p>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 mb-16">
          {[
            { value: 5, suffix: "", label: "Data Layers" },
            { value: 100, suffix: "%", label: "Educational" },
            { value: 30, suffix: "+", label: "Organs Mapped" },
            { value: 200, suffix: "+", label: "Verified Facts" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl border border-[#1E2844] bg-[#0D1428]/60 backdrop-blur-sm"
            >
              <div
                className="font-mono text-3xl md:text-4xl font-bold"
                style={{
                  background: "linear-gradient(135deg, #00E5C4, #6B4FA0)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  textShadow: "none",
                }}
              >
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1.5 text-xs text-[#7B8199]">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Marquee logo strip */}
        <div className="relative overflow-hidden mb-16">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(90deg, #0A0E1A, transparent)" }} aria-hidden="true" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(270deg, #0A0E1A, transparent)" }} aria-hidden="true" />
          <div
            className="flex gap-12 items-center"
            style={{ animation: "marquee 30s linear infinite", width: "max-content" }}
          >
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 opacity-40 hover:opacity-70 transition-opacity cursor-default"
              >
                <span className="text-xl">{logo.icon}</span>
                <span className="font-mono text-xs font-semibold tracking-widest text-[#8B8FA3] uppercase whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mini testimonials */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {TESTIMONIALS_MINI.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="relative rounded-2xl border border-[#1E2844] bg-[#0D1428]/60 p-6 backdrop-blur-sm overflow-hidden group hover:border-[#00E5C4]/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Top shimmer */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(0,229,196,0.3), transparent)",
                  opacity: 0,
                  transition: "opacity 0.3s",
                }}
              />
              {/* Quote icon */}
              <div
                className="mb-4 font-mono text-3xl leading-none"
                style={{ color: "#00E5C4", opacity: 0.3 }}
                aria-hidden="true"
              >
                "
              </div>
              <p className="text-sm leading-relaxed text-[#B8C0CC] mb-5">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#1E2844]">
                <div className="h-8 w-8 rounded-full bg-[#1A2038] flex items-center justify-center text-lg">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#E8E0D5]">{t.author}</div>
                  <div className="text-[10px] text-[#7B8199]">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
