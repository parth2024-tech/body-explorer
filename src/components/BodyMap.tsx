import { useBodyStore } from "@/store/useBodyStore";
import { BODY_PARTS, LAYER_META, type Layer } from "@/data/content";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";

// ─── Layer config ────────────────────────────────────────────────────────────

const LAYERS: { id: Layer; label: string; color: string }[] = [
  { id: "facts",     label: "Facts",     color: "#00E5C4" },
  { id: "personal",  label: "Personal",  color: "#F5A623" },
  { id: "challenge", label: "Challenge", color: "#A855F7" },
  { id: "trends",    label: "Trends",    color: "#E5504D" },
  { id: "explore",   label: "Explore",   color: "#E8E0D5" },
];

// ─── System color palette ─────────────────────────────────────────────────────

const SYSTEM_COLORS: Record<string, { fill: string; stroke: string; glow: string }> = {
  Nervous:         { fill: "rgba(168,85,247,0.18)",  stroke: "#A855F7", glow: "#A855F7" },
  Sensory:         { fill: "rgba(56,189,248,0.18)",  stroke: "#38BDF8", glow: "#38BDF8" },
  Respiratory:     { fill: "rgba(0,229,196,0.18)",   stroke: "#00E5C4", glow: "#00E5C4" },
  Circulatory:     { fill: "rgba(239,68,68,0.22)",   stroke: "#EF4444", glow: "#EF4444" },
  Digestive:       { fill: "rgba(234,179,8,0.18)",   stroke: "#EAB308", glow: "#EAB308" },
  Urinary:         { fill: "rgba(14,165,233,0.18)",  stroke: "#0EA5E9", glow: "#0EA5E9" },
  Skeletal:        { fill: "rgba(232,224,213,0.14)", stroke: "#E8E0D5", glow: "#E8E0D5" },
  Musculoskeletal: { fill: "rgba(251,146,60,0.18)",  stroke: "#FB923C", glow: "#FB923C" },
  Integumentary:   { fill: "rgba(34,197,94,0.14)",   stroke: "#22C55E", glow: "#22C55E" },
  Muscular:        { fill: "rgba(251,146,60,0.15)",  stroke: "#FB923C", glow: "#FB923C" },
};

function getSystemColor(system: string) {
  return SYSTEM_COLORS[system] ?? { fill: "rgba(30,40,68,0.6)", stroke: "rgba(75,85,120,0.5)", glow: "#00E5C4" };
}

// ─── Organ connection graph ───────────────────────────────────────────────────
// [from, to, cx, cy] – cubic bezier midpoints for the connector curves

const ORGAN_CONNECTIONS: Array<{ from: string; to: string; cx1: number; cy1: number; cx2: number; cy2: number }> = [
  // Respiratory system
  { from: "lung-left",  to: "throat",     cx1: 148, cy1: 170, cx2: 188, cy2: 200 },
  { from: "lung-right", to: "throat",     cx1: 252, cy1: 170, cx2: 212, cy2: 200 },
  { from: "lung-left",  to: "lung-right", cx1: 160, cy1: 260, cx2: 240, cy2: 260 },
  // Circulatory
  { from: "heart",      to: "lung-left",  cx1: 186, cy1: 225, cx2: 160, cy2: 240 },
  { from: "heart",      to: "lung-right", cx1: 214, cy1: 225, cx2: 240, cy2: 240 },
  // Digestive
  { from: "stomach",    to: "small-intestine", cx1: 175, cy1: 385, cx2: 192, cy2: 395 },
  { from: "small-intestine", to: "large-intestine", cx1: 195, cy1: 420, cx2: 195, cy2: 430 },
  { from: "liver",      to: "stomach",    cx1: 210, cy1: 360, cx2: 180, cy2: 360 },
  // Urinary
  { from: "kidneys",    to: "bladder",    cx1: 150, cy1: 410, cx2: 190, cy2: 445 },
  // Nervous
  { from: "brain",      to: "spine-cervical", cx1: 200, cy1: 108, cx2: 200, cy2: 115 },
  { from: "spine-cervical", to: "spine-thoracic", cx1: 200, cy1: 148, cx2: 200, cy2: 155 },
  { from: "spine-thoracic", to: "spine-lumbar",   cx1: 200, cy1: 305, cx2: 200, cy2: 312 },
];

