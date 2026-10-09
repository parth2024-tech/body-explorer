import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import { useBodyStore } from "@/store/useBodyStore";
import { EMERGENCY_SCENARIOS } from "@/data/content";
import { EmergencyCard } from "@/components/emergency/EmergencyCard";
import { HeartPulse, Phone, AlertTriangle, ShieldCheck, Globe, Info } from "lucide-react";

export const Route = createFileRoute("/emergency")({
  head: () => ({
    meta: [
      { title: "Emergency Protocols (AHA 2020 Synthesized) — The Living Body Atlas" },
      {
        name: "description",
        content:
          "Educational first-aid protocols synthesized from AHA 2020 Guidelines: cardiac arrest, stroke FAST checks, choking, severe bleeding, and 100-120 CPM metronome.",
      },
    ],
  }),
  component: EmergencyPage,
});

interface CountryDispatch {
  code: string;
  name: string;
  primaryNumber: string;
  secondaryContext: string;
}

const EMERGENCY_COUNTRIES: CountryDispatch[] = [
  {
    code: "IN",
    name: "India",
    primaryNumber: "112",
    secondaryContext: "National Emergency Helpline (Direct Ambulance dispatch: 108 / 102)",
  },
  {
    code: "US",
    name: "United States",
    primaryNumber: "911",
    secondaryContext: "Emergency Services (Ambulance, Fire, Police)",
  },
  {
    code: "GB",
    name: "United Kingdom",
    primaryNumber: "999",
    secondaryContext: "Emergency Ambulance & Rescue (Non-emergency medical advice: 111)",
  },
  {
    code: "EU",
    name: "European Union",
    primaryNumber: "112",
    secondaryContext: "Single European Emergency Call Number",
  },
  {
    code: "AU",
    name: "Australia",
    primaryNumber: "000",
    secondaryContext: "Triple Zero Emergency Ambulance Service",
  },
  {
    code: "CA",
    name: "Canada",
    primaryNumber: "911",
    secondaryContext: "Emergency Dispatch",
  },
];

