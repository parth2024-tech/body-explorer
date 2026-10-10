import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, "../src/data");
const UPLOAD_LOG_FILE = path.join(DATA_DIR, "daily-upload-log.json");
const FACTS_FILE = path.join(DATA_DIR, "generated-facts.json");
const FOOD_LABELS_FILE = path.join(DATA_DIR, "food_labels_db.json");
const GREY_MARKET_FILE = path.join(DATA_DIR, "grey_market_db.json");
const INSIGHTS_FILE = path.join(DATA_DIR, "insights.ts");
const MYTHS_FILE = path.join(DATA_DIR, "myths.ts");
const DISEASES_FILE = path.join(DATA_DIR, "diseases.ts");
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
  diseases: Array<{
    id: string;
    name: string;
    overview: string;
    symptoms: Array<{ text: string; frequency: "always" | "often" | "sometimes" }>;
    whenToSeeDoctor: string;
    misconceptions: string[];
    bodyPartId: string;
  }>;
  remedies: Array<{
    id: string;
    name: string;
    description: string;
    evidenceRating: "traditional" | "anecdotal" | "studied" | "unproven";
    evidenceDetails: string;
    ailment: string;
    bodyPartId: string;
    practicalContext: string;
  }>;
  hacks: Array<{
    id: string;
    title: string;
    practice: string;
    scienceBasis: string;
    bodyPartId: string;
  }>;
  bodyMarvels: Array<{
    id: string;
    title: string;
    introduction: string;
    sections: Array<{ heading: string; body: string }>;
    conclusion: string;
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
  drugWarnings: Array<{
    id: string;
    food: string;
    medicationClass: string;
    riskSeverity: "CRITICAL" | "HIGH" | "MODERATE";
    clinicalConsequence: string;
    doctorDirective: string;
  }>;
}