// ─── Organ geometry ───────────────────────────────────────────────────────────
// Centroid coordinates for tooltip placement and connection line anchoring

const ORGAN_CENTROIDS: Record<string, { x: number; y: number }> = {
  "brain":           { x: 200, y: 52  },
  "frontal-lobe":    { x: 200, y: 36  },
  "temporal-lobe":   { x: 200, y: 58  },
  "eyes":            { x: 200, y: 64  },
  "ears":            { x: 200, y: 68  },
  "sinuses":         { x: 200, y: 65  },
  "jaw":             { x: 200, y: 90  },
  "throat":          { x: 200, y: 132 },
  "heart":           { x: 200, y: 216 },
  "lung-left":       { x: 152, y: 252 },
  "lung-right":      { x: 248, y: 252 },
  "liver":           { x: 232, y: 342 },
  "stomach":         { x: 172, y: 358 },
  "small-intestine": { x: 195, y: 408 },
  "large-intestine": { x: 200, y: 412 },
  "kidneys":         { x: 200, y: 358 },
  "bladder":         { x: 200, y: 455 },
  "spine-cervical":  { x: 200, y: 132 },
  "spine-thoracic":  { x: 200, y: 230 },
  "spine-lumbar":    { x: 200, y: 352 },
  "shoulders":       { x: 200, y: 162 },
  "elbows":          { x: 200, y: 280 },
  "wrists":          { x: 200, y: 396 },
  "hands":           { x: 200, y: 430 },
  "hips":            { x: 200, y: 490 },
  "knees":           { x: 200, y: 620 },
  "ankles":          { x: 200, y: 715 },
  "feet":            { x: 200, y: 745 },
  "skin":            { x: 200, y: 400 },
  "bones":           { x: 200, y: 280 },
  "muscles":         { x: 200, y: 300 },
};

// ─── Ripple state ─────────────────────────────────────────────────────────────

interface Ripple { id: number; x: number; y: number; color: string }

// ─── Component ────────────────────────────────────────────────────────────────

