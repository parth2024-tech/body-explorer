import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, CheckCircle2, FileText, Scale } from "lucide-react";

export function TrustSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const EVIDENCE_TIERS = [
    {
      tier: "Tier 1: Gold Standard",
      sources: "Cochrane Reviews, WHO, CDC, NIH, USPSTF",
      description:
        "Systematic reviews, meta-analyses, and national public health clinical guidelines.",
      badge: "Highest Clinical Weight",
      color: "#00E5C4",
    },
    {
      tier: "Tier 2: Silver Standard",
      sources: "AHA, ADA, AAO, NASS, ACSM, Lancet, NEJM",
      description:
        "Peer-reviewed randomized controlled trials and specialty medical association standards.",
      badge: "Clinical Specialty Rigor",
      color: "#38BDF8",
    },
    {
      tier: "Tier 3: Bronze Standard",
      sources: "Validated Pharmacological & Observational Data",
      description:
        "Peer-reviewed biochemical mechanisms, pharmacokinetic data, and controlled human trials.",
      badge: "Explicitly Contextualized",
      color: "#F5A623",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-20 overflow-hidden border-y border-[#1C2540]"
      aria-label="Evidence and sourcing standards"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section label */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-md border border-[#1E2844] bg-[#0D1428] px-3.5 py-1 mb-3">
            <ShieldCheck className="h-3.5 w-3.5 text-[#00E5C4]" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#00E5C4] uppercase">
              Clinical Integrity Framework
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#E8E0D5]">
            Every Claim Grounded in Tier 1 and Tier 2 Medical Evidence
          </h2>
          <p className="mt-3 text-xs md:text-sm text-[#7B8199] leading-relaxed">
            We do not publish unverified viral claims, sponsored supplement hype, or fabricated
            statistics. All anatomical statements and remedies are mapped to primary clinical
            literature.
          </p>
        </div>

        {/* Real Stats Row (no fake animated count-ups) */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-14">
          {[
            {
              value: "297",
              label: "Peer-Reviewed Anatomical Facts",
              note: "Indexed to primary citations",
            },
            {
              value: "58",
              label: "Debunked Health Myths",
              note: "With danger alerts and evidence",
            },
            {
              value: "39",
              label: "Evidence-Rated Remedies",
              note: "Studied, traditional & unproven",
            },
            {
              value: "30+",
              label: "Anatomical Organs Mapped",
              note: "Vector layered visualization",
            },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-5 rounded-xl border border-[#1E2844] bg-[#0D1428]/80 text-center"
            >
              <div className="font-mono text-3xl font-bold text-[#00E5C4]">{stat.value}</div>
              <div className="mt-1.5 text-xs font-semibold text-[#E8E0D5]">{stat.label}</div>
              <div className="mt-1 text-[10px] text-[#7B8199]">{stat.note}</div>
            </motion.div>
          ))}
        </div>

        {/* Evidence Tiers Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {EVIDENCE_TIERS.map((tier, i) => (
            <div
              key={tier.tier}
              className="p-6 rounded-xl border border-[#1E2844] bg-[#0B0F19]/80 backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border"
                    style={{
                      borderColor: `${tier.color}40`,
                      background: `${tier.color}10`,
                      color: tier.color,
                    }}
                  >
                    {tier.badge}
                  </span>
                  <CheckCircle2 className="h-4 w-4" style={{ color: tier.color }} />
                </div>
                <h3 className="text-sm font-bold text-[#E8E0D5] mb-1.5">{tier.tier}</h3>
                <p className="text-xs text-[#8B8FA3] leading-relaxed mb-4">{tier.description}</p>
              </div>

              <div className="pt-3 border-t border-[#1C2540] text-[11px] font-mono text-[#7B8199]">
                <span className="text-[#E8E0D5] font-semibold">Sources:</span> {tier.sources}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
