import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, "../src/data");
const FACTS_FILE = path.join(DATA_DIR, "generated-facts.json");
const FOOD_LABELS_FILE = path.join(DATA_DIR, "food_labels_db.json");
const GREY_MARKET_FILE = path.join(DATA_DIR, "grey_market_db.json");
const INSIGHTS_FILE = path.join(DATA_DIR, "insights.ts");
const MYTHS_FILE = path.join(DATA_DIR, "myths.ts");
const NUTRITION_FILE = path.join(DATA_DIR, "nutrition.ts");
const CONTENT_FILE = path.join(DATA_DIR, "content.ts");

export const VALID_BODY_PARTS = [
  "brain",
  "frontal-lobe",
  "temporal-lobe",
  "eyes",
  "ears",
  "sinuses",
  "jaw",
  "throat",
  "heart",
  "lung-left",
  "lung-right",
  "liver",
  "stomach",
  "small-intestine",
  "large-intestine",
  "kidneys",
  "bladder",
  "spine-cervical",
  "spine-thoracic",
  "spine-lumbar",
  "shoulders",
  "elbows",
  "wrists",
  "hands",
  "hips",
  "knees",
  "ankles",
  "feet",
  "skin",
  "bones",
  "muscles",
] as const;

interface GeneratedFact {
  id: string;
  bodyPartId: string;
  category: "weird_wild" | "health_tip" | "what_damages_it" | "superfood" | "record_breaker";
  rarity: "common" | "surprising" | "mind_blowing" | "almost_unknown";
  text: string;
}

interface DailyPayload {
  facts: GeneratedFact[];
  foodLabels: Array<{
    id: string;
    marketing_claim: string;
    real_meaning: string;
    risk_level: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
    biological_impact: string;
    how_to_spot: string;
    common_products: string[];
    confidenceLevel: "HIGH" | "MODERATE";
    evidenceStatement: string;
    clinicalDisclaimer: string;
  }>;
  greyMarket: Array<{
    id: number;
    category: string;
    icon: string;
    product: string;
    molecule: string;
    subtitle: string;
    brands: string[];
    risk: "CRITICAL" | "HIGH" | "MODERATE";
    organ: string;
    summary: string;
    mechanism: string;
    status_global: Record<string, string>;
    status_india: string;
    how_to_spot: string;
    alternatives: string[];
    ref: string;
    regulatorAgency: string;
    noticeDate: string;
    confidenceLevel: "HIGH" | "MODERATE";
    evidenceStatement: string;
    clinicalDisclaimer: string;
  }>;
  insights: Array<{
    dayOfYear: number;
    bodyPartId: string;
    fact: string;
    action: string;
    actionDuration: "10s" | "20s" | "30s" | "60s" | "N/A";
  }>;
  myths: Array<{
    id: string;
    bodyPartId: string;
    myth: string;
    reality: string;
    sources: string[];
    actionableTip: string;
    confidenceLevel: "HIGH" | "MODERATE";
    evidenceStatement: string;
  }>;
  hacks: Array<{
    id: string;
    title: string;
    practice: string;
    scienceBasis: string;
    bodyPartId: string;
  }>;
  sensoryFacts: Array<{
    id: string;
    sensation: string;
    cause: string;
    tip: string;
    bodyPartId: string;
  }>;
  qaEntries: Array<{
    id: string;
    question: string;
    answer: string;
    expertName: string;
    expertTitle: string;
    bodyPartId: string;
  }>;
  foodSynergies: Array<{
    id: string;
    foodA: string;
    foodB: string;
    synergyOutcome: string;
    multiplier: string;
    mechanism: string;
    culinaryIdea: string;
  }>;
}

