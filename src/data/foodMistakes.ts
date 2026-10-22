// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Food Mistakes Intelligence Database
// The science of what to avoid before, during, and after eating.
// Separating genuine health risks from everyday food myths.
// Evidence Base: ICMR-NIN 2024, WHO Food Safety, Gastroenterology Consensus
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export type MistakePhase = "before" | "during" | "after";

export type MistakeRiskLevel =
  | "genuine_risk" // Red / High Attention: real microbiological or metabolic danger
  | "context_dependent" // Amber / Situational: depends on individual medical condition (reflux, anaemia, kidney)
  | "popular_myth"; // Emerald / Myth Debunked: harmless habit falsely claimed to be toxic

export interface FoodMistakeItem {
  id: string;
  phase: MistakePhase;
  phaseLabel: string;
  mistake: string;
  whyItMatters: string;
  betterPractice: string;
  riskLevel: MistakeRiskLevel;
  riskLabel: string;
  plainSummary: string;
  clinicalNote: string;
}

export interface IndianFoodMythItem {
  id: string;
  myth: string;
  reality: string;
  scientificExplanation: string;
  actionableVerdict: string;
  verdictType: "myth_busted" | "context_matters" | "partially_true";
  foodConcerned: string;
}

export interface FoodMythQuizQuestion {
  id: string;
  question: string;
  options: ("Fact" | "Myth" | "Context-dependent")[];
  correctAnswer: "Fact" | "Myth" | "Context-dependent";
  explanation: string;
  practicalTakeaway: string;
}

export interface SpecialCircumstanceGuidance {
  id: string;
  condition: string;
  iconName: string;
  criticalMistake: string;
  smartHabit: string;
  whyItMatters: string;
}

