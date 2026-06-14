import { useState } from 'react';
import { useGreyMarketStore } from '@/store/useGreyMarketStore';
import { AlertCircle, ShieldCheck, FileText, BrainCircuit, X, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateToxicologyReport } from '@/functions/toxicology';

type Tab = 'Regulatory' | 'Mechanism' | 'Alternatives';

export function MoleculeDetailHUD() {
  const { selectedMolecule, setSelectedMolecule } = useGreyMarketStore();
  const [activeTab, setActiveTab] = useState<Tab>('Regulatory');
  const [isDeepDiveLoading, setIsDeepDiveLoading] = useState(false);
  const [deepDiveResult, setDeepDiveResult] = useState<any>(null);

  if (!selectedMolecule) return null;

  const m = selectedMolecule;

  const handleDeepDive = async () => {
    setIsDeepDiveLoading(true);
    try {
      const result = await generateToxicologyReport({ data: m.molecule });
      setDeepDiveResult(result);
    } catch (error) {
      console.error("Deep dive failed:", error);
      alert("Failed to generate report. Make sure your API key is set.");
    } finally {
      setIsDeepDiveLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="w-full h-full rounded-xl border border-white/10 overflow-hidden flex flex-col"
      style={{
        backdropFilter: 'blur(20px)',
        background: 'rgba(255, 255, 255, 0.05)',
      }}
    >
      {/* Header */}
      <div className="p-5 border-b border-white/10 relative">
        <button
          onClick={() => setSelectedMolecule(null)}
          className="absolute top-4 right-4 p-1.5 text-[#8A8F98] hover:text-white rounded-md hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-space font-bold uppercase tracking-wider text-[#EAEAEA] pr-8">
          {m.brand_names_india.join(', ')}
        </h2>
        <p className="text-sm font-mono text-[#8A8F98] mt-2 leading-relaxed">
          <span className="text-[#EAEAEA]">Chemical / Active Molecule:</span> {m.molecule}
        </p>
        <div className="mt-4 p-3 bg-black/40 border border-[#222222] rounded-md font-mono text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#FF9500] shrink-0" />
          <span className="text-[#EAEAEA] leading-relaxed">
            <strong className="text-[#FF9500]">How to spot:</strong> {m.how_to_spot}
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/10">
        {(['Regulatory', 'Mechanism', 'Alternatives'] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 text-sm font-mono font-bold uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === tab
                ? 'text-[#EAEAEA] border-[#FC3D21] bg-white/5'
                : 'text-[#8A8F98] border-transparent hover:bg-white/5 hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-5 flex-1 overflow-y-auto custom-scrollbar">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
          >
            {activeTab === 'Regulatory' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-[#8A8F98] uppercase tracking-widest mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" /> Global Status
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(m.status_global).map(([country, status]) => (
                      <div key={country} className="p-3 bg-black/30 border border-white/10 rounded-md">
                        <div className="text-xs font-mono text-[#8A8F98] uppercase">{country}</div>
                        <div className="text-sm text-[#EAEAEA] mt-1 font-medium">{status}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#8A8F98] uppercase tracking-widest mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4" /> Indian Regulatory Data
                  </h3>
                  <div className="p-4 bg-[#FC3D21]/10 border border-[#FC3D21]/30 rounded-md">
                    <p className="text-[#EAEAEA] text-sm leading-relaxed mb-3">
                      {m.status_india}
                    </p>
                    <div className="text-xs font-mono text-[#FC3D21] bg-[#FC3D21]/10 px-2 py-1 rounded inline-block">
                      Ref: {m.cdsco_ref}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Mechanism' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-[#8A8F98] uppercase tracking-widest mb-3">
                    Toxicological Mechanism
                  </h3>
                  <p className="text-[#EAEAEA] leading-relaxed text-sm p-4 bg-black/30 border border-white/10 rounded-md">
                    {m.mechanism}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 text-center">
                  {!deepDiveResult ? (
                    <>
                      <button
                        onClick={handleDeepDive}
                        disabled={isDeepDiveLoading}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0B3D91] hover:bg-[#0B3D91]/80 text-white rounded-md font-mono text-sm font-bold uppercase tracking-wider transition-colors border border-[#0B3D91]/50 shadow-[0_0_15px_rgba(11,61,145,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isDeepDiveLoading ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <BrainCircuit className="w-4 h-4" />
                        )}
                        {isDeepDiveLoading ? 'Analyzing...' : 'Deep Dive with AI'}
                      </button>
                      <p className="text-xs text-[#8A8F98] mt-3 max-w-[280px] mx-auto">
                        Generate a detailed toxicology report and action plan based on global pharmacovigilance data.
                      </p>
                    </>
                  ) : (
                    <div className="text-left space-y-4">
                      <div className="p-4 bg-[#0B3D91]/10 border border-[#0B3D91]/30 rounded-md">
                        <h4 className="text-xs font-bold text-[#0A84FF] uppercase tracking-wider mb-2">Pharmacokinetics</h4>
                        <p className="text-sm text-[#EAEAEA] leading-relaxed">{deepDiveResult.pharmacokinetics}</p>
                      </div>
                      <div className="p-4 bg-[#FC3D21]/10 border border-[#FC3D21]/30 rounded-md">
                        <h4 className="text-xs font-bold text-[#FC3D21] uppercase tracking-wider mb-2">Toxicity Mechanism</h4>
                        <p className="text-sm text-[#EAEAEA] leading-relaxed">{deepDiveResult.toxicity_mechanism}</p>
                      </div>
                      <div className="p-4 bg-white/5 border border-white/10 rounded-md">
                        <h4 className="text-xs font-bold text-[#8A8F98] uppercase tracking-wider mb-2">Clinical Signs</h4>
                        <ul className="list-disc list-inside text-sm text-[#EAEAEA]">
                          {deepDiveResult.clinical_signs.map((sign: string, idx: number) => (
                            <li key={idx}>{sign}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-4 bg-white/5 border border-white/10 rounded-md">
                        <h4 className="text-xs font-bold text-[#8A8F98] uppercase tracking-wider mb-2">Regulatory History</h4>
                        <p className="text-sm text-[#EAEAEA] leading-relaxed">{deepDiveResult.regulatory_history}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'Alternatives' && (
              <div>
                <h3 className="text-sm font-bold text-[#8A8F98] uppercase tracking-widest mb-4">
                  WHO-Approved Alternatives
                </h3>
                <div className="space-y-3">
                  {m.safer_alternatives.map((alt, idx) => (
                    <div key={idx} className="p-4 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-md flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-[#22C55E]" />
                      <span className="text-[#EAEAEA] font-medium">{alt}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-black/40 border border-white/10 rounded-md">
                  <p className="text-xs text-[#8A8F98] leading-relaxed">
                    Always consult a licensed physician before switching medications. These alternatives are provided for educational awareness based on global prescribing standards.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
