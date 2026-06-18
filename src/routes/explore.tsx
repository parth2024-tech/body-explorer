import { createFileRoute } from "@tanstack/react-router";
import { useEffect, Suspense } from "react";
import { z } from "zod";
import { BodyMap3D } from "@/components/BodyMap3D";
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
    <main className="min-h-screen bg-background text-foreground pb-32">
      
      <div className="mx-auto max-w-7xl px-6 md:px-12 pb-24 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 border-b-2 border-charcoal dark:border-bone pb-8"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Section 01 — Atlas
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-display text-charcoal dark:text-bone">
            The Interactive Map.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A precise 3D spatial representation of the human anatomy. 
            Tap any region to access structural facts, documented myths, and personal health data.
          </p>
        </motion.div>

        {/* Textbook-style asymmetrical layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Desktop floating sidebar — how it works + quick stats */}
          <aside className="hidden lg:block lg:col-span-3 space-y-12">
            <div>
              <h3 className="font-display text-xl mb-4 text-charcoal dark:text-bone border-b border-border pb-2">
                Instructions
              </h3>
              <ol className="space-y-4 font-body text-sm text-muted-foreground">
                <li className="flex gap-4 items-start leading-relaxed">
                  <span className="font-mono text-xs mt-0.5">01</span>
                  Drag to rotate the 3D map.
                </li>
                <li className="flex gap-4 items-start leading-relaxed">
                  <span className="font-mono text-xs mt-0.5">02</span>
                  Select an organ node.
                </li>
                <li className="flex gap-4 items-start leading-relaxed">
                  <span className="font-mono text-xs mt-0.5">03</span>
                  Browse facts across 5 categories in the panel below.
                </li>
              </ol>
            </div>

            <div className="space-y-6">
              <div className="border border-border p-4 text-sm leading-relaxed">
                <span className="font-display italic text-charcoal dark:text-bone block mb-2">Note on Rarities</span>
                <span className="text-muted-foreground">Every fact is assigned a rarity. Gold indicates information known by less than 1% of the population.</span>
              </div>
              <div className="border border-border p-4 text-sm leading-relaxed">
                <span className="font-display italic text-charcoal dark:text-bone block mb-2">Personal Diary</span>
                <span className="text-muted-foreground">Switch to the Personal layer to visualize your own logged symptoms and data directly on the map.</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-border">
              <div>
                <div className="font-display text-3xl text-accent">30+</div>
                <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mt-2">Organs</div>
              </div>
              <div>
                <div className="font-display text-3xl text-accent">200+</div>
                <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mt-2">Facts</div>
              </div>
            </div>
          </aside>

          {/* The Body Map Component */}
          <div className="lg:col-span-9 flex justify-center items-center py-2 bg-muted border-2 border-border">
            <Suspense fallback={<div className="h-[600px] flex items-center justify-center font-mono text-sm uppercase tracking-widest text-muted-foreground">Loading 3D Engine...</div>}>
              <BodyMap3D />
            </Suspense>
          </div>
        </div>
      </div>

      <FactPanel />
    </main>
  );
}
