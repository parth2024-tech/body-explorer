import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScanSearch, AlertTriangle, ChevronDown, CheckCircle2, FlaskConical, Stethoscope, ShoppingBag } from 'lucide-react';
import { FoodLabelEntry } from '@/store/useFoodLabelStore';

export function FoodLabelCard({ label }: { label: FoodLabelEntry }) {
  const [isXRayed, setIsXRayed] = useState(false);

  const getRiskColors = (risk: string) => {
    switch (risk) {
      case 'CRITICAL': return 'border-red-500/50 text-red-500 bg-red-500/10 shadow-[0_0_20px_rgba(239,68,68,0.2)]';
      case 'HIGH': return 'border-orange-500/50 text-orange-500 bg-orange-500/10 shadow-[0_0_20px_rgba(249,115,22,0.2)]';
      default: return 'border-yellow-500/50 text-yellow-500 bg-yellow-500/10 shadow-[0_0_20px_rgba(234,179,8,0.2)]';
    }
  };

  const getConfidenceBadge = (confidence?: string) => {
    switch (confidence) {
      case 'HIGH': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'MODERATE': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-red-500/20 text-red-400 border-red-500/30';
    }
  };

  return (
    <motion.div 
      layout
      transition={{ duration: 0.5, type: 'spring', bounce: 0.2 }}
      className={`relative rounded-xl overflow-hidden backdrop-blur-md border ${
        isXRayed ? getRiskColors(label.risk_level) : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.05]'
      } transition-colors duration-500 flex flex-col`}
    >
      {/* Scanning Line Animation */}
      <AnimatePresence>
        {isXRayed && (
          <motion.div
            initial={{ top: '-10%' }}
            animate={{ top: '110%' }}
            transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00E5C4] to-transparent z-50 blur-[1px] pointer-events-none"
            style={{ boxShadow: '0 0 20px #00E5C4, 0 0 10px #00E5C4' }}
          />
        )}
      </AnimatePresence>

      {/* Front Label (Marketing View) */}
      <div 
        onClick={() => setIsXRayed(!isXRayed)}
        className="p-6 cursor-pointer relative z-10 flex flex-col justify-between"
      >
        <div className="flex justify-between items-start gap-4">
          <h3 className={`text-2xl font-space font-extrabold tracking-tight uppercase ${isXRayed ? 'text-white' : 'text-[#EAEAEA]'}`}>
            "{label.marketing_claim}"
          </h3>
          <button 
            className={`shrink-0 p-2 rounded-full border transition-colors ${
              isXRayed 
                ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' 
                : 'bg-black/50 border-white/10 text-[#00E5C4] hover:bg-[#00E5C4]/10 hover:border-[#00E5C4]/30'
            }`}
          >
            <ScanSearch className="w-5 h-5" />
          </button>
        </div>

        <motion.div 
          initial={false}
          animate={{ height: isXRayed ? 0 : 'auto', opacity: isXRayed ? 0 : 1 }}
          className="overflow-hidden mt-4 text-[#8A8F98] font-mono text-sm"
        >
          <p>Click scan to reveal the biological truth behind this claim.</p>
        </motion.div>
      </div>

      {/* X-Ray Revealed Truth (HealthContent Pro Max) */}
      <AnimatePresence>
        {isXRayed && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="border-t border-white/10 bg-black/60 relative z-10"
          >
            <div className="p-6 space-y-6">
              
              {/* Header Meta */}
              <div className="flex flex-wrap items-center gap-3">
                <span className={`px-2 py-1 rounded text-xs font-mono font-bold tracking-widest uppercase border bg-black/50 ${getRiskColors(label.risk_level)}`}>
                  {label.risk_level} DECEPTION
                </span>
                {label.confidenceLevel && (
                  <span className={`px-2 py-1 rounded text-xs font-mono font-bold tracking-widest uppercase border ${getConfidenceBadge(label.confidenceLevel)}`}>
                    {label.confidenceLevel} CONFIDENCE
                  </span>
                )}
              </div>

              {/* Real Meaning */}
              <div className="p-4 bg-black/40 rounded-lg border border-white/5">
                <h4 className="flex items-center gap-2 text-[#EAEAEA] font-bold mb-2 uppercase text-sm tracking-wider">
                  <AlertTriangle className="w-4 h-4 text-orange-400" /> 
                  Hidden Truth
                </h4>
                <p className="text-[#8A8F98] font-mono text-sm leading-relaxed">
                  {label.real_meaning}
                </p>
              </div>

              {/* Biological Impact + Evidence */}
              <div>
                <h4 className="flex items-center gap-2 text-[#EAEAEA] font-bold mb-3 uppercase text-sm tracking-wider">
                  <FlaskConical className="w-4 h-4 text-[#00E5C4]" /> 
                  Biological Impact
                </h4>
                <p className="text-[#EAEAEA] leading-relaxed text-sm">
                  {label.biological_impact}
                </p>
                {label.evidenceStatement && (
                  <div className="mt-3 pl-3 border-l-2 border-[#00E5C4]/30">
                    <p className="text-xs text-[#8A8F98] font-mono italic">
                      {label.evidenceStatement}
                    </p>
                  </div>
                )}
              </div>

              {/* How to Spot */}
              <div className="bg-[#FFD60A]/5 border border-[#FFD60A]/20 p-4 rounded-lg">
                <h4 className="flex items-center gap-2 text-[#FFD60A] font-bold mb-2 uppercase text-sm tracking-wider">
                  <ScanSearch className="w-4 h-4" /> 
                  How to Spot the Lie
                </h4>
                <p className="text-[#EAEAEA] font-mono text-sm leading-relaxed">
                  {label.how_to_spot}
                </p>
              </div>

              {/* Common Products */}
              <div>
                <h4 className="flex items-center gap-2 text-[#8A8F98] font-bold mb-3 uppercase text-xs tracking-widest">
                  <ShoppingBag className="w-4 h-4" /> 
                  Common Offending Products
                </h4>
                <div className="flex flex-wrap gap-2">
                  {label.common_products.map(prod => (
                    <span key={prod} className="px-2 py-1 bg-white/[0.03] border border-white/10 rounded text-xs text-[#8A8F98]">
                      {prod}
                    </span>
                  ))}
                </div>
              </div>

              {/* Clinical Disclaimer */}
              {label.clinicalDisclaimer && (
                <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <h4 className="flex items-center gap-2 text-red-400 font-bold mb-2 uppercase text-xs tracking-widest">
                    <Stethoscope className="w-4 h-4" />
                    Clinical Disclaimer
                  </h4>
                  <p className="text-red-400/90 font-mono text-xs leading-relaxed">
                    {label.clinicalDisclaimer}
                  </p>
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expand Hint */}
      {!isXRayed && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-30">
          <ChevronDown className="w-5 h-5 text-white animate-bounce" />
        </div>
      )}
    </motion.div>
  );
}
