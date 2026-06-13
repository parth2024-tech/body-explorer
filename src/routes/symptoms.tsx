import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useBodyStore } from "@/store/useBodyStore";
import { DISEASES, BODY_PARTS, TRANSLATIONS } from "@/data/content";

export const Route = createFileRoute("/symptoms")({
  head: () => ({
    meta: [
      { title: "Symptoms & Conditions Library — The Living Body Atlas" },
      { name: "description", content: "Educational library of common symptoms and conditions. Non-diagnostic resource." }
    ]
  }),
  component: SymptomsPage,
});

const POPULAR_SYMPTOMS = [
  {
    name: "Headache / Migraine",
    innocentCauses: ["Dehydration", "Tension/Stress", "Lack of sleep", "Screen glare"],
    couldItBe: ["Sinus pressure build-up", "Magnesium deficiency", "Caffeine withdrawal"],
    redFlags: [
      "Sudden onset 'thunderclap' headache (worst headache of your life)",
      "Headache with fever and stiff neck",
      "Headache after a head injury",
      "Accompanied by confusion, numbness, or difficulty speaking"
    ]
  },
  {
    name: "Acid Burn / Heartburn",
    innocentCauses: ["Spicy or fatty foods", "Eating too fast", "Lying down immediately after eating"],
    couldItBe: ["Tight clothing pressing stomach", "Stress-induced stomach tension", "Hiatal hernia"],
    redFlags: [
      "Chest pain radiating to jaw, neck, shoulder, or arm",
      "Shortness of breath or sweating",
      "Difficulty swallowing (dysphagia)",
      "Vomiting blood or black/tarry stools"
    ]
  },
  {
    name: "Pins and Needles (Paresthesia)",
    innocentCauses: ["Sitting in one position too long ('limb fell asleep')", "Minor nerve compression"],
    couldItBe: ["Vitamin B12 deficiency", "Mild repetitive strain (e.g. typing)", "Dehydration/Cramping"],
    redFlags: [
      "Numbness/tingling affecting one entire side of the body",
      "Tingling accompanied by sudden weakness or paralysis",
      "Difficulty speaking or loss of balance",
      "Gradual loss of sensation spreading up limbs"
    ]
  }
];

function SymptomsPage() {
  const { language, addHistoryEntry } = useBodyStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedExplorerSymptom, setSelectedExplorerSymptom] = useState(POPULAR_SYMPTOMS[0]);
  const [redFlagAnswers, setRedFlagAnswers] = useState<Record<number, boolean>>({});

  useEffect(() => {
    addHistoryEntry("/symptoms");
  }, []);

  const t = (key: keyof typeof TRANSLATIONS.en) => {
    const dict = TRANSLATIONS[language] || TRANSLATIONS.en;
    return (dict as any)[key] || (TRANSLATIONS.en as any)[key] || key;
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

  const handleSymptomSelect = (name: string) => {
    const sym = POPULAR_SYMPTOMS.find((s) => s.name === name);
    if (sym) {
      setSelectedExplorerSymptom(sym);
      setRedFlagAnswers({});
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-8 page-enter">
      {/* Disclaimer Alert */}
      <div className="mb-8 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-4 text-center border-l-4 border-l-rose-500">
        <span className="font-bold text-rose-400">⚠️ Medical Disclaimer: </span>
        <span className="text-xs text-[#8A8F98]">{t("notADiagnosis")} Seek immediate professional help if you are experiencing severe pain or life-threatening symptoms.</span>
      </div>

      {/* Header */}
      <div className="mb-10 text-center md:text-left">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FC3D21]">
          {t("symptoms")}
        </span>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-[#EAEAEA] sm:text-5xl">
          Symptoms & <span className="gradient-text">Conditions</span> Library
        </h1>
        <p className="mt-4 max-w-2xl text-[#8A8F98]">
          Educational portal for standard symptoms and common medical terms. Learn the biological mechanisms of sensations without panic.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Columns: A-Z Directory & Explorer */}
        <div className="lg:col-span-2 space-y-10">
          {/* Symptom Explorer */}
          <div className="rounded-2xl border border-border bg-[#0F0F0F]/60 p-6">
            <h2 className="text-2xl font-bold text-[#EAEAEA] mb-4">Symptom Explorer</h2>
            
            {/* Horizontal Symptom Selector */}
            <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
              {POPULAR_SYMPTOMS.map((s) => (
                <button
                  key={s.name}
                  onClick={() => handleSymptomSelect(s.name)}
                  className={`rounded-full px-4.5 py-2 text-xs font-bold transition-all whitespace-nowrap ${
                    selectedExplorerSymptom.name === s.name
                      ? "bg-[#FC3D21] text-[#030303]"
                      : "bg-[#16181D] text-[#8A8F98] hover:text-[#EAEAEA]"
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Causes & Could It Be */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#FC3D21] mb-2">
                    Innocent / Common Causes
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-[#8A8F98]">
                    {selectedExplorerSymptom.innocentCauses.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#F5A623] mb-2">
                    "Could It Be...?" (Overlooked factors)
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-[#8A8F98]">
                    {selectedExplorerSymptom.couldItBe.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Red-Flag Checker */}
              <div className="rounded-xl bg-rose-500/5 border border-rose-500/10 p-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-rose-400 mb-3 flex items-center gap-1.5">
                  🚨 Red-Flag Checker
                </h3>
                <p className="text-[11px] text-[#8A8F98] mb-4">
                  Check if you also experience any of these. If yes, consult a medical professional immediately.
                </p>
                <div className="space-y-3">
                  {selectedExplorerSymptom.redFlags.map((flag, idx) => (
                    <label key={idx} className="flex items-start gap-2.5 cursor-pointer text-xs text-[#8A8F98]">
                      <input
                        type="checkbox"
                        checked={!!redFlagAnswers[idx]}
                        onChange={(e) => setRedFlagAnswers((prev) => ({ ...prev, [idx]: e.target.checked }))}
                        className="mt-0.5 rounded border-[#222222] bg-[#030303] text-rose-500 focus:ring-rose-500"
                      />
                      <span className={redFlagAnswers[idx] ? "text-rose-400 font-bold" : ""}>{flag}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* A-Z Disease Directory */}
          <div>
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
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Spotlight & Symptom Map */}
        <div className="space-y-8">
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
