import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { DailyFact } from "@/components/DailyFact";
import { BODY_PARTS } from "@/data/content";

export const Route = createFileRoute("/")(
  {
    head: () => ({
      meta: [
        { title: "Human Body Atlas — Precision Anatomy Intelligence" },
        { name: "description", content: "An interactive, precision human body education platform. Explore anatomy through a living map, log body experiences, and gain clarity through data." },
        { property: "og:title", content: "Human Body Atlas" },
        { property: "og:description", content: "30+ organs · 200+ facts · 5 data layers · Zero textbooks" },
      ],
    }),
    component: Index,
  }
);

const FEATURES = [
  {
    code: "MOD-α",
    icon: "⬡",
    title: "Living Map",
    desc: "30+ zones · 5 data layers · tap any organ",
    link: "/explore",
    status: "ONLINE",
  },
  {
    code: "MOD-β",
    icon: "◈",
    title: "Daily Insight",
    desc: "One fact · one 30-second action · every day",
    link: "/daily",
    status: "ONLINE",
  },
  {
    code: "MOD-γ",
    icon: "◆",
    title: "Weekly Quest",
    desc: "Community challenges · certificates · habits",
    link: "/quest",
    status: "STANDBY",
  },
];

const STATS = [
  { val: "37T", label: "Human Cells" },
  { val: "30+", label: "Organ Systems" },
  { val: "200+", label: "Data Points" },
  { val: "5", label: "Data Layers" },
];