export function BodyMap() {
  const selected    = useBodyStore(s => s.selectedPartId);
  const setSelected = useBodyStore(s => s.setSelectedPart);
  const activeLayer = useBodyStore(s => s.activeLayer);
  const setLayer    = useBodyStore(s => s.setLayer);
  const shouldReduceMotion = useReducedMotion();

  const svgRef       = useRef<SVGSVGElement>(null);
  const [hovered, setHovered]     = useState<string | null>(null);
  const [tooltip, setTooltip]     = useState<{ x: number; y: number } | null>(null);
  const [ripples, setRipples]     = useState<Ripple[]>([]);
  const [scanDone, setScanDone]   = useState(false);
  const [scanY, setScanY]         = useState(0);
  const rippleId = useRef(0);

  // Layer accent color
  const layerColor = LAYERS.find(l => l.id === activeLayer)?.color ?? "#00E5C4";

  // Scan-line animation on mount
  useEffect(() => {
    if (shouldReduceMotion) { setScanDone(true); return; }
    let frame: number;
    let startTs: number | null = null;
    const duration = 1400;
    const animate = (ts: number) => {
      if (!startTs) startTs = ts;
      const pct = Math.min((ts - startTs) / duration, 1);
      setScanY(pct * 780);
      if (pct < 1) frame = requestAnimationFrame(animate);
      else setScanDone(true);
    };
    const timeout = setTimeout(() => { frame = requestAnimationFrame(animate); }, 200);
    return () => { clearTimeout(timeout); cancelAnimationFrame(frame); };
  }, [shouldReduceMotion]);

  // SVG cursor tracking for magnetic tooltip
  const handleMouseMove = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    const svg = svgRef.current;
    if (!svg) return;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX; pt.y = e.clientY;
    const svgPt = pt.matrixTransform(svg.getScreenCTM()!.inverse());
    setTooltip({ x: svgPt.x, y: svgPt.y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTooltip(null);
    setHovered(null);
  }, []);

  // Click with ripple
  const handleClick = useCallback((id: string, e: React.MouseEvent<SVGGElement>) => {
    setSelected(id);
    const svg = svgRef.current;
    if (!svg || shouldReduceMotion) return;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX; pt.y = e.clientY;
    const svgPt = pt.matrixTransform(svg.getScreenCTM()!.inverse());
    const part = BODY_PARTS.find(p => p.id === id);
    const color = part ? getSystemColor(part.system).glow : layerColor;
    const newRipple: Ripple = { id: rippleId.current++, x: svgPt.x, y: svgPt.y, color };
    setRipples(r => [...r, newRipple]);
    setTimeout(() => setRipples(r => r.filter(rr => rr.id !== newRipple.id)), 900);
  }, [setSelected, shouldReduceMotion, layerColor]);

  // Organ class builder
  const cls = (id: string) => {
    const base = "organ-path";
    const active = selected === id ? " organ-active" : "";
    const hover  = hovered === id ? " organ-hover" : "";
    return `${base}${active}${hover}`;
  };

  // Render a single organ group
  const Organ = ({
    id, children, tabLabel,
  }: { id: string; children: React.ReactNode; tabLabel?: string }) => {
    const part = BODY_PARTS.find(p => p.id === id);
    const sys  = part?.system ?? "Nervous";
    const sc   = getSystemColor(sys);
    const isActive  = selected === id;
    const isHovered = hovered === id;

    return (
      <g
        role="button"
        aria-label={part?.name ?? id}
        aria-pressed={isActive}
        tabIndex={0}
        data-organ={id}
        style={{
          // CSS custom properties scoped to this organ group
          // so the .organ-path rule can use them
          ["--organ-fill" as string]: sc.fill,
          ["--organ-stroke" as string]: sc.stroke,
          ["--organ-glow" as string]: sc.glow,
          cursor: "pointer",
          outline: "none",
        }}
        onClick={e => handleClick(id, e as unknown as React.MouseEvent<SVGGElement>)}
        onMouseEnter={() => setHovered(id)}
        onMouseLeave={() => setHovered(null)}
        onKeyDown={e => { if (e.key === "Enter" || e.key === " ") setSelected(id); }}
      >
        {children}
        {/* Active pulse ring */}
        {isActive && !shouldReduceMotion && (
          <>
            <circle
              cx={ORGAN_CENTROIDS[id]?.x ?? 200}
              cy={ORGAN_CENTROIDS[id]?.y ?? 400}
              r="22"
              fill="none"
              stroke={sc.glow}
              strokeWidth="1.5"
              opacity="0.6"
              className="pulse-ring-1"
            />
            <circle
              cx={ORGAN_CENTROIDS[id]?.x ?? 200}
              cy={ORGAN_CENTROIDS[id]?.y ?? 400}
              r="32"
              fill="none"
              stroke={sc.glow}
              strokeWidth="0.8"
              opacity="0.3"
              className="pulse-ring-2"
            />
          </>
        )}
      </g>
    );
  };

  // Hovered organ info
  const hoveredPart = hovered ? BODY_PARTS.find(p => p.id === hovered) : null;
  const selectedPart = selected ? BODY_PARTS.find(p => p.id === selected) : null;

  // Connection lines — show when hovered organ's system connections exist
  const activeConnections = ORGAN_CONNECTIONS.filter(
    c => c.from === hovered || c.to === hovered ||
         c.from === selected || c.to === selected
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-[440px] select-none"
    >
      {/* ── Ambient background glow that shifts with layer ── */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 blur-[80px] opacity-30 transition-all duration-700"
        style={{ background: `radial-gradient(ellipse at center, ${layerColor}55 0%, transparent 65%)` }}
      />

      {/* ── Layer toggle ── */}
      <div className="mb-5 flex flex-wrap justify-center gap-1.5">
        {LAYERS.map(l => (
          <button
            key={l.id}
            onClick={() => setLayer(l.id)}
            className="layer-pill-adv"
            data-active={activeLayer === l.id}
            style={{ ["--pill-color" as string]: l.color }}
            aria-pressed={activeLayer === l.id}
          >
            <span
              className="dot-adv"
              style={{ background: l.color, boxShadow: activeLayer === l.id ? `0 0 6px ${l.color}` : "none" }}
            />
            {l.label}
          </button>
        ))}
      </div>

      {/* ── Magnetic tooltip ── */}
      <AnimatePresence>
        {hoveredPart && tooltip && (
          <motion.div
            key={hoveredPart.id}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.12 }}
            className="pointer-events-none absolute z-20 rounded-lg border px-3 py-2 text-xs backdrop-blur-md"
            style={{
              borderColor: `${getSystemColor(hoveredPart.system).glow}40`,
              background: "rgba(10,14,26,0.92)",
              boxShadow: `0 0 16px ${getSystemColor(hoveredPart.system).glow}30`,
              left: `${(tooltip.x / 400) * 100}%`,
              top: `${(tooltip.y / 780) * 100}%`,
              transform: "translate(-50%, -130%)",
            }}
          >
            <div className="flex items-center gap-1.5">
              <span className="text-base leading-none">{hoveredPart.emoji}</span>
              <span className="font-semibold" style={{ color: getSystemColor(hoveredPart.system).glow }}>
                {hoveredPart.name}
              </span>
            </div>
            <div className="mt-0.5 text-[10px]" style={{ color: "rgba(139,143,163,0.9)" }}>
              {hoveredPart.system} System
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── The SVG ── */}
      <svg
        ref={svgRef}
        viewBox="0 0 400 780"
        className="w-full h-auto"
        role="img"
        aria-label="Interactive human body map — click any highlighted zone to explore"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ overflow: "visible" }}
      >
        <defs>
          {/* Body gradient */}
          <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#1C2240" />
            <stop offset="100%" stopColor="#0F1320" />
          </linearGradient>
          {/* Scan-line gradient */}
          <linearGradient id="scanGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor={layerColor} stopOpacity="0" />
            <stop offset="50%"  stopColor={layerColor} stopOpacity="0.5" />
            <stop offset="100%" stopColor={layerColor} stopOpacity="0" />
          </linearGradient>
          {/* Edge vignette */}
          <radialGradient id="vignette" cx="50%" cy="50%" r="50%">
            <stop offset="60%" stopColor="transparent" />
            <stop offset="100%" stopColor="#0A0E1A" stopOpacity="0.5" />
          </radialGradient>
          {/* Clip path for body silhouette */}
          <clipPath id="bodyClip">
            <path d="
              M152 12 Q200 4 248 12 Q262 28 248 66 Q240 90 228 102
              Q240 112 242 126 Q256 134 268 148
              Q310 170 322 220 L330 340 Q334 400 322 444
              L308 446 Q304 406 302 360 L292 254 Q284 200 272 176
              L280 148 L295 320 Q298 400 278 442 L262 470 L138 470
              L122 442 Q102 400 105 320 L120 148
              L128 176 Q116 200 108 254 L98 360 Q96 406 92 446
              L78 444 Q66 400 70 340 L78 220 Q90 170 132 148
              Q144 134 158 126 Q160 112 172 102
              Q160 90 152 66 Q138 28 152 12 Z
              M138 470 L260 470 L270 522 L130 522 Z
              M130 522 L124 722 L162 722 L180 522 Z
              M220 522 L238 722 L276 722 L270 522 Z
              M120 718 L118 750 Q124 760 168 760 L166 722 Z
              M234 722 L232 760 Q276 760 282 750 L280 718 Z
            " />
          </clipPath>

          {/* Organ filters */}
          <filter id="organGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="organGlowStrong" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* ═══ Body silhouette ═══ */}
        <g className="body-outline">
          {/* Head */}
          <ellipse cx="200" cy="60" rx="50" ry="56" fill="url(#bodyGrad)" />
          {/* Neck */}
          <rect x="183" y="112" width="34" height="32" rx="6" fill="url(#bodyGrad)" />
          {/* Torso */}
          <path
            d="M122 148 Q170 132 200 130 Q230 132 278 148
               L295 324 Q295 400 275 442 L262 470
               L138 470 L125 442 Q105 400 105 324 Z"
            fill="url(#bodyGrad)"
          />
          {/* Hips/Pelvis */}
          <path d="M136 462 L264 462 L272 524 L128 524 Z" fill="url(#bodyGrad)" />
          {/* Left arm */}
          <path
            d="M122 156 Q92 178 82 238 L74 362 Q72 402 80 444
               L94 446 Q98 404 100 362 L110 252 Q116 202 130 178 Z"
            fill="url(#bodyGrad)"
          />
          {/* Right arm */}
          <path
            d="M278 156 Q308 178 318 238 L326 362 Q328 402 320 444
               L306 446 Q302 404 300 362 L290 252 Q284 202 270 178 Z"
            fill="url(#bodyGrad)"
          />
          {/* Left leg */}
          <path d="M136 524 L126 724 L164 724 L180 524 Z" fill="url(#bodyGrad)" />
          {/* Right leg */}
          <path d="M220 524 L236 724 L274 724 L264 524 Z" fill="url(#bodyGrad)" />
          {/* Left foot */}
          <path d="M122 720 L120 750 Q126 758 168 758 L168 724 Z" fill="url(#bodyGrad)" />
          {/* Right foot */}
          <path d="M232 724 L232 758 Q274 758 280 750 L278 720 Z" fill="url(#bodyGrad)" />

          {/* Edge vignette overlay */}
          <ellipse cx="200" cy="390" rx="205" ry="395" fill="url(#vignette)" />
        </g>

        {/* ═══ Organ connection lines ═══ */}
        <g opacity={hovered || selected ? "1" : "0"} style={{ transition: "opacity 0.4s ease" }}>
          {ORGAN_CONNECTIONS.map((conn, i) => {
            const isActive = conn.from === hovered || conn.to === hovered ||
                             conn.from === selected || conn.to === selected;
            if (!isActive) return null;
            const from = ORGAN_CENTROIDS[conn.from];
            const to   = ORGAN_CENTROIDS[conn.to];
            if (!from || !to) return null;

            // System color of the "from" organ
            const fromPart = BODY_PARTS.find(p => p.id === conn.from);
            const color = fromPart ? getSystemColor(fromPart.system).glow : "#00E5C4";

            return (
              <path
                key={i}
                d={`M ${from.x} ${from.y} C ${conn.cx1} ${conn.cy1}, ${conn.cx2} ${conn.cy2}, ${to.x} ${to.y}`}
                fill="none"
                stroke={color}
                strokeWidth="1"
                strokeDasharray="4 3"
                opacity="0.45"
                style={{ transition: "opacity 0.3s ease", pointerEvents: "none" }}
              />
            );
          })}
        </g>

        {/* ═══ ORGANS ═══ */}

        {/* ── BRAIN ── */}
        <Organ id="brain">
          <ellipse cx="200" cy="50" rx="36" ry="30"
            className={cls("brain")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }}
          />
          {/* Brain folds detail */}
          <path d="M172 48 Q186 36 200 40 Q214 36 228 48"
            fill="none" stroke="var(--organ-stroke)" strokeWidth="0.7" opacity="0.4" pointerEvents="none" />
          <path d="M174 56 Q187 50 200 52 Q213 50 226 56"
            fill="none" stroke="var(--organ-stroke)" strokeWidth="0.7" opacity="0.3" pointerEvents="none" />
        </Organ>

        {/* ── FRONTAL LOBE ── */}
        <Organ id="frontal-lobe">
          <path d="M178 28 Q200 20 222 28 L220 44 Q200 40 180 44 Z"
            className={cls("frontal-lobe")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }}
          />
        </Organ>

        {/* ── TEMPORAL LOBE ── */}
        <Organ id="temporal-lobe">
          <path d="M165 44 Q163 58 165 70 L176 70 L176 44 Z"
            className={cls("temporal-lobe")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }}
          />
          <path d="M235 44 Q237 58 235 70 L224 70 L224 44 Z"
            className={cls("temporal-lobe")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }}
          />
        </Organ>

        {/* ── EYES ── */}
        <Organ id="eyes">
          {/* Left eye — almond shape */}
          <path d="M174 65 Q182 60 190 65 Q182 70 174 65 Z"
            className={cls("eyes")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }}
          />
          <circle cx="182" cy="65" r="2.5" fill="var(--organ-stroke)" opacity="0.6" pointerEvents="none" />
          {/* Right eye */}
          <path d="M210 65 Q218 60 226 65 Q218 70 210 65 Z"
            className={cls("eyes")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }}
          />
          <circle cx="218" cy="65" r="2.5" fill="var(--organ-stroke)" opacity="0.6" pointerEvents="none" />
        </Organ>

        {/* ── EARS ── */}
        <Organ id="ears">
          <ellipse cx="153" cy="68" rx="5" ry="10" className={cls("ears")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }} />
          <ellipse cx="247" cy="68" rx="5" ry="10" className={cls("ears")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }} />
        </Organ>

        {/* ── SINUSES ── */}
        <Organ id="sinuses">
          <path d="M190 58 Q200 54 210 58 L210 72 Q200 74 190 72 Z"
            className={cls("sinuses")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }}
          />
        </Organ>

        {/* ── JAW ── */}
        <Organ id="jaw">
          <path d="M170 88 Q185 100 200 104 Q215 100 230 88 L224 80 Q210 90 200 92 Q190 90 176 80 Z"
            className={cls("jaw")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }}
          />
        </Organ>

        {/* ── THROAT ── */}
        <Organ id="throat">
          <path d="M186 114 Q194 110 200 110 Q206 110 214 114 L216 138 Q200 144 184 138 Z"
            className={cls("throat")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }}
          />
        </Organ>

        {/* ── HEART ── anatomically-shaped (left-of-center) ── */}
        <Organ id="heart">
          <path
            d="M186 200 Q170 186 168 206 Q168 228 200 250 Q232 228 232 206 Q232 186 216 200 Q206 210 200 206 Q194 210 186 200 Z"
            className={cls("heart")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }}
          />
          {/* Aorta arc */}
          <path d="M200 200 Q200 188 210 184 Q218 182 220 190"
            fill="none" stroke="var(--organ-stroke)" strokeWidth="1.5" opacity="0.5" pointerEvents="none" />
        </Organ>

        {/* ── LEFT LUNG ── */}
        <Organ id="lung-left">
          <path
            d="M153 192 Q136 202 132 252 Q130 294 148 314
               L168 308 Q170 280 170 250 L170 202 Q164 194 153 192 Z"
            className={cls("lung-left")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }}
          />
          {/* Lobe lines */}
          <path d="M136 246 Q154 248 168 244" fill="none" stroke="var(--organ-stroke)" strokeWidth="0.6" opacity="0.35" pointerEvents="none" />
          <path d="M134 272 Q152 270 168 266" fill="none" stroke="var(--organ-stroke)" strokeWidth="0.6" opacity="0.25" pointerEvents="none" />
        </Organ>

        {/* ── RIGHT LUNG ── */}
        <Organ id="lung-right">
          <path
            d="M247 192 Q264 202 268 252 Q270 294 252 314
               L232 308 Q230 280 230 250 L230 202 Q236 194 247 192 Z"
            className={cls("lung-right")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }}
          />
          <path d="M264 246 Q246 248 232 244" fill="none" stroke="var(--organ-stroke)" strokeWidth="0.6" opacity="0.35" pointerEvents="none" />
          <path d="M266 272 Q248 270 232 266" fill="none" stroke="var(--organ-stroke)" strokeWidth="0.6" opacity="0.25" pointerEvents="none" />
          <path d="M264 296 Q248 292 232 290" fill="none" stroke="var(--organ-stroke)" strokeWidth="0.6" opacity="0.2" pointerEvents="none" />
        </Organ>

        {/* ── LIVER ── */}
        <Organ id="liver">
          <path
            d="M210 322 Q256 320 262 342 Q262 362 238 366
               L204 366 L204 332 Q208 324 210 322 Z"
            className={cls("liver")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }}
          />
        </Organ>

        {/* ── STOMACH ── ── irregular pouch shape ── */}
        <Organ id="stomach">
          <path
            d="M158 330 Q144 344 150 372 Q160 390 190 386
               L196 342 Q178 332 164 330 Q162 330 158 330 Z"
            className={cls("stomach")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }}
          />
        </Organ>

        {/* ── SMALL INTESTINE ── coiled path ── */}
        <Organ id="small-intestine">
          <path
            d="M174 392 Q168 402 176 412 Q188 418 196 408
               Q204 418 214 412 Q220 402 216 392
               Q208 402 200 398 Q192 402 184 392 Z"
            className={cls("small-intestine")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }}
          />
          {/* Coil hints */}
          <path d="M178 396 Q196 388 214 396" fill="none" stroke="var(--organ-stroke)" strokeWidth="0.8" opacity="0.3" pointerEvents="none" />
        </Organ>

        {/* ── LARGE INTESTINE ── ── U-frame shape ── */}
        <Organ id="large-intestine">
          <path
            d="M146 384 L146 422 Q146 440 164 442
               L236 442 Q254 440 254 422 L254 384
               Q254 374 242 374 L242 428 L158 428 L158 374
               Q146 374 146 384 Z"
            className={cls("large-intestine")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }}
          />
        </Organ>

        {/* ── KIDNEYS ── ── bean shapes ── */}
        <Organ id="kidneys">
          <path d="M144 338 Q132 350 136 376 Q148 386 158 372 Q162 350 154 338 Z"
            className={cls("kidneys")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }}
          />
          <path d="M256 338 Q268 350 264 376 Q252 386 242 372 Q238 350 246 338 Z"
            className={cls("kidneys")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }}
          />
          {/* Kidney hilum notch */}
          <path d="M152 357 Q147 360 152 363" fill="none" stroke="var(--organ-stroke)" strokeWidth="1" opacity="0.5" pointerEvents="none" />
          <path d="M248 357 Q253 360 248 363" fill="none" stroke="var(--organ-stroke)" strokeWidth="1" opacity="0.5" pointerEvents="none" />
        </Organ>

        {/* ── BLADDER ── ── oval with crease ── */}
        <Organ id="bladder">
          <ellipse cx="200" cy="456" rx="18" ry="13" className={cls("bladder")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }} />
          <path d="M192 452 Q200 448 208 452" fill="none" stroke="var(--organ-stroke)" strokeWidth="0.8" opacity="0.4" pointerEvents="none" />
        </Organ>

        {/* ── SPINE — segmented ── */}
        <Organ id="spine-cervical">
          {[0,1,2,3,4,5,6].map(i => (
            <rect key={i} x="196" y={114 + i*5} width="8" height="4" rx="1.5"
              className={cls("spine-cervical")}
              style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }}
            />
          ))}
        </Organ>

        <Organ id="spine-thoracic">
          {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => (
            <rect key={i} x="196" y={155 + i*12} width="8" height="10" rx="1.5"
              className={cls("spine-thoracic")}
              style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }}
            />
          ))}
        </Organ>

        <Organ id="spine-lumbar">
          {[0,1,2,3,4].map(i => (
            <rect key={i} x="195" y={311 + i*16} width="10" height="14" rx="2"
              className={cls("spine-lumbar")}
              style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }}
            />
          ))}
        </Organ>

        {/* ── SHOULDERS ── */}
        <Organ id="shoulders">
          <circle cx="126" cy="160" r="14" className={cls("shoulders")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }} />
          <circle cx="274" cy="160" r="14" className={cls("shoulders")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }} />
        </Organ>

        {/* ── ELBOWS ── */}
        <Organ id="elbows">
          <circle cx="90" cy="282" r="11" className={cls("elbows")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }} />
          <circle cx="310" cy="282" r="11" className={cls("elbows")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }} />
        </Organ>

        {/* ── WRISTS ── */}
        <Organ id="wrists">
          <rect x="70" y="392" width="18" height="12" rx="4" className={cls("wrists")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }} />
          <rect x="312" y="392" width="18" height="12" rx="4" className={cls("wrists")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }} />
        </Organ>

        {/* ── HANDS ── */}
        <Organ id="hands">
          <ellipse cx="79" cy="430" rx="11" ry="16" className={cls("hands")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }} />
          <ellipse cx="321" cy="430" rx="11" ry="16" className={cls("hands")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }} />
        </Organ>

        {/* ── HIPS ── */}
        <Organ id="hips">
          <circle cx="156" cy="492" r="16" className={cls("hips")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }} />
          <circle cx="244" cy="492" r="16" className={cls("hips")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }} />
        </Organ>

        {/* ── KNEES ── */}
        <Organ id="knees">
          <circle cx="148" cy="622" r="14" className={cls("knees")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }} />
          <circle cx="252" cy="622" r="14" className={cls("knees")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }} />
        </Organ>

        {/* ── ANKLES ── */}
        <Organ id="ankles">
          <circle cx="138" cy="716" r="9" className={cls("ankles")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }} />
          <circle cx="262" cy="716" r="9" className={cls("ankles")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }} />
        </Organ>

        {/* ── FEET ── */}
        <Organ id="feet">
          <ellipse cx="147" cy="746" rx="24" ry="9" className={cls("feet")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }} />
          <ellipse cx="253" cy="746" rx="24" ry="9" className={cls("feet")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }} />
        </Organ>

        {/* ── SKIN (transparent overlay) ── */}
        <Organ id="skin">
          <rect x="58" y="18" width="284" height="748" fill="transparent"
            style={{ pointerEvents: "all" }} className={cls("skin")} />
        </Organ>

        {/* ── BONES (spine accent) ── */}
        <Organ id="bones">
          <rect x="197" y="114" width="6" height="286" rx="3" className={cls("bones")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)", opacity: 0.4 }} />
        </Organ>

        {/* ── MUSCLES ── */}
        <Organ id="muscles">
          {/* Bicep hints */}
          <ellipse cx="88" cy="220" rx="6" ry="22" className={cls("muscles")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }} />
          <ellipse cx="312" cy="220" rx="6" ry="22" className={cls("muscles")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }} />
          {/* Quad hints */}
          <ellipse cx="148" cy="572" rx="12" ry="40" className={cls("muscles")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }} />
          <ellipse cx="252" cy="572" rx="12" ry="40" className={cls("muscles")}
            style={{ fill: "var(--organ-fill)", stroke: "var(--organ-stroke)" }} />
        </Organ>

        {/* ═══ Scan-line (appears once on mount) ═══ */}
        {!scanDone && (
          <rect
            x="50" y={scanY - 30} width="300" height="30"
            fill="url(#scanGrad)"
            opacity="0.7"
            pointerEvents="none"
            style={{ transition: "none" }}
          />
        )}

        {/* ═══ Click ripples ═══ */}
        {ripples.map(r => (
          <circle
            key={r.id}
            cx={r.x} cy={r.y} r="4"
            fill="none"
            stroke={r.color}
            strokeWidth="1.5"
            opacity="0"
            className="ripple-ring"
            style={{ transformOrigin: `${r.x}px ${r.y}px` }}
          />
        ))}
      </svg>

      {/* ── Status bar ── */}
      <div className="mt-3 flex items-center justify-between px-1">
        <p className="text-xs text-[#8B8FA3]">
          {selectedPart
            ? <><span style={{ color: getSystemColor(selectedPart.system).glow }}>{selectedPart.emoji} {selectedPart.name}</span> · {selectedPart.system} System</>
            : "Tap any organ to begin"}
        </p>
        {selectedPart && (
          <button
            className="text-xs text-[#8B8FA3] hover:text-[#E8E0D5] transition-colors"
            onClick={() => setSelected(null)}
          >
            ✕ Clear
          </button>
        )}
      </div>

      {/* ── Quick-pick row ── */}
      <div className="mt-3 flex flex-wrap justify-center gap-1">
        {BODY_PARTS.filter(p => !["frontal-lobe", "temporal-lobe", "muscles", "bones", "skin"].includes(p.id)).map(p => {
          const sc = getSystemColor(p.system);
          const isActive = selected === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setSelected(p.id)}
              className="quick-pick-btn"
              data-active={isActive}
              style={{
                ["--qp-color" as string]: sc.glow,
                borderColor: isActive ? `${sc.glow}50` : undefined,
                background: isActive ? `${sc.glow}12` : undefined,
                color: isActive ? sc.glow : undefined,
              }}
            >
              <span className="mr-0.5 text-[10px]">{p.emoji}</span>
              {p.name}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
