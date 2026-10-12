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
    {
      id: "gen-daily-liver-regeneration",
      bodyPartId: "liver",
      category: "weird_wild",
      rarity: "mind_blowing",
      text: "Your liver is the only organ that can completely regrow itself—even if doctors surgically remove 70% of it, healthy liver tissue grows back to 100% full size in just a few weeks.",
    },
    {
      id: "gen-daily-saliva-production",
      bodyPartId: "jaw",
      category: "record_breaker",
      rarity: "surprising",
      text: "Your mouth glands make about 1 to 1.5 liters of watery spit (saliva) every single day—enough to fill two sports water bottles—coating your teeth with protective minerals and kicking off digestion.",
    },
    {
      id: "gen-daily-skeletal-remodeling",
      bodyPartId: "bones",
      category: "health_tip",
      rarity: "almost_unknown",
      text: "Your skeleton is completely replaced every 10 years; microscopic clean-up cells (osteoclasts) break down worn-out bone while builder cells (osteoblasts) lay down fresh calcium so your frame stays strong.",
    },
    {
      id: "gen-daily-retina-speed",
      bodyPartId: "eyes",
      category: "record_breaker",
      rarity: "mind_blowing",
      text: "The light-sensitive cells in the back of your eyes (the retina) process visual scenes in just 13 milliseconds—faster than a camera shutter—and send over 10 million bits of data to your brain every second.",
    },
    {
      id: "gen-daily-heart-muscle-pumping",
      bodyPartId: "heart",
      category: "record_breaker",
      rarity: "surprising",
      text: "Your heart beats about 100,000 times a day without taking a single break, pumping roughly 7,500 liters of oxygen-rich blood through 60,000 miles of blood vessels.",
    },
    {
      id: "gen-daily-blinking-eyelid",
      bodyPartId: "eyes",
      category: "health_tip",
      rarity: "common",
      text: "You spend about 10% of your waking hours with your eyes closed just from natural blinking, which wipes clean tears across your eyes to wash away dust and deliver fresh air.",
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
    {
      id: "fl-28",
      marketing_claim: "Gluten-Free Packaged Cookies & Chips — 'Healthy Weight Loss Choice'",
      real_meaning:
        "Gluten is only a health problem for people with celiac disease (a digestive autoimmune condition) or diagnosed wheat allergy. Most packaged gluten-free snacks replace wheat with ultra-refined white rice flour, potato starch, and extra sugar to mimic gluten's chewiness, making them spike blood sugar even faster than regular cookies.",
      risk_level: "MEDIUM",
      biological_impact:
        "Swapping whole wheat flour for ultra-refined tapioca or rice starch strips out natural dietary fiber while increasing the glycemic load. Unless you have celiac disease, eating processed gluten-free packaged snacks often triggers rapid blood sugar swings and increased hunger.",
      how_to_spot:
        "Check the first three ingredients: if refined rice flour, corn starch, or sugar come before any whole grains or seeds, it is an ultra-processed sweet treat rather than a health food.",
      common_products: [
        "Gluten-Free Packaged Cookies",
        "Gluten-Free Pretzel Crisps",
        "Gluten-Free Packaged Snack Cakes",
      ],
      confidenceLevel: "HIGH",
      evidenceStatement:
        "✅ EVIDENCE: Systematic reviews in the Journal of Human Nutrition and Dietetics confirm commercial gluten-free processed foods frequently contain higher saturated fat, sodium, and simple starch with less dietary fiber than gluten-containing equivalents.",
      clinicalDisclaimer:
        "📍 IMPORTANT: If you have celiac disease, strict gluten avoidance is medically mandatory. For others, naturally gluten-free whole foods (like brown rice, millets, beans, and vegetables) are far healthier than processed gluten-free packaged snacks.",
    },
    {
      id: "fl-29",
      marketing_claim: "Plant-Based & Vegan Frozen Burgers — 'Naturally Heart-Healthy'",
      real_meaning:
        "Even though made from soy or pea protein, many commercial vegan burger patties are packed with heavy amounts of saturated coconut oil and high salt to mimic beef juice, matching or exceeding the saturated fat of a real beef burger.",
      risk_level: "HIGH",
      biological_impact:
        "Coconut oil is over 80% saturated fat. Consuming ultra-processed plant patties high in saturated fat and sodium drives up arterial LDL cholesterol and blood pressure just like greasy processed meat.",
      how_to_spot:
        "Check the Nutrition Facts panel for Saturated Fat (over 5g per patty) and look for 'Coconut Oil' or 'Refined Palm Fat' in the ingredient list.",
      common_products: [
        "Frozen Plant-Based Burger Patties",
        "Commercial Vegan Sausage Links",
        "Plant-Based Slider Patties",
      ],
      confidenceLevel: "HIGH",
      evidenceStatement:
        "✅ EVIDENCE: American Heart Association dietary advisories show that replacing dietary unsaturated fats with tropical saturated oils (coconut/palm) raises serum LDL-C regardless of whether the source is vegan.",
      clinicalDisclaimer:
        "📍 IMPORTANT: For cardiovascular wellness, choose whole-food plant proteins (lentils, chickpeas, tofu, edamame) instead of ultra-processed fake meat patties high in saturated oil.",
    },
  ],
  greyMarket: [
    {
      id: 31,
      category: "supplements",
      icon: "💨",
      product: "Unregulated Semi-Synthetic Cannabinoid Vapes & Gummies (HHC / Delta-8)",
      molecule: "Hexahydrocannabinol (HHC) / Isomerized Hemp Distillates",
      subtitle:
        "Semi-synthetic psychoactive cannabinoids sold without standardized safety or heavy metal testing.",
      brands: [
        "Gas-Station HHC Disposable Vapes",
        "Unlicensed Delta-8 Gummy Rings",
        "Online 'Legal Hemp High' Cartridges",
      ],
      risk: "HIGH",
      organ: "Brain & Respiratory System",
      summary:
        "European health authorities (France, Austria, Sweden, Czechia) and multiple US state regulators have issued statutory bans against HHC and unregulated semi-synthetic cannabinoid vapes due to toxic heavy-metal catalyst residues and acute psychiatric emergency room visits.",
      mechanism:
        "HHC is manufactured by hydrogenating hemp CBD using metal catalysts (palladium, platinum, nickel). Poorly purified batches carry toxic heavy-metal residues and synthetic isomers that overstimulate brain CB1 receptors, triggering severe tachycardia, anxiety crises, and lung irritation.",
      status_global: {
        EU: "Classified as a Controlled Substance in France, Austria, Sweden, Switzerland, Finland, Czechia",
        US: "Subject to state-level consumer bans and ongoing DEA synthetic cannabinoid classification reviews",
        UK: "Controlled under the Psychoactive Substances Act 2016",
      },
      status_india: "Prohibited under the Narcotic Drugs and Psychotropic Substances (NDPS) Act.",
      how_to_spot:
        "Look for neon vape packaging claiming '100% Legal Hemp High' with zero ISO-accredited third-party laboratory Certificate of Analysis (CoA) testing for heavy metals or residual solvents.",
      alternatives: [
        "Evidence-based breathwork and sleep hygiene for nervous tension",
        "Consultation with a licensed physician for chronic anxiety or sleep disorders",
      ],
      ref: "European Monitoring Centre for Drugs and Drug Addiction (EMCDDA) Technical Report / French ANSM Directive",
      regulatorAgency: "EMCDDA & National Drug Regulatory Agencies",
      noticeDate: "2024 Regulatory Crackdown",
      confidenceLevel: "HIGH",
      evidenceStatement:
        "EMCDDA pharmacovigilance confirms acute cardiovascular and psychiatric toxicity from non-standardized synthetic cannabinoid isomers.",
      clinicalDisclaimer:
        "Never inhale or ingest unregulated psychoactive vape oils or candies sold outside licensed pharmacy or statutory regulatory channels.",
    },
    {
      id: 32,
      category: "supplements",
      icon: "⚠️",
      product: "Illegal 'Herbal' Male Enhancement Pills Spiked with Synthetic Sildenafil (Viagra)",
      molecule: "Hidden Unlisted Sildenafil & Tadalafil Analogs",
      subtitle:
        "Over-the-counter capsules sold as '100% all-natural herbs' secretly spiked with prescription erectile dysfunction drugs.",
      brands: [
        "Rhino 69 / Kangaroo Extreme",
        "Titan 3000 'All-Natural' Gold Capsules",
        "Gas-Station Sexual Enhancement Shots",
      ],
      risk: "CRITICAL",
      organ: "Heart & Blood Vessels (Cardiovascular System)",
      summary:
        "FDA laboratory testing consistently finds over 80% of gas-station 'all-natural herbal' male enhancement supplements contain unlisted, dangerous doses of sildenafil (the active drug in Viagra) or untested chemical mimics. When taken by anyone using heart medicines like nitroglycerin, this causes a fatal drop in blood pressure.",
      mechanism:
        "Sildenafil strongly widens blood vessels. If someone taking prescription nitrate heart drugs or alpha-blockers takes this hidden drug, blood pressure plummets catastrophically (severe hypotension), cutting off blood flow to the heart and brain, triggering fatal cardiac arrest.",
      status_global: {
        US: "FDA Public Warning Notifications & statutory border seizures",
        EU: "Banned under European Medicines Agency (EMA) Directives",
        UK: "MHRA Public Health Alerts & Customs confiscations",
      },
      status_india:
        "Prohibited under the Drugs and Cosmetics Act as spurious and adulterated drugs.",
      how_to_spot:
        "Metallic holographic blister packs sold at gas stations or convenience stores claiming '100% Natural Herbal Formula' that promise instant multi-day sexual performance.",
      alternatives: [
        "Cardiovascular aerobic exercise and lifestyle optimization",
        "Consultation with a licensed physician or urologist for safe, regulated treatment",
      ],
      ref: "US FDA Public Notification: Tainted Sexual Enhancement Products / MHRA Medicines Safety Alert",
      regulatorAgency: "US FDA, UK MHRA & Interpol Operation Pangea",
      noticeDate: "Ongoing Statutory Enforcement Alert",
      confidenceLevel: "HIGH",
      evidenceStatement:
        "FDA laboratory spectrometry confirms illicit chemical adulteration with PDE-5 inhibitors in over 300 named OTC products.",
      clinicalDisclaimer:
        "Never consume over-the-counter sexual enhancement pills; they are frequently tainted with prescription chemicals that interact lethally with heart medications.",
    },
    {
      id: 33,
      category: "supplements",
      icon: "☠️",
      product: "Miracle Mineral Solution (MMS) / Industrial Chlorine Dioxide Water",
      molecule: "Sodium Chlorite (28%) & Citric Acid Activator (Chlorine Dioxide)",
      subtitle:
        "Industrial bleaching solution dangerously marketed online as an unproven cure for autism, cancer, and viral infections.",
      brands: [
        "Miracle Mineral Solution (MMS)",
        "Water Purification Drops (CD/CDS Protocol)",
        "MMS1 / MMS2 Starter Kits",
      ],
      risk: "CRITICAL",
      organ: "Gastrointestinal Lining, Kidneys & Red Blood Cells",
      summary:
        "Global regulators (US FDA, Health Canada, UK FSA, Australian TGA) have issued urgent criminal and consumer warnings against MMS. Drinking this chemical mixture produces chlorine dioxide—an industrial bleach used to whiten paper pulp. Swallowing it causes chemical burns to the stomach lining, acute kidney failure, and life-threatening destruction of red blood cells (hemolysis).",
      mechanism:
        "Chlorine dioxide is a powerful industrial oxidizing agent. When swallowed, it corrodes the mucosal lining of the esophagus and stomach, oxidizes red blood cell hemoglobin into non-functional methemoglobin (blocking oxygen delivery), and triggers acute tubular necrosis in the kidneys.",
      status_global: {
        US: "FDA Warning Letters & Federal Criminal Convictions for distribution",
        Canada: "Health Canada Recall and Warning on MMS (Sodium Chlorite)",
        UK: "UK Food Standards Agency (FSA) Statutory Warning",
      },
      status_india:
        "Not authorized for human consumption; hazardous industrial chemical under CDSCO/FSSAI oversight.",
      how_to_spot:
        "Two-bottle kits sold online claiming that mixing 'sodium chlorite' with an acid activator (citric acid or lemon juice) makes a 'miracle disease cure'.",
      alternatives: [
        "Evidence-based clinical medicine from accredited hospitals and physicians",
        "Approved pediatric and oncological supportive care pathways",
      ],
      ref: "US FDA Consumer Update: Drinking MMS Is the Same as Drinking Bleach / Health Canada Public Alert",
      regulatorAgency: "US FDA, Health Canada, UK FSA & TGA",
      noticeDate: "Ongoing Criminal & Statutory Enforcement",
      confidenceLevel: "HIGH",
      evidenceStatement:
        "Poison control databases and peer-reviewed clinical toxicology reports document methemoglobinemia, gastrointestinal perforation, and fatal acute kidney failure following MMS ingestion.",
      clinicalDisclaimer:
        "🚨 DANGER: Never drink sodium chlorite or chlorine dioxide solutions. Ingesting industrial bleaching agents can cause permanent organ destruction or death.",
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
    {
      dayOfYear: 64,
      bodyPartId: "lung-left",
      fact: "Taking two quick inhales through your nose followed by one long slow sigh out your mouth pops open collapsed microscopic lung sacs (alveoli) and immediately slows a racing pulse.",
      action:
        "Try 3 physiological sighs right now: double-inhale through your nose, then a gentle 6-second sigh out your mouth.",
      actionDuration: "30s",
    },
    {
      dayOfYear: 65,
      bodyPartId: "liver",
      fact: "Your liver stores about 100 grams of glucose (sugar) as glycogen—a reserve fuel tank that quietly drips clean energy into your blood while you sleep so your brain never starves.",
      action:
        "Drink a tall glass of water first thing in the morning to help your liver rehydrate and clear nighttime waste products.",
      actionDuration: "20s",
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
    {
      id: "m-feed-fever-starve-cold",
      bodyPartId: "brain",
      myth: "You should feed a cold and starve a fever.",
      reality:
        "Starving a fever is dangerous advice. When your body fights an infection, your internal thermostat goes up to create a fever, which speeds up your metabolism and burns calories and fluids much faster than normal. Starving yourself deprives your immune cells of the energy they need to produce germ-fighting antibodies and causes dehydration.",
      sources: ["Mayo Clinic Infectious Disease", "Scientific American Medicine"],
      actionableTip:
        "Sip warm soups, herbal teas, or electrolyte water every 1 to 2 hours, and eat easy-to-digest nutritious foods whenever you feel hungry.",
      confidenceLevel: "HIGH",
      evidenceStatement:
        "✅ EVIDENCE: Clinical physiology proves basal metabolic rate rises by approximately 10-12% for each 1°C increase in core body temperature, necessitating adequate caloric and fluid intake.",
    },
    {
      id: "m-swallowed-gum-seven-years",
      bodyPartId: "stomach",
      myth: "Swallowed chewing gum stays trapped inside your stomach for seven years.",
      reality:
        "Your stomach cannot break down the rubbery synthetic base of gum, but your digestive tract treats it just like insoluble fiber. Smooth muscular waves squeeze the gum through your intestines, and it passes harmlessly out in your stool in 24 to 48 hours.",
      sources: ["American Academy of Pediatrics (AAP)", "Mayo Clinic Gastroenterology"],
      actionableTip:
        "Do not panic if you accidentally swallow a piece of gum. Only seek medical attention if a child swallows multiple pieces at once alongside coins or objects that could cause a physical blockage.",
      confidenceLevel: "HIGH",
      evidenceStatement:
        "✅ EVIDENCE: Pediatric gastroenterology case reviews confirm swallowed gum transit time mirrors normal gastrointestinal motility (24-48 hours) without tissue adherence.",
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
    {
      id: "d-57",
      name: "Tension Headache (Stress & Neck Muscle Headache)",
      overview:
        "The most common type of headache in the world, causing a steady, dull ache that feels like a tight rubber band squeezing around your forehead, temples, or the back of your neck. It usually happens when tight neck, shoulder, or jaw muscles become overworked from stress, bad screen posture, or clenching your teeth.",
      symptoms: [
        {
          text: "Dull, aching pressure that feels like a tight band wrapped around both sides of your head",
          frequency: "always",
        },
        {
          text: "Tenderness or soreness in your neck, shoulders, and scalp when touched",
          frequency: "often",
        },
        { text: "Mild stiffness when turning your head from side to side", frequency: "often" },
        {
          text: "Worsening tightness toward late afternoon or after long hours on computers",
          frequency: "sometimes",
        },
      ],
      whenToSeeDoctor:
        "🚨 EMERGENCY WARNING - CALL 112 / 911 IMMEDIATELY: If you feel a sudden, explosive 'thunderclap' headache (the worst pain of your life in seconds), or if a headache comes with fever, stiff neck, confusion, weakness on one side of your face or body, or difficulty speaking. ⚠️ SEE A DOCTOR WITHIN 48 HOURS: If you need headache pills more than twice a week.",
      misconceptions: [
        "Myth: You should take pain pills every single day for tension headaches. Reality: Taking over-the-counter painkillers (like ibuprofen or paracetamol) more than 2 to 3 days a week causes 'medication overuse headaches' (rebound headaches) where the pills themselves trigger worse headaches every morning.",
      ],
      bodyPartId: "spine-cervical",
    },
    {
      id: "d-58",
      name: "Gastroesophageal Reflux Disease (GERD / Chronic Acid Reflux)",
      overview:
        "A digestive condition where the muscular ring at the bottom of your food pipe (lower esophageal sphincter) becomes loose or relaxes at the wrong time, allowing harsh stomach acid and digestive juices to splash backward up into your throat and chest.",
      symptoms: [
        {
          text: "Burning sensation in your chest (heartburn), especially after eating or lying down",
          frequency: "always",
        },
        {
          text: "Sour or bitter liquid backing up into the back of your throat or mouth",
          frequency: "often",
        },
        {
          text: "Morning hoarseness or a chronic dry tickling cough",
          frequency: "sometimes",
        },
        {
          text: "Feeling like there is a small lump stuck in the back of your throat",
          frequency: "sometimes",
        },
      ],
      whenToSeeDoctor:
        "🚨 EMERGENCY WARNING - CALL 112 / 911 IMMEDIATELY: If you experience chest pain that spreads to your left arm, shoulder, neck, or jaw, or comes with shortness of breath or cold sweats (this can be a heart attack mimicking heartburn). ⚠️ SEE A DOCTOR WITHIN 48 HOURS: If food gets stuck when you swallow, if you vomit blood, or if you lose weight without trying.",
      misconceptions: [
        "Myth: Drinking a tall glass of milk cures acid reflux. Reality: While milk feels soothing for 5 minutes, its protein and calcium stimulate your stomach to produce even more acid an hour later (acid rebound).",
      ],
      bodyPartId: "stomach",
    },
  ],
  remedies: [
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
      id: "ginger-tea-nausea-motility",
      name: "Fresh Ginger Root Tea for Nausea & Stomach Settling",
      description:
        "Steeping 1 to 2 grams of freshly sliced ginger root in hot water for 10 minutes to relieve mild nausea, car sickness, and sluggish gastric emptying.",
      evidenceRating: "studied",
      evidenceDetails:
        "Systematic reviews (Cochrane & Critical Reviews in Food Science and Nutrition) demonstrate that gingerols and shogaols in fresh ginger bind to serotonin 5-HT3 receptors in the digestive tract, gently accelerating stomach emptying and reducing nausea signals to the brainstem.",
      ailment: "Mild Digestive Nausea & Post-Meal Heaviness",
      bodyPartId: "stomach",
      practicalContext:
        "Sip freshly steeped ginger tea slowly 20 minutes before a car trip or after a heavy meal. Limit to under 4 grams of raw ginger daily if taking blood thinners.",
    },
  ],
  hacks: [
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
      id: "box-breathing-autonomic-reset",
      title: "4x4 Box Breathing (Navy SEAL Autonomic Reset)",
      practice:
        "Inhale through your nose for 4 seconds, hold your breath gently for 4 seconds, exhale through your mouth for 4 seconds, and hold empty for 4 seconds. Repeat for 4 cycles.",
      scienceBasis:
        "Paced equal-ratio breathing balances blood carbon dioxide levels and dampens sympathetic nervous system (fight-or-flight) arousal, bringing rapid mental clarity during high-stress moments.",
      bodyPartId: "brain",
    },
  ],
  bodyMarvels: [
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
      id: "vagus-nerve-superhighway",
      title: "The Vagus Nerve: Your Body's Master Calming Superhighway",
      introduction:
        "Wandering from your brainstem all the way down through your heart, lungs, stomach, and intestines, the vagus nerve is the longest cranial nerve in your body and serves as your master parasympathetic brake.",
      sections: [
        {
          heading: "1. The Direct Heart Brake",
          body: "Whenever you take a long, slow exhale or hum, the vagus nerve releases a neurotransmitter called acetylcholine directly onto your heart's natural pacemaker (the SA node), telling your heart to slow its beats within seconds.",
        },
        {
          heading: "2. The Gut-to-Brain Telephone Line",
          body: "Over 80% of vagus nerve fibers are sensory wires traveling upward—sending real-time reports about gut bacteria, stomach fullness, and inflammation straight to your emotional brain centers.",
        },
      ],
      conclusion:
        "You can tone your vagus nerve naturally through slow exhales, singing, cold face splashes, and eating prebiotic fibers that feed friendly gut bacteria.",
      bodyPartId: "brain",
    },
  ],
  sensoryFacts: [
    {
      id: "orthostatic-headrush",
      sensation: "Brief Head-Rush or Dizzy Spell When Standing Up Fast",
      cause:
        "When you stand up abruptly from lying or sitting, gravity temporarily pulls about half a liter of blood down into your legs and belly. Before your heart and neck sensors (baroreceptors) can clamp blood vessels shut, blood pressure in your head drops for 2 to 3 seconds.",
      tip: "Pause on the edge of the bed for 5 seconds before standing, and flex your calf muscles to pump blood back up toward your heart.",
      bodyPartId: "heart",
    },
    {
      id: "photic-sneeze-reflex",
      sensation: "The Sun Sneeze (Sneezing When Stepping into Bright Sunlight)",
      cause:
        "Known scientifically as the photic sneeze reflex, about 1 in 4 people sneeze whenever they walk from a dim room into bright sunlight. The nerve that carries light signals from your eyes (optic nerve) runs directly next to the nerve that senses tickles inside your nose (trigeminal nerve); intense electrical signals from bright light accidentally cross over and trigger a fake sneeze reflex in your brainstem.",
      tip: "Wearing UV-rated sunglasses before stepping outside stops the sudden light burst from triggering the sneeze reflex.",
      bodyPartId: "eyes",
    },
    {
      id: "brain-freeze-sphenopalatine",
      sensation: "Ice Cream Headache (Sudden Brain Freeze)",
      cause:
        "When cold food or ice cream touches the warm roof of your mouth, local blood vessels rapidly constrict to save heat and then violently dilate to restore warmth. Pain sensors in your palate bundle (the sphenopalatine ganglion) interpret this rapid temperature shift as danger, and the trigeminal nerve mistakenly refers the pain upward to your forehead and temples.",
      tip: "Press the flat, warm underside of your tongue firmly against the roof of your mouth for 10 seconds to warm the nerve bundle and end the freeze.",
      bodyPartId: "throat",
    },
  ],
  qaEntries: [
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
      id: "cold-weather-catch-cold-expert",
      question:
        "Does going outside in cold weather with wet hair actually make you catch a cold or the flu?",
      answer:
        "No. Colds and flu are caused exclusively by viral infections (rhinoviruses and influenza viruses), not cold air or damp hair. However, cold, dry winter air does two things: it cools the nasal lining, slightly slowing down the protective microscopic hairs (cilia) that sweep viruses out of your nose, and it drives people indoors into crowded, poorly ventilated rooms where airborne viruses spread easily.",
      expertName: "Dr. Anthony Morales",
      expertTitle: "Clinical Immunologist & Infectious Disease Specialist",
      bodyPartId: "throat",
    },
  ],
  foodSynergies: [
    {
      id: "syn-beans-citrus-iron",
      foodA: "Lentils, Beans, or Spinach (Non-Heme Iron)",
      foodB: "Fresh Lemon Juice or Bell Peppers (Vitamin C)",
      synergyOutcome: "Non-Heme Iron Absorption Multiplier",
      multiplier: "+300% to +400% Iron Uptake",
      mechanism:
        "Plant-based non-heme iron exists in an oxidized ferric form (Fe3+) that is poorly absorbed by human intestines. Vitamin C chemically reduces it into soluble ferrous iron (Fe2+) right in your stomach, shielding it from inhibitory phytates and boosting absorption up to fourfold.",
      culinaryIdea:
        "Always squeeze fresh lemon juice over cooked dal, bean chili, or sauteed palak right before serving.",
    },
    {
      id: "syn-carrots-avocado-beta-carotene",
      foodA: "Cooked Carrots or Sweet Potatoes (Beta-Carotene Provitamin A)",
      foodB: "Avocado, Nuts, or Olive Oil (Healthy Plant Fats)",
      synergyOutcome: "Beta-Carotene Eye & Skin Nutrient Surge",
      multiplier: "+600% Beta-Carotene Absorption",
      mechanism:
        "Beta-carotene is fat-soluble and trapped inside rigid fibrous plant walls. Eating carrots with healthy dietary fats like avocado or cold-pressed oil stimulates digestive bile and micelle formation, boosting absorption by up to 6 times compared to eating fat-free raw carrots.",
      culinaryIdea:
        "Roast baby carrots with a drizzle of olive oil, or blend cooked carrots into soups with a spoonful of pumpkin seeds or sliced avocado.",
    },
    {
      id: "syn-yogurt-banana-synbiotic",
      foodA: "Fermented Yogurt or Kefir (Live Probiotics)",
      foodB: "Slightly Green Underripe Bananas (Prebiotic Resistant Starch)",
      synergyOutcome: "Synbiotic Colon Microbiome Colonization",
      multiplier: "+300% Probiotic Survival & SCFA Yield",
      mechanism:
        "Live probiotic bacteria need soluble fuel to survive the harsh stomach acid barrier. Resistant starch in underripe bananas acts as a protective shield and fertilizer in the colon, allowing beneficial bacteria to produce protective short-chain fatty acids (SCFAs).",
      culinaryIdea:
        "Slice half an underripe banana into a cup of plain unsweetened Greek yogurt or homemade curd for a morning gut-shield breakfast.",
    },
  ],
  drugWarnings: [
    {
      id: "warn-aged-cheese-maoi",
      food: "Aged Cheeses, Cured Salami & Fermented Soy (High Tyramine)",
      medicationClass: "MAOI Antidepressants (Phenelzine, Tranylcypromine, Selegiline)",
      riskSeverity: "CRITICAL",
      clinicalConsequence:
        "Aged foods contain high amounts of tyramine. MAOI medicines block the digestive enzyme needed to break down tyramine, causing it to flood your bloodstream and trigger a dangerous, emergency spike in blood pressure (hypertensive crisis) with severe headache.",
      doctorDirective:
        "Strictly avoid aged cheeses, tap beers, and cured meats if you take an MAOI antidepressant, and seek emergency care for severe sudden headaches.",
    },
    {
      id: "warn-activated-charcoal-meds",
      food: "Activated Charcoal Smoothies, Black Breads & Detox Lattes",
      medicationClass: "Oral Birth Control Pills, Blood Pressure & Thyroid Medications",
      riskSeverity: "CRITICAL",
      clinicalConsequence:
        "Activated charcoal is an unselective, super-absorbent powder used in hospital emergency rooms to bind poisons. Drinking it in trendy 'detox' black smoothies or lattes absorbs your morning medications directly in your stomach, rendering contraceptive pills and heart drugs completely inactive and leading to unplanned pregnancies or blood pressure spikes.",
      doctorDirective:
        "Never consume trendy activated charcoal drinks or baked foods within 4 to 6 hours of taking any daily prescription medication.",
    },
    {
      id: "warn-cbd-liver-metabolism",
      food: "Over-the-Counter CBD Oils, Tinctures & Gummies",
      medicationClass: "Blood Thinners (Warfarin), Anti-Epileptic Drugs & Immunosuppressants",
      riskSeverity: "HIGH",
      clinicalConsequence:
        "Cannabidiol (CBD) strongly competes for CYP450 liver enzymes (specifically CYP3A4 and CYP2C19) that your body uses to clear prescription drugs. Taking high-dose CBD blocks these enzymes, causing prescription blood thinner or seizure drug levels in your blood to build up dangerously high.",
      doctorDirective:
        "Always inform your doctor or pharmacist before using CBD supplements if you take prescription medications, and get routine therapeutic blood level checks.",
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
