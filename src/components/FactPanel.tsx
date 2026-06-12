import { AnimatePresence, motion } from "framer-motion";
import { useBodyStore } from "@/store/useBodyStore";
import {
  CATEGORY_META,
  getBodyPart,
  getFactsFor,
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
            className="fixed inset-0 z-30 bg-background/70 backdrop-blur-sm lg:hidden"
          />

          <motion.aside
            key={part.id}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
            className="fixed right-0 top-0 z-40 flex h-full w-full flex-col border-l border-border bg-card/95 backdrop-blur-xl lg:w-[440px]"
          >
            {/* Header */}
            <div className="relative border-b border-border p-6">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              <button
                onClick={close}
                aria-label="Close"
                className="absolute right-4 top-4 rounded-full border border-border bg-secondary/60 p-1.5 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              <div className="text-4xl">{part.emoji}</div>
              <h2 className="mt-2 text-3xl font-bold gradient-text">{part.name}</h2>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {part.system} System
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{part.shortDescription}</p>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 overflow-x-auto border-b border-border px-3 py-2 fact-scroll">
              {CATEGORIES.map((cat) => {
                const meta = CATEGORY_META[cat];
                const active = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`relative whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                      active
                        ? "bg-primary/15 text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span className="mr-1">{meta.icon}</span>
                    {meta.label}
                    {active && (
                      <motion.div
                        layoutId="cat-underline"
                        className="absolute inset-0 -z-10 rounded-full border border-primary/40"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Facts list */}
            <div className="flex-1 overflow-y-auto fact-scroll p-5">
              {facts.length === 0 ? (
                <div className="py-12 text-center text-sm text-muted-foreground">
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
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
