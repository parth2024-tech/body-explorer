// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// The Living Body Atlas — Clinical Nutrition & Food Database
// Evidence-based nutrition levels, food synergy, and dietary guides
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
    title: "Level 1: Bio-Powerhouses",
    tagline: "Super Nutrient-Dense Whole Foods",
    description:
      "Unprocessed whole foods with maximal micronutrient density per calorie, protective polyphenols, prebiotic fibers, and essential fatty acids.",
    targetShare: "60% - 70% of plate",
    badgeClass: "bg-teal-500/20 text-teal-300 border-teal-500/40",
    borderClass: "border-teal-500/30 hover:border-teal-500/60",
    bgClass: "bg-teal-500/5",
    accentColor: "#00E5C4",
    recommendation: "Foundation of every meal. Eat abundantly across varied colors.",
  },
  2: {
    level: 2,
    title: "Level 2: Sustained Staples",
    tagline: "Complex Energy & Pure Building Blocks",
    description:
      "Minimally processed slow carbohydrates, lean bioavailable proteins, and clean dairy or legumes that yield steady insulin curves and long-lasting satiety.",
    targetShare: "25% - 30% of plate",
    badgeClass: "bg-sky-500/20 text-sky-300 border-sky-500/40",
    borderClass: "border-sky-500/30 hover:border-sky-500/60",
    bgClass: "bg-sky-500/5",
    accentColor: "#38BDF8",
    recommendation: "Essential for cellular repair, physical power, and glycogen replenishment.",
  },
  3: {
    level: 3,
    title: "Level 3: Mindful Portions",
    tagline: "Calorie-Dense & Processing-Sensitive",
    description:
      "Foods offering genuine culinary enjoyment or specific micronutrients, but accompanied by high saturated fat, sodium, or rapid caloric density requiring portion awareness.",
    targetShare: "< 10% - 15% of plate",
    badgeClass: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    borderClass: "border-amber-500/30 hover:border-amber-500/60",
    bgClass: "bg-amber-500/5",
    accentColor: "#F5A623",
    recommendation: "Enjoy mindfully with disciplined portion sizes.",
  },
  4: {
    level: 4,
    title: "Level 4: Depleting & Ultra-Processed",
    tagline: "Cellular & Microbiome Stressors",
    description:
      "Industrially formulated items packed with refined starches, high-fructose syrups, trans fats, synthetic emulsifiers, and chemical additives that disrupt metabolic health.",
    targetShare: "Minimal or zero (< 5%)",
    badgeClass: "bg-red-500/20 text-red-300 border-red-500/40",
    borderClass: "border-red-500/30 hover:border-red-500/60",
    bgClass: "bg-red-500/5",
    accentColor: "#FC3D21",
    recommendation: "Strictly minimize or eliminate to prevent chronic low-grade inflammation.",
  },
};

export interface FoodTip {
  id: string;
  title: string;
  foodName: string;
  level: NutritionLevel;
  system: "gut" | "metabolism" | "heart" | "brain" | "muscle_bone" | "liver";
  systemLabel: string;
  actionableTip: string;
  biologicalMechanism: string;
  evidenceTier:
    "Tier 1 Gold (Clinical Trial / Meta-Analysis)" | "Tier 2 Silver (Guidelines / Cohort Studies)";
  citation: string;
  quickStat: string;
  synergyHack: string;
  cautionAlert?: string;
  readingGrade: string;
  hi: {
    title: string;
    foodName: string;
    actionableTip: string;
    biologicalMechanism: string;
  };
}

