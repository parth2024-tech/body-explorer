import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useBodyStore } from "@/store/useBodyStore";
import { EMERGENCY_SCENARIOS, TRANSLATIONS } from "@/data/content";

export const Route = createFileRoute("/emergency")({
  head: () => ({
    meta: [
      { title: "Emergency Guidelines & CPR Timer — The Living Body Atlas" },
      { name: "description", content: "Life-saving guides, FAST stroke checks, before-the-ambulance steps, and an interactive CPR pacing helper." }
    ]
  }),
  component: EmergencyPage,
});

const EMERGENCY_KITS = [
  { id: "bandages", text: "Sterile gauze pads and adhesive bandages of various sizes", category: "home" },
  { id: "tape", text: "Adhesive tape and elastic wrap bandage", category: "home" },
  { id: "antiseptic", text: "Antiseptic wipes and antibiotic ointment", category: "home" },
  { id: "aspirin", text: "Aspirin (325mg tablets, crucial for heart attack first aid)", category: "home" },
  { id: "scissors", text: "Medical scissors and tweezers", category: "home" },
  { id: "blanket", text: "Emergency thermal space blanket", category: "car" },
  { id: "flashlight", text: "Flashlight with extra batteries", category: "car" },
  { id: "whistle", text: "Safety whistle for signaling help", category: "car" },
];

