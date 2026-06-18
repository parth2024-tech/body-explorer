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
  const [localNumber, setLocalNumber] = useState("911 (US) / 112 (EU)");
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
        setLocalNumber("911 (US) / 112 (EU)");
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
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-crimson/30 pb-32">
      
      {/* Medical Disclaimer Banner */}
      <div className="w-full bg-crimson/10 border-b-4 border-crimson px-4 py-4 flex items-start justify-center">
        <AlertTriangle className="w-6 h-6 text-crimson shrink-0 mr-4" />
        <p className="text-sm md:text-base font-body text-crimson leading-snug">
          <strong className="uppercase tracking-widest font-mono text-xs block mb-1">Disclaimer</strong> 
          These protocols are for precautionary first aid when immediate help is unavailable. They do NOT replace professional medical intervention.
        </p>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-16">
        
        {/* Header */}
        <header className="mb-20 border-b-2 border-charcoal dark:border-bone pb-8">
          <div className="flex justify-between items-end">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-crimson block mb-4">
                Section 05 — Critical Actions
              </span>
              <h1 className="text-5xl md:text-7xl font-display uppercase tracking-tight text-charcoal dark:text-bone">
                Emergency Protocol.
              </h1>
            </div>
            <div className="hidden md:block max-w-sm text-right">
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                Step-by-step visual guides for high-stakes health events. Read instructions without panic. Click any scenario below to expand the critical action steps.
              </p>
            </div>
          </div>
          <div className="md:hidden mt-6">
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Step-by-step visual guides for high-stakes health events. Read instructions without panic. Click any scenario below to expand the critical action steps.
            </p>
          </div>
        </header>

        {/* Grid of Emergency Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          {EMERGENCY_SCENARIOS.map((scenario) => (
            <div key={scenario.id} className="h-fit">
              <EmergencyCard scenario={scenario} />
            </div>
          ))}
        </div>
      </div>

      {/* Floating Global Action Bar (CPR Pacer & Emergency Number) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-6 pointer-events-none">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row justify-between items-end gap-6">
          
          {/* Local Emergency Number Display */}
          <div className="pointer-events-auto bg-card border-2 border-border p-6 shadow-[8px_8px_0_0_rgba(0,0,0,0.1)] dark:shadow-[8px_8px_0_0_rgba(255,255,255,0.1)] flex items-center gap-6">
            <div className="bg-crimson/10 p-4 border border-crimson/30">
              <Phone className="w-8 h-8 text-crimson animate-pulse" />
            </div>
            <div>
              <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-1">Ambulance Dial</p>
              <p className="text-3xl font-display text-foreground">{localNumber}</p>
            </div>
          </div>

          {/* Floating CPR Pacer */}
          <div className="pointer-events-auto flex flex-col items-end">
            <AnimatePresence>
              {isCprExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="mb-6 bg-card border-2 border-crimson p-8 shadow-[8px_8px_0_0_rgba(220,38,38,0.2)] flex flex-col items-center min-w-[320px]"
                >
                  <h3 className="text-2xl font-display text-charcoal dark:text-bone mb-8 uppercase tracking-widest text-center border-b border-border pb-4 w-full">
                    CPR Pacer <br/><span className="text-crimson text-sm font-mono tracking-widest block mt-2">105 BPM</span>
                  </h3>
                  
                  <div className="relative mb-4">
                    <AnimatePresence>
                      {cprRunning && (
                        <motion.div
                          key={cprCount}
                          initial={{ scale: 1, opacity: 0.8 }}
                          animate={{ scale: 2, opacity: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="absolute inset-0 rounded-full bg-crimson/20 pointer-events-none"
                        />
                      )}
                    </AnimatePresence>
                    
                    <motion.div 
                      animate={cprRunning ? { scale: [1, 0.9, 1] } : { scale: 1 }}
                      transition={cprRunning ? { repeat: Infinity, duration: 60/105, ease: "easeInOut" } : {}}
                      className={`w-40 h-40 rounded-full border-4 flex flex-col items-center justify-center transition-colors duration-300 ${
                        cprRunning ? "border-crimson bg-crimson/10" : "border-border bg-muted"
                      }`}
                    >
                      <span className={`font-mono text-xs font-bold tracking-widest transition-colors ${cprRunning ? "text-crimson" : "text-muted-foreground"}`}>
                        PUSH
                      </span>
                      <span className={`text-6xl font-display mt-2 transition-colors ${cprRunning ? "text-foreground" : "text-muted-foreground"}`}>
                        {cprCount}
                      </span>
                    </motion.div>
                  </div>

                  <button
                    onClick={() => setCprRunning(!cprRunning)}
                    className={`mt-8 w-full py-4 font-mono text-xs font-bold uppercase tracking-widest transition-colors border-2 ${
                      cprRunning ? 'bg-card text-foreground border-border hover:bg-muted' : 'bg-crimson text-white border-crimson hover:bg-crimson/90'
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
              className={`flex items-center gap-4 px-8 py-5 border-2 transition-all ${
                isCprExpanded || cprRunning 
                  ? 'bg-crimson border-crimson text-white hover:bg-crimson/90 shadow-[8px_8px_0_0_rgba(220,38,38,0.2)]' 
                  : 'bg-charcoal border-charcoal text-bone dark:bg-bone dark:border-bone dark:text-charcoal hover:bg-charcoal/90 dark:hover:bg-bone/90 shadow-[8px_8px_0_0_rgba(0,0,0,0.1)] dark:shadow-[8px_8px_0_0_rgba(255,255,255,0.1)]'
              }`}
            >
              <HeartPulse className={`w-6 h-6 ${cprRunning ? 'animate-pulse' : ''}`} />
              <span className="font-mono text-xs font-bold uppercase tracking-widest">
                {isCprExpanded ? 'Close Pacer' : 'CPR Timer'}
              </span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