export const FOOD_TIPS: FoodTip[] = [
  {
    id: "tip-fiber-first",
    title: "The Fiber-First Meal Sequencing Method",
    foodName: "Cruciferous Veggies, Leafy Greens, Raw Salad",
    level: 1,
    system: "metabolism",
    systemLabel: "Metabolic & Blood Glucose",
    actionableTip:
      "Eat fibrous vegetables first, proteins and healthy fats second, and starches or carbohydrates last during your main meals.",
    biologicalMechanism:
      "Soluble viscous fiber forms a protective gelatinous mesh in the duodenum. This slows gastric emptying and alpha-glucosidase activity, smoothing out glucose absorption and reducing post-meal insulin spikes.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    citation:
      "American Diabetes Association (ADA) Clinical Guidelines & Weill Cornell Medicine Trials",
    quickStat:
      "Reduces postprandial blood glucose spikes by up to 35% without changing portion size.",
    synergyHack:
      "Dress raw salads with 1 tablespoon of apple cider vinegar or extra virgin olive oil to further slow gastric emptying.",
    cautionAlert:
      "Drink plenty of water when increasing dietary fiber to prevent temporary abdominal bloating.",
    readingGrade: "Grade 7 (Plain Language)",
    hi: {
      title: "भोजन का सही क्रम: पहले फाइबर खाएं",
      foodName: "हरी पत्तेदार सब्जियां, सलाद, फूलगोभी",
      actionableTip:
        "भोजन की शुरुआत कच्ची सब्जियों या सलाद से करें, उसके बाद दाल/प्रोटीन और अंत में रोटी या चावल खाएं।",
      biologicalMechanism:
        "फाइबर आंतों में एक सुरक्षात्मक जेल बनाता है जो रक्तप्रवाह में चीनी के अवशोषण को धीमा कर देता है, जिससे शुगर नहीं बढ़ती।",
    },
  },
  {
    id: "tip-olive-oil-polyphenols",
    title: "Extra Virgin Olive Oil Oleocanthal Shield",
    foodName: "Cold-Pressed Extra Virgin Olive Oil (EVOO)",
    level: 1,
    system: "heart",
    systemLabel: "Cardiovascular & Endothelial",
    actionableTip:
      "Consume 1 to 2 tablespoons (15-30 ml) of raw, unheated extra virgin olive oil daily drizzled over meals or vegetables.",
    biologicalMechanism:
      "Oleocanthal exerts natural COX-1 and COX-2 anti-inflammatory inhibition mirroring low-dose ibuprofen. High polyphenol levels protect low-density lipoproteins (LDL) from atherogenic oxidation.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    citation: "PREDIMED Landmark Clinical Trial (New England Journal of Medicine)",
    quickStat:
      "Associated with a 31% reduction in major adverse cardiovascular events in high-risk populations.",
    synergyHack:
      "Pair with cooked tomatoes; the healthy monounsaturated lipids increase lycopene absorption by over 300%.",
    cautionAlert:
      "Store in dark glass bottles away from heat and light to prevent polyphenol oxidation.",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      title: "एक्स्ट्रा वर्जिन ऑलिव ऑयल और हृदय सुरक्षा",
      foodName: "कोल्ड-प्रेस्ड एक्स्ट्रा वर्जिन जैतून का तेल",
      actionableTip: "प्रतिदिन 1 से 2 चम्मच कच्चा ऑलिव ऑयल सब्जियों या सलाद पर डालकर खाएं।",
      biologicalMechanism:
        "इसके एंटीऑक्सीडेंट्स धमनियों में सूजन कम करते हैं और खराब कोलेस्ट्रॉल को जमने से रोकते हैं।",
    },
  },
  {
    id: "tip-fermented-microbiome",
    title: "Fermented Microbial Diversity Engine",
    foodName: "Plain Curd / Dahi, Kefir, Kimchi, Sauerkraut",
    level: 1,
    system: "gut",
    systemLabel: "Gut Microbiome & Immunity",
    actionableTip:
      "Incorporate 1 small serving of unpasteurized, live-culture fermented food with lunch or dinner every day.",
    biologicalMechanism:
      "Supplies live Lactobacillus and Bifidobacterium strains that produce short-chain fatty acids (acetate, propionate, butyrate). Butyrate fuels colonocytes and fortifies mucosal tight junctions.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    citation: "Stanford School of Medicine Human Microbiome Trial (Cell, 2021)",
    quickStat:
      "A 10-week fermented food protocol increased gut microbial diversity and reduced 19 systemic inflammatory markers.",
    synergyHack:
      "Combine curd or kefir with prebiotic inulin (found in garlic, onions, or green bananas) to feed beneficial bacteria.",
    cautionAlert:
      "Avoid commercial sweetened yogurts; added sugars feed opportunistic Candida and dysbiotic pathogens.",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      title: "आंतों के स्वास्थ्य के लिए किण्वित (फर्मेंटेड) खाद्य",
      foodName: "ताजा दही, छाछ, किमची",
      actionableTip: "रोजाना दोपहर या रात के भोजन में एक कटोरी ताजा बिना चीनी वाला दही शामिल करें।",
      biologicalMechanism:
        "दही के प्रोबायोटिक बैक्टीरिया आंतों की परत को मजबूत करते हैं और रोग प्रतिरोधक क्षमता बढ़ाते हैं।",
    },
  },
  {
    id: "tip-choline-brain",
    title: "Egg Yolk Phosphatidylcholine Matrix",
    foodName: "Whole Pasture-Raised Eggs",
    level: 2,
    system: "brain",
    systemLabel: "Brain & Cognitive Neuroplasticity",
    actionableTip:
      "Eat 1 to 2 whole eggs daily including the yolk, soft-boiled, poached, or gently scrambled without burning.",
    biologicalMechanism:
      "Egg yolks provide high bioavailable choline, the crucial precursor to acetylcholine, the neurotransmitter governing working memory, attention, and muscle contraction.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    citation: "Framingham Offspring Study & American Journal of Clinical Nutrition",
    quickStat:
      "Higher dietary choline intake is strongly correlated with superior verbal and visual memory performance.",
    synergyHack:
      "Cook with a pinch of turmeric and black pepper to prevent lipid peroxidation of delicate yolk fats.",
    cautionAlert:
      "Individuals with rare familial hypercholesterolemia should confirm dietary cholesterol targets with their physician.",
    readingGrade: "Grade 7 (Plain Language)",
    hi: {
      title: "अंडे की जर्दी और मस्तिष्क की कार्यक्षमता",
      foodName: "देसी साबुत अंडा",
      actionableTip: "प्रतिदिन 1-2 उबले अंडे जर्दी सहित खाएं। जर्दी को फेंकें नहीं।",
      biologicalMechanism:
        "जर्दी में कोलीन होता है जो दिमाग की याददाश्त और एकाग्रता को बढ़ाने वाले न्यूरोट्रांसमीटर बनाता है।",
    },
  },
  {
    id: "tip-protein-pacing",
    title: "Muscle Protein Synthesis Pacing",
    foodName: "Lentils, Soya, Paneer, Fish, Chicken Breast",
    level: 2,
    system: "muscle_bone",
    systemLabel: "Muscle Mass & Skeletal Support",
    actionableTip:
      "Distribute protein intake evenly across meals (25g to 35g per meal) rather than skewing it all into a single dinner.",
    biologicalMechanism:
      "Reaching the leucine threshold (~2.5g to 3g of leucine per serving) triggers mTORC1 phosphorylation, activating myofibrillar protein synthesis to prevent sarcopenia.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    citation:
      "International Society of Sports Nutrition (ISSN) Position Stand & McMaster University Trials",
    quickStat:
      "Even protein pacing boosts 24-hour muscle protein synthesis by 25% compared to skewed evening-heavy intake.",
    synergyHack:
      "Pair plant proteins (beans + brown rice or lentils + whole grains) to supply a complete complementary amino acid profile.",
    cautionAlert:
      "Patients with stage 3+ chronic kidney disease must consult their nephrologist regarding strict daily protein ceilings.",
    readingGrade: "Grade 7 (Plain Language)",
    hi: {
      title: "मांसपेशियों के लिए प्रोटीन का सही वितरण",
      foodName: "दालें, सोयाबीन, पनीर, मछली, चिकन",
      actionableTip:
        "दिनभर का प्रोटीन एक ही बार में खाने के बजाय हर भोजन में 25-30 ग्राम बांटकर खाएं।",
      biologicalMechanism:
        "हर 4-5 घंटे में प्रोटीन लेने से मांसपेशियां मजबूत रहती हैं और उम्र के साथ कमजोरी नहीं आती।",
    },
  },
  {
    id: "tip-nitric-oxide-beets",
    title: "Dietary Nitrate Vasodilation Circuit",
    foodName: "Beetroot, Arugula (Rocket), Spinach",
    level: 1,
    system: "heart",
    systemLabel: "Arterial Elasticity & Blood Pressure",
    actionableTip:
      "Consume 1/2 cup of freshly grated beetroot or 1 cup of dark leafy arugula 2 to 3 hours before physical activity.",
    biologicalMechanism:
      "Oral commensal bacteria convert dietary inorganic nitrates into nitrites. Gastric acid and endothelial nitric oxide synthase then generate nitric oxide (NO), causing vascular smooth muscle relaxation.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    citation: "British Journal of Clinical Pharmacology & American Heart Association (AHA)",
    quickStat: "Lowers systolic blood pressure by 4 to 8 mmHg within 3 to 6 hours of ingestion.",
    synergyHack:
      "Do NOT use antibacterial mouthwash immediately after eating beets, as it wipes out the oral nitrate-reducing bacteria.",
    cautionAlert:
      "Beetroot pigments can turn urine and stool pinkish-red (beeturia), which is completely harmless.",
    readingGrade: "Grade 7 (Plain Language)",
    hi: {
      title: "चुकंदर और रक्तचाप नियंत्रण",
      foodName: "चुकंदर, पालक, चौलाई",
      actionableTip: "सप्ताह में 3-4 दिन कद्दूकस किया हुआ चुकंदर या इसका ताजा सलाद खाएं।",
      biologicalMechanism:
        "चुकंदर का नाइट्रेट रक्त वाहिकाओं को चौड़ा करता है, जिससे ब्लड प्रेशर सामान्य रहता है।",
    },
  },
  {
    id: "tip-resistant-starch",
    title: "The Cooked-and-Cooled Resistant Starch Hack",
    foodName: "Parboiled Rice, Potatoes, Legumes",
    level: 2,
    system: "gut",
    systemLabel: "Gut Barrier & Glycemic Index",
    actionableTip:
      "Cook rice or potatoes, refrigerate them at 4°C for 12 to 24 hours, and reheat gently before eating.",
    biologicalMechanism:
      "Starch retrogradation rearranges amylose chains into crystalline Type 3 resistant starch (RS3). RS3 resists upper digestive enzymes and ferments in the colon into beneficial butyrate.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    citation: "Asia Pacific Journal of Clinical Nutrition & Food Chemistry Studies",
    quickStat:
      "Reduces the effective glycemic index by up to 30-40% compared to freshly cooked hot starch.",
    synergyHack:
      "Reheating does not destroy the retrograded crystal structure; it remains digestion-resistant!",
    cautionAlert:
      "Refrigerate cooked starch within 1 hour of cooking to prevent Bacillus cereus bacterial growth.",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      title: "ठंडे किए चावल और आलू का विज्ञान",
      foodName: "पकाकर ठंडा किया गया चावल या आलू",
      actionableTip: "चावल या आलू को पकाकर फ्रिज में 12 घंटे ठंडा करें, फिर हल्का गर्म करके खाएं।",
      biologicalMechanism:
        "ठंडा करने से इनका स्टार्च रेजिस्टेंट बन जाता है, जो वजन घटाने और पेट के कीटाणुओं को स्वस्थ रखने में मदद करता है।",
    },
  },
  {
    id: "tip-berry-anthocyanins",
    title: "Dark Berry Anthocyanin Micro-Vascular Defense",
    foodName: "Blueberries, Blackberries, Jamun, Pomegranate",
    level: 1,
    system: "brain",
    systemLabel: "Neurovascular & Cognitive Lifespan",
    actionableTip:
      "Eat 1/2 cup to 1 cup of fresh or frozen deep purple berries at least 4 times per week.",
    biologicalMechanism:
      "Anthocyanins readily cross the blood-brain barrier, concentrating in the hippocampus. They upregulate Brain-Derived Neurotrophic Factor (BDNF) and enhance cerebral blood flow.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    citation: "Nurses' Health Study (Annals of Neurology) & USDA Human Nutrition Research",
    quickStat:
      "Regular dark berry consumption is linked to up to 2.5 years of delayed cognitive decline in longitudinal aging cohorts.",
    synergyHack:
      "Enjoy with raw walnuts or chia seeds; the healthy fats prolong polyphenol transit time in the digestive tract.",
    cautionAlert:
      "Choose fresh, frozen, or unsweetened berries. Avoid berry jams loaded with high-fructose corn syrup.",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      title: "जामुन और बेरीज़ का मानसिक सुरक्षा कवच",
      foodName: "जामुन, ब्लूबेरी, अनार",
      actionableTip: "सप्ताह में 4-5 दिन एक मुट्ठी गहरे बैंगनी या लाल फल जैसे जामुन या अनार खाएं।",
      biologicalMechanism:
        "इन फलों के गहरे रंग वाले तत्व दिमाग में रक्त संचार बढ़ाते हैं और कोशिकाओं को बूढ़ा होने से बचाते हैं।",
    },
  },
  {
    id: "tip-turmeric-pepper",
    title: "Curcumin-Piperine Bioavailability Multiplier",
    foodName: "Raw Turmeric Root, Ground Black Pepper",
    level: 1,
    system: "liver",
    systemLabel: "Hepatic Detox & Joint Inflammation",
    actionableTip:
      "Whenever adding turmeric to soups, curries, or warm milk, always grind fresh black pepper alongside healthy fat.",
    biologicalMechanism:
      "Curcumin has poor systemic bioavailability due to rapid hepatic glucuronidation. Piperine in black pepper inhibits intestinal and hepatic glucuronidation, raising bioavailability by 2,000%.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    citation: "Planta Medica Pharmacological Landmark Study & St. John's Medical College",
    quickStat:
      "Increases curcumin plasma concentration and serum bioavailability by 2,000% (20-fold).",
    synergyHack:
      "Always cook in a lipid base (ghee, mustard oil, or coconut oil) because curcumin is completely fat-soluble.",
    cautionAlert:
      "Those with active gallstones or bile duct obstruction should avoid concentrated medicinal curcumin supplements.",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      title: "हल्दी और काली मिर्च की महा-जोड़ी",
      foodName: "कच्ची या पिसी हल्दी + ताजी पिसी काली मिर्च",
      actionableTip:
        "जब भी हल्दी का उपयोग करें, साथ में एक चुटकी ताजी काली मिर्च और थोड़ा सा घी/तेल जरूर मिलाएं।",
      biologicalMechanism:
        "काली मिर्च का पिपेरिन हल्दी के औषधीय गुणों के अवशोषण को 2000% तक बढ़ा देता है।",
    },
  },
  {
    id: "tip-seed-oil-danger",
    title: "Avoiding Reheated Industrial Seed Oils",
    foodName: "Reheated Palm Olein, Canola, Corn, Soybean Oil",
    level: 4,
    system: "liver",
    systemLabel: "Endothelial & Hepatic Cellular Health",
    actionableTip:
      "Avoid roadside deep-fried foods and commercial crisps prepared in repeatedly reheated commercial frying oils.",
    biologicalMechanism:
      "Repeated thermal cycling generates lipid peroxides, acrylamides, and toxic aldehydes (4-HNE). These compounds penetrate intestinal membranes, trigger gut dysbiosis, and promote non-alcoholic fatty liver.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    citation:
      "World Health Organization (WHO) Dietary Guidelines & Harvard T.H. Chan School of Public Health",
    quickStat:
      "Reheated industrial oils contain up to 20x higher concentrations of cytotoxic polar compounds.",
    synergyHack:
      "For high-heat home cooking, choose thermally stable saturated or monounsaturated fats like cold-pressed mustard oil or ghee.",
    cautionAlert:
      "Commercial fryers often reuse oil for days. Look for dark brown residue as a visual warning sign.",
    readingGrade: "Grade 7 (Plain Language)",
    hi: {
      title: "बार-बार उबाले गए तेल से बचें",
      foodName: "समोसे, कचौड़ी, चिप्स में प्रयुक्त बार-बार गर्म किया गया तेल",
      actionableTip: "बाजार में बार-बार उबाले गए काले तेल में तली चीजों को खाने से पूरी तरह बचें।",
      biologicalMechanism:
        "बार-बार गर्म होने से तेल में जहरीले केमिकल्स बन जाते हैं जो लिवर और दिल की नसों को नुकसान पहुंचाते हैं।",
    },
  },
  {
    id: "tip-bone-calcium-triad",
    title: "The Bone Mineral Triad: Calcium + D3 + K2",
    foodName: "Dark Leafy Greens, Sesame Seeds (Til), Natto/Fermented Cheese",
    level: 1,
    system: "muscle_bone",
    systemLabel: "Skeletal Mineralization & Arteries",
    actionableTip:
      "Ensure your calcium intake is accompanied by adequate vitamin D3 (sunlight) and vitamin K2 to direct calcium into bones instead of arteries.",
    biologicalMechanism:
      "Vitamin D3 upregulates intestinal calcium absorption proteins. Vitamin K2 carboxylates osteocalcin (binding calcium to bone matrix) and Matrix Gla Protein (MGP), preventing arterial calcification.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    citation: "Endocrine Society Clinical Practice Guidelines & Rotterdam Heart Study",
    quickStat:
      "Vitamin K2 intake correlates with a 52% reduction in severe coronary artery calcification.",
    synergyHack:
      "Sprinkle toasted unhulled white sesame seeds on salads; 1 tablespoon provides ~90mg of bioavailable calcium.",
    cautionAlert:
      "Patients taking Warfarin (Coumadin) must keep Vitamin K intake consistent and consult their cardiologist.",
    readingGrade: "Grade 7 (Plain Language)",
    hi: {
      title: "मजबूत हड्डियों का त्रिकोण: कैल्शियम + D3 + K2",
      foodName: "तिल, हरी सब्जियां, पनीर, धूप",
      actionableTip:
        "कैल्शियम के साथ-साथ सुबह की धूप (विटामिन D) जरूर लें ताकि कैल्शियम हड्डियों तक पहुंचे, नसों में न जमे।",
      biologicalMechanism:
        "विटामिन D कैल्शियम को सोखता है और विटामिन K2 उसे धमनियों के बजाय सीधे हड्डियों में पहुंचाता है।",
    },
  },
  {
    id: "tip-liquid-sugar-alert",
    title: "Liquid Fructose Hepatic Overload",
    foodName: "Packaged Fruit Juices, Sodas, Energy Drinks",
    level: 4,
    system: "metabolism",
    systemLabel: "Liver & Metabolic Syndrome",
    actionableTip:
      "Eat whole fruits with their intact fibrous matrix instead of drinking packaged or freshly pressed fruit juices.",
    biologicalMechanism:
      "Liquid fructose bypasses intestinal saturation and floods the portal vein directly to the liver. Hepatic fructokinase phosphorylates it without negative feedback, driving de novo lipogenesis and visceral fat deposition.",
    evidenceTier: "Tier 1 Gold (Clinical Trial / Meta-Analysis)",
    citation: "American Journal of Clinical Nutrition & Stanford Prevention Research Center",
    quickStat:
      "A single glass of packaged juice contains the free sugar equivalent of 4 whole oranges stripped of all fiber.",
    synergyHack:
      "Swap sodas and packaged juices for cold water infused with mint, cucumber slices, or lime wedges.",
    cautionAlert:
      "Even '100% no added sugar' bottled juices trigger an identical rapid hepatic fructose flood.",
    readingGrade: "Grade 6 (Plain Language)",
    hi: {
      title: "पैकेटबंद जूस और कोल्ड ड्रिंक से लिवर को खतरा",
      foodName: "डिब्बाबंद जूस, सोडा, एनर्जी ड्रिंक",
      actionableTip:
        "जूस पीने के बजाय साबुत फल चबाकर खाएं ताकि उसका फाइबर आपके शुगर को नियंत्रित रखे।",
      biologicalMechanism:
        "तरल रूप में मीठा सीधे लिवर में जाकर चर्बी (फैटी लिवर) में बदल जाता है क्योंकि इसमें फाइबर नहीं होता।",
    },
  },
];

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
    id: "syn-tomatoes-olive-oil",
    foodA: "Cooked Tomatoes",
    foodB: "Extra Virgin Olive Oil",
    synergyOutcome: "Lycopene Absorption Surge",
    multiplier: "+300% Bioavailability",
    mechanism:
      "Lycopene is a fat-soluble carotenoid locked inside plant cell walls. Thermal heat breaks down walls, and lipids form mixed micelles that facilitate lymphatic absorption.",
    culinaryIdea:
      "Slowly simmer crushed tomatoes with 2 tablespoons of cold-pressed olive oil, basil, and garlic.",
  },
  {
    id: "syn-spinach-lemon",
    foodA: "Spinach / Lentils",
    foodB: "Fresh Lemon Juice (Vitamin C)",
    synergyOutcome: "Non-Heme Iron Absorption",
    multiplier: "+400% Iron Uptake",
    mechanism:
      "Plant-based non-heme iron exists in the ferric (Fe3+) state. Ascorbic acid in lemon juice reduces it to the bioavailable ferrous (Fe2+) state and chelates it against inhibitory phytates.",
    culinaryIdea:
      "Squeeze half a fresh lemon directly over cooked dal, sautéed palak, or lentil soup just before serving.",
  },
  {
    id: "syn-turmeric-pepper",
    foodA: "Ground Turmeric Root",
    foodB: "Cracked Black Pepper",
    synergyOutcome: "Curcumin Bioavailability",
    multiplier: "+2,000% Plasma Peak",
    mechanism:
      "Piperine temporarily inhibits hepatic and intestinal glucuronidation enzymes, allowing intact bioactive curcumin molecules to enter the bloodstream.",
    culinaryIdea:
      "Whisk warm milk (or almond milk) with turmeric, a pinch of freshly crushed black pepper, and 1/2 tsp ghee.",
  },
  {
    id: "syn-green-tea-citrus",
    foodA: "Green Tea (EGCG)",
    foodB: "Citrus Juice (Lemon / Lime)",
    synergyOutcome: "Catechin Antioxidant Stabilization",
    multiplier: "+500% Catechin Survival",
    mechanism:
      "Green tea catechins degrade rapidly in the alkaline environment of the small intestine. Citrus acid lowers intestinal lumen pH, preserving up to 80% of active catechins.",
    culinaryIdea:
      "Add a generous squeeze of fresh lemon juice into warm, freshly steeped green tea.",
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
    food: "Dairy Products (Milk, Curd, Cheese)",
    medicationClass: "Fluoroquinolones (Ciprofloxacin) & Tetracyclines",
    riskSeverity: "HIGH",
    clinicalConsequence:
      "Calcium and magnesium ions chelate and bind with antibiotic molecules, forming insoluble complexes that your gut cannot absorb, leading to medication failure.",
    doctorDirective:
      "Consume dairy foods at least 2 hours before or 4 hours after taking these specific antibiotic doses.",
  },
  {
    id: "warn-potassium-ace",
    food: "High Potassium Foods (Salt Substitutes, Bananas)",
    medicationClass: "ACE Inhibitors (Enalapril, Ramipril) & ARBs (Telmisartan)",
    riskSeverity: "HIGH",
    clinicalConsequence:
      "These blood pressure medications reduce renal potassium excretion. Combining them with potassium chloride 'low sodium' salt substitutes can induce dangerous hyperkalemia and cardiac arrhythmias.",
    doctorDirective:
      "Avoid potassium-chloride-based salt substitutes without explicit serum electrolyte monitoring from your physician.",
  },
];
