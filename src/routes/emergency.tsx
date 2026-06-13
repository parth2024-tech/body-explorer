import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
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

// --- Constants & Types ---
const EMERGENCY_KITS = [
  { id: "bandages", text: "Sterile gauze pads & adhesive bandages", category: "home" },
  { id: "tape", text: "Adhesive tape & elastic wrap bandage", category: "home" },
  { id: "antiseptic", text: "Antiseptic wipes & antibiotic ointment", category: "home" },
  { id: "aspirin", text: "Aspirin (325mg tablets, for heart attack first aid)", category: "home" },
  { id: "scissors", text: "Medical scissors & tweezers", category: "home" },
  { id: "blanket", text: "Emergency thermal space blanket", category: "car" },
  { id: "flashlight", text: "Flashlight with extra batteries", category: "car" },
  { id: "whistle", text: "Safety whistle for signaling help", category: "car" },
];

// --- Animation Variants ---
const contentVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as any, staggerChildren: 0.1 }
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
};

function EmergencyPage() {
  const { language, addHistoryEntry } = useBodyStore();
  const [activeScenario, setActiveScenario] = useState(EMERGENCY_SCENARIOS[1] || EMERGENCY_SCENARIOS[0]);
  const [cprRunning, setCprRunning] = useState(false);
  const [cprCount, setCprCount] = useState(0);
  const [localNumber, setLocalNumber] = useState("911 (US) / 112 (EU) / 102 (IN)");
  const [kitChecked, setKitChecked] = useState<Record<string, boolean>>({});

  // Refs for precise timing and audio
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    addHistoryEntry("/emergency");

    // Region-based emergency number detection
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
  }, [addHistoryEntry]);

  // Audio Context initialization isolated to user interaction to bypass auto-play policies
  const initAudioCtx = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      audioCtxRef.current = new AudioContext();
    }
    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
  }, []);

  const playBeep = useCallback(() => {
    try {
      const ctx = audioCtxRef.current;
      if (!ctx) return;
      
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(800, ctx.currentTime); // Sharp 800Hz beep
      
      // Envelope to remove audio clicking
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch (e) {
      console.warn("Audio Context failed to play beep:", e);
    }
  }, []);

  // CPR Timer Logic (105 BPM)
  useEffect(() => {
    if (cprRunning) {
      initAudioCtx(); // Ensure context is awake
      const intervalMs = (60 / 105) * 1000; // ~571ms
      
      // Play immediately on start
      setCprCount((c) => c + 1);
      playBeep();

      timerRef.current = window.setInterval(() => {
        setCprCount((c) => c + 1);
        playBeep();
      }, intervalMs);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      setCprCount(0);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [cprRunning, initAudioCtx, playBeep]);

  const toggleKitCheck = (id: string) => {
    setKitChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePrint = () => window.print();

  const t = (key: string, fallback: string) => {
    const dict = TRANSLATIONS[language] || TRANSLATIONS.en;
    return (dict as Record<string, string>)[key] || fallback;
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-8 print:bg-white print:text-black">
      {/* Header Info */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 text-center md:text-left print:hidden"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-[#FC3D21]">
          {t("emergency", "Emergency Protocol")}
        </span>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-[#EAEAEA] sm:text-5xl">
          Precautionary & <span className="text-[#FC3D21]">First Aid</span> Protocol
        </h1>
        <p className="mt-4 max-w-2xl text-[#8A8F98]">
          Step-by-step guides for high-stakes health events. Read instructions without panic. Keep this offline-ready for quick consultation.
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        
        {/* Left Column: Active Scenario & CPR Pacer */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Active Scenario Card */}
          <div className="rounded-2xl border border-[#FC3D21]/30 bg-[#0F0F0F]/80 p-6 shadow-xl relative overflow-hidden min-h-[500px] print:border-none print:shadow-none print:p-0">
            {/* Animated Ambient Red Glow */}
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" as any }}
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#FC3D21]/5 blur-3xl pointer-events-none print:hidden" 
            />

            <div className="flex justify-between items-center mb-6 border-b border-border/40 pb-4 print:border-black/20">
              <AnimatePresence mode="popLayout">
                <motion.h2 
                  key={activeScenario.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-2xl font-bold text-[#EAEAEA] print:text-black"
                >
                  {activeScenario.name}
                </motion.h2>
              </AnimatePresence>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrint}
                className="rounded-full border border-border bg-[#16181D]/60 px-4 py-1.5 text-xs font-semibold text-[#EAEAEA] transition-colors hover:bg-[#16181D] hover:text-white print:hidden flex items-center gap-2"
              >
                <span>🖨️</span> Print Instructions
              </motion.button>
            </div>

            {/* Content Switcher */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeScenario.id}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Warning signs */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#FC3D21] mb-3 print:text-red-700 flex items-center gap-2">
                    ⚠️ Key Warning Signs
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activeScenario.warningSigns.map((w: string, i: number) => (
                      <motion.div 
                        variants={itemVariants}
                        key={i} 
                        className="rounded-lg bg-[#FC3D21]/5 border border-[#FC3D21]/20 p-3 text-sm text-[#EAEAEA] print:bg-transparent print:border-black/20 print:text-black shadow-sm"
                      >
                        {w}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Steps checklist */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#FC3D21] mb-3 print:text-emerald-700">
                    Action Steps (In Order)
                  </h3>
                  <ol className="space-y-4">
                    {activeScenario.steps.map((s: string, i: number) => (
                      <motion.li variants={itemVariants} key={i} className="flex gap-4 items-start text-sm text-[#8A8F98] print:text-black leading-relaxed">
                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#FC3D21]/10 text-xs font-bold text-[#FC3D21] border border-[#FC3D21]/20 print:bg-gray-200 print:border-none print:text-black mt-0.5">
                          {i + 1}
                        </span>
                        <span>{s}</span>
                      </motion.li>
                    ))}
                  </ol>
                </div>

                {/* Before the Ambulance Info */}
                <motion.div variants={itemVariants} className="rounded-xl bg-[#16181D]/40 border border-border p-5 print:bg-gray-50 print:border-black/20">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#F5A623] mb-3 print:text-amber-700">
                    Critical "Before Ambulance Arrives" Directives
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-sm text-[#8A8F98] print:text-black">
                    {activeScenario.beforeAmbulance.map((b: string, i: number) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive CPR Compressor Guide */}
          <div className="rounded-2xl border border-border bg-[#0F0F0F]/40 p-6 print:hidden relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-2 relative z-10">
              <div className="max-w-md">
                <h3 className="text-xl font-bold text-[#EAEAEA] flex items-center gap-2">
                  Hands-Only CPR Pacer
                  {cprRunning && <span className="flex h-2.5 w-2.5 rounded-full bg-[#FC3D21] animate-pulse" />}
                </h3>
                <p className="text-xs text-[#8A8F98] mt-2 leading-relaxed">
                  Paced at exactly <strong className="text-[#EAEAEA]">105 beats per minute</strong>. Synchronized with the American Heart Association compression rate guidelines (100–120 bpm). Push down hard and fast in the center of the chest.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setCprRunning(!cprRunning)}
                className={`shrink-0 rounded-full px-6 py-3 text-sm font-bold transition-all ${
                  cprRunning
                    ? "bg-[#FC3D21] text-[#F8F8F8] shadow-[0_0_20px_rgba(229,77,77,0.4)] border border-[#FC3D21]"
                    : "bg-[#FC3D21] text-[#030303] shadow-[0_0_20px_rgba(252,61,33,0.2)] hover:shadow-[0_0_25px_rgba(252,61,33,0.4)]"
                }`}
              >
                {cprRunning ? "⏹️ Stop CPR Pacer" : "▶️ Start CPR Pacer"}
              </motion.button>
            </div>

            <div className="flex flex-col items-center justify-center py-10 relative z-10">
              <div className="relative">
                {/* Flashing Outer Aura - Synced to beat */}
                <AnimatePresence>
                  {cprRunning && (
                    <motion.div
                      key={cprCount}
                      initial={{ scale: 1, opacity: 0.6 }}
                      animate={{ scale: 1.8, opacity: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" as any }}
                      className="absolute inset-0 rounded-full bg-[#FC3D21]/30 pointer-events-none"
                    />
                  )}
                </AnimatePresence>

                {/* Inner Tactile Compressor Circle */}
                <motion.div 
                  animate={cprRunning ? { scale: [1, 0.9, 1] } : { scale: 1 }}
                  transition={cprRunning ? { repeat: Infinity, duration: 60/105, ease: "easeInOut" as any } : {}}
                  className={`h-32 w-32 rounded-full border-4 flex flex-col items-center justify-center transition-colors duration-300 ${
                    cprRunning ? "border-[#FC3D21] bg-[#FC3D21]/10" : "border-border/60 bg-[#0D0D0D]"
                  }`}
                >
                  <span className={`text-sm font-bold tracking-widest transition-colors ${cprRunning ? "text-[#FC3D21]" : "text-[#8A8F98]"}`}>
                    PUSH
                  </span>
                  <span className={`text-4xl font-extrabold font-mono mt-1 transition-colors ${cprRunning ? "text-[#EAEAEA]" : "text-[#8A8F98]"}`}>
                    {cprCount}
                  </span>
                </motion.div>
              </div>

              <div className="h-6 mt-6">
                <AnimatePresence>
                  {cprRunning && (
                    <motion.p 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-xs text-[#FC3D21] font-medium"
                    >
                      🔔 Push in beat with the visual pulse & audio click!
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Information & Settings */}
        <div className="space-y-6 print:hidden">
          
          {/* Emergency Numbers */}
          <div className="rounded-xl border border-border bg-[#0F0F0F]/80 p-5 shadow-lg">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#FC3D21] mb-2 flex items-center gap-2">
              🚨 Ambulance Dial
            </h3>
            <p className="text-xs text-[#8A8F98] mb-4">
              Detected local emergency numbers:
            </p>
            <div className="rounded-lg bg-[#030303] p-4 text-center border border-border/60">
              <span className="text-2xl font-bold font-mono text-[#FC3D21] tracking-wide">{localNumber}</span>
            </div>
          </div>

          {/* Scenario Selector */}
          <div className="rounded-xl border border-border bg-[#0F0F0F]/80 p-5 shadow-lg">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#EAEAEA] mb-4">
              Select Scenario
            </h3>
            <div className="flex flex-col gap-2">
              {EMERGENCY_SCENARIOS.map((scen) => {
                const isActive = activeScenario.id === scen.id;
                return (
                  <motion.button
                    key={scen.id}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => {
                      setActiveScenario(scen);
                      setCprRunning(false); // Stop pacer if scenario changes
                    }}
                    className={`w-full text-left px-4 py-3.5 rounded-lg border text-xs font-bold transition-colors ${
                      isActive
                        ? "bg-[#FC3D21]/10 border-[#FC3D21]/60 text-[#EAEAEA]"
                        : "bg-[#0D0D0D] border-border/40 text-[#8A8F98] hover:border-border hover:text-[#EAEAEA]"
                    }`}
                  >
                    {scen.name}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Interactive Kit Checklist */}
          <div className="rounded-xl border border-border bg-[#0F0F0F]/80 p-5 shadow-lg">
            <div className="flex justify-between items-end mb-4">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#EAEAEA] mb-1">
                  Kit Checklist
                </h3>
                <p className="text-[11px] text-[#8A8F98]">
                  Prepare your home and vehicle.
                </p>
              </div>
              <span className="text-xs font-mono text-[#FC3D21]">
                {Object.values(kitChecked).filter(Boolean).length}/{EMERGENCY_KITS.length}
              </span>
            </div>
            
            <div className="space-y-1 max-h-72 overflow-y-auto pr-2 custom-scrollbar">
              {EMERGENCY_KITS.map((item) => {
                const isChecked = !!kitChecked[item.id];
                return (
                  <motion.label 
                    key={item.id}
                    whileHover={{ x: 2 }}
                    className="flex gap-3 items-start cursor-pointer group p-2 rounded-md hover:bg-[#16181D]/40 transition-colors"
                  >
                    <div className="relative flex items-center justify-center mt-0.5">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleKitCheck(item.id)}
                        className="peer h-4 w-4 appearance-none rounded border border-[#3E455E] bg-[#030303] checked:border-[#FC3D21] checked:bg-[#FC3D21] transition-all cursor-pointer"
                      />
                      <svg className="absolute w-3 h-3 text-[#030303] opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" viewBox="0 0 14 10" fill="none">
                        <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className={`text-xs transition-all duration-300 ${isChecked ? "text-[#8A8F98]/50 line-through" : "text-[#EAEAEA]"}`}>
                      {item.text} <span className="text-[10px] text-[#8A8F98]/70 block mt-0.5 uppercase tracking-wider">{item.category}</span>
                    </span>
                  </motion.label>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
