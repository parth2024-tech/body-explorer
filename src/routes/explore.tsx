import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { z } from "zod";
import { BodyMap } from "@/components/BodyMap";
import { ExplorePanel } from "@/components/ExplorePanel";
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

      {/* Two-column layout: 60% map, 40% info + 3D */}
      <div className="grid gap-8 lg:grid-cols-[3fr_2fr]">
        <BodyMap />
        <div className="hidden lg:block">
          <ExplorePanel />
        </div>
      </div>

      {/* Mobile: slide-over panel */}
      <div className="lg:hidden">
        <FactPanel />
      </div>
    </main>
  );
}
