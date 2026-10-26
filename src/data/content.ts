// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// The Living Body Atlas — Content Database
// 30+ body parts, 200+ facts, myths, actions, questions
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

import generatedFactsJson from "./generated-facts.json";

export type Category =
  "weird_wild" | "health_tip" | "what_damages_it" | "superfood" | "record_breaker";

export type Rarity = "common" | "surprising" | "mind_blowing" | "almost_unknown";

export type Layer = "facts" | "personal" | "challenge" | "trends" | "explore";

export interface BodyPart {
  id: string;
  name: string;
  slug: string;
  system: string;
  emoji: string;
  shortDescription: string;
  region: "head" | "chest" | "abdomen" | "spine" | "upper-limb" | "lower-limb" | "whole-body";
}

export interface Fact {
  id: string;
  bodyPartId: string;
  category: Category;
  rarity: Rarity;
  text: string;
  source?: string;
}

export interface MythBusted {
  id: string;
  bodyPartId: string;
  myth: string;
  reality: string;
  sources?: string[];
  actionableTip?: string;
  dangerAlert?: string;
  confidenceLevel?: "HIGH" | "MODERATE" | "LOW" | "INSUFFICIENT";
  evidenceStatement?: string;
  clinicalDisclaimer?: string;
}

export interface MicroAction {
  id: string;
  bodyPartId: string;
  action: string;
  duration: string;
}

export interface DoctorQuestion {
  id: string;
  bodyPartId: string;
  question: string;
}

export interface DailyInsight {
  dayOfYear: number;
  bodyPartId: string;
  fact: string;
  action: string;
  actionDuration: string;
}

export interface DiseaseEntry {
  id: string;
  name: string;
  overview: string;
  symptoms: { text: string; frequency: "always" | "often" | "sometimes" }[];
  whenToSeeDoctor: string;
  misconceptions: string[];
  bodyPartId?: string;
}

export interface RemedyEntry {
  id: string;
  name: string;
  description: string;
  evidenceRating: "traditional" | "anecdotal" | "studied" | "unproven";
  evidenceDetails: string;
  ailment: string;
  bodyPartId?: string;
  practicalContext?: string;
}

export interface HealthHack {
  id: string;
  title: string;
  practice: string;
  scienceBasis: string;
  bodyPartId?: string;
}

export interface BodyMarvel {
  id: string;
  title: string;
  introduction: string;
  sections: { heading: string; body: string }[];
  conclusion: string;
  bodyPartId?: string;
}

export interface SensoryFact {
  id: string;
  sensation: string;
  cause: string;
  tip: string;
  bodyPartId?: string;
}

export interface EmergencyScenario {
  id: string;
  name: string;
  warningSigns: string[];
  beforeAmbulance: string[];
  cprTimerNeeded?: boolean;
  steps: string[];
  ifAlone?: string[];
}

export interface QAEntry {
  id: string;
  question: string;
  answer: string;
  expertName: string;
  expertTitle: string;
  bodyPartId?: string;
}

export const CATEGORY_META: Record<Category, { label: string; icon: string }> = {
  weird_wild: { label: "Weird & Wild", icon: "✨" },
  health_tip: { label: "Health Tips", icon: "🌿" },
  what_damages_it: { label: "What Damages It", icon: "⚠️" },
  superfood: { label: "Superfoods", icon: "🥦" },
  record_breaker: { label: "Record Breakers", icon: "🏆" },
};

export const RARITY_META: Record<Rarity, { label: string; tokenClass: string }> = {
  common: {
    label: "Common Knowledge",
    tokenClass: "bg-rarity-common/20 text-rarity-common border-rarity-common/40",
  },
  surprising: {
    label: "Surprising",
    tokenClass: "bg-rarity-surprising/20 text-rarity-surprising border-rarity-surprising/40",
  },
  mind_blowing: {
    label: "Mind-Blowing",
    tokenClass: "bg-rarity-mind/20 text-rarity-mind border-rarity-mind/40",
  },
  almost_unknown: {
    label: "Almost Unknown",
    tokenClass: "bg-rarity-rare/20 text-rarity-rare border-rarity-rare/40",
  },
};

export const LAYER_META: Record<Layer, { label: string; color: string; description: string }> = {
  facts: {
    label: "Facts",
    color: "#00E5C4",
    description: "Discover surprising facts about each body part",
  },
  personal: {
    label: "Personal",
    color: "#F5A623",
    description: "Your personal body diary entries",
  },
  challenge: {
    label: "Challenge",
    color: "#6B4FA0",
    description: "This week's community quest progress",
  },
  trends: { label: "Trends", color: "#E5504D", description: "What the community is tracking" },
  explore: { label: "Explore", color: "#E8E0D5", description: "Deep dive into anatomy" },
};

// ━━━ 30+ Body Parts ━━━
export const BODY_PARTS: BodyPart[] = [
  // HEAD
  {
    id: "brain",
    name: "Brain",
    slug: "brain",
    system: "Nervous",
    emoji: "🧠",
    shortDescription: "Three pounds of electrified jelly running your entire reality.",
    region: "head",
  },
  {
    id: "frontal-lobe",
    name: "Frontal Lobe",
    slug: "frontal-lobe",
    system: "Nervous",
    emoji: "🧩",
    shortDescription: "Your personality, decisions, and impulse control live here.",
    region: "head",
  },
  {
    id: "temporal-lobe",
    name: "Temporal Lobe",
    slug: "temporal-lobe",
    system: "Nervous",
    emoji: "🎵",
    shortDescription: "Where sound becomes meaning and memories are encoded.",
    region: "head",
  },
  {
    id: "eyes",
    name: "Eyes",
    slug: "eyes",
    system: "Sensory",
    emoji: "👁️",
    shortDescription: "Two soft cameras that capture 10 million colors.",
    region: "head",
  },
  {
    id: "ears",
    name: "Ears",
    slug: "ears",
    system: "Sensory",
    emoji: "👂",
    shortDescription: "Sound detectors that also keep you balanced.",
    region: "head",
  },
  {
    id: "sinuses",
    name: "Sinuses",
    slug: "sinuses",
    system: "Respiratory",
    emoji: "🌬️",
    shortDescription: "Air-filled cavities that warm, humidify, and filter every breath.",
    region: "head",
  },
  {
    id: "jaw",
    name: "Jaw",
    slug: "jaw",
    system: "Musculoskeletal",
    emoji: "🦷",
    shortDescription: "The strongest muscle in your body by force — your masseter.",
    region: "head",
  },
  {
    id: "throat",
    name: "Throat",
    slug: "throat",
    system: "Respiratory",
    emoji: "🗣️",
    shortDescription: "A multi-lane highway for air, food, and your voice.",
    region: "head",
  },

  // CHEST
  {
    id: "heart",
    name: "Heart",
    slug: "heart",
    system: "Circulatory",
    emoji: "❤️",
    shortDescription: "A fist-sized pump that beats 100,000 times a day.",
    region: "chest",
  },
  {
    id: "lung-left",
    name: "Left Lung",
    slug: "lung-left",
    system: "Respiratory",
    emoji: "🫁",
    shortDescription: "Smaller than the right — making room for your heart.",
    region: "chest",
  },
  {
    id: "lung-right",
    name: "Right Lung",
    slug: "lung-right",
    system: "Respiratory",
    emoji: "🫁",
    shortDescription: "Three lobes of breathing power — the bigger twin.",
    region: "chest",
  },

  // ABDOMEN
  {
    id: "liver",
    name: "Liver",
    slug: "liver",
    system: "Digestive",
    emoji: "🫀",
    shortDescription: "Your chemistry lab — runs 500+ reactions a minute.",
    region: "abdomen",
  },
  {
    id: "stomach",
    name: "Stomach",
    slug: "stomach",
    system: "Digestive",
    emoji: "🍽️",
    shortDescription: "An acid bag strong enough to dissolve metal.",
    region: "abdomen",
  },
  {
    id: "small-intestine",
    name: "Small Intestine",
    slug: "small-intestine",
    system: "Digestive",
    emoji: "🌀",
    shortDescription: "20 feet of surface area absorbing every nutrient you eat.",
    region: "abdomen",
  },
  {
    id: "large-intestine",
    name: "Large Intestine",
    slug: "large-intestine",
    system: "Digestive",
    emoji: "🔄",
    shortDescription: "Home to trillions of bacteria that run your immune system.",
    region: "abdomen",
  },
  {
    id: "kidneys",
    name: "Kidneys",
    slug: "kidneys",
    system: "Urinary",
    emoji: "🫘",
    shortDescription: "Filter your entire blood supply 40 times a day.",
    region: "abdomen",
  },
  {
    id: "bladder",
    name: "Bladder",
    slug: "bladder",
    system: "Urinary",
    emoji: "💧",
    shortDescription: "A stretchy reservoir that can hold about 500ml of fluid.",
    region: "abdomen",
  },

  // SPINE
  {
    id: "spine-cervical",
    name: "Cervical Spine",
    slug: "spine-cervical",
    system: "Skeletal",
    emoji: "🦴",
    shortDescription: "Seven vertebrae holding up your 11-pound head.",
    region: "spine",
  },
  {
    id: "spine-thoracic",
    name: "Thoracic Spine",
    slug: "spine-thoracic",
    system: "Skeletal",
    emoji: "🦴",
    shortDescription: "Twelve vertebrae anchoring your rib cage.",
    region: "spine",
  },
  {
    id: "spine-lumbar",
    name: "Lumbar Spine",
    slug: "spine-lumbar",
    system: "Skeletal",
    emoji: "🦴",
    shortDescription: "Five thick vertebrae bearing most of your upper body weight.",
    region: "spine",
  },

  // UPPER LIMBS
  {
    id: "shoulders",
    name: "Shoulders",
    slug: "shoulders",
    system: "Musculoskeletal",
    emoji: "💪",
    shortDescription: "The most mobile joint in your body — and the most unstable.",
    region: "upper-limb",
  },
  {
    id: "elbows",
    name: "Elbows",
    slug: "elbows",
    system: "Musculoskeletal",
    emoji: "🦾",
    shortDescription: "A precision hinge joint with its own funny bone nerve.",
    region: "upper-limb",
  },
  {
    id: "wrists",
    name: "Wrists",
    slug: "wrists",
    system: "Musculoskeletal",
    emoji: "⌚",
    shortDescription: "Eight tiny carpal bones allowing 3D movement of your hands.",
    region: "upper-limb",
  },
  {
    id: "hands",
    name: "Hands",
    slug: "hands",
    system: "Musculoskeletal",
    emoji: "🤲",
    shortDescription: "27 bones per hand, more nerve endings than almost anywhere else.",
    region: "upper-limb",
  },

  // LOWER LIMBS
  {
    id: "hips",
    name: "Hips",
    slug: "hips",
    system: "Musculoskeletal",
    emoji: "🦿",
    shortDescription: "Ball-and-socket joints carrying your entire upper body.",
    region: "lower-limb",
  },
  {
    id: "knees",
    name: "Knees",
    slug: "knees",
    system: "Musculoskeletal",
    emoji: "🦵",
    shortDescription: "The largest joint in your body — and the most injured.",
    region: "lower-limb",
  },
  {
    id: "ankles",
    name: "Ankles",
    slug: "ankles",
    system: "Musculoskeletal",
    emoji: "🦶",
    shortDescription: "A complex of 7 tarsal bones managing every step you take.",
    region: "lower-limb",
  },
  {
    id: "feet",
    name: "Feet",
    slug: "feet",
    system: "Musculoskeletal",
    emoji: "👣",
    shortDescription: "26 bones, 33 joints, 100+ tendons — your engineering marvel.",
    region: "lower-limb",
  },

  // WHOLE BODY
  {
    id: "skin",
    name: "Skin",
    slug: "skin",
    system: "Integumentary",
    emoji: "🧬",
    shortDescription: "Your largest organ — and it replaces itself every 27 days.",
    region: "whole-body",
  },
  {
    id: "bones",
    name: "Bones",
    slug: "bones",
    system: "Skeletal",
    emoji: "🦴",
    shortDescription: "Stronger than steel, pound for pound.",
    region: "whole-body",
  },
  {
    id: "muscles",
    name: "Muscles",
    slug: "muscles",
    system: "Muscular",
    emoji: "💪",
    shortDescription: "Over 640 skeletal muscles enabling every movement and breath.",
    region: "whole-body",
  },
];

// Compact fact builder
const f = (
  id: string,
  bodyPartId: string,
  category: Category,
  rarity: Rarity,
  text: string,
  source?: string,
): Fact => ({ id, bodyPartId, category, rarity, text, source });

