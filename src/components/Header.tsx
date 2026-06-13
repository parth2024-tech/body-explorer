import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useBodyStore } from "@/store/useBodyStore";
import { TRANSLATIONS } from "@/data/content";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { to: "/explore", labelKey: "explore" as const, code: "XPL-01" },
  { to: "/library", labelKey: "library" as const, code: "LIB-02" },
  { to: "/symptoms", labelKey: "symptoms" as const, code: "SYM-03" },
  { to: "/emergency", labelKey: "emergency" as const, code: "EMG-04" },
  { to: "/facts", labelKey: "facts" as const, code: "FCT-05" },
  { to: "/diary", labelKey: "diary" as const, code: "DRY-06" },
  { to: "/daily", labelKey: "daily" as const, code: "DLY-07" },
  { to: "/quest", labelKey: "quest" as const, code: "QST-08" },
];

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { language, setLanguage } = useBodyStore();
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const t = (key: keyof typeof TRANSLATIONS.en) => {
    const dict = TRANSLATIONS[language] || TRANSLATIONS.en;
    return (dict as any)[key] || (TRANSLATIONS.en as any)[key] || key;
  };

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }));
      setDate(now.toLocaleDateString("en-US", { year: "numeric", month: "2-digit", day: "2-digit" }).replace(/\//g, "-"));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[#222222] bg-[#030303]/95 backdrop-blur-md">
      {/* Top status bar */}
      <div className="border-b border-[#222222] px-5 py-1 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#FC3D21] font-bold">
            SYS / ACTIVE
          </span>
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FC3D21] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FC3D21]" />
            </span>
            <span className="font-mono text-[9px] text-[#8A8F98] tracking-[0.15em]">NOMINAL</span>
          </span>
          <span className="hidden sm:inline font-mono text-[9px] text-[#8A8F98] tracking-[0.15em]">
            VER 2.0.1
          </span>
        </div>

        <div className="flex items-center gap-5">
          <span className="hidden md:flex items-center gap-2 font-mono text-[9px] text-[#8A8F98] tracking-[0.15em]">
            <span className="text-[#FC3D21]">UTC</span>
            <span>{time}</span>
          </span>
          <span className="hidden sm:flex font-mono text-[9px] text-[#8A8F98] tracking-[0.15em]">
            {date}
          </span>

          {/* i18n Selector */}
          <div className="flex items-center gap-0.5 border border-[#222222]">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-0.5 font-mono text-[9px] font-bold tracking-[0.15em] transition-all uppercase ${
                language === "en"
                  ? "bg-[#FC3D21] text-white"
                  : "text-[#8A8F98] hover:text-[#EAEAEA]"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("hi")}
              className={`px-2.5 py-0.5 font-mono text-[9px] font-bold tracking-[0.15em] transition-all uppercase ${
                language === "hi"
                  ? "bg-[#FC3D21] text-white"
                  : "text-[#8A8F98] hover:text-[#EAEAEA]"
              }`}
            >
              HI
            </button>
          </div>
        </div>
      </div>

      {/* Main header bar */}
      <div className="mx-auto flex flex-col md:flex-row md:items-center justify-between gap-0 px-5 max-w-7xl">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3 py-3 md:py-4 border-r border-[#222222] md:pr-6">
          <div className="relative flex h-8 w-8 items-center justify-center border border-[#FC3D21]/60 group-hover:border-[#FC3D21] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FC3D21" strokeWidth="2" strokeLinecap="square">
              <path d="M12 2v20M5 8c3 0 4 2 7 2s4-2 7-2M5 16c3 0 4-2 7-2s4 2 7 2" />
            </svg>
            {/* Corner decorations */}
            <span className="absolute -top-px -left-px h-1.5 w-1.5 border-t border-l border-[#FC3D21]" />
            <span className="absolute -bottom-px -right-px h-1.5 w-1.5 border-b border-r border-[#FC3D21]" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-[8px] font-bold tracking-[0.25em] text-[#FC3D21] uppercase">
              NASA · HBA · 2024
            </span>
            <span className="font-display text-sm font-bold tracking-[0.08em] text-[#EAEAEA] uppercase leading-tight">
              Body Atlas
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-0 overflow-x-auto scrollbar-none -mx-5 px-5 md:mx-0 md:px-0 md:flex-1 md:pl-4">
          {NAV_LINKS.map(({ to, labelKey, code }) => {
            const isActive = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`relative flex flex-col items-center px-3 py-3 md:py-4 text-center transition-all whitespace-nowrap border-r border-[#222222] group ${
                  isActive
                    ? "bg-[#FC3D21]/8"
                    : "hover:bg-[#EAEAEA]/3"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FC3D21]"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <span className={`font-mono text-[8px] tracking-[0.15em] mb-0.5 transition-colors ${
                  isActive ? "text-[#FC3D21]" : "text-[#8A8F98]/60 group-hover:text-[#8A8F98]"
                }`}>
                  {code}
                </span>
                <span className={`font-display text-[10px] lg:text-xs font-bold uppercase tracking-[0.1em] transition-colors ${
                  isActive ? "text-[#EAEAEA]" : "text-[#8A8F98] group-hover:text-[#EAEAEA]"
                }`}>
                  {t(labelKey)}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* System readout — right side */}
        <div className="hidden xl:flex flex-col items-end border-l border-[#222222] pl-5 py-3 gap-0.5 shrink-0">
          <span className="font-mono text-[8px] tracking-[0.2em] text-[#8A8F98] uppercase">MISSION STATUS</span>
          <span className="font-mono text-[10px] font-bold text-[#FC3D21] tracking-[0.1em]">OPERATIONAL</span>
        </div>
      </div>
    </header>
  );
}
