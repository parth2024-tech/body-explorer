// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// The Living Body Atlas — Content Database
// 30+ body parts, 200+ facts, myths, actions, questions
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

import generatedFactsJson from "./generated-facts.json";

export type Category =
  | "weird_wild"
  | "health_tip"
  | "what_damages_it"
  | "superfood"
  | "record_breaker";

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
  confidenceLevel?: 'HIGH' | 'MODERATE' | 'LOW' | 'INSUFFICIENT';
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
  genZContext?: string;
}

export interface RemedyEntry {
  id: string;
  name: string;
  description: string;
  evidenceRating: "traditional" | "anecdotal" | "studied" | "unproven";
  evidenceDetails: string;
  ailment: string;
  bodyPartId?: string;
  genZContext?: string;
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
  common: { label: "Common Knowledge", tokenClass: "bg-rarity-common/20 text-rarity-common border-rarity-common/40" },
  surprising: { label: "Surprising", tokenClass: "bg-rarity-surprising/20 text-rarity-surprising border-rarity-surprising/40" },
  mind_blowing: { label: "Mind-Blowing", tokenClass: "bg-rarity-mind/20 text-rarity-mind border-rarity-mind/40" },
  almost_unknown: { label: "Almost Unknown", tokenClass: "bg-rarity-rare/20 text-rarity-rare border-rarity-rare/40" },
};

export const LAYER_META: Record<Layer, { label: string; color: string; description: string }> = {
  facts: { label: "Facts", color: "#00E5C4", description: "Discover surprising facts about each body part" },
  personal: { label: "Personal", color: "#F5A623", description: "Your personal body diary entries" },
  challenge: { label: "Challenge", color: "#6B4FA0", description: "This week's community quest progress" },
  trends: { label: "Trends", color: "#E5504D", description: "What the community is tracking" },
  explore: { label: "Explore", color: "#E8E0D5", description: "Deep dive into anatomy" },
};

// ━━━ 30+ Body Parts ━━━
export const BODY_PARTS: BodyPart[] = [
  // HEAD
  { id: "brain", name: "Brain", slug: "brain", system: "Nervous", emoji: "🧠", shortDescription: "Three pounds of electrified jelly running your entire reality.", region: "head" },
  { id: "frontal-lobe", name: "Frontal Lobe", slug: "frontal-lobe", system: "Nervous", emoji: "🧩", shortDescription: "Your personality, decisions, and impulse control live here.", region: "head" },
  { id: "temporal-lobe", name: "Temporal Lobe", slug: "temporal-lobe", system: "Nervous", emoji: "🎵", shortDescription: "Where sound becomes meaning and memories are encoded.", region: "head" },
  { id: "eyes", name: "Eyes", slug: "eyes", system: "Sensory", emoji: "👁️", shortDescription: "Two soft cameras that capture 10 million colors.", region: "head" },
  { id: "ears", name: "Ears", slug: "ears", system: "Sensory", emoji: "👂", shortDescription: "Sound detectors that also keep you balanced.", region: "head" },
  { id: "sinuses", name: "Sinuses", slug: "sinuses", system: "Respiratory", emoji: "🌬️", shortDescription: "Air-filled cavities that warm, humidify, and filter every breath.", region: "head" },
  { id: "jaw", name: "Jaw", slug: "jaw", system: "Musculoskeletal", emoji: "🦷", shortDescription: "The strongest muscle in your body by force — your masseter.", region: "head" },
  { id: "throat", name: "Throat", slug: "throat", system: "Respiratory", emoji: "🗣️", shortDescription: "A multi-lane highway for air, food, and your voice.", region: "head" },

  // CHEST
  { id: "heart", name: "Heart", slug: "heart", system: "Circulatory", emoji: "❤️", shortDescription: "A fist-sized pump that beats 100,000 times a day.", region: "chest" },
  { id: "lung-left", name: "Left Lung", slug: "lung-left", system: "Respiratory", emoji: "🫁", shortDescription: "Smaller than the right — making room for your heart.", region: "chest" },
  { id: "lung-right", name: "Right Lung", slug: "lung-right", system: "Respiratory", emoji: "🫁", shortDescription: "Three lobes of breathing power — the bigger twin.", region: "chest" },

  // ABDOMEN
  { id: "liver", name: "Liver", slug: "liver", system: "Digestive", emoji: "🫀", shortDescription: "Your chemistry lab — runs 500+ reactions a minute.", region: "abdomen" },
  { id: "stomach", name: "Stomach", slug: "stomach", system: "Digestive", emoji: "🍽️", shortDescription: "An acid bag strong enough to dissolve metal.", region: "abdomen" },
  { id: "small-intestine", name: "Small Intestine", slug: "small-intestine", system: "Digestive", emoji: "🌀", shortDescription: "20 feet of surface area absorbing every nutrient you eat.", region: "abdomen" },
  { id: "large-intestine", name: "Large Intestine", slug: "large-intestine", system: "Digestive", emoji: "🔄", shortDescription: "Home to trillions of bacteria that run your immune system.", region: "abdomen" },
  { id: "kidneys", name: "Kidneys", slug: "kidneys", system: "Urinary", emoji: "🫘", shortDescription: "Filter your entire blood supply 40 times a day.", region: "abdomen" },
  { id: "bladder", name: "Bladder", slug: "bladder", system: "Urinary", emoji: "💧", shortDescription: "A stretchy reservoir that can hold about 500ml of fluid.", region: "abdomen" },

  // SPINE
  { id: "spine-cervical", name: "Cervical Spine", slug: "spine-cervical", system: "Skeletal", emoji: "🦴", shortDescription: "Seven vertebrae holding up your 11-pound head.", region: "spine" },
  { id: "spine-thoracic", name: "Thoracic Spine", slug: "spine-thoracic", system: "Skeletal", emoji: "🦴", shortDescription: "Twelve vertebrae anchoring your rib cage.", region: "spine" },
  { id: "spine-lumbar", name: "Lumbar Spine", slug: "spine-lumbar", system: "Skeletal", emoji: "🦴", shortDescription: "Five thick vertebrae bearing most of your upper body weight.", region: "spine" },

  // UPPER LIMBS
  { id: "shoulders", name: "Shoulders", slug: "shoulders", system: "Musculoskeletal", emoji: "💪", shortDescription: "The most mobile joint in your body — and the most unstable.", region: "upper-limb" },
  { id: "elbows", name: "Elbows", slug: "elbows", system: "Musculoskeletal", emoji: "🦾", shortDescription: "A precision hinge joint with its own funny bone nerve.", region: "upper-limb" },
  { id: "wrists", name: "Wrists", slug: "wrists", system: "Musculoskeletal", emoji: "⌚", shortDescription: "Eight tiny carpal bones allowing 3D movement of your hands.", region: "upper-limb" },
  { id: "hands", name: "Hands", slug: "hands", system: "Musculoskeletal", emoji: "🤲", shortDescription: "27 bones per hand, more nerve endings than almost anywhere else.", region: "upper-limb" },

  // LOWER LIMBS
  { id: "hips", name: "Hips", slug: "hips", system: "Musculoskeletal", emoji: "🦿", shortDescription: "Ball-and-socket joints carrying your entire upper body.", region: "lower-limb" },
  { id: "knees", name: "Knees", slug: "knees", system: "Musculoskeletal", emoji: "🦵", shortDescription: "The largest joint in your body — and the most injured.", region: "lower-limb" },
  { id: "ankles", name: "Ankles", slug: "ankles", system: "Musculoskeletal", emoji: "🦶", shortDescription: "A complex of 7 tarsal bones managing every step you take.", region: "lower-limb" },
  { id: "feet", name: "Feet", slug: "feet", system: "Musculoskeletal", emoji: "👣", shortDescription: "26 bones, 33 joints, 100+ tendons — your engineering marvel.", region: "lower-limb" },

  // WHOLE BODY
  { id: "skin", name: "Skin", slug: "skin", system: "Integumentary", emoji: "🧬", shortDescription: "Your largest organ — and it replaces itself every 27 days.", region: "whole-body" },
  { id: "bones", name: "Bones", slug: "bones", system: "Skeletal", emoji: "🦴", shortDescription: "Stronger than steel, pound for pound.", region: "whole-body" },
  { id: "muscles", name: "Muscles", slug: "muscles", system: "Muscular", emoji: "💪", shortDescription: "Over 640 skeletal muscles enabling every movement and breath.", region: "whole-body" },
];

// Compact fact builder
const f = (id: string, bodyPartId: string, category: Category, rarity: Rarity, text: string, source?: string): Fact =>
  ({ id, bodyPartId, category, rarity, text, source });

