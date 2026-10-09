import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Check, ArrowRight, HelpCircle } from "lucide-react";

/* ─── Open Health Literacy Guarantees ─── */
const PILLARS = [
  {
    id: "open-access",
    name: "100% Free Public Access",
    subtitle: "Universal Health Literacy",
    desc: "Essential anatomical and physiological knowledge must never be locked behind subscriptions, paywalls, or corporate accounts.",
    color: "#00E5C4",
    features: [
      "All 30+ anatomical organs fully accessible",
      "297 peer-reviewed biological mechanisms",
      "58 clinically debunked health misconceptions",
      "39 evidence-rated natural remedies",
      "Local-first private symptom logger",
      "Emergency first-aid triage protocol",
    ],
    cta: "Launch Atlas",
    ctaLink: "/explore",
    badge: "Public Educational Good",
  },
  {
    id: "evidence",
    name: "Clinical Evidence Governance",
    subtitle: "Oxford CEBM / GRADE Standards",
    desc: "Every statement is cross-referenced against Tier 1 and Tier 2 medical literature from the WHO, CDC, AHA, and Cochrane reviews.",
    color: "#38BDF8",
    features: [
      "Zero sponsored supplement or pharma advice",
      "Clear uncertainty ratings for emerging remedies",
      "Separation of lifestyle tips from clinical red flags",
      "Plain-language translations for patient empowerment",
      "WCAG 2.2 AA accessible design",
      "Direct citation mapping to clinical sources",
    ],
    cta: "Explore Library",
    ctaLink: "/library",
    badge: "Clinical Rigor",
  },
  {
    id: "privacy",
    name: "Local-First Patient Privacy",
    subtitle: "Zero Surveillance or Tracking",
    desc: "Your health curiosity is private. We do not track your searches, log your symptoms to remote servers, or profile your visits.",
    color: "#F5A623",
    features: [
      "Private symptom notes stored solely in browser",
      "Zero third-party advertising or retargeting pixels",
      "Completely open-source and self-hostable",
      "Offline progressive web app (PWA) architecture",
      "No mandatory user login or tracking profiles",
      "Compliant with digital privacy best practices",
    ],
    cta: "Read Privacy Policy",
    ctaLink: "/privacy",
    badge: "Privacy By Design",
  },
];

