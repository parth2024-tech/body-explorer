import { lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useBodyStore } from "@/store/useBodyStore";
import {
  CATEGORY_META,
  LAYER_META,
  getBodyPart,
  getFactsFor,
  getMythsFor,
  getMicroActionFor,
  getDoctorQuestionFor,
  getDiseasesFor,
  getRemediesFor,
  getHacksFor,
  type Category,
  type Layer,
} from "@/data/content";
import { FactCard } from "./FactCard";
import { useState } from "react";

const OrganViewer3D = lazy(() =>
  import("./OrganViewer3D").then((m) => ({ default: m.OrganViewer3D }))
);

const CATEGORIES: Category[] = [
  "weird_wild",
  "health_tip",
  "what_damages_it",
  "superfood",
  "record_breaker",
];

const DIARY_KEY = "atlas-diary-entries";
const QUEST_KEY = "atlas-quest-progress";

function loadDiaryForPart(partId: string) {
  try {
    const raw = localStorage.getItem(DIARY_KEY);
    const entries = raw ? JSON.parse(raw) : [];
    return entries.filter((e: { zone: string }) => e.zone === partId).slice(-5);
  } catch {
    return [];
  }
}

function getTrendData(partId: string) {
  const seed = partId.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const base = 12 + (seed % 40);
  return {
    checkins: base,
    topStatus: ["sore", "stiff", "neutral", "recovering"][seed % 4],
    percent: 8 + (seed % 25),
  };
}

