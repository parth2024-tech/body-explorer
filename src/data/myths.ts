import { type MythBusted } from "./content";

export const MYTHS: MythBusted[] = [
  // ━━━ NEUROLOGICAL & HEAD ━━━
  {
    id: "m-1",
    bodyPartId: "brain",
    myth: "Humans only use 10% of their brains.",
    reality: "Functional magnetic resonance imaging (fMRI) scans prove that we use virtually every part of the brain, and most of it is active almost all the time, even during sleep."
  },
  {
    id: "m-2",
    bodyPartId: "brain",
    myth: "You are either 'left-brained' (logical) or 'right-brained' (creative).",
    reality: "Both hemispheres are heavily involved in almost all cognitive tasks. Creativity and logic require full-brain communication."
  },
  {
    id: "m-3",
    bodyPartId: "eyes",
    myth: "Reading in dim light causes permanent damage to your eyesight.",
    reality: "Reading in low light causes temporary eye fatigue (asthenopia) but does not alter the structure of the eye or cause permanent nearsightedness."
  },
  {
    id: "m-4",
    bodyPartId: "eyes",
    myth: "Sitting too close to the TV will ruin your eyes.",
    reality: "Children often sit close because they can focus up close better than adults. It causes strain but no lasting damage."
  },
  {
    id: "m-blue-light",
    bodyPartId: "eyes",
    myth: "Blue-light-blocking glasses prevent digital eye strain from screens.",
    reality: "Digital eye strain is caused by a decreased blink rate and prolonged focusing distance, not the blue light itself; regular screen breaks are far more effective at reducing ocular fatigue."
  },
  {
    id: "m-5",
    bodyPartId: "ears",
    myth: "Hearing loss only affects old people.",
    reality: "1 in 5 teens has some degree of hearing loss, mostly due to prolonged headphone use at high volumes."
  },
  {
    id: "m-sugar-hyperactive",
    bodyPartId: "brain",
    myth: "Eating sugar causes children to become hyperactive.",
    reality: "Multiple double-blind randomized trials have found no difference in behavior between children given sugar and those given a placebo; perceived rushes are usually due to the excitement of an event."
  },
  {
    id: "m-sleepwalker",
    bodyPartId: "brain",
    myth: "It is dangerous or physically harmful to wake a sleepwalker.",
    reality: "Waking a sleepwalker may leave them temporarily confused, but it is not physically harmful; leaving them to wander poses a much higher risk of physical injury."
  },
  
  // ━━━ METABOLIC & ORGANS ━━━
  {
    id: "m-6",
    bodyPartId: "stomach",
    myth: "Spicy food causes stomach ulcers.",
    reality: "Ulcers are primarily caused by H. pylori bacteria or overuse of NSAID painkillers like ibuprofen, not spicy food."
  },
  {
    id: "m-7",
    bodyPartId: "stomach",
    myth: "Swallowed chewing gum takes seven years to digest in your stomach.",
    reality: "While the synthetic rubber base is indigestible, it does not stick to the stomach walls and moves through the digestive tract to be excreted intact within a few days."
  },
  {
    id: "m-8",
    bodyPartId: "liver",
    myth: "Juice cleanses effectively \"detox\" your body and organs.",
    reality: "Your liver and kidneys continuously filter and excrete waste; juice diets lack clinical evidence for detoxification and often strip away beneficial dietary fiber."
  },
  {
    id: "m-9",
    bodyPartId: "kidneys",
    myth: "You must drink exactly 8 glasses of water a day to stay hydrated.",
    reality: "Hydration needs are highly individualized based on weight, activity level, and climate; fluid intake from all beverages and water-rich foods counts toward your daily hydration."
  },
  {
    id: "m-10",
    bodyPartId: "heart",
    myth: "A heart attack always involves chest pain.",
    reality: "Many people (especially women) experience nausea, shortness of breath, or back pain without classic chest pressure."
  },
  {
    id: "m-eggs-cholesterol",
    bodyPartId: "heart",
    myth: "Eggs are bad because they contain cholesterol.",
    reality: "For most healthy people, dietary cholesterol has only a modest effect on blood cholesterol. Eggs are a nutrient-rich source of protein and vitamins."
  },
  {
    id: "m-natural-safe",
    bodyPartId: "liver",
    myth: "If a supplement or remedy is \"natural,\" it means it is completely safe.",
    reality: "Toxicity is determined by dosage, not origin; many natural supplements can cause severe organ toxicity if overused or interact dangerously with prescription medications."
  },
  
  // ━━━ IMMUNE & RESPIRATORY ━━━
  {
    id: "m-11",
    bodyPartId: "lung-left",
    myth: "Going outside in cold weather without a jacket gives you a cold.",
    reality: "The common cold is caused by viral exposure (like rhinovirus), not temperature drops; people get sick more in winter because they spend more time indoors in poorly ventilated spaces."
  },
  {
    id: "m-vit-c",
    bodyPartId: "lung-left",
    myth: "Taking large doses of Vitamin C prevents the common cold.",
    reality: "Extensive meta-analyses show that Vitamin C does not prevent the onset of a cold in the general population, though it may slightly reduce the duration of symptoms."
  },
  {
    id: "m-12",
    bodyPartId: "skin",
    myth: "You don't need sunscreen on a cloudy day.",
    reality: "Up to 80% of the sun's UV rays can pass through clouds and cause skin damage."
  },
  {
    id: "m-13",
    bodyPartId: "skin",
    myth: "Acne is caused by dirty skin and poor hygiene.",
    reality: "Acne is caused by a complex mix of hormones, excess sebum production, and P. acnes bacteria."
  },
  {
    id: "m-14",
    bodyPartId: "skin",
    myth: "Shaving makes your hair grow back thicker, darker, and faster.",
    reality: "Shaving only cuts the hair at the skin's surface where the shaft is thickest; it does not alter the follicle root or the DNA that dictates hair color and texture."
  },
  {
    id: "m-sweat-fat",
    bodyPartId: "skin",
    myth: "You need to sweat to burn fat.",
    reality: "Sweating cools the body. Fat loss occurs when your body uses stored energy—not because you sweat more."
  },
  {
    id: "m-head-heat",
    bodyPartId: "skin",
    myth: "You lose most body heat through your head.",
    reality: "Heat loss depends on how much skin is exposed. Your head is no different from other uncovered body parts."
  },
  
  // ━━━ MUSCULOSKELETAL ━━━
  {
    id: "m-15",
    bodyPartId: "bones",
    myth: "Cracking your knuckles damages cartilage and leads to arthritis.",
    reality: "Radiographic studies show no correlation between knuckle cracking and joint degeneration; the \"pop\" is simply the release of nitrogen gas bubbles from synovial fluid."
  },
  {
    id: "m-16",
    bodyPartId: "bones",
    myth: "Adults don't grow new bone cells.",
    reality: "Your skeleton completely regenerates itself approximately every 10 years through a process called remodeling."
  },
  {
    id: "m-17",
    bodyPartId: "muscles",
    myth: "Lactic acid causes muscle soreness days after a workout.",
    reality: "Lactic acid clears within an hour. Delayed Onset Muscle Soreness (DOMS) is caused by micro-tears in the muscle fibers."
  },
  {
    id: "m-18",
    bodyPartId: "spine-lumbar",
    myth: "Bed rest is the best treatment for back pain.",
    reality: "Prolonged bed rest actually weakens core muscles. Gentle movement and walking speed up recovery for most back pain."
  },
  {
    id: "m-19",
    bodyPartId: "knees",
    myth: "Running ruins your knees.",
    reality: "Recreational runners actually have lower rates of knee osteoarthritis than sedentary individuals."
  },
  {
    id: "m-20",
    bodyPartId: "shoulders",
    myth: "Poor posture is the only cause of shoulder pain.",
    reality: "While posture matters, rotator cuff tears from repetitive stress or aging are far more common causes of chronic pain."
  },
  
  // ━━━ NUTRITION & GENERAL ━━━
  {
    id: "m-21",
    bodyPartId: "small-intestine",
    myth: "A gluten-free diet is healthier for everyone.",
    reality: "Unless you have Celiac disease or an intolerance, whole grains containing gluten are an excellent source of nutrients."
  },
  {
    id: "m-22",
    bodyPartId: "large-intestine",
    myth: "You should have a bowel movement every single day.",
    reality: "Normal frequency ranges from three times a day to three times a week. Consistency matters more than frequency."
  },
  {
    id: "m-23",
    bodyPartId: "stomach",
    myth: "Eating food late at night automatically causes weight gain.",
    reality: "Weight management is dictated by total daily caloric intake versus energy expenditure; the time on the clock does not alter the thermodynamic value of a calorie."
  },
  {
    id: "m-24",
    bodyPartId: "throat",
    myth: "Feed a cold, starve a fever.",
    reality: "Your body needs adequate nutrition and fluids to fight off any infection, whether it's a cold or a fever."
  },
  {
    id: "m-25",
    bodyPartId: "heart",
    myth: "If you have heart disease, you should take it easy and avoid exercise.",
    reality: "Sedentary living is dangerous for heart patients. Supervised cardiovascular exercise is a key part of recovery."
  }
];
