import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  Layers,
  BookOpen,
  ClipboardList,
  Compass,
  TrendingUp,
  Activity,
  Zap,
  Shield,
  Smartphone,
  Lock,
  ArrowRight,
} from "lucide-react";

/* ─── Product Showcase ─── */
export function ProductShowcaseSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const LAYERS = [
    {
      id: "facts",
      color: "#00E5C4",
      icon: BookOpen,
      label: "Facts Layer",
      desc: "290+ verified biology facts per organ. Written in plain language, sourced from clinical literature.",
      example: "Cardiac output: 2,000 gallons pumped daily",
    },
    {
      id: "personal",
      color: "#38BDF8",
      icon: ClipboardList,
      label: "Personal Layer",
      desc: "Your private body log. Record symptoms, sensations, and observations pinned to exact structures.",
      example: "Logged: mild tension in cervical spine",
    },
    {
      id: "challenge",
      color: "#F5A623",
      icon: Layers,
      label: "Physiology Layer",
      desc: "Interactive biomechanical models and physiological systems mapped with clinical precision.",
      example: "Autonomic nervous system: sympathetic vs parasympathetic",
    },
    {
      id: "trends",
      color: "#F43F5E",
      icon: TrendingUp,
      label: "Trends Layer",
      desc: "Population health patterns. Understand common physiological adaptations across demographics.",
      example: "Cardiopulmonary endurance adaptations",
    },
    {
      id: "explore",
      color: "#E8E0D5",
      icon: Compass,
      label: "Explore Layer",
      desc: "Pure anatomical exploration. Clean biological visualization, zero promotional noise.",
      example: "206 bones and 600+ skeletal muscles",
    },
  ];

  return (
    <section ref={ref} className="relative py-24 overflow-hidden" aria-labelledby="showcase-heading">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -right-40 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(circle, rgba(0,229,196,0.12) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -left-40 top-1/3 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="mb-4 inline-flex items-center gap-2 rounded-md border border-[#1E2844] bg-[#0D1428]/80 px-3.5 py-1"
          >
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#00E5C4] uppercase">
              The Platform
            </span>
          </motion.div>
          <motion.h2
            id="showcase-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,5vw,3.25rem)] font-bold tracking-tight text-[#E8E0D5]"
          >
            Five Structured Dimensions of Anatomical Insight
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-sm leading-relaxed text-[#7B8199]"
          >
            Switch seamlessly between macro anatomy, cellular pathways, and real-world health literacy
            without textbook clutter or confusing medical jargon.
          </motion.p>
        </div>

        {/* Layer showcase */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          {LAYERS.map((layer, i) => {
            const Icon = layer.icon;
            return (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                className="group relative flex flex-col rounded-xl border border-[#1E2844] bg-[#0D1428]/70 p-5 backdrop-blur-sm overflow-hidden hover:border-[#1E2844]/80 transition-all duration-300"
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${layer.color}, transparent)`,
                  }}
                  aria-hidden="true"
                />

                {/* Icon */}
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{
                    background: `${layer.color}15`,
                    border: `1px solid ${layer.color}30`,
                    color: layer.color,
                  }}
                >
                  <Icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <div
                  className="mb-1 font-mono text-[9px] tracking-[0.2em] uppercase font-semibold"
                  style={{ color: layer.color }}
                >
                  {layer.label}
                </div>
                <p className="text-xs leading-relaxed text-[#7B8199] mb-4">{layer.desc}</p>

                {/* Example box */}
                <div
                  className="mt-auto rounded-md p-2.5 font-mono text-[10px] leading-relaxed"
                  style={{
                    background: `${layer.color}08`,
                    border: `1px solid ${layer.color}25`,
                    color: layer.color,
                  }}
                >
                  {layer.example}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Verified Technical Standards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 grid grid-cols-2 gap-4 rounded-xl border border-[#1E2844] bg-[#0D1428]/80 p-6 backdrop-blur-sm md:grid-cols-4"
        >
          {[
            { icon: Zap, value: "< 100ms", label: "Client rendering latency" },
            { icon: Shield, value: "WCAG 2.2 AA", label: "Accessibility verified" },
            { icon: Smartphone, value: "PWA Offline", label: "Installable web app" },
            { icon: Lock, value: "Zero Ad Tracking", label: "Local-first privacy" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1E2844] bg-[#111A33] text-[#00E5C4] shrink-0">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-mono text-sm font-bold text-[#E8E0D5]">{item.value}</div>
                  <div className="text-[11px] text-[#7B8199]">{item.label}</div>
                </div>
              </div>
            );
          })}
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
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden p-10 md:p-16 text-center border border-[#1E2844] bg-[#0D1428]/90"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Status indicator */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-[#1E2844] bg-[#111A33] px-3.5 py-1">
              <span className="h-2 w-2 rounded-full bg-[#00E5C4]" />
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#00E5C4] uppercase">
                Free Educational Access
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-[clamp(2.2rem,5vw,3.75rem)] font-bold tracking-tight text-[#E8E0D5] mb-4">
              Explore Human Biology with Clinical Clarity
            </h2>

            <p className="mb-10 text-sm md:text-base leading-relaxed text-[#8B8FA3]">
              Free access to 30+ interactive anatomical organs, 290+ peer-reviewed physiological
              insights, and evidence-rated natural remedies. No paywalls, no marketing slop.
            </p>

            {/* Clean structured buttons (no pill buttons) */}
            <div className="flex flex-wrap items-center justify-center gap-3.5">
              <Link
                to="/explore"
                className="inline-flex items-center gap-2 rounded-lg bg-[#00E5C4] px-7 py-3.5 text-sm font-semibold text-[#0A0E1A] transition-colors hover:bg-[#00cbb0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00E5C4]"
              >
                <span>Launch Interactive Atlas</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-[#1E2844] bg-[#111A33]/80 px-6 py-3.5 text-sm font-medium text-[#E8E0D5] transition-colors hover:border-[#2D3B66] hover:bg-[#162242] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00E5C4]"
              >
                Editorial Methodology
              </Link>
            </div>

            <p className="mt-8 font-mono text-[10px] tracking-wider text-[#4B5275] uppercase">
              Peer-reviewed evidence · Zero advertising tracking · WCAG 2.2 AA compliant
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
      { label: "Interactive Body Map", to: "/explore" },
      { label: "Anatomical Library", to: "/library" },
      { label: "Verified Body Facts", to: "/facts" },
    ],
    Clinical: [
      { label: "Symptom Guide", to: "/symptoms" },
      { label: "Explain Terminology", to: "/explain" },
      { label: "Emergency Red Flags", to: "/emergency" },
    ],
    Governance: [
      { label: "Editorial Methodology", to: "/about" },
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
    ],
  };

  return (
    <footer className="relative border-t border-[#1C2540] py-14 overflow-hidden" role="contentinfo">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 mb-12">
          {/* Brand column */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#00E5C4]/30 bg-[#00E5C4]/10 text-[#00E5C4]">
                <Activity className="h-5 w-5" />
              </div>
              <div>
                <div className="font-mono text-[9px] tracking-[0.2em] text-[#00E5C4] uppercase">
                  Living Anatomy
                </div>
                <div className="text-sm font-bold text-[#E8E0D5]">The Body Atlas</div>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-[#7B8199] mb-4">
              An evidence-first human anatomy and health literacy platform vetted against
              peer-reviewed medical guidelines.
            </p>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#00E5C4]" />
              <span className="font-mono text-[9px] tracking-wider text-[#00E5C4]">
                CLINICAL DATASET ACTIVE
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h3 className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#7B8199] uppercase">
                {section}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-xs text-[#8B8FA3] hover:text-[#00E5C4] transition-colors"
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
        <div className="flex flex-col items-center gap-4 border-t border-[#1C2540] pt-6 md:flex-row md:justify-between text-xs text-[#4B5275]">
          <div className="font-mono text-[11px]">
            © {new Date().getFullYear()} The Living Body Atlas · Educational Health Literacy
          </div>
          <div className="flex items-center gap-4 font-mono text-[10px]">
            <span>VERSION 2.1</span>
            <span>·</span>
            <span>WCAG 2.2 AA</span>
            <span>·</span>
            <span>LOCAL-FIRST PRIVACY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
