// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// The Living Body Atlas — Food Facts & Clinical Nutrition Database
// What Each Food Really Does: Nutrients, Proven Benefits, Myth Checks,
// Situational Guidance, and Clinical Exclusions for Indian Foods.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export type NutritionLevel = 1 | 2 | 3 | 4;

export interface NutritionLevelMeta {
  level: NutritionLevel;
  title: string;
  tagline: string;
  description: string;
  targetShare: string;
  badgeClass: string;
  borderClass: string;
  bgClass: string;
  accentColor: string;
  recommendation: string;
}

export const NUTRITION_LEVELS: Record<NutritionLevel, NutritionLevelMeta> = {
  1: {
    level: 1,
    title: "Tier 1: Foundational Whole Foods",
    tagline: "Nutrient-Dense Unrefined Staples (NOVA Group 1)",
    description:
      "Unprocessed or minimally processed whole foods with maximal micronutrient density per calorie, essential polyphenols, prebiotic fibers, and healthy fatty acid profiles.",
    targetShare: "60% - 70% of intake",
    badgeClass: "bg-teal-500/20 text-teal-300 border-teal-500/40",
    borderClass: "border-teal-500/30 hover:border-teal-500/60",
    bgClass: "bg-teal-500/5",
    accentColor: "#00E5C4",
    recommendation: "Nutritional cornerstone. Emphasize diverse plant and lean protein sources.",
  },
  2: {
    level: 2,
    title: "Tier 2: Minimally Processed Staples",
    tagline: "Complex Energy & Structural Nutrients",
    description:
      "Whole intact grains, legumes, and traditional dairy or clean animal proteins providing sustained glycemic release, satiety, and essential amino acids.",
    targetShare: "25% - 30% of intake",
    badgeClass: "bg-sky-500/20 text-sky-300 border-sky-500/40",
    borderClass: "border-sky-500/30 hover:border-sky-500/60",
    bgClass: "bg-sky-500/5",
    accentColor: "#38BDF8",
    recommendation: "Essential for sustained metabolic energy and tissue repair.",
  },
  3: {
    level: 3,
    title: "Tier 3: Calorie-Dense Foods for Moderation",
    tagline: "Portion-Sensitive Culinary Ingredients",
    description:
      "Foods offering valuable culinary context or specific nutrients, but characterized by high caloric density, concentrated saturated fats, or added sodium requiring mindful intake.",
    targetShare: "< 10% - 15% of intake",
    badgeClass: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    borderClass: "border-amber-500/30 hover:border-amber-500/60",
    bgClass: "bg-amber-500/5",
    accentColor: "#F5A623",
    recommendation: "Consume mindfully in measured portion sizes.",
  },
  4: {
    level: 4,
    title: "Tier 4: Ultra-Processed Formulations",
    tagline: "Industrial Formulations & Synthetic Additives (NOVA Group 4)",
    description:
      "Hyper-palatable formulations containing refined starches, added sugars, industrial trans fats, and cosmetic emulsifiers associated with metabolic deregulation.",
    targetShare: "Strictly minimize (< 5%)",
    badgeClass: "bg-red-500/20 text-red-300 border-red-500/40",
    borderClass: "border-red-500/30 hover:border-red-500/60",
    bgClass: "bg-red-500/5",
    accentColor: "#FC3D21",
    recommendation:
      "Minimize or substitute with whole-food alternatives to protect metabolic and cardiovascular health.",
  },
};

export interface FoodFactEntry {
  id: string;
  foodName: string;
  hindiName: string;
  level: NutritionLevel;
  category:
    "millet" | "supergreen" | "fat_oil" | "sweetener" | "fermented" | "spice_herb" | "vegetable";
  categoryLabel: string;
  situationTag: string; // e.g., "If you're on BP medication...", "If you're fasting for a festival..."
  system: "gut" | "metabolism" | "heart" | "brain" | "muscle_bone" | "liver";
  systemLabel: string;

  // 1. What it contains (nutrients in plain language)
  whatItContains: string;

  // 2. Proven benefit (with evidence tier and source link)
  provenBenefit: string;
  evidenceTier:
    | "Tier 1 Gold (Clinical Trial / Meta-Analysis)"
    | "Tier 2 Silver (Cohort Studies / ICMR Guidelines)";
  sourceCitation: string;
  sourceUrl: string;

  // 3. Unproven or overhyped claims ("myth check")
  mythCheck: {
    claim: string;
    reality: string;
  };

  // 4. Who should limit it (clinical cautions: kidney disease, meds, pregnancy, etc.)
  whoShouldLimit: string[];

  // 5. Best pairing & Indian-context serving
  bestPairing: string;
  indianServingContext: string;

  // 6. Do / Don't / Ask a doctor if
  guidance: {
    do: string;
    dont: string;
    askDoctorIf: string;
  };

  lastReviewed: string;
  readingGrade: string;

  hi: {
    foodName: string;
    whatItContains: string;
    provenBenefit: string;
    mythClaim: string;
    mythReality: string;
    whoShouldLimit: string;
    bestPairing: string;
    do: string;
    dont: string;
    askDoctorIf: string;
  };
}

// Backwards-compatibility alias
export type FoodTip = FoodFactEntry;

