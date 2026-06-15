import { useState, useRef, useEffect, useCallback } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

interface BodyPart {
  id: string;
  name: string;
  emoji: string;
  system: string;
  fact: string;
  tip: string;
  challenge: string;
  trend: string;
}

const BODY_PARTS: BodyPart[] = [
  { id: "brain",           name: "Brain",           emoji: "🧠", system: "Nervous",         fact: "The brain contains ~86 billion neurons and consumes 20% of your body's energy.", tip: "Sleep 7–9 hours to consolidate memory.", challenge: "Try learning something new every day — neuroplasticity never stops.", trend: "Neuroimaging now maps real-time thought patterns with fMRI at sub-millimetre precision." },
  { id: "frontal-lobe",    name: "Frontal Lobe",    emoji: "💭", system: "Nervous",         fact: "The frontal lobe governs decision-making, personality, and voluntary movement.", tip: "Deep breathing activates the prefrontal cortex and reduces impulsive choices.", challenge: "Practise mindful pausing before reacting in stressful situations.", trend: "tDCS (transcranial direct current stimulation) is being studied for cognitive enhancement." },
  { id: "temporal-lobe",   name: "Temporal Lobe",   emoji: "🎵", system: "Nervous",         fact: "Your temporal lobes handle language comprehension, memory, and auditory processing.", tip: "Music training measurably thickens the temporal cortex in musicians.", challenge: "Learn a new language — bilingualism delays cognitive decline by ~5 years.", trend: "Closed-loop hearing aids now adapt in real-time using temporal-lobe EEG signals." },
  { id: "eyes",            name: "Eyes",            emoji: "👁️", system: "Sensory",          fact: "The human eye can distinguish ~10 million colours and adapts to a trillion-fold change in light.", tip: "Follow the 20-20-20 rule: every 20 min, look 20 ft away for 20 seconds.", challenge: "Spend 2 hours outdoors daily — it significantly reduces myopia risk.", trend: "Gene therapy has partially restored sight in patients with Leber congenital amaurosis." },
  { id: "ears",            name: "Ears",            emoji: "👂", system: "Sensory",          fact: "The cochlea's hair cells convert sound waves into electrical signals within microseconds.", tip: "Keep headphone volume below 60% and take listening breaks every 60 minutes.", challenge: "Practise active listening — focus on the speaker without planning your reply.", trend: "AI-driven cochlear implants now separate speech from noise in real-time." },
  { id: "sinuses",         name: "Sinuses",         emoji: "💨", system: "Respiratory",      fact: "Four pairs of paranasal sinuses lighten the skull and humidify inhaled air.", tip: "Nasal rinses with saline reduce sinus infections by ~60%.", challenge: "Try box breathing (4-4-4-4) to clear sinus pressure and calm your nervous system.", trend: "Balloon sinuplasty offers minimally invasive relief for chronic sinusitis." },
  { id: "jaw",             name: "Jaw",             emoji: "🦷", system: "Musculoskeletal",  fact: "The masseter is the strongest muscle relative to its size in the human body.", tip: "Avoid teeth-clenching during stress — it erodes enamel and causes headaches.", challenge: "Do jaw-release exercises to reduce TMJ tension.", trend: "3D-printed mandible implants now restore full jaw function after trauma." },
  { id: "throat",          name: "Throat",          emoji: "🗣️", system: "Respiratory",      fact: "The larynx vibrates 100–300 times per second to produce vocal sound.", tip: "Stay hydrated — vocal cords function best when well-lubricated.", challenge: "Practice diaphragmatic breathing to strengthen your voice and reduce strain.", trend: "Laryngeal electromyography now detects early vocal cord paralysis." },
  { id: "heart",           name: "Heart",           emoji: "❤️", system: "Circulatory",      fact: "Your heart beats ~100,000 times a day, pumping 5 litres of blood per minute at rest.", tip: "Zone-2 cardio for 150 min/week lowers resting heart rate and all-cause mortality.", challenge: "Track your HRV weekly — it's the best single indicator of cardiovascular health.", trend: "AI ECG analysis now detects atrial fibrillation from a 30-second reading." },
  { id: "lung-left",       name: "Left Lung",       emoji: "🫁", system: "Respiratory",      fact: "The left lung has 2 lobes; the right has 3 — making room for the heart.", tip: "Aerobic exercise grows new capillaries around the alveoli, boosting VO₂ max.", challenge: "Try 4-7-8 breathing (inhale 4s, hold 7s, exhale 8s) every night.", trend: "Liquid biopsy now detects early lung cancer from a single blood draw." },
  { id: "lung-right",      name: "Right Lung",      emoji: "🫁", system: "Respiratory",      fact: "The right lung is slightly larger and heavier than the left.", tip: "Avoid indoor air pollutants — sealed homes can have 5× outdoor pollution levels.", challenge: "Log your resting oxygen saturation with a pulse oximeter for a week.", trend: "Organoid models of lung tissue now allow drug-testing without animal trials." },
  { id: "liver",           name: "Liver",           emoji: "🫀", system: "Digestive",        fact: "The liver performs over 500 functions including detoxification, bile production, and glycogen storage.", tip: "Eat cruciferous vegetables — sulforaphane activates Nrf2, boosting liver detox.", challenge: "Cut added sugar for 30 days — fatty liver reverses within weeks.", trend: "Non-invasive FibroScan now grades liver fibrosis without biopsy." },
  { id: "stomach",         name: "Stomach",         emoji: "🫃", system: "Digestive",        fact: "Gastric acid (pH 1.5–3.5) can dissolve iron — your stomach lining renews every 3 days.", tip: "Eat slowly and chew 20–30 times per bite to reduce gastric workload.", challenge: "Practise time-restricted eating (14-hour fast) for improved gut motility.", trend: "Smart capsule endoscopes now transmit HD video through the entire GI tract wirelessly." },
  { id: "small-intestine", name: "Small Intestine", emoji: "🌀", system: "Digestive",        fact: "At 6–7 metres long, the small intestine absorbs ~90% of all nutrients.", tip: "Diverse plant intake (30+ types/week) maximises absorptive surface enzymes.", challenge: "Add fermented foods daily — kefir or kimchi measurably shifts microbiome diversity within 6 weeks.", trend: "Microbiome sequencing is now being used to personalise nutrition plans." },
  { id: "large-intestine", name: "Large Intestine", emoji: "🔄", system: "Digestive",        fact: "The colon houses 38 trillion microbes — roughly equal to the number of your own cells.", tip: "30 g fibre/day feeds the microbiome and reduces colorectal cancer risk by 25%.", challenge: "Track stool consistency with the Bristol Stool Scale for a week.", trend: "FMT (fecal microbiota transplant) is achieving 90%+ cure rates for C. diff infection." },
  { id: "kidneys",         name: "Kidneys",         emoji: "🫘", system: "Urinary",          fact: "Your kidneys filter ~180 litres of blood daily, producing 1–2 litres of urine.", tip: "Aim for light-yellow urine — dark urine signals dehydration impairing kidney filtration.", challenge: "Reduce sodium to <2 g/day for 4 weeks and remeasure blood pressure.", trend: "Wearable fluid-monitoring patches now track hydration status continuously." },
  { id: "bladder",         name: "Bladder",         emoji: "💧", system: "Urinary",          fact: "A healthy bladder holds 400–600 ml and sends signals when ~150 ml full.", tip: "Don't train your bladder to go 'just in case' — it lowers functional capacity.", challenge: "Keep a bladder diary for 3 days to identify trigger patterns.", trend: "Sacral neuromodulation devices now treat overactive bladder via implanted micro-pulse generators." },
  { id: "spine-cervical",  name: "Cervical Spine",  emoji: "🦴", system: "Skeletal",         fact: "Seven cervical vertebrae support your 5 kg head and house the brachial plexus.", tip: "Chin-tuck exercises counteract forward head posture from screen use.", challenge: "Set a posture reminder every 45 minutes — reset your neck alignment.", trend: "Artificial cervical disc replacement is now preferred over fusion for single-level disease." },
  { id: "spine-thoracic",  name: "Thoracic Spine",  emoji: "🦴", system: "Skeletal",         fact: "Twelve thoracic vertebrae articulate with ribs, protecting the spinal cord.", tip: "Thoracic extension over a foam roller reverses kyphosis caused by prolonged sitting.", challenge: "Do 10 thoracic rotations daily — mobility here directly improves shoulder and hip function.", trend: "Robotic-assisted spinal surgery now places pedicle screws with sub-millimetre accuracy." },
  { id: "spine-lumbar",    name: "Lumbar Spine",    emoji: "🦴", system: "Skeletal",         fact: "The lumbar spine bears the most compressive load — up to 10× body weight during lifting.", tip: "Strengthen the posterior chain (glutes, hamstrings, erectors) to unload lumbar discs.", challenge: "Adopt a hip-hinge pattern for all lifts this week — it transforms lumbar health long-term.", trend: "Artificial disc replacement outcomes now match fusion at 10-year follow-up." },
  { id: "shoulders",       name: "Shoulders",       emoji: "💪", system: "Musculoskeletal",  fact: "The shoulder has the greatest range of motion of any joint — achieved at the cost of stability.", tip: "Rotator cuff exercises (external rotation, face pulls) prevent 80% of shoulder injuries.", challenge: "Add one pulling movement for every pushing movement in your training week.", trend: "Platelet-rich plasma injections are being refined for rotator cuff repair acceleration." },
  { id: "elbows",          name: "Elbows",          emoji: "🦾", system: "Musculoskeletal",  fact: "The elbow is a hinge-pivot joint combining three bones — humerus, radius, and ulna.", tip: "Massage and eccentric wrist curls resolve lateral epicondylitis (tennis elbow) in ~8 weeks.", challenge: "Reduce repetitive gripping load by alternating hands in daily tasks.", trend: "Ultrasound-guided percutaneous tenotomy is replacing open surgery for tendinopathy." },
  { id: "wrists",          name: "Wrists",          emoji: "🤲", system: "Musculoskeletal",  fact: "Eight carpal bones work together to give the wrist its remarkable dexterity.", tip: "Wrist circles and nerve-gliding exercises prevent CTS from repetitive keyboard use.", challenge: "Take a 5-minute wrist mobility break every hour during computer work.", trend: "Smart splints with embedded sensors now guide CTS rehab protocols in real-time." },
  { id: "hands",           name: "Hands",           emoji: "✋", system: "Musculoskeletal",  fact: "Each hand has 27 bones, 29 joints, and more than 120 named ligaments.", tip: "Regular grip training correlates with lower all-cause mortality — it's a longevity marker.", challenge: "Squeeze a stress ball 50 reps per hand, 3 times daily for 4 weeks.", trend: "Bionic hands with tactile feedback are now allowing users to feel object texture." },
  { id: "hips",            name: "Hips",            emoji: "🦵", system: "Musculoskeletal",  fact: "The hip is a ball-and-socket joint designed to bear 3–5× body weight during walking.", tip: "Glute-med strengthening (lateral band walks, clamshells) prevents knee and lower-back pain.", challenge: "Spend 5 minutes in a deep squat daily — it's the default resting position of healthy hips.", trend: "Custom 3D-printed titanium hip implants are now matched to patient anatomy pre-operatively." },
  { id: "knees",           name: "Knees",           emoji: "🦿", system: "Musculoskeletal",  fact: "The knee joint has four ligaments, two menisci, and absorbs ~3× body weight per step.", tip: "Quad strengthening reduces knee OA pain by 30–40% without any medication.", challenge: "Avoid prolonged sitting — every 30 min, do 10 terminal knee extensions.", trend: "Cartilage regeneration with autologous chondrocyte implantation is achieving 10-year success rates." },
  { id: "ankles",          name: "Ankles",          emoji: "🦶", system: "Musculoskeletal",  fact: "The ankle complex includes the talocrural and subtalar joints, enabling walking on uneven surfaces.", tip: "Single-leg balance training for 60 seconds/day reduces ankle sprain risk by 40%.", challenge: "Walk barefoot on grass or sand for 10 minutes daily — it strengthens intrinsic foot muscles.", trend: "Ankle disc replacement is now viable for end-stage OA, avoiding fusion stiffness." },
  { id: "feet",            name: "Feet",            emoji: "👣", system: "Musculoskeletal",  fact: "Your feet contain 26 bones, 33 joints, and over 100 muscles, tendons, and ligaments.", tip: "Toe-spacers and foot-strengthening exercises reverse the effects of narrow footwear.", challenge: "Measure your foot pressure pattern with a standing scale — it reveals postural imbalances.", trend: "AI-powered gait analysis apps now provide clinical-grade biomechanical reports from a smartphone camera." },
  { id: "skin",            name: "Skin",            emoji: "🫧", system: "Integumentary",    fact: "Skin is the body's largest organ at ~2 m², renewing itself completely every 27 days.", tip: "SPF 30+ daily is the single highest-ROI anti-ageing intervention available.", challenge: "Audit your skincare for comedogenic ingredients — many products worsen the skin they claim to treat.", trend: "Senolytic creams targeting zombie cells in the dermis are entering Phase II clinical trials." },
  { id: "bones",           name: "Bones",           emoji: "🦴", system: "Skeletal",         fact: "Bone is a living tissue — your skeleton completely renews itself every ~10 years.", tip: "Weight-bearing exercise + 1000 mg calcium + vitamin D3/K2 maximises peak bone density.", challenge: "Get a DEXA scan after 40 — early detection of osteopenia gives a 10-year window to reverse it.", trend: "Anabolic agents like romosozumab now build new bone rather than just slowing its loss." },
  { id: "muscles",         name: "Muscles",         emoji: "💪", system: "Muscular",         fact: "You have ~640 skeletal muscles. Muscle mass peaks at 25–30 and declines ~3–8%/decade without resistance training.", tip: "Protein intake of 1.6–2.2 g/kg bodyweight maximises muscle protein synthesis.", challenge: "Do a 1-rep-max test for your main lifts — tracking strength is the best proxy for muscle health.", trend: "GLP-1 agonists are being studied to preserve lean mass during weight loss." },
];

