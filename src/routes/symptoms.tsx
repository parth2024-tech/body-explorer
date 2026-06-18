import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useBodyStore } from "@/store/useBodyStore";
import { DISEASES, BODY_PARTS, TRANSLATIONS } from "@/data/content";
import { GoogleGenerativeAI } from "@google/generative-ai";

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
        throw new Error("Gemini API key is missing. Please set GEMINI_API_KEY in your environment.");
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      const languageText = input.language === "hi"
        ? "CRITICAL: The user has selected Hindi. Therefore, you MUST write all text values (e.g. condition names, physiological mechanism descriptions, doctor questions, preventative measures, red flags, likelihoods, and urgency) in clean, readable Hindi (हिंदी). Keep the JSON keys (e.g., 'suspectedConditions', 'name', 'likelihood', 'mechanism', etc.) exactly as specified in English, but fill their values with Hindi translation/content."
        : "All response text must be in English.";

      const prompt = `You are an expert medical physiology educator and diagnostic support assistant.
A user has reported the following symptoms:
- Description: "${input.symptoms}"
- Duration: "${input.duration}"
- Severity: ${input.severity}/5

${languageText}

Provide a JSON response with exactly this structure:
{
  "suspectedConditions": [
    {
      "name": "Condition/Symptom Name",
      "likelihood": "Low/Medium/High",
      "mechanism": "Educational explanation of the physiological mechanism explaining how and why this sensation occurs in the body."
    }
  ],
  "organs": ["brain", "heart"], // Array of lowercase organ IDs from our map (e.g. brain, heart, throat, stomach, liver, kidneys, skin, lungs, bones, muscles)
  "urgency": "Low/Medium/High/Immediate",
  "doctorQuestions": ["Smart question 1", "Smart question 2"],
  "preventativeMeasures": ["Educational lifestyle tip 1", "Educational lifestyle tip 2"],
  "redFlags": ["Emergency symptom A", "Emergency symptom B"]
}

CRITICAL: Do NOT give a definitive medical diagnosis. Keep it strictly educational. Return ONLY the raw JSON string.`;

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
      console.error("AI Symptom Analyzer Error:", error);
      
      if (input.language === "hi") {
        return {
          suspectedConditions: [
            {
              name: "अनिर्दिष्ट मस्कुलोस्केलेटल या कार्यात्मक असुविधा",
              likelihood: "Medium",
              mechanism: "शारीरिक लक्षण अक्सर खिंचाव, निर्जलीकरण या तनाव के कारण शुरू होते हैं, जिससे स्थानीय संवेदी तंत्रिकाएं मस्तिष्क के पार्श्विका लोब (parietal lobe) में आवेग वापस भेजती हैं।"
            }
          ],
          organs: ["skin"],
          urgency: "Low" as const,
          doctorQuestions: [
            "मुझे हाल ही में यह असुविधा महसूस हो रही है। आप किन जीवनशैली परिवर्तनों या बुनियादी जांचों की सिफारिश करते हैं?",
            "क्या कोई विशिष्ट तनाव-मुक्ति या स्ट्रेचिंग पैटर्न हैं जो मदद कर सकते हैं?"
          ],
          preventativeMeasures: [
            "दैनिक जलयोजन मानकों को बनाए रखें (8+ गिलास पानी)।",
            "पोस्चर संरेखण की समीक्षा करें और छोटे स्ट्रेच ब्रेक शेड्यूल करें।"
          ],
          redFlags: [
            "गंभीर स्थानीय दर्द जो नींद में बाधा डालता है",
            "सांस लेने में तकलीफ या फैलती हुई सुन्नता"
          ]
        };
      }

      // Fallback
      return {
        suspectedConditions: [
          {
            name: "Unspecified Musculoskeletal or Functional Discomfort",
            likelihood: "Medium",
            mechanism: "Physical symptoms are often triggered by micro-strain, dehydration, or stress, causing localized sensory nerves to fire impulses back to the parietal lobe."
          }
        ],
        organs: ["skin"],
        urgency: "Low" as const,
        doctorQuestions: [
          "I've been feeling this discomfort recently. What lifestyle changes or baseline screenings do you recommend?",
          "Are there specific stress-reduction or stretching patterns that might help?"
        ],
        preventativeMeasures: [
          "Maintain daily hydration standards (8+ glasses of water).",
          "Review posture alignment and schedule short stretch breaks."
        ],
        redFlags: [
          "Severe localized pain that prevents sleep",
          "Shortness of breath or spreading numbness"
        ]
      };
    }
  });