const HARDCODED_FACTS: Fact[] = [
  // ━━━ BRAIN ━━━
  f(
    "brain-w-1",
    "brain",
    "weird_wild",
    "mind_blowing",
    "Your brain generates around 20 watts of electricity while you read this — enough to dimly power a light bulb.",
  ),
  f(
    "brain-w-2",
    "brain",
    "weird_wild",
    "almost_unknown",
    "The brain has no pain receptors. Surgeons can operate on it while you're awake and talking.",
  ),
  f(
    "brain-w-3",
    "brain",
    "weird_wild",
    "surprising",
    "About 60% of your brain is fat. It's the fattiest organ in your body.",
  ),
  f(
    "brain-h-1",
    "brain",
    "health_tip",
    "common",
    "Sleep deprivation shrinks the prefrontal cortex within 24 hours. Prioritise 7–9 hours.",
  ),
  f(
    "brain-h-2",
    "brain",
    "health_tip",
    "surprising",
    "Learning a new language in adulthood thickens grey matter — even briefly.",
  ),
  f(
    "brain-d-1",
    "brain",
    "what_damages_it",
    "surprising",
    "Chronic loneliness shrinks the hippocampus as fast as smoking a pack a day.",
  ),
  f(
    "brain-d-2",
    "brain",
    "what_damages_it",
    "mind_blowing",
    "Just one night of poor sleep raises beta-amyloid (the Alzheimer's protein) by 5%.",
  ),
  f(
    "brain-s-1",
    "brain",
    "superfood",
    "common",
    "Walnuts literally look like brains — and they contain the omega-3s your neurons need.",
  ),
  f(
    "brain-s-2",
    "brain",
    "superfood",
    "surprising",
    "Blueberries cross the blood-brain barrier and accumulate in memory regions.",
  ),
  f(
    "brain-r-1",
    "brain",
    "record_breaker",
    "mind_blowing",
    "Your brain stores about 2.5 petabytes — roughly 3 million hours of TV.",
  ),

  // ━━━ FRONTAL LOBE ━━━
  f(
    "fl-w-1",
    "frontal-lobe",
    "weird_wild",
    "mind_blowing",
    "The frontal lobe isn't fully developed until age 25 — which is why teens take bigger risks.",
  ),
  f(
    "fl-w-2",
    "frontal-lobe",
    "weird_wild",
    "surprising",
    "Phineas Gage survived a steel rod through his frontal lobe — but his personality completely changed.",
  ),
  f(
    "fl-h-1",
    "frontal-lobe",
    "health_tip",
    "common",
    "Meditation physically thickens the prefrontal cortex in just 8 weeks.",
  ),
  f(
    "fl-d-1",
    "frontal-lobe",
    "what_damages_it",
    "surprising",
    "Chronic stress shrinks the prefrontal cortex while enlarging the amygdala.",
  ),
  f(
    "fl-s-1",
    "frontal-lobe",
    "superfood",
    "surprising",
    "Dark chocolate increases blood flow to the frontal lobe within 2 hours.",
  ),
  f(
    "fl-r-1",
    "frontal-lobe",
    "record_breaker",
    "mind_blowing",
    "Humans have the largest frontal lobe-to-brain ratio of any species — about 40%.",
  ),

  // ━━━ TEMPORAL LOBE ━━━
  f(
    "tl-w-1",
    "temporal-lobe",
    "weird_wild",
    "almost_unknown",
    "Déjà vu is likely a temporal lobe 'misfire' — memory circuits activating before perception finishes.",
  ),
  f(
    "tl-w-2",
    "temporal-lobe",
    "weird_wild",
    "surprising",
    "Music activates more areas of the temporal lobe than speech does.",
  ),
  f(
    "tl-h-1",
    "temporal-lobe",
    "health_tip",
    "surprising",
    "Learning music as an adult strengthens temporal lobe connections measurably.",
  ),
  f(
    "tl-d-1",
    "temporal-lobe",
    "what_damages_it",
    "mind_blowing",
    "Chronic noise exposure above 85dB damages auditory processing in the temporal lobe permanently.",
  ),
  f(
    "tl-s-1",
    "temporal-lobe",
    "superfood",
    "common",
    "Turmeric's curcumin improves memory function linked to the temporal lobe.",
  ),
  f(
    "tl-r-1",
    "temporal-lobe",
    "record_breaker",
    "surprising",
    "The temporal lobe can distinguish sounds just 5 microseconds apart.",
  ),

  // ━━━ EYES ━━━
  f(
    "eyes-w-1",
    "eyes",
    "weird_wild",
    "mind_blowing",
    "Your eyes can distinguish about 10 million colors — but your brain has names for only ~30.",
  ),
  f(
    "eyes-w-2",
    "eyes",
    "weird_wild",
    "almost_unknown",
    "Each eye has its own blind spot. Your brain fabricates the missing image in real time.",
  ),
  f(
    "eyes-w-3",
    "eyes",
    "weird_wild",
    "surprising",
    "Newborns see only in black, white, and grey for the first few weeks.",
  ),
  f(
    "eyes-h-1",
    "eyes",
    "health_tip",
    "common",
    "Every 20 minutes, look at something 20 feet away for 20 seconds. The 20-20-20 rule.",
  ),
  f(
    "eyes-d-1",
    "eyes",
    "what_damages_it",
    "surprising",
    "Rubbing your eyes hard can permanently reshape the cornea — it's called keratoconus.",
  ),
  f(
    "eyes-d-2",
    "eyes",
    "what_damages_it",
    "mind_blowing",
    "UV from a single sunny day without sunglasses can sunburn your cornea.",
  ),
  f(
    "eyes-s-1",
    "eyes",
    "superfood",
    "common",
    "Carrots really do help — beta-carotene becomes vitamin A, essential for low-light vision.",
  ),
  f(
    "eyes-s-2",
    "eyes",
    "superfood",
    "surprising",
    "Egg yolks contain lutein, which builds the eye's natural blue-light filter.",
  ),
  f(
    "eyes-r-1",
    "eyes",
    "record_breaker",
    "mind_blowing",
    "Your eyes can detect a single photon — the smallest possible unit of light.",
  ),

  // ━━━ EARS ━━━
  f(
    "ears-w-1",
    "ears",
    "weird_wild",
    "mind_blowing",
    "Your ears never stop working — even while you sleep, they process sound. Your brain just ignores most of it.",
  ),
  f(
    "ears-w-2",
    "ears",
    "weird_wild",
    "almost_unknown",
    "The smallest bones in your body are in your ear — the stapes is smaller than a grain of rice.",
  ),
  f(
    "ears-h-1",
    "ears",
    "health_tip",
    "common",
    "Keep headphone volume below 60% and take breaks every 60 minutes — the 60/60 rule.",
  ),
  f(
    "ears-d-1",
    "ears",
    "what_damages_it",
    "surprising",
    "Cotton swabs push earwax deeper and can perforate the eardrum. Your ears are self-cleaning.",
  ),
  f(
    "ears-s-1",
    "ears",
    "superfood",
    "surprising",
    "Omega-3 fatty acids from fish improve blood flow to the cochlea, protecting hearing.",
  ),
  f(
    "ears-r-1",
    "ears",
    "record_breaker",
    "mind_blowing",
    "The human ear can detect vibrations as small as the diameter of a hydrogen atom.",
  ),

  // ━━━ SINUSES ━━━
  f(
    "sin-w-1",
    "sinuses",
    "weird_wild",
    "surprising",
    "Your sinuses produce about a liter of mucus every day — most of it you swallow without noticing.",
  ),
  f(
    "sin-w-2",
    "sinuses",
    "weird_wild",
    "almost_unknown",
    "Sinuses make your skull lighter — without them, your head would be too heavy for your neck.",
  ),
  f(
    "sin-h-1",
    "sinuses",
    "health_tip",
    "common",
    "Steam inhalation for 10 minutes thins mucus and relieves sinus pressure naturally.",
  ),
  f(
    "sin-d-1",
    "sinuses",
    "what_damages_it",
    "surprising",
    "Dry indoor air from heating systems causes sinuses to produce thicker, harder-to-clear mucus.",
  ),
  f(
    "sin-s-1",
    "sinuses",
    "superfood",
    "common",
    "Horseradish and wasabi contain compounds that immediately thin sinus mucus.",
  ),
  f(
    "sin-r-1",
    "sinuses",
    "record_breaker",
    "surprising",
    "A sneeze can expel air from your sinuses at over 100 mph.",
  ),

  // ━━━ JAW ━━━
  f(
    "jaw-w-1",
    "jaw",
    "weird_wild",
    "mind_blowing",
    "Your masseter (jaw muscle) can exert up to 200 pounds of force — the strongest muscle by pressure in your body.",
  ),
  f(
    "jaw-w-2",
    "jaw",
    "weird_wild",
    "surprising",
    "Jaw clenching during sleep can exert 6x more force than conscious biting.",
  ),
  f(
    "jaw-h-1",
    "jaw",
    "health_tip",
    "common",
    "Rest your tongue on the roof of your mouth with teeth slightly apart — this is the correct jaw resting position.",
  ),
  f(
    "jaw-d-1",
    "jaw",
    "what_damages_it",
    "surprising",
    "Chewing ice creates micro-fractures in tooth enamel that accumulate over time.",
  ),
  f(
    "jaw-s-1",
    "jaw",
    "superfood",
    "common",
    "Crunchy vegetables like celery and carrots naturally exercise and strengthen the jaw.",
  ),
  f(
    "jaw-r-1",
    "jaw",
    "record_breaker",
    "mind_blowing",
    "Over a lifetime, your jaw muscles perform enough work to lift about 24 tons.",
  ),

  // ━━━ THROAT ━━━
  f(
    "thr-w-1",
    "throat",
    "weird_wild",
    "surprising",
    "Your vocal cords vibrate 100–1,000 times per second when you speak.",
  ),
  f(
    "thr-w-2",
    "throat",
    "weird_wild",
    "almost_unknown",
    "The epiglottis switches between breathing and eating 600+ times a day without you thinking about it.",
  ),
  f(
    "thr-h-1",
    "throat",
    "health_tip",
    "common",
    "Honey coats the throat better than most cough suppressants — and it's backed by clinical trials.",
  ),
  f(
    "thr-d-1",
    "throat",
    "what_damages_it",
    "surprising",
    "Whispering actually strains your vocal cords MORE than speaking at a normal volume.",
  ),
  f(
    "thr-s-1",
    "throat",
    "superfood",
    "common",
    "Warm ginger tea reduces throat inflammation through gingerol — a natural anti-inflammatory.",
  ),
  f(
    "thr-r-1",
    "throat",
    "record_breaker",
    "mind_blowing",
    "The human voice can produce over 300 distinct vowel sounds across all languages.",
  ),

  // ━━━ HEART ━━━
  f(
    "heart-w-1",
    "heart",
    "weird_wild",
    "mind_blowing",
    "Your heart beats around 3 billion times in an average lifetime — without a single break.",
  ),
  f(
    "heart-w-2",
    "heart",
    "weird_wild",
    "surprising",
    "The heart has its own mini-brain: ~40,000 neurons that can act independently.",
  ),
  f(
    "heart-w-3",
    "heart",
    "weird_wild",
    "almost_unknown",
    "Heart cells beat in sync when placed in a petri dish — even from different people.",
  ),
  f(
    "heart-h-1",
    "heart",
    "health_tip",
    "common",
    "Laughing for 15 minutes improves blood vessel function as much as a 30-minute workout.",
  ),
  f(
    "heart-d-1",
    "heart",
    "what_damages_it",
    "surprising",
    "Sitting for more than 8 hours a day raises heart disease risk even if you exercise.",
  ),
  f(
    "heart-d-2",
    "heart",
    "what_damages_it",
    "mind_blowing",
    "Heartbreak is real: emotional shock can cause 'broken heart syndrome' — the heart literally changes shape.",
  ),
  f(
    "heart-s-1",
    "heart",
    "superfood",
    "common",
    "Dark chocolate (70%+) lowers blood pressure measurably within 2 hours.",
  ),
  f(
    "heart-s-2",
    "heart",
    "superfood",
    "surprising",
    "Pomegranate juice reduces arterial plaque better than statins in some trials.",
  ),
  f(
    "heart-r-1",
    "heart",
    "record_breaker",
    "mind_blowing",
    "Your aorta is wide enough to fit a garden hose — and pumps 2,000 gallons a day.",
  ),

  // ━━━ LEFT LUNG ━━━
  f(
    "ll-w-1",
    "lung-left",
    "weird_wild",
    "mind_blowing",
    "Unfolded, your lungs would cover a tennis court — about 70 square meters.",
  ),
  f(
    "ll-w-2",
    "lung-left",
    "weird_wild",
    "surprising",
    "Your left lung is smaller to make room for your heart.",
  ),
  f(
    "ll-w-3",
    "lung-left",
    "weird_wild",
    "almost_unknown",
    "Lungs are the only organ that can float on water.",
  ),
  f(
    "ll-h-1",
    "lung-left",
    "health_tip",
    "common",
    "Box breathing (4-4-4-4) calms the nervous system in under a minute.",
  ),
  f(
    "ll-d-1",
    "lung-left",
    "what_damages_it",
    "surprising",
    "One cigarette removes 11 minutes from your life — but lungs heal substantially within a year of quitting.",
  ),
  f(
    "ll-s-1",
    "lung-left",
    "superfood",
    "common",
    "Apples — eating 5+ a week is linked to measurably better lung function.",
  ),
  f(
    "ll-r-1",
    "lung-left",
    "record_breaker",
    "mind_blowing",
    "You breathe about 20,000 times a day. Most without noticing a single one.",
  ),

  // ━━━ RIGHT LUNG ━━━
  f(
    "rl-w-1",
    "lung-right",
    "weird_wild",
    "surprising",
    "Your right lung has three lobes while your left has only two — it handles 55% of gas exchange.",
  ),
  f(
    "rl-h-1",
    "lung-right",
    "health_tip",
    "surprising",
    "Deep belly breathing for 5 minutes activates the vagus nerve and lowers cortisol.",
  ),
  f(
    "rl-d-1",
    "lung-right",
    "what_damages_it",
    "mind_blowing",
    "Air pollution particles smaller than 2.5 microns pass directly into your bloodstream through lung tissue.",
  ),
  f(
    "rl-s-1",
    "lung-right",
    "superfood",
    "surprising",
    "Broccoli sprouts contain sulforaphane which helps lungs detoxify airborne pollutants.",
  ),
  f(
    "rl-r-1",
    "lung-right",
    "record_breaker",
    "surprising",
    "A competitive freediver held their breath for 24 minutes and 37 seconds.",
  ),

  // ━━━ LIVER ━━━
  f(
    "liver-w-1",
    "liver",
    "weird_wild",
    "mind_blowing",
    "The liver is the only organ that can fully regenerate — even from just 25% of itself.",
  ),
  f(
    "liver-w-2",
    "liver",
    "weird_wild",
    "surprising",
    "It performs over 500 distinct chemical functions — a true biochemical factory.",
  ),
  f(
    "liver-w-3",
    "liver",
    "weird_wild",
    "almost_unknown",
    "Your liver makes its own cholesterol — about 80% of what's in your blood.",
  ),
  f(
    "liver-h-1",
    "liver",
    "health_tip",
    "common",
    "Coffee (3+ cups/day) is associated with a 40% lower risk of liver cancer.",
  ),
  f(
    "liver-d-1",
    "liver",
    "what_damages_it",
    "mind_blowing",
    "Sugar — not fat — is the leading cause of fatty liver disease in non-drinkers.",
  ),
  f(
    "liver-d-2",
    "liver",
    "what_damages_it",
    "surprising",
    "Acetaminophen (paracetamol) overdose is the #1 cause of acute liver failure.",
  ),
  f(
    "liver-s-1",
    "liver",
    "superfood",
    "common",
    "Beets contain betaine, which helps the liver process fats efficiently.",
  ),
  f(
    "liver-r-1",
    "liver",
    "record_breaker",
    "mind_blowing",
    "Your liver filters 1.4 liters of blood every minute — about a bathtub a day.",
  ),

  // ━━━ STOMACH ━━━
  f(
    "stom-w-1",
    "stomach",
    "weird_wild",
    "mind_blowing",
    "Stomach acid (pH ~1.5) is strong enough to dissolve a razor blade.",
  ),
  f(
    "stom-w-2",
    "stomach",
    "weird_wild",
    "surprising",
    "Your stomach lining replaces itself every 3-4 days — otherwise the acid would digest it.",
  ),
  f(
    "stom-w-3",
    "stomach",
    "weird_wild",
    "almost_unknown",
    "The 'butterflies' feeling is your stomach's nervous system firing — it has more neurons than your spinal cord.",
  ),
  f(
    "stom-h-1",
    "stomach",
    "health_tip",
    "common",
    "Eating slowly reduces calorie intake by ~15% — your stomach needs 20 min to signal fullness.",
  ),
  f(
    "stom-d-1",
    "stomach",
    "what_damages_it",
    "surprising",
    "Stress doesn't cause ulcers — H. pylori bacteria do (Nobel Prize, 2005).",
  ),
  f(
    "stom-s-1",
    "stomach",
    "superfood",
    "common",
    "Ginger speeds up gastric emptying — proven anti-nausea agent.",
  ),
  f(
    "stom-r-1",
    "stomach",
    "record_breaker",
    "mind_blowing",
    "Your stomach can stretch from 50ml empty to over 4 liters full — an 80x expansion.",
  ),

  // ━━━ SMALL INTESTINE ━━━
  f(
    "si-w-1",
    "small-intestine",
    "weird_wild",
    "mind_blowing",
    "Your small intestine is about 20 feet long but its surface area — with villi — equals a studio apartment.",
  ),
  f(
    "si-w-2",
    "small-intestine",
    "weird_wild",
    "surprising",
    "It absorbs 90% of all nutrients from your food. The large intestine mostly handles water.",
  ),
  f(
    "si-h-1",
    "small-intestine",
    "health_tip",
    "common",
    "Spacing meals 4–5 hours apart allows the migrating motor complex to sweep debris through.",
  ),
  f(
    "si-d-1",
    "small-intestine",
    "what_damages_it",
    "surprising",
    "Gluten damages the villi in celiac disease — flattening the absorptive surface by up to 70%.",
  ),
  f(
    "si-s-1",
    "small-intestine",
    "superfood",
    "common",
    "Bone broth contains glutamine which nourishes and repairs the intestinal lining.",
  ),
  f(
    "si-r-1",
    "small-intestine",
    "record_breaker",
    "mind_blowing",
    "Your small intestine absorbs about 7 liters of fluid every day — mostly recycled digestive juices.",
  ),

  // ━━━ LARGE INTESTINE ━━━
  f(
    "li-w-1",
    "large-intestine",
    "weird_wild",
    "mind_blowing",
    "70% of your immune system lives in your gut wall.",
  ),
  f(
    "li-w-2",
    "large-intestine",
    "weird_wild",
    "surprising",
    "Your gut microbiome weighs ~2kg and contains more bacterial cells than your whole body has human cells.",
  ),
  f(
    "li-h-1",
    "large-intestine",
    "health_tip",
    "common",
    "30 different plant foods a week is the single biggest predictor of a healthy microbiome.",
  ),
  f(
    "li-d-1",
    "large-intestine",
    "what_damages_it",
    "surprising",
    "Artificial sweeteners alter gut bacteria composition within just 4 days.",
  ),
  f(
    "li-s-1",
    "large-intestine",
    "superfood",
    "common",
    "Kimchi, sauerkraut, kefir — fermented foods seed beneficial bacteria directly.",
  ),
  f(
    "li-r-1",
    "large-intestine",
    "record_breaker",
    "mind_blowing",
    "Your gut produces 95% of your body's serotonin — the 'happiness chemical'.",
  ),

  // ━━━ KIDNEYS ━━━
  f(
    "kid-w-1",
    "kidneys",
    "weird_wild",
    "mind_blowing",
    "Your kidneys filter your entire blood supply about 40 times every single day.",
  ),
  f(
    "kid-w-2",
    "kidneys",
    "weird_wild",
    "surprising",
    "You only need ~25% of one kidney to survive normally.",
  ),
  f(
    "kid-h-1",
    "kidneys",
    "health_tip",
    "common",
    "Pale-yellow urine is the gold standard for hydration. Clear = overhydrated.",
  ),
  f(
    "kid-d-1",
    "kidneys",
    "what_damages_it",
    "surprising",
    "NSAIDs (ibuprofen) taken daily can reduce kidney function 30% in 6 months.",
  ),
  f(
    "kid-s-1",
    "kidneys",
    "superfood",
    "common",
    "Cranberries acidify urine and reduce UTI recurrence by ~25%.",
  ),
  f(
    "kid-r-1",
    "kidneys",
    "record_breaker",
    "mind_blowing",
    "Each kidney contains ~1 million nephrons — microscopic filters working in parallel.",
  ),

  // ━━━ BLADDER ━━━
  f(
    "bla-w-1",
    "bladder",
    "weird_wild",
    "surprising",
    "Your bladder can stretch from the size of a plum to a large grapefruit.",
  ),
  f(
    "bla-w-2",
    "bladder",
    "weird_wild",
    "almost_unknown",
    "The urge to pee starts at about 200ml — but your bladder can hold 400-600ml.",
  ),
  f(
    "bla-h-1",
    "bladder",
    "health_tip",
    "common",
    "Don't 'just in case' pee — it trains your bladder to signal urgency at lower volumes.",
  ),
  f(
    "bla-d-1",
    "bladder",
    "what_damages_it",
    "surprising",
    "Holding urine too long regularly can weaken bladder muscles and increase UTI risk.",
  ),
  f(
    "bla-s-1",
    "bladder",
    "superfood",
    "surprising",
    "Pumpkin seed extract strengthens bladder muscles and reduces urgency in clinical trials.",
  ),
  f(
    "bla-r-1",
    "bladder",
    "record_breaker",
    "surprising",
    "Your kidneys produce about 1.5 liters of urine daily — your bladder empties 6-8 times.",
  ),

  // ━━━ CERVICAL SPINE ━━━
  f(
    "sc-w-1",
    "spine-cervical",
    "weird_wild",
    "mind_blowing",
    "Giraffes and humans have the same number of cervical vertebrae — exactly 7.",
  ),
  f(
    "sc-h-1",
    "spine-cervical",
    "health_tip",
    "common",
    "'Text neck' from looking at phones adds up to 60 pounds of pressure on cervical discs.",
  ),
  f(
    "sc-d-1",
    "spine-cervical",
    "what_damages_it",
    "surprising",
    "Sleeping on your stomach forces the cervical spine into rotation for hours — one of the worst positions.",
  ),
  f(
    "sc-s-1",
    "spine-cervical",
    "superfood",
    "common",
    "Vitamin D (from sunlight and supplements) is critical for maintaining spinal disc health.",
  ),
  f(
    "sc-r-1",
    "spine-cervical",
    "record_breaker",
    "surprising",
    "Your cervical spine supports a head weighing 10-12 pounds — the weight of a bowling ball.",
  ),

  // ━━━ THORACIC SPINE ━━━
  f(
    "st-w-1",
    "spine-thoracic",
    "weird_wild",
    "surprising",
    "The thoracic spine is the only part of the spine directly connected to the rib cage.",
  ),
  f(
    "st-h-1",
    "spine-thoracic",
    "health_tip",
    "common",
    "Foam rolling the thoracic spine improves posture and breathing capacity.",
  ),
  f(
    "st-d-1",
    "spine-thoracic",
    "what_damages_it",
    "surprising",
    "Prolonged hunching compresses the front of thoracic vertebrae, leading to permanent wedging over decades.",
  ),
  f(
    "st-s-1",
    "spine-thoracic",
    "superfood",
    "surprising",
    "Calcium from leafy greens (kale, bok choy) is absorbed better than from dairy.",
  ),
  f(
    "st-r-1",
    "spine-thoracic",
    "record_breaker",
    "mind_blowing",
    "Your thoracic spine has the least mobility of any spinal region — it trades flexibility for rib cage stability.",
  ),

  // ━━━ LUMBAR SPINE ━━━
  f(
    "sl-w-1",
    "spine-lumbar",
    "weird_wild",
    "mind_blowing",
    "Your lumbar discs bear up to 10x your body weight during heavy lifting.",
  ),
  f(
    "sl-h-1",
    "spine-lumbar",
    "health_tip",
    "common",
    "Walking is better for lower back pain than bed rest — movement pumps nutrients into discs.",
  ),
  f(
    "sl-d-1",
    "spine-lumbar",
    "what_damages_it",
    "surprising",
    "Sitting puts 40% more pressure on lumbar discs than standing.",
  ),
  f(
    "sl-s-1",
    "spine-lumbar",
    "superfood",
    "common",
    "Anti-inflammatory foods like fatty fish, turmeric, and berries reduce spinal inflammation.",
  ),
  f(
    "sl-r-1",
    "spine-lumbar",
    "record_breaker",
    "surprising",
    "Your spinal discs compress during the day — you're measurably shorter by evening (up to 2cm).",
  ),

  // ━━━ SHOULDERS ━━━
  f(
    "sho-w-1",
    "shoulders",
    "weird_wild",
    "mind_blowing",
    "The shoulder can rotate 360 degrees — no other joint in the body comes close.",
  ),
  f(
    "sho-h-1",
    "shoulders",
    "health_tip",
    "common",
    "Hanging from a bar for 30 seconds a day decompresses and strengthens the shoulder joint.",
  ),
  f(
    "sho-d-1",
    "shoulders",
    "what_damages_it",
    "surprising",
    "Sleeping on the same shoulder every night compresses the bursa and can cause chronic pain.",
  ),
  f(
    "sho-s-1",
    "shoulders",
    "superfood",
    "common",
    "Collagen-rich foods (bone broth, citrus) support tendons and rotator cuff repair.",
  ),
  f(
    "sho-r-1",
    "shoulders",
    "record_breaker",
    "mind_blowing",
    "A baseball pitcher's shoulder rotates at 7,000 degrees per second during a throw.",
  ),

  // ━━━ ELBOWS ━━━
  f(
    "elb-w-1",
    "elbows",
    "weird_wild",
    "surprising",
    "Your 'funny bone' isn't a bone — it's the ulnar nerve running through a shallow groove with almost no padding.",
  ),
  f(
    "elb-h-1",
    "elbows",
    "health_tip",
    "common",
    "Avoid resting elbows on hard surfaces for extended periods to protect the ulnar nerve.",
  ),
  f(
    "elb-d-1",
    "elbows",
    "what_damages_it",
    "surprising",
    "Repetitive gripping motions (tennis, typing) inflame the elbow tendons — epicondylitis.",
  ),
  f(
    "elb-s-1",
    "elbows",
    "superfood",
    "common",
    "Vitamin C from bell peppers helps build the collagen that forms tendon tissue.",
  ),
  f(
    "elb-r-1",
    "elbows",
    "record_breaker",
    "surprising",
    "The elbow can flex and extend over 1 million times per year in normal daily activity.",
  ),

  // ━━━ WRISTS ━━━
  f(
    "wri-w-1",
    "wrists",
    "weird_wild",
    "mind_blowing",
    "Your wrist contains 8 tiny carpal bones arranged in two rows — one of the most complex joints in the body.",
  ),
  f(
    "wri-h-1",
    "wrists",
    "health_tip",
    "common",
    "Wrist circles and stretches before typing reduce carpal tunnel symptoms by 50%.",
  ),
  f(
    "wri-d-1",
    "wrists",
    "what_damages_it",
    "surprising",
    "Sleeping with bent wrists compresses the carpal tunnel nerve nightly.",
  ),
  f(
    "wri-s-1",
    "wrists",
    "superfood",
    "surprising",
    "Vitamin B6 from chickpeas and bananas reduces carpal tunnel inflammation.",
  ),
  f(
    "wri-r-1",
    "wrists",
    "record_breaker",
    "surprising",
    "Your wrist pulse point (radial artery) has been used for medical diagnosis for over 3,000 years.",
  ),

  // ━━━ HANDS ━━━
  f(
    "han-w-1",
    "hands",
    "weird_wild",
    "mind_blowing",
    "Your hands have 27 bones, 29 joints, and 123 ligaments each — more complex than most machines.",
  ),
  f(
    "han-w-2",
    "hands",
    "weird_wild",
    "almost_unknown",
    "Fingerprints form in the womb at 17 weeks and never change — even after burns.",
  ),
  f(
    "han-h-1",
    "hands",
    "health_tip",
    "common",
    "Hand grip strength is one of the strongest predictors of overall longevity and health.",
  ),
  f(
    "han-d-1",
    "hands",
    "what_damages_it",
    "surprising",
    "Cracking knuckles doesn't cause arthritis — but phone pinch grip can inflame thumb tendons.",
  ),
  f(
    "han-s-1",
    "hands",
    "superfood",
    "common",
    "Omega-3s reduce joint inflammation — especially helpful for hand arthritis.",
  ),
  f(
    "han-r-1",
    "hands",
    "record_breaker",
    "mind_blowing",
    "Your fingertips can detect texture differences as small as 13 nanometers — smoother than glass.",
  ),

  // ━━━ HIPS ━━━
  f(
    "hip-w-1",
    "hips",
    "weird_wild",
    "surprising",
    "Your hip joint is the deepest ball-and-socket joint — the femoral head sits inside a bony cup.",
  ),
  f(
    "hip-h-1",
    "hips",
    "health_tip",
    "common",
    "Deep squats maintain hip mobility better than any stretch — 'use it or lose it' applies literally.",
  ),
  f(
    "hip-d-1",
    "hips",
    "what_damages_it",
    "surprising",
    "Crossing your legs habitually can misalign the hip joint and compress nerves over years.",
  ),
  f(
    "hip-s-1",
    "hips",
    "superfood",
    "common",
    "Glucosamine-rich shellfish support cartilage maintenance in weight-bearing joints.",
  ),
  f(
    "hip-r-1",
    "hips",
    "record_breaker",
    "mind_blowing",
    "Hip replacement is one of the most successful surgeries ever — 95% still work after 15 years.",
  ),

  // ━━━ KNEES ━━━
  f(
    "kne-w-1",
    "knees",
    "weird_wild",
    "mind_blowing",
    "Your knee absorbs 3-5x your body weight with every step — and up to 8x when running.",
  ),
  f(
    "kne-w-2",
    "knees",
    "weird_wild",
    "almost_unknown",
    "The kneecap (patella) is the largest sesamoid bone — it develops inside the tendon, not separately.",
  ),
  f(
    "kne-h-1",
    "knees",
    "health_tip",
    "common",
    "Strong quadriceps reduce knee injury risk by 60% — leg extensions and wall sits help.",
  ),
  f(
    "kne-d-1",
    "knees",
    "what_damages_it",
    "surprising",
    "Running on concrete doesn't damage healthy knees — but weak glutes cause knee misalignment that does.",
  ),
  f(
    "kne-s-1",
    "knees",
    "superfood",
    "common",
    "Tart cherry juice reduces knee inflammation and pain as effectively as ibuprofen in studies.",
  ),
  f(
    "kne-r-1",
    "knees",
    "record_breaker",
    "mind_blowing",
    "Your ACL can withstand 500+ pounds of force — but a sudden twist at the wrong angle can snap it instantly.",
  ),

  // ━━━ ANKLES ━━━
  f(
    "ank-w-1",
    "ankles",
    "weird_wild",
    "surprising",
    "Ankle sprains are the most common sports injury — 25,000 happen daily in the US alone.",
  ),
  f(
    "ank-h-1",
    "ankles",
    "health_tip",
    "common",
    "Single-leg balance exercises for 2 minutes daily reduce ankle sprain recurrence by 50%.",
  ),
  f(
    "ank-d-1",
    "ankles",
    "what_damages_it",
    "surprising",
    "High heels shift your body weight forward and weaken the Achilles tendon over time.",
  ),
  f(
    "ank-s-1",
    "ankles",
    "superfood",
    "common",
    "Gelatin and vitamin C together promote collagen synthesis for ankle ligament repair.",
  ),
  f(
    "ank-r-1",
    "ankles",
    "record_breaker",
    "surprising",
    "Your Achilles tendon can withstand forces of up to 1,000 pounds — it's the strongest tendon in the body.",
  ),

  // ━━━ FEET ━━━
  f(
    "fee-w-1",
    "feet",
    "weird_wild",
    "mind_blowing",
    "Each foot has 26 bones, 33 joints, and over 100 tendons — a quarter of all your bones are in your feet.",
  ),
  f(
    "fee-w-2",
    "feet",
    "weird_wild",
    "surprising",
    "Feet have over 200,000 nerve endings — making them one of the most sensitive body parts.",
  ),
  f(
    "fee-h-1",
    "feet",
    "health_tip",
    "common",
    "Walking barefoot on varied surfaces strengthens the 20+ intrinsic foot muscles that shoes weaken.",
  ),
  f(
    "fee-d-1",
    "feet",
    "what_damages_it",
    "surprising",
    "Tight shoes compress metatarsal bones and cause Morton's neuroma — a nerve thickening.",
  ),
  f(
    "fee-s-1",
    "feet",
    "superfood",
    "common",
    "Magnesium-rich foods (dark chocolate, almonds) reduce foot cramps and muscle tension.",
  ),
  f(
    "fee-r-1",
    "feet",
    "record_breaker",
    "mind_blowing",
    "The average person walks about 100,000 miles in a lifetime — roughly 4 trips around Earth.",
  ),

  // ━━━ SKIN ━━━
  f(
    "skin-w-1",
    "skin",
    "weird_wild",
    "mind_blowing",
    "You shed ~40,000 skin cells every minute. Most household dust is you.",
  ),
  f(
    "skin-w-2",
    "skin",
    "weird_wild",
    "surprising",
    "Skin is your largest organ — about 2 square meters and 15% of body weight.",
  ),
  f(
    "skin-w-3",
    "skin",
    "weird_wild",
    "almost_unknown",
    "Goosebumps are an evolutionary leftover — they once made our fur stand up to look bigger.",
  ),
  f(
    "skin-h-1",
    "skin",
    "health_tip",
    "common",
    "SPF 30 daily — even indoors — is the single biggest anti-aging intervention proven.",
  ),
  f(
    "skin-d-1",
    "skin",
    "what_damages_it",
    "surprising",
    "Sugar molecules bond to collagen and stiffen it — a process called 'glycation'.",
  ),
  f(
    "skin-s-1",
    "skin",
    "superfood",
    "common",
    "Tomatoes (cooked) contain lycopene — natural internal SPF of about 4.",
  ),
  f(
    "skin-r-1",
    "skin",
    "record_breaker",
    "mind_blowing",
    "Your skin completely renews itself every 27 days. You're never the same person twice.",
  ),

  // ━━━ BONES ━━━
  f(
    "bones-w-1",
    "bones",
    "weird_wild",
    "mind_blowing",
    "Bone is 5x stronger than steel by weight — and constantly rebuilds itself.",
  ),
  f(
    "bones-w-2",
    "bones",
    "weird_wild",
    "surprising",
    "Babies are born with ~270 bones. Adults have 206 — many fuse together as we grow.",
  ),
  f(
    "bones-w-3",
    "bones",
    "weird_wild",
    "almost_unknown",
    "Your bones make 500 billion blood cells every day inside the marrow.",
  ),
  f(
    "bones-h-1",
    "bones",
    "health_tip",
    "common",
    "Weight-bearing exercise (walking, lifting) is more important than calcium for bone density.",
  ),
  f(
    "bones-d-1",
    "bones",
    "what_damages_it",
    "surprising",
    "Cola — not just sugar — leaches calcium from bones via phosphoric acid.",
  ),
  f(
    "bones-s-1",
    "bones",
    "superfood",
    "common",
    "Sardines (with bones) deliver more bioavailable calcium than milk.",
  ),
  f(
    "bones-r-1",
    "bones",
    "record_breaker",
    "mind_blowing",
    "The femur can support 30× a person's body weight without breaking.",
  ),

  // ━━━ DATABASE IMPORTS ━━━
  f(
    "db-brain-1",
    "brain",
    "weird_wild",
    "mind_blowing",
    "The brain generates enough electricity to power a small LED lightbulb (about 12 to 25 watts of power).",
  ),
  f(
    "db-brain-2",
    "brain",
    "health_tip",
    "surprising",
    "Learning a new physical skill, like juggling or dancing, physically increases the volume of gray matter in your brain.",
  ),
  f(
    "db-brain-3",
    "brain",
    "what_damages_it",
    "surprising",
    "Chronic sleep deprivation prevents the brain's glymphatic system from flushing out toxic amyloid-beta plaques, linked to Alzheimer's.",
  ),
  f(
    "db-brain-4",
    "brain",
    "superfood",
    "common",
    "Walnuts visually resemble tiny brains and are packed with DHA, an Omega-3 fatty acid crucial for protecting cognitive health.",
  ),
  f(
    "db-brain-5",
    "brain",
    "record_breaker",
    "mind_blowing",
    "Information travels along different types of neurons at different speeds, with the fastest motor neurons transmitting signals at up to 268 mph.",
  ),

  f(
    "db-heart-1",
    "heart",
    "weird_wild",
    "mind_blowing",
    "Because the heart has its own electrical impulse, it can continue to beat even when separated from the body, as long as it has an oxygen supply.",
  ),
  f(
    "db-heart-2",
    "heart",
    "health_tip",
    "surprising",
    "Laughing out loud relaxes the endothelium (the inner lining of your blood vessels) and increases blood flow by up to 20%.",
  ),
  f(
    "db-heart-3",
    "heart",
    "what_damages_it",
    "surprising",
    "Prolonged periods of sitting (a sedentary lifestyle) drastically stiffen arteries over time, even if you exercise for an hour a day.",
  ),
  f(
    "db-heart-4",
    "heart",
    "superfood",
    "common",
    "Dark chocolate (70%+ cacao) is rich in flavonoids that stimulate the production of nitric oxide, which helps lower blood pressure.",
  ),
  f(
    "db-heart-5",
    "heart",
    "record_breaker",
    "mind_blowing",
    "A healthy human heart beats roughly 100,000 times a day, pumping about 2,000 gallons of blood through 60,000 miles of blood vessels.",
  ),

  f(
    "db-gut-1",
    "large-intestine",
    "weird_wild",
    "mind_blowing",
    "You have a 'second brain' in your gut called the enteric nervous system, containing over 100 million neurons.",
  ),
  f(
    "db-gut-2",
    "stomach",
    "health_tip",
    "common",
    "Chewing your food 30 times before swallowing dramatically reduces bloating by mixing food with salivary amylase to jumpstart digestion.",
  ),
  f(
    "db-gut-3",
    "large-intestine",
    "what_damages_it",
    "surprising",
    "Emulsifiers found in ultra-processed foods can strip away the protective mucus lining of your intestines, leading to 'leaky gut.'",
  ),
  f(
    "db-gut-4",
    "large-intestine",
    "superfood",
    "common",
    "Fermented foods like kimchi and sauerkraut provide living probiotic strains that directly repopulate and diversify your microbiome.",
  ),
  f(
    "db-gut-5",
    "small-intestine",
    "record_breaker",
    "surprising",
    "The small intestine is anything but small in length—if stretched out, it measures about 22 feet long.",
  ),

  f(
    "db-skin-1",
    "skin",
    "weird_wild",
    "mind_blowing",
    "You shed about 30,000 to 40,000 dead skin cells every single minute. A massive percentage of the dust in your home is actually you.",
  ),
  f(
    "db-skin-2",
    "skin",
    "health_tip",
    "common",
    "Applying moisturizer to damp skin within 3 minutes of showering traps water on the surface, dramatically increasing hydration compared to applying it on dry skin.",
  ),
  f(
    "db-skin-3",
    "skin",
    "what_damages_it",
    "surprising",
    "UVA rays from the sun penetrate deep into the dermis, destroying collagen and elastin even on cloudy days or through glass windows.",
  ),
  f(
    "db-skin-4",
    "skin",
    "superfood",
    "surprising",
    "Tomatoes are rich in lycopene, a powerful antioxidant that acts like an internal sunscreen to protect skin cells from UV damage.",
  ),
  f(
    "db-skin-5",
    "skin",
    "record_breaker",
    "common",
    "The skin is the body's largest organ, accounting for roughly 15% to 16% of your total body weight.",
  ),

  f(
    "db-lung-1",
    "lung-left",
    "weird_wild",
    "surprising",
    "Your left lung is about 10% smaller than your right lung to make room for your heart.",
  ),
  f(
    "db-lung-2",
    "lung-left",
    "health_tip",
    "common",
    "Practicing diaphragmatic breathing (belly breathing) stimulates the vagus nerve, which lowers your heart rate and reduces cortisol in minutes.",
  ),
  f(
    "db-lung-3",
    "lung-left",
    "what_damages_it",
    "surprising",
    "Vaping exposes the lungs to diacetyl and heavy metals, causing inflammation in the bronchioles (the smallest airways).",
  ),
  f(
    "db-lung-4",
    "lung-left",
    "superfood",
    "common",
    "Apples are packed with quercetin, an antioxidant highly correlated with improved lung function and reduced asthma risks.",
  ),
  f(
    "db-lung-5",
    "lung-left",
    "record_breaker",
    "mind_blowing",
    "If you opened up your lungs and laid out all the tiny air sacs (alveoli) flat, they would cover an area the size of a tennis court.",
  ),

  f(
    "db-liver-1",
    "liver",
    "weird_wild",
    "mind_blowing",
    "The liver is the only internal human organ capable of natural regeneration. As little as 25% of a healthy liver can regenerate into a full-sized organ.",
  ),
  f(
    "db-liver-2",
    "liver",
    "health_tip",
    "common",
    "Drinking a glass of water with fresh lemon first thing in the morning stimulates liver enzymes and assists in natural detoxification.",
  ),
  f(
    "db-liver-3",
    "liver",
    "what_damages_it",
    "surprising",
    "Excessive intake of high-fructose corn syrup bypasses standard metabolic pathways and goes straight to the liver, leading to Non-Alcoholic Fatty Liver Disease (NAFLD).",
  ),
  f(
    "db-liver-4",
    "liver",
    "superfood",
    "surprising",
    "Black coffee has been extensively proven by hepatologists to protect the liver against cirrhosis and reduce overall liver inflammation.",
  ),
  f(
    "db-liver-5",
    "liver",
    "record_breaker",
    "mind_blowing",
    "The liver is the body's ultimate multitasker, continuously performing over 500 vital biochemical functions simultaneously.",
  ),

  f(
    "db-bones-1",
    "bones",
    "weird_wild",
    "surprising",
    "Babies are born with roughly 300 bones, but as they grow, many fuse together, leaving adults with exactly 206 bones.",
  ),
  f(
    "db-bones-2",
    "bones",
    "health_tip",
    "common",
    "Weight-bearing exercises (like lifting weights or jumping rope) physically stress the bone, signaling osteoblast cells to build denser, stronger bones.",
  ),
  f(
    "db-bones-3",
    "bones",
    "what_damages_it",
    "surprising",
    "A highly processed, high-sodium diet forces your kidneys to excrete calcium out through your urine, slowly draining calcium from your bones.",
  ),
  f(
    "db-bones-4",
    "bones",
    "superfood",
    "common",
    "Sardines (eaten with the tiny bones intact) are an incredible, bioavailable source of both calcium and Vitamin D.",
  ),
  f(
    "db-bones-5",
    "bones",
    "record_breaker",
    "mind_blowing",
    "Ounce for ounce, human bone is stronger than solid steel. A block of bone the size of a matchbox can support up to 18,000 pounds of weight.",
  ),

  f(
    "db-eyes-1",
    "eyes",
    "weird_wild",
    "surprising",
    "The human eye is so highly developed it can distinguish between approximately 10 million different colors.",
  ),
  f(
    "db-eyes-2",
    "eyes",
    "health_tip",
    "common",
    "Prevent digital eye strain with the 20-20-20 rule: Every 20 minutes, look at an object 20 feet away for 20 seconds.",
  ),
  f(
    "db-eyes-3",
    "eyes",
    "what_damages_it",
    "surprising",
    "Sleeping in contact lenses deprives the cornea of necessary oxygen, increasing the risk of severe bacterial infections by up to 8 times.",
  ),
  f(
    "db-eyes-4",
    "eyes",
    "superfood",
    "common",
    "Leafy greens like spinach and kale contain lutein and zeaxanthin, which act as natural blue-light filters for the macula.",
  ),
  f(
    "db-eyes-5",
    "eyes",
    "record_breaker",
    "mind_blowing",
    "The eye has the fastest-reacting muscles in the human body. A single blink typically lasts only 100 to 150 milliseconds.",
  ),

  f(
    "db-kidneys-1",
    "kidneys",
    "weird_wild",
    "surprising",
    "Your kidneys receive about 20% of all the blood pumped by the heart, which is the highest blood flow per gram of any organ in the body.",
  ),
  f(
    "db-kidneys-2",
    "kidneys",
    "health_tip",
    "common",
    "Staying properly hydrated is the absolute best way to help your kidneys clear excess sodium and toxins, significantly preventing kidney stones.",
  ),
  f(
    "db-kidneys-3",
    "kidneys",
    "what_damages_it",
    "surprising",
    "Chronic, daily overuse of NSAIDs (like Ibuprofen or Naproxen) restricts blood flow to the kidneys and can cause permanent renal damage over time.",
  ),
  f(
    "db-kidneys-4",
    "kidneys",
    "superfood",
    "common",
    "Blueberries are perfect for kidney health because they are packed with antioxidants but naturally very low in sodium, phosphorus, and potassium.",
  ),
  f(
    "db-kidneys-5",
    "kidneys",
    "record_breaker",
    "mind_blowing",
    "Your two kidneys filter about 45 gallons of blood every single day to produce just 1 to 2 quarts of urine.",
  ),

  f(
    "db-muscles-1",
    "muscles",
    "weird_wild",
    "common",
    "It takes 43 separate muscles to frown, but only 17 muscles to smile.",
  ),
  f(
    "db-muscles-2",
    "muscles",
    "health_tip",
    "common",
    "Consuming a high-quality protein source within 30 to 60 minutes after a heavy workout maximizes muscle protein synthesis and speeds up repair.",
  ),
  f(
    "db-muscles-3",
    "muscles",
    "what_damages_it",
    "surprising",
    "Severe dehydration during extreme exercise can cause muscle tissue to break down rapidly into the bloodstream, a dangerous condition called rhabdomyolysis.",
  ),
  f(
    "db-muscles-4",
    "muscles",
    "superfood",
    "surprising",
    "Tart cherry juice contains high levels of anthocyanins, which drastically reduce delayed onset muscle soreness (DOMS) after physical exertion.",
  ),
  f(
    "db-muscles-5",
    "muscles",
    "record_breaker",
    "mind_blowing",
    "The strongest muscle in the human body (based on its weight and force) is the masseter—the heavy jaw muscle used for chewing.",
  ),
  f(
    "user-fact-brain-1",
    "brain",
    "weird_wild",
    "mind_blowing",
    "Your brain generates about 20 watts of electrical power when you're awake—enough to power a dim LED lightbulb.",
  ),
  f(
    "user-fact-brain-2",
    "brain",
    "weird_wild",
    "almost_unknown",
    "The brain itself cannot feel pain. Even though your brain processes all the pain signals from your body, the brain tissue itself has no pain receptors (nociceptors).",
  ),
  f(
    "user-fact-brain-3",
    "brain",
    "weird_wild",
    "surprising",
    "Your nerve impulses can travel as fast as a race car, zooming up to 268 miles per hour (431 km/h) to deliver messages between your brain and body instantly.",
  ),
  f(
    "user-fact-gut-1",
    "large-intestine",
    "weird_wild",
    "surprising",
    "You have a 'second brain' in your gut (the enteric nervous system) containing around 500 million neurons—more than a rat's entire brain. It's why we get 'butterflies' in our stomachs!",
  ),
  f(
    "user-fact-vessels-1",
    "heart",
    "record_breaker",
    "mind_blowing",
    "Your blood vessels could wrap around the Earth four times. If you laid all your arteries, veins, and capillaries end-to-end, they would stretch for about 100,000 miles.",
  ),
  f(
    "user-fact-rbc-1",
    "heart",
    "record_breaker",
    "surprising",
    "A single red blood cell can do a full lap of your body in just 20 seconds, moving incredibly fast to drop off oxygen and pick up carbon dioxide.",
  ),
  f(
    "user-fact-heart-1",
    "heart",
    "record_breaker",
    "mind_blowing",
    "Your heart pumps 2,000 gallons of blood every single day. Over an average lifetime, it will beat about 2.5 billion times and pump enough blood to fill 3 average-sized swimming pools.",
  ),
  f(
    "user-fact-cornea-1",
    "eyes",
    "weird_wild",
    "almost_unknown",
    "Your cornea is the only body part that 'breathes' the air directly. Because it has no blood vessels, it pulls oxygen straight out of the air around you.",
  ),
  f(
    "user-fact-bones-1",
    "bones",
    "record_breaker",
    "surprising",
    "Ounce for ounce, your bones are stronger than solid steel. A block of bone the size of a matchbox can support up to 18,000 pounds of weight.",
  ),
  f(
    "user-fact-spinal-height",
    "bones",
    "weird_wild",
    "surprising",
    "You are about 1 centimeter taller in the morning because gravity compresses the soft cartilage discs between your spinal bones during the day while you walk and stand.",
  ),
  f(
    "user-fact-baby-bones",
    "bones",
    "weird_wild",
    "surprising",
    "You lose almost 100 bones as you grow up. Babies are born with about 300 bones, but many fuse together, leaving exactly 206 by adulthood.",
  ),
  f(
    "user-fact-jaw-1",
    "jaw",
    "record_breaker",
    "mind_blowing",
    "The strongest muscle in your body based on its weight is in your jaw (the masseter muscle), which can close your teeth with a force of up to 200 pounds!",
  ),
  f(
    "user-fact-pinky-strength",
    "hands",
    "record_breaker",
    "surprising",
    "You would lose 50% of your hand strength without your pinky. While the thumb handles fine motor skills, your pinky and ring finger provide the vast majority of your grip strength.",
  ),
  f(
    "user-fact-lungs-area",
    "lung-right",
    "record_breaker",
    "surprising",
    "Your lungs have the surface area of a tennis court. If you flattened out all the tiny air sacs (alveoli) inside them, they would cover between 50 to 75 square meters.",
  ),
  f(
    "user-fact-lung-size",
    "lung-left",
    "weird_wild",
    "common",
    "Your right lung is significantly larger than your left. Because your heart sits slightly to the left side of your chest, your left lung has only two lobes to make room, while the right has three.",
  ),
  f(
    "user-fact-breaths-count",
    "lung-right",
    "record_breaker",
    "common",
    "You breathe about 22,000 times a day. The average adult takes between 12 and 20 breaths per minute, totaling roughly 670 million breaths over a lifetime.",
  ),
  f(
    "user-fact-skin-shed",
    "skin",
    "weird_wild",
    "common",
    "You shed about 40,000 skin cells every single minute. Over a year, you shed about 8 to 9 pounds of dead skin, which makes up most of the dust in your home!",
  ),
  f(
    "user-fact-sweat-odor",
    "skin",
    "health_tip",
    "common",
    "Sweat itself is completely odorless. Body odor only happens when bacteria on your skin mix with sweat and break it down into smelly acids.",
  ),
  f(
    "user-fact-enamel",
    "jaw",
    "record_breaker",
    "common",
    "Your tooth enamel is the hardest substance in your body—even harder than your bones. However, unlike bones, enamel cannot repair or regrow itself if damaged.",
  ),
  f(
    "user-fact-goosebumps",
    "skin",
    "weird_wild",
    "common",
    "Goosebumps are an evolutionary leftover from when our hairier ancestors got cold or scared, using tiny muscles at the base of each hair follicle to trap heat or look bigger.",
  ),
  f(
    "user-fact-dna-length",
    "skin",
    "record_breaker",
    "mind_blowing",
    "Your DNA could stretch to the sun and back 600 times. If you uncoiled all the DNA packed tightly inside your microscopic cells, it would span roughly 10 billion miles.",
  ),
  f(
    "user-fact-microbiome",
    "large-intestine",
    "weird_wild",
    "mind_blowing",
    "You are practically half-microbe. The human body contains about 30 trillion human cells and roughly 39 trillion bacterial cells, meaning you host more microbes than human cells!",
  ),
  f(
    "user-fact-tears",
    "eyes",
    "weird_wild",
    "surprising",
    "Humans are the only animals that cry emotional tears. While many animals produce tears to lubricate their eyes, we are the only species that cries due to feelings.",
  ),
  f(
    "user-fact-stomach-acid",
    "stomach",
    "weird_wild",
    "mind_blowing",
    "Your stomach acid could dissolve a razor blade. The hydrochloric acid in your stomach has an incredibly corrosive pH of 1.5 to 3.5.",
  ),
  f(
    "user-fact-stomach-lining",
    "stomach",
    "weird_wild",
    "surprising",
    "Your stomach grows a new lining every few days. To prevent the powerful acid from digesting the stomach itself, the body secretes protective mucus replaced every 3-4 days.",
  ),
  f(
    "user-fact-liver-regen",
    "liver",
    "record_breaker",
    "mind_blowing",
    "The liver is the ultimate regenerative organ. You could safely remove up to 75% of a healthy liver, and it would completely regrow back to its normal size within just a few weeks.",
  ),
  f(
    "user-fact-small-intestine-length",
    "small-intestine",
    "weird_wild",
    "surprising",
    "Your small intestine isn't small at all—it's 22 feet long. It's called 'small' because it is narrow (about 1 inch in diameter), but it is as long as a standard minivan.",
  ),
  f(
    "user-fact-saliva",
    "jaw",
    "record_breaker",
    "common",
    "You produce enough saliva to fill two bathtubs a year, producing about 2 to 4 pints of spit every day to help dissolve and taste your food.",
  ),
  f(
    "user-fact-smell-senses",
    "sinuses",
    "record_breaker",
    "mind_blowing",
    "Your nose can smell over 1 trillion different scents. Recent studies revealed our olfactory system is incredibly advanced, far beyond the old estimate of 10,000 smells.",
  ),
  f(
    "user-fact-color-vision",
    "eyes",
    "record_breaker",
    "surprising",
    "Your eyes can distinguish 10 million different colors. Thanks to cone cells in your retinas, your eyes and brain work together to pick up minute differences in light.",
  ),
  f(
    "fact-cerebrospinal-fluid-glymphatic-wash",
    "brain",
    "weird_wild",
    "mind_blowing",
    "While you enter slow-wave deep sleep, your brain cells physically shrink by up to 60%, allowing cerebrospinal fluid to rush through interstitial spaces like a biological dishwasher to flush out metabolic waste and amyloid-beta proteins.",
    "Science / NIH",
  ),
  f(
    "fact-cornea-zero-blood-vessels",
    "eyes",
    "weird_wild",
    "surprising",
    "Your cornea is the only living tissue in the human body that contains zero blood vessels; it absorbs oxygen directly from ambient room air dissolved in your tear film.",
    "American Academy of Ophthalmology",
  ),
  f(
    "fact-retina-highest-metabolic-rate",
    "eyes",
    "record_breaker",
    "almost_unknown",
    "Per gram of tissue, your retina has the highest metabolic rate and oxygen consumption of any organ in the human body—exceeding even the cerebral cortex and cardiac muscle.",
    "Investigative Ophthalmology & Visual Science",
  ),
  f(
    "fact-olfactory-receptors-neurogenesis",
    "sinuses",
    "weird_wild",
    "almost_unknown",
    "Olfactory receptor neurons lining your upper nasal cavity are among the only neurons in the entire adult nervous system that regenerate completely every 30 to 60 days from local basal stem cells.",
    "Nature Reviews Neuroscience",
  ),
  f(
    "fact-tympanic-membrane-self-cleaning",
    "ears",
    "health_tip",
    "surprising",
    "The epithelial skin cells on your eardrum actively migrate outward toward the ear canal opening at roughly the same speed your fingernails grow (0.05 mm/day), carrying old earwax and trapped debris out of the ear naturally.",
    "The Laryngoscope",
  ),
  f(
    "fact-tongue-taste-buds-turnover",
    "jaw",
    "weird_wild",
    "common",
    "Each of your roughly 10,000 taste buds contains 50 to 100 specialized receptor cells that have an average lifespan of just 10 to 14 days, constantly renewing so you don't lose taste permanently after burning your mouth.",
    "Chemical Senses / Oxford Academic",
  ),
  f(
    "fact-cardiac-endothelial-surface-area",
    "heart",
    "record_breaker",
    "mind_blowing",
    "If you stretched out all the capillaries inside an adult human heart alone, they would span over 3,000 miles—enough to lay a microscopic red blood vessel highway from New York to London.",
    "Circulation Research",
  ),
  f(
    "fact-atrial-natriuretic-peptide-heart-hormone",
    "heart",
    "weird_wild",
    "almost_unknown",
    "Your heart is not just a pump, but an active endocrine gland: when blood volume stretches the right atrium, heart muscle cells synthesize and release Atrial Natriuretic Peptide (ANP) to signal the kidneys to dump excess sodium and water.",
    "Endocrine Reviews / AHA",
  ),
  f(
    "fact-alveoli-surface-capillary-sheet",
    "lung-left",
    "record_breaker",
    "mind_blowing",
    "The capillary network enveloping your lungs' 300 million alveoli is so dense that blood flows through the gas-exchange zone not in distinct tubes, but as a continuous microscopic sheet of red blood cells just 5 micrometers thick.",
    "West's Respiratory Physiology",
  ),
  f(
    "fact-trachea-mucociliary-escalator",
    "throat",
    "health_tip",
    "surprising",
    "Millions of microscopic cilia on your tracheal epithelial cells beat in synchronized waves 1,000 times per minute, pushing a continuous conveyor belt of mucus and trapped dust upward at 1 to 2 centimeters per minute to be swallowed and sterilized in stomach acid.",
    "American Thoracic Society",
  ),
  f(
    "fact-kupffer-cells-liver-phagocytosis",
    "liver",
    "health_tip",
    "almost_unknown",
    "Over 80% to 90% of all resident tissue macrophages in your entire body reside inside your liver as 'Kupffer cells', filtering and destroying millions of gut-derived bacterial endotoxins every single minute.",
    "Gastroenterology",
  ),
  f(
    "fact-liver-dual-blood-supply",
    "liver",
    "weird_wild",
    "almost_unknown",
    "The liver is the only organ in your body that receives 75% of its blood deoxygenated and nutrient-rich directly from your intestines via the portal vein, and 25% oxygen-rich from the hepatic artery.",
    "New England Journal of Medicine",
  ),
  f(
    "fact-stomach-intrinsic-factor-b12",
    "stomach",
    "health_tip",
    "almost_unknown",
    "Without specialized gastric parietal cells secreting a single glycoprotein called 'intrinsic factor', your body would be completely incapable of absorbing dietary Vitamin B12 in the terminal ileum, leading to fatal pernicious anemia.",
    "American Journal of Hematology",
  ),
  f(
    "fact-small-intestine-brush-border-surface",
    "small-intestine",
    "record_breaker",
    "mind_blowing",
    "Thanks to circular plicae, villi, and billions of microscopic microvilli, the interior absorptive surface area of your small intestine is approximately 32 square meters—the floor area of an entire studio apartment.",
    "PNAS (Proceedings of the National Academy of Sciences)",
  ),
  f(
    "fact-gut-microbiome-gene-diversity",
    "large-intestine",
    "record_breaker",
    "mind_blowing",
    "The microbial ecosystem living in your large intestine carries over 3.3 million unique microbial genes—outnumbering the human genome's protein-coding genes by a ratio of more than 150 to 1.",
    "Nature",
  ),
  f(
    "fact-podocytes-glomerular-filtration",
    "kidneys",
    "weird_wild",
    "almost_unknown",
    "Each of your kidneys contains roughly 1 million glomeruli lined with interdigitating foot processes called 'podocytes', which create slit diaphragms so precise that they allow electrolytes to pass while keeping vital albumin and blood cells in circulation.",
    "Journal of the American Society of Nephrology",
  ),
  f(
    "fact-bladder-urothelium-umbrella-cells",
    "bladder",
    "weird_wild",
    "surprising",
    "The internal lining of your bladder is protected by specialized 'umbrella cells' coated in crystalline uroplakin plaques that can stretch to over five times their resting area while withstanding hypertonic, acidic urine without leaking.",
    "Nature Clinical Practice Urology",
  ),
  f(
    "fact-cervical-vertebrae-rotation-atlas-axis",
    "spine-cervical",
    "weird_wild",
    "surprising",
    "Approximately 50% of your head's total rotational movement (shaking your head 'no') occurs at a single specialized joint between your first two neck vertebrae: the C1 Atlas ring pivoting on the C2 Axis dens peg.",
    "Journal of Bone and Joint Surgery",
  ),
  f(
    "fact-thoracic-kyphosis-respiratory-cage",
    "spine-thoracic",
    "health_tip",
    "surprising",
    "Your 12 thoracic vertebrae are uniquely anchored to your rib cage via costovertebral synovial joints, providing the rigid structural cage that prevents your chest cavity from collapsing inward under negative respiratory vacuum pressure.",
    "Clinical Anatomy",
  ),
  f(
    "fact-lumbar-disc-daily-height-shrinkage",
    "spine-lumbar",
    "health_tip",
    "common",
    "You are approximately 1 to 2 centimeters taller when you wake up in the morning than when you go to bed; upright gravity expels fluid from your intervertebral spinal discs during the day, and they rehydrate osmotic fluid while lying flat at night.",
    "Spine",
  ),
  f(
    "fact-rotator-cuff-force-couple",
    "shoulders",
    "health_tip",
    "surprising",
    "The four tiny rotator cuff muscles (supraspinatus, infraspinatus, teres minor, subscapularis) work as a dynamic 'force couple' to continuously compress the humeral head into the shallow glenoid fossa, keeping your arm from dislocating during overhead throws.",
    "Journal of Shoulder and Elbow Surgery",
  ),
  f(
    "fact-wrist-carpal-tunnel-pressure",
    "wrists",
    "what_damages_it",
    "surprising",
    "Bending your wrist forward (flexion) or backward (extension) past 30 degrees increases interstitial fluid pressure inside the carpal tunnel from a resting 3 mmHg up to over 30 mmHg, compressing the median nerve and reducing microvascular blood flow.",
    "Journal of Orthopaedic Research",
  ),
  f(
    "fact-gluteus-maximus-bipedal-running",
    "hips",
    "record_breaker",
    "surprising",
    "The gluteus maximus is the single largest muscle in the human body; evolutionary biomechanics show it evolved to its massive size not for walking, but specifically to stabilize the upright trunk during bipedal endurance running.",
    "Nature",
  ),
  f(
    "fact-patella-mechanical-leverage",
    "knees",
    "record_breaker",
    "surprising",
    "Your kneecap (patella) is the largest sesamoid bone in the human body; it acts as a mechanical biological fulcrum, increasing the pulling leverage of your quadriceps tendon by up to 30% to 50% during leg extension.",
    "Journal of Biomechanics",
  ),
  f(
    "fact-achilles-tendon-elastic-energy",
    "ankles",
    "record_breaker",
    "mind_blowing",
    "Your Achilles tendon can withstand tensile loads exceeding 12 times your body weight during explosive jumping, storing and returning up to 35% of its elastic strain energy with every running stride like an organic pogo stick.",
    "Journal of Applied Physiology",
  ),
  f(
    "fact-plantar-fascia-windlass-mechanism",
    "feet",
    "health_tip",
    "surprising",
    "When you push off the ground while walking, your big toe bends upward (dorsiflexes), which tightens the plantar fascia over your metatarsal heads like a cable on a winch—known as the 'Windlass Mechanism'—locking your foot bones into a rigid lever.",
    "Foot & Ankle International",
  ),
  f(
    "fact-stratum-corneum-acid-mantle",
    "skin",
    "health_tip",
    "surprising",
    "Healthy human skin maintains an acidic surface pH between 4.5 and 5.5—known as the 'acid mantle'—which inhibits pathogenic Staphylococcus aureus bacteria while activating the enzymes that synthesize protective ceramide lipid barriers.",
    "Journal of Investigative Dermatology",
  ),
  f(
    "fact-osteocytes-piezoelectric-mechanosensing",
    "bones",
    "weird_wild",
    "almost_unknown",
    "Star-shaped bone cells called osteocytes are connected through millions of microscopic fluid channels; when you jump or lift weights, mechanical fluid shear stress creates piezoelectric micro-currents that instruct osteoblasts to build denser bone.",
    "Nature Reviews Endocrinology",
  ),
  f(
    "fact-diaphragm-vagus-nerve-lymphatic-pump",
    "lung-right",
    "health_tip",
    "mind_blowing",
    "Every deep diaphragmatic breath physically compresses the cisterna chyli in your abdomen, pumping upwards of 2 to 4 liters of immune-cell-packed lymphatic fluid through the thoracic duct into your central circulation daily.",
    "Journal of Anatomy",
  ),
  f(
    "fact-motor-unit-all-or-none-recruitment",
    "muscles",
    "health_tip",
    "almost_unknown",
    "When your brain activates a motor unit in a muscle, every single muscle fiber innervated by that motor neuron contracts at 100% maximum power or not at all (the 'all-or-none law'); to lift something heavier, your central nervous system simply recruits additional motor units.",
    "Guyton and Hall Textbook of Medical Physiology",
  ),
  f(
    "fact-digestion-left-side-sleep",
    "stomach",
    "health_tip",
    "surprising",
    "Sleeping on your left side prevents nighttime acid reflux: because your stomach naturally curves to the left, this posture keeps the junction between your food pipe and stomach elevated above acid levels, using gravity to keep acid down.",
    "The American Journal of Gastroenterology",
  ),
  f(
    "fact-gut-30-plants-weekly",
    "large-intestine",
    "health_tip",
    "almost_unknown",
    "People who eat 30 or more different plant foods weekly (including vegetables, fruits, lentils, nuts, seeds, and spices) have a significantly richer, more protective gut microbiome than those eating 10 or fewer.",
    "American Gut Project / mSystems",
  ),
  f(
    "fact-small-intestine-gentle-chewing",
    "small-intestine",
    "health_tip",
    "common",
    "Chewing each mouthful until it is completely liquid protects your small intestine's delicate lining (villi) by ensuring food arrives thoroughly mixed with digestive saliva enzymes, preventing unabsorbed sugars from causing cramps and gas.",
    "American Journal of Clinical Nutrition",
  ),
  f(
    "fact-kidney-hydration-straw-color",
    "kidneys",
    "health_tip",
    "common",
    "Your kidneys filter your entire 5-liter blood volume 40 times every 24 hours; checking that your urine looks like pale straw ensures you're giving them the steady water volume they need without over-diluting vital blood minerals.",
    "National Kidney Foundation (NKF)",
  ),
  f(
    "fact-liver-coffee-polyphenols",
    "liver",
    "health_tip",
    "surprising",
    "Drinking 2 to 3 cups of unsweetened filtered coffee daily provides powerful chlorogenic acid polyphenols that stop liver cells from depositing collagen scar tissue, lowering the risk of liver stiffness and fatty liver progression.",
    "World Journal of Hepatology / BMJ",
  ),
  f(
    "fact-frontal-lobe-glucose-willpower",
    "frontal-lobe",
    "weird_wild",
    "surprising",
    "Your frontal lobe weighs less than a pound but consumes over 20% of your body's total blood sugar, which is why making hard decisions when hungry makes you feel irritable and quick-tempered.",
    "Harvard Medical School",
  ),
  f(
    "fact-frontal-lobe-sleep-impulse",
    "frontal-lobe",
    "what_damages_it",
    "common",
    "Losing just two hours of sleep shuts down communication between your frontal lobe and emotional centers, making you 60% more reactive to daily stress and sugary food cravings.",
    "Nature Neuroscience",
  ),
  f(
    "fact-frontal-lobe-deep-work-blocks",
    "frontal-lobe",
    "health_tip",
    "mind_blowing",
    "Your prefrontal cortex can only maintain peak creative concentration for about 45 to 90 minutes before its neurotransmitter fuel temporarily runs low, meaning short walking breaks actually improve mental stamina.",
    "Stanford Medicine Neuroscience",
  ),
  f(
    "fact-temporal-lobe-language-speed",
    "temporal-lobe",
    "record_breaker",
    "mind_blowing",
    "Your temporal lobes process human speech sounds in less than 50 milliseconds—faster than the blink of an eye—instantly decoding accents, tone, and emotions before you even realize you've heard them.",
    "Journal of Neuroscience",
  ),
  f(
    "fact-temporal-lobe-music-memory",
    "temporal-lobe",
    "weird_wild",
    "surprising",
    "Musical memories are stored in a specialized pocket of the temporal lobe that stays preserved even in advanced memory loss, allowing people who forget words to still sing songs from their childhood.",
    "Brain: A Journal of Neurology",
  ),
  f(
    "fact-temporal-lobe-noise-hair-fatigue",
    "temporal-lobe",
    "what_damages_it",
    "common",
    "Listening to loud audio with earbuds without resting overworks the inner ear hair cells, causing the temporal lobe to artificially turn up its internal gain volume and generate a constant phantom ringing sound (tinnitus).",
    "American Speech-Language-Hearing Association (ASHA)",
  ),
  f(
    "fact-lung-right-three-lobes-surface",
    "lung-right",
    "weird_wild",
    "surprising",
    "Your right lung is broader and heavier than your left lung and is divided into three separate lobes (superior, middle, and inferior) because it doesn't need to leave room for your heart.",
    "Gray's Anatomy",
  ),
  f(
    "fact-lung-right-posture-air-trapping",
    "lung-right",
    "health_tip",
    "common",
    "Slouching forward while working at a desk compresses the lower lobe of your right lung, trapping up to 30% of stale air and forcing your neck muscles to work twice as hard to pull air in.",
    "American Thoracic Society",
  ),
  f(
    "fact-throat-larynx-swallow-valve",
    "throat",
    "record_breaker",
    "mind_blowing",
    "Your epiglottis (the leaf-shaped cartilage valve in your throat) snaps shut over your windpipe up to 2,000 times a day with robotic precision every time you swallow food, drink, or saliva.",
    "Cleveland Clinic Otolaryngology",
  ),
  f(
    "fact-throat-vocal-cord-vibration-speed",
    "throat",
    "weird_wild",
    "almost_unknown",
    "When you talk, your vocal cords in your larynx collide together 100 to 300 times every single second, cushioned only by a microscopic layer of fluid that requires steady water intake to prevent raspy voice fatigue.",
    "National Institute on Deafness (NIDCD)",
  ),
  f(
    "fact-bladder-nerve-stretch-signals",
    "bladder",
    "weird_wild",
    "surprising",
    "Your bladder walls send their first gentle 'you have to pee' nerve signal when only halfway full (around 200 ml); it doesn't send urgent alarm signals until reaching 400 to 500 ml.",
    "Mayo Clinic Urology",
  ),
  f(
    "fact-bladder-irritant-caffeine-acid",
    "bladder",
    "what_damages_it",
    "common",
    "Artificial sweeteners, spicy chili oil, and cold sodas contain chemical compounds that irritate sensitive bladder lining cells, making you feel the urge to pee twice as frequently even when your bladder is empty.",
    "Cleveland Clinic Urology",
  ),
  f(
    "fact-bladder-pelvic-floor-support",
    "bladder",
    "health_tip",
    "common",
    "Your bladder sits like a water balloon suspended on a woven hammock of pelvic floor muscles; practicing 10 daily pelvic floor squeezes (Kegels) prevents nighttime bathroom trips and coughing leaks.",
    "NHS Women's & Men's Health",
  ),
  f(
    "fact-spine-cervical-head-weight-angle",
    "spine-cervical",
    "record_breaker",
    "mind_blowing",
    "Your head weighs about 10 to 12 pounds when sitting upright, but tilting your neck forward at a 60-degree angle to read your phone increases the mechanical weight on your cervical vertebrae to 60 pounds.",
    "Surgical Technology International",
  ),
  f(
    "fact-spine-cervical-vertebral-arteries",
    "spine-cervical",
    "health_tip",
    "surprising",
    "Your seven neck vertebrae have unique bony holes (transverse foramina) on both sides that act as protective tunnels carrying the vertebral arteries directly into the back of your brain.",
    "Johns Hopkins Medicine",
  ),
  f(
    "fact-spine-thoracic-rib-cage-armor",
    "spine-thoracic",
    "weird_wild",
    "common",
    "Your 12 thoracic vertebrae are the only spinal bones connected directly to your ribs, forming an elastic bony cage that expands and contracts 20,000 times a day to protect your heart and lungs.",
    "Gray's Anatomy",
  ),
  f(
    "fact-spine-thoracic-desk-slump-breathing",
    "spine-thoracic",
    "what_damages_it",
    "surprising",
    "Sitting slumped in a rounded posture stiffens the small joints where your ribs meet your thoracic spine, reducing your chest's ability to expand and cutting your full breathing capacity by up to 20%.",
    "Journal of Physical Therapy Science",
  ),
  f(
    "fact-spine-thoracic-extension-foam-roll",
    "spine-thoracic",
    "health_tip",
    "common",
    "Gently arching your upper back over a foam roller for just 2 minutes every afternoon opens restricted rib joints and reverses the burning ache between your shoulder blades.",
    "American Physical Therapy Association (APTA)",
  ),
  f(
    "fact-spine-lumbar-disc-water-cushion",
    "spine-lumbar",
    "weird_wild",
    "mind_blowing",
    "The thick gelatinous discs between your five lumbar vertebrae are 80% water when you wake up in the morning, but daily standing pressure squeezes water out, making you up to half an inch shorter by bedtime.",
    "Spine Journal / NIH",
  ),
  f(
    "fact-spine-lumbar-sitting-vs-standing-load",
    "spine-lumbar",
    "what_damages_it",
    "surprising",
    "Slouching in an office chair places 40% to 90% more compressive load on your lower lumbar discs than standing tall, because your back muscles stop supporting your spine and dump your upper body weight onto your discs.",
    "European Spine Journal",
  ),
  f(
    "fact-spine-lumbar-walking-disc-pump",
    "spine-lumbar",
    "health_tip",
    "common",
    "Because spinal discs have zero direct blood supply, they rely entirely on the gentle up-and-down compression of daily walking to pump in fresh fluid and nutrients and flush out metabolic waste.",
    "Mayo Clinic Orthopedics",
  ),
  f(
    "fact-shoulders-ball-socket-shallow-freedom",
    "shoulders",
    "weird_wild",
    "surprising",
    "Your shoulder is the most mobile joint in your entire body, designed like a golf ball sitting on a shallow golf tee, allowing your arm to rotate in a full 360-degree circle.",
    "American Academy of Orthopaedic Surgeons (AAOS)",
  ),
  f(
    "fact-shoulders-rotator-cuff-overhead-pinching",
    "shoulders",
    "what_damages_it",
    "common",
    "Slumping your shoulders forward narrows the tiny subacromial space inside the shoulder joint by up to 50%, causing the upper arm bone to pinch your rotator cuff tendons every time you reach overhead.",
    "Journal of Shoulder and Elbow Surgery",
  ),
  f(
    "fact-shoulders-dead-hang-traction",
    "shoulders",
    "health_tip",
    "mind_blowing",
    "Hanging from an overhead pull-up bar for just 30 seconds uses gravity to naturally widen the shoulder joint space, remodeling the acromion bone and preventing painful shoulder impingement.",
    "Kirsch Orthopedic Shoulder Protocol",
  ),
  f(
    "fact-elbows-three-joints-in-one",
    "elbows",
    "weird_wild",
    "almost_unknown",
    "Your elbow isn't just a simple hinge; it is three separate joints enclosed in a single capsule that let you bend your arm, straighten it, and rotate your palm completely face-up and face-down.",
    "Gray's Anatomy",
  ),
  f(
    "fact-elbows-funny-bone-exposed-nerve",
    "elbows",
    "weird_wild",
    "common",
    "Your 'funny bone' isn't a bone at all—it is the ulnar nerve running through a bare skin-deep groove on the inside of your elbow with no muscle padding, which is why bumping it sends electric shocks to your pinky finger.",
    "Cleveland Clinic Neurological Institute",
  ),
  f(
    "fact-elbows-wrist-extensor-mouse-strain",
    "elbows",
    "what_damages_it",
    "surprising",
    "Tennis elbow pain on the outside of your elbow actually comes from the muscles in your hand and wrist; repeatedly lifting your fingers to click a flat computer mouse causes micro-tears in the elbow tendon.",
    "Lancet Rheumatology",
  ),
  f(
    "fact-wrists-eight-pebble-bones",
    "wrists",
    "weird_wild",
    "surprising",
    "Your wrist is formed by eight tiny, pebble-shaped carpal bones arranged in two tightly knit rows, gliding against one another with microscopic precision like a set of polished ball bearings.",
    "American Society for Surgery of the Hand",
  ),
  f(
    "fact-wrists-night-curling-nerve-pressure",
    "wrists",
    "what_damages_it",
    "common",
    "Curling your wrists inward while you sleep (the 'fetal tuck') triples the pressure inside the carpal tunnel, which is why carpal tunnel numbness and tingling almost always wake people up at 3 AM.",
    "Journal of Hand Surgery",
  ),
  f(
    "fact-hands-twenty-nine-bones-no-muscles",
    "hands",
    "weird_wild",
    "mind_blowing",
    "There are almost no muscles inside your fingers; the muscles that move your fingers are located in your forearm, pulling your finger bones through long, thin tendons like puppeteer strings.",
    "Harvard Health Publishing",
  ),
  f(
    "fact-hands-fingerprint-moisture-grip",
    "hands",
    "record_breaker",
    "surprising",
    "The microscopic ridges of your fingerprints channel moisture away and generate friction like car tire treads, allowing you to grip smooth, wet objects without them slipping from your fingers.",
    "Proceedings of the National Academy of Sciences (PNAS)",
  ),
  f(
    "fact-hips-ball-socket-two-ton-strength",
    "hips",
    "record_breaker",
    "mind_blowing",
    "Your hip joint is your body's largest ball-and-socket joint, supported by ligaments so thick and strong that they can support over two tons of mechanical force during running and jumping.",
    "Mayo Clinic Orthopedics",
  ),
  f(
    "fact-hips-glute-amnesia-sitting",
    "hips",
    "what_damages_it",
    "common",
    "Sitting on your buttock muscles for hours every day shuts off communication between your nervous system and your glute muscles (gluteal amnesia), forcing your lower back and hamstrings to overwork.",
    "British Journal of Sports Medicine",
  ),
  f(
    "fact-knees-largest-sesamoid-bone",
    "knees",
    "weird_wild",
    "surprising",
    "Your kneecap (patella) is the largest floating bone (sesamoid bone) in your body, acting as a natural lever that increases the pulling efficiency of your thigh quad muscles by up to 30%.",
    "Gray's Anatomy",
  ),
  f(
    "fact-knees-cartilage-no-blood-vessels",
    "knees",
    "health_tip",
    "mind_blowing",
    "The articular cartilage in your knees contains zero blood vessels and zero nerves; it can only absorb fresh joint fluid and oxygen when you walk, like a kitchen sponge soaking up water when squeezed and released.",
    "Osteoarthritis and Cartilage Journal",
  ),
  f(
    "fact-ankles-twenty-six-bones-foot",
    "ankles",
    "weird_wild",
    "surprising",
    "Your ankle and foot contain 26 bones, 33 joints, and over 100 ligaments and tendons, functioning together as both a flexible shock absorber when landing and a rigid lever when pushing off.",
    "American Podiatric Medical Association (APMA)",
  ),
  f(
    "fact-ankles-calf-vein-second-heart",
    "ankles",
    "record_breaker",
    "mind_blowing",
    "The soleus calf muscles right above your ankles are known as your 'second heart' because contracting them while walking squeezes deep leg veins, pumping pooled blood back up to your chest against gravity.",
    "Journal of Vascular Surgery",
  ),
  f(
    "fact-feet-two-hundred-thousand-nerves",
    "feet",
    "record_breaker",
    "surprising",
    "The soles of your feet contain over 200,000 nerve endings—the same density as your palms—telling your brain every millisecond about ground texture, slope, and balance so you don't fall over.",
    "Cleveland Clinic Podiatry",
  ),
  f(
    "fact-muscles-six-hundred-muscles-furnace",
    "muscles",
    "record_breaker",
    "mind_blowing",
    "You have over 600 skeletal muscles making up roughly 40% of your body weight; they are your body's primary metabolic furnace, burning up to 80% of dietary glucose and producing all resting body heat.",
    "Cell Metabolism",
  ),
  f(
    "fact-muscles-myokine-healing-chemicals",
    "muscles",
    "health_tip",
    "almost_unknown",
    "When your muscles contract during exercise, they release dozens of hormone-like proteins called myokines that travel through your bloodstream to reduce brain inflammation, improve mood, and strengthen bones.",
    "Nature Reviews Endocrinology",
  ),
];