interface LayerItem {
  id: string;
  label: string;
  color: string;
}

const LAYERS: LayerItem[] = [
  { id: "facts",     label: "Facts",     color: "#00E5C4" },
  { id: "personal",  label: "Personal",  color: "#F5A623" },
  { id: "challenge", label: "Challenge", color: "#A855F7" },
  { id: "trends",    label: "Trends",    color: "#E5504D" },
  { id: "explore",   label: "Explore",   color: "#E8E0D5" },
];

interface SystemColorsVal {
  fill: string;
  stroke: string;
  glow: string;
}

const SYSTEM_COLORS: Record<string, SystemColorsVal> = {
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

const getSC = (system?: string): SystemColorsVal => {
  if (!system) return { fill: "rgba(30,40,68,0.6)", stroke: "rgba(75,85,120,0.5)", glow: "#00E5C4" };
  return SYSTEM_COLORS[system] ?? { fill: "rgba(30,40,68,0.6)", stroke: "rgba(75,85,120,0.5)", glow: "#00E5C4" };
};

const ORGAN_CENTROIDS: Record<string, { x: number; y: number }> = {
  "brain": { x: 200, y: 52 }, "frontal-lobe": { x: 200, y: 36 }, "temporal-lobe": { x: 200, y: 58 },
  "eyes": { x: 200, y: 64 }, "ears": { x: 200, y: 68 }, "sinuses": { x: 200, y: 65 },
  "jaw": { x: 200, y: 90 }, "throat": { x: 200, y: 132 }, "heart": { x: 200, y: 216 },
  "lung-left": { x: 152, y: 252 }, "lung-right": { x: 248, y: 252 }, "liver": { x: 232, y: 342 },
  "stomach": { x: 172, y: 358 }, "small-intestine": { x: 195, y: 408 }, "large-intestine": { x: 200, y: 412 },
  "kidneys": { x: 200, y: 358 }, "bladder": { x: 200, y: 455 }, "spine-cervical": { x: 200, y: 132 },
  "spine-thoracic": { x: 200, y: 230 }, "spine-lumbar": { x: 200, y: 352 }, "shoulders": { x: 200, y: 162 },
  "elbows": { x: 200, y: 280 }, "wrists": { x: 200, y: 396 }, "hands": { x: 200, y: 430 },
  "hips": { x: 200, y: 490 }, "knees": { x: 200, y: 620 }, "ankles": { x: 200, y: 715 },
  "feet": { x: 200, y: 745 }, "skin": { x: 200, y: 400 }, "bones": { x: 200, y: 280 }, "muscles": { x: 200, y: 300 },
};

interface Connection {
  from: string;
  to: string;
  cx1: number;
  cy1: number;
  cx2: number;
  cy2: number;
}

const ORGAN_CONNECTIONS: Connection[] = [
  { from: "lung-left",  to: "throat",             cx1: 148, cy1: 170, cx2: 188, cy2: 200 },
  { from: "lung-right", to: "throat",             cx1: 252, cy1: 170, cx2: 212, cy2: 200 },
  { from: "lung-left",  to: "lung-right",         cx1: 160, cy1: 260, cx2: 240, cy2: 260 },
  { from: "heart",      to: "lung-left",          cx1: 186, cy1: 225, cx2: 160, cy2: 240 },
  { from: "heart",      to: "lung-right",         cx1: 214, cy1: 225, cx2: 240, cy2: 240 },
  { from: "stomach",    to: "small-intestine",    cx1: 175, cy1: 385, cx2: 192, cy2: 395 },
  { from: "small-intestine", to: "large-intestine", cx1: 195, cy1: 420, cx2: 195, cy2: 430 },
  { from: "liver",      to: "stomach",            cx1: 210, cy1: 360, cx2: 180, cy2: 360 },
  { from: "kidneys",    to: "bladder",            cx1: 150, cy1: 410, cx2: 190, cy2: 445 },
  { from: "brain",      to: "spine-cervical",     cx1: 200, cy1: 108, cx2: 200, cy2: 115 },
  { from: "spine-cervical",  to: "spine-thoracic", cx1: 200, cy1: 148, cx2: 200, cy2: 155 },
  { from: "spine-thoracic",  to: "spine-lumbar",  cx1: 200, cy1: 305, cx2: 200, cy2: 312 },
];

// ─── CSS ──────────────────────────────────────────────────────────────────────

const CSS = `
  .bodymap-container {
    --bg: #060B18;
    --surface: rgba(12,18,36,0.92);
    --border: rgba(255,255,255,0.07);
    --text-primary: #E8E0D5;
    --text-muted: #6B7090;
    --accent: #00E5C4;
    --font-display: 'Space Mono', monospace;
    --font-body: 'Inter', sans-serif;
    --radius: 12px;
    --transition: 0.2s cubic-bezier(0.4,0,0.2,1);

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  /* Layout */
  .bodymap-layout {
    display: flex;
    gap: 28px;
    width: 100%;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  /* Body map column */
  .map-col {
    flex: 0 0 320px;
    min-width: 280px;
  }

  /* Info column */
  .info-col {
    flex: 1;
    min-width: 260px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  /* Layer pills */
  .layer-bar {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 12px;
  }
  .layer-pill {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 5px 12px;
    border-radius: 20px;
    border: 1px solid var(--border);
    background: rgba(255,255,255,0.03);
    cursor: pointer;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.03em;
    color: var(--text-muted);
    transition: all var(--transition);
    font-family: var(--font-body);
  }
  .layer-pill:hover { background: rgba(255,255,255,0.06); color: var(--text-primary); }
  .layer-pill.active {
    border-color: color-mix(in srgb, var(--pc) 40%, transparent);
    background: color-mix(in srgb, var(--pc) 12%, transparent);
    color: var(--pc);
  }
  .layer-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--pc);
    flex-shrink: 0;
  }
  .layer-pill.active .layer-dot {
    box-shadow: 0 0 6px var(--pc);
  }

  /* SVG organ styles */
  .organ-path {
    stroke-width: 1.2px;
    stroke-linejoin: round;
    cursor: pointer;
    transition: opacity var(--transition), filter var(--transition);
    opacity: 0.75;
  }
  .organ-path:hover, .organ-hover .organ-path {
    opacity: 1;
    filter: drop-shadow(0 0 6px var(--organ-glow, #00E5C4));
  }
  .organ-active .organ-path {
    opacity: 1;
    filter: drop-shadow(0 0 10px var(--organ-glow, #00E5C4));
  }

  /* Pulse rings */
  @keyframes pulseRing1 {
    0%   { r: 18; opacity: 0.7; }
    100% { r: 30; opacity: 0; }
  }
  @keyframes pulseRing2 {
    0%   { r: 28; opacity: 0.4; }
    100% { r: 44; opacity: 0; }
  }
  .pulse-ring-1 { animation: pulseRing1 1.4s ease-out infinite; }
  .pulse-ring-2 { animation: pulseRing2 1.4s ease-out 0.3s infinite; }

  /* Ripple */
  @keyframes rippleAnim {
    0%   { r: 4; opacity: 0.8; }
    100% { r: 40; opacity: 0; }
  }
  .ripple-ring { animation: rippleAnim 0.7s ease-out forwards; }

  /* Info card */
  .info-card {
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: var(--surface);
    padding: 20px;
    backdrop-filter: blur(16px);
    transition: border-color var(--transition);
  }
  .info-card.active {
    border-color: color-mix(in srgb, var(--card-color, #00E5C4) 30%, transparent);
    box-shadow: 0 0 32px color-mix(in srgb, var(--card-color, #00E5C4) 8%, transparent);
  }

  .info-card-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 14px;
  }
  .info-emoji { font-size: 22px; line-height: 1; }
  .info-name {
    font-family: var(--font-display);
    font-size: 15px;
    font-weight: 700;
    letter-spacing: -0.01em;
  }
  .info-system-tag {
    font-size: 10px;
    padding: 2px 8px;
    border-radius: 10px;
    font-weight: 500;
    letter-spacing: 0.05em;
    margin-left: auto;
  }

  .info-content-label {
    font-size: 9px;
    font-family: var(--font-display);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
  .info-content-text {
    font-size: 13.5px;
    line-height: 1.65;
    color: #B8C0D8;
  }

  /* Quick stats strip */
  .stats-strip {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    margin-top: 12px;
  }
  .stat-box {
    padding: 10px 8px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: rgba(255,255,255,0.025);
    text-align: center;
  }
  .stat-value {
    font-family: var(--font-display);
    font-size: 17px;
    font-weight: 700;
    color: var(--accent);
    line-height: 1;
  }
  .stat-label {
    font-size: 9px;
    color: var(--text-muted);
    margin-top: 4px;
    letter-spacing: 0.04em;
  }

  /* Placeholder card */
  .placeholder-card {
    border: 1px dashed rgba(255,255,255,0.08);
    border-radius: var(--radius);
    padding: 32px 20px;
    text-align: center;
    color: var(--text-muted);
    font-size: 13px;
    line-height: 1.6;
  }
  .placeholder-icon {
    font-size: 32px;
    margin-bottom: 10px;
    opacity: 0.5;
  }

  /* Quick-pick strip */
  .quick-pick-row {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 12px;
  }
  .qp-btn {
    font-size: 10px;
    padding: 3px 9px;
    border-radius: 14px;
    border: 1px solid rgba(255,255,255,0.08);
    background: rgba(255,255,255,0.025);
    color: var(--text-muted);
    cursor: pointer;
    font-family: var(--font-body);
    transition: all var(--transition);
    white-space: nowrap;
  }
  .qp-btn:hover { color: var(--text-primary); background: rgba(255,255,255,0.05); }
  .qp-btn.active {
    border-color: color-mix(in srgb, var(--qc) 40%, transparent);
    background: color-mix(in srgb, var(--qc) 12%, transparent);
    color: var(--qc);
  }

  /* Tooltip */
  .tooltip {
    position: absolute;
    pointer-events: none;
    z-index: 20;
    background: rgba(6,11,24,0.95);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 8px;
    padding: 7px 11px;
    backdrop-filter: blur(12px);
    white-space: nowrap;
    transform: translate(-50%, -130%);
    animation: tooltipIn 0.12s ease-out;
  }
  @keyframes tooltipIn { from { opacity:0; scale:0.88; } to { opacity:1; scale:1; } }
  .tooltip-name { font-size: 12px; font-weight: 600; }
  .tooltip-sys { font-size: 10px; color: var(--text-muted); margin-top: 1px; }

  /* System legend */
  .legend {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .legend-item {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 10px;
    color: var(--text-muted);
  }
  .legend-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
  }

  /* Fade in */
  @keyframes fadeUp { from { opacity:0; transform: translateY(8px); } to { opacity:1; transform: none; } }
  .fade-in { animation: fadeUp 0.35s ease-out; }

  /* Scan line */
  @keyframes scanLine { from { opacity: 0.8; } to { opacity: 0; } }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }

  @media (max-width: 680px) {
    .layout { flex-direction: column; align-items: center; }
    .map-col { flex: none; width: 100%; max-width: 340px; }
  }
`;

// ─── Organ component ──────────────────────────────────────────────────────────

interface OrganGroupProps {
  id: string;
  selected: string | null;
  hovered: string | null;
  onSelect: (id: string, e: React.MouseEvent<SVGGElement> | React.KeyboardEvent<SVGGElement> | React.MouseEvent<HTMLButtonElement>) => void;
  onHover: (id: string) => void;
  onHoverEnd: () => void;
  children: React.ReactNode;
}

function OrganGroup({ id, selected, hovered, onSelect, onHover, onHoverEnd, children }: OrganGroupProps) {
  const part = BODY_PARTS.find(p => p.id === id);
  const sc = getSC(part?.system);
  const isActive = selected === id;
  const isHovered = hovered === id;
  const centroid = ORGAN_CENTROIDS[id] ?? { x: 200, y: 400 };

  return (
    <g
      role="button"
      aria-label={part?.name ?? id}
      aria-pressed={isActive}
      tabIndex={0}
      style={{
        ["--organ-fill" as any]: sc.fill,
        ["--organ-stroke" as any]: sc.stroke,
        ["--organ-glow" as any]: sc.glow,
        cursor: "pointer",
        outline: "none",
      }}
      className={isActive ? "organ-active" : isHovered ? "organ-hover" : ""}
      onClick={(e) => { e.stopPropagation(); onSelect(id, e); }}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={onHoverEnd}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onSelect(id, e); }}
    >
      {children}
      {isActive && (
        <>
          <circle cx={centroid.x} cy={centroid.y} r="22" fill="none" stroke={sc.glow} strokeWidth="1.5" opacity="0.6" className="pulse-ring-1" style={{ pointerEvents: "none" }} />
          <circle cx={centroid.x} cy={centroid.y} r="32" fill="none" stroke={sc.glow} strokeWidth="0.8" opacity="0.3" className="pulse-ring-2" style={{ pointerEvents: "none" }} />
        </>
      )}
    </g>
  );
}

