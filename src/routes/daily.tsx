import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { getDailyInsight, getBodyPart } from "@/data/content";

const STREAK_KEY = "atlas-streak";
const STREAK_LOG_KEY = "atlas-streak-log";

interface StreakData {
  current: number;
  lastDate: string;
  longest: number;
}

function loadStreak(): StreakData {
  try {
    const raw = localStorage.getItem(STREAK_KEY);
    return raw ? JSON.parse(raw) : { current: 0, lastDate: "", longest: 0 };
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

function getToday() {
  return new Date().toISOString().split("T")[0];
}

export const Route = createFileRoute("/daily")({
  head: () => ({
    meta: [
      { title: "Daily Insight — The Living Body Atlas" },
      { name: "description", content: "One surprising fact. One 30-second action. Every day. Build your streak." },
    ],
  }),
  component: DailyPage,
});

function DailyPage() {
  const [streak, setStreak] = useState<StreakData>({ current: 0, lastDate: "", longest: 0 });
  const [streakLog, setStreakLog] = useState<number[]>([]);
  const [didIt, setDidIt] = useState(false);
  const shareRef = useRef<HTMLDivElement>(null);

  const insight = getDailyInsight();
  const bodyPart = getBodyPart(insight.bodyPartId);

  useEffect(() => {
    const s = loadStreak();
    const log = loadStreakLog();
    setStreak(s);
    setStreakLog(log);
    setDidIt(s.lastDate === getToday());
  }, []);

  const handleDidIt = () => {
    const today = getToday();
    if (streak.lastDate === today) return;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split("T")[0];

    const newCurrent = streak.lastDate === yesterdayStr ? streak.current + 1 : 1;
    const newLongest = Math.max(streak.longest, newCurrent);

    const newStreak: StreakData = {
      current: newCurrent,
      lastDate: today,
      longest: newLongest,
    };

    const newLog = [...streakLog.slice(-29), newCurrent];

    setStreak(newStreak);
    setStreakLog(newLog);
    setDidIt(true);

    localStorage.setItem(STREAK_KEY, JSON.stringify(newStreak));
    localStorage.setItem(STREAK_LOG_KEY, JSON.stringify(newLog));
  };

  const handleShare = async () => {
    if (!shareRef.current) return;
    try {
      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(shareRef.current, {
        backgroundColor: "#0A0E1A",
        scale: 2,
      });
      const url = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = `atlas-daily-${getToday()}.png`;
      link.href = url;
      link.click();
    } catch (err) {
      console.error("Share card generation failed:", err);
    }
  };

  // Streak waveform SVG
  const wavePoints = streakLog
    .map((val, i) => {
      const x = (i / Math.max(streakLog.length - 1, 1)) * 200;
      const y = 30 - Math.min(val, 30);
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-10">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold md:text-4xl">
              <span className="gradient-text">Daily Insight</span>
            </h1>
            <p className="mt-1 text-sm text-[#8B8FA3]">
              One fact. One action. Every day.
            </p>
          </div>

          {/* Streak counter */}
          <div className="text-right">
            <div className="stat-text text-2xl font-bold text-[#F5A623]">
              {streak.current}
            </div>
            <div className="text-[10px] uppercase tracking-wider text-[#8B8FA3]">
              day streak
            </div>
          </div>
        </div>

        {/* Streak waveform */}
        {streakLog.length > 1 && (
          <div className="mt-4 rounded-xl border border-[#1E2844] bg-[#141826]/40 p-3">
            <svg viewBox="0 0 200 35" className="w-full h-8">
              <polyline
                points={wavePoints}
                fill="none"
                stroke="#00E5C4"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="streak-line"
              />
            </svg>
          </div>
        )}
      </motion.div>

      {/* Share card (also used for screenshot) */}
      <motion.div
        ref={shareRef}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="share-card mt-8"
      >
        {/* Body part badge */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">{bodyPart?.emoji || "🧬"}</span>
          <div>
            <div className="text-xs uppercase tracking-wider text-[#8B8FA3]">
              Today's Focus
            </div>
            <div className="text-xl font-bold gradient-text">
              {bodyPart?.name || "Your Body"}
            </div>
          </div>
        </div>

        {/* The fact */}
        <p className="text-xl md:text-2xl font-bold leading-snug text-[#E8E0D5]" style={{ letterSpacing: "-0.02em" }}>
          {insight.fact}
        </p>

        {/* The action */}
        <div className="mt-6 rounded-xl border border-[#00E5C4]/20 bg-[#00E5C4]/5 p-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#00E5C4] font-semibold">
            <span>⚡</span> 
            Your {insight.actionDuration} action
          </div>
          <p className="mt-2 text-sm text-[#E8E0D5] leading-relaxed">
            {insight.action}
          </p>
        </div>

        {/* Streak badge on share card */}
        <div className="mt-4 flex items-center gap-2 text-xs text-[#8B8FA3]">
          <span className="stat-text text-[#F5A623] font-bold">{streak.current} day streak</span>
          <span>·</span>
          <span>The Living Body Atlas</span>
        </div>
      </motion.div>

      {/* Action buttons */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 flex gap-3"
      >
        <button
          onClick={handleDidIt}
          disabled={didIt}
          className={`btn-hover-grow flex-1 rounded-xl py-3.5 text-sm font-bold transition-all ${
            didIt
              ? "bg-[#00E5C4]/10 border border-[#00E5C4]/30 text-[#00E5C4] cursor-default"
              : "bg-[#00E5C4] text-[#0A0E1A] shadow-[0_0_30px_rgba(0,229,196,0.3)]"
          }`}
        >
          {didIt ? "✓ Done for today!" : "Did it ⚡"}
        </button>
        <button
          onClick={handleShare}
          className="btn-hover-grow rounded-xl border border-[#1E2844] bg-[#141826] px-6 py-3.5 text-sm font-semibold text-[#E8E0D5] hover:border-[#00E5C4]/30"
        >
          📸 Share
        </button>
      </motion.div>

      {/* Longest streak */}
      {streak.longest > 0 && (
        <div className="mt-6 text-center text-xs text-[#8B8FA3]">
          Longest streak: <span className="stat-text text-[#F5A623] font-semibold">{streak.longest} days</span>
        </div>
      )}
    </main>
  );
}