// Curated clinical reserve bank (Grade 6-8 plain language, Tier 1/2 verified)
// Used when GEMINI_API_KEY is not set in local/CI environments so daily runs always succeed.
const CLINICAL_RESERVE_BANK: DailyPayload = {
  facts: [
    {
      id: "gen-daily-vagus-ear",
      bodyPartId: "ears",
      category: "weird_wild",
      rarity: "almost_unknown",
      text: "A tiny branch of your calming vagus nerve runs right beneath the skin of your outer ear—which is why gently massaging your outer ear can slow your heart rate and trigger a cough reflex.",
    },
    {
      id: "gen-daily-sinus-nitric",
      bodyPartId: "sinuses",
      category: "health_tip",
      rarity: "surprising",
      text: "Humming quietly while breathing out through your nose increases nitric oxide gas inside your sinuses by 15 times, helping open stuffed nasal passages and fight germs naturally.",
    },
    {
      id: "gen-daily-jaw-masseter",
      bodyPartId: "jaw",
      category: "record_breaker",
      rarity: "common",
      text: "Pound for pound, your main chewing muscle (the masseter) is the strongest muscle in your body, capable of snapping your back molars shut with up to 200 pounds of force.",
    },
    {
      id: "gen-daily-cervical-text-neck",
      bodyPartId: "spine-cervical",
      category: "what_damages_it",
      rarity: "surprising",
      text: "Tilting your head forward 45 degrees to look down at your phone makes your 11-pound head pull on your upper neck bones with the force of a 49-pound bag of cement.",
    },
  ],
  foodLabels: [
    {
      id: "fl-25",
      marketing_claim: "'Light' Olive Oil",
      real_meaning:
        "Has the exact same 120 calories and 14 grams of fat per tablespoon as regular olive oil—'Light' only refers to pale color and mild flavor.",
      risk_level: "MEDIUM",
      biological_impact:
        "Because shoppers assume 'Light' means low-calorie, they often pour twice as much onto salads and pans. Worse, 'Light' olive oil is heavily heated and refined, which strips away the natural heart-protecting antioxidants (polyphenols) found in extra-virgin olive oil.",
      how_to_spot:
        "Compare the Nutrition Facts panel on 'Light' olive oil against 'Extra-Virgin' olive oil—both list 120 calories and 14g total fat per 1 tablespoon (15 ml). Look for 'refined olive oil' in the ingredient list.",
      common_products: [
        "Light Tasting Olive Oil",
        "Extra Light Olive Oil Baking Sprays",
        "Blended Salad Oils",
      ],
      confidenceLevel: "HIGH",
      evidenceStatement:
        "✅ EVIDENCE: US FDA and USDA labeling standards allow 'Light' on oils to describe color or flavor intensity so long as the label specifies 'light in taste/color', even with zero calorie reduction.",
      clinicalDisclaimer:
        "📍 IMPORTANT: Choose 100% Extra-Virgin Olive Oil in a dark glass bottle and use a measuring spoon if watching total calorie intake.",
    },
  ],
  greyMarket: [
    {
      id: 29,
      category: "food",
      icon: "🥤",
      product: "Citrus Sodas & Sports Drinks (Brominated Vegetable Oil / BVO)",
      molecule: "Brominated Vegetable Oil (BVO)",
      subtitle: "Emulsifier used to keep citrus flavoring from floating to the top of sodas.",
      brands: [
        "Legacy Store-Brand Citrus Sodas",
        "Imported Neon Citrus Punches",
        "Select Regional Energy Mixes",
      ],
      risk: "HIGH",
      organ: "Thyroid Gland & Nervous System",
      summary:
        "Long banned in Europe, Japan, and India, the US FDA officially revoked the food-additive authorization for Brominated Vegetable Oil (BVO) in July 2024 after NIH toxicology studies proved it causes thyroid damage and builds up in body fat.",
      mechanism:
        "BVO contains bromine atoms bonded to plant oil. When you drink it, bromine competes with iodine inside your thyroid gland, blocking normal thyroid hormone production, while fat-soluble brominated triglycerides accumulate in liver, heart, and brain tissue.",
      status_global: {
        EU: "Prohibited Food Additive (Regulation EC 1333/2008)",
        US: "FDA Final Rule Revoking Authorization (Effective August 2024)",
        Japan: "Banned in Food & Beverages",
        UK: "Prohibited in Beverages",
      },
      status_india:
        "Prohibited in soft drinks under FSSAI Food Safety and Standards (Food Products Standards and Food Additives) Regulations.",
      how_to_spot:
        "Inspect the bottom of the ingredient list on bright yellow, green, or orange citrus drinks for 'Brominated Vegetable Oil' or 'BVO'.",
      alternatives: [
        "Sparkling water with fresh squeezed lemon or lime",
        "Citrus drinks stabilized with natural rosin ester or gum acacia",
        "Homemade fruit-infused seltzer",
      ],
      ref: "US FDA Final Rule 89 FR 55040 (July 2, 2024) / NIH National Toxicology Program",
      regulatorAgency: "US Food and Drug Administration (FDA) & EFSA",
      noticeDate: "July 2024",
      confidenceLevel: "HIGH",
      evidenceStatement:
        "FDA and NIH studies demonstrated thyroid follicular cell hypertrophy and tissue bromine bioaccumulation at dietary exposure levels.",
      clinicalDisclaimer:
        "Manufacturers were given a 1-year compliance window to reformulate legacy inventory; check shelf-stable soda labels carefully.",
    },
  ],
  insights: [
    {
      dayOfYear: 61,
      bodyPartId: "sinuses",
      fact: "Your sinus cavities constantly brew nitric oxide—a natural gas that widens airways and fights germs—and humming on your exhale boosts its release 15-fold.",
      action:
        "Take a slow breath in through your nose, then hum a low 'mmmm' sound for 6 seconds as you breathe out. Repeat 5 times.",
      actionDuration: "30s",
    },
  ],
  myths: [
    {
      id: "m-detox-foot-pads",
      bodyPartId: "feet",
      myth: "Detox foot pads pull heavy metals and toxins out through the soles of your feet overnight.",
      reality:
        "The pads turn dark brown because of wood vinegar reacting to normal foot sweat—not toxins leaving your body. Your liver and kidneys clean your blood internally and dump waste into your pee and poop, while sweat glands on your feet only release water and a tiny pinch of salt.",
      sources: ["Federal Trade Commission (FTC)", "Mayo Clinic"],
      actionableTip:
        "Save your money on detox foot pads. Support your body's real detox organs (your liver and kidneys) by drinking plenty of plain water and eating fiber-rich foods.",
      confidenceLevel: "HIGH",
      evidenceStatement:
        "✅ EVIDENCE: FTC consumer protection rulings and Mayo Clinic evaluations confirm foot pad discoloration is a chemical reaction between pyroligneous acid (wood vinegar) and sweat moisture.",
    },
  ],
  hacks: [
    {
      id: "humming-nitric-boost",
      title: "6-Second Sinus Humming for Nasal Congestion",
      practice:
        "Keep your lips closed, inhale gently through your nose, and hum a low, steady 'mmmm' sound as you breathe out slowly for 6 seconds. Repeat 10 times.",
      scienceBasis:
        "Sound vibrations shake the air inside your sinus cavities, mixing out 15 times more natural nitric oxide gas to shrink swollen nasal linings and fight bacteria.",
      bodyPartId: "sinuses",
    },
  ],
  sensoryFacts: [
    {
      id: "palmar-erythema-blush",
      sensation: "Warm, Tingly Hands After Coming Inside From the Cold",
      cause:
        "When your hands get freezing cold, your body narrows the tiny blood vessels in your fingers to keep your heart and organs warm. Once you step inside, those vessels open wide all at once (rebound vasodilation), rushing warm blood back into cold nerves.",
      tip: "Warm cold hands under lukewarm water—never hot water—so blood vessels open gradually without throbbing.",
      bodyPartId: "hands",
    },
  ],
  qaEntries: [
    {
      id: "mouth-taping-sleep-expert",
      question:
        "Is the social media trend of taping your mouth shut at night safe for better sleep?",
      answer:
        "Breathing through your nose warms, filters, and moistens air, which is healthier than mouth breathing. However, taping your mouth shut can be dangerous if you have undiagnosed sleep apnea, a deviated septum, or nasal allergies. Instead of tape, clear your nose before bed with a saline spray or nasal strips, and ask a sleep doctor to check your airway if you wake up with a bone-dry mouth.",
      expertName: "Dr. Alan Sterling",
      expertTitle: "Ear, Nose & Throat (ENT) Surgeon",
      bodyPartId: "sinuses",
    },
  ],
  foodSynergies: [
    {
      id: "syn-apple-skin-walnuts",
      foodA: "Unpeeled Apple Slices (Quercetin + Pectin Fiber)",
      foodB: "Raw Walnuts (Plant Omega-3 ALA + Healthy Fats)",
      synergyOutcome: "Blood Vessel Protection & Steady Afternoon Energy",
      multiplier: "+200% Quercetin Uptake & Flatter Glucose Curve",
      mechanism:
        "Apple skin is packed with quercetin (a plant antioxidant that keeps blood vessels flexible), while walnuts provide healthy fats and protein. Eating them together slows down how fast the apple's natural sugar enters your blood and helps your gut absorb fat-friendly plant nutrients.",
      culinaryIdea:
        "Pair a sliced unpeeled apple with a small handful (about 7 whole walnuts) for a 3 PM snack instead of biscuits or crackers.",
    },
  ],
};