// ─── 1. FOOD MISTAKES INTELLIGENCE (BEFORE, DURING, AFTER) ───
export const FOOD_MISTAKES_CATALOG: FoodMistakeItem[] = [
  // BEFORE EATING
  {
    id: "mistake-hand-hygiene",
    phase: "before",
    phaseLabel: "Before Eating (Pre-Meal)",
    mistake: "Ignoring hand hygiene before touching food",
    whyItMatters:
      "Your hands touch phone screens, door handles, currency notes, and bathroom surfaces all day. Contaminated fingers transfer bacteria (like E. coli and Salmonella) directly onto your roti, fruit, or cutlery.",
    betterPractice:
      "Wash your hands thoroughly with soap and running clean water for 20 seconds before preparing or eating any food, and always after using the toilet.",
    riskLevel: "genuine_risk",
    riskLabel: "Genuine Health Risk",
    plainSummary:
      "Soap and clean water physically wash away invisible gut germs before they reach your mouth.",
    clinicalNote:
      "WHO and ICMR identify unwashed hands as the primary vehicle for foodborne diarrheal diseases in households.",
  },
  {
    id: "mistake-tea-hunger-suppression",
    phase: "before",
    phaseLabel: "Before Eating (Pre-Meal)",
    mistake: "Drinking hot milk chai to suppress hunger instead of eating a real meal",
    whyItMatters:
      "Using sweet milk chai to silence genuine hunger provides quick caffeine and refined sugar without real protein, iron, or vitamins. Furthermore, tea polyphenols and tannins in an empty stomach can trigger stomach acid irritation and cut plant iron absorption from your next meal.",
    betterPractice:
      "Treat chai as an enjoyable beverage between meals, never as a meal replacement. When hungry, eat wholesome staples like roasted chana, curd, fruit, or home-cooked dal-roti.",
    riskLevel: "context_dependent",
    riskLabel: "Context-Dependent Risk",
    plainSummary:
      "Tea gives temporary caffeine stimulation, not the tissue-repair nutrients your body is asking for.",
    clinicalNote:
      "Routine reliance on tea instead of balanced food promotes subclinical micronutrient deficiencies and acid dyspepsia.",
  },
  {
    id: "mistake-unverified-supplements",
    phase: "before",
    phaseLabel: "Before Eating (Pre-Meal)",
    mistake: "Swallowing vitamins and herbal pills before meals without checking interactions",
    whyItMatters:
      "Certain supplements interfere with prescription medicines. For example, calcium supplements bind to thyroid medicine (levothyroxine) and antibiotics, stopping them from absorbing. High-dose fat-soluble vitamins (A, D, E) can build up in your liver.",
    betterPractice:
      "Always check with your doctor or pharmacist about the exact timing for each tablet. Take thyroid medications with plain water at least 30 to 60 minutes before breakfast, completely away from calcium or iron pills.",
    riskLevel: "genuine_risk",
    riskLabel: "Genuine Health Risk",
    plainSummary:
      "Tablets can block each other in your stomach. Keep a 2 to 4 hour gap between mineral supplements and critical prescription drugs.",
    clinicalNote:
      "Drug-nutrient chelation in the stomach is a common, preventable cause of therapeutic drug failure.",
  },

  // DURING EATING
  {
    id: "mistake-eating-too-quickly",
    phase: "during",
    phaseLabel: "During Eating (Meal-Time)",
    mistake: "Gulping food down rapidly without comfortable chewing",
    whyItMatters:
      "It takes roughly 15 to 20 minutes for your gut to release fullness hormones (like CCK and GLP-1) to tell your brain you have had enough. Rushing through a plate causes you to swallow excess air and overshoot your energy needs before your brain notices fullness.",
    betterPractice:
      "Slow down enough to chew each bite comfortably. Put your spoon or roti down between mouthfuls and listen to your body's early fullness cues.",
    riskLevel: "context_dependent",
    riskLabel: "Context-Dependent Risk",
    plainSummary:
      "Chewing crushes food into tiny particles so your saliva enzymes can start breaking down starches smoothly.",
    clinicalNote:
      "Rapid eating is clinically correlated with increased postprandial gastric distension, aerophagia (gas), and higher risk of obesity.",
  },
  {
    id: "mistake-believing-water-is-harmful",
    phase: "during",
    phaseLabel: "During Eating (Meal-Time)",
    mistake: "Believing that drinking water during meals dilutes stomach acid and harms digestion",
    whyItMatters:
      "Many popular online videos claim drinking water with meals is dangerous. In biological reality, healthy stomach acid (pH 1.5 to 2.0) has immense buffering capacity. Moderate water sips actually help lubricate the food bolus, soften dietary fibre, and assist normal gastric mixing.",
    betterPractice:
      "Sip plain water comfortably whenever you feel thirsty during a meal. There is no biological need to endure a dry throat or wait an arbitrary 30 to 60 minutes.",
    riskLevel: "popular_myth",
    riskLabel: "Popular Myth Debunked",
    plainSummary:
      "Drinking water when thirsty during meals is completely safe and supports comfortable swallowing.",
    clinicalNote:
      "Gastroenterology clinical consensus confirms that routine water intake during meals does not impair digestive enzyme efficacy in healthy adults.",
  },
  {
    id: "mistake-treating-all-carbs-unhealthy",
    phase: "during",
    phaseLabel: "During Eating (Meal-Time)",
    mistake: "Treating everyday carbohydrates like rice, roti, and potatoes as toxic enemies",
    whyItMatters:
      "Extreme fad diets label all traditional Indian carbohydrate staples as dangerous. Whole carbohydrates supply glucose, which is the primary fuel for your brain, red blood cells, and working muscles, along with vital B-vitamins and dietary fibre.",
    betterPractice:
      "Focus on the whole plate rather than cutting out carbs: balance a moderate portion of rice or roti with plenty of cooked vegetables, a bowl of dal, curd, or eggs, and avoid refined deep-fried sugars.",
    riskLevel: "popular_myth",
    riskLabel: "Popular Myth Debunked",
    plainSummary:
      "Roti, rice, and potatoes are nutritious everyday staples when eaten in sensible portions alongside vegetables and protein.",
    clinicalNote:
      "ICMR-NIN 2024 dietary guidelines recommend that 50% to 56% of daily energy come from complex carbohydrates, primarily whole grains and legumes.",
  },
  {
    id: "mistake-cross-contamination",
    phase: "during",
    phaseLabel: "During Eating & Cooking",
    mistake: "Mixing raw foods and cooked meals with the same cutting board or serving spoons",
    whyItMatters:
      "Using the same knife or cutting board for raw poultry or unwashed root vegetables and then slicing ready-to-eat salad transfers raw surface bacteria onto food that will not be cooked.",
    betterPractice:
      "Use separate chopping boards and clean knives for raw meats and ready-to-eat salads. Always wash utensils thoroughly with soap between uses, and cook food thoroughly.",
    riskLevel: "genuine_risk",
    riskLabel: "Genuine Health Risk",
    plainSummary:
      "Never let raw juices from uncooked meat or unwashed vegetables touch finished cooked food.",
    clinicalNote:
      "Cross-contamination in domestic kitchens is responsible for over 40% of confirmed household food poisoning incidents.",
  },

  // AFTER EATING
  {
    id: "mistake-lying-down-immediately",
    phase: "after",
    phaseLabel: "After Eating (Post-Meal)",
    mistake: "Lying down flat on the bed or sofa immediately after a heavy meal",
    whyItMatters:
      "Gravity helps keep stomach acid and digestive enzymes inside your stomach. When you lie down flat with a full stomach, pressure forces the lower esophageal sphincter (the muscular valve) to open, letting acid wash up into your throat and chest.",
    betterPractice:
      "If you are prone to heartburn or acid reflux, stay upright (sitting or taking a gentle walk) for at least 2 to 3 hours after major meals, especially before bedtime.",
    riskLevel: "context_dependent",
    riskLabel: "Context-Dependent Risk",
    plainSummary:
      "Staying upright for 2 to 3 hours after dinner keeps stomach acid down and stops painful night-time heartburn.",
    clinicalNote:
      "Postprandial recumbency within 2 hours increases transient lower esophageal sphincter relaxations (TLESRs) and nighttime acid exposure.",
  },
  {
    id: "mistake-assuming-walking-is-bad",
    phase: "after",
    phaseLabel: "After Eating (Post-Meal)",
    mistake: "Assuming that any movement or gentle walking after meals damages your digestion",
    whyItMatters:
      "An old myth claims that moving after meals steals blood from your stomach. While vigorous sprinting or heavy weight lifting right after eating can cause nausea, light, comfortable walking actually speeds up gastric emptying and improves insulin sensitivity.",
    betterPractice:
      "Enjoy a leisurely, relaxed 10 to 15 minute stroll (like the traditional Indian Shatapavali - 100 gentle steps) after meals. It helps your muscles absorb post-meal glucose smoothly.",
    riskLevel: "popular_myth",
    riskLabel: "Popular Myth Debunked",
    plainSummary:
      "A slow, easy 10-minute walk after lunch or dinner helps your body manage blood sugar gently.",
    clinicalNote:
      "Multiple randomized trials confirm that 10–15 minutes of light postprandial walking blunts post-meal glycemic spikes significantly better than remaining seated.",
  },
  {
    id: "mistake-leaving-food-out-for-hours",
    phase: "after",
    phaseLabel: "After Eating (Post-Meal)",
    mistake: "Leaving cooked dal, rice, or sabzi sitting out at room temperature for hours",
    whyItMatters:
      "Bacteria multiply fastest in the 'danger zone' between 5°C and 60°C. In warm Indian climates (especially above 32°C), cooked rice and lentils can grow dangerous levels of Bacillus cereus and other toxins within 1 to 2 hours — even if the food still smells and looks completely normal.",
    betterPractice:
      "Refrigerate perishable cooked leftovers promptly, within 1 to 2 hours of cooking. If ambient temperature exceeds 32°C, cool and store within 1 hour.",
    riskLevel: "genuine_risk",
    riskLabel: "Genuine Health Risk",
    plainSummary:
      "Food poisoning bacteria do not always smell bad. Put leftovers in clean, covered containers in the fridge within 1 to 2 hours.",
    clinicalNote:
      "Bacillus cereus heat-stable emetic toxin (cereulide) is produced during prolonged room-temperature storage of cooked starches and cannot be destroyed by reheating.",
  },
  {
    id: "mistake-brushing-teeth-right-after-acid",
    phase: "after",
    phaseLabel: "After Eating (Post-Meal)",
    mistake: "Brushing your teeth aggressively immediately after eating citrus, amla, or vinegar",
    whyItMatters:
      "Acidic foods and drinks (lemon juice, amla, oranges, vinegar) temporarily soften the microscopic mineral layer of your dental enamel. Brushing with an abrasive toothbrush right away scrubs away this softened enamel, causing sensitivity and enamel thinning.",
    betterPractice:
      "Rinse your mouth with plain water right after acidic meals. Wait 30 to 60 minutes before brushing with toothpaste, allowing your saliva to naturally remineralize your teeth.",
    riskLevel: "genuine_risk",
    riskLabel: "Genuine Health Risk",
    plainSummary:
      "Acids temporarily soften tooth enamel. Rinse with plain water first, and wait 30 minutes before brushing.",
    clinicalNote:
      "Dental erosion studies demonstrate that mechanical toothbrushing within 30 minutes of acid exposure accelerates irreversible enamel loss.",
  },
  {
    id: "mistake-chai-immediately-after-food",
    phase: "after",
    phaseLabel: "After Eating (Post-Meal)",
    mistake: "Drinking a piping hot cup of chai immediately after your dal-chawal or roti-sabzi",
    whyItMatters:
      "Tea polyphenols and tannins bind tightly to non-haem plant iron in your stomach, forming insoluble complexes that your intestinal wall cannot absorb. This slashes iron absorption by over 50%.",
    betterPractice:
      "Enjoy your daily chai, but keep a 60-minute buffer after your major meals. This simple timing trick protects your iron stores without giving up your favourite drink.",
    riskLevel: "context_dependent",
    riskLabel: "Context-Dependent Risk",
    plainSummary:
      "Keep a 1-hour gap between your lunch or dinner and your chai to protect your body's iron absorption.",
    clinicalNote:
      "ICMR-NIN 2024 specifically recommends avoiding tea or coffee for at least 1 hour before and after meals to prevent iron deficiency anaemia.",
  },
];

