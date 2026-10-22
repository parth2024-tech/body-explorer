// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// The Living Body Atlas — Food Intelligence & Indian Dietary Gaps
// Evidence Base: ICMR–NIN Dietary Guidelines for Indians, 2024
// Indian Food Composition Tables (IFCT) & Gold-Standard Clinical Data
// STRICT RULE: INDIVIDUAL-FOOD INTELLIGENCE ONLY (NO MEAL PREP)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface IndianNutritionGap {
  id: string;
  nutrient: string;
  title: string;
  subtitle: string;
  badge: string;
  foodExamples: string[];
  coreInsight: string;
  whyItMatters: string;
  clinicalReality: string;
  icmrStandard: string;
  citation: string;
  sourceUrl: string;
}

export interface NutritionalDomain {
  id: string;
  title: string;
  tagline: string;
  keyNutrients: string[];
  bodyFunctionSummary: string;
  foodExamples: string[];
  clinicalCaution: string;
}

export interface EssentialNutrient {
  id: string;
  name: string;
  category: "vitamin" | "mineral" | "essential_component";
  categoryLabel: string;
  indianFoodExamples: string[];
  keyFunction: string;
  deficiencyOrGapNote: string;
  absorptionTip: string;
}

// ─── 1. SPECIAL INDIAN NUTRITION SERIES (6 MAJOR DIETARY GAPS) ───
export const INDIAN_NUTRITION_GAPS: IndianNutritionGap[] = [
  {
    id: "gap-b12",
    nutrient: "Vitamin B12 (Cobalamin)",
    title: "Vitamin B12: The Vegetarian Nutrition Gap",
    subtitle: "Why ordinary plant foods lack B12 and curd alone cannot guarantee adequacy",
    badge: "Vulnerable in Vegetarian Diets",
    foodExamples: [
      "Curd & Chaas (variable amounts)",
      "Milk & Paneer",
      "Fortified Foods",
      "Eggs (if consumed)",
      "Fish & Poultry (if consumed)",
    ],
    coreInsight:
      "Dairy foods contain vitamin B12, but the amount varies widely based on cow and buffalo diets, boiling cycles, and microbial fermentation. Ordinary plant foods (like spirulina, fermented batter, and mushrooms) do not supply reliable, active vitamin B12.",
    whyItMatters:
      "Vitamin B12 is essential for producing healthy red blood cells and maintaining the protective myelin sheath around nerves. Long-term deficiency causes irreversible nerve tingling (peripheral neuropathy), memory fog, fatigue, and megaloblastic anaemia.",
    clinicalReality:
      "Suspected B12 deficiency requires appropriate medical evaluation (serum B12 and methylmalonic acid blood tests) and clinical treatment. It cannot be reliably cured simply by adding an extra bowl of curd to your daily plate.",
    icmrStandard:
      "ICMR-NIN 2024 recommends 2.2 mcg/day for adults. Vegetarians with modest dairy intake should discuss fortified foods or medically supervised supplementation with a physician.",
    citation: "ICMR-NIN Dietary Guidelines for Indians, 2024 & PubMed ID: 29480918",
    sourceUrl: "https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf",
  },
  {
    id: "gap-iron",
    nutrient: "Iron & Bioavailability",
    title: "Iron: Eating Iron is Not the Same as Absorbing It",
    subtitle:
      "Unlocking plant non-haem iron with Vitamin C and avoiding tea and coffee tannin traps",
    badge: "High Public Health Priority",
    foodExamples: [
      "Lentils (Moong, Masoor)",
      "Roasted Bengal Gram (Chana)",
      "Spinach & Methi Greens",
      "Fresh Amla (Pairing Catalyst)",
      "Guava & Lemon (Pairing Catalyst)",
    ],
    coreInsight:
      "Indian vegetarian diets provide iron predominantly as non-haem iron. Non-haem iron has a low baseline absorption rate (2% to 10%) compared to animal haem iron (15% to 35%) because of natural plant phytates and polyphenols.",
    whyItMatters:
      "Iron is the central atom in haemoglobin, which transports oxygen from your lungs to your muscles, heart, and brain. Deficient iron stores lead to chronic physical exhaustion, breathlessness on stairs, and impaired concentration.",
    clinicalReality:
      "Squeezing fresh lemon juice over cooked dal or pairing greens with amla improves non-haem iron uptake by up to 300%. Crucially, drinking tea or coffee within 60 minutes of a meal binds dietary iron with tannins, slashing absorption by over 50%. Not all fatigue or anaemia is caused by iron deficiency; clinical blood tests must confirm ferritin levels before taking iron pills.",
    icmrStandard:
      "ICMR-NIN 2024 advises consuming Vitamin C alongside plant iron sources and separating tea or coffee consumption from major meals by at least 1 hour.",
    citation: "ICMR-NIN Dietary Guidelines for Indians, 2024 & WHO Anaemia Guidelines",
    sourceUrl: "https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf",
  },
  {
    id: "gap-vit-d",
    nutrient: "Vitamin D3 (Cholecalciferol)",
    title: "Vitamin D: A Common Nutritional Concern",
    subtitle: "Why food sources are scarce and sunlight does not guarantee sufficiency",
    badge: "Widespread Deficiency Risk",
    foodExamples: [
      "Fortified Milk & Fortified Oils",
      "Egg Yolks (modest amounts)",
      "Selected Oily Fish",
      "Sunlight Synthesis (Midday UVB)",
    ],
    coreInsight:
      "Natural food sources of vitamin D are exceptionally scarce in traditional Indian diets. While the human body can synthesize vitamin D from solar UVB rays, modern indoor occupations, atmospheric smog, clothing habits, and high skin melanin impede synthesis.",
    whyItMatters:
      "Vitamin D regulates intestinal calcium absorption, bone mineralization, skeletal muscle strength, and immune balance. Chronic insufficiency leads to bone demineralization, deep bone aches, and muscle weakness.",
    clinicalReality:
      "Melanin in Indian skin reduces cutaneous vitamin D synthesis, requiring longer sun exposure compared to fair skin. Sitting near closed glass windows produces zero vitamin D because window glass blocks UVB while transmitting UVA. Deficiency requires clinical testing (25-OH Vitamin D blood test) and medical supplementation.",
    icmrStandard:
      "ICMR-NIN 2024 recommends 600–800 IU daily. For confirmed deficiency (<20 ng/mL), clinical therapeutic dosing under a doctor's care is necessary.",
    citation: "ICMR-NIN Dietary Guidelines for Indians, 2024 & Endocrine Society Guidelines",
    sourceUrl: "https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf",
  },
  {
    id: "gap-calcium",
    nutrient: "Calcium (Macro Mineral)",
    title: "Calcium: Beyond Milk",
    subtitle: "Ragi, sesame seeds, and tofu: bioavailability, portion size, and phytate reality",
    badge: "Crucial for Skeletal Longevity",
    foodExamples: [
      "Curd & Fresh Milk",
      "Ragi (Finger Millet / Nachni)",
      "Calcium-Set Tofu",
      "White Sesame Seeds (Til)",
      "Rajgira (Amaranth Seeds)",
    ],
    coreInsight:
      "While milk and curd are traditional staples, ragi offers ~344 mg calcium per 100g, and sesame seeds provide ~975 mg/100g. However, realistic portion sizes and antinutrients (phytates, oxalates) matter; a teaspoon of sesame seeds provides only ~48 mg calcium.",
    whyItMatters:
      "Over 99% of body calcium resides in teeth and bones, while 1% governs heart muscle contraction, blood clotting, and nerve firing. If dietary calcium is inadequate, the body leaches calcium directly out of bones.",
    clinicalReality:
      "Soaking, sprouting, or naturally fermenting ragi significantly degrades phytates, making its calcium easier to absorb. To maintain lifelong bone density, calcium must be paired with adequate vitamin D, dietary magnesium, and weight-bearing physical movement.",
    icmrStandard:
      "ICMR-NIN 2024 sets the adult calcium requirement at 1,000 mg/day, obtained through a varied balance of dairy, whole millets, legumes, and dark greens.",
    citation: "ICMR-NIN Dietary Guidelines for Indians, 2024 & IFCT Database",
    sourceUrl: "https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf",
  },
  {
    id: "gap-iodine",
    nutrient: "Iodine (Trace Element)",
    title: "Iodine: A Small Nutrient with a Major Role",
    subtitle: "Thyroid hormone defense through iodized salt — without exceeding sodium limits",
    badge: "Universal Health Requirement",
    foodExamples: [
      "Iodized Table Salt (e.g., Tata Salt)",
      "Fresh Dairy Milk",
      "Seafood & Sea Fish (if consumed)",
    ],
    coreInsight:
      "Iodine is the essential trace building block for thyroid hormones (T3 and T4). Because inland and flood-prone Indian soils are naturally low in iodine, universal table salt iodization is an essential, highly effective public-health safeguard.",
    whyItMatters:
      "Thyroid hormones regulate basal metabolic rate, energy burn, body temperature, and fetal/infant brain development. Iodine deficiency can lead to goitre, sluggish metabolism, and developmental cognitive delays.",
    clinicalReality:
      "Using iodized salt in daily home cooking is a simple, proven safeguard. CRITICAL WARNING: This is never a reason to consume more salt! ICMR-NIN strictly mandates limiting total salt consumption to less than 5 grams per day (<2,000 mg sodium) to protect against hypertension and kidney damage. Store salt in an airtight, dry container away from heat to keep iodine stable.",
    icmrStandard:
      "ICMR-NIN 2024 recommends 150 mcg/day for adults, easily achieved by staying within the safe limit of under 5g of iodized salt daily.",
    citation: "ICMR-NIN Dietary Guidelines for Indians, 2024 & WHO Salt Iodization Standards",
    sourceUrl: "https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf",
  },
  {
    id: "gap-folate",
    nutrient: "Folate (Vitamin B9)",
    title: "Folate: Essential for Cell Division & Maternal Health",
    subtitle: "DNA synthesis, red blood cells, and pre-conceptional maternal health",
    badge: "Essential for Life & Cell Repair",
    foodExamples: [
      "Dark Leafy Greens (Palak, Methi)",
      "Lentils & Beans (Dal, Chana)",
      "Chickpeas (Chole)",
      "Fresh Oranges & Citrus",
      "Beetroot",
    ],
    coreInsight:
      "Folate acts as a coenzyme in the synthesis of DNA, amino acid metabolism, and red blood cell production. Dark greens and pulses are rich in folate, but prolonged boiling in excess water can destroy up to 50% of this heat-sensitive vitamin.",
    whyItMatters:
      "Folate deficiency impairs cell division, leading to megaloblastic anaemia, mouth sores, elevated blood homocysteine, and neural tube defects (such as spina bifida) during early pregnancy.",
    clinicalReality:
      "Lightly steam or sauté green vegetables instead of overboiling and discarding the broth. For women who may become pregnant, dietary folate must be paired with clinical folic acid tablets (400 mcg daily) before and during early pregnancy under medical guidance, because food alone rarely meets early embryonic requirements.",
    icmrStandard:
      "ICMR-NIN 2024 recommends 300 mcg/day for adults and 570 mcg/day during pregnancy under a doctor's care.",
    citation: "ICMR-NIN Dietary Guidelines for Indians, 2024 & CDC Folic Acid Guidelines",
    sourceUrl: "https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf",
  },
];

