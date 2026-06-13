import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useBodyStore } from "@/store/useBodyStore";
import { TRANSLATIONS } from "@/data/content";

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      { title: "Body Utilities & Interactive Tools — The Living Body Atlas" },
      { name: "description", content: "Breathing pacers, water intake logs, lifetime heartbeat simulators, posture check alerts, and sleep cycles helper." }
    ]
  }),
  component: ToolsPage,
});

function ToolsPage() {
  const {
    language,
    waterIntakeLogs,
    addWaterIntake,
    getWaterToday,
    symptomLogs,
    addSymptomLog,
    deleteSymptomLog,
    addHistoryEntry,
  } = useBodyStore();

  const [activeTool, setActiveTool] = useState<"breathing" | "heart" | "water" | "sleep" | "symptoms" | "posture">("breathing");
  
  // Breathing state
  const [breathState, setBreathState] = useState<"Inhale" | "Hold" | "Exhale" | "Hold (Empty)">("Inhale");
  const [breathTimer, setBreathTimer] = useState(4);
  const [breathingMethod, setBreathingMethod] = useState<"box" | "relax">("box");
  const breathingIntervalRef = useRef<number | null>(null);

  // Heart state
  const [ageYears, setAgeYears] = useState(25);
  const [restingBpm, setRestingBpm] = useState(72);
  const [estimatedBeats, setEstimatedBeats] = useState(0);

  // Sleep state
  const [wakeTime, setWakeTime] = useState("07:00");
  const [calculatedBedtimes, setCalculatedBedtimes] = useState<string[]>([]);

  // Posture Notification state
  const [notificationStatus, setNotificationStatus] = useState("default");
  const [postureInterval, setPostureInterval] = useState(30); // in minutes
  const [postureTimerActive, setPostureTimerActive] = useState(false);

  // Symptom Logging state
  const [symName, setSymName] = useState("");
  const [symNotes, setSymNotes] = useState("");
  const [symSeverity, setSymSeverity] = useState<"mild" | "moderate" | "severe">("mild");

  useEffect(() => {
    addHistoryEntry("/tools");
    
    // Check Notification support
    if (typeof window !== "undefined" && "Notification" in window) {
      setNotificationStatus(Notification.permission);
    }
  }, []);

  const t = (key: keyof typeof TRANSLATIONS.en) => {
    const dict = TRANSLATIONS[language] || TRANSLATIONS.en;
    return (dict as any)[key] || (TRANSLATIONS.en as any)[key] || key;
  };

  // ━━━ 1. Breathing Pacer Engine ━━━
  useEffect(() => {
    if (breathingIntervalRef.current) {
      clearInterval(breathingIntervalRef.current);
    }

    setBreathTimer(breathingMethod === "box" ? 4 : 4);
    setBreathState("Inhale");

    breathingIntervalRef.current = window.setInterval(() => {
      setBreathTimer((time) => {
        if (time <= 1) {
          // transition states
          setBreathState((state) => {
            if (breathingMethod === "box") {
              if (state === "Inhale") { setBreathTimer(4); return "Hold"; }
              if (state === "Hold") { setBreathTimer(4); return "Exhale"; }
              if (state === "Exhale") { setBreathTimer(4); return "Hold (Empty)"; }
              setBreathTimer(4); return "Inhale";
            } else {
              // 4-7-8 breathing method
              if (state === "Inhale") { setBreathTimer(7); return "Hold"; }
              if (state === "Hold") { setBreathTimer(8); return "Exhale"; }
              setBreathTimer(4); return "Inhale";
            }
          });
          return 0;
        }
        return time - 1;
      });
    }, 1000);

    return () => {
      if (breathingIntervalRef.current) {
        clearInterval(breathingIntervalRef.current);
      }
    };
  }, [breathingMethod]);

  // ━━━ 2. Heart Beat Calculator ━━━
  useEffect(() => {
    // Estimating total beats over lifespan (resting bpm * 60 * 24 * 365.25 * age)
    const beats = restingBpm * 60 * 24 * 365.25 * ageYears;
    setEstimatedBeats(Math.floor(beats));
  }, [ageYears, restingBpm]);

  // ━━━ 3. Sleep Cycle Calculator ━━━
  useEffect(() => {
    // Each sleep cycle is approx 90 minutes. 
    // Go backwards from wake time to find optimal bedtimes (5-6 cycles is typical: 7.5 to 9 hours)
    const [hourStr, minStr] = wakeTime.split(":");
    const wakeDate = new Date();
    wakeDate.setHours(parseInt(hourStr), parseInt(minStr), 0);

    const times: string[] = [];
    // Calculate bedtime for 6, 5, 4, 3 sleep cycles
    for (let cycles = 6; cycles >= 3; cycles--) {
      const bedDate = new Date(wakeDate.getTime() - cycles * 90 * 60 * 1000 - 15 * 60 * 1000); // 15 mins to fall asleep
      const hrs = String(bedDate.getHours()).padStart(2, "0");
      const mins = String(bedDate.getMinutes()).padStart(2, "0");
      times.push(`${hrs}:${mins}`);
    }
    setCalculatedBedtimes(times);
  }, [wakeTime]);

  // ━━━ 4. Posture Check Notification Engine ━━━
  const requestNotificationPermission = () => {
    if (typeof window !== "undefined" && "Notification" in window) {
      Notification.requestPermission().then((permission) => {
        setNotificationStatus(permission);
      });
    }
  };

  const startPostureAlerts = () => {
    if (notificationStatus !== "granted") return;
    setPostureTimerActive(true);
    // Trigger first sample notification immediately
    new Notification("Living Body Atlas", {
      body: "Posture Check Activated! We will remind you to adjust your spine.",
      icon: "/favicon.ico"
    });
  };

  const stopPostureAlerts = () => {
    setPostureTimerActive(false);
  };

  // ━━━ 5. Symptom Logger Submitter ━━━
  const handleLogSymptom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!symName.trim()) return;
    addSymptomLog({
      date: new Date().toISOString().split("T")[0],
      symptom: symName,
      notes: symNotes,
      severity: symSeverity
    });
    setSymName("");
    setSymNotes("");
    setSymSeverity("mild");
  };

  const waterToday = getWaterToday();

  return (
    <div className="mx-auto max-w-7xl px-5 py-8 page-enter">
      {/* Page Header */}
      <div className="mb-10 text-center md:text-left">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00E5C4]">
          {t("tools")}
        </span>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-[#E8E0D5] sm:text-5xl">
          Stand-alone <span className="gradient-text">Interactive</span> Utilities
        </h1>
        <p className="mt-4 max-w-2xl text-[#8B8FA3]">
          Practical anatomical pacer modules and local storage loggers for your daily wellness routing.
        </p>
      </div>

      {/* Selector and Main Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        
        {/* Left Column: Navigation Sidebar */}
        <div className="lg:col-span-1 space-y-2">
          {[
            { id: "breathing", label: "Breathing Pacer", emoji: "🌬️" },
            { id: "heart", label: "Heart Simulator", emoji: "❤️" },
            { id: "water", label: "Water Intake Log", emoji: "💧" },
            { id: "sleep", label: "Sleep Calculator", emoji: "🌙" },
            { id: "symptoms", label: "Local Symptom Log", emoji: "📝" },
            { id: "posture", label: "Posture Checker", emoji: "🧘" },
          ].map((tool) => (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id as any)}
              className={`w-full flex items-center gap-3 p-4 rounded-xl border text-left font-bold transition-all ${
                activeTool === tool.id
                  ? "bg-[#00E5C4]/15 border-[#00E5C4] text-[#E8E0D5] shadow-[0_0_15px_rgba(0,229,196,0.1)]"
                  : "bg-[#111525] border-border/40 text-[#8B8FA3] hover:text-[#E8E0D5]"
              }`}
            >
              <span>{tool.emoji}</span>
              <span className="text-sm">{tool.label}</span>
            </button>
          ))}
        </div>

        {/* Right Columns: Tool detail container */}
        <div className="lg:col-span-3 min-h-[450px]">
          <div className="rounded-2xl border border-border bg-[#141826]/60 p-6 h-full shadow-lg">
            
            {/* 1. Breathing Pacer Tool */}
            {activeTool === "breathing" && (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <h2 className="text-2xl font-bold text-[#E8E0D5] mb-2">Respiration Pacing</h2>
                <div className="flex gap-2 mb-8 bg-[#0F121F] p-1 rounded-lg border border-border/60">
                  <button
                    onClick={() => setBreathingMethod("box")}
                    className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all ${
                      breathingMethod === "box" ? "bg-[#00E5C4] text-[#0A0E1A]" : "text-[#8B8FA3]"
                    }`}
                  >
                    Box Breathing (4-4-4-4)
                  </button>
                  <button
                    onClick={() => setBreathingMethod("relax")}
                    className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all ${
                      breathingMethod === "relax" ? "bg-[#00E5C4] text-[#0A0E1A]" : "text-[#8B8FA3]"
                    }`}
                  >
                    Relaxation 4-7-8
                  </button>
                </div>

                {/* Breathing circle */}
                <div className="relative mb-6">
                  {/* Outer breathing pulse rings */}
                  <div className={`absolute -inset-6 rounded-full border border-[#00E5C4]/20 transition-transform duration-1000 ${
                    breathState === "Inhale" ? "scale-150 bg-[#00E5C4]/5" : "scale-100 bg-transparent"
                  }`} />
                  
                  <div className={`h-40 w-40 rounded-full border-4 border-[#00E5C4] flex flex-col items-center justify-center transition-all duration-1000 ${
                    breathState === "Inhale" ? "scale-125 bg-[#00E5C4]/15" : "scale-75 bg-[#0A0E1A]"
                  }`}>
                    <span className="text-sm font-bold text-[#00E5C4] capitalize">{breathState}</span>
                    <span className="text-3xl font-extrabold text-[#E8E0D5] font-mono mt-1">{breathTimer}</span>
                  </div>
                </div>

                <p className="text-xs text-[#8B8FA3] max-w-sm">
                  Deep cycles stimulate the vagus nerve and reduce parasympathetic stress markers. Synchronize your chest expansions with the circle.
                </p>
              </div>
            )}

            {/* 2. Heart Beat Simulator */}
            {activeTool === "heart" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#E8E0D5]">Lifetime Heartbeat Simulator</h2>
                <p className="text-sm text-[#8B8FA3]">
                  Your heart is the ultimate motor. See how much work it has performed over your lifespan.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#8B8FA3] block mb-1">
                        Your Age: {ageYears} Years
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="100"
                        value={ageYears}
                        onChange={(e) => setAgeYears(parseInt(e.target.value))}
                        className="w-full h-1.5 bg-[#1A2038] rounded-lg appearance-none cursor-pointer accent-[#00E5C4]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#8B8FA3] block mb-1">
                        Average Resting Heart Rate: {restingBpm} BPM
                      </label>
                      <input
                        type="range"
                        min="50"
                        max="120"
                        value={restingBpm}
                        onChange={(e) => setRestingBpm(parseInt(e.target.value))}
                        className="w-full h-1.5 bg-[#1A2038] rounded-lg appearance-none cursor-pointer accent-[#00E5C4]"
                      />
                    </div>
                  </div>

                  <div className="rounded-xl bg-[#0F121F] p-5 border border-border/60 flex flex-col items-center justify-center text-center">
                    <span className="text-xs font-bold text-[#00E5C4] uppercase tracking-widest">
                      Estimated Heartbeats Since Birth
                    </span>
                    <span className="text-3xl font-extrabold text-[#E8E0D5] font-mono mt-3 glow-text">
                      {estimatedBeats.toLocaleString()}
                    </span>
                    <p className="text-[10px] text-[#8B8FA3] mt-4 max-w-xs leading-relaxed">
                      At this rate, your heart beats approx. { (restingBpm * 1440).toLocaleString() } times every single day. Make sure you hydrate to decrease workload pressure.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 3. Water Intake Log */}
            {activeTool === "water" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-[#E8E0D5]">Anatomical Hydration Tracker</h2>
                  <span className="text-xs font-semibold text-[#8B8FA3]">Anatomy Fact: Water forms 83% of blood.</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Logger console */}
                  <div className="rounded-xl bg-[#0F121F] p-5 border border-border/60 flex flex-col items-center justify-center text-center">
                    <span className="text-3xl">💧</span>
                    <h3 className="font-bold text-[#E8E0D5] mt-2">Logged Today</h3>
                    <span className="text-4xl font-extrabold text-[#00E5C4] font-mono mt-2">{waterToday} ml</span>
                    
                    <div className="flex gap-2 mt-6">
                      <button
                        onClick={() => addWaterIntake(250)}
                        className="rounded-full bg-[#00E5C4]/15 border border-[#00E5C4]/30 text-[#00E5C4] px-4 py-1.5 text-xs font-bold transition-all hover:bg-[#00E5C4]/25"
                      >
                        + 250ml (Cup)
                      </button>
                      <button
                        onClick={() => addWaterIntake(500)}
                        className="rounded-full bg-[#00E5C4]/15 border border-[#00E5C4]/30 text-[#00E5C4] px-4 py-1.5 text-xs font-bold transition-all hover:bg-[#00E5C4]/25"
                      >
                        + 500ml (Bottle)
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#8B8FA3]">Hydration Log (Last 7 Days)</h3>
                    {waterIntakeLogs.length === 0 ? (
                      <p className="text-xs text-[#8B8FA3]">No logging data recorded yet.</p>
                    ) : (
                      <div className="space-y-1.5 max-h-52 overflow-y-auto scrollbar-none">
                        {waterIntakeLogs.slice(-7).reverse().map((log, i) => (
                          <div key={i} className="flex justify-between text-xs bg-[#111525] p-2.5 rounded border border-border/40">
                            <span className="font-semibold text-[#8B8FA3]">{log.date}</span>
                            <span className="font-mono text-[#00E5C4]">{log.amount} ml</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* 4. Sleep Window Calculator */}
            {activeTool === "sleep" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#E8E0D5]">Optimal Sleep Cycles</h2>
                <p className="text-sm text-[#8B8FA3]">
                  Waking up in the middle of a sleep cycle causes grogginess. Plan bedtimes based on natural 90-minute neural rhythms.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#8B8FA3] block mb-1">
                      When do you need to wake up?
                    </label>
                    <input
                      type="time"
                      value={wakeTime}
                      onChange={(e) => setWakeTime(e.target.value)}
                      className="w-full rounded-lg border border-border bg-[#0F121F] p-3 text-sm text-[#E8E0D5] outline-none focus:border-[#00E5C4]/40"
                    />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#00E5C4]">
                      Optimal Bedtimes (Choose one)
                    </h3>
                    <div className="space-y-2">
                      {calculatedBedtimes.map((time, idx) => {
                        const cycles = 6 - idx;
                        return (
                          <div key={idx} className="flex justify-between items-center bg-[#0F121F] p-3 rounded-lg border border-border/60">
                            <div>
                              <span className="text-lg font-bold font-mono text-[#E8E0D5]">{time}</span>
                              <span className="text-[10px] text-[#8B8FA3] ml-2">({cycles * 1.5} hrs sleep)</span>
                            </div>
                            <span className="text-[10px] bg-[#00E5C4]/10 text-[#00E5C4] px-2 py-0.5 rounded font-bold uppercase">
                              {cycles} Cycles
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 5. Local Symptom Log */}
            {activeTool === "symptoms" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#E8E0D5]">Private Symptom Log</h2>
                <p className="text-sm text-[#8B8FA3]">
                  Keep a private timeline of bodily anomalies to share with your physician. Stored securely only in this browser.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Form */}
                  <form onSubmit={handleLogSymptom} className="space-y-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#8B8FA3] block mb-1">
                        Sensation/Symptom
                      </label>
                      <input
                        type="text"
                        value={symName}
                        onChange={(e) => setSymName(e.target.value)}
                        placeholder="e.g. knee ache, visual blur"
                        className="w-full rounded-lg border border-border bg-[#0F121F] p-2.5 text-xs text-[#E8E0D5] outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#8B8FA3] block mb-1">
                        Notes / Context
                      </label>
                      <textarea
                        value={symNotes}
                        onChange={(e) => setSymNotes(e.target.value)}
                        placeholder="Notes on what triggered it..."
                        className="w-full h-20 rounded-lg border border-border bg-[#0F121F] p-2.5 text-xs text-[#E8E0D5] outline-none resize-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#8B8FA3] block mb-1.5">
                        Severity
                      </label>
                      <div className="flex gap-2">
                        {(["mild", "moderate", "severe"] as const).map((sev) => (
                          <button
                            key={sev}
                            type="button"
                            onClick={() => setSymSeverity(sev)}
                            className={`flex-1 rounded-md py-1.5 text-xs capitalize font-bold transition-all border ${
                              symSeverity === sev
                                ? sev === "severe" ? "bg-rose-500/20 border-rose-500 text-rose-400" :
                                  sev === "moderate" ? "bg-amber-500/20 border-amber-500 text-amber-400" :
                                  "bg-emerald-500/20 border-emerald-500 text-emerald-400"
                                : "bg-[#0F121F] border-border text-[#8B8FA3]"
                            }`}
                          >
                            {sev}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-lg bg-[#00E5C4] text-[#0A0E1A] py-2 text-xs font-bold shadow-[0_0_15px_rgba(0,229,196,0.3)] transition-all hover:scale-[1.01]"
                    >
                      Log Entry
                    </button>
                  </form>

                  {/* Timeline list */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#8B8FA3]">Timeline Log</h3>
                    {symptomLogs.length === 0 ? (
                      <p className="text-xs text-[#8B8FA3]">No logged symptoms yet.</p>
                    ) : (
                      <div className="space-y-3 max-h-72 overflow-y-auto pr-1 scrollbar-none">
                        {symptomLogs.map((log) => (
                          <div key={log.id} className="relative rounded-xl bg-[#0F121F] p-4 border border-border/60">
                            <button
                              onClick={() => deleteSymptomLog(log.id)}
                              className="absolute top-3 right-3 text-xs text-rose-400 hover:underline"
                            >
                              Delete
                            </button>
                            <div className="flex items-center gap-2 mb-1.5">
                              <span className={`h-2.5 w-2.5 rounded-full ${
                                log.severity === "severe" ? "bg-rose-500" :
                                log.severity === "moderate" ? "bg-amber-500" :
                                "bg-emerald-500"
                              }`} />
                              <h4 className="font-bold text-xs text-[#E8E0D5] capitalize">{log.symptom}</h4>
                            </div>
                            <p className="text-[10px] text-[#8B8FA3]">{log.date} — {log.notes}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* 6. Posture Checker */}
            {activeTool === "posture" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#E8E0D5]">Posture Alerts</h2>
                <p className="text-sm text-[#8B8FA3]">
                  Prevent "tech neck" syndrome. Opt-in to receive background browser notifications prompting you to stretch your neck and level your shoulder line.
                </p>

                <div className="space-y-4 max-w-md">
                  {notificationStatus === "default" ? (
                    <div className="rounded-xl bg-amber-500/5 border border-amber-500/10 p-4">
                      <p className="text-xs text-[#8B8FA3] mb-3">
                        Browser notifications are not yet enabled. Enable permissions to set posture timers.
                      </p>
                      <button
                        onClick={requestNotificationPermission}
                        className="rounded-lg bg-[#F5A623] text-[#0A0E1A] px-4 py-2 text-xs font-bold"
                      >
                        Enable Notifications
                      </button>
                    </div>
                  ) : notificationStatus === "denied" ? (
                    <p className="text-xs text-rose-400">
                      Notifications are blocked in your browser settings. Enable them in site info settings to use this feature.
                    </p>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-[#8B8FA3]">Reminder Frequency</span>
                        <select
                          value={postureInterval}
                          onChange={(e) => setPostureInterval(parseInt(e.target.value))}
                          className="bg-[#0F121F] border border-border rounded p-1.5 text-xs text-[#E8E0D5]"
                        >
                          <option value={15}>Every 15 Minutes</option>
                          <option value={30}>Every 30 Minutes</option>
                          <option value={60}>Every 1 Hour</option>
                        </select>
                      </div>

                      <button
                        onClick={postureTimerActive ? stopPostureAlerts : startPostureAlerts}
                        className={`w-full rounded-lg py-2.5 text-xs font-bold transition-all ${
                          postureTimerActive
                            ? "bg-rose-500/15 border border-rose-500/40 text-rose-400"
                            : "bg-[#00E5C4] text-[#0A0E1A]"
                        }`}
                      >
                        {postureTimerActive ? "Stop Posture Reminders" : "Start Posture Reminders"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
