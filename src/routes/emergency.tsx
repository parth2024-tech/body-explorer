import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import { useBodyStore } from "@/store/useBodyStore";
import { EMERGENCY_SCENARIOS } from "@/data/content";
import { EmergencyCard } from "@/components/emergency/EmergencyCard";
import { HeartPulse, Phone, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/emergency")({
  head: () => ({
    meta: [
      { title: "Emergency Protocol - The Living Body Atlas" },
      { name: "description", content: "Life-saving guides, FAST stroke checks, before-the-ambulance steps, and an interactive CPR pacing helper." }
    ]
  }),
  component: EmergencyPage,
});

function EmergencyPage() {
  const { addHistoryEntry } = useBodyStore();
  const [cprRunning, setCprRunning] = useState(false);
  const [cprCount, setCprCount] = useState(0);
  const [localNumber, setLocalNumber] = useState("112 / 108");
  const [isCprExpanded, setIsCprExpanded] = useState(false);

  // Refs for precise timing and audio
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    addHistoryEntry("/emergency");

    if (typeof window !== "undefined") {
      const locale = navigator.language || "";
      if (locale.includes("IN") || locale.includes("hi")) {
        setLocalNumber("102 (Ambulance) / 112 (National)");
      } else if (locale.includes("GB") || locale.includes("UK")) {
        setLocalNumber("999 (Ambulance / Fire / Police)");
      } else {
        setLocalNumber("112 / 108");
      }
    }
  }, [addHistoryEntry]);

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
      osc.frequency.setValueAtTime(800, ctx.currentTime); 
      
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
      initAudioCtx(); 
      const intervalMs = (60 / 105) * 1000; // ~571ms
      
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

  return (
    <div className="min-h-screen bg-[#030303] text-[#EAEAEA] font-sans selection:bg-red-500/30 pb-32">
      
      {/* Medical Disclaimer Banner */}
      <div className="w-full bg-red-500/10 border-b border-red-500/30 px-4 py-3 flex items-start sm:items-center justify-center">
        <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mr-3" />
        <p className="text-xs sm:text-sm font-mono text-red-500 leading-snug">
          <strong className="uppercase tracking-wider">DISCLAIMER:</strong> These protocols are for precautionary first aid when immediate help is unavailable. They do NOT replace professional medical intervention.
        </p>
      </div>

      <div className="max-w-[1600px] mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* Header */}
        <header className="mb-12 relative">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-96 bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-space font-extrabold uppercase tracking-tighter text-white">
              Emergency <span className="text-red-500">Protocol</span>
            </h1>
            <p className="text-[#8A8F98] mt-4 font-mono text-sm leading-relaxed">
              Step-by-step visual guides for high-stakes health events. Read instructions without panic. Click any scenario below to expand the critical action steps.
            </p>
          </div>
        </header>

        {/* Grid of Emergency Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
          {EMERGENCY_SCENARIOS.map((scenario) => (
            <div key={scenario.id} className="h-fit">
              <EmergencyCard scenario={scenario} />
            </div>
          ))}
        </div>
      </div>

      {/* Floating Global Action Bar (CPR Pacer & Emergency Number) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 pointer-events-none">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row justify-between items-end gap-4">
          
          {/* Local Emergency Number Display */}
          <div className="pointer-events-auto bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-2xl flex items-center gap-4">
            <div className="bg-red-500/20 p-3 rounded-xl border border-red-500/30">
              <Phone className="w-6 h-6 text-red-500 animate-pulse" />
            </div>
            <div>
              <p className="text-xs text-[#8A8F98] uppercase tracking-widest font-bold">Ambulance Dial</p>
              <p className="text-xl font-mono font-bold text-white">{localNumber}</p>
            </div>
          </div>

          {/* Floating CPR Pacer */}
          <div className="pointer-events-auto flex flex-col items-end">
            <AnimatePresence>
              {isCprExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  className="mb-4 bg-black/90 backdrop-blur-xl border border-red-500/30 rounded-3xl p-6 shadow-[0_0_50px_rgba(239,68,68,0.15)] flex flex-col items-center min-w-[300px]"
                >
                  <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest text-center">
                    CPR Pacer <br/><span className="text-red-500 text-sm">105 BPM</span>
                  </h3>
                  
                  <div className="relative">
                    <AnimatePresence>
                      {cprRunning && (
                        <motion.div
                          key={cprCount}
                          initial={{ scale: 1, opacity: 0.8 }}
                          animate={{ scale: 2, opacity: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="absolute inset-0 rounded-full bg-red-500/40 pointer-events-none"
                        />
                      )}
                    </AnimatePresence>
                    
                    <motion.div 
                      animate={cprRunning ? { scale: [1, 0.9, 1] } : { scale: 1 }}
                      transition={cprRunning ? { repeat: Infinity, duration: 60/105, ease: "easeInOut" } : {}}
                      className={`w-32 h-32 rounded-full border-4 flex flex-col items-center justify-center transition-colors duration-300 ${
                        cprRunning ? "border-red-500 bg-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.4)]" : "border-white/20 bg-white/5"
                      }`}
                    >
                      <span className={`text-sm font-bold tracking-widest transition-colors ${cprRunning ? "text-red-500" : "text-[#8A8F98]"}`}>
                        PUSH
                      </span>
                      <span className={`text-5xl font-extrabold font-mono mt-1 transition-colors ${cprRunning ? "text-white" : "text-[#8A8F98]"}`}>
                        {cprCount}
                      </span>
                    </motion.div>
                  </div>

                  <button
                    onClick={() => setCprRunning(!cprRunning)}
                    className={`mt-8 w-full py-3 rounded-xl font-bold uppercase tracking-wider transition-colors ${
                      cprRunning ? 'bg-white text-black hover:bg-gray-200' : 'bg-red-500 text-white hover:bg-red-600 shadow-[0_0_20px_rgba(239,68,68,0.3)]'
                    }`}
                  >
                    {cprRunning ? "Stop Pacer" : "Start Pacer"}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* CPR FAB */}
            <button
              onClick={() => setIsCprExpanded(!isCprExpanded)}
              className={`flex items-center gap-3 px-6 py-4 rounded-full shadow-2xl transition-all ${
                isCprExpanded || cprRunning 
                  ? 'bg-red-500 text-white shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:bg-red-600' 
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              <HeartPulse className={`w-6 h-6 ${cprRunning ? 'animate-pulse' : ''}`} />
              <span className="font-bold uppercase tracking-wider text-sm">
                {isCprExpanded ? 'Close Pacer' : 'CPR Timer'}
              </span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
