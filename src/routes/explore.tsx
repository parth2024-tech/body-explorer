import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { z } from "zod";
import { BodyMap } from "@/components/BodyMap";
import { FactPanel } from "@/components/FactPanel";
import { useBodyStore } from "@/store/useBodyStore";
import { motion } from "framer-motion";

const searchSchema = z.object({
  part: z.string().optional(),
});

export const Route = createFileRoute("/explore")({
  validateSearch: (search) => searchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Explore — The Living Body Atlas" },
      { name: "description", content: "Interactive human body map with 30+ organs. Tap any zone to reveal facts, tips, myths, and superfoods." },
      { property: "og:title", content: "Explore the human body — The Living Body Atlas" },
      { property: "og:description", content: "30+ interactive anatomy zones. Five data layers. Tap any organ to discover what biology class never taught you." },
    ],
  }),
  component: Explore,
});

function Explore() {
  const { part } = Route.useSearch();
  const setSelected = useBodyStore((s) => s.setSelectedPart);

  useEffect(() => {
    if (part) setSelected(part);
  }, [part, setSelected]);

  return (
    <main className="relative mx-auto max-w-7xl px-5 pb-24 pt-10">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 max-w-2xl"
      >
        <h1 className="text-3xl font-bold md:text-4xl">
          The <span className="gradient-text">Body Map</span>
        </h1>
        <p className="mt-2 text-sm text-[#8B8FA3]">
          Tap any glowing region to explore. Switch layers to see different data.
          30+ organs · 200+ facts · 5 data layers.
        </p>
      </motion.div>

      {/* Two-column layout: 60% map, 40% info */}
      <div className="grid gap-8 lg:grid-cols-[3fr_2fr]">
        <BodyMap />

        {/* Desktop sidebar — how it works + quick stats */}
        <aside className="hidden self-start rounded-2xl border border-[#1E2844] bg-[#141826]/60 p-6 backdrop-blur-sm lg:block">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-[#8B8FA3]">
            How it works
          </h3>
          <ol className="mt-4 space-y-3 text-sm text-[#E8E0D5]">
            <li className="flex gap-3">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#00E5C4]/10 text-xs text-[#00E5C4] font-bold">
                1
              </span>
              Tap an organ on the map.
            </li>
            <li className="flex gap-3">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#00E5C4]/10 text-xs text-[#00E5C4] font-bold">
                2
              </span>
              Browse facts across 5 categories.
            </li>
            <li className="flex gap-3">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#00E5C4]/10 text-xs text-[#00E5C4] font-bold">
                3
              </span>
              Switch data layers to see different info.
            </li>
          </ol>

          <div className="mt-6 space-y-3">
            <div className="rounded-xl border border-[#00E5C4]/15 bg-[#00E5C4]/5 p-3 text-xs">
              <span className="text-[#00E5C4] font-semibold">✶ Tip</span>
              <span className="text-[#8B8FA3]"> — Every fact has a rarity badge. Gold = almost nobody knows this.</span>
            </div>
            <div className="rounded-xl border border-[#F5A623]/15 bg-[#F5A623]/5 p-3 text-xs">
              <span className="text-[#F5A623] font-semibold">📓 Diary</span>
              <span className="text-[#8B8FA3]"> — Switch to Personal layer to see your diary entries on the map.</span>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-lg bg-[#0A0E1A]/60 p-2.5">
              <div className="stat-text text-xl font-bold text-[#00E5C4]">30+</div>
              <div className="mt-0.5 text-[10px] text-[#8B8FA3]">Organs</div>
            </div>
            <div className="rounded-lg bg-[#0A0E1A]/60 p-2.5">
              <div className="stat-text text-xl font-bold text-[#6B4FA0]">200+</div>
              <div className="mt-0.5 text-[10px] text-[#8B8FA3]">Facts</div>
            </div>
            <div className="rounded-lg bg-[#0A0E1A]/60 p-2.5">
              <div className="stat-text text-xl font-bold text-[#F5A623]">5</div>
              <div className="mt-0.5 text-[10px] text-[#8B8FA3]">Layers</div>
            </div>
          </div>
        </aside>
      </div>

      <FactPanel />
    </main>
  );
}
