import { type DiseaseEntry } from "./content";

export const DISEASE_ENTRIES: DiseaseEntry[] = [
  {
    id: "d-1",
    name: "Asthma",
    bodyPartId: "lung-left",
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
    overview: "A potentially serious sleep disorder in which breathing repeatedly stops and starts.",
    symptoms: [
      { text: "Loud snoring", frequency: "often" },
      { text: "Episodes of breathing cessation during sleep", frequency: "always" },
      { text: "Morning headache", frequency: "sometimes" }
    ],
    whenToSeeDoctor: "If your snoring is loud enough to disturb others, or you wake up gasping.",
    misconceptions: ["Only overweight men get it", "Snoring always means sleep apnea"]
  }
];
