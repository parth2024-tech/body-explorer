import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — BodyLab" },
      { name: "description", content: "Why BodyLab exists: the human body is the most fascinating object in the universe, and biology class kind of ruined it. Here's the fix." },
      { property: "og:title", content: "About BodyLab" },
      { property: "og:description", content: "The most fascinating object in the universe lives inside your skin. Let's actually look at it." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-16 md:pt-24">
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
        Biology class made your body{" "}
        <span className="gradient-text">boring</span>. <br className="hidden md:block" />
        We're fixing that.
      </h1>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
        <p>
          BodyLab is an interactive atlas of the human body — but not the kind you
          had to memorise in school. Tap an organ and you get five lenses on it:
          the weird stuff, the health tips, what quietly damages it, the
          superfoods that help, and the wildest records it sets.
        </p>
        <p>
          Every fact has a <span className="text-primary">rarity badge</span>.
          Some are common knowledge. Some are almost unknown. The gold ones are
          the stuff dinner parties were built for.
        </p>
        <p>
          The whole thing is designed to feel less like a textbook and more like
          a small museum installation — dark, glowing, and quietly alive.
        </p>
      </div>

      <div className="mt-12 rounded-3xl border border-primary/30 bg-card/60 p-8 backdrop-blur-sm glow-border">
        <h2 className="text-2xl font-bold">Ready to look inside?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The map has 10 organs. Each has 5 lenses. That's a lot to dig through.
        </p>
        <Link
          to="/explore"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
        >
          Open the body map →
        </Link>
      </div>

      <p className="mt-12 text-xs text-muted-foreground">
        Facts are summarised from peer-reviewed research, NIH/PubMed, and books
        like Bill Bryson's <em>The Body</em>. BodyLab is for curiosity and
        general education, not medical advice.
      </p>
    </main>
  );
}
