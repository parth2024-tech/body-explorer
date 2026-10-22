import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  getDailyFact,
  getBodyPart,
  RARITY_META,
  CATEGORY_META,
  FACTS,
  type Fact,
} from "@/data/content";
import { Shuffle } from "lucide-react";

export function DailyFact() {
  const [currentFact, setCurrentFact] = useState<Fact>(() => getDailyFact());
  const part = getBodyPart(currentFact.bodyPartId) || getBodyPart("brain")!;
  const rarity = RARITY_META[currentFact.rarity];
  const category = CATEGORY_META[currentFact.category];

  const handleShuffle = () => {
    const candidates = FACTS.filter((f) => f.id !== currentFact.id);
    const next = candidates[Math.floor(Math.random() * candidates.length)];
    if (next) setCurrentFact(next);
  };

  // Countdown to next UTC day
  const now = new Date();
  const tomorrow = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1),
  );
  const hoursLeft = Math.max(0, Math.floor((tomorrow.getTime() - now.getTime()) / 3600000));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card/70 p-8 backdrop-blur-md glow-border"
    >
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-glow)" }}
      />

      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
            <span className="floaty">✶</span> Fact of the Day
          </span>
          <button
            type="button"
            onClick={handleShuffle}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/20 text-[11px] font-mono text-primary transition-all cursor-pointer"
            title="Discover another verified body fact"
          >
            <Shuffle className="w-3 h-3" />
            <span>Shuffle</span>
          </button>
        </div>
        <span className="text-xs text-muted-foreground">~{hoursLeft}h until next</span>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <div className="text-3xl">{part.emoji}</div>
        <div>
          <div className="text-lg font-semibold">{part.name}</div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            {category.icon} {category.label}
          </div>
        </div>
      </div>

      <p className="mt-5 text-xl leading-relaxed text-foreground md:text-2xl">{currentFact.text}</p>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium ${rarity.tokenClass}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {rarity.label}
        </span>
        <Link
          to="/explore"
          className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
        >
          Explore the body
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </Link>
      </div>
    </motion.div>
  );
}
