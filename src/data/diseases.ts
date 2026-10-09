import { type DiseaseEntry } from "./content";

export const DISEASE_ENTRIES: DiseaseEntry[] = [
  {
    id: "d-1",
    name: "Asthma",
    bodyPartId: "lung-left",
    overview:
      "A long-lasting lung problem where your breathing tubes get swollen and narrow, making it hard to breathe.",
    symptoms: [
      { text: "Wheezing", frequency: "always" },
      { text: "Shortness of breath", frequency: "often" },
      { text: "Chest tightness", frequency: "sometimes" },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR WITHIN 48 HOURS: If you need your rescue inhaler more than twice a week. 🚨 EMERGENCY WARNING - CALL 112: If your lips turn blue or you are struggling to breathe.",
    misconceptions: ["Asthma only happens in childhood", "You can't exercise with asthma"],
  },
  {
    id: "d-2",
    name: "Fatty Liver Disease (NAFLD)",
    bodyPartId: "liver",
    overview:
      "When too much fat builds up in your liver, even if you don't drink alcohol. This makes it hard for your liver to clean your blood.",
    symptoms: [
      { text: "Fatigue", frequency: "often" },
      { text: "Pain in upper right abdomen", frequency: "sometimes" },
      { text: "No symptoms (silent)", frequency: "always" },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: Get yearly blood tests, as this often has zero warning signs. 🚨 EMERGENCY WARNING: Go to the ER if your skin or eyes suddenly turn yellow.",
    misconceptions: ["Only heavy drinkers get liver disease", "Fatty liver is untreatable"],
  },
  {
    id: "d-3",
    name: "GERD (Acid Reflux)",
    bodyPartId: "stomach",
    overview:
      "When harsh stomach acid constantly splashes backward up into your throat, causing a burning feeling in your chest.",
    symptoms: [
      { text: "Heartburn", frequency: "always" },
      { text: "Regurgitation", frequency: "often" },
      { text: "Chronic dry cough", frequency: "sometimes" },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: If you have heartburn more than twice a week and normal medicine doesn't help. 🚨 EMERGENCY WARNING: Go to the ER if you feel crushing chest pain that spreads to your arm or jaw.",
    misconceptions: [
      "Milk cures heartburn (it actually worsens it later)",
      "It's just indigestion",
    ],
  },
  {
    id: "d-4",
    name: "Migraine",
    bodyPartId: "brain",
    overview:
      "A serious brain condition that causes intense, blinding headaches. It can also make you feel sick and see flashing lights.",
    symptoms: [
      { text: "Throbbing pain on one side of head", frequency: "always" },
      { text: "Light sensitivity", frequency: "often" },
      { text: "Nausea", frequency: "often" },
      { text: "Aura (visual spots)", frequency: "sometimes" },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: If you get severe headaches multiple days a month. 🚨 EMERGENCY WARNING - CALL 112: If you get the worst headache of your life suddenly, or have a stiff neck and fever.",
    misconceptions: [
      "It's just a bad headache",
      "Caffeine always triggers them (it can sometimes help)",
    ],
  },
  {
    id: "d-5",
    name: "Celiac Disease",
    bodyPartId: "small-intestine",
    overview:
      "A condition where eating gluten (found in bread and pasta) makes your own body attack and damage your stomach area.",
    symptoms: [
      { text: "Diarrhea", frequency: "often" },
      { text: "Bloating and gas", frequency: "often" },
      { text: "Fatigue", frequency: "always" },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR WITHIN 24 HOURS: If you have terrible stomach pain, constant diarrhea, or feel incredibly tired all the time.",
    misconceptions: ["It's the same as a gluten allergy", "A little bit of gluten is okay"],
  },
  {
    id: "d-6",
    name: "Osteoarthritis",
    bodyPartId: "knees",
    overview:
      "When the slippery cushions between your knee bones wear away, making it painful to walk or bend your knees.",
    symptoms: [
      { text: "Joint pain during or after movement", frequency: "always" },
      { text: "Stiffness upon waking", frequency: "often" },
      { text: "Loss of flexibility", frequency: "often" },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: If knee pain or stiffness doesn't go away and stops you from doing normal daily things.",
    misconceptions: ["Exercise makes it worse (it actually helps)", "It only affects old people"],
  },
  {
    id: "d-7",
    name: "Glaucoma",
    bodyPartId: "eyes",
    overview:
      "When pressure builds up inside your eye and slowly damages the nerve that connects your eye to your brain.",
    symptoms: [
      { text: "Gradual loss of peripheral vision", frequency: "often" },
      { text: "No early symptoms", frequency: "always" },
      { text: "Severe eye pain", frequency: "sometimes" },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: If you notice you are losing vision on the sides of your eyes. 🚨 EMERGENCY WARNING - CALL 112: If you suddenly lose your vision or see rainbow halos around lights with terrible eye pain.",
    misconceptions: ["You'll know if you have it", "It only affects the elderly"],
  },
  {
    id: "d-8",
    name: "Hypertension (High Blood Pressure)",
    bodyPartId: "heart",
    overview:
      "When your blood pushes way too hard against the walls of your blood vessels, which can eventually damage your heart.",
    symptoms: [
      { text: "No symptoms (silent killer)", frequency: "always" },
      { text: "Headaches", frequency: "sometimes" },
      { text: "Nosebleeds", frequency: "sometimes" },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: Check your blood pressure yearly, as you usually won't feel anything wrong. 🚨 EMERGENCY WARNING: Go to the ER if your blood pressure is extremely high and you have a severe headache or chest pain.",
    misconceptions: ["You can feel when your blood pressure is high", "It's normal with age"],
  },
  {
    id: "d-9",
    name: "Carpal Tunnel Syndrome",
    bodyPartId: "wrists",
    overview:
      "When a nerve gets pinched or squeezed inside your wrist, causing your hand to feel numb and weak.",
    symptoms: [
      { text: "Tingling or numbness in fingers", frequency: "always" },
      { text: "Weakness in the hand", frequency: "often" },
      { text: "Pain traveling up the arm", frequency: "sometimes" },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: If your hands feel numb, tingle, or hurt so much that it wakes you up at night or stops you from doing normal things.",
    misconceptions: ["It's only caused by typing", "Surgery is the only treatment"],
  },
  {
    id: "d-10",
    name: "Kidney Stones",
    bodyPartId: "kidneys",
    overview:
      "When minerals build up inside your kidneys to form hard, sharp rocks that are incredibly painful to pee out.",
    symptoms: [
      { text: "Severe pain in the side and back", frequency: "always" },
      { text: "Pain that radiates to the lower abdomen", frequency: "often" },
      { text: "Nausea and vomiting", frequency: "often" },
    ],
    whenToSeeDoctor:
      "🚨 EMERGENCY WARNING: Go to the ER immediately if you are in so much pain that you can't sit still, or if you have pain combined with a fever or throwing up.",
    misconceptions: ["Cranberry juice dissolves them", "Milk causes them"],
  },
  {
    id: "d-11",
    name: "Atrial Fibrillation (AFib)",
    bodyPartId: "heart",
    overview:
      "An irregular, often very rapid heart rhythm that can lead to blood clots in the heart.",
    symptoms: [
      { text: "Palpitations", frequency: "often" },
      { text: "Shortness of breath", frequency: "often" },
      { text: "Weakness", frequency: "sometimes" },
    ],
    whenToSeeDoctor: "If you feel your heart racing, fluttering, or skipping a beat frequently.",
    misconceptions: ["It's a heart attack", "It's harmless and just anxiety"],
  },
  {
    id: "d-12",
    name: "Irritable Bowel Syndrome (IBS)",
    bodyPartId: "large-intestine",
    overview:
      "A common disorder that affects the large intestine, causing cramping, abdominal pain, bloating, gas, and diarrhea or constipation.",
    symptoms: [
      { text: "Abdominal pain", frequency: "always" },
      { text: "Changes in bowel habits", frequency: "always" },
      { text: "Bloating", frequency: "often" },
    ],
    whenToSeeDoctor:
      "If you have persistent changes in bowel habits or signs like weight loss or bleeding.",
    misconceptions: ["It's all in your head", "It causes permanent bowel damage"],
  },
  {
    id: "d-13",
    name: "Melanoma",
    bodyPartId: "skin",
    overview:
      "The most serious type of skin cancer, developing in the cells (melanocytes) that produce melanin.",
    symptoms: [
      { text: "A mole that changes in color, size, or feel", frequency: "always" },
      { text: "A mole with an irregular border", frequency: "often" },
      { text: "A lesion that bleeds", frequency: "sometimes" },
    ],
    whenToSeeDoctor:
      "If you notice a new, unusual growth or a change in an existing mole (ABCDE rule).",
    misconceptions: ["It only happens to fair-skinned people", "Sunscreen prevents it 100%"],
  },
  {
    id: "d-14",
    name: "Tinnitus",
    bodyPartId: "ears",
    overview: "The perception of noise or ringing in the ears without an external source.",
    symptoms: [
      { text: "Ringing, buzzing, or hissing sound", frequency: "always" },
      { text: "Difficulty concentrating", frequency: "often" },
      { text: "Sleep disturbances", frequency: "often" },
    ],
    whenToSeeDoctor:
      "If it occurs suddenly, without apparent cause, or is accompanied by hearing loss or dizziness.",
    misconceptions: [
      "It's an ear disease (it's actually a symptom)",
      "Nothing can be done about it",
    ],
  },
  {
    id: "d-15",
    name: "Sciatica",
    bodyPartId: "spine-lumbar",
    overview:
      "Pain that radiates along the path of the sciatic nerve, which branches from your lower back through your hips and buttocks and down each leg.",
    symptoms: [
      { text: "Pain radiating down the leg", frequency: "always" },
      { text: "Numbness or tingling", frequency: "often" },
      { text: "Muscle weakness in the affected leg", frequency: "sometimes" },
    ],
    whenToSeeDoctor:
      "If the pain lasts longer than a week, is severe, or is accompanied by bowel/bladder issues.",
    misconceptions: ["Bed rest is the best cure", "Surgery is inevitable"],
  },
  {
    id: "d-16",
    name: "Type 2 Diabetes",
    bodyPartId: "whole-body",
    overview: "A chronic condition that affects the way the body processes blood sugar (glucose).",
    symptoms: [
      { text: "Increased thirst", frequency: "often" },
      { text: "Frequent urination", frequency: "often" },
      { text: "Blurred vision", frequency: "sometimes" },
    ],
    whenToSeeDoctor:
      "If you experience increased thirst/urination or if you are over 45 for routine screening.",
    misconceptions: [
      "Eating too much sugar directly causes it",
      "You have to be overweight to get it",
    ],
  },
  {
    id: "d-17",
    name: "Osteoporosis",
    bodyPartId: "bones",
    overview:
      "A disease that thins and weakens the bones, making them fragile and more likely to break.",
    symptoms: [
      { text: "No symptoms in early stages", frequency: "always" },
      { text: "Back pain (caused by a fractured vertebra)", frequency: "sometimes" },
      { text: "Loss of height over time", frequency: "sometimes" },
    ],
    whenToSeeDoctor:
      "Women over 65 and men over 70 should be screened, or earlier if you have risk factors.",
    misconceptions: ["It only affects women", "It's a natural part of aging you can't prevent"],
  },
  {
    id: "d-18",
    name: "Chronic Sinusitis",
    bodyPartId: "sinuses",
    overview:
      "The spaces inside your nose and head are swollen and inflamed for three months or longer.",
    symptoms: [
      { text: "Nasal inflammation", frequency: "always" },
      { text: "Thick, discolored discharge", frequency: "often" },
      { text: "Pain, tenderness, and swelling around eyes", frequency: "often" },
    ],
    whenToSeeDoctor:
      "If symptoms last more than a few days, worsen, or you have a history of recurrent sinusitis.",
    misconceptions: ["Antibiotics always cure it", "It's just a bad cold"],
  },
  {
    id: "d-19",
    name: "Plantar Fasciitis",
    bodyPartId: "feet",
    overview:
      "Inflammation of a thick band of tissue that runs across the bottom of your foot and connects your heel bone to your toes.",
    symptoms: [
      { text: "Stabbing pain near the heel", frequency: "always" },
      { text: "Pain is worst with the first steps in the morning", frequency: "often" },
      { text: "Pain after exercise, not during", frequency: "sometimes" },
    ],
    whenToSeeDoctor: "If heel pain doesn't improve with rest and stretching after a few weeks.",
    misconceptions: ["It's caused by a heel spur", "Walking through the pain helps"],
  },
  {
    id: "d-20",
    name: "Sleep Apnea",
    bodyPartId: "throat",
    overview:
      "A potentially serious sleep disorder in which breathing repeatedly stops and starts.",
    symptoms: [
      { text: "Loud snoring", frequency: "often" },
      { text: "Episodes of breathing cessation during sleep", frequency: "always" },
      { text: "Morning headache", frequency: "sometimes" },
    ],
    whenToSeeDoctor: "If your snoring is loud enough to disturb others, or you wake up gasping.",
    misconceptions: ["Only overweight men get it", "Snoring always means sleep apnea"],
  },
  {
    id: "d-21",
    name: "Rheumatoid Arthritis",
    bodyPartId: "hands",
    overview:
      "An autoimmune and inflammatory disease where your immune system attacks healthy cells in your body by mistake, causing painful swelling in affected parts of the body.",
    symptoms: [
      { text: "Tender, warm, swollen joints", frequency: "always" },
      { text: "Joint stiffness that is usually worse in the mornings", frequency: "often" },
      { text: "Fatigue and fever", frequency: "sometimes" },
    ],
    whenToSeeDoctor:
      "If you experience persistent discomfort, swelling, or stiffness in your joints. Early diagnosis can prevent severe joint damage.",
    misconceptions: [
      "It only affects old people",
      "It's the same as regular 'wear and tear' osteoarthritis",
    ],
  },
  {
    id: "d-22",
    name: "Ulcerative Colitis",
    bodyPartId: "large-intestine",
    overview:
      "An inflammatory bowel disease (IBD) that causes long-lasting inflammation and ulcers in your digestive tract.",
    symptoms: [
      { text: "Diarrhea, often with blood or pus", frequency: "often" },
      { text: "Abdominal pain and cramping", frequency: "always" },
      { text: "Weight loss and fatigue", frequency: "sometimes" },
    ],
    whenToSeeDoctor:
      "If you notice a persistent change in your bowel habits, or if you experience abdominal pain or blood in your stool.",
    misconceptions: [
      "It's caused entirely by a poor diet",
      "It's just another name for Irritable Bowel Syndrome (IBS)",
    ],
  },
  {
    id: "d-23",
    name: "Psoriasis",
    bodyPartId: "skin",
    overview:
      "A condition in which skin cells build up and form scales and itchy, dry patches. It's thought to be an immune system problem.",
    symptoms: [
      { text: "Red patches of skin covered with thick, silvery scales", frequency: "always" },
      { text: "Dry, cracked skin that may bleed", frequency: "often" },
      { text: "Itching, burning or soreness", frequency: "often" },
    ],
    whenToSeeDoctor:
      "If you suspect you may have psoriasis, or if the rash worsens and doesn't improve with over-the-counter treatments.",
    misconceptions: ["Psoriasis is contagious", "It is caused by poor hygiene"],
  },
  {
    id: "d-24",
    name: "Multiple Sclerosis (MS)",
    bodyPartId: "brain",
    overview:
      "A potentially disabling disease of the brain and spinal cord where the immune system attacks the protective sheath (myelin) that covers nerve fibers.",
    symptoms: [
      { text: "Numbness or weakness in one or more limbs", frequency: "often" },
      {
        text: "Electric-shock sensations that occur with certain neck movements",
        frequency: "sometimes",
      },
      { text: "Tremor, lack of coordination or unsteady gait", frequency: "sometimes" },
    ],
    whenToSeeDoctor:
      "If you experience unexplainable numbness, weakness, or vision changes for unknown reasons.",
    misconceptions: ["It is always fatal", "Everyone with MS will end up in a wheelchair"],
  },
  {
    id: "d-25",
    name: "Chronic Kidney Disease",
    bodyPartId: "kidneys",
    overview:
      "The gradual loss of kidney function over time, which means your kidneys can't filter dirt and excess fluid from your blood as well as they should.",
    symptoms: [
      { text: "Changes in urination frequency", frequency: "often" },
      { text: "Swelling in the feet and ankles", frequency: "often" },
      { text: "No symptoms in the early stages", frequency: "always" },
    ],
    whenToSeeDoctor:
      "If you have a medical condition that increases your risk of kidney disease, such as high blood pressure or diabetes, ask for regular testing.",
    misconceptions: [
      "Kidney failure happens suddenly without any underlying cause",
      "Drinking lots of water will cure kidney disease",
    ],
  },
  {
    id: "d-26",
    name: "Peptic Ulcer Disease",
    bodyPartId: "stomach",
    overview:
      "A condition in which painful sores or ulcers develop in the lining of the stomach or the first part of the small intestine.",
    symptoms: [
      { text: "Burning stomach pain", frequency: "always" },
      { text: "Feeling of fullness, bloating or belching", frequency: "often" },
      { text: "Intolerance to fatty foods or heartburn", frequency: "sometimes" },
    ],
    whenToSeeDoctor:
      "If you have severe or persistent stomach pain, dark/bloody stools, or vomit that looks like coffee grounds.",
    misconceptions: [
      "Spicy foods and stress are the primary causes (they only aggravate it, H. pylori bacteria is the main cause)",
      "Drinking milk helps heal ulcers",
    ],
  },
  {
    id: "d-27",
    name: "Macular Degeneration",
    bodyPartId: "eyes",
    overview:
      "An eye disease that can blur your central vision. It happens when aging causes damage to the macula — the part of the eye that controls sharp, straight-ahead vision.",
    symptoms: [
      { text: "Blurry or fuzzy central vision", frequency: "always" },
      { text: "Difficulty recognizing faces", frequency: "often" },
      { text: "Straight lines appearing wavy", frequency: "sometimes" },
    ],
    whenToSeeDoctor:
      "If you notice a sudden change in your central vision or if straight lines appear distorted or wavy.",
    misconceptions: [
      "It causes total blindness (it mostly affects central vision)",
      "Nothing can be done to slow its progression",
    ],
  },
  {
    id: "d-28",
    name: "Hypothyroidism",
    bodyPartId: "throat",
    overview:
      "A condition in which your thyroid gland (located in the lower front of your neck) doesn't produce enough of certain crucial hormones.",
    symptoms: [
      { text: "Fatigue and sluggishness", frequency: "often" },
      { text: "Increased sensitivity to cold", frequency: "often" },
      { text: "Unexplained weight gain", frequency: "sometimes" },
    ],
    whenToSeeDoctor:
      "If you're feeling tired for no reason or have any of the other signs or symptoms of hypothyroidism, such as dry skin, a pale, puffy face, or constipation.",
    misconceptions: [
      "Everyone with an underactive thyroid gets extremely overweight",
      "Eating a specific diet can cure it completely without medication",
    ],
  },
  {
    id: "d-29",
    name: "Heart Failure",
    bodyPartId: "heart",
    overview:
      "A chronic, progressive condition in which the heart muscle is unable to pump enough blood to meet the body's needs for blood and oxygen.",
    symptoms: [
      { text: "Shortness of breath with activity or when lying down", frequency: "always" },
      { text: "Fatigue and weakness", frequency: "often" },
      { text: "Swelling in the legs, ankles and feet", frequency: "often" },
    ],
    whenToSeeDoctor:
      "Seek emergency medical care if you experience severe, sudden shortness of breath and coughing up pink, foamy mucus.",
    misconceptions: [
      "Heart failure means your heart has completely stopped beating",
      "It only happens to the elderly",
    ],
  },
  {
    id: "d-30",
    name: "Chronic Obstructive Pulmonary Disease (COPD)",
    bodyPartId: "lung-left",
    overview:
      "A chronic inflammatory lung disease that causes obstructed airflow from the lungs, making it hard to breathe.",
    symptoms: [
      { text: "Shortness of breath, especially during physical activities", frequency: "always" },
      { text: "Wheezing and a chronic cough", frequency: "often" },
      { text: "Frequent respiratory infections", frequency: "sometimes" },
    ],
    whenToSeeDoctor:
      "If your symptoms are not improving with treatment or are getting worse, or if you notice signs of an infection.",
    misconceptions: [
      "Only smokers get COPD",
      "Once diagnosed, there is nothing you can do to improve breathing",
    ],
  },
  {
    id: "d-31",
    name: "Dehydration",
    bodyPartId: "kidneys",
    overview:
      "A condition caused by the loss of too much water and essential salts from your body, preventing your organs from functioning properly.",
    symptoms: [
      { text: "Dark-colored urine", frequency: "always" },
      { text: "Dry mouth and extreme thirst", frequency: "often" },
      { text: "Dizziness or confusion", frequency: "sometimes" },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: If you cannot keep fluids down due to persistent vomiting. 🚨 EMERGENCY WARNING: Get immediate medical help if you experience extreme confusion, lethargy, or stop peeing altogether.",
    misconceptions: [
      "Thirst is the first sign of dehydration (it's actually a late sign)",
      "Drinking coffee dehydrates you just as much as not drinking anything",
    ],
  },
  {
    id: "d-32",
    name: "Hypertension (High Blood Pressure)",
    bodyPartId: "heart",
    overview:
      "A common condition where the force of the blood pushing against your artery walls is consistently too high, straining your heart.",
    symptoms: [
      { text: "No symptoms (known as the 'silent killer')", frequency: "always" },
      { text: "Headaches or shortness of breath", frequency: "sometimes" },
      { text: "Nosebleeds or dizziness", frequency: "sometimes" },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: Get a blood pressure reading at least once a year. 🚨 EMERGENCY WARNING: Go to the ER immediately if you have chest pain, a severe headache, or vision changes with a high reading.",
    misconceptions: [
      "If I don't feel sick, my blood pressure is fine",
      "High blood pressure is normal as you age",
    ],
  },
  {
    id: "d-33",
    name: "Type 2 Diabetes",
    bodyPartId: "liver",
    overview:
      "A chronic condition that affects how your body processes blood sugar (glucose), leading to insulin resistance and high blood sugar levels.",
    symptoms: [
      { text: "Increased thirst and frequent urination", frequency: "always" },
      { text: "Fatigue and blurry vision", frequency: "often" },
      { text: "Slow-healing sores or frequent infections", frequency: "sometimes" },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: If you feel constantly tired, thirsty, and are peeing much more than usual. 🚨 EMERGENCY WARNING: Go to the ER if you experience deep, rapid breathing, confusion, or extreme dehydration.",
    misconceptions: [
      "Diabetes is only caused by eating too much sugar",
      "You have to take insulin injections if you have diabetes",
    ],
  },
  {
    id: "d-34",
    name: "Iron-Deficiency Anemia",
    bodyPartId: "heart",
    overview:
      "A condition where your body does not have enough iron to make hemoglobin, the protein in red blood cells that carries oxygen from your lungs to your muscles and brain.",
    symptoms: [
      { text: "Extreme, crushing tiredness and lack of energy", frequency: "always" },
      { text: "Pale skin, especially inside the lower eyelids and gums", frequency: "often" },
      {
        text: "Cold hands and feet, brittle nails, or craving ice to chew",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: If you feel exhausted despite sleeping well or feel dizzy when standing. 🚨 EMERGENCY WARNING: Go to the ER immediately if you experience shortness of breath with mild walking, chest pain, or faint.",
    misconceptions: [
      "Eating green spinach alone will instantly cure iron deficiency (plant iron needs vitamin C to absorb well)",
      "Only women get iron-deficiency anemia",
    ],
  },
  {
    id: "d-35",
    name: "Hypothyroidism (Underactive Thyroid)",
    bodyPartId: "throat",
    overview:
      "When the small butterfly-shaped gland in your neck fails to produce enough thyroid hormone, causing your body's overall metabolism to slow down.",
    symptoms: [
      {
        text: "Constant fatigue and feeling cold when others feel comfortable",
        frequency: "always",
      },
      { text: "Unexplained weight gain and dry, coarse skin", frequency: "often" },
      { text: "Brain fog, memory lapses, and brittle hair", frequency: "sometimes" },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: If you notice ongoing fatigue, cold intolerance, and stubborn weight gain without dietary changes. A simple morning TSH blood test confirms it.",
    misconceptions: [
      "Thyroid issues only affect elderly people",
      "Eating cabbage or cauliflower completely ruins your thyroid",
    ],
  },
  {
    id: "d-36",
    name: "Hyperthyroidism (Overactive Thyroid)",
    bodyPartId: "throat",
    overview:
      "When your thyroid gland makes too much thyroid hormone, speeding up your heartbeat, digestive system, and nervous system into high gear.",
    symptoms: [
      { text: "Pounding, rapid heartbeat even while resting quietly", frequency: "always" },
      { text: "Unintentional weight loss despite eating normally or more", frequency: "often" },
      {
        text: "Shaky hands, feeling hot, excess sweating, and sleep issues",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: If you notice hand tremors, sudden weight loss, and feeling unusually anxious. 🚨 EMERGENCY WARNING: Go to the ER if your heart races over 130 beats per minute, or you develop high fever with confusion.",
    misconceptions: [
      "Hyperthyroidism is great because you can eat whatever you want and stay skinny",
      "Overactive thyroid resolves on its own without medical treatment",
    ],
  },
  {
    id: "d-37",
    name: "Irritable Bowel Syndrome (IBS)",
    bodyPartId: "large-intestine",
    overview:
      "A common digestive disorder that causes stomach cramps, gas, bloating, and unpredictable swings between diarrhea and constipation, closely linked to stress.",
    symptoms: [
      {
        text: "Stomach cramping or belly ache that eases after going to the bathroom",
        frequency: "always",
      },
      { text: "Painful bloating, gas, and stomach swelling after meals", frequency: "often" },
      {
        text: "Unpredictable bowel habits (alternating loose stools and hard stools)",
        frequency: "often",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: If digestive cramps interfere with your daily routine or social life. 🚨 EMERGENCY WARNING: Seek immediate medical care if you notice blood in your stool, unexplained weight loss, or pain that wakes you from sleep.",
    misconceptions: [
      "IBS leads to colon cancer (it does not damage the physical tissue or cause cancer)",
      "IBS is made up and just stress in your head",
    ],
  },
  {
    id: "d-38",
    name: "Kidney Stones",
    bodyPartId: "kidneys",
    overview:
      "Hard deposits made of minerals and salts that form inside your kidneys when your urine is too concentrated from lack of fluids, scratching the urinary tube as they pass.",
    symptoms: [
      {
        text: "Sudden, excruciating, sharp pain in your back or lower side below the ribs",
        frequency: "always",
      },
      { text: "Pain radiating down to your lower belly and groin area", frequency: "often" },
      {
        text: "Pink, red, or cloudy urine with nausea and burning while peeing",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: If you feel back or groin pain that comes in sharp waves. 🚨 EMERGENCY WARNING: Go to the ER immediately if you have unbearable pain, cannot pee at all, or have fever and chills alongside the pain.",
    misconceptions: [
      "Only men get kidney stones",
      "Drinking beer dissolves kidney stones (alcohol actually dehydrates you and makes stone formation worse)",
    ],
  },
  {
    id: "d-39",
    name: "Gout (Uric Acid Arthritis)",
    bodyPartId: "feet",
    overview:
      "A very painful form of arthritis where needle-sharp crystals of uric acid build up inside a joint (most often the big toe), causing sudden swelling, redness, and heat.",
    symptoms: [
      {
        text: "Sudden, severe throbbing joint pain that often begins in the middle of the night",
        frequency: "always",
      },
      { text: "Swelling, redness, and warmth over the affected joint", frequency: "often" },
      {
        text: "Extreme tenderness where even the weight of a light bedsheet causes agony",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: Within 24 hours of a painful joint flare-up for anti-inflammatory treatment. 🚨 EMERGENCY WARNING: Seek urgent emergency care if the joint pain is accompanied by fever, which could indicate a dangerous joint infection.",
    misconceptions: [
      "Gout only happens to wealthy people who drink expensive wine",
      "Once the pain goes away, the uric acid problem is completely resolved",
    ],
  },
  {
    id: "d-40",
    name: "Sciatica & Lumbar Disc Herniation",
    bodyPartId: "spine-lumbar",
    overview:
      "Pain that radiates along the path of the sciatic nerve, which branches from your lower back through your hips and buttocks and down each leg, usually caused by a slipped spinal disc.",
    symptoms: [
      {
        text: "Sharp, shooting pain from your lower back through your buttock down the back of your leg",
        frequency: "always",
      },
      {
        text: "Numbness, tingling, or 'pins and needles' sensation in your calf or foot",
        frequency: "often",
      },
      { text: "Pain that worsens when sitting, coughing, or sneezing", frequency: "sometimes" },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: If leg pain lasts longer than a week or gets progressively worse. 🚨 EMERGENCY WARNING: Go to the ER immediately if you suddenly lose sensation in your inner thighs or lose control of your bladder or bowels.",
    misconceptions: [
      "Complete bed rest for weeks is the best cure (gentle walking and physical therapy heal discs much faster)",
      "Everyone with sciatica needs surgery (over 90% heal with conservative care and exercise)",
    ],
  },
  {
    id: "d-41",
    name: "Chronic Insomnia",
    bodyPartId: "brain",
    overview:
      "A sleep disorder characterized by ongoing difficulty falling asleep, staying asleep through the night, or waking up too early and being unable to get back to sleep.",
    symptoms: [
      {
        text: "Difficulty falling asleep at night despite feeling physically exhausted",
        frequency: "always",
      },
      {
        text: "Waking up repeatedly during the night and struggling to drift back to sleep",
        frequency: "often",
      },
      {
        text: "Daytime fatigue, brain fog, irritability, and anxiety about bedtime",
        frequency: "often",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: If poor sleep affects your ability to function at work or drive safely during the day, or lasts longer than 4 weeks.",
    misconceptions: [
      "Drinking a nightcap of alcohol helps you sleep soundly (alcohol fragments sleep and ruins REM cycles)",
      "Everyone strictly needs exactly 8 hours of sleep or their health is ruined",
    ],
  },
  {
    id: "d-42",
    name: "PCOS / PCOD (Polycystic Ovary Syndrome)",
    bodyPartId: "skin",
    overview:
      "A common hormonal imbalance affecting women where the ovaries produce higher levels of male hormones (androgens) and cells become resistant to insulin.",
    symptoms: [
      { text: "Irregular, infrequent, or missed menstrual cycles", frequency: "always" },
      { text: "Excess hair growth on the chin, upper lip, chest, or abdomen", frequency: "often" },
      {
        text: "Stubborn cystic acne along the jawline and thinning hair on the scalp",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: If your periods are regularly late by months, or you notice sudden facial hair growth and stubborn acne. Early lifestyle changes and insulin management prevent future complications.",
    misconceptions: [
      "Women with PCOS can never have children (many conceive naturally or with simple medical guidance)",
      "PCOS is purely a reproductive issue (it is fundamentally a metabolic and insulin sensitivity condition)",
    ],
  },
  {
    id: "d-43",
    name: "Allergic Rhinitis (Dust & Pollen Allergy)",
    bodyPartId: "sinuses",
    overview:
      "An allergic reaction where your immune system mistakenly treats harmless airborne particles (pollen, dust mites, pet dander) as dangerous invaders, causing swelling in your nasal passages.",
    symptoms: [
      {
        text: "Frequent bouts of sneezing and a runny nose with clear, thin fluid",
        frequency: "always",
      },
      { text: "Itchy, watery, red eyes and dark circles under the eyes", frequency: "often" },
      { text: "Stuffy nasal congestion and an itchy throat or ears", frequency: "often" },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: If over-the-counter allergy medicines do not clear your breathing or if sinus pressure causes severe headaches.",
    misconceptions: [
      "Allergies and common colds are the exact same thing (colds have fevers and body aches, allergies do not)",
      "You will naturally outgrow allergies without any lifestyle adjustments",
    ],
  },
  {
    id: "d-44",
    name: "Gallstones & Biliary Colic",
    bodyPartId: "liver",
    overview:
      "Hardened pebble-like deposits of digestive bile that form in the gallbladder and cause intense cramps when they temporarily block the duct after a rich or fatty meal.",
    symptoms: [
      {
        text: "Sudden, rapidly intensifying pain in the upper right side of your belly",
        frequency: "always",
      },
      {
        text: "Pain radiating straight through to your back or right shoulder blade",
        frequency: "often",
      },
      {
        text: "Nausea, vomiting, and stomach distress after heavy or oily meals",
        frequency: "often",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: If you experience stomach pains after eating fatty foods. 🚨 EMERGENCY WARNING: Go to the ER immediately if you develop yellowing of the skin or eyes (jaundice), high fever, or belly pain lasting over 4 hours.",
    misconceptions: [
      "Drinking lemon juice and olive oil 'flushes' out gallstones (this dangerous folk remedy does nothing and delays surgery)",
      "Only elderly people get gallstones",
    ],
  },
  {
    id: "d-45",
    name: "Gastroenteritis (Stomach Bug & Food Poisoning)",
    bodyPartId: "stomach",
    overview:
      "An inflammation of the lining of your intestines caused by contaminated food, water, or viruses (such as norovirus), leading to quick fluid loss.",
    symptoms: [
      { text: "Watery, frequent diarrhea and stomach cramps", frequency: "always" },
      { text: "Sudden nausea, vomiting, and mild fever", frequency: "often" },
      {
        text: "Dry mouth, lightheadedness, and general body weakness from fluid loss",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: If you cannot keep any liquids down for more than 24 hours. 🚨 EMERGENCY WARNING: Go to the ER immediately if you notice blood in your vomit or stool, have a high fever over 102°F, or stop peeing completely.",
    misconceptions: [
      "Taking anti-diarrhea pills right away is always best (sometimes stopping diarrhea traps bacterial toxins inside your gut)",
      "Drinking plain water alone is enough during food poisoning (you need salt and glucose like ORS to rehydrate)",
    ],
  },
  {
    id: "d-46",
    name: "Cervical Spondylosis (Tech Neck & Spine Strain)",
    bodyPartId: "spine-cervical",
    overview:
      "Age-related or posture-related wear and tear affecting the spinal discs and joints in your neck, worsened by constantly looking down at computer and smartphone screens.",
    symptoms: [
      {
        text: "Neck stiffness and aching pain that gets worse when keeping your head in one position",
        frequency: "always",
      },
      {
        text: "Muscle spasms and tenderness across your shoulders and upper back",
        frequency: "often",
      },
      { text: "Tingling, numbness, or weakness in your hands or fingers", frequency: "sometimes" },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: If neck stiffness spreads down your arms or gives you frequent tension headaches. 🚨 EMERGENCY WARNING: Seek immediate medical care if you develop loss of coordination or difficulty using your fingers to button clothes.",
    misconceptions: [
      "Cracking your neck cures cervical spine wear and tear (ballistic cracking can injure blood vessels)",
      "Only elderly people get cervical spondylosis (hours of screen hunching triggers it in teenagers and young adults)",
    ],
  },
  {
    id: "d-47",
    name: "Carpal Tunnel Syndrome",
    bodyPartId: "wrists",
    overview:
      "A condition caused by compression of the median nerve as it travels through the carpal tunnel—a narrow passageway of bones and ligaments on the palm side of your wrist.",
    symptoms: [
      {
        text: "Numbness, tingling, or burning sensation in your thumb, index, and middle fingers",
        frequency: "always",
      },
      {
        text: "Sensations that travel up your wrist and forearm, often waking you at night",
        frequency: "often",
      },
      {
        text: "Weakness in your hand and a tendency to drop objects like cups or phones",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: If numbness or weak grip interferes with your normal work, typing, or sleep. Wearing a simple wrist splint at night often prevents permanent nerve injury.",
    misconceptions: [
      "Carpal tunnel is purely caused by typing on a keyboard (pregnancy, arthritis, and genetics are also major causes)",
      "Surgery is the only treatment available (most mild cases improve with splinting and ergonomic changes)",
    ],
  },
  {
    id: "d-48",
    name: "Plantar Fasciitis (Morning Heel Pain)",
    bodyPartId: "feet",
    overview:
      "Inflammation and microscopic tearing of the thick band of tissue (plantar fascia) that runs across the bottom of your foot and connects your heel bone to your toes.",
    symptoms: [
      {
        text: "Stabbing pain in the bottom of your heel with your very first steps in the morning",
        frequency: "always",
      },
      {
        text: "Heel pain that eases after walking for a few minutes but returns after sitting down",
        frequency: "often",
      },
      {
        text: "Pain triggered after standing on hard floors for long periods or after intense exercise",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: If heel pain persists for more than a few weeks despite supportive footwear and calf stretching.",
    misconceptions: [
      "Heel spurs are the direct cause of the pain (many people have heel spurs without any pain; the inflamed fascia band is the real issue)",
      "Walking completely barefoot strengthens the foot arch during an active flare-up (it actually stretches and strains the torn tissue)",
    ],
  },
  {
    id: "d-49",
    name: "Dry Eye Disease & Digital Eye Strain",
    bodyPartId: "eyes",
    overview:
      "A condition where your eyes either do not produce enough tears or produce poor-quality tears that evaporate too fast, greatly exacerbated by reduced blinking while staring at digital screens.",
    symptoms: [
      {
        text: "A scratchy, gritty, burning sensation in your eyes like sand is trapped inside",
        frequency: "always",
      },
      {
        text: "Blurred vision that temporarily clears when you blink several times",
        frequency: "often",
      },
      {
        text: "Paradoxical watery eyes (reflex tears triggered by dry irritation)",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: If eye burning, redness, or blurry vision does not improve with simple lubricating eye drops. 🚨 EMERGENCY WARNING: Seek immediate emergency eye care if you experience severe eye pain, extreme light sensitivity, or sudden vision loss.",
    misconceptions: [
      "Having watery eyes means your eyes cannot possibly be dry (watery tears are low-quality emergency reflex tears lacking lubricating oil)",
      "Eye drops with redness relievers cure dry eyes (they constrict blood vessels and cause rebound redness)",
    ],
  },
];
