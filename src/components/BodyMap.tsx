import { useBodyStore } from "@/store/useBodyStore";
import { BODY_PARTS, LAYER_META, type Layer } from "@/data/content";
import { motion } from "framer-motion";
import { useState } from "react";

const LAYERS: { id: Layer; label: string }[] = [
  { id: "facts", label: "Facts" },
  { id: "personal", label: "Personal" },
  { id: "challenge", label: "Challenge" },
  { id: "trends", label: "Trends" },
  { id: "explore", label: "Explore" },
];

function getPartVisualLayer(id: string): "skin" | "muscles" | "organs" | "bones" {
  if (["eyes", "ears", "throat", "sinuses"].includes(id)) return "skin";
  if (["shoulders", "elbows", "wrists", "hands", "hips", "knees", "ankles", "feet", "jaw", "muscles"].includes(id)) return "muscles";
  if (["spine-cervical", "spine-thoracic", "spine-lumbar"].includes(id)) return "bones";
  return "organs";
}

export function BodyMap() {
  const selected = useBodyStore((s) => s.selectedPartId);
  const setSelected = useBodyStore((s) => s.setSelectedPart);
  const activeLayer = useBodyStore((s) => s.activeLayer);
  const setLayer = useBodyStore((s) => s.setLayer);
  const bodyMapLayer = useBodyStore((s) => s.bodyMapLayer);
  const setBodyMapLayer = useBodyStore((s) => s.setBodyMapLayer);
  
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);
  const [pulsingPart, setPulsingPart] = useState<string | null>(null);

  const cls = (id: string) => {
    const isDimmed = bodyMapLayer !== getPartVisualLayer(id);
    return `body-part layer-${activeLayer} ${selected === id ? "is-active" : ""} ${pulsingPart === id ? "is-pulsing" : ""} ${isDimmed ? "opacity-15 pointer-events-none" : "opacity-100"}`;
  };

  const handleClick = (id: string) => () => {
    setPulsingPart(id);
    setSelected(id);
    setTimeout(() => setPulsingPart(null), 300);
  };

  // Find display name for hovered/active part
  const hoveredName = hoveredPart
    ? BODY_PARTS.find((p) => p.id === hoveredPart)?.name
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-[420px]"
    >
      {/* Ambient halo */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle at center, var(--glow-violet) 0%, transparent 60%)",
        }}
      />

      {/* Layer toggle pills */}
      <div className="mb-4 flex flex-wrap justify-center gap-2">
        {LAYERS.map((l) => (
          <button
            key={l.id}
            data-layer={l.id}
            onClick={() => setLayer(l.id)}
            className={`layer-pill ${activeLayer === l.id ? "layer-pill--active" : ""}`}
          >
            <span className="dot" />
            {l.label}
          </button>
        ))}
      </div>

      {/* Anatomy Visual System Toggle */}
      <div className="mb-6 flex flex-wrap justify-center gap-1.5 bg-[#0F0F0F]/40 p-1 rounded-full border border-border/40 max-w-sm mx-auto">
        {(["skin", "muscles", "organs", "bones"] as const).map((layer) => (
          <button
            key={layer}
            onClick={() => setBodyMapLayer(layer)}
            className={`rounded-full px-2.5 py-1 text-[10px] font-bold capitalize transition-all ${
              bodyMapLayer === layer
                ? "bg-[#FC3D21] text-[#030303] shadow-[0_0_10px_rgba(252,61,33,0.25)]"
                : "text-[#8A8F98] hover:text-[#EAEAEA]"
            }`}
          >
            {layer === "skin" ? "Skin" :
             layer === "muscles" ? "Muscles" :
             layer === "organs" ? "Organs" :
             "Bones"}
          </button>
        ))}
      </div>

      {/* Floating label */}
      {hoveredName && (
        <div className="pointer-events-none absolute left-1/2 top-2 z-10 -translate-x-1/2 rounded-full border border-[#FC3D21]/30 bg-[#030303]/90 px-3 py-1 text-xs font-medium text-[#FC3D21] backdrop-blur-sm">
          {hoveredName}
        </div>
      )}

      <svg
        viewBox="0 0 400 780"
        className="w-full h-auto"
        role="img"
        aria-label="Interactive human body map with 30+ clickable anatomical zones"
      >
        <defs>
          <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#16181D" />
            <stop offset="100%" stopColor="#0D0D0D" />
          </linearGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="4" />
          </filter>
          <radialGradient id="organGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FC3D21" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FC3D21" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ═══ Body silhouette ═══ */}
        <g className="body-outline">
          {/* Head */}
          <ellipse cx="200" cy="70" rx="48" ry="58" fill="url(#bodyGrad)" />
          {/* Neck */}
          <rect x="184" y="120" width="32" height="28" rx="4" fill="url(#bodyGrad)" />
          {/* Torso */}
          <path
            d="M120 150 Q200 130 280 150 L295 320 Q295 400 275 440 L260 470 L140 470 L125 440 Q105 400 105 320 Z"
            fill="url(#bodyGrad)"
          />
          {/* Hips */}
          <path d="M140 460 L260 460 L270 520 L130 520 Z" fill="url(#bodyGrad)" />
          {/* Left arm */}
          <path
            d="M120 158 Q90 180 80 240 L72 360 Q70 400 78 440 L92 442 Q98 400 100 360 L110 250 Q116 200 130 175 Z"
            fill="url(#bodyGrad)"
          />
          {/* Right arm */}
          <path
            d="M280 158 Q310 180 320 240 L328 360 Q330 400 322 440 L308 442 Q302 400 300 360 L290 250 Q284 200 270 175 Z"
            fill="url(#bodyGrad)"
          />
          {/* Left leg */}
          <path d="M140 520 L132 720 L168 720 L182 520 Z" fill="url(#bodyGrad)" />
          {/* Right leg */}
          <path d="M218 520 L232 720 L268 720 L260 520 Z" fill="url(#bodyGrad)" />
          {/* Left foot */}
          <path d="M128 715 L125 745 Q130 755 170 755 L172 720 Z" fill="url(#bodyGrad)" />
          {/* Right foot */}
          <path d="M228 720 L230 755 Q270 755 275 745 L272 715 Z" fill="url(#bodyGrad)" />
        </g>

        {/* ═══ CLICKABLE ORGANS ═══ */}

        {/* ── HEAD REGION ── */}

        {/* Brain */}
        <g onClick={handleClick("brain")} onMouseEnter={() => setHoveredPart("brain")} onMouseLeave={() => setHoveredPart(null)} data-organ="brain">
          <ellipse cx="200" cy="52" rx="36" ry="32" className={cls("brain")} />
          <path d="M170 52 Q200 35 230 52" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />
        </g>

        {/* Frontal Lobe */}
        <g onClick={handleClick("frontal-lobe")} onMouseEnter={() => setHoveredPart("frontal-lobe")} onMouseLeave={() => setHoveredPart(null)} data-organ="frontal-lobe">
          <path d="M176 30 Q200 22 224 30 L224 48 Q200 44 176 48 Z" className={cls("frontal-lobe")} />
        </g>

        {/* Temporal Lobe */}
        <g onClick={handleClick("temporal-lobe")} onMouseEnter={() => setHoveredPart("temporal-lobe")} onMouseLeave={() => setHoveredPart(null)} data-organ="temporal-lobe">
          <path d="M166 48 Q168 58 166 68 L178 68 L178 48 Z" className={cls("temporal-lobe")} />
          <path d="M234 48 Q232 58 234 68 L222 68 L222 48 Z" className={cls("temporal-lobe")} />
        </g>

        {/* Eyes */}
        <g onClick={handleClick("eyes")} onMouseEnter={() => setHoveredPart("eyes")} onMouseLeave={() => setHoveredPart(null)} data-organ="eyes">
          <ellipse cx="184" cy="64" rx="8" ry="4.5" className={cls("eyes")} />
          <ellipse cx="216" cy="64" rx="8" ry="4.5" className={cls("eyes")} />
        </g>

        {/* Ears */}
        <g onClick={handleClick("ears")} onMouseEnter={() => setHoveredPart("ears")} onMouseLeave={() => setHoveredPart(null)} data-organ="ears">
          <ellipse cx="155" cy="68" rx="5" ry="9" className={cls("ears")} />
          <ellipse cx="245" cy="68" rx="5" ry="9" className={cls("ears")} />
        </g>

        {/* Sinuses */}
        <g onClick={handleClick("sinuses")} onMouseEnter={() => setHoveredPart("sinuses")} onMouseLeave={() => setHoveredPart(null)} data-organ="sinuses">
          <rect x="192" y="58" width="16" height="14" rx="3" className={cls("sinuses")} />
        </g>

        {/* Jaw */}
        <g onClick={handleClick("jaw")} onMouseEnter={() => setHoveredPart("jaw")} onMouseLeave={() => setHoveredPart(null)} data-organ="jaw">
          <path d="M172 88 Q200 108 228 88 L222 78 Q200 90 178 78 Z" className={cls("jaw")} />
        </g>

        {/* Throat */}
        <g onClick={handleClick("throat")} onMouseEnter={() => setHoveredPart("throat")} onMouseLeave={() => setHoveredPart(null)} data-organ="throat">
          <rect x="188" y="118" width="24" height="28" rx="5" className={cls("throat")} />
        </g>

        {/* ── CHEST REGION ── */}

        {/* Heart */}
        <g onClick={handleClick("heart")} onMouseEnter={() => setHoveredPart("heart")} onMouseLeave={() => setHoveredPart(null)} data-organ="heart">
          <path
            d="M188 200 Q172 188 172 208 Q172 226 200 244 Q228 226 228 208 Q228 188 212 200 Q200 210 188 200 Z"
            className={cls("heart")}
          />
        </g>

        {/* Left Lung */}
        <g onClick={handleClick("lung-left")} onMouseEnter={() => setHoveredPart("lung-left")} onMouseLeave={() => setHoveredPart(null)} data-organ="lung-left">
          <path
            d="M155 190 Q138 200 134 250 Q132 290 148 310 L172 305 L172 200 Q166 192 155 190 Z"
            className={cls("lung-left")}
          />
        </g>

        {/* Right Lung */}
        <g onClick={handleClick("lung-right")} onMouseEnter={() => setHoveredPart("lung-right")} onMouseLeave={() => setHoveredPart(null)} data-organ="lung-right">
          <path
            d="M245 190 Q262 200 266 250 Q268 290 252 310 L228 305 L228 200 Q234 192 245 190 Z"
            className={cls("lung-right")}
          />
        </g>

        {/* ── ABDOMEN REGION ── */}

        {/* Liver */}
        <g onClick={handleClick("liver")} onMouseEnter={() => setHoveredPart("liver")} onMouseLeave={() => setHoveredPart(null)} data-organ="liver">
          <path
            d="M218 320 Q258 318 260 340 Q260 358 238 362 L205 362 L205 328 Q210 322 218 320 Z"
            className={cls("liver")}
          />
        </g>

        {/* Stomach */}
        <g onClick={handleClick("stomach")} onMouseEnter={() => setHoveredPart("stomach")} onMouseLeave={() => setHoveredPart(null)} data-organ="stomach">
          <path
            d="M162 330 Q150 345 158 370 Q168 385 190 380 L195 340 Q180 330 162 330 Z"
            className={cls("stomach")}
          />
        </g>

        {/* Small Intestine */}
        <g onClick={handleClick("small-intestine")} onMouseEnter={() => setHoveredPart("small-intestine")} onMouseLeave={() => setHoveredPart(null)} data-organ="small-intestine">
          <path
            d="M175 395 Q170 405 178 415 Q190 418 195 408 Q200 418 210 415 Q218 405 215 395 Q210 405 200 402 Q190 405 185 395 Z"
            className={cls("small-intestine")}
          />
        </g>

        {/* Large Intestine */}
        <g onClick={handleClick("large-intestine")} onMouseEnter={() => setHoveredPart("large-intestine")} onMouseLeave={() => setHoveredPart(null)} data-organ="large-intestine">
          <path
            d="M148 385 L148 420 Q148 438 165 440 L235 440 Q252 438 252 420 L252 385 Q252 375 240 375 L240 425 L160 425 L160 375 Q148 375 148 385 Z"
            className={cls("large-intestine")}
          />
        </g>

        {/* Kidneys */}
        <g onClick={handleClick("kidneys")} onMouseEnter={() => setHoveredPart("kidneys")} onMouseLeave={() => setHoveredPart(null)} data-organ="kidneys">
          <path d="M148 340 Q138 350 142 375 Q154 382 160 370 Q162 350 156 340 Z" className={cls("kidneys")} />
          <path d="M252 340 Q262 350 258 375 Q246 382 240 370 Q238 350 244 340 Z" className={cls("kidneys")} />
        </g>

        {/* Bladder */}
        <g onClick={handleClick("bladder")} onMouseEnter={() => setHoveredPart("bladder")} onMouseLeave={() => setHoveredPart(null)} data-organ="bladder">
          <ellipse cx="200" cy="455" rx="18" ry="12" className={cls("bladder")} />
        </g>

        {/* ── SPINE REGION ── */}

        {/* Cervical Spine */}
        <g onClick={handleClick("spine-cervical")} onMouseEnter={() => setHoveredPart("spine-cervical")} onMouseLeave={() => setHoveredPart(null)} data-organ="spine-cervical">
          <rect x="197" y="115" width="6" height="35" rx="2" className={cls("spine-cervical")} />
        </g>

        {/* Thoracic Spine */}
        <g onClick={handleClick("spine-thoracic")} onMouseEnter={() => setHoveredPart("spine-thoracic")} onMouseLeave={() => setHoveredPart(null)} data-organ="spine-thoracic">
          <rect x="197" y="155" width="6" height="150" rx="2" className={cls("spine-thoracic")} />
        </g>

        {/* Lumbar Spine */}
        <g onClick={handleClick("spine-lumbar")} onMouseEnter={() => setHoveredPart("spine-lumbar")} onMouseLeave={() => setHoveredPart(null)} data-organ="spine-lumbar">
          <rect x="197" y="310" width="6" height="85" rx="2" className={cls("spine-lumbar")} />
        </g>

        {/* ── UPPER LIMBS ── */}

        {/* Shoulders */}
        <g onClick={handleClick("shoulders")} onMouseEnter={() => setHoveredPart("shoulders")} onMouseLeave={() => setHoveredPart(null)} data-organ="shoulders">
          <circle cx="128" cy="162" r="12" className={cls("shoulders")} />
          <circle cx="272" cy="162" r="12" className={cls("shoulders")} />
        </g>

        {/* Elbows */}
        <g onClick={handleClick("elbows")} onMouseEnter={() => setHoveredPart("elbows")} onMouseLeave={() => setHoveredPart(null)} data-organ="elbows">
          <circle cx="92" cy="280" r="10" className={cls("elbows")} />
          <circle cx="308" cy="280" r="10" className={cls("elbows")} />
        </g>

        {/* Wrists */}
        <g onClick={handleClick("wrists")} onMouseEnter={() => setHoveredPart("wrists")} onMouseLeave={() => setHoveredPart(null)} data-organ="wrists">
          <rect x="72" y="390" width="16" height="12" rx="4" className={cls("wrists")} />
          <rect x="312" y="390" width="16" height="12" rx="4" className={cls("wrists")} />
        </g>

        {/* Hands */}
        <g onClick={handleClick("hands")} onMouseEnter={() => setHoveredPart("hands")} onMouseLeave={() => setHoveredPart(null)} data-organ="hands">
          <ellipse cx="80" cy="430" rx="10" ry="14" className={cls("hands")} />
          <ellipse cx="320" cy="430" rx="10" ry="14" className={cls("hands")} />
        </g>

        {/* ── LOWER LIMBS ── */}

        {/* Hips */}
        <g onClick={handleClick("hips")} onMouseEnter={() => setHoveredPart("hips")} onMouseLeave={() => setHoveredPart(null)} data-organ="hips">
          <circle cx="158" cy="490" r="14" className={cls("hips")} />
          <circle cx="242" cy="490" r="14" className={cls("hips")} />
        </g>

        {/* Knees */}
        <g onClick={handleClick("knees")} onMouseEnter={() => setHoveredPart("knees")} onMouseLeave={() => setHoveredPart(null)} data-organ="knees">
          <circle cx="150" cy="620" r="12" className={cls("knees")} />
          <circle cx="250" cy="620" r="12" className={cls("knees")} />
        </g>

        {/* Ankles */}
        <g onClick={handleClick("ankles")} onMouseEnter={() => setHoveredPart("ankles")} onMouseLeave={() => setHoveredPart(null)} data-organ="ankles">
          <circle cx="140" cy="715" r="8" className={cls("ankles")} />
          <circle cx="260" cy="715" r="8" className={cls("ankles")} />
        </g>

        {/* Feet */}
        <g onClick={handleClick("feet")} onMouseEnter={() => setHoveredPart("feet")} onMouseLeave={() => setHoveredPart(null)} data-organ="feet">
          <ellipse cx="148" cy="745" rx="22" ry="8" className={cls("feet")} />
          <ellipse cx="252" cy="745" rx="22" ry="8" className={cls("feet")} />
        </g>

        {/* Skin (whole body clickable overlay — lowest priority) */}
        <rect
          x="60" y="20" width="280" height="740"
          fill="transparent"
          className={cls("skin")}
          onClick={handleClick("skin")}
          onMouseEnter={() => setHoveredPart("skin")}
          onMouseLeave={() => setHoveredPart(null)}
          data-organ="skin"
          style={{ pointerEvents: "all" }}
        />

        {/* Bones (spine line — visual accent) */}
        <g onClick={handleClick("bones")} onMouseEnter={() => setHoveredPart("bones")} onMouseLeave={() => setHoveredPart(null)} data-organ="bones">
          <line x1="200" y1="160" x2="200" y2="395" stroke="currentColor" strokeWidth="1.5" opacity="0.15" className={cls("bones")} />
        </g>
      </svg>

      {/* Floating tip */}
      <p className="mt-4 text-center text-sm text-[#8A8F98]">
        {selected
          ? "Tap another part, or scroll the panel →"
          : "Tap an organ to reveal its secrets"}
      </p>

      {/* Quick-pick row */}
      <div className="mt-4 flex flex-wrap justify-center gap-1.5">
        {BODY_PARTS.filter(p => !["frontal-lobe", "temporal-lobe"].includes(p.id)).map((p) => (
          <button
            key={p.id}
            onClick={() => setSelected(p.id)}
            className={`group rounded-full border px-2.5 py-1 text-[11px] font-medium transition-all ${
              selected === p.id
                ? "border-[#FC3D21]/40 bg-[#FC3D21]/10 text-[#FC3D21]"
                : "border-[#222222] bg-[#0F0F0F]/60 text-[#8A8F98] hover:border-[#FC3D21]/30 hover:text-[#EAEAEA]"
            }`}
          >
            <span className="mr-0.5">{p.emoji}</span>
            {p.name}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
