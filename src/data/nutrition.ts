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
    systemLabel: "Blood Sugar Stability & Strong Bones",
    whatItContains:
      "Packed with natural calcium (over 30 times more than white rice), gentle fiber that digests slowly, and key minerals that keep your bones strong.",
    provenBenefit:
      "Slows down sugar release in your belly to prevent sudden sugar spikes after eating (by up to 28% in studies), while giving your bones and teeth daily calcium.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation:
      "ICMR-NIN Indian Food Composition Tables & Journal of Food Science and Technology (PMID: 24497746)",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/24497746/",
    mythCheck: {
      claim: "Ragi flour can be eaten raw in morning smoothies for accelerated fat loss.",
      reality:
        "Raw ragi contains natural plant blockers that stop your body from soaking up calcium and iron. It must always be soaked, cooked, sprouted, or fermented.",
    },
    whoShouldLimit: [
      "People with severe kidney disease (needs a doctor's limit on potassium and minerals)",
      "People prone to calcium-based kidney stones",
    ],
    bestPairing:
      "Ragi Roti or Mudde paired with protein-rich Sambar or sprouted dal; squeeze fresh lemon juice to maximize non-heme iron uptake.",
    indianServingContext:
      "1-2 medium rotis or 1 small mudde ball (50-60g dry flour) for lunch 3-4 days per week.",
    guidance: {
      do: "Soak flour or ferment ragi batter for 8-12 hours before steaming (idli/dosa) to break down plant blockers and absorb more iron.",
      dont: "Avoid eating heavy ragi dishes right before bedtime if you often get heartburn or acid reflux.",
      askDoctorIf:
        "Ask your doctor if you have reduced kidney function before eating millets every single day.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
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
    systemLabel: "Blood Vessel & Heart Care",
    whatItContains:
      "Rich in Vitamin C, beta-carotene, heart-friendly plant antioxidants, vegetable protein, potassium, and magnesium.",
    provenBenefit:
      "Helps relax stiff blood vessels, gently brings down high blood pressure numbers (by about 4 to 6 points), and protects your heart cells from daily stress.",
    evidenceTier: "Tier 2 Silver (Cohort Studies / ICMR Guidelines)",
    sourceCitation:
      "ICMR-NIN Bioactive Research & Phytotherapy Research Clinical Evaluation (PMID: 17089328)",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/17089328/",
    mythCheck: {
      claim: "Moringa permanently cures 300 diseases and replaces all prescription medications.",
      reality:
        "Moringa is a healthy traditional leafy vegetable, not a miracle cure or replacement for prescription blood pressure or diabetes medicine.",
    },
    whoShouldLimit: [
      "Pregnant women (drumstick roots and bark must be avoided; tender leaves should only be eaten in normal cooking amounts)",
      "Anyone taking prescription thyroid pills or blood thinners (check with your doctor first)",
    ],
    bestPairing:
      "Sauté fresh moringa leaves into yellow moong dal tadka or cook tender pods in traditional rasam with black pepper and 1/2 tsp ghee.",
    indianServingContext:
      "1/2 to 1 cup fresh leaves cooked in dal or sabzi 2-3 times per week, or 2 drumstick pods in sambar.",
    guidance: {
      do: "Add moringa leaves during the final 5 minutes of cooking dal to preserve delicate heat-sensitive Vitamin C.",
      dont: "Never take unregulated root powders or extreme cleansing pills sold online as miracle cures.",
      askDoctorIf:
        "Ask your doctor if you take blood pressure medicine, since moringa can also naturally lower blood pressure numbers.",
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
    systemLabel: "Natural Sweetener & Sugar Level Check",
    whatItContains:
      "Made from natural boiled sugarcane juice. It keeps small amounts of iron and minerals, but is still 80% natural sugar.",
    provenBenefit:
      "Unlike factory white sugar, it has no bleach or harsh chemicals, and a small bite after lunch helps spark natural digestion.",
    evidenceTier: "Tier 2 Silver (Cohort Studies / ICMR Guidelines)",
    sourceCitation:
      "Indian Council of Medical Research (ICMR) Dietary Guidelines & Food Chemistry (PMID: 20627641)",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/20627641/",
    mythCheck: {
      claim:
        "Jaggery does not raise blood sugar and can be eaten without limit by diabetic individuals.",
      reality:
        "Jaggery is mostly pure natural sugar (~80%). It raises blood sugar levels almost as fast as regular white table sugar.",
    },
    whoShouldLimit: [
      "Anyone with diabetes or high blood sugar",
      "People managing fatty liver or high blood fats (triglycerides)",
    ],
    bestPairing:
      "Pair 1 small cube (5-10g) with roasted chana (Bengal gram) or roasted sesame seeds (til) to buffer gastric absorption through protein and fat.",
    indianServingContext:
      "Limit to 1 small coin or cube (max 5-10g) after lunch during cold winter months for healthy adults.",
    guidance: {
      do: "Choose dark brown, artisanal organic jaggery free of synthetic chemical clarifiers (sodium hydrosulphite) that produce artificial bright yellow tints.",
      dont: "Never treat jaggery as sugar-free or safe for uncontrolled diabetes—it still raises blood sugar quickly.",
      askDoctorIf:
        "Ask your doctor or dietitian how much jaggery fits into your daily meal plan if you have diabetes.",
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
    systemLabel: "Healthy Gut Lining & Cooking Fat",
    whatItContains:
      "Pure clarified butter fat with milk solids removed, containing gut-nourishing butyrate fat and vitamins A, D, E, and K.",
    provenBenefit:
      "Nourishes the lining of your gut, aids digestion, and can handle high cooking heat without burning or turning into harmful smoke.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation:
      "Journal of Clinical and Diagnostic Research (PMID: 26816892) & American Heart Association (AHA) Fats Consensus",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/26816892/",
    mythCheck: {
      claim: "Ghee instantly clogs heart arteries and should be 100% eliminated from all diets.",
      reality:
        "In moderate amounts (1 to 2 teaspoons a day), ghee provides clean energy without harmful factory trans-fats; having too much can raise bad cholesterol.",
    },
    whoShouldLimit: [
      "People with very high bad cholesterol (LDL over 160) or family history of heart artery disease",
      "Anyone with active gallbladder stones or pancreas trouble",
    ],
    bestPairing:
      "Melt 1 teaspoon over warm whole-grain khichdi, dal tadka, or steamed bajra to facilitate the uptake of fat-soluble vitamins and curcumin.",
    indianServingContext:
      "1 to 2 teaspoons (5-10 ml) daily distributed across cooked lunch and dinner.",
    guidance: {
      do: "Use traditional bilona ghee as a thermally stable cooking fat for home Indian tempering (tadka) instead of repeatedly reheated seed oils.",
      dont: "Avoid drinking large spoonfuls of melted ghee if your heart tests show high cholesterol.",
      askDoctorIf:
        "Ask your heart doctor about your daily fat limit if you have heart disease or stents.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
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
    systemLabel: "Stomach Juices & Salt Awareness",
    whatItContains:
      "Healthy friendly bacteria from natural sun-fermenting, mustard oil, spices like methi and saunf, and a high amount of salt.",
    provenBenefit:
      "A small taste wakes up your mouth, helps your stomach produce digestive juices, and feeds good gut microbes.",
    evidenceTier: "Tier 2 Silver (Cohort Studies / ICMR Guidelines)",
    sourceCitation:
      "Frontiers in Microbiology (PMID: 30079053) & ICMR Traditional Fermented Foods Survey",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/30079053/",
    mythCheck: {
      claim: "Traditional homemade achaar is pure poison that directly destroys heart valves.",
      reality:
        "Sun-fermented pickles carry live friendly gut bacteria and digestive spices; the only real health risk is having too much salt if you eat large scoops.",
    },
    whoShouldLimit: [
      "People with high blood pressure who need to keep daily salt low",
      "People with kidney trouble or water retention (swollen legs)",
    ],
    bestPairing:
      "A small dab alongside plain curd rice, khichdi, or dal-chawal to stimulate sluggish appetite and support digestion.",
    indianServingContext:
      "Strictly 1 level teaspoon (5-10g) as a flavorful condiment, not as a main vegetable dish.",
    guidance: {
      do: "Choose traditional sun-ripened, mustard-oil cured pickles over factory-bottled industrial varieties packed with synthetic acetic acid and chemical preservatives.",
      dont: "Avoid spooning the leftover salty oil from the bottom of the jar; eat only a small piece of the pickled fruit or veggie.",
      askDoctorIf:
        "Ask your doctor about your daily salt limit if you take blood pressure water pills.",
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
    systemLabel: "Clean Energy Fats & Heart Health",
    whatItContains:
      "Quick-burning natural plant fats (MCTs like lauric acid) that give clean energy, with zero cholesterol.",
    provenBenefit:
      "Your liver turns these fats into quick energy instead of storing them as body fat, and lauric acid helps fight bad gut bugs.",
    evidenceTier: "Tier 2 Silver (Cohort Studies / ICMR Guidelines)",
    sourceCitation:
      "Cochrane Database of Systematic Reviews & American Journal of Clinical Nutrition (PMID: 32679803)",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/32679803/",
    mythCheck: {
      claim: "Drinking raw coconut oil every morning instantly burns stubborn belly fat.",
      reality:
        "Coconut oil is 90% saturated fat with 120 calories per tablespoon; drinking extra spoonfuls can still raise bad cholesterol and add unwanted weight.",
    },
    whoShouldLimit: [
      "People with high bad cholesterol (LDL) or heart conditions",
      "People with advanced fatty liver disease",
    ],
    bestPairing:
      "Traditional South Indian tadka for sambar, aviyal, or thoran using 1 teaspoon of virgin oil with mustard seeds, curry leaves, and green chilies.",
    indianServingContext:
      "1 to 2 teaspoons (5-10 ml) per person when used as a cooking medium for coastal regional recipes.",
    guidance: {
      do: "Choose unrefined, cold-pressed virgin coconut oil with a fresh natural aroma rather than chemically bleached and deodorized (RBD) copra oils.",
      dont: "Avoid swallowing large gulps of oil on an empty stomach to lose weight; use a teaspoon in cooking instead.",
      askDoctorIf:
        "Ask your doctor if your blood tests show high cholesterol before adding coconut oil daily.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
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
    systemLabel: "Steady Energy & Sugar Control",
    whatItContains:
      "Slow-burning whole grains packed with fiber, magnesium, natural iron, and energizing B vitamins.",
    provenBenefit:
      "Digests very slowly to keep your energy steady without sugar crashes, and magnesium helps your body use insulin properly.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation:
      "Frontiers in Nutrition Systematic Review & Meta-Analysis (PMID: 34395510) & ICMR-NIN Millet Taskforce",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/34395510/",
    mythCheck: {
      claim: "Millets are dry and suppress thyroid function in every person who eats them.",
      reality:
        "Raw uncooked pearl millet has compounds that can bother the thyroid, but normal cooking, soaking, and using iodized salt completely makes them safe.",
    },
    whoShouldLimit: [
      "People with untreated thyroid problems (if eating raw or undercooked millet without iodized salt)",
      "People with a very sensitive stomach prone to sudden bloating from high fiber",
    ],
    bestPairing:
      "Bajra Roti served with garlic-curd chutney or green moong dal; Foxtail millet pulao cooked with seasonal vegetables and roasted cumin raita.",
    indianServingContext:
      "1-2 medium bajra rotis (50-60g dry flour) or 1 cup cooked foxtail millet for lunch 2-4 times a week.",
    guidance: {
      do: "Transition to millets gradually: begin by blending 30% millet flour with whole wheat or consuming millet grains 2-3 times weekly to allow your gut microbiome to adapt.",
      dont: "Don't switch to 100% millets overnight; mix them slowly with regular flour so your stomach can adjust comfortably.",
      askDoctorIf:
        "Ask your doctor if you take thyroid medicine before making millets your only daily grain.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
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
    systemLabel: "Liver Defense & Iron Absorption",
    whatItContains:
      "One of nature's richest sources of natural Vitamin C (20 times more than orange juice), plus protective plant antioxidants.",
    provenBenefit:
      "Shields liver cells from daily stress, strengthens your immune defense, and multiplies how much iron your body absorbs from dal by 4 times.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation:
      "European Journal of Clinical Nutrition (PMID: 21490637) & ICMR-NIN Vitamin C Tables",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/21490637/",
    mythCheck: {
      claim: "Drinking raw amla juice purges all toxins from your blood within 7 days.",
      reality:
        "Your liver and kidneys do all natural detoxing; amla simply supplies antioxidants that protect liver cells from damage.",
    },
    whoShouldLimit: [
      "People taking blood-thinning medicines (like Warfarin or Aspirin)",
      "Anyone scheduled for surgery in the next two weeks",
    ],
    bestPairing:
      "Grate 1 fresh amla into fresh mint-coriander chutney, or eat fresh amla alongside dal-rice to boost plant iron absorption by 400%.",
    indianServingContext:
      "1 whole fresh amla (or 15-20 ml freshly pressed juice diluted in a glass of water) once daily in the morning.",
    guidance: {
      do: "Consume fresh whole amla fruit or cold-pressed raw juice diluted in warm water rather than sugar-laden commercial amla murabba candies.",
      dont: "Avoid drinking sour amla juice right before bed if you suffer from nighttime acid reflux or heartburn.",
      askDoctorIf:
        "Ask your doctor before taking strong amla juice or powders if you take blood thinners.",
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
    systemLabel: "Friendly Gut Bacteria & Easy Digestion",
    whatItContains:
      "Millions of live friendly gut bacteria, easy-to-absorb calcium, natural protein, and soothing lactic acid.",
    provenBenefit:
      "Because bacteria break down milk sugars during culturing, curd is gentle on sensitive bellies, soothes the stomach, and fights bad food bugs.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation:
      "Cell Host & Microbe Landmark Trial (PMID: 34260914) & ICMR Guidelines for Probiotic Foods",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/34260914/",
    mythCheck: {
      claim: "Eating curd at dinner directly causes chest phlegm, sinus infections, and colds.",
      reality:
        "Colds and coughs come from viral infections, not curd. Cold curd right out of the fridge might irritate a sensitive throat, but room-temperature curd does not cause phlegm.",
    },
    whoShouldLimit: [
      "Anyone with a severe diagnosed milk protein allergy",
      "People currently taking certain antibiotic pills (take curd at least 2 hours apart)",
    ],
    bestPairing:
      "Spiced Chaas churned with roasted cumin seeds (bhuna jeera), black salt (kala namak), and fresh coriander leaves, consumed with or right after lunch.",
    indianServingContext:
      "1 small katori (100-150g) of fresh dahi or 1 tall glass (250ml) of diluted spiced chaas daily.",
    guidance: {
      do: "Consume freshly set room-temperature dahi or freshly churned chaas; temper with roasted cumin and asafoetida (hing) for superior digestive support.",
      dont: "Don't buy sugary packaged yogurts with 3 to 4 teaspoons of hidden factory sugar per cup.",
      askDoctorIf:
        "Ask your doctor or pharmacist about pill timing if you take antibiotics with dairy.",
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
    systemLabel: "Pancreas Care & Blood Sugar Control",
    whatItContains:
      "Jelly-like soluble fiber, natural plant nutrients that support insulin, and iron-rich green leaves.",
    provenBenefit:
      "Forms a gentle gel in your stomach that slows down sugar absorption, preventing rapid blood sugar spikes after your meals.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation:
      "Journal of Ethnopharmacology Systematic Review (PMID: 27496582) & American Diabetes Association (ADA)",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/27496582/",
    mythCheck: {
      claim:
        "Chewing methi seeds permanently cures diabetes so you can stop all prescription medicine.",
      reality:
        "Methi is proven to help keep blood sugar steady, but suddenly stopping your prescribed medicine can cause dangerous sugar spikes.",
    },
    whoShouldLimit: [
      "Pregnant women (large medicinal amounts of methi seeds can trigger uterine contractions)",
      "People allergic to chickpeas, peanuts, or related lentils",
    ],
    bestPairing:
      "1 teaspoon (5g) whole methi seeds soaked overnight in warm water, chewed in the morning followed by drinking the soak water; fresh methi leaves cooked into dal or whole wheat thepla.",
    indianServingContext:
      "1 teaspoon soaked seeds daily in the morning, or 1 cup fresh leaves in vegetable dishes 2-3 times weekly.",
    guidance: {
      do: "Soak whole seeds overnight to soften the gel fiber and make them less bitter.",
      dont: "Never take high doses of concentrated methi seed powders during pregnancy.",
      askDoctorIf:
        "Ask your doctor if you take sugar medications, as methi naturally lowers blood sugar and pills may need adjusting.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
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
    systemLabel: "Joint Comfort & Calming Swelling",
    whatItContains:
      "Healing golden curcumin from turmeric, piperine from fresh black pepper, and healthy fat from desi ghee.",
    provenBenefit:
      "Soothes everyday aches, stiffness, and joint swelling; black pepper stops your body from flushing out turmeric so you absorb 20 times more of it.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    sourceCitation:
      "Planta Medica Landmark Bioavailability Trial (PMID: 9619120) & ICMR Phytomedicine Review",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/9619120/",
    mythCheck: {
      claim: "Drinking raw turmeric powder in plain cold water delivers maximum medicinal potency.",
      reality:
        "Turmeric does not dissolve in plain water. Without black pepper and a healthy fat (like ghee or milk), over 95% passes right through without being absorbed.",
    },
    whoShouldLimit: [
      "People with active gallbladder stones or blocked bile ducts",
      "People on prescription blood thinner medicines",
    ],
    bestPairing:
      "Traditional Haldi Doodh: 1 cup warm milk (or almond milk) simmered with 1/2 tsp freshly grated raw turmeric root, a pinch of freshly crushed black pepper, and 1/4 tsp desi ghee.",
    indianServingContext:
      "1/2 teaspoon raw grated turmeric (or 1/4 tsp pure powder) with a pinch of black pepper daily in cooking or warm milk.",
    guidance: {
      do: "Always combine turmeric with a pinch of freshly cracked black pepper and healthy fat (ghee, mustard oil, or milk) so your body can absorb it.",
      dont: "Avoid taking high-potency factory turmeric extract pills without a doctor's advice.",
      askDoctorIf:
        "Ask your doctor if you take blood thinners or have gallbladder stones before taking turmeric supplements.",
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
    systemLabel: "Muscle Sugar Absorption & Blood Sugar Balance",
    whatItContains:
      "Natural plant compounds that act like gentle insulin, cleansing dietary fiber, and Vitamin C.",
    provenBenefit:
      "Helps muscle cells take in sugar from your blood after meals, preventing sharp spikes in blood sugar readings.",
    evidenceTier: "Tier 2 Silver (Cohort Studies / ICMR Guidelines)",
    sourceCitation:
      "Journal of Ethnopharmacology Systematic Review (PMID: 23684941) & ICMR Clinical Evaluation of Momordica",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/23684941/",
    mythCheck: {
      claim:
        "Drinking 1 glass of raw bitter gourd juice every morning completely cures diabetes in 30 days.",
      reality:
        "Bitter gourd helps your body handle sugar better, but it does not cure diabetes or permanently repair the pancreas.",
    },
    whoShouldLimit: [
      "Pregnant women (can trigger uterine cramps)",
      "People with rare enzyme deficiencies (G6PD deficiency)",
      "Young children",
    ],
    bestPairing:
      "Thinly sliced karela sautéed with onions, fennel seeds (saunf), and amchur (dry mango powder) in cold-pressed mustard oil, served with dal and whole wheat roti.",
    indianServingContext:
      "1/2 cup to 1 cup cooked vegetable 2-3 times per week as part of a balanced meal.",
    guidance: {
      do: "Cook karela with pleasant digestive spices (saunf, amchur, cumin) rather than boiling in heavy salt water and throwing away the liquid.",
      dont: "Never drink huge glasses of raw bitter gourd juice during pregnancy.",
      askDoctorIf:
        "Ask your doctor if you take diabetes medicines or insulin, so your blood sugar doesn't drop too low.",
    },
    lastReviewed: "October 2024",
    readingGrade: "Grade 6 (Plain Language)",
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
      "Iron in plants (dal and spinach) is hard for the gut to absorb on its own. Vitamin C in fresh lemon juice changes this iron into a form your body can easily soak up, boosting iron absorption by up to 400%.",
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
      "Curcumin in turmeric cannot be absorbed on its own and passes straight through your body. Black pepper stops your liver from breaking it down too quickly, and ghee dissolves it so your body can absorb up to 2,000% more of it.",
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
      "Rice lacks one key protein building block, while lentils lack another. Eating dal and rice together gives your body all the building blocks it needs, making a 100% complete protein just like milk or eggs.",
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
      "Roasted cumin stimulates stomach juices to break down food, while soothing probiotic curd balances your belly. Together, they relieve bloating and help heavy meals digest smoothly.",
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
      "Grapefruit blocks your intestines from breaking down cholesterol and BP medicines. This makes medicine levels in your bloodstream rise dangerously high (3 to 5 times normal), which can harm your muscles and kidneys.",
    doctorDirective:
      "Avoid grapefruit completely if you take statin cholesterol medicines. Ask your doctor for safe alternative fruits.",
  },
  {
    id: "warn-greens-warfarin",
    food: "High-Vitamin K Greens (Spinach, Kale, Methi)",
    medicationClass: "Warfarin / Coumadin (Anticoagulants)",
    riskSeverity: "CRITICAL",
    clinicalConsequence:
      "Vitamin K in dark greens helps blood clot, which directly opposes blood thinner pills like Warfarin. If your intake changes suddenly, your medicine may stop working properly, raising the risk of blood clots.",
    doctorDirective:
      "You don't need to stop greens, but eat the same steady amount each week. Never make sudden big dietary changes without telling your doctor.",
  },
  {
    id: "warn-dairy-antibiotics",
    food: "Dairy Products (Milk, Curd, Paneer)",
    medicationClass: "Fluoroquinolones (Ciprofloxacin) & Tetracyclines",
    riskSeverity: "HIGH",
    clinicalConsequence:
      "The calcium in milk and curd binds directly to certain antibiotics in your stomach like glue. This stops your body from absorbing the medicine, causing the antibiotic to fail.",
    doctorDirective:
      "Eat dairy foods at least 2 hours before or 4 hours after taking these specific antibiotic pills.",
  },
  {
    id: "warn-potassium-ace",
    food: "High Potassium Foods (Salt Substitutes, Bananas, Millets)",
    medicationClass: "ACE Inhibitors (Enalapril, Ramipril) & ARBs (Telmisartan)",
    riskSeverity: "HIGH",
    clinicalConsequence:
      "These blood pressure pills slow down how fast your kidneys remove potassium. Eating 'low sodium' fake salts made with potassium can make potassium build up in your blood to dangerous levels, causing abnormal heartbeats.",
    doctorDirective:
      "Never use potassium-based 'low sodium' salt substitutes without explicit blood tests and advice from your doctor.",
  },
];
