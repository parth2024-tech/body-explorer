import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "@tanstack/react-router";

/* ─── Pricing Plans ─── */
const PLANS = [
  {
    id: "explorer",
    name: "Explorer",
    price: "Free",
    period: "",
    desc: "Start your anatomy journey. No credit card required.",
    color: "#00E5C4",
    features: [
      "✓  Full body map access",
      "✓  5 organs unlocked daily",
      "✓  1 data layer (Facts)",
      "✓  Basic body diary (7 days)",
      "✓  Daily insight feed",
      "✗  Advanced layers",
      "✗  AI symptom analysis",
      "✗  Community quests",
    ],
    cta: "Start Free",
    ctaLink: "/explore",
    popular: false,
  },
  {
    id: "atlas",
    name: "Atlas Pro",
    price: "₹299",
    period: "/month",
    desc: "Full access to every organ, layer, and learning tool.",
    color: "#A855F7",
    features: [
      "✓  All 30+ organs, unlimited",
      "✓  All 5 data layers",
      "✓  Unlimited body diary",
      "✓  AI-powered Explain This",
      "✓  Priority quest access",
      "✓  Certificate generation",
      "✓  Export health reports",
      "✓  Early feature access",
    ],
    cta: "Go Pro",
    ctaLink: "/explore",
    popular: true,
    badge: "Most Popular",
  },
  {
    id: "institution",
    name: "Institution",
    price: "Custom",
    period: "",
    desc: "For schools, clinics, and healthcare organizations.",
    color: "#F5A623",
    features: [
      "✓  Everything in Atlas Pro",
      "✓  Admin dashboard",
      "✓  Student progress tracking",
      "✓  Bulk user management",
      "✓  Custom content upload",
      "✓  HIPAA compliance tools",
      "✓  Dedicated support",
      "✓  Branded deployment",
    ],
    cta: "Contact Sales",
    ctaLink: "/about",
    popular: false,
  },
];

/* ─── FAQ Data ─── */
const FAQS = [
  {
    q: "Is the Atlas medically accurate?",
    a: "Every fact, organ description, and health claim on the Living Body Atlas is sourced from peer-reviewed medical literature, including PubMed, WHO publications, and major medical textbooks. Our medical advisory board reviews content quarterly.",
  },
  {
    q: "Does it replace medical advice?",
    a: "No — and we're clear about that. The Atlas is an educational platform designed to help you understand your body better. It helps you prepare better questions for doctors, not replace them. For symptoms of concern, always consult a qualified medical professional.",
  },
  {
    q: "What data do you collect?",
    a: "Your body diary entries are stored locally on your device first and synced encrypted to our servers if you choose. We never sell health data. Your personal body information belongs to you — it can be exported or deleted at any time.",
  },
  {
    q: "Can kids use it?",
    a: "Absolutely. The platform has an age-appropriate mode for under-16 users that simplifies language and focuses on educational content. It's designed to be used in school settings and has been tested with middle school biology classes.",
  },
  {
    q: "How often is content updated?",
    a: "New organs, facts, and features are added monthly. Major feature updates happen quarterly. Our Daily Insight library rotates every 200 days, so you'll encounter new content for years.",
  },
  {
    q: "Is there a mobile app?",
    a: "The web app is fully mobile-responsive and installable as a PWA (Progressive Web App) on iOS and Android. Native apps are on our 2025 roadmap.",
  },
];