function EmergencyPage() {
  const { addHistoryEntry } = useBodyStore();
  const [cprRunning, setCprRunning] = useState(false);
  const [cprCount, setCprCount] = useState(0);
  const [selectedCountryCode, setSelectedCountryCode] = useState("IN");
  const [isCprExpanded, setIsCprExpanded] = useState(false);

  // Refs for precise Web Audio API timing (works 100% offline via local oscillator)
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    addHistoryEntry("/emergency");

    if (typeof window !== "undefined") {
      const locale = (navigator.language || "").toUpperCase();
      if (locale.includes("US")) setSelectedCountryCode("US");
      else if (locale.includes("GB") || locale.includes("UK")) setSelectedCountryCode("GB");
      else if (locale.includes("AU")) setSelectedCountryCode("AU");
      else if (locale.includes("CA")) setSelectedCountryCode("CA");
      else if (
        locale.includes("FR") ||
        locale.includes("DE") ||
        locale.includes("IT") ||
        locale.includes("ES")
      )
        setSelectedCountryCode("EU");
      else setSelectedCountryCode("IN");
    }
  }, [addHistoryEntry]);

  const activeDispatch =
    EMERGENCY_COUNTRIES.find((c) => c.code === selectedCountryCode) || EMERGENCY_COUNTRIES[0];

  const initAudioCtx = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        audioCtxRef.current = new AudioContextClass();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
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
      gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch (e) {
      console.warn("Audio Context failed to play beep:", e);
    }
  }, []);

  // CPR Timer Logic: 105 CPM (Guideline Target within the AHA 100-120 range)
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
      {/* ─── Mandatory Clinical Safety Banner ─── */}
      <div className="w-full bg-red-950/70 border-b-2 border-red-500 px-4 py-3.5">
        <div className="max-w-6xl mx-auto flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-red-200 leading-relaxed font-sans">
            <strong className="text-white uppercase tracking-wide">
              CRITICAL MEDICAL NOTICE & LEGAL DISCLAIMER:
            </strong>{" "}
            This educational emergency reference is synthesized from the{" "}
            <strong>American Heart Association (AHA 2020) Guidelines for CPR & ECC</strong> and the{" "}
            <strong>European Resuscitation Council (ERC 2021)</strong> standards. It is intended for
            bystander education while waiting for emergency dispatch. It does{" "}
            <strong>NOT replace certified medical personnel or hospital care</strong>. If someone is
            unresponsive or in acute distress, call emergency services immediately before reviewing
            these guides.
          </div>
        </div>
      </div>

      {/* ─── Age & Pediatric Restriction Alert ─── */}
      <div className="w-full bg-amber-950/50 border-b border-amber-500/30 px-4 py-2.5">
        <div className="max-w-6xl mx-auto flex items-center gap-2.5 text-xs text-amber-300">
          <Info className="w-4 h-4 shrink-0 text-amber-400" />
          <span>
            <strong>ADULT & ADOLESCENT PROTOCOLS ONLY (12+ Years):</strong> These steps are{" "}
            <strong>NOT safe for infants (&lt;1 year) or small children</strong>. Infant choking and
            pediatric CPR require specialized back blows, chest thrusts, and calibrated depths. Seek
            pediatric emergency care immediately.
          </span>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <header className="mb-8 sm:mb-12 relative text-center max-w-3xl mx-auto">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              Guidelines: AHA 2020 / ERC 2021 • Reviewed Oct 2026
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-space font-extrabold uppercase tracking-tight text-white">
              Emergency <span className="text-red-500">First-Aid</span> Triage
            </h1>
            <p className="text-[#8A8F98] mt-3 font-mono text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Clear, step-by-step first-aid actions for medical emergencies. Designed with high
              contrast for high-stress readability. The audio pacer operates completely offline.
            </p>
          </div>
        </header>

        {/* ─── Region-Aware Ambulance Triage Selector ─── */}
        <div className="mb-8 max-w-3xl mx-auto bg-[#0F0F0F] border border-white/10 rounded-2xl p-4 sm:p-5 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Globe className="w-5 h-5 text-red-400 shrink-0" />
            <div>
              <span className="text-[10px] text-[#8A8F98] uppercase font-bold tracking-wider block">
                Select Your Region
              </span>
              <span className="text-sm font-semibold text-white">
                {activeDispatch.name}: {activeDispatch.secondaryContext}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <select
              value={selectedCountryCode}
              onChange={(e) => setSelectedCountryCode(e.target.value)}
              className="bg-black border border-white/20 text-white rounded-lg px-3 py-2 text-xs font-mono focus:border-red-500 focus:outline-none"
              aria-label="Select Country for Emergency Dispatch"
            >
              {EMERGENCY_COUNTRIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.name} ({c.primaryNumber})
                </option>
              ))}
            </select>

            <a
              href={`tel:${activeDispatch.primaryNumber}`}
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-red-500 hover:bg-red-600 px-5 text-sm font-bold text-white shadow-lg shadow-red-500/30 active:scale-95 transition-all whitespace-nowrap"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call {activeDispatch.primaryNumber}
            </a>
          </div>
        </div>

        {/* Grid of Emergency Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
          {EMERGENCY_SCENARIOS.map((scenario) => (
            <div key={scenario.id} className="h-fit">
              <EmergencyCard scenario={scenario} />
            </div>
          ))}
        </div>
      </div>

      {/* Floating Action Bar (CPR Metronome & Quick Emergency Dial) */}
      <div className="fixed bottom-20 md:bottom-0 left-0 right-0 z-30 p-3 sm:p-4 pointer-events-none pb-[calc(env(safe-area-inset-bottom)+5rem)] md:pb-4">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row justify-between items-end gap-3 sm:gap-4">
          {/* Emergency Number Direct Dial Card */}
          <div className="pointer-events-auto bg-black/95 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-4 shadow-2xl flex items-center justify-between gap-3 w-full sm:w-auto">
            <div className="flex items-center gap-3">
              <div className="bg-red-500/20 p-2.5 sm:p-3 rounded-xl border border-red-500/30">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 animate-pulse" />
              </div>
              <div>
                <p className="text-[10px] text-[#8A8F98] uppercase tracking-widest font-bold">
                  {activeDispatch.name} EMS
                </p>
                <p className="text-base sm:text-lg font-mono font-bold text-white">
                  Dial {activeDispatch.primaryNumber}
                </p>
              </div>
            </div>
            <a
              href={`tel:${activeDispatch.primaryNumber}`}
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-red-500 px-4 text-xs font-bold text-white shadow-lg shadow-red-500/30 active:scale-95 transition-all"
            >
              Call Now
            </a>
          </div>

          {/* Floating CPR Metronome */}
          <div className="pointer-events-auto flex flex-col items-end">
            <AnimatePresence>
              {isCprExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  className="mb-4 bg-black/95 backdrop-blur-xl border border-red-500/30 rounded-3xl p-5 sm:p-6 shadow-[0_0_50px_rgba(239,68,68,0.2)] flex flex-col items-center max-w-[340px]"
                >
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1 uppercase tracking-widest text-center">
                    CPR Metronome
                  </h3>
                  <p className="text-[11px] text-[#8A8F98] text-center mb-4">
                    Target Cadence: <strong className="text-red-400">105 CPM</strong> (AHA guideline
                    range: 100–120 compressions/min)
                  </p>

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
                      animate={cprRunning ? { scale: [1, 0.92, 1] } : { scale: 1 }}
                      transition={
                        cprRunning
                          ? { repeat: Infinity, duration: 60 / 105, ease: "easeInOut" }
                          : {}
                      }
                      className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 flex flex-col items-center justify-center transition-colors duration-300 ${
                        cprRunning
                          ? "border-red-500 bg-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.4)]"
                          : "border-white/20 bg-white/5"
                      }`}
                    >
                      <span
                        className={`text-xs font-bold tracking-widest transition-colors ${cprRunning ? "text-red-500" : "text-[#8A8F98]"}`}
                      >
                        PUSH
                      </span>
                      <span
                        className={`text-4xl sm:text-5xl font-extrabold font-mono mt-0.5 transition-colors ${cprRunning ? "text-white" : "text-[#8A8F98]"}`}
                      >
                        {cprCount}
                      </span>
                    </motion.div>
                  </div>

                  <p className="text-[10px] text-[#8A8F98] text-center mt-4 leading-normal">
                    Compress at least 2 inches (5 cm) deep in center of chest. Allow full chest
                    recoil. Offline sound generator active.
                  </p>

                  <button
                    onClick={() => setCprRunning(!cprRunning)}
                    className={`mt-4 w-full py-2.5 rounded-xl font-bold uppercase tracking-wider text-xs transition-colors ${
                      cprRunning
                        ? "bg-white text-black hover:bg-gray-200"
                        : "bg-red-500 text-white hover:bg-red-600 shadow-[0_0_20px_rgba(239,68,68,0.3)]"
                    }`}
                  >
                    {cprRunning ? "Stop Metronome" : "Start 105 CPM Metronome"}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* CPR FAB */}
            <button
              onClick={() => setIsCprExpanded(!isCprExpanded)}
              className={`flex items-center gap-2.5 px-5 py-3.5 rounded-full shadow-2xl transition-all ${
                isCprExpanded || cprRunning
                  ? "bg-red-500 text-white shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:bg-red-600"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              <HeartPulse className={`w-5 h-5 ${cprRunning ? "animate-pulse" : ""}`} />
              <span className="font-bold uppercase tracking-wider text-xs">
                {isCprExpanded ? "Close Metronome" : "CPR Metronome (105 CPM)"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