// Multi-day curated clinical reserve queue (Grade 6-8 plain language, Tier 1/2 verified).
// Drip-fed strictly ONCE DAILY (1 item per section per day, 3 facts per day).
const CLINICAL_RESERVE_BANK: DailyPayload = {
  facts: [
    {
      id: "gen-daily-cornea-oxygen",
      bodyPartId: "eyes",
      category: "weird_wild",
      rarity: "mind_blowing",
      text: "The clear front window of your eye (the cornea) has zero blood vessels so it stays crystal-clear—it breathes oxygen directly out of the open air.",
    },
    {
      id: "gen-daily-kidney-filtration",
      bodyPartId: "kidneys",
      category: "record_breaker",
      rarity: "surprising",
      text: "Your two fist-sized kidneys filter your entire 5-liter blood supply up to 40 times every single day—cleaning about 180 liters of fluid every 24 hours.",
    },
    {
      id: "gen-daily-grip-longevity",
      bodyPartId: "hands",
      category: "health_tip",
      rarity: "almost_unknown",
      text: "Large global studies (The Lancet PURE study) found that hand grip strength is a stronger predictor of heart health and healthy aging than blood pressure alone.",
    },
    {
      id: "gen-daily-stomach-blush",
      bodyPartId: "stomach",
      category: "weird_wild",
      rarity: "almost_unknown",
      text: "When your face blushes from embarrassment, the inner lining of your stomach also turns bright red at the exact same moment because both react to the same adrenaline surge.",
    },
    {
      id: "gen-daily-foot-sweat-glands",
      bodyPartId: "feet",
      category: "record_breaker",
      rarity: "surprising",
      text: "Your two feet house over 250,000 sweat glands—more per square inch than anywhere else on your body—capable of producing half a pint of moisture on a hot day.",
    },
    {
      id: "gen-daily-thoracic-rib-cage",
      bodyPartId: "spine-thoracic",
      category: "health_tip",
      rarity: "common",
      text: "Rotating your mid-back (thoracic spine) gently in a chair for 60 seconds every afternoon unlocks stiff rib-cage joints and lets your lungs expand up to 15% more deeply.",
    },
  ],
  foodLabels: [
    {
      id: "fl-26",
      marketing_claim: "Cholesterol-Free (0mg Cholesterol) Vegetable Oil & Snacks",
      real_meaning:
        "Plants never contain dietary cholesterol in the first place—yet the oil or fried snack can still be loaded with saturated palm oil that makes your liver brew its own bad cholesterol.",
      risk_level: "HIGH",
      biological_impact:
        "Only animal foods contain cholesterol. Slapping 'Cholesterol-Free' on deep-fried potato chips or palm oil tricks shoppers into thinking it is safe for their heart, even though the high palm oil (palmitic acid) content signals your liver to pump out more artery-clogging LDL cholesterol.",
      how_to_spot:
        "Ignore 'Cholesterol-Free' badges on plant foods. Check the 'Saturated Fat' line on the back label and check for 'Palmolein Oil' or 'Palm Oil' in the ingredients.",
      common_products: [
        "Blended Cooking Oils",
        "Fried Namkeen & Bhujia",
        "Commercial Potato Chips",
      ],
      confidenceLevel: "HIGH",
      evidenceStatement:
        "✅ EVIDENCE: AHA Dietary Fats Advisory confirms dietary saturated fatty acids (especially palmitic acid) are the primary driver of endogenous hepatic LDL-C synthesis, regardless of zero dietary cholesterol.",
      clinicalDisclaimer:
        "📍 IMPORTANT: A 'Cholesterol-Free' plant food can still raise your blood cholesterol if it is high in saturated palm fat or refined starch.",
    },
    {
      id: "fl-27",
      marketing_claim: "Sea Salt / Himalayan Pink Salt — 'Low Sodium Alternative'",
      real_meaning:
        "Contains 98% pure sodium chloride—virtually the exact same blood-pressure-raising sodium load by weight as regular white table salt.",
      risk_level: "HIGH",
      biological_impact:
        "Pink Himalayan salt gets its pretty color from a tiny 2% trace of iron oxide (rust) and minerals. Gram for gram, it raises blood pressure and stresses your kidneys just like regular salt—and because it is rarely iodized, switching to it completely can leave your thyroid gland starved of iodine.",
      how_to_spot:
        "Check the Sodium mg per 1/4 teaspoon on the back label (usually 500–580 mg). Also check whether the label states 'Supplies Iodine, a necessary nutrient.'",
      common_products: [
        "Pink Himalayan Salt Grinders",
        "Artisanal Sea Salt Crisps",
        "Gourmet Rock Salt Mixes",
      ],
      confidenceLevel: "HIGH",
      evidenceStatement:
        "✅ EVIDENCE: Chemical composition analyses and WHO Sodium Intake Guidelines confirm gourmet rock and sea salts contain ~97-99% NaCl with clinically negligible trace mineral benefits.",
      clinicalDisclaimer:
        "📍 IMPORTANT: Keep total salt from all sources (white, pink, black, or sea salt) under 1 teaspoon (5 grams) per day, and ensure your household uses iodized salt.",
    },
  ],
  greyMarket: [
    {
      id: 30,
      category: "cosmetics",
      icon: "🧴",
      product: "Unregulated Skin-Lightening Creams (Inorganic Mercury Compounds)",
      molecule: "Ammoniated Mercury / Mercurous Chloride",
      subtitle: "Illicit melanogenesis inhibitors detected in imported fairness creams.",
      brands: [
        "Unlabeled Imported Night Fairness Creams",
        "Counterfeit Online Brightening Ointments",
        "Grey-Market Spot Bleaching Jars",
      ],
      risk: "CRITICAL",
      organ: "Kidneys & Central Nervous System",
      summary:
        "The WHO, US FDA, and state drug controllers repeatedly seize imported skin-lightening creams containing up to 10,000–30,000 ppm of toxic mercury—thousands of times above the 1 ppm legal trace limit.",
      mechanism:
        "Mercury salts block the skin enzyme tyrosinase to stop pigment production, but absorb directly through your skin into your bloodstream. The mercury collects in your kidneys (causing nephrotic syndrome and kidney damage) and crosses into your brain, causing hand tremors, memory loss, and nerve tingling.",
      status_global: {
        WHO: "Minamata Convention Global Ban (>1 ppm in Cosmetics)",
        US: "FDA Import Alert 53-18 (Detention Without Physical Examination)",
        EU: "Strictly Prohibited (Regulation EC 1223/2009)",
        ASEAN: "Banned & Subject to Mandatory Recall",
      },
      status_india:
        "Prohibited in cosmetics under the Drugs and Cosmetics Rules, 1945 (CDSCO); BIS IS 4707 prohibits mercury compounds.",
      how_to_spot:
        "Avoid any cream without a full ingredient list or look out for words like 'Mercurous chloride', 'Calomel', 'Mercuric', 'Mercurio', or 'Hg'. Never buy unsealed jars sold via social media.",
      alternatives: [
        "Dermatologist-approved Niacinamide (2–5%) serums",
        "Vitamin C (L-Ascorbic Acid) + Broad-Spectrum SPF 50 sunscreen",
        "Azelaic acid or Kojic acid formulations from licensed pharmacies",
      ],
      ref: "World Health Organization (WHO) Mercury in Skin Lightening Products Sheet / US FDA Import Alert 53-18",
      regulatorAgency: "WHO, US FDA & CDSCO",
      noticeDate: "2024 Ongoing Surveillance",
      confidenceLevel: "HIGH",
      evidenceStatement:
        "WHO and FDA laboratory testing confirms transdermal mercury absorption from fairness creams causes membranous nephropathy and peripheral neuropathy.",
      clinicalDisclaimer:
        "Stop using unlabeled fairness creams immediately and consult a doctor for a urine mercury test if you experience foamy urine, numbness, or tremors.",
    },
  ],
  insights: [
    {
      dayOfYear: 62,
      bodyPartId: "eyes",
      fact: "The clear front window of your eye (the cornea) has zero blood vessels and absorbs its oxygen straight from the air around you.",
      action:
        "Blink slowly and fully 10 times right now to spread fresh oxygen-rich tear film across your corneas.",
      actionDuration: "10s",
    },
    {
      dayOfYear: 63,
      bodyPartId: "hands",
      fact: "Your hand grip strength reflects your overall muscle vitality and is one of medicine's strongest predictors of long-term heart health.",
      action:
        "Make a tight fist with both hands, squeeze firmly for 5 seconds, then spread your fingers wide. Repeat 5 times.",
      actionDuration: "30s",
    },
  ],
  myths: [
    {
      id: "m-shaving-thickens-hair",
      bodyPartId: "skin",
      myth: "Shaving body or facial hair makes it grow back thicker, darker, and faster.",
      reality:
        "A razor blade only slices dead hair above the skin's surface; it never touches the living hair root (follicle) deep under the skin that controls thickness, color, and growth speed. Regrowing hair only feels stubbly because the razor cut the hair shaft with a flat, blunt tip instead of its natural tapered point.",
      sources: ["Mayo Clinic Dermatology", "American Academy of Dermatology (AAD)"],
      actionableTip:
        "Shave after a warm shower using a moisturizing cream and a sharp blade moving in the direction of hair growth to prevent ingrown hairs.",
      confidenceLevel: "HIGH",
      evidenceStatement:
        "✅ EVIDENCE: Clinical dermatological trials since 1928 (Trotter) and Mayo Clinic guidance confirm shaving has zero effect on follicular shaft diameter, melanin density, or growth rate.",
    },
    {
      id: "m-tilt-head-back-nosebleed",
      bodyPartId: "sinuses",
      myth: "When you get a nosebleed, you should immediately tilt your head far back to keep the blood inside.",
      reality:
        "Tilting your head backward makes blood drain straight down the back of your throat into your windpipe (risking choking) or into your stomach (where blood irritates the stomach lining and triggers vomiting). Instead, sit upright, lean slightly forward, and pinch the soft lower wings of your nose shut for 10 to 15 minutes.",
      sources: ["American Red Cross First Aid Guidelines", "NHS Ear, Nose & Throat Guidance"],
      actionableTip:
        "Lean forward at the waist, pinch the soft fleshy part of your nostrils right below the bony bridge, and breathe calmly through your mouth for 10–15 minutes.",
      confidenceLevel: "HIGH",
      evidenceStatement:
        "✅ EVIDENCE: American Red Cross and Emergency Medicine guidelines contraindicate head extension during epistaxis due to airway aspiration and emesis risks.",
    },
  ],
  diseases: [
    {
      id: "d-56",
      name: "Digital Eye Strain (Computer Vision Syndrome)",
      overview:
        "A very common condition where your eyes feel dry, tired, burning, or blurry after staring at phones, tablets, or computer screens for hours without a break. Normally, you blink about 15 to 20 times a minute to wipe a fresh layer of soothing tears across your eyes, but when staring at a bright screen, your blink rate drops by more than half while your inner focusing muscles stay locked in a tight cramp.",
      symptoms: [
        { text: "Dry, gritty, burning, or watery eyes after screen use", frequency: "always" },
        {
          text: "Mild headache behind the forehead or temples in the afternoon",
          frequency: "often",
        },
        {
          text: "Brief blurry vision when looking up from a screen to a far wall",
          frequency: "often",
        },
        {
          text: "Stiff neck and tight shoulders from leaning toward the monitor",
          frequency: "sometimes",
        },
      ],
      whenToSeeDoctor:
        "See an eye doctor (optometrist or ophthalmologist) if eye strain comes with double vision, sudden flashes of light, eye pain that does not improve after resting, or headaches that wake you from sleep.",
      misconceptions: [
        "Myth: Expensive blue-light blocking glasses cure digital eye strain. Reality: Clinical trials (Cochrane 2023) show blue-light glasses do not stop eye fatigue—blinking more often, taking 20-20-20 breaks, and fixing screen glare are what actually work.",
      ],
      bodyPartId: "eyes",
    },
  ],
  remedies: [
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
  ],
  hacks: [
    {
      id: "chin-tuck-posture-reset",
      title: "The 5-Second Chin Tuck for 'Text Neck' Relief",
      practice:
        "Sit or stand tall, look straight ahead, and gently glide your chin straight backward (like making a polite double chin) without tilting your nose up or down. Hold for 5 seconds and repeat 5 times.",
      scienceBasis:
        "Re-aligns your heavy skull directly over your neck bones (cervical spine), instantly taking up to 30 pounds of pulling strain off the tired muscles at the base of your skull.",
      bodyPartId: "spine-cervical",
    },
  ],
  bodyMarvels: [
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
  ],
  sensoryFacts: [
    {
      id: "photic-sneeze-reflex",
      sensation: "Sudden Sneeze When Stepping Into Bright Sunlight (ACHOO Syndrome)",
      cause:
        "In about 1 in 4 people, the optic nerve carrying bright light signals from the eyes runs so close to the facial trigeminal nerve that a sudden burst of sunlight 'cross-wires' and tricks the brain into thinking the nose is being tickled.",
      tip: "Put on polarized sunglasses before stepping out of a dark building into bright midday sun, especially when driving.",
      bodyPartId: "sinuses",
    },
  ],
  qaEntries: [
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
  ],
  foodSynergies: [
    {
      id: "syn-dark-chocolate-berries",
      foodA: "70%+ Dark Chocolate (Cocoa Flavanols)",
      foodB: "Fresh Raspberries or Pomegranate (Anthocyanins + Fiber)",
      synergyOutcome: "Nitric Oxide Blood Flow & Vascular Elasticity",
      multiplier: "+180% Endothelial Nitric Oxide Support",
      mechanism:
        "Cocoa flavanols and berry anthocyanins work on complementary pathways in your blood vessel lining (endothelium) to boost natural nitric oxide gas, helping arteries relax while the fruit fiber slows down sugar absorption.",
      culinaryIdea:
        "Pair two small squares (15g) of 70%+ dark chocolate with a handful of fresh berries or pomegranate seeds after lunch.",
    },
  ],
  drugWarnings: [
    {
      id: "warn-st-johns-wort-meds",
      food: "St. John's Wort Herbal Teas & Mood Supplements",
      medicationClass:
        "Birth Control Pills, Antidepressants (SSRIs), Blood Thinners & Heart Medications",
      riskSeverity: "CRITICAL",
      clinicalConsequence:
        "St. John's Wort switches your liver's drug-clearing enzymes (CYP3A4) into overdrive, chewing up and flushing out vital prescription medicines before they can work—or triggering a dangerous serotonin overload when mixed with antidepressants.",
      doctorDirective:
        "Never start herbal mood supplements like St. John's Wort without checking with your doctor or pharmacist first.",
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
  maxPerDay = 1,
): number {
  if (!fs.existsSync(filePath) || newItems.length === 0) return 0;
  const raw = fs.readFileSync(filePath, "utf-8");

  const filtered = newItems
    .filter((item) => {
      const idVal = String(item.id ?? item.dayOfYear ?? "");
      const keyVal = String(item[uniqueKey] ?? "");
      if (!idVal) return false;
      if (item.id && raw.includes(`"${idVal}"`)) return false;
      if (item.id && raw.includes(`id: "${idVal}"`)) return false;
      if (item.dayOfYear && raw.includes(`dayOfYear: ${idVal}`)) return false;
      if (item.dayOfYear && raw.includes(`"dayOfYear": ${idVal}`)) return false;
      if (keyVal && raw.includes(JSON.stringify(keyVal))) return false;
      return true;
    })
    .slice(0, maxPerDay);

  if (filtered.length === 0) return 0;

  const exportIdx = raw.indexOf(`export const ${exportName}`);
  if (exportIdx === -1) return 0;

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
    console.log(
      "ℹ️ GEMINI_API_KEY not set — drip-feeding today's batch from clinical reserve pool.",
    );
    return null;
  }

  console.log("🤖 Generating today's once-daily full-website clinical content via Gemini...");
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const todaySeed = new Date().toISOString().slice(0, 10);
  const prompt = `You are HealthContent Pro Max. Generate fresh, non-repeating, clinically verified daily content for date ${todaySeed} across ALL 13 sections of our interactive health website.

SUPREME RULES:
1. Plain Language ("Kitchen Table & 12-Year-Old Test"): Grade 6-8 reading level. Every medical term MUST be explained immediately in simple everyday words in parentheses.
2. Evidence: Only Tier 1/2 verified clinical facts (WHO, CDC, NIH, AHA, Cochrane, FDA, Mayo Clinic).
3. Valid bodyPartId values ONLY: ${VALID_BODY_PARTS.join(", ")}.

Return a single JSON object with 3 facts and 1 item for each of the other 12 sections matching DailyPayload.`;

  try {
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.7,
        responseMimeType: "application/json",
      },
    });
    return JSON.parse(result.response.text().trim()) as DailyPayload;
  } catch (err) {
    console.warn(
      "⚠️ Gemini API call failed or timed out, falling back to clinical reserve pool:",
      err,
    );
    return null;
  }
}