export const FACTS: Fact[] = [...HARDCODED_FACTS, ...(generatedFactsJson as Fact[])];

// ━━━ Myths Busted ━━━
import { MYTHS } from "./myths";
export { MYTHS };

// ━━━ Micro Actions ━━━
export const MICRO_ACTIONS: MicroAction[] = [
  {
    id: "ma-brain",
    bodyPartId: "brain",
    action:
      "Close your eyes for 60 seconds and visualize your favorite place in detail — color, sound, smell. This engages your hippocampus and prefrontal cortex.",
    duration: "60 seconds",
  },
  {
    id: "ma-eyes",
    bodyPartId: "eyes",
    action:
      "Look at a point 20 feet away for 20 seconds. Then blink rapidly 10 times. This lubricates your eyes and relaxes the ciliary muscles.",
    duration: "30 seconds",
  },
  {
    id: "ma-ears",
    bodyPartId: "ears",
    action:
      "Cover both ears with your palms for 10 seconds, then release. Notice how sounds become more vivid — you've just recalibrated your auditory processing.",
    duration: "15 seconds",
  },
  {
    id: "ma-heart",
    bodyPartId: "heart",
    action:
      "Place your hand on your chest and breathe in for 4 counts, hold for 4, exhale for 6. This activates your vagus nerve and slows your heart.",
    duration: "30 seconds",
  },
  {
    id: "ma-lungs",
    bodyPartId: "lung-left",
    action:
      "Take a deep breath through your nose (4 seconds), hold (4 seconds), exhale slowly through pursed lips (8 seconds). One cycle improves oxygen exchange.",
    duration: "16 seconds",
  },
  {
    id: "ma-liver",
    bodyPartId: "liver",
    action:
      "Drink a full glass of water right now. Your liver uses water for almost every metabolic process.",
    duration: "15 seconds",
  },
  {
    id: "ma-stomach",
    bodyPartId: "stomach",
    action:
      "Massage your abdomen in a clockwise circle for 30 seconds. This follows the natural direction of digestion.",
    duration: "30 seconds",
  },
  {
    id: "ma-kidneys",
    bodyPartId: "kidneys",
    action:
      "Check the color of your last pee. If it was darker than pale straw, drink a glass of water now.",
    duration: "10 seconds",
  },
  {
    id: "ma-spine-c",
    bodyPartId: "spine-cervical",
    action:
      "Drop your chin to your chest, then slowly look up at the ceiling. Repeat 5 times to decompress your cervical vertebrae.",
    duration: "30 seconds",
  },
  {
    id: "ma-spine-l",
    bodyPartId: "spine-lumbar",
    action:
      "Stand up and reach for the ceiling, then fold forward and touch your toes (or as close as you can). Hold 10 seconds each.",
    duration: "30 seconds",
  },
  {
    id: "ma-shoulders",
    bodyPartId: "shoulders",
    action:
      "Shrug your shoulders to your ears, hold for 5 seconds, then let them drop. Feel the tension release. Repeat 3 times.",
    duration: "20 seconds",
  },
  {
    id: "ma-hands",
    bodyPartId: "hands",
    action:
      "Spread your fingers wide for 5 seconds, then make a tight fist for 5. Repeat 5 times to improve blood flow.",
    duration: "30 seconds",
  },
  {
    id: "ma-knees",
    bodyPartId: "knees",
    action:
      "While seated, straighten one leg and hold for 10 seconds. Switch. This activates your VMO muscle which stabilizes the kneecap.",
    duration: "25 seconds",
  },
  {
    id: "ma-feet",
    bodyPartId: "feet",
    action:
      "Roll a tennis ball under each foot for 30 seconds. This releases the plantar fascia and feels amazing.",
    duration: "60 seconds",
  },
  {
    id: "ma-skin",
    bodyPartId: "skin",
    action:
      "Pinch the skin on the back of your hand and see how fast it snaps back — this is the 'turgor test' for hydration.",
    duration: "5 seconds",
  },
];

