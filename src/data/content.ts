export type Category =
  | "weird_wild"
  | "health_tip"
  | "what_damages_it"
  | "superfood"
  | "record_breaker";

export type Rarity = "common" | "surprising" | "mind_blowing" | "almost_unknown";

export interface BodyPart {
  id: string;
  name: string;
  slug: string;
  system: string;
  emoji: string;
  shortDescription: string;
}

export interface Fact {
  id: string;
  bodyPartId: string;
  category: Category;
  rarity: Rarity;
  text: string;
  source?: string;
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

export const BODY_PARTS: BodyPart[] = [
  { id: "brain", name: "Brain", slug: "brain", system: "Nervous", emoji: "🧠", shortDescription: "Three pounds of electrified jelly running your entire reality." },
  { id: "eyes", name: "Eyes", slug: "eyes", system: "Sensory", emoji: "👁️", shortDescription: "Two soft cameras that capture 10 million colors." },
  { id: "heart", name: "Heart", slug: "heart", system: "Circulatory", emoji: "❤️", shortDescription: "A fist-sized pump that beats 100,000 times a day." },
  { id: "lung-left", name: "Lungs", slug: "lungs", system: "Respiratory", emoji: "🫁", shortDescription: "Surface area the size of a tennis court, folded inside your chest." },
  { id: "liver", name: "Liver", slug: "liver", system: "Digestive", emoji: "🫀", shortDescription: "Your chemistry lab — runs 500+ reactions a minute." },
  { id: "stomach", name: "Stomach", slug: "stomach", system: "Digestive", emoji: "🍽️", shortDescription: "An acid bag strong enough to dissolve metal." },
  { id: "intestines", name: "Intestines", slug: "intestines", system: "Digestive", emoji: "🌀", shortDescription: "25 feet of tubing — and 70% of your immune system." },
  { id: "kidneys", name: "Kidneys", slug: "kidneys", system: "Urinary", emoji: "🫘", shortDescription: "Filter your entire blood supply 40 times a day." },
  { id: "skin", name: "Skin", slug: "skin", system: "Integumentary", emoji: "🧬", shortDescription: "Your largest organ — and it replaces itself every 27 days." },
  { id: "bones", name: "Bones", slug: "bones", system: "Skeletal", emoji: "🦴", shortDescription: "Stronger than steel, pound for pound." },
];

// Helper to mint facts compactly
const f = (id: string, bodyPartId: string, category: Category, rarity: Rarity, text: string, source?: string): Fact =>
  ({ id, bodyPartId, category, rarity, text, source });

export const FACTS: Fact[] = [
  // BRAIN
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

  // EYES
  f("eyes-w-1", "eyes", "weird_wild", "mind_blowing", "Your eyes can distinguish about 10 million colors — but your brain has names for only ~30."),
  f("eyes-w-2", "eyes", "weird_wild", "almost_unknown", "Each eye has its own blind spot. Your brain fabricates the missing image in real time."),
  f("eyes-w-3", "eyes", "weird_wild", "surprising", "Newborns see only in black, white, and grey for the first few weeks."),
  f("eyes-h-1", "eyes", "health_tip", "common", "Every 20 minutes, look at something 20 feet away for 20 seconds. The 20-20-20 rule."),
  f("eyes-d-1", "eyes", "what_damages_it", "surprising", "Rubbing your eyes hard can permanently reshape the cornea — it's called keratoconus."),
  f("eyes-d-2", "eyes", "what_damages_it", "mind_blowing", "UV from a single sunny day without sunglasses can sunburn your cornea."),
  f("eyes-s-1", "eyes", "superfood", "common", "Carrots really do help — beta-carotene becomes vitamin A, essential for low-light vision."),
  f("eyes-s-2", "eyes", "superfood", "surprising", "Egg yolks contain lutein, which builds the eye's natural blue-light filter."),
  f("eyes-r-1", "eyes", "record_breaker", "mind_blowing", "Your eyes can detect a single photon — the smallest possible unit of light."),

  // HEART
  f("heart-w-1", "heart", "weird_wild", "mind_blowing", "Your heart beats around 3 billion times in an average lifetime — without a single break."),
  f("heart-w-2", "heart", "weird_wild", "surprising", "The heart has its own mini-brain: ~40,000 neurons that can act independently."),
  f("heart-w-3", "heart", "weird_wild", "almost_unknown", "Heart cells beat in sync when placed in a petri dish — even from different people."),
  f("heart-h-1", "heart", "health_tip", "common", "Laughing for 15 minutes improves blood vessel function as much as a 30-minute workout."),
  f("heart-d-1", "heart", "what_damages_it", "surprising", "Sitting for more than 8 hours a day raises heart disease risk even if you exercise."),
  f("heart-d-2", "heart", "what_damages_it", "mind_blowing", "Heartbreak is real: emotional shock can cause 'broken heart syndrome' — the heart literally changes shape."),
  f("heart-s-1", "heart", "superfood", "common", "Dark chocolate (70%+) lowers blood pressure measurably within 2 hours."),
  f("heart-s-2", "heart", "superfood", "surprising", "Pomegranate juice reduces arterial plaque better than statins in some trials."),
  f("heart-r-1", "heart", "record_breaker", "mind_blowing", "Your aorta is wide enough to fit a garden hose — and pumps 2,000 gallons a day."),

  // LUNGS
  f("lung-left-w-1", "lung-left", "weird_wild", "mind_blowing", "Unfolded, your lungs would cover a tennis court — about 70 square meters."),
  f("lung-left-w-2", "lung-left", "weird_wild", "surprising", "Your right lung is bigger than your left — the left one shares space with your heart."),
  f("lung-left-w-3", "lung-left", "weird_wild", "almost_unknown", "Lungs are the only organ that can float on water."),
  f("lung-left-h-1", "lung-left", "health_tip", "common", "Box breathing (4-4-4-4) calms the nervous system in under a minute."),
  f("lung-left-d-1", "lung-left", "what_damages_it", "surprising", "One cigarette removes 11 minutes from your life — but lungs can heal substantially within a year of quitting."),
  f("lung-left-s-1", "lung-left", "superfood", "common", "Apples — eating 5+ a week is linked to measurably better lung function."),
  f("lung-left-r-1", "lung-left", "record_breaker", "mind_blowing", "You breathe about 20,000 times a day. Most without noticing a single one."),

  // LIVER
  f("liver-w-1", "liver", "weird_wild", "mind_blowing", "The liver is the only organ that can fully regenerate — even from just 25% of itself."),
  f("liver-w-2", "liver", "weird_wild", "surprising", "It performs over 500 distinct chemical functions — a true biochemical factory."),
  f("liver-w-3", "liver", "weird_wild", "almost_unknown", "Your liver makes its own cholesterol — about 80% of what's in your blood."),
  f("liver-h-1", "liver", "health_tip", "common", "Coffee (3+ cups/day) is associated with a 40% lower risk of liver cancer."),
  f("liver-d-1", "liver", "what_damages_it", "mind_blowing", "Sugar — not fat — is the leading cause of fatty liver disease in non-drinkers."),
  f("liver-d-2", "liver", "what_damages_it", "surprising", "Acetaminophen (paracetamol) overdose is the #1 cause of acute liver failure."),
  f("liver-s-1", "liver", "superfood", "common", "Beets contain betaine, which helps the liver process fats efficiently."),
  f("liver-r-1", "liver", "record_breaker", "mind_blowing", "Your liver filters 1.4 liters of blood every minute — about a bathtub a day."),

  // STOMACH
  f("stomach-w-1", "stomach", "weird_wild", "mind_blowing", "Stomach acid (pH ~1.5) is strong enough to dissolve a razor blade."),
  f("stomach-w-2", "stomach", "weird_wild", "surprising", "Your stomach lining replaces itself every 3-4 days — otherwise the acid would digest it."),
  f("stomach-w-3", "stomach", "weird_wild", "almost_unknown", "The 'butterflies' feeling is your stomach's nervous system firing — it has more neurons than your spinal cord."),
  f("stomach-h-1", "stomach", "health_tip", "common", "Eating slowly reduces calorie intake by ~15% — your stomach needs 20 min to signal fullness."),
  f("stomach-d-1", "stomach", "what_damages_it", "surprising", "Stress doesn't cause ulcers — H. pylori bacteria do (Nobel Prize, 2005)."),
  f("stomach-s-1", "stomach", "superfood", "common", "Ginger speeds up gastric emptying — proven anti-nausea agent."),
  f("stomach-r-1", "stomach", "record_breaker", "mind_blowing", "Your stomach can stretch from 50ml empty to over 4 liters full — an 80x expansion."),

  // INTESTINES
  f("intestines-w-1", "intestines", "weird_wild", "mind_blowing", "Stretched out, your intestines would be ~25 feet long — about 4× your height."),
  f("intestines-w-2", "intestines", "weird_wild", "almost_unknown", "70% of your immune system lives in your gut wall."),
  f("intestines-w-3", "intestines", "weird_wild", "surprising", "Your gut microbiome weighs ~2kg and contains more cells than your whole body."),
  f("intestines-h-1", "intestines", "health_tip", "common", "30 different plant foods a week is the single biggest predictor of a healthy microbiome."),
  f("intestines-d-1", "intestines", "what_damages_it", "surprising", "Artificial sweeteners alter gut bacteria within 4 days — even at 'safe' doses."),
  f("intestines-s-1", "intestines", "superfood", "common", "Kimchi, sauerkraut, kefir — fermented foods seed beneficial bacteria directly."),
  f("intestines-r-1", "intestines", "record_breaker", "mind_blowing", "Your gut produces 95% of your body's serotonin — the 'happiness chemical'."),

  // KIDNEYS
  f("kidneys-w-1", "kidneys", "weird_wild", "mind_blowing", "Your kidneys filter your entire blood supply about 40 times every single day."),
  f("kidneys-w-2", "kidneys", "weird_wild", "surprising", "You only need ~25% of one kidney to survive normally."),
  f("kidneys-h-1", "kidneys", "health_tip", "common", "Pale-yellow urine is the gold standard for hydration. Clear = overhydrated."),
  f("kidneys-d-1", "kidneys", "what_damages_it", "surprising", "NSAIDs (ibuprofen) taken daily can reduce kidney function 30% in 6 months."),
  f("kidneys-s-1", "kidneys", "superfood", "common", "Cranberries acidify urine and reduce UTI recurrence by ~25%."),
  f("kidneys-r-1", "kidneys", "record_breaker", "mind_blowing", "Each kidney contains ~1 million nephrons — microscopic filters working in parallel."),

  // SKIN
  f("skin-w-1", "skin", "weird_wild", "mind_blowing", "You shed ~40,000 skin cells every minute. Most household dust is you."),
  f("skin-w-2", "skin", "weird_wild", "surprising", "Skin is your largest organ — about 2 square meters and 15% of body weight."),
  f("skin-w-3", "skin", "weird_wild", "almost_unknown", "Goosebumps are an evolutionary leftover — they once made our fur stand up to look bigger."),
  f("skin-h-1", "skin", "health_tip", "common", "SPF 30 daily — even indoors — is the single biggest anti-aging intervention proven."),
  f("skin-d-1", "skin", "what_damages_it", "surprising", "Sugar molecules bond to collagen and stiffen it — a process called 'glycation'."),
  f("skin-s-1", "skin", "superfood", "common", "Tomatoes (cooked) contain lycopene — natural internal SPF of about 4."),
  f("skin-r-1", "skin", "record_breaker", "mind_blowing", "Your skin completely renews itself every 27 days. You're never the same person twice."),

  // BONES
  f("bones-w-1", "bones", "weird_wild", "mind_blowing", "Bone is 5x stronger than steel by weight — and constantly rebuilds itself."),
  f("bones-w-2", "bones", "weird_wild", "surprising", "Babies are born with ~270 bones. Adults have 206 — many fuse together as we grow."),
  f("bones-w-3", "bones", "weird_wild", "almost_unknown", "Your bones make 500 billion blood cells every day inside the marrow."),
  f("bones-h-1", "bones", "health_tip", "common", "Weight-bearing exercise (walking, lifting) is more important than calcium for bone density."),
  f("bones-d-1", "bones", "what_damages_it", "surprising", "Cola — not just sugar — leaches calcium from bones via phosphoric acid."),
  f("bones-s-1", "bones", "superfood", "common", "Sardines (with bones) deliver more bioavailable calcium than milk."),
  f("bones-r-1", "bones", "record_breaker", "mind_blowing", "The femur can support 30× a person's body weight without breaking."),
];

// Daily fact selector — deterministic from today's date
export function getDailyFact(): Fact {
  const daily = FACTS.filter((x) => x.rarity !== "common");
  const today = new Date();
  const idx =
    (today.getUTCFullYear() * 372 + today.getUTCMonth() * 31 + today.getUTCDate()) %
    daily.length;
  return daily[idx];
}

export function getFactsFor(bodyPartId: string, category: Category): Fact[] {
  return FACTS.filter((f) => f.bodyPartId === bodyPartId && f.category === category);
}

export function getBodyPart(id: string): BodyPart | undefined {
  return BODY_PARTS.find((b) => b.id === id);
}
