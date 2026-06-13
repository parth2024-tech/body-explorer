import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface QuestStep {
  id: string;
  text: string;
  organLink?: string;
}

interface Quest {
  id: string;
  title: string;
  subtitle: string;
  bodySystem: string;
  color: string;
  duration: string;
  steps: QuestStep[];
}

const CURRENT_QUEST: Quest = {
  id: "spine-week",
  title: "Spine Week",
  subtitle: "7 days, 5 check-ins, 1 new habit",
  bodySystem: "Skeletal / Nervous",
  color: "#00E5C4",
  duration: "This Week",
  steps: [
    { id: "s1", text: "Learn about your cervical spine — tap it on the map", organLink: "spine-cervical" },
    { id: "s2", text: "Do the chin tuck exercise (30 seconds, 5 reps)" },
    { id: "s3", text: "Check your desk posture — ears should align over shoulders" },
    { id: "s4", text: "Try the thoracic spine foam roll for 2 minutes" },
    { id: "s5", text: "Log your spine status in the Body Diary for 3 days", organLink: "spine-lumbar" },
    { id: "s6", text: "Read the 'What Damages It' facts for lumbar spine", organLink: "spine-lumbar" },
    { id: "s7", text: "Share your completion certificate with someone" },
  ],
};

const QUEST_KEY = "atlas-quest-progress";
const PARTICIPANT_COUNT = 847; // Simulated community count

function loadProgress(): string[] {
  try {
    const raw = localStorage.getItem(QUEST_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export const Route = createFileRoute("/quest")({
  head: () => ({
    meta: [
      { title: "Weekly Quest — The Living Body Atlas" },
      { name: "description", content: "Join the community challenge. Complete steps, earn certificates, build healthy habits." },
    ],
  }),
  component: QuestPage,
});

function QuestPage() {
  const [completed, setCompleted] = useState<string[]>([]);
  const [showCert, setShowCert] = useState(false);
  const certRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCompleted(loadProgress());
  }, []);

  const progress = completed.length / CURRENT_QUEST.steps.length;
  const isComplete = completed.length === CURRENT_QUEST.steps.length;

  const toggleStep = (stepId: string) => {
    const updated = completed.includes(stepId)
      ? completed.filter((id) => id !== stepId)
      : [...completed, stepId];
    setCompleted(updated);
    localStorage.setItem(QUEST_KEY, JSON.stringify(updated));

    if (updated.length === CURRENT_QUEST.steps.length) {
      setTimeout(() => setShowCert(true), 500);
    }
  };

  const handleDownloadCert = async () => {
    if (!certRef.current) return;
    try {
      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(certRef.current, {
        backgroundColor: "#0A0E1A",
        scale: 2,
      });
      const url = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = `atlas-certificate-${CURRENT_QUEST.id}.png`;
      link.href = url;
      link.click();
    } catch (err) {
      console.error("Certificate generation failed:", err);
    }
  };

  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-10">
      {/* Quest header — full bleed feel */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border p-8 relative overflow-hidden"
        style={{
          borderColor: CURRENT_QUEST.color + "30",
          background: `linear-gradient(145deg, ${CURRENT_QUEST.color}08, #141826)`,
        }}
      >
        {/* Decorative glow */}
        <div
          className="absolute -top-20 -right-20 h-40 w-40 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: CURRENT_QUEST.color }}
        />

        <div className="relative">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold"
            style={{ color: CURRENT_QUEST.color }}>
            <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ backgroundColor: CURRENT_QUEST.color }} />
            {CURRENT_QUEST.duration}
          </div>

          <h1 className="mt-3 text-3xl font-bold md:text-4xl text-[#E8E0D5]">
            {CURRENT_QUEST.title}
          </h1>
          <p className="mt-1 text-sm text-[#8B8FA3]">{CURRENT_QUEST.subtitle}</p>
          <div className="mt-1 text-xs text-[#8B8FA3]">{CURRENT_QUEST.bodySystem}</div>

          {/* Progress bar */}
          <div className="mt-6">
            <div className="flex justify-between text-xs text-[#8B8FA3] mb-2">
              <span>{completed.length} of {CURRENT_QUEST.steps.length} steps</span>
              <span className="stat-text font-semibold" style={{ color: CURRENT_QUEST.color }}>
                {Math.round(progress * 100)}%
              </span>
            </div>
            <div className="h-2 rounded-full bg-[#1E2844] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress * 100}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{ backgroundColor: CURRENT_QUEST.color }}
              />
            </div>
          </div>

          {/* Community count */}
          <div className="mt-4 text-xs text-[#8B8FA3]">
            <span className="stat-text font-semibold text-[#E8E0D5]">{PARTICIPANT_COUNT.toLocaleString()}</span>
            {" "}people joined this week's quest
          </div>
        </div>
      </motion.div>

      {/* Quest steps */}
      <div className="mt-8 space-y-3">
        {CURRENT_QUEST.steps.map((step, i) => {
          const isDone = completed.includes(step.id);
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`flex items-start gap-4 rounded-xl border p-4 transition-all ${
                isDone
                  ? "border-[#00E5C4]/20 bg-[#00E5C4]/5"
                  : "border-[#1E2844] bg-[#141826]/40"
              }`}
            >
              {/* Checkbox */}
              <button
                onClick={() => toggleStep(step.id)}
                className={`quest-checkbox mt-0.5 shrink-0 ${isDone ? "completed" : ""}`}
              >
                {isDone && (
                  <svg className="absolute inset-0 p-1 text-[#0A0E1A]" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M3 8l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>

              {/* Step content */}
              <div className="flex-1">
                <p className={`text-sm ${isDone ? "text-[#8B8FA3] line-through" : "text-[#E8E0D5]"}`}>
                  {step.text}
                </p>
                {step.organLink && !isDone && (
                  <Link
                    to="/explore"
                    search={{ part: step.organLink }}
                    className="mt-1 inline-flex items-center gap-1 text-xs text-[#00E5C4] hover:underline"
                  >
                    Open on map →
                  </Link>
                )}
              </div>

              {/* Step number */}
              <span className="shrink-0 text-xs text-[#8B8FA3] stat-text">{i + 1}</span>
            </motion.div>
          );
        })}
      </div>

      {/* Completion certificate */}
      {(isComplete || showCert) && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <div ref={certRef} className="certificate text-center">
            <div className="text-xs uppercase tracking-[0.2em] text-[#00E5C4] font-semibold">
              Certificate of Completion
            </div>
            <div className="mt-4 text-3xl font-bold gradient-text">
              {CURRENT_QUEST.title}
            </div>
            <div className="mt-2 text-sm text-[#8B8FA3]">
              {CURRENT_QUEST.subtitle}
            </div>
            <div className="mt-6 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[#00E5C4]/40 to-transparent" />
            <div className="mt-6 text-xs text-[#8B8FA3]">
              Completed {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="mt-2 stat-text text-xs text-[#F5A623]">
              {CURRENT_QUEST.steps.length}/{CURRENT_QUEST.steps.length} steps · 100%
            </div>
            <div className="mt-4 text-[10px] text-[#8B8FA3]">
              The Living Body Atlas
            </div>
          </div>

          <button
            onClick={handleDownloadCert}
            className="btn-hover-grow mt-4 w-full rounded-xl border border-[#00E5C4]/30 bg-[#00E5C4]/5 py-3 text-sm font-semibold text-[#00E5C4]"
          >
            📸 Download Certificate
          </button>
        </motion.div>
      )}
    </main>
  );
}
