import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "I've been a cardiologist for 22 years and I've never seen public anatomy education done this well. The layered visualization is genuinely impressive — it's what we need patients to understand before consultations.",
    author: "Dr. Priya Sharma",
    role: "Senior Cardiologist",
    org: "AIIMS Delhi",
    avatar: "👩‍⚕️",
    rating: 5,
    color: "#E5504D",
    organ: "❤️",
  },
  {
    id: 2,
    quote:
      "My AP Biology students now actually want to learn about the digestive system because they can *explore* it instead of memorizing it. Test scores up 23%. This is the future of science education.",
    author: "Prof. James Liu",
    role: "Biology Department Head",
    org: "Stanford Online",
    avatar: "👨‍🏫",
    rating: 5,
    color: "#00E5C4",
    organ: "🧫",
  },
  {
    id: 3,
    quote:
      "I have a rare autoimmune condition and this platform helped me understand what's actually happening in my body. I go to appointments with better questions now. My specialist noticed the difference.",
    author: "Meera Krishnamurthy",
    role: "Patient Advocate",
    org: "Verified User",
    avatar: "🧑",
    rating: 5,
    color: "#A855F7",
    organ: "🦠",
  },
  {
    id: 4,
    quote:
      "The Body Diary is life-changing. I've been tracking my migraines for 6 weeks. The pattern it showed — tied to sleep and hydration — was something three neurologists missed. Data changes everything.",
    author: "Arun Verma",
    role: "Software Engineer & Chronic Migraine Patient",
    org: "Verified User",
    avatar: "🧑‍💻",
    rating: 5,
    color: "#F5A623",
    organ: "🧠",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#F5A623" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[active];

  return (
    <section ref={ref} className="relative py-24 overflow-hidden" aria-labelledby="testimonials-heading">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 60% 60% at 50% 50%, ${current.color}06 0%, transparent 70%)`,
            transition: "background 1s ease",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1E2844] bg-[#0D1428]/60 px-4 py-1.5"
          >
            <span className="font-mono text-[10px] tracking-[0.25em] text-[#F5A623] uppercase">Testimonials</span>
          </motion.div>
          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-[-0.03em]"
          >
            Real people.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F5A623, #E88E1A)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Real discoveries.
            </span>
          </motion.h2>
        </div>

        {/* Main testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div
            className="relative rounded-3xl border p-8 md:p-12 overflow-hidden"
            style={{
              borderColor: `${current.color}30`,
              background: "linear-gradient(135deg, rgba(13,20,40,0.9), rgba(20,24,38,0.85))",
              boxShadow: `0 0 60px ${current.color}08, 0 20px 60px rgba(0,0,0,0.5)`,
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Top border accent */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background: `linear-gradient(90deg, transparent, ${current.color}60, transparent)`,
              }}
              aria-hidden="true"
            />

            {/* Quote mark */}
            <div
              className="mb-6 font-serif text-8xl leading-none select-none"
              style={{ color: current.color, opacity: 0.15 }}
              aria-hidden="true"
            >
              "
            </div>

            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-[clamp(1rem,2.5vw,1.35rem)] font-medium leading-relaxed text-[#C8D0DC] mb-8"
              >
                "{current.quote}"
              </motion.blockquote>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`author-${active}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full text-2xl shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${current.color}20, ${current.color}08)`,
                      border: `1.5px solid ${current.color}40`,
                    }}
                  >
                    {current.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-[#E8E0D5]">{current.author}</div>
                    <div className="text-sm text-[#7B8199]">{current.role}</div>
                    <div
                      className="font-mono text-[10px] tracking-wider uppercase mt-0.5"
                      style={{ color: current.color, opacity: 0.8 }}
                    >
                      {current.org}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <StarRating count={current.rating} />
                  <span className="text-2xl" aria-label={`Related organ: ${current.organ}`}>{current.organ}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Testimonial selector tabs */}
        <div className="flex justify-center gap-2">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              aria-label={`View testimonial from ${t.author}`}
              aria-pressed={i === active}
              className="group relative overflow-hidden rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00E5C4]"
              style={{
                width: i === active ? "40px" : "8px",
                height: "8px",
                background: i === active ? t.color : "rgba(255,255,255,0.15)",
                boxShadow: i === active ? `0 0 12px ${t.color}60` : "none",
              }}
            />
          ))}
        </div>

        {/* Mini cards */}
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              aria-label={`Read ${t.author}'s testimonial`}
              className="group relative rounded-2xl border p-3 text-left transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00E5C4]"
              style={{
                borderColor: i === active ? `${t.color}50` : "#1E2844",
                background: i === active
                  ? `linear-gradient(135deg, ${t.color}12, ${t.color}04)`
                  : "rgba(13,20,40,0.6)",
                boxShadow: i === active ? `0 0 20px ${t.color}15` : "none",
              }}
            >
              <div className="text-xl mb-1.5">{t.avatar}</div>
              <div className="text-xs font-semibold text-[#E8E0D5] truncate">{t.author}</div>
              <div className="text-[10px] text-[#7B8199] truncate">{t.role}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
