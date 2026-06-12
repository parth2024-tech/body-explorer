import { useRef, useState } from "react";
import { motion } from "framer-motion";
import html2canvas from "html2canvas";
import type { Fact, BodyPart } from "@/data/content";
import { RARITY_META } from "@/data/content";

interface FactCardProps {
  fact: Fact;
  part: BodyPart;
}

export function FactCard({ fact, part }: FactCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [sharing, setSharing] = useState(false);
  const rarity = RARITY_META[fact.rarity];

  const handleShare = async () => {
    if (!cardRef.current) return;
    setSharing(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: "#0e1024",
        scale: 2,
      });
      const blob = await new Promise<Blob | null>((res) => canvas.toBlob(res, "image/png"));
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `bodylab-${part.slug}.png`;
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setSharing(false);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card/70 p-5 backdrop-blur-sm transition-all hover:border-primary/40"
    >
      <div ref={cardRef} className="relative">
        <div className="mb-3 flex items-center justify-between gap-2">
          <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${rarity.tokenClass}`}>
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            {rarity.label}
          </span>
          <span className="text-xs text-muted-foreground">
            {part.emoji} {part.name}
          </span>
        </div>
        <p className="text-base leading-relaxed text-foreground">{fact.text}</p>
        {fact.source && (
          <a
            href={fact.source}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-xs text-primary hover:underline"
          >
            Source ↗
          </a>
        )}
      </div>

      <button
        onClick={handleShare}
        disabled={sharing}
        className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
      >
        {sharing ? "Capturing…" : "Share card"} ↗
      </button>
    </motion.article>
  );
}