export const FOOD_FACTS: FoodFactEntry[] = [
  {
    id: "food-ragi",
    foodName: "Ragi (Finger Millet / Nachni)",
    hindiName: "रागी / नाचनी",
    level: 1,
    category: "millet",
    categoryLabel: "Ancient Millet",
    situationTag: "If you have prediabetes or bone density concerns...",
    system: "metabolism",
    systemLabel: "Glycemic Stability & Bone Matrix",
    whatItContains:
      "The highest calcium concentration among all cereals (~344 mg per 100g, over 30x higher than white rice), rich in slow-digesting resistant starch, polyphenols, and essential methionine.",
    provenBenefit:
      "Delays duodenal carbohydrate absorption, attenuating postprandial glycemic excursions by up to 28% in Type 2 diabetes trials while replenishing skeletal calcium stores.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation:
      "ICMR-NIN Indian Food Composition Tables & Journal of Food Science and Technology (PMID: 24497746)",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/24497746/",
    mythCheck: {
      claim: "Ragi flour can be eaten raw in morning smoothies for accelerated fat loss.",
      reality:
        "Raw ragi contains enzyme-inhibiting phytates and tannins that block calcium and iron absorption; it must always be soaked, cooked, sprouted, or fermented.",
    },
    whoShouldLimit: [
      "Advanced Chronic Kidney Disease (CKD stage 3-5, due to high potassium/phosphorus load)",
      "Individuals prone to recurrent calcium oxalate kidney stones",
    ],
    bestPairing:
      "Ragi Roti or Mudde paired with protein-rich Sambar or sprouted dal; squeeze fresh lemon juice to maximize non-heme iron uptake.",
    indianServingContext:
      "1-2 medium rotis or 1 small mudde ball (50-60g dry flour) for lunch 3-4 days per week.",
    guidance: {
      do: "Soak flour or ferment ragi batter for 8-12 hours before steaming (idli/dosa) to degrade phytates and increase bioavailable iron.",
      dont: "Don't consume heavy unfermented ragi porridge right before bedtime if you suffer from gastroesophageal reflux (GERD).",
      askDoctorIf:
        "Ask your nephrologist if you have an estimated GFR < 45 mL/min before incorporating daily high-mineral millets.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 7 (Plain Language)",
    hi: {
      foodName: "रागी (नाचनी)",
      whatItContains:
        "अनाजों में सबसे अधिक कैल्शियम (~344 mg/100g), धीमे पचने वाला फाइबर, पॉलीफेनॉल्स और जरूरी अमीनो एसिड्स।",
      provenBenefit:
        "रक्त में शुगर के अचानक बढ़ने को रोकता है और हड्डियों को प्राकृतिक कैल्शियम प्रदान करता है।",
      mythClaim: "रागी को कच्चा स्मूदी में पीने से तेजी से वजन घटता है।",
      mythReality:
        "कच्ची रागी में फाइटेट्स होते हैं जो कैल्शियम सोखने से रोकते हैं; इसे हमेशा पकाकर या किण्वित करके खाएं।",
      whoShouldLimit: "गंभीर किडनी रोग (CKD) के मरीज और जिन्हें ऑक्सालेट पथरी की समस्या हो।",
      bestPairing: "सांभर, दाल या कढ़ी के साथ रागी रोटी; साथ में नींबू का रस मिलाएं।",
      do: "रागी के आटे को पकाने से पहले कुछ घंटे भिगोएं या खमीर उठाएं ताकि पोषक तत्व आसानी से पचें।",
      dont: "रात को सोने से ठीक पहले भारी रागी का दलिया न खाएं यदि अपच की समस्या रहती है।",
      askDoctorIf:
        "यदि किडनी की बीमारी है, तो पोटैशियम स्तर की जांच के बाद ही डॉक्टर से पूछकर मात्रा तय करें।",
    },
  },
  {
    id: "food-moringa",
    foodName: "Moringa (Drumstick Leaves / Sahjan)",
    hindiName: "सहजन / मोरिंगा",
    level: 1,
    category: "supergreen",
    categoryLabel: "Indigenous Supergreen",
    situationTag: "If you're on blood pressure medication...",
    system: "heart",
    systemLabel: "Endothelial & Arterial Health",
    whatItContains:
      "Concentrated beta-carotene, Vitamin C, quercetin, chlorogenic acid, and intact vegetable protein (9.4g per 100g fresh leaves) with abundant potassium and magnesium.",
    provenBenefit:
      "Isothiocyanates and chlorogenic acid promote arterial vasodilation, modest reductions in systolic blood pressure (~4-6 mmHg), and cellular antioxidant protection.",
    evidenceTier: "Tier 2 Silver (Cohort Studies / ICMR Guidelines)",
    sourceCitation:
      "ICMR-NIN Bioactive Research & Phytotherapy Research Clinical Evaluation (PMID: 17089328)",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/17089328/",
    mythCheck: {
      claim: "Moringa permanently cures 300 diseases and replaces all prescription medications.",
      reality:
        "Moringa is a nutrient-dense traditional vegetable, not an acute pharmaceutical substitute for prescribed anti-hypertensives or insulin.",
    },
    whoShouldLimit: [
      "Pregnant women (drumstick roots/bark contain alkaloid spirochin which can stimulate uterine spasms; leaves should be consumed only in culinary moderation)",
      "Patients taking thyroid hormone replacement (Levothyroxine) or blood thinners",
    ],
    bestPairing:
      "Sauté fresh moringa leaves into yellow moong dal tadka or cook tender pods in traditional rasam with black pepper and 1/2 tsp ghee.",
    indianServingContext:
      "1/2 to 1 cup fresh leaves cooked in dal or sabzi 2-3 times per week, or 2 drumstick pods in sambar.",
    guidance: {
      do: "Add moringa leaves during the final 5 minutes of cooking dal to preserve delicate heat-sensitive Vitamin C.",
      dont: "Don't consume unregulated high-dose commercial root or bark extracts marketed online as miracle cleansers.",
      askDoctorIf:
        "Ask your physician if you take anti-hypertensive drugs (e.g. Amlodipine), as moringa has mild additive hypotensive actions.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "सहजन के पत्ते (मोरिंगा)",
      whatItContains:
        "विटामिन C, बीटा-कैरोटीन, क्वेरसेटिन, क्लोरोजेनिक एसिड, पादप प्रोटीन, पोटैशियम और मैग्नीशियम।",
      provenBenefit:
        "धमनियों को लचीला रखता है, रक्तचाप को सामान्य करने में मदद करता है और सूजन घटाता है।",
      mythClaim:
        "मोरिंगा 300 बीमारियों को जड़ से मिटा देता है और BP की दवा की जरूरत खत्म कर देता है।",
      mythReality:
        "यह एक पौष्टिक साग है, लेकिन डॉक्टर द्वारा दी गई ब्लड प्रेशर या शुगर की दवा का विकल्प नहीं है।",
      whoShouldLimit:
        "गर्भवती महिलाएं (जड़ और छाल का सेवन पूरी तरह वर्जित है; पत्ते केवल सामान्य भोजन में खाएं)।",
      bestPairing: "मूंग दाल तड़का या सांभर में सहजन के पत्ते और फली; घी और काली मिर्च के साथ।",
      do: "पत्तों को दाल में अंत के 5 मिनट में पकाएं ताकि विटामिन C नष्ट न हो।",
      dont: "बाजार में मिलने वाले अनियंत्रित सहजन के जड़ या छाल के कैप्सूल बिना डॉक्टरी सलाह न लें।",
      askDoctorIf:
        "यदि आप थायराइड या BP की दवा ले रहे हैं, तो नियमित सेवन से पहले डॉक्टर को सूचित करें।",
    },
  },
  {
    id: "food-jaggery",
    foodName: "Jaggery (Desi Gur)",
    hindiName: "देसी गुड़",
    level: 3,
    category: "sweetener",
    categoryLabel: "Traditional Unrefined Sugar",
    situationTag: "If you have diabetes or insulin resistance...",
    system: "metabolism",
    systemLabel: "Glycemic Index & Mineral Matrix",
    whatItContains:
      "Concentrated whole sugarcane syrup retaining trace iron (2.6 mg/100g), magnesium, potassium, and phenolics, alongside 70% to 85% sucrose and 10% to 15% fructose/glucose.",
    provenBenefit:
      "Provides natural minerals and zero chemical bleaching residues (unlike sulphur-treated white crystal sugar) and stimulates digestive enzyme secretion post-meal.",
    evidenceTier: "Tier 2 Silver (Cohort Studies / ICMR Guidelines)",
    sourceCitation:
      "Indian Council of Medical Research (ICMR) Dietary Guidelines & Food Chemistry (PMID: 20627641)",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/20627641/",
    mythCheck: {
      claim:
        "Jaggery does not raise blood sugar and can be eaten without limit by diabetic individuals.",
      reality:
        "Jaggery has a high Glycemic Index (~84) and is ~80% sucrose. It produces virtually the same rapid postprandial glucose spike as table sugar.",
    },
    whoShouldLimit: [
      "Individuals with Type 1 or Type 2 Diabetes Mellitus",
      "Patients with Non-Alcoholic Fatty Liver Disease (NAFLD) or elevated triglycerides",
    ],
    bestPairing:
      "Pair 1 small cube (5-10g) with roasted chana (Bengal gram) or roasted sesame seeds (til) to buffer gastric absorption through protein and fat.",
    indianServingContext:
      "Limit to 1 small coin or cube (max 5-10g) after lunch during cold winter months for healthy adults.",
    guidance: {
      do: "Choose dark brown, artisanal organic jaggery free of synthetic chemical clarifiers (sodium hydrosulphite) that produce artificial bright yellow tints.",
      dont: "Don't replace white sugar with large ladlefuls of jaggery thinking it is calorie-free or safe for uncontrolled hyperglycemia.",
      askDoctorIf:
        "Ask your diabetologist how to account for jaggery in your carbohydrate allotment if managing glycemic control.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "देसी गुड़",
      whatItContains:
        "प्राकृतिक सुक्रोज (70-85%), साथ में आयरन (2.6 mg/100g), मैग्नीशियम, पोटैशियम और एंटीऑक्सीडेंट्स।",
      provenBenefit:
        "सफेद चीनी की तुलना में इसमें सल्फर और केमिकल नहीं होते और यह प्राकृतिक खनिज प्रदान करता है।",
      mythClaim: "गुड़ खाने से शुगर नहीं बढ़ती और शुगर के मरीज जितना चाहें खा सकते हैं।",
      mythReality:
        "गुड़ का ग्लाइसेमिक इंडेक्स बहुत अधिक (~84) होता है; यह सफेद चीनी की तरह ही तेजी से शुगर बढ़ाता है।",
      whoShouldLimit: "डायबिटीज (शुगर) के मरीज और फैटी लिवर या बढ़े हुए ट्राइग्लिसराइड वाले लोग।",
      bestPairing:
        "भुने हुए चने या तिल के साथ एक छोटा टुकड़ा; प्रोटीन और फाइबर शुगर स्पाइक को धीमा करते हैं।",
      do: "गहरे भूरे रंग का प्राकृतिक गुड़ चुनें; हल्के पीले रासायनिक रंग वाले गुड़ से बचें।",
      dont: "वजन घटाने के दौरान यह सोचकर ज्यादा गुड़ न खाएं कि यह वजन नहीं बढ़ाता।",
      askDoctorIf:
        "डायबिटीज होने पर गुड़ खाने से पहले अपने डॉक्टर या डायटीशियन से मात्रा जरूर पूछें।",
    },
  },
  {
    id: "food-ghee",
    foodName: "Desi Ghee (A2 Bilona Clarified Butter)",
    hindiName: "देसी गाय का घी (बिलौना)",
    level: 3,
    category: "fat_oil",
    categoryLabel: "High-Heat Cooking Lipid",
    situationTag: "If you're cooking over high heat or managing cholesterol...",
    system: "gut",
    systemLabel: "Intestinal Epithelium & Lipid Profile",
    whatItContains:
      "Short- and medium-chain fatty acids including butyric acid (~3-4%), fat-soluble vitamins (A, D, E, K2), and conjugated linoleic acid (CLA), with casein and lactose milk solids removed.",
    provenBenefit:
      "Butyrate provides direct cellular fuel to colonocytes, strengthening intestinal mucosal barrier tight junctions. High smoke point (250°C / 485°F) resists thermal degradation and toxic aldehyde formation.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation:
      "Journal of Clinical and Diagnostic Research (PMID: 26816892) & American Heart Association (AHA) Fats Consensus",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/26816892/",
    mythCheck: {
      claim: "Ghee instantly clogs heart arteries and should be 100% eliminated from all diets.",
      reality:
        "In clinical moderation (1-2 tsp/day), ghee provides stable fats without industrial trans-fats; excessive intake (>3 tbsp/day) however raises circulating ApoB and LDL cholesterol.",
    },
    whoShouldLimit: [
      "Individuals with familial hypercholesterolemia or elevated baseline LDL-C (>160 mg/dL)",
      "Patients with acute pancreatitis or active gallstone obstruction",
    ],
    bestPairing:
      "Melt 1 teaspoon over warm whole-grain khichdi, dal tadka, or steamed bajra to facilitate the uptake of fat-soluble vitamins and curcumin.",
    indianServingContext:
      "1 to 2 teaspoons (5-10 ml) daily distributed across cooked lunch and dinner.",
    guidance: {
      do: "Use traditional bilona ghee as a thermally stable cooking fat for home Indian tempering (tadka) instead of repeatedly reheated seed oils.",
      dont: "Don't pour unlimited spoonfuls into your meals or bulletproof coffees if your blood tests reveal high cardiovascular risk markers.",
      askDoctorIf:
        "Ask your cardiologist if you have existing coronary artery disease or high coronary calcium scores before altering saturated fat intake.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 7 (Plain Language)",
    hi: {
      foodName: "देसी घी (बिलौना)",
      whatItContains:
        "ब्यूटायरेट (लघु-श्रृंखला वसा), विटामिन A, D, E, K2 और CLA। लैक्टोज और कैसिइन से पूरी तरह मुक्त।",
      provenBenefit:
        "आंतों की परत को मजबूत करता है और उच्च तापमान पर जलकर हानिकारक टॉक्सिन्स नहीं बनाता।",
      mythClaim: "घी खाने से तुरंत हार्ट अटैक आ जाता है और इसे पूरी तरह बंद कर देना चाहिए।",
      mythReality:
        "सीमित मात्रा (1-2 चम्मच रोज) में यह सुरक्षित और गुणकारी है; बहुत अधिक मात्रा (>3 चम्मच) LDL कोलेस्ट्रॉल बढ़ा सकती है।",
      whoShouldLimit:
        "हाई कोलेस्ट्रॉल (LDL > 160 mg/dL), पित्त की पथरी या पैंक्रियाटाइटिस के मरीज।",
      bestPairing:
        "दाल, खिचड़ी या रोटी पर 1 चम्मच घी; यह हल्दी और मसालों के अवशोषण को 10 गुना बढ़ाता है।",
      do: "रिफाइंड तेलों के बजाय घर की दाल और सब्जी में तड़के के लिए देसी घी का उपयोग करें।",
      dont: "वजन कम करने की चाह में बिना सोचे-समझे चम्मच भरकर घी न पिएं।",
      askDoctorIf:
        "यदि आपको दिल की बीमारी या स्टेंट लगा है, तो अपने कार्डियोलॉजिस्ट से दैनिक सीमा तय करवाएं।",
    },
  },
  {
    id: "food-pickles",
    foodName: "Traditional Indian Pickles (Naturally Fermented Achaar)",
    hindiName: "पारंपरिक किण्वित अचार",
    level: 3,
    category: "fermented",
    categoryLabel: "Probiotic Condiment",
    situationTag: "If you're on blood pressure medication or salt restriction...",
    system: "gut",
    systemLabel: "Gastric Motility & Sodium Balance",
    whatItContains:
      "Wild lactic acid bacteria (Lactobacillus plantarum, L. brevis), bioavailable organic acids, cold-pressed mustard oil polyphenols, fenugreek/fennel bioactives, and high sodium content (~800-1200 mg/tbsp).",
    provenBenefit:
      "Authentic sun-fermented lacto-pickles act as natural carminative condiments, stimulating salivary amylase, stomach acid production, and gut motility.",
    evidenceTier: "Tier 2 Silver (Cohort Studies / ICMR Guidelines)",
    sourceCitation:
      "Frontiers in Microbiology (PMID: 30079053) & ICMR Traditional Fermented Foods Survey",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/30079053/",
    mythCheck: {
      claim: "Traditional homemade achaar is pure poison that directly destroys heart valves.",
      reality:
        "Artisanal naturally fermented pickles are rich in live probiotic cultures and digestive enzymes; the actual physiological risk is exclusively the concentrated sodium load if overconsumed.",
    },
    whoShouldLimit: [
      "Individuals with Hypertension or Congestive Heart Failure on salt-restricted diets (<1,500 mg sodium/day)",
      "Patients with Stage 3-5 Chronic Kidney Disease or active fluid retention/edema",
    ],
    bestPairing:
      "A small dab alongside plain curd rice, khichdi, or dal-chawal to stimulate sluggish appetite and support digestion.",
    indianServingContext:
      "Strictly 1 level teaspoon (5-10g) as a flavorful condiment, not as a main vegetable dish.",
    guidance: {
      do: "Choose traditional sun-ripened, mustard-oil cured pickles over factory-bottled industrial varieties packed with synthetic acetic acid and chemical preservatives.",
      dont: "Don't scoop excess oil and salt brine pooling at the bottom of the jar; take only the fermented vegetable or mango piece.",
      askDoctorIf:
        "Ask your doctor if you take diuretic medications (e.g. Torsemide) or ACE inhibitors before adding high-sodium fermented condiments.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "पारंपरिक देसी अचार",
      whatItContains:
        "प्राकृतिक लैक्टिक एसिड बैक्टीरिया (प्रोबायोटिक्स), सरसों के तेल के पॉलीफेनॉल्स, मेथी-सौंफ और नमक।",
      provenBenefit:
        "पाचन रसों और लार को उत्तेजित करता है और आंतों में अच्छे बैक्टीरिया का संतुलन बनाता है।",
      mythClaim: "अचार पूरी तरह जहर है और इससे तुरंत दिल का दौरा पड़ता है।",
      mythReality:
        "धूप में पका देसी अचार एक गुणकारी प्रोबायोटिक है; मुख्य समस्या सिर्फ इसमें मौजूद अधिक नमक की है।",
      whoShouldLimit: "हाई ब्लड प्रेशर (BP), सूजन (एडिमा) और किडनी की बीमारी से पीड़ित मरीज।",
      bestPairing: "दही-चावल, खिचड़ी या सादी दाल-रोटी के साथ आधा चम्मच।",
      do: "सिरके वाले डिब्बाबंद अचार के बजाय पारंपरिक धूप में पके तेल-मसाले के अचार का छोटा टुकड़ा खाएं।",
      dont: "अचार के जार के नीचे जमा हुआ अधिक तेल और नमक का गाढ़ा मसाला न खाएं।",
      askDoctorIf:
        "यदि आप BP की दवा या पेशाब बढ़ाने वाली दवा ले रहे हैं, तो डॉक्टर से नमक की सीमा पूछें।",
    },
  },
  {
    id: "food-coconut-oil",
    foodName: "Virgin Coconut Oil (Cold-Pressed Nariyal Tel)",
    hindiName: "कोल्ड-प्रेस्ड नारियल का तेल",
    level: 3,
    category: "fat_oil",
    categoryLabel: "Medium-Chain Triglyceride Oil",
    situationTag: "If you're managing cardiovascular risk or liver health...",
    system: "metabolism",
    systemLabel: "Hepatic Portal Oxidation & Lipids",
    whatItContains:
      "Medium-chain triglycerides (MCTs) including lauric acid (C12:0, ~48%), caprylic acid, and capric acid, with zero cholesterol and heat-stable saturated fatty bonds.",
    provenBenefit:
      "Lauric acid converts in the gut into monolaurin, which displays antibacterial and antifungal properties; MCTs are absorbed directly into the portal vein for rapid hepatic oxidation rather than lymphatic storage.",
    evidenceTier: "Tier 2 Silver (Cohort Studies / ICMR Guidelines)",
    sourceCitation:
      "Cochrane Database of Systematic Reviews & American Journal of Clinical Nutrition (PMID: 32679803)",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/32679803/",
    mythCheck: {
      claim: "Drinking raw coconut oil every morning instantly burns stubborn belly fat.",
      reality:
        "Coconut oil is 90% saturated fat and delivers ~120 calories per tablespoon; while MCTs metabolize efficiently, excess calories still result in hepatic lipid storage and LDL elevation.",
    },
    whoShouldLimit: [
      "Individuals with elevated baseline LDL cholesterol (>130 mg/dL) or ApoB",
      "Patients with Non-Alcoholic Steatohepatitis (NASH) or familial lipid disorders",
    ],
    bestPairing:
      "Traditional South Indian tadka for sambar, aviyal, or thoran using 1 teaspoon of virgin oil with mustard seeds, curry leaves, and green chilies.",
    indianServingContext:
      "1 to 2 teaspoons (5-10 ml) per person when used as a cooking medium for coastal regional recipes.",
    guidance: {
      do: "Choose unrefined, cold-pressed virgin coconut oil with a fresh natural aroma rather than chemically bleached and deodorized (RBD) copra oils.",
      dont: "Don't ingest large undiluted tablespoons on an empty stomach; use it culinary-style as part of balanced, fibrous meals.",
      askDoctorIf:
        "Ask your physician if your lipid panel reveals elevated LDL-C before substituting other polyunsaturated oils with coconut oil.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 7 (Plain Language)",
    hi: {
      foodName: "कोल्ड-प्रेस्ड नारियल तेल",
      whatItContains:
        "मीडियम-चेन ट्राइग्लिसराइड्स (MCTs), लॉरिक एसिड (~48%), कैप्रिक एसिड और प्राकृतिक एंटीऑक्सीडेंट्स।",
      provenBenefit:
        "लॉरिक एसिड आंतों में रोगाणुओं से लड़ता है और यह तेल शरीर को तुरंत ऊर्जा देने में सक्षम है।",
      mythClaim: "सुबह खाली पेट नारियल तेल पीने से पेट की चर्बी अपने आप पिघल जाती है।",
      mythReality:
        "नारियल तेल में 90% संतृप्त वसा (सैचुरेटेड फैट) और प्रति चम्मच 120 कैलोरी होती है; अधिक पीने से कोलेस्ट्रॉल बढ़ सकता है।",
      whoShouldLimit: "हाई कोलेस्ट्रॉल (LDL), हृदय रोग और फैटी लिवर के मरीज।",
      bestPairing: "सांभर, नारियल की चटनी या कढ़ी में राई और करी पत्ते के साथ हल्का तड़का।",
      do: "केमिकल से साफ किए गए तेल के बजाय कच्चा घानी (कोल्ड-प्रेस्ड) शुद्ध नारियल तेल इस्तेमाल करें।",
      dont: "वजन घटाने के भ्रम में इसे दवा की तरह चम्मच भरकर खाली पेट न पिएं।",
      askDoctorIf:
        "यदि आपका कोलेस्ट्रॉल बढ़ा हुआ है, तो डॉक्टर से सलाह लेकर ही इसे भोजन में शामिल करें।",
    },
  },
  {
    id: "food-millets-bajra",
    foodName: "Millets - Bajra & Foxtail (Pearl Millet & Kangni)",
    hindiName: "बाजरा और कंगनी (मिलेट्स)",
    level: 1,
    category: "millet",
    categoryLabel: "Low-Glycemic Ancient Grains",
    situationTag: "If you're fasting for a festival or managing blood sugar...",
    system: "metabolism",
    systemLabel: "Insulin Sensitivity & Satiety",
    whatItContains:
      "Complex slow-digesting starches, high dietary fiber (11-13%), magnesium (~114 mg/100g), non-heme iron, zinc, and B-complex vitamins (niacin, thiamine).",
    provenBenefit:
      "Magnesium acts as an essential cofactor for over 300 enzymes including insulin signaling kinases; low glycemic index prevents sharp post-meal blood sugar surges.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation:
      "Frontiers in Nutrition Systematic Review & Meta-Analysis (PMID: 34395510) & ICMR-NIN Millet Taskforce",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/34395510/",
    mythCheck: {
      claim: "Millets are dry and suppress thyroid function in every person who eats them.",
      reality:
        "While uncooked pearl millet contains goitrogenic glycosylflavones, thorough culinary boiling, soaking, and consuming adequate dietary iodine (iodized salt) completely inactivates goitrogens.",
    },
    whoShouldLimit: [
      "Individuals with unmanaged Hypothyroidism (if consuming uncooked/unfermented bajra in very high amounts daily without iodine)",
      "Severe irritable bowel syndrome (IBS) prone to sudden bloating from high coarse fiber",
    ],
    bestPairing:
      "Bajra Roti served with garlic-curd chutney or green moong dal; Foxtail millet pulao cooked with seasonal vegetables and roasted cumin raita.",
    indianServingContext:
      "1-2 medium bajra rotis (50-60g dry flour) or 1 cup cooked foxtail millet for lunch 2-4 times a week.",
    guidance: {
      do: "Transition to millets gradually: begin by blending 30% millet flour with whole wheat or consuming millet grains 2-3 times weekly to allow your gut microbiome to adapt.",
      dont: "Don't consume undercooked or unwashed pearl millet flour if you have documented Hashimoto's thyroiditis or low dietary iodine.",
      askDoctorIf:
        "Ask your endocrinologist if you have active thyroid disorders on high-dose levothyroxine before adopting a 100% millet-exclusive grain diet.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 7 (Plain Language)",
    hi: {
      foodName: "बाजरा और कंगनी (मिलेट्स)",
      whatItContains:
        "धीमा पचने वाला जटिल स्टार्च, फाइबर (11-13%), मैग्नीशियम (114 mg/100g), आयरन और जिंक।",
      provenBenefit:
        "मैग्नीशियम इंसुलिन को ठीक से काम करने में मदद करता है और भोजन के बाद शुगर को स्थिर रखता है।",
      mythClaim: "मिलेट्स खाने से हर व्यक्ति का थायराइड खराब हो जाता है।",
      mythReality:
        "कच्चे बाजरे में कुछ तत्व होते हैं, लेकिन अच्छी तरह पकाने और आयोडीन युक्त नमक के साथ खाने पर यह पूरी तरह सुरक्षित है।",
      whoShouldLimit:
        "गंभीर हाइपोथायरायडिज्म के मरीज (यदि वे बिना पकाए या बिना आयोडीन के बहुत ज्यादा बाजरा खाते हैं) और गंभीर IBS वाले।",
      bestPairing: "मूंग दाल, कढ़ी या लहसुन-दही की चटनी के साथ बाजरे की ताजी रोटी।",
      do: "शुरुआत में गेहूं के आटे में 30% बाजरा मिलाकर खाएं ताकि पेट की आंतों को आदत पड़ सके।",
      dont: "एक ही दिन में अचानक 100% मिलेट्स पर न जाएं, इससे पेट में भारीपन या गैस हो सकती है।",
      askDoctorIf:
        "यदि थायराइड की बीमारी है और दवा चल रही है, तो डॉक्टर से सही मात्रा की जानकारी लें।",
    },
  },
  {
    id: "food-amla",
    foodName: "Amla (Indian Gooseberry / Phyllanthus emblica)",
    hindiName: "आंवला",
    level: 1,
    category: "supergreen",
    categoryLabel: "High-Potency Vitamin C Matrix",
    situationTag: "Monsoon & winter immunity protection...",
    system: "liver",
    systemLabel: "Hepatic Protection & Iron Chelation",
    whatItContains:
      "One of the richest natural sources of Vitamin C (~600-800 mg per 100g, 20x higher than orange juice), heat-stable tannins (emblicanin A and B), gallic acid, and ellagic acid.",
    provenBenefit:
      "Tannin-bound Vitamin C resists oxidation during gentle cooking; stimulates endothelial nitric oxide and dramatically converts non-heme plant iron into absorbable ferrous ions.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation:
      "European Journal of Clinical Nutrition (PMID: 21490637) & ICMR-NIN Vitamin C Tables",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/21490637/",
    mythCheck: {
      claim: "Drinking raw amla juice purges all toxins from your blood within 7 days.",
      reality:
        "Your liver and kidneys perform all biochemical detoxification; amla simply supplies antioxidant cofactors that protect liver cells from free radical damage.",
    },
    whoShouldLimit: [
      "Individuals taking prescription antiplatelet or anticoagulant medications (Warfarin, Clopidogrel, Aspirin)",
      "Patients scheduled for surgery within 14 days due to mild platelet aggregation inhibition",
    ],
    bestPairing:
      "Grate 1 fresh amla into fresh mint-coriander chutney, or eat fresh amla alongside dal-rice to boost plant iron absorption by 400%.",
    indianServingContext:
      "1 whole fresh amla (or 15-20 ml freshly pressed juice diluted in a glass of water) once daily in the morning.",
    guidance: {
      do: "Consume fresh whole amla fruit or cold-pressed raw juice diluted in warm water rather than sugar-laden commercial amla murabba candies.",
      dont: "Don't take concentrated acidic amla juice right before sleeping if you suffer from severe nocturnal acid reflux.",
      askDoctorIf:
        "Ask your surgeon or hematologist before taking high-dose amla extracts if you take prescription blood thinners.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "ताजा आंवला",
      whatItContains:
        "प्राकृतिक विटामिन C (600-800 mg/100g, संतरे से 20 गुना अधिक), टैनिन, गैलिक एसिड और एंटीऑक्सीडेंट्स।",
      provenBenefit:
        "आयरन के अवशोषण को 400% तक बढ़ाता है, लिवर की कोशिकाओं की रक्षा करता है और रोग प्रतिरोधक क्षमता मजबूत करता है।",
      mythClaim: "आंवला का जूस 7 दिनों में खून के सारे टॉक्सिन्स बाहर निकाल देता है।",
      mythReality:
        "डिटॉक्स का काम लिवर और किडनी करते हैं; आंवला लिवर को सुरक्षा देने वाले पोषक तत्व देता है।",
      whoShouldLimit:
        "खून पतला करने वाली दवा (वारफारिन, एस्पिरिन) लेने वाले लोग और जिनकी 2 हफ्ते में सर्जरी होने वाली हो।",
      bestPairing:
        "दाल-चावल या पालक की सब्जी के साथ ताजा आंवला चटनी; आयरन भरपूर मात्रा में सोखने के लिए।",
      do: "चाशनी में डूबे मुरब्बे के बजाय ताजा कच्चा आंवला या गुनगुने पानी में इसका रस पिएं।",
      dont: "रात को सोने से ठीक पहले खाली पेट खट्टा आंवला न पिएं यदि एसिडिटी की शिकायत रहती है।",
      askDoctorIf:
        "खून पतला करने की दवा ले रहे हैं तो नियमित आंवला रस लेने से पहले डॉक्टर की सलाह लें।",
    },
  },
  {
    id: "food-curd-chaas",
    foodName: "Dahi & Chaas (Curd & Spiced Buttermilk)",
    hindiName: "ताजा दही और मसाला छाछ",
    level: 1,
    category: "fermented",
    categoryLabel: "Live Probiotic Matrix",
    situationTag: "Monsoon gut safety & summer electrolyte replenishment...",
    system: "gut",
    systemLabel: "Colonic Microbiome & Mucosal Lining",
    whatItContains:
      "Live probiotic strains (Lactobacillus bulgaricus, Streptococcus thermophilus), bioavailable calcium, lactic acid, easily digestible casein/whey peptides, and potassium.",
    provenBenefit:
      "Bacterial fermentation hydrolyzes milk proteins and lactose, making curd gentle on lactose-intolerant guts while fortifying intestinal barrier integrity against foodborne pathobionts.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation:
      "Cell Host & Microbe Landmark Trial (PMID: 34260914) & ICMR Guidelines for Probiotic Foods",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/34260914/",
    mythCheck: {
      claim: "Eating curd at dinner directly causes chest phlegm, sinus infections, and colds.",
      reality:
        "Respiratory infections are caused by viruses, not dairy. Curd does not create mucus, although ice-cold refrigerated dairy can cause temporary throat irritation in sensitive vocal cords.",
    },
    whoShouldLimit: [
      "Severe IgE-mediated dairy/casein allergy (anaphylaxis risk)",
      "Patients currently taking Fluoroquinolone (Ciprofloxacin) or Tetracycline antibiotics (must space intake by at least 2 hours)",
    ],
    bestPairing:
      "Spiced Chaas churned with roasted cumin seeds (bhuna jeera), black salt (kala namak), and fresh coriander leaves, consumed with or right after lunch.",
    indianServingContext:
      "1 small katori (100-150g) of fresh dahi or 1 tall glass (250ml) of diluted spiced chaas daily.",
    guidance: {
      do: "Consume freshly set room-temperature dahi or freshly churned chaas; temper with roasted cumin and asafoetida (hing) for superior carminative action.",
      dont: "Don't buy ultra-sweetened packaged commercial yogurts that contain 15-20g of added refined sugar per cup.",
      askDoctorIf:
        "Ask your doctor or pharmacist about timing if prescribed antibiotics, as dairy calcium binds and deactivates certain drug molecules.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "ताजा दही और मसाला छाछ",
      whatItContains:
        "जीवित प्रोबायोटिक बैक्टीरिया (लैक्टोबैसिलस), सुपाच्य कैल्शियम, लैक्टिक एसिड, प्रोटीन और पोटैशियम।",
      provenBenefit:
        "आंतों के अच्छे बैक्टीरिया को बढ़ाता है, पेट के संक्रमण से बचाता है और भोजन को आसानी से पचाता है।",
      mythClaim: "रात को दही खाने से सीधे सीने में कफ जमता है और जुकाम हो जाता है।",
      mythReality:
        "जुकाम वायरस से होता है, दही से नहीं। बहुत ठंडा फ्रिज का दही गले में थोड़ी जलन जरूर कर सकता है।",
      whoShouldLimit: "गंभीर दूध एलर्जी (केसीन एलर्जी) वाले और एंटीबायोटिक दवा का कोर्स करने वाले।",
      bestPairing:
        "भुना जीरा, काला नमक और हरा धनिया मिलाकर बनाई गई ताजी छाछ; दोपहर के भोजन के साथ।",
      do: "कमरे के तापमान पर जमाया ताजा मीठा दही खाएं; जीरा और हींग मिलाने से पाचन और अच्छा होता है।",
      dont: "बाजार में मिलने वाले मीठे 'फ्लेवर्ड' डिब्बाबंद योगर्ट न खाएं जिनमें बहुत ज्यादा चीनी होती है।",
      askDoctorIf:
        "एंटीबायोटिक दवा (जैसे सिप्रोफ्लोक्सासिन) ले रहे हैं, तो दही खाने में 2 घंटे का अंतर रखें।",
    },
  },
  {
    id: "food-methi",
    foodName: "Methi Seeds & Greens (Fenugreek)",
    hindiName: "मेथी दाना और हरी मेथी",
    level: 1,
    category: "spice_herb",
    categoryLabel: "Glycemic Stabilizer",
    situationTag: "If you're managing diabetes or post-meal sugar spikes...",
    system: "metabolism",
    systemLabel: "Pancreatic Beta Cells & Glucose Uptake",
    whatItContains:
      "Soluble galactomannan dietary fiber (45-50%), 4-hydroxyisoleucine (an amino acid that stimulates glucose-dependent insulin release), trigonelline, and diosgenin saponins.",
    provenBenefit:
      "Galactomannan delays gastric emptying and glucose absorption, while 4-hydroxyisoleucine directly enhances insulin release from pancreatic beta cells in hyperglycemic states.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation:
      "Journal of Ethnopharmacology Systematic Review (PMID: 27496582) & American Diabetes Association (ADA)",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/27496582/",
    mythCheck: {
      claim:
        "Chewing methi seeds permanently cures diabetes so you can stop all prescription medicine.",
      reality:
        "Fenugreek is a proven clinical adjunct that moderates glucose spikes, but abruptly discontinuing prescribed medication can cause dangerous hyperglycemic complications.",
    },
    whoShouldLimit: [
      "Pregnant women (therapeutic quantities of fenugreek seeds stimulate oxytocic uterine contractions)",
      "Individuals with severe cross-allergies to legumes, peanuts, or chickpeas",
    ],
    bestPairing:
      "1 teaspoon (5g) whole methi seeds soaked overnight in warm water, chewed in the morning followed by drinking the soak water; fresh methi leaves cooked into dal or whole wheat thepla.",
    indianServingContext:
      "1 teaspoon soaked seeds daily in the morning, or 1 cup fresh leaves in vegetable dishes 2-3 times weekly.",
    guidance: {
      do: "Soak whole seeds overnight to soften the galactomannan gel matrix and reduce bitter saponin intensity.",
      dont: "Don't consume concentrated medicinal fenugreek seed powders during pregnancy without explicit obstetric approval.",
      askDoctorIf:
        "Ask your diabetologist to monitor your blood sugar closely when starting daily methi, as oral hypoglycemic doses may need adjustment to prevent hypoglycemia.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 7 (Plain Language)",
    hi: {
      foodName: "मेथी दाना और हरी मेथी",
      whatItContains:
        "गैलेक्टोमैनन घुलनशील फाइबर (45-50%), 4-हाइड्रॉक्सीआइसोल्यूसीन (इंसुलिन बढ़ाने वाला तत्व) और सैपोनिन्स।",
      provenBenefit:
        "भोजन के बाद शुगर के स्तर को तेजी से बढ़ने से रोकता है और शरीर में इंसुलिन की कार्यक्षमता बढ़ाता है।",
      mythClaim:
        "मेथी खाने से शुगर की बीमारी हमेशा के लिए खत्म हो जाती है और दवा बंद की जा सकती है।",
      mythReality:
        "मेथी शुगर को नियंत्रित करने में बहुत मददगार है, लेकिन डॉक्टर की लिखी दवा को अचानक बंद न करें।",
      whoShouldLimit:
        "गर्भवती महिलाएं (गर्भाशय संकुचन के जोखिम के कारण मेथी दाने का अधिक सेवन न करें)।",
      bestPairing:
        "रातभर पानी में भीगे मेथी दाने सुबह खाली पेट; या मेथी का साग मूंग दाल या थेपला में।",
      do: "मेथी दाने को रातभर पानी में भिगोकर रखें ताकि उसका फाइबर मुलायम हो जाए और कड़वाहट कम हो।",
      dont: "गर्भावस्था के दौरान अधिक मात्रा में मेथी दाने का पाउडर या काढ़ा न पिएं।",
      askDoctorIf:
        "यदि आप शुगर की तेज दवा ले रहे हैं, तो डॉक्टर से पूछें ताकि शुगर बहुत ज्यादा कम (हाइपोग्लाइसीमिया) न हो जाए।",
    },
  },
  {
    id: "food-turmeric-pepper",
    foodName: "Turmeric & Black Pepper with Fat (Kacchi Haldi)",
    hindiName: "कच्ची हल्दी + ताजी काली मिर्च + घी",
    level: 1,
    category: "spice_herb",
    categoryLabel: "Curcumin Bioavailability Engine",
    situationTag: "Winter respiratory wellness & joint inflammation...",
    system: "liver",
    systemLabel: "Hepatic NF-κB Pathway & Joint Mobility",
    whatItContains:
      "Curcuminoids (curcumin, demethoxycurcumin, bisdemethoxycurcumin), aromatic turmerones, and piperine alkaloid from cracked black pepper.",
    provenBenefit:
      "Downregulates nuclear factor kappa B (NF-κB), curbing systemic pro-inflammatory cytokines (TNF-alpha, IL-6); piperine temporarily halts hepatic glucuronidation to boost curcumin bioavailability by 2,000%.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation:
      "Planta Medica Landmark Bioavailability Trial (PMID: 9619120) & ICMR Phytomedicine Review",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/9619120/",
    mythCheck: {
      claim: "Drinking raw turmeric powder in plain cold water delivers maximum medicinal potency.",
      reality:
        "Curcumin is completely fat-soluble and hydrophobic; without black pepper and a healthy fat (ghee, oil, or whole milk), over 95% passes through the intestines unabsorbed.",
    },
    whoShouldLimit: [
      "Patients with active gallstones or biliary colic obstruction",
      "Individuals taking prescription anticoagulants or antiplatelet drugs (Warfarin, Aspirin)",
    ],
    bestPairing:
      "Traditional Haldi Doodh: 1 cup warm milk (or almond milk) simmered with 1/2 tsp freshly grated raw turmeric root, a pinch of freshly crushed black pepper, and 1/4 tsp desi ghee.",
    indianServingContext:
      "1/2 teaspoon raw grated turmeric (or 1/4 tsp pure powder) with a pinch of black pepper daily in cooking or warm milk.",
    guidance: {
      do: "Always combine turmeric with a pinch of freshly cracked black pepper and a dietary lipid (ghee, mustard oil, or milk) for cellular uptake.",
      dont: "Don't consume high-dose non-standardized turmeric pills or mega-extracts without clinical supervision.",
      askDoctorIf:
        "Ask your gastroenterologist or surgeon if you have active gallstones or an upcoming surgery before taking concentrated turmeric supplements.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      foodName: "हल्दी, काली मिर्च और घी की जोड़ी",
      whatItContains: "करक्यूमिनॉइड्स (करक्यूमिन), टरमेरोन तेल, और काली मिर्च का पिपेरिन एल्कलॉइड।",
      provenBenefit:
        "शरीर और जोड़ों की अंदरूनी सूजन को कम करता है; काली मिर्च हल्दी के अवशोषण को 2000% बढ़ाती है।",
      mythClaim: "कच्ची हल्दी को सादे ठंडे पानी में घोलकर पीने से सबसे ज्यादा फायदा होता है।",
      mythReality:
        "हल्दी पानी में नहीं घुलती, यह वसा (फैट) में घुलती है; बिना काली मिर्च और घी/दूध के यह शरीर में नहीं सोखी जाती।",
      whoShouldLimit: "पित्ताशय की पथरी (Gallstones) के मरीज और खून पतला करने की दवा लेने वाले।",
      bestPairing:
        "गुनगुने दूध में 1/2 चम्मच हल्दी, चुटकीभर ताजी कुटी काली मिर्च और 1/4 चम्मच देसी घी।",
      do: "सब्जी या दूध में हल्दी डालते समय हमेशा एक चुटकी ताजी काली मिर्च और थोड़ा घी/तेल जरूर मिलाएं।",
      dont: "बिना डॉक्टर की सलाह के हल्दी के भारी सप्लीमेंट कैप्सूल न खाएं।",
      askDoctorIf:
        "यदि पित्त की थैली में पथरी है या कोई ऑपरेशन होने वाला है, तो डॉक्टर से सलाह लें।",
    },
  },
  {
    id: "food-karela",
    foodName: "Bitter Gourd (Karela / Momordica charantia)",
    hindiName: "करेला",
    level: 1,
    category: "vegetable",
    categoryLabel: "Phyto-Insulin Vegetable",
    situationTag: "If you have elevated HbA1c or prediabetes...",
    system: "metabolism",
    systemLabel: "Peripheral Glucose Transporters (GLUT-4)",
    whatItContains:
      "Charantin, polypeptide-p (a plant-based insulin mimetic peptide), vicine, momordicin, dietary fiber, and Vitamin C.",
    provenBenefit:
      "Polypeptide-p binds human insulin receptors to activate cellular GLUT-4 glucose transporters, facilitating peripheral glucose uptake in skeletal muscles.",
    evidenceTier: "Tier 2 Silver (Cohort Studies / ICMR Guidelines)",
    sourceCitation:
      "Journal of Ethnopharmacology Systematic Review (PMID: 23684941) & ICMR Clinical Evaluation of Momordica",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/23684941/",
    mythCheck: {
      claim:
        "Drinking 1 glass of raw bitter gourd juice every morning completely cures diabetes in 30 days.",
      reality:
        "Bitter gourd is an effective dietary adjunct for glycemic control, but it does not cure diabetes or permanently repair non-functional pancreatic beta cells.",
    },
    whoShouldLimit: [
      "Pregnant women (can induce uterine contractions and has potential abortifacient properties)",
      "Individuals with G6PD deficiency (vicine can trigger favism / acute hemolytic anemia)",
      "Young children",
    ],
    bestPairing:
      "Thinly sliced karela sautéed with onions, fennel seeds (saunf), and amchur (dry mango powder) in cold-pressed mustard oil, served with dal and whole wheat roti.",
    indianServingContext:
      "1/2 cup to 1 cup cooked vegetable 2-3 times per week as part of a balanced meal.",
    guidance: {
      do: "Cook karela with carminative digestive spices (saunf, amchur, cumin) rather than boiling in heavy salt water and discarding the mineral-rich liquid.",
      dont: "Don't drink large tumblers of raw concentrated karela juice during pregnancy or breastfeeding.",
      askDoctorIf:
        "Ask your doctor if you take sulfonylurea drugs (like Glimepiride) or insulin to avoid sudden hypoglycemia events.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 7 (Plain Language)",
    hi: {
      foodName: "करेला",
      whatItContains:
        "पॉलीपेप्टाइड-पी (प्राकृतिक पादप इंसुलिन), शैरेंटिन, मोमोर्डिसिन, फाइबर और विटामिन C।",
      provenBenefit:
        "मांसपेशियों को खून से ग्लूकोज सोखने में मदद करता है और भोजन के बाद शुगर को नियंत्रित रखता है।",
      mythClaim:
        "रोज सुबह 1 गिलास कच्चा करेले का जूस पीने से 30 दिन में डायबिटीज जड़ से खत्म हो जाती है।",
      mythReality:
        "करेला शुगर नियंत्रित करने में बहुत मददगार है, लेकिन यह डायबिटीज को पूरी तरह ठीक (क्योर) नहीं कर सकता।",
      whoShouldLimit:
        "गर्भवती महिलाएं (गर्भाशय में संकुचन पैदा कर सकता है) और G6PD की कमी वाले लोग।",
      bestPairing:
        "सौंफ, प्याज और अमचूर के साथ सरसों के तेल में बनी करेले की सब्जी; दाल और रोटी के साथ।",
      do: "सब्जी बनाते समय सौंफ और अमचूर मिलाएं ताकि कड़वाहट कम हो और पोषक तत्व सुरक्षित रहें।",
      dont: "गर्भावस्था में कच्चे करेले का तेज जूस बिल्कुल न पिएं।",
      askDoctorIf:
        "यदि आप इंसुलिन या शुगर की तेज दवा ले रहे हैं, तो डॉक्टर की सलाह से शुगर की नियमित जांच करते रहें।",
    },
  },
];

// Re-export FOOD_TIPS for backward compatibility
export const FOOD_TIPS: FoodFactEntry[] = FOOD_FACTS;

export interface FoodSynergyPair {
  id: string;
  foodA: string;
  foodB: string;
  synergyOutcome: string;
  multiplier: string;
  mechanism: string;
  culinaryIdea: string;
}

export const FOOD_SYNERGIES: FoodSynergyPair[] = [
  {
    id: "syn-dal-lemon",
    foodA: "Lentils / Spinach (Cooked Dal / Palak)",
    foodB: "Fresh Lemon Juice (Vitamin C)",
    synergyOutcome: "Non-Heme Iron Absorption Surge",
    multiplier: "+400% Iron Uptake",
    mechanism:
      "Plant-based non-heme iron exists in the insoluble ferric (Fe3+) state. Ascorbic acid in lemon juice reduces it to the bioavailable ferrous (Fe2+) state and chelates it against inhibitory phytates.",
    culinaryIdea:
      "Squeeze half a fresh lemon directly over cooked dal tadka or sautéed palak immediately before serving.",
  },
  {
    id: "syn-turmeric-pepper-ghee",
    foodA: "Turmeric Root (Curcumin)",
    foodB: "Black Pepper (Piperine) + Desi Ghee",
    synergyOutcome: "Curcumin Bioavailability Multiplier",
    multiplier: "+2,000% Plasma Peak",
    mechanism:
      "Piperine in black pepper inhibits hepatic and intestinal glucuronidation enzymes, while lipids in ghee solubilize hydrophobic curcumin, enabling systemic uptake.",
    culinaryIdea:
      "Warm milk or dal simmered with 1/2 tsp turmeric, a pinch of freshly crushed black pepper, and 1/2 tsp ghee.",
  },
  {
    id: "syn-dal-chawal",
    foodA: "Lentils / Pulses (Dal)",
    foodB: "Rice or Millets (Chawal / Bajra)",
    synergyOutcome: "Complete Amino Acid Protein Matrix",
    multiplier: "100% Complete Protein",
    mechanism:
      "Grains are rich in methionine but deficient in lysine; pulses are rich in lysine but low in methionine. Combining them in a meal creates a complete biological protein equivalent to animal protein.",
    culinaryIdea:
      "Traditional Indian Khichdi or Dal-Chawal with 2:1 ratio of lentils to whole grains.",
  },
  {
    id: "syn-dahi-jeera",
    foodA: "Fresh Curd / Dahi (Lactobacillus)",
    foodB: "Roasted Cumin Seeds (Bhuna Jeera)",
    synergyOutcome: "Carminative Gut Motility Engine",
    multiplier: "Accelerated Gastric Emptying",
    mechanism:
      "Cuminaldehyde in roasted cumin stimulates salivary bile acid secretion, while probiotic lactic acid in curd stabilizes duodenal pH for optimal enzymatic digestion.",
    culinaryIdea:
      "Whisk 1 cup dahi into spiced chaas with 1/2 tsp freshly roasted crushed cumin and black salt after lunch.",
  },
];

export interface DrugFoodWarning {
  id: string;
  food: string;
  medicationClass: string;
  riskSeverity: "CRITICAL" | "HIGH" | "MODERATE";
  clinicalConsequence: string;
  doctorDirective: string;
}

export const DRUG_FOOD_WARNINGS: DrugFoodWarning[] = [
  {
    id: "warn-grapefruit-statins",
    food: "Grapefruit & Grapefruit Juice",
    medicationClass: "Statins (Atorvastatin, Simvastatin) & Calcium Channel Blockers",
    riskSeverity: "CRITICAL",
    clinicalConsequence:
      "Furanocoumarins in grapefruit irreversibly inhibit intestinal CYP3A4 enzymes, causing blood medication levels to surge up to 300-500%, risking severe rhabdomyolysis and acute kidney damage.",
    doctorDirective:
      "Avoid grapefruit entirely if prescribed CYP3A4-metabolized statins. Discuss alternatives with your cardiologist.",
  },
  {
    id: "warn-greens-warfarin",
    food: "High-Vitamin K Greens (Spinach, Kale, Methi)",
    medicationClass: "Warfarin / Coumadin (Anticoagulants)",
    riskSeverity: "CRITICAL",
    clinicalConsequence:
      "Sudden large fluctuations in dietary Vitamin K intake antagonize the anticoagulant action of Warfarin, causing INR blood levels to drop below therapeutic thresholds and risking blood clots.",
    doctorDirective:
      "Do NOT avoid greens, but keep daily intake consistent. Inform your physician before making sudden dietary shifts.",
  },
  {
    id: "warn-dairy-antibiotics",
    food: "Dairy Products (Milk, Curd, Paneer)",
    medicationClass: "Fluoroquinolones (Ciprofloxacin) & Tetracyclines",
    riskSeverity: "HIGH",
    clinicalConsequence:
      "Calcium and magnesium ions chelate and bind with antibiotic molecules, forming insoluble complexes that your gut cannot absorb, leading to medication failure.",
    doctorDirective:
      "Consume dairy foods at least 2 hours before or 4 hours after taking these specific antibiotic doses.",
  },
  {
    id: "warn-potassium-ace",
    food: "High Potassium Foods (Salt Substitutes, Bananas, Millets)",
    medicationClass: "ACE Inhibitors (Enalapril, Ramipril) & ARBs (Telmisartan)",
    riskSeverity: "HIGH",
    clinicalConsequence:
      "These blood pressure medications reduce renal potassium excretion. Combining them with potassium chloride 'low sodium' salt substitutes can induce dangerous hyperkalemia and cardiac arrhythmias.",
    doctorDirective:
      "Avoid potassium-chloride-based salt substitutes without explicit serum electrolyte monitoring from your physician.",
  },
];
