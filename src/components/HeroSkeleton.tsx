import { lazy, Suspense, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OrganViewer3D = lazy(() =>
  import("./OrganViewer3D").then((m) => ({ default: m.OrganViewer3D }))
);

export function HeroSkeleton() {
  const [phase, setPhase] = useState<"skeleton" | "map">("skeleton");

  useEffect(() => {
    const timer = setTimeout(() => setPhase("map"), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative mx-auto mt-12 h-72 w-full max-w-md md:h-96">
      <AnimatePresence mode="wait">
        {phase === "skeleton" ? (
          <motion.div
            key="skeleton"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <Suspense fallback={null}>
              <OrganViewer3D organId={null} className="h-full w-full" />
            </Suspense>
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-[#0A0E1A] via-transparent to-transparent" />
          </motion.div>
        ) : (
          <motion.div
            key="map"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <svg viewBox="0 0 200 390" className="h-full w-auto max-h-full opacity-90">
              <defs>
                <linearGradient id="heroGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1A2038" />
                  <stop offset="100%" stopColor="#111525" />
                </linearGradient>
                <filter id="heroGlow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <ellipse cx="100" cy="35" rx="24" ry="29" fill="url(#heroGrad)" stroke="#00E5C4" strokeWidth="0.5" opacity="0.8" filter="url(#heroGlow)" />
              <rect x="92" y="60" width="16" height="14" rx="3" fill="url(#heroGrad)" stroke="#00E5C4" strokeWidth="0.3" opacity="0.6" />
              <path d="M60 75 Q100 65 140 75 L148 160 Q148 200 138 220 L130 235 L70 235 L62 220 Q52 200 52 160 Z" fill="url(#heroGrad)" stroke="#00E5C4" strokeWidth="0.3" opacity="0.7" />
              <path d="M60 78 Q45 90 40 120 L38 180 Q37 200 42 220 L48 222 Q52 200 54 180 L58 130 Q62 100 68 88 Z" fill="url(#heroGrad)" stroke="#00E5C4" strokeWidth="0.3" opacity="0.5" />
              <path d="M140 78 Q155 90 160 120 L162 180 Q163 200 158 220 L152 222 Q148 200 146 180 L142 130 Q138 100 132 88 Z" fill="url(#heroGrad)" stroke="#00E5C4" strokeWidth="0.3" opacity="0.5" />
              <path d="M70 235 L66 360 L84 360 L91 235 Z" fill="url(#heroGrad)" stroke="#00E5C4" strokeWidth="0.3" opacity="0.5" />
              <path d="M109 235 L116 360 L134 360 L130 235 Z" fill="url(#heroGrad)" stroke="#00E5C4" strokeWidth="0.3" opacity="0.5" />
              {/* Glowing organs */}
              <path d="M94 100 Q88 95 88 104 Q88 113 100 122 Q112 113 112 104 Q112 95 106 100 Q100 105 94 100 Z" fill="rgba(0,229,196,0.25)" stroke="#00E5C4" strokeWidth="0.8" className="breathe" />
              <ellipse cx="100" cy="28" rx="18" ry="16" fill="rgba(107,79,160,0.2)" stroke="#6B4FA0" strokeWidth="0.6" />
            </svg>
            <p className="absolute bottom-2 text-[10px] uppercase tracking-wider text-[#00E5C4]/60">
              Interactive · Tap to explore
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