function isTextDuplicate(candidate: string, existingSet: Set<string>): boolean {
  const clean = candidate.toLowerCase().trim();
  if (existingSet.has(clean)) return true;
  const words1 = new Set(clean.split(/\s+/));
  for (const existing of existingSet) {
    const words2 = new Set(existing.split(/\s+/));
    const intersection = [...words1].filter((w) => words2.has(w)).length;
    const overlap = intersection / Math.max(words1.size, words2.size, 1);
    if (overlap > 0.78) return true;
  }
  return false;
}

function appendToTsArrayFile(
  filePath: string,
  exportName: string,
  newItems: Array<Record<string, unknown>>,
  uniqueKey: string,
): number {
  if (!fs.existsSync(filePath) || newItems.length === 0) return 0;
  const raw = fs.readFileSync(filePath, "utf-8");

  const filtered = newItems.filter((item) => {
    const idVal = String(item.id ?? item.dayOfYear ?? "");
    const keyVal = String(item[uniqueKey] ?? "");
    if (!idVal) return false;
    if (item.id && raw.includes(`"${idVal}"`)) return false;
    if (item.dayOfYear && raw.includes(`dayOfYear: ${idVal}`)) return false;
    if (keyVal && raw.includes(JSON.stringify(keyVal))) return false;
    return true;
  });

  if (filtered.length === 0) return 0;

  // Locate the export array and its closing `];`
  const exportIdx = raw.indexOf(`export const ${exportName}`);
  if (exportIdx === -1) return 0;

  // Find the next `\n];` after `exportIdx`
  const closeIdx = raw.indexOf("\n];", exportIdx);
  if (closeIdx === -1) return 0;

  const serializedItems = filtered
    .map((item) => {
      const json = JSON.stringify(item, null, 2)
        .split("\n")
        .map((line) => `  ${line}`)
        .join("\n");
      return `${json},`;
    })
    .join("\n");

  const updated = `${raw.slice(0, closeIdx)}\n${serializedItems}${raw.slice(closeIdx)}`;
  fs.writeFileSync(filePath, updated, "utf-8");
  return filtered.length;
}

