import { Link, useRouterState } from "@tanstack/react-router";

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const link = (to: string, label: string) => (
    <Link
      to={to}
      className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
        pathname === to
          ? "bg-primary/15 text-primary"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-20 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link to="/" className="group flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/15 text-primary glow-border-violet">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v20M5 8c3 0 4 2 7 2s4-2 7-2M5 16c3 0 4-2 7-2s4 2 7 2" />
            </svg>
          </span>
          <span className="text-base font-semibold tracking-tight">
            Body<span className="gradient-text">Lab</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          {link("/", "Home")}
          {link("/explore", "Explore")}
          {link("/about", "About")}
        </nav>
      </div>
    </header>
  );
}