function FAQItem({ faq, index }: { faq: typeof FAQS[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border-b border-[#1E2844] last:border-b-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left gap-4 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00E5C4] rounded-lg"
        aria-expanded={open}
        id={`faq-btn-${index}`}
        aria-controls={`faq-panel-${index}`}
      >
        <span className="font-semibold text-[#E8E0D5] group-hover:text-[#00E5C4] transition-colors text-sm md:text-base">
          {faq.q}
        </span>
        <span
          className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full border border-[#1E2844] text-[#7B8199] transition-all duration-300"
          style={{
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            borderColor: open ? "rgba(0,229,196,0.4)" : undefined,
            color: open ? "#00E5C4" : undefined,
          }}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <motion.div
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-btn-${index}`}
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-sm leading-relaxed text-[#7B8199]">{faq.a}</p>
      </motion.div>
    </motion.div>
  );
}

export function PricingFAQSection() {
  const pricingRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const pricingInView = useInView(pricingRef, { once: true, margin: "-80px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-80px" });

  return (
    <section className="py-24 overflow-hidden" aria-label="Pricing and FAQ">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* ─── PRICING ─── */}
        <div ref={pricingRef} className="mb-32">
          {/* Header */}
          <div className="mb-14 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={pricingInView ? { opacity: 1, y: 0 } : {}}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1E2844] bg-[#0D1428]/60 px-4 py-1.5"
            >
              <span className="font-mono text-[10px] tracking-[0.25em] text-[#A855F7] uppercase">Pricing</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={pricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.03em]"
            >
              Start free.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #A855F7, #F5A623)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Go deep.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={pricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="mt-4 text-base text-[#7B8199] max-w-md mx-auto"
            >
              No paywalls on the basics. Upgrade when you're ready to go deep.
            </motion.p>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={pricingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className="relative flex flex-col rounded-3xl border p-7 overflow-hidden"
                style={{
                  borderColor: plan.popular ? `${plan.color}50` : "#1E2844",
                  background: plan.popular
                    ? `linear-gradient(135deg, rgba(168,85,247,0.08), rgba(13,20,40,0.9))`
                    : "rgba(13,20,40,0.6)",
                  boxShadow: plan.popular ? `0 0 60px ${plan.color}12` : "none",
                  backdropFilter: "blur(20px)",
                  transform: plan.popular ? "scale(1.02)" : "scale(1)",
                }}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <>
                    <div
                      className="absolute top-0 left-0 right-0 h-px"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${plan.color}80, transparent)`,
                      }}
                      aria-hidden="true"
                    />
                    <div
                      className="absolute top-4 right-4 rounded-full px-3 py-1 font-mono text-[9px] font-bold tracking-wider uppercase"
                      style={{
                        background: `${plan.color}20`,
                        border: `1px solid ${plan.color}50`,
                        color: plan.color,
                      }}
                    >
                      {plan.badge}
                    </div>
                  </>
                )}

                {/* Plan name */}
                <div
                  className="mb-1 font-mono text-[10px] tracking-[0.2em] uppercase"
                  style={{ color: plan.color, opacity: 0.8 }}
                >
                  {plan.name}
                </div>

                {/* Price */}
                <div className="mb-1 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-[#E8E0D5]">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm text-[#7B8199]">{plan.period}</span>
                  )}
                </div>
                <p className="mb-6 text-sm text-[#7B8199]">{plan.desc}</p>

                {/* Features */}
                <ul className="mb-8 space-y-2.5 flex-1">
                  {plan.features.map((f, fi) => (
                    <li
                      key={fi}
                      className="flex items-center gap-2 text-sm"
                      style={{
                        color: f.startsWith("✓") ? "#C8D0DC" : "#4B5275",
                      }}
                    >
                      <span
                        style={{
                          color: f.startsWith("✓") ? plan.color : "#4B5275",
                          fontSize: "11px",
                        }}
                      >
                        {f.startsWith("✓") ? "✓" : "✗"}
                      </span>
                      {f.slice(2)}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to={plan.ctaLink}
                  className="block w-full rounded-full py-3 text-center text-sm font-bold transition-all duration-300 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={
                    plan.popular
                      ? {
                          background: plan.color,
                          color: "#0A0E1A",
                          boxShadow: `0 0 30px ${plan.color}40`,
                          outlineColor: plan.color,
                        }
                      : {
                          border: `1.5px solid ${plan.color}40`,
                          color: plan.color,
                          background: `${plan.color}08`,
                          outlineColor: plan.color,
                        }
                  }
                >
                  {plan.cta} →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── FAQ ─── */}
        <div ref={faqRef}>
          <div className="mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1E2844] bg-[#0D1428]/60 px-4 py-1.5"
            >
              <span className="font-mono text-[10px] tracking-[0.25em] text-[#00E5C4] uppercase">FAQ</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.03em]"
            >
              Questions{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00E5C4, #6B4FA0)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                answered
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl rounded-3xl border border-[#1E2844] bg-[#0D1428]/60 px-7 backdrop-blur-sm overflow-hidden"
          >
            {FAQS.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