// ─── 2. THE 9 BODY FUNCTION & NUTRITIONAL DOMAINS ───
export const NUTRITIONAL_DOMAINS: NutritionalDomain[] = [
  {
    id: "blood_oxygen",
    title: "Blood Formation & Oxygen Transport",
    tagline: "Iron, Vitamin B12, Folate (B9), Vitamin B6 & Protein",
    keyNutrients: ["Iron", "Vitamin B12", "Folate (B9)", "Vitamin B6", "Protein"],
    bodyFunctionSummary:
      "Building haemoglobin inside red blood cells to carry oxygen from your lungs to your brain, heart, and active muscles, preventing chronic fatigue.",
    foodExamples: [
      "Lentils (Moong, Masoor)",
      "Roasted Bengal Gram (Chana)",
      "Dark Leafy Greens",
      "Fresh Amla",
      "Curd",
      "Eggs",
    ],
    clinicalCaution:
      "Not all tiredness or anaemia is iron deficiency. Always verify ferritin and B12 levels via a doctor's lab test before taking supplements.",
  },
  {
    id: "bones_teeth",
    title: "Bones, Teeth & Muscle Function",
    tagline: "Calcium, Vitamin D, Phosphorus, Magnesium, Protein & Vitamin K",
    keyNutrients: [
      "Calcium",
      "Vitamin D",
      "Phosphorus",
      "Magnesium",
      "Quality Protein",
      "Vitamin K",
    ],
    bodyFunctionSummary:
      "Preserving skeletal mineral density, maintaining dental enamel, enabling muscular contraction, and facilitating nervous system signals.",
    foodExamples: [
      "Fresh Curd & Milk",
      "Ragi (Finger Millet)",
      "Calcium-Set Tofu",
      "Sesame Seeds (Til)",
      "Rajgira (Amaranth)",
    ],
    clinicalCaution:
      "Calcium cannot enter your bone matrix without adequate Vitamin D; regular weight-bearing physical movement is equally necessary.",
  },
  {
    id: "brain_nerves",
    title: "Brain & Nervous System",
    tagline: "Vitamin B12, Thiamin (B1), B6, Folate, Iodine, Iron, Choline & Plant Omega-3",
    keyNutrients: [
      "Vitamin B12",
      "Thiamin (B1)",
      "Vitamin B6",
      "Folate",
      "Iodine",
      "Choline",
      "Plant Omega-3 (ALA)",
    ],
    bodyFunctionSummary:
      "Maintaining the protective myelin sheath around nerves, synthesizing neurotransmitters (dopamine, serotonin), and sustaining cognitive focus and memory.",
    foodExamples: [
      "Curd",
      "Walnuts (Akhrot)",
      "Ground Flaxseed",
      "Whole Grains",
      "Lentils",
      "Peanuts",
      "Eggs",
    ],
    clinicalCaution:
      "Plant ALA omega-3 has very low conversion to active DHA; persistent B12 deficiency can cause irreversible nerve numbness.",
  },
  {
    id: "vision_eyes",
    title: "Vision & Eye Health",
    tagline: "Vitamin A, Carotenoids (Lutein & Zeaxanthin), Omega-3 & Zinc",
    keyNutrients: ["Vitamin A", "Beta-Carotene", "Lutein & Zeaxanthin", "Omega-3", "Zinc"],
    bodyFunctionSummary:
      "Supporting rhodopsin production for low-light vision, maintaining corneal moisture, and filtering high-energy blue light in the retina.",
    foodExamples: [
      "Carrots (Gajar)",
      "Pumpkin (Kaddu)",
      "Ripe Papaya",
      "Spinach (Palak)",
      "Moringa Leaves",
    ],
    clinicalCaution:
      "Beta-carotene is fat-soluble and requires a tiny drop of dietary cooking oil or ghee to be absorbed efficiently in the digestive tract.",
  },
  {
    id: "digestion_gut",
    title: "Digestion & Gut Function",
    tagline: "Dietary Fibre (Soluble & Insoluble), Water, Quality Protein & Friendly Microbes",
    keyNutrients: [
      "Soluble Fibre",
      "Insoluble Fibre",
      "Water",
      "Gentle Protein",
      "Live Fermented Cultures",
    ],
    bodyFunctionSummary:
      "Feeding beneficial gut bacteria, forming comfortable stool, regulating transit time, and sustaining the intestinal mucosal barrier.",
    foodExamples: [
      "Roasted Chana",
      "Jowar & Bajra",
      "Guava & Papaya",
      "Fresh Curd & Spiced Chaas",
      "Fermented Kanji",
    ],
    clinicalCaution:
      "Sudden drastic spikes in raw fibre without matching water intake can cause abdominal cramping, gas, and temporary constipation.",
  },
  {
    id: "skin_connective",
    title: "Skin, Connective Tissue & Wound Healing",
    tagline: "Vitamin C, Zinc, Vitamin A, Collagen-Building Amino Acids & Essential Fats",
    keyNutrients: [
      "Vitamin C",
      "Zinc",
      "Vitamin A",
      "Amino Acids (Glycine, Proline)",
      "Essential Fatty Acids",
    ],
    bodyFunctionSummary:
      "Synthesizing collagen protein, repairing dermal cuts and wounds, preserving skin barrier elasticity, and protecting cells against oxidative stress.",
    foodExamples: [
      "Fresh Amla",
      "Guava",
      "Citrus Fruits",
      "Soy Chunks",
      "Lentils",
      "Pumpkin Seeds",
      "Walnuts",
    ],
    clinicalCaution:
      "Commercial collagen powders cannot replace balanced dietary protein, Vitamin C, and zinc; your body builds its own collagen naturally.",
  },
  {
    id: "heart_circulation",
    title: "Heart, Blood Pressure & Circulation",
    tagline: "Potassium, Magnesium, Dietary Fibre, Unsaturated Plant Fats & Low Sodium",
    keyNutrients: [
      "Potassium",
      "Magnesium",
      "Soluble Fibre",
      "Plant Unsaturated Fats",
      "Low Sodium",
    ],
    bodyFunctionSummary:
      "Supporting arterial flexibility, balancing blood fluid volume, clearing LDL cholesterol from circulation, and stabilizing healthy cardiac rhythms.",
    foodExamples: [
      "Beans (Rajma, Lobia)",
      "Beetroot",
      "Bananas",
      "Ground Flaxseed",
      "Makhana (Foxnuts)",
      "Mustard Oil (in moderation)",
    ],
    clinicalCaution:
      "Patients on ACE inhibitors, ARBs, or managing Chronic Kidney Disease (CKD) must consult their nephrologist regarding high-potassium foods.",
  },
  {
    id: "immunity_defense",
    title: "Immune Function & Defense",
    tagline: "Complete Protein, Vitamins A, C, D, B6, B12, Folate, Zinc, Selenium & Iron",
    keyNutrients: [
      "Complete Protein",
      "Vitamin A",
      "Vitamin C",
      "Vitamin D",
      "Zinc",
      "Selenium",
      "Iron",
    ],
    bodyFunctionSummary:
      "Producing white blood cells, generating protective antibodies, sustaining physical epithelial skin and gut barriers, and fighting infections.",
    foodExamples: [
      "Moong Sprouts",
      "Fresh Amla",
      "Turmeric with Black Pepper",
      "Garlic & Ginger",
      "Fresh Curd",
      "Mixed Pulses",
    ],
    clinicalCaution:
      "No single food, pill, or spice 'boosts' the immune system into overdrive; balanced daily nutrition prevents immune suppression.",
  },
  {
    id: "thyroid_metabolism",
    title: "Thyroid & Energy Metabolism",
    tagline: "Iodine, Selenium, Iron & B-Complex Vitamins (B1, B2, B3, B5)",
    keyNutrients: ["Iodine", "Selenium", "Iron", "B-Complex Vitamins"],
    bodyFunctionSummary:
      "Synthesizing thyroid hormones (T3 and T4) to control basal metabolic rate, cellular oxygen consumption, and mitochondrial energy production.",
    foodExamples: [
      "Iodized Table Salt (in measured moderation)",
      "Fresh Curd & Milk",
      "Whole Grains",
      "Lentils",
      "Peanuts",
      "Eggs",
    ],
    clinicalCaution:
      "Never consume high-dose iodine or kelp/seaweed supplements as self-treatment; excess iodine can trigger or worsen thyroid dysfunction.",
  },
];

