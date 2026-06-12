import { useBodyStore } from "@/store/useBodyStore";
import { BODY_PARTS } from "@/data/content";
import { motion } from "framer-motion";

/**
 * Stylized anatomical body map. Front view, ~400x780 viewBox.
 * Each clickable region uses class "body-part" and applies "is-active" when selected.
 */
export function BodyMap() {
  const selected = useBodyStore((s) => s.selectedPartId);
  const setSelected = useBodyStore((s) => s.setSelectedPart);

  const cls = (id: string) =>
    `body-part ${selected === id ? "is-active" : ""}`;

  const handleClick = (id: string) => () => setSelected(id);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-[420px]"
    >
      {/* Ambient halo */}
      <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-50"
        style={{ background: "radial-gradient(circle at center, var(--glow-violet) 0%, transparent 60%)" }} />

      <svg
        viewBox="0 0 400 780"
        className="w-full h-auto"
        role="img"
        aria-label="Interactive human body map"
      >
        <defs>
          <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.26 0.03 265)" />
            <stop offset="100%" stopColor="oklch(0.18 0.025 260)" />
          </linearGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        {/* === Body silhouette === */}
        <g className="body-outline">
          {/* Head */}
          <ellipse cx="200" cy="70" rx="48" ry="58" fill="url(#bodyGrad)" />
          {/* Neck */}
          <rect x="184" y="120" width="32" height="28" fill="url(#bodyGrad)" />
          {/* Torso */}
          <path
            d="M120 150 Q200 130 280 150 L295 320 Q295 400 275 440 L260 470 L140 470 L125 440 Q105 400 105 320 Z"
            fill="url(#bodyGrad)"
          />
          {/* Hips */}
          <path d="M140 460 L260 460 L270 520 L130 520 Z" fill="url(#bodyGrad)" />
          {/* Left arm */}
          <path d="M120 158 Q90 180 80 240 L72 360 Q70 400 78 440 L92 442 Q98 400 100 360 L110 250 Q116 200 130 175 Z" fill="url(#bodyGrad)" />
          {/* Right arm */}
          <path d="M280 158 Q310 180 320 240 L328 360 Q330 400 322 440 L308 442 Q302 400 300 360 L290 250 Q284 200 270 175 Z" fill="url(#bodyGrad)" />
          {/* Left leg */}
          <path d="M140 520 L132 720 L168 720 L182 520 Z" fill="url(#bodyGrad)" />
          {/* Right leg */}
          <path d="M218 520 L232 720 L268 720 L260 520 Z" fill="url(#bodyGrad)" />
        </g>

        {/* === Skin (whole body overlay — click anywhere else) === */}
        <rect
          x="60" y="20" width="280" height="730"
          fill="transparent"
          className={cls("skin")}
          onClick={handleClick("skin")}
          style={{ pointerEvents: "all" }}
        />

        {/* === Brain === */}
        <g onClick={handleClick("brain")}>
          <ellipse
            cx="200" cy="58" rx="36" ry="38"
            className={cls("brain")}
          />
          <path d="M168 56 Q200 30 232 56" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        </g>

        {/* === Eyes === */}
        <g onClick={handleClick("eyes")}>
          <ellipse cx="184" cy="64" rx="7" ry="4" className={cls("eyes")} />
          <ellipse cx="216" cy="64" rx="7" ry="4" className={cls("eyes")} />
        </g>

        {/* === Heart === */}
        <g onClick={handleClick("heart")}>
          <path
            d="M188 200 Q172 188 172 208 Q172 226 200 244 Q228 226 228 208 Q228 188 212 200 Q200 210 188 200 Z"
            className={cls("heart")}
          />
        </g>

        {/* === Lungs === */}
        <g onClick={handleClick("lung-left")}>
          <path
            d="M155 190 Q138 200 134 250 Q132 290 148 310 L172 305 L172 200 Q166 192 155 190 Z"
            className={cls("lung-left")}
          />
          <path
            d="M245 190 Q262 200 266 250 Q268 290 252 310 L228 305 L228 200 Q234 192 245 190 Z"
            className={cls("lung-left")}
          />
        </g>

        {/* === Liver === */}
        <g onClick={handleClick("liver")}>
          <path
            d="M158 320 Q150 330 158 360 L228 360 Q236 350 230 322 Q200 315 158 320 Z"
            className={cls("liver")}
          />
        </g>

        {/* === Stomach === */}
        <g onClick={handleClick("stomach")}>
          <path
            d="M180 340 Q170 360 180 384 Q200 396 220 384 Q230 364 220 340 Z"
            className={cls("stomach")}
          />
        </g>

        {/* === Intestines === */}
        <g onClick={handleClick("intestines")}>
          <path
            d="M155 395 Q145 410 155 425 Q170 430 170 410 Q200 410 200 430 Q200 450 175 450 Q150 450 150 430 Q170 470 200 466 Q230 470 250 430 Q250 450 225 450 Q200 450 200 430 Q200 410 230 410 Q230 430 245 425 Q255 410 245 395 Z"
            className={cls("intestines")}
          />
        </g>

        {/* === Kidneys === */}
        <g onClick={handleClick("kidneys")}>
          <path d="M150 350 Q140 360 144 385 Q156 392 162 380 Q164 360 158 350 Z" className={cls("kidneys")} />
          <path d="M250 350 Q260 360 256 385 Q244 392 238 380 Q236 360 242 350 Z" className={cls("kidneys")} />
        </g>

        {/* === Bones (spine + ribs hint) === */}
        <g onClick={handleClick("bones")}>
          <rect x="197" y="160" width="6" height="310" rx="2" className={cls("bones")} />
        </g>

        {/* Labels on hover/active */}
      </svg>

      {/* Floating tip */}
      <p className="mt-4 text-center text-sm text-muted-foreground">
        {selected
          ? "Tap another part, or scroll the panel →"
          : "Tap an organ to reveal its secrets"}
      </p>

      {/* Quick-pick row */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {BODY_PARTS.map((p) => (
          <button
            key={p.id}
            onClick={() => setSelected(p.id)}
            className={`group rounded-full border px-3 py-1.5 text-xs transition-all ${
              selected === p.id
                ? "border-primary bg-primary/15 text-primary glow-border"
                : "border-border bg-card/60 text-muted-foreground hover:border-primary/60 hover:text-foreground"
            }`}
          >
            <span className="mr-1">{p.emoji}</span>
            {p.name}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
