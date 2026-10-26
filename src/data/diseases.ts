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
  {
    id: "d-50",
    name: "Positional Vertigo (BPPV / Loose Ear Crystals)",
    bodyPartId: "ears",
    overview:
      "A common inner-ear balance condition where tiny calcium crystals break loose and float into the fluid-filled balance canals of your ear, tricking your brain into feeling like the whole room is spinning when you tilt your head or roll over in bed.",
    symptoms: [
      {
        text: "Sudden, intense sensation that the room is spinning for 10 to 60 seconds when rolling over in bed or looking up",
        frequency: "always",
      },
      {
        text: "Mild nausea, unsteadiness, or feeling off-balance right after a spinning episode",
        frequency: "often",
      },
      {
        text: "Involuntary rhythmic jerking of the eyes during the dizzy spell",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: A doctor or physical therapist can perform a simple 5-minute head-turning exercise (the Epley maneuver) to guide the loose ear crystals back into place. 🚨 EMERGENCY WARNING: Call 911/112 immediately if dizziness is accompanied by double vision, slurred speech, a severe headache, or numbness in your face or limbs (signs of a stroke).",
    misconceptions: [
      "Vertigo is just a fear of heights (clinical vertigo is a physical inner-ear balance illusion, whereas fear of heights is acrophobia)",
      "You must stay completely still in bed for weeks to heal vertigo (targeted head-repositioning maneuvers resolve BPPV much faster)",
    ],
  },
  {
    id: "d-51",
    name: "TMJ Disorder (Jaw Joint & Muscle Strain)",
    bodyPartId: "jaw",
    overview:
      "Pain and stiffness in the hinge joint that connects your lower jawbone to your skull, often triggered by nighttime teeth grinding, subconscious stress clenching, or joint disc misalignment.",
    symptoms: [
      {
        text: "Aching pain in the jaw muscles, around the ear, or across the temples when chewing",
        frequency: "always",
      },
      {
        text: "Clicking, popping, or grating sounds when opening or closing your mouth wide",
        frequency: "often",
      },
      {
        text: "Temporary stiffness or difficulty opening the mouth all the way upon waking",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR OR DENTIST: If you have persistent pain when chewing, or if your jaw locks open or shut.",
    misconceptions: [
      "Every clicking jaw requires surgery (most TMJ flare-ups heal with soft foods, warm compresses, jaw relaxation, and a custom nightguard)",
      "Chewing tough gum strengthens a sore jaw joint (gum chewing overworks inflamed masseter muscles and worsens TMJ pain)",
    ],
  },
  {
    id: "d-52",
    name: "Restless Legs Syndrome (Nighttime Leg Urge)",
    bodyPartId: "muscles",
    overview:
      "A neurological sensory condition causing an irresistible urge to move your legs, usually appearing in the evening or while lying still in bed, often linked to low brain iron stores or dopamine signaling shifts.",
    symptoms: [
      {
        text: "An overwhelming urge to move or kick the legs when sitting or lying down at night",
        frequency: "always",
      },
      {
        text: "Creeping, crawling, pulling, or fizzing sensations deep inside the calves or thighs",
        frequency: "often",
      },
      {
        text: "Temporary relief as soon as you stand up, pace around, or stretch the legs",
        frequency: "always",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: If leg discomfort repeatedly ruins your sleep. Ask your doctor to check your blood ferritin (iron storage) levels, as correcting mild iron deficiency often improves symptoms.",
    misconceptions: [
      "Restless legs are just normal muscle cramps or nervousness (it is a distinct neurological condition tied to iron and dopamine pathways)",
      "Taking over-the-counter antihistamine sleep aids helps restless legs (diphenhydramine actually blocks dopamine receptors and makes restless legs significantly worse)",
    ],
  },
  {
    id: "d-53",
    name: "Rotator Cuff Tendinitis (Shoulder Impingement)",
    bodyPartId: "shoulders",
    overview:
      "Irritation, swelling, and micro-fraying of the four stabilizing tendons that wrap around your shoulder ball-and-socket joint, frequently caused by repetitive overhead reaching or rounded-shoulder desk posture.",
    symptoms: [
      {
        text: "Dull ache deep in the outer shoulder that worsens when reaching overhead or behind your back",
        frequency: "always",
      },
      {
        text: "Shoulder pain that wakes you up when you roll onto that side at night",
        frequency: "often",
      },
      {
        text: "Weakness when lifting objects away from your body",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: If shoulder pain lasts more than two weeks, or immediately if you suffer a fall and suddenly cannot lift your arm sideways at all.",
    misconceptions: [
      "Keeping your arm in a sling for weeks heals rotator cuff tendinitis (prolonged immobilization causes a 'frozen shoulder'; gentle physical therapy exercises are essential)",
      "Pushing through sharp overhead pain builds shoulder strength (it pinches the swollen tendon further under the shoulder blade bone)",
    ],
  },
  {
    id: "d-54",
    name: "Vitamin B12 Deficiency & Nerve Tingling",
    bodyPartId: "hands",
    overview:
      "A nutritional and neurological condition where low levels of Vitamin B12 prevent your body from making healthy red blood cells and maintaining the protective myelin insulation around your nerves.",
    symptoms: [
      {
        text: "Symmetric 'pins and needles' tingling or numbness in the fingertips and toes",
        frequency: "often",
      },
      {
        text: "Persistent physical fatigue, brain fog, and pale skin",
        frequency: "always",
      },
      {
        text: "A smooth, sore, or beefy-red tongue and mild balance unsteadiness",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: If you follow a strict vegetarian/vegan diet, take long-term Metformin or acid-blocker pills, and notice hand/foot tingling or chronic exhaustion. Simple blood tests and B12 supplements prevent permanent nerve damage.",
    misconceptions: [
      "Plant vegetables and unfortified spirulina algae provide active Vitamin B12 (unfortified plants contain pseudo-B12 that humans cannot use; fortified foods or B12 supplements are required on plant-based diets)",
      "Tingling hands are always caused by a pinched neck nerve (systemic B12 deficiency is a very common, reversible cause of nerve tingling)",
    ],
  },
  {
    id: "d-55",
    name: "Diverticulosis & Diverticulitis (Colon Pockets)",
    bodyPartId: "large-intestine",
    overview:
      "Small, pea-sized pouches (diverticula) that bulge outward through weak spots in the muscular wall of the lower large intestine due to years of high pressure from low-fiber diets; when a pouch gets infected or inflamed, it becomes diverticulitis.",
    symptoms: [
      {
        text: "Steady, tender aching pain in the lower-left side of the abdomen during a flare-up",
        frequency: "always",
      },
      {
        text: "Fever, nausea, and a sudden change in bowel habits (constipation or loose stools)",
        frequency: "often",
      },
      {
        text: "Bloating and mild abdominal cramping relieved by passing gas",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "🚨 EMERGENCY WARNING: Seek prompt medical care if you develop persistent lower-left belly pain accompanied by a fever, chills, or blood in your stool.",
    misconceptions: [
      "People with colon pouches must never eat nuts, seeds, or popcorn (large modern clinical studies prove nuts, seeds, and corn do NOT get trapped in pouches and actually protect the colon via fiber)",
      "Every case of diverticulitis requires immediate strong antibiotics or surgery (mild uncomplicated cases are often managed safely with bowel rest and medical supervision)",
    ],
  },
  {
    id: "d-56",
    name: "Digital Eye Strain (Computer Vision Syndrome)",
    overview:
      "A very common condition where your eyes feel dry, tired, burning, or blurry after staring at phones, tablets, or computer screens for hours without a break. Normally, you blink about 15 to 20 times a minute to wipe a fresh layer of soothing tears across your eyes, but when staring at a bright screen, your blink rate drops by more than half while your inner focusing muscles stay locked in a tight cramp.",
    symptoms: [
      {
        text: "Dry, gritty, burning, or watery eyes after screen use",
        frequency: "always",
      },
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
      {
        text: "Mild stiffness when turning your head from side to side",
        frequency: "often",
      },
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
    name: "Urinary Tract Infection (Bladder Infection / Cystitis)",
    overview:
      "A common bacterial infection that happens when unwanted bacteria enter the tube where pee comes out and multiply inside your bladder. It causes a sharp burning feeling when you pee and makes you feel like you need the bathroom every few minutes, even when your bladder is empty.",
    symptoms: [
      {
        text: "Sharp burning or stinging pain during urination",
        frequency: "always",
      },
      {
        text: "Constant, urgent need to pee with only a few drops coming out",
        frequency: "always",
      },
      {
        text: "Cloudy, dark, or strong-smelling urine",
        frequency: "often",
      },
      {
        text: "Low ache or pressure in the lower stomach just above the pubic bone",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "🚨 EMERGENCY WARNING - CALL 112 / 911 OR VISIT EMERGENCY IMMEDIATELY: If you have high fever, chills, vomiting, or deep pain in your side or mid-back. This means the infection has traveled up from your bladder into your kidneys, which is dangerous. ⚠️ SEE A DOCTOR WITHIN 24 HOURS: For antibiotic treatment if you have burning or painful urination.",
    misconceptions: [
      "Myth: Drinking sweetened cranberry juice cocktail from a supermarket bottle will cure a bladder infection. Reality: Sugary juices feed bacteria; true infections require a short doctor-prescribed antibiotic course, plus plenty of plain water to flush the bladder.",
    ],
    bodyPartId: "bladder",
  },
  {
    id: "d-59",
    name: "Overactive Bladder (Urinary Urgency & Frequency)",
    overview:
      "A condition where the bladder muscles squeeze suddenly and unpredictably, even when the bladder is only partly full. This creates an overwhelming urge to find a toilet right away and can cause poor sleep from waking up multiple times every night.",
    symptoms: [
      {
        text: "Sudden, uncontrollable urge to pee that is difficult to hold back",
        frequency: "always",
      },
      {
        text: "Peeing more than 8 times during the day",
        frequency: "often",
      },
      {
        text: "Waking up two or more times each night to use the bathroom",
        frequency: "often",
      },
      {
        text: "Small leaks before reaching the toilet (urgency incontinence)",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: If bladder urgency is disrupting your sleep, daily work, or causes leakage. 🚨 EMERGENCY WARNING: See a doctor promptly if there is visible pink or red blood in your urine, or sudden inability to pee at all.",
    misconceptions: [
      "Myth: You should completely stop drinking water to cure an overactive bladder. Reality: Drinking too little water makes urine highly concentrated and acidic, which irritates the bladder lining and makes the urgency worse.",
    ],
    bodyPartId: "bladder",
  },
  {
    id: "d-60",
    name: "Kidney Stones (Hard Mineral Crystals in the Kidneys)",
    overview:
      "Hard pebble-like deposits made of minerals and salts (most often calcium and oxalate) that form inside your kidneys when your urine has too little water and too much mineral waste. When a stone moves down into the narrow urine pipe, it can cause severe, wave-like pain.",
    symptoms: [
      {
        text: "Sharp, intense cramping pain in your back and side below your ribs that comes in waves",
        frequency: "always",
      },
      {
        text: "Pain radiating down into the lower belly, groin, or inner thigh",
        frequency: "often",
      },
      {
        text: "Pink, red, or brownish blood in your urine",
        frequency: "often",
      },
      {
        text: "Nausea and vomiting caused by the intense wave of pain",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "🚨 EMERGENCY WARNING - GO TO THE HOSPITAL IMMEDIATELY: If kidney stone pain comes with high fever, shaking chills, persistent vomiting, or complete inability to pass urine. ⚠️ SEE A DOCTOR: For imaging (ultrasound or CT) to check stone size and plan safe passage.",
    misconceptions: [
      "Myth: You must stop eating all calcium foods (like milk and curd) to prevent calcium kidney stones. Reality: Eating normal dietary calcium actually binds to oxalate in your digestive tract, stopping it from reaching the kidneys; low calcium intake increases your stone risk.",
    ],
    bodyPartId: "kidneys",
  },
  {
    id: "d-61",
    name: "Chronic Kidney Strain (Silent Kidney Filter Fatigue)",
    overview:
      "The slow, silent damage to the millions of microscopic filtering units in your kidneys (nephrons). Because the kidneys have no pain sensors on their inner filters, this strain usually develops without any symptoms for years, driven by untreated high blood pressure, high blood sugar, or heavy salt intake.",
    symptoms: [
      {
        text: "No obvious early pain or physical symptoms (silent progression)",
        frequency: "always",
      },
      {
        text: "Mild morning puffiness around the eyes or swelling around ankles and socks",
        frequency: "sometimes",
      },
      {
        text: "Foamy or bubbly appearance in urine when flushed",
        frequency: "sometimes",
      },
      {
        text: "Unexplained low daytime energy or fatigue",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR FOR ANNUAL BLOOD & URINE CHECKS: Ask your doctor for a simple eGFR blood test and urine albumin check every year, especially if you have high blood pressure or diabetes. 🚨 EMERGENCY WARNING: Seek emergency care if urine output completely stops or severe shortness of breath develops.",
    misconceptions: [
      "Myth: You will feel sharp kidney pain if your kidneys are being damaged. Reality: Kidney filters have no pain nerves; early kidney damage is completely painless and can only be detected with a simple annual lab test.",
    ],
    bodyPartId: "kidneys",
  },
  {
    id: "d-62",
    name: "Executive Function Burnout & Cognitive Fatigue",
    overview:
      "A state of mental exhaustion in the brain's frontal lobe caused by nonstop multitasking, information overload, high stress, and constant notifications. The brain struggles to focus, plan tasks, regulate emotions, and make basic everyday decisions.",
    symptoms: [
      {
        text: "Struggling to start or finish everyday tasks (decision paralysis)",
        frequency: "always",
      },
      {
        text: "Short temper, irritability, and quick emotional frustration",
        frequency: "often",
      },
      {
        text: "Re-reading the same sentence several times without remembering it",
        frequency: "often",
      },
      {
        text: "Feeling mentally drained even after sitting quietly all day",
        frequency: "always",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A HEALTHCARE PROVIDER: If cognitive exhaustion lasts more than 4 weeks despite adequate sleep, or if it interferes with your ability to safely drive, work, or care for yourself.",
    misconceptions: [
      "Myth: Drinking more coffee and energy drinks cures executive mental burnout. Reality: High caffeine only masks sleep debt and spikes adrenaline, making frontal lobe decision-making more impulsive and jittery.",
    ],
    bodyPartId: "frontal-lobe",
  },
  {
    id: "d-63",
    name: "Chronic Sleep Debt (Brain Cleaning Impairment)",
    overview:
      "When getting less than 7 hours of restful sleep night after night starves your brain of deep sleep. During deep sleep, the brain uses fluid waves (the glymphatic system) to wash away toxic metabolic waste; chronic sleep debt leaves waste behind, leading to slow reflexes and memory slips.",
    symptoms: [
      {
        text: "Heavy daytime grogginess and afternoon energy crashes",
        frequency: "always",
      },
      {
        text: "Slowed reaction times and frequent forgetfulness",
        frequency: "often",
      },
      {
        text: "Strong cravings for sugary treats and refined carbohydrates",
        frequency: "often",
      },
      {
        text: "Decreased immunity and frequent head colds",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: If you snore loudly, wake up gasping for air, or feel exhausted after 8 full hours in bed (possible obstructive sleep apnea).",
    misconceptions: [
      "Myth: You can easily 'catch up' on 5 days of lost sleep by sleeping in on Sunday morning. Reality: Sleeping in shifts your circadian rhythm, causing 'social jet lag' on Monday morning without fully repairing deep memory pathways.",
    ],
    bodyPartId: "frontal-lobe",
  },
  {
    id: "d-64",
    name: "Tinnitus (Ringing or Buzzing in the Ears)",
    overview:
      "The perception of a ringing, buzzing, hissing, or roaring sound in one or both ears when no external sound is present. It usually originates in the brain's auditory processing centers (temporal lobes) as they try to amplify signals after inner ear hair cells become tired or damaged.",
    symptoms: [
      {
        text: "Persistent high-pitched ringing, clicking, or white noise in ears",
        frequency: "always",
      },
      {
        text: "Sound seems louder at night in quiet rooms",
        frequency: "often",
      },
      {
        text: "Difficulty falling asleep or focusing on quiet reading",
        frequency: "often",
      },
      {
        text: "Sensitivity to loud sudden sounds (hyperacusis)",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "🚨 EMERGENCY WARNING - SEE AN ENT DOCTOR WITHIN 24 HOURS: If ringing starts suddenly in only one ear or is accompanied by sudden hearing loss or dizziness. ⚠️ SEE A DOCTOR: If tinnitus pulses in sync with your heartbeat (pulsatile tinnitus).",
    misconceptions: [
      "Myth: Tinnitus means you will definitely go completely deaf. Reality: Tinnitus is extremely common and does not mean total hearing loss; sound therapy, white noise, and stress reduction help the brain filter it out over time.",
    ],
    bodyPartId: "temporal-lobe",
  },
  {
    id: "d-65",
    name: "Auditory Sensory Overload",
    overview:
      "When your brain's temporal lobes and auditory nerves become overwhelmed by competing background noises (loud traffic, television, chatter, and phone alerts all at once). The brain struggles to filter out background racket, causing sensory fatigue and headaches.",
    symptoms: [
      {
        text: "Feeling irritable, tense, or anxious in crowded, loud spaces",
        frequency: "always",
      },
      {
        text: "Difficulty understanding what one person is saying when there is background music",
        frequency: "often",
      },
      {
        text: "Headache or temple tightness after spending time in shopping malls or noisy offices",
        frequency: "often",
      },
      {
        text: "Strong urge to escape to a silent, dark room",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE AN AUDIOLOGIST: If difficulty hearing speech in noisy environments continues even in small groups, to check for mild high-frequency hearing loss.",
    misconceptions: [
      "Myth: Being bothered by loud background noise means you have perfect hearing. Reality: Difficulty separating speech from background chatter often indicates tired auditory processing or early hair-cell fatigue.",
    ],
    bodyPartId: "temporal-lobe",
  },
  {
    id: "d-66",
    name: "Rotator Cuff Shoulder Tendon Strain",
    overview:
      "Irritation or micro-tears in the group of four small muscles and tendons that keep your upper arm bone firmly inside your shoulder socket. It often happens from reaching overhead repeatedly, sleeping with your arm tucked under your head, or lifting heavy bags with jerky motions.",
    symptoms: [
      {
        text: "Dull ache deep in the shoulder, especially when reaching up or behind your back",
        frequency: "always",
      },
      {
        text: "Pain when sleeping on the affected side at night",
        frequency: "often",
      },
      {
        text: "Weakness when lifting your arm to comb your hair or put on a jacket",
        frequency: "often",
      },
      {
        text: "Clicking or catching sensation when rotating your arm",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "🚨 EMERGENCY WARNING: If you have sudden inability to lift your arm after a fall or heavy jerk. ⚠️ SEE A DOCTOR: If shoulder pain lasts more than 2 weeks or prevents sleep.",
    misconceptions: [
      "Myth: You should completely freeze your shoulder in a sling for weeks. Reality: Keeping a shoulder completely still can lead to 'frozen shoulder'; gentle, pain-free pendulum swings and guided physical therapy keep the joint healthy.",
    ],
    bodyPartId: "shoulders",
  },
  {
    id: "d-67",
    name: "Frozen Shoulder (Adhesive Capsulitis)",
    overview:
      "A condition where the flexible connective capsule enclosing your shoulder joint becomes thick, tight, and inflamed. Over months, the shoulder becomes progressively stiff until it feels physically glued in place, making everyday movements like reaching a high shelf very painful.",
    symptoms: [
      {
        text: "Severe restriction in arm movement in almost every direction",
        frequency: "always",
      },
      {
        text: "Dull, aching shoulder pain that is significantly worse at night",
        frequency: "always",
      },
      {
        text: "Inability to reach behind your back to tuck in a shirt or fasten clothing",
        frequency: "often",
      },
      {
        text: "Pain radiating down into the upper bicep muscle",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A PHYSICIAN OR PHYSICAL THERAPIST: Early diagnosis and guided stretching prevent permanent stiffness and significantly speed up recovery.",
    misconceptions: [
      "Myth: Frozen shoulder goes away on its own in a few days. Reality: Without gentle movement and physical therapy, frozen shoulder can take 1 to 3 years to fully thaw.",
    ],
    bodyPartId: "shoulders",
  },
  {
    id: "d-68",
    name: "Tennis Elbow & Mouse Elbow (Lateral Epicondylitis)",
    overview:
      "Overuse and inflammation of the forearm tendons that attach to the bumpy outside of your elbow. Despite its sports name, it most commonly happens from repetitive computer mouse clicking, typing, turning doorknobs, or carrying heavy grocery bags.",
    symptoms: [
      {
        text: "Burning ache or sharp pain on the outside bump of your elbow",
        frequency: "always",
      },
      {
        text: "Weakness when gripping a coffee mug, turning a key, or shaking hands",
        frequency: "often",
      },
      {
        text: "Pain radiating down the top of your forearm toward your wrist",
        frequency: "often",
      },
      {
        text: "Stiffness in the elbow when straightening your arm first thing in the morning",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: If elbow pain prevents you from holding a pen or drinking glass, or does not improve after 2 weeks of ergonomic adjustments and rest.",
    misconceptions: [
      "Myth: Tennis elbow only happens to tennis players. Reality: More than 90% of tennis elbow cases occur in non-athletes, especially office workers, mechanics, carpenters, and painters who repeat wrist extensions.",
    ],
    bodyPartId: "elbows",
  },
  {
    id: "d-69",
    name: "Cubital Tunnel Syndrome (Bent-Elbow 'Funny Bone' Nerve Strain)",
    overview:
      "Irritation or stretching of the ulnar nerve as it passes through a narrow groove inside your elbow. Sleeping with elbows tightly bent or leaning elbows on hard desk edges stretches the nerve, causing tingling in your ring and pinky fingers.",
    symptoms: [
      {
        text: "Numbness, tingling, or 'pins and needles' in your pinky and ring finger",
        frequency: "always",
      },
      {
        text: "Symptoms worsen when holding a phone to your ear or sleeping with bent arms",
        frequency: "always",
      },
      {
        text: "Clumsiness or dropping small objects due to weakened finger grip",
        frequency: "often",
      },
      {
        text: "Aching pain on the inner side of the elbow joint",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A NEUROLOGIST OR HAND SPECIALIST: If finger numbness becomes constant or you notice visible muscle wasting in the web of your hand.",
    misconceptions: [
      "Myth: Pinky finger numbness is caused by carpal tunnel syndrome. Reality: Carpal tunnel affects the thumb, index, and middle fingers; pinky finger tingling is almost always from the ulnar nerve at the elbow.",
    ],
    bodyPartId: "elbows",
  },
  {
    id: "d-70",
    name: "Smartphone Thumb & Wrist Strain (De Quervain's Tenosynovitis)",
    overview:
      "Swelling and pain in the tendons along the thumb side of your wrist. It is triggered by repetitive thumb scrolling, one-handed smartphone typing, or lifting young babies, which pinches the thumb tendons inside their protective sheath.",
    symptoms: [
      {
        text: "Sharp or aching pain along the base of your thumb and outer wrist",
        frequency: "always",
      },
      {
        text: "Pain worsens when making a fist, twisting the wrist, or tapping with your thumb",
        frequency: "always",
      },
      {
        text: "Swelling or a small tender bump at the base of the thumb on your wrist",
        frequency: "often",
      },
      {
        text: "A catching or snapping feeling when moving your thumb back and forth",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A PHYSICIAN: If thumb rest, a wrist brace, and two-handed phone typing do not relieve the swelling within 10 to 14 days.",
    misconceptions: [
      "Myth: You should aggressively stretch a swollen thumb tendon through pain. Reality: Aggressive stretching rubs the tendon against its swollen sheath; resting the thumb with a simple splint allows inflammation to cool down.",
    ],
    bodyPartId: "wrists",
  },
  {
    id: "d-71",
    name: "Carpal Tunnel Syndrome (Median Nerve Wrist Pinch)",
    overview:
      "Compression of the median nerve inside the narrow tunnel in your wrist made of bones and ligaments. When wrist tendons swell from typing, gripping tools, or fluid retention, the nerve gets squeezed, causing tingling and numbness in your hand.",
    symptoms: [
      {
        text: "Tingling, burning, or numbness in the thumb, index finger, middle finger, and half the ring finger",
        frequency: "always",
      },
      {
        text: "Waking up at night feeling the urge to 'shake out' your numb hands",
        frequency: "always",
      },
      {
        text: "Electric shock-like sensations that occasionally shoot from wrist up toward your arm",
        frequency: "often",
      },
      {
        text: "Weakness when buttoning a shirt or opening jar lids",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: If hand numbness is present during the daytime or you begin dropping keys and cups. 🚨 EMERGENCY WARNING: Seek evaluation if the muscle cushion below your thumb starts shrinking.",
    misconceptions: [
      "Myth: Surgery is the only treatment for carpal tunnel. Reality: Wearing a neutral wrist splint at night and taking regular typing micro-breaks resolves mild to moderate carpal tunnel without surgery in the majority of patients.",
    ],
    bodyPartId: "wrists",
  },
  {
    id: "d-72",
    name: "Trigger Finger (Stuck Finger Tendon)",
    overview:
      "A condition where one of your fingers gets stuck in a bent position and then suddenly pops or snaps straight like a trigger being pulled. It happens when the tendon sheath becomes irritated and forms a small knot that gets stuck in the pulley ring of your palm.",
    symptoms: [
      {
        text: "A finger that pops, clicks, or catches when bending and straightening",
        frequency: "always",
      },
      {
        text: "Finger locked in a curled position that requires using your other hand to pop it straight",
        frequency: "often",
      },
      {
        text: "Morning finger stiffness that loosens up after warm water washing",
        frequency: "often",
      },
      {
        text: "A small, tender lump (nodule) at the base of the finger on the palm side",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A HAND SPECIALIST: If your finger becomes permanently locked bent or if the joint becomes hot, red, and swollen.",
    misconceptions: [
      "Myth: Trigger finger is a bone problem. Reality: Trigger finger is a soft-tissue tendon problem that responds very well to resting splints, warm soaks, and anti-inflammatory care.",
    ],
    bodyPartId: "hands",
  },
  {
    id: "d-73",
    name: "Hand & Finger Morning Stiffness",
    overview:
      "A common feeling of tight, clumsy, swollen fingers when waking up in the morning. It can be caused by fluid pooling in hands during sleep, early osteoarthritis wear in small finger joints, or repetitive hand labor.",
    symptoms: [
      {
        text: "Fingers feel stiff, puffy, and hard to make a tight fist upon waking",
        frequency: "always",
      },
      {
        text: "Stiffness eases after 15 to 30 minutes of gentle movement and warm water washing",
        frequency: "often",
      },
      {
        text: "Mild ache at the base of the thumb or small finger knuckles",
        frequency: "often",
      },
      {
        text: "Hard bony bumps forming on the end joints of fingers (Heberden nodes)",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A RHEUMATOLOGIST OR PHYSICIAN: If morning stiffness lasts longer than 60 minutes every morning, involves hot swollen joints in both hands, or comes with fever (signals inflammatory arthritis like rheumatoid arthritis).",
    misconceptions: [
      "Myth: Cracking your knuckles causes arthritis in your fingers. Reality: Multiple medical studies show knuckle cracking only pops nitrogen bubbles in joint fluid and does not cause arthritis.",
    ],
    bodyPartId: "hands",
  },
  {
    id: "d-74",
    name: "Tight Hip Flexors & 'Dead Butt' Glute Weakness",
    overview:
      "When sitting in an office chair or sofa for 8+ hours a day keeps your hip muscles locked in a shortened, cramped position. Over time, the hip flexors become tight while the large buttock muscles (glutes) become sleepy and weak (gluteal amnesia), pulling your pelvis forward and straining your lower back.",
    symptoms: [
      {
        text: "Stiffness and pulling in the front of your hips when standing up straight from a chair",
        frequency: "always",
      },
      {
        text: "A dull, chronic ache in the lower back after standing or walking for 20 minutes",
        frequency: "often",
      },
      {
        text: "Hips feeling tight during walking strides or stair climbing",
        frequency: "often",
      },
      {
        text: "Arching lower back posture with protruding belly (anterior pelvic tilt)",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A PHYSICAL THERAPIST: If hip tightness causes groin pinching pain or restricts your ability to walk comfortably.",
    misconceptions: [
      "Myth: Lower back pain always starts in the spine. Reality: In desk workers, lower back pain is frequently caused by tight front hip flexors and weak glute muscles pulling the lower spine out of alignment.",
    ],
    bodyPartId: "hips",
  },
  {
    id: "d-75",
    name: "Hip Bursitis (Outer Hip Soreness)",
    overview:
      "Swelling of the small, fluid-filled shock-absorbing cushion (bursa) that sits between your outer thigh bone and the tendons that cross over it. It causes sharp or aching pain on the outside of your hip that flares up when lying on that side or climbing stairs.",
    symptoms: [
      {
        text: "Ache or tender spot on the outer point of your hip when pressed",
        frequency: "always",
      },
      {
        text: "Pain when lying on the affected side in bed at night",
        frequency: "always",
      },
      {
        text: "Pain that increases when getting up after sitting for a long period",
        frequency: "often",
      },
      {
        text: "Aching when walking up hills or climbing flights of stairs",
        frequency: "often",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR: If hip pain causes a noticeable limp or does not settle down after 2 weeks of sleeping with a pillow between your knees.",
    misconceptions: [
      "Myth: Outer hip pain always means your hip joint socket is worn out. Reality: Pain on the outside of the hip is almost always bursitis or tendon irritation, not deep hip socket arthritis.",
    ],
    bodyPartId: "hips",
  },
  {
    id: "d-76",
    name: "Runner's Knee (Patellofemoral Kneecap Tracking Pain)",
    overview:
      "A dull, aching pain behind or around the kneecap where it glides against the thigh bone. It occurs when the kneecap rubs unevenly due to muscle imbalances (weak thighs or tight outer hip bands), flaring up during stairs, squats, or prolonged sitting with bent knees.",
    symptoms: [
      {
        text: "Dull ache around or behind your kneecap, especially when walking down stairs",
        frequency: "always",
      },
      {
        text: "Knee stiffness after sitting with knees bent at a desk or in a movie theater",
        frequency: "always",
      },
      {
        text: "Grinding, clicking, or crunching sounds when squatting down",
        frequency: "often",
      },
      {
        text: "Mild puffiness around the front of the knee after running or long walks",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "🚨 EMERGENCY WARNING: If your knee suddenly gives out completely, locks so you cannot bend it, or swells like a balloon within 2 hours of a twist. ⚠️ SEE A DOCTOR: For guided quad strengthening exercises.",
    misconceptions: [
      "Myth: You should completely stop all leg exercises if you have runner's knee. Reality: Resting completely weakens the thigh muscles further; gentle straight-leg raises, glute bridges, and walking strengthen the kneecap's support system.",
    ],
    bodyPartId: "knees",
  },
  {
    id: "d-77",
    name: "Knee Cartilage Wear (Early Osteoarthritis)",
    overview:
      "The gradual thinning of the smooth, slippery cartilage cushion inside your knee joint. As cartilage wears down, the bones glide with more friction, resulting in morning stiffness and joint creaking.",
    symptoms: [
      {
        text: "Joint stiffness when waking up or standing up after sitting, lasting 10 to 15 minutes",
        frequency: "always",
      },
      {
        text: "Aching in the knee that worsens toward the end of an active day",
        frequency: "often",
      },
      {
        text: "Creaking, cracking, or grinding sensations when bending the knee",
        frequency: "often",
      },
      {
        text: "Mild swelling or warmth around the joint after long walks",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE AN ORTHOPEDIC SPECIALIST: For weight-bearing X-rays to assess cartilage spacing and create a low-impact exercise plan (cycling, swimming, walking).",
    misconceptions: [
      "Myth: Walking wears out your knee cartilage faster if you have osteoarthritis. Reality: Cartilage has no blood vessels and needs the gentle compression of walking to absorb nutrients like a sponge; sedentary living accelerates joint decay.",
    ],
    bodyPartId: "knees",
  },
  {
    id: "d-78",
    name: "Ankle Inversion Sprain (Twisted Ankle Ligament)",
    overview:
      "An injury that occurs when your foot accidentally rolls inward, overstretching or tearing the tough bands of tissue (ligaments) on the outside of your ankle. It leads to rapid swelling, bruising, and pain when stepping on the foot.",
    symptoms: [
      {
        text: "Sudden pain on the outer side of the ankle immediately after a roll or twist",
        frequency: "always",
      },
      {
        text: "Swelling and puffiness on the outside of the ankle within minutes to hours",
        frequency: "always",
      },
      {
        text: "Purple, blue, or yellow bruising spreading down into the foot and toes",
        frequency: "often",
      },
      {
        text: "Tenderness when touching the outer ankle bone bump",
        frequency: "often",
      },
    ],
    whenToSeeDoctor:
      "🚨 SEE A DOCTOR FOR AN X-RAY IMMEDIATELY: If you cannot take 4 steps on the foot immediately after the injury, or if there is severe bone tenderness (Ottawa Ankle Rules for detecting fractures).",
    misconceptions: [
      "Myth: You should leave a sprained ankle completely immobilized in a cast for 6 weeks. Reality: Mild to moderate sprains heal faster and regain better balance with early, gentle pain-free ankle circles and supported walking after the first 48 hours.",
    ],
    bodyPartId: "ankles",
  },
  {
    id: "d-79",
    name: "Achilles Tendon Tightness & Morning Heel Stiffness",
    overview:
      "Irritation of the large cord-like tendon connecting your calf muscles to your heel bone. Walking in flat unsupportive shoes, sudden increases in running, or tight calf muscles pull hard on the tendon, creating morning stiffness behind the heel.",
    symptoms: [
      {
        text: "Ache and stiffness in the back of the heel or lower calf during your first morning steps",
        frequency: "always",
      },
      {
        text: "Stiffness eases slightly after walking around for 5 to 10 minutes",
        frequency: "always",
      },
      {
        text: "Tenderness or mild swelling when pinching the tendon 2 inches above the heel bone",
        frequency: "often",
      },
      {
        text: "Sharp tightness when pushing off your toes while running or climbing stairs",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "🚨 EMERGENCY WARNING - GO TO EMERGENCY IMMEDIATELY: If you feel a sudden, loud 'pop' or feel like someone kicked you in the back of the leg, followed by inability to point your toes downward (possible Achilles tendon rupture).",
    misconceptions: [
      "Myth: You should aggressively stretch a cold, painful Achilles tendon first thing out of bed. Reality: Gentle warm calf massages and slow eccentric heel drops under load are clinically proven to rebuild tendon collagen far better than harsh cold stretching.",
    ],
    bodyPartId: "ankles",
  },
  {
    id: "d-80",
    name: "Tech Neck & Hunched Upper Back Strain (Postural Kyphosis)",
    overview:
      "Muscular fatigue and burning soreness between your shoulder blades caused by leaning your head forward toward phones and laptop screens. Every inch your head leans forward adds 10 pounds of extra strain on your upper back muscles.",
    symptoms: [
      {
        text: "Burning ache or deep knot sensation between the shoulder blades and upper spine",
        frequency: "always",
      },
      {
        text: "Forward-head posture with rounded, slumped shoulders",
        frequency: "always",
      },
      {
        text: "Tightness across the chest muscles (pectorals) that makes taking a deep breath feel restricted",
        frequency: "often",
      },
      {
        text: "Relief when lying flat on your back on a firm floor or foam roller",
        frequency: "often",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DOCTOR OR PHYSICAL THERAPIST: If upper back pain is accompanied by numbness, tingling, or shooting pain wrapping around your ribs to your chest.",
    misconceptions: [
      "Myth: Posture corrector braces permanently fix hunched backs. Reality: Wearing a rigid posture strap makes your own back muscles lazier; active back-strengthening rows and raising your computer screen to eye level are what rebuild strong posture.",
    ],
    bodyPartId: "spine-thoracic",
  },
  {
    id: "d-81",
    name: "Thoracic Rib Joint Stiffness (Mid-Back Catching Pain)",
    overview:
      "Irritation in the small joints where your ribs connect to the vertebrae of your mid-back. Prolonged desk slumping or awkward twisting can cause these joints to get restricted, resulting in a sharp catching sensation when you take a deep breath or turn your torso.",
    symptoms: [
      {
        text: "Sharp or catching pain in the mid-back when taking a full, deep breath",
        frequency: "always",
      },
      {
        text: "Pain when twisting your torso to look behind you in a car",
        frequency: "often",
      },
      {
        text: "Localized tenderness over one specific spot next to the spine",
        frequency: "often",
      },
      {
        text: "A dull, nagging ache during long hours of computer work",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "🚨 EMERGENCY WARNING: Always get emergency medical evaluation for sudden mid-back or chest pain if accompanied by shortness of breath, dizziness, sweating, or pain spreading to your arm or jaw. ⚠️ SEE A DOCTOR: If breathing pain persists without heart symptoms.",
    misconceptions: [
      "Myth: Mid-back pain when inhaling is always a lung infection. Reality: The ribs attach directly to the spine with small joints; when these joints get jammed from bad posture, inhaling expands the ribs and triggers sharp joint pain.",
    ],
    bodyPartId: "spine-thoracic",
  },
  {
    id: "d-82",
    name: "Sciatica & Lower Back Nerve Pinching",
    overview:
      "Pain that radiates along the path of the sciatic nerve, which branches from your lower back through your hips and buttocks down each leg. It is typically caused when a herniated spinal disc or bone spur pinches a nerve root.",
    symptoms: [
      {
        text: "Pain that shoots from the lower back through the buttock and down the back of one leg",
        frequency: "always",
      },
      {
        text: "Burning, tingling, or 'electric shock' sensation down the leg into the calf or foot",
        frequency: "always",
      },
      {
        text: "Pain worsens during prolonged sitting, coughing, or sneezing",
        frequency: "often",
      },
      {
        text: "Numbness or weakness in the affected leg or foot",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "🚨 EMERGENCY WARNING - SEEK EMERGENCY CARE IMMEDIATELY: If sciatica comes with sudden loss of bowel or bladder control, or progressive numbness in your groin/saddle area (Cauda Equina Syndrome). ⚠️ SEE A DOCTOR: If leg weakness makes your foot drag when walking (foot drop).",
    misconceptions: [
      "Myth: Strict bed rest for weeks cures sciatica. Reality: Prolonged bed rest weakens spinal muscles and delays recovery; gentle walking and nerve-gliding stretches keep blood flowing and help discs heal faster.",
    ],
    bodyPartId: "spine-lumbar",
  },
  {
    id: "d-83",
    name: "TMJ Dysfunction & Teeth Clenching (Bruxism)",
    overview:
      "Pain and dysfunction in the temporomandibular joint (the hinge connecting your jawbone to your skull) and the chewing muscles. Chronic stress, daytime jaw clenching, or nighttime teeth grinding strain this delicate joint, leading to headaches and clicking sounds.",
    symptoms: [
      {
        text: "Clicking, popping, or grating sounds when opening or closing your mouth",
        frequency: "always",
      },
      {
        text: "Aching pain in and around your ear, temples, and jaw muscles",
        frequency: "always",
      },
      {
        text: "Difficulty or discomfort while chewing tough foods like meat or raw carrots",
        frequency: "often",
      },
      {
        text: "Waking up with sore temple headaches and tired facial muscles",
        frequency: "often",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE A DENTIST OR JAW SPECIALIST: If your jaw locks open or closed, or if teeth grinding is wearing down your enamel.",
    misconceptions: [
      "Myth: Jaw clicking always requires surgery. Reality: The vast majority of TMJ cases improve with simple stress reduction, wearing a night mouthguard, eating softer foods for 2 weeks, and practicing jaw relaxation exercises.",
    ],
    bodyPartId: "jaw",
  },
  {
    id: "d-84",
    name: "Silent Acid Reflux (Laryngopharyngeal Reflux / LPR)",
    overview:
      "A form of acid reflux where stomach acid and digestive enzymes travel all the way up past your esophagus into your throat and voice box. Unlike classic GERD, it often causes no chest heartburn at all ('silent'), manifesting instead as a chronic throat-clearing tickle.",
    symptoms: [
      {
        text: "Constant urge to clear your throat, especially in the morning or after eating",
        frequency: "always",
      },
      {
        text: "A feeling of a lump or pill stuck in your throat (globus sensation)",
        frequency: "always",
      },
      {
        text: "Chronic dry, tickling cough that does not produce mucus",
        frequency: "often",
      },
      {
        text: "Morning hoarseness or crackly voice that clears later in the day",
        frequency: "often",
      },
    ],
    whenToSeeDoctor:
      "⚠️ SEE AN ENT SPECIALIST: If chronic hoarseness or throat irritation lasts longer than 3 weeks. 🚨 EMERGENCY WARNING: Seek immediate medical care if you have difficulty or pain swallowing food or liquids.",
    misconceptions: [
      "Myth: You cannot have acid reflux if you don't feel burning heartburn in your chest. Reality: The throat is 100 times more sensitive to stomach acid than the esophagus; tiny microscopic mist drops of acid cause throat symptoms without chest burning.",
    ],
    bodyPartId: "throat",
  },
  {
    id: "d-85",
    name: "Sarcopenia (Age & Desk-Related Muscle Loss)",
    overview:
      "The gradual, progressive loss of skeletal muscle mass, strength, and function. Starting around age 30, adults lose 3% to 5% of their muscle mass per decade if they are sedentary and do not consume adequate dietary protein, leading to sluggish metabolism and fatigue.",
    symptoms: [
      {
        text: "Gradual decline in physical stamina and feeling tired after climbing stairs",
        frequency: "always",
      },
      {
        text: "Difficulty getting up from a low chair without using your hands for support",
        frequency: "often",
      },
      {
        text: "Weaker handgrip when carrying shopping bags or opening tight jars",
        frequency: "often",
      },
      {
        text: "Sluggish resting metabolism with gradual creeping weight gain around the waist",
        frequency: "sometimes",
      },
    ],
    whenToSeeDoctor:
      "⚠️ TALK TO YOUR DOCTOR OR A PHYSICAL TRAINER: To get a safe resistance-training program and optimize daily protein intake based on your kidney health.",
    misconceptions: [
      "Myth: Muscle loss is completely inevitable and cannot be reversed after age 50. Reality: Clinical trials show that people in their 60s, 70s, and 80s can rebuild real muscle tissue and strength with progressive bodyweight exercises and sufficient protein.",
    ],
    bodyPartId: "muscles",
  },
  {
    id: "d-86",
    name: "Chronic Shallow Chest Breathing & Diaphragm Fatigue",
    overview:
      "When stress and desk slouching cause you to breathe rapidly using only your upper neck and chest muscles, leaving the large diaphragm muscle inactive. Your three-lobed right lung never fully expands, leaving stale air at the base of the lungs and keeping your body in constant fight-or-flight alert.",
    symptoms: [
      {
        text: "Chest and shoulders rising noticeably with every inhale instead of the lower belly expanding",
        frequency: "always",
      },
      {
        text: "Feeling like you cannot catch a deep, satisfying breath (air hunger)",
        frequency: "always",
      },
      {
        text: "Chronic tightness in the neck, collarbones, and upper trapezius muscles",
        frequency: "often",
      },
      {
        text: "Frequent involuntary sighing or yawning throughout the working day",
        frequency: "often",
      },
    ],
    whenToSeeDoctor:
      "🚨 EMERGENCY WARNING - CALL 112 / 911 IMMEDIATELY: If shortness of breath comes on suddenly, prevents you from speaking in full sentences, or occurs with chest pressure, blue lips, or fainting. ⚠️ SEE A DOCTOR: If breathing difficulty occurs with coughing or wheezing.",
    misconceptions: [
      "Myth: Taking deep breaths means puffing your chest out as high as possible. Reality: True physiological deep breathing moves the diaphragm down and expands the belly and lower ribs 360 degrees while the neck and chest remain completely relaxed.",
    ],
    bodyPartId: "lung-right",
  },
];