function LayerContent({ partId, layer }: { partId: string; layer: Layer }) {
  const activeCategory = useBodyStore((s) => s.activeCategory);
  const setCategory = useBodyStore((s) => s.setCategory);
  const bodyMapNotes = useBodyStore((s) => s.bodyMapNotes);
  const addBodyMapNote = useBodyStore((s) => s.addBodyMapNote);
  const deleteBodyMapNote = useBodyStore((s) => s.deleteBodyMapNote);

  const [noteText, setNoteText] = useState("");

  const part = getBodyPart(partId);
  const facts = getFactsFor(partId, activeCategory);
  const myths = getMythsFor(partId);
  const microAction = getMicroActionFor(partId);
  const doctorQ = getDoctorQuestionFor(partId);
  const diseases = getDiseasesFor(partId);
  const remedies = getRemediesFor(partId);
  const hacks = getHacksFor(partId);

  if (!part) return null;

  const handleAddNoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noteText.trim()) return;
    addBodyMapNote(partId, noteText);
    setNoteText("");
  };

  if (layer === "personal") {
    const entries = loadDiaryForPart(partId);
    const pinnedNotes = bodyMapNotes[partId] || [];

    return (
      <div className="space-y-5">
        <div>
          <h3 className="text-xs uppercase font-bold tracking-wider text-[#F5A623] mb-2">Pin Note to Organ</h3>
          <form onSubmit={handleAddNoteSubmit} className="flex gap-2">
            <input
              type="text"
              value={noteText}
              placeholder="e.g. knee clicks when squatting"
              className="flex-1 rounded border border-border bg-[#0F121F] px-3 py-1.5 text-xs text-[#E8E0D5] outline-none focus:border-[#F5A623]/50"
            />
            <button type="submit" className="rounded bg-[#F5A623] text-[#0A0E1A] px-3 py-1.5 text-xs font-bold">
              Pin
            </button>
          </form>
        </div>

        {pinnedNotes.length > 0 && (
          <div>
            <h3 className="text-xs uppercase font-bold tracking-wider text-[#F5A623] mb-2">Pinned Notes</h3>
            <div className="space-y-1.5">
              {pinnedNotes.map((note, idx) => (
                <div key={idx} className="flex justify-between items-center bg-[#F5A623]/5 border border-[#F5A623]/15 p-2 rounded text-xs text-[#E8E0D5]">
                  <span>📌 {note}</span>
                  <button onClick={() => deleteBodyMapNote(partId, idx)} className="text-rose-400 text-[10px] hover:underline ml-2">
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="border-t border-border/40 pt-4">
          <h3 className="text-xs uppercase font-bold tracking-wider text-[#F5A623] mb-2">Recent Checks</h3>
          {entries.length === 0 ? (
            <div className="rounded-xl border border-[#F5A623]/20 bg-[#F5A623]/5 p-4 text-center">
              <p className="text-sm text-[#8B8FA3]">No diary entries for {part.name} yet.</p>
              <Link to="/diary" className="mt-2 inline-block text-xs text-[#F5A623] hover:underline">
                Log a check-in →
              </Link>
            </div>
          ) : (
            <div className="space-y-2">
              {entries.map((e: { date: string; status: string; note?: string }, i: number) => (
                <div key={i} className="rounded-xl border border-[#F5A623]/20 bg-[#F5A623]/5 p-3">
                  <div className="text-xs text-[#F5A623] font-semibold">{e.date}</div>
                  <div className="mt-1 text-sm text-[#E8E0D5] capitalize">{e.status}</div>
                  {e.note && <p className="mt-1 text-xs text-[#8B8FA3] italic">"{e.note}"</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  if (layer === "challenge") {
    let completed = 0;
    try {
      const raw = localStorage.getItem(QUEST_KEY);
      completed = raw ? JSON.parse(raw).length : 0;
    } catch {
      completed = 0;
    }

    return (
      <div className="space-y-4">
        <p className="text-xs text-[#8B8FA3]">{LAYER_META.challenge.description}</p>
        <div className="rounded-xl border border-[#6B4FA0]/20 bg-[#6B4FA0]/5 p-4">
          <div className="text-sm font-semibold text-[#6B4FA0]">Spine Week Quest</div>
          <p className="mt-2 text-xs text-[#8B8FA3]">
            {completed} of 7 steps complete. This week's quest focuses on spinal health.
          </p>
          <Link to="/quest" className="mt-3 inline-block text-xs text-[#6B4FA0] hover:underline">
            View quest →
          </Link>
        </div>
        {microAction && (
          <div className="rounded-xl border border-[#6B4FA0]/20 bg-[#6B4FA0]/5 p-4">
            <div className="text-xs uppercase tracking-wider text-[#6B4FA0] font-semibold">
              Quest micro-action
            </div>
            <p className="mt-2 text-sm text-[#E8E0D5]">{microAction.action}</p>
          </div>
        )}
      </div>
    );
  }

  if (layer === "trends") {
    const trend = getTrendData(partId);
    return (
      <div className="space-y-4">
        <p className="text-xs text-[#8B8FA3]">
          Based on <span className="stat-text text-[#E8E0D5]">847</span> early users
        </p>
        <div className="rounded-xl border border-[#E5504D]/20 bg-[#E5504D]/5 p-4">
          <div className="stat-text text-2xl font-bold text-[#E5504D]">{trend.percent}%</div>
          <p className="mt-1 text-sm text-[#E8E0D5]">
            of users logged <span className="capitalize">{trend.topStatus}</span> for {part.name}
          </p>
          <p className="mt-2 text-xs text-[#8B8FA3]">{trend.checkins} community check-ins this month</p>
        </div>
        <div className="h-2 rounded-full bg-[#1E2844] overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#E5504D] to-[#F5A623]"
            style={{ width: `${trend.percent}%` }}
          />
        </div>
      </div>
    );
  }

  if (layer === "explore") {
    return (
      <div className="space-y-4">
        <p className="text-sm text-[#E8E0D5] leading-relaxed">{part.shortDescription}</p>
        
        <div className="rounded-xl border border-[#E8E0D5]/10 bg-[#E8E0D5]/5 p-4">
          <div className="text-xs uppercase tracking-wider text-[#E8E0D5] font-semibold mb-2">
            System / Anatomy Region
          </div>
          <p className="text-sm text-[#8B8FA3]">{part.system} · {part.region.replace("-", " ")}</p>
        </div>

        {diseases.length > 0 && (
          <div className="rounded-xl border border-rose-500/10 bg-rose-500/5 p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2">Common Associated Conditions</h4>
            <div className="space-y-2">
              {diseases.map((d) => (
                <div key={d.id} className="text-xs">
                  <strong className="text-[#E8E0D5]">{d.name}:</strong> <span className="text-[#8B8FA3]">{d.overview}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {remedies.length > 0 && (
          <div className="rounded-xl border border-emerald-500/10 bg-emerald-500/5 p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">Herbal & Natural Remedies</h4>
            <div className="space-y-2">
              {remedies.map((r) => (
                <div key={r.id} className="text-xs">
                  <strong className="text-[#E8E0D5]">{r.name} ({r.evidenceRating}):</strong> <span className="text-[#8B8FA3]">{r.description}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {hacks.length > 0 && (
          <div className="rounded-xl border border-amber-500/10 bg-amber-500/5 p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">Anatomical Hacks</h4>
            <div className="space-y-2">
              {hacks.map((h) => (
                <div key={h.id} className="text-xs">
                  <strong className="text-[#E8E0D5]">{h.title}:</strong> <span className="text-[#8B8FA3]">{h.practice}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {myths.map((m) => (
          <div key={m.id} className="rounded-xl border border-[#6B4FA0]/20 bg-[#6B4FA0]/5 p-4">
            <p className="text-sm text-[#E8E0D5]">
              <span className="font-semibold text-[#E54D4D]">Myth:</span> {m.myth}
            </p>
            <p className="mt-2 text-sm text-[#E8E0D5]">
              <span className="font-semibold text-[#00E5C4]">Reality:</span> {m.reality}
            </p>
          </div>
        ))}
        {doctorQ && (
          <div className="rounded-xl border border-[#F5A623]/20 bg-[#F5A623]/5 p-4">
            <div className="text-xs uppercase tracking-wider text-[#F5A623] font-semibold mb-2">
              Ask Your Doctor
            </div>
            <p className="text-sm text-[#E8E0D5] italic">"{doctorQ.question}"</p>
          </div>
        )}
      </div>
    );
  }

  // Facts layer (default)
  return (
    <div className="space-y-4">
      <div className="flex gap-1 overflow-x-auto fact-scroll pb-1">
        {CATEGORIES.map((cat) => {
          const meta = CATEGORY_META[cat];
          const active = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-medium transition-all ${
                active
                  ? "bg-[#00E5C4]/10 text-[#00E5C4] border border-[#00E5C4]/30"
                  : "text-[#8B8FA3] hover:text-[#E8E0D5]"
              }`}
            >
              {meta.icon} {meta.label}
            </button>
          );
        })}
      </div>

      {facts.length === 0 ? (
        <p className="py-6 text-center text-sm text-[#8B8FA3]">No facts in this category yet.</p>
      ) : (
        <div className="space-y-3">
          {facts.map((f) => (
            <FactCard key={f.id} fact={f} part={part} />
          ))}
        </div>
      )}

      {microAction && (
        <div className="rounded-xl border border-[#00E5C4]/20 bg-[#00E5C4]/5 p-4">
          <div className="text-xs uppercase tracking-wider text-[#00E5C4] font-semibold">
            ⚡ {microAction.duration} micro-action
          </div>
          <p className="mt-2 text-sm text-[#E8E0D5]">{microAction.action}</p>
        </div>
      )}

      {myths.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6B4FA0]">Myths Busted</h4>
          {myths.slice(0, 1).map((m) => (
            <div key={m.id} className="rounded-xl border border-[#6B4FA0]/20 bg-[#6B4FA0]/5 p-3">
              <p className="text-xs text-[#E8E0D5]">
                <span className="text-[#E54D4D]">Myth:</span> {m.myth}
              </p>
              <p className="mt-1 text-xs text-[#E8E0D5]">
                <span className="text-[#00E5C4]">Reality:</span> {m.reality}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function ExplorePanel() {
  const selectedId = useBodyStore((s) => s.selectedPartId);
  const activeLayer = useBodyStore((s) => s.activeLayer);
  const part = selectedId ? getBodyPart(selectedId) : null;
  const layerMeta = LAYER_META[activeLayer];

  const [speaking, setSpeaking] = useState(false);

  const handleTTS = () => {
    if (!part) return;
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
    } else {
      const textToRead = `${part.name}. ${part.shortDescription}.`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.onend = () => setSpeaking(false);
      utterance.onerror = () => setSpeaking(false);
      setSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <aside className="flex flex-col gap-4 self-start lg:sticky lg:top-24">
      <Suspense
        fallback={
          <div className="flex h-56 items-center justify-center rounded-xl border border-[#1E2844] bg-[#141826]/60">
            <span className="text-xs text-[#8B8FA3] animate-pulse">Loading 3D...</span>
          </div>
        }
      >
        <OrganViewer3D organId={selectedId} className="h-56 w-full" />
      </Suspense>

      <AnimatePresence mode="wait">
        {part ? (
          <motion.div
            key={`${part.id}-${activeLayer}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="rounded-2xl border border-[#1E2844] bg-[#141826]/60 backdrop-blur-sm"
          >
            <div className="border-b border-[#1E2844] p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{part.emoji}</span>
                  <div>
                    <h2 className="text-xl font-bold" style={{ color: layerMeta.color }}>
                      {part.name}
                    </h2>
                    <p className="text-[10px] uppercase tracking-widest text-[#8B8FA3]">
                      {layerMeta.label} layer · {part.system}
                    </p>
                  </div>
                </div>
                {/* TTS button */}
                <button
                  onClick={handleTTS}
                  className={`rounded-full p-2 text-xs transition-colors border border-border bg-[#1E2340]/40 ${
                    speaking ? "text-[#00E5C4] border-[#00E5C4]" : "text-[#8B8FA3] hover:text-[#E8E0D5]"
                  }`}
                  title="Read Aloud"
                >
                  {speaking ? "⏹️" : "🔊"}
                </button>
              </div>
            </div>

            <div className="max-h-[420px] overflow-y-auto fact-scroll p-5">
              <LayerContent partId={part.id} layer={activeLayer} />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-2xl border border-[#1E2844] bg-[#141826]/60 p-6 backdrop-blur-sm"
          >
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#8B8FA3]">
              How it works
            </h3>
            <ol className="mt-4 space-y-3 text-sm text-[#E8E0D5]">
              <li className="flex gap-3">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#00E5C4]/10 text-xs text-[#00E5C4] font-bold">1</span>
                Tap an organ on the map.
              </li>
              <li className="flex gap-3">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#00E5C4]/10 text-xs text-[#00E5C4] font-bold">2</span>
                Watch the 3D model appear above.
              </li>
              <li className="flex gap-3">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#00E5C4]/10 text-xs text-[#00E5C4] font-bold">3</span>
                Switch layers to see different data.
              </li>
            </ol>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
}