// ━━━ Doctor Questions ━━━
export const DOCTOR_QUESTIONS: DoctorQuestion[] = [
  {
    id: "dq-brain",
    bodyPartId: "brain",
    question: "Should I be concerned about frequent headaches on one side of my head?",
  },
  {
    id: "dq-eyes",
    bodyPartId: "eyes",
    question: "I see occasional floaters — when should I worry about them?",
  },
  {
    id: "dq-ears",
    bodyPartId: "ears",
    question: "I sometimes hear ringing in a quiet room. Could this be tinnitus?",
  },
  {
    id: "dq-heart",
    bodyPartId: "heart",
    question: "I occasionally feel my heart skip a beat. Is this normal or should I get an ECG?",
  },
  {
    id: "dq-lungs",
    bodyPartId: "lung-left",
    question: "I sometimes get short of breath during mild exercise. What tests should I consider?",
  },
  {
    id: "dq-liver",
    bodyPartId: "liver",
    question: "What do my liver enzyme levels (ALT, AST) mean in my blood work?",
  },
  {
    id: "dq-stomach",
    bodyPartId: "stomach",
    question: "I get frequent heartburn after meals. Should I be tested for H. pylori?",
  },
  {
    id: "dq-kidneys",
    bodyPartId: "kidneys",
    question: "My urine sometimes looks foamy — could this indicate a kidney issue?",
  },
  {
    id: "dq-spine",
    bodyPartId: "spine-lumbar",
    question: "I have persistent lower back pain. When should I get imaging vs. just doing PT?",
  },
  {
    id: "dq-knees",
    bodyPartId: "knees",
    question: "My knee clicks when I walk upstairs but doesn't hurt. Should I worry?",
  },
  {
    id: "dq-skin",
    bodyPartId: "skin",
    question: "I have a mole that changed shape. What are the ABCDE signs I should check?",
  },
  {
    id: "dq-bones",
    bodyPartId: "bones",
    question: "At what age should I get a bone density scan, and what factors increase my risk?",
  },
];

// ━━━ Daily Insights (60 days of content) ━━━
import { DAILY_INSIGHTS } from "./insights";
export { DAILY_INSIGHTS };

// ━━━ Helper Functions ━━━

export function getDailyFact(): Fact {
  const daily = FACTS.filter((x) => x.rarity !== "common");
  const today = new Date();
  const idx =
    (today.getUTCFullYear() * 372 + today.getUTCMonth() * 31 + today.getUTCDate()) % daily.length;
  return daily[idx];
}

export function getDailyInsight(): DailyInsight {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000,
  );
  return DAILY_INSIGHTS[dayOfYear % DAILY_INSIGHTS.length];
}

export function getFactsFor(bodyPartId: string, category: Category): Fact[] {
  return FACTS.filter((f) => f.bodyPartId === bodyPartId && f.category === category);
}

export function getBodyPart(id: string): BodyPart | undefined {
  return BODY_PARTS.find((b) => b.id === id);
}

export function getMythsFor(bodyPartId: string): MythBusted[] {
  return MYTHS.filter((m) => m.bodyPartId === bodyPartId);
}

export function getMicroActionFor(bodyPartId: string): MicroAction | undefined {
  return MICRO_ACTIONS.find((a) => a.bodyPartId === bodyPartId);
}

export function getDoctorQuestionFor(bodyPartId: string): DoctorQuestion | undefined {
  return DOCTOR_QUESTIONS.find((q) => q.bodyPartId === bodyPartId);
}

export function getBodyPartsByRegion(region: BodyPart["region"]): BodyPart[] {
  return BODY_PARTS.filter((b) => b.region === region);
}

// ━━━ 10-Feature Expansion Placeholder Datasets ━━━

import { DISEASE_ENTRIES as DISEASES } from "./diseases";
export { DISEASES };