/* ─── FAQ Data ─── */
const FAQS = [
  {
    q: "How are facts and health statements verified on the platform?",
    a: "Every anatomical description, physiological fact, and remedy rating is verified against Tier 1 and Tier 2 medical literature, including publications from the American Heart Association (AHA), World Health Organization (WHO), Centers for Disease Control and Prevention (CDC), and Cochrane Systematic Reviews.",
  },
  {
    q: "Does this application substitute for professional medical care?",
    a: "No, and we are completely transparent about that. The Body Atlas is an educational literacy platform designed to help patients understand human biology and prepare informed questions for their healthcare providers. If you experience emergency symptoms, contact 911, 112, or your local emergency department immediately.",
  },
  {
    q: "What health information do you collect or track?",
    a: "We collect zero personal health data. Your symptom notes and organ views remain in your browser's private local storage. We do not use third-party advertising tracking pixels, data brokers, or behavioral retargeting scripts.",
  },
  {
    q: "Is this platform suitable for classroom and student education?",
    a: "Yes. The content adheres to Grade 6 to 8 readability standards (plain language health translation) while retaining clinical rigor. It is actively designed for middle school, high school, and undergraduate biology reference.",
  },
  {
    q: "How are natural remedies evaluated?",
    a: "We classify remedies into four explicit categories: Studied (supported by controlled clinical trials), Traditional (historical pharmacopeial use with biological rationale), Anecdotal (popular observational use where trials show non-pharmacologic mechanisms), and Unproven (lacking evidence or carrying documented adverse risks).",
  },
  {
    q: "Can the platform be used offline on mobile devices?",
    a: "Yes. The application is built as a Progressive Web App (PWA) with service worker caching. You can install it directly to your home screen on iOS and Android for offline anatomical reference.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof FAQS)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-[#1E2844] last:border-b-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left gap-4 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00E5C4] rounded-md"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#E8E0D5] group-hover:text-[#00E5C4] transition-colors text-sm md:text-base">
          {faq.q}
        </span>
        <span
          className="shrink-0 flex h-7 w-7 items-center justify-center rounded-md border border-[#1E2844] text-[#7B8199] transition-all duration-300 font-mono text-sm"
          style={{
            borderColor: open ? "rgba(0,229,196,0.4)" : undefined,
            color: open ? "#00E5C4" : undefined,
          }}
          aria-hidden="true"
        >
          {open ? "−" : "+"}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-xs md:text-sm leading-relaxed text-[#8B8FA3]">{faq.a}</p>
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
    <section
      className="py-24 overflow-hidden border-t border-[#1C2540]"
      aria-label="Access and FAQ"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* ─── OPEN HEALTH STANDARDS ─── */}
        <div ref={pricingRef} className="mb-28">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={pricingInView ? { opacity: 1, y: 0 } : {}}
              className="mb-4 inline-flex items-center gap-2 rounded-md border border-[#1E2844] bg-[#0D1428] px-3.5 py-1"
            >
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#00E5C4] uppercase">
                Open Health Standards
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={pricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-[clamp(1.9rem,4vw,2.75rem)] font-bold tracking-tight text-[#E8E0D5]"
            >
              Health Literacy Free from Commercial Gatekeeping
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={pricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="mt-3 text-xs md:text-sm text-[#7B8199] leading-relaxed"
            >
              Essential medical knowledge belongs to the public. Three foundational guarantees
              protect our independence and your trust.
            </motion.p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 24 }}
                animate={pricingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="relative flex flex-col rounded-xl border border-[#1E2844] p-7 bg-[#0D1428]/70 backdrop-blur-sm justify-between hover:border-[#1E2844]/80 transition-colors"
              >
                <div>
                  <div
                    className="inline-block rounded-md px-2.5 py-0.5 font-mono text-[9px] font-bold tracking-wider uppercase mb-3 border"
                    style={{
                      background: `${pillar.color}15`,
                      borderColor: `${pillar.color}40`,
                      color: pillar.color,
                    }}
                  >
                    {pillar.badge}
                  </div>

                  <h3 className="text-lg font-bold text-[#E8E0D5] mb-1">{pillar.name}</h3>

                  <div
                    className="font-mono text-[11px] tracking-wider uppercase font-semibold mb-3"
                    style={{ color: pillar.color }}
                  >
                    {pillar.subtitle}
                  </div>

                  <p className="text-xs text-[#8B8FA3] leading-relaxed mb-6">{pillar.desc}</p>

                  <div className="space-y-2.5 border-t border-[#1C2540] pt-5 mb-8">
                    {pillar.features.map((f) => (
                      <div key={f} className="flex items-start gap-2.5 text-xs text-[#9DA3BA]">
                        <Check className="h-4 w-4 shrink-0 text-[#00E5C4] mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={pillar.ctaLink}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg py-3 text-center text-xs font-semibold uppercase tracking-wider transition-colors border border-[#1E2844] bg-[#111A33] text-[#E8E0D5] hover:bg-[#162242] hover:text-[#00E5C4] hover:border-[#00E5C4]/40"
                >
                  <span>{pillar.cta}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── FAQ ─── */}
        <div ref={faqRef} className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-md border border-[#1E2844] bg-[#0D1428] px-3.5 py-1 mb-3">
              <HelpCircle className="h-3.5 w-3.5 text-[#00E5C4]" />
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#00E5C4] uppercase">
                Questions & Answers
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#E8E0D5]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="rounded-xl border border-[#1E2844] bg-[#0D1428]/60 p-6 md:p-8 backdrop-blur-sm">
            {FAQS.map((faq, i) => (
              <FAQItem key={faq.q} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
