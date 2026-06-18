import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useBodyStore } from "@/store/useBodyStore";
import { DISEASES, BODY_PARTS, TRANSLATIONS } from "@/data/content";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { DiseaseCard } from "@/components/symptoms/DiseaseCard";
import { Sparkles, Brain, Loader2, FileText, Activity } from "lucide-react";

interface SymptomReport {
  symptoms: string;
  duration: string;
  severity: number;
  language?: string;
}

interface SuspectedCondition {
  name: string;
  likelihood: string;
  mechanism: string;
}

interface AIAnalysisResult {
  suspectedConditions: SuspectedCondition[];
  organs: string[];
  urgency: "Low" | "Medium" | "High" | "Immediate";
  doctorQuestions: string[];
  preventativeMeasures: string[];
  redFlags: string[];
}

const evaluateSymptom = createServerFn({ method: "POST" })
  .validator((data: SymptomReport) => data)
  .handler(async ({ data: input }) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY || (import.meta as any).env?.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("Gemini API key is missing.");
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      const languageText = input.language === "hi"
        ? "CRITICAL: Write all text values in Hindi (हिंदी). Keep JSON keys in English."
        : "All response text must be in English.";

      const prompt = `You are an expert medical physiology educator.
A user has reported the following symptoms:
- Description: "${input.symptoms}"
- Duration: "${input.duration}"
- Severity: ${input.severity}/5

${languageText}

Provide a JSON response strictly adhering to this structure:
{
  "suspectedConditions": [
    {
      "name": "Condition Name",
      "likelihood": "Low/Medium/High",
      "mechanism": "Educational physiological mechanism explanation."
    }
  ],
  "organs": ["brain", "heart"],
  "urgency": "Low/Medium/High/Immediate",
  "doctorQuestions": ["Question 1", "Question 2"],
  "preventativeMeasures": ["Measure 1", "Measure 2"],
  "redFlags": ["Emergency symptom A", "Emergency symptom B"]
}

CRITICAL: Educational only. Return ONLY raw JSON string.`;

      const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.3,
          responseMimeType: "application/json",
        }
      });

      const responseText = result.response.text();
      const cleanedText = responseText.replace(/^```json/i, '').replace(/^```/, '').replace(/```$/, '').trim();
      return JSON.parse(cleanedText) as AIAnalysisResult;
    } catch (error) {
      console.error("AI Error:", error);
      // Fallback object truncated for brevity, same as original
      return {
        suspectedConditions: [
          {
            name: "Unspecified Discomfort",
            likelihood: "Medium",
            mechanism: "Sensory nerves are firing impulses back to the parietal lobe due to an unknown stressor."
          }
        ],
        organs: ["skin"],
        urgency: "Low" as const,
        doctorQuestions: ["What lifestyle changes do you recommend?"],
        preventativeMeasures: ["Maintain daily hydration."],
        redFlags: ["Severe localized pain"]
      };
    }
  });

export const Route = createFileRoute("/symptoms")({
  head: () => ({
    meta: [
      { title: "Symptoms AI — The Living Body Atlas" },
      { name: "description", content: "AI-powered educational symptom evaluator." }
    ]
  }),
  component: SymptomsPage,
});

function SymptomsPage() {
  const { language, addHistoryEntry } = useBodyStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  
  // AI Form States
  const [symptomsDesc, setSymptomsDesc] = useState("");
  const [duration, setDuration] = useState("A few days");
  const [severity, setSeverity] = useState(3);
  const [analyzing, setAnalyzing] = useState(false);
  const [reportData, setReportData] = useState<AIAnalysisResult | null>(null);

  useEffect(() => {
    addHistoryEntry("/symptoms");
  }, []);

  const t = (key: keyof typeof TRANSLATIONS.en) => {
    const dict = TRANSLATIONS[language] || TRANSLATIONS.en;
    return (dict as any)[key] || (TRANSLATIONS.en as any)[key] || key;
  };

  const handleAIAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!symptomsDesc.trim()) return;
    setAnalyzing(true);
    setReportData(null);

    try {
      const result = await evaluateSymptom({
        data: { symptoms: symptomsDesc, duration, severity, language }
      });
      setReportData(result);
    } catch (err) {
      console.error(err);
    } finally {
      setAnalyzing(false);
    }
  };

  const filteredDiseases = DISEASES.filter((d) => {
    const matchesSearch =
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.overview.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = !selectedRegion || getBodyPartRegion(d.bodyPartId) === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  function getBodyPartRegion(partId?: string) {
    if (!partId) return "";
    const part = BODY_PARTS.find((p) => p.id === partId);
    return part ? part.region : "";
  }

  return (
    <div className="min-h-screen bg-[#030303] text-[#EAEAEA] font-sans selection:bg-[#FC3D21]/30 pb-32">
      <style>{`
        @media print {
          nav, footer, header, .no-print { display: none !important; }
          body { background: #ffffff !important; color: #000000 !important; font-size: 12pt; }
          .print-container { display: block !important; width: 100% !important; margin: 0 !important; padding: 0 !important; border: none !important; box-shadow: none !important; background: transparent !important; }
          .print-card { border: 1px solid #ddd !important; padding: 15px !important; margin-bottom: 15px !important; background: #fff !important; color: #000 !important; page-break-inside: avoid; }
        }
      `}</style>

      {/* Medical Disclaimer Banner */}
      <div className="w-full bg-rose-500/10 border-b border-rose-500/30 px-4 py-3 flex items-start sm:items-center justify-center no-print">
        <p className="text-xs sm:text-sm font-mono text-rose-500 leading-snug text-center">
          <strong className="uppercase tracking-wider">⚠️ NOT A DIAGNOSIS:</strong> Seek immediate professional help if experiencing severe pain or life-threatening symptoms.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-12">
        {/* Header */}
        <header className="mb-16 relative text-center max-w-3xl mx-auto no-print">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-96 bg-[#FC3D21]/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FC3D21]">
              {t("symptoms")}
            </span>
            <h1 className="mt-4 text-5xl md:text-6xl font-space font-extrabold tracking-tighter text-white">
              AI Symptom <span className="text-[#FC3D21]">Analyzer</span>
            </h1>
            <p className="text-[#8A8F98] mt-6 font-mono text-sm leading-relaxed">
              Describe your physical sensations. Our AI maps your sensory anomalies to core anatomical systems, explaining the physiological mechanics, and generating a structured report for your doctor.
            </p>
          </div>
        </header>

        {/* AI Wizard & Results Area (Full Width) */}
        <div className="mb-20">
          <div className="relative rounded-[2rem] border border-white/10 bg-[#0F0F0F]/60 p-1 shadow-2xl backdrop-blur-xl no-print">
            <div className="rounded-[1.8rem] bg-black/40 p-6 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FC3D21] to-transparent opacity-50" />
              
              <h2 className="text-xl md:text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Brain className="w-6 h-6 text-[#FC3D21]" />
                Describe your sensations
              </h2>

              <form onSubmit={handleAIAnalyze} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#8A8F98] mb-3">
                      1. What are you feeling?
                    </label>
                    <textarea
                      value={symptomsDesc}
                      onChange={(e) => setSymptomsDesc(e.target.value)}
                      placeholder="e.g. 'I feel a dull, throbbing pressure behind my left eye...'"
                      className="w-full h-32 rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-sm text-[#EAEAEA] placeholder-[#555] outline-none focus:border-[#FC3D21]/50 focus:bg-white/[0.04] transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#8A8F98] mb-3">
                        2. Duration
                      </label>
                      <select
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 text-sm text-[#EAEAEA] outline-none focus:border-[#FC3D21]/50 appearance-none"
                      >
                        <option value="Less than 24 hours">Less than 24 hours</option>
                        <option value="A few days">A few days</option>
                        <option value="1-2 weeks">1-2 weeks</option>
                        <option value="Over a month">Over a month</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#8A8F98] mb-3 flex justify-between">
                        <span>3. Severity</span>
                        <span className="text-[#FC3D21]">{severity}/5</span>
                      </label>
                      <div className="flex flex-col gap-2">
                        <input
                          type="range"
                          min="1"
                          max="5"
                          value={severity}
                          onChange={(e) => setSeverity(parseInt(e.target.value))}
                          className="w-full accent-[#FC3D21]"
                        />
                        <div className="flex justify-between text-[10px] text-[#8A8F98] uppercase font-bold px-1">
                          <span>Mild</span>
                          <span>Extreme</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!symptomsDesc.trim() || analyzing}
                  className="w-full rounded-2xl bg-[#FC3D21] py-4 text-sm font-bold text-[#030303] uppercase tracking-wider hover:bg-red-500 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-[0_0_30px_rgba(252,61,33,0.2)] flex justify-center items-center gap-2"
                >
                  {analyzing ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
                  {analyzing ? "Mapping sensory anomalies..." : "Generate Pre-Consultation Summary"}
                </button>
              </form>
            </div>
          </div>

          {/* Report Output */}
          <AnimatePresence>
            {reportData && !analyzing && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 print-container"
              >
                <div className="rounded-[2rem] border border-[#FC3D21]/30 bg-black/60 p-6 md:p-10 shadow-[0_0_50px_rgba(252,61,33,0.1)] backdrop-blur-md">
                  <div className="print-header flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6 mb-8">
                    <div>
                      <h2 className="text-3xl font-black text-white flex items-center gap-3">
                        <FileText className="w-8 h-8 text-[#FC3D21]" />
                        Pre-Consultation Summary
                      </h2>
                      <p className="text-xs text-[#8A8F98] mt-2 font-mono">Generated via The Living Body Atlas AI</p>
                    </div>
                    <button
                      onClick={() => window.print()}
                      className="no-print rounded-xl bg-white/5 border border-white/10 px-5 py-3 text-xs font-bold text-white hover:bg-white hover:text-black transition-colors flex items-center gap-2 uppercase tracking-wider"
                    >
                      🖨️ Print Report
                    </button>
                  </div>

                  {/* AI Output Content structure identical to original but styled better */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column: Explanations */}
                    <div className="space-y-8">
                      <div className="print-card">
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#FC3D21] mb-4">Physiological Explanations</h3>
                        <div className="space-y-4">
                          {reportData.suspectedConditions.map((cond, idx) => (
                            <div key={idx} className="bg-white/[0.02] p-5 rounded-2xl border border-white/5">
                              <div className="flex justify-between items-start gap-4 mb-3">
                                <h4 className="font-bold text-white text-lg">{cond.name}</h4>
                                <span className={`text-[9px] font-bold px-2 py-1 rounded uppercase tracking-wider ${
                                  cond.likelihood === "High" ? "bg-rose-500/20 text-rose-400" :
                                  cond.likelihood === "Medium" ? "bg-amber-500/20 text-amber-400" :
                                  "bg-teal-500/20 text-teal-400"
                                }`}>
                                  {cond.likelihood}
                                </span>
                              </div>
                              <p className="text-sm text-[#8A8F98] leading-relaxed">{cond.mechanism}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="print-card">
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-teal-400 mb-4">Preventative / Lifestyle Measures</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm text-[#EAEAEA]">
                          {reportData.preventativeMeasures.map((m, idx) => (
                            <li key={idx} className="leading-relaxed">{m}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column: Alerts & Questions */}
                    <div className="space-y-8">
                      <div className="bg-rose-500/5 border border-rose-500/20 p-6 rounded-2xl print-card">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-rose-500 mb-2 flex items-center gap-2">
                          🚨 Red Flag Indicators
                        </h3>
                        <p className="text-xs text-rose-200/60 mb-4">Seek immediate care if you notice:</p>
                        <ul className="space-y-3">
                          {reportData.redFlags.map((flag, idx) => (
                            <li key={idx} className="text-sm text-rose-100 flex items-start gap-2">
                              <span className="text-rose-500 mt-1">•</span>
                              <span>{flag}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="print-card">
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-4">Questions for your Doctor</h3>
                        <ul className="space-y-3">
                          {reportData.doctorQuestions.map((q, idx) => (
                            <li key={idx} className="text-sm text-[#EAEAEA] flex gap-3 p-4 bg-white/[0.02] rounded-xl border border-white/5">
                              <span className="text-amber-500 font-bold">Q.</span>
                              <span>{q}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* A-Z Directory Grid */}
        <div className="mt-20 no-print">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <Activity className="w-8 h-8 text-[#00E5C4]" />
                Disease Directory
              </h2>
              <p className="text-sm text-[#8A8F98] mt-2 font-mono">Expand cards for physiological breakdowns.</p>
            </div>
            
            <div className="flex bg-white/5 p-1.5 rounded-xl border border-white/10 overflow-x-auto max-w-full hide-scrollbar">
              {["head", "chest", "abdomen", "spine"].map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(selectedRegion === region ? null : region)}
                  className={`px-4 py-2 rounded-lg text-xs capitalize font-bold transition-all whitespace-nowrap ${
                    selectedRegion === region
                      ? "bg-white text-black"
                      : "text-[#8A8F98] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          <div className="relative mb-8">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by condition or organ..."
              className="w-full rounded-2xl border border-white/10 bg-white/[0.02] pl-14 pr-6 py-4 text-sm text-white placeholder-[#555] outline-none focus:border-[#00E5C4]/50 focus:bg-white/[0.04] transition-all"
            />
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-lg">🔍</span>
          </div>

          {filteredDiseases.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#8A8F98]">No matching diseases found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredDiseases.map((d) => (
                <DiseaseCard key={d.id} disease={d} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