// ─── 2. THE 5 INDIAN FOOD MYTHS WORTH CHALLENGING ───
export const INDIAN_FOOD_MYTHS: IndianFoodMythItem[] = [
  {
    id: "myth-water-dilution",
    myth: "Drinking water during or right after meals dilutes stomach acid and stops digestion.",
    reality:
      "Normal water consumption with meals does not impair human digestion in any clinically meaningful way.",
    scientificExplanation:
      "The human stomach secretes hydrochloric acid dynamically in response to food. Water passes through the stomach rapidly along the lesser curvature without washing away digestive enzymes, while aiding food lubrication and nutrient transit.",
    actionableVerdict:
      "Drink plain water whenever you feel thirsty during or after eating. You do not need to follow arbitrary 30-minute water-free rules.",
    verdictType: "myth_busted",
    foodConcerned: "Drinking Water",
  },
  {
    id: "myth-fruit-empty-stomach",
    myth: "Fruit must always be eaten on an empty stomach; eating fruit with meals makes it rot inside your belly.",
    reality:
      "Food does not rot in the human stomach. Strong hydrochloric acid prevents bacterial putrefaction.",
    scientificExplanation:
      "The stomach is an intensely acidic environment (pH 1.5–2.0) that naturally sterilizes incoming food. While dietary fibre in fruit can slow gastric emptying slightly (which actually helps stabilize blood glucose), food cannot rot or ferment into toxic alcohol in a healthy stomach.",
    actionableVerdict:
      "Eat fresh whole fruit whenever it suits your daily routine — as a morning snack, afternoon refreshment, or part of a balanced meal.",
    verdictType: "myth_busted",
    foodConcerned: "Fresh Seasonal Fruits",
  },
  {
    id: "myth-tea-harmless",
    myth: "Drinking milk tea immediately after lunch or dinner is a harmless digestive aid for everyone.",
    reality:
      "Chai immediately after meals cuts plant iron absorption by more than half, which is a major concern for anyone with fatigue or low iron.",
    scientificExplanation:
      "Tea contains abundant tannins and polyphenols that bind to plant non-haem iron in the stomach. While this may not trouble someone with high iron stores, it actively worsens borderline iron deficiency anaemia in vulnerable individuals.",
    actionableVerdict:
      "If you feel frequently tired or have low ferritin levels, wait at least 60 minutes after meals before enjoying your chai.",
    verdictType: "context_matters",
    foodConcerned: "Chai & Filter Coffee",
  },
  {
    id: "myth-curd-at-night",
    myth: "Eating curd (dahi) at night is inherently toxic, produces cold phlegm, and damages digestion.",
    reality:
      "There is no clinical or biological rule against eating curd at night for healthy individuals.",
    scientificExplanation:
      "Curd provides easily absorbed protein, calcium, and lactic acid at any hour of the day. Some individuals with active gastroesophageal reflux (GERD) or lactose sensitivity may feel discomfort from heavy, sour foods close to bedtime, but curd itself does not generate respiratory mucus or toxins.",
    actionableVerdict:
      "If you digest curd comfortably, enjoy a small bowl of fresh dahi at dinner. Those prone to reflux should simply finish dinner 2 to 3 hours before sleeping.",
    verdictType: "myth_busted",
    foodConcerned: "Fresh Curd (Dahi)",
  },
  {
    id: "myth-walking-damages-digestion",
    myth: "Walking or moving after meals damages digestion because blood rushes away from the stomach.",
    reality:
      "Gentle, leisurely walking after eating assists gastric motility and improves post-meal blood sugar levels.",
    scientificExplanation:
      "While intense anaerobic exercise (sprinting, heavy lifting) diverts splanchnic blood flow to muscles and can trigger cramping, light aerobic walking (at 3 to 4 km/h) enhances glucose uptake by skeletal muscle without impeding digestion.",
    actionableVerdict:
      "A relaxed 10 to 15 minute stroll after meals (the traditional 100-step Shatapavali) is a wonderful, evidence-backed daily practice.",
    verdictType: "myth_busted",
    foodConcerned: "Post-Meal Movement",
  },
];

