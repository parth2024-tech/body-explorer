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
            className="fixed inset-0 z-30 bg-[#030303]/80 backdrop-blur-sm lg:hidden"
          />

          <motion.aside
            key={part.id}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
            className="fixed right-0 top-0 z-40 flex h-full w-full flex-col border-l border-[#222222] bg-[#0D0D0D]/95 backdrop-blur-xl lg:w-[460px]"
          >
            {/* Header */}
            <div className="relative border-b border-[#222222] p-6">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FC3D21]/50 to-transparent" />
              <button
                onClick={close}
                aria-label="Close"
                className="absolute right-4 top-4 rounded-full border border-[#222222] bg-[#16181D] p-1.5 text-[#8A8F98] transition-colors hover:border-[#FC3D21]/50 hover:text-[#EAEAEA]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              <div className="text-4xl">{part.emoji}</div>
              <h2 className="mt-2 text-3xl font-bold gradient-text">{part.name}</h2>
              <p className="mt-1 text-xs uppercase tracking-widest text-[#8A8F98]">
                {part.system} System
              </p>
              <p className="mt-3 text-sm text-[#8A8F98]">{part.shortDescription}</p>
            </div>

            {/* Category tabs */}
            <div className="flex gap-1 overflow-x-auto border-b border-[#222222] px-3 py-2 fact-scroll">
              {CATEGORIES.map((cat) => {
                const meta = CATEGORY_META[cat];
                const active = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`relative whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                      active
                        ? "bg-[#FC3D21]/10 text-[#FC3D21]"
                        : "text-[#8A8F98] hover:text-[#EAEAEA]"
                    }`}
                  >
                    <span className="mr-1">{meta.icon}</span>
                    {meta.label}
                    {active && (
                      <motion.div
                        layoutId="cat-underline"
                        className="absolute inset-0 -z-10 rounded-full border border-[#FC3D21]/30"
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
                <div className="py-12 text-center text-sm text-[#8A8F98]">
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
                <div className="rounded-xl border border-[#FC3D21]/20 bg-[#FC3D21]/5 p-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#FC3D21] font-semibold">
                    <span>⚡</span>
                    {microAction.duration} micro-action
                  </div>
                  <p className="mt-2 text-sm text-[#EAEAEA] leading-relaxed">
                    {microAction.action}
                  </p>
                </div>
              )}

              {/* Myth Busted */}
              {myths.length > 0 && (
                <div className="space-y-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0B3D91]">
                    Myths Busted
                  </h4>
                  {myths.map((m) => (
                    <div
                      key={m.id}
                      className="rounded-xl border border-[#0B3D91]/20 bg-[#0B3D91]/5 p-4 space-y-3"
                    >
                      {/* Confidence Badge */}
                      {m.confidenceLevel && (
                        <div className="flex items-center gap-1.5 mb-2">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-widest ${
                            m.confidenceLevel === 'HIGH' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                            m.confidenceLevel === 'MODERATE' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                            'bg-red-500/20 text-red-400 border border-red-500/30'
                          }`}>
                            {m.confidenceLevel} CONFIDENCE
                          </span>
                        </div>
                      )}

                      <p className="text-sm text-[#EAEAEA]">
                        <span className="font-semibold text-[#FC3D21]">Myth:</span> {m.myth}
                      </p>
                      <p className="text-sm text-[#EAEAEA] leading-relaxed">
                        <span className="font-semibold text-[#2E8B57]">Reality:</span> {m.reality}
                      </p>

                      {/* Actionable Tip */}
                      {m.actionableTip && (
                        <div className="rounded-lg bg-[#2E8B57]/10 p-3 mt-2 border border-[#2E8B57]/20">
                          <p className="text-xs text-[#EAEAEA] leading-relaxed">
                            <span className="font-bold text-[#2E8B57]">👉 TRY THIS:</span> {m.actionableTip}
                          </p>
                        </div>
                      )}

                      {/* Danger Alert */}
                      {m.dangerAlert && (
                        <div className="rounded-lg bg-red-500/10 p-3 mt-2 border border-red-500/20">
                          <p className="text-xs text-red-300 font-medium leading-relaxed">
                            {m.dangerAlert}
                          </p>
                        </div>
                      )}

                      {/* Trust Signals */}
                      {(m.evidenceStatement || m.clinicalDisclaimer) && (
                        <div className="mt-3 pt-3 border-t border-[#0B3D91]/20 space-y-2">
                          {m.evidenceStatement && (
                            <p className="text-[10.5px] text-[#8A8F98]">
                              {m.evidenceStatement}
                            </p>
                          )}
                          {m.clinicalDisclaimer && (
                            <p className="text-[10.5px] text-[#8A8F98]">
                              {m.clinicalDisclaimer}
                            </p>
                          )}
                        </div>
                      )}
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
                  <p className="text-sm text-[#EAEAEA] leading-relaxed italic">
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