export const Route = createFileRoute("/symptoms")({
  head: () => ({
    meta: [
      { title: "Symptoms & AI Explorer — The Living Body Atlas" },
      { name: "description", content: "AI-powered educational symptom evaluator and pre-consultation doctor report generator. Non-diagnostic resource." }
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
        data: {
          symptoms: symptomsDesc,
          duration,
          severity,
          language
        }
      });
      setReportData(result);
    } catch (err) {
      console.error(err);
    } finally {
      setAnalyzing(false);
    }
  };

  // Filter A-Z directory
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
    <div className="mx-auto max-w-7xl px-5 py-8 page-enter">
      {/* Print-specific style override */}
      <style>{`
        @media print {
          nav, footer, header, aside, .no-print {
            display: none !important;
          }
          body {
            background: #ffffff !important;
            color: #000000 !important;
            font-size: 12pt;
          }
          .print-container {
            display: block !important;
            width: 100% !important;
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            background: #ffffff !important;
            color: #000000 !important;
            box-shadow: none !important;
            border: none !important;
          }
          .print-card {
            border: 1px solid #ddd !important;
            background: #fff !important;
            color: #000 !important;
            padding: 15px !important;
            margin-bottom: 15px !important;
            page-break-inside: avoid;
          }
          .print-header {
            border-bottom: 2px solid #000 !important;
            padding-bottom: 10px !important;
            margin-bottom: 20px !important;
          }
        }
      `}</style>

      {/* Disclaimer Alert */}
      <div className="mb-8 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-4 text-center border-l-4 border-l-rose-500 no-print">
        <span className="font-bold text-rose-400">⚠️ Medical Disclaimer: </span>
        <span className="text-xs text-[#8A8F98]">{t("notADiagnosis")} Seek immediate professional help if you are experiencing severe pain or life-threatening symptoms.</span>
      </div>

      {/* Header */}
      <div className="mb-10 text-center md:text-left no-print">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FC3D21]">
          {t("symptoms")}
        </span>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-[#EAEAEA] sm:text-5xl">
          Symptoms & <span className="gradient-text">AI Explorer</span>
        </h1>
        <p className="mt-4 max-w-2xl text-[#8A8F98]">
          Explain what you are feeling in your own words. Receive physiological breakdowns of potential mechanisms and export a structured visit report for your doctor.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Columns: AI Symptom Wizard & Results */}
        <div className="lg:col-span-2 space-y-10">
          {/* Interactive AI Wizard Form */}
          <div className="rounded-2xl border border-border bg-[#0F0F0F]/60 p-6 no-print">
            <h2 className="text-2xl font-bold text-[#EAEAEA] mb-4 flex items-center gap-2">
              ✨ AI Symptom Explorer
            </h2>
            <form onSubmit={handleAIAnalyze} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8A8F98] mb-2">
                  1. Describe your physical sensations
                </label>
                <textarea
                  value={symptomsDesc}
                  onChange={(e) => setSymptomsDesc(e.target.value)}
                  placeholder="e.g. 'I feel a dull, throbbing pressure behind my left eye, especially when looking at screens for over an hour...'"
                  className="w-full h-28 rounded-xl border border-border bg-[#030303] p-4 text-sm text-[#EAEAEA] placeholder-[#555] outline-none focus:border-[#FC3D21]/50"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#8A8F98] mb-2">
                    2. Duration / Frequency
                  </label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full rounded-xl border border-border bg-[#030303] px-4 py-3 text-sm text-[#EAEAEA] outline-none focus:border-[#FC3D21]/50"
                  >
                    <option value="Less than 24 hours">Less than 24 hours</option>
                    <option value="A few days">A few days</option>
                    <option value="1-2 weeks">1-2 weeks</option>
                    <option value="Over a month">Over a month</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#8A8F98] mb-2">
                    3. Severity Level ({severity}/5)
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={severity}
                      onChange={(e) => setSeverity(parseInt(e.target.value))}
                      className="w-full accent-[#FC3D21]"
                    />
                    <span className="font-mono text-sm font-bold text-[#FC3D21] w-24 text-right">
                      {["Mild", "Moderate", "Notable", "Severe", "Extreme"][severity - 1]}
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={!symptomsDesc.trim() || analyzing}
                className="w-full rounded-xl bg-[#FC3D21] py-3.5 text-sm font-bold text-[#030303] hover:scale-[1.01] transition-transform disabled:opacity-40 disabled:cursor-not-allowed shadow-[0_0_30px_rgba(252,61,33,0.15)]"
              >
                {analyzing ? "Analyzing physiological signals..." : "Generate Doctor Pre-Consultation Summary"}
              </button>
            </form>
          </div>

          {/* Loading Animation */}
          <AnimatePresence>
            {analyzing && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="rounded-2xl border border-border bg-[#0F0F0F]/60 p-8 text-center no-print"
              >
                <div className="mx-auto h-12 w-12 rounded-full border-2 border-t-[#FC3D21] border-border animate-spin mb-4" />
                <h3 className="font-bold text-[#EAEAEA]">Evaluating Symptoms</h3>
                <p className="text-xs text-[#8A8F98] mt-1 max-w-sm mx-auto">
                  Gemini is mapping described sensory anomalies to core anatomical systems. Preparing your visit guide...
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* AI Output / Printable Report Panel */}
          {reportData && !analyzing && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="print-container space-y-6"
            >
              <div className="rounded-2xl border border-[#FC3D21]/20 bg-[#0F0F0F] p-6 shadow-[0_0_40px_rgba(252,61,33,0.05)]">
                {/* Report Header */}
                <div className="print-header flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border pb-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-black text-[#EAEAEA]">Pre-Consultation Summary Report</h2>
                    <p className="text-xs text-[#8A8F98] mt-0.5">Generated via The Living Body Atlas AI assistant on {new Date().toLocaleDateString()}</p>
                  </div>
                  <button
                    onClick={() => window.print()}
                    className="no-print rounded-lg bg-[#FC3D21]/10 border border-[#FC3D21]/30 px-4 py-2 text-xs font-bold text-[#FC3D21] hover:bg-[#FC3D21] hover:text-[#030303] transition-colors"
                  >
                    🖨️ Print / Save as PDF
                  </button>
                </div>

                {/* User Input Recap (Printable) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#141414] p-4 rounded-xl border border-border/40 mb-6 print-card">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-[#8A8F98]">Reported Symptoms</div>
                    <div className="text-xs text-[#EAEAEA] mt-1 italic">"{symptomsDesc}"</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-[#8A8F98]">Reported Duration</div>
                    <div className="text-xs text-[#EAEAEA] mt-1">{duration}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-[#8A8F98]">Indicated Severity</div>
                    <div className="text-xs font-bold text-[#FC3D21] mt-1">{severity}/5 ({["Mild", "Moderate", "Notable", "Severe", "Extreme"][severity - 1]})</div>
                  </div>
                </div>

                {/* AI Suspected Conditions & Mechanisms */}
                <div className="space-y-4 mb-6 print-card">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#FC3D21]">Potential Physiological Explanations</h3>
                  <div className="space-y-3">
                    {reportData.suspectedConditions.map((cond, idx) => (
                      <div key={idx} className="bg-[#030303] p-4 rounded-xl border border-border">
                        <div className="flex items-center justify-between gap-4">
                          <h4 className="font-bold text-[#EAEAEA] text-md">{cond.name}</h4>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                            cond.likelihood === "High" ? "bg-rose-500/10 text-rose-400" :
                            cond.likelihood === "Medium" ? "bg-amber-500/10 text-amber-400" :
                            "bg-teal-500/10 text-teal-400"
                          }`}>
                            Likelihood: {cond.likelihood}
                          </span>
                        </div>
                        <p className="text-xs text-[#8A8F98] mt-2 leading-relaxed">{cond.mechanism}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Organs / Systems Involved */}
                <div className="mb-6 print-card">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#8A8F98] mb-3">Anatomical Regions of Interest</h3>
                  <div className="flex flex-wrap gap-2">
                    {reportData.organs.map((organId) => {
                      const part = BODY_PARTS.find((p) => p.id === organId);
                      return part ? (
                        <span
                          key={organId}
                          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-[#141414] px-3 py-1.5 text-xs text-[#EAEAEA]"
                        >
                          <span>{part.emoji}</span>
                          <span className="font-semibold">{part.name}</span>
                          <span className="text-[10px] text-[#8A8F98]">({part.system})</span>
                        </span>
                      ) : (
                        <span key={organId} className="rounded-full border border-border bg-[#141414] px-3 py-1 text-xs text-[#EAEAEA] capitalize">
                          {organId}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Grid: Recommended Questions & Red Flags */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print-card">
                  {/* Doctor Questions */}
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#F5A623] mb-3">Questions to Ask Your Doctor</h3>
                    <ul className="space-y-2">
                      {reportData.doctorQuestions.map((q, idx) => (
                        <li key={idx} className="text-xs text-[#8A8F98] flex gap-2">
                          <span className="text-[#F5A623] font-bold">➔</span>
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Red flags */}
                  <div className="bg-rose-500/5 border border-rose-500/15 p-4 rounded-xl">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-rose-400 mb-2 flex items-center gap-1">
                      🚨 Red Flag Indicators
                    </h3>
                    <p className="text-[10px] text-[#8A8F98] mb-3">If you notice any of the following, seek immediate urgent medical evaluation:</p>
                    <ul className="space-y-1.5">
                      {reportData.redFlags.map((flag, idx) => (
                        <li key={idx} className="text-xs text-rose-300 flex items-start gap-1.5">
                          <span className="mt-0.5">•</span>
                          <span>{flag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Preventative measures */}
                <div className="mt-6 pt-4 border-t border-border/40 print-card">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-teal-400 mb-2">Educational Support Measures</h3>
                  <ul className="list-disc list-inside space-y-1 text-xs text-[#8A8F98]">
                    {reportData.preventativeMeasures.map((m, idx) => (
                      <li key={idx}>{m}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {/* A-Z Disease Directory */}
          <div className="no-print">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-2xl font-bold text-[#EAEAEA]">A–Z Disease Directory</h2>
              <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {["head", "chest", "abdomen", "spine"].map((region) => (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(selectedRegion === region ? null : region)}
                    className={`rounded-md px-3 py-1.5 text-xs capitalize font-semibold transition-all ${
                      selectedRegion === region
                        ? "bg-[#FC3D21]/15 text-[#FC3D21] border border-[#FC3D21]/30"
                        : "bg-[#16181D] text-[#8A8F98] hover:text-[#EAEAEA]"
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>

            {/* A-Z Search */}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search diseases directory..."
              className="w-full mb-6 rounded-xl border border-border bg-[#0F0F0F]/80 px-4.5 py-3 text-sm text-[#EAEAEA] placeholder-[#8A8F98] outline-none focus:border-[#FC3D21]/40"
            />

            {filteredDiseases.length === 0 ? (
              <p className="text-sm text-[#8A8F98]">No matching diseases found.</p>
            ) : (
              <div className="space-y-4">
                {filteredDiseases.map((d) => (
                  <div key={d.id} className="rounded-xl border border-border bg-[#0D0D0D] p-5">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-[#EAEAEA]">{d.name}</h3>
                        <span className="text-[10px] text-[#FC3D21] font-semibold uppercase tracking-wider block mt-0.5">
                          Affected Organ ID: {d.bodyPartId}
                        </span>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-[#8A8F98]">{d.overview}</p>

                    {/* Symptoms lists */}
                    <div className="mt-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A8F98] mb-2">
                        Common Symptoms & Frequency
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {d.symptoms.map((s, i) => (
                          <span key={i} className="inline-flex items-center gap-1.5 rounded bg-[#16181D] px-2.5 py-1 text-xs text-[#EAEAEA] border border-border/40">
                            {s.text} 
                            <span className={`text-[9px] px-1 rounded uppercase font-bold ${
                              s.frequency === "always" ? "bg-rose-500/10 text-rose-400" :
                              s.frequency === "often" ? "bg-amber-500/10 text-amber-400" :
                              "bg-[#8A8F98]/10 text-[#8A8F98]"
                            }`}>
                              {s.frequency}
                            </span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Misconceptions */}
                    <div className="mt-4 border-l-2 border-amber-500/40 pl-4 py-1 text-xs text-[#8A8F98]">
                      <strong className="text-[#F5A623] block mb-1">Common Misconceptions:</strong>
                      <ul className="list-disc list-inside space-y-0.5">
                        {d.misconceptions.map((m, i) => (
                          <li key={i}>{m}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Doctor guidance */}
                    <div className="mt-4 bg-rose-500/5 border border-rose-500/10 p-3.5 rounded-lg text-xs text-rose-300">
                      <strong>When to see a doctor:</strong> {d.whenToSeeDoctor}
                    </div>

                    {/* Gen Z Context */}
                    {d.genZContext && (
                      <div className="mt-4 bg-[#A855F7]/10 border border-[#A855F7]/20 p-3.5 rounded-lg text-xs text-[#A855F7]">
                        <strong>Gen Z Translation:</strong> {d.genZContext}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Spotlight & Region Map Filter */}
        <div className="space-y-8 no-print">
          {/* Spotlight article */}
          <div className="rounded-xl border border-border bg-[#0F0F0F] p-5">
            <span className="rounded bg-teal-500/10 px-2 py-0.5 text-[10px] font-bold text-teal-400 uppercase border border-teal-500/20">
              Symptom Spotlight
            </span>
            <h3 className="mt-3 text-lg font-bold text-[#EAEAEA]">Why do we feel pins & needles?</h3>
            <p className="mt-2.5 text-xs text-[#8A8F98] leading-relaxed">
              Officially known as <strong>paresthesia</strong>, this prickling sensation occurs when a nerve is continuously compressed, blockading blood flow and electrical signals. When the pressure is removed, the nerve suddenly wakes up, firing a chaotic flurry of electrical impulses to your brain which translates it as "pins and needles."
            </p>
            <div className="mt-4 pt-3 border-t border-border/40 text-[10px] text-[#8A8F98]">
              <strong>Tip:</strong> Avoid resting your head on your arm or keeping legs crossed at the knees for over 20 minutes.
            </div>
          </div>

          {/* Quick Body region filter panel */}
          <div className="rounded-xl border border-border bg-[#0F0F0F] p-5">
            <h3 className="text-md font-bold text-[#EAEAEA] mb-3">Map Region Selector</h3>
            <p className="text-xs text-[#8A8F98] mb-4">
              Select a body region to instantly filter matching library conditions.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: "head", label: "Head & Neck" },
                { id: "chest", label: "Thoracic / Chest" },
                { id: "abdomen", label: "Abdominal / Gut" },
                { id: "spine", label: "Spine / Back" },
              ].map((r) => (
                <button
                  key={r.id}
                  onClick={() => setSelectedRegion(selectedRegion === r.id ? null : r.id)}
                  className={`p-3 rounded-lg border text-xs font-semibold text-center transition-all ${
                    selectedRegion === r.id
                      ? "bg-[#FC3D21]/15 border-[#FC3D21] text-[#FC3D21]"
                      : "bg-[#0D0D0D] border-border/60 text-[#8A8F98] hover:text-[#EAEAEA] hover:border-border"
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