// ─── 3. INTERACTIVE FOOD MYTH QUIZ (FACT, MYTH, OR CONTEXT-DEPENDENT) ───
export const FOOD_MYTH_QUIZ_QUESTIONS: FoodMythQuizQuestion[] = [
  {
    id: "quiz-1",
    question:
      "Drinking plain water during meals prevents proper digestion by diluting stomach acid.",
    options: ["Fact", "Myth", "Context-dependent"],
    correctAnswer: "Myth",
    explanation:
      "Stomach acid has immense buffering capacity. Moderate water sips actually assist food lubrication and smooth swallowing without harming digestive enzymes.",
    practicalTakeaway:
      "Sip water comfortably when thirsty during meals. There is no need to endure a dry throat.",
  },
  {
    id: "quiz-2",
    question:
      "Drinking strong black tea or milk chai with a lentil lunch cuts down how much iron your body absorbs.",
    options: ["Fact", "Myth", "Context-dependent"],
    correctAnswer: "Fact",
    explanation:
      "Tea polyphenols and tannins bind with plant non-haem iron in the stomach, slashing absorption by over 50%.",
    practicalTakeaway:
      "Keep a 60-minute window between iron-rich meals and your daily chai or coffee.",
  },
  {
    id: "quiz-3",
    question: "Eating curd (dahi) at night is automatically harmful to health for all people.",
    options: ["Fact", "Myth", "Context-dependent"],
    correctAnswer: "Myth",
    explanation:
      "Curd provides bioavailable protein and calcium at any hour. Individual tolerance, freshness, and avoiding lying down right away are what truly matter.",
    practicalTakeaway: "Enjoy fresh curd at dinner if your stomach tolerates it comfortably.",
  },
  {
    id: "quiz-4",
    question:
      "Lying down flat on a bed immediately after dinner triggers acid reflux in susceptible people.",
    options: ["Fact", "Myth", "Context-dependent"],
    correctAnswer: "Context-dependent",
    explanation:
      "People with healthy esophageal sphincters may feel fine, but anyone prone to heartburn or GERD will experience painful acid backflow when lying down flat within 2 to 3 hours.",
    practicalTakeaway:
      "Stay upright or take a gentle stroll for at least 2 to 3 hours after dinner if you suffer from heartburn.",
  },
  {
    id: "quiz-5",
    question: "A gentle 10-minute walk right after a meal damages your heart and digestion.",
    options: ["Fact", "Myth", "Context-dependent"],
    correctAnswer: "Myth",
    explanation:
      "Gentle post-meal walking (Shatapavali) helps skeletal muscles absorb glucose directly, blunting blood sugar spikes and easing digestion.",
    practicalTakeaway:
      "Take a relaxed 10-minute stroll after lunch or dinner to support steady energy and glucose balance.",
  },
];