// ─── Info Panel ───────────────────────────────────────────────────────────────

const LAYER_CONTENT_LABEL: Record<string, string> = { facts: "Key Fact", personal: "Personal Insight", challenge: "Your Challenge", trends: "Latest Trend", explore: "Explore" };
const LAYER_COLORS = Object.fromEntries(LAYERS.map(l => [l.id, l.color]));

const getLayerText = (part: BodyPart, layer: string): string => {
  if (layer === "personal") return part.tip;
  if (layer === "challenge") return part.challenge;
  if (layer === "trends") return part.trend;
  if (layer === "explore") return part.trend;
  return part.fact;
};

interface InfoPanelProps {
  part: BodyPart | null;
  layer: string;
}

function InfoPanel({ part, layer }: InfoPanelProps) {
  if (!part) return (
    <div className="placeholder-card">
      <div className="placeholder-icon">🫀</div>
      <div>Select any organ or body part<br />to explore detailed insights</div>
    </div>
  );

  const sc = getSC(part.system);
  const text = getLayerText(part, layer);

  return (
    <div
      key={part.id + layer}
      className="info-card active fade-in"
      style={{ ["--card-color" as any]: sc.glow }}
    >
      <div className="info-card-header">
        <span className="info-emoji">{part.emoji}</span>
        <span className="info-name" style={{ color: sc.glow }}>{part.name}</span>
        <span
          className="info-system-tag"
          style={{ background: `${sc.glow}18`, color: sc.glow, border: `1px solid ${sc.glow}30` }}
        >
          {part.system}
        </span>
      </div>
      <div className="info-content-label" style={{ color: LAYER_COLORS[layer] }}>
        {LAYER_CONTENT_LABEL[layer]}
      </div>
      <div className="info-content-text">{text}</div>
    </div>
  );
}

