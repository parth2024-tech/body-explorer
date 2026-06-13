import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { getDailyInsight, getBodyPart } from "@/data/content";

// --- Constants & Types ---
const STREAK_KEY = "atlas-streak";
const STREAK_LOG_KEY = "atlas-streak-log";

interface StreakData {
  current: number;
  lastDate: string;
  longest: number;
}

// --- Date Utilities ---
// Use local timezone to prevent streaks breaking due to UTC offsets
const getLocalToday = () => new Date().toLocaleDateString("en-CA"); // YYYY-MM-DD
const getLocalYesterday = () => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toLocaleDateString("en-CA");
};

// --- Storage Handlers ---
function loadStreak(): StreakData {
  try {
    const raw = localStorage.getItem(STREAK_KEY);
    if (!raw) return { current: 0, lastDate: "", longest: 0 };
    
    const parsed: StreakData = JSON.parse(raw);
    const today = getLocalToday();
    const yesterday = getLocalYesterday();

    // STRICT VALIDATION: If the last date isn't today and isn't yesterday, the streak is broken.
    if (parsed.lastDate !== today && parsed.lastDate !== yesterday) {
      return { ...parsed, current: 0 }; // Reset current, keep longest & lastDate
    }
    return parsed;
  } catch {
    return { current: 0, lastDate: "", longest: 0 };
  }
}