// ─── 4. SPECIAL CIRCUMSTANCES INTELLIGENCE MATRIX ───
export const SPECIAL_CIRCUMSTANCES: SpecialCircumstanceGuidance[] = [
  {
    id: "circ-diabetes",
    condition: "Blood Sugar & Diabetes Management",
    iconName: "Activity",
    criticalMistake:
      "Drinking strained fruit juices or eating large bowls of refined white carbs on an empty stomach.",
    smartHabit:
      "Eat whole fruits with intact fiber, fill half your plate with vegetables and dal first, and take a gentle 10-minute post-meal walk.",
    whyItMatters:
      "Food structure and meal sequence slow down carbohydrate breakdown, keeping postprandial glucose curves smooth and steady.",
  },
  {
    id: "circ-anaemia",
    condition: "Low Iron & Fatigue (Anaemia Risk)",
    iconName: "Droplets",
    criticalMistake:
      "Drinking chai alongside dal-roti, or buying iron supplements without a confirmed ferritin blood test.",
    smartHabit:
      "Squeeze fresh lemon juice over cooked lentils or eat a fresh amla fruit, and maintain a 60-minute gap before drinking tea.",
    whyItMatters:
      "Ascorbic acid converts ferric iron into soluble ferrous iron, increasing vegetarian iron uptake by up to 300%.",
  },
  {
    id: "circ-reflux",
    condition: "Acid Reflux & Heartburn (GERD)",
    iconName: "Flame",
    criticalMistake:
      "Eating large oily meals late at night and lying flat on the bed within 30 minutes.",
    smartHabit:
      "Finish dinner at least 2 to 3 hours before bedtime, sleep with your head slightly elevated, and avoid tight waistbands.",
    whyItMatters:
      "Gravity keeps stomach acid below the esophageal valve while gastric emptying takes place.",
  },
  {
    id: "circ-pregnancy",
    condition: "Pregnancy & Maternal Nutrition",
    iconName: "HeartPulse",
    criticalMistake:
      "Consuming unpasteurized raw milk products, unwashed salads, or relying only on food for early folate.",
    smartHabit:
      "Take clinically prescribed folic acid (400 mcg) under medical supervision, ensure all dairy is pasteurized, and cook food thoroughly.",
    whyItMatters:
      "Embryonic neural tube development occurs within the first 28 days of pregnancy, and foodborne listeria poses severe risks to the fetus.",
  },
  {
    id: "circ-medications",
    condition: "Prescription Drug Interactions",
    iconName: "ShieldAlert",
    criticalMistake:
      "Taking calcium or iron tablets at the exact same moment as thyroid hormones or antibiotics.",
    smartHabit:
      "Take thyroid medications with plain water 30 to 60 minutes before breakfast; maintain a 2 to 4 hour gap before taking mineral supplements.",
    whyItMatters:
      "Minerals bind to medications in the stomach to form insoluble clumps, preventing the lifesaving drug from entering your blood.",
  },
];
