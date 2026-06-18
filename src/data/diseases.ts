import { type DiseaseEntry } from "./content";

export const DISEASE_ENTRIES: DiseaseEntry[] = [
  {
    id: "d-1",
    name: "Asthma",
    bodyPartId: "lung-left",
    genZContext: "Your lungs are basically acting dramatic and ghosting your air supply. Not a vibe.",
    overview: "A chronic respiratory condition causing airway inflammation and constriction.",
    symptoms: [
      { text: "Wheezing", frequency: "always" },
      { text: "Shortness of breath", frequency: "often" },
      { text: "Chest tightness", frequency: "sometimes" }
    ],
    whenToSeeDoctor: "If you need your rescue inhaler more than twice a week.",
    misconceptions: ["Asthma only happens in childhood", "You can't exercise with asthma"]
  },
  {
    id: "d-2",
    name: "Fatty Liver Disease (NAFLD)",
    bodyPartId: "liver",
    genZContext: "Your liver has been binge-watching Netflix and snacking too much. Needs a serious detox era.",
    overview: "Excess fat buildup in the liver not caused by alcohol consumption.",
    symptoms: [
      { text: "Fatigue", frequency: "often" },
      { text: "Pain in upper right abdomen", frequency: "sometimes" },
      { text: "No symptoms (silent)", frequency: "always" }
    ],
    whenToSeeDoctor: "Yearly blood tests (ALT/AST) are crucial as it's often asymptomatic.",
    misconceptions: ["Only heavy drinkers get liver disease", "Fatty liver is untreatable"]
  },
  {
    id: "d-3",
    name: "GERD (Acid Reflux)",
    bodyPartId: "stomach",
    genZContext: "Your stomach acid said 'I'm coming over' when nobody invited it. Toxic behavior.",
    overview: "Stomach acid repeatedly flows back into the tube connecting your mouth and stomach.",
    symptoms: [
      { text: "Heartburn", frequency: "always" },
      { text: "Regurgitation", frequency: "often" },
      { text: "Chronic dry cough", frequency: "sometimes" }
    ],
    whenToSeeDoctor: "If symptoms occur more than twice a week despite over-the-counter medication.",
    misconceptions: ["Milk cures heartburn (it actually worsens it later)", "It's just indigestion"]
  },
  {
    id: "d-4",
    name: "Migraine",
    bodyPartId: "brain",
    genZContext: "Your brain is throwing a massive tantrum with main character energy. 0/10 do not recommend.",
    overview: "A neurological condition causing intense, debilitating headaches, often with sensory disturbances.",
    symptoms: [
      { text: "Throbbing pain on one side of head", frequency: "always" },
      { text: "Light sensitivity", frequency: "often" },
      { text: "Nausea", frequency: "often" },
      { text: "Aura (visual spots)", frequency: "sometimes" }
    ],
    whenToSeeDoctor: "If headaches are accompanied by fever, stiff neck, or neurological symptoms.",
    misconceptions: ["It's just a bad headache", "Caffeine always triggers them (it can sometimes help)"]
  },
  {
    id: "d-5",
    name: "Celiac Disease",
    bodyPartId: "small-intestine",
    genZContext: "Your immune system beefs with bread. Gluten is officially canceled.",
    overview: "An autoimmune disorder where eating gluten leads to damage in the small intestine.",
    symptoms: [
      { text: "Diarrhea", frequency: "often" },
      { text: "Bloating and gas", frequency: "often" },
      { text: "Fatigue", frequency: "always" }
    ],
    whenToSeeDoctor: "If you have chronic digestive distress or unexplained anemia.",
    misconceptions: ["It's the same as a gluten allergy", "A little bit of gluten is okay"]
  },
  {
    id: "d-6",
    name: "Osteoarthritis",
    bodyPartId: "knees",
    genZContext: "Your joints have left the chat. They're basically grinding like bad brakes on a scooter.",
    overview: "The most common form of arthritis, occurring when protective cartilage wears down over time.",
    symptoms: [
      { text: "Joint pain during or after movement", frequency: "always" },
      { text: "Stiffness upon waking", frequency: "often" },
      { text: "Loss of flexibility", frequency: "often" }
    ],
    whenToSeeDoctor: "If joint pain or stiffness doesn't go away and interferes with daily activities.",
    misconceptions: ["Exercise makes it worse (it actually helps)", "It only affects old people"]
  },
  {
    id: "d-7",
    name: "Glaucoma",
    bodyPartId: "eyes",
    genZContext: "Your eye pressure is acting sus and slowly stealing your peripheral vision.",
    overview: "A group of eye conditions that damage the optic nerve, often due to abnormally high pressure.",
    symptoms: [
      { text: "Gradual loss of peripheral vision", frequency: "often" },
      { text: "No early symptoms", frequency: "always" },
      { text: "Severe eye pain", frequency: "sometimes" }
    ],
    whenToSeeDoctor: "If you experience sudden vision loss or see halos around lights.",
    misconceptions: ["You'll know if you have it", "It only affects the elderly"]
  },
  {
    id: "d-8",
    name: "Hypertension (High Blood Pressure)",
    bodyPartId: "heart",
    genZContext: "Your blood is rushing through your veins with zero chill. Major red flag.",
    overview: "A condition in which the force of the blood against the artery walls is too high.",
    symptoms: [
      { text: "No symptoms (silent killer)", frequency: "always" },
      { text: "Headaches", frequency: "sometimes" },
      { text: "Nosebleeds", frequency: "sometimes" }
    ],
    whenToSeeDoctor: "Requires regular monitoring; see a doctor if readings consistently exceed 130/80.",
    misconceptions: ["You can feel when your blood pressure is high", "It's normal with age"]
  },
  {
    id: "d-9",
    name: "Carpal Tunnel Syndrome",
    bodyPartId: "wrists",
    genZContext: "Your wrists are screaming 'touch grass' after too much doomscrolling or gaming.",
    overview: "A condition caused by compression of the median nerve as it travels through the wrist.",
    symptoms: [
      { text: "Tingling or numbness in fingers", frequency: "always" },
      { text: "Weakness in the hand", frequency: "often" },
      { text: "Pain traveling up the arm", frequency: "sometimes" }
    ],
    whenToSeeDoctor: "If symptoms interfere with your normal activities or sleep.",
    misconceptions: ["It's only caused by typing", "Surgery is the only treatment"]
  },
  {
    id: "d-10",
    name: "Kidney Stones",
    bodyPartId: "kidneys",
    genZContext: "Your kidneys made literal rocks. The pain is not giving.",
    overview: "Hard deposits made of minerals and salts that form inside your kidneys.",
    symptoms: [
      { text: "Severe pain in the side and back", frequency: "always" },
      { text: "Pain that radiates to the lower abdomen", frequency: "often" },
      { text: "Nausea and vomiting", frequency: "often" }
    ],
    whenToSeeDoctor: "Seek immediate attention if pain is so severe you can't sit still or is accompanied by fever.",
    misconceptions: ["Cranberry juice dissolves them", "Milk causes them"]
  },
  {
    id: "d-11",
    name: "Atrial Fibrillation (AFib)",
    bodyPartId: "heart",
    genZContext: "Your heart is glitching out of its regular rhythm. Needs a hard reset.",
    overview: "An irregular, often very rapid heart rhythm that can lead to blood clots in the heart.",
    symptoms: [
      { text: "Palpitations", frequency: "often" },
      { text: "Shortness of breath", frequency: "often" },
      { text: "Weakness", frequency: "sometimes" }
    ],
    whenToSeeDoctor: "If you feel your heart racing, fluttering, or skipping a beat frequently.",
    misconceptions: ["It's a heart attack", "It's harmless and just anxiety"]
  },
  {
    id: "d-12",
    name: "Irritable Bowel Syndrome (IBS)",
    bodyPartId: "large-intestine",
    genZContext: "Your gut is having a chaotic era. Completely unpredictable energy.",
    overview: "A common disorder that affects the large intestine, causing cramping, abdominal pain, bloating, gas, and diarrhea or constipation.",
    symptoms: [
      { text: "Abdominal pain", frequency: "always" },
      { text: "Changes in bowel habits", frequency: "always" },
      { text: "Bloating", frequency: "often" }
    ],
    whenToSeeDoctor: "If you have persistent changes in bowel habits or signs like weight loss or bleeding.",
    misconceptions: ["It's all in your head", "It causes permanent bowel damage"]
  },
  {
    id: "d-13",
    name: "Melanoma",
    bodyPartId: "skin",
    genZContext: "That sus mole needs an immediate vibe check from a dermatologist.",
    overview: "The most serious type of skin cancer, developing in the cells (melanocytes) that produce melanin.",
    symptoms: [
      { text: "A mole that changes in color, size, or feel", frequency: "always" },
      { text: "A mole with an irregular border", frequency: "often" },
      { text: "A lesion that bleeds", frequency: "sometimes" }
    ],
    whenToSeeDoctor: "If you notice a new, unusual growth or a change in an existing mole (ABCDE rule).",
    misconceptions: ["It only happens to fair-skinned people", "Sunscreen prevents it 100%"]
  },
  {
    id: "d-14",
    name: "Tinnitus",
    bodyPartId: "ears",
    genZContext: "Your ears are playing a high-pitched sound on loop and you can't hit skip.",
    overview: "The perception of noise or ringing in the ears without an external source.",
    symptoms: [
      { text: "Ringing, buzzing, or hissing sound", frequency: "always" },
      { text: "Difficulty concentrating", frequency: "often" },
      { text: "Sleep disturbances", frequency: "often" }
    ],
    whenToSeeDoctor: "If it occurs suddenly, without apparent cause, or is accompanied by hearing loss or dizziness.",
    misconceptions: ["It's an ear disease (it's actually a symptom)", "Nothing can be done about it"]
  },
  {
    id: "d-15",
    name: "Sciatica",
    bodyPartId: "spine-lumbar",
    genZContext: "The nerve in your lower back is throwing a tantrum all the way down your leg.",
    overview: "Pain that radiates along the path of the sciatic nerve, which branches from your lower back through your hips and buttocks and down each leg.",
    symptoms: [
      { text: "Pain radiating down the leg", frequency: "always" },
      { text: "Numbness or tingling", frequency: "often" },
      { text: "Muscle weakness in the affected leg", frequency: "sometimes" }
    ],
    whenToSeeDoctor: "If the pain lasts longer than a week, is severe, or is accompanied by bowel/bladder issues.",
    misconceptions: ["Bed rest is the best cure", "Surgery is inevitable"]
  },
  {
    id: "d-16",
    name: "Type 2 Diabetes",
    bodyPartId: "whole-body",
    genZContext: "Your body's insulin response left the chat. Sugar processing is glitching.",
    overview: "A chronic condition that affects the way the body processes blood sugar (glucose).",
    symptoms: [
      { text: "Increased thirst", frequency: "often" },
      { text: "Frequent urination", frequency: "often" },
      { text: "Blurred vision", frequency: "sometimes" }
    ],
    whenToSeeDoctor: "If you experience increased thirst/urination or if you are over 45 for routine screening.",
    misconceptions: ["Eating too much sugar directly causes it", "You have to be overweight to get it"]
  },
  {
    id: "d-17",
    name: "Osteoporosis",
    bodyPartId: "bones",
    genZContext: "Your bones are losing their density and becoming fragile AF. Need calcium stat.",
    overview: "A disease that thins and weakens the bones, making them fragile and more likely to break.",
    symptoms: [
      { text: "No symptoms in early stages", frequency: "always" },
      { text: "Back pain (caused by a fractured vertebra)", frequency: "sometimes" },
      { text: "Loss of height over time", frequency: "sometimes" }
    ],
    whenToSeeDoctor: "Women over 65 and men over 70 should be screened, or earlier if you have risk factors.",
    misconceptions: ["It only affects women", "It's a natural part of aging you can't prevent"]
  },
  {
    id: "d-18",
    name: "Chronic Sinusitis",
    bodyPartId: "sinuses",
    genZContext: "Your face cavities are blocked and inflamed. A total congestion nightmare.",
    overview: "The spaces inside your nose and head are swollen and inflamed for three months or longer.",
    symptoms: [
      { text: "Nasal inflammation", frequency: "always" },
      { text: "Thick, discolored discharge", frequency: "often" },
      { text: "Pain, tenderness, and swelling around eyes", frequency: "often" }
    ],
    whenToSeeDoctor: "If symptoms last more than a few days, worsen, or you have a history of recurrent sinusitis.",
    misconceptions: ["Antibiotics always cure it", "It's just a bad cold"]
  },
  {
    id: "d-19",
    name: "Plantar Fasciitis",
    bodyPartId: "feet",
    genZContext: "Your heel feels like it's stepping on Lego every morning. Huge L.",
    overview: "Inflammation of a thick band of tissue that runs across the bottom of your foot and connects your heel bone to your toes.",
    symptoms: [
      { text: "Stabbing pain near the heel", frequency: "always" },
      { text: "Pain is worst with the first steps in the morning", frequency: "often" },
      { text: "Pain after exercise, not during", frequency: "sometimes" }
    ],
    whenToSeeDoctor: "If heel pain doesn't improve with rest and stretching after a few weeks.",
    misconceptions: ["It's caused by a heel spur", "Walking through the pain helps"]
  },
  {
    id: "d-20",
    name: "Sleep Apnea",
    bodyPartId: "throat",
    genZContext: "Your throat keeps hitting pause on your breathing while you sleep. Nightmare rotation.",
    overview: "A potentially serious sleep disorder in which breathing repeatedly stops and starts.",
    symptoms: [
      { text: "Loud snoring", frequency: "often" },
      { text: "Episodes of breathing cessation during sleep", frequency: "always" },
      { text: "Morning headache", frequency: "sometimes" }
    ],
    whenToSeeDoctor: "If your snoring is loud enough to disturb others, or you wake up gasping.",
    misconceptions: ["Only overweight men get it", "Snoring always means sleep apnea"]
  },
  {
    id: "d-21",
    name: "Rheumatoid Arthritis",
    bodyPartId: "hands",
    genZContext: "Your immune system is friendly-firing your own joints. Super toxic.",
    overview: "An autoimmune and inflammatory disease where your immune system attacks healthy cells in your body by mistake, causing painful swelling in affected parts of the body.",
    symptoms: [
      { text: "Tender, warm, swollen joints", frequency: "always" },
      { text: "Joint stiffness that is usually worse in the mornings", frequency: "often" },
      { text: "Fatigue and fever", frequency: "sometimes" }
    ],
    whenToSeeDoctor: "If you experience persistent discomfort, swelling, or stiffness in your joints. Early diagnosis can prevent severe joint damage.",
    misconceptions: ["It only affects old people", "It's the same as regular 'wear and tear' osteoarthritis"]
  },
  {
    id: "d-22",
    name: "Ulcerative Colitis",
    bodyPartId: "large-intestine",
    genZContext: "Your large intestine is permanently angry and inflamed. Truly a bad time.",
    overview: "An inflammatory bowel disease (IBD) that causes long-lasting inflammation and ulcers in your digestive tract.",
    symptoms: [
      { text: "Diarrhea, often with blood or pus", frequency: "often" },
      { text: "Abdominal pain and cramping", frequency: "always" },
      { text: "Weight loss and fatigue", frequency: "sometimes" }
    ],
    whenToSeeDoctor: "If you notice a persistent change in your bowel habits, or if you experience abdominal pain or blood in your stool.",
    misconceptions: ["It's caused entirely by a poor diet", "It's just another name for Irritable Bowel Syndrome (IBS)"]
  },
  {
    id: "d-23",
    name: "Psoriasis",
    bodyPartId: "skin",
    genZContext: "Your skin cells are speedrunning their life cycle, leaving flaky patches.",
    overview: "A condition in which skin cells build up and form scales and itchy, dry patches. It's thought to be an immune system problem.",
    symptoms: [
      { text: "Red patches of skin covered with thick, silvery scales", frequency: "always" },
      { text: "Dry, cracked skin that may bleed", frequency: "often" },
      { text: "Itching, burning or soreness", frequency: "often" }
    ],
    whenToSeeDoctor: "If you suspect you may have psoriasis, or if the rash worsens and doesn't improve with over-the-counter treatments.",
    misconceptions: ["Psoriasis is contagious", "It is caused by poor hygiene"]
  },
  {
    id: "d-24",
    name: "Multiple Sclerosis (MS)",
    bodyPartId: "brain",
    genZContext: "Your immune system is chewing on your nerves' Wi-Fi cables.",
    overview: "A potentially disabling disease of the brain and spinal cord where the immune system attacks the protective sheath (myelin) that covers nerve fibers.",
    symptoms: [
      { text: "Numbness or weakness in one or more limbs", frequency: "often" },
      { text: "Electric-shock sensations that occur with certain neck movements", frequency: "sometimes" },
      { text: "Tremor, lack of coordination or unsteady gait", frequency: "sometimes" }
    ],
    whenToSeeDoctor: "If you experience unexplainable numbness, weakness, or vision changes for unknown reasons.",
    misconceptions: ["It is always fatal", "Everyone with MS will end up in a wheelchair"]
  },
  {
    id: "d-25",
    name: "Chronic Kidney Disease",
    bodyPartId: "kidneys",
    genZContext: "Your body's built-in water filters are slowly clocking out.",
    overview: "The gradual loss of kidney function over time, which means your kidneys can't filter dirt and excess fluid from your blood as well as they should.",
    symptoms: [
      { text: "Changes in urination frequency", frequency: "often" },
      { text: "Swelling in the feet and ankles", frequency: "often" },
      { text: "No symptoms in the early stages", frequency: "always" }
    ],
    whenToSeeDoctor: "If you have a medical condition that increases your risk of kidney disease, such as high blood pressure or diabetes, ask for regular testing.",
    misconceptions: ["Kidney failure happens suddenly without any underlying cause", "Drinking lots of water will cure kidney disease"]
  },
  {
    id: "d-26",
    name: "Peptic Ulcer Disease",
    bodyPartId: "stomach",
    genZContext: "Your stomach lining literally has potholes. The burning is real.",
    overview: "A condition in which painful sores or ulcers develop in the lining of the stomach or the first part of the small intestine.",
    symptoms: [
      { text: "Burning stomach pain", frequency: "always" },
      { text: "Feeling of fullness, bloating or belching", frequency: "often" },
      { text: "Intolerance to fatty foods or heartburn", frequency: "sometimes" }
    ],
    whenToSeeDoctor: "If you have severe or persistent stomach pain, dark/bloody stools, or vomit that looks like coffee grounds.",
    misconceptions: ["Spicy foods and stress are the primary causes (they only aggravate it, H. pylori bacteria is the main cause)", "Drinking milk helps heal ulcers"]
  },
  {
    id: "d-27",
    name: "Macular Degeneration",
    bodyPartId: "eyes",
    genZContext: "Your central vision is getting nerfed as you age.",
    overview: "An eye disease that can blur your central vision. It happens when aging causes damage to the macula — the part of the eye that controls sharp, straight-ahead vision.",
    symptoms: [
      { text: "Blurry or fuzzy central vision", frequency: "always" },
      { text: "Difficulty recognizing faces", frequency: "often" },
      { text: "Straight lines appearing wavy", frequency: "sometimes" }
    ],
    whenToSeeDoctor: "If you notice a sudden change in your central vision or if straight lines appear distorted or wavy.",
    misconceptions: ["It causes total blindness (it mostly affects central vision)", "Nothing can be done to slow its progression"]
  },
  {
    id: "d-28",
    name: "Hypothyroidism",
    bodyPartId: "throat",
    genZContext: "Your thyroid is moving at 0.5x speed. Fatigue is the main character.",
    overview: "A condition in which your thyroid gland (located in the lower front of your neck) doesn't produce enough of certain crucial hormones.",
    symptoms: [
      { text: "Fatigue and sluggishness", frequency: "often" },
      { text: "Increased sensitivity to cold", frequency: "often" },
      { text: "Unexplained weight gain", frequency: "sometimes" }
    ],
    whenToSeeDoctor: "If you're feeling tired for no reason or have any of the other signs or symptoms of hypothyroidism, such as dry skin, a pale, puffy face, or constipation.",
    misconceptions: ["Everyone with an underactive thyroid gets extremely overweight", "Eating a specific diet can cure it completely without medication"]
  },
  {
    id: "d-29",
    name: "Heart Failure",
    bodyPartId: "heart",
    genZContext: "Your heart's pumping power got severely nerfed and can't keep up.",
    overview: "A chronic, progressive condition in which the heart muscle is unable to pump enough blood to meet the body's needs for blood and oxygen.",
    symptoms: [
      { text: "Shortness of breath with activity or when lying down", frequency: "always" },
      { text: "Fatigue and weakness", frequency: "often" },
      { text: "Swelling in the legs, ankles and feet", frequency: "often" }
    ],
    whenToSeeDoctor: "Seek emergency medical care if you experience severe, sudden shortness of breath and coughing up pink, foamy mucus.",
    misconceptions: ["Heart failure means your heart has completely stopped beating", "It only happens to the elderly"]
  },
  {
    id: "d-30",
    name: "Chronic Obstructive Pulmonary Disease (COPD)",
    bodyPartId: "lung-left",
    genZContext: "Your lungs are perma-blocked and breathing feels like a massive chore.",
    overview: "A chronic inflammatory lung disease that causes obstructed airflow from the lungs, making it hard to breathe.",
    symptoms: [
      { text: "Shortness of breath, especially during physical activities", frequency: "always" },
      { text: "Wheezing and a chronic cough", frequency: "often" },
      { text: "Frequent respiratory infections", frequency: "sometimes" }
    ],
    whenToSeeDoctor: "If your symptoms are not improving with treatment or are getting worse, or if you notice signs of an infection.",
    misconceptions: ["Only smokers get COPD", "Once diagnosed, there is nothing you can do to improve breathing"]
  }
];