export const REMEDIES: RemedyEntry[] = [
  {
    id: "ginger-nausea",
    name: "Ginger Root Infusion",
    description: "Brewed fresh ginger root tea to alleviate digestive distress.",
    evidenceRating: "studied",
    evidenceDetails:
      "Clinical trials support ginger's efficacy in reducing pregnancy-related and chemotherapy-induced nausea by accelerating gastric emptying.",
    ailment: "Nausea & Indigestion",
    bodyPartId: "stomach",
  },
  {
    id: "turmeric-joints",
    name: "Turmeric & Black Pepper Paste",
    description: "Curcumin combined with piperine for active joint inflammation support.",
    evidenceRating: "studied",
    evidenceDetails:
      "Piperine increases curcumin bioavailability by up to 2000%, supporting its anti-inflammatory effects in osteoarthritis studies.",
    ailment: "Joint Stiffness",
    bodyPartId: "spine-lumbar",
  },
  {
    id: "peppermint-oil-ibs",
    name: "Peppermint Oil Extract",
    description:
      "Enteric-coated peppermint oil capsules or strong brewed peppermint tea to soothe the stomach and reduce gas.",
    evidenceRating: "studied",
    evidenceDetails:
      "PubMed-indexed gastroenterology studies demonstrate that the menthol in peppermint acts as a natural antispasmodic. It helps relax the smooth muscles of the digestive tract, which significantly reduces abdominal pain, cramping, and bloating in IBS patients.",
    ailment: "Bloating & Irritable Bowel Syndrome (IBS)",
    bodyPartId: "stomach",
  },
  {
    id: "honey-cough-throat",
    name: "Honey & Warm Water Soother",
    description:
      "A simple spoonful of honey, taken alone or mixed into warm water, to coat the throat and calm coughing fits.",
    evidenceRating: "studied",
    evidenceDetails:
      "Clinical trials show that a single dose of honey can significantly reduce mucus secretion and nighttime coughing in children and adults. Studies often find it performs as well as, or better than, common over-the-counter cough suppressants like dextromethorphan. (Note: Never give honey to infants under 1 year old due to botulism risk).",
    ailment: "Cough & Sore Throat",
    bodyPartId: "throat",
  },
  {
    id: "chamomile-tea-sleep",
    name: "Chamomile Flower Infusion",
    description:
      "Steeped dried chamomile flowers taken 30 to 45 minutes before bed to promote physical and mental relaxation.",
    evidenceRating: "studied",
    evidenceDetails:
      "Chamomile contains an antioxidant called apigenin. Scientific evidence shows that apigenin binds to specific receptors in the brain that decrease anxiety and initiate sleep, with controlled trials showing improvements in sleep quality and a reduction in wakefulness.",
    ailment: "Mild Anxiety & Sleep Quality",
    bodyPartId: "brain",
  },
  {
    id: "garlic-immune-bp",
    name: "Crushed Raw Garlic",
    description:
      "Eating a clove of raw, crushed garlic (often swallowed with water, olive oil, or honey to make the strong taste bearable).",
    evidenceRating: "studied",
    evidenceDetails:
      "When garlic is crushed or chopped, it releases an active compound called allicin. Studies suggest that allicin helps blood vessels relax (supporting healthy blood pressure) and boosts the disease-fighting response of white blood cells in your body when you encounter viruses.",
    ailment: "Immune Support and Mild High Blood Pressure",
    bodyPartId: "heart",
  },
  {
    id: "ashwagandha-anxiety",
    name: "Ashwagandha Root Extract (KSM-66)",
    description:
      "A daily adaptogenic herbal supplement taken to lower stress hormones and combat the chronic burnout associated with constant connectivity and heavy academic or project workloads.",
    evidenceRating: "studied",
    evidenceDetails:
      'Clinical trials in the Indian Journal of Psychological Medicine demonstrate that Ashwagandha root extract significantly reduces serum cortisol levels. It works by regulating the hypothalamic-pituitary-adrenal (HPA) axis, easing the nervous system out of "fight or flight" mode and improving resistance to daily stress.',
    ailment: 'Stress, Burnout & "Always-On" Anxiety',
    bodyPartId: "brain",
    practicalContext:
      "High demands and constant digital connectivity often lead to chronic stress, mental fatigue, and elevated nervous system strain.",
  },
  {
    id: "tart-cherry-insomnia",
    name: "Tart Cherry Juice",
    description:
      "Drinking a small glass of unsweetened, 100% tart cherry juice about an hour before going to bed.",
    evidenceRating: "studied",
    evidenceDetails:
      "Gadget screens emit blue light that tricks the brain into thinking it is still daytime, preventing it from producing sleep hormones. Tart cherries are one of the rare natural, food-based sources of melatonin. Drinking the juice naturally boosts your melatonin levels, helping you fall asleep faster and stay asleep longer, even if your internal clock is confused by screens.",
    ailment: 'Screen-Induced Insomnia & "Revenge Bedtime Procrastination"',
    bodyPartId: "brain",
    practicalContext:
      "Extended daily screen exposure and nighttime device use disrupt natural melatonin release and delay sleep onset.",
  },
  {
    id: "bilberry-eye-strain",
    name: "Bilberry Infusion",
    description:
      "A warm tea or daily extract made from bilberries (a dark, European cousin of the common blueberry).",
    evidenceRating: "studied",
    evidenceDetails:
      "Bilberries are packed with protective plant compounds called anthocyanins. Science shows these compounds specifically protect the retina and improve blood circulation in the tiny blood vessels of the eye. This reduces the physical fatigue, blurred vision, and dryness that comes from staring at pixels all day.",
    ailment: "Digital Eye Strain & Screen Fatigue",
    bodyPartId: "eyes",
    practicalContext:
      "Prolonged screen exposure reduces blink rates and strains delicate eye muscles, resulting in ocular fatigue.",
  },
  {
    id: "magnesium-tech-neck",
    name: "Topical Magnesium (Epsom Salt) & Heat Therapy",
    description:
      "A warm bath with dissolved magnesium sulfate (Epsom salts), or a warm magnesium oil compress applied directly to the neck and trapezius muscles.",
    evidenceRating: "studied",
    evidenceDetails:
      "Poor posture over keyboards and phones restricts blood flow and causes muscle spasms. Clinical evidence supports that heat induces vasodilation (widening of blood vessels), while transdermal magnesium acts as a natural calcium channel blocker. This combination physically forces contracted muscle fibers to release and relax, alleviating tension headaches and neck stiffness.",
    ailment: '"Tech Neck" & Postural Muscle Tension',
    bodyPartId: "spine-cervical",
    practicalContext:
      "Forward-head posture from laptops and mobile devices creates sustained muscular tension across the neck and shoulders.",
  },
  {
    id: "lemon-balm-nervous-stomach",
    name: "Lemon Balm Tea",
    description:
      "A mild, lemon-scented tea brewed from the leaves of the lemon balm plant (a calming herb in the mint family).",
    evidenceRating: "studied",
    evidenceDetails:
      "Lemon balm contains active compounds like rosmarinic acid. Studies prove it has a dual-action effect: it increases calming chemicals in the brain to reduce anxiety, while simultaneously relaxing the smooth muscles of the digestive tract. This physically stops the painful stomach spasms and bloating that happen when you are highly stressed.",
    ailment: 'The "Nervous Stomach" & Stress-Induced Bloating',
    bodyPartId: "stomach",
    practicalContext:
      "Because the brain and gut share direct nerve pathways, emotional stress frequently manifests as stomach cramping, bloating, and digestive discomfort.",
  },
  {
    id: "tart-cherry-gout",
    name: "Tart Cherry Juice Concentrate",
    description:
      "A small daily serving of 100% tart cherry juice (Montmorency cherries) to reduce uric acid and inflammation.",
    evidenceRating: "studied",
    evidenceDetails:
      "Clinical research indicates that the high concentration of anthocyanins in tart cherries powerfully clears uric acid from the bloodstream (preventing gout flare-ups) and accelerates muscle recovery after intense exercise by lowering inflammatory markers.",
    ailment: "Muscle Recovery & Gout",
    bodyPartId: "muscles",
  },
  {
    id: "green-tea-compress",
    name: "Warm Green Tea Compress",
    description:
      "Warm, steeped green tea bags applied over closed eyelids for 10-15 minutes to soothe eyes irritated by long hours of debugging, reviewing core computing concepts, or continuous screen exposure.",
    evidenceRating: "studied",
    evidenceDetails:
      "The warmth helps unclog the meibomian glands (which stop secreting oil properly when blink rates drop during intense screen focus). Furthermore, ophthalmological studies show that the high concentration of EGCG (epigallocatechin gallate) in green tea provides powerful anti-inflammatory properties that reduce ocular surface swelling and redness.",
    ailment: "Digital Eye Strain & Screen Fatigue",
    bodyPartId: "eyes",
    practicalContext:
      "Long hours of computer and desk work reduce blinking, causing ocular dryness and surface irritation.",
  },
  {
    id: "bacopa-monnieri",
    name: "Bacopa Monnieri (Brahmi)",
    description:
      "An herbal nootropic traditionally used in Ayurvedic medicine, taken daily to improve focus and retain complex information during intense algorithmic problem-solving or deep-study sessions.",
    evidenceRating: "studied",
    evidenceDetails:
      "Multiple randomized, double-blind, placebo-controlled trials published in psychopharmacology journals confirm that Bacopa Monnieri improves spatial memory, working memory, and rapid visual information processing. It achieves this by promoting the growth of nerve endings (dendritic branching), enhancing neural communication.",
    ailment: "Brain Fog & Cognitive Fatigue",
    bodyPartId: "brain",
    practicalContext:
      "Intense work sessions and continuous information flow often trigger mental exhaustion and temporary brain fog.",
  },
  {
    id: "lavender-anxiety",
    name: "Lavender Essential Oil Inhalation",
    description:
      "Inhaling diffused lavender essential oil or applying it to pulse points before sleeping.",
    evidenceRating: "studied",
    evidenceDetails:
      "Clinical studies demonstrate that lavender oil inhalation interacts with the GABA neurotransmitter system in the brain to reduce heart rate, calm the autonomic nervous system, and improve sleep quality.",
    ailment: "Stress, Sleep Disruptions & Mild Anxiety",
    bodyPartId: "brain",
    practicalContext:
      "A calming addition to evening wind-down routines to help transition into restful sleep.",
  },
  {
    id: "cranberry-uti",
    name: "Cranberry Extract (PACs)",
    description: "Consuming concentrated cranberry extract containing Proanthocyanidins (PACs).",
    evidenceRating: "studied",
    evidenceDetails:
      "Clinical trials show that A-type proanthocyanidins in cranberries physically block E. coli bacteria from adhering to the uroepithelial cells lining the bladder wall, helping prevent recurrent urinary tract infections.",
    ailment: "Recurrent Urinary Tract Infections (UTIs)",
    bodyPartId: "bladder",
  },
  {
    id: "colloidal-oatmeal-itch",
    name: "Colloidal Oatmeal Bath",
    description: "Soaking in a lukewarm bath with finely ground oats suspended in the water.",
    evidenceRating: "studied",
    evidenceDetails:
      "In vitro and clinical research confirms that oats contain avenanthramides—powerful antioxidants that reduce inflammation, soothe dry skin, and significantly inhibit histamine release to stop itching.",
    ailment: "Eczema, Dry Skin & Severe Itching",
    bodyPartId: "skin",
  },
  {
    id: "fennel-seeds-bloating",
    name: "Fennel Seed Chew / Infusion",
    description:
      "Chewing a teaspoon of whole fennel seeds after meals or brewing them into a warm herbal tea.",
    evidenceRating: "traditional",
    evidenceDetails:
      "Fennel has been used for centuries in Eastern medicine to treat stomach distress. It contains anethole, an organic compound that relaxes gastrointestinal tract muscles to alleviate trapped gas and bloating.",
    ailment: "Trapped Gas, Bloating & Indigestion",
    bodyPartId: "small-intestine",
  },
  {
    id: "eucalyptus-sinus",
    name: "Eucalyptus Oil Steam Inhalation",
    description:
      "Adding a few drops of pure eucalyptus oil to a bowl of steaming water, covering the head with a towel, and inhaling the steam.",
    evidenceRating: "traditional",
    evidenceDetails:
      "Eucalyptus oil contains cineole (eucalyptol), which has been traditionally used to relieve nasal congestion. It acts as a mild decongestant and anti-inflammatory agent, helping thin mucus in the sinuses.",
    ailment: "Nasal Congestion & Sinus Pressure",
    bodyPartId: "sinuses",
  },
  {
    id: "acv-reflux",
    name: "Diluted Apple Cider Vinegar (ACV)",
    description:
      "Drinking one tablespoon of raw, unfiltered apple cider vinegar diluted in a glass of water before meals.",
    evidenceRating: "anecdotal",
    evidenceDetails:
      "While highly popular online, there is no robust clinical evidence showing ACV cures acid reflux or GERD. Some users claim it balances stomach acid, but drinking highly acidic vinegar can irritate the esophagus and damage tooth enamel.",
    ailment: "Acid Reflux & Heartburn",
    bodyPartId: "stomach",
    practicalContext:
      "Widely promoted on social media as a digestive cure-all, but lacking robust clinical support.",
  },
  {
    id: "cold-compress-migraine",
    name: "Cold Gel Compress",
    description:
      "Applying a cold gel pack or chilled cloth to the forehead or back of the neck during a headache.",
    evidenceRating: "anecdotal",
    evidenceDetails:
      "Many migraine sufferers report immediate soothing relief from cold packs. It is believed that the cold constricts local blood vessels and tempers down pain signals, though it does not resolve the underlying neurological cause of the migraine.",
    ailment: "Migraines & Tension Headaches",
    bodyPartId: "brain",
  },
  {
    id: "activated-charcoal-detox",
    name: "Activated Charcoal Drinks",
    description:
      "Consuming black activated charcoal powders or capsules daily as a wellness juice 'detox.'",
    evidenceRating: "unproven",
    evidenceDetails:
      "Activated charcoal is used in emergency medicine to bind to acute poisons in the stomach. However, consuming it for daily 'detoxification' is medically unproven and dangerous, as it binds to beneficial nutrients and blocks the absorption of prescription medications.",
    ailment: "Systemic Toxin Removal (Detoxification)",
    bodyPartId: "liver",
    practicalContext:
      "Marketed in viral wellness trends as a detox drink, though lacking clinical benefit for normal liver function.",
  },
  {
    id: "ear-candling",
    name: "Ear Candling / Coning",
    description:
      "Placing a hollow, lit candle into the ear canal to create a supposed 'vacuum' that draws out wax and toxins.",
    evidenceRating: "unproven",
    evidenceDetails:
      "Numerous clinical trials and statements by the FDA and ENT societies confirm that ear candling does not produce a vacuum and does not remove earwax. The soot inside the candle afterward is simply burnt candle wax, and the practice frequently causes burns and eardrum perforations.",
    ailment: "Excess Earwax & Hearing Congestion",
    bodyPartId: "ears",
  },
  {
    id: "amber-teething-necklace",
    name: "Baltic Amber Necklaces",
    description:
      "Wearing beads of Baltic amber close to the skin, supposedly releasing succinic acid to ease teething pain.",
    evidenceRating: "unproven",
    evidenceDetails:
      "There is no scientific proof that body heat triggers the release of succinic acid from amber, or that it is absorbed through the skin to act as a painkiller. Pediatric societies warn that these necklaces pose serious choking and strangulation hazards for infants.",
    ailment: "Teething Pain & Jaw Discomfort",
    bodyPartId: "jaw",
  },
  {
    id: "capsaicin-muscle",
    name: "Capsaicin Topical Cream",
    description:
      "Applying a thin layer of cream containing capsaicin (extracted from chili peppers) directly to sore muscles or the lower back.",
    evidenceRating: "studied",
    evidenceDetails:
      "Clinical trials demonstrate that capsaicin depletes substance P—a neurotransmitter responsible for sending pain signals to the brain—resulting in a significant reduction in chronic musculoskeletal and neuropathic pain.",
    ailment: "Chronic Muscle Soreness & Lower Back Pain",
    bodyPartId: "muscles",
  },
  {
    id: "ginkgo-memory",
    name: "Ginkgo Biloba Extract",
    description:
      "A standardized extract supplement made from the leaves of the ancient Ginkgo tree.",
    evidenceRating: "traditional",
    evidenceDetails:
      "Ginkgo biloba has been used in Traditional Chinese Medicine for thousands of years to improve blood flow to the brain and enhance memory. While modern clinical trials show mixed results for cognitive decline, its traditional reputation for sharpening focus remains strong.",
    ailment: "Brain Fog & Cognitive Enhancement",
    bodyPartId: "frontal-lobe",
    practicalContext:
      "A traditional herbal preparation used during intensive study periods to support mental alertness.",
  },
  {
    id: "ginger-ale-nausea",
    name: "Commercial Ginger Ale Carbonated Drink",
    description:
      "Drinking carbonated ginger ale soda to settle an upset stomach or relieve nausea.",
    evidenceRating: "anecdotal",
    evidenceDetails:
      "Many people swear by ginger ale for stomach issues, but most commercial sodas contain artificial ginger flavoring, high-fructose corn syrup, and carbonation, which can actually worsen bloating and acid reflux. Real ginger root is required for therapeutic effects.",
    ailment: "Nausea & Indigestion",
    bodyPartId: "stomach",
    practicalContext:
      "A popular comfort drink, though commercial varieties generally rely on artificial flavor and high sugar rather than real therapeutic ginger.",
  },
  {
    id: "alkaline-water-ph",
    name: "Alkaline Water (High pH)",
    description:
      "Drinking water with a pH level above 8.0 to neutralize body acid and prevent diseases.",
    evidenceRating: "unproven",
    evidenceDetails:
      "There is no scientific proof that alkaline water alters the body's internal pH balance. The stomach's powerful hydrochloric acid immediately neutralizes alkaline liquids upon consumption, and the kidneys and lungs naturally maintain a tight blood pH range (7.35–7.45) regardless of diet.",
    ailment: "Systemic Acidity & Metabolic Detox",
    bodyPartId: "stomach",
    practicalContext:
      "Promoted by marketing campaigns as a health enhancer, but gastric acid quickly neutralizes alkalinity upon drinking.",
  },
  {
    id: "chamomile-insomnia",
    name: "Chamomile Tea Brew",
    description:
      "Brewing dried chamomile flowers in hot water before sleep to reduce anxiety and promote rest.",
    evidenceRating: "studied",
    evidenceDetails:
      "Chamomile contains apigenin, an antioxidant that binds to specific receptors in the brain that may decrease anxiety and initiate sleep, as supported by several clinical trials.",
    ailment: "Insomnia & Sleeplessness",
    bodyPartId: "brain",
    practicalContext:
      "An accessible evening tea that gently encourages relaxation and eases nighttime restlessness.",
  },
  {
    id: "deglycyrrhizinated-licorice-dgl",
    name: "Deglycyrrhizinated Licorice (DGL) Chewable Wafers",
    description:
      "Chewing standardized DGL licorice root wafers 20 minutes before meals to stimulate natural protective mucus production in the stomach.",
    evidenceRating: "studied",
    evidenceDetails:
      "Systematic clinical trials demonstrate that DGL promotes gastric goblet cell mucus secretion and microvascular blood flow to the mucosal barrier, relieving dyspepsia and heartburn without elevating systemic blood pressure (glycyrrhizin removed).",
    ailment: "Gastric Irritation & Dyspepsia",
    bodyPartId: "stomach",
    practicalContext:
      "A supportive botanical preparation taken prior to meals to help soothe gastric sensitivity.",
  },
  {
    id: "menthol-chest-vapor-rub",
    name: "Topical Camphor & Menthol Ointment (Vapor Rub)",
    description:
      "Applying a topical menthol and camphor ointment to the chest and throat to emit cooling aromatic vapors before sleep.",
    evidenceRating: "studied",
    evidenceDetails:
      "Randomized controlled pediatric and adult trials confirm inhaled menthol vapors stimulate upper airway TRPM8 cold-sensing receptors, providing a pronounced subjective sensation of open nasal airflow and decreasing nighttime cough reflex frequency.",
    ailment: "Nighttime Cough & Perceived Airway Resistance",
    bodyPartId: "lung-left",
    practicalContext:
      "A widely used topical ointment that stimulates cold receptors in the nasal passage, creating a cooling sensation of clearer airflow.",
  },
  {
    id: "valerian-root-infusion",
    name: "Standardized Valerian Root Extract (Valeriana officinalis)",
    description:
      "Steeping dried valerian root or taking standardized extract 30 to 60 minutes before bedtime to support natural sleep onset.",
    evidenceRating: "studied",
    evidenceDetails:
      "Systematic reviews and meta-analyses show valerenic acid acts as an allosteric modulator of inhibitory GABA-A receptors, modestly decreasing sleep latency (time to fall asleep) without the cognitive sedation hangover of prescription hypnotics.",
    ailment: "Sleep Latency & Pre-Sleep Restlessness",
    bodyPartId: "brain",
    practicalContext:
      "A traditional botanical preparation used before bedtime to help quiet nervous tension and support sleep onset.",
  },
  {
    id: "bengay-methyl-salicylate",
    name: "Topical Methyl Salicylate & Menthol Rub",
    description:
      "Massaging a topical counter-irritant cream into sore, stiff skeletal muscles following strenuous physical exertion.",
    evidenceRating: "studied",
    evidenceDetails:
      "Operates via the 'Gate Control Theory' of neurophysiology: topical menthol and methyl salicylate activate cutaneous thermal receptors (TRPM8 and TRPV1), effectively suppressing nociceptive pain signals transmitted by unmyelinated C-fibers at the spinal dorsal horn.",
    ailment: "Delayed Onset Muscle Soreness (DOMS)",
    bodyPartId: "muscles",
    practicalContext:
      "A widely used counter-irritant cream that produces warm and cooling sensory inputs to ease post-exercise muscle soreness.",
  },
  {
    id: "oral-rehydration-salts-who",
    name: "WHO Standard Formula Oral Rehydration Salts (ORS)",
    description:
      "Dissolving a precise physiological ratio of sodium chloride, anhydrous glucose, potassium chloride, and trisodium citrate in 1 liter of clean water.",
    evidenceRating: "studied",
    evidenceDetails:
      "Gold-standard WHO Tier 1 intervention utilizing the intestinal sodium-glucose cotransporter (SGLT-1). Active co-transport of sodium and glucose across the intestinal lumen pulls water osmotically into mesenteric blood vessels, reversing severe dehydration even during active gastrointestinal infection.",
    ailment: "Acute Diarrheal Dehydration & Electrolyte Depletion",
    bodyPartId: "small-intestine",
    practicalContext:
      "The WHO-standardized electrolyte solution that utilizes intestinal sodium-glucose transporters to rapidly restore hydration.",
  },
  {
    id: "baking-soda-mouth-rinse",
    name: "Sodium Bicarbonate Oral Neutralizing Rinse",
    description:
      "Swishing half a teaspoon of food-grade baking soda in 1 cup of warm water immediately after acid reflux or vomiting, without brushing teeth.",
    evidenceRating: "studied",
    evidenceDetails:
      "Dental trials confirm an alkaline sodium bicarbonate rinse rapidly neutralizes low-pH gastric hydrochloric acid in the oral cavity. Brushing immediately after acid exposure causes mechanical loss of demineralized enamel; bicarbonate rinsing neutralizes acid safely and protects dentin.",
    ailment: "Enamel Acid Erosion Post-Reflux/Vomiting",
    bodyPartId: "jaw",
    practicalContext:
      "A simple oral rinse that neutralizes acidic gastric residue, protecting dental enamel without abrasive brushing.",
  },
  {
    id: "witch-hazel-ice-pads",
    name: "Cold Witch Hazel & Aloe Topical Compress",
    description:
      "Applying chilled pads infused with Hamamelis virginiana and pure aloe vera topically to relieve acute perineal or hemorrhoidal discomfort.",
    evidenceRating: "traditional",
    evidenceDetails:
      "Rich in astringent gallotannins that precipitate superficial cell membrane proteins, inducing localized vasoconstriction, soothing edema, and providing rapid thermal vasoconstriction to relieve burning discomfort.",
    ailment: "Postpartum Perineal Soreness & External Hemorrhoid Flares",
    bodyPartId: "large-intestine",
    practicalContext:
      "A soothing topical compress combining astringent witch hazel and aloe to relieve localized swelling and tenderness.",
  },
  {
    id: "mustard-poultice-chest",
    name: "Traditional Mustard Seed Poultice (Sinapism)",
    description:
      "Applying a warm paste of crushed ground mustard seed and flour directly to the chest wall to treat deep bronchial colds.",
    evidenceRating: "unproven",
    evidenceDetails:
      "Releases volatile allyl isothiocyanate, which causes prominent dermal vasodilation and localized redness (counter-irritation). However, clinical trials show no internal pulmonary decongestion, and prolonged direct contact frequently causes severe second-degree chemical skin blisters.",
    ailment: "Deep Bronchial Congestion",
    bodyPartId: "lung-right",
    practicalContext:
      "A traditional folk remedy that produces skin irritation and warmth without providing proven airway clearance.",
  },
  {
    id: "hydrocolloid-acne-patch",
    name: "Sterile Hydrocolloid Drainage Patches",
    description:
      "Applying a thin, sterile hydrocolloid polymer sticker over an active whitehead or inflammatory papule overnight.",
    evidenceRating: "studied",
    evidenceDetails:
      "Dermatological wound healing studies confirm hydrocolloid dressings absorb inflammatory purulent exudate through capillary action, sustain an optimal moist healing matrix, and establish a physical barrier that prevents habitual skin picking and secondary bacterial contamination.",
    ailment: "Inflammatory Pustular Acne & Skin Picking",
    bodyPartId: "skin",
    practicalContext:
      "Protective hydrocolloid patches that absorb fluid while physically preventing friction and subconscious skin picking.",
  },
  {
    id: "epsom-foot-soak",
    name: "Warm Magnesium Sulfate (Epsom Salt) Foot Soak",
    description:
      "Submerging tired, aching feet in a warm water basin with dissolved magnesium sulfate crystals for 15 to 20 minutes.",
    evidenceRating: "anecdotal",
    evidenceDetails:
      "Warm foot immersion stimulates cutaneous vasodilation and muscle relaxation, relieving plantar fascial strain. However, rigorous clinical evidence for transdermal magnesium absorption through thick plantar stratum corneum is lacking; therapeutic relief is primarily driven by hydrostatic thermal therapy.",
    ailment: "Plantar Foot Fatigue & Aching Heels",
    bodyPartId: "feet",
    practicalContext:
      "A comforting warm foot soak that eases muscular tension and arch fatigue through hydrostatic thermal relaxation.",
  },
  {
    id: "psyllium-husk-fiber",
    name: "Psyllium Husk Soluble Fiber",
    description:
      "Dissolving one tablespoon of whole psyllium husk powder in a full glass of water, consumed once or twice daily followed by another glass of water.",
    evidenceRating: "studied",
    evidenceDetails:
      "Gold-standard Cochrane and American College of Gastroenterology reviews show psyllium acts as a bulk-forming soluble fiber. In the bowel, its mucilage absorbs water to create a soft gel matrix, significantly improving stool consistency, regulating bowel motility, and binding intestinal bile acids to lower LDL cholesterol.",
    ailment: "Chronic Constipation & Irregular Bowel Habits",
    bodyPartId: "large-intestine",
    practicalContext:
      "A widely studied plant fiber that absorbs water in the gut to ease bowel movements and support metabolic health.",
  },
  {
    id: "saline-nasal-irrigation",
    name: "Buffered Saline Nasal Irrigation",
    description:
      "Flushing the nasal passages with a distilled or boiled sterile saline solution using a nasal rinse bottle or neti pot.",
    evidenceRating: "studied",
    evidenceDetails:
      "Clinical otolaryngology guidelines confirm that isotonic or mild hypertonic saline physically rinses thick mucus, crusted debris, airborne allergens, and inflammatory cytokines from the nasal mucosa while stimulating natural microscopic ciliary beat frequency.",
    ailment: "Allergic Rhinitis & Sinus Congestion",
    bodyPartId: "sinuses",
    practicalContext:
      "A proven drug-free nasal wash that clears dust, allergens, and sticky mucus using sterile salt water.",
  },
  {
    id: "elderberry-extract",
    name: "Standardized Black Elderberry Extract (Sambucus nigra)",
    description:
      "Taking standardized elderberry syrup or extract at the very first onset of seasonal viral symptoms.",
    evidenceRating: "studied",
    evidenceDetails:
      "Randomized controlled clinical trials show elderberry flavonoids (specifically anthocyanins) inhibit viral hemagglutinin and neuraminidase enzymes in laboratory models. In human trials, early administration reduced upper respiratory viral illness duration by an average of 2 to 4 days compared to placebo.",
    ailment: "Early Viral Cold & Flu Symptoms",
    bodyPartId: "throat",
    practicalContext:
      "A berry-derived botanical syrup taken during the first 48 hours of illness to support natural immune defense.",
  },
  {
    id: "clove-oil-eugenol",
    name: "Diluted Clove Essential Oil (Eugenol)",
    description:
      "Dabbing a tiny drop of clove oil diluted in a carrier oil (such as olive oil) onto a clean cotton swab and gently pressing it against an aching tooth or gum.",
    evidenceRating: "studied",
    evidenceDetails:
      "Dental pharmacology trials confirm eugenol—the primary compound in clove oil—acts as a natural topical analgesic and antiseptic. It reversibly inhibits voltage-gated sodium channels in dental nerve fibers, providing rapid temporary numbing relief while waiting for a dentist visit.",
    ailment: "Acute Toothache & Local Gum Soreness",
    bodyPartId: "jaw",
    practicalContext:
      "A concentrated botanical oil used as a short-term numbing agent for temporary dental toothache relief.",
  },
  {
    id: "warm-salt-water-gargle",
    name: "Warm Salt Water Oral Gargle",
    description:
      "Dissolving half a teaspoon of plain salt in one cup of warm water, gargling deep in the throat for 30 seconds, and spitting it out.",
    evidenceRating: "studied",
    evidenceDetails:
      "Clinical trials and medical guidelines confirm that mild hypertonic saline gargling creates an osmotic gradient that pulls excess inflammatory fluid out of swollen throat tissues, rapidly easing painful edema while physically washing away viral particles and bacterial biofilms.",
    ailment: "Acute Pharyngitis & Swollen Sore Throat",
    bodyPartId: "throat",
    practicalContext:
      "An accessible kitchen staple gargle that draws fluid out of puffy throat tissue to reduce swallowing pain.",
  },
  {
    id: "fenugreek-seed-water",
    name: "Soaked Fenugreek Seed Infusion",
    description:
      "Soaking one tablespoon of whole fenugreek seeds in water overnight, then drinking the water and chewing the softened seeds in the morning.",
    evidenceRating: "studied",
    evidenceDetails:
      "Clinical nutrition trials show fenugreek seeds are rich in 4-hydroxyisoleucine and galactomannan soluble fiber. These compounds slow carbohydrate breakdown and gastric emptying, blunting rapid post-meal blood sugar spikes and modestly improving insulin sensitivity in type 2 diabetes management.",
    ailment: "Post-Meal Blood Sugar Spikes & Metabolic Support",
    bodyPartId: "stomach",
    practicalContext:
      "A traditional seed soak that slows carbohydrate absorption and helps stabilize post-meal glucose.",
  },
  {
    id: "aloe-vera-topical-gel",
    name: "Pure Aloe Vera Leaf Gel",
    description:
      "Applying fresh or 100% pure bottled aloe vera inner leaf gel directly onto pink, sun-exposed skin or minor first-degree thermal burns.",
    evidenceRating: "studied",
    evidenceDetails:
      "Dermatological reviews show aloe vera gel contains acemannan complex polysaccharides, bradykininase, and glucomannan. These natural compounds stimulate microvascular circulation, boost collagen synthesis in fibroblasts, and maintain skin barrier hydration to accelerate superficial skin healing.",
    ailment: "Mild First-Degree Sunburn & Surface Skin Redness",
    bodyPartId: "skin",
    practicalContext:
      "A soothing botanical gel that cools irritated skin and accelerates cellular barrier repair after sun exposure.",
  },
  {
    id: "zinc-acetate-lozenges",
    name: "Ionic Zinc Acetate / Gluconate Lozenges",
    description:
      "Slowly dissolving one zinc lozenge (releasing 10 to 15 mg of elemental ionic zinc) in the mouth every 2 to 3 hours during the first 24 hours of a cold.",
    evidenceRating: "studied",
    evidenceDetails:
      "Cochrane meta-analyses confirm that free ionic zinc (Zn2+) released in the oropharynx binds directly to rhinovirus surface capsid proteins. This blocks viral adhesion to ICAM-1 receptors on human nasal and throat epithelial cells, shortening cold duration by nearly 33% when started within 24 hours of symptom onset.",
    ailment: "Acute Common Cold Duration",
    bodyPartId: "throat",
    practicalContext:
      "Dissolvable oral lozenges that deliver free ionic zinc directly to the back of the throat to shorten a cold.",
  },
  {
    id: "kava-kava-root",
    name: "Standardized Kava Root Brew (Piper methysticum)",
    description:
      "Drinking a traditionally prepared aqueous brew or standardized herbal extract of South Pacific kava kava root.",
    evidenceRating: "traditional",
    evidenceDetails:
      "Psychopharmacology trials show kavalactones cross the blood-brain barrier to modulate GABA-A receptors, reduce noradrenaline reuptake, and block voltage-gated sodium channels. This produces noticeable physical and mental relaxation without significant cognitive sedation, though excessive intake or poor-quality solvent extracts carry risks of hepatotoxicity.",
    ailment: "Acute Situational Anxiety & Muscle Nervous Tension",
    bodyPartId: "brain",
    practicalContext:
      "A traditional South Pacific ceremonial beverage used to quiet nervous tension and ease social apprehension.",
  },
  {
    id: "colloidal-silver-ingestion",
    name: "Oral Colloidal Silver Liquid Tonics",
    description:
      "Drinking bottled suspensions of microscopic silver nanoparticles promoted online as a 'universal natural antibiotic.'",
    evidenceRating: "unproven",
    evidenceDetails:
      "Clear consensus from the US FDA, Mayo Clinic, and toxicology boards confirms that colloidal silver has no biological purpose or nutritional value in the human body. It is completely ineffective at treating viral or bacterial infections inside the body. Chronic ingestion causes irreversible argyria (permanent metallic silver accumulation turning the skin, eyes, and organs slate-blue/gray), neurological damage, and renal failure.",
    ailment: "Systemic Infection Prevention & Immunity (Debunked)",
    bodyPartId: "skin",
    practicalContext:
      "A heavily marketed internet cure-all that lacks efficacy and poses severe permanent toxicity risks including blue-gray skin discoloration.",
  },
  {
    id: "warm-eyelid-compress",
    name: "Warm Moist Compress for Dry, Tired Eyes",
    description:
      "Resting a clean washcloth soaked in comfortably warm water over closed eyelids for 5 to 10 minutes melts hardened natural oils inside your eyelid glands (meibomian glands) so your tears stop evaporating so fast.",
    evidenceRating: "studied",
    evidenceDetails:
      "American Academy of Ophthalmology (AAO) and Tear Film & Ocular Surface Society (TFOS DEWS II) guidelines recommend daily warm eyelid compresses as first-line care for evaporative dry eye and eyelid gland sluggishness.",
    ailment: "Dry Eyes & Screen Fatigue",
    bodyPartId: "eyes",
    practicalContext:
      "Use a clean cloth warmed to about bathwater temperature (40°C / 104°F)—never scalding hot—for 5 minutes each evening, followed by gentle blinking.",
  },
  {
    id: "prunes-sorbitol-constipation",
    name: "Stewed Prunes & Natural Sorbitol for Sluggish Digestion",
    description:
      "Eating 4 to 6 whole dried prunes (about 50 grams) daily with a glass of water to promote gentle, regular bowel movements without harsh chemical laxatives.",
    evidenceRating: "studied",
    evidenceDetails:
      "Randomized clinical trials (Alimentary Pharmacology & Therapeutics) show prunes are more effective than psyllium husk at improving stool frequency and consistency due to natural osmotic sorbitol, insoluble cellulose, and chlorogenic acids that stimulate colonic motility.",
    ailment: "Sluggish Bowel Motility & Mild Constipation",
    bodyPartId: "large-intestine",
    practicalContext:
      "Eat 4 to 5 dried prunes with breakfast alongside a tall glass of lukewarm water. Avoid sudden megadoses over 10 prunes to prevent gas and bloating.",
  },
  {
    id: "peppermint-oil-tension-headache",
    name: "Topical Diluted Peppermint Oil for Forehead Tension",
    description:
      "Applying 2 to 3 drops of diluted peppermint essential oil (mixed into a teaspoon of carrier oil like coconut or olive oil) across your forehead and temples to ease tension headache tightness.",
    evidenceRating: "studied",
    evidenceDetails:
      "Double-blind clinical trials (Cephalalgia & Der Nervenarzt) showed a 10% topical peppermint oil solution was as effective as 1,000 mg of acetaminophen (paracetamol) in reducing tension headache pain after 15 to 30 minutes, because natural menthol stimulates cold-sensing skin receptors (TRPM8) that block local pain signals and relax tight forehead muscles.",
    ailment: "Mild Tension Headaches & Forehead Muscle Tightness",
    bodyPartId: "frontal-lobe",
    practicalContext:
      "Always mix pure essential oil into a carrier oil first (never apply undiluted oil directly to your skin) and keep it well away from your eyes to prevent stinging.",
  },
  {
    id: "fennel-ajwain-bloating-digest",
    name: "Warm Roasted Fennel (Saunf) & Ajwain Infusion for Gas & Bloating",
    description:
      "Steeping 1/2 teaspoon each of lightly crushed fennel seeds (saunf) and carom seeds (ajwain) in hot water for 5 minutes after a heavy or spicy meal.",
    evidenceRating: "studied",
    evidenceDetails:
      "Clinical pharmacological studies confirm anethole in fennel and thymol in ajwain relax intestinal smooth muscle (spasmolytic action) and promote digestive enzyme secretion, dispelling trapped gas and speeding up stomach transit.",
    ailment: "Post-Meal Gas, Bloating & Flatulence",
    bodyPartId: "stomach",
    practicalContext:
      "Sip warm 15 minutes after lunch or dinner. You can chew the soft seeds directly after finishing the liquid.",
  },
  {
    id: "barley-water-kidney-rinse",
    name: "Traditional Boiled Barley Water for Kidney Filtration & Bladder Comfort",
    description:
      "Simmering 2 tablespoons of pearl barley in 1 liter of water for 20 minutes, straining, and sipping the cooled, soothing liquid through the day.",
    evidenceRating: "studied",
    evidenceDetails:
      "Barley water acts as a mild, potassium-sparing natural diuretic that gently increases urine volume without electrolyte depletion, helping wash out cellular debris and burning sensations in the urinary tract.",
    ailment: "Mild Urine Burning, Fluid Heaviness & Sluggish Kidney Flushing",
    bodyPartId: "kidneys",
    practicalContext:
      "Drink 1 to 2 glasses daily. Do not add refined white sugar; flavor with a squeeze of fresh lemon.",
  },
  {
    id: "beetroot-ginger-liver-bile-tonic",
    name: "Fresh Beetroot & Ginger Salad for Bile Flow & Liver Protection",
    description:
      "Eating a small bowl of raw grated beetroot tossed with grated fresh ginger, lemon juice, and a pinch of roasted cumin before lunch.",
    evidenceRating: "studied",
    evidenceDetails:
      "Beetroot is rich in betaine (trimethylglycine), which protects liver cells from fatty infiltration, while betalains and gingerols stimulate bile production and gallbladder emptying, helping digest dietary fats smoothly.",
    ailment: "Sluggish Bile Flow, Heavy Fat Digestion & Early Fatty Liver Support",
    bodyPartId: "liver",
    practicalContext:
      "Eat 2 to 3 tablespoons before your heaviest meal of the day. Note that betalain pigment may harmlessly tint urine or stool pink (beeturia).",
  },
  {
    id: "pink-noise-tinnitus-soother",
    name: "Pink Noise Sound Masking for Ear Ringing",
    description:
      "Listening to soft pink noise (sounds like falling rain or ocean waves) through a speaker at low volume while resting or working in quiet rooms.",
    evidenceRating: "studied",
    evidenceDetails:
      "Audiology research shows that pink noise plays equal energy per octave, matching natural brainwave rhythms. This gently blends with the high-pitched ringing sound of tinnitus, giving the temporal lobe's sound centers a chance to relax so the brain stops focusing on the ringing.",
    ailment: "Ear Ringing (Tinnitus) & Sound Sensitivity",
    bodyPartId: "temporal-lobe",
    practicalContext:
      "Keep volume below conversational level (under 60 dB). Do not use deep-ear headphones for tinnitus masking; room speakers or pillow speakers work best.",
  },
  {
    id: "foam-roller-thoracic-extension",
    name: "Foam Roller Mid-Back Opener & Doorway Chest Stretch",
    description:
      "Lying gently on a foam roller placed crosswise under your mid-back with your hands supporting your neck, taking 5 deep belly breaths, followed by a gentle doorway pec stretch.",
    evidenceRating: "studied",
    evidenceDetails:
      "Physical therapy trials demonstrate that passive thoracic extension Mobilizes the rib-spine facet joints and lengthens the tight anterior chest muscles, relieving burning muscular fatigue between the shoulder blades and expanding lung volume.",
    ailment: "Hunched Desk Posture & Upper-Back Burning Tightness",
    bodyPartId: "spine-thoracic",
    practicalContext:
      "Perform for 2 minutes after every 3 hours of computer work. Never roll directly on the lower back (lumbar spine); keep the roller between the shoulder blades.",
  },
  {
    id: "pendulum-shoulder-release",
    name: "Codman Pendulum Shoulder Swings & Warm Moisture Pack",
    description:
      "Leaning forward with your good arm resting on a table, letting your stiff arm hang loose like a clock pendulum, and gently swaying it in small circles using gravity rather than muscle power.",
    evidenceRating: "studied",
    evidenceDetails:
      "Orthopedic rehabilitation studies prove that gravity-assisted pendulum circles create gentle joint traction without firing tense rotator cuff muscles. This circulates warm synovial fluid through the shoulder joint capsule, lubricating tight tissues.",
    ailment: "Rotator Cuff Stiffness, Shoulder Impingement & Early Frozen Shoulder",
    bodyPartId: "shoulders",
    practicalContext:
      "Do 20 small clockwise circles and 20 counter-clockwise circles twice daily. Follow with a warm, damp towel over the shoulder for 10 minutes.",
  },
  {
    id: "contrast-elbow-therapy",
    name: "Ice & Warm Water Contrast for Tennis Elbow",
    description:
      "Alternating between a cold ice massage for 3 minutes and a warm water compress for 3 minutes over the outer tendon bump of your elbow.",
    evidenceRating: "studied",
    evidenceDetails:
      "Sports medicine clinical reviews indicate that temperature contrast therapy causes rapid alternation between blood vessel narrowing (vasoconstriction) and widening (vasodilation). This acts as a vascular pump that flushes out inflammatory waste products and speeds collagen repair in slow-healing elbow tendons.",
    ailment: "Tennis Elbow, Mouse Clicking Strain & Outer Elbow Soreness",
    bodyPartId: "elbows",
    practicalContext:
      "Repeat 3 cycles ending with cold. Use a computer mouse with an ergonomic vertical grip to stop twisting the forearm bones.",
  },
  {
    id: "neutral-night-wrist-splinting",
    name: "Neutral Wrist Splinting & Tendon-Gliding Exercises",
    description:
      "Wearing a lightweight, straight-brace wrist splint during sleep to keep your wrist in a completely neutral (unbent) position, combined with gentle daytime finger-stretching flows.",
    evidenceRating: "studied",
    evidenceDetails:
      "Cochrane systematic reviews confirm that neutral wrist splinting prevents the wrist from curling inward during deep sleep. Sleeping with curled wrists increases carpal tunnel pressure by over 300%; keeping it neutral keeps pressure low, allowing the median nerve to recover.",
    ailment: "Carpal Tunnel Tingling, Smartphone Thumb & Morning Hand Numbness",
    bodyPartId: "wrists",
    practicalContext:
      "Wear the splint every night for 4 to 6 weeks. Avoid wearing rigid splints during active typing, as muscles need to move freely during the day.",
  },
  {
    id: "epsom-hand-soak",
    name: "Warm Epsom Salt Hand Soak for Morning Finger Stiffness",
    description:
      "Soaking both hands in a basin of warm water with half a cup of dissolved Epsom salts (magnesium sulfate) for 10 minutes, gently opening and closing fingers into loose fists.",
    evidenceRating: "studied",
    evidenceDetails:
      "Warm moist heat increases local blood flow to small finger joints by up to 200%, thinning thick joint fluid (synovial fluid) so finger cartilage glides with less friction. Transdermal magnesium ions soothe tense hand muscles.",
    ailment: "Finger Knuckle Stiffness, Trigger Finger Tightness & Hand Fatigue",
    bodyPartId: "hands",
    practicalContext:
      "Do this first thing upon waking. Follow by rubbing a pea-sized drop of warm sesame or olive oil into knuckle joints.",
  },
  {
    id: "ninety-ninety-hip-flow",
    name: "The 90/90 Hip Flow & Glute Bridge Reset",
    description:
      "Sitting on the floor with both knees bent at 90-degree angles (one in front, one to the side) and gently leaning forward, followed by 10 slow lying glute bridges.",
    evidenceRating: "studied",
    evidenceDetails:
      "Physical therapy trials show that the 90/90 stretch restores internal and external rotation in the hip socket. Combining this with glute bridges wakes up sleepy buttock muscles (reciprocal inhibition), which automatically releases chronically tight front hip flexors.",
    ailment: "Desk Worker Tight Hips, Anterior Pelvic Tilt & Lower Back Pulling",
    bodyPartId: "hips",
    practicalContext:
      "Spend 60 seconds per side after prolonged sitting. Keep your spine long and tall without rounding your lower back.",
  },
  {
    id: "quad-activation-knee-relief",
    name: "Straight-Leg Quad Raises & Cold Ice Massage for Knees",
    description:
      "Lying on your back with one leg bent and tightening the front thigh of the straight leg to lift it 6 inches off the floor, holding for 3 seconds, followed by an ice massage.",
    evidenceRating: "studied",
    evidenceDetails:
      "Clinical trials in the British Journal of Sports Medicine demonstrate that strengthening the vastus medialis (inner thigh muscle) directly stabilizes how the kneecap tracks inside its groove, reducing patellofemoral knee friction by up to 40%.",
    ailment: "Runner's Knee, Kneecap Grinding & Stair Climbing Discomfort",
    bodyPartId: "knees",
    practicalContext:
      "Complete 3 sets of 10 lifts daily. Apply ice wrapped in a thin towel for 10 minutes if the knee feels warm or puffy after long walks.",
  },
  {
    id: "ankle-alphabet-mobility",
    name: "Ankle Alphabet Drawing & Calf Stretch Flow",
    description:
      "Lifting your foot off the floor and tracing the letters of the alphabet in the air with your big toe, moving only your ankle joint.",
    evidenceRating: "studied",
    evidenceDetails:
      "Sports physical therapy protocols show that active multidirectional mobility exercises stimulate the joint's balance sensors (proprioceptors) in ankle ligaments, dramatically reducing the risk of repeat ankle sprains and pumping away fluid swelling.",
    ailment: "Ankle Sprain Recovery, Morning Ankle Stiffness & Wobbly Balance",
    bodyPartId: "ankles",
    practicalContext:
      "Trace capital letters A to Z once per foot while sitting at your desk. If recovering from an acute sprain, start after the first 48 hours once swelling stabilizes.",
  },
  {
    id: "weight-bearing-stomp-bone-stimulus",
    name: "Gentle Heel Drops & Daily Vitamin D3/K2 for Bone Strength",
    description:
      "Rising up onto your toes and dropping down onto your heels with a gentle, firm bump 20 times daily, paired with safe morning sunlight for natural vitamin D.",
    evidenceRating: "studied",
    evidenceDetails:
      "Bone biology research demonstrates Wolff's Law: bone is living tissue that grows denser in response to mechanical vibration and weight impact. Gentle heel drops send piezoelectric signals through leg bones and the spine, stimulating osteoblast cells to build new bone mineral matrix.",
    ailment: "Osteopenia, Thinning Bone Density & Skeletal Weakness",
    bodyPartId: "bones",
    practicalContext:
      "Perform 20 gentle drops while holding onto a kitchen counter for balance. Consult your physician if you have severe osteoporosis or spinal fractures.",
  },
  {
    id: "cranberry-pac-extract-bladder",
    name: "Standardized Cranberry Proanthocyanidin (PAC) Extract",
    description:
      "Taking a standardized cranberry supplement containing at least 36 mg of Type-A Proanthocyanidins (PACs) with a tall glass of plain water.",
    evidenceRating: "studied",
    evidenceDetails:
      "Cochrane systematic reviews confirm that Type-A PAC compounds act like a Teflon coating on the inner lining of your bladder. They physically prevent E. coli bacteria from hooking onto bladder wall cells, so bacteria get harmlessly flushed out in urine.",
    ailment: "Recurrent Bladder Infections & Burning Urination Tendency",
    bodyPartId: "bladder",
    practicalContext:
      "Choose standardized extract capsules rather than sugary supermarket juices. Drink alongside 2 to 2.5 liters of clean water daily.",
  },
  {
    id: "d-mannose-urinary-wash",
    name: "Pure D-Mannose Powder in Water",
    description:
      "Dissolving 2 grams of pure D-mannose (a natural, non-caloric plant sugar) in a glass of lukewarm water and drinking every morning.",
    evidenceRating: "studied",
    evidenceDetails:
      "Double-blind clinical trials in the European Review for Medical and Pharmacological Sciences show that D-mannose binds like a magnet to the hair-like fingers (pili) of E. coli bacteria, sweeping them out of the bladder during normal urination as effectively as preventive antibiotics.",
    ailment: "Bladder Discomfort, Frequency & Post-Intimacy Urinary Irritation",
    bodyPartId: "bladder",
    practicalContext:
      "Take with plenty of water. Because D-mannose is mostly excreted unchanged in urine, it does not spike blood sugar levels in diabetics.",
  },
  {
    id: "lemon-citrate-kidney-flush",
    name: "Fresh Lemon Juice Water for Kidney Citrate",
    description:
      "Squeezing the juice of half a fresh lemon into a large glass of warm water twice daily, particularly after waking and before bedtime.",
    evidenceRating: "studied",
    evidenceDetails:
      "Clinical urology trials show that natural citric acid in lemons increases urinary citrate levels. Citrate binds with free calcium in your urine, preventing calcium crystals from clumping together to form painful kidney stones.",
    ailment: "Kidney Stone Prevention & Highly Acidic Concentrated Urine",
    bodyPartId: "kidneys",
    practicalContext:
      "Drink through a straw to protect tooth enamel from citric acid. Do not add sugar; sweeten with a hint of stevia or mint leaves if desired.",
  },
  {
    id: "milk-thistle-silymarin-liver",
    name: "Standardized Milk Thistle (Silymarin Extract)",
    description:
      "Taking a clinically standardized milk thistle extract containing 70% to 80% silymarin with meals.",
    evidenceRating: "studied",
    evidenceDetails:
      "Phytotherapy research indicates that silymarin acts as an antioxidant and cell-membrane stabilizer in hepatocytes (liver cells). It stimulates protein synthesis in liver tissue, supporting the liver's natural phase-1 and phase-2 enzyme detoxification pathways.",
    ailment: "Sluggish Liver Function, Toxic Exposure & Metabolic Liver Strain",
    bodyPartId: "liver",
    practicalContext:
      "Ask your doctor or pharmacist if taking prescription medications, as silymarin can affect how certain medicines are cleared by the liver.",
  },
  {
    id: "dgl-licorice-stomach-coat",
    name: "Chewable Deglycyrrhizinated Licorice (DGL)",
    description: "Slowly chewing one or two DGL tablets 15 to 20 minutes before meals.",
    evidenceRating: "studied",
    evidenceDetails:
      "Gastroenterology studies show that DGL stimulates the stomach's natural mucus-producing cells (goblet cells). This forms a soothing, protective slime barrier over the stomach wall, shielding sensitive tissues from stomach acid without suppressing necessary acid digestion.",
    ailment: "Heartburn, Stomach Burning & Gastritis Discomfort",
    bodyPartId: "stomach",
    practicalContext:
      "Always choose DGL (deglycyrrhizinated), which has the glycyrrhizin compound removed so it does not raise blood pressure or deplete potassium.",
  },
  {
    id: "stewed-apple-pectin-gut-barrier",
    name: "Warm Stewed Apples with Cinnamon for Gut Lining",
    description:
      "Gently simmering diced fresh apples with their skin on in water with a pinch of Ceylon cinnamon until soft, eaten as a morning snack.",
    evidenceRating: "studied",
    evidenceDetails:
      "Cooking apples releases high amounts of soluble pectin fiber. Research demonstrates that beneficial gut microbes ferment pectin into short-chain fatty acids (particularly butyrate), which directly fuels and seals the single-cell lining of the small and large intestines.",
    ailment: "Sluggish Digestion, Leaky Gut Concerns & Loose Sensitive Bowels",
    bodyPartId: "small-intestine",
    practicalContext:
      "Do not peel the apples; the skin contains the highest concentration of prebiotic polyphenols. Eat warm with breakfast.",
  },
  {
    id: "isabgol-psyllium-bowel-lubricant",
    name: "Whole Isabgol (Psyllium Husk) with Abundant Water",
    description:
      "Stirring one tablespoon of whole psyllium husk into a tall glass of lukewarm water or buttermilk and drinking immediately before bedtime.",
    evidenceRating: "studied",
    evidenceDetails:
      "The American Journal of Clinical Nutrition notes that psyllium is a pure hydrophilic soluble fiber that absorbs up to 10 times its weight in water, forming a soft, slippery gel. This gently expands stool volume and lubricates the colon, stimulating natural bowel motility.",
    ailment: "Chronic Constipation, Hemorrhoid Strain & Irregular Stools",
    bodyPartId: "large-intestine",
    practicalContext:
      "Crucial rule: Always drink an extra glass of plain water immediately afterward. Taking psyllium with too little water can cause dry, hardened stool.",
  },
  {
    id: "meibomian-warm-eye-compress",
    name: "Warm Moisture Eye Compress & Blink Exercises",
    description:
      "Placing a clean washcloth soaked in warm water (about 40°C / 104°F) over closed eyes for 5 to 7 minutes, followed by 10 deliberate hard blinks.",
    evidenceRating: "studied",
    evidenceDetails:
      "Ophthalmology clinical trials confirm that heat melts the waxy oil (meibum) clogging the tiny glands inside your eyelids. This allows natural clear oil to coat your tears, preventing the tear film from evaporating quickly when staring at computer monitors.",
    ailment: "Digital Eye Dryness, Screen Grittiness & Burning Red Eyes",
    bodyPartId: "eyes",
    practicalContext:
      "Do once every evening before sleep. Avoid rubbing eyes vigorously after the compress; gentle patting is safest.",
  },
  {
    id: "tmj-tongue-roof-jaw-reset",
    name: "Tongue-to-Roof Jaw Relaxation & Temple Massage",
    description:
      "Placing the tip of your tongue gently against the roof of your mouth just behind your front teeth, letting your teeth part slightly, and massaging your temple muscles in circles.",
    evidenceRating: "studied",
    evidenceDetails:
      "Dental research shows that resting the tongue against the palate triggers a neurological reflex (reciprocal inhibition) that instantly forces the powerful masseter and temporalis jaw muscles to stop clenching, reducing pressure inside the TMJ hinge by up to 70%.",
    ailment: "Jaw Clenching, Morning Temple Headaches & TMJ Clicking",
    bodyPartId: "jaw",
    practicalContext:
      "Set an hourly reminder on your phone: 'Lips together, teeth apart, tongue on the roof.' Practice while driving or reading emails.",
  },
  {
    id: "salt-water-osmotic-throat-gargle",
    name: "Warm Salt Water Osmotic Throat Gargle",
    description:
      "Dissolving half a teaspoon of plain salt in a cup of comfortably warm water and gargling deeply for 30 seconds, 3 times a day.",
    evidenceRating: "studied",
    evidenceDetails:
      "Medical guidelines confirm that salt water creates a gentle osmotic gradient: it draws excess trapped fluid out of swollen throat tissues, rapidly relieving scratchiness. It also loosens thick mucus and washes away throat bacteria.",
    ailment: "Scratchy Sore Throat, Tickle Cough & Pharyngeal Irritation",
    bodyPartId: "throat",
    practicalContext:
      "Spit the water out completely; do not swallow the salty liquid. Use comfortably warm water, never scalding hot.",
  },
  {
    id: "hypertonic-saline-nasal-rinse",
    name: "Distilled Saline Nasal Irrigation (Neti Rinse)",
    description:
      "Flushing the nasal passages using a clean nasal wash bottle or Neti pot filled with lukewarm distilled water and a pharmaceutical saline packet.",
    evidenceRating: "studied",
    evidenceDetails:
      "Ear, Nose, and Throat (ENT) clinical reviews prove that saline irrigation physically washes pollen, dust, and thick mucus out of the sinuses while improving the natural beating frequency of the tiny nasal hairs (cilia).",
    ailment: "Sinus Pressure, Post-Nasal Drip & Morning Congestion",
    bodyPartId: "sinuses",
    practicalContext:
      "CRITICAL SAFETY RULE: Never use plain tap water. Always use boiled-and-cooled, distilled, or sterile water to prevent rare waterborne amoeba infections.",
  },
  {
    id: "l-theanine-alpha-wave-focus",
    name: "L-Theanine with Green Tea for Calm Mental Clarity",
    description:
      "Drinking a cup of freshly brewed green tea or taking 100 to 200 mg of L-theanine (a natural amino acid found in tea leaves).",
    evidenceRating: "studied",
    evidenceDetails:
      "Electroencephalogram (EEG) brainwave studies prove that L-theanine crosses the blood-brain barrier and increases alpha brainwaves (8 to 12 Hz). This creates a state of 'alert calm' without drowsiness, reducing mental agitation and sharpening frontal lobe focus.",
    ailment: "Mental Agitation, Multitasking Brain Fog & Exam Jitters",
    bodyPartId: "frontal-lobe",
    practicalContext:
      "Take 30 minutes before complex study or focused work sessions. Can be paired with modest caffeine to eliminate caffeine jitters.",
  },
  {
    id: "colloidal-oatmeal-barrier-soak",
    name: "Colloidal Oatmeal Bath for Skin Barrier Repair",
    description:
      "Adding 1 cup of finely ground colloidal oatmeal powder to a lukewarm bath and soaking for 15 minutes, patting skin dry, and applying moisturizer within 3 minutes.",
    evidenceRating: "studied",
    evidenceDetails:
      "Dermatology trials show that avenanthramides (unique antioxidants in oats) inhibit inflammatory cytokine release in skin cells. Oatmeal beta-glucan forms a protective water-binding film that restores the skin's natural lipid barrier and calms itching.",
    ailment: "Dry Itchy Skin, Mild Eczema Flares & Skin Barrier Irritation",
    bodyPartId: "skin",
    practicalContext:
      "Use lukewarm water; hot water strips away natural skin oils and worsens itching. Lock in moisture with a ceramide cream within 3 minutes of stepping out.",
  },
  {
    id: "tart-cherry-muscle-recovery",
    name: "Tart Montmorency Cherry Juice for Muscle Soreness",
    description:
      "Drinking 200 ml of pure tart cherry juice (unsweetened) 30 minutes after intense exercise or 1 hour before bed.",
    evidenceRating: "studied",
    evidenceDetails:
      "Sports nutrition studies in the Scandinavian Journal of Medicine and Science in Sports show that anthocyanin antioxidants in tart cherries significantly reduce post-exercise muscle damage and oxidative stress, accelerating recovery and reducing delayed onset muscle soreness (DOMS).",
    ailment: "Delayed Onset Muscle Soreness (DOMS) & Post-Workout Muscle Fatigue",
    bodyPartId: "muscles",
    practicalContext:
      "Choose pure unsweetened tart cherry juice or concentrated extract. Tart cherries also naturally contain small amounts of plant melatonin, supporting deeper sleep.",
  },
  {
    id: "circadian-morning-sunlight-clock",
    name: "Morning Sunlight Exposure for Sleep-Wake Timing",
    description:
      "Stepping outside into natural morning daylight for 10 to 15 minutes within an hour of waking up, without looking directly at the sun.",
    evidenceRating: "studied",
    evidenceDetails:
      "Neuroscience research at Harvard and Stanford demonstrates that morning photons hitting the specialized melanopsin cells in your eyes travel directly to the suprachiasmatic nucleus (the brain's master biological clock). This triggers a healthy morning cortisol surge and starts an internal 16-hour timer that releases nighttime melatonin on schedule.",
    ailment: "Difficulty Falling Asleep, Morning Grogginess & Circadian Rhythm Misalignment",
    bodyPartId: "brain",
    practicalContext:
      "Must be done outdoors without sunglasses. Looking through a window glass does not work because window panes filter out 50% or more of the necessary blue-sky wavelengths.",
  },
];

