import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "The Living Body Atlas — A human body encyclopedia.",
      },
      {
        name: "description",
        content: "A detailed, illustrated guide to the 37 trillion cells that make up the human body.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-accent selection:text-white">
      {/* ─── NAVIGATION ─── */}
      <nav className="w-full px-6 py-8 md:px-12 md:py-12 flex justify-between items-start">
        <div className="font-display font-black text-xl tracking-tight leading-none uppercase">
          The Living <br/>
          Body Atlas.
        </div>
        <div className="flex gap-8 text-sm font-medium tracking-wide">
          <Link to="/explore" className="hover:text-accent transition-colors duration-300">Atlas</Link>
          <Link to="/symptoms" className="hover:text-accent transition-colors duration-300">Intake</Link>
          <Link to="/library" className="hover:text-accent transition-colors duration-300">Index</Link>
        </div>
      </nav>

      {/* ─── EDITORIAL HERO ─── */}
      <header className="px-6 md:px-12 pt-12 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-display font-light text-[clamp(3rem,8vw,8rem)] leading-[0.9] tracking-tight text-charcoal dark:text-bone">
              Inside the <br/>
              <span className="italic font-normal">Machine.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 pb-4">
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
              Thirty-seven trillion cells working in absolute silence. 
              We mapped the organs, cataloged the diseases, and documented the myths. 
              Start reading the manual you were never given.
            </p>
            <div className="mt-8">
              <Link 
                to="/explore" 
                className="group inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest border-b-2 border-charcoal dark:border-bone pb-1 hover:border-accent hover:text-accent transition-all duration-300"
              >
                <span>Open the Atlas</span>
                <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ─── ASYMMETRICAL FEATURE SHOWCASE ─── */}
      <section className="px-6 md:px-12 py-24 bg-muted text-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            
            {/* Feature 1 (Offset down) */}
            <div className="md:mt-32 space-y-6">
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">01 — The Map</span>
              <h2 className="font-display text-4xl md:text-5xl">Anatomy, unlayered.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                We didn't build a floating hologram. We built a precise 2D vector map of the human body. Switch between structural facts, personal health data, and common medical myths with a single click.
              </p>
              <div className="pt-8">
                <div className="aspect-[4/3] bg-bone border border-border p-8 flex items-center justify-center">
                  <span className="font-display italic text-2xl text-muted-foreground">Illustration Placeholder</span>
                </div>
              </div>
            </div>

            {/* Feature 2 (Offset up) */}
            <div className="space-y-6">
              <div className="mb-8 aspect-square bg-charcoal text-bone p-8 flex items-end">
                <span className="font-display italic text-2xl text-muted-foreground">Illustration Placeholder</span>
              </div>
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">02 — The Diagnostics</span>
              <h2 className="font-display text-4xl md:text-5xl">Clinical intake, digitized.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Stop googling symptoms. Our intake form acts as a strict triage nurse—analyzing your inputs against a documented database of 50+ common ailments to provide clarity, not panic.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─── TYPOGRAPHY FOCUSED DATA SECTION ─── */}
      <section className="px-6 md:px-12 py-32 max-w-7xl mx-auto">
        <div className="border-t-2 border-charcoal dark:border-bone pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h3 className="font-display text-2xl mb-4">By the numbers</h3>
              <p className="text-muted-foreground">The scale of the human body is difficult to comprehend. We prefer to look at the hard data.</p>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-2">
                <div className="font-display text-4xl md:text-5xl text-accent">206</div>
                <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Bones</div>
              </div>
              <div className="space-y-2">
                <div className="font-display text-4xl md:text-5xl text-accent">60k</div>
                <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Miles of blood vessels</div>
              </div>
              <div className="space-y-2">
                <div className="font-display text-4xl md:text-5xl text-accent">86B</div>
                <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Neurons</div>
              </div>
              <div className="space-y-2">
                <div className="font-display text-4xl md:text-5xl text-accent">1</div>
                <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Vessel</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="px-6 md:px-12 py-12 border-t border-border mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="font-display font-black uppercase text-xl">The Living Body Atlas.</div>
        <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
          © {new Date().getFullYear()} — Designed for Humans.
        </div>
      </footer>
    </div>
  );
}

