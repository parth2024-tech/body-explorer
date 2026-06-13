import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { BODY_PARTS, type BodyPart } from "@/data/content";

type Status = "sore" | "stiff" | "energized" | "neutral" | "recovering" | "great";

interface DiaryEntry {
  date: string;
  zone: string;
  status: Status;
  note?: string;
}

const STATUS_OPTIONS: { id: Status; label: string; emoji: string; color: string }[] = [
  { id: "sore", label: "Sore", emoji: "😣", color: "#E54D4D" },
  { id: "stiff", label: "Stiff", emoji: "🪵", color: "#F5A623" },
  { id: "energized", label: "Energized", emoji: "⚡", color: "#00E5C4" },
  { id: "neutral", label: "Neutral", emoji: "😐", color: "#8B8FA3" },
  { id: "recovering", label: "Recovering", emoji: "🩹", color: "#6B4FA0" },
  { id: "great", label: "Great", emoji: "✨", color: "#4DC8E5" },
];

const STORAGE_KEY = "atlas-diary-entries";

function loadEntries(): DiaryEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveEntries(entries: DiaryEntry[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

function getToday() {
  return new Date().toISOString().split("T")[0];
}

export const Route = createFileRoute("/diary")({
  head: () => ({
    meta: [
      { title: "Body Diary — The Living Body Atlas" },
      { name: "description", content: "Track how your body feels daily. Log check-ins, see patterns emerge over 30 days." },
    ],
  }),
  component: DiaryPage,
});

function DiaryPage() {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  const [selectedZone, setSelectedZone] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<Status | null>(null);
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setEntries(loadEntries());
  }, []);

  const todayEntry = entries.find((e) => e.date === getToday());
  const last30Days = getLast30Days(entries);

  const handleSave = () => {
    if (!selectedZone || !selectedStatus) return;
    const entry: DiaryEntry = {
      date: getToday(),
      zone: selectedZone,
      status: selectedStatus,
      note: note.trim() || undefined,
    };
    const updated = entries.filter((e) => e.date !== getToday());
    updated.push(entry);
    setEntries(updated);
    saveEntries(updated);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const selectedPart = selectedZone ? BODY_PARTS.find((p) => p.id === selectedZone) : null;

  return (
    <main className="mx-auto max-w-4xl px-5 pb-24 pt-10">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold md:text-4xl">
          <span className="gradient-text-amber">Body Diary</span>
        </h1>
        <p className="mt-2 text-sm text-[#8B8FA3]">
          How does your body feel today? Log it in under 20 seconds.
        </p>
      </motion.div>

      {/* Check-in card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="diary-card mt-8 p-6"
      >
        {todayEntry && !saved ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-3">
              {STATUS_OPTIONS.find((s) => s.id === todayEntry.status)?.emoji}
            </div>
            <p className="text-lg font-semibold text-[#F5A623]">Already checked in today!</p>
            <p className="mt-1 text-sm text-[#8B8FA3]">
              {BODY_PARTS.find((p) => p.id === todayEntry.zone)?.name} — {todayEntry.status}
            </p>
            {todayEntry.note && (
              <p className="mt-2 text-xs text-[#8B8FA3] italic">"{todayEntry.note}"</p>
            )}
          </div>
        ) : (
          <>
            {/* Step 1: Pick a zone */}
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F5A623]">
              1. What part of your body?
            </h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {BODY_PARTS.filter((p) => !["frontal-lobe", "temporal-lobe", "skin", "bones"].includes(p.id)).map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedZone(p.id)}
                  className={`status-pill ${selectedZone === p.id ? "status-pill--active" : ""}`}
                >
                  {p.emoji} {p.name}
                </button>
              ))}
            </div>

            {/* Step 2: Status */}
            <AnimatePresence>
              {selectedZone && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6"
                >
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F5A623]">
                    2. How does your {selectedPart?.name?.toLowerCase()} feel?
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {STATUS_OPTIONS.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setSelectedStatus(s.id)}
                        className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition-all ${
                          selectedStatus === s.id
                            ? "border-[#F5A623]/40 bg-[#F5A623]/10 text-[#F5A623]"
                            : "border-[#1E2844] bg-[#0A0E1A]/60 text-[#8B8FA3] hover:border-[#F5A623]/20"
                        }`}
                      >
                        <span className="mr-1.5">{s.emoji}</span>
                        {s.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Step 3: Note + Save */}
            <AnimatePresence>
              {selectedStatus && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6"
                >
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F5A623]">
                    3. Any notes? (optional)
                  </h3>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="How it happened, what helped, any patterns you notice..."
                    className="explain-input mt-3 min-h-[80px]"
                    style={{ borderColor: "rgba(245, 166, 35, 0.15)" }}
                  />
                  <button
                    onClick={handleSave}
                    className="btn-hover-grow mt-4 w-full rounded-xl bg-[#F5A623] py-3 text-sm font-bold text-[#0A0E1A] shadow-[0_0_20px_rgba(245,166,35,0.3)]"
                  >
                    ✓ Log Today's Check-in
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {saved && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-4 rounded-xl bg-[#00E5C4]/10 border border-[#00E5C4]/30 p-4 text-center"
              >
                <span className="text-[#00E5C4] font-semibold">✓ Logged!</span>
              </motion.div>
            )}
          </>
        )}
      </motion.div>

      {/* 30-day Heatmap */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10"
      >
        <h2 className="text-xl font-bold">Your 30-Day Pattern</h2>
        <p className="mt-1 text-xs text-[#8B8FA3]">
          Patterns emerge when you check in consistently. Each cell = one day.
        </p>

        <div className="mt-4 grid grid-cols-10 gap-1.5">
          {last30Days.map((day, i) => {
            const statusMeta = day.entry
              ? STATUS_OPTIONS.find((s) => s.id === day.entry!.status)
              : null;
            return (
              <div
                key={i}
                className="heatmap-cell group relative aspect-square rounded"
                style={{
                  backgroundColor: statusMeta
                    ? statusMeta.color + "33"
                    : "rgba(30, 40, 68, 0.4)",
                  border: day.isToday
                    ? "1px solid rgba(245, 166, 35, 0.5)"
                    : "1px solid transparent",
                }}
                title={`${day.date}${day.entry ? ` — ${day.entry.zone}: ${day.entry.status}` : ""}`}
              >
                {statusMeta && (
                  <span className="absolute inset-0 flex items-center justify-center text-[8px]">
                    {statusMeta.emoji}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-3 flex flex-wrap gap-3 text-[10px] text-[#8B8FA3]">
          {STATUS_OPTIONS.map((s) => (
            <span key={s.id} className="flex items-center gap-1">
              <span
                className="inline-block h-2 w-2 rounded-sm"
                style={{ backgroundColor: s.color + "55" }}
              />
              {s.label}
            </span>
          ))}
        </div>
      </motion.div>
    </main>
  );
}

function getLast30Days(entries: DiaryEntry[]) {
  const today = new Date();
  const days = [];
  for (let i = 29; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split("T")[0];
    days.push({
      date: dateStr,
      isToday: i === 0,
      entry: entries.find((e) => e.date === dateStr) || null,
    });
  }
  return days;
}