function Index() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-24">

      {/* ── HERO ─────────────────────────────── */}
      <section className="relative pt-12 md:pt-20 pb-16 border-b border-[#222222]">

        {/* Mission badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 border border-[#222222] px-4 py-2 mb-8"
        >
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FC3D21] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FC3D21]" />
            </span>
            <span className="font-mono text-[10px] font-bold text-[#FC3D21] tracking-[0.2em] uppercase">LIVE</span>
          </span>
          <span className="w-px h-3 bg-[#222222]" />
          <span className="font-mono text-[10px] text-[#8A8F98] tracking-[0.15em] uppercase">Mission: ANATOMY-ATLAS / 2024</span>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
          <div>
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-5xl font-bold leading-[1] tracking-[0.06em] md:text-7xl uppercase"
            >
              <span className="block text-[#EAEAEA]">Human</span>
              <span className="block text-[#FC3D21]">Body</span>
              <span className="block text-[#EAEAEA]">Atlas</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 max-w-md font-mono text-xs leading-loose text-[#8A8F98] tracking-[0.08em] uppercase border-l-2 border-[#FC3D21] pl-4"
            >
              Your body has 37 trillion cells. This platform maps, explains, and
              tracks them — with engineering precision.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/explore"
                className="group relative inline-flex items-center gap-3 bg-[#FC3D21] px-7 py-3.5 font-mono text-xs font-bold tracking-[0.15em] text-white uppercase transition-all hover:bg-[#e03318]"
              >
                <span className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-white/40" />
                <span className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-white/40" />
                Explore the Map
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/diary"
                className="group relative inline-flex items-center gap-3 border border-[#222222] px-7 py-3.5 font-mono text-xs font-bold tracking-[0.15em] text-[#EAEAEA] uppercase transition-all hover:border-[#FC3D21]/50 hover:text-[#FC3D21]"
              >
                <span className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-[#222222] group-hover:border-[#FC3D21]/50" />
                <span className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-[#222222] group-hover:border-[#FC3D21]/50" />
                Start Body Diary
              </Link>
            </motion.div>
          </div>

          {/* Stats panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="hidden md:block border border-[#222222] p-0"
          >
            <div className="border-b border-[#222222] px-5 py-2">
              <span className="font-mono text-[9px] tracking-[0.25em] text-[#8A8F98] uppercase">System Parameters</span>
            </div>
            <div className="divide-y divide-[#222222]">
              {STATS.map(({ val, label }) => (
                <div key={label} className="flex items-center justify-between gap-10 px-5 py-3">
                  <span className="font-mono text-[10px] tracking-[0.1em] text-[#8A8F98] uppercase">{label}</span>
                  <span className="font-display text-xl font-bold text-[#FC3D21] tabular-nums">{val}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── DAILY FACT ───────────────────────── */}
      <section className="mt-16 border border-[#222222] relative">
        <div className="absolute -top-3 left-5 bg-[#030303] px-3">
          <span className="font-mono text-[9px] tracking-[0.25em] text-[#FC3D21] uppercase font-bold">// Daily Transmission</span>
        </div>
        <div className="p-6">
          <DailyFact />
        </div>
      </section>

      {/* ── MODULE GRID ──────────────────────── */}
      <section className="mt-16">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[9px] tracking-[0.25em] text-[#8A8F98] uppercase">Active Modules</span>
            <span className="h-px flex-1 w-24 bg-[#222222]" />
          </div>
        </div>

        <div className="grid gap-px md:grid-cols-3 border border-[#222222]">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                to={feat.link}
                className="group relative flex flex-col p-6 border-r border-[#222222] last:border-r-0 transition-colors hover:bg-[#EAEAEA]/2 h-full"
              >
                {/* Corner marks */}
                <span className="absolute top-0 left-0 h-2 w-2 border-t border-l border-[#222222] group-hover:border-[#FC3D21] transition-colors" />
                <span className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-[#222222] group-hover:border-[#FC3D21] transition-colors" />

                <div className="flex items-start justify-between mb-5">
                  <span className="font-mono text-[9px] tracking-[0.2em] text-[#8A8F98] uppercase">{feat.code}</span>
                  <span className={`font-mono text-[8px] tracking-[0.2em] px-1.5 py-0.5 border ${
                    feat.status === "ONLINE"
                      ? "text-[#FC3D21] border-[#FC3D21]/30 bg-[#FC3D21]/5"
                      : "text-[#8A8F98] border-[#222222]"
                  }`}>
                    {feat.status}
                  </span>
                </div>

                <div className="font-display text-2xl font-bold tracking-[0.08em] text-[#EAEAEA] uppercase mb-2 group-hover:text-[#FC3D21] transition-colors">
                  {feat.title}
                </div>
                <p className="font-mono text-[10px] leading-relaxed text-[#8A8F98] tracking-[0.08em] uppercase">
                  {feat.desc}
                </p>

                <div className="mt-auto pt-5 flex items-center gap-2">
                  <span className="font-mono text-[10px] text-[#FC3D21] tracking-[0.15em] uppercase group-hover:underline">
                    Access Module →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ORGAN GRID ───────────────────────── */}
      <section className="mt-16 border border-[#222222]">
        <div className="flex items-center justify-between border-b border-[#222222] px-5 py-3">
          <div>
            <span className="font-mono text-[9px] tracking-[0.25em] text-[#8A8F98] uppercase">Organ Registry</span>
            <span className="ml-3 font-mono text-[9px] text-[#FC3D21] font-bold">30+ MAPPED</span>
          </div>
          <Link to="/explore" className="font-mono text-[10px] text-[#FC3D21] tracking-[0.1em] uppercase hover:underline">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-px sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 bg-[#222222]">
          {BODY_PARTS.slice(0, 16).map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
            >
              <Link
                to="/explore"
                search={{ part: p.id }}
                className="group block bg-[#030303] p-3 text-center transition-all hover:bg-[#FC3D21]/5"
              >
                <div className="text-2xl mb-2 grayscale group-hover:grayscale-0 transition-all">{p.emoji}</div>
                <div className="font-display text-[10px] font-bold tracking-[0.06em] text-[#EAEAEA] uppercase leading-tight">{p.name}</div>
                <div className="mt-1 font-mono text-[8px] tracking-[0.12em] text-[#8A8F98] uppercase">{p.system}</div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="mt-16 border-t border-[#222222] pt-6 flex items-center justify-between">
        <span className="font-mono text-[9px] tracking-[0.2em] text-[#8A8F98] uppercase">
          Human Body Atlas © {new Date().getFullYear()} · All Systems Nominal
        </span>
        <span className="font-mono text-[9px] tracking-[0.2em] text-[#FC3D21] uppercase">
          v2.0.1 · Build 042
        </span>
      </footer>
    </main>
  );
}