function EmergencyPage() {
  const { language, addHistoryEntry } = useBodyStore();
  const [activeScenario, setActiveScenario] = useState(EMERGENCY_SCENARIOS[1]); // cardiac-arrest is default
  const [cprRunning, setCprRunning] = useState(false);
  const [cprCount, setCprCount] = useState(0);
  const [localNumber, setLocalNumber] = useState("911 (US) / 112 (EU) / 102 (IN)");
  const [kitChecked, setKitChecked] = useState<Record<string, boolean>>({});

  // CPR pacing audio beep & timer
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    addHistoryEntry("/emergency");

    // Detect browser country/language to suggest emergency numbers
    if (typeof window !== "undefined") {
      const locale = navigator.language || "";
      if (locale.includes("IN") || locale.includes("hi")) {
        setLocalNumber("102 (Ambulance) / 112 (National)");
      } else if (locale.includes("GB") || locale.includes("UK")) {
        setLocalNumber("999 (Ambulance / Fire / Police)");
      } else {
        setLocalNumber("911 (US) / 112 (EU)");
      }
    }
  }, []);

  const playBeep = () => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(800, ctx.currentTime); // 800Hz beep
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch (e) {
      console.warn("Audio Context failed to play beep:", e);
    }
  };

  // Start CPR Compressions guide at 105 Compressions Per Minute (within 100-120 guidelines)
  useEffect(() => {
    if (cprRunning) {
      const intervalMs = (60 / 105) * 1000;
      timerRef.current = window.setInterval(() => {
        setCprCount((c) => c + 1);
        playBeep();
      }, intervalMs);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      setCprCount(0);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [cprRunning]);

  const toggleKitCheck = (id: string) => {
    setKitChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePrint = () => {
    window.print();
  };

  const t = (key: keyof typeof TRANSLATIONS.en) => {
    const dict = TRANSLATIONS[language] || TRANSLATIONS.en;
    return (dict as any)[key] || (TRANSLATIONS.en as any)[key] || key;
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-8 page-enter print:bg-white print:text-black">
      {/* Header Info */}
      <div className="mb-10 text-center md:text-left print:hidden">
        <span className="text-xs font-bold uppercase tracking-widest text-[#E5504D]">
          {t("emergency")}
        </span>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-[#E8E0D5] sm:text-5xl">
          Precautionary & <span className="text-[#E5504D]">First Aid</span> Protocol
        </h1>
        <p className="mt-4 max-w-2xl text-[#8B8FA3]">
          Step-by-step guides for high-stakes health events. Read instructions without panic. Keep this offline-ready for quick consultation.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Columns: Scenario Selection & Details */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Active Scenario Card */}
          <div className="rounded-2xl border border-[#E5504D]/30 bg-[#141826]/80 p-6 shadow-xl relative overflow-hidden">
            {/* Ambient Red glow backdrop */}
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#E5504D]/5 blur-3xl pointer-events-none" />

            <div className="flex justify-between items-center mb-6 border-b border-border/40 pb-4 print:border-black/20">
              <h2 className="text-2xl font-bold text-[#E8E0D5] print:text-black">
                {activeScenario.name}
              </h2>
              <button
                onClick={handlePrint}
                className="rounded-full border border-border bg-[#1E2340]/60 px-4 py-1.5 text-xs font-semibold text-[#E8E0D5] transition-all hover:bg-[#1E2340] print:hidden"
              >
                🖨️ Print Instructions
              </button>
            </div>

            {/* Warning signs list */}
            <div className="mb-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#E5504D] mb-3 print:text-red-600">
                ⚠️ Key Warning Signs
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activeScenario.warningSigns.map((w, i) => (
                  <div key={i} className="rounded-lg bg-[#E5504D]/5 border border-[#E5504D]/15 p-3 text-xs text-[#E8E0D5] print:bg-white print:border-black/20 print:text-black">
                    {w}
                  </div>
                ))}
              </div>
            </div>

            {/* Steps checklist */}
            <div className="mb-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#00E5C4] mb-3 print:text-emerald-600">
                Action Steps (In Order)
              </h3>
              <ol className="space-y-3">
                {activeScenario.steps.map((s, i) => (
                  <li key={i} className="flex gap-4 items-start text-sm text-[#8B8FA3] print:text-black">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#00E5C4]/10 text-xs font-bold text-[#00E5C4] border border-[#00E5C4]/20 print:bg-gray-200 print:text-black">
                      {i + 1}
                    </span>
                    <span className="mt-0.5">{s}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Before the Ambulance Info */}
            <div className="rounded-xl bg-[#1E2340]/40 border border-border p-4 print:bg-gray-100 print:border-black/10">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#F5A623] mb-2 print:text-amber-600">
                Critical "Before the Ambulance Arrives" Directives
              </h3>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-[#8B8FA3] print:text-black">
                {activeScenario.beforeAmbulance.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Interactive CPR Compressor Guide (Flashing circle) */}
          <div className="rounded-2xl border border-border bg-[#141826]/40 p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#E8E0D5]">Hands-Only CPR Pacer</h3>
                <p className="text-xs text-[#8B8FA3] mt-1">
                  Paced at exactly 105 beats per minute. Synchronized with the American Heart Association compression rate guidelines (100–120 bpm).
                </p>
              </div>
              <button
                onClick={() => setCprRunning(!cprRunning)}
                className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all ${
                  cprRunning
                    ? "bg-[#E54D4D] text-[#F8F8F8] shadow-[0_0_15px_rgba(229,77,77,0.4)]"
                    : "bg-[#00E5C4] text-[#0A0E1A] shadow-[0_0_15px_rgba(0,229,196,0.3)]"
                }`}
              >
                {cprRunning ? "⏹️ Stop CPR Guide" : "▶️ Start CPR Guide"}
              </button>
            </div>

            <div className="flex flex-col items-center justify-center py-6">
              <div className="relative">
                {/* Flashing Outer Aura */}
                <AnimatePresence>
                  {cprRunning && (
                    <motion.div
                      key={cprCount}
                      initial={{ scale: 0.8, opacity: 0.6 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.55 }}
                      className="absolute inset-0 rounded-full bg-[#00E5C4]/25 pointer-events-none"
                    />
                  )}
                </AnimatePresence>

                {/* Inner Compressor circle */}
                <div className={`h-28 w-28 rounded-full border-2 border-[#00E5C4] flex flex-col items-center justify-center transition-all ${
                  cprRunning ? "bg-[#00E5C4]/10 scale-105" : "bg-[#111525]"
                }`}>
                  <span className="text-xs font-bold text-[#00E5C4]">PUSH</span>
                  <span className="text-2xl font-extrabold text-[#E8E0D5] font-mono mt-1">
                    {cprCount}
                  </span>
                </div>
              </div>

              {cprRunning && (
                <p className="text-xs text-[#00E5C4] mt-4 animate-pulse">
                  🔔 Push in beat with the visual pulse and audio click!
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Numbers, Kit Checklist, FAST */}
        <div className="space-y-8 print:hidden">
          {/* Emergency Numbers */}
          <div className="rounded-xl border border-border bg-[#141826] p-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#E5504D] mb-2">
              🚨 Ambulance / Emergency Call
            </h3>
            <p className="text-xs text-[#8B8FA3] mb-4">
              Detected matching numbers based on browser regional locale:
            </p>
            <div className="rounded-lg bg-[#0A0E1A] p-4 text-center border border-border/60">
              <span className="text-2xl font-bold font-mono text-[#00E5C4]">{localNumber}</span>
            </div>
          </div>

          {/* Warning signs quick checklist */}
          <div className="rounded-xl border border-border bg-[#141826] p-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#E8E0D5] mb-3">
              Select Another Scenario
            </h3>
            <div className="space-y-2">
              {EMERGENCY_SCENARIOS.map((scen) => (
                <button
                  key={scen.id}
                  onClick={() => {
                    setActiveScenario(scen);
                    setCprRunning(false);
                  }}
                  className={`w-full text-left p-3.5 rounded-lg border text-xs font-semibold transition-all ${
                    activeScenario.id === scen.id
                      ? "bg-[#E5504D]/10 border-[#E5504D]/60 text-[#E8E0D5]"
                      : "bg-[#111525] border-border/40 text-[#8B8FA3] hover:text-[#E8E0D5]"
                  }`}
                >
                  {scen.name}
                </button>
              ))}
            </div>
          </div>

          {/* Kit Checklist */}
          <div className="rounded-xl border border-border bg-[#141826] p-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#E8E0D5] mb-2">
              Emergency Kit Checklist
            </h3>
            <p className="text-xs text-[#8B8FA3] mb-4">
              Compile these items in your home and vehicle for health readiness.
            </p>
            
            <div className="space-y-3 max-h-60 overflow-y-auto pr-1 scrollbar-none">
              {EMERGENCY_KITS.map((item) => (
                <label key={item.id} className="flex gap-2.5 items-start cursor-pointer text-xs text-[#8B8FA3]">
                  <input
                    type="checkbox"
                    checked={!!kitChecked[item.id]}
                    onChange={() => toggleKitCheck(item.id)}
                    className="mt-0.5 rounded border-[#1E2844] bg-[#0A0E1A] text-[#00E5C4] focus:ring-[#00E5C4]"
                  />
                  <span className={kitChecked[item.id] ? "line-through opacity-50" : ""}>
                    {item.text} <span className="text-[9px] text-[#8B8FA3]/80">({item.category})</span>
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