const HARDCODED_FACTS: Fact[] = [
  // ━━━ BRAIN ━━━
  f("brain-w-1", "brain", "weird_wild", "mind_blowing", "Your brain generates around 20 watts of electricity while you read this — enough to dimly power a light bulb."),
  f("brain-w-2", "brain", "weird_wild", "almost_unknown", "The brain has no pain receptors. Surgeons can operate on it while you're awake and talking."),
  f("brain-w-3", "brain", "weird_wild", "surprising", "About 60% of your brain is fat. It's the fattiest organ in your body."),
  f("brain-h-1", "brain", "health_tip", "common", "Sleep deprivation shrinks the prefrontal cortex within 24 hours. Prioritise 7–9 hours."),
  f("brain-h-2", "brain", "health_tip", "surprising", "Learning a new language in adulthood thickens grey matter — even briefly."),
  f("brain-d-1", "brain", "what_damages_it", "surprising", "Chronic loneliness shrinks the hippocampus as fast as smoking a pack a day."),
  f("brain-d-2", "brain", "what_damages_it", "mind_blowing", "Just one night of poor sleep raises beta-amyloid (the Alzheimer's protein) by 5%."),
  f("brain-s-1", "brain", "superfood", "common", "Walnuts literally look like brains — and they contain the omega-3s your neurons need."),
  f("brain-s-2", "brain", "superfood", "surprising", "Blueberries cross the blood-brain barrier and accumulate in memory regions."),
  f("brain-r-1", "brain", "record_breaker", "mind_blowing", "Your brain stores about 2.5 petabytes — roughly 3 million hours of TV."),

  // ━━━ FRONTAL LOBE ━━━
  f("fl-w-1", "frontal-lobe", "weird_wild", "mind_blowing", "The frontal lobe isn't fully developed until age 25 — which is why teens take bigger risks."),
  f("fl-w-2", "frontal-lobe", "weird_wild", "surprising", "Phineas Gage survived a steel rod through his frontal lobe — but his personality completely changed."),
  f("fl-h-1", "frontal-lobe", "health_tip", "common", "Meditation physically thickens the prefrontal cortex in just 8 weeks."),
  f("fl-d-1", "frontal-lobe", "what_damages_it", "surprising", "Chronic stress shrinks the prefrontal cortex while enlarging the amygdala."),
  f("fl-s-1", "frontal-lobe", "superfood", "surprising", "Dark chocolate increases blood flow to the frontal lobe within 2 hours."),
  f("fl-r-1", "frontal-lobe", "record_breaker", "mind_blowing", "Humans have the largest frontal lobe-to-brain ratio of any species — about 40%."),

  // ━━━ TEMPORAL LOBE ━━━
  f("tl-w-1", "temporal-lobe", "weird_wild", "almost_unknown", "Déjà vu is likely a temporal lobe 'misfire' — memory circuits activating before perception finishes."),
  f("tl-w-2", "temporal-lobe", "weird_wild", "surprising", "Music activates more areas of the temporal lobe than speech does."),
  f("tl-h-1", "temporal-lobe", "health_tip", "surprising", "Learning music as an adult strengthens temporal lobe connections measurably."),
  f("tl-d-1", "temporal-lobe", "what_damages_it", "mind_blowing", "Chronic noise exposure above 85dB damages auditory processing in the temporal lobe permanently."),
  f("tl-s-1", "temporal-lobe", "superfood", "common", "Turmeric's curcumin improves memory function linked to the temporal lobe."),
  f("tl-r-1", "temporal-lobe", "record_breaker", "surprising", "The temporal lobe can distinguish sounds just 5 microseconds apart."),

  // ━━━ EYES ━━━
  f("eyes-w-1", "eyes", "weird_wild", "mind_blowing", "Your eyes can distinguish about 10 million colors — but your brain has names for only ~30."),
  f("eyes-w-2", "eyes", "weird_wild", "almost_unknown", "Each eye has its own blind spot. Your brain fabricates the missing image in real time."),
  f("eyes-w-3", "eyes", "weird_wild", "surprising", "Newborns see only in black, white, and grey for the first few weeks."),
  f("eyes-h-1", "eyes", "health_tip", "common", "Every 20 minutes, look at something 20 feet away for 20 seconds. The 20-20-20 rule."),
  f("eyes-d-1", "eyes", "what_damages_it", "surprising", "Rubbing your eyes hard can permanently reshape the cornea — it's called keratoconus."),
  f("eyes-d-2", "eyes", "what_damages_it", "mind_blowing", "UV from a single sunny day without sunglasses can sunburn your cornea."),
  f("eyes-s-1", "eyes", "superfood", "common", "Carrots really do help — beta-carotene becomes vitamin A, essential for low-light vision."),
  f("eyes-s-2", "eyes", "superfood", "surprising", "Egg yolks contain lutein, which builds the eye's natural blue-light filter."),
  f("eyes-r-1", "eyes", "record_breaker", "mind_blowing", "Your eyes can detect a single photon — the smallest possible unit of light."),

  // ━━━ EARS ━━━
  f("ears-w-1", "ears", "weird_wild", "mind_blowing", "Your ears never stop working — even while you sleep, they process sound. Your brain just ignores most of it."),
  f("ears-w-2", "ears", "weird_wild", "almost_unknown", "The smallest bones in your body are in your ear — the stapes is smaller than a grain of rice."),
  f("ears-h-1", "ears", "health_tip", "common", "Keep headphone volume below 60% and take breaks every 60 minutes — the 60/60 rule."),
  f("ears-d-1", "ears", "what_damages_it", "surprising", "Cotton swabs push earwax deeper and can perforate the eardrum. Your ears are self-cleaning."),
  f("ears-s-1", "ears", "superfood", "surprising", "Omega-3 fatty acids from fish improve blood flow to the cochlea, protecting hearing."),
  f("ears-r-1", "ears", "record_breaker", "mind_blowing", "The human ear can detect vibrations as small as the diameter of a hydrogen atom."),

  // ━━━ SINUSES ━━━
  f("sin-w-1", "sinuses", "weird_wild", "surprising", "Your sinuses produce about a liter of mucus every day — most of it you swallow without noticing."),
  f("sin-w-2", "sinuses", "weird_wild", "almost_unknown", "Sinuses make your skull lighter — without them, your head would be too heavy for your neck."),
  f("sin-h-1", "sinuses", "health_tip", "common", "Steam inhalation for 10 minutes thins mucus and relieves sinus pressure naturally."),
  f("sin-d-1", "sinuses", "what_damages_it", "surprising", "Dry indoor air from heating systems causes sinuses to produce thicker, harder-to-clear mucus."),
  f("sin-s-1", "sinuses", "superfood", "common", "Horseradish and wasabi contain compounds that immediately thin sinus mucus."),
  f("sin-r-1", "sinuses", "record_breaker", "surprising", "A sneeze can expel air from your sinuses at over 100 mph."),

  // ━━━ JAW ━━━
  f("jaw-w-1", "jaw", "weird_wild", "mind_blowing", "Your masseter (jaw muscle) can exert up to 200 pounds of force — the strongest muscle by pressure in your body."),
  f("jaw-w-2", "jaw", "weird_wild", "surprising", "Jaw clenching during sleep can exert 6x more force than conscious biting."),
  f("jaw-h-1", "jaw", "health_tip", "common", "Rest your tongue on the roof of your mouth with teeth slightly apart — this is the correct jaw resting position."),
  f("jaw-d-1", "jaw", "what_damages_it", "surprising", "Chewing ice creates micro-fractures in tooth enamel that accumulate over time."),
  f("jaw-s-1", "jaw", "superfood", "common", "Crunchy vegetables like celery and carrots naturally exercise and strengthen the jaw."),
  f("jaw-r-1", "jaw", "record_breaker", "mind_blowing", "Over a lifetime, your jaw muscles perform enough work to lift about 24 tons."),

  // ━━━ THROAT ━━━
  f("thr-w-1", "throat", "weird_wild", "surprising", "Your vocal cords vibrate 100–1,000 times per second when you speak."),
  f("thr-w-2", "throat", "weird_wild", "almost_unknown", "The epiglottis switches between breathing and eating 600+ times a day without you thinking about it."),
  f("thr-h-1", "throat", "health_tip", "common", "Honey coats the throat better than most cough suppressants — and it's backed by clinical trials."),
  f("thr-d-1", "throat", "what_damages_it", "surprising", "Whispering actually strains your vocal cords MORE than speaking at a normal volume."),
  f("thr-s-1", "throat", "superfood", "common", "Warm ginger tea reduces throat inflammation through gingerol — a natural anti-inflammatory."),
  f("thr-r-1", "throat", "record_breaker", "mind_blowing", "The human voice can produce over 300 distinct vowel sounds across all languages."),

  // ━━━ HEART ━━━
  f("heart-w-1", "heart", "weird_wild", "mind_blowing", "Your heart beats around 3 billion times in an average lifetime — without a single break."),
  f("heart-w-2", "heart", "weird_wild", "surprising", "The heart has its own mini-brain: ~40,000 neurons that can act independently."),
  f("heart-w-3", "heart", "weird_wild", "almost_unknown", "Heart cells beat in sync when placed in a petri dish — even from different people."),
  f("heart-h-1", "heart", "health_tip", "common", "Laughing for 15 minutes improves blood vessel function as much as a 30-minute workout."),
  f("heart-d-1", "heart", "what_damages_it", "surprising", "Sitting for more than 8 hours a day raises heart disease risk even if you exercise."),
  f("heart-d-2", "heart", "what_damages_it", "mind_blowing", "Heartbreak is real: emotional shock can cause 'broken heart syndrome' — the heart literally changes shape."),
  f("heart-s-1", "heart", "superfood", "common", "Dark chocolate (70%+) lowers blood pressure measurably within 2 hours."),
  f("heart-s-2", "heart", "superfood", "surprising", "Pomegranate juice reduces arterial plaque better than statins in some trials."),
  f("heart-r-1", "heart", "record_breaker", "mind_blowing", "Your aorta is wide enough to fit a garden hose — and pumps 2,000 gallons a day."),

  // ━━━ LEFT LUNG ━━━
  f("ll-w-1", "lung-left", "weird_wild", "mind_blowing", "Unfolded, your lungs would cover a tennis court — about 70 square meters."),
  f("ll-w-2", "lung-left", "weird_wild", "surprising", "Your left lung is smaller to make room for your heart."),
  f("ll-w-3", "lung-left", "weird_wild", "almost_unknown", "Lungs are the only organ that can float on water."),
  f("ll-h-1", "lung-left", "health_tip", "common", "Box breathing (4-4-4-4) calms the nervous system in under a minute."),
  f("ll-d-1", "lung-left", "what_damages_it", "surprising", "One cigarette removes 11 minutes from your life — but lungs heal substantially within a year of quitting."),
  f("ll-s-1", "lung-left", "superfood", "common", "Apples — eating 5+ a week is linked to measurably better lung function."),
  f("ll-r-1", "lung-left", "record_breaker", "mind_blowing", "You breathe about 20,000 times a day. Most without noticing a single one."),

  // ━━━ RIGHT LUNG ━━━
  f("rl-w-1", "lung-right", "weird_wild", "surprising", "Your right lung has three lobes while your left has only two — it handles 55% of gas exchange."),
  f("rl-h-1", "lung-right", "health_tip", "surprising", "Deep belly breathing for 5 minutes activates the vagus nerve and lowers cortisol."),
  f("rl-d-1", "lung-right", "what_damages_it", "mind_blowing", "Air pollution particles smaller than 2.5 microns pass directly into your bloodstream through lung tissue."),
  f("rl-s-1", "lung-right", "superfood", "surprising", "Broccoli sprouts contain sulforaphane which helps lungs detoxify airborne pollutants."),
  f("rl-r-1", "lung-right", "record_breaker", "surprising", "A competitive freediver held their breath for 24 minutes and 37 seconds."),

  // ━━━ LIVER ━━━
  f("liver-w-1", "liver", "weird_wild", "mind_blowing", "The liver is the only organ that can fully regenerate — even from just 25% of itself."),
  f("liver-w-2", "liver", "weird_wild", "surprising", "It performs over 500 distinct chemical functions — a true biochemical factory."),
  f("liver-w-3", "liver", "weird_wild", "almost_unknown", "Your liver makes its own cholesterol — about 80% of what's in your blood."),
  f("liver-h-1", "liver", "health_tip", "common", "Coffee (3+ cups/day) is associated with a 40% lower risk of liver cancer."),
  f("liver-d-1", "liver", "what_damages_it", "mind_blowing", "Sugar — not fat — is the leading cause of fatty liver disease in non-drinkers."),
  f("liver-d-2", "liver", "what_damages_it", "surprising", "Acetaminophen (paracetamol) overdose is the #1 cause of acute liver failure."),
  f("liver-s-1", "liver", "superfood", "common", "Beets contain betaine, which helps the liver process fats efficiently."),
  f("liver-r-1", "liver", "record_breaker", "mind_blowing", "Your liver filters 1.4 liters of blood every minute — about a bathtub a day."),

  // ━━━ STOMACH ━━━
  f("stom-w-1", "stomach", "weird_wild", "mind_blowing", "Stomach acid (pH ~1.5) is strong enough to dissolve a razor blade."),
  f("stom-w-2", "stomach", "weird_wild", "surprising", "Your stomach lining replaces itself every 3-4 days — otherwise the acid would digest it."),
  f("stom-w-3", "stomach", "weird_wild", "almost_unknown", "The 'butterflies' feeling is your stomach's nervous system firing — it has more neurons than your spinal cord."),
  f("stom-h-1", "stomach", "health_tip", "common", "Eating slowly reduces calorie intake by ~15% — your stomach needs 20 min to signal fullness."),
  f("stom-d-1", "stomach", "what_damages_it", "surprising", "Stress doesn't cause ulcers — H. pylori bacteria do (Nobel Prize, 2005)."),
  f("stom-s-1", "stomach", "superfood", "common", "Ginger speeds up gastric emptying — proven anti-nausea agent."),
  f("stom-r-1", "stomach", "record_breaker", "mind_blowing", "Your stomach can stretch from 50ml empty to over 4 liters full — an 80x expansion."),

  // ━━━ SMALL INTESTINE ━━━
  f("si-w-1", "small-intestine", "weird_wild", "mind_blowing", "Your small intestine is about 20 feet long but its surface area — with villi — equals a studio apartment."),
  f("si-w-2", "small-intestine", "weird_wild", "surprising", "It absorbs 90% of all nutrients from your food. The large intestine mostly handles water."),
  f("si-h-1", "small-intestine", "health_tip", "common", "Spacing meals 4–5 hours apart allows the migrating motor complex to sweep debris through."),
  f("si-d-1", "small-intestine", "what_damages_it", "surprising", "Gluten damages the villi in celiac disease — flattening the absorptive surface by up to 70%."),
  f("si-s-1", "small-intestine", "superfood", "common", "Bone broth contains glutamine which nourishes and repairs the intestinal lining."),
  f("si-r-1", "small-intestine", "record_breaker", "mind_blowing", "Your small intestine absorbs about 7 liters of fluid every day — mostly recycled digestive juices."),

  // ━━━ LARGE INTESTINE ━━━
  f("li-w-1", "large-intestine", "weird_wild", "mind_blowing", "70% of your immune system lives in your gut wall."),
  f("li-w-2", "large-intestine", "weird_wild", "surprising", "Your gut microbiome weighs ~2kg and contains more bacterial cells than your whole body has human cells."),
  f("li-h-1", "large-intestine", "health_tip", "common", "30 different plant foods a week is the single biggest predictor of a healthy microbiome."),
  f("li-d-1", "large-intestine", "what_damages_it", "surprising", "Artificial sweeteners alter gut bacteria composition within just 4 days."),
  f("li-s-1", "large-intestine", "superfood", "common", "Kimchi, sauerkraut, kefir — fermented foods seed beneficial bacteria directly."),
  f("li-r-1", "large-intestine", "record_breaker", "mind_blowing", "Your gut produces 95% of your body's serotonin — the 'happiness chemical'."),

  // ━━━ KIDNEYS ━━━
  f("kid-w-1", "kidneys", "weird_wild", "mind_blowing", "Your kidneys filter your entire blood supply about 40 times every single day."),
  f("kid-w-2", "kidneys", "weird_wild", "surprising", "You only need ~25% of one kidney to survive normally."),
  f("kid-h-1", "kidneys", "health_tip", "common", "Pale-yellow urine is the gold standard for hydration. Clear = overhydrated."),
  f("kid-d-1", "kidneys", "what_damages_it", "surprising", "NSAIDs (ibuprofen) taken daily can reduce kidney function 30% in 6 months."),
  f("kid-s-1", "kidneys", "superfood", "common", "Cranberries acidify urine and reduce UTI recurrence by ~25%."),
  f("kid-r-1", "kidneys", "record_breaker", "mind_blowing", "Each kidney contains ~1 million nephrons — microscopic filters working in parallel."),

  // ━━━ BLADDER ━━━
  f("bla-w-1", "bladder", "weird_wild", "surprising", "Your bladder can stretch from the size of a plum to a large grapefruit."),
  f("bla-w-2", "bladder", "weird_wild", "almost_unknown", "The urge to pee starts at about 200ml — but your bladder can hold 400-600ml."),
  f("bla-h-1", "bladder", "health_tip", "common", "Don't 'just in case' pee — it trains your bladder to signal urgency at lower volumes."),
  f("bla-d-1", "bladder", "what_damages_it", "surprising", "Holding urine too long regularly can weaken bladder muscles and increase UTI risk."),
  f("bla-s-1", "bladder", "superfood", "surprising", "Pumpkin seed extract strengthens bladder muscles and reduces urgency in clinical trials."),
  f("bla-r-1", "bladder", "record_breaker", "surprising", "Your kidneys produce about 1.5 liters of urine daily — your bladder empties 6-8 times."),

  // ━━━ CERVICAL SPINE ━━━
  f("sc-w-1", "spine-cervical", "weird_wild", "mind_blowing", "Giraffes and humans have the same number of cervical vertebrae — exactly 7."),
  f("sc-h-1", "spine-cervical", "health_tip", "common", "'Text neck' from looking at phones adds up to 60 pounds of pressure on cervical discs."),
  f("sc-d-1", "spine-cervical", "what_damages_it", "surprising", "Sleeping on your stomach forces the cervical spine into rotation for hours — one of the worst positions."),
  f("sc-s-1", "spine-cervical", "superfood", "common", "Vitamin D (from sunlight and supplements) is critical for maintaining spinal disc health."),
  f("sc-r-1", "spine-cervical", "record_breaker", "surprising", "Your cervical spine supports a head weighing 10-12 pounds — the weight of a bowling ball."),

  // ━━━ THORACIC SPINE ━━━
  f("st-w-1", "spine-thoracic", "weird_wild", "surprising", "The thoracic spine is the only part of the spine directly connected to the rib cage."),
  f("st-h-1", "spine-thoracic", "health_tip", "common", "Foam rolling the thoracic spine improves posture and breathing capacity."),
  f("st-d-1", "spine-thoracic", "what_damages_it", "surprising", "Prolonged hunching compresses the front of thoracic vertebrae, leading to permanent wedging over decades."),
  f("st-s-1", "spine-thoracic", "superfood", "surprising", "Calcium from leafy greens (kale, bok choy) is absorbed better than from dairy."),
  f("st-r-1", "spine-thoracic", "record_breaker", "mind_blowing", "Your thoracic spine has the least mobility of any spinal region — it trades flexibility for rib cage stability."),

  // ━━━ LUMBAR SPINE ━━━
  f("sl-w-1", "spine-lumbar", "weird_wild", "mind_blowing", "Your lumbar discs bear up to 10x your body weight during heavy lifting."),
  f("sl-h-1", "spine-lumbar", "health_tip", "common", "Walking is better for lower back pain than bed rest — movement pumps nutrients into discs."),
  f("sl-d-1", "spine-lumbar", "what_damages_it", "surprising", "Sitting puts 40% more pressure on lumbar discs than standing."),
  f("sl-s-1", "spine-lumbar", "superfood", "common", "Anti-inflammatory foods like fatty fish, turmeric, and berries reduce spinal inflammation."),
  f("sl-r-1", "spine-lumbar", "record_breaker", "surprising", "Your spinal discs compress during the day — you're measurably shorter by evening (up to 2cm)."),

  // ━━━ SHOULDERS ━━━
  f("sho-w-1", "shoulders", "weird_wild", "mind_blowing", "The shoulder can rotate 360 degrees — no other joint in the body comes close."),
  f("sho-h-1", "shoulders", "health_tip", "common", "Hanging from a bar for 30 seconds a day decompresses and strengthens the shoulder joint."),
  f("sho-d-1", "shoulders", "what_damages_it", "surprising", "Sleeping on the same shoulder every night compresses the bursa and can cause chronic pain."),
  f("sho-s-1", "shoulders", "superfood", "common", "Collagen-rich foods (bone broth, citrus) support tendons and rotator cuff repair."),
  f("sho-r-1", "shoulders", "record_breaker", "mind_blowing", "A baseball pitcher's shoulder rotates at 7,000 degrees per second during a throw."),

  // ━━━ ELBOWS ━━━
  f("elb-w-1", "elbows", "weird_wild", "surprising", "Your 'funny bone' isn't a bone — it's the ulnar nerve running through a shallow groove with almost no padding."),
  f("elb-h-1", "elbows", "health_tip", "common", "Avoid resting elbows on hard surfaces for extended periods to protect the ulnar nerve."),
  f("elb-d-1", "elbows", "what_damages_it", "surprising", "Repetitive gripping motions (tennis, typing) inflame the elbow tendons — epicondylitis."),
  f("elb-s-1", "elbows", "superfood", "common", "Vitamin C from bell peppers helps build the collagen that forms tendon tissue."),
  f("elb-r-1", "elbows", "record_breaker", "surprising", "The elbow can flex and extend over 1 million times per year in normal daily activity."),

  // ━━━ WRISTS ━━━
  f("wri-w-1", "wrists", "weird_wild", "mind_blowing", "Your wrist contains 8 tiny carpal bones arranged in two rows — one of the most complex joints in the body."),
  f("wri-h-1", "wrists", "health_tip", "common", "Wrist circles and stretches before typing reduce carpal tunnel symptoms by 50%."),
  f("wri-d-1", "wrists", "what_damages_it", "surprising", "Sleeping with bent wrists compresses the carpal tunnel nerve nightly."),
  f("wri-s-1", "wrists", "superfood", "surprising", "Vitamin B6 from chickpeas and bananas reduces carpal tunnel inflammation."),
  f("wri-r-1", "wrists", "record_breaker", "surprising", "Your wrist pulse point (radial artery) has been used for medical diagnosis for over 3,000 years."),

  // ━━━ HANDS ━━━
  f("han-w-1", "hands", "weird_wild", "mind_blowing", "Your hands have 27 bones, 29 joints, and 123 ligaments each — more complex than most machines."),
  f("han-w-2", "hands", "weird_wild", "almost_unknown", "Fingerprints form in the womb at 17 weeks and never change — even after burns."),
  f("han-h-1", "hands", "health_tip", "common", "Hand grip strength is one of the strongest predictors of overall longevity and health."),
  f("han-d-1", "hands", "what_damages_it", "surprising", "Cracking knuckles doesn't cause arthritis — but phone pinch grip can inflame thumb tendons."),
  f("han-s-1", "hands", "superfood", "common", "Omega-3s reduce joint inflammation — especially helpful for hand arthritis."),
  f("han-r-1", "hands", "record_breaker", "mind_blowing", "Your fingertips can detect texture differences as small as 13 nanometers — smoother than glass."),

  // ━━━ HIPS ━━━
  f("hip-w-1", "hips", "weird_wild", "surprising", "Your hip joint is the deepest ball-and-socket joint — the femoral head sits inside a bony cup."),
  f("hip-h-1", "hips", "health_tip", "common", "Deep squats maintain hip mobility better than any stretch — 'use it or lose it' applies literally."),
  f("hip-d-1", "hips", "what_damages_it", "surprising", "Crossing your legs habitually can misalign the hip joint and compress nerves over years."),
  f("hip-s-1", "hips", "superfood", "common", "Glucosamine-rich shellfish support cartilage maintenance in weight-bearing joints."),
  f("hip-r-1", "hips", "record_breaker", "mind_blowing", "Hip replacement is one of the most successful surgeries ever — 95% still work after 15 years."),

  // ━━━ KNEES ━━━
  f("kne-w-1", "knees", "weird_wild", "mind_blowing", "Your knee absorbs 3-5x your body weight with every step — and up to 8x when running."),
  f("kne-w-2", "knees", "weird_wild", "almost_unknown", "The kneecap (patella) is the largest sesamoid bone — it develops inside the tendon, not separately."),
  f("kne-h-1", "knees", "health_tip", "common", "Strong quadriceps reduce knee injury risk by 60% — leg extensions and wall sits help."),
  f("kne-d-1", "knees", "what_damages_it", "surprising", "Running on concrete doesn't damage healthy knees — but weak glutes cause knee misalignment that does."),
  f("kne-s-1", "knees", "superfood", "common", "Tart cherry juice reduces knee inflammation and pain as effectively as ibuprofen in studies."),
  f("kne-r-1", "knees", "record_breaker", "mind_blowing", "Your ACL can withstand 500+ pounds of force — but a sudden twist at the wrong angle can snap it instantly."),

  // ━━━ ANKLES ━━━
  f("ank-w-1", "ankles", "weird_wild", "surprising", "Ankle sprains are the most common sports injury — 25,000 happen daily in the US alone."),
  f("ank-h-1", "ankles", "health_tip", "common", "Single-leg balance exercises for 2 minutes daily reduce ankle sprain recurrence by 50%."),
  f("ank-d-1", "ankles", "what_damages_it", "surprising", "High heels shift your body weight forward and weaken the Achilles tendon over time."),
  f("ank-s-1", "ankles", "superfood", "common", "Gelatin and vitamin C together promote collagen synthesis for ankle ligament repair."),
  f("ank-r-1", "ankles", "record_breaker", "surprising", "Your Achilles tendon can withstand forces of up to 1,000 pounds — it's the strongest tendon in the body."),

  // ━━━ FEET ━━━
  f("fee-w-1", "feet", "weird_wild", "mind_blowing", "Each foot has 26 bones, 33 joints, and over 100 tendons — a quarter of all your bones are in your feet."),
  f("fee-w-2", "feet", "weird_wild", "surprising", "Feet have over 200,000 nerve endings — making them one of the most sensitive body parts."),
  f("fee-h-1", "feet", "health_tip", "common", "Walking barefoot on varied surfaces strengthens the 20+ intrinsic foot muscles that shoes weaken."),
  f("fee-d-1", "feet", "what_damages_it", "surprising", "Tight shoes compress metatarsal bones and cause Morton's neuroma — a nerve thickening."),
  f("fee-s-1", "feet", "superfood", "common", "Magnesium-rich foods (dark chocolate, almonds) reduce foot cramps and muscle tension."),
  f("fee-r-1", "feet", "record_breaker", "mind_blowing", "The average person walks about 100,000 miles in a lifetime — roughly 4 trips around Earth."),

  // ━━━ SKIN ━━━
  f("skin-w-1", "skin", "weird_wild", "mind_blowing", "You shed ~40,000 skin cells every minute. Most household dust is you."),
  f("skin-w-2", "skin", "weird_wild", "surprising", "Skin is your largest organ — about 2 square meters and 15% of body weight."),
  f("skin-w-3", "skin", "weird_wild", "almost_unknown", "Goosebumps are an evolutionary leftover — they once made our fur stand up to look bigger."),
  f("skin-h-1", "skin", "health_tip", "common", "SPF 30 daily — even indoors — is the single biggest anti-aging intervention proven."),
  f("skin-d-1", "skin", "what_damages_it", "surprising", "Sugar molecules bond to collagen and stiffen it — a process called 'glycation'."),
  f("skin-s-1", "skin", "superfood", "common", "Tomatoes (cooked) contain lycopene — natural internal SPF of about 4."),
  f("skin-r-1", "skin", "record_breaker", "mind_blowing", "Your skin completely renews itself every 27 days. You're never the same person twice."),

  // ━━━ BONES ━━━
  f("bones-w-1", "bones", "weird_wild", "mind_blowing", "Bone is 5x stronger than steel by weight — and constantly rebuilds itself."),
  f("bones-w-2", "bones", "weird_wild", "surprising", "Babies are born with ~270 bones. Adults have 206 — many fuse together as we grow."),
  f("bones-w-3", "bones", "weird_wild", "almost_unknown", "Your bones make 500 billion blood cells every day inside the marrow."),
  f("bones-h-1", "bones", "health_tip", "common", "Weight-bearing exercise (walking, lifting) is more important than calcium for bone density."),
  f("bones-d-1", "bones", "what_damages_it", "surprising", "Cola — not just sugar — leaches calcium from bones via phosphoric acid."),
  f("bones-s-1", "bones", "superfood", "common", "Sardines (with bones) deliver more bioavailable calcium than milk."),
  f("bones-r-1", "bones", "record_breaker", "mind_blowing", "The femur can support 30× a person's body weight without breaking."),

  // ━━━ DATABASE IMPORTS ━━━
  f("db-brain-1", "brain", "weird_wild", "mind_blowing", "The brain generates enough electricity to power a small LED lightbulb (about 12 to 25 watts of power)."),
  f("db-brain-2", "brain", "health_tip", "surprising", "Learning a new physical skill, like juggling or dancing, physically increases the volume of gray matter in your brain."),
  f("db-brain-3", "brain", "what_damages_it", "surprising", "Chronic sleep deprivation prevents the brain's glymphatic system from flushing out toxic amyloid-beta plaques, linked to Alzheimer's."),
  f("db-brain-4", "brain", "superfood", "common", "Walnuts visually resemble tiny brains and are packed with DHA, an Omega-3 fatty acid crucial for protecting cognitive health."),
  f("db-brain-5", "brain", "record_breaker", "mind_blowing", "Information travels along different types of neurons at different speeds, with the fastest motor neurons transmitting signals at up to 268 mph."),

  f("db-heart-1", "heart", "weird_wild", "mind_blowing", "Because the heart has its own electrical impulse, it can continue to beat even when separated from the body, as long as it has an oxygen supply."),
  f("db-heart-2", "heart", "health_tip", "surprising", "Laughing out loud relaxes the endothelium (the inner lining of your blood vessels) and increases blood flow by up to 20%."),
  f("db-heart-3", "heart", "what_damages_it", "surprising", "Prolonged periods of sitting (a sedentary lifestyle) drastically stiffen arteries over time, even if you exercise for an hour a day."),
  f("db-heart-4", "heart", "superfood", "common", "Dark chocolate (70%+ cacao) is rich in flavonoids that stimulate the production of nitric oxide, which helps lower blood pressure."),
  f("db-heart-5", "heart", "record_breaker", "mind_blowing", "A healthy human heart beats roughly 100,000 times a day, pumping about 2,000 gallons of blood through 60,000 miles of blood vessels."),

  f("db-gut-1", "large-intestine", "weird_wild", "mind_blowing", "You have a 'second brain' in your gut called the enteric nervous system, containing over 100 million neurons."),
  f("db-gut-2", "stomach", "health_tip", "common", "Chewing your food 30 times before swallowing dramatically reduces bloating by mixing food with salivary amylase to jumpstart digestion."),
  f("db-gut-3", "large-intestine", "what_damages_it", "surprising", "Emulsifiers found in ultra-processed foods can strip away the protective mucus lining of your intestines, leading to 'leaky gut.'"),
  f("db-gut-4", "large-intestine", "superfood", "common", "Fermented foods like kimchi and sauerkraut provide living probiotic strains that directly repopulate and diversify your microbiome."),
  f("db-gut-5", "small-intestine", "record_breaker", "surprising", "The small intestine is anything but small in length—if stretched out, it measures about 22 feet long."),

  f("db-skin-1", "skin", "weird_wild", "mind_blowing", "You shed about 30,000 to 40,000 dead skin cells every single minute. A massive percentage of the dust in your home is actually you."),
  f("db-skin-2", "skin", "health_tip", "common", "Applying moisturizer to damp skin within 3 minutes of showering traps water on the surface, dramatically increasing hydration compared to applying it on dry skin."),
  f("db-skin-3", "skin", "what_damages_it", "surprising", "UVA rays from the sun penetrate deep into the dermis, destroying collagen and elastin even on cloudy days or through glass windows."),
  f("db-skin-4", "skin", "superfood", "surprising", "Tomatoes are rich in lycopene, a powerful antioxidant that acts like an internal sunscreen to protect skin cells from UV damage."),
  f("db-skin-5", "skin", "record_breaker", "common", "The skin is the body's largest organ, accounting for roughly 15% to 16% of your total body weight."),

  f("db-lung-1", "lung-left", "weird_wild", "surprising", "Your left lung is about 10% smaller than your right lung to make room for your heart."),
  f("db-lung-2", "lung-left", "health_tip", "common", "Practicing diaphragmatic breathing (belly breathing) stimulates the vagus nerve, which lowers your heart rate and reduces cortisol in minutes."),
  f("db-lung-3", "lung-left", "what_damages_it", "surprising", "Vaping exposes the lungs to diacetyl and heavy metals, causing inflammation in the bronchioles (the smallest airways)."),
  f("db-lung-4", "lung-left", "superfood", "common", "Apples are packed with quercetin, an antioxidant highly correlated with improved lung function and reduced asthma risks."),
  f("db-lung-5", "lung-left", "record_breaker", "mind_blowing", "If you opened up your lungs and laid out all the tiny air sacs (alveoli) flat, they would cover an area the size of a tennis court."),

  f("db-liver-1", "liver", "weird_wild", "mind_blowing", "The liver is the only internal human organ capable of natural regeneration. As little as 25% of a healthy liver can regenerate into a full-sized organ."),
  f("db-liver-2", "liver", "health_tip", "common", "Drinking a glass of water with fresh lemon first thing in the morning stimulates liver enzymes and assists in natural detoxification."),
  f("db-liver-3", "liver", "what_damages_it", "surprising", "Excessive intake of high-fructose corn syrup bypasses standard metabolic pathways and goes straight to the liver, leading to Non-Alcoholic Fatty Liver Disease (NAFLD)."),
  f("db-liver-4", "liver", "superfood", "surprising", "Black coffee has been extensively proven by hepatologists to protect the liver against cirrhosis and reduce overall liver inflammation."),
  f("db-liver-5", "liver", "record_breaker", "mind_blowing", "The liver is the body's ultimate multitasker, continuously performing over 500 vital biochemical functions simultaneously."),

  f("db-bones-1", "bones", "weird_wild", "surprising", "Babies are born with roughly 300 bones, but as they grow, many fuse together, leaving adults with exactly 206 bones."),
  f("db-bones-2", "bones", "health_tip", "common", "Weight-bearing exercises (like lifting weights or jumping rope) physically stress the bone, signaling osteoblast cells to build denser, stronger bones."),
  f("db-bones-3", "bones", "what_damages_it", "surprising", "A highly processed, high-sodium diet forces your kidneys to excrete calcium out through your urine, slowly draining calcium from your bones."),
  f("db-bones-4", "bones", "superfood", "common", "Sardines (eaten with the tiny bones intact) are an incredible, bioavailable source of both calcium and Vitamin D."),
  f("db-bones-5", "bones", "record_breaker", "mind_blowing", "Ounce for ounce, human bone is stronger than solid steel. A block of bone the size of a matchbox can support up to 18,000 pounds of weight."),

  f("db-eyes-1", "eyes", "weird_wild", "surprising", "The human eye is so highly developed it can distinguish between approximately 10 million different colors."),
  f("db-eyes-2", "eyes", "health_tip", "common", "Prevent digital eye strain with the 20-20-20 rule: Every 20 minutes, look at an object 20 feet away for 20 seconds."),
  f("db-eyes-3", "eyes", "what_damages_it", "surprising", "Sleeping in contact lenses deprives the cornea of necessary oxygen, increasing the risk of severe bacterial infections by up to 8 times."),
  f("db-eyes-4", "eyes", "superfood", "common", "Leafy greens like spinach and kale contain lutein and zeaxanthin, which act as natural blue-light filters for the macula."),
  f("db-eyes-5", "eyes", "record_breaker", "mind_blowing", "The eye has the fastest-reacting muscles in the human body. A single blink typically lasts only 100 to 150 milliseconds."),

  f("db-kidneys-1", "kidneys", "weird_wild", "surprising", "Your kidneys receive about 20% of all the blood pumped by the heart, which is the highest blood flow per gram of any organ in the body."),
  f("db-kidneys-2", "kidneys", "health_tip", "common", "Staying properly hydrated is the absolute best way to help your kidneys clear excess sodium and toxins, significantly preventing kidney stones."),
  f("db-kidneys-3", "kidneys", "what_damages_it", "surprising", "Chronic, daily overuse of NSAIDs (like Ibuprofen or Naproxen) restricts blood flow to the kidneys and can cause permanent renal damage over time."),
  f("db-kidneys-4", "kidneys", "superfood", "common", "Blueberries are perfect for kidney health because they are packed with antioxidants but naturally very low in sodium, phosphorus, and potassium."),
  f("db-kidneys-5", "kidneys", "record_breaker", "mind_blowing", "Your two kidneys filter about 45 gallons of blood every single day to produce just 1 to 2 quarts of urine."),

  f("db-muscles-1", "muscles", "weird_wild", "common", "It takes 43 separate muscles to frown, but only 17 muscles to smile."),
  f("db-muscles-2", "muscles", "health_tip", "common", "Consuming a high-quality protein source within 30 to 60 minutes after a heavy workout maximizes muscle protein synthesis and speeds up repair."),
  f("db-muscles-3", "muscles", "what_damages_it", "surprising", "Severe dehydration during extreme exercise can cause muscle tissue to break down rapidly into the bloodstream, a dangerous condition called rhabdomyolysis."),
  f("db-muscles-4", "muscles", "superfood", "surprising", "Tart cherry juice contains high levels of anthocyanins, which drastically reduce delayed onset muscle soreness (DOMS) after physical exertion."),
  f("db-muscles-5", "muscles", "record_breaker", "mind_blowing", "The strongest muscle in the human body (based on its weight and force) is the masseter—the heavy jaw muscle used for chewing."),
  f("gen-fact-lung-left-1", "lung-left", "weird_wild", "surprising", "The left lung has a special indentation called the cardiac notch, which acts as a built-in pocket to cradle the heart."),
  f("gen-fact-stomach-1", "stomach", "record_breaker", "surprising", "Your stomach is highly elastic; it can expand from about 50 milliliters (less than a shot glass) when empty to hold over 1 liter (about 32 ounces) of food and liquid when fully stretched."),
  f("gen-fact-throat-1", "throat", "weird_wild", "almost_unknown", "The epiglottis in your throat acts like a railway switch, automatically folding over your windpipe when you swallow to block food from entering your lungs."),
  f("gen-fact-skin-1", "skin", "weird_wild", "common", "Skin thickness varies dramatically across the body: it is thinnest on your eyelids (about 0.5 mm) and thickest on the soles of your feet (up to 4.0 mm)."),
  f("gen-fact-bones-1", "bones", "record_breaker", "surprising", "Your hands and feet contain more than half of all the bones in your entire body (106 out of 206 total bones)."),
  f("gen-fact-ears-1", "ears", "weird_wild", "almost_unknown", "A nerve called the chorda tympani runs directly through your middle ear cavity, carrying taste signals from the front of your tongue to your brain."),
  f("gen-fact-liver-1", "liver", "weird_wild", "surprising", "The liver is unique because it receives a dual blood supply: about 75% comes from the nutrient-rich portal vein, and 25% comes from the oxygen-rich hepatic artery."),
  f("gen-fact-lung-right-1", "lung-right", "weird_wild", "common", "The right lung is shorter but wider than the left lung to accommodate the liver, which sits directly beneath it in the abdomen."),
  f("gen-fact-bladder-1", "bladder", "weird_wild", "surprising", "Your brain receives the first 'full' signal when your bladder is only filled to about a quarter or half of its total capacity (around 150ml to 200ml)."),
  f("gen-fact-kidneys-1", "kidneys", "health_tip", "surprising", "If you donate or lose a kidney, the remaining kidney can grow up to 50% larger to handle the filtration needs of the entire body on its own."),
  f("gen-fact-small-intestine-1", "small-intestine", "weird_wild", "almost_unknown", "The interior of the small intestine is covered with millions of microscopic, finger-like projections called villi that multiply its absorption surface area by about 30 times."),
  f("gen-fact-large-intestine-1", "large-intestine", "superfood", "common", "The billions of gut bacteria in your large intestine synthesize vitamin K and biotin, which are directly absorbed into your bloodstream to help with blood clotting and metabolism."),
  f("gen-fact-hands-1", "hands", "weird_wild", "almost_unknown", "There are no muscles located inside your fingers; the muscles that move your fingers are located in your forearm and the palm of your hand, pulling on fingers like puppet strings via long tendons."),
  f("gen-fact-feet-1", "feet", "record_breaker", "surprising", "Walking impacts your feet with a force of about 1.5 times your body weight, which surges to 3 to 4 times your body weight when running."),
  f("gen-fact-jaw-1", "jaw", "weird_wild", "almost_unknown", "The temporomandibular joint (TMJ) in your jaw is one of the only joints in the body that can perform both hinge (rotation) and sliding (gliding) movements simultaneously."),
  f("gen-fact-shoulders-1", "shoulders", "weird_wild", "surprising", "The shoulder joint (glenohumeral joint) is so mobile because the 'socket' is extremely shallow, like a golf tee holding a golf ball, relying almost entirely on muscles and ligaments for stability."),
  f("gen-fact-spine-lumbar-1", "spine-lumbar", "weird_wild", "common", "The lumbar vertebrae are the largest unfused vertebrae in the spine, designed specifically to carry the massive load of your entire upper body."),
  f("gen-fact-spine-thoracic-1", "spine-thoracic", "weird_wild", "surprising", "The thoracic spine is the most stable section of the spine, as it works directly with the ribs to form a protective cage around your heart and lungs."),
  f("gen-fact-ankles-1", "ankles", "weird_wild", "surprising", "Your ankle joint is actually a complex of three separate joints working in harmony to allow your foot to tilt, rotate, and flex."),
  f("gen-fact-knees-1", "knees", "weird_wild", "almost_unknown", "Your kneecap (patella) is a sesamoid bone, which means it is embedded within a tendon (the quadriceps tendon) to act as a leverage-increasing pulley."),
  f("gen-fact-hips-1", "hips", "weird_wild", "surprising", "The hip joint is wrapped in the iliofemoral ligament—the strongest ligament in the human body—which prevents you from falling backward when standing upright."),
  f("gen-fact-wrists-1", "wrists", "weird_wild", "almost_unknown", "Your wrist bones (carpals) do not connect directly to the ulna bone of the forearm; a triangular fibrocartilage disc separates them to enable rotation."),
  f("gen-fact-elbows-1", "elbows", "weird_wild", "surprising", "The elbow joint contains three distinct smaller joints within one capsule, allowing you to both bend/straighten your arm and rotate your palm up and down."),
  f("gen-fact-frontal-lobe-1", "frontal-lobe", "weird_wild", "almost_unknown", "The frontal lobe coordinates with the motor cortex to suppress unwanted movements, helping you stay still when focused."),
  f("gen-fact-temporal-lobe-1", "temporal-lobe", "weird_wild", "almost_unknown", "Damage to Wernicke's area in the temporal lobe can cause 'fluent aphasia,' where a person speaks with normal speed and rhythm but uses random, meaningless words."),
  f("gen-fact-sinuses-1", "sinuses", "weird_wild", "surprising", "Your sinuses act as acoustic chambers, echoing and enriching the unique resonance and tone of your voice when you speak."),
  f("gen-fact-muscles-1", "muscles", "record_breaker", "common", "Skeletal muscles account for roughly 35% to 45% of your total body weight and are a primary source of body heat generation through shivering."),
  f("gen-fact-skin-2", "skin", "weird_wild", "surprising", "The skin on your palms and the soles of your feet has no sebaceous (oil) glands, which is why they do not produce oil or get greasy like your face or back."),
  f("gen-fact-heart-1", "heart", "weird_wild", "common", "The heart has its own electrical system (the sinoatrial node) that triggers beats independently of the brain, meaning it can continue beating outside the body if it has oxygen."),
  f("gen-fact-eyes-1", "eyes", "weird_wild", "surprising", "The muscles that control your eyes are the most active muscles in the entire body, moving constantly even during sleep (during REM sleep).")
];

