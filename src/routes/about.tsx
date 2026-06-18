import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Living Body Atlas" },
      { name: "description", content: "Why The Living Body Atlas exists: the human body is the most fascinating object in the universe, and biology class kind of ruined it." },
      { property: "og:title", content: "About The Living Body Atlas" },
      { property: "og:description", content: "The most fascinating object in the universe lives inside your skin. Let's actually look at it." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-16 md:pt-24">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold tracking-tight md:text-5xl"
      >
        Biology class made your body{" "}
        <span className="gradient-text">boring</span>. <br className="hidden md:block" />
        We're fixing that.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-10 space-y-6 text-lg leading-relaxed text-[#8A8F98]"
      >
        <p>
          The Living Body Atlas is an interactive anatomy platform — but not the kind you
          memorised in school. Tap any of <span className="text-[#FC3D21] font-semibold">30+ organs</span> and explore them through five lenses:
          the weird stuff, the health tips, what quietly damages them, the
          superfoods that help, and the wildest records they set.
        </p>
        <p>
          Every fact has a <span className="text-[#F5A623]">rarity badge</span>.
          Some are common knowledge. Some are almost unknown. The gold ones are
          the stuff dinner parties were built for.
        </p>
        <p>
          But it goes deeper. Log how your body feels in the{" "}
          <span className="text-[#F5A623] font-semibold">Body Diary</span>. Build a streak with{" "}
          <span className="text-[#FC3D21] font-semibold">Daily Insights</span>. Join the community in{" "}
          <span className="text-[#0B3D91] font-semibold">Weekly Quests</span>. Or describe what you're feeling in plain language with{" "}
          <span className="text-[#FC3D21] font-semibold">Explain This</span>.
        </p>
        <p>
          The whole thing is designed to feel less like a textbook and more like
          a museum installation — dark, glowing, and quietly alive.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4"
      >
        {[
          { value: "30+", label: "Organs" },
          { value: "200+", label: "Facts" },
          { value: "5", label: "Data Layers" },
          { value: "12", label: "Myths Busted" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-[#222222] bg-[#0F0F0F]/60 p-4 text-center">
            <div className="stat-text text-2xl font-bold gradient-text">{s.value}</div>
            <div className="mt-1 text-xs text-[#8A8F98]">{s.label}</div>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 rounded-2xl border border-[#FC3D21]/20 bg-[#0F0F0F]/60 p-8 backdrop-blur-sm"
      >
        <h2 className="text-2xl font-bold">Ready to look inside?</h2>
        <p className="mt-2 text-sm text-[#8A8F98]">
          30+ organs. 200+ facts. Five data layers. That's a lot to dig through.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            to="/explore"
            className="btn-hover-grow inline-flex items-center gap-2 rounded-full bg-[#FC3D21] px-6 py-3 text-sm font-semibold text-[#030303] shadow-[0_0_20px_rgba(252,61,33,0.3)]"
          >
            Open the body map →
          </Link>
        </div>
      </motion.div>

      <p className="mt-12 text-xs text-[#8A8F98]">
        Facts are summarised from peer-reviewed research, NIH/PubMed, and books
        like Bill Bryson's <em>The Body</em>. The Living Body Atlas is for curiosity and
        general education, not medical advice.
      </p>
    </main>
  );
}
