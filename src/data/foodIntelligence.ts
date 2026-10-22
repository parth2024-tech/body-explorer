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