export const HACKS: HealthHack[] = [
  {
    id: "cold-water-dive",
    title: "Vagus Nerve Cold Immersion",
    practice:
      "Splash ice-cold water onto your face or submerge your face for 10-15 seconds while holding your breath.",
    scienceBasis:
      "Triggers the mammalian dive reflex, immediately activating the vagus nerve to slow down your heart rate and downregulate fight-or-flight anxiety.",
    bodyPartId: "brain",
  },
  {
    id: "acupressure-li4",
    title: "LI4 Acupressure for Headaches",
    practice:
      "Apply firm pressure to the webbed space between your thumb and index finger (Hegu point) for 2 minutes in circular motions.",
    scienceBasis:
      "Stimulates local nerves to release endorphins, triggering systemic pain relief signals that block cranial headache pathways.",
    bodyPartId: "jaw",
  },
  {
    id: "breath-478",
    title: "The 4-7-8 Breathing Hack",
    practice:
      "Inhale through your nose for 4 seconds, hold your breath for 7 seconds, and exhale completely through your mouth with a 'whoosh' sound for 8 seconds.",
    scienceBasis:
      "Acts as a natural tranquilizer for the nervous system. Holding the breath increases carbon dioxide concentration in the blood, which triggers the parasympathetic nervous system via the vagus nerve, rapidly lowering heart rate and anxiety.",
    bodyPartId: "lung-left",
  },
  {
    id: "stretch-9090",
    title: "The 90/90 Hip Mobility Stretch",
    practice:
      "Sit on the floor with your right leg bent at 90 degrees in front of you and your left leg bent at 90 degrees to the side. Keep your torso upright and lean forward slightly over the front leg for 60 seconds.",
    scienceBasis:
      "Improves internal and external rotation of the hip joints. This relieves structural strain on the lumbar spine and pelvic floor, preventing lower back fatigue caused by prolonged sitting.",
    bodyPartId: "hips",
  },
  {
    id: "breath-box",
    title: "Box Breathing for Stress Control",
    practice:
      "Inhale for 4 seconds, hold for 4 seconds, exhale for 4 seconds, hold empty for 4 seconds. Repeat 4 times.",
    scienceBasis:
      "Regulates autonomic nervous system activity. The equal ratio of breathing stages increases heart rate variability (HRV) and suppresses the amygdala, stopping stress loops instantly.",
    bodyPartId: "lung-right",
  },
  {
    id: "physiological-sigh",
    title: "The Double-Inhale Sigh for Instant Calm",
    practice:
      "Take two quick breaths in through your nose—one deep breath followed immediately by a sharp 'top-off' sniff—then let out a long, slow breath through your mouth.",
    scienceBasis:
      "Pops open tiny collapsed air sacs (alveoli) in your lungs, dumping trapped carbon dioxide and signaling your brain's calming nerve (the vagus nerve) to slow your heart rate in under 15 seconds.",
    bodyPartId: "lung-left",
  },
  {
    id: "rule-20-20-20",
    title: "The 20-20-20 Eye Strain Reset",
    practice:
      "Every 20 minutes of screen time, look away at an object at least 20 feet (6 meters) away for a full 20 seconds while blinking deliberately.",
    scienceBasis:
      "Relaxes the tiny focusing muscle inside your eye (the ciliary muscle) that stays locked in a tight cramp during close-up screen work, while blinking restores your protective tear film.",
    bodyPartId: "eyes",
  },
  {
    id: "calf-soleus-pushup",
    title: "Seated Heel Raises for Blood Sugar Control",
    practice:
      "While sitting flat in a chair, keep your toes on the floor and repeatedly lift and lower your heels at a steady pace for 5 to 10 minutes after eating.",
    scienceBasis:
      "Activates the deep calf muscle (the soleus muscle), which acts like a second heart to pump blood back up your legs and pulls sugar directly out of your bloodstream without making you tired.",
    bodyPartId: "ankles",
  },
  {
    id: "left-side-digestion",
    title: "Left-Side Lying to Stop Acid Reflux",
    practice:
      "If you feel heartburn after a meal or at bedtime, lie down on your left side rather than your right side or flat on your back.",
    scienceBasis:
      "Because of how your stomach curves, lying on your left side keeps the connection between your food pipe (esophagus) and stomach above the pool of stomach acid, gravity-locking acid down.",
    bodyPartId: "stomach",
  },
  {
    id: "morning-sunlight-anchor",
    title: "10-Minute Morning Sunlight Clock Reset",
    practice:
      "Step outside into natural daylight (without sunglasses if safe) within 30 to 60 minutes of waking up for 10 minutes.",
    scienceBasis:
      "Light receptors in the back of your eyes signal your brain's master clock (suprachiasmatic nucleus) to boost daytime alertness and start a 14-hour timer for nighttime sleep hormone (melatonin) release.",
    bodyPartId: "brain",
  },
  {
    id: "humming-nitric-boost",
    title: "6-Second Sinus Humming for Nasal Congestion",
    practice:
      "Keep your lips closed, inhale gently through your nose, and hum a low, steady 'mmmm' sound as you breathe out slowly for 6 seconds. Repeat 10 times.",
    scienceBasis:
      "Sound vibrations shake the air inside your sinus cavities, mixing out 15 times more natural nitric oxide gas to shrink swollen nasal linings and fight bacteria.",
    bodyPartId: "sinuses",
  },
  {
    id: "chin-tuck-posture-reset",
    title: "The 5-Second Chin Tuck for 'Text Neck' Relief",
    practice:
      "Sit or stand tall, look straight ahead, and gently glide your chin straight backward (like making a polite double chin) without tilting your nose up or down. Hold for 5 seconds and repeat 5 times.",
    scienceBasis:
      "Re-aligns your heavy skull directly over your neck bones (cervical spine), instantly taking up to 30 pounds of pulling strain off the tired muscles at the base of your skull.",
    bodyPartId: "spine-cervical",
  },
  {
    id: "palming-eye-relaxation",
    title: "30-Second Warm Palming Eye Reset",
    practice:
      "Rub your palms together briskly for 10 seconds until warm, then cup your hollowed palms gently over your closed eyes without pressing on your eyeballs. Breathe slowly in total dark warmth for 30 seconds.",
    scienceBasis:
      "Complete darkness combined with soothing mild palm warmth allows the light-sensitive rhodopsin pigments in your retinal rods to fully reset while relaxing tense facial and orbital muscles.",
    bodyPartId: "eyes",
  },
  {
    id: "physiological-sigh-de-stress",
    title: "The Two-Inhale Physiological Sigh (Rapid Heart Rate Deceleration)",
    practice:
      "Take two deep breaths in through your nose (one long deep inhale, followed immediately by a sharp second inhale to pop open your tiny lung sacs), then let out one long, slow sigh through your mouth for 6 to 8 seconds. Repeat 2 to 3 times.",
    scienceBasis:
      "Stanford University neurobiology research showed that this cyclic double-inhale sigh immediately reinflates collapsed lung alveoli (tiny air bubbles) and triggers vagus nerve signaling that slows your heart rate faster than standard breathwork or meditation.",
    bodyPartId: "lung-right",
  },
  {
    id: "post-meal-stroll-digestion",
    title: "The 10-Minute Post-Meal Stroll (Accelerated Gastric Emptying)",
    practice:
      "Take a relaxed, gentle 10 to 15 minute walk right after finishing lunch or dinner. Keep your posture upright and breathe naturally through your nose without jogging or power walking.",
    scienceBasis:
      "Gentle upright walking stimulates peristalsis (smooth muscle waves in your digestive tract) to empty your stomach up to 30% faster and shuttles glucose straight into leg muscles without needing massive insulin surges.",
    bodyPartId: "stomach",
  },
  {
    id: "citrus-citrate-kidney-flush",
    title: "The Morning Citrus-Citrate Kidney Flush",
    practice:
      "Squeeze half a fresh lemon or lime into a tall glass (350–500 ml) of lukewarm water right after waking up, and drink it before your morning tea or breakfast.",
    scienceBasis:
      "Natural citrate binds tightly to free calcium ions in urine, stopping them from forming jagged calcium oxalate stones while alkalinizing urine pH to dissolve microscopic uric acid crystals.",
    bodyPartId: "kidneys",
  },
  {
    id: "overnight-liver-fast-window",
    title: "The 12-Hour Overnight Liver Fast Window",
    practice:
      "Leave a clear 12-hour gap between your last bite of dinner (e.g., 8 PM) and your first bite of breakfast (8 AM). Drink only plain water or unsweetened herbal tea in between.",
    scienceBasis:
      "After 10 to 12 hours of digestive rest, liver glycogen stores drop, prompting hepatocytes (liver cells) to switch from storing fat to burning accumulated triglycerides and activating autophagy (cellular cleanup).",
    bodyPartId: "liver",
  },
  {
    id: "caffeine-90-min-delay",
    title: "The 90-Minute Morning Caffeine Delay",
    practice:
      "Wait 90 to 120 minutes after waking up before drinking your first cup of coffee or strong tea. Drink a large glass of water first.",
    scienceBasis:
      "During sleep, your brain clears adenosine (the chemical that makes you feel sleepy). When you wake up, leftover adenosine clears out naturally over 90 minutes while your body produces a natural morning cortisol surge. If you drink coffee immediately, caffeine blocks adenosine receptors without clearing them; when caffeine wears off around 2 PM, the trapped adenosine floods back in, causing a heavy afternoon crash.",
    bodyPartId: "frontal-lobe",
  },
  {
    id: "headphone-60-60-rule",
    title: "The 60/60 Safe Listening Rule for Ears",
    practice:
      "Listen to headphones at no more than 60% of the maximum volume bar, and limit continuous listening to 60 minutes before taking a 10-minute quiet break.",
    scienceBasis:
      "Sound levels above 85 decibels physically bend and snap the microscopic stereocilia (hair cells) inside the cochlea of your inner ear. Taking a 10-minute break lets these delicate hair cells recover their natural flexibility, preventing permanent noise-induced high-frequency hearing loss.",
    bodyPartId: "temporal-lobe",
  },
  {
    id: "eustachian-yawn-equalizer",
    title: "The Soft-Palate Yawn for Ear Pressure",
    practice:
      "Instead of aggressively pinching your nose and blowing hard, gently swallow while opening your jaw into a wide yawn, or chew real gum when landing in an airplane.",
    scienceBasis:
      "The tensor veli palatini muscle opens the Eustachian tube during swallowing and yawning, allowing air pressure between your middle ear and the outside room to equalize naturally without traumatizing delicate eardrums.",
    bodyPartId: "ears",
  },
  {
    id: "left-side-sleep-reflux-block",
    title: "The Left-Side Sleep Position for Acid Reflux",
    practice:
      "Sleep primarily on your left side using a comfortable pillow between your knees, especially if you have had a late dinner.",
    scienceBasis:
      "Anatomically, the esophagus connects to the right upper curve of your stomach. When you sleep on your left side, the junction between stomach and esophagus stays elevated above the pool of gastric acid, keeping stomach acid trapped by gravity so it cannot splash upward into your throat.",
    bodyPartId: "throat",
  },
  {
    id: "zone-2-nasal-walk",
    title: "The Zone 2 Nasal-Breathing Heart Stroll",
    practice:
      "Walk briskly at a pace where you could still hold a conversation, while breathing strictly in and out through your nose for 30 minutes.",
    scienceBasis:
      "Nasal breathing forces your pace to stay within 'Zone 2' cardiovascular intensity (60% to 70% of max heart rate). This stimulates heart muscle efficiency, increases stroke volume (how much blood your heart pumps per beat), and stimulates mitochondrial growth in blood vessels without spiking stress hormones.",
    bodyPartId: "heart",
  },
  {
    id: "migrating-motor-complex-rest",
    title: "The 3-Hour Digestive Gap (Gut Sweeper Wave)",
    practice:
      "Leave a clear 3 to 4 hour gap between meals without constant snacking on biscuits, chips, or sugary sips.",
    scienceBasis:
      "When your small intestine is empty for 90 to 120 minutes, your gut activates the Migrating Motor Complex (MMC)—a powerful, rhythmic electrical cleansing wave that sweeps food crumbs and bacteria out of the small intestine down into the colon, preventing bloating and bacterial overgrowth (SIBO).",
    bodyPartId: "small-intestine",
  },
  {
    id: "squatty-35-degree-colon-angle",
    title: "The 35-Degree Foot Stool for Natural Elimination",
    practice:
      "Place a 7-to-9 inch bathroom stool (or upturned plastic tub) under your feet when sitting on a modern toilet, leaning your torso slightly forward.",
    scienceBasis:
      "When sitting at a standard 90-degree chair angle, the puborectalis muscle loops around your rectum like a tight choke collar to keep you continent. Raising your knees to a 35-degree squat angle completely straightens the anorectal canal, allowing bowel movements to pass smoothly without straining or risking hemorrhoids.",
    bodyPartId: "large-intestine",
  },
  {
    id: "double-voiding-bladder-drain",
    title: "The Double-Voiding Bladder Complete Drain",
    practice:
      "After finishing peeing, remain seated on the toilet for an extra 30 seconds, lean slightly forward with elbows on knees, and gently try to pee one more time.",
    scienceBasis:
      "Leaning forward changes the tilt of the pelvis, allowing urine pooling at the base of the bladder to drain out completely. Emptying the bladder fully removes stagnant urine that could otherwise breed bacteria and cause bladder infections.",
    bodyPartId: "bladder",
  },
  {
    id: "doorway-pec-thoracic-release",
    title: "The Doorway Pec Release for Upper-Back Posture",
    practice:
      "Place your forearms against a doorway at shoulder height and take a small step forward until you feel a gentle stretch across your chest; hold for 30 seconds while breathing deeply.",
    scienceBasis:
      "Lengthening chronically tight pectoralis minor chest muscles allows your shoulder blades (scapulae) to glide backward into their natural position. This takes thousands of pounds of daily mechanical tension off the overworked muscles of your mid-back and upper spine.",
    bodyPartId: "spine-thoracic",
  },
  {
    id: "mcgill-big-three-lumbar-core",
    title: "The McGill Bird-Dog for Lower Back Stability",
    practice:
      "On hands and knees with a flat back, reach your right arm straight forward and left leg straight backward, hold for 6 seconds without letting your hips tilt, then switch sides for 5 repetitions.",
    scienceBasis:
      "Created by spine biomechanist Dr. Stuart McGill, the bird-dog creates high muscular activation across the spinal erectors and abdominal wall with virtually zero compressive load on lumbar discs, building a protective muscular shield around your lower back.",
    bodyPartId: "spine-lumbar",
  },
  {
    id: "dead-hang-shoulder-traction",
    title: "The 30-Second Dead Hang for Shoulder Health",
    practice:
      "Grip an overhead pull-up bar or sturdy beam with hands shoulder-width apart, let your feet leave the floor, and hang completely relaxed for 20 to 30 seconds.",
    scienceBasis:
      "Gravity creates passive traction that decompresses the shoulder joint capsule and widens the narrow subacromial space. This stops the collarbone from pinching the rotator cuff tendons and improves overhead arm mobility.",
    bodyPartId: "shoulders",
  },
  {
    id: "towel-twist-elbow-eccentrics",
    title: "The Tyler Twist Towel Roll for Tennis Elbow",
    practice:
      "Hold a rolled-up dry kitchen towel vertically with both hands; twist your wrists in opposite directions, then slowly untwist over 5 seconds against resistance.",
    scienceBasis:
      "Eccentric muscle contraction (lengthening a tendon under load) stimulates collagen fiber remodeling in the wrist extensor tendons, accelerating repair of micro-tears on the outer elbow bone without triggering acute inflammation.",
    bodyPartId: "elbows",
  },
  {
    id: "prayer-reverse-prayer-wrist-flow",
    title: "The Prayer-to-Reverse-Prayer Wrist Reset",
    practice:
      "Press your palms flat together in front of your chest with fingers pointing up (prayer pose) for 15 seconds, then press the backs of your hands together with fingers pointing down for 15 seconds.",
    scienceBasis:
      "Gently stretches the flexor and extensor retinaculum ligaments that bind the wrist bones together, pumping out pooled fluid from the carpal tunnel and restoring full 90-degree wrist flexibility.",
    bodyPartId: "wrists",
  },
  {
    id: "elastic-band-finger-extensor-opener",
    title: "The Elastic Band Finger Extensor Workout",
    practice:
      "Place an ordinary rubber band around the tips of all five fingers, pinch your fingertips together, and then slowly spread your fingers wide apart against the rubber band's tension for 15 reps.",
    scienceBasis:
      "Everyday hand activities (typing, texting, gripping steering wheels) only use the flexor muscles that close your hands. Training the opposing extensor muscles creates joint balance, preventing finger knuckle stiffness and trigger finger.",
    bodyPartId: "hands",
  },
  {
    id: "terminal-knee-extension-quad-lock",
    title: "The Terminal Knee Extension (TKE) Quad Lock",
    practice:
      "Loop a resistance band behind your knee attached to a table leg; start with your knee slightly bent and straighten your leg fully against the band, squeezing your front thigh muscle for 2 seconds.",
    scienceBasis:
      "Specifically targets and strengthens the vastus medialis oblique (VMO)—the teardrop muscle on the inside of your thigh that is responsible for guiding the kneecap safely along its groove without friction.",
    bodyPartId: "knees",
  },
  {
    id: "tennis-ball-foot-arch-roll",
    title: "The 2-Minute Tennis Ball Foot Arch Roll",
    practice:
      "While seated or standing, place a tennis ball or smooth cricket ball under the arch of your bare foot and roll it back and forth from your heel to the base of your toes with moderate downward pressure.",
    scienceBasis:
      "Performs deep myofascial release on the thick plantar fascia ligament on the bottom of your foot. This loosens tension that travels all the way up the back of your leg into your calves, hamstrings, and lower back.",
    bodyPartId: "feet",
  },
  {
    id: "three-minute-shower-moisture-lock",
    title: "The 3-Minute Post-Shower Moisture Lock",
    practice:
      "Gently pat your skin damp with a towel after showering (do not rub completely dry), and smooth on a ceramide or coconut oil moisturizer within 3 minutes while skin is still moist.",
    scienceBasis:
      "Damp skin allows moisturizer to trap surface water inside the stratum corneum (the top layer of your skin). Applying moisturizer within 180 seconds prevents water from evaporating into dry air, increasing skin barrier hydration by up to 70%.",
    bodyPartId: "skin",
  },
  {
    id: "heel-drop-bone-piezoelectric-stimulus",
    title: "The 20 Daily Heel Drops for Bone Mineralization",
    practice:
      "Stand tall holding a wall or sturdy table for balance, lift up onto your tiptoes, and drop down firmly onto your bare heels with a gentle 'thud' 20 times once a day.",
    scienceBasis:
      "The mechanical impact creates a microscopic electric current (the piezoelectric effect) through bone crystalline matrix. This signals osteoblast cells to deposit calcium and phosphate, thickening bone trabeculae in the hips, femur, and lower spine.",
    bodyPartId: "bones",
  },
  {
    id: "leucine-muscle-synthesis-trigger",
    title: "The Leucine Protein Trigger for Muscle Preservation",
    practice:
      "Aim for 20 to 30 grams of quality protein containing at least 2.5 grams of leucine (found naturally in paneer, dal, eggs, fish, or Greek yogurt) in the meal following physical activity.",
    scienceBasis:
      "Leucine acts as a biological molecular switch that turns on mTORC1 (the cellular engine that builds muscle tissue). Without reaching this leucine threshold, the body cannot fully initiate muscle protein synthesis, causing slow muscle recovery and gradual muscle wasting.",
    bodyPartId: "muscles",
  },
];