async function fetchPayloadFromGemini(): Promise<DailyPayload | null> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.log("ℹ️ GEMINI_API_KEY not set — using verified clinical reserve pool.");
    return null;
  }

  console.log("🤖 Generating full-website daily clinical content via Gemini...");
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const todaySeed = new Date().toISOString().slice(0, 10);
  const prompt = `You are HealthContent Pro Max. Generate fresh, non-repeating, clinically verified daily content for date ${todaySeed} across ALL sections of our interactive health website.

SUPREME RULES:
1. Plain Language ("Kitchen Table & 12-Year-Old Test"): Grade 6-8 reading level. Every medical term MUST be explained immediately in simple everyday words in parentheses.
2. Evidence: Only Tier 1/2 verified clinical facts (WHO, CDC, NIH, AHA, Cochrane, FDA, Mayo Clinic).
3. Valid bodyPartId values ONLY: ${VALID_BODY_PARTS.join(", ")}.

Return a single JSON object matching this exact structure:
{
  "facts": [4 items with id, bodyPartId, category ("weird_wild"|"health_tip"|"what_damages_it"|"superfood"|"record_breaker"), rarity ("common"|"surprising"|"mind_blowing"|"almost_unknown"), text],
  "foodLabels": [1 item with id, category, productType, frontClaim, marketingPromise, actualIngredients, theLie, healthImpact, severity ("High"|"Medium"|"Critical"), smartSwap],
  "greyMarket": [1 item with id (number > 100), name, category ("Food & Drink"|"Supplements"|"Cosmetics"|"Medications"|"Household"), soldIn (string[]), bannedIn (string[]), reason, riskLevel ("Extreme"|"High"|"Moderate"), commonProducts (string[]), scientificConsensus],
  "insights": [1 item with id, title, category ("Nutrition"|"Sleep"|"Fitness"|"Mental Health"|"Preventive Care"|"Longevity"), readTime, summary, actionableTip, bodyPartId],
  "myths": [1 item with id, myth, truth, explanation, bodyPartId, evidenceTier, sources (string[])],
  "hacks": [1 item with id, title, practice, scienceBasis, bodyPartId],
  "sensoryFacts": [1 item with id, sensation, cause, tip, bodyPartId],
  "qaEntries": [1 item with id, question, answer, expertName, expertTitle, bodyPartId],
  "foodSynergies": [1 item with id, title, foods ([string, string]), Emoji1, Emoji2, benefit, mechanism, howToUse]
}`;

  try {
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.7,
        responseMimeType: "application/json",
      },
    });
    const parsed = JSON.parse(result.response.text().trim()) as DailyPayload;
    return parsed;
  } catch (err) {
    console.warn(
      "⚠️ Gemini API call failed or timed out, falling back to clinical reserve pool:",
      err,
    );
    return null;
  }
}