export const FACTS: Fact[] = [...HARDCODED_FACTS, ...(generatedFactsJson as Fact[])];

// ━━━ Myths Busted ━━━
export { MYTHS } from "./myths";

// ━━━ Micro Actions ━━━
export const MICRO_ACTIONS: MicroAction[] = [
  { id: "ma-brain", bodyPartId: "brain", action: "Close your eyes for 60 seconds and visualize your favorite place in detail — color, sound, smell. This engages your hippocampus and prefrontal cortex.", duration: "60 seconds" },
  { id: "ma-eyes", bodyPartId: "eyes", action: "Look at a point 20 feet away for 20 seconds. Then blink rapidly 10 times. This lubricates your eyes and relaxes the ciliary muscles.", duration: "30 seconds" },
  { id: "ma-ears", bodyPartId: "ears", action: "Cover both ears with your palms for 10 seconds, then release. Notice how sounds become more vivid — you've just recalibrated your auditory processing.", duration: "15 seconds" },
  { id: "ma-heart", bodyPartId: "heart", action: "Place your hand on your chest and breathe in for 4 counts, hold for 4, exhale for 6. This activates your vagus nerve and slows your heart.", duration: "30 seconds" },
  { id: "ma-lungs", bodyPartId: "lung-left", action: "Take a deep breath through your nose (4 seconds), hold (4 seconds), exhale slowly through pursed lips (8 seconds). One cycle improves oxygen exchange.", duration: "16 seconds" },
  { id: "ma-liver", bodyPartId: "liver", action: "Drink a full glass of water right now. Your liver uses water for almost every metabolic process.", duration: "15 seconds" },
  { id: "ma-stomach", bodyPartId: "stomach", action: "Massage your abdomen in a clockwise circle for 30 seconds. This follows the natural direction of digestion.", duration: "30 seconds" },
  { id: "ma-kidneys", bodyPartId: "kidneys", action: "Check the color of your last pee. If it was darker than pale straw, drink a glass of water now.", duration: "10 seconds" },
  { id: "ma-spine-c", bodyPartId: "spine-cervical", action: "Drop your chin to your chest, then slowly look up at the ceiling. Repeat 5 times to decompress your cervical vertebrae.", duration: "30 seconds" },
  { id: "ma-spine-l", bodyPartId: "spine-lumbar", action: "Stand up and reach for the ceiling, then fold forward and touch your toes (or as close as you can). Hold 10 seconds each.", duration: "30 seconds" },
  { id: "ma-shoulders", bodyPartId: "shoulders", action: "Shrug your shoulders to your ears, hold for 5 seconds, then let them drop. Feel the tension release. Repeat 3 times.", duration: "20 seconds" },
  { id: "ma-hands", bodyPartId: "hands", action: "Spread your fingers wide for 5 seconds, then make a tight fist for 5. Repeat 5 times to improve blood flow.", duration: "30 seconds" },
  { id: "ma-knees", bodyPartId: "knees", action: "While seated, straighten one leg and hold for 10 seconds. Switch. This activates your VMO muscle which stabilizes the kneecap.", duration: "25 seconds" },
  { id: "ma-feet", bodyPartId: "feet", action: "Roll a tennis ball under each foot for 30 seconds. This releases the plantar fascia and feels amazing.", duration: "60 seconds" },
  { id: "ma-skin", bodyPartId: "skin", action: "Pinch the skin on the back of your hand and see how fast it snaps back — this is the 'turgor test' for hydration.", duration: "5 seconds" },
];

