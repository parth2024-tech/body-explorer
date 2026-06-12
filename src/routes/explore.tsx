import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { z } from "zod";
import { BodyMap } from "@/components/BodyMap";
import { FactPanel } from "@/components/FactPanel";
import { useBodyStore } from "@/store/useBodyStore";

const searchSchema = z.object({
  part: z.string().optional(),
});

export const Route = createFileRoute("/explore")({
  validateSearch: (search) => searchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Explore — BodyLab" },
      { name: "description", content: "Interactive human body map. Tap an organ to reveal facts, tips, and superfoods." },
      { property: "og:title", content: "Explore the human body — BodyLab" },
      { property: "og:description", content: "Tap any organ on a glowing anatomical map and learn what no biology class taught you." },
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
    <main className="relative mx-auto max-w-6xl px-5 pb-24 pt-10">
      <div className="mb-8 max-w-2xl">
        <h1 className="text-3xl font-bold md:text-4xl">The Body Map</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Tap any glowing region — or pick from the quick list below the figure — to open
          its fact panel. Each organ has five lenses to explore.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
        <BodyMap />
        <aside className="hidden self-start rounded-2xl border border-border bg-card/40 p-5 backdrop-blur-sm lg:block">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            How it works
          </h3>
          <ol className="mt-4 space-y-3 text-sm text-foreground">
            <li className="flex gap-3">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/20 text-xs text-primary">1</span>
              Tap an organ on the map.
            </li>
            <li className="flex gap-3">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/20 text-xs text-primary">2</span>
              Switch between the 5 fact lenses.
            </li>
            <li className="flex gap-3">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/20 text-xs text-primary">3</span>
              Hit "Share card" on any fact to save a PNG.
            </li>
          </ol>
          <div className="mt-6 rounded-xl border border-primary/30 bg-primary/5 p-3 text-xs text-primary">
            ✶ Tip — every fact has a rarity badge. Gold = almost nobody knows this.
          </div>
        </aside>
      </div>

      <FactPanel />
    </main>
  );
}
