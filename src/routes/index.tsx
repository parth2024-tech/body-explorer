import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { DailyFact } from "@/components/DailyFact";
import { HeroSkeleton } from "@/components/HeroSkeleton";
import { BODY_PARTS } from "@/data/content";

export const Route = createFileRoute("/")(
  {
    head: () => ({
      meta: [
        { title: "The Living Body Atlas — Your body has 37 trillion cells. Start understanding them." },
        { name: "description", content: "An interactive, animated human body education platform. Explore anatomy through a living map, log your body experiences, and get AI-guided clarity." },
        { property: "og:title", content: "The Living Body Atlas" },
        { property: "og:description", content: "Your body has 37 trillion cells. Start understanding them. Interactive anatomy with 30+ organs." },
      ],
    }),
    component: Index,
  }
);

const FEATURES = [
  {
    icon: "🗺️",
    title: "The Living Map",
    desc: "30+ zones · 5 data layers · tap any organ",
    link: "/explore",
    preview: "map",
  },
  {
    icon: "⚡",
    title: "Daily Insight",
    desc: "One fact · one 30-second action · every day",
    link: "/daily",
    preview: "daily",
  },
  {
    icon: "🏆",
    title: "Weekly Quest",
    desc: "Community challenges · certificates · habits",
    link: "/quest",
    preview: "quest",
  },
];

function Index() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-24 pt-12 md:pt-20">
      {/* Hero */}
      <section className="text-center">
        <HeroSkeleton />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#1E2844] bg-[#141826]/60 px-4 py-1.5 text-xs text-[#8B8FA3] backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00E5C4]" />
          30+ organs · 200+ facts · 5 data layers · Zero textbooks
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mx-auto mt-6 max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight md:text-8xl"
          style={{ letterSpacing: "-0.04em" }}
        >
          Your body has{" "}
          <span className="gradient-text glow-text">37 trillion</span>{" "}
          cells.{" "}
          <span className="block mt-2 text-[#8B8FA3]" style={{ fontSize: "0.6em", fontWeight: 500, letterSpacing: "-0.02em" }}>
            Start understanding them.
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <Link
            to="/explore"
            className="btn-hover-grow group inline-flex items-center gap-2 rounded-full bg-[#00E5C4] px-7 py-3.5 text-sm font-semibold text-[#0A0E1A] shadow-[0_0_30px_rgba(0,229,196,0.3)]"
          >
            Explore the Map
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
          <Link
            to="/diary"
            className="btn-hover-grow rounded-full border border-[#F5A623]/30 bg-[#F5A623]/5 px-7 py-3.5 text-sm font-semibold text-[#F5A623] transition-colors hover:bg-[#F5A623]/10"
          >
            Start Your Body Diary
          </Link>
        </motion.div>
      </section>

      {/* Daily Fact */}
      <section className="mt-20">
        <DailyFact />
      </section>

      {/* Feature grid */}
      <section className="mt-24">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold md:text-4xl"
        >
          Five ways to know your body
        </motion.h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                to={feat.link}
                className="card-hover-lift group block rounded-2xl border border-[#1E2844] bg-[#141826]/60 p-5 backdrop-blur-sm transition-all hover:border-[#00E5C4]/30"
              >
                {/* CSS-only animated preview */}
                <div className="mb-4 flex h-16 items-center justify-center rounded-xl bg-[#0A0E1A]/60 overflow-hidden">
                  {feat.preview === "map" && (
                    <div className="relative h-12 w-8">
                      <div className="absolute inset-0 rounded-full border border-[#00E5C4]/40 bg-[#00E5C4]/10 breathe" />
                      <div className="absolute left-1/2 top-3 h-6 w-4 -translate-x-1/2 rounded-sm border border-[#6B4FA0]/30 bg-[#6B4FA0]/10" />
                    </div>
                  )}
                  {feat.preview === "daily" && (
                    <div className="flex items-end gap-0.5 h-10">
                      {[3, 5, 4, 7, 6, 8].map((h, j) => (
                        <div
                          key={j}
                          className="w-1.5 rounded-t bg-[#00E5C4]/60"
                          style={{ height: `${h * 4}px`, animationDelay: `${j * 80}ms` }}
                        />
                      ))}
                    </div>
                  )}
                  {feat.preview === "quest" && (
                    <div className="h-2 w-24 rounded-full bg-[#1E2844] overflow-hidden">
                      <div className="h-full w-3/5 rounded-full bg-[#6B4FA0] animate-pulse" />
                    </div>
                  )}
                </div>
                <div className="text-sm font-bold text-[#E8E0D5]">{feat.title}</div>
                <p className="mt-1 text-xs leading-relaxed text-[#8B8FA3]">{feat.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Organ grid teaser */}
      <section className="mt-24">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">30+ organs. 5 lenses each.</h2>
            <p className="mt-2 text-sm text-[#8B8FA3]">
              Every part of you has secrets. Pick one to start.
            </p>
          </div>
          <Link to="/explore" className="hidden text-sm text-[#00E5C4] hover:underline md:inline">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {BODY_PARTS.slice(0, 16).map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
            >
              <Link
                to="/explore"
                search={{ part: p.id }}
                className="card-hover-lift group block rounded-xl border border-[#1E2844] bg-[#141826]/60 p-3 text-center backdrop-blur-sm transition-all hover:border-[#00E5C4]/30"
              >
                <div className="text-2xl">{p.emoji}</div>
                <div className="mt-2 text-xs font-semibold text-[#E8E0D5]">{p.name}</div>
                <div className="mt-0.5 text-[10px] uppercase tracking-wider text-[#8B8FA3]">
                  {p.system}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="mt-24 text-center text-xs text-[#8B8FA3]">
        Built with curiosity · The Living Body Atlas © {new Date().getFullYear()}
      </footer>
    </main>
  );
}