// ━━━ Doctor Questions ━━━
export const DOCTOR_QUESTIONS: DoctorQuestion[] = [
  { id: "dq-brain", bodyPartId: "brain", question: "Should I be concerned about frequent headaches on one side of my head?" },
  { id: "dq-eyes", bodyPartId: "eyes", question: "I see occasional floaters — when should I worry about them?" },
  { id: "dq-ears", bodyPartId: "ears", question: "I sometimes hear ringing in a quiet room. Could this be tinnitus?" },
  { id: "dq-heart", bodyPartId: "heart", question: "I occasionally feel my heart skip a beat. Is this normal or should I get an ECG?" },
  { id: "dq-lungs", bodyPartId: "lung-left", question: "I sometimes get short of breath during mild exercise. What tests should I consider?" },
  { id: "dq-liver", bodyPartId: "liver", question: "What do my liver enzyme levels (ALT, AST) mean in my blood work?" },
  { id: "dq-stomach", bodyPartId: "stomach", question: "I get frequent heartburn after meals. Should I be tested for H. pylori?" },
  { id: "dq-kidneys", bodyPartId: "kidneys", question: "My urine sometimes looks foamy — could this indicate a kidney issue?" },
  { id: "dq-spine", bodyPartId: "spine-lumbar", question: "I have persistent lower back pain. When should I get imaging vs. just doing PT?" },
  { id: "dq-knees", bodyPartId: "knees", question: "My knee clicks when I walk upstairs but doesn't hurt. Should I worry?" },
  { id: "dq-skin", bodyPartId: "skin", question: "I have a mole that changed shape. What are the ABCDE signs I should check?" },
  { id: "dq-bones", bodyPartId: "bones", question: "At what age should I get a bone density scan, and what factors increase my risk?" },
];

