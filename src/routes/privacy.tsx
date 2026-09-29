import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, EyeOff, Database, FileCheck, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | The Living Body Atlas" },
      {
        name: "description",
        content:
          "Our explicit health data privacy commitments: local-first storage, zero data monetization, and no third-party tracking pixels.",
      },
      { property: "og:title", content: "Privacy Policy | The Living Body Atlas" },
      {
        property: "og:description",
        content:
          "Transparent health privacy: your body diary and searches remain private, local, and under your control.",
      },
    ],
  }),
  component: PrivacyPage,
});

export function PrivacyPage() {
  const lastUpdated = "September 2026";

  const commitments = [
    {
      icon: EyeOff,
      title: "Zero Health Data Monetization",
      desc: "We do not sell, rent, or broker your health queries, symptom searches, or organ views to data brokers, insurers, or advertising platforms. Ever.",
    },
    {
      icon: Database,
      title: "Local-First Storage Architecture",
      desc: "Your personal Body Diary entries, logged symptoms, and notes remain stored locally in your browser's private storage by default.",
    },
    {
      icon: Lock,
      title: "No Third-Party Ad Trackers",
      desc: "The platform contains zero third-party advertising tracking pixels, cross-site beacons, or behavioral retargeting scripts.",
    },
    {
      icon: FileCheck,
      title: "Full Data Portability and Erasure",
      desc: "You maintain complete ownership of your logged data. You can export or erase your stored entries instantly with a single click.",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-5 pb-24 pt-12 md:pt-20">
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#7B8199] hover:text-[#00E5C4] transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Atlas
        </Link>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#00E5C4]/30 bg-[#00E5C4]/10 text-[#00E5C4]">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#00E5C4]">
            Trust & Governance
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-[#E8E0D5] md:text-4xl">
            Privacy Policy
          </h1>
        </div>
      </div>

      <p className="text-xs font-mono text-[#7B8199] mb-10">
        Effective Date: {lastUpdated} · Version 2.1
      </p>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {commitments.map((c) => {
          const Icon = c.icon;
          return (
            <div
              key={c.title}
              className="p-5 rounded-xl border border-[#1E2844] bg-[#0D1428]/70 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-md border border-[#1E2844] bg-[#111A33] text-[#00E5C4]">
                  <Icon className="h-4 w-4" />
                </div>
                <h2 className="text-sm font-semibold text-[#E8E0D5]">{c.title}</h2>
              </div>
              <p className="text-xs leading-relaxed text-[#8B8FA3]">{c.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Policy Details */}
      <section className="space-y-8 text-sm leading-relaxed text-[#9DA3BA]">
        <div>
          <h2 className="text-lg font-bold text-[#E8E0D5] mb-2">1. Scope and Mission</h2>
          <p>
            The Living Body Atlas is built on the principle that health literacy requires trust.
            When you research human anatomy, physiological mechanisms, or symptoms, you should never
            have to worry about your sensitive health inquiries following you around the web in
            targeted ads. This policy outlines what we collect, what we never collect, and how your
            information is secured.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-[#E8E0D5] mb-2">2. Information Handled Locally</h2>
          <p>
            When you use interactive tools such as the Body Map or Symptom Guide, your selections
            and inputs are processed within your client session. Any notes you enter are saved to your
            browser's IndexedDB / LocalStorage. This data does not get transmitted to our servers or
            any external analytics service.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-[#E8E0D5] mb-2">3. Server Interactions and Telemetry</h2>
          <p>
            For features requiring server computation (such as plain-language health term translation
            queries), queries are processed in memory and never linked to your personal identity.
            Server access logs contain only standard technical headers (IP address, user-agent) for
            security rate-limiting and DDoS mitigation, retained for no more than 14 days before
            automatic purge.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-[#E8E0D5] mb-2">4. Cookies and Web Storage</h2>
          <p>
            We do not use tracking cookies. We utilize browser local storage strictly for functional
            preferences, including dark mode settings, audio playback volume, and user-dismissed
            announcement banners.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-[#E8E0D5] mb-2">5. Children's Health Education</h2>
          <p>
            The Living Body Atlas is safe for educational use in schools and by students. We do not
            knowingly collect personally identifiable information from children under 13.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-[#E8E0D5] mb-2">6. Inquiries and Contact</h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to verify data handling
            practices, contact our data protection team at privacy@bodyexplorer.health.
          </p>
        </div>
      </section>
    </main>
  );
}
