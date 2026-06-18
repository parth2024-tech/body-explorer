import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, AlertCircle, Stethoscope, Sparkles } from 'lucide-react';
import { DiseaseEntry } from '@/data/content';

export function DiseaseCard({ disease }: { disease: DiseaseEntry }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      layout
      transition={{ duration: 0.5, type: 'spring', bounce: 0.2 }}
      className={`relative rounded-2xl overflow-hidden backdrop-blur-md border ${
        isExpanded ? 'border-[#FC3D21]/50 bg-[#FC3D21]/5 shadow-[0_0_30px_rgba(252,61,33,0.1)]' : 'border-white/10 bg-[#0F0F0F]/80 hover:bg-[#161616]'
      } transition-colors duration-500 flex flex-col cursor-pointer`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Front Label */}
      <div className="p-6 relative z-10 flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <h3 className={`text-2xl font-bold tracking-tight ${isExpanded ? 'text-white' : 'text-[#EAEAEA]'}`}>
            {disease.name}
          </h3>
          <motion.div 
            animate={{ rotate: isExpanded ? 180 : 0 }}
            className="text-[#8A8F98]"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
        <span className="text-[10px] text-[#FC3D21] font-semibold uppercase tracking-wider block">
          Affected Organ ID: {disease.bodyPartId || 'Systemic'}
        </span>
        
        {!isExpanded && (
          <p className="mt-2 text-sm text-[#8A8F98] line-clamp-2">
            {disease.overview}
          </p>
        )}
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="border-t border-white/10 bg-black/40 relative z-10 cursor-default"
            onClick={(e) => e.stopPropagation()} // Prevent collapse when interacting with inner elements
          >
            <div className="p-6 space-y-6">
              
              <p className="text-sm text-[#EAEAEA] leading-relaxed">
                {disease.overview}
              </p>

              {/* Symptoms Grid */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A8F98] mb-3 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                  Common Symptoms
                </h4>
                <div className="flex flex-wrap gap-2">
                  {disease.symptoms.map((s, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 rounded-lg bg-[#16181D] px-3 py-1.5 text-xs text-[#EAEAEA] border border-white/5">
                      {s.text} 
                      <span className={`text-[9px] px-1.5 rounded uppercase font-bold ${
                        s.frequency === "always" ? "bg-rose-500/10 text-rose-400 border border-rose-500/20" :
                        s.frequency === "often" ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" :
                        "bg-white/5 text-[#8A8F98] border border-white/10"
                      }`}>
                        {s.frequency}
                      </span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Misconceptions */}
              <div className="border-l-2 border-amber-500/40 pl-4 py-2 bg-gradient-to-r from-amber-500/5 to-transparent rounded-r-lg text-sm text-[#8A8F98]">
                <strong className="text-[#F5A623] block mb-2 text-xs uppercase tracking-wider">Common Misconceptions:</strong>
                <ul className="list-disc list-inside space-y-1">
                  {disease.misconceptions.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Doctor guidance */}
                <div className="bg-rose-500/5 border border-rose-500/20 p-4 rounded-xl flex items-start gap-3">
                  <Stethoscope className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[10px] font-bold text-rose-400 uppercase tracking-wider mb-1">When to see a doctor</h4>
                    <p className="text-xs text-rose-200/80 leading-relaxed">{disease.whenToSeeDoctor}</p>
                  </div>
                </div>

                {/* Gen Z Context */}
                {disease.genZContext && (
                  <div className="bg-[#A855F7]/10 border border-[#A855F7]/30 p-4 rounded-xl flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#A855F7] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[10px] font-bold text-[#A855F7] uppercase tracking-wider mb-1">Gen Z Translation</h4>
                      <p className="text-xs text-[#EAEAEA] leading-relaxed">{disease.genZContext}</p>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
