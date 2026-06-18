export interface BodyPart {
  id: string;
  name: string;
  emoji: string;
  system: string;
  fact: string;
  tip: string;
  challenge: string;
  trend: string;
}

export const BODY_PARTS: BodyPart[] = [
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

export interface LayerItem {
  id: string;
  label: string;
  color: string;
}

export const LAYERS: LayerItem[] = [
  { id: "facts",     label: "Facts",     color: "#00E5C4" },
  { id: "personal",  label: "Personal",  color: "#F5A623" },
  { id: "challenge", label: "Challenge", color: "#A855F7" },
  { id: "trends",    label: "Trends",    color: "#E5504D" },
  { id: "explore",   label: "Explore",   color: "#E8E0D5" },
];

export interface SystemColorsVal {
  fill: string;
  stroke: string;
  glow: string;
}

export const SYSTEM_COLORS: Record<string, SystemColorsVal> = {
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

export const getSC = (system?: string): SystemColorsVal => {
  if (!system) return { fill: "rgba(30,40,68,0.6)", stroke: "rgba(75,85,120,0.5)", glow: "#00E5C4" };
  return SYSTEM_COLORS[system] ?? { fill: "rgba(30,40,68,0.6)", stroke: "rgba(75,85,120,0.5)", glow: "#00E5C4" };
};

export const ORGAN_CENTROIDS: Record<string, { x: number; y: number; z: number }> = {
  "brain": { x: 0, y: 7.5, z: 0 },
  "frontal-lobe": { x: 0, y: 7.8, z: 0.5 },
  "temporal-lobe": { x: 0.8, y: 7.4, z: 0 },
  "eyes": { x: 0, y: 7.2, z: 0.8 },
  "ears": { x: 1.2, y: 7.2, z: -0.2 },
  "sinuses": { x: 0, y: 7.0, z: 0.6 },
  "jaw": { x: 0, y: 6.5, z: 0.5 },
  "throat": { x: 0, y: 5.8, z: 0.2 },
  "heart": { x: 0, y: 4.2, z: 0.4 },
  "lung-left": { x: -1.2, y: 4.0, z: 0 },
  "lung-right": { x: 1.2, y: 4.0, z: 0 },
  "liver": { x: 0.8, y: 2.5, z: 0.2 },
  "stomach": { x: -0.6, y: 2.4, z: 0.3 },
  "small-intestine": { x: 0, y: 1.2, z: 0.4 },
  "large-intestine": { x: 0, y: 1.0, z: 0.2 },
  "kidneys": { x: 0, y: 2.5, z: -0.8 },
  "bladder": { x: 0, y: 0.0, z: 0.3 },
  "spine-cervical": { x: 0, y: 6.0, z: -0.5 },
  "spine-thoracic": { x: 0, y: 4.0, z: -0.8 },
  "spine-lumbar": { x: 0, y: 1.5, z: -0.8 },
  "shoulders": { x: 0, y: 5.0, z: 0 },
  "elbows": { x: 0, y: 3.0, z: 0 },
  "wrists": { x: 0, y: 1.0, z: 0 },
  "hands": { x: 0, y: 0.0, z: 0 },
  "hips": { x: 0, y: -0.5, z: 0 },
  "knees": { x: 0, y: -3.5, z: 0.2 },
  "ankles": { x: 0, y: -6.5, z: 0 },
  "feet": { x: 0, y: -7.0, z: 0.5 },
  "skin": { x: 0, y: 2.0, z: 1.5 },
  "bones": { x: 0, y: 2.5, z: -0.5 },
  "muscles": { x: 0, y: 2.5, z: 0 },
};

export const ORGAN_CONNECTIONS: { from: string; to: string }[] = [
  { from: "lung-left",  to: "throat" },
  { from: "lung-right", to: "throat" },
  { from: "lung-left",  to: "lung-right" },
  { from: "heart",      to: "lung-left" },
  { from: "heart",      to: "lung-right" },
  { from: "stomach",    to: "small-intestine" },
  { from: "small-intestine", to: "large-intestine" },
  { from: "liver",      to: "stomach" },
  { from: "kidneys",    to: "bladder" },
  { from: "brain",      to: "spine-cervical" },
  { from: "spine-cervical",  to: "spine-thoracic" },
  { from: "spine-thoracic",  to: "spine-lumbar" },
];
