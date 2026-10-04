import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, BookOpen, Scale, FileText } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Editorial Methodology & About | The Living Body Atlas" },
      {
        name: "description",
        content:
          "Our clinical content standards, source triangulation protocol, and commitment to evidence-based health literacy without commercial influence.",
      },
      { property: "og:title", content: "About | The Living Body Atlas" },
      {
        property: "og:description",
        content:
          "How we translate complex peer-reviewed medical science into plain language for empowered patients.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main className="mx-auto max-w-4xl px-5 pb-24 pt-12 md:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-[#1E2844] bg-[#0D1428] px-3.5 py-1">
          <ShieldCheck className="h-3.5 w-3.5 text-[#00E5C4]" />
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#00E5C4] uppercase">
            Editorial Protocol
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#E8E0D5]">
          Clear Clinical Science for Patient Empowerment
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8 space-y-5 text-base md:text-lg leading-relaxed text-[#8B8FA3]"
      >
        <p>
          The Living Body Atlas is an interactive anatomy and health literacy platform designed to
          bridge the communication gap between everyday patients and healthcare providers. Too
          often, medical literature is locked behind academic paywalls or dense clinical
          terminology, while consumer health queries are bombarded with sponsored supplement ads and
          unsubstantiated wellness trends.
        </p>
        <p>
          Our mission is straightforward: translate gold-standard peer-reviewed clinical medicine
          into accessible, highly structured visual intelligence. We test every statement against
          the Grandma and 12-Year-Old Test (Grade 6 to 8 readability) without stripping away the
          underlying physiological rigor.
        </p>
        <p>
          Explore <span className="text-[#00E5C4] font-semibold">30+ anatomical structures</span>,
          review{" "}
          <span className="text-[#00E5C4] font-semibold">290+ verified biological facts</span>, and
          explore clinically debunked misconceptions with prominent safety alerts.
        </p>
      </motion.div>

      {/* Verified Database Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4"
      >
        {[
          { value: "30+", label: "Organs Mapped" },
          { value: "297", label: "Peer-Reviewed Facts" },
          { value: "58", label: "Debunked Myths" },
          { value: "39", label: "Evidence Remedies" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-[#1E2844] bg-[#0D1428]/80 p-5 text-center"
          >
            <div className="font-mono text-2xl md:text-3xl font-bold text-[#00E5C4]">{s.value}</div>
            <div className="mt-1 text-xs text-[#7B8199]">{s.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Three Editorial Commitments */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="mt-12 space-y-4"
      >
        <h2 className="text-xl font-bold text-[#E8E0D5]">Our Non-Negotiable Standards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl border border-[#1E2844] bg-[#0B0F19]/70">
            <h3 className="text-sm font-bold text-[#00E5C4] mb-1.5">1. Source Triangulation</h3>
            <p className="text-xs text-[#8B8FA3] leading-relaxed">
              Every physiological claim is anchored to recognized public health bodies: the AHA,
              ADA, WHO, CDC, and Cochrane Systematic Reviews.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-[#1E2844] bg-[#0B0F19]/70">
            <h3 className="text-sm font-bold text-[#38BDF8] mb-1.5">2. Patient Safety First</h3>
            <p className="text-xs text-[#8B8FA3] leading-relaxed">
              We never prescribe drug dosages, diagnose individuals online, or replace clinical
              triage. Emergency warning signs are prominently highlighted.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-[#1E2844] bg-[#0B0F19]/70">
            <h3 className="text-sm font-bold text-[#F5A623] mb-1.5">3. Radical Privacy</h3>
            <p className="text-xs text-[#8B8FA3] leading-relaxed">
              Zero health tracking pixels. Your symptom notes and organ views stay inside your local
              browser storage and are never sold to advertisers.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Navigation CTA Box */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 rounded-xl border border-[#1E2844] bg-[#0D1428]/90 p-8"
      >
        <h2 className="text-xl font-bold text-[#E8E0D5]">Explore the Anatomical Reference</h2>
        <p className="mt-2 text-xs md:text-sm text-[#8B8FA3]">
          Start examining anatomical structures, nutrition intelligence, and peer-reviewed
          biological insights.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 rounded-lg bg-[#00E5C4] px-6 py-3 text-sm font-semibold text-[#0A0E1A] transition-colors hover:bg-[#00cbb0]"
          >
            <span>Launch Interactive Atlas</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/privacy"
            className="inline-flex items-center gap-2 rounded-lg border border-[#1E2844] bg-[#111A33] px-5 py-3 text-sm font-medium text-[#E8E0D5] transition-colors hover:border-[#2D3B66]"
          >
            <ShieldCheck className="h-4 w-4 text-[#00E5C4]" />
            <span>Privacy Policy</span>
          </Link>
          <Link
            to="/terms"
            className="inline-flex items-center gap-2 rounded-lg border border-[#1E2844] bg-[#111A33] px-5 py-3 text-sm font-medium text-[#E8E0D5] transition-colors hover:border-[#2D3B66]"
          >
            <Scale className="h-4 w-4 text-[#00E5C4]" />
            <span>Terms of Service</span>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
