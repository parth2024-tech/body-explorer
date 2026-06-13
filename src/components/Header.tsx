import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useBodyStore } from "@/store/useBodyStore";
import { TRANSLATIONS } from "@/data/content";

const NAV_LINKS = [
  { to: "/", labelKey: "home" as const },
  { to: "/explore", labelKey: "explore" as const },
  { to: "/library", labelKey: "library" as const },
  { to: "/symptoms", labelKey: "symptoms" as const },
  { to: "/emergency", labelKey: "emergency" as const },
  { to: "/tools", labelKey: "tools" as const },
  { to: "/diary", labelKey: "diary" as const },
  { to: "/daily", labelKey: "daily" as const },
  { to: "/quest", labelKey: "quest" as const },
  { to: "/explain", labelKey: "explainThis" as const },
];

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { language, setLanguage } = useBodyStore();

  const t = (key: keyof typeof TRANSLATIONS.en) => {
    const dict = TRANSLATIONS[language] || TRANSLATIONS.en;
    return (dict as any)[key] || (TRANSLATIONS.en as any)[key] || key;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-[#0A0E1A]/90 backdrop-blur-xl">
      <div className="mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4 px-5 py-3 max-w-7xl">
        {/* Logo and Language switcher */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/" className="group flex items-center gap-2.5">
            <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-[#00E5C4]/10 text-[#00E5C4] transition-all group-hover:bg-[#00E5C4]/20 group-hover:shadow-[0_0_20px_rgba(0,229,196,0.3)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 2v20M5 8c3 0 4 2 7 2s4-2 7-2M5 16c3 0 4-2 7-2s4 2 7 2" />
              </svg>
              <span className="absolute inset-0 rounded-xl bg-[#00E5C4]/5 blur-md" />
            </span>
            <span className="text-base font-bold tracking-tight">
              <span className="text-[#E8E0D5]">Living Body</span>
              <span className="gradient-text ml-0.5">Atlas</span>
            </span>
          </Link>

          {/* i18n Selector Toggle */}
          <div className="flex items-center gap-1.5 ml-4 bg-[#141826]/60 p-0.5 rounded-lg border border-border/60">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                language === "en"
                  ? "bg-[#00E5C4] text-[#0A0E1A] shadow-[0_0_10px_rgba(0,229,196,0.3)]"
                  : "text-[#8B8FA3] hover:text-[#E8E0D5]"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("hi")}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                language === "hi"
                  ? "bg-[#00E5C4] text-[#0A0E1A] shadow-[0_0_10px_rgba(0,229,196,0.3)]"
                  : "text-[#8B8FA3] hover:text-[#E8E0D5]"
              }`}
            >
              हिं
            </button>
          </div>
        </div>

        {/* Navigation scrollable container for mobile */}
        <nav className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0 scrollbar-none -mx-5 px-5 md:mx-0 md:px-0">
          {NAV_LINKS.map(({ to, labelKey }) => {
            const isActive = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`relative rounded-full px-3 py-1.5 text-xs lg:text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive
                    ? "text-[#00E5C4]"
                    : "text-[#8B8FA3] hover:text-[#E8E0D5]"
                }`}
              >
                {t(labelKey)}
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-[#00E5C4]/10 border border-[#00E5C4]/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
