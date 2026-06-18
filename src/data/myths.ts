import { type MythBusted } from "./content";

export const MYTHS: MythBusted[] = [
  // ━━━ NEUROLOGICAL & HEAD ━━━
  {
    id: "m-1",
    bodyPartId: "brain",
    myth: "Humans only use 10% of their brains.",
    reality: "Clinical neurology confirms we use 100% of our brain. Advanced imaging shows continuous full-brain activity, even during deep sleep."
  },
  {
    id: "m-2",
    bodyPartId: "brain",
    myth: "You are either 'left-brained' (logical) or 'right-brained' (creative).",
    reality: "Neuroscience shows no strict division. Complex tasks—like logic or creativity—require rapid, continuous communication across both hemispheres."
  },
  {
    id: "m-3",
    bodyPartId: "eyes",
    myth: "Reading in dim light causes permanent damage to your eyesight.",
    reality: "Ophthalmology confirms dim light causes temporary eye strain, but it never leads to structural eye damage or vision loss."
  },
  {
    id: "m-4",
    bodyPartId: "eyes",
    myth: "Sitting too close to the TV will ruin your eyes.",
    reality: "Children can comfortably focus up close better than adults. It may cause mild fatigue, but zero permanent eye damage."
  },
  {
    id: "m-blue-light",
    bodyPartId: "eyes",
    myth: "Blue-light-blocking glasses prevent digital eye strain from screens.",
    reality: "Optometric research shows strain comes from a reduced blink rate and staring too closely, not the blue light itself. Frequent breaks are the medical gold standard."
  },
  {
    id: "m-5",
    bodyPartId: "ears",
    myth: "Hearing loss only affects old people.",
    reality: "Audiologists report that 1 in 5 teenagers suffer from noise-induced hearing loss, primarily driven by unsafe headphone volumes."
  },
  {
    id: "m-sugar-hyperactive",
    bodyPartId: "brain",
    myth: "Eating sugar causes children to become hyperactive.",
    reality: "Rigorous clinical trials prove sugar does not alter children's behavior. The perceived 'sugar rush' is purely psychological, driven by exciting environments."
  },
  {
    id: "m-sleepwalker",
    bodyPartId: "brain",
    myth: "It is dangerous or physically harmful to wake a sleepwalker.",
    reality: "Sleep medicine experts advise waking a sleepwalker gently. They may be confused, but leaving them asleep risks severe physical injury from wandering."
  },
  
  // ━━━ METABOLIC & ORGANS ━━━
  {
    id: "m-6",
    bodyPartId: "stomach",
    myth: "Spicy food causes stomach ulcers.",
    reality: "Gastroenterology establishes that ulcers are caused by H. pylori bacterial infections or chronic NSAID (ibuprofen) use, never by spicy food."
  },
  {
    id: "m-7",
    bodyPartId: "stomach",
    myth: "Swallowed chewing gum takes seven years to digest in your stomach.",
    reality: "The digestive tract easily passes the synthetic rubber base within 48 to 72 hours. It never sticks to the intestinal walls."
  },
  {
    id: "m-8",
    bodyPartId: "liver",
    myth: "Juice cleanses effectively \"detox\" your body and organs.",
    reality: "Hepatologists confirm your liver and kidneys are highly efficient, 24/7 detoxification organs. Juice cleanses are medically baseless and strip vital nutrients."
  },
  {
    id: "m-9",
    bodyPartId: "kidneys",
    myth: "You must drink exactly 8 glasses of water a day to stay hydrated.",
    reality: "Nephrology guidelines state hydration needs are highly personalized. All dietary fluids and water-rich foods count perfectly toward your daily intake."
  },
  {
    id: "m-10",
    bodyPartId: "heart",
    myth: "A heart attack always involves chest pain.",
    reality: "Cardiologists emphasize that many patients—especially women—experience atypical symptoms like severe nausea, sudden shortness of breath, or back pain with zero chest pressure."
  },
  {
    id: "m-eggs-cholesterol",
    bodyPartId: "heart",
    myth: "Eggs are bad because they contain cholesterol.",
    reality: "Modern cardiology shows dietary cholesterol has minimal impact on blood cholesterol for most people. Eggs remain a high-quality, nutrient-dense protein source."
  },
  {
    id: "m-natural-safe",
    bodyPartId: "liver",
    myth: "If a supplement or remedy is \"natural,\" it means it is completely safe.",
    reality: "Toxicology dictates that dosage determines toxicity. 'Natural' supplements can cause acute liver failure or dangerous drug interactions if misused."
  },
  
  // ━━━ IMMUNE & RESPIRATORY ━━━
  {
    id: "m-11",
    bodyPartId: "lung-left",
    myth: "Going outside in cold weather without a jacket gives you a cold.",
    reality: "Infectious disease experts confirm colds are strictly viral infections. Colds spike in winter due to increased indoor crowding, not temperature drops."
  },
  {
    id: "m-vit-c",
    bodyPartId: "lung-left",
    myth: "Taking large doses of Vitamin C prevents the common cold.",
    reality: "Extensive immunological studies prove Vitamin C does not prevent colds. It may only marginally shorten symptom duration if taken consistently."
  },
  {
    id: "m-12",
    bodyPartId: "skin",
    myth: "You don't need sunscreen on a cloudy day.",
    reality: "Dermatologists warn that up to 80% of harmful UVA and UVB radiation easily penetrates clouds, causing profound cellular skin damage over time."
  },
  {
    id: "m-13",
    bodyPartId: "skin",
    myth: "Acne is caused by dirty skin and poor hygiene.",
    reality: "Clinical dermatology proves acne is an inflammatory condition driven by hormonal fluctuations, overactive oil glands, and targeted bacterial colonization, not dirt."
  },
  {
    id: "m-14",
    bodyPartId: "skin",
    myth: "Shaving makes your hair grow back thicker, darker, and faster.",
    reality: "Shaving creates a blunt edge on the hair shaft, making it feel coarse temporarily. It definitively cannot alter follicular DNA or growth rates."
  },
  {
    id: "m-sweat-fat",
    bodyPartId: "skin",
    myth: "You need to sweat to burn fat.",
    reality: "Exercise physiology shows sweating is solely a thermal cooling mechanism. True fat oxidation happens at a cellular metabolic level, regardless of sweat."
  },
  {
    id: "m-head-heat",
    bodyPartId: "skin",
    myth: "You lose most body heat through your head.",
    reality: "Thermal imaging proves heat dissipates uniformly across any exposed skin surface. The head holds no special heat-loss properties."
  },
  
  // ━━━ MUSCULOSKELETAL ━━━
  {
    id: "m-15",
    bodyPartId: "bones",
    myth: "Cracking your knuckles damages cartilage and leads to arthritis.",
    reality: "Rheumatology confirms the 'pop' is simply harmless nitrogen gas escaping the joint capsule. It has zero correlation with osteoarthritis development."
  },
  {
    id: "m-16",
    bodyPartId: "bones",
    myth: "Adults don't grow new bone cells.",
    reality: "Orthopedics details 'bone remodeling'—a continuous metabolic process where specialized cells break down old bone and completely rebuild your entire skeleton every decade."
  },
  {
    id: "m-17",
    bodyPartId: "muscles",
    myth: "Lactic acid causes muscle soreness days after a workout.",
    reality: "Sports medicine shows lactic acid clears the muscles in under an hour. Next-day soreness is actually acute inflammation from microscopic muscle fiber tears."
  },
  {
    id: "m-18",
    bodyPartId: "spine-lumbar",
    myth: "Bed rest is the best treatment for back pain.",
    reality: "Spine specialists warn bed rest severely weakens stabilizing core muscles. Early, gentle movement is medically proven to drastically accelerate recovery."
  },
  {
    id: "m-19",
    bodyPartId: "knees",
    myth: "Running ruins your knees.",
    reality: "Clinical orthopedics demonstrates that routine, recreational running actually thickens joint cartilage, leading to significantly lower rates of knee osteoarthritis."
  },
  {
    id: "m-20",
    bodyPartId: "shoulders",
    myth: "Poor posture is the only cause of shoulder pain.",
    reality: "While posture plays a role, sports medicine physicians cite degenerative rotator cuff tears and chronic repetitive stress as the leading culprits of shoulder pain."
  },
  
  // ━━━ NUTRITION & GENERAL ━━━
  {
    id: "m-21",
    bodyPartId: "small-intestine",
    myth: "A gluten-free diet is healthier for everyone.",
    reality: "Unless diagnosed with Celiac disease or confirmed sensitivity, gastroenterologists advise against eliminating gluten, as it unnecessarily removes essential, heart-healthy whole grains."
  },
  {
    id: "m-22",
    bodyPartId: "large-intestine",
    myth: "You should have a bowel movement every single day.",
    reality: "Clinical gastroenterology defines normal bowel habits as anywhere from three times daily to three times weekly. Medical concern arises from sudden changes, not specific frequencies."
  },
  {
    id: "m-23",
    bodyPartId: "stomach",
    myth: "Eating food late at night automatically causes weight gain.",
    reality: "Endocrinology proves weight management is governed entirely by total 24-hour caloric expenditure. The biological clock has no impact on thermodynamic calorie burning."
  },
  {
    id: "m-24",
    bodyPartId: "throat",
    myth: "Feed a cold, starve a fever.",
    reality: "Immunologists confirm that mounting a robust immune response demands significant metabolic energy. Proper nutrition and aggressive hydration are critical for all infections."
  },
  {
    id: "m-25",
    bodyPartId: "heart",
    myth: "If you have heart disease, you should take it easy and avoid exercise.",
    reality: "Cardiology strictly warns against a sedentary lifestyle for cardiac patients. Medically supervised cardiovascular exercise is the cornerstone of heart disease rehabilitation."
  }
];