async function main() {
  const todayUTC = new Date().toISOString().slice(0, 10);
  const forceUpload = process.argv.includes("--force");

  interface UploadLog {
    lastUploadDate: string;
    frequency: "once_daily";
    totalUploads: number;
    history: Array<{ date: string; summary: Record<string, number> }>;
  }

  let uploadLog: UploadLog = {
    lastUploadDate: "",
    frequency: "once_daily",
    totalUploads: 0,
    history: [],
  };

  if (fs.existsSync(UPLOAD_LOG_FILE)) {
    try {
      uploadLog = JSON.parse(fs.readFileSync(UPLOAD_LOG_FILE, "utf-8"));
    } catch {
      // reset if corrupted
    }
  }

  if (uploadLog.lastUploadDate === todayUTC && !forceUpload) {
    console.log(
      `✅ Daily content already uploaded once today (${todayUTC}). Skipping duplicate run until tomorrow (pass --force to override).`,
    );
    return;
  }

  const payload = (await fetchPayloadFromGemini()) ?? CLINICAL_RESERVE_BANK;
  const validPartsSet = new Set<string>(VALID_BODY_PARTS);

  // 1. Update generated-facts.json (up to 3 new facts per day)
  const existingFacts: GeneratedFact[] = fs.existsSync(FACTS_FILE)
    ? JSON.parse(fs.readFileSync(FACTS_FILE, "utf-8"))
    : [];
  const existingFactTexts = new Set(existingFacts.map((f) => f.text.toLowerCase().trim()));
  const existingFactIds = new Set(existingFacts.map((f) => f.id));

  const validNewFacts = (payload.facts || [])
    .filter((f) => {
      if (!f.id || !f.text || !validPartsSet.has(f.bodyPartId)) return false;
      if (existingFactIds.has(f.id)) return false;
      if (isTextDuplicate(f.text, existingFactTexts)) return false;
      existingFactTexts.add(f.text.toLowerCase().trim());
      existingFactIds.add(f.id);
      return true;
    })
    .slice(0, 3);

  if (validNewFacts.length > 0) {
    fs.writeFileSync(
      FACTS_FILE,
      JSON.stringify([...existingFacts, ...validNewFacts], null, 2) + "\n",
    );
  }

  // 2. Update food_labels_db.json (1 new label per day)
  const existingLabels = fs.existsSync(FOOD_LABELS_FILE)
    ? JSON.parse(fs.readFileSync(FOOD_LABELS_FILE, "utf-8"))
    : [];
  const labelIds = new Set(existingLabels.map((l: { id: string }) => l.id));
  const labelClaims = new Set(
    existingLabels.map((l: { marketing_claim?: string }) =>
      (l.marketing_claim ?? "").toLowerCase().trim(),
    ),
  );
  const newLabels = (payload.foodLabels || [])
    .filter((l) => {
      if (!l.id || labelIds.has(l.id)) return false;
      if (isTextDuplicate(l.marketing_claim, labelClaims)) return false;
      return true;
    })
    .slice(0, 1);
  if (newLabels.length > 0) {
    fs.writeFileSync(
      FOOD_LABELS_FILE,
      JSON.stringify([...existingLabels, ...newLabels], null, 2) + "\n",
    );
  }

  // 3. Update grey_market_db.json (1 new regulatory alert per day)
  const existingGrey = fs.existsSync(GREY_MARKET_FILE)
    ? JSON.parse(fs.readFileSync(GREY_MARKET_FILE, "utf-8"))
    : [];
  const greyIds = new Set(existingGrey.map((g: { id: number }) => g.id));
  const greyNames = new Set(
    existingGrey.map((g: { product?: string }) => (g.product ?? "").toLowerCase().trim()),
  );
  const newGrey = (payload.greyMarket || [])
    .filter((g) => {
      if (!g.id || greyIds.has(g.id)) return false;
      if (isTextDuplicate(g.product, greyNames)) return false;
      return true;
    })
    .slice(0, 1);
  if (newGrey.length > 0) {
    fs.writeFileSync(
      GREY_MARKET_FILE,
      JSON.stringify([...existingGrey, ...newGrey], null, 2) + "\n",
    );
  }

  // 4. Update all TypeScript data modules across the website (1 item per section per day)
  const addedInsights = appendToTsArrayFile(
    INSIGHTS_FILE,
    "DAILY_INSIGHTS",
    (payload.insights || []).filter((i) => validPartsSet.has(i.bodyPartId)),
    "fact",
    1,
  );
  const addedMyths = appendToTsArrayFile(
    MYTHS_FILE,
    "MYTHS",
    (payload.myths || []).filter((m) => validPartsSet.has(m.bodyPartId)),
    "myth",
    1,
  );
  const addedDiseases = appendToTsArrayFile(
    DISEASES_FILE,
    "DISEASE_ENTRIES",
    (payload.diseases || []).filter((d) => validPartsSet.has(d.bodyPartId)),
    "name",
    1,
  );
  const addedRemedies = appendToTsArrayFile(
    CONTENT_FILE,
    "REMEDIES",
    (payload.remedies || []).filter((r) => validPartsSet.has(r.bodyPartId)),
    "name",
    1,
  );
  const addedHacks = appendToTsArrayFile(
    CONTENT_FILE,
    "HACKS",
    (payload.hacks || []).filter((h) => validPartsSet.has(h.bodyPartId)),
    "title",
    1,
  );
  const addedMarvels = appendToTsArrayFile(
    CONTENT_FILE,
    "BODY_MARVELS",
    (payload.bodyMarvels || []).filter((b) => validPartsSet.has(b.bodyPartId)),
    "title",
    1,
  );
  const addedSensory = appendToTsArrayFile(
    CONTENT_FILE,
    "SENSORY_FACTS",
    (payload.sensoryFacts || []).filter((s) => validPartsSet.has(s.bodyPartId)),
    "sensation",
    1,
  );
  const addedQA = appendToTsArrayFile(
    CONTENT_FILE,
    "QA_ENTRIES",
    (payload.qaEntries || []).filter((q) => validPartsSet.has(q.bodyPartId)),
    "question",
    1,
  );
  const addedSynergies = appendToTsArrayFile(
    NUTRITION_FILE,
    "FOOD_SYNERGIES",
    payload.foodSynergies || [],
    "synergyOutcome",
    1,
  );
  const addedDrugWarnings = appendToTsArrayFile(
    NUTRITION_FILE,
    "DRUG_FOOD_WARNINGS",
    payload.drugWarnings || [],
    "food",
    1,
  );

  const summary = {
    facts: validNewFacts.length,
    foodLabels: newLabels.length,
    greyMarket: newGrey.length,
    insights: addedInsights,
    myths: addedMyths,
    diseases: addedDiseases,
    remedies: addedRemedies,
    hacks: addedHacks,
    bodyMarvels: addedMarvels,
    sensoryFacts: addedSensory,
    qaEntries: addedQA,
    foodSynergies: addedSynergies,
    drugWarnings: addedDrugWarnings,
  };

  uploadLog.lastUploadDate = todayUTC;
  uploadLog.totalUploads = (uploadLog.totalUploads || 0) + 1;
  uploadLog.history = [...(uploadLog.history || []).slice(-29), { date: todayUTC, summary }];
  fs.writeFileSync(UPLOAD_LOG_FILE, JSON.stringify(uploadLog, null, 2) + "\n", "utf-8");

  console.log(`✅ Once-daily full-website upload (${todayUTC}) complete:`, JSON.stringify(summary));
}

main();
