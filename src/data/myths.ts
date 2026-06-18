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
  },
  
  // ━━━ NEW PRO MAX MYTHS (ADDED 30) ━━━
  {
    id: "m-26",
    bodyPartId: "blood",
    myth: "Blood is blue inside your body until oxygen hits it.",
    reality: "Human blood is always red. Your veins only look blue from the outside because of how your skin scatters the light.",
    sources: ["American Red Cross", "Live Science"],
    actionableTip: "Don't panic if you draw blood and it's dark red—that just means it's returning to your heart to get more oxygen!"
  },
  {
    id: "m-27",
    bodyPartId: "pancreas",
    myth: "Eating too much sugar directly causes diabetes.",
    reality: "Sugar itself does not cause diabetes. Type 1 is genetic, and Type 2 is caused by a complex mix of genetics, lifestyle, and overall weight.",
    sources: ["American Diabetes Association"],
    actionableTip: "Instead of fearing all sugar, focus on a balanced diet and regular exercise to maintain a healthy weight.",
    dangerAlert: "Blaming diabetes entirely on sugar creates dangerous stigma. Many healthy people get diabetes due to family history."
  },
  {
    id: "m-28",
    bodyPartId: "eyes",
    myth: "Eating lots of carrots will give you perfect vision.",
    reality: "Carrots have Vitamin A, which supports eye health, but they won't magically cure your need for glasses or let you see in pitch darkness.",
    sources: ["American Academy of Ophthalmology"],
    actionableTip: "Eat a rainbow of vegetables, especially leafy greens like spinach, which are actually even better for your eyes than carrots."
  },
  {
    id: "m-29",
    bodyPartId: "stomach",
    myth: "You must wait an hour after eating before swimming.",
    reality: "You will not get crippling stomach cramps and drown if you swim after eating. The worst that might happen is feeling slightly nauseous.",
    sources: ["American Red Cross", "Mayo Clinic"],
    actionableTip: "If you just ate a massive Thanksgiving-style meal, maybe chill by the pool first. But after a normal sandwich, you're fine to swim."
  },
  {
    id: "m-30",
    bodyPartId: "hair",
    myth: "Your hair and fingernails continue to grow after you die.",
    reality: "Growth stops immediately at death. It just looks like they are growing because the skin around them shrinks as it dries out.",
    sources: ["University of Arkansas for Medical Sciences"],
    actionableTip: "Don't let spooky campfire stories fool you—biology requires a beating heart to grow cells!"
  },
  {
    id: "m-31",
    bodyPartId: "stomach",
    myth: "Microwaving food destroys all its healthy nutrients.",
    reality: "Microwaving actually preserves nutrients better than boiling or baking because it cooks the food much faster and uses almost no water.",
    sources: ["Harvard Medical School"],
    actionableTip: "Steam your vegetables in the microwave with a splash of water. It's the healthiest and fastest way to cook them!"
  },
  {
    id: "m-32",
    bodyPartId: "immune",
    myth: "Antibiotics can cure the common cold or the flu.",
    reality: "Antibiotics ONLY kill bacteria. Colds and the flu are caused by viruses, meaning antibiotics will do absolutely nothing to help you.",
    sources: ["Centers for Disease Control and Prevention (CDC)", "WHO"],
    actionableTip: "Rest, drink fluids, and use over-the-counter meds for symptom relief when you have a virus.",
    dangerAlert: "Taking antibiotics when you don't need them is extremely dangerous. It helps create 'superbugs' that cannot be killed by medicine."
  },
  {
    id: "m-33",
    bodyPartId: "stomach",
    myth: "Organic food is drastically healthier and more nutritious.",
    reality: "Organic food has the exact same vitamins and minerals as conventional food. 'Organic' just refers to the farming methods used, not the nutrition.",
    sources: ["Stanford University Medical Center"],
    actionableTip: "Buy whichever fruits and veggies fit your budget. Eating conventional broccoli is infinitely better than eating no broccoli at all!"
  },
  {
    id: "m-34",
    bodyPartId: "skin",
    myth: "You can catch a sexually transmitted disease from a toilet seat.",
    reality: "STI bacteria and viruses die almost instantly when exposed to the cold, hard surface of a toilet seat. It is virtually impossible.",
    sources: ["Planned Parenthood", "WebMD"],
    actionableTip: "Practice safe sex, as that's how STIs actually spread. Don't stress about public restrooms."
  },
  {
    id: "m-35",
    bodyPartId: "skin",
    myth: "Stepping on a rusty nail causes tetanus.",
    reality: "Rust doesn't cause tetanus. Tetanus is caused by dirt bacteria. A rusty nail is just a common way for dirt to get pushed deep under your skin.",
    sources: ["CDC"],
    actionableTip: "Keep your tetanus booster shot up to date (every 10 years) to protect yourself from dirt bacteria.",
    dangerAlert: "Any deep puncture wound, rusty or not, can cause tetanus if you aren't vaccinated. Seek medical care for deep cuts."
  },
  {
    id: "m-36",
    bodyPartId: "throat",
    myth: "Drinking milk makes your body produce more mucus when you are sick.",
    reality: "Milk might feel a bit thick in your throat, but it does not actually cause your body to make any extra phlegm or mucus.",
    sources: ["Mayo Clinic"],
    actionableTip: "If milk soothes your sore throat, drink it! Staying hydrated and getting calories is crucial when fighting an illness."
  },
  {
    id: "m-37",
    bodyPartId: "bones",
    myth: "White spots on your fingernails mean you don't have enough calcium.",
    reality: "Those tiny white spots are just minor bruises on the nail matrix from bumping your finger. They have nothing to do with calcium.",
    sources: ["Cleveland Clinic"],
    actionableTip: "Ignore the spots—they will grow out on their own over a few weeks."
  },
  {
    id: "m-38",
    bodyPartId: "skin",
    myth: "You should put butter or ice directly on a bad burn.",
    reality: "Butter traps the heat inside the skin, making the burn worse. Ice is too extreme and can cause frostbite damage to the delicate burned tissue.",
    sources: ["American Burn Association"],
    actionableTip: "Run cool (not freezing) water over a burn for 10-15 minutes immediately after it happens.",
    dangerAlert: "Never put greasy ointments, butter, or raw ice on a fresh burn. It can cause severe infections and tissue death."
  },
  {
    id: "m-39",
    bodyPartId: "bones",
    myth: "Drinking coffee or caffeine stunts the growth of children.",
    reality: "There is absolutely zero scientific link between caffeine and bone growth. Kids shouldn't drink coffee because of the jitters, not their height.",
    sources: ["Harvard Medical School"],
    actionableTip: "Focus on getting your kids enough sleep and calcium, which are the real drivers of healthy growth."
  },
  {
    id: "m-40",
    bodyPartId: "mouth",
    myth: "A dog's mouth is much cleaner than a human's mouth.",
    reality: "Both human and dog mouths are absolutely filthy. They just contain different types of bacteria.",
    sources: ["American Kennel Club", "Harvard Health"],
    actionableTip: "Wash your hands after playing with your dog, and don't let them lick open cuts on your skin."
  },
  {
    id: "m-41",
    bodyPartId: "brain",
    myth: "Eating turkey makes you extremely sleepy.",
    reality: "Turkey has a sleepy chemical called tryptophan, but so does chicken and cheese. The massive carb-heavy meal is what actually puts you to sleep.",
    sources: ["Johns Hopkins Medicine"],
    actionableTip: "If you don't want to nap after a holiday dinner, eat smaller portions of potatoes and pie."
  },
  {
    id: "m-42",
    bodyPartId: "muscles",
    myth: "You must do static stretching before exercise to prevent injury.",
    reality: "Holding static stretches while cold can actually decrease muscle strength. A light 'dynamic' warm-up like jogging in place is much better.",
    sources: ["American College of Sports Medicine"],
    actionableTip: "Warm up by doing light versions of your workout (like walking before running). Save the deep, hold-in-place stretching for after the workout."
  },
  {
    id: "m-43",
    bodyPartId: "chest",
    myth: "Deodorants and antiperspirants cause breast cancer.",
    reality: "Decades of extensive studies have found absolutely no link between the chemicals in underarm deodorant and breast cancer.",
    sources: ["National Cancer Institute", "American Cancer Society"],
    actionableTip: "Use whatever deodorant makes you comfortable. If you have sensitive skin, opt for fragrance-free options."
  },
  {
    id: "m-44",
    bodyPartId: "skin",
    myth: "Eating greasy food and chocolate directly causes acne breakouts.",
    reality: "Acne is triggered by hormones, stress, and genetics. While a balanced diet is good, eating a chocolate bar does not instantly cause pimples.",
    sources: ["American Academy of Dermatology"],
    actionableTip: "Wash your face gently twice a day and use a salicylic acid spot treatment rather than banning your favorite snacks."
  },
  {
    id: "m-45",
    bodyPartId: "skin",
    myth: "You can get warts by touching toads or frogs.",
    reality: "Human warts are caused by the Human Papillomavirus (HPV). You can only catch them from other humans, never from amphibians.",
    sources: ["Cleveland Clinic"],
    actionableTip: "Wear shower shoes in public locker rooms and pools to avoid catching the wart virus from the floor."
  },
  {
    id: "m-46",
    bodyPartId: "skin",
    myth: "Sweating heavily in a sauna removes 'toxins' from your body.",
    reality: "Sweat is 99% water and salt. Your liver and kidneys handle all the detoxing. Sweating only cools you down.",
    sources: ["UAMS Health"],
    actionableTip: "Enjoy saunas for relaxation, but make sure to drink plenty of water to replace what you sweat out."
  },
  {
    id: "m-47",
    bodyPartId: "muscles",
    myth: "Muscle turns directly into fat if you stop working out.",
    reality: "Muscle and fat are completely different tissues. If you stop exercising, muscle shrinks. If you eat too much, fat cells grow. One never 'turns into' the other.",
    sources: ["American Council on Exercise"],
    actionableTip: "If you take a break from the gym, just slightly reduce your food intake to match your lower energy burn."
  },
  {
    id: "m-48",
    bodyPartId: "brain",
    myth: "Alcohol kills brain cells.",
    reality: "Moderate alcohol use doesn't kill brain cells. Heavy drinking damages the 'wires' connecting the cells, but the cells themselves usually survive.",
    sources: ["Scientific American", "NIH"],
    actionableTip: "Protect your brain by sticking to moderation: no more than 1 drink a day for women, and 2 for men."
  },
  {
    id: "m-49",
    bodyPartId: "immune",
    myth: "You should completely starve a fever to make it go away.",
    reality: "Your immune system is fighting a war and needs immense energy. You should always eat healthy food and drink lots of fluids when running a fever.",
    sources: ["Johns Hopkins Medicine"],
    actionableTip: "Drink water, eat soup, and rest. Starving yourself will only make you weaker and delay your recovery."
  },
  {
    id: "m-50",
    bodyPartId: "brain",
    myth: "We only have 5 senses.",
    reality: "Humans actually have dozens of senses! Including balance, temperature, pain, and knowing where our limbs are in space (proprioception).",
    sources: ["Harvard Medical School"],
    actionableTip: "Close your eyes and touch your nose. The fact that you didn't miss is thanks to your hidden sense of 'proprioception'!"
  },
  {
    id: "m-51",
    bodyPartId: "heart",
    myth: "Heart disease only affects men and the elderly.",
    reality: "Heart disease is the number one killer of women. And poor diet and lack of exercise can cause early heart damage in people in their 20s and 30s.",
    sources: ["American Heart Association"],
    actionableTip: "Know your numbers! Get your blood pressure and cholesterol checked regularly, no matter your age or gender."
  },
  {
    id: "m-52",
    bodyPartId: "skin",
    myth: "Wounds heal faster if you take the bandage off to 'let them breathe'.",
    reality: "Wounds heal much faster and scar less when they are kept moist and covered. Exposing them to air dries them out and increases infection risk.",
    sources: ["American Academy of Dermatology"],
    actionableTip: "Keep cuts covered with a bandage and a thin layer of petroleum jelly (like Vaseline) until they are completely healed."
  },
  {
    id: "m-53",
    bodyPartId: "mouth",
    myth: "Brushing your teeth harder cleans them better.",
    reality: "Brushing too hard destroys your tooth enamel and causes your gums to permanently pull away from the teeth.",
    sources: ["American Dental Association"],
    actionableTip: "Use a soft-bristled toothbrush and brush gently in small circles. Let the bristles do the work, not your muscles!"
  },
  {
    id: "m-54",
    bodyPartId: "stomach",
    myth: "Brown bread and brown sugar are always healthier than white.",
    reality: "Many brown breads just have caramel color added to trick you. And brown sugar is literally just white sugar with a tiny bit of molasses mixed in.",
    sources: ["Cleveland Clinic"],
    actionableTip: "Always read the label! Look for the word '100% Whole Wheat' as the first ingredient to ensure you are actually getting healthy grains."
  },
  {
    id: "m-55",
    bodyPartId: "immune",
    myth: "Vaccines can give you the disease they are trying to prevent.",
    reality: "Routine vaccines use dead or severely weakened pieces of a virus. It is biologically impossible for them to infect you with the actual disease.",
    sources: ["CDC", "WHO"],
    actionableTip: "If you feel a little tired or have a sore arm after a shot, celebrate! That's just proof your immune system is successfully building its defenses.",
    dangerAlert: "Skipping vaccines because of this myth puts you and your entire community at massive risk for deadly, preventable diseases."
  },
  
  // ━━━ HEALTHCONTENT PRO MAX EXPANSION (ADDED 30) ━━━
  {
    id: "m-56",
    bodyPartId: "heart",
    myth: "Defibrillators are used to restart a heart that has flatlined.",
    reality: "Defibrillators actually stop a twitching (fibrillating) heart so the body's natural pacemaker can restart it. They cannot be used on a flatline.",
    sources: ["American Heart Association"],
    actionableTip: "If someone collapses, start chest compressions immediately and have someone else fetch the AED. The machine will talk out loud and tell you exactly what to do."
  },
  {
    id: "m-57",
    bodyPartId: "nose",
    myth: "You should tilt your head back to stop a nosebleed.",
    reality: "Tilting back just makes blood drain down your throat, which can cause vomiting. You should actually lean forward and pinch your nose.",
    sources: ["Mayo Clinic"],
    actionableTip: "Pinch the soft part of your nose and lean slightly forward for 10 straight minutes without letting go to check."
  },
  {
    id: "m-58",
    bodyPartId: "stomach",
    myth: "Food dropped on the floor is safe to eat if picked up within five seconds.",
    reality: "Bacteria instantly contaminates food the millisecond it touches the floor. The five-second rule is completely false.",
    sources: ["Rutgers University Food Science"],
    actionableTip: "If it hits the floor, throw it in the compost. It's not worth getting violent food poisoning over a dropped cracker."
  },
  {
    id: "m-59",
    bodyPartId: "skin",
    myth: "Peeing on a jellyfish sting will relieve the pain.",
    reality: "Urine actually causes the jellyfish stingers to release even more venom into your skin, making the pain much worse.",
    sources: ["Cleveland Clinic"],
    actionableTip: "Rinse the sting with vinegar or hot water, and use tweezers to carefully pull out any visible stingers."
  },
  {
    id: "m-60",
    bodyPartId: "skin",
    myth: "Getting a 'base tan' before a vacation prevents you from getting a sunburn.",
    reality: "A tan is literally physical evidence that your skin's DNA has already been damaged. It provides a tiny SPF 3 equivalent, which will not prevent a sunburn.",
    sources: ["American Academy of Dermatology"],
    actionableTip: "Skip the tanning bed. Use a broad-spectrum SPF 30 sunscreen every single day, vacation or not."
  },
  {
    id: "m-61",
    bodyPartId: "immune",
    myth: "You can 'sweat out' a fever by wrapping up in heavy blankets.",
    reality: "Wrapping up traps heat and dangerously raises your core body temperature. It can lead to heatstroke and severe dehydration.",
    sources: ["Johns Hopkins Medicine"],
    dangerAlert: "Never pile blankets on someone with a high fever, especially children. It can cause dangerous febrile seizures.",
    actionableTip: "Dress lightly, drink lots of water, and take fever-reducing medication like ibuprofen if you are uncomfortable."
  },
  {
    id: "m-62",
    bodyPartId: "skin",
    myth: "Hydrogen peroxide and rubbing alcohol are the best things to clean an open cut.",
    reality: "These harsh chemicals actually destroy healthy skin tissue and drastically slow down the healing process.",
    sources: ["American Academy of Dermatology"],
    actionableTip: "Wash all minor cuts and scrapes with mild soap and cool running water. That's all you need!"
  },
  {
    id: "m-63",
    bodyPartId: "blood",
    myth: "Drinking a shot of liquor warms you up when you are freezing outside.",
    reality: "Alcohol dilates your blood vessels, making your skin feel warm while rapidly draining heat from your vital organs.",
    sources: ["University of Rochester Medical Center"],
    dangerAlert: "Drinking alcohol in freezing weather massively increases your risk of hypothermia and death.",
    actionableTip: "Drink hot tea or cocoa to stay warm outside, and save the alcohol for when you are safely indoors."
  },
  {
    id: "m-64",
    bodyPartId: "leg",
    myth: "You should suck the venom out of a snakebite with your mouth.",
    reality: "Sucking introduces mouth bacteria into the wound, speeds up venom absorption, and risks poisoning the person sucking.",
    sources: ["CDC"],
    dangerAlert: "Never cut a snakebite, suck the venom, or apply a tourniquet. All of these make the injury much worse.",
    actionableTip: "Keep the bitten limb completely still, stay calm to keep your heart rate down, and call 911 immediately."
  },
  {
    id: "m-65",
    bodyPartId: "heart",
    myth: "CPR easily brings dying people back to life like they show in the movies.",
    reality: "CPR very rarely restarts a heart on its own. Its main purpose is simply to pump blood to the brain to keep it alive until paramedics arrive with a defibrillator.",
    sources: ["American Heart Association"],
    actionableTip: "Learn hands-only CPR! Pushing hard and fast in the center of the chest can keep your loved one's brain alive until an ambulance gets there."
  },
  {
    id: "m-66",
    bodyPartId: "mouth",
    myth: "You must put a spoon or wallet in the mouth of someone having a seizure so they don't swallow their tongue.",
    reality: "It is physically impossible to swallow your own tongue. Putting objects in their mouth will just break their teeth or choke them.",
    sources: ["Epilepsy Foundation"],
    dangerAlert: "NEVER force anything into the mouth of a seizing person. You can cause severe jaw and dental injuries.",
    actionableTip: "Roll them gently onto their side, put something soft under their head, and just let the seizure run its course while you time it."
  },
  {
    id: "m-67",
    bodyPartId: "stomach",
    myth: "Doing 100 crunches a day will burn away your belly fat.",
    reality: "You cannot choose where your body burns fat. Crunches will build muscle underneath the fat, but overall weight loss requires a calorie deficit.",
    sources: ["American Council on Exercise"],
    actionableTip: "Focus on full-body exercises and eating a healthy diet to reduce your overall body fat percentage."
  },
  {
    id: "m-68",
    bodyPartId: "chest",
    myth: "Only women can get breast cancer.",
    reality: "Men have breast tissue too, and thousands of men are diagnosed with breast cancer every year.",
    sources: ["American Cancer Society"],
    actionableTip: "Men, if you feel a hard lump in your chest or notice changes in your nipple, get it checked by a doctor immediately."
  },
  {
    id: "m-69",
    bodyPartId: "stomach",
    myth: "Dietary supplements and vitamins are rigorously tested by the FDA before they are sold.",
    reality: "The FDA is not legally allowed to review dietary supplements for safety or effectiveness before they hit store shelves.",
    sources: ["U.S. Food and Drug Administration (FDA)"],
    dangerAlert: "Because they are unregulated, some supplements contain hidden prescription drugs or dangerous heavy metals.",
    actionableTip: "Look for a seal from independent testing labs like 'USP' or 'NSF' on the bottle to ensure the supplement actually contains what the label claims."
  },
  {
    id: "m-70",
    bodyPartId: "stomach",
    myth: "If you swallow a poisonous chemical, you should drink milk to coat your stomach.",
    reality: "Milk can actually force your stomach to absorb certain toxic chemicals much faster, making the poisoning worse.",
    sources: ["Poison Control"],
    dangerAlert: "Never guess how to treat a poisoning. Do not drink milk, and do not induce vomiting unless specifically told to do so by a professional.",
    actionableTip: "Immediately call Poison Control at 1-800-222-1222. Put the number in your phone contacts right now."
  },
  {
    id: "m-71",
    bodyPartId: "skin",
    myth: "The best way to remove a tick is to burn it with a hot match or cover it in nail polish.",
    reality: "Burning or suffocating a tick panics it, causing it to vomit its infected stomach contents directly into your bloodstream.",
    sources: ["CDC"],
    actionableTip: "Use fine-tipped tweezers to grasp the tick as close to the skin as possible, and pull straight up with steady pressure."
  },
  {
    id: "m-72",
    bodyPartId: "skin",
    myth: "Sunscreen with SPF 100 provides exactly double the protection of SPF 50.",
    reality: "SPF 50 blocks 98% of harmful rays, while SPF 100 blocks 99%. The difference is tiny, and both wear off after two hours anyway.",
    sources: ["Skin Cancer Foundation"],
    actionableTip: "Buy a cheap SPF 30 or 50 sunscreen that you actually like the smell and feel of, because you need to reapply it every two hours."
  },
  {
    id: "m-73",
    bodyPartId: "stomach",
    myth: "Eating sugar directly feeds cancer cells and makes tumors grow faster.",
    reality: "All cells in your body use sugar for energy. Avoiding sugar will not starve a cancer cell, and eating it will not magically make cancer grow.",
    sources: ["Mayo Clinic", "National Cancer Institute"],
    actionableTip: "While you don't need to fear sugar, maintaining a healthy weight through a balanced diet is one of the best ways to reduce your cancer risk."
  },
  {
    id: "m-74",
    bodyPartId: "lung-left",
    myth: "Asthma is just a psychological condition caused by anxiety or stress.",
    reality: "Asthma is a very real, physical chronic disease that severely inflames and narrows the airways in the lungs.",
    sources: ["American Lung Association"],
    dangerAlert: "Treating asthma as an 'anxiety attack' is deadly. An asthma attack physically cuts off oxygen and requires immediate medical rescue inhalers.",
    actionableTip: "If you have asthma, always keep your rescue inhaler with you, even if you haven't had an attack in months."
  },
  {
    id: "m-75",
    bodyPartId: "brain",
    myth: "Pregnant women must completely avoid drinking coffee.",
    reality: "Moderate caffeine intake (about one 12oz cup of coffee a day) is considered perfectly safe during pregnancy by major health organizations.",
    sources: ["American College of Obstetricians and Gynecologists (ACOG)"],
    actionableTip: "You don't have to suffer through morning fatigue! Just keep your coffee to one cup a day and watch out for hidden caffeine in sodas."
  },
  {
    id: "m-76",
    bodyPartId: "nose",
    myth: "If your snot is thick and green, it means you have a bacterial infection and need antibiotics.",
    reality: "Green mucus just means your white blood cells are fighting an infection. It happens with both viruses (like a cold) and bacteria.",
    sources: ["CDC"],
    actionableTip: "Don't beg your doctor for antibiotics just because your snot is green. Most sinus infections are viral and just need time to heal."
  },
  {
    id: "m-77",
    bodyPartId: "throat",
    myth: "You should stick your finger down someone's throat to make them vomit if they swallow a poisonous cleaning chemical.",
    reality: "If a chemical burned on the way down, it will severely burn the esophagus a second time on the way back up.",
    sources: ["Poison Control"],
    dangerAlert: "Never induce vomiting after swallowing chemicals. It can cause lethal damage to the throat and lungs.",
    actionableTip: "Call Poison Control (1-800-222-1222) immediately and have the chemical bottle in your hand so you can read the label to them."
  },
  {
    id: "m-78",
    bodyPartId: "nose",
    myth: "Holding in a violent sneeze can pop your eyeballs out of your head.",
    reality: "Your eyeballs are firmly attached and will not pop out. However, holding a sneeze can rupture your eardrums or blood vessels in your nose.",
    sources: ["University of Arkansas for Medical Sciences"],
    actionableTip: "Just let it out! Sneeze into your elbow to stop germs, but never pinch your nose closed while sneezing."
  },
  {
    id: "m-79",
    bodyPartId: "skin",
    myth: "People with dark skin don't need to wear sunscreen because they can't get sunburned or get skin cancer.",
    reality: "While dark skin has more melanin, it is still damaged by UV rays. People with dark skin can get sunburns and fatal skin cancers.",
    sources: ["American Academy of Dermatology"],
    actionableTip: "Everyone, regardless of skin color, needs to apply SPF 30 sunscreen to their face and exposed skin every day."
  },
  {
    id: "m-80",
    bodyPartId: "lung-left",
    myth: "E-cigarettes and vaping are just harmless water vapor.",
    reality: "Vapes do not produce water vapor. They create an aerosol cloud containing highly addictive nicotine, heavy metals, and cancer-causing chemicals.",
    sources: ["CDC", "American Heart Association"],
    dangerAlert: "Vaping can cause severe, permanent lung damage in teenagers and young adults in a matter of months.",
    actionableTip: "If you don't already smoke, do not start vaping. If you do vape, talk to your doctor about proven methods to quit."
  },
  {
    id: "m-81",
    bodyPartId: "blood",
    myth: "Taking a massive dose of Vitamin B12 or a multivitamin will instantly give you more daily energy.",
    reality: "Unless you have a diagnosed medical deficiency, taking extra vitamins does not give you energy. You just pee out the expensive excess vitamins.",
    sources: ["Harvard Health"],
    actionableTip: "If you feel constantly tired, look at your sleep schedule, hydration, and diet before wasting money on expensive vitamin powders."
  },
  {
    id: "m-82",
    bodyPartId: "stomach",
    myth: "Microwaving food in plastic containers releases cancer-causing chemicals into your meal.",
    reality: "As long as the container is explicitly labeled 'microwave safe,' it has been rigorously tested to ensure no harmful chemicals leak into food.",
    sources: ["FDA", "American Cancer Society"],
    actionableTip: "Only use containers marked 'microwave safe.' Never microwave takeout boxes, butter tubs, or single-use plastics."
  },
  {
    id: "m-83",
    bodyPartId: "skin",
    myth: "The rash from poison ivy is highly contagious and can spread from person to person.",
    reality: "The rash itself is an allergic reaction and is completely harmless to others. You can only spread it if the invisible plant oil is still on your hands or clothes.",
    sources: ["American Academy of Dermatology"],
    actionableTip: "Wash your clothes and skin with strong soap immediately after hiking to remove the plant oils before the rash even starts."
  },
  {
    id: "m-84",
    bodyPartId: "mouth",
    myth: "You should brush your teeth immediately after throwing up to protect them from stomach acid.",
    reality: "Stomach acid softens your tooth enamel. If you brush immediately, you will literally scrub away the weakened enamel and permanently damage your teeth.",
    sources: ["American Dental Association"],
    actionableTip: "Rinse your mouth out with water or a baking soda wash immediately, but wait at least 30 minutes before using a toothbrush."
  },
  {
    id: "m-85",
    bodyPartId: "brain",
    myth: "We only have 5 senses.",
    reality: "Humans actually have dozens of senses! Including balance, temperature, pain, and knowing where our limbs are in space (proprioception).",
    sources: ["Harvard Medical School"],
    actionableTip: "Close your eyes and touch your nose. The fact that you didn't miss is thanks to your hidden sense of 'proprioception'!"
  }
];