export const BODY_MARVELS: BodyMarvel[] = [
  {
    id: "gut-brain-axis",
    title: "The Gut-Brain Connection: Your Second Brain",
    introduction:
      "Did you know your digestive tract contains over 100 million neurons? This enteric nervous system operates independently of your brain, communicating constantly via the vagus nerve.",
    sections: [
      {
        heading: "1. The Vagus Nerve Highway",
        body: "About 90% of the fibers in the vagus nerve carry information from the gut to the brain, not the other way around. Your gut is literally sending status reports to your head every millisecond.",
      },
      {
        heading: "2. Serotonin's Secret Source",
        body: "Over 90% of your body's serotonin—the neurotransmitter responsible for mood stability and happiness—is manufactured in your gut, not your brain.",
      },
    ],
    conclusion:
      "Taking care of your gut microbiome with fiber and fermented foods is not just digestive hygiene; it's a direct intervention in your mental health.",
    bodyPartId: "large-intestine",
  },
  {
    id: "liver-regeneration",
    title: "The Liver's Wolverine Superpower",
    introduction:
      "Your liver is the only organ in your body capable of complete regeneration. Even if up to 75% of it is removed, it can regrow to its original size within a matter of weeks.",
    sections: [
      {
        heading: "1. Rapid Cell Proliferation",
        body: "Hepatocytes (liver cells) usually exist in a resting phase. But when the liver is injured, they rapidly switch into a hyper-growth mode, multiplying relentlessly until the organ is restored.",
      },
      {
        heading: "2. The Master Filter",
        body: "While it regrows, it never stops working. The liver filters over a liter of blood every minute, dismantling toxins, breaking down medications, and producing essential bile.",
      },
    ],
    conclusion:
      "Treat your liver well. While it can regenerate from surgical removal, chronic damage like alcohol abuse or fatty liver disease can cause permanent scarring (cirrhosis) that stops the regeneration process entirely.",
    bodyPartId: "liver",
  },
  {
    id: "bone-strength",
    title: "Human Bone: Stronger Than Steel",
    introduction:
      "Ounce for ounce, human bone is stronger than solid steel. A block of bone the size of a matchbox can support 18,000 pounds of weight without crushing.",
    sections: [
      {
        heading: "1. The Composite Structure",
        body: "Bones aren't solid stone. They are a composite matrix of flexible collagen fibers woven with hard calcium phosphate crystals. This makes them both extremely strong and flexible enough to absorb impact.",
      },
      {
        heading: "2. Constant Remodeling",
        body: "Your skeleton is completely replaced every 10 years. Specialized cells called osteoclasts constantly break down old bone, while osteoblasts build new bone in its place based on the physical stress you experience.",
      },
    ],
    conclusion:
      "Lifting weights literally tells your bones to become denser. The impact signals osteoblasts to lay down more calcium, making weight training the best defense against osteoporosis.",
    bodyPartId: "bones",
  },
  {
    id: "optical-processing",
    title: "The Ultimate HDR Camera",
    introduction:
      "Your eyes can distinguish between 10 million different colors and adjust to lighting conditions ranging from glaring sunlight to faint starlight—far outperforming the most advanced digital cameras.",
    sections: [
      {
        heading: "1. Blind Spot Interpolation",
        body: "You actually have a physical blind spot in each eye where the optic nerve attaches. But you never notice it because your brain seamlessly 'photoshops' the missing data in real-time based on the surrounding environment.",
      },
      {
        heading: "2. Continuous Micro-Saccades",
        body: "Even when staring intently, your eyes are constantly vibrating in tiny movements called micro-saccades. If they stopped moving entirely, your visual field would slowly fade to gray and disappear.",
      },
    ],
    conclusion:
      "Your vision is less of a live video feed and more of an AI-generated construct heavily processed by your brain before you ever 'see' it.",
    bodyPartId: "eyes",
  },
  {
    id: "neuroplasticity",
    title: "Neuroplasticity: The Rewiring Brain",
    introduction:
      "Your brain is not a static piece of hardware. It is constantly remodeling its pathways in response to your thoughts, habits, and actions.",
    sections: [
      {
        heading: "1. Synaptic Pruning",
        body: "Pathways that are rarely used are slowly dismantled, while frequently activated connections are reinforced with myelin coating, speeding up signal transmission.",
      },
      {
        heading: "2. Structural Rewiring",
        body: "Learning a new physical skill or language can physically increase gray matter density in corresponding brain regions in a matter of weeks.",
      },
    ],
    conclusion:
      "You are the architect of your own brain. Consistently repeating a positive behavior literally carves it into your physical biology.",
    bodyPartId: "brain",
  },
  {
    id: "dna-repair",
    title: "DNA Damage Control: The Infinite Repair Loop",
    introduction:
      "Every single cell in your body experiences up to 100,000 DNA lesions every single day from normal metabolism, UV light, and environmental toxins.",
    sections: [
      {
        heading: "1. Base Excision Repair",
        body: "Specialized enzymes sweep your DNA helix, cutting out single damaged letters (bases) and pasting in correct replacements before errors duplicate.",
      },
      {
        heading: "2. Apoptosis: The Kill Switch",
        body: "If a cell's DNA damage is too severe to fix safely, it triggers an orderly self-destruct sequence to protect the surrounding tissue from mutation.",
      },
    ],
    conclusion:
      "Without this relentless, millisecond-by-millisecond molecular repair system, complex multicellular life would disintegrate within hours.",
    bodyPartId: "skin",
  },
  {
    id: "heart-pacemaker",
    title: "The Sinoatrial Node: Your Built-In Pacemaker",
    introduction:
      "Deep inside your heart is a tiny cluster of specialized cells that generate their own electricity, acting as the master conductor for every single heartbeat.",
    sections: [
      {
        heading: "1. Self-Generated Electricity",
        body: "Unlike other muscles that wait for brain signals, the sinoatrial node spontaneously fires electric currents, causing the heart chambers to squeeze in a perfect rhythm.",
      },
      {
        heading: "2. Autonomous Action",
        body: "Because it has its own power source, a healthy heart can actually continue to beat even if it is completely disconnected from the rest of the body.",
      },
    ],
    conclusion:
      "This natural pacemaker adjusts your heart rate in real-time, instantly speeding up during exercise or slowing down while you sleep.",
    bodyPartId: "heart",
  },
  {
    id: "glymphatic-night-wash",
    title: "The Nighttime Brain Wash: The Glymphatic System",
    introduction:
      "While you are asleep, your brain turns on a specialized internal plumbing system that literally washes away the day's toxic metabolic waste.",
    sections: [
      {
        heading: "1. The Nighttime Space Expansion",
        body: "During deep slow-wave sleep, the space between your brain cells expands by up to 60%. This allows cerebrospinal fluid to surge through brain tissue like water through a sponge.",
      },
      {
        heading: "2. Clearing Metabolic Waste",
        body: "This fluid wash actively sweeps away amyloid-beta and tau proteins—metabolic waste products linked to memory decline and cognitive fatigue.",
      },
    ],
    conclusion:
      "Deep sleep isn't passive downtime; it is an active mechanical cleaning cycle that your brain cannot perform while you are awake.",
    bodyPartId: "brain",
  },
  {
    id: "brown-fat-furnace",
    title: "Brown Fat: Your Body's Secret Calorie Furnace",
    introduction:
      "Most fat stores calories, but brown adipose tissue (brown fat) is an active metabolic furnace that burns calories specifically to generate heat.",
    sections: [
      {
        heading: "1. Packed with Cellular Powerhouses",
        body: "Brown fat is brown because it is packed with iron-rich mitochondria. These cellular power plants burn glucose and fatty acids directly to produce heat rather than storing energy.",
      },
      {
        heading: "2. Activated by Cold Exposure",
        body: "Mild cool exposure—such as a cool shower, walking in crisp weather, or sleeping in a cool room—activates brown fat to keep your internal core temperature stable.",
      },
    ],
    conclusion:
      "Maintaining healthy brown fat activity through regular cool exposure and daily movement boosts metabolic health and insulin sensitivity.",
    bodyPartId: "muscles",
  },
  {
    id: "fascia-sensory-web",
    title: "The Fascia Highway: The Body's Hidden Sensory Web",
    introduction:
      "Fascia is a continuous, web-like sheet of collagen and connective tissue that wraps around every muscle, bone, nerve, and organ from head to toe.",
    sections: [
      {
        heading: "1. More Sensitive Than Muscle",
        body: "Fascia contains up to six times more sensory nerve endings and movement sensors (proprioceptors) than the muscles it wraps around, constantly reporting your body's position to your brain.",
      },
      {
        heading: "2. The Elastic Spring System",
        body: "Healthy, hydrated fascia stores and returns elastic recoil energy with every step you take, working like natural internal springs that make walking and running efficient.",
      },
    ],
    conclusion:
      "Staying well-hydrated and moving across diverse planes of motion keeps your fascia supple and prevents the stiffness associated with sedentary desk work.",
    bodyPartId: "muscles",
  },
  {
    id: "microbiome-immunity-shield",
    title: "Peyer's Patches: Your Gut's Internal Border Patrol",
    introduction:
      "Up to 70% of your entire immune system is stationed directly along the walls of your intestines inside specialized immune clusters called Peyer's patches.",
    sections: [
      {
        heading: "1. Sampling Ingested Microbes",
        body: "Specialized cells in Peyer's patches continuously sample tiny particles from passing food, teaching your immune system what is a harmless nutrient and what is a dangerous pathogen.",
      },
      {
        heading: "2. Training Immune Memory",
        body: "This constant sampling trains your B-cells to produce protective antibodies (secretory IgA) that coat your mucous membranes and neutralize bacteria before they enter your bloodstream.",
      },
    ],
    conclusion:
      "A diverse diet rich in soluble plant fiber and fermented foods directly supports the immune sentinels guarding your digestive barrier.",
    bodyPartId: "small-intestine",
  },
  {
    id: "vascular-nitric-oxide",
    title: "The Endothelium: Master Controller of Blood Pressure",
    introduction:
      "The inner lining of all 60,000 miles of your blood vessels is covered by a single layer of cells called the endothelium, weighing as much as your liver combined.",
    sections: [
      {
        heading: "1. The Nitric Oxide Signal",
        body: "When you exercise or eat nitrate-rich vegetables, endothelial cells produce a tiny burst of nitric oxide gas. This gas tells surrounding smooth muscle cells to relax, opening up blood vessels within milliseconds.",
      },
      {
        heading: "2. Protecting Against Plaque",
        body: "A healthy, active endothelium keeps blood flowing smoothly like a non-stick pan, preventing white blood cells and oxidized cholesterol from adhering to arterial walls.",
      },
    ],
    conclusion:
      "Aerobic movement and a diet rich in leafy greens directly nourish your endothelium, keeping your arteries flexible and your blood pressure healthy.",
    bodyPartId: "heart",
  },
  {
    id: "cornea-air-breathing",
    title: "The Cornea: The Living Window That Breathes Air",
    introduction:
      "Every tissue in your body needs oxygen to stay alive, yet the clear front dome of your eye (the cornea) contains zero blood vessels so light can pass through without a single shadow.",
    sections: [
      {
        heading: "1. Breathing Directly From the Sky",
        body: "Instead of getting oxygen from red blood cells, the outer cells of your cornea absorb oxygen gas directly from the open air, dissolving it into your microscopic tear film with every blink.",
      },
      {
        heading: "2. The Fastest Healer on Your Body",
        body: "Packed with more nerve endings per square millimeter than anywhere else on your body, corneal surface cells can slide and zip shut minor surface scratches within 24 to 48 hours.",
      },
    ],
    conclusion:
      "Never sleep in contact lenses unless specifically approved by your eye doctor—contacts act like a plastic blanket that can starve your cornea of nighttime oxygen.",
    bodyPartId: "eyes",
  },
  {
    id: "kidney-nephron-recycler",
    title: "The Nephron Network: 1 Million Microscopic Filters",
    introduction:
      "Inside each fist-sized kidney sits an intricate labyrinth of over 1 million microscopic filtering units called nephrons, which inspect and recycle your entire blood volume every 30 minutes.",
    sections: [
      {
        heading: "1. The 99% Reabsorption Miracle",
        body: "Every single day, your nephrons pull about 180 liters of liquid out of your blood. But they don't dump it; their tubular cells painstakingly reabsorb 99% of that water, returning essential sugars, salts, and amino acids safely back into your circulation.",
      },
      {
        heading: "2. The Master Chemist",
        body: "While recycling water, nephrons precisely meter out hydrogen and bicarbonate ions down to the microgram, keeping your blood pH strictly between 7.35 and 7.45—a life-or-death balance.",
      },
    ],
    conclusion:
      "Nephrons do not grow back once permanently scarred by uncontrolled high blood pressure or chronic dehydration. Keep them healthy by drinking water and limiting excess table salt.",
    bodyPartId: "kidneys",
  },
  {
    id: "liver-metabolic-powerhouse",
    title: "The Liver: Your Body's 500-Function Chemical Factory",
    introduction:
      "Weighing about 3 pounds, your liver is your largest internal organ and performs over 500 vital jobs simultaneously—from neutralizing chemicals and brewing digestive bile to storing glucose energy for your brain.",
    sections: [
      {
        heading: "1. The Master Chemical Recycler",
        body: "Every minute, about 1.5 liters of blood from your intestines flow straight into your liver. Liver cells (hepatocytes) screen every drop, neutralizing toxic metabolic wastes, breaking down medications, and recycling red blood cell iron so it can be reused safely.",
      },
      {
        heading: "2. The 24-Hour Sugar Battery",
        body: "Your liver stores excess sugar from your meals as glycogen (animal starch). While you sleep, it slowly meters out glucose molecules into your bloodstream at a steady trickle so your brain has constant fuel without running out.",
      },
    ],
    conclusion:
      "Your liver has incredible self-healing power, but chronic excess alcohol and ultra-processed sugary drinks can silently scar liver tissue (cirrhosis). Protect it by staying active and eating whole fiber-rich foods.",
    bodyPartId: "liver",
  },
  {
    id: "lungs-tennis-court",
    title: "The Living Tennis Court Inside Your Ribs",
    introduction:
      "If you could unfold and flatten out the tiny air sacs (alveoli) inside your two lungs, they would cover an entire singles tennis court—roughly 75 to 100 square meters of surface area.",
    sections: [
      {
        heading: "1. 300 Million Microscopic Bubbles",
        body: "Your lungs pack about 300 to 500 million microscopic air sacs called alveoli into your chest. Each tiny sac is wrapped in a gossamer-thin net of blood vessels, with a membrane only one single cell thick.",
      },
      {
        heading: "2. Lightning-Fast Oxygen Swap",
        body: "Because the membrane is so unimaginably thin, oxygen from the air you inhale diffuses across into red blood cells in just one-third of a second, while carbon dioxide waste diffuses outward to be exhaled effortlessly.",
      },
    ],
    conclusion:
      "Your lungs are self-cleaning when you take deep diaphragm breaths and avoid toxic smoke. Keep them elastic by taking daily brisk walks and breathing fresh air.",
    bodyPartId: "lung-left",
  },
  {
    id: "stomach-acid-shield",
    title: "The Living Acid Vat: How Your Stomach Survives Hydrochloric Acid",
    introduction:
      "Your stomach churns with concentrated hydrochloric acid with a pH between 1.5 and 2.0—strong enough to dissolve iron nails, kill harmful bacteria on food, and break down dense proteins into liquid mush.",
    sections: [
      {
        heading: "1. The Alkaline Slime Shield",
        body: "Why doesn't your stomach digest itself? Specialized cells lining the stomach wall produce a thick, gelatinous mucus barrier rich in alkaline bicarbonate, constantly neutralizing the acid before it can touch stomach cells.",
      },
      {
        heading: "2. The Complete 3-Day Lining Rebuild",
        body: "Because of the harsh chemical environment, stomach cells take a beating. To stay healthy, your stomach sheds its entire epithelial surface and replaces it with brand-new cells every 3 to 5 days without interruption.",
      },
    ],
    conclusion:
      "Stomach acid is essential for absorbing vitamin B12, iron, and calcium. Chronic overuse of acid-blocking pills weakens this protective barrier and allows bacterial overgrowth.",
    bodyPartId: "stomach",
  },
  {
    id: "bladder-umbrella-cells",
    title: "The Living Elastic Balloon: The Bladder's Waterproof Stretch Membrane",
    introduction:
      "Your urinary bladder can expand from the size of a small plum when empty to holding more than 500 milliliters (two full glasses) of liquid without leaking a single drop into your body.",
    sections: [
      {
        heading: "1. The Accordion Umbrella Cells",
        body: "The bladder is lined with a remarkable tissue called transitional epithelium made of specialized 'umbrella cells'. When the bladder fills, these cells glide and slide over one another like an opening accordion, flattening out to five times their normal length without tearing.",
      },
      {
        heading: "2. Impermeable Uroplakin Shield",
        body: "Urine contains acidic waste and toxic urea that would burn normal tissues. The bladder surface is sealed with unique rigid protein plates called uroplakins that make it completely watertight and impermeable, so waste stays safely trapped until you pee.",
      },
    ],
    conclusion:
      "Drinking plenty of water prevents concentrated urine from irritating this delicate lining, helping the bladder expand and contract smoothly throughout your life.",
    bodyPartId: "bladder",
  },
  {
    id: "hands-tactile-supercomputer",
    title: "The Hand: A 17,000-Sensor Tactile Instrument",
    introduction:
      "Your fingertips contain one of the highest densities of touch sensors in the animal kingdom, capable of feeling a single grain of sand or sensing a scratch only one micron high.",
    sections: [
      {
        heading: "1. The 17,000 Touch Sensors",
        body: "Over 17,000 specialized touch receptors (Meissner corpuscles and Merkel disks) are packed into your palms and fingers, firing thousands of electrical signals every second to the brain's sensory cortex.",
      },
      {
        heading: "2. Friction Ridges and Micro-Vibrations",
        body: "Your fingerprints aren't just for identification. Their microscopic swirl ridges amplify micro-vibrations by 100 times when you slide your finger across a surface, letting your brain instantly recognize glass, velvet, paper, or metal.",
      },
    ],
    conclusion:
      "The massive area of your brain dedicated to your hands means that doing delicate manual activities (writing, playing music, drawing) directly exercises and preserves brain sharpness.",
    bodyPartId: "hands",
  },
  {
    id: "jaw-crushing-power",
    title: "The Masseter: The Strongest Muscle by Weight in Your Body",
    introduction:
      "Located at the back of your jaw, the masseter muscle is pound-for-pound the most powerful muscle in the human body, capable of exerting an astounding 200 pounds of crushing force onto your molars.",
    sections: [
      {
        heading: "1. Mechanical Lever Advantage",
        body: "Because of where it attaches to your skull and lower jawbone, the masseter has a short, thick lever advantage. Working together with the temporalis muscle, it can easily crack hard nuts and chew tough plant fibers.",
      },
      {
        heading: "2. The Danger of Silent Night Clenching",
        body: "Because it is so powerful, involuntary teeth clenching during stressful days or sleep can exert hundreds of pounds of pressure on delicate teeth and jaw hinges, leading to tension headaches and worn tooth enamel.",
      },
    ],
    conclusion:
      "Remind yourself during the workday: 'Lips together, teeth apart, tongue resting softly on the roof of the mouth' to prevent chronic jaw muscle strain.",
    bodyPartId: "jaw",
  },
  {
    id: "sinus-climate-control",
    title: "Your Internal Air Conditioner: 10,000 Liters of Conditioned Air Daily",
    introduction:
      "Every day, you inhale roughly 10,000 to 15,000 liters of outside air. Whether that air is freezing winter cold or dusty desert dry, your sinuses adjust it to body temperature and 100% humidity before it ever reaches your lungs.",
    sections: [
      {
        heading: "1. The Hollow Skull Caverns",
        body: "Your sinuses are four pairs of air-filled caverns inside your facial bones. They make your heavy skull light enough for your neck to carry while acting as an acoustic echo chamber that gives your voice its unique richness.",
      },
      {
        heading: "2. The Nitric Oxide Antiviral Gas Chamber",
        body: "Your nasal sinuses continuously brew a remarkable molecule called nitric oxide (NO). When you inhale through your nose, this gas travels down to your lungs, dilating blood vessels and acting as a natural shield that destroys airborne viruses and bacteria.",
      },
    ],
    conclusion:
      "Always breathe through your nose instead of your mouth. Mouth breathing bypasses your sinus air conditioning and delivers cold, dry, unfiltered air straight into your lungs.",
    bodyPartId: "sinuses",
  },
  {
    id: "skin-28-day-shedding",
    title: "The 28-Day Living Armor: How Your Skin Rebuilds Itself",
    introduction:
      "Your skin is your largest living organ, weighing about 8 pounds and covering 20 square feet. It never stops working: every 28 to 30 days, your body produces a completely new external skin shield.",
    sections: [
      {
        heading: "1. The Cellular Conveyor Belt",
        body: "In the deep basal layer of your skin, keratinocyte cells divide around the clock. As they mature, they migrate outward toward the surface, producing tough waterproof keratin before flattening into protective dead armor plates.",
      },
      {
        heading: "2. Acid Mantle and Friendly Microbes",
        body: "Your skin maintains a mild acidic surface pH (around 4.5 to 5.5) called the 'acid mantle'. This microscopic barrier, combined with billions of beneficial skin bacteria, stops dangerous fungal and bacterial invaders from multiplying.",
      },
    ],
    conclusion:
      "Harsh antibacterial soaps strip away your skin's acidic armor and dry out the protective lipid shield. Wash with gentle, pH-balanced cleansers and moisturize while skin is damp.",
    bodyPartId: "skin",
  },
];

export const SENSORY_FACTS: SensoryFact[] = [
  {
    id: "myoclonus",
    sensation: "Sudden Eye Twitch (Myokymia)",
    cause:
      "Minor involuntary muscle contractions triggered by micro-spasms in the eyelid muscles, usually exacerbated by dry eyes, stress, or caffeine.",
    tip: "Close your eyes, apply a warm compress for 2 minutes, and reduce caffeine intake today.",
    bodyPartId: "eyes",
  },
  {
    id: "borborygmi",
    sensation: "Stomach Growling (Borborygmi)",
    cause:
      "The sound of gas and fluid moving through the intestines as the peristaltic muscles contract, even when the stomach is empty (housekeeping wave).",
    tip: "Drink a warm glass of water; it helps soothe the digestive waves.",
    bodyPartId: "stomach",
  },
  {
    id: "sphenopalatine-ganglioneuralgia",
    sensation: "Brain Freeze (Ice Cream Headache)",
    cause:
      "When something freezing touches the roof of your mouth, the blood vessels there suddenly shrink and then snap wide open. Your main facial nerve (trigeminal nerve) panics and mistakenly tells your brain the pain is coming from your forehead.",
    tip: "Press your warm tongue firmly against the roof of your mouth for 10 seconds to warm the blood vessels back up.",
    bodyPartId: "brain",
  },
  {
    id: "paresthesia",
    sensation: "Pins and Needles (Limb 'Falling Asleep')",
    cause:
      "Sitting or leaning on a limb squeezes the tiny blood vessels feeding your nerves, temporarily pausing their messages. When you move and blood rushes back in, the nerves fire chaotic 'reboot' sparks all at once.",
    tip: "Gently flex and circle your ankle or wrist to pump fresh blood back to the nerves without jarring them.",
    bodyPartId: "hands",
  },
  {
    id: "hypnic-jerk",
    sensation: "Sudden Falling Jolt Right Before Sleep (Hypnic Jerk)",
    cause:
      "As your breathing slows and your muscles go limp quickly when falling asleep, your ancient survival brain sometimes misreads that sudden relaxation as falling out of a tree and fires a wakeup jolt.",
    tip: "Cut out afternoon caffeine and do 2 minutes of slow stretching before getting under the covers.",
    bodyPartId: "muscles",
  },
  {
    id: "piloerection",
    sensation: "Goosebumps From Cold or Music (Piloerection)",
    cause:
      "Tiny muscles attached to the base of each hair follicle contract when triggered by cold air or a rush of emotion, pulling the hair upright—a leftover reflex from when our furry ancestors puffed up their coat to trap heat.",
    tip: "If triggered by chills without cold air, sip warm water and check if you are fighting off a mild fever.",
    bodyPartId: "skin",
  },
  {
    id: "phosphenes",
    sensation: "Seeing Stars When You Rub Your Eyes (Phosphenes)",
    cause:
      "The light-detecting cells at the back of your eye (the retina) only know how to speak one language to your brain: light. Gentle physical pressure tricks them into sending flash signals even in total darkness.",
    tip: "Avoid rubbing your eyes hard, which can scratch your cornea; use lubricating eye drops if your eyes feel itchy.",
    bodyPartId: "eyes",
  },
  {
    id: "transient-ear-noise",
    sensation: "Brief Sudden Ringing in One Ear",
    cause:
      "Tiny sound-detecting hair cells inside your inner ear (cochlea) occasionally recalibrate their electrical gain, producing a harmless 15-to-30-second high-pitched tone that fades on its own.",
    tip: "Take a slow deep breath and relax your jaw; if ringing lasts for days or comes with dizziness, have a doctor check your ears.",
    bodyPartId: "ears",
  },
  {
    id: "palmar-erythema-blush",
    sensation: "Warm, Tingly Hands After Coming Inside From the Cold",
    cause:
      "When your hands get freezing cold, your body narrows the tiny blood vessels in your fingers to keep your heart and organs warm. Once you step inside, those vessels open wide all at once (rebound vasodilation), rushing warm blood back into cold nerves.",
    tip: "Warm cold hands under lukewarm water—never hot water—so blood vessels open gradually without throbbing.",
    bodyPartId: "hands",
  },
  {
    id: "photic-sneeze-reflex",
    sensation: "Sudden Sneeze When Stepping Into Bright Sunlight (ACHOO Syndrome)",
    cause:
      "In about 1 in 4 people, the optic nerve carrying bright light signals from the eyes runs so close to the facial trigeminal nerve that a sudden burst of sunlight 'cross-wires' and tricks the brain into thinking the nose is being tickled.",
    tip: "Put on polarized sunglasses before stepping out of a dark building into bright midday sun, especially when driving.",
    bodyPartId: "sinuses",
  },
  {
    id: "orthostatic-headrush",
    sensation: "Brief Head-Rush or Dizzy Spell When Standing Up Fast",
    cause:
      "When you stand up abruptly from lying or sitting, gravity temporarily pulls about half a liter of blood down into your legs and belly. Before your heart and neck sensors (baroreceptors) can clamp blood vessels shut, blood pressure in your head drops for 2 to 3 seconds.",
    tip: "Pause on the edge of the bed for 5 seconds before standing, and flex your calf muscles to pump blood back up toward your heart.",
    bodyPartId: "heart",
  },
  {
    id: "brain-freeze-sphenopalatine",
    sensation: "Ice Cream Headache (Sudden Brain Freeze)",
    cause:
      "When cold food or ice cream touches the warm roof of your mouth, local blood vessels rapidly constrict to save heat and then violently dilate to restore warmth. Pain sensors in your palate bundle (the sphenopalatine ganglion) interpret this rapid temperature shift as danger, and the trigeminal nerve mistakenly refers the pain upward to your forehead and temples.",
    tip: "Press the flat, warm underside of your tongue firmly against the roof of your mouth for 10 seconds to warm the nerve bundle and end the freeze.",
    bodyPartId: "throat",
  },
];