// ─── Ripple state ─────────────────────────────────────────────────────────────

interface Ripple { id: number; x: number; y: number; color: string }

// ─── Main BodyMap component ───────────────────────────────────────────────────

export function BodyMap() {
  const [selected, setSelected] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [activeLayer, setActiveLayer] = useState<string>("facts");
  const [tooltip, setTooltip] = useState<{ x: number; y: number } | null>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [scanY, setScanY] = useState<number>(0);
  const [scanDone, setScanDone] = useState<boolean>(false);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const rippleId = useRef<number>(0);

  const layerColor = LAYERS.find(l => l.id === activeLayer)?.color ?? "#00E5C4";
  const selectedPart = selected ? (BODY_PARTS.find(p => p.id === selected) || null) : null;
  const hoveredPart  = hovered  ? (BODY_PARTS.find(p => p.id === hovered) || null)  : null;

  // Scan-line on mount
  useEffect(() => {
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
    const t = setTimeout(() => { frame = requestAnimationFrame(animate); }, 200);
    return () => { clearTimeout(t); cancelAnimationFrame(frame); };
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    const svg = svgRef.current;
    if (!svg) return;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX; pt.y = e.clientY;
    const ctm = svg.getScreenCTM();
    if (!ctm) return;
    const svgPt = pt.matrixTransform(ctm.inverse());
    setTooltip({ x: svgPt.x, y: svgPt.y });
  }, []);

  const handleSelect = useCallback((id: string, e: React.MouseEvent<SVGGElement> | React.KeyboardEvent<SVGGElement> | React.MouseEvent<HTMLButtonElement>) => {
    setSelected(id);
    const svg = svgRef.current;
    if (!svg) return;
    const pt = svg.createSVGPoint();
    pt.x = (e as any).clientX || 200;
    pt.y = (e as any).clientY || 400;
    const ctm = svg.getScreenCTM();
    if (!ctm) return;
    const svgPt = pt.matrixTransform(ctm.inverse());
    const part = BODY_PARTS.find(p => p.id === id);
    const color = part ? getSC(part.system).glow : layerColor;
    const rpl = { id: rippleId.current++, x: svgPt.x, y: svgPt.y, color };
    setRipples(r => [...r, rpl]);
    setTimeout(() => setRipples(r => r.filter(x => x.id !== rpl.id)), 800);
  }, [layerColor]);

  const activeConns = ORGAN_CONNECTIONS.filter(c =>
    c.from === hovered || c.to === hovered || c.from === selected || c.to === selected
  );

  return (
    <>
      <style>{CSS}</style>
      <div className="bodymap-container">
        <div className="bodymap-layout">
          {/* ─ Body map column ─ */}
          <div className="map-col">
            {/* Layer selector */}
            <div className="layer-bar">
              {LAYERS.map(l => (
                <button
                  key={l.id}
                  className={`layer-pill${activeLayer === l.id ? " active" : ""}`}
                  style={{ "--pc": l.color } as any}
                  onClick={() => setActiveLayer(l.id)}
                  aria-pressed={activeLayer === l.id}
                >
                  <span className="layer-dot" />
                  {l.label}
                </button>
              ))}
            </div>

            {/* SVG wrapper */}
            <div style={{ position: "relative" }}>
              {/* Ambient glow */}
              <div style={{
                position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
                background: `radial-gradient(ellipse at center, ${layerColor}22 0%, transparent 65%)`,
                filter: "blur(60px)", opacity: 0.5,
                transition: "background 0.7s ease",
              }} />

              {/* Tooltip */}
              {hoveredPart && tooltip && (
                <div
                  className="tooltip"
                  style={{
                    left: `${(tooltip.x / 400) * 100}%`,
                    top: `${(tooltip.y / 780) * 100}%`,
                    borderColor: `${getSC(hoveredPart.system).glow}35`,
                    boxShadow: `0 0 20px ${getSC(hoveredPart.system).glow}25`,
                  }}
                >
                  <div className="tooltip-name" style={{ color: getSC(hoveredPart.system).glow }}>
                    {hoveredPart.emoji} {hoveredPart.name}
                  </div>
                  <div className="tooltip-sys">{hoveredPart.system} System</div>
                </div>
              )}

              {/* THE SVG */}
              <svg
                ref={svgRef}
                viewBox="0 0 400 780"
                style={{ width: "100%", height: "auto", overflow: "visible", position: "relative", zIndex: 1 }}
                role="img"
                aria-label="Interactive human body map"
                onMouseMove={handleMouseMove}
                onMouseLeave={() => { setTooltip(null); setHovered(null); }}
              >
                <defs>
                  <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1C2240" />
                    <stop offset="100%" stopColor="#0F1320" />
                  </linearGradient>
                  <linearGradient id="scanGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%"   stopColor={layerColor} stopOpacity="0" />
                    <stop offset="50%"  stopColor={layerColor} stopOpacity="0.55" />
                    <stop offset="100%" stopColor={layerColor} stopOpacity="0" />
                  </linearGradient>
                  <radialGradient id="vignette" cx="50%" cy="50%" r="50%">
                    <stop offset="60%" stopColor="transparent" />
                    <stop offset="100%" stopColor="#060B18" stopOpacity="0.45" />
                  </radialGradient>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>

                {/* Body silhouette */}
                <g>
                  <ellipse cx="200" cy="60" rx="50" ry="56" fill="url(#bodyGrad)" />
                  <rect x="183" y="112" width="34" height="32" rx="6" fill="url(#bodyGrad)" />
                  <path d="M122 148 Q170 132 200 130 Q230 132 278 148 L295 324 Q295 400 275 442 L262 470 L138 470 L125 442 Q105 400 105 324 Z" fill="url(#bodyGrad)" />
                  <path d="M136 462 L264 462 L272 524 L128 524 Z" fill="url(#bodyGrad)" />
                  <path d="M122 156 Q92 178 82 238 L74 362 Q72 402 80 444 L94 446 Q98 404 100 362 L110 252 Q116 202 130 178 Z" fill="url(#bodyGrad)" />
                  <path d="M278 156 Q308 178 318 238 L326 362 Q328 402 320 444 L306 446 Q302 404 300 362 L290 252 Q284 202 270 178 Z" fill="url(#bodyGrad)" />
                  <path d="M136 524 L126 724 L164 724 L180 524 Z" fill="url(#bodyGrad)" />
                  <path d="M220 524 L236 724 L274 724 L264 524 Z" fill="url(#bodyGrad)" />
                  <path d="M122 720 L120 750 Q126 758 168 758 L168 724 Z" fill="url(#bodyGrad)" />
                  <path d="M232 724 L232 758 Q274 758 280 750 L278 720 Z" fill="url(#bodyGrad)" />
                  <ellipse cx="200" cy="390" rx="205" ry="395" fill="url(#vignette)" />
                </g>

                {/* Connection lines */}
                <g style={{ transition: "opacity 0.4s ease", opacity: (hovered || selected) ? 1 : 0 }}>
                  {activeConns.map((conn, i) => {
                    const from = ORGAN_CENTROIDS[conn.from];
                    const to   = ORGAN_CENTROIDS[conn.to];
                    if (!from || !to) return null;
                    const fp = BODY_PARTS.find(p => p.id === conn.from);
                    const color = fp ? getSC(fp.system).glow : "#00E5C4";
                    return (
                      <path key={i}
                        d={`M ${from.x} ${from.y} C ${conn.cx1} ${conn.cy1}, ${conn.cx2} ${conn.cy2}, ${to.x} ${to.y}`}
                        fill="none" stroke={color} strokeWidth="1" strokeDasharray="4 3"
                        opacity="0.45" style={{ pointerEvents: "none" }}
                      />
                    );
                  })}
                </g>

                {/* ─── ORGANS ─── */}

                {/* Brain */}
                <OrganGroup id="brain" selected={selected} hovered={hovered} onSelect={handleSelect} onHover={setHovered} onHoverEnd={() => setHovered(null)}>
                  <ellipse cx="200" cy="50" rx="36" ry="30" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                  <path d="M172 48 Q186 36 200 40 Q214 36 228 48" fill="none" stroke="var(--organ-stroke)" strokeWidth="0.7" opacity="0.4" pointerEvents="none" />
                  <path d="M174 56 Q187 50 200 52 Q213 50 226 56" fill="none" stroke="var(--organ-stroke)" strokeWidth="0.7" opacity="0.3" pointerEvents="none" />
                </OrganGroup>

                {/* Frontal lobe */}
                <OrganGroup id="frontal-lobe" selected={selected} hovered={hovered} onSelect={handleSelect} onHover={setHovered} onHoverEnd={() => setHovered(null)}>
                  <path d="M178 28 Q200 20 222 28 L220 44 Q200 40 180 44 Z" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                </OrganGroup>

                {/* Temporal lobe */}
                <OrganGroup id="temporal-lobe" selected={selected} hovered={hovered} onSelect={handleSelect} onHover={setHovered} onHoverEnd={() => setHovered(null)}>
                  <path d="M165 44 Q163 58 165 70 L176 70 L176 44 Z" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                  <path d="M235 44 Q237 58 235 70 L224 70 L224 44 Z" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                </OrganGroup>

                {/* Eyes */}
                <OrganGroup id="eyes" selected={selected} hovered={hovered} onSelect={handleSelect} onHover={setHovered} onHoverEnd={() => setHovered(null)}>
                  <path d="M174 65 Q182 60 190 65 Q182 70 174 65 Z" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                  <circle cx="182" cy="65" r="2.5" fill="var(--organ-stroke)" opacity="0.6" pointerEvents="none" />
                  <path d="M210 65 Q218 60 226 65 Q218 70 210 65 Z" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                  <circle cx="218" cy="65" r="2.5" fill="var(--organ-stroke)" opacity="0.6" pointerEvents="none" />
                </OrganGroup>

                {/* Ears */}
                <OrganGroup id="ears" selected={selected} hovered={hovered} onSelect={handleSelect} onHover={setHovered} onHoverEnd={() => setHovered(null)}>
                  <ellipse cx="153" cy="68" rx="5" ry="10" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                  <ellipse cx="247" cy="68" rx="5" ry="10" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                </OrganGroup>

                {/* Sinuses */}
                <OrganGroup id="sinuses" selected={selected} hovered={hovered} onSelect={handleSelect} onHover={setHovered} onHoverEnd={() => setHovered(null)}>
                  <path d="M190 58 Q200 54 210 58 L210 72 Q200 74 190 72 Z" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                </OrganGroup>

                {/* Jaw */}
                <OrganGroup id="jaw" selected={selected} hovered={hovered} onSelect={handleSelect} onHover={setHovered} onHoverEnd={() => setHovered(null)}>
                  <path d="M170 88 Q185 100 200 104 Q215 100 230 88 L224 80 Q210 90 200 92 Q190 90 176 80 Z" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                </OrganGroup>

                {/* Throat */}
                <OrganGroup id="throat" selected={selected} hovered={hovered} onSelect={handleSelect} onHover={setHovered} onHoverEnd={() => setHovered(null)}>
                  <path d="M186 114 Q194 110 200 110 Q206 110 214 114 L216 138 Q200 144 184 138 Z" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                </OrganGroup>

                {/* Heart */}
                <OrganGroup id="heart" selected={selected} hovered={hovered} onSelect={handleSelect} onHover={setHovered} onHoverEnd={() => setHovered(null)}>
                  <path d="M186 200 Q170 186 168 206 Q168 228 200 250 Q232 228 232 206 Q232 186 216 200 Q206 210 200 206 Q194 210 186 200 Z" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                  <path d="M200 200 Q200 188 210 184 Q218 182 220 190" fill="none" stroke="var(--organ-stroke)" strokeWidth="1.5" opacity="0.5" pointerEvents="none" />
                </OrganGroup>

                {/* Left Lung */}
                <OrganGroup id="lung-left" selected={selected} hovered={hovered} onSelect={handleSelect} onHover={setHovered} onHoverEnd={() => setHovered(null)}>
                  <path d="M153 192 Q136 202 132 252 Q130 294 148 314 L168 308 Q170 280 170 250 L170 202 Q164 194 153 192 Z" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                  <path d="M136 246 Q154 248 168 244" fill="none" stroke="var(--organ-stroke)" strokeWidth="0.6" opacity="0.35" pointerEvents="none" />
                  <path d="M134 272 Q152 270 168 266" fill="none" stroke="var(--organ-stroke)" strokeWidth="0.6" opacity="0.25" pointerEvents="none" />
                </OrganGroup>

                {/* Right Lung */}
                <OrganGroup id="lung-right" selected={selected} hovered={hovered} onSelect={handleSelect} onHover={setHovered} onHoverEnd={() => setHovered(null)}>
                  <path d="M247 192 Q264 202 268 252 Q270 294 252 314 L232 308 Q230 280 230 250 L230 202 Q236 194 247 192 Z" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                  <path d="M264 246 Q246 248 232 244" fill="none" stroke="var(--organ-stroke)" strokeWidth="0.6" opacity="0.35" pointerEvents="none" />
                  <path d="M266 272 Q248 270 232 266" fill="none" stroke="var(--organ-stroke)" strokeWidth="0.6" opacity="0.25" pointerEvents="none" />
                </OrganGroup>

                {/* Liver */}
                <OrganGroup id="liver" selected={selected} hovered={hovered} onSelect={handleSelect} onHover={setHovered} onHoverEnd={() => setHovered(null)}>
                  <path d="M210 322 Q256 320 262 342 Q262 362 238 366 L204 366 L204 332 Q208 324 210 322 Z" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                </OrganGroup>

                {/* Stomach */}
                <OrganGroup id="stomach" selected={selected} hovered={hovered} onSelect={handleSelect} onHover={setHovered} onHoverEnd={() => setHovered(null)}>
                  <path d="M158 330 Q144 344 150 372 Q160 390 190 386 L196 342 Q178 332 164 330 Q162 330 158 330 Z" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                </OrganGroup>

                {/* Small Intestine */}
                <OrganGroup id="small-intestine" selected={selected} hovered={hovered} onSelect={handleSelect} onHover={setHovered} onHoverEnd={() => setHovered(null)}>
                  <path d="M174 392 Q168 402 176 412 Q188 418 196 408 Q204 418 214 412 Q220 402 216 392 Q208 402 200 398 Q192 402 184 392 Z" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                  <path d="M178 396 Q196 388 214 396" fill="none" stroke="var(--organ-stroke)" strokeWidth="0.8" opacity="0.3" pointerEvents="none" />
                </OrganGroup>

                {/* Large Intestine */}
                <OrganGroup id="large-intestine" selected={selected} hovered={hovered} onSelect={handleSelect} onHover={setHovered} onHoverEnd={() => setHovered(null)}>
                  <path d="M146 384 L146 422 Q146 440 164 442 L236 442 Q254 440 254 422 L254 384 Q254 374 242 374 L242 428 L158 428 L158 374 Q146 374 146 384 Z" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                </OrganGroup>

                {/* Kidneys */}
                <OrganGroup id="kidneys" selected={selected} hovered={hovered} onSelect={handleSelect} onHover={setHovered} onHoverEnd={() => setHovered(null)}>
                  <path d="M144 338 Q132 350 136 376 Q148 386 158 372 Q162 350 154 338 Z" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                  <path d="M256 338 Q268 350 264 376 Q252 386 242 372 Q238 350 246 338 Z" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                  <path d="M152 357 Q147 360 152 363" fill="none" stroke="var(--organ-stroke)" strokeWidth="1" opacity="0.5" pointerEvents="none" />
                  <path d="M248 357 Q253 360 248 363" fill="none" stroke="var(--organ-stroke)" strokeWidth="1" opacity="0.5" pointerEvents="none" />
                </OrganGroup>

                {/* Bladder */}
                <OrganGroup id="bladder" selected={selected} hovered={hovered} onSelect={handleSelect} onHover={setHovered} onHoverEnd={() => setHovered(null)}>
                  <ellipse cx="200" cy="456" rx="18" ry="13" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                  <path d="M192 452 Q200 448 208 452" fill="none" stroke="var(--organ-stroke)" strokeWidth="0.8" opacity="0.4" pointerEvents="none" />
                </OrganGroup>

                {/* Spine cervical */}
                <OrganGroup id="spine-cervical" selected={selected} hovered={hovered} onSelect={handleSelect} onHover={setHovered} onHoverEnd={() => setHovered(null)}>
                  {[0,1,2,3,4,5,6].map(i => (
                    <rect key={i} x="196" y={114 + i*5} width="8" height="4" rx="1.5" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                  ))}
                </OrganGroup>

                {/* Spine thoracic */}
                <OrganGroup id="spine-thoracic" selected={selected} hovered={hovered} onSelect={handleSelect} onHover={setHovered} onHoverEnd={() => setHovered(null)}>
                  {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => (
                    <rect key={i} x="196" y={155 + i*12} width="8" height="10" rx="1.5" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                  ))}
                </OrganGroup>

                {/* Spine lumbar */}
                <OrganGroup id="spine-lumbar" selected={selected} hovered={hovered} onSelect={handleSelect} onHover={setHovered} onHoverEnd={() => setHovered(null)}>
                  {[0,1,2,3,4].map(i => (
                    <rect key={i} x="195" y={311 + i*16} width="10" height="14" rx="2" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                  ))}
                </OrganGroup>

                {/* Shoulders */}
                <OrganGroup id="shoulders" selected={selected} hovered={hovered} onSelect={handleSelect} onHover={setHovered} onHoverEnd={() => setHovered(null)}>
                  <circle cx="126" cy="160" r="14" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                  <circle cx="274" cy="160" r="14" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                </OrganGroup>

                {/* Elbows */}
                <OrganGroup id="elbows" selected={selected} hovered={hovered} onSelect={handleSelect} onHover={setHovered} onHoverEnd={() => setHovered(null)}>
                  <circle cx="90" cy="282" r="11" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                  <circle cx="310" cy="282" r="11" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                </OrganGroup>

                {/* Wrists */}
                <OrganGroup id="wrists" selected={selected} hovered={hovered} onSelect={handleSelect} onHover={setHovered} onHoverEnd={() => setHovered(null)}>
                  <rect x="70" y="392" width="18" height="12" rx="4" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                  <rect x="312" y="392" width="18" height="12" rx="4" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                </OrganGroup>

                {/* Hands */}
                <OrganGroup id="hands" selected={selected} hovered={hovered} onSelect={handleSelect} onHover={setHovered} onHoverEnd={() => setHovered(null)}>
                  <ellipse cx="79" cy="430" rx="11" ry="16" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                  <ellipse cx="321" cy="430" rx="11" ry="16" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                </OrganGroup>

                {/* Hips */}
                <OrganGroup id="hips" selected={selected} hovered={hovered} onSelect={handleSelect} onHover={setHovered} onHoverEnd={() => setHovered(null)}>
                  <circle cx="156" cy="492" r="16" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                  <circle cx="244" cy="492" r="16" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                </OrganGroup>

                {/* Knees */}
                <OrganGroup id="knees" selected={selected} hovered={hovered} onSelect={handleSelect} onHover={setHovered} onHoverEnd={() => setHovered(null)}>
                  <circle cx="148" cy="622" r="14" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                  <circle cx="252" cy="622" r="14" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                </OrganGroup>

                {/* Ankles */}
                <OrganGroup id="ankles" selected={selected} hovered={hovered} onSelect={handleSelect} onHover={setHovered} onHoverEnd={() => setHovered(null)}>
                  <circle cx="138" cy="716" r="9" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                  <circle cx="262" cy="716" r="9" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                </OrganGroup>

                {/* Feet */}
                <OrganGroup id="feet" selected={selected} hovered={hovered} onSelect={handleSelect} onHover={setHovered} onHoverEnd={() => setHovered(null)}>
                  <ellipse cx="147" cy="746" rx="24" ry="9" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                  <ellipse cx="253" cy="746" rx="24" ry="9" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                </OrganGroup>

                {/* Skin (transparent overlay) */}
                <OrganGroup id="skin" selected={selected} hovered={hovered} onSelect={handleSelect} onHover={setHovered} onHoverEnd={() => setHovered(null)}>
                  <rect x="58" y="18" width="284" height="748" fill="transparent" style={{ pointerEvents: "all" }} className="organ-path" />
                </OrganGroup>

                {/* Bones (spine accent) */}
                <OrganGroup id="bones" selected={selected} hovered={hovered} onSelect={handleSelect} onHover={setHovered} onHoverEnd={() => setHovered(null)}>
                  <rect x="197" y="114" width="6" height="286" rx="3" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)", opacity: 0.4 }} />
                </OrganGroup>

                {/* Muscles */}
                <OrganGroup id="muscles" selected={selected} hovered={hovered} onSelect={handleSelect} onHover={setHovered} onHoverEnd={() => setHovered(null)}>
                  {/* Bicep hints */}
                  <ellipse cx="88" cy="220" rx="6" ry="22" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                  <ellipse cx="312" cy="220" rx="6" ry="22" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                  {/* Quad hints */}
                  <ellipse cx="148" cy="572" rx="12" ry="40" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                  <ellipse cx="252" cy="572" rx="12" ry="40" className="organ-path" style={{ fill:"var(--organ-fill)", stroke:"var(--organ-stroke)" }} />
                </OrganGroup>

                {/* ═══ Scan-line (appears once on mount) ═══ */}
                {!scanDone && (
                  <rect
                    x="50" y={scanY - 30} width="300" height="30"
                    fill="url(#scanGrad)"
                    opacity="0.75"
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
            </div>

            {/* Legend / Status info */}
            <div style={{ marginTop: "16px", display: "flex", justifyContent: "space-between", fontSize: "11px", color: "var(--text-muted)" }}>
              <span>{selectedPart ? `${selectedPart.emoji} ${selectedPart.name} selected` : "No organ selected"}</span>
              {selectedPart && <span style={{ cursor: "pointer", color: "var(--accent)" }} onClick={() => setSelected(null)}>✕ Clear</span>}
            </div>

            {/* Quick-pick strip */}
            <div className="quick-pick-row">
              {BODY_PARTS.filter(p => !["frontal-lobe", "temporal-lobe", "muscles", "bones", "skin"].includes(p.id)).map(p => {
                const sc = getSC(p.system);
                const isActive = selected === p.id;
                return (
                  <button
                    key={p.id}
                    className={`qp-btn${isActive ? " active" : ""}`}
                    style={{ "--qc": sc.glow } as any}
                    onClick={(e) => handleSelect(p.id, e)}
                  >
                    <span className="mr-0.5 text-[10px]">{p.emoji}</span>
                    {p.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ─ Info column ─ */}
          <div className="info-col">
            <InfoPanel part={selectedPart} layer={activeLayer} />

            {/* Quick stats strip */}
            {selectedPart && (
              <div className="stats-strip fade-in">
                <div className="stat-box">
                  <div className="stat-value">30+</div>
                  <div className="stat-label">Anatomy Zones</div>
                </div>
                <div className="stat-box">
                  <div className="stat-value">5</div>
                  <div className="stat-label">Data Layers</div>
                </div>
                <div className="stat-box">
                  <div className="stat-value">100%</div>
                  <div className="stat-label">Interactive</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default BodyMap;
