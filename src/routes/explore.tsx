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
    <main className="min-h-screen bg-[#030303] text-white overflow-hidden relative selection:bg-[#00E5C4]/30 pb-32">
      
      {/* Background glow for immersion */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00E5C4]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 pb-24 pt-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#00E5C4]">
            Interactive Atlas
          </span>
          <h1 className="mt-4 text-5xl md:text-7xl font-space font-black tracking-tighter text-white">
            The <span className="text-[#00E5C4]">Body Map</span>
          </h1>
          <p className="mt-6 text-sm text-[#8A8F98] max-w-2xl mx-auto leading-relaxed">
            Tap any glowing region to explore. Switch layers to see different data.
            <br /> <span className="text-white font-bold">30+ organs · 200+ facts · 5 data layers.</span>
          </p>
        </motion.div>

        {/* Immersive centered layout */}
        <div className="relative w-full max-w-4xl mx-auto rounded-[3rem] border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_0_80px_rgba(0,229,196,0.05)] p-4 md:p-8">
          
          {/* Desktop floating sidebar — how it works + quick stats */}
          <aside className="absolute left-8 top-8 bottom-8 w-64 hidden xl:flex flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl z-20 pointer-events-none">
            <div className="pointer-events-auto">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#00E5C4] mb-4">
                How it works
              </h3>
              <ol className="space-y-4 text-xs text-[#EAEAEA]">
                <li className="flex gap-3 items-start leading-relaxed">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00E5C4]/20 text-[#00E5C4] font-bold border border-[#00E5C4]/30 mt-0.5">
                    1
                  </span>
                  Tap an organ on the map.
                </li>
                <li className="flex gap-3 items-start leading-relaxed">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00E5C4]/20 text-[#00E5C4] font-bold border border-[#00E5C4]/30 mt-0.5">
                    2
                  </span>
                  Browse facts across 5 categories.
                </li>
                <li className="flex gap-3 items-start leading-relaxed">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00E5C4]/20 text-[#00E5C4] font-bold border border-[#00E5C4]/30 mt-0.5">
                    3
                  </span>
                  Switch layers to reveal hidden systems.
                </li>
              </ol>

              <div className="mt-8 space-y-3">
                <div className="rounded-xl border border-[#00E5C4]/20 bg-[#00E5C4]/5 p-3 text-[10px] leading-relaxed">
                  <span className="text-[#00E5C4] font-bold uppercase tracking-wider block mb-1">✶ Tip</span>
                  <span className="text-[#8A8F98]">Every fact has a rarity badge. Gold = almost nobody knows this.</span>
                </div>
                <div className="rounded-xl border border-[#F5A623]/20 bg-[#F5A623]/5 p-3 text-[10px] leading-relaxed">
                  <span className="text-[#F5A623] font-bold uppercase tracking-wider block mb-1">📓 Diary</span>
                  <span className="text-[#8A8F98]">Switch to Personal layer to see your diary entries mapped.</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-2 mt-auto pointer-events-auto">
              <div className="rounded-xl bg-white/[0.03] border border-white/5 p-3 text-center">
                <div className="text-xl font-black text-white">30+</div>
                <div className="text-[9px] text-[#8A8F98] uppercase tracking-wider mt-1">Organs</div>
              </div>
              <div className="rounded-xl bg-white/[0.03] border border-white/5 p-3 text-center">
                <div className="text-xl font-black text-white">200+</div>
                <div className="text-[9px] text-[#8A8F98] uppercase tracking-wider mt-1">Facts</div>
              </div>
            </div>
          </aside>

          {/* The Body Map Component */}
          <div className="w-full flex justify-center items-center py-10 relative z-10">
            <BodyMap />
          </div>
        </div>
      </div>

      <FactPanel />
    </main>
  );
}
