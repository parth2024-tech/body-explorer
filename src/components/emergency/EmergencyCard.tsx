import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Activity, Phone, ChevronDown, HeartPulse, User } from 'lucide-react';
import { EmergencyScenario } from '@/data/content';

export function EmergencyCard({ scenario }: { scenario: EmergencyScenario }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAlone, setIsAlone] = useState(false);

  const getThemeColor = (id: string) => {
    switch (id) {
      case 'cardiac-arrest': return 'border-crimson text-crimson bg-crimson/5';
      case 'stroke': return 'border-accent text-accent bg-accent/5';
      case 'choking': return 'border-charcoal dark:border-bone text-charcoal dark:text-bone bg-muted';
      default: return 'border-sage text-sage bg-sage/5';
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
      className={`relative overflow-hidden border-2 transition-colors duration-500 flex flex-col ${
        isExpanded ? getThemeColor(scenario.id) : 'border-border bg-card hover:bg-muted'
      }`}
    >
      {/* Front Label */}
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-6 md:p-8 cursor-pointer relative z-10 flex flex-col justify-between items-start h-full gap-4"
      >
        <div className="flex w-full justify-between items-start gap-4">
          <div className="flex flex-col gap-2">
            <span className={`font-mono text-[10px] font-bold uppercase tracking-widest ${isExpanded ? 'text-inherit opacity-80' : 'text-muted-foreground'}`}>
              Emergency Protocol — 0{scenario.id.length % 9 + 1}
            </span>
            <h3 className={`text-3xl md:text-4xl font-display tracking-tight uppercase ${isExpanded ? 'text-inherit' : 'text-foreground'}`}>
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
            className="border-t-2 border-inherit bg-background relative z-10"
          >
            <div className="p-6 md:p-8 space-y-10">
              
              {/* Warning Signs */}
              <div className="bg-crimson/5 border-l-4 border-crimson p-6">
                <h4 className="flex items-center gap-3 text-crimson font-display text-xl mb-4 uppercase tracking-widest">
                  <AlertTriangle className="w-5 h-5" />
                  Key Warning Signs
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {scenario.warningSigns.map((sign, idx) => (
                    <div key={idx} className="bg-background px-4 py-3 border border-border font-body text-sm text-foreground">
                      {sign}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Steps */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b-2 border-border pb-4">
                  <h4 className="text-xl font-display text-foreground uppercase tracking-widest flex items-center gap-3">
                    <Activity className="w-5 h-5 text-accent" />
                    Action Steps
                  </h4>
                  
                  {scenario.ifAlone && (
                    <div className="flex bg-muted p-1 border border-border shrink-0">
                      <button
                        onClick={() => setIsAlone(false)}
                        className={`px-4 py-2 font-mono text-[10px] uppercase tracking-widest font-bold transition-colors ${!isAlone ? "bg-charcoal text-bone dark:bg-bone dark:text-charcoal" : "text-muted-foreground hover:text-foreground"}`}
                      >
                        Helping Someone
                      </button>
                      <button
                        onClick={() => setIsAlone(true)}
                        className={`px-4 py-2 font-mono text-[10px] uppercase tracking-widest font-bold transition-colors flex items-center gap-2 ${isAlone ? "bg-charcoal text-bone dark:bg-bone dark:text-charcoal" : "text-muted-foreground hover:text-foreground"}`}
                      >
                        <User className="w-3 h-3" /> I Am Alone
                      </button>
                    </div>
                  )}
                </div>

                {isAlone && scenario.ifAlone && (
                  <div className="mb-6 border border-accent bg-accent/5 p-4 font-mono text-xs text-accent uppercase tracking-widest">
                    <strong>Note:</strong> Displaying modified instructions for self-care.
                  </div>
                )}

                <div className="space-y-6">
                  {currentSteps.map((step, idx) => (
                    <div key={idx} className="flex gap-6 items-start text-foreground font-body leading-relaxed">
                      <span className="flex shrink-0 w-10 h-10 bg-accent text-white font-mono items-center justify-center font-bold text-lg">
                        {idx + 1}
                      </span>
                      <p className="mt-1 text-lg">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Before Ambulance */}
              <div className="bg-muted border border-border p-6 md:p-8">
                <h4 className="flex items-center gap-3 text-charcoal dark:text-bone font-display text-xl mb-6 uppercase tracking-widest border-b border-border pb-4">
                  <Phone className="w-5 h-5" />
                  Before Ambulance Arrives
                </h4>
                <ul className="space-y-3 font-body text-foreground">
                  {scenario.beforeAmbulance.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expand Hint */}
      {!isExpanded && (
        <div className="absolute bottom-6 right-8 opacity-50">
          <ChevronDown className="w-6 h-6 text-foreground" />
        </div>
      )}
    </motion.div>
  );
}