function loadStreakLog(): number[] {
  try {
    const raw = localStorage.getItem(STREAK_LOG_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

// --- Route Definition ---
export const Route = createFileRoute("/daily")({
  head: () => ({
    meta: [
      { title: "Daily Insight — The Living Body Atlas" },
      { name: "description", content: "One surprising fact. One 30-second action. Every day. Build your streak." },
    ],
  }),
  component: DailyPage,
});

// --- Main Component ---
function DailyPage() {
  const [streak, setStreak] = useState<StreakData>({ current: 0, lastDate: "", longest: 0 });
  const [streakLog, setStreakLog] = useState<number[]>([]);
  const [didIt, setDidIt] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  
  const shareRef = useRef<HTMLDivElement>(null);

  // Memoize content to prevent unnecessary re-renders
  const insight = useMemo(() => getDailyInsight(), []);
  const bodyPart = useMemo(() => getBodyPart(insight.bodyPartId), [insight.bodyPartId]);

  useEffect(() => {
    const s = loadStreak();
    const log = loadStreakLog();
    setStreak(s);
    setStreakLog(log);
    setDidIt(s.lastDate === getLocalToday() && s.current > 0);
  }, []);

  const handleDidIt = useCallback(() => {
    const today = getLocalToday();
    if (streak.lastDate === today && streak.current > 0) return;

    const yesterday = getLocalYesterday();
    
    // If last date was yesterday, increment. Otherwise, start fresh at 1.
    const newCurrent = streak.lastDate === yesterday ? streak.current + 1 : 1;
    const newLongest = Math.max(streak.longest, newCurrent);

    const newStreak: StreakData = {
      current: newCurrent,
      lastDate: today,
      longest: newLongest,
    };

    // Keep log at max 30 days to prevent infinite array growth
    const newLog = [...streakLog.slice(-29), newCurrent];

    setStreak(newStreak);
    setStreakLog(newLog);
    setDidIt(true);

    localStorage.setItem(STREAK_KEY, JSON.stringify(newStreak));
    localStorage.setItem(STREAK_LOG_KEY, JSON.stringify(newLog));
  }, [streak, streakLog]);

  const handleShare = async () => {
    if (!shareRef.current || isSharing) return;
    setIsSharing(true);
    
    try {
      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(shareRef.current, {
        backgroundColor: "#030303",
        scale: 3, // High-res export
        useCORS: true,
        logging: false,
      });

      canvas.toBlob(async (blob) => {
        if (!blob) throw new Error("Canvas to Blob failed");
        
        const file = new File([blob], `atlas-daily-${getLocalToday()}.png`, { type: "image/png" });
        const shareData = {
          title: "My Daily Insight from The Living Body Atlas",
          files: [file],
        };

        // Try Native Mobile Share Sheet first
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share(shareData);
        } else {
          // Fallback to traditional download on Desktop
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.download = file.name;
          link.href = url;
          link.click();
          URL.revokeObjectURL(url);
        }
      }, "image/png");
    } catch (err) {
      console.error("Share card generation failed:", err);
      alert("Oops! Couldn't generate the share image. Please try again.");
    } finally {
      setIsSharing(false);
    }
  };

  // --- Advanced SVG Generation ---
  const { polylinePoints, areaPoints } = useMemo(() => {
    if (streakLog.length < 2) return { polylinePoints: "", areaPoints: "" };
    
    const maxVal = Math.max(...streakLog, 10); // Ensure some vertical headroom
    const points = streakLog.map((val, i) => {
      const x = (i / (streakLog.length - 1)) * 200;
      // Map value to Y coordinate (0 = bottom, maxVal = top)
      const y = 35 - (Math.min(val, maxVal) / maxVal) * 30; 
      return `${x},${y}`;
    });
    
    const lineStr = points.join(" ");
    // Close the path to create a gradient fill area
    const areaStr = `${lineStr} 200,35 0,35`;
    
    return { polylinePoints: lineStr, areaPoints: areaStr };
  }, [streakLog]);

  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-10">
      
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" as any }}
      >
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-3xl font-extrabold md:text-4xl">
              <span className="gradient-text">Daily Insight</span>
            </h1>
            <p className="mt-1.5 text-sm text-[#8A8F98] font-medium tracking-wide">
              One fact. One action. Every day.
            </p>
          </div>

          {/* Streak Counter */}
          <div className="text-right">
            <motion.div 
              key={streak.current} // Retriggers animation when streak changes
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.6 }}
              className="stat-text text-3xl font-black text-[#F5A623]"
            >
              {streak.current}
            </motion.div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-[#8A8F98]">
              day streak
            </div>
          </div>
        </div>

        {/* Upgraded Streak Waveform */}
        {streakLog.length > 1 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 rounded-xl border border-[#222222]/60 bg-[#0F0F0F]/40 p-4 shadow-inner relative overflow-hidden"
          >
            <span className="text-[10px] uppercase font-bold text-[#8A8F98] absolute top-3 left-4">30-Day Trend</span>
            <svg viewBox="0 0 200 35" className="w-full h-12 mt-4 overflow-visible">
              <defs>
                <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(252, 61, 33, 0.3)" />
                  <stop offset="100%" stopColor="rgba(252, 61, 33, 0)" />
                </linearGradient>
              </defs>
              <polygon points={areaPoints} fill="url(#waveGradient)" />
              <polyline
                points={polylinePoints}
                fill="none"
                stroke="#FC3D21"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="drop-shadow-[0_0_8px_rgba(252,61,33,0.5)]"
              />
              {/* Plot dot on the latest entry */}
              <circle 
                cx="200" 
                cy={polylinePoints.split(" ").pop()?.split(",")[1] || "35"} 
                r="3" 
                fill="#030303" 
                stroke="#FC3D21" 
                strokeWidth="2" 
              />
            </svg>
          </motion.div>
        )}
      </motion.div>

      {/* Share Card (Exportable Canvas Target) */}
      <motion.div
        ref={shareRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
        className="mt-8 rounded-2xl border border-border bg-[#0F0F0F] p-8 shadow-2xl relative overflow-hidden"
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FC3D21]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Body part badge */}
        <div className="flex items-center gap-4 mb-8 relative z-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#222222]/50 border border-border text-3xl">
            {bodyPart?.emoji || "🧬"}
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#8A8F98]">
              Today's Focus
            </div>
            <div className="text-xl font-extrabold text-[#EAEAEA]">
              {bodyPart?.name || "Your Body"}
            </div>
          </div>
        </div>

        {/* The fact */}
        <p className="text-2xl font-bold leading-relaxed text-[#EAEAEA] relative z-10" style={{ letterSpacing: "-0.01em" }}>
          {insight.fact}
        </p>

        {/* The action */}
        <div className="mt-8 rounded-xl border border-[#FC3D21]/20 bg-[#FC3D21]/10 p-5 relative z-10">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#FC3D21] font-bold">
            <motion.span 
              animate={{ rotate: [0, 15, -15, 0] }} 
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" as any }}
            >
              ⚡
            </motion.span> 
            Your {insight.actionDuration} action
          </div>
          <p className="mt-3 text-[15px] font-medium text-[#EAEAEA] leading-relaxed">
            {insight.action}
          </p>
        </div>

        {/* Branding & Streak badge on share card */}
        <div className="mt-6 flex items-center justify-between border-t border-border/40 pt-4 relative z-10">
          <div className="text-xs font-bold text-[#8A8F98] tracking-wide">
            THE LIVING BODY ATLAS
          </div>
          {streak.current > 0 && (
            <div className="flex items-center gap-1.5 rounded-full bg-[#F5A623]/10 px-3 py-1 text-xs font-bold text-[#F5A623] border border-[#F5A623]/20">
              🔥 {streak.current} Day Streak
            </div>
          )}
        </div>
      </motion.div>

      {/* Interactive Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 flex gap-4"
      >
        <motion.button
          whileHover={!didIt ? { scale: 1.02 } : {}}
          whileTap={!didIt ? { scale: 0.98 } : {}}
          onClick={handleDidIt}
          disabled={didIt}
          className={`flex-1 rounded-xl py-4 text-sm font-bold transition-all relative overflow-hidden ${
            didIt
              ? "bg-[#FC3D21]/10 border border-[#FC3D21]/30 text-[#FC3D21] cursor-default"
              : "bg-[#FC3D21] text-[#030303] shadow-[0_0_20px_rgba(252,61,33,0.2)] hover:shadow-[0_0_30px_rgba(252,61,33,0.4)]"
          }`}
        >
          <AnimatePresence mode="wait">
            {didIt ? (
              <motion.span key="done" initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center justify-center gap-2">
                <span>✓</span> Done for today!
              </motion.span>
            ) : (
              <motion.span key="do" exit={{ opacity: 0 }}>
                Did it ⚡
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
        
        <motion.button
          whileHover={!isSharing ? { scale: 1.02 } : {}}
          whileTap={!isSharing ? { scale: 0.98 } : {}}
          onClick={handleShare}
          disabled={isSharing}
          className="rounded-xl border border-[#222222] bg-[#0F0F0F] px-6 py-4 text-sm font-bold text-[#EAEAEA] hover:border-[#FC3D21]/50 transition-colors disabled:opacity-50 min-w-[120px] flex justify-center items-center gap-2"
        >
          {isSharing ? (
            <span className="h-4 w-4 rounded-full border-2 border-[#EAEAEA] border-t-transparent animate-spin" />
          ) : (
            <><span>📸</span> Share</>
          )}
        </motion.button>
      </motion.div>

      {/* Longest Streak Tracker */}
      {streak.longest > 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <span className="text-xs font-medium text-[#8A8F98] uppercase tracking-wider">
            All-time Best: <span className="text-[#F5A623] font-bold">{streak.longest} days</span>
          </span>
        </motion.div>
      )}
    </main>
  );
}
