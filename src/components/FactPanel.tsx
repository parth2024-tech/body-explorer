import { AnimatePresence, motion } from "framer-motion";
import { useBodyStore } from "@/store/useBodyStore";
import {
  CATEGORY_META,
  getBodyPart,
  getFactsFor,
  getMythsFor,
  getMicroActionFor,
  getDoctorQuestionFor,
  type Category,
} from "@/data/content";
import { FactCard } from "./FactCard";

const CATEGORIES: Category[] = [
  "weird_wild",
  "health_tip",
  "what_damages_it",
  "superfood",
  "record_breaker",
];

export function FactPanel() {
  const selectedId = useBodyStore((s) => s.selectedPartId);
  const activeCategory = useBodyStore((s) => s.activeCategory);
  const setCategory = useBodyStore((s) => s.setCategory);
  const close = useBodyStore((s) => s.closePanel);
  const part = selectedId ? getBodyPart(selectedId) : null;
  const facts = part ? getFactsFor(part.id, activeCategory) : [];
  const myths = part ? getMythsFor(part.id) : [];
  const microAction = part ? getMicroActionFor(part.id) : null;
  const doctorQ = part ? getDoctorQuestionFor(part.id) : null;

  return (
    <AnimatePresence>
      {part && (
        <>
          {/* Backdrop on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-30 bg-[#0A0E1A]/80 backdrop-blur-sm lg:hidden"
          />

          <motion.aside
            key={part.id}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
            className="fixed right-0 top-0 z-40 flex h-full w-full flex-col border-l border-[#1E2844] bg-[#111525]/95 backdrop-blur-xl lg:w-[460px]"
          >
            {/* Header */}
            <div className="relative border-b border-[#1E2844] p-6">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00E5C4]/50 to-transparent" />
              <button
                onClick={close}
                aria-label="Close"
                className="absolute right-4 top-4 rounded-full border border-[#1E2844] bg-[#1A2038] p-1.5 text-[#8B8FA3] transition-colors hover:border-[#00E5C4]/50 hover:text-[#E8E0D5]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              <div className="text-4xl">{part.emoji}</div>
              <h2 className="mt-2 text-3xl font-bold gradient-text">{part.name}</h2>
              <p className="mt-1 text-xs uppercase tracking-widest text-[#8B8FA3]">
                {part.system} System
              </p>
              <p className="mt-3 text-sm text-[#8B8FA3]">{part.shortDescription}</p>
            </div>

            {/* Category tabs */}
            <div className="flex gap-1 overflow-x-auto border-b border-[#1E2844] px-3 py-2 fact-scroll">
              {CATEGORIES.map((cat) => {
                const meta = CATEGORY_META[cat];
                const active = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`relative whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                      active
                        ? "bg-[#00E5C4]/10 text-[#00E5C4]"
                        : "text-[#8B8FA3] hover:text-[#E8E0D5]"
                    }`}
                  >
                    <span className="mr-1">{meta.icon}</span>
                    {meta.label}
                    {active && (
                      <motion.div
                        layoutId="cat-underline"
                        className="absolute inset-0 -z-10 rounded-full border border-[#00E5C4]/30"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto fact-scroll p-5 space-y-4">
              {/* Facts */}
              {facts.length === 0 ? (
                <div className="py-12 text-center text-sm text-[#8B8FA3]">
                  <div className="mb-3 text-3xl opacity-50">🔬</div>
                  No facts in this category yet. <br />
                  More are being researched.
                </div>
              ) : (
                <div className="space-y-3">
                  {facts.map((f) => (
                    <FactCard key={f.id} fact={f} part={part} />
                  ))}
                </div>
              )}

              {/* Micro Action */}
              {microAction && (
                <div className="rounded-xl border border-[#00E5C4]/20 bg-[#00E5C4]/5 p-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#00E5C4] font-semibold">
                    <span>⚡</span>
                    {microAction.duration} micro-action
                  </div>
                  <p className="mt-2 text-sm text-[#E8E0D5] leading-relaxed">
                    {microAction.action}
                  </p>
                </div>
              )}

              {/* Myth Busted */}
              {myths.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6B4FA0]">
                    Myths Busted
                  </h4>
                  {myths.map((m) => (
                    <div
                      key={m.id}
                      className="rounded-xl border border-[#6B4FA0]/20 bg-[#6B4FA0]/5 p-4"
                    >
                      <p className="text-sm text-[#E8E0D5]">
                        <span className="font-semibold text-[#E54D4D]">Myth:</span> {m.myth}
                      </p>
                      <p className="mt-2 text-sm text-[#E8E0D5]">
                        <span className="font-semibold text-[#00E5C4]">Reality:</span> {m.reality}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Doctor Question */}
              {doctorQ && (
                <div className="rounded-xl border border-[#F5A623]/20 bg-[#F5A623]/5 p-4">
                  <div className="text-xs uppercase tracking-wider text-[#F5A623] font-semibold mb-2">
                    Ask Your Doctor
                  </div>
                  <p className="text-sm text-[#E8E0D5] leading-relaxed italic">
                    "{doctorQ.question}"
                  </p>
                </div>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
