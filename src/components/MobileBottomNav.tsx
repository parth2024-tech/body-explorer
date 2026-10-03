import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useBodyStore } from "@/store/useBodyStore";
import { TRANSLATIONS } from "@/data/content";
import {
  Compass,
  Activity,
  BookOpen,
  AlertCircle,
  Menu,
  X,
  Sparkles,
  ShieldAlert,
  FileText,
  PhoneCall,
  CheckCircle2,
  Info,
  Apple,
} from "lucide-react";

export function MobileBottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { language, setLanguage } = useBodyStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when pathname changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const t = (key: keyof typeof TRANSLATIONS.en) => {
    const dict = TRANSLATIONS[language] || TRANSLATIONS.en;
    return (dict as Record<string, string>)[key] || (TRANSLATIONS.en as Record<string, string>)[key] || key;
  };

  const navItems = [
    {
      to: "/explore",
      label: language === "hi" ? "मानचित्र" : "Atlas",
      icon: Compass,
      activeColor: "text-[#00E5C4]",
      badgeColor: "bg-[#00E5C4]",
    },
    {
      to: "/symptoms",
      label: language === "hi" ? "लक्षण" : "Symptoms",
      icon: Activity,
      activeColor: "text-[#FC3D21]",
      badgeColor: "bg-[#FC3D21]",
    },
    {
      to: "/library",
      label: language === "hi" ? "लाइब्रेरी" : "Library",
      icon: BookOpen,
      activeColor: "text-[#00E5C4]",
      badgeColor: "bg-[#00E5C4]",
    },
    {
      to: "/emergency",
      label: language === "hi" ? "आपातकाल" : "SOS",
      icon: AlertCircle,
      activeColor: "text-red-500",
      badgeColor: "bg-red-500",
      isEmergency: true,
    },
  ];

  const secondaryLinks = [
    {
      to: "/food",
      title: language === "hi" ? "भोजन और पोषण स्तर" : "Food & Nutrition Levels",
      subtitle: language === "hi" ? "4-स्तरीय वर्गीकरण, पोषक नियम और तालमेल" : "4-level food spectrum, metabolic hacks & targets",
      icon: Apple,
      color: "text-teal-400",
      bg: "bg-teal-400/10",
      border: "border-teal-400/20",
    },
    {
      to: "/facts",
      title: language === "hi" ? "तथ्य और मिथक" : "Facts & Myths",
      subtitle: language === "hi" ? "290+ सत्यापित शारीरिक तथ्य" : "290+ verified physiological facts",
      icon: Sparkles,
      color: "text-amber-400",
      bg: "bg-amber-400/10",
      border: "border-amber-400/20",
    },
    {
      to: "/food-labels",
      title: language === "hi" ? "खाद्य लेबल डिकोडर" : "Food Label Decoder",
      subtitle: language === "hi" ? "छिपे हुए योजक और शर्करा पहचानें" : "Uncover hidden additives and sugars",
      icon: CheckCircle2,
      color: "text-teal-400",
      bg: "bg-teal-400/10",
      border: "border-teal-400/20",
    },
    {
      to: "/grey-market",
      title: language === "hi" ? "पूरक सुरक्षा" : "Supplement Safety",
      subtitle: language === "hi" ? "बाजार जोखिम और प्रमाण समीक्षा" : "Market risk and evidence rating",
      icon: ShieldAlert,
      color: "text-rose-400",
      bg: "bg-rose-400/10",
      border: "border-rose-400/20",
    },
    {
      to: "/about",
      title: language === "hi" ? "हमारे बारे में" : "Clinical Philosophy",
      subtitle: language === "hi" ? "चिकित्सा पद्धति और समीक्षा बोर्ड" : "Medical governance and review board",
      icon: Info,
      color: "text-sky-400",
      bg: "bg-sky-400/10",
      border: "border-sky-400/20",
    },
    {
      to: "/privacy",
      title: language === "hi" ? "गोपनीयता नीति" : "Privacy Protocol",
      subtitle: language === "hi" ? "शून्य-ट्रैकिंग और स्थानीय डेटा भंडारण" : "Zero-tracking, local-only data storage",
      icon: FileText,
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "border-purple-400/20",
    },
    {
      to: "/terms",
      title: language === "hi" ? "उपयोग की शर्तें" : "Terms of Care",
      subtitle: language === "hi" ? "चिकित्सा अस्वीकरण और जिम्मेदार उपयोग" : "Medical disclaimer and usage bounds",
      icon: FileText,
      color: "text-[#8A8F98]",
      bg: "bg-white/5",
      border: "border-white/10",
    },
  ];

  return (
    <>
      {/* Mobile Bottom Navigation Bar */}
      <nav
        aria-label="Mobile Navigation"
        className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#070A12]/95 border-t border-[#1E2844] backdrop-blur-xl pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_24px_rgba(0,0,0,0.6)]"
      >
        <div className="grid grid-cols-5 h-16 items-center px-2">
          {navItems.map((item) => {
            const isActive = pathname === item.to;
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className="flex flex-col items-center justify-center min-h-[48px] py-1 text-center relative group"
              >
                {isActive && (
                  <motion.div
                    layoutId="mobile-nav-active"
                    className={`absolute -top-px left-3 right-3 h-0.5 ${item.badgeColor} rounded-full`}
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <div className="relative">
                  <Icon
                    className={`w-5 h-5 transition-colors ${
                      isActive
                        ? item.activeColor
                        : item.isEmergency
                          ? "text-red-400/90"
                          : "text-[#8A8F98] group-hover:text-[#EAEAEA]"
                    }`}
                  />
                  {item.isEmergency && !isActive && (
                    <span className="absolute -top-1 -right-1 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                    </span>
                  )}
                </div>
                <span
                  className={`text-[10px] font-medium tracking-tight mt-1 transition-colors ${
                    isActive
                      ? "text-white font-semibold"
                      : item.isEmergency
                        ? "text-red-400/90 font-semibold"
                        : "text-[#8A8F98]"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}

          {/* More menu trigger button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open More Menu"
            aria-expanded={isMenuOpen}
            className="flex flex-col items-center justify-center min-h-[48px] py-1 text-center relative group"
          >
            <Menu className="w-5 h-5 text-[#8A8F98] group-hover:text-[#EAEAEA] transition-colors" />
            <span className="text-[10px] font-medium tracking-tight mt-1 text-[#8A8F98]">
              {language === "hi" ? "अधिक" : "More"}
            </span>
          </button>
        </div>
      </nav>

      {/* Slide-up Drawer for Secondary Navigation & Tools */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Sheet Content */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 32 }}
              className="relative w-full rounded-t-[2rem] border-t border-[#1E2844] bg-[#0A0E1A] p-5 max-h-[85vh] overflow-y-auto pb-[calc(env(safe-area-inset-bottom)+1.5rem)] shadow-2xl flex flex-col"
            >
              {/* Drawer Handle */}
              <div className="mx-auto h-1.5 w-12 rounded-full bg-white/20 mb-4 shrink-0" />

              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#1E2844] mb-4">
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {language === "hi" ? "अतिरिक्त मॉड्यूल और टूल्स" : "Modules & Settings"}
                  </h3>
                  <p className="text-xs text-[#8A8F98]">
                    {language === "hi" ? "सत्यापित स्वास्थ्य संसाधन" : "Verified health resources"}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#8A8F98] hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Emergency Call Quick Banner */}
              <div className="mb-4 rounded-2xl border border-red-500/30 bg-red-500/10 p-3.5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500 text-white font-bold">
                    <PhoneCall className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-red-400 block uppercase tracking-wider">
                      {language === "hi" ? "आपातकालीन एम्बुलेंस" : "Emergency Ambulance"}
                    </span>
                    <span className="text-sm font-bold text-white">112 / 108</span>
                  </div>
                </div>
                <a
                  href="tel:112"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-red-500 px-4 text-xs font-bold text-white shadow-lg shadow-red-500/30 hover:bg-red-600 transition-colors"
                >
                  {language === "hi" ? "कॉल करें" : "Call Now"}
                </a>
              </div>

              {/* Language Switcher */}
              <div className="mb-5 rounded-2xl border border-white/10 bg-white/[0.02] p-3 flex items-center justify-between">
                <span className="text-xs font-medium text-[#8A8F98]">
                  {language === "hi" ? "भाषा चुनें" : "Language"}
                </span>
                <div className="flex gap-1.5 bg-[#141826] rounded-xl p-1 border border-white/10">
                  <button
                    type="button"
                    onClick={() => setLanguage("en")}
                    className={`min-h-[38px] px-4 rounded-lg text-xs font-bold transition-all ${
                      language === "en"
                        ? "bg-[#FC3D21] text-white shadow-md"
                        : "text-[#8A8F98] hover:text-white"
                    }`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage("hi")}
                    className={`min-h-[38px] px-4 rounded-lg text-xs font-bold transition-all ${
                      language === "hi"
                        ? "bg-[#FC3D21] text-white shadow-md"
                        : "text-[#8A8F98] hover:text-white"
                    }`}
                  >
                    हिंदी
                  </button>
                </div>
              </div>

              {/* Navigation Grid */}
              <div className="space-y-2.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A8F98] block px-1">
                  {language === "hi" ? "अन्य पृष्ठ" : "Explore More"}
                </span>
                {secondaryLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-3.5 rounded-2xl border border-white/5 bg-white/[0.02] p-3.5 hover:bg-white/[0.06] hover:border-white/15 transition-all min-h-[56px]"
                    >
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${link.border} ${link.bg} ${link.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="block text-sm font-semibold text-white truncate">
                          {link.title}
                        </span>
                        <span className="block text-xs text-[#8A8F98] truncate">
                          {link.subtitle}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
