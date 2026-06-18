import { type MythBusted } from "./content";

export const MYTHS: MythBusted[] = [
  // ━━━ NEUROLOGICAL & HEAD ━━━
  {
    id: "m-1",
    bodyPartId: "brain",
    myth: "Humans only use 10% of their brains.",
    reality: "You use your entire brain, not just 10%. Brain scans show that all parts of your brain are constantly working together, even when you are fast asleep.",
    sources: ["Johns Hopkins Medicine", "Scientific American"],
    actionableTip: "Keep your brain sharp by learning a new skill like a language or an instrument, instead of worrying about unlocking 'hidden potential'."
  },
  {
    id: "m-2",
    bodyPartId: "brain",
    myth: "You are either 'left-brained' (logical) or 'right-brained' (creative).",
    reality: "Whether you are doing math or painting a picture, both sides of your brain are rapidly talking to each other to get the job done.",
    sources: ["University of Utah Neuroscience", "Harvard Health"],
    actionableTip: "Don't limit yourself to 'logical' or 'creative' hobbies. Your brain actually gets stronger when you mix both types of activities!"
  },
  {
    id: "m-3",
    bodyPartId: "eyes",
    myth: "Reading in dim light causes permanent damage to your eyesight.",
    reality: "While reading in the dark might make your eyes feel tired or strained, it will never cause any permanent damage to your vision.",
    sources: ["American Academy of Ophthalmology", "Mayo Clinic"],
    actionableTip: "If your eyes feel tired from reading in the dark, just stop, close your eyes for a few minutes, and rest. You haven't caused any real damage."
  },
  {
    id: "m-4",
    bodyPartId: "eyes",
    myth: "Sitting too close to the TV will ruin your eyes.",
    reality: "Sitting close to the TV will not ruin your eyes. Kids just do this because they can focus on close objects much easier than adults can.",
    sources: ["American Academy of Pediatrics", "Cleveland Clinic"],
    actionableTip: "If your child constantly sits close to the TV or holds books close to their face, get their eyes checked—they might just need glasses!"
  },
  {
    id: "m-blue-light",
    bodyPartId: "eyes",
    myth: "Blue-light-blocking glasses prevent digital eye strain from screens.",
    reality: "Screens hurt your eyes because you forget to blink as often, not because of blue light. The best fix is simply taking frequent screen breaks.",
    sources: ["American Academy of Ophthalmology"],
    actionableTip: "Use the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for 20 seconds. And remember to blink!"
  },
  {
    id: "m-5",
    bodyPartId: "ears",
    myth: "Hearing loss only affects old people.",
    reality: "1 in 5 teenagers actually have hearing loss. This is mostly caused by listening to music with headphones turned up way too loud."
  },
  {
    id: "m-sugar-hyperactive",
    bodyPartId: "brain",
    myth: "Eating sugar causes children to become hyperactive.",
    reality: "Sugar does not make kids hyper. Kids usually just get excited because they are at a fun event like a birthday party."
  },
  {
    id: "m-sleepwalker",
    bodyPartId: "brain",
    myth: "It is dangerous or physically harmful to wake a sleepwalker.",
    reality: "It is completely safe to gently wake a sleepwalker. They might be a little confused, but it is much safer than letting them wander and get hurt."
  },
  
  // ━━━ METABOLIC & ORGANS ━━━
  {
    id: "m-6",
    bodyPartId: "stomach",
    myth: "Spicy food causes stomach ulcers.",
    reality: "Spicy food never causes ulcers. Ulcers are actually caused by a specific stomach bacteria or by taking too many painkillers like ibuprofen."
  },
  {
    id: "m-7",
    bodyPartId: "stomach",
    myth: "Swallowed chewing gum takes seven years to digest in your stomach.",
    reality: "Gum does not stick to your stomach walls. Your body simply pushes it straight through your system and out within a few days."
  },
  {
    id: "m-8",
    bodyPartId: "liver",
    myth: "Juice cleanses effectively \"detox\" your body and organs.",
    reality: "Your liver and kidneys already clean your blood perfectly 24/7. Juice cleanses do not \"detox\" you, and they actually remove healthy fiber from your diet.",
    sources: ["Mayo Clinic", "Cleveland Clinic"],
    actionableTip: "Save your money! Instead of buying an expensive juice cleanse, simply drink plenty of water and eat high-fiber whole foods to support your liver's natural detox process.",
    dangerAlert: "Extreme liquid cleanses can cause dangerous drops in blood sugar and severe dehydration. Your organs do not need to be 'reset'."
  },
  {
    id: "m-9",
    bodyPartId: "kidneys",
    myth: "You must drink exactly 8 glasses of water a day to stay hydrated.",
    reality: "Everyone needs a different amount of water. Any liquid you drink, plus water-rich foods like fruit, all count toward keeping you hydrated."
  },
  {
    id: "m-10",
    bodyPartId: "heart",
    myth: "A heart attack always involves chest pain.",
    reality: "You can have a heart attack without any chest pain. Many people, especially women, just feel very sick to their stomach, out of breath, or have back pain."
  },
  {
    id: "m-eggs-cholesterol",
    bodyPartId: "heart",
    myth: "Eggs are bad because they contain cholesterol.",
    reality: "Eating eggs does not clog your arteries. For most people, eggs are just a very healthy and affordable source of protein."
  },
  {
    id: "m-natural-safe",
    bodyPartId: "liver",
    myth: "If a supplement or remedy is \"natural,\" it means it is completely safe.",
    reality: "\"Natural\" does not mean safe. Taking too much of a natural herb or supplement can actually cause severe damage to your liver.",
    sources: ["FDA", "National Institutes of Health"],
    actionableTip: "Always bring the physical bottle of any supplement you want to take to your doctor's appointment so they can check for dangerous interactions.",
    dangerAlert: "Many 'all-natural' supplements are completely unregulated and can interact fatally with prescription medications or cause acute liver failure."
  },
  
  // ━━━ IMMUNE & RESPIRATORY ━━━
  {
    id: "m-11",
    bodyPartId: "lung-left",
    myth: "Going outside in cold weather without a jacket gives you a cold.",
    reality: "You only get a cold from a virus, not from cold air. We get sick more in winter because we are crowded indoors with other sick people."
  },
  {
    id: "m-vit-c",
    bodyPartId: "lung-left",
    myth: "Taking large doses of Vitamin C prevents the common cold.",
    reality: "Vitamin C does not stop you from catching a cold. It might only make the cold go away slightly faster once you already have it."
  },
  {
    id: "m-12",
    bodyPartId: "skin",
    myth: "You don't need sunscreen on a cloudy day.",
    reality: "Up to 80% of the sun's harmful rays easily pass right through clouds. You can absolutely get a terrible sunburn even when you can't see the sun."
  },
  {
    id: "m-13",
    bodyPartId: "skin",
    myth: "Acne is caused by dirty skin and poor hygiene.",
    reality: "Washing your face more will not cure acne. Acne is actually caused by natural hormones and oil trapped deep under the skin, not surface dirt."
  },
  {
    id: "m-14",
    bodyPartId: "skin",
    myth: "Shaving makes your hair grow back thicker, darker, and faster.",
    reality: "Shaving just cuts the hair straight across, making it feel rough and prickly as it grows. Shaving does not actually change the hair thickness at all."
  },
  {
    id: "m-sweat-fat",
    bodyPartId: "skin",
    myth: "You need to sweat to burn fat.",
    reality: "Sweating is just your body's way of cooling down when you get hot. You burn fat by using energy, which has nothing to do with how much you sweat."
  },
  {
    id: "m-head-heat",
    bodyPartId: "skin",
    myth: "You lose most body heat through your head.",
    reality: "You lose heat evenly from any bare skin. Your head doesn't lose heat any faster than your bare arm or leg would."
  },
  
  // ━━━ MUSCULOSKELETAL ━━━
  {
    id: "m-15",
    bodyPartId: "bones",
    myth: "Cracking your knuckles damages cartilage and leads to arthritis.",
    reality: "Cracking your knuckles is perfectly safe. The \"pop\" sound is just tiny gas bubbles bursting in your joints, and it will never cause arthritis."
  },
  {
    id: "m-16",
    bodyPartId: "bones",
    myth: "Adults don't grow new bone cells.",
    reality: "Your skeleton is very much alive. Your body constantly breaks down old bone and builds brand new bone, replacing your entire skeleton every 10 years."
  },
  {
    id: "m-17",
    bodyPartId: "muscles",
    myth: "Lactic acid causes muscle soreness days after a workout.",
    reality: "Lactic acid leaves your body right after you stop working out. The soreness you feel the next day is actually tiny, healthy tears in your muscles healing."
  },
  {
    id: "m-18",
    bodyPartId: "spine-lumbar",
    myth: "Bed rest is the best treatment for back pain.",
    reality: "Staying in bed actually makes back pain worse because your muscles get weak. Going for gentle walks is the fastest medical way to heal your back."
  },
  {
    id: "m-19",
    bodyPartId: "knees",
    myth: "Running ruins your knees.",
    reality: "Regular running actually makes your knee joints thicker and stronger. Runners usually have far healthier knees than people who don't exercise."
  },
  {
    id: "m-20",
    bodyPartId: "shoulders",
    myth: "Poor posture is the only cause of shoulder pain.",
    reality: "While posture matters, most shoulder pain simply comes from age and everyday wear-and-tear on your muscles, rather than just sitting poorly."
  },
  
  // ━━━ NUTRITION & GENERAL ━━━
  {
    id: "m-21",
    bodyPartId: "small-intestine",
    myth: "A gluten-free diet is healthier for everyone.",
    reality: "Unless you have a specific allergy, going gluten-free is actually bad for you. Gluten-filled whole grains give your heart essential nutrients."
  },
  {
    id: "m-22",
    bodyPartId: "large-intestine",
    myth: "You should have a bowel movement every single day.",
    reality: "Going anywhere from three times a day to three times a week is completely normal. As long as your routine is consistent, you are perfectly healthy."
  },
  {
    id: "m-23",
    bodyPartId: "stomach",
    myth: "Eating food late at night automatically causes weight gain.",
    reality: "Your body doesn't care what time it is. You only gain weight if you eat more total food in a day than your body burns for energy."
  },
  {
    id: "m-24",
    bodyPartId: "throat",
    myth: "Feed a cold, starve a fever.",
    reality: "Fighting any sickness takes a massive amount of energy. You always need to eat good food and drink plenty of water, whether you have a cold or a fever."
  },
  {
    id: "m-25",
    bodyPartId: "heart",
    myth: "If you have heart disease, you should take it easy and avoid exercise.",
    reality: "Sitting on the couch is the worst thing you can do for a bad heart. Safe, guided exercise is exactly what doctors prescribe to fix heart problems."
  }
];