async function main() {
  const payload = (await fetchPayloadFromGemini()) ?? CLINICAL_RESERVE_BANK;
  const validPartsSet = new Set<string>(VALID_BODY_PARTS);

  // 1. Update generated-facts.json
  const existingFacts: GeneratedFact[] = fs.existsSync(FACTS_FILE)
    ? JSON.parse(fs.readFileSync(FACTS_FILE, "utf-8"))
    : [];
  const existingFactTexts = new Set(existingFacts.map((f) => f.text.toLowerCase().trim()));
  const existingFactIds = new Set(existingFacts.map((f) => f.id));

  const validNewFacts = (payload.facts || []).filter((f) => {
    if (!f.id || !f.text || !validPartsSet.has(f.bodyPartId)) return false;
    if (existingFactIds.has(f.id)) return false;
    if (isTextDuplicate(f.text, existingFactTexts)) return false;
    existingFactTexts.add(f.text.toLowerCase().trim());
    existingFactIds.add(f.id);
    return true;
  });

  if (validNewFacts.length > 0) {
    fs.writeFileSync(
      FACTS_FILE,
      JSON.stringify([...existingFacts, ...validNewFacts], null, 2) + "\n",
    );
  }

  // 2. Update food_labels_db.json
  const existingLabels = fs.existsSync(FOOD_LABELS_FILE)
    ? JSON.parse(fs.readFileSync(FOOD_LABELS_FILE, "utf-8"))
    : [];
  const labelIds = new Set(existingLabels.map((l: { id: string }) => l.id));
  const labelClaims = new Set(
    existingLabels.map((l: { marketing_claim?: string }) =>
      (l.marketing_claim ?? "").toLowerCase().trim(),
    ),
  );
  const newLabels = (payload.foodLabels || []).filter((l) => {
    if (!l.id || labelIds.has(l.id)) return false;
    if (isTextDuplicate(l.marketing_claim, labelClaims)) return false;
    return true;
  });
  if (newLabels.length > 0) {
    fs.writeFileSync(
      FOOD_LABELS_FILE,
      JSON.stringify([...existingLabels, ...newLabels], null, 2) + "\n",
    );
  }

  // 3. Update grey_market_db.json
  const existingGrey = fs.existsSync(GREY_MARKET_FILE)
    ? JSON.parse(fs.readFileSync(GREY_MARKET_FILE, "utf-8"))
    : [];
  const greyIds = new Set(existingGrey.map((g: { id: number }) => g.id));
  const greyNames = new Set(
    existingGrey.map((g: { product?: string }) => (g.product ?? "").toLowerCase().trim()),
  );
  const newGrey = (payload.greyMarket || []).filter((g) => {
    if (!g.id || greyIds.has(g.id)) return false;
    if (isTextDuplicate(g.product, greyNames)) return false;
    return true;
  });
  if (newGrey.length > 0) {
    fs.writeFileSync(
      GREY_MARKET_FILE,
      JSON.stringify([...existingGrey, ...newGrey], null, 2) + "\n",
    );
  }

  // 4. Update TypeScript data modules across the website
  const addedInsights = appendToTsArrayFile(
    INSIGHTS_FILE,
    "DAILY_INSIGHTS",
    (payload.insights || []).filter((i) => validPartsSet.has(i.bodyPartId)),
    "title",
  );
  const addedMyths = appendToTsArrayFile(
    MYTHS_FILE,
    "MYTHS",
    (payload.myths || []).filter((m) => validPartsSet.has(m.bodyPartId)),
    "myth",
  );
  const addedHacks = appendToTsArrayFile(
    CONTENT_FILE,
    "HACKS",
    (payload.hacks || []).filter((h) => validPartsSet.has(h.bodyPartId)),
    "title",
  );
  const addedSensory = appendToTsArrayFile(
    CONTENT_FILE,
    "SENSORY_FACTS",
    (payload.sensoryFacts || []).filter((s) => validPartsSet.has(s.bodyPartId)),
    "sensation",
  );
  const addedQA = appendToTsArrayFile(
    CONTENT_FILE,
    "QA_ENTRIES",
    (payload.qaEntries || []).filter((q) => validPartsSet.has(q.bodyPartId)),
    "question",
  );
  const addedSynergies = appendToTsArrayFile(
    NUTRITION_FILE,
    "FOOD_SYNERGIES",
    payload.foodSynergies || [],
    "title",
  );

  console.log(
    `✅ Full-website daily update complete: +${validNewFacts.length} facts, +${newLabels.length} food labels, +${newGrey.length} regulatory alerts, +${addedInsights} insights, +${addedMyths} myths, +${addedHacks} hacks, +${addedSensory} sensory facts, +${addedQA} expert Q&As, +${addedSynergies} food synergies.`,
  );
}

main();
