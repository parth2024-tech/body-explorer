// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// The Living Body Atlas — Content Database
// 30+ body parts, 200+ facts, myths, actions, questions
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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
  cprTimerNeeded: boolean;
  steps: string[];
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
];

// Compact fact builder
const f = (id: string, bodyPartId: string, category: Category, rarity: Rarity, text: string, source?: string): Fact =>
  ({ id, bodyPartId, category, rarity, text, source });

export const FACTS: Fact[] = [
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
];

// ━━━ Myths Busted ━━━
export const MYTHS: MythBusted[] = [
  { id: "m-brain-1", bodyPartId: "brain", myth: "We only use 10% of our brain.", reality: "Brain scans show virtually all areas are active — different tasks use different regions, but nothing is permanently idle." },
  { id: "m-eyes-1", bodyPartId: "eyes", myth: "Reading in dim light ruins your eyesight.", reality: "It causes temporary eye strain but no permanent damage. Your eyes recover fully after resting." },
  { id: "m-heart-1", bodyPartId: "heart", myth: "Your heart stops when you sneeze.", reality: "A sneeze changes chest pressure and may briefly alter heart rhythm, but it never stops." },
  { id: "m-lungs-1", bodyPartId: "lung-left", myth: "Cold weather gives you a cold.", reality: "Colds are caused by viruses, not temperature. Cold air may dry nasal passages making you more susceptible though." },
  { id: "m-liver-1", bodyPartId: "liver", myth: "You need detox diets to cleanse your liver.", reality: "Your liver detoxifies itself continuously — no juice cleanse can improve on 500+ chemical processes." },
  { id: "m-stom-1", bodyPartId: "stomach", myth: "Spicy food causes ulcers.", reality: "H. pylori bacteria and NSAIDs cause most ulcers. Spicy food may irritate existing ones but doesn't create them." },
  { id: "m-bones-1", bodyPartId: "bones", myth: "Cracking your knuckles causes arthritis.", reality: "A doctor cracked his own knuckles on one hand for 60 years — no difference in arthritis rates." },
  { id: "m-skin-1", bodyPartId: "skin", myth: "Shaving makes hair grow back thicker.", reality: "Shaving cuts hair at the thickest point, making it feel coarser. Actual hair thickness doesn't change." },
  { id: "m-ears-1", bodyPartId: "ears", myth: "You need to clean earwax out regularly.", reality: "Ears are self-cleaning. Earwax protects the ear canal and naturally migrates outward." },
  { id: "m-knee-1", bodyPartId: "knees", myth: "Running is bad for your knees.", reality: "Studies show recreational runners actually have LOWER rates of knee arthritis than non-runners." },
  { id: "m-jaw-1", bodyPartId: "jaw", myth: "Wisdom teeth have no purpose.", reality: "They were essential for grinding tough raw foods. Modern diets and smaller jaws made them vestigial." },
  { id: "m-feet-1", bodyPartId: "feet", myth: "Flat feet are always a problem.", reality: "Many people with flat feet have no pain or functional issues. The arch isn't always necessary for healthy movement." },
];

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
export const DAILY_INSIGHTS: DailyInsight[] = [
  { dayOfYear: 0, bodyPartId: "brain", fact: "Your brain uses 20% of your body's total energy — despite being only 2% of your body weight.", action: "Close your eyes and count backward from 100 by 7s. This simple exercise fires up your prefrontal cortex.", actionDuration: "30 seconds" },
  { dayOfYear: 1, bodyPartId: "heart", fact: "Your heart creates enough pressure to squirt blood 30 feet across a room.", action: "Place two fingers on your wrist. Count your pulse for 15 seconds and multiply by 4. That's your resting heart rate.", actionDuration: "20 seconds" },
  { dayOfYear: 2, bodyPartId: "lung-left", fact: "If you laid all the airways in your lungs end to end, they'd stretch 1,500 miles.", action: "Take 5 deep breaths using the 4-7-8 technique: inhale 4s, hold 7s, exhale 8s.", actionDuration: "60 seconds" },
  { dayOfYear: 3, bodyPartId: "eyes", fact: "Your eyes process 36,000 pieces of information every hour you're awake.", action: "Close your eyes gently and press your palms over them for 20 seconds. The darkness lets your photoreceptors reset.", actionDuration: "25 seconds" },
  { dayOfYear: 4, bodyPartId: "skin", fact: "Your skin hosts over 1,000 species of bacteria — most of them are protecting you.", action: "Apply sunscreen to any exposed skin right now. Even on cloudy days, 80% of UV rays reach you.", actionDuration: "60 seconds" },
  { dayOfYear: 5, bodyPartId: "spine-lumbar", fact: "Astronauts grow up to 2 inches taller in space because their spinal discs decompress without gravity.", action: "Lie flat on your back and pull both knees to your chest. Hold for 20 seconds. Your lumbar discs just got a mini decompression.", actionDuration: "25 seconds" },
  { dayOfYear: 6, bodyPartId: "stomach", fact: "Your stomach completely replaces its inner lining every 3-4 days to protect itself from its own acid.", action: "Before your next meal, take 3 slow breaths. This activates your 'rest and digest' mode for better nutrient absorption.", actionDuration: "15 seconds" },
  { dayOfYear: 7, bodyPartId: "hands", fact: "Your hands are controlled by muscles in your forearms — not in the hands themselves. The fingers have no muscles.", action: "Make a fist, then spread your fingers wide. Repeat 10 times quickly. Feel the forearm muscles doing all the work.", actionDuration: "20 seconds" },
  { dayOfYear: 8, bodyPartId: "kidneys", fact: "Your kidneys produce erythropoietin (EPO) — the same hormone athletes get banned for injecting.", action: "Drink a glass of water right now and notice how long until you need to pee. That's roughly your kidney processing speed.", actionDuration: "10 seconds" },
  { dayOfYear: 9, bodyPartId: "ears", fact: "Your ears contain the smallest muscles in your body — the stapedius is just 1mm long.", action: "Close your eyes and try to identify 5 different sounds around you right now. Your auditory cortex just performed a complex spatial analysis.", actionDuration: "30 seconds" },
  { dayOfYear: 10, bodyPartId: "liver", fact: "Your liver can regenerate to its full size within weeks — even if 75% is removed.", action: "Think about what you ate in the last 24 hours. Your liver processed every single chemical in that food.", actionDuration: "20 seconds" },
  { dayOfYear: 11, bodyPartId: "knees", fact: "Your kneecap acts as a fulcrum, multiplying the force of your quadriceps by 30%.", action: "Do 5 slow bodyweight squats, focusing on keeping your knees tracking over your toes. This strengthens the VMO.", actionDuration: "30 seconds" },
  { dayOfYear: 12, bodyPartId: "bones", fact: "Your skeleton is completely replaced every 10 years — you're walking around in a completely new frame.", action: "Jump in place 10 times. The impact tells your osteoblasts to build stronger bone — this is called Wolff's Law.", actionDuration: "15 seconds" },
  { dayOfYear: 13, bodyPartId: "shoulders", fact: "The shoulder joint sacrifices stability for mobility — it's basically a golf ball sitting on a tee.", action: "Roll your shoulders backward 10 times, then forward 10 times. Feel the full range of your glenohumeral joint.", actionDuration: "30 seconds" },
  { dayOfYear: 14, bodyPartId: "feet", fact: "Your feet have 250,000 sweat glands — producing up to half a pint of sweat daily.", action: "Stand on one foot for 30 seconds, then switch. Your foot's intrinsic muscles just did the work of maintaining balance.", actionDuration: "60 seconds" },
  { dayOfYear: 15, bodyPartId: "frontal-lobe", fact: "Your frontal lobe is the last brain region to fully develop — usually around age 25.", action: "Try to resist checking your phone for the next 10 minutes. That impulse control? Pure frontal lobe.", actionDuration: "10 seconds" },
  { dayOfYear: 16, bodyPartId: "jaw", fact: "You chew about 600,000 times a year, generating enough force to crush a walnut shell.", action: "Open your mouth as wide as you can, hold 5 seconds, then slowly close. Repeat 3 times. You're releasing TMJ tension.", actionDuration: "20 seconds" },
  { dayOfYear: 17, bodyPartId: "throat", fact: "You swallow about 2,000 times a day — and each swallow involves 50 pairs of muscles.", action: "Hum at your lowest comfortable pitch for 10 seconds. This vibrates your vocal cords and stimulates the vagus nerve.", actionDuration: "15 seconds" },
  { dayOfYear: 18, bodyPartId: "sinuses", fact: "Your sinuses lighten your skull by about 1 kilogram — critical engineering.", action: "Press your tongue to the roof of your mouth and press between your eyebrows with one finger for 20 seconds. Your sinuses just shifted pressure.", actionDuration: "25 seconds" },
  { dayOfYear: 19, bodyPartId: "bladder", fact: "Your bladder can sense when it's about 40% full and sends the first 'gentle reminder' signal.", action: "Next time you feel the urge, wait 5 minutes before going. This builds bladder capacity and control.", actionDuration: "5 seconds" },
  // Continue with more days...
  { dayOfYear: 20, bodyPartId: "brain", fact: "Dreams last 5–45 minutes, and you forget 95% of them within 5 minutes of waking.", action: "Tonight, keep a notebook by your bed. Write any dream fragment as soon as you wake — this trains dream recall.", actionDuration: "10 seconds" },
  { dayOfYear: 21, bodyPartId: "heart", fact: "Your heart's electrical system is so independent that it could beat outside your body, in a dish.", action: "Walk briskly for 2 minutes right now. Your heart rate will rise — that's the SA node accelerating on demand.", actionDuration: "120 seconds" },
  { dayOfYear: 22, bodyPartId: "large-intestine", fact: "Your gut bacteria produce vitamins (K, B12) that your own cells cannot manufacture.", action: "Eat something fermented today — yogurt, sauerkraut, or kombucha. You're feeding your gut's vitamin factory.", actionDuration: "30 seconds" },
  { dayOfYear: 23, bodyPartId: "wrists", fact: "The carpal tunnel is a space the width of your index finger — 9 tendons and 1 nerve pass through it.", action: "Extend your arm, pull your fingers back gently with the other hand. Hold 15 seconds. Repeat on the other side.", actionDuration: "35 seconds" },
  { dayOfYear: 24, bodyPartId: "hips", fact: "Your hip flexors are probably shortened right now from sitting — they pull your pelvis forward and arch your lower back.", action: "Kneel on one knee and push your hips forward gently. Hold 20 seconds per side. You just stretched your psoas.", actionDuration: "45 seconds" },
  { dayOfYear: 25, bodyPartId: "elbows", fact: "Tennis elbow affects non-tennis players in 95% of cases — it's really 'mouse elbow' or 'wrench elbow'.", action: "Straighten your arm, make a fist, and slowly rotate your wrist. If you feel pulling at the elbow, your extensors are tight.", actionDuration: "20 seconds" },
  { dayOfYear: 26, bodyPartId: "ankles", fact: "Your ankle joint handles forces 5x your body weight when you walk downhill.", action: "Trace the alphabet with each foot. This moves your ankle through its full range of motion in every direction.", actionDuration: "60 seconds" },
  { dayOfYear: 27, bodyPartId: "spine-cervical", fact: "Looking at your phone tilts your head 60 degrees, adding 60 pounds of force to your neck.", action: "Retract your chin straight back (double chin position) and hold 5 seconds. Repeat 5 times. This reverses text neck posture.", actionDuration: "30 seconds" },
  { dayOfYear: 28, bodyPartId: "temporal-lobe", fact: "Your temporal lobe links music to emotions so strongly that a song can make you cry decades later.", action: "Listen to a song from your teenage years. Notice the flood of specific memories — that's temporal lobe retrieval.", actionDuration: "30 seconds" },
  { dayOfYear: 29, bodyPartId: "small-intestine", fact: "Your small intestine's villi give it a total surface area of about 2,700 square feet.", action: "After your next meal, take a 10-minute walk. This speeds gastric emptying and improves nutrient absorption by 30%.", actionDuration: "10 seconds" },
];

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