// ─── 3. SEARCHABLE NUTRIENT LIBRARY (ALL 13 VITAMINS + 11 MINERALS + 5 ESSENTIALS) ───
export const ESSENTIAL_NUTRIENTS_LIBRARY: EssentialNutrient[] = [
  // ─── 13 Recognized Vitamins ───
  {
    id: "vit-a",
    name: "Vitamin A (Retinol & Beta-Carotene)",
    category: "vitamin",
    categoryLabel: "Fat-Soluble Vitamin",
    indianFoodExamples: [
      "Carrots (Gajar)",
      "Pumpkin (Kaddu)",
      "Spinach (Palak)",
      "Ripe Papaya",
      "Moringa",
    ],
    keyFunction: "Supports low-light vision, immune barrier defense, and cellular growth.",
    deficiencyOrGapNote:
      "Deficiency causes night blindness (nyctalopia) and dry eyes (xerophthalmia).",
    absorptionTip:
      "Beta-carotene is fat-soluble; cook carrots or spinach with a few drops of oil or ghee for proper absorption.",
  },
  {
    id: "vit-b1",
    name: "Vitamin B1 (Thiamin)",
    category: "vitamin",
    categoryLabel: "Water-Soluble B-Vitamin",
    indianFoodExamples: ["Whole Wheat Atta", "Brown Rice", "Moong Dal", "Groundnuts (Peanuts)"],
    keyFunction:
      "Converts dietary carbohydrates into usable cellular energy (ATP) and supports nerve conduction.",
    deficiencyOrGapNote:
      "Overmilled polished white rice strips thiamin; severe deficiency leads to beriberi.",
    absorptionTip:
      "Thiamin is heat-sensitive; avoid washing rice excessively after soaking, as water-soluble vitamins wash away.",
  },
  {
    id: "vit-b2",
    name: "Vitamin B2 (Riboflavin)",
    category: "vitamin",
    categoryLabel: "Water-Soluble B-Vitamin",
    indianFoodExamples: ["Fresh Milk", "Curd (Dahi)", "Eggs", "Green Leafy Vegetables"],
    keyFunction:
      "Essential for mitochondrial energy release, cellular respiration, and healthy red blood cells.",
    deficiencyOrGapNote:
      "Deficiency causes angular stomatitis (cracked lip corners) and a swollen, tender tongue.",
    absorptionTip:
      "Riboflavin is destroyed by sunlight and ultraviolet light; store dairy products in opaque containers.",
  },
  {
    id: "vit-b3",
    name: "Vitamin B3 (Niacin)",
    category: "vitamin",
    categoryLabel: "Water-Soluble B-Vitamin",
    indianFoodExamples: ["Groundnuts (Peanuts)", "Whole Wheat", "Lentils", "Mushrooms"],
    keyFunction:
      "Core building block of coenzymes NAD and NADP, driving cellular DNA repair and fat metabolism.",
    deficiencyOrGapNote:
      "Severe deficiency results in pellagra (dermatitis, diarrhoea, cognitive impairment).",
    absorptionTip: "Niacin is relatively stable to light and heat compared to other B vitamins.",
  },
  {
    id: "vit-b5",
    name: "Vitamin B5 (Pantothenic Acid)",
    category: "vitamin",
    categoryLabel: "Water-Soluble B-Vitamin",
    indianFoodExamples: ["Lentils (Dals)", "Mushrooms", "Whole Grains", "Curd", "Peanuts"],
    keyFunction:
      "Vital for synthesizing Coenzyme A (CoA), breaking down fatty acids, and synthesizing hormones.",
    deficiencyOrGapNote:
      "Extremely widespread in natural whole foods; isolated deficiency is rare in varied diets.",
    absorptionTip: "Easily obtained by consuming unrefined whole grains and mixed legumes daily.",
  },
  {
    id: "vit-b6",
    name: "Vitamin B6 (Pyridoxine)",
    category: "vitamin",
    categoryLabel: "Water-Soluble B-Vitamin",
    indianFoodExamples: ["Chickpeas (Chana)", "Potatoes", "Bananas", "Whole Grains"],
    keyFunction:
      "Crucial for amino acid and protein metabolism, haemoglobin synthesis, and neurotransmitter balance.",
    deficiencyOrGapNote:
      "Low levels can cause peripheral neuropathy, microcytic anaemia, and elevated homocysteine.",
    absorptionTip: "High-protein diets increase your biological requirement for Vitamin B6.",
  },
  {
    id: "vit-b7",
    name: "Vitamin B7 (Biotin)",
    category: "vitamin",
    categoryLabel: "Water-Soluble B-Vitamin",
    indianFoodExamples: ["Cooked Eggs", "Peanuts", "Walnuts", "Soybeans", "Whole Grains"],
    keyFunction:
      "Acts as a coenzyme in fatty acid synthesis, amino acid breakdown, and gene expression.",
    deficiencyOrGapNote:
      "Eating raw egg whites binds biotin with avidin, preventing absorption (cooking neutralizes avidin).",
    absorptionTip: "Always cook eggs thoroughly to unlock bioavailable biotin.",
  },
  {
    id: "vit-b9",
    name: "Vitamin B9 (Folate)",
    category: "vitamin",
    categoryLabel: "Water-Soluble B-Vitamin",
    indianFoodExamples: ["Spinach (Palak)", "Methi Greens", "Lentils", "Chickpeas", "Oranges"],
    keyFunction: "Essential for DNA synthesis, rapid cell division, and red blood cell maturation.",
    deficiencyOrGapNote:
      "Critical during early pregnancy to prevent neural tube defects (spina bifida); causes megaloblastic anaemia.",
    absorptionTip:
      "Prolonged boiling in open pots degrades folate; steam or lightly sauté greens to preserve it.",
  },
  {
    id: "vit-b12",
    name: "Vitamin B12 (Cobalamin)",
    category: "vitamin",
    categoryLabel: "Water-Soluble B-Vitamin",
    indianFoodExamples: [
      "Curd & Chaas (variable)",
      "Milk",
      "Paneer",
      "Eggs (if eaten)",
      "Fortified Cereals",
    ],
    keyFunction:
      "Maintains nerve myelin sheaths, prevents neurological degeneration, and produces red blood cells.",
    deficiencyOrGapNote:
      "Widespread among strict vegetarians; unfortified plant foods do not supply active Vitamin B12.",
    absorptionTip:
      "Requires gastric acid and intrinsic factor; antacid medications (PPIs) impair B12 absorption over time.",
  },
  {
    id: "vit-c",
    name: "Vitamin C (Ascorbic Acid)",
    category: "vitamin",
    categoryLabel: "Water-Soluble Antioxidant",
    indianFoodExamples: ["Fresh Amla", "Guava (Amrood)", "Lemons", "Oranges", "Fresh Tomatoes"],
    keyFunction:
      "Catalyzes collagen synthesis, neutralizes free radicals, and magnifies plant non-haem iron uptake.",
    deficiencyOrGapNote:
      "Deficiency causes scurvy, bleeding gums, impaired wound healing, and reduced iron uptake.",
    absorptionTip:
      "Heat and prolonged storage rapidly destroy Vitamin C; consume fresh raw amla or freshly squeezed lemon.",
  },
  {
    id: "vit-d",
    name: "Vitamin D (Cholecalciferol)",
    category: "vitamin",
    categoryLabel: "Fat-Soluble Secosteroid Hormone",
    indianFoodExamples: [
      "Fortified Milk & Oil",
      "Egg Yolks",
      "Oily Fish",
      "Midday Sunlight Synthesis",
    ],
    keyFunction:
      "Promotes calcium absorption in the gut, maintains bone mineral density, and modulates immunity.",
    deficiencyOrGapNote:
      "Very few foods contain natural Vitamin D; deficiency causes osteomalacia, bone aches, and muscle weakness.",
    absorptionTip:
      "Skin synthesis requires direct UVB sunlight on bare skin; window glass blocks UVB completely.",
  },
  {
    id: "vit-e",
    name: "Vitamin E (Tocopherols)",
    category: "vitamin",
    categoryLabel: "Fat-Soluble Antioxidant",
    indianFoodExamples: ["Sunflower Seeds", "Almonds (Badam)", "Groundnuts", "Mustard Oil"],
    keyFunction:
      "Protects cell membrane lipids from free radical peroxidation and supports immune cell membranes.",
    deficiencyOrGapNote:
      "Deficiency is rare but can cause hemolytic anaemia and ataxia in fat malabsorption syndromes.",
    absorptionTip:
      "Eat whole nuts and seeds rather than relying on extracted refined oils that lose Vitamin E during processing.",
  },
  {
    id: "vit-k",
    name: "Vitamin K (Phylloquinone & Menaquinones)",
    category: "vitamin",
    categoryLabel: "Fat-Soluble Vitamin",
    indianFoodExamples: [
      "Green Leafy Vegetables (Palak, Sarson, Methi)",
      "Fermented Foods",
      "Broccoli",
    ],
    keyFunction:
      "Required for synthesizing blood-clotting factors (prothrombin) and activating osteocalcin in bones.",
    deficiencyOrGapNote:
      "Deficiency leads to uncontrolled bleeding; individuals on Warfarin must keep intake consistent.",
    absorptionTip:
      "Pair leafy greens with healthy dietary fats to ensure smooth fat-soluble uptake in the small intestine.",
  },

  // ─── 11 Major Minerals ───
  {
    id: "min-calcium",
    name: "Calcium",
    category: "mineral",
    categoryLabel: "Essential Macro Mineral",
    indianFoodExamples: [
      "Curd & Milk",
      "Ragi (Finger Millet)",
      "Calcium-Set Tofu",
      "White Sesame (Til)",
    ],
    keyFunction:
      "Builds and preserves bones and teeth, enables muscle contraction, and regulates blood clotting.",
    deficiencyOrGapNote: "Deficiency causes osteoporosis, brittle bones, and muscle twitching.",
    absorptionTip:
      "Soak and sprout ragi to deactivate phytates; ensure adequate Vitamin D for intestinal uptake.",
  },
  {
    id: "min-iron",
    name: "Iron",
    category: "mineral",
    categoryLabel: "Essential Trace Mineral",
    indianFoodExamples: [
      "Lentils (Moong, Masoor)",
      "Roasted Chana",
      "Dark Greens",
      "Beetroot",
      "Jaggery (small traces)",
    ],
    keyFunction: "Forms the haem core of haemoglobin, ferrying oxygen across the body.",
    deficiencyOrGapNote:
      "Most common nutritional deficiency in India; causes fatigue, breathlessness, and paleness.",
    absorptionTip:
      "Pair with Vitamin C (lemon, amla) and avoid drinking tea or coffee within 1 hour of meals.",
  },
  {
    id: "min-zinc",
    name: "Zinc",
    category: "mineral",
    categoryLabel: "Essential Trace Mineral",
    indianFoodExamples: ["Whole Pulses", "Pumpkin Seeds", "Whole Grains", "Nuts", "Curd"],
    keyFunction:
      "Drives over 300 metabolic enzymes, repairs DNA, supports childhood growth, and heals wounds.",
    deficiencyOrGapNote:
      "Causes impaired wound healing, loss of taste or smell, skin lesions, and weakened immunity.",
    absorptionTip:
      "Sprouting and fermenting whole pulses significantly reduces phytates that bind zinc.",
  },
  {
    id: "min-iodine",
    name: "Iodine",
    category: "mineral",
    categoryLabel: "Essential Trace Mineral",
    indianFoodExamples: ["Iodized Table Salt", "Fresh Milk", "Seafood"],
    keyFunction:
      "Constituent of thyroxine (T4) and triiodothyronine (T3) regulating energy and metabolic rate.",
    deficiencyOrGapNote:
      "Causes goitre, cold intolerance, slow mental processing, and infant developmental delays.",
    absorptionTip:
      "Use iodized salt in daily cooking, but keep total salt under 5g/day (<2,000mg sodium).",
  },
  {
    id: "min-magnesium",
    name: "Magnesium",
    category: "mineral",
    categoryLabel: "Essential Macro Mineral",
    indianFoodExamples: [
      "Whole Pulses",
      "Almonds",
      "Flaxseeds",
      "Makhana",
      "Whole Millets (Bajra, Jowar)",
    ],
    keyFunction:
      "Calms nerve impulses, relaxes muscles, stabilizes blood sugar, and supports bone crystals.",
    deficiencyOrGapNote:
      "Leads to muscle cramps, fatigue, elevated blood pressure, and sleep disturbances.",
    absorptionTip:
      "Found in the green chlorophyll of leaves and unpolished whole grains; refined flour loses magnesium.",
  },
  {
    id: "min-potassium",
    name: "Potassium",
    category: "mineral",
    categoryLabel: "Essential Electrolyte",
    indianFoodExamples: [
      "Bananas",
      "Potatoes with skin",
      "Coconut Water",
      "Beans (Rajma)",
      "Spinach",
    ],
    keyFunction:
      "Balances cellular fluid pressure, counteracts high sodium, and regulates cardiac rhythm.",
    deficiencyOrGapNote:
      "Low intake elevates hypertension risk; patients with kidney disease may need restriction.",
    absorptionTip:
      "Do not boil vegetables in vast amounts of water and discard the water, as potassium leaches out.",
  },
  {
    id: "min-selenium",
    name: "Selenium",
    category: "mineral",
    categoryLabel: "Essential Trace Mineral",
    indianFoodExamples: [
      "Eggs",
      "Whole Grains",
      "Mushrooms",
      "Fish / Poultry (if eaten)",
      "Selected Seeds",
    ],
    keyFunction:
      "Forms selenoproteins and glutathione peroxidase, shielding thyroid cells from oxidative stress.",
    deficiencyOrGapNote:
      "Soil content dictates plant levels; deficiency impairs thyroid conversion and immune resilience.",
    absorptionTip: "Varied whole grains and eggs provide reliable trace selenium.",
  },
  {
    id: "min-phosphorus",
    name: "Phosphorus",
    category: "mineral",
    categoryLabel: "Essential Macro Mineral",
    indianFoodExamples: ["Curd & Milk", "Lentils", "Whole Wheat", "Nuts & Seeds"],
    keyFunction:
      "Pairs with calcium to form hydroxyapatite bone crystal and forms cellular ATP energy molecules.",
    deficiencyOrGapNote:
      "Abundantly present in protein foods; deficiency is rare, but kidney patients must monitor levels.",
    absorptionTip: "Easily obtained from dairy and pulses.",
  },
  {
    id: "min-copper",
    name: "Copper",
    category: "mineral",
    categoryLabel: "Essential Trace Mineral",
    indianFoodExamples: ["Nuts", "Seeds (Sesame, Sunflower)", "Legumes", "Whole Grains"],
    keyFunction:
      "Aids iron metabolism via ceruloplasmin, supports melanin formation, and stabilizes connective tissue.",
    deficiencyOrGapNote:
      "Deficiency mimics iron deficiency anaemia and causes neurological symptoms.",
    absorptionTip: "High-dose zinc supplements can block copper absorption in the intestines.",
  },
  {
    id: "min-manganese",
    name: "Manganese",
    category: "mineral",
    categoryLabel: "Essential Trace Mineral",
    indianFoodExamples: ["Whole Grains", "Nuts", "Legumes", "Tea Leaves"],
    keyFunction:
      "Cofactor for superoxide dismutase (SOD) and enzymes in amino acid, cholesterol, and carbohydrate metabolism.",
    deficiencyOrGapNote: "Rare in humans consuming whole grains and pulses.",
    absorptionTip: "Easily met by unrefined whole grains and daily dal.",
  },
  {
    id: "min-chromium",
    name: "Chromium",
    category: "mineral",
    categoryLabel: "Trace Mineral",
    indianFoodExamples: ["Whole Grains", "Green Beans", "Broccoli", "Potatoes"],
    keyFunction: "Potentiates insulin action and supports normal glucose and lipid metabolism.",
    deficiencyOrGapNote:
      "Requirements are minute; exact clinical deficiency criteria continue to be researched.",
    absorptionTip: "Present naturally in whole, unrefined cereals and fresh vegetables.",
  },

  // ─── 5 Core Dietary Essentials ───
  {
    id: "ess-protein",
    name: "Dietary Protein & Essential Amino Acids",
    category: "essential_component",
    categoryLabel: "Macronutrient Essential",
    indianFoodExamples: ["Soy Chunks", "Moong Dal", "Roasted Chana", "Curd", "Sattu", "Eggs"],
    keyFunction:
      "Provides the 9 essential amino acids needed to build and repair muscles, organs, skin, enzymes, and antibodies.",
    deficiencyOrGapNote:
      "Widespread in grain-heavy diets; pair cereals with pulses (3:1 ratio) to achieve a complete amino acid profile.",
    absorptionTip:
      "Combine grains and lentils (like dal-chawal or khichdi) to ensure lysine and methionine complement each other.",
  },
  {
    id: "ess-omega3",
    name: "Plant Omega-3 (ALA) & Essential Fats",
    category: "essential_component",
    categoryLabel: "Essential Fatty Acid",
    indianFoodExamples: ["Ground Flaxseed (Alsi)", "Walnuts (Akhrot)", "Mustard Oil (Kachi Ghani)"],
    keyFunction:
      "Supports cell membrane fluidity, modulates cardiovascular inflammation, and supports arterial health.",
    deficiencyOrGapNote:
      "Plant ALA does not equal marine EPA/DHA; human conversion is under 5%, but ALA itself has independent benefits.",
    absorptionTip:
      "Always grind flaxseeds before eating; whole seeds pass through the digestive system undigested.",
  },
  {
    id: "ess-fibre",
    name: "Dietary Fibre (Soluble & Insoluble)",
    category: "essential_component",
    categoryLabel: "Digestive Essential",
    indianFoodExamples: [
      "Millets (Ragi, Jowar, Bajra)",
      "Roasted Chana",
      "Guava",
      "Papaya",
      "Oats",
    ],
    keyFunction:
      "Ferments into short-chain fatty acids (SCFAs) in the colon, buffers blood sugar spikes, and eases bowel motility.",
    deficiencyOrGapNote:
      "Highly processed snacks strip fibre, leading to constipation, blood sugar spikes, and elevated cholesterol.",
    absorptionTip:
      "Gradually increase whole grains and always drink plenty of water to prevent digestive cramping.",
  },
  {
    id: "ess-water",
    name: "Water & Cellular Hydration",
    category: "essential_component",
    categoryLabel: "Vital Fluid Medium",
    indianFoodExamples: [
      "Plain Filtered Water",
      "Spiced Chaas",
      "Fresh Coconut Water",
      "Clear Vegetable Broths",
    ],
    keyFunction:
      "Carries nutrients, regulates body temperature, lubricates joints, and flushes metabolic waste via the kidneys.",
    deficiencyOrGapNote:
      "Mild dehydration causes fatigue, headaches, constipation, and false hunger sensations.",
    absorptionTip:
      "Sip water steadily throughout the day; check urine colour (pale straw yellow indicates good hydration).",
  },
  {
    id: "ess-choline",
    name: "Choline",
    category: "essential_component",
    categoryLabel: "Essential Micronutrient",
    indianFoodExamples: ["Eggs", "Soybeans & Soy Chunks", "Peanuts", "Cauliflower", "Lentils"],
    keyFunction:
      "Synthesizes acetylcholine for memory and muscle control, and produces phospholipids for cell membranes.",
    deficiencyOrGapNote:
      "Deficiency contributes to non-alcoholic fatty liver disease (NAFLD) and memory difficulties.",
    absorptionTip:
      "Eggs and soybeans are the most concentrated sources for vegetarians and non-vegetarians alike.",
  },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 4. THE WHOLE-BODY FOOD ATLAS (15 BODY ORGANS & SYSTEMS)
// Connecting: The Body ➔ The Food ➔ The Surprising Scientific Insight
// Strict Rule: Grade 6-8 reading level, everyday words, one affordable action
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface WholeBodyAtlasEntry {
  id: string;
  organ: string;
  subtitle: string;
  foodFocus: string[];
  keyNutrient: string;
  whereItWorks: string;
  surprisingInsight: string;
  tryThisAction: string;
  clinicalCaution: string;
}

export const WHOLE_BODY_ATLAS: WholeBodyAtlasEntry[] = [
  {
    id: "atlas-brain",
    organ: "Brain",
    subtitle: "The nutrient your nerves cannot make enough of",
    foodFocus: ["Milk", "Curd", "Eggs", "Fortified Foods", "Fish / Poultry"],
    keyNutrient: "Vitamin B12 (Cobalamin)",
    whereItWorks:
      "Supports myelin, the soft protective fatty layer wrapped around nerve wires, and helps build normal red blood cells.",
    surprisingInsight:
      "A person can eat plenty of calories and protein every day yet still have a deep B12 deficiency. Dairy contains B12, but the amount changes depending on how the milk is boiled and fermented.",
    tryThisAction:
      "If you eat mostly or only plant foods, ask your doctor to test your B12 level rather than assuming that eating clean covers it automatically.",
    clinicalCaution:
      "Nerve damage from low B12 can happen silently without causing obvious anaemia first.",
  },
  {
    id: "atlas-eyes",
    organ: "Eyes",
    subtitle: "The vitamin behind low-light vision",
    foodFocus: ["Carrots", "Pumpkin", "Spinach", "Methi Greens", "Papaya"],
    keyNutrient: "Vitamin A & Plant Beta-Carotene",
    whereItWorks:
      "Used by the eye retina to make rhodopsin, the natural light pigment needed to see in dusk and dim light.",
    surprisingInsight:
      "Carrots do not contain finished Vitamin A. They provide beta-carotene, a plant pigment that your liver must convert into active Vitamin A. Because this conversion rate varies in every person, carrots and animal Vitamin A are not nutritionally identical.",
    tryThisAction:
      "Eat a mix of colourful red, yellow, and dark green vegetables with a little healthy fat (like cooking oil) to help your gut absorb beta-carotene.",
    clinicalCaution:
      "Never take high-dose Vitamin A capsules without a doctor's advice, because Vitamin A builds up in your liver and can become toxic.",
  },
  {
    id: "atlas-blood",
    organ: "Blood",
    subtitle: "Why iron intake is not the whole story",
    foodFocus: ["Kala Chana", "Lentils (Moong, Masoor)", "Rajma", "Amla", "Guava", "Lemon"],
    keyNutrient: "Non-Haem Iron + Vitamin C",
    whereItWorks:
      "Iron sits at the center of haemoglobin in red blood cells to catch oxygen from your lungs and carry it to every organ.",
    surprisingInsight:
      "Plant iron (non-haem iron) is naturally locked by plant compounds and absorbs at a low rate (2% to 10%). Fresh Vitamin C changes this iron into a form your gut takes in 3 times faster. But tiredness alone cannot tell you if you have low iron.",
    tryThisAction:
      "Always squeeze fresh lemon juice over cooked dal or chana right before eating. If you feel tired all the time, get a simple ferritin blood test before buying iron pills.",
    clinicalCaution:
      "Drinking chai or coffee during or right after lunch stops iron absorption by over 50%.",
  },
  {
    id: "atlas-heart",
    organ: "Heart",
    subtitle: "A mineral that helps regulate electrical signals",
    foodFocus: ["Lentils", "Beans", "Potatoes", "Bananas", "Leafy Greens"],
    keyNutrient: "Potassium",
    whereItWorks:
      "Regulates fluid balance across cells and helps carry the electrical pulses that make your heart muscle beat steadily.",
    surprisingInsight:
      "More potassium is not automatically safer or better. While healthy kidneys flush extra potassium easily, people with weakened kidneys or those taking certain blood pressure pills can build up dangerously high potassium.",
    tryThisAction:
      "Eat a variety of lentils, vegetables, and fruit every day instead of relying on any single 'heart-clearing' food or miracle drink.",
    clinicalCaution:
      "Anyone with kidney trouble or on heart medications must check potassium limits with their doctor.",
  },
  {
    id: "atlas-bones",
    organ: "Bones",
    subtitle: "Your skeleton is living tissue",
    foodFocus: ["Milk", "Curd", "Ragi (Finger Millet)", "Calcium-Set Tofu", "Sesame Seeds"],
    keyNutrient: "Calcium, Phosphorus & Vitamin D",
    whereItWorks:
      "Builds and maintains the hard mineral framework of bones and teeth, with a tiny amount helping muscles contract.",
    surprisingInsight:
      "Your bones are not dry sticks; they are living tissue continuously broken down and rebuilt every single day. Bone health depends on far more than calcium alone — Vitamin D, dietary protein, magnesium, and walking or lifting weight are just as vital.",
    tryThisAction:
      "Review your daily food for both calcium and vitamin D sources, and take a daily brisk walk instead of relying only on calcium tablets.",
    clinicalCaution:
      "Calcium cannot enter your bone matrix without adequate Vitamin D in your blood.",
  },
  {
    id: "atlas-muscles",
    organ: "Muscles",
    subtitle: "Repair happens beyond the gym",
    foodFocus: ["Soy Chunks", "Yellow Moong Dal", "Curd", "Milk", "Eggs", "Sattu"],
    keyNutrient: "Dietary Protein & Essential Amino Acids",
    whereItWorks:
      "Supplies amino acids, the tiny bricks needed to rebuild torn muscle fibers, make body enzymes, and protect organs.",
    surprisingInsight:
      "Eating an enormous amount of protein in one single meal does not replace total daily nutrition, proper sleep, and muscle rest. Your body cannot store excess protein as muscle without regular movement and total calorie balance.",
    tryThisAction:
      "Spread your protein across your regular daily meals — for example, a bowl of dal at lunch, roasted chana for an evening snack, and curd at dinner.",
    clinicalCaution:
      "Protein powders with unverified herbs or hidden steroids can cause acute liver and kidney strain.",
  },
  {
    id: "atlas-gut",
    organ: "Gut",
    subtitle: "Some food becomes fuel for your microbes",
    foodFocus: ["Chana", "Rajma", "Whole Oats", "Ragi", "Apples", "Papaya"],
    keyNutrient: "Dietary Fibre & Prebiotics",
    whereItWorks:
      "Passes undigested through the stomach into the large intestine, where friendly gut microbes ferment it into healthy fatty acids.",
    surprisingInsight:
      "Dietary fibre is not just roughage to help bowel movements. When friendly microbes ferment soluble fibre, they create short-chain fatty acids that nourish your colon wall and help calm inflammation.",
    tryThisAction:
      "Increase fibre gradually over a few weeks and drink plenty of water. Jumping from zero fibre to huge bowls of raw bran suddenly can cause painful gas and cramps.",
    clinicalCaution:
      "Sudden huge jumps in dry fibre without enough water can cause stomach blockage.",
  },
  {
    id: "atlas-liver",
    organ: "Liver",
    subtitle: "The organ doing the real detox work",
    foodFocus: ["Lentils", "Seasonal Vegetables", "Whole Grains", "Fresh Garlic", "Water"],
    keyNutrient: "Quality Protein, Choline & Antioxidants",
    whereItWorks:
      "Breaks down old hormones, transforms waste products into safe compounds, produces digestive bile, and packages fats.",
    surprisingInsight:
      "Detox teas, green powders, and juice cleanses are not needed to make a healthy liver 'flush toxins.' Your liver cleans your body 24 hours a day on its own using real nutrients.",
    tryThisAction:
      "Protect your liver by eating home-cooked balanced meals, limiting alcohol, and avoiding unregulated 'liver detox' herbal supplements that can cause liver inflammation.",
    clinicalCaution:
      "Herbal detox supplements are one of the leading causes of supplement-induced liver injury seen by doctors.",
  },
  {
    id: "atlas-thyroid",
    organ: "Thyroid",
    subtitle: "A tiny gland with a major job",
    foodFocus: ["Iodized Table Salt", "Milk & Curd", "Cooked Eggs", "Sea Fish"],
    keyNutrient: "Iodine & Selenium",
    whereItWorks:
      "The butterfly-shaped gland in your neck uses iodine to make thyroid hormones, which control your body speed, warmth, and energy burn.",
    surprisingInsight:
      "Both too little iodine and too much iodine can cause thyroid trouble. Eating massive amounts of dried seaweed or high-dose kelp supplements can trigger thyroid malfunction rather than protect it.",
    tryThisAction:
      "Simply use standard iodized salt in daily home cooking, while strictly keeping total salt under one level teaspoon (5 grams) per day.",
    clinicalCaution:
      "Do not take high-dose iodine tablets or kelp powders to treat thyroid conditions without a doctor's test.",
  },
  {
    id: "atlas-skin",
    organ: "Skin",
    subtitle: "The building blocks behind collagen",
    foodFocus: ["Guava", "Citrus Fruit", "Amla", "Lentils", "Pumpkin Seeds"],
    keyNutrient: "Vitamin C, Zinc & Dietary Amino Acids",
    whereItWorks:
      "Enables the chemical cross-linking that builds collagen, the springy protein mesh that holds your skin, joints, and gums firm.",
    surprisingInsight:
      "An expensive Vitamin C facial serum or an exotic 'glowing skin' berry cannot fix an underlying dietary protein or vitamin deficiency. Healthy skin starts from the inside with basic daily nutrition.",
    tryThisAction:
      "Eat affordable local Vitamin C foods like guava or amla with balanced daily pulses before spending money on beauty supplements.",
    clinicalCaution:
      "Collagen powders cannot bypass normal digestion; your gut breaks them down into plain amino acids just like dal or eggs.",
  },
  {
    id: "atlas-kidneys",
    organ: "Kidneys",
    subtitle: "Why more water is not always better",
    foodFocus: ["Clean Drinking Water", "Fresh Chaas", "Everyday Balanced Meals"],
    keyNutrient: "Water & Balanced Electrolytes",
    whereItWorks:
      "Filters about 150 to 180 liters of blood daily, balancing sodium, potassium, and fluid levels while flushing waste out through urine.",
    surprisingInsight:
      "Drinking endless liters of water does not make healthy kidneys work better. Forcing down excess water can dilute blood sodium (a dangerous condition called hyponatremia). Your body water needs depend on your sweat, climate, and activity.",
    tryThisAction:
      "Drink when you feel thirsty, check that your urine is a pale straw yellow, and follow your doctor's specific fluid advice if you have heart or kidney conditions.",
    clinicalCaution:
      "People with congestive heart failure or advanced kidney disease often need strict medical fluid limits.",
  },
  {
    id: "atlas-pancreas",
    organ: "Pancreas",
    subtitle: "Glucose is more than a sugar problem",
    foodFocus: ["Whole Grains", "Kala Chana", "Vegetables", "Unsweetened Curd"],
    keyNutrient: "Complex Carbohydrates & Intact Food Fibre",
    whereItWorks:
      "Produces insulin to guide blood sugar into muscle and liver cells, and releases digestive enzymes into your small intestine.",
    surprisingInsight:
      "How quickly blood sugar rises does not depend on a single food item alone. The whole plate matters: the portion size, food texture, cooking method, physical movement, and whether protein and fibre are eaten together.",
    tryThisAction:
      "Always fill half your plate with vegetables and lentils before eating rice or roti to naturally buffer blood sugar rises.",
    clinicalCaution:
      "No single 'miracle seed' or herbal juice can replace medical treatment, physical activity, and portion control for diabetes.",
  },
  {
    id: "atlas-nerves",
    organ: "Nerves",
    subtitle: "Why vitamin B12 deserves special attention",
    foodFocus: ["Curd", "Milk", "Eggs", "Fortified Foods", "Fish"],
    keyNutrient: "Active Vitamin B12",
    whereItWorks:
      "Protects the myelin insulation around nerve pathways that run down your spinal cord to your fingertips and toes.",
    surprisingInsight:
      "Untreated B12 deficiency can cause numbness, pins-and-needles in the feet, balance problems, and memory fog. Waiting for severe weakness is risky because prolonged nerve damage can become permanent.",
    tryThisAction:
      "If you take diabetes medications (like metformin) or daily antacid pills for acid reflux, have your doctor check your B12 levels annually, as these medicines reduce B12 absorption.",
    clinicalCaution:
      "Plant foods like spirulina contain inactive B12 analogues that can show up on simple tests but do not protect human nerves.",
  },
  {
    id: "atlas-reproduction",
    organ: "Reproductive Health",
    subtitle: "Nutrition before pregnancy matters",
    foodFocus: ["Dark Green Methi & Palak", "Lentils", "Chickpeas", "Fortified Cereals"],
    keyNutrient: "Folate (Vitamin B9) & Folic Acid",
    whereItWorks:
      "Drives the rapid copying of DNA required whenever new cells are born, especially during the earliest weeks of embryonic development.",
    surprisingInsight:
      "The critical window when an unborn baby's brain and spinal cord form closes by day 28 of pregnancy — often before a woman even realizes she is pregnant.",
    tryThisAction:
      "Anyone planning or likely to become pregnant should consult a doctor to start a daily folic acid supplement (400 mcg) before conception, alongside folate-rich greens and lentils.",
    clinicalCaution:
      "Food folate alone is often insufficient to reach protective blood levels needed to prevent neural tube birth defects.",
  },
  {
    id: "atlas-immunity",
    organ: "Immune System",
    subtitle: "More supplements do not mean more immunity",
    foodFocus: ["Mixed Dal", "Seasonal Vegetables", "Guava", "Peanuts", "Curd"],
    keyNutrient: "Vitamins A, C, D, B6, B12, Zinc & Protein",
    whereItWorks:
      "Fuels white blood cells, antibody production, and the protective skin and mucosal barriers that keep out harmful bacteria and viruses.",
    surprisingInsight:
      "Fixing a real nutritional deficiency helps restore your body's natural defense line. But swallowing huge extra doses of vitamins when you are already nourished does not build a 'super immune shield' or prevent seasonal colds.",
    tryThisAction:
      "Focus on everyday balanced home meals, 7 to 8 hours of restful sleep, and up-to-date vaccinations rather than buying expensive 'immunity booster' syrups.",
    clinicalCaution:
      "Commercial products promising to 'boost' immunity are marketing claims; true overactive immunity causes autoimmune illness.",
  },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 5. THE UNUSUAL FOOD SCIENCE (6 DEDICATED EDITORIAL FEATURES)
// Deep-dive food chemistry that explains real biological mechanisms
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface FoodScienceFeature {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  scienceMechanism: string;
  everydayFoods: string[];
  surprisingReality: string;
  practicalRule: string;
  clinicalCaution?: string;
  clinicalDisclaimer: string;
}

export const FOOD_SCIENCE_FEATURES: FoodScienceFeature[] = [
  {
    id: "sci-lemon-effect",
    title: "The Lemon Effect",
    subtitle: "Why Vitamin C multiplies plant iron absorption by 3x",
    category: "Nutrient Bioavailability",
    scienceMechanism:
      "Plant iron exists as ferric iron (Fe3+), which forms insoluble clumps in the gut and passes out unabsorbed. Ascorbic acid (Vitamin C) acts as an electron donor, reducing ferric iron to ferrous iron (Fe2+), which easily passes through the intestinal wall into your blood.",
    everydayFoods: [
      "Fresh Lemon Juice",
      "Raw Amla",
      "Guava",
      "Tomatoes",
      "Cooked Dal",
      "Kala Chana",
    ],
    surprisingReality:
      "Adding a simple squeeze of fresh lemon or eating a slice of amla with your dal turns a poorly absorbed vegetarian meal into a biologically effective iron source. However, Vitamin C is sensitive to heat, so squeeze lemon only after the dal has finished boiling.",
    practicalRule:
      "Always add lemon juice to warm dal at the table, never during rolling boiling. Pair dark greens with raw tomatoes or citrus fruit.",
    clinicalDisclaimer:
      "While the lemon effect improves daily iron uptake, it is not an instant cure for clinical iron-deficiency anaemia, which requires medical diagnosis and iron therapy.",
  },
  {
    id: "sci-resistant-starch",
    title: "The Starch That Changes After Cooling",
    subtitle: "How overnight chilled rice and potatoes feed your gut microbes",
    category: "Food Chemistry & Digestion",
    scienceMechanism:
      "When starchy foods like rice or potatoes are cooked and then allowed to cool in the refrigerator, the gelatinized amylose chains recrystallize tightly into a structure called Type-3 Resistant Starch (RS3). Digestive enzymes in your stomach and small intestine cannot break this tight crystal, allowing it to reach the colon intact.",
    everydayFoods: ["Cooked and Chilled Rice", "Boiled Cold Potatoes", "Cold Roti", "Poha"],
    surprisingReality:
      "Cooling cooked rice lowers its immediate glycemic impact because less starch turns into quick glucose. In your colon, gut bacteria ferment this resistant starch into butyrate, a compound that calms inflammation and strengthens the gut lining.",
    practicalRule:
      "Cool cooked rice quickly and store it in an airtight container in the refrigerator below 4°C within 1 hour. When reheating, ensure it is piping hot. Never leave cooked rice sitting at warm room temperature for hours, which allows harmful Bacillus cereus bacteria to grow.",
    clinicalDisclaimer:
      "Chilling rice does not turn it into a zero-calorie food or replace medical management for diabetes; portion control remains essential.",
  },
  {
    id: "sci-soaking-advantage",
    title: "The Soaking Advantage",
    subtitle: "Breaking down antinutrients in lentils, beans, and seeds",
    category: "Preparation Science",
    scienceMechanism:
      "Raw legumes (chana, rajma, lentils) contain phytic acid and enzyme inhibitors that naturally protect the seed from insects. Phytic acid tightly binds to dietary iron, zinc, and calcium, creating insoluble salts that human digestive enzymes cannot cleave. Soaking in warm water activates natural plant phytase enzymes that break down phytic acid.",
    everydayFoods: ["Rajma (Kidney Beans)", "Kala Chana", "Whole Moong", "Ragi", "Sesame Seeds"],
    surprisingReality:
      "Soaking rajma or chana overnight (8 to 12 hours) and throwing away the soaking water washes away gas-causing oligosaccharides and reduces phytic acid by up to 30% to 50%. This makes the minerals far more available for your body to absorb.",
    practicalRule:
      "Soak hard beans in ample water for at least 8 to 12 hours. Always discard the soaking water and cook the beans in fresh water. Light sprouting after soaking cuts antinutrients even further.",
    clinicalDisclaimer:
      "Soaking improves digestibility and mineral release, but does not completely eliminate all phytates; varying your protein sources remains vital.",
  },
  {
    id: "sci-escaping-nutrients",
    title: "The Nutrients That Escape Digestion",
    subtitle: "Why the numbers on a nutrition label do not equal what your body absorbs",
    category: "Food Matrix Science",
    scienceMechanism:
      "Food is not a loose bag of chemicals; it has a physical structure called the food matrix. Plant cell walls are made of tough dietary cellulose and pectin. If a seed or nut is swallowed without being completely crushed, digestive enzymes cannot breach the microscopic cell walls to reach the fats and proteins inside.",
    everydayFoods: [
      "Whole Flaxseeds (Alsi)",
      "Whole Almonds (Badam)",
      "Sesame Seeds (Til)",
      "Corn Kernels",
    ],
    surprisingReality:
      "When people swallow whole flaxseeds, nearly 100% of the valuable omega-3 fat passes through the digestive tract untouched and exits in the stool. Similarly, chewing whole raw almonds releases roughly 20% to 30% less fat and calories than eating smooth almond butter.",
    practicalRule:
      "Always grind flaxseeds into a powder before adding them to atta or curd. Chew whole nuts slowly and thoroughly, or soak almonds to soften their rigid cell structures.",
    clinicalCaution:
      "Keep ground flaxseed in an airtight jar in the refrigerator; once the seed wall is cracked, healthy omega-3 oils oxidize quickly if left in warm light.",
    clinicalDisclaimer:
      "Measured nutrient content in a lab test shows what is present in the food, not what enters your bloodstream.",
  },
  {
    id: "sci-drink-interference",
    title: "When a Healthy Drink Interferes with a Nutrient",
    subtitle: "Why tea and coffee tannins block plant iron by over 50%",
    category: "Nutrient Inhibitors",
    scienceMechanism:
      "Black tea, milk chai, and coffee are rich in polyphenols, catechins, and chlorogenic acids. When these compounds encounter non-haem plant iron in the stomach, they bind with the iron to form dense, insoluble iron-tannate complexes that cannot cross the intestinal wall.",
    everydayFoods: [
      "Masala Chai",
      "Filter Coffee",
      "Green Tea",
      "Black Tea",
      "Midday Dal-Chawal",
      "Roti-Sabzi",
    ],
    surprisingReality:
      "Drinking a hot cup of chai along with a plate of dal-chawal or poha cuts iron absorption by 50% to 70%. For someone with borderline low iron or fatigue, this habit alone can keep ferritin levels stubbornly low despite eating iron-rich foods.",
    practicalRule:
      "Enjoy your chai or coffee, but keep a minimum gap of 60 minutes before or after your major meals (lunch and dinner). This simple timing habit protects your iron intake without giving up your favourite beverage.",
    clinicalDisclaimer:
      "This iron-blocking effect applies primarily to plant non-haem iron. People with confirmed haemochromatosis (iron overload) may benefit from tannins, but anyone with anaemia should enforce the 1-hour rule.",
  },
  {
    id: "sci-fermented-vs-probiotic",
    title: "Fermented Does Not Automatically Mean Probiotic",
    subtitle: "Understanding the difference between cultured food and clinically proven strains",
    category: "Microbiome Science",
    scienceMechanism:
      "Fermentation is an ancient culinary method where wild microorganisms (lactic acid bacteria, wild yeasts) transform sugars into acids or alcohol. A true 'probiotic', however, is defined scientifically as a specific, identified bacterial strain consumed in sufficient numbers that survives stomach acid and produces proven clinical health outcomes in human trials.",
    everydayFoods: [
      "Homemade Dahi (Curd)",
      "Idli & Dosa Batter",
      "Traditional Pickles",
      "Kanji",
      "Commercial Probiotic Drinks",
    ],
    surprisingReality:
      "Homemade curd is a wonderful, nutritious food with live bacteria, but the exact bacterial species change from home to home and batch to batch. Most wild bacteria in homemade curd are killed by strong stomach hydrochloric acid before reaching the colon. It is nourishing, but not a standardized medical probiotic treatment.",
    practicalRule:
      "Eat homemade dahi, buttermilk (chaas), and naturally fermented foods for their protein, taste, and gentle digestive ease. But do not expect homemade curd alone to cure chronic gastrointestinal disorders or replace prescribed medical treatments.",
    clinicalDisclaimer:
      "If a doctor recommends probiotics after a course of antibiotics or for irritable bowel symptoms, use the specific clinical strain recommended rather than assuming ordinary dahi is identical.",
  },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 6. INTERACTIVE FEATURE: WHAT HAPPENS INSIDE YOUR BODY?
// Connects an Everyday Food to a Specific Body System
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface FoodJourneyConnection {
  foodId: string;
  foodName: string;
  systemId: string;
  systemName: string;
  keyNutrients: string[];
  whatHappensInside: string;
  surprisingInsight: string;
  practicalTip: string;
  limitationNote: string;
}

export const FOOD_JOURNEY_FOODS = [
  { id: "curd", name: "Curd (Dahi)", iconName: "Milk" },
  { id: "chana", name: "Roasted Chana", iconName: "Nut" },
  { id: "amla", name: "Amla", iconName: "Citrus" },
  { id: "flaxseed", name: "Flaxseed (Alsi)", iconName: "Sparkles" },
  { id: "ragi", name: "Ragi (Finger Millet)", iconName: "Wheat" },
  { id: "soy", name: "Soy Chunks", iconName: "Beef" },
  { id: "salt", name: "Iodized Salt", iconName: "Flame" },
  { id: "spinach", name: "Spinach (Palak)", iconName: "Leaf" },
] as const;

export const FOOD_JOURNEY_SYSTEMS = [
  { id: "nerves", name: "Brain & Nervous System", iconName: "Brain" },
  { id: "blood", name: "Blood Formation & Oxygen", iconName: "Activity" },
  { id: "bones", name: "Bones & Muscle Strength", iconName: "Shield" },
  { id: "gut", name: "Digestive System & Microbes", iconName: "HeartHandshake" },
  { id: "heart", name: "Heart & Blood Pressure", iconName: "Heart" },
  { id: "liver", name: "Liver & Waste Processing", iconName: "ShieldAlert" },
  { id: "skin", name: "Skin & Connective Tissue", iconName: "Sparkle" },
  { id: "thyroid", name: "Thyroid & Metabolism", iconName: "Zap" },
] as const;

export const FOOD_JOURNEY_CONNECTIONS: Record<string, FoodJourneyConnection> = {
  "curd-nerves": {
    foodId: "curd",
    foodName: "Curd (Dahi)",
    systemId: "nerves",
    systemName: "Brain & Nervous System",
    keyNutrients: ["Vitamin B12 (variable)", "Calcium", "Choline"],
    whatHappensInside:
      "Supplies variable amounts of Vitamin B12, which helps build the fatty myelin sheath that insulates nerve fibers and keeps nerve signals moving swiftly.",
    surprisingInsight:
      "Because boiling milk and different curd-making methods alter B12 levels, curd alone cannot guarantee adequate B12 intake for strict vegetarians.",
    practicalTip:
      "Include curd regularly as an accessible food, but get an annual B12 checkup if your diet is strictly plant-based.",
    limitationNote:
      "Educational information only. Curd cannot cure clinical peripheral neuropathy or established B12 deficiency.",
  },
  "curd-bones": {
    foodId: "curd",
    foodName: "Curd (Dahi)",
    systemId: "bones",
    systemName: "Bones & Muscle Strength",
    keyNutrients: ["Calcium (~120 mg/100g)", "Bioavailable Phosphorus", "Protein"],
    whatHappensInside:
      "The calcium and phosphorus in curd are held in a gentle lactic acid matrix that your small intestine absorbs easily to nourish teeth and bone density.",
    surprisingInsight:
      "Calcium cannot build strong bones on its own. If you have low Vitamin D or never do weight-bearing walking, the absorbed calcium cannot enter the bone matrix effectively.",
    practicalTip:
      "Pair a bowl of fresh homemade curd with sunlight exposure or checked Vitamin D levels.",
    limitationNote:
      "Curd is a foundational dietary building block, not a quick treatment for osteoporosis.",
  },
  "curd-gut": {
    foodId: "curd",
    foodName: "Curd (Dahi)",
    systemId: "gut",
    systemName: "Digestive System & Microbes",
    keyNutrients: ["Lactic Acid", "Fermented Milk Proteins", "Live Microorganisms"],
    whatHappensInside:
      "During milk fermentation, bacteria break lactose down into lactic acid, making curd far easier to digest than raw milk for people with mild lactose sensitivity.",
    surprisingInsight:
      "Most wild bacterial cultures in everyday dahi do not survive harsh stomach acid to permanently colonize the colon; they nourish gut chemistry transiently.",
    practicalTip:
      "Enjoy fresh chaas (buttermilk) with roasted cumin powder after lunch for gentle digestive refreshment.",
    limitationNote:
      "Curd is soothing for general digestion, but cannot replace prescribed antibiotics or treat gut infections.",
  },
  "chana-blood": {
    foodId: "chana",
    foodName: "Roasted Chana",
    systemId: "blood",
    systemName: "Blood Formation & Oxygen",
    keyNutrients: ["Non-Haem Iron (~5 mg/100g)", "Folate (B9)", "Plant Protein"],
    whatHappensInside:
      "Provides plant iron and folate, two essential raw materials required by your bone marrow to create new red blood cells and haemoglobin.",
    surprisingInsight:
      "Chana contains natural phytates that slow down iron uptake. Squeezing lemon juice over roasted chana turns the iron into a form that absorbs much more readily.",
    practicalTip:
      "Snack on roasted chana with a squeeze of fresh lemon or a fresh amla fruit instead of drinking tea with it.",
    limitationNote:
      "Plant iron does not absorb as quickly as animal iron. It is not an instant cure for severe clinical anaemia.",
  },
  "chana-gut": {
    foodId: "chana",
    foodName: "Roasted Chana",
    systemId: "gut",
    systemName: "Digestive System & Microbes",
    keyNutrients: ["Dietary Fibre (~12g/100g)", "Resistant Starch", "Prebiotic Oligosaccharides"],
    whatHappensInside:
      "The firm outer seed coat passes slowly into the large intestine, where friendly gut microbes ferment it into short-chain fatty acids that nourish colon cells.",
    surprisingInsight:
      "Roasted chana with its brown skin left on provides twice as much beneficial insoluble fibre as dehusked yellow dal.",
    practicalTip:
      "Always eat roasted chana with its natural brown skin intact and drink a glass of water to help the fibre swell smoothly.",
    limitationNote:
      "People with irritable bowels or sudden fibre jumps may experience mild bloating if portion sizes are increased too quickly.",
  },
  "amla-blood": {
    foodId: "amla",
    foodName: "Amla",
    systemId: "blood",
    systemName: "Blood Formation & Oxygen",
    keyNutrients: ["Vitamin C (~600 mg/100g fresh)", "Polyphenols", "Gallic Acid"],
    whatHappensInside:
      "Ascorbic acid from fresh amla reduces ferric iron from grains and pulses into soluble ferrous iron, multiplying iron uptake across the gut wall.",
    surprisingInsight:
      "Amla itself is not remarkably rich in iron. Its real power is acting as an absorption catalyst that unlocks iron from the dal and roti eaten alongside it.",
    practicalTip:
      "Grating a quarter of an amla into daily dal or raita immediately improves the mineral payoff of that entire meal.",
    limitationNote:
      "Amla is not a cure for anaemia by itself; it acts as an absorption catalyst for iron-rich meals.",
  },
  "amla-skin": {
    foodId: "amla",
    foodName: "Amla",
    systemId: "skin",
    systemName: "Skin & Connective Tissue",
    keyNutrients: ["Vitamin C", "Tannins", "Flavonoids"],
    whatHappensInside:
      "Vitamin C is an essential co-factor for the enzymes prolyl and lysyl hydroxylase, which link collagen strands together to maintain skin and gum elasticity.",
    surprisingInsight:
      "Because amla contains natural tannins that shield Vitamin C, it loses less Vitamin C when heated compared to lemons or oranges.",
    practicalTip:
      "Eat one small fresh amla in season or use dried amla powder in home cooking instead of buying expensive collagen capsules.",
    limitationNote:
      "Amla supports natural collagen building, but cannot reverse normal aging or replace sun protection.",
  },
  "flaxseed-heart": {
    foodId: "flaxseed",
    foodName: "Flaxseed (Alsi)",
    systemId: "heart",
    systemName: "Heart & Blood Pressure",
    keyNutrients: ["Alpha-Linolenic Acid (ALA Omega-3)", "Soluble Mucilage Fibre", "Lignans"],
    whatHappensInside:
      "ALA helps modulate cellular inflammatory signaling, while the soluble gel-forming fibre binds to digestive bile to support healthy blood cholesterol levels.",
    surprisingInsight:
      "Swallowing whole seeds does almost nothing for your heart because the tough hull cannot be broken by stomach acid. It must be ground to release its omega-3 oils.",
    practicalTip:
      "Roast raw flaxseeds lightly on low heat for 2 minutes, grind into a powder, and store in an airtight container in your fridge.",
    limitationNote:
      "Plant ALA does not replace marine EPA/DHA completely, nor does it replace prescribed cardiovascular medications.",
  },
  "ragi-bones": {
    foodId: "ragi",
    foodName: "Ragi (Finger Millet)",
    systemId: "bones",
    systemName: "Bones & Muscle Strength",
    keyNutrients: ["Calcium (~344 mg/100g)", "Phosphorus", "Magnesium"],
    whatHappensInside:
      "Ragi has roughly 30 times more calcium than white rice, providing the structural mineral crystals needed to renew bone and tooth mineral density.",
    surprisingInsight:
      "Ragi also contains phytates that can tie up some of its calcium. Soaking, sprouting, or naturally fermenting ragi batter unlocks up to 30% more absorbable calcium.",
    practicalTip:
      "Make fermented ragi dosas or soak ragi flour before cooking ragi mudde or porridge to increase mineral uptake.",
    limitationNote:
      "Ragi is an outstanding grain, but strong bones also require adequate Vitamin D, dietary protein, and weight-bearing movement.",
  },
  "soy-bones": {
    foodId: "soy",
    foodName: "Soy Chunks",
    systemId: "bones",
    systemName: "Bones & Muscle Strength",
    keyNutrients: ["Complete Protein (~52g/100g dry)", "Non-Haem Iron", "Potassium"],
    whatHappensInside:
      "Supplies a concentrated burst of all 9 essential amino acids needed by skeletal muscle to repair microscopic tears and maintain lean body tissue.",
    surprisingInsight:
      "Per rupee, defatted soy chunks provide more pure protein than almost any other vegetarian food in the local Indian grocery store.",
    practicalTip:
      "Boil soy chunks in salted water for 5 minutes, squeeze out the cloudy water thoroughly, and rinse before cooking to improve taste and digestion.",
    limitationNote:
      "Soy chunks are not a whole-diet replacement; combine them with varied vegetables, whole grains, and healthy fats.",
  },
  "salt-thyroid": {
    foodId: "salt",
    foodName: "Iodized Salt",
    systemId: "thyroid",
    systemName: "Thyroid & Metabolism",
    keyNutrients: ["Iodine (15 to 30 ppm)", "Sodium Chloride"],
    whatHappensInside:
      "Your thyroid gland traps absorbed iodide atoms to synthesize thyroxine (T4) and triiodothyronine (T3), the master hormones regulating body temperature and metabolic rate.",
    surprisingInsight:
      "Iodine easily evaporates if table salt is left in open, moist bowls near a hot stove. Always keep your iodized salt in a tightly closed, opaque container.",
    practicalTip:
      "Use regular iodized table salt, but strictly keep total daily intake under 5 grams (one level teaspoon) across all cooking to protect blood pressure.",
    limitationNote:
      "Iodized salt prevents dietary iodine deficiency; it is not a cure for established Hashimoto's thyroiditis or Graves' disease.",
  },
  "spinach-blood": {
    foodId: "spinach",
    foodName: "Spinach (Palak)",
    systemId: "blood",
    systemName: "Blood Formation & Oxygen",
    keyNutrients: ["Folate (B9)", "Non-Haem Iron", "Carotenoids"],
    whatHappensInside:
      "Provides folate needed for cellular DNA duplication and red blood cell maturation in the bone marrow, preventing large immature blood cells.",
    surprisingInsight:
      "Spinach contains high levels of oxalates that bind tightly to its own iron and calcium. Cooking or steaming spinach breaks down oxalates and makes its minerals much more accessible.",
    practicalTip:
      "Lightly cook or steam spinach rather than eating large bowls of raw spinach leaves, and squeeze fresh lemon juice over it before serving.",
    limitationNote:
      "Spinach is rich in nutrients, but because of oxalates, it is not an instant cure for iron deficiency without an overall balanced diet.",
  },
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 7. THE RECURRING EDITORIAL SERIES (5 CORE WEBSITE THEMES)
// Pillars to keep readers returning for honest nutrition science
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface EditorialSeries {
  id: string;
  title: string;
  theme: string;
  description: string;
  exampleFood: string;
  exampleServing: string;
  whatItProvides: string;
  importantLimitation: string;
  coreRule: string;
}

export const EDITORIAL_SERIES: EditorialSeries[] = [
  {
    id: "series-10-rupee",
    title: "The ₹10 Nutrition Discovery",
    theme: "Affordable Nutrition Realities",
    description:
      "Reveals what a small, cheap serving of an accessible Indian staple actually contributes to your body — without exaggerating health claims.",
    exampleFood: "Roasted Bengal Gram (Kala Chana)",
    exampleServing: "₹10 packet (approx. 40–50 grams)",
    whatItProvides:
      "Provides roughly 8 to 10 grams of plant protein, 5 grams of dietary fibre, and beneficial folate without needing refrigeration.",
    importantLimitation:
      "Its iron is non-haem iron with low baseline absorption, and it provides zero Vitamin B12. It is a smart snack, not a total meal replacement.",
    coreRule:
      "Celebrate real nutrient density on a budget without pretending any cheap food meets your whole day's nutritional requirements.",
  },
  {
    id: "series-hidden-deficiency",
    title: "The Hidden Deficiency Files",
    theme: "Public Health Realities",
    description:
      "Honest investigations into the 6 major nutritional gaps in Indian diets: Vitamin B12, Iron, Vitamin D, Calcium, Iodine, and Folate.",
    exampleFood: "Curd (Dahi) for Vitamin B12",
    exampleServing: "1 bowl (150g)",
    whatItProvides:
      "Provides modest, variable amounts of Vitamin B12 alongside high-quality protein and bioavailable calcium.",
    importantLimitation:
      "Curd cannot reliably cure an existing clinical B12 deficiency. Anyone with long-term numbness, brain fog, or low levels needs medical assessment.",
    coreRule:
      "Distinguish between everyday dietary maintenance and clinical deficiency that requires medical testing and treatment.",
  },
  {
    id: "series-food-chemistry",
    title: "Food Chemistry in Real Life",
    theme: "Kitchen Science Mechanisms",
    description:
      "Explains why everyday cooking methods, fermentation, cooling, and nutrient pairings change how much nutrition your gut actually absorbs.",
    exampleFood: "Fresh Lemon Juice on Cooked Dal",
    exampleServing: "Half a fresh lemon squeezed at the table",
    whatItProvides:
      "Active ascorbic acid that changes plant non-haem ferric iron into soluble ferrous iron, multiplying absorption up to 300%.",
    importantLimitation:
      "Vitamin C breaks down in rolling boiling heat. Squeezing lemon into a bubbling pot on the stove destroys the active vitamin.",
    coreRule:
      "Connect the microscopic chemical mechanism to a simple, actionable cooking habit anyone can do at their kitchen table.",
  },
  {
    id: "series-marketing-microscope",
    title: "Nutrition Marketing Under the Microscope",
    theme: "Evidence-Based Myth Busting",
    description:
      "Testing aggressive commercial claims about detox teas, superfoods, expensive protein bars, and 'sugar-free' health snacks against peer-reviewed science.",
    exampleFood: "Commercial 'Liver Detox' Teas",
    exampleServing: "1 expensive herbal teabag",
    whatItProvides:
      "Warm water and herbal aroma; zero clinical proof of removing toxins from body tissues.",
    importantLimitation:
      "Your liver cleans your blood continuously without outside detox teas. Some unregulated herbal blends have caused acute medical liver injury.",
    coreRule:
      "Empower readers to save money by prioritizing gold-standard evidence over fancy wellness marketing jargon.",
  },
  {
    id: "series-forgotten-prep",
    title: "The Forgotten Preparation Factor",
    theme: "Culinary Bioavailability",
    description:
      "Explores ancient Indian culinary wisdom: soaking, sprouting, slow cooking, safe cooling, and airtight storage through the lens of modern nutritional science.",
    exampleFood: "Soaked and Sprouted Whole Moong",
    exampleServing: "1 small cup soaked for 8–12 hours",
    whatItProvides:
      "Activates plant phytase enzymes, breaking down phytic acid by 30% to 50% and doubling free iron and zinc availability.",
    importantLimitation:
      "Sprouts grown in warm, humid kitchens must be washed thoroughly and cooked lightly to prevent harmful bacterial contamination.",
    coreRule: "Show that how you prepare food is just as important as what food you buy.",
  },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 8. THE 4 GOLDEN QUESTIONS THAT DEFINE EVERY ARTICLE
// Supreme Law: Understand the food. Understand the nutrient. Understand the evidence.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface WebsiteRuleQuestion {
  number: number;
  question: string;
  explanation: string;
  exampleInPractice: string;
}

export const WEBSITE_RULE_QUESTIONS: WebsiteRuleQuestion[] = [
  {
    number: 1,
    question: "What is the scientific fact?",
    explanation:
      "Identify the exact nutrient, its biological mechanism, and what gold-standard peer-reviewed evidence (ICMR-NIN, PubMed) actually confirms.",
    exampleInPractice:
      "Vitamin B12 is essential for nerve myelin preservation and healthy red blood cell production.",
  },
  {
    number: 2,
    question: "What can an ordinary Indian eat?",
    explanation:
      "Provide accessible, affordable, culturally familiar food examples that anyone can buy at their local neighbourhood market.",
    exampleInPractice:
      "Curd, fresh milk, paneer, eggs, or verified fortified foods for reliable intake.",
  },
  {
    number: 3,
    question: "What is the limitation?",
    explanation:
      "Explain nutrient variability, portion realities, gut absorption barriers, and what the food cannot do (no miracle cures or disease reversals).",
    exampleInPractice:
      "Curd alone has variable B12 content and cannot reliably reverse established clinical B12 deficiency.",
  },
  {
    number: 4,
    question: "What should the reader do?",
    explanation:
      "Offer one clear, proportionate, affordable action that passes the 12-year-old test without requiring expensive products or complicated routines.",
    exampleInPractice:
      "If you eat predominantly plant foods, ask your doctor for a serum B12 blood test rather than assuming diet covers it.",
  },
];

export const FOOD_PAGE_POSITIONING = {
  headline: "Nutrition Intelligence: Go Beyond Ordinary Food Tips",
  statement:
    "Explore every part of the human body through the science of everyday food. Discover hidden nutrients, understand common dietary gaps, uncover surprising food chemistry and learn how to nourish your body intelligently — without spending unnecessarily.",
  icmrCitation:
    "ICMR–NIN Dietary Guidelines for Indians, 2024 & Indian Food Composition Tables (IFCT)",
  icmrLink: "https://nin.res.in/dietaryguidelines/pdfjs/locale/DGI_2024.pdf",
};
