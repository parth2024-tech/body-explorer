import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useBodyStore } from "@/store/useBodyStore";
import { TRANSLATIONS } from "@/data/content";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { to: "/explore", labelKey: "explore" as const, code: "XPL-01" },
  { to: "/food", labelKey: "food" as const, code: "NTR-02" },
  { to: "/library", labelKey: "library" as const, code: "LIB-03" },
  { to: "/emergency", labelKey: "emergency" as const, code: "EMG-05" },
  { to: "/facts", labelKey: "facts" as const, code: "FCT-06" },
  { to: "/food-labels", labelKey: "foodLabels" as const, code: "FL-10" },
  { to: "/grey-market", labelKey: "greyMarket" as const, code: "GM-09" },
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
      {/* Desktop Top Bar */}
      <div className="hidden md:flex border-b border-[#222222] px-5 py-2 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-medium text-xs text-[#8A8F98]">
            Interactive Health Education
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="flex text-xs text-[#8A8F98]">
            {date}
          </span>

          {/* i18n Selector for Desktop */}
          <div className="flex items-center gap-1 bg-[#141826] rounded-full p-1 border border-[#222222]">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                language === "en"
                  ? "bg-[#FC3D21] text-white"
                  : "text-[#8A8F98] hover:text-[#EAEAEA]"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage("hi")}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                language === "hi"
                  ? "bg-[#FC3D21] text-white"
                  : "text-[#8A8F98] hover:text-[#EAEAEA]"
              }`}
            >
              हिंदी
            </button>
          </div>
        </div>
      </div>

      {/* Main header bar */}
      <div className="mx-auto flex items-center justify-between gap-0 px-4 md:px-5 max-w-7xl">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3 py-2.5 md:py-4 md:border-r border-[#222222] md:pr-6">
          <div className="relative flex h-8 w-8 items-center justify-center border border-[#FC3D21]/60 group-hover:border-[#FC3D21] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FC3D21" strokeWidth="2" strokeLinecap="square">
              <path d="M12 2v20M5 8c3 0 4 2 7 2s4-2 7-2M5 16c3 0 4-2 7-2s4 2 7 2" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base md:text-lg font-bold text-[#EAEAEA] leading-tight">
              Body Atlas
            </span>
            <span className="text-[9px] md:text-[10px] font-medium text-[#8A8F98] uppercase tracking-wider">
              Explore your biology
            </span>
          </div>
        </Link>

        {/* Mobile-only Quick Controls: Emergency Dial & Compact Language */}
        <div className="flex md:hidden items-center gap-2">
          {/* Quick Emergency Dial Button */}
          <a
            href="tel:112"
            aria-label="Call Emergency 112"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500/15 border border-red-500/40 text-red-400 text-xs font-bold transition-transform active:scale-95"
          >
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            <span>112 SOS</span>
          </a>

          {/* Compact Language Toggle */}
          <button
            type="button"
            onClick={() => setLanguage(language === "en" ? "hi" : "en")}
            className="flex items-center justify-center h-8 px-2.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-[#EAEAEA] active:scale-95 transition-all"
            aria-label="Toggle language"
          >
            {language === "en" ? "हिं" : "EN"}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-0 overflow-x-auto scrollbar-none md:flex-1 md:pl-4">
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
                <span className={`text-sm font-medium transition-colors ${
                  isActive ? "text-[#EAEAEA]" : "text-[#8A8F98] group-hover:text-[#EAEAEA]"
                }`}>
                  {t(labelKey)}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop right side */}
        <div className="hidden xl:flex items-center border-l border-[#222222] pl-5 py-3 shrink-0">
          <span className="text-sm font-medium text-[#00E5C4]">
            Ready to learn
          </span>
        </div>
      </div>
    </header>
  );
}