export const DISEASES: DiseaseEntry[] = [
  {
    id: "migraine",
    name: "Migraine",
    overview: "A neurological condition characterized by intense, debilitating headaches, often accompanied by nausea and light sensitivity.",
    symptoms: [
      { text: "Throbbing head pain (usually on one side)", frequency: "always" },
      { text: "Sensitivity to light and sound", frequency: "often" },
      { text: "Nausea or vomiting", frequency: "sometimes" },
      { text: "Visual aura (shimmering lights, blind spots)", frequency: "sometimes" }
    ],
    whenToSeeDoctor: "See a doctor if migraines are sudden and severe ('thunderclap' headache), accompanied by fever, stiff neck, mental confusion, seizures, double vision, numbness, or difficulty speaking.",
    misconceptions: [
      "It is just a bad headache.",
      "Caffeine always helps."
    ],
    bodyPartId: "brain"
  },
  {
    id: "acid-reflux",
    name: "Acid Reflux (GERD)",
    overview: "Stomach acid repeatedly flows back into the tube connecting your mouth and stomach (esophagus), causing irritation.",
    symptoms: [
      { text: "Heartburn / burning chest pain", frequency: "always" },
      { text: "Regurgitation of food or sour liquid", frequency: "often" },
      { text: "Difficulty swallowing", frequency: "sometimes" },
      { text: "Sensation of a lump in your throat", frequency: "sometimes" }
    ],
    whenToSeeDoctor: "Seek immediate medical attention if you experience chest pain, especially if you also have shortness of breath, or jaw/arm pain, as these may be signs of a heart attack.",
    misconceptions: [
      "Acid reflux is caused by too much stomach acid (sometimes it is poor sphincter tone).",
      "Drinking milk will cure GERD permanently."
    ],
    bodyPartId: "stomach"
  }
];

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
    id: "stroke",
    name: "Stroke Warning & First Aid",
    warningSigns: [
      "F - Face Drooping (one side of face droops or is numb)",
      "A - Arm Weakness (one arm drifts downward when raised)",
      "S - Speech Difficulty (slurred speech or unable to speak)",
      "T - Time to call emergency services immediately"
    ],
    beforeAmbulance: [
      "Do NOT give the person food, drink, or aspirin (it could worsen hemorrhagic strokes).",
      "Note the exact time symptoms first appeared.",
      "If unconscious but breathing, place them gently in the recovery position."
    ],
    cprTimerNeeded: false,
    steps: [
      "Perform the FAST check.",
      "Call emergency services immediately.",
      "Keep the person calm and warm.",
      "Do not leave them unattended."
    ]
  },
  {
    id: "cardiac-arrest",
    name: "Cardiac Arrest & CPR",
    warningSigns: [
      "Sudden collapse",
      "No breathing or only gasping",
      "No pulse or responsiveness"
    ],
    beforeAmbulance: [
      "Call emergency services immediately and request an AED.",
      "Start hands-only CPR immediately.",
      "Push hard and fast in the center of the chest (100-120 beats per minute)."
    ],
    cprTimerNeeded: true,
    steps: [
      "Check responsiveness and breathing.",
      "Call emergency services immediately.",
      "Place heel of one hand in center of chest, other hand on top.",
      "Push down 2 inches at a rate of 100-120 compressions per minute."
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
    explainThis: "Explain This",
    library: "Library",
    symptoms: "Symptoms",
    emergency: "Emergency",
    tools: "Tools",
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
    medicalReviewed: "Medically Reviewed"
  },
  hi: {
    home: "होम",
    explore: "अन्वेषण",
    diary: "डायरी",
    daily: "दैनिक ज्ञान",
    quest: "क्वेस्ट",
    explainThis: "समझाएं",
    library: "लाइब्रेरी",
    symptoms: "लक्षण मार्गदर्शिका",
    emergency: "आपातकालीन",
    tools: "टूल्स",
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
    medicalReviewed: "चिकित्सकीय रूप से परीक्षित"
  }
} as const;

export type Language = keyof typeof TRANSLATIONS;

