import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Activity, Phone, ChevronDown, HeartPulse, User } from 'lucide-react';
import { EmergencyScenario } from '@/data/content';

export function EmergencyCard({ scenario }: { scenario: EmergencyScenario }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAlone, setIsAlone] = useState(false);

  const getThemeColor = (id: string) => {
    switch (id) {
      case 'cardiac-arrest': return 'border-red-500/50 text-red-500 bg-red-500/10 shadow-[0_0_20px_rgba(239,68,68,0.2)]';
      case 'stroke': return 'border-orange-500/50 text-orange-500 bg-orange-500/10 shadow-[0_0_20px_rgba(249,115,22,0.2)]';
      case 'choking': return 'border-purple-500/50 text-purple-500 bg-purple-500/10 shadow-[0_0_20px_rgba(168,85,247,0.2)]';
      default: return 'border-amber-500/50 text-amber-500 bg-amber-500/10 shadow-[0_0_20px_rgba(245,158,11,0.2)]';
    }
  };

  const getIcon = (id: string) => {
    switch (id) {
      case 'cardiac-arrest': return <HeartPulse className="w-8 h-8 md:w-12 md:h-12" />;
      case 'stroke': return <Activity className="w-8 h-8 md:w-12 md:h-12" />;
      default: return <AlertTriangle className="w-8 h-8 md:w-12 md:h-12" />;
    }
  };

  const currentSteps = isAlone && scenario.ifAlone ? scenario.ifAlone : scenario.steps;

  return (
    <motion.div 
      layout
      transition={{ duration: 0.5, type: 'spring', bounce: 0.2 }}
      className={`relative rounded-2xl overflow-hidden backdrop-blur-md border ${
        isExpanded ? getThemeColor(scenario.id) : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.05]'
      } transition-colors duration-500 flex flex-col`}
    >
      {/* Front Label */}
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-6 md:p-8 cursor-pointer relative z-10 flex flex-col justify-between items-start h-full gap-4"
      >
        <div className="flex w-full justify-between items-start gap-4">
          <div className="flex flex-col gap-2">
            <span className={`text-xs font-bold uppercase tracking-widest ${isExpanded ? 'text-inherit opacity-80' : 'text-[#8A8F98]'}`}>
              Emergency Protocol
            </span>
            <h3 className={`text-3xl md:text-4xl font-space font-extrabold tracking-tight uppercase ${isExpanded ? 'text-white' : 'text-[#EAEAEA]'}`}>
              {scenario.name}
            </h3>
          </div>
          <div className={`${isExpanded ? 'opacity-100' : 'opacity-40'}`}>
            {getIcon(scenario.id)}
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="border-t border-white/10 bg-black/80 relative z-10"
          >
            <div className="p-6 md:p-8 space-y-8">
              
              {/* Warning Signs */}
              <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5">
                <h4 className="flex items-center gap-2 text-red-500 font-bold mb-3 uppercase tracking-wider text-sm">
                  <AlertTriangle className="w-5 h-5" />
                  Key Warning Signs
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {scenario.warningSigns.map((sign, idx) => (
                    <div key={idx} className="bg-black/40 px-3 py-2 rounded-lg border border-red-500/10 text-[#EAEAEA] text-sm">
                      {sign}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Steps */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <h4 className="text-lg font-bold text-[#EAEAEA] uppercase tracking-wider flex items-center gap-2">
                    <Activity className="w-5 h-5 text-amber-500" />
                    Action Steps
                  </h4>
                  
                  {scenario.ifAlone && (
                    <div className="flex bg-[#16181D] rounded-lg p-1 border border-white/10 shrink-0">
                      <button
                        onClick={() => setIsAlone(false)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${!isAlone ? "bg-amber-500 text-black shadow-sm" : "text-[#8A8F98] hover:text-white"}`}
                      >
                        Helping Someone
                      </button>
                      <button
                        onClick={() => setIsAlone(true)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center gap-1 ${isAlone ? "bg-amber-500 text-black shadow-sm" : "text-[#8A8F98] hover:text-amber-500"}`}
                      >
                        <User className="w-3 h-3" /> I Am Alone
                      </button>
                    </div>
                  )}
                </div>

                {isAlone && scenario.ifAlone && (
                  <div className="mb-4 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-500">
                    <strong>Note:</strong> Displaying modified instructions for self-care.
                  </div>
                )}

                <div className="space-y-4 pl-2">
                  {currentSteps.map((step, idx) => (
                    <div key={idx} className="flex gap-4 items-start text-[#EAEAEA] leading-relaxed">
                      <span className="flex shrink-0 w-8 h-8 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/30 items-center justify-center font-bold text-sm">
                        {idx + 1}
                      </span>
                      <p className="mt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Before Ambulance */}
              <div className="bg-white/[0.02] border border-white/10 rounded-xl p-5">
                <h4 className="flex items-center gap-2 text-[#00E5C4] font-bold mb-3 uppercase tracking-wider text-sm">
                  <Phone className="w-5 h-5" />
                  Before Ambulance Arrives
                </h4>
                <ul className="list-disc list-inside space-y-2 text-[#8A8F98] text-sm">
                  {scenario.beforeAmbulance.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expand Hint */}
      {!isExpanded && (
        <div className="absolute bottom-4 right-6 opacity-30">
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
      )}
    </motion.div>
  );
}
