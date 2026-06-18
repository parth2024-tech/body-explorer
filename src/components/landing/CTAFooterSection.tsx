import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "@tanstack/react-router";

/* ─── Product Showcase ─── */
export function ProductShowcaseSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden" aria-labelledby="showcase-heading">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -right-40 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(0,229,196,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -left-40 top-1/3 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(107,79,160,0.08) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1E2844] bg-[#0D1428]/60 px-4 py-1.5"
          >
            <span className="font-mono text-[10px] tracking-[0.25em] text-[#00E5C4] uppercase">The Platform</span>
          </motion.div>
          <motion.h2
            id="showcase-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.03em]"
          >
            An atlas like{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00E5C4, #A855F7)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              no other
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-xl mx-auto text-base text-[#7B8199]"
          >
            Switch between five layers of biological reality. From gross anatomy to cellular
            processes — all in one seamless interface.
          </motion.p>
        </div>

        {/* Layer showcase */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          {[
            {
              id: "facts",
              color: "#00E5C4",
              icon: "🔬",
              label: "Facts Layer",
              desc: "200+ verified biology facts per organ. Written for humans, sourced from science.",
              example: "Your heart beats 100,000 times/day",
            },
            {
              id: "personal",
              color: "#F5A623",
              icon: "📓",
              label: "Personal Layer",
              desc: "Your body diary. Pin symptoms, feelings, and observations to exact organs.",
              example: "Logged: mild ache · left side",
            },
            {
              id: "challenge",
              color: "#6B4FA0",
              icon: "🏆",
              label: "Quest Layer",
              desc: "Community challenges. Learn together. Earn your weekly certificate.",
              example: "Quest: Nervous System · 3 days left",
            },
            {
              id: "trends",
              color: "#E5504D",
              icon: "📈",
              label: "Trends Layer",
              desc: "Population health insights. What organs are people curious about right now.",
              example: "↑ Pancreas interest +42% this week",
            },
            {
              id: "explore",
              color: "#E8E0D5",
              icon: "🗺️",
              label: "Explore Layer",
              desc: "Raw anatomy mode. Clean biological visualization, zero noise.",
              example: "202 bones · 639 muscles",
            },
          ].map((layer, i) => (
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              className="group relative flex flex-col rounded-2xl border border-[#1E2844] bg-[#0D1428]/60 p-5 backdrop-blur-sm overflow-hidden cursor-default hover:border-opacity-50 transition-all duration-400 hover:-translate-y-1"
              style={{
                "--layer-color": layer.color,
              } as React.CSSProperties}
            >
              {/* Color accent top */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(90deg, transparent, ${layer.color}, transparent)`,
                  opacity: 0.4,
                }}
                aria-hidden="true"
              />

              {/* Icon */}
              <div
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl text-xl"
                style={{
                  background: `${layer.color}15`,
                  border: `1px solid ${layer.color}30`,
                }}
              >
                {layer.icon}
              </div>

              {/* Content */}
              <div
                className="mb-1 font-mono text-[9px] tracking-[0.2em] uppercase"
                style={{ color: layer.color, opacity: 0.8 }}
              >
                {layer.label}
              </div>
              <p className="text-xs leading-relaxed text-[#7B8199] mb-4">{layer.desc}</p>

              {/* Example pill */}
              <div
                className="mt-auto rounded-lg p-2.5 font-mono text-[10px] leading-relaxed"
                style={{
                  background: `${layer.color}08`,
                  border: `1px solid ${layer.color}20`,
                  color: layer.color,
                }}
              >
                {layer.example}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 grid grid-cols-2 gap-4 rounded-3xl border border-[#1E2844] bg-[#0D1428]/60 p-6 backdrop-blur-sm md:grid-cols-4"
        >
          {[
            { icon: "⚡", value: "< 100ms", label: "Layer switch speed" },
            { icon: "♿", value: "WCAG AA", label: "Accessibility rating" },
            { icon: "📱", value: "PWA Ready", label: "Install on any device" },
            { icon: "🔒", value: "E2E Encrypted", label: "Your data, your control" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-2xl shrink-0">{item.icon}</span>
              <div>
                <div className="font-mono text-sm font-bold text-[#00E5C4]">{item.value}</div>
                <div className="text-xs text-[#7B8199]">{item.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Final CTA Section ─── */
export function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden" aria-label="Call to action">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative rounded-[2.5rem] overflow-hidden p-12 md:p-20 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(107,79,160,0.2), rgba(0,229,196,0.08), rgba(13,20,40,0.9))",
            border: "1px solid rgba(107,79,160,0.3)",
            boxShadow: "0 0 100px rgba(107,79,160,0.15), 0 0 200px rgba(0,229,196,0.06)",
          }}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(107,79,160,0.6), rgba(0,229,196,0.4), transparent)" }}
            />
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(0,229,196,0.3), transparent)" }}
            />
            {/* Corner glows */}
            <div
              className="absolute -top-20 -left-20 w-60 h-60 rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(107,79,160,0.2) 0%, transparent 70%)" }}
            />
            <div
              className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(0,229,196,0.15) 0%, transparent 70%)" }}
            />
          </div>

          <div className="relative z-10">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#1E2844] bg-[#0D1428]/60 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00E5C4] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00E5C4]" />
              </span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#00E5C4] uppercase">Start exploring. Join us.</span>
            </div>

            {/* Headline */}
            <h2
              className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.04em] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Your body is{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00E5C4 0%, #6B4FA0 50%, #A855F7 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  filter: "drop-shadow(0 0 30px rgba(0,229,196,0.3))",
                }}
              >
                extraordinary.
              </span>
              <br />
              <span className="text-[#E8E0D5]">Start exploring it.</span>
            </h2>

            <p className="mb-12 max-w-lg mx-auto text-base leading-relaxed text-[#7B8199]">
              Free forever on the basics. No credit card. No textbooks.
              Just you and 37 trillion cells, finally introduced.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/explore"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-[#00E5C4] px-10 py-4 text-sm font-bold text-[#0A0E1A] shadow-[0_0_50px_rgba(0,229,196,0.4)] transition-all duration-300 hover:shadow-[0_0_80px_rgba(0,229,196,0.6)] hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00E5C4]"
              >
                <span className="relative z-10">Open the Atlas — Free</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                <span
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                  aria-hidden="true"
                />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-[#1E2844] bg-transparent px-8 py-4 text-sm font-semibold text-[#8B8FA3] transition-all duration-300 hover:border-[#8B8FA3]/40 hover:text-[#E8E0D5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00E5C4]"
              >
                About the project
              </Link>
            </div>

            {/* Trust microline */}
            <p className="mt-8 font-mono text-[10px] tracking-wider text-[#4B5275] uppercase">
              No sign-up required · Your data stays yours · WCAG AA accessible
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Premium Footer ─── */
export function FooterSection() {
  const FOOTER_LINKS = {
    Explore: [
      { label: "Body Map", to: "/explore" },
      { label: "Organ Library", to: "/library" },

      { label: "Body Facts", to: "/facts" },
    ],
    Tools: [

      { label: "Symptom Guide", to: "/symptoms" },
      { label: "Explain This", to: "/explain" },
      { label: "Emergency Guide", to: "/emergency" },
    ],
    Community: [],
    Company: [
      { label: "About", to: "/about" },
      { label: "Medical Advisory", to: "/about" },
      { label: "Privacy Policy", to: "/about" },
    ],
  };

  return (
    <footer className="relative border-t border-[#1C2540] py-16 overflow-hidden" role="contentinfo">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3"
          style={{ background: "linear-gradient(90deg, transparent, rgba(0,229,196,0.15), transparent)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-xl"
                style={{
                  background: "linear-gradient(135deg, rgba(0,229,196,0.2), rgba(107,79,160,0.1))",
                  border: "1px solid rgba(0,229,196,0.3)",
                }}
              >
                <span className="text-base">🫀</span>
              </div>
              <div>
                <div className="font-mono text-[8px] tracking-[0.25em] text-[#00E5C4] uppercase">The Living</div>
                <div className="text-sm font-bold text-[#E8E0D5]">Body Atlas</div>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-[#4B5275] mb-4">
              The world's most immersive human anatomy education platform.
            </p>
            <div className="flex items-center gap-1">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00E5C4] opacity-50" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00E5C4]" />
              </span>
              <span className="font-mono text-[9px] tracking-wider text-[#00E5C4] ml-1">SYSTEM LIVE</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h3 className="mb-4 font-mono text-[9px] tracking-[0.2em] text-[#4B5275] uppercase">{section}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-xs text-[#7B8199] hover:text-[#00E5C4] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-4 border-t border-[#1C2540] pt-8 md:flex-row md:justify-between">
          <div className="font-mono text-[10px] text-[#4B5275]">
            © {new Date().getFullYear()} The Living Body Atlas — Built with curiosity
          </div>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[9px] tracking-wider text-[#4B5275]">VER 2.0.1</span>
            <span className="h-3 w-px bg-[#1C2540]" aria-hidden="true" />
            <span className="font-mono text-[9px] tracking-wider text-[#4B5275]">WCAG AA</span>
            <span className="h-3 w-px bg-[#1C2540]" aria-hidden="true" />
            <span className="font-mono text-[9px] tracking-wider text-[#4B5275]">E2E ENCRYPTED</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