// ━━━ Daily Insights (60 days of content) ━━━
export { DAILY_INSIGHTS } from "./insights";

// ━━━ Helper Functions ━━━

export function getDailyFact(): Fact {
  const daily = FACTS.filter((x) => x.rarity !== "common");
  const today = new Date();
  const idx =
    (today.getUTCFullYear() * 372 + today.getUTCMonth() * 31 + today.getUTCDate()) %
    daily.length;
  return daily[idx];
}

export function getDailyInsight(): DailyInsight {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
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

export { DISEASE_ENTRIES as DISEASES } from "./diseases";

export const REMEDIES: RemedyEntry[] = [
  {
    id: "ginger-nausea",
    name: "Ginger Root Infusion",
    description: "Brewed fresh ginger root tea to alleviate digestive distress.",
    evidenceRating: "studied",
    evidenceDetails: "Clinical trials support ginger's efficacy in reducing pregnancy-related and chemotherapy-induced nausea by accelerating gastric emptying.",
    ailment: "Nausea & Indigestion",
    bodyPartId: "stomach"
  },
  {
    id: "turmeric-joints",
    name: "Turmeric & Black Pepper Paste",
    description: "Curcumin combined with piperine for active joint inflammation support.",
    evidenceRating: "studied",
    evidenceDetails: "Piperine increases curcumin bioavailability by up to 2000%, supporting its anti-inflammatory effects in osteoarthritis studies.",
    ailment: "Joint Stiffness",
    bodyPartId: "spine-lumbar"
  },
  {
    id: "peppermint-oil-ibs",
    name: "Peppermint Oil Extract",
    description: "Enteric-coated peppermint oil capsules or strong brewed peppermint tea to soothe the stomach and reduce gas.",
    evidenceRating: "studied",
    evidenceDetails: "PubMed-indexed gastroenterology studies demonstrate that the menthol in peppermint acts as a natural antispasmodic. It helps relax the smooth muscles of the digestive tract, which significantly reduces abdominal pain, cramping, and bloating in IBS patients.",
    ailment: "Bloating & Irritable Bowel Syndrome (IBS)",
    bodyPartId: "stomach"
  },
  {
    id: "honey-cough-throat",
    name: "Honey & Warm Water Soother",
    description: "A simple spoonful of honey, taken alone or mixed into warm water, to coat the throat and calm coughing fits.",
    evidenceRating: "studied",
    evidenceDetails: "Clinical trials show that a single dose of honey can significantly reduce mucus secretion and nighttime coughing in children and adults. Studies often find it performs as well as, or better than, common over-the-counter cough suppressants like dextromethorphan. (Note: Never give honey to infants under 1 year old due to botulism risk).",
    ailment: "Cough & Sore Throat",
    bodyPartId: "throat"
  },
  {
    id: "chamomile-tea-sleep",
    name: "Chamomile Flower Infusion",
    description: "Steeped dried chamomile flowers taken 30 to 45 minutes before bed to promote physical and mental relaxation.",
    evidenceRating: "studied",
    evidenceDetails: "Chamomile contains an antioxidant called apigenin. Scientific evidence shows that apigenin binds to specific receptors in the brain that decrease anxiety and initiate sleep, with controlled trials showing improvements in sleep quality and a reduction in wakefulness.",
    ailment: "Mild Anxiety & Sleep Quality",
    bodyPartId: "brain"
  },
  {
    id: "garlic-immune-bp",
    name: "Crushed Raw Garlic",
    description: "Eating a clove of raw, crushed garlic (often swallowed with water, olive oil, or honey to make the strong taste bearable).",
    evidenceRating: "studied",
    evidenceDetails: "When garlic is crushed or chopped, it releases an active compound called allicin. Studies suggest that allicin helps blood vessels relax (supporting healthy blood pressure) and boosts the disease-fighting response of white blood cells in your body when you encounter viruses.",
    ailment: "Immune Support and Mild High Blood Pressure",
    bodyPartId: "heart"
  },
  {
    id: "ashwagandha-anxiety",
    name: "Ashwagandha Root Extract (KSM-66)",
    description: "A daily adaptogenic herbal supplement taken to lower stress hormones and combat the chronic burnout associated with constant connectivity and heavy academic or project workloads.",
    evidenceRating: "studied",
    evidenceDetails: "Clinical trials in the Indian Journal of Psychological Medicine demonstrate that Ashwagandha root extract significantly reduces serum cortisol levels. It works by regulating the hypothalamic-pituitary-adrenal (HPA) axis, easing the nervous system out of \"fight or flight\" mode and improving resistance to daily stress.",
    ailment: "Stress, Burnout & \"Always-On\" Anxiety",
    bodyPartId: "brain",
    genZContext: "With constant digital connectivity and heavy pressure to achieve, Gen Z faces record highs in chronic stress, anxiety, and emotional exhaustion."
  },
  {
    id: "tart-cherry-insomnia",
    name: "Tart Cherry Juice",
    description: "Drinking a small glass of unsweetened, 100% tart cherry juice about an hour before going to bed.",
    evidenceRating: "studied",
    evidenceDetails: "Gadget screens emit blue light that tricks the brain into thinking it is still daytime, preventing it from producing sleep hormones. Tart cherries are one of the rare natural, food-based sources of melatonin. Drinking the juice naturally boosts your melatonin levels, helping you fall asleep faster and stay asleep longer, even if your internal clock is confused by screens.",
    ailment: "Screen-Induced Insomnia & \"Revenge Bedtime Procrastination\"",
    bodyPartId: "brain",
    genZContext: "Studies show Gen Z can spend an average of 16 hours a day utilizing gadgets, and this extreme digital overload severely disrupts sleep quality."
  },
  {
    id: "bilberry-eye-strain",
    name: "Bilberry Infusion",
    description: "A warm tea or daily extract made from bilberries (a dark, European cousin of the common blueberry).",
    evidenceRating: "studied",
    evidenceDetails: "Bilberries are packed with protective plant compounds called anthocyanins. Science shows these compounds specifically protect the retina and improve blood circulation in the tiny blood vessels of the eye. This reduces the physical fatigue, blurred vision, and dryness that comes from staring at pixels all day.",
    ailment: "Digital Eye Strain & Screen Fatigue",
    bodyPartId: "eyes",
    genZContext: "Hours of daily scrolling, studying, and working on devices lead to dry, tired, blurred, and physically strained eyes."
  },
  {
    id: "magnesium-tech-neck",
    name: "Topical Magnesium (Epsom Salt) & Heat Therapy",
    description: "A warm bath with dissolved magnesium sulfate (Epsom salts), or a warm magnesium oil compress applied directly to the neck and trapezius muscles.",
    evidenceRating: "studied",
    evidenceDetails: "Poor posture over keyboards and phones restricts blood flow and causes muscle spasms. Clinical evidence supports that heat induces vasodilation (widening of blood vessels), while transdermal magnesium acts as a natural calcium channel blocker. This combination physically forces contracted muscle fibers to release and relax, alleviating tension headaches and neck stiffness.",
    ailment: "\"Tech Neck\" & Postural Muscle Tension",
    bodyPartId: "spine-cervical",
    genZContext: "Constantly looking down at phones and hunching over laptops creates chronic, painful tension in the neck, shoulders, and upper back."
  },
  {
    id: "lemon-balm-nervous-stomach",
    name: "Lemon Balm Tea",
    description: "A mild, lemon-scented tea brewed from the leaves of the lemon balm plant (a calming herb in the mint family).",
    evidenceRating: "studied",
    evidenceDetails: "Lemon balm contains active compounds like rosmarinic acid. Studies prove it has a dual-action effect: it increases calming chemicals in the brain to reduce anxiety, while simultaneously relaxing the smooth muscles of the digestive tract. This physically stops the painful stomach spasms and bloating that happen when you are highly stressed.",
    ailment: "The \"Nervous Stomach\" & Stress-Induced Bloating",
    bodyPartId: "stomach",
    genZContext: "Because the brain and gut are deeply connected, the high rates of anxiety among young adults often show up physically as stomach cramps, severe bloating, or irregular digestion."
  },
  {
    id: "tart-cherry-gout",
    name: "Tart Cherry Juice Concentrate",
    description: "A small daily serving of 100% tart cherry juice (Montmorency cherries) to reduce uric acid and inflammation.",
    evidenceRating: "studied",
    evidenceDetails: "Clinical research indicates that the high concentration of anthocyanins in tart cherries powerfully clears uric acid from the bloodstream (preventing gout flare-ups) and accelerates muscle recovery after intense exercise by lowering inflammatory markers.",
    ailment: "Muscle Recovery & Gout",
    bodyPartId: "muscles"
  },
  {
    id: "green-tea-compress",
    name: "Warm Green Tea Compress",
    description: "Warm, steeped green tea bags applied over closed eyelids for 10-15 minutes to soothe eyes irritated by long hours of debugging, reviewing core computing concepts, or continuous screen exposure.",
    evidenceRating: "studied",
    evidenceDetails: "The warmth helps unclog the meibomian glands (which stop secreting oil properly when blink rates drop during intense screen focus). Furthermore, ophthalmological studies show that the high concentration of EGCG (epigallocatechin gallate) in green tea provides powerful anti-inflammatory properties that reduce ocular surface swelling and redness.",
    ailment: "Digital Eye Strain & Screen Fatigue",
    bodyPartId: "eyes",
    genZContext: "Hours of daily scrolling, studying, debugging, and working on devices lead to dry, tired, blurred, and physically strained eyes."
  },
  {
    id: "bacopa-monnieri",
    name: "Bacopa Monnieri (Brahmi)",
    description: "An herbal nootropic traditionally used in Ayurvedic medicine, taken daily to improve focus and retain complex information during intense algorithmic problem-solving or deep-study sessions.",
    evidenceRating: "studied",
    evidenceDetails: "Multiple randomized, double-blind, placebo-controlled trials published in psychopharmacology journals confirm that Bacopa Monnieri improves spatial memory, working memory, and rapid visual information processing. It achieves this by promoting the growth of nerve endings (dendritic branching), enhancing neural communication.",
    ailment: "Brain Fog & Cognitive Fatigue",
    bodyPartId: "brain",
    genZContext: "With constant digital multitasking, study loads, and information overload, cognitive fatigue and brain fog frequently disrupt focus."
  },
  {
    id: "lavender-anxiety",
    name: "Lavender Essential Oil Inhalation",
    description: "Inhaling diffused lavender essential oil or applying it to pulse points before sleeping.",
    evidenceRating: "studied",
    evidenceDetails: "Clinical studies demonstrate that lavender oil inhalation interacts with the GABA neurotransmitter system in the brain to reduce heart rate, calm the autonomic nervous system, and improve sleep quality.",
    ailment: "Stress, Sleep Disruptions & Mild Anxiety",
    bodyPartId: "brain",
    genZContext: "Perfect for wind-down routines to counteract late-night scrolling anxiety."
  },
  {
    id: "cranberry-uti",
    name: "Cranberry Extract (PACs)",
    description: "Consuming concentrated cranberry extract containing Proanthocyanidins (PACs).",
    evidenceRating: "studied",
    evidenceDetails: "Clinical trials show that A-type proanthocyanidins in cranberries physically block E. coli bacteria from adhering to the uroepithelial cells lining the bladder wall, helping prevent recurrent urinary tract infections.",
    ailment: "Recurrent Urinary Tract Infections (UTIs)",
    bodyPartId: "bladder"
  },
  {
    id: "colloidal-oatmeal-itch",
    name: "Colloidal Oatmeal Bath",
    description: "Soaking in a lukewarm bath with finely ground oats suspended in the water.",
    evidenceRating: "studied",
    evidenceDetails: "In vitro and clinical research confirms that oats contain avenanthramides—powerful antioxidants that reduce inflammation, soothe dry skin, and significantly inhibit histamine release to stop itching.",
    ailment: "Eczema, Dry Skin & Severe Itching",
    bodyPartId: "skin"
  },
  {
    id: "fennel-seeds-bloating",
    name: "Fennel Seed Chew / Infusion",
    description: "Chewing a teaspoon of whole fennel seeds after meals or brewing them into a warm herbal tea.",
    evidenceRating: "traditional",
    evidenceDetails: "Fennel has been used for centuries in Eastern medicine to treat stomach distress. It contains anethole, an organic compound that relaxes gastrointestinal tract muscles to alleviate trapped gas and bloating.",
    ailment: "Trapped Gas, Bloating & Indigestion",
    bodyPartId: "small-intestine"
  },
  {
    id: "eucalyptus-sinus",
    name: "Eucalyptus Oil Steam Inhalation",
    description: "Adding a few drops of pure eucalyptus oil to a bowl of steaming water, covering the head with a towel, and inhaling the steam.",
    evidenceRating: "traditional",
    evidenceDetails: "Eucalyptus oil contains cineole (eucalyptol), which has been traditionally used to relieve nasal congestion. It acts as a mild decongestant and anti-inflammatory agent, helping thin mucus in the sinuses.",
    ailment: "Nasal Congestion & Sinus Pressure",
    bodyPartId: "sinuses"
  },
  {
    id: "acv-reflux",
    name: "Diluted Apple Cider Vinegar (ACV)",
    description: "Drinking one tablespoon of raw, unfiltered apple cider vinegar diluted in a glass of water before meals.",
    evidenceRating: "anecdotal",
    evidenceDetails: "While highly popular online, there is no robust clinical evidence showing ACV cures acid reflux or GERD. Some users claim it balances stomach acid, but drinking highly acidic vinegar can irritate the esophagus and damage tooth enamel.",
    ailment: "Acid Reflux & Heartburn",
    bodyPartId: "stomach",
    genZContext: "A massive TikTok trend that is often shared as a cure-all, but lacking solid scientific backing."
  },
  {
    id: "cold-compress-migraine",
    name: "Cold Gel Compress",
    description: "Applying a cold gel pack or chilled cloth to the forehead or back of the neck during a headache.",
    evidenceRating: "anecdotal",
    evidenceDetails: "Many migraine sufferers report immediate soothing relief from cold packs. It is believed that the cold constricts local blood vessels and tempers down pain signals, though it does not resolve the underlying neurological cause of the migraine.",
    ailment: "Migraines & Tension Headaches",
    bodyPartId: "brain"
  },
  {
    id: "activated-charcoal-detox",
    name: "Activated Charcoal Drinks",
    description: "Consuming black activated charcoal powders or capsules daily as a wellness juice 'detox.'",
    evidenceRating: "unproven",
    evidenceDetails: "Activated charcoal is used in emergency medicine to bind to acute poisons in the stomach. However, consuming it for daily 'detoxification' is medically unproven and dangerous, as it binds to beneficial nutrients and blocks the absorption of prescription medications.",
    ailment: "Systemic Toxin Removal (Detoxification)",
    bodyPartId: "liver",
    genZContext: "Frequently marketed as an aesthetic 'detox drink' in social media health trends, despite having no clinical benefit for healthy livers."
  },
  {
    id: "ear-candling",
    name: "Ear Candling / Coning",
    description: "Placing a hollow, lit candle into the ear canal to create a supposed 'vacuum' that draws out wax and toxins.",
    evidenceRating: "unproven",
    evidenceDetails: "Numerous clinical trials and statements by the FDA and ENT societies confirm that ear candling does not produce a vacuum and does not remove earwax. The soot inside the candle afterward is simply burnt candle wax, and the practice frequently causes burns and eardrum perforations.",
    ailment: "Excess Earwax & Hearing Congestion",
    bodyPartId: "ears"
  },
  {
    id: "amber-teething-necklace",
    name: "Baltic Amber Necklaces",
    description: "Wearing beads of Baltic amber close to the skin, supposedly releasing succinic acid to ease teething pain.",
    evidenceRating: "unproven",
    evidenceDetails: "There is no scientific proof that body heat triggers the release of succinic acid from amber, or that it is absorbed through the skin to act as a painkiller. Pediatric societies warn that these necklaces pose serious choking and strangulation hazards for infants.",
    ailment: "Teething Pain & Jaw Discomfort",
    bodyPartId: "jaw"
  }
];

export const HACKS: HealthHack[] = [
  {
    id: "cold-water-dive",
    title: "Vagus Nerve Cold Immersion",
    practice: "Splash ice-cold water onto your face or submerge your face for 10-15 seconds while holding your breath.",
    scienceBasis: "Triggers the mammalian dive reflex, immediately activating the vagus nerve to slow down your heart rate and downregulate fight-or-flight anxiety.",
    bodyPartId: "brain"
  },
  {
    id: "acupressure-li4",
    title: "LI4 Acupressure for Headaches",
    practice: "Apply firm pressure to the webbed space between your thumb and index finger (Hegu point) for 2 minutes in circular motions.",
    scienceBasis: "Stimulates local nerves to release endorphins, triggering systemic pain relief signals that block cranial headache pathways.",
    bodyPartId: "jaw"
  }
];

export const BODY_MARVELS: BodyMarvel[] = [
  {
    id: "gut-brain-axis",
    title: "The Gut-Brain Connection: Your Second Brain",
    introduction: "Did you know your digestive tract contains over 100 million neurons? This enteric nervous system operates independently of your brain, communicating constantly via the vagus nerve.",
    sections: [
      {
        heading: "1. The Vagus Nerve Highway",
        body: "About 90% of the fibers in the vagus nerve carry information from the gut to the brain, not the other way around. Your gut is literally sending status reports to your head every millisecond."
      },
      {
        heading: "2. Serotonin's Secret Source",
        body: "Over 90% of your body's serotonin—the neurotransmitter responsible for mood stability and happiness—is manufactured in your gut, not your brain."
      }
    ],
    conclusion: "Taking care of your gut microbiome with fiber and fermented foods is not just digestive hygiene; it's a direct intervention in your mental health.",
    bodyPartId: "large-intestine"
  },
  {
    id: "liver-regeneration",
    title: "The Liver's Wolverine Superpower",
    introduction: "Your liver is the only organ in your body capable of complete regeneration. Even if up to 75% of it is removed, it can regrow to its original size within a matter of weeks.",
    sections: [
      {
        heading: "1. Rapid Cell Proliferation",
        body: "Hepatocytes (liver cells) usually exist in a resting phase. But when the liver is injured, they rapidly switch into a hyper-growth mode, multiplying relentlessly until the organ is restored."
      },
      {
        heading: "2. The Master Filter",
        body: "While it regrows, it never stops working. The liver filters over a liter of blood every minute, dismantling toxins, breaking down medications, and producing essential bile."
      }
    ],
    conclusion: "Treat your liver well. While it can regenerate from surgical removal, chronic damage like alcohol abuse or fatty liver disease can cause permanent scarring (cirrhosis) that stops the regeneration process entirely.",
    bodyPartId: "liver"
  },
  {
    id: "bone-strength",
    title: "Human Bone: Stronger Than Steel",
    introduction: "Ounce for ounce, human bone is stronger than solid steel. A block of bone the size of a matchbox can support 18,000 pounds of weight without crushing.",
    sections: [
      {
        heading: "1. The Composite Structure",
        body: "Bones aren't solid stone. They are a composite matrix of flexible collagen fibers woven with hard calcium phosphate crystals. This makes them both extremely strong and flexible enough to absorb impact."
      },
      {
        heading: "2. Constant Remodeling",
        body: "Your skeleton is completely replaced every 10 years. Specialized cells called osteoclasts constantly break down old bone, while osteoblasts build new bone in its place based on the physical stress you experience."
      }
    ],
    conclusion: "Lifting weights literally tells your bones to become denser. The impact signals osteoblasts to lay down more calcium, making weight training the best defense against osteoporosis.",
    bodyPartId: "skeleton"
  },
  {
    id: "optical-processing",
    title: "The Ultimate HDR Camera",
    introduction: "Your eyes can distinguish between 10 million different colors and adjust to lighting conditions ranging from glaring sunlight to faint starlight—far outperforming the most advanced digital cameras.",
    sections: [
      {
        heading: "1. Blind Spot Interpolation",
        body: "You actually have a physical blind spot in each eye where the optic nerve attaches. But you never notice it because your brain seamlessly 'photoshops' the missing data in real-time based on the surrounding environment."
      },
      {
        heading: "2. Continuous Micro-Saccades",
        body: "Even when staring intently, your eyes are constantly vibrating in tiny movements called micro-saccades. If they stopped moving entirely, your visual field would slowly fade to gray and disappear."
      }
    ],
    conclusion: "Your vision is less of a live video feed and more of an AI-generated construct heavily processed by your brain before you ever 'see' it.",
    bodyPartId: "eyes"
  }
];

export const SENSORY_FACTS: SensoryFact[] = [
  {
    id: "myoclonus",
    sensation: "Sudden Eye Twitch (Myokymia)",
    cause: "Minor involuntary muscle contractions triggered by micro-spasms in the eyelid muscles, usually exacerbated by dry eyes, stress, or caffeine.",
    tip: "Close your eyes, apply a warm compress for 2 minutes, and reduce caffeine intake today.",
    bodyPartId: "eyes"
  },
  {
    id: "borborygmi",
    sensation: "Stomach Growling (Borborygmi)",
    cause: "The sound of gas and fluid moving through the intestines as the peristaltic muscles contract, even when the stomach is empty (housekeeping wave).",
    tip: "Drink a warm glass of water; it helps soothe the digestive waves.",
    bodyPartId: "stomach"
  }
];

export const EMERGENCY_SCENARIOS: EmergencyScenario[] = [
  {
    id: "cardiac-arrest",
    name: "Cardiac Arrest (Heart Stopped)",
    warningSigns: [
      "Sudden loss of responsiveness",
      "No normal breathing (only gasping)",
      "No detectable pulse",
      "Collapsing abruptly"
    ],
    steps: [
      "Check the scene for safety, then tap the person's shoulder and shout, 'Are you okay?'",
      "If unresponsive, immediately yell for help and call your local emergency number.",
      "Send someone to get an AED (Automated External Defibrillator) immediately.",
      "Begin Hands-Only CPR: Push hard and fast in the center of the chest (use the CPR Pacer tool).",
      "When the AED arrives, turn it on and follow the voice prompts instantly."
    ],
    beforeAmbulance: [
      "Do not stop CPR unless the person shows clear signs of life or the AED is analyzing.",
      "Unlock the front door so paramedics can enter quickly.",
      "Have someone wait outside to flag down the ambulance."
    ],
    ifAlone: [
      "Call emergency services immediately and put your phone on speaker.",
      "Unlock your front door immediately before you lose consciousness.",
      "If you feel you are going to pass out, lie down on the floor to prevent head trauma from falling.",
      "You cannot perform effective CPR on yourself. Focus on staying calm, breathing, and waiting for help."
    ]
  },
  {
    id: "heart-attack",
    name: "Myocardial Infarction (Heart Attack)",
    warningSigns: [
      "Chest pressure, tightness, or squeezing",
      "Pain radiating to the left arm, neck, jaw, or back",
      "Cold sweat and sudden dizziness",
      "Shortness of breath and extreme fatigue"
    ],
    steps: [
      "Have the person sit down, rest, and try to keep them calm.",
      "Loosen any tight clothing around their neck and chest.",
      "Call emergency services immediately—do not attempt to drive them to the hospital yourself.",
      "Ask if they are prescribed nitroglycerin and help them take it if so.",
      "If they are not allergic, have them chew and swallow one adult aspirin (325mg) or four low-dose aspirin."
    ],
    beforeAmbulance: [
      "Keep the person talking to monitor their consciousness.",
      "Prepare to begin CPR if they lose consciousness and stop breathing.",
      "Gather all their current daily medications to hand to the paramedics."
    ],
    ifAlone: [
      "Call emergency services immediately and put your phone on speaker. Do NOT drive yourself.",
      "Unlock your front door immediately.",
      "Sit on the floor or in a low chair to prevent injury if you collapse.",
      "Chew and swallow one adult aspirin (325mg) if you are not allergic.",
      "Try to stay calm. Take slow, deep breaths while waiting for help."
    ]
  },
  {
    id: "stroke",
    name: "Stroke (Brain Ischemia/Hemorrhage)",
    warningSigns: [
      "F - Face Drooping (One side of the face is numb/drooping)",
      "A - Arm Weakness (Inability to raise both arms evenly)",
      "S - Speech Difficulty (Slurred speech or unable to repeat a simple sentence)",
      "T - Time to call emergency services immediately"
    ],
    steps: [
      "Conduct the F.A.S.T. test to verify symptoms.",
      "Call emergency services immediately. Every minute counts to save brain tissue.",
      "Note the exact time the first symptoms appeared. Paramedics will need this for clot-busting drugs.",
      "Lay the person down safely on their side with their head slightly elevated.",
      "Keep them comfortable and reassure them calmly."
    ],
    beforeAmbulance: [
      "Do NOT give them any food, water, or medication (including aspirin), as they may choke or it may worsen a bleeding stroke.",
      "Write down the exact 'Time of Last Known Normal' for the medical team.",
      "Clear a path in your house for the stretcher."
    ],
    ifAlone: [
      "Call emergency services immediately and leave the line open on speaker even if you cannot speak clearly.",
      "Unlock your front door immediately. Every minute counts.",
      "Do NOT attempt to drive to the hospital.",
      "Lie down in a safe, comfortable position. Do not eat or drink anything, including aspirin.",
      "Stay as still as possible and try to remain calm."
    ]
  },
  {
    id: "choking",
    name: "Severe Choking",
    warningSigns: [
      "Clutching the throat with both hands (universal choking sign)",
      "Inability to speak, cry, or cough forcefully",
      "Skin, lips, or nails turning blue or dusky",
      "High-pitched squeaking sounds when trying to breathe"
    ],
    steps: [
      "Ask, 'Are you choking?' If they nod yes, tell them you are going to help.",
      "Stand behind the person and wrap your arms around their waist.",
      "Make a fist with one hand and place the thumb side just above their belly button.",
      "Grasp your fist with your other hand.",
      "Give quick, upward thrusts (Heimlich maneuver) into the abdomen.",
      "Continue thrusts until the object is forced out or the person becomes unresponsive."
    ],
    beforeAmbulance: [
      "If the person becomes unresponsive, lower them to the ground.",
      "Call emergency services immediately.",
      "Begin standard CPR starting with chest compressions. Look in the mouth for an object before providing rescue breaths."
    ],
    ifAlone: [
      "Call emergency services and leave the phone on speaker (even if you can't speak, they can hear you struggling).",
      "Perform the Heimlich maneuver on yourself: Make a fist just above your navel, grasp it with your other hand, and thrust quickly inward and upward.",
      "Alternatively, forcefully press your upper abdomen over a hard edge (like the back of a chair, a table edge, or a railing) and thrust inward and upward.",
      "Do not go to the bathroom or hide; stay near an unlocked door if possible."
    ]
  },
  {
    id: "anaphylaxis",
    name: "Severe Allergic Reaction (Anaphylaxis)",
    warningSigns: [
      "Swelling of the lips, tongue, or throat",
      "Difficulty breathing, swallowing, or severe wheezing",
      "Widespread hives, redness, or itching",
      "Dizziness, fainting, or feeling of impending doom"
    ],
    steps: [
      "Ask the person if they carry an epinephrine auto-injector (EpiPen).",
      "If yes, help them use it immediately: press firmly against the outer mid-thigh and hold for 3-10 seconds.",
      "Call emergency services immediately, even if symptoms improve.",
      "Have the person lie flat on their back. If they are having trouble breathing, let them sit up.",
      "If symptoms do not improve after 5-15 minutes, administer a second EpiPen if available."
    ],
    beforeAmbulance: [
      "Keep the used EpiPen to hand to the paramedics.",
      "Monitor their breathing and be ready to begin CPR if they become unresponsive.",
      "Try to identify and remove the allergen trigger if it is still present (e.g., a bee stinger)."
    ]
  },
  {
    id: "severe-bleeding",
    name: "Massive Hemorrhage (Severe Bleeding)",
    warningSigns: [
      "Blood spurting or pumping from a wound",
      "Blood pooling rapidly on the ground",
      "Clothing completely soaked in blood",
      "Amputation or partial amputation"
    ],
    steps: [
      "Ensure your own safety first (put on medical gloves if available).",
      "Call emergency services immediately.",
      "Find the source of the bleeding and apply direct, extremely firm pressure using a clean cloth or gauze.",
      "If the bleeding is on a limb and cannot be controlled by pressure, apply a tourniquet 2-3 inches above the wound (not on a joint).",
      "Tighten the tourniquet until the bleeding completely stops."
    ],
    beforeAmbulance: [
      "Write down the exact time the tourniquet was applied (e.g., on their forehead or on the tourniquet itself).",
      "Never remove a tourniquet once it is applied; only medical professionals should remove it.",
      "Keep the person warm with an emergency blanket to help prevent physical shock."
    ],
    ifAlone: [
      "Call emergency services immediately on speakerphone.",
      "Apply extremely firm, direct pressure to the wound with whatever you have (shirt, towel, hands). Do not let go.",
      "If the bleeding is on an arm or leg and won't stop, apply a makeshift tourniquet high and tight above the wound, and tie it as tight as possible.",
      "Keep yourself warm and lie down if you start feeling lightheaded."
    ]
  },
  {
    id: "seizure",
    name: "Grand Mal Seizure",
    warningSigns: [
      "Sudden loss of consciousness and collapsing",
      "Uncontrollable muscle spasms and jerking",
      "Clenched teeth or biting of the tongue",
      "Loss of bladder or bowel control"
    ],
    steps: [
      "Ease the person to the floor to prevent falling injuries.",
      "Turn the person gently onto one side to help keep their airway clear.",
      "Clear the surrounding area of hard or sharp objects.",
      "Place something soft and flat under their head (like a folded jacket).",
      "Time the seizure. If it lasts longer than 5 minutes, call emergency services."
    ],
    beforeAmbulance: [
      "Do NOT try to hold the person down or stop their movements.",
      "Do NOT put anything in the person's mouth.",
      "Once the seizure ends, stay with them until they are fully conscious and aware of their surroundings."
    ]
  },
  {
    id: "asthma-attack",
    name: "Severe Asthma Attack",
    warningSigns: [
      "Severe wheezing both when breathing in and out",
      "Coughing that won't stop",
      "Very rapid breathing and chest retractions",
      "Inability to speak in full sentences without gasping"
    ],
    steps: [
      "Help the person sit comfortably upright (lying down makes breathing harder).",
      "Keep them calm, as panic worsens shortness of breath.",
      "Help them use their rescue inhaler (usually blue, e.g., Albuterol).",
      "Use a spacer with the inhaler if one is available.",
      "If they don't have an inhaler, or if symptoms don't improve within 5 minutes of using it, call emergency services."
    ],
    beforeAmbulance: [
      "Continue to give 1 puff of the inhaler every 30 to 60 seconds (up to 10 puffs) while waiting for help.",
      "Ensure the room has fresh air and is free of known triggers (smoke, pets, strong odors).",
      "Have their medical history ready for paramedics."
    ],
    ifAlone: [
      "Call emergency services immediately and leave the line open on speakerphone so they can track your location.",
      "Sit upright or lean forward slightly. Do NOT lie down.",
      "Take slow, steady breaths. Use your rescue inhaler if you have one.",
      "Unlock your front door so emergency responders can enter.",
      "Try to remain as calm as possible to reduce oxygen demand."
    ]
  },
  {
    id: "diabetic-emergency",
    name: "Diabetic Emergency (Severe Hypoglycemia)",
    warningSigns: [
      "Extreme confusion, irritability, or erratic behavior",
      "Shaking, trembling, and heavy sweating",
      "Pale skin and sudden intense hunger",
      "Loss of consciousness or seizures"
    ],
    steps: [
      "If the person is awake and can swallow safely, give them 15-20 grams of fast-acting sugar (e.g., fruit juice, regular soda, honey, or glucose tablets).",
      "Wait 15 minutes. If they are still confused or symptomatic, give another dose of sugar.",
      "If the person becomes unconscious or is having a seizure, call emergency services immediately.",
      "If unconscious, do NOT put food or liquid in their mouth (they could choke).",
      "If available and you are trained, administer a Glucagon injection."
    ],
    beforeAmbulance: [
      "If unconscious, place them in the recovery position (on their side).",
      "Gather their insulin, glucose monitor, and any other medications to give to the paramedics.",
      "Monitor their breathing closely and be ready to begin CPR if breathing stops."
    ]
  },
  {
    id: "severe-burns",
    name: "Major Burns (Thermal or Chemical)",
    warningSigns: [
      "Burns covering a large area of the body or on the face, hands, or groin",
      "Skin that is dry, leathery, charred, or white (3rd degree)",
      "Severe pain, or paradoxically, no pain at all (nerve damage)",
      "Difficulty breathing (if airways are burned)"
    ],
    steps: [
      "Stop the burning process: Extinguish flames (Stop, Drop, and Roll) or safely remove the person from the heat/chemical source.",
      "Call emergency services immediately.",
      "Cool the burn with cool (not ice cold) running water for at least 10-20 minutes. Do NOT use ice.",
      "Remove jewelry, belts, or tight clothing near the burn before swelling begins.",
      "Cover the burn loosely with a clean, dry, sterile dressing or plastic wrap."
    ],
    beforeAmbulance: [
      "Do NOT remove clothing that is stuck to the burn.",
      "Do NOT apply ointments, butter, lotions, or pop any blisters.",
      "Keep the person warm with a blanket on unburned areas to prevent hypothermia and shock."
    ]
  },
  {
    id: "heat-stroke",
    name: "Heat Stroke (Life-Threatening)",
    warningSigns: [
      "Extremely high body temperature (103°F / 39.4°C or higher)",
      "Hot, red, dry skin (sweating has usually stopped)",
      "Severe confusion, slurred speech, or hallucinations",
      "Fainting, losing consciousness, or seizures"
    ],
    steps: [
      "Call emergency services immediately. Heat stroke is a strict medical emergency.",
      "Move the person to a cooler place (air conditioning or deep shade) immediately.",
      "Cool them down rapidly: douse them with cold water, apply ice packs to the neck, armpits, and groin.",
      "Fan air over them while wetting their skin.",
      "If they are fully conscious, give small, slow sips of cool water."
    ],
    beforeAmbulance: [
      "Do NOT give them anything to drink if they are confused or unconscious.",
      "Monitor their breathing and pulse constantly.",
      "Continue aggressive cooling until medical help arrives."
    ]
  },
  {
    id: "hypothermia",
    name: "Severe Hypothermia",
    warningSigns: [
      "Uncontrollable shivering (or shivering that has dangerously stopped)",
      "Slurred speech, mumbling, or confusion",
      "Clumsiness, lack of coordination, or stumbling",
      "Very low energy, drowsiness, or loss of consciousness"
    ],
    steps: [
      "Call emergency services immediately.",
      "Move the person gently to a warm, dry location. Rough handling can trigger a fatal irregular heartbeat.",
      "Remove any wet clothing and dry the person.",
      "Warm the center of their body first (chest, neck, head, groin) using dry, warm blankets or skin-to-skin contact.",
      "Offer warm, sweet, non-alcoholic beverages ONLY if they are fully alert and can swallow safely."
    ],
    beforeAmbulance: [
      "Do NOT apply direct heat (like hot water, heating pads, or heat lamps) to bare skin.",
      "Do NOT rub or massage their limbs (this can force cold blood back to the heart).",
      "Do NOT attempt to warm their arms and legs first."
    ]
  },
  {
    id: "overdose",
    name: "Poisoning or Drug Overdose",
    warningSigns: [
      "Unresponsiveness or extreme drowsiness",
      "Pinpoint pupils or highly dilated pupils",
      "Slow, shallow, or stopped breathing (common in opioid overdose)",
      "Vomiting, seizures, or empty pill bottles nearby"
    ],
    steps: [
      "Call emergency services and/or the Poison Control Center immediately.",
      "Check the scene for hazards (needles, toxic fumes, pill bottles).",
      "If you suspect an opioid overdose and have Naloxone (Narcan), administer it immediately via nasal spray or injection.",
      "If the person is unconscious but breathing, place them in the recovery position (on their side) to prevent choking on vomit.",
      "If breathing stops, begin CPR immediately."
    ],
    beforeAmbulance: [
      "Gather all pill bottles, powders, or substances found near the victim to hand to paramedics.",
      "Do NOT induce vomiting unless explicitly instructed to do so by Poison Control.",
      "Monitor their breathing continuously; multiple doses of Narcan may be needed."
    ]
  },
  {
    id: "spinal-injury",
    name: "Spinal / Neck Trauma",
    warningSigns: [
      "Severe pain or pressure in the neck, head, or back",
      "Numbness, tingling, or loss of feeling in hands, fingers, feet, or toes",
      "Loss of control over parts of the body (paralysis)",
      "Unnatural positioning of the head or neck after a fall or crash"
    ],
    steps: [
      "Call emergency services immediately.",
      "Do NOT move the person unless they are in immediate, life-threatening danger (e.g., a burning car).",
      "Instruct the person to stay completely still and not to nod or shake their head.",
      "Place your hands on both sides of their head to hold it perfectly still in the position you found it.",
      "Keep them calm and reassure them that help is coming."
    ],
    beforeAmbulance: [
      "Do NOT attempt to straighten their neck or body.",
      "Do NOT remove their helmet if they are wearing one (e.g., motorcycle or bicycle helmet).",
      "If you must begin CPR due to no breathing, do not tilt the head back; use the jaw-thrust maneuver if trained."
    ]
  },
  {
    id: "drowning",
    name: "Drowning (Submersion Injury)",
    warningSigns: [
      "Person found unconscious in water",
      "Blue or pale skin and lips",
      "Coughing up pink, frothy fluid",
      "No breathing or isolated gasps"
    ],
    steps: [
      "Safely remove the person from the water. Do not put yourself in danger of drowning.",
      "Check for responsiveness and normal breathing.",
      "If unresponsive and not breathing, call emergency services immediately.",
      "Begin CPR immediately. Unlike sudden cardiac arrest, drowning requires oxygen: start with 2 rescue breaths followed by 30 chest compressions.",
      "If an AED is available, dry the person's chest thoroughly before applying pads."
    ],
    beforeAmbulance: [
      "If they vomit during CPR, roll them onto their side to clear the airway, then roll them back to continue.",
      "Even if they recover and seem fine, they MUST go to the hospital to prevent 'secondary drowning' (fluid in the lungs).",
      "Keep them warm with blankets after removing wet clothing."
    ]
  },
  {
    id: "electric-shock",
    name: "Severe Electrical Shock",
    warningSigns: [
      "Person is unresponsive and near an electrical source",
      "Visible burn marks on the skin",
      "Muscle spasms, seizures, or muscle stiffness",
      "Irregular heartbeat or no pulse"
    ],
    steps: [
      "Do NOT touch the person if they are still in contact with the electrical current.",
      "Turn off the source of electricity if possible (unplug the appliance or turn off the circuit breaker).",
      "If you cannot turn it off, use a dry, non-conducting object (like a wooden broom handle) to push the person away from the source.",
      "Once they are clear of the current, call emergency services.",
      "Check for breathing and a pulse. Begin CPR immediately if they are unresponsive and not breathing."
    ],
    beforeAmbulance: [
      "Cover any visible burns loosely with a sterile gauze bandage (do not use blankets or towels, as loose fibers can stick).",
      "Keep the person lying down and prevent them from moving, as electrical shocks can cause unseen spinal injuries or internal burns.",
      "Wait for paramedics even if the person feels fine, as electrical shocks can cause delayed heart arrhythmias."
    ]
  }
];

export const QA_ENTRIES: QAEntry[] = [
  {
    id: "sleep-cycles-expert",
    question: "Why do I feel so tired even if I sleep for 8 hours?",
    answer: "Sleep quality is just as important as quantity. If you wake up in the middle of a deep sleep stage (Stage 3/4) rather than at the end of a 90-minute cycle, you will experience sleep inertia. Additionally, alcohol, screen exposure before bed, or sleep apnea can disrupt deep sleep phases.",
    expertName: "Dr. Sarah Patel",
    expertTitle: "Sleep Specialist & Neuroscientist",
    bodyPartId: "brain"
  }
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
    greyMarket: "Grey Market Index",
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
    foodLabels: "Food Labels"
  },
  hi: {
    home: "होम",
    explore: "अन्वेषण",
    diary: "डायरी",
    daily: "दैनिक ज्ञान",
    quest: "क्वेस्ट",
    greyMarket: "ग्रे मार्केट इंडेक्स",
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
    foodLabels: "खाद्य लेबल"
  }
} as const;

export type Language = keyof typeof TRANSLATIONS;

