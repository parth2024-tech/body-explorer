import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BODY_PARTS } from "@/data/content";

interface ExplainResult {
  organs: string[];
  facts: string[];
  doctorQuestions: string[];
}

// Mock AI responses for demo (Claude API integration would replace this)
const MOCK_RESPONSES: Record<string, ExplainResult> = {
  headache: {
    organs: ["brain", "sinuses", "eyes", "spine-cervical"],
    facts: [
      "Tension headaches originate from the muscles and fascia surrounding the skull, not the brain itself — the brain has no pain receptors.",
      "The trigeminal nerve, which runs from your brainstem to your face, is involved in most headache types including migraines.",
      "Dehydration reduces blood volume, causing the brain to temporarily shrink and pull away from the skull — triggering pain.",
    ],
    doctorQuestions: [
      "My headaches occur [frequency] — should I be concerned about the pattern?",
      "Could my headaches be related to my neck posture or vision?",
      "What warning signs would make a headache an emergency?",
    ],
  },
  stomach: {
    organs: ["stomach", "small-intestine", "large-intestine", "liver"],
    facts: [
      "Your gut contains over 500 million neurons — the enteric nervous system is sometimes called your 'second brain'.",
      "Stomach pain after eating can involve the stomach (acid), gallbladder (fat digestion), or pancreas (enzymes) — location matters.",
      "The vagus nerve connects your gut to your brain, which is why anxiety can cause stomach symptoms.",
    ],
    doctorQuestions: [
      "My stomach discomfort happens [when] — could this point to a specific cause?",
      "Should I be tested for H. pylori or food sensitivities?",
      "What dietary changes might help me narrow down the trigger?",
    ],
  },
  back: {
    organs: ["spine-lumbar", "spine-thoracic", "kidneys", "hips"],
    facts: [
      "85% of lower back pain has no specific identifiable cause — it's often muscular or related to posture and deconditioning.",
      "Your lumbar discs absorb 40% more pressure when sitting than standing, which is why desk work aggravates back pain.",
      "Kidney pain can mimic back pain but typically occurs higher (flank area) and may be accompanied by urinary changes.",
    ],
    doctorQuestions: [
      "My back pain is in [location] — does this help narrow down the structure involved?",
      "When should I consider imaging versus starting with physical therapy?",
      "Could my back pain be referred from another organ like the kidneys?",
    ],
  },
  default: {
    organs: ["brain", "heart", "skin"],
    facts: [
      "Your body systems are interconnected — symptoms in one area often involve multiple body systems working together.",
      "The nervous system, immune system, and endocrine system form a communication network that influences how you experience discomfort.",
      "Stress activates the hypothalamic-pituitary-adrenal (HPA) axis, which can manifest as physical symptoms in almost any body region.",
    ],
    doctorQuestions: [
      "I've been experiencing [symptom] for [duration] — what initial tests would you recommend?",
      "Could this be related to stress, sleep, or lifestyle factors?",
      "What should I track or document before my next visit to help with diagnosis?",
    ],
  },
};

function getResponse(input: string): ExplainResult {
  const lower = input.toLowerCase();
  if (lower.includes("head") || lower.includes("migraine")) return MOCK_RESPONSES.headache;
  if (lower.includes("stomach") || lower.includes("digest") || lower.includes("nausea") || lower.includes("gut"))
    return MOCK_RESPONSES.stomach;
  if (lower.includes("back") || lower.includes("spine") || lower.includes("lumbar"))
    return MOCK_RESPONSES.back;
  return MOCK_RESPONSES.default;
}

export const Route = createFileRoute("/explain")({
  head: () => ({
    meta: [
      { title: "Explain This — The Living Body Atlas" },
      { name: "description", content: "Describe what you're feeling in plain language. Get educational context about your body and questions to ask your doctor." },
    ],
  }),
  component: ExplainPage,
});

