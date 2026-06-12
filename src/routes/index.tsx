import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { DailyFact } from "@/components/DailyFact";
import { BODY_PARTS } from "@/data/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BodyLab — Your Body Is Wilder Than You Think" },
      { name: "description", content: "Tap any organ to discover weird facts, health tips, what damages it, and superfoods that help. A glowing, interactive human anatomy map." },
      { property: "og:title", content: "BodyLab — Your Body Is Wilder Than You Think" },
      { property: "og:description", content: "A glowing interactive map of the human body. Tap any organ. Learn what biology class skipped." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-24 pt-12 md:pt-20">
      {/* Hero */}
      <section className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          1,000+ facts. 10 organs. Zero textbooks.
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mx-auto mt-6 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
        >
          Your body is{" "}
          <span className="gradient-text glow-text">wilder</span>{" "}
          than you think.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-5 max-w-xl text-balance text-base text-muted-foreground md:text-lg"
        >
          A glowing, interactive map of the human body. Tap any organ to uncover
          weird facts, health tips, what quietly damages it, and the foods that help.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <Link
            to="/explore"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Open the body map
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
          <Link
            to="/about"
            className="rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
          >
            What is BodyLab?
          </Link>
        </motion.div>
      </section>

      {/* Daily Fact */}
      <section className="mt-16">
        <DailyFact />
      </section>

      {/* Body parts grid teaser */}
      <section className="mt-20">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">10 organs. 5 lenses each.</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Every part of you has secrets. Pick one to start.
            </p>
          </div>
          <Link to="/explore" className="hidden text-sm text-primary hover:underline md:inline">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {BODY_PARTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <Link
                to="/explore"
                search={{ part: p.id }}
                className="group block rounded-2xl border border-border bg-card/60 p-4 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-primary/50 hover:glow-border"
              >
                <div className="text-3xl">{p.emoji}</div>
                <div className="mt-3 text-sm font-semibold">{p.name}</div>
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  {p.system}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories explainer */}
      <section className="mt-20 rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-sm md:p-12">
        <h2 className="text-2xl font-bold md:text-3xl">Five lenses on every organ</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-5">
          {[
            { e: "✨", t: "Weird & Wild", d: "The stuff that makes you say 'wait, what?'" },
            { e: "🌿", t: "Health Tips", d: "Tiny habits backed by real research." },
            { e: "⚠️", t: "What Damages It", d: "The everyday things quietly causing harm." },
            { e: "🥦", t: "Superfoods", d: "Foods that genuinely fuel this part." },
            { e: "🏆", t: "Record Breakers", d: "The wildest numbers your body pulls off." },
          ].map((c) => (
            <div key={c.t}>
              <div className="text-3xl">{c.e}</div>
              <div className="mt-3 text-sm font-semibold">{c.t}</div>
              <p className="mt-1 text-xs text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 text-center text-xs text-muted-foreground">
        Built with curiosity · BodyLab © {new Date().getFullYear()}
      </footer>
    </main>
  );
}
