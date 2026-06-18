import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, AlertCircle, Stethoscope, Sparkles } from 'lucide-react';
import { DiseaseEntry } from '@/data/content';

export function DiseaseCard({ disease }: { disease: DiseaseEntry }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      layout
      transition={{ duration: 0.3, type: 'tween', ease: 'easeInOut' }}
      className={`relative border ${
        isExpanded ? 'border-accent bg-accent/5' : 'border-border bg-card hover:bg-accent/5'
      } transition-colors duration-300 flex flex-col cursor-pointer`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Front Label */}
      <div className="p-6 relative z-10 flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <h3 className={`text-2xl font-display text-charcoal dark:text-bone`}>
            {disease.name}
          </h3>
          <motion.div 
            animate={{ rotate: isExpanded ? 180 : 0 }}
            className="text-muted-foreground"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
        <span className="text-[10px] text-accent font-mono uppercase tracking-widest block">
          Affected Organ ID: {disease.bodyPartId || 'Systemic'}
        </span>
        
        {!isExpanded && (
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
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
            transition={{ duration: 0.3 }}
            className="border-t border-border bg-background relative z-10 cursor-default"
            onClick={(e) => e.stopPropagation()} // Prevent collapse when interacting with inner elements
          >
            <div className="p-6 space-y-8">
              
              <p className="text-sm text-foreground leading-relaxed font-body">
                {disease.overview}
              </p>

              {/* Symptoms Grid */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-accent" />
                  Common Symptoms
                </h4>
                <div className="flex flex-wrap gap-2">
                  {disease.symptoms.map((s, i) => (
                    <span key={i} className="inline-flex items-center gap-2 bg-muted px-3 py-2 text-xs font-body text-foreground border border-border">
                      {s.text} 
                      <span className={`text-[9px] px-1.5 py-0.5 uppercase tracking-widest font-mono font-bold ${
                        s.frequency === "always" ? "bg-accent/20 text-accent border border-accent/30" :
                        s.frequency === "often" ? "bg-sage/20 text-sage border border-sage/30" :
                        "bg-background text-muted-foreground border border-border"
                      }`}>
                        {s.frequency}
                      </span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Misconceptions */}
              <div className="border-l-2 border-sage pl-5 py-2 bg-sage/5 text-sm font-body">
                <strong className="text-sage block mb-2 text-xs uppercase tracking-widest font-mono">Common Misconceptions:</strong>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {disease.misconceptions.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-border">
                {/* Doctor guidance */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-accent flex items-center gap-2 mb-3">
                    <Stethoscope className="w-4 h-4" />
                    When to see a doctor
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-body border border-border bg-card p-4">{disease.whenToSeeDoctor}</p>
                </div>

                {/* Gen Z Context */}
                {disease.genZContext && (
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-charcoal dark:text-bone flex items-center gap-2 mb-3">
                      <Sparkles className="w-4 h-4" />
                      Gen Z Translation
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed font-body border border-border bg-card p-4">{disease.genZContext}</p>
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