export const EMERGENCY_SCENARIOS: EmergencyScenario[] = [
  {
    id: "cardiac-arrest",
    name: "Cardiac Arrest (Heart Stopped)",
    warningSigns: [
      "Sudden loss of responsiveness",
      "No normal breathing (only gasping)",
      "No detectable pulse",
      "Collapsing abruptly",
    ],
    steps: [
      "Check the scene for safety, then tap the person's shoulder and shout, 'Are you okay?'",
      "If unresponsive, immediately yell for help and call your local emergency number.",
      "Send someone to get an AED (Automated External Defibrillator) immediately.",
      "Begin Hands-Only CPR: Push hard and fast in the center of the chest (use the CPR Pacer tool).",
      "When the AED arrives, turn it on and follow the voice prompts instantly.",
    ],
    beforeAmbulance: [
      "Do not stop CPR unless the person shows clear signs of life or the AED is analyzing.",
      "Unlock the front door so paramedics can enter quickly.",
      "Have someone wait outside to flag down the ambulance.",
    ],
    ifAlone: [
      "Call emergency services immediately and put your phone on speaker.",
      "Unlock your front door immediately before you lose consciousness.",
      "If you feel you are going to pass out, lie down on the floor to prevent head trauma from falling.",
      "You cannot perform effective CPR on yourself. Focus on staying calm, breathing, and waiting for help.",
    ],
  },
  {
    id: "heart-attack",
    name: "Myocardial Infarction (Heart Attack)",
    warningSigns: [
      "Chest pressure, tightness, or squeezing",
      "Pain radiating to the left arm, neck, jaw, or back",
      "Cold sweat and sudden dizziness",
      "Shortness of breath and extreme fatigue",
    ],
    steps: [
      "Have the person sit down, rest, and try to keep them calm.",
      "Loosen any tight clothing around their neck and chest.",
      "Call emergency services immediately—do not attempt to drive them to the hospital yourself.",
      "Ask if they are prescribed nitroglycerin and help them take it if so.",
      "If they are not allergic, have them chew and swallow one adult aspirin (325mg) or four low-dose aspirin.",
    ],
    beforeAmbulance: [
      "Keep the person talking to monitor their consciousness.",
      "Prepare to begin CPR if they lose consciousness and stop breathing.",
      "Gather all their current daily medications to hand to the paramedics.",
    ],
    ifAlone: [
      "Call emergency services immediately and put your phone on speaker. Do NOT drive yourself.",
      "Unlock your front door immediately.",
      "Sit on the floor or in a low chair to prevent injury if you collapse.",
      "Chew and swallow one adult aspirin (325mg) if you are not allergic.",
      "Try to stay calm. Take slow, deep breaths while waiting for help.",
    ],
  },
  {
    id: "stroke",
    name: "Stroke (Brain Ischemia/Hemorrhage)",
    warningSigns: [
      "F - Face Drooping (One side of the face is numb/drooping)",
      "A - Arm Weakness (Inability to raise both arms evenly)",
      "S - Speech Difficulty (Slurred speech or unable to repeat a simple sentence)",
      "T - Time to call emergency services immediately",
    ],
    steps: [
      "Conduct the F.A.S.T. test to verify symptoms.",
      "Call emergency services immediately. Every minute counts to save brain tissue.",
      "Note the exact time the first symptoms appeared. Paramedics will need this for clot-busting drugs.",
      "Lay the person down safely on their side with their head slightly elevated.",
      "Keep them comfortable and reassure them calmly.",
    ],
    beforeAmbulance: [
      "Do NOT give them any food, water, or medication (including aspirin), as they may choke or it may worsen a bleeding stroke.",
      "Write down the exact 'Time of Last Known Normal' for the medical team.",
      "Clear a path in your house for the stretcher.",
    ],
    ifAlone: [
      "Call emergency services immediately and leave the line open on speaker even if you cannot speak clearly.",
      "Unlock your front door immediately. Every minute counts.",
      "Do NOT attempt to drive to the hospital.",
      "Lie down in a safe, comfortable position. Do not eat or drink anything, including aspirin.",
      "Stay as still as possible and try to remain calm.",
    ],
  },
  {
    id: "choking",
    name: "Severe Choking",
    warningSigns: [
      "Clutching the throat with both hands (universal choking sign)",
      "Inability to speak, cry, or cough forcefully",
      "Skin, lips, or nails turning blue or dusky",
      "High-pitched squeaking sounds when trying to breathe",
    ],
    steps: [
      "Ask, 'Are you choking?' If they nod yes, tell them you are going to help.",
      "Stand behind the person and wrap your arms around their waist.",
      "Make a fist with one hand and place the thumb side just above their belly button.",
      "Grasp your fist with your other hand.",
      "Give quick, upward thrusts (Heimlich maneuver) into the abdomen.",
      "Continue thrusts until the object is forced out or the person becomes unresponsive.",
    ],
    beforeAmbulance: [
      "If the person becomes unresponsive, lower them to the ground.",
      "Call emergency services immediately.",
      "Begin standard CPR starting with chest compressions. Look in the mouth for an object before providing rescue breaths.",
    ],
    ifAlone: [
      "Call emergency services and leave the phone on speaker (even if you can't speak, they can hear you struggling).",
      "Perform the Heimlich maneuver on yourself: Make a fist just above your navel, grasp it with your other hand, and thrust quickly inward and upward.",
      "Alternatively, forcefully press your upper abdomen over a hard edge (like the back of a chair, a table edge, or a railing) and thrust inward and upward.",
      "Do not go to the bathroom or hide; stay near an unlocked door if possible.",
    ],
  },
  {
    id: "anaphylaxis",
    name: "Severe Allergic Reaction (Anaphylaxis)",
    warningSigns: [
      "Swelling of the lips, tongue, or throat",
      "Difficulty breathing, swallowing, or severe wheezing",
      "Widespread hives, redness, or itching",
      "Dizziness, fainting, or feeling of impending doom",
    ],
    steps: [
      "Ask the person if they carry an epinephrine auto-injector (EpiPen).",
      "If yes, help them use it immediately: press firmly against the outer mid-thigh and hold for 3-10 seconds.",
      "Call emergency services immediately, even if symptoms improve.",
      "Have the person lie flat on their back. If they are having trouble breathing, let them sit up.",
      "If symptoms do not improve after 5-15 minutes, administer a second EpiPen if available.",
    ],
    beforeAmbulance: [
      "Keep the used EpiPen to hand to the paramedics.",
      "Monitor their breathing and be ready to begin CPR if they become unresponsive.",
      "Try to identify and remove the allergen trigger if it is still present (e.g., a bee stinger).",
    ],
  },
  {
    id: "severe-bleeding",
    name: "Massive Hemorrhage (Severe Bleeding)",
    warningSigns: [
      "Blood spurting or pumping from a wound",
      "Blood pooling rapidly on the ground",
      "Clothing completely soaked in blood",
      "Amputation or partial amputation",
    ],
    steps: [
      "Ensure your own safety first (put on medical gloves if available).",
      "Call emergency services immediately.",
      "Find the source of the bleeding and apply direct, extremely firm pressure using a clean cloth or gauze.",
      "If the bleeding is on a limb and cannot be controlled by pressure, apply a tourniquet 2-3 inches above the wound (not on a joint).",
      "Tighten the tourniquet until the bleeding completely stops.",
    ],
    beforeAmbulance: [
      "Write down the exact time the tourniquet was applied (e.g., on their forehead or on the tourniquet itself).",
      "Never remove a tourniquet once it is applied; only medical professionals should remove it.",
      "Keep the person warm with an emergency blanket to help prevent physical shock.",
    ],
    ifAlone: [
      "Call emergency services immediately on speakerphone.",
      "Apply extremely firm, direct pressure to the wound with whatever you have (shirt, towel, hands). Do not let go.",
      "If the bleeding is on an arm or leg and won't stop, apply a makeshift tourniquet high and tight above the wound, and tie it as tight as possible.",
      "Keep yourself warm and lie down if you start feeling lightheaded.",
    ],
  },
  {
    id: "seizure",
    name: "Grand Mal Seizure",
    warningSigns: [
      "Sudden loss of consciousness and collapsing",
      "Uncontrollable muscle spasms and jerking",
      "Clenched teeth or biting of the tongue",
      "Loss of bladder or bowel control",
    ],
    steps: [
      "Ease the person to the floor to prevent falling injuries.",
      "Turn the person gently onto one side to help keep their airway clear.",
      "Clear the surrounding area of hard or sharp objects.",
      "Place something soft and flat under their head (like a folded jacket).",
      "Time the seizure. If it lasts longer than 5 minutes, call emergency services.",
    ],
    beforeAmbulance: [
      "Do NOT try to hold the person down or stop their movements.",
      "Do NOT put anything in the person's mouth.",
      "Once the seizure ends, stay with them until they are fully conscious and aware of their surroundings.",
    ],
  },
  {
    id: "asthma-attack",
    name: "Severe Asthma Attack",
    warningSigns: [
      "Severe wheezing both when breathing in and out",
      "Coughing that won't stop",
      "Very rapid breathing and chest retractions",
      "Inability to speak in full sentences without gasping",
    ],
    steps: [
      "Help the person sit comfortably upright (lying down makes breathing harder).",
      "Keep them calm, as panic worsens shortness of breath.",
      "Help them use their rescue inhaler (usually blue, e.g., Albuterol).",
      "Use a spacer with the inhaler if one is available.",
      "If they don't have an inhaler, or if symptoms don't improve within 5 minutes of using it, call emergency services.",
    ],
    beforeAmbulance: [
      "Continue to give 1 puff of the inhaler every 30 to 60 seconds (up to 10 puffs) while waiting for help.",
      "Ensure the room has fresh air and is free of known triggers (smoke, pets, strong odors).",
      "Have their medical history ready for paramedics.",
    ],
    ifAlone: [
      "Call emergency services immediately and leave the line open on speakerphone so they can track your location.",
      "Sit upright or lean forward slightly. Do NOT lie down.",
      "Take slow, steady breaths. Use your rescue inhaler if you have one.",
      "Unlock your front door so emergency responders can enter.",
      "Try to remain as calm as possible to reduce oxygen demand.",
    ],
  },
  {
    id: "diabetic-emergency",
    name: "Diabetic Emergency (Severe Hypoglycemia)",
    warningSigns: [
      "Extreme confusion, irritability, or erratic behavior",
      "Shaking, trembling, and heavy sweating",
      "Pale skin and sudden intense hunger",
      "Loss of consciousness or seizures",
    ],
    steps: [
      "If the person is awake and can swallow safely, give them 15-20 grams of fast-acting sugar (e.g., fruit juice, regular soda, honey, or glucose tablets).",
      "Wait 15 minutes. If they are still confused or symptomatic, give another dose of sugar.",
      "If the person becomes unconscious or is having a seizure, call emergency services immediately.",
      "If unconscious, do NOT put food or liquid in their mouth (they could choke).",
      "If available and you are trained, administer a Glucagon injection.",
    ],
    beforeAmbulance: [
      "If unconscious, place them in the recovery position (on their side).",
      "Gather their insulin, glucose monitor, and any other medications to give to the paramedics.",
      "Monitor their breathing closely and be ready to begin CPR if breathing stops.",
    ],
  },
  {
    id: "severe-burns",
    name: "Major Burns (Thermal or Chemical)",
    warningSigns: [
      "Burns covering a large area of the body or on the face, hands, or groin",
      "Skin that is dry, leathery, charred, or white (3rd degree)",
      "Severe pain, or paradoxically, no pain at all (nerve damage)",
      "Difficulty breathing (if airways are burned)",
    ],
    steps: [
      "Stop the burning process: Extinguish flames (Stop, Drop, and Roll) or safely remove the person from the heat/chemical source.",
      "Call emergency services immediately.",
      "Cool the burn with cool (not ice cold) running water for at least 10-20 minutes. Do NOT use ice.",
      "Remove jewelry, belts, or tight clothing near the burn before swelling begins.",
      "Cover the burn loosely with a clean, dry, sterile dressing or plastic wrap.",
    ],
    beforeAmbulance: [
      "Do NOT remove clothing that is stuck to the burn.",
      "Do NOT apply ointments, butter, lotions, or pop any blisters.",
      "Keep the person warm with a blanket on unburned areas to prevent hypothermia and shock.",
    ],
  },
  {
    id: "heat-stroke",
    name: "Heat Stroke (Life-Threatening)",
    warningSigns: [
      "Extremely high body temperature (103°F / 39.4°C or higher)",
      "Hot, red, dry skin (sweating has usually stopped)",
      "Severe confusion, slurred speech, or hallucinations",
      "Fainting, losing consciousness, or seizures",
    ],
    steps: [
      "Call emergency services immediately. Heat stroke is a strict medical emergency.",
      "Move the person to a cooler place (air conditioning or deep shade) immediately.",
      "Cool them down rapidly: douse them with cold water, apply ice packs to the neck, armpits, and groin.",
      "Fan air over them while wetting their skin.",
      "If they are fully conscious, give small, slow sips of cool water.",
    ],
    beforeAmbulance: [
      "Do NOT give them anything to drink if they are confused or unconscious.",
      "Monitor their breathing and pulse constantly.",
      "Continue aggressive cooling until medical help arrives.",
    ],
  },
  {
    id: "hypothermia",
    name: "Severe Hypothermia",
    warningSigns: [
      "Uncontrollable shivering (or shivering that has dangerously stopped)",
      "Slurred speech, mumbling, or confusion",
      "Clumsiness, lack of coordination, or stumbling",
      "Very low energy, drowsiness, or loss of consciousness",
    ],
    steps: [
      "Call emergency services immediately.",
      "Move the person gently to a warm, dry location. Rough handling can trigger a fatal irregular heartbeat.",
      "Remove any wet clothing and dry the person.",
      "Warm the center of their body first (chest, neck, head, groin) using dry, warm blankets or skin-to-skin contact.",
      "Offer warm, sweet, non-alcoholic beverages ONLY if they are fully alert and can swallow safely.",
    ],
    beforeAmbulance: [
      "Do NOT apply direct heat (like hot water, heating pads, or heat lamps) to bare skin.",
      "Do NOT rub or massage their limbs (this can force cold blood back to the heart).",
      "Do NOT attempt to warm their arms and legs first.",
    ],
  },
  {
    id: "overdose",
    name: "Poisoning or Drug Overdose",
    warningSigns: [
      "Unresponsiveness or extreme drowsiness",
      "Pinpoint pupils or highly dilated pupils",
      "Slow, shallow, or stopped breathing (common in opioid overdose)",
      "Vomiting, seizures, or empty pill bottles nearby",
    ],
    steps: [
      "Call emergency services and/or the Poison Control Center immediately.",
      "Check the scene for hazards (needles, toxic fumes, pill bottles).",
      "If you suspect an opioid overdose and have Naloxone (Narcan), administer it immediately via nasal spray or injection.",
      "If the person is unconscious but breathing, place them in the recovery position (on their side) to prevent choking on vomit.",
      "If breathing stops, begin CPR immediately.",
    ],
    beforeAmbulance: [
      "Gather all pill bottles, powders, or substances found near the victim to hand to paramedics.",
      "Do NOT induce vomiting unless explicitly instructed to do so by Poison Control.",
      "Monitor their breathing continuously; multiple doses of Narcan may be needed.",
    ],
  },
  {
    id: "spinal-injury",
    name: "Spinal / Neck Trauma",
    warningSigns: [
      "Severe pain or pressure in the neck, head, or back",
      "Numbness, tingling, or loss of feeling in hands, fingers, feet, or toes",
      "Loss of control over parts of the body (paralysis)",
      "Unnatural positioning of the head or neck after a fall or crash",
    ],
    steps: [
      "Call emergency services immediately.",
      "Do NOT move the person unless they are in immediate, life-threatening danger (e.g., a burning car).",
      "Instruct the person to stay completely still and not to nod or shake their head.",
      "Place your hands on both sides of their head to hold it perfectly still in the position you found it.",
      "Keep them calm and reassure them that help is coming.",
    ],
    beforeAmbulance: [
      "Do NOT attempt to straighten their neck or body.",
      "Do NOT remove their helmet if they are wearing one (e.g., motorcycle or bicycle helmet).",
      "If you must begin CPR due to no breathing, do not tilt the head back; use the jaw-thrust maneuver if trained.",
    ],
  },
  {
    id: "drowning",
    name: "Drowning (Submersion Injury)",
    warningSigns: [
      "Person found unconscious in water",
      "Blue or pale skin and lips",
      "Coughing up pink, frothy fluid",
      "No breathing or isolated gasps",
    ],
    steps: [
      "Safely remove the person from the water. Do not put yourself in danger of drowning.",
      "Check for responsiveness and normal breathing.",
      "If unresponsive and not breathing, call emergency services immediately.",
      "Begin CPR immediately. Unlike sudden cardiac arrest, drowning requires oxygen: start with 2 rescue breaths followed by 30 chest compressions.",
      "If an AED is available, dry the person's chest thoroughly before applying pads.",
    ],
    beforeAmbulance: [
      "If they vomit during CPR, roll them onto their side to clear the airway, then roll them back to continue.",
      "Even if they recover and seem fine, they MUST go to the hospital to prevent 'secondary drowning' (fluid in the lungs).",
      "Keep them warm with blankets after removing wet clothing.",
    ],
  },
  {
    id: "electric-shock",
    name: "Severe Electrical Shock",
    warningSigns: [
      "Person is unresponsive and near an electrical source",
      "Visible burn marks on the skin",
      "Muscle spasms, seizures, or muscle stiffness",
      "Irregular heartbeat or no pulse",
    ],
    steps: [
      "Do NOT touch the person if they are still in contact with the electrical current.",
      "Turn off the source of electricity if possible (unplug the appliance or turn off the circuit breaker).",
      "If you cannot turn it off, use a dry, non-conducting object (like a wooden broom handle) to push the person away from the source.",
      "Once they are clear of the current, call emergency services.",
      "Check for breathing and a pulse. Begin CPR immediately if they are unresponsive and not breathing.",
    ],
    beforeAmbulance: [
      "Cover any visible burns loosely with a sterile gauze bandage (do not use blankets or towels, as loose fibers can stick).",
      "Keep the person lying down and prevent them from moving, as electrical shocks can cause unseen spinal injuries or internal burns.",
      "Wait for paramedics even if the person feels fine, as electrical shocks can cause delayed heart arrhythmias.",
    ],
  },
  {
    id: "severe-nosebleed",
    name: "Uncontrolled Nosebleed (Epistaxis)",
    warningSigns: [
      "Heavy bleeding from one or both nostrils that does not slow after 15-20 minutes of firm pinching",
      "Blood pouring down the back of the throat causing coughing or vomiting blood",
      "Bleeding after a strong blow to the head or face",
      "Dizziness, pale skin, or rapid heart rate (especially if taking blood thinners)",
    ],
    steps: [
      "Sit upright and lean slightly FORWARD at the waist so blood drains out the nose instead of down your throat.",
      "Use your thumb and index finger to firmly pinch the soft, fleshy lower part of your nose (just below the bony bridge) shut against your face.",
      "Breathe calmly through your mouth and hold that pinch continuously for a full 10 to 15 minutes without peeking.",
      "Place an ice pack or cold cloth across the bridge of the nose and cheeks to help narrow the blood vessels.",
      "If bleeding continues past 20 minutes or is very heavy, seek urgent medical care or call emergency services.",
    ],
    beforeAmbulance: [
      "Do NOT tilt the head backward—swallowing blood irritates the stomach and can cause vomiting or choking.",
      "Do NOT stuff tissues or cotton deep inside the nostrils, as pulling them out later rips the healing clot off.",
      "Keep a list of any blood-thinning medications (like aspirin, warfarin, or apixaban) ready for the medical team.",
    ],
    ifAlone: [
      "Sit upright leaning over a sink or bowl and pinch the soft lower nostrils firmly without letting go.",
      "Set a 15-minute timer on your phone so you don't let go early to check.",
      "If you feel dizzy, weak, or the bleeding won't stop after 20 minutes, call emergency services on speakerphone.",
    ],
  },
  {
    id: "chemical-eye-splash",
    name: "Chemical Splash in the Eye",
    warningSigns: [
      "Intense burning, stinging, or sharp pain in the eye after contact with cleaner, bleach, acid, or lime/cement",
      "Uncontrollable tearing and inability to keep the eyelids open",
      "Redness, swelling, or cloudiness on the clear front surface of the eye",
      "Blurred or rapidly dimming vision",
    ],
    steps: [
      "Start flushing the eye with clean, lukewarm running water IMMEDIATELY—every second counts to prevent permanent blindness.",
      "Hold the eyelids wide open with your fingers and roll the eyeball in all directions while water runs gently from the inner corner (near the nose) outward.",
      "Remove contact lenses as soon as water starts flushing, if they haven't washed out already.",
      "Continue non-stop water flushing for at least 15 to 20 minutes (or 30 minutes for strong drain/oven cleaners).",
      "Call emergency services or Poison Control while flushing, and go straight to the emergency room afterward.",
    ],
    beforeAmbulance: [
      "Do NOT rub the eye or try to 'neutralize' a chemical with another substance (like vinegar or baking soda)—only use clean water or saline.",
      "Do NOT bandage the eye tightly.",
      "Take a photo of the chemical container or bring the label with you so doctors know the exact pH of the chemical.",
    ],
    ifAlone: [
      "Step straight into the shower with your clothes on or put your face directly under a gentle sink faucet immediately.",
      "Use one hand to hold your eyelids open under the water and your other hand to dial emergency services on speakerphone.",
      "Keep flushing for a full 15-20 minutes until paramedics arrive.",
    ],
  },
];

export const QA_ENTRIES: QAEntry[] = [
  {
    id: "sleep-cycles-expert",
    question: "Why do I feel so tired even if I sleep for 8 hours?",
    answer:
      "Sleep quality is just as important as quantity. If you wake up in the middle of a deep sleep stage (Stage 3/4) rather than at the end of a 90-minute cycle, you will experience sleep inertia. Additionally, alcohol, screen exposure before bed, or sleep apnea can disrupt deep sleep phases.",
    expertName: "Dr. Sarah Patel",
    expertTitle: "Sleep Specialist & Neuroscientist",
    bodyPartId: "brain",
  },
  {
    id: "resting-heart-rate-expert",
    question: "What does my resting heart rate actually tell me about my heart health?",
    answer:
      "A normal adult resting heart rate sits between 60 and 100 beats per minute, though fit people often see 50 to 60 because each squeeze pumps more blood. If your resting rate suddenly jumps by 7 to 10 beats per minute for several days in a row, it is often an early clue of dehydration, poor sleep, high stress, or a brewing viral infection.",
    expertName: "Dr. Marcus Vance",
    expertTitle: "Preventive Cardiologist",
    bodyPartId: "heart",
  },
  {
    id: "gut-antibiotic-recovery-expert",
    question: "How do I rebuild my gut bacteria after taking a course of antibiotics?",
    answer:
      "Antibiotics act like a forest fire—they clear out bad bacteria, but they also wipe out helpful ones. Skip random high-dose probiotic pills unless prescribed; instead, eat 2 to 3 servings daily of live fermented foods (like plain yogurt, kefir, or sauerkraut) alongside prebiotic soluble fibers (oats, bananas, lentils, and cooked-and-cooled potatoes) which feed your native good bacteria so they regrow.",
    expertName: "Dr. Elena Rostova",
    expertTitle: "Clinical Gastroenterologist",
    bodyPartId: "large-intestine",
  },
  {
    id: "joint-clicking-pain-expert",
    question: "Why do my knees click or pop when I squat, and is it damaging my joints?",
    answer:
      "Painless popping or crackling (called crepitus) is usually just tiny gas bubbles popping in the joint fluid or tendons sliding smoothly over bone bumps—it does NOT mean your cartilage is wearing out. You only need a doctor's check if the clicking comes with sharp pain, swelling, warmth, or the knee feeling like it catches or locks up.",
    expertName: "Dr. David Chen",
    expertTitle: "Orthopedic Sports Physician",
    bodyPartId: "knees",
  },
  {
    id: "blue-light-eye-strain-expert",
    question: "Do blue-light glasses actually protect my eyes from computer screens?",
    answer:
      "Major eye studies (including Cochrane reviews) show that blue light from screens does not damage your retina and blue-light glasses rarely stop digital eye strain. The real reason your eyes ache at a computer is that you blink 60% less often and lock your focusing muscle at one distance. Follow the 20-20-20 rule and keep screens an arm's length away for real relief, while dimming screens at night to protect sleep.",
    expertName: "Dr. Priya Nair",
    expertTitle: "Board-Certified Ophthalmologist",
    bodyPartId: "eyes",
  },
  {
    id: "hydration-urine-color-expert",
    question: "Do I really need to force down 8 glasses of water if I'm not thirsty?",
    answer:
      "Your kidneys and brain have a finely tuned thirst sensor, and about 20% of your daily water comes from food like fruits, vegetables, and soups. Instead of forcing a strict glass count, check the toilet bowl: pale straw-yellow pee means you are well hydrated, dark apple-juice yellow means drink up, and crystal-clear pee all day means you may be drinking more than you need.",
    expertName: "Dr. Samuel Okafor",
    expertTitle: "Clinical Nephrologist (Kidney Specialist)",
    bodyPartId: "kidneys",
  },
  {
    id: "mouth-taping-sleep-expert",
    question: "Is the social media trend of taping your mouth shut at night safe for better sleep?",
    answer:
      "Breathing through your nose warms, filters, and moistens air, which is healthier than mouth breathing. However, taping your mouth shut can be dangerous if you have undiagnosed sleep apnea, a deviated septum, or nasal allergies. Instead of tape, clear your nose before bed with a saline spray or nasal strips, and ask a sleep doctor to check your airway if you wake up with a bone-dry mouth.",
    expertName: "Dr. Alan Sterling",
    expertTitle: "Ear, Nose & Throat (ENT) Surgeon",
    bodyPartId: "sinuses",
  },
  {
    id: "contact-lens-tap-water-expert",
    question:
      "Why is it dangerous to rinse contact lenses in tap water or wear them in the shower?",
    answer:
      "Clean drinking tap water is safe for your stomach, but it is not sterile. Tap water can carry a tough microscopic organism called Acanthamoeba that sticks to soft contact lenses and burrows into the clear front window of your eye (cornea), causing a painful, sight-threatening infection. Always use sterile contact lens solution and take lenses out before showering or swimming.",
    expertName: "Dr. Priya Nair",
    expertTitle: "Board-Certified Ophthalmologist",
    bodyPartId: "eyes",
  },
  {
    id: "creatine-hair-loss-expert",
    question:
      "Does taking creatine powder for muscle strength actually cause baldness or hair loss?",
    answer:
      "No. The myth began from a single small 2009 rugby study that observed a modest rise in DHT hormone levels, but it never measured actual hair loss. Since then, over a dozen clinical trials and systematic reviews have studied creatine supplementation, and none have found evidence that creatine damages hair follicles or causes hair thinning. Hair loss is almost entirely driven by genetics and age.",
    expertName: "Dr. Rachel Simmons",
    expertTitle: "Sports Nutritionist & Exercise Physiologist",
    bodyPartId: "muscles",
  },
  {
    id: "cracking-knuckles-arthritis-expert",
    question:
      "Does cracking your knuckles or fingers cause arthritis or swollen joints later in life?",
    answer:
      "No. The popping sound does not come from bones rubbing together; it is caused by tiny gas bubbles (mostly nitrogen) popping inside the lubricating fluid (synovial fluid) that cushions your finger joints. Famous clinical studies, including a doctor who cracked the knuckles of only his left hand for 50 years, showed zero difference in arthritis rates between his two hands. However, pulling your joints with excessive force can irritate surrounding tendons.",
    expertName: "Dr. Marcus Vance",
    expertTitle: "Board-Certified Orthopedic Surgeon & Hand Specialist",
    bodyPartId: "hands",
  },
  {
    id: "bloating-after-healthy-meals-expert",
    question: "Why do I feel bloated and gassy even when I eat healthy salads and lentils?",
    answer:
      "Eating lots of raw vegetables, beans, and whole grains suddenly dumps huge amounts of fermentable fibers and plant oligosaccharides into your gut. If your gut bacteria are not used to this volume, they produce heavy hydrogen gas while breaking it down. To fix it, soak lentils for 8 hours before cooking, steam your vegetables lightly instead of eating them raw, chew thoroughly, and increase fiber gradually over 3 to 4 weeks.",
    expertName: "Dr. Alistair Vance",
    expertTitle: "Consultant Gastroenterologist & Gut Microbiome Specialist",
    bodyPartId: "stomach",
  },
  {
    id: "painkillers-kidney-damage-expert",
    question: "Can taking regular ibuprofen or pain relievers really damage my kidneys?",
    answer:
      "Yes. NSAID painkillers (like ibuprofen, naproxen, and diclofenac) work by blocking prostaglandins—the exact chemicals your body needs to keep kidney blood vessels open. If you take them frequently or when dehydrated, blood flow to your kidney filters drops drastically, causing acute kidney injury or chronic scarring. If you have headaches or body aches, stay hydrated, try natural relief first, and discuss safer alternatives like paracetamol with your doctor.",
    expertName: "Dr. Samuel Okafor",
    expertTitle: "Clinical Nephrologist (Kidney Specialist)",
    bodyPartId: "kidneys",
  },
  {
    id: "reversing-fatty-liver-expert",
    question: "Can fatty liver disease be completely reversed without prescription medications?",
    answer:
      "Yes! The liver has an unmatched power to heal and regenerate. In clinical trials, losing just 7% to 10% of body weight completely clears liver fat and reverses early inflammation in over 85% of patients with non-alcoholic fatty liver disease (NAFLD). The most potent steps are: cutting out liquid fructose (sodas and sweet juices), drinking 2 cups of plain black coffee daily, walking 30 minutes a day, and maintaining a 12-hour overnight digestive rest window.",
    expertName: "Dr. Sunita Mehta",
    expertTitle: "Senior Hepatologist & Liver Transplant Physician",
    bodyPartId: "liver",
  },
];

// ━━━ Search and Retrieval Helpers ━━━

export function getDiseasesFor(bodyPartId: string): DiseaseEntry[] {
  return DISEASES.filter((d) => d.bodyPartId === bodyPartId);
}

export function getRemediesFor(bodyPartId: string): RemedyEntry[] {
  return REMEDIES.filter((r) => r.bodyPartId === bodyPartId);
}

export function getHacksFor(bodyPartId: string): HealthHack[] {
  return HACKS.filter((h) => h.bodyPartId === bodyPartId);
}

export function getSensoryFactsFor(bodyPartId: string): SensoryFact[] {
  return SENSORY_FACTS.filter((s) => s.bodyPartId === bodyPartId);
}

export function getQAFor(bodyPartId: string): QAEntry[] {
  return QA_ENTRIES.filter((q) => q.bodyPartId === bodyPartId);
}

export function getBodyMarvelsFor(bodyPartId: string): BodyMarvel[] {
  return BODY_MARVELS.filter((b) => b.bodyPartId === bodyPartId);
}

// ━━━ Client-Side i18n Translations ━━━

export const TRANSLATIONS = {
  en: {
    home: "Home",
    explore: "Explore",
    diary: "Diary",
    daily: "Daily",
    quest: "Quest",
    greyMarket: "Regulatory Watch",
    explainThis: "Explain This",
    library: "Library",
    symptoms: "Symptoms",
    emergency: "Emergency",
    facts: "Facts",
    about: "About",
    notADiagnosis: "This tool is educational and NOT a medical diagnosis.",
    cprTimer: "CPR Guide & Timer",
    breathingPacer: "Breathing Pacer",
    heartSimulator: "Heart Beat Simulator",
    waterTracker: "Hydrate",
    sleepCalc: "Sleep cycles",
    symptomDiary: "Symptom Log",
    postureCheck: "Posture Check",
    language: "Language",
    bookmarks: "Bookmarks",
    searchPlaceholder: "Ask about your body... (e.g. why do eyes twitch?)",
    didYouKnow: "Did You Know?",
    myths: "Myths Debunked",
    scienceBehind: "The Science Behind It",
    medicalReviewed: "Medically Reviewed",
    foodLabels: "Food Labels",
    food: "Food & Nutrition",
  },
  hi: {
    home: "होम",
    explore: "अन्वेषण",
    diary: "डायरी",
    daily: "दैनिक ज्ञान",
    quest: "क्वेस्ट",
    greyMarket: "नियामक वेधशाला",
    explainThis: "समझाएं",
    library: "लाइब्रेरी",
    symptoms: "लक्षण मार्गदर्शिका",
    emergency: "आपातकालीन",
    facts: "तथ्य",
    about: "हमारे बारे में",
    notADiagnosis: "यह उपकरण केवल शैक्षिक है और कोई चिकित्सा निदान नहीं है।",
    cprTimer: "सीपीआर टाइमर",
    breathingPacer: "सांस गाइड",
    heartSimulator: "हृदय सिम्युलेटर",
    waterTracker: "पानी ट्रैकर",
    sleepCalc: "नींद चक्र",
    symptomDiary: "लक्षण लॉग",
    postureCheck: "पोस्चर चेक",
    language: "भाषा",
    bookmarks: "बुकमार्क",
    searchPlaceholder: "अपने शरीर के बारे में पूछें... (उदा: आँख क्यों फड़कती है?)",
    didYouKnow: "क्या आप जानते हैं?",
    myths: "झूठ बनाम सच",
    scienceBehind: "इसके पीछे का विज्ञान",
    medicalReviewed: "चिकित्सकीय रूप से परीक्षित",
    foodLabels: "खाद्य लेबल",
    food: "भोजन और पोषण",
  },
} as const;

export type Language = keyof typeof TRANSLATIONS;