function ExplainPage() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ExplainResult | null>(null);

  const handleSubmit = () => {
    if (!input.trim()) return;
    setLoading(true);
    setResult(null);

    // Simulate AI processing delay
    setTimeout(() => {
      setResult(getResponse(input));
      setLoading(false);
    }, 1500);
  };

  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-10">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold md:text-4xl">
          <span className="gradient-text">Explain This</span>
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-sm text-[#8B8FA3]">
          Describe what you're feeling — in plain language. We'll help you understand which body systems are involved and prepare questions for your doctor.
        </p>
      </motion.div>

      {/* Disclaimer */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-6 rounded-xl border border-[#F5A623]/20 bg-[#F5A623]/5 p-4 text-center"
      >
        <p className="text-sm text-[#F5A623] font-medium">
          ⚠️ This is not medical advice.
        </p>
        <p className="mt-1 text-xs text-[#8B8FA3]">
          This tool helps you learn about your body and prepare questions for your doctor. It does not diagnose conditions.
        </p>
      </motion.div>

      {/* Input */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-8"
      >
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
            }
          }}
          placeholder="e.g. 'I get a dull ache in my lower back after sitting for a few hours' or 'I sometimes feel my heart racing at night'"
          className="explain-input"
        />
        <button
          onClick={handleSubmit}
          disabled={!input.trim() || loading}
          className="btn-hover-grow mt-4 w-full rounded-xl bg-[#00E5C4] py-3.5 text-sm font-bold text-[#0A0E1A] shadow-[0_0_30px_rgba(0,229,196,0.3)] disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {loading ? "Analyzing..." : "Explain This"}
        </button>
      </motion.div>

      {/* Loading animation */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-10 flex justify-center"
          >
            <div className="relative">
              {/* Simplified body silhouette that fills */}
              <svg viewBox="0 0 100 200" className="h-48 w-24">
                <defs>
                  <linearGradient id="fillGrad" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="#00E5C4" stopOpacity="0.3">
                      <animate attributeName="offset" from="0" to="1" dur="1.5s" fill="freeze" />
                    </stop>
                    <stop offset="0%" stopColor="#1E2844" stopOpacity="0.3">
                      <animate attributeName="offset" from="0" to="1" dur="1.5s" fill="freeze" />
                    </stop>
                  </linearGradient>
                </defs>
                {/* Body outline */}
                <ellipse cx="50" cy="20" rx="14" ry="16" fill="url(#fillGrad)" stroke="#1E2844" strokeWidth="1" />
                <rect x="44" y="34" width="12" height="10" fill="url(#fillGrad)" stroke="#1E2844" strokeWidth="1" />
                <path d="M30 45 L70 45 L75 120 L60 135 L40 135 L25 120 Z" fill="url(#fillGrad)" stroke="#1E2844" strokeWidth="1" />
                <path d="M30 48 L20 90 L25 92 L38 55 Z" fill="url(#fillGrad)" stroke="#1E2844" strokeWidth="1" />
                <path d="M70 48 L80 90 L75 92 L62 55 Z" fill="url(#fillGrad)" stroke="#1E2844" strokeWidth="1" />
                <path d="M38 133 L35 190 L45 190 L48 133 Z" fill="url(#fillGrad)" stroke="#1E2844" strokeWidth="1" />
                <path d="M52 133 L55 190 L65 190 L62 133 Z" fill="url(#fillGrad)" stroke="#1E2844" strokeWidth="1" />
              </svg>
              <p className="mt-2 text-center text-xs text-[#8B8FA3] animate-pulse">
                Mapping body systems...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results */}
      <AnimatePresence>
        {result && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-10 space-y-6"
          >
            {/* Highlighted organs */}
            <div className="rounded-xl border border-[#00E5C4]/20 bg-[#141826] p-5">
              <h3 className="text-xs uppercase tracking-wider text-[#00E5C4] font-semibold mb-3">
                Body systems involved
              </h3>
              <div className="flex flex-wrap gap-2">
                {result.organs.map((organId) => {
                  const part = BODY_PARTS.find((p) => p.id === organId);
                  return part ? (
                    <span
                      key={organId}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#00E5C4]/30 bg-[#00E5C4]/5 px-3 py-1.5 text-xs font-medium text-[#00E5C4]"
                    >
                      <span>{part.emoji}</span>
                      {part.name}
                    </span>
                  ) : null;
                })}
              </div>
            </div>

            {/* Educational facts */}
            <div className="rounded-xl border border-[#1E2844] bg-[#141826] p-5">
              <h3 className="text-xs uppercase tracking-wider text-[#E8E0D5] font-semibold mb-4">
                What to know
              </h3>
              <div className="space-y-4">
                {result.facts.map((fact, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="shrink-0 mt-1 grid h-5 w-5 place-items-center rounded-full bg-[#00E5C4]/10 text-[10px] text-[#00E5C4] font-bold">
                      {i + 1}
                    </span>
                    <p className="text-sm text-[#E8E0D5] leading-relaxed">{fact}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Doctor questions */}
            <div className="rounded-xl border border-[#F5A623]/20 bg-[#F5A623]/5 p-5">
              <h3 className="text-xs uppercase tracking-wider text-[#F5A623] font-semibold mb-4">
                Questions for your doctor
              </h3>
              <div className="space-y-3">
                {result.doctorQuestions.map((q, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="shrink-0 mt-0.5 text-[#F5A623]">→</span>
                    <p className="text-sm text-[#E8E0D5] leading-relaxed">{q}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reminder */}
            <p className="text-center text-xs text-[#8B8FA3]">
              Remember: This information is educational only. Always consult a healthcare professional for medical concerns.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
