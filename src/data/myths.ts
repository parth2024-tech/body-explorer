import { type MythBusted } from "./content";

export const MYTHS: MythBusted[] = [
  // ━━━ EMERGENCY & RED FLAGS (HIGH PRIORITY) ━━━
  {
    id: "m-cpr-movie",
    bodyPartId: "heart",
    myth: "CPR will quickly wake up someone whose heart has stopped, just like in the movies.",
    reality:
      "CPR almost never restarts a heart on its own. Its only job is to pump oxygen to the brain to keep the person alive until an ambulance gets there with a defibrillator.",
    sources: ["American Heart Association (AHA)", "Red Cross"],
    actionableTip:
      "Learn Hands-Only CPR! Push hard and fast in the center of the chest to the beat of 'Stayin' Alive'. Don't stop until paramedics arrive.",
    dangerAlert:
      "🚨 CALL 112 IMMEDIATELY before starting CPR. Time is the only thing that saves a brain without oxygen.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by AHA Guidelines 2020 - CPR survival rates depend on uninterrupted compressions and rapid defibrillation.",
    clinicalDisclaimer:
      "📍 IMPORTANT: This is for educational purposes. Take an official CPR course to be prepared for real emergencies.",
  },
  {
    id: "m-defib-flatline",
    bodyPartId: "heart",
    myth: "You use a defibrillator to shock a 'flatlined' heart back to life.",
    reality:
      "A defibrillator cannot restart a flatline (asystole). It is actually used to STOP a heart that is twitching out of control, so the body's natural pacemaker can reboot it.",
    sources: ["Advanced Cardiovascular Life Support (ACLS) Guidelines"],
    actionableTip:
      "If you find an AED (Automated External Defibrillator) on the wall during an emergency, just open it! It will literally talk out loud and tell you exactly what to do step-by-step.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by ACLS Protocols - Defibrillation is only effective for Ventricular Fibrillation (VF) or Pulseless Ventricular Tachycardia (pVT).",
  },
  {
    id: "m-poison-milk",
    bodyPartId: "stomach",
    myth: "If a child swallows a poisonous cleaning chemical, make them drink milk to coat their stomach or make them throw up.",
    reality:
      "Drinking milk can actually force the stomach to absorb toxic chemicals much faster. Throwing up a burning chemical will severely burn their throat a second time.",
    sources: ["Poison Control Center", "American Academy of Pediatrics"],
    actionableTip:
      "Do not give them anything to eat or drink. Find the bottle they swallowed from so you can read the label to the emergency operator.",
    dangerAlert:
      "🚨 URGENT WARNING: Call Poison Control IMMEDIATELY at 1-800-222-1222. Never induce vomiting unless explicitly told to by a doctor.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by National Capital Poison Center - Emesis (vomiting) is contraindicated for corrosive ingestions.",
  },
  {
    id: "m-snakebite-suck",
    bodyPartId: "leg",
    myth: "If you get bitten by a venomous snake, you should cut the wound and suck the venom out.",
    reality:
      "Sucking out venom is a Hollywood myth. It just puts dirty mouth bacteria into the wound and risks poisoning the person trying to suck it out. Venom moves into the blood too fast to catch.",
    sources: ["Centers for Disease Control and Prevention (CDC)"],
    actionableTip:
      "Take off rings or tight clothing before swelling starts. Keep the bitten arm or leg completely still, and stay as calm as possible to slow your heart rate.",
    dangerAlert:
      "🚨 DANGEROUS MISINFORMATION ALERT: Never cut the wound, suck venom, apply ice, or use a tourniquet. These will cause you to lose your limb.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by CDC Snakebite Guidelines - Incision and suction cause tissue necrosis and do not effectively remove venom.",
  },
  {
    id: "m-seizure-spoon",
    bodyPartId: "mouth",
    myth: "If someone is having a seizure, you must put a wallet or spoon in their mouth so they don't swallow their tongue.",
    reality:
      "It is physically impossible to swallow your own tongue. Forcing an object into a seizing person's mouth will only break their teeth or cause them to choke.",
    sources: ["Epilepsy Foundation"],
    actionableTip:
      "Gently roll the person onto their side so they can breathe easily, put something soft like a jacket under their head, and time the seizure with your watch.",
    dangerAlert:
      "⚠️ DANGEROUS MISINFORMATION: Do not hold them down or force their mouth open. Call 112 if the seizure lasts longer than 5 minutes.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by Epilepsy Foundation First Aid Protocols - Inserting objects causes severe maxillofacial trauma.",
  },

  // ━━━ BRAIN & NEUROLOGY ━━━
  {
    id: "m-brain-10percent",
    bodyPartId: "brain",
    myth: "Humans only use 10% of their brains.",
    reality:
      "You use 100% of your brain. Brain scans prove that almost every part of your brain is constantly active, even when you are fast asleep.",
    sources: ["Johns Hopkins Medicine", "Scientific American"],
    actionableTip:
      "To keep your brain sharp, try learning a complex new skill like juggling or a new language, which forces different areas to connect.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by Functional MRI (fMRI) studies showing widespread metabolic activity across all brain regions continuously.",
  },
  {
    id: "m-sugar-hyper",
    bodyPartId: "brain",
    myth: "Eating too much sugar makes children hyperactive and bounce off the walls.",
    reality:
      "Sugar does not cause hyperactivity. Kids usually act crazy because they are at exciting places where sugar happens to be served—like birthday parties or holidays.",
    sources: ["JAMA (Journal of the American Medical Association)"],
    actionableTip:
      "If your child gets out of control at a party, it's the excitement and lack of sleep, not the cake. Give them a quiet cool-down period.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by double-blind placebo-controlled trials (JAMA 1995) showing sugar does not affect behavior or cognitive performance in children.",
  },
  {
    id: "m-sleepwalker-wake",
    bodyPartId: "brain",
    myth: "Waking a sleepwalker will give them a heart attack or cause brain damage.",
    reality:
      "It is perfectly safe to gently wake a sleepwalker. They will just be very confused for a minute. Letting them wander around the house is much more dangerous.",
    sources: ["National Sleep Foundation"],
    actionableTip:
      "If you find a sleepwalker, gently guide them back to their bed by the elbow. If they resist, then wake them up using a loud, calm voice from a distance.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by Sleep Medicine clinical guidelines - Wandering injuries far outweigh the temporary confusion of waking.",
  },
  {
    id: "m-alcohol-cells",
    bodyPartId: "brain",
    myth: "Drinking alcohol permanently kills your brain cells.",
    reality:
      "Moderate drinking doesn't kill brain cells. Heavy drinking damages the 'wires' (dendrites) that connect the cells, making it hard to think, but the cells themselves survive.",
    sources: ["National Institute on Alcohol Abuse and Alcoholism (NIAAA)"],
    actionableTip:
      "Protect your brain wires! If you drink, stick to the guidelines: no more than 1 drink a day for women, and 2 for men.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by neurohistological studies showing dendritic damage, not neuronal death, in non-Korsakoff alcoholics.",
  },

  // ━━━ HEART & BLOOD ━━━
  {
    id: "m-blood-blue",
    bodyPartId: "blood",
    myth: "Blood is blue inside your veins until it touches oxygen outside your body.",
    reality:
      "Human blood is always red. Your veins only look blue from the outside because human skin scatters light like a prism, making dark red look blue.",
    sources: ["American Red Cross"],
    actionableTip:
      "When you get blood drawn, it's dark red because it's returning to the lungs for a refill. Bright red blood means it just came from the lungs!",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by basic human physiology - Hemoglobin is bright red when oxygenated and dark red when deoxygenated.",
  },
  {
    id: "m-heartattack-chest",
    bodyPartId: "heart",
    myth: "A heart attack always starts with crushing, unbearable chest pain.",
    reality:
      "Many people, especially women, never feel chest pain during a heart attack. They might just feel extremely tired, nauseous, or have bad pain in their jaw or back.",
    sources: ["American Heart Association (AHA)"],
    actionableTip:
      "If you suddenly break out in a cold sweat, feel like you're going to throw up, and can't catch your breath, don't wait for chest pain to start.",
    dangerAlert:
      "🚨 URGENT WARNING: Call 112 immediately if you have unexplained jaw pain with shortness of breath. Women often dismiss this as the flu.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by AHA Clinical Guidelines - Atypical presentation is common in women, diabetics, and the elderly.",
  },
  {
    id: "m-cholesterol-eggs",
    bodyPartId: "heart",
    myth: "Eating eggs will clog your arteries because they are full of cholesterol.",
    reality:
      "The cholesterol you eat in food doesn't directly become cholesterol in your blood. Your liver makes most of your blood cholesterol in response to eating bad trans fats and too much sugar.",
    sources: ["Harvard T.H. Chan School of Public Health"],
    actionableTip:
      "Enjoy your eggs! Boiling or poaching them is incredibly healthy. Just skip the side of greasy bacon and buttered white toast.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by USDA Dietary Guidelines (2015 update) removing dietary cholesterol limits due to lack of correlation with serum cholesterol.",
  },

  // ━━━ DIGESTION & METABOLISM ━━━
  {
    id: "m-gum-7years",
    bodyPartId: "stomach",
    myth: "If you swallow a piece of chewing gum, it sits in your stomach for seven years.",
    reality:
      "Gum does not stick to your stomach walls. Your body can't digest the rubbery part, so it simply pushes it out when you go to the bathroom a few days later.",
    sources: ["Mayo Clinic"],
    actionableTip:
      "While swallowing one piece of gum is fine, don't let kids swallow huge handfuls, as it can occasionally cause a blockage in small intestines.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by gastroenterology consensus - Synthetic rubber bases pass harmlessly through the GI tract via normal peristalsis.",
  },
  {
    id: "m-spicy-ulcer",
    bodyPartId: "stomach",
    myth: "Eating too much spicy food or stressing out will give you a stomach ulcer.",
    reality:
      "Spicy food and stress never cause ulcers. 80% of stomach ulcers are caused by a specific bacteria called H. pylori, and the rest are caused by taking too many painkillers like ibuprofen.",
    sources: ["Nobel Prize in Medicine (2005)", "Cleveland Clinic"],
    actionableTip:
      "If your stomach constantly burns after eating, ask your doctor to test you for H. pylori. It can be completely cured with a week of antibiotics!",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by the 2005 Nobel Prize discovery proving Helicobacter pylori as the primary etiology of peptic ulcer disease.",
  },
  {
    id: "m-detox-juice",
    bodyPartId: "liver",
    myth: "Drinking expensive juice cleanses will flush harmful 'toxins' out of your liver and body.",
    reality:
      "Your liver and kidneys are the ultimate, perfect detox machines. They clean your blood 24 hours a day for free. Juice cleanses just starve you and remove the healthy fiber from the fruit.",
    sources: ["Mayo Clinic"],
    actionableTip:
      "Save your money! Drink a glass of water and eat an apple. Whole fruits with their skin on (fiber) actually help your liver work better.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by Hepatology consensus - There is zero clinical evidence that commercial 'cleanses' aid hepatic detoxification pathways.",
  },
  {
    id: "m-sugar-diabetes",
    bodyPartId: "pancreas",
    myth: "Eating too many sugary sweets directly causes diabetes.",
    reality:
      "Eating a candy bar does not give you diabetes. Type 1 is a genetic disease, and Type 2 is a mix of family history and carrying too much overall body weight, which stops your insulin from working.",
    sources: ["American Diabetes Association (ADA)"],
    actionableTip:
      "Instead of totally banning sugar, focus on eating smaller portion sizes and going for a 15-minute walk after dinner to help your body process your food.",
    dangerAlert:
      "⚠️ SEE A DOCTOR WITHIN A WEEK if you are constantly thirsty, peeing all the time, and feeling exhausted—these are actual signs of diabetes.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by ADA Guidelines - Type 2 Diabetes etiology is primarily driven by insulin resistance secondary to adiposity and genetics.",
  },
  {
    id: "m-organic-nutrition",
    bodyPartId: "stomach",
    myth: "Organic fruits and vegetables have way more vitamins than regular ones.",
    reality:
      "Multiple massive studies show organic and regular vegetables have the exact same amount of vitamins. 'Organic' just means the farmer used different types of bug spray.",
    sources: ["Stanford University Medical Center"],
    actionableTip:
      "Buy whatever fits your budget! Eating cheap, regular broccoli is infinitely better for your body than skipping vegetables because organic is too expensive.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by Stanford Meta-analysis (2012) showing no significant difference in vitamin content between organic and conventional produce.",
  },

  // ━━━ IMMUNE SYSTEM & INFECTIONS ━━━
  {
    id: "m-cold-weather",
    bodyPartId: "immune",
    myth: "Going outside with wet hair in the winter will give you a cold or pneumonia.",
    reality:
      "You can only catch a cold from a virus, not from cold air or wet hair. We get sick more in winter simply because we are trapped indoors breathing the same recycled air as sick people.",
    sources: ["National Institutes of Health (NIH)"],
    actionableTip:
      "To avoid winter colds, wash your hands the second you get home, and crack a window open for 5 minutes a day to let fresh air circulate.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by Virology consensus - Rhinoviruses and influenza are the sole causative agents of the common cold and flu.",
  },
  {
    id: "m-antibiotic-flu",
    bodyPartId: "immune",
    myth: "If you have a really bad flu or cold, you should demand antibiotics from your doctor to get better.",
    reality:
      "Antibiotics ONLY kill bacteria. Colds and the flu are caused by viruses. Taking antibiotics for a virus is like using a fire extinguisher on a flooded house—it does absolutely nothing.",
    sources: ["Centers for Disease Control and Prevention (CDC)"],
    actionableTip:
      "For a virus, you just have to treat the symptoms. Drink hot tea with honey, use a humidifier, and take ibuprofen for body aches.",
    dangerAlert:
      "🚨 DANGEROUS MISINFORMATION: Taking unnecessary antibiotics creates 'superbugs'—mutant bacteria that no medicine can kill.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by CDC Antimicrobial Stewardship Guidelines - Antibiotics exhibit zero efficacy against viral pathogens.",
  },
  {
    id: "m-starve-fever",
    bodyPartId: "immune",
    myth: "You should 'feed a cold and starve a fever' to force the sickness out.",
    reality:
      "Running a fever requires a massive amount of energy from your body. Starving yourself when you have a fever will only make you weaker and delay your healing.",
    sources: ["Johns Hopkins Medicine"],
    actionableTip:
      "When you have a fever, eat light, easy-to-digest foods like chicken soup or toast, and drink massive amounts of water or electrolyte drinks.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by clinical nutrition guidelines - Elevated basal metabolic rate during pyrexia (fever) increases caloric and hydration demands.",
  },
  {
    id: "m-green-snot",
    bodyPartId: "nose",
    myth: "If your snot turns green or yellow, it means you have a severe bacterial infection and need medicine.",
    reality:
      "Green snot is totally normal! It just means your white blood cells have rushed into your nose to fight the germs. It happens with normal, harmless viruses too.",
    sources: ["CDC"],
    actionableTip:
      "Use a simple saline nasal spray to flush out the thick mucus. If the green snot lasts for more than 10 days straight with severe face pain, then call a doctor.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by CDC guidelines on Acute Rhinosinusitis - Purulent (green/yellow) nasal discharge is not a reliable indicator of bacterial infection.",
  },
  {
    id: "m-vaccine-sick",
    bodyPartId: "immune",
    myth: "Getting a flu shot actually gives you a mini version of the flu.",
    reality:
      "The flu shot is made of dead, chopped-up virus pieces. It is biologically impossible for a dead virus to come back to life and infect you.",
    sources: ["WHO", "CDC"],
    actionableTip:
      "If you feel tired or have a sore arm the day after a shot, celebrate! That is just physical proof your immune system is successfully building weapons to protect you.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by global immunological consensus - Inactivated viral vaccines cannot replicate to cause pathogenesis.",
  },

  // ━━━ SKIN, EYES, & BONES ━━━
  {
    id: "m-read-dark",
    bodyPartId: "eyes",
    myth: "Reading a book in dim light will permanently ruin your eyesight.",
    reality:
      "Reading in the dark makes your eye muscles work harder, which can give you a headache or make your eyes feel tired. But it causes absolutely zero permanent damage to your vision.",
    sources: ["American Academy of Ophthalmology"],
    actionableTip:
      "If your eyes hurt while reading, just turn on a lamp or close your eyes for five minutes. Your vision will bounce right back to normal.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by Ophthalmology consensus - Low-light accommodation causes transient asthenopia (eye strain), not structural myopia.",
  },
  {
    id: "m-shave-thick",
    bodyPartId: "skin",
    myth: "If you shave your leg or facial hair, it will grow back thicker, darker, and faster.",
    reality:
      "Hair naturally tapers to a soft point at the end. When you shave, you cut it straight across the thickest part. As it grows, the blunt edge just feels rougher and looks darker.",
    sources: ["Mayo Clinic"],
    actionableTip:
      "Shave whenever you want! If you hate the blunt, prickly feeling of shaved hair growing back, consider waxing, which pulls the hair out by the root.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by dermatological studies confirming that shaving does not alter the follicular growth cycle or keratinocyte thickness.",
  },
  {
    id: "m-burn-butter",
    bodyPartId: "skin",
    myth: "You should quickly smear butter, oil, or raw ice on a bad kitchen burn.",
    reality:
      "Butter and oil act like a blanket, trapping the extreme heat inside your skin and cooking it further. Ice is so brutally cold it can cause frostbite on top of the burn.",
    sources: ["American Burn Association"],
    actionableTip:
      "Turn on the sink and run cool (not freezing) water over the burn for 10 to 15 straight minutes. This pulls the heat out safely.",
    dangerAlert:
      "🚨 URGENT WARNING: Go to the ER immediately if a burn blisters and is larger than your hand, or if it is on your face.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by Burn Life Support protocols - Immediate cooling with running tap water (15°C) for 20 minutes minimizes tissue damage.",
  },
  {
    id: "m-knuckle-arthritis",
    bodyPartId: "bones",
    myth: "Cracking your knuckles damages your cartilage and will give you severe arthritis when you are older.",
    reality:
      "The 'pop' you hear is just a tiny, harmless bubble of nitrogen gas bursting inside the joint fluid. It does not scrape your bones or cause arthritis.",
    sources: ["Harvard Medical School"],
    actionableTip:
      "Crack away! But if a joint ever hurts or swells up immediately after you crack it, you should have a doctor look at it.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by long-term radiographic studies showing no correlation between habitual knuckle-cracking and osteoarthritis.",
  },
  {
    id: "m-sunscreen-cloudy",
    bodyPartId: "skin",
    myth: "You don't need to put on sunscreen if it is cloudy outside or if you have dark skin.",
    reality:
      "Clouds only block 20% of UV rays. The other 80% pass right through and burn you. And while dark skin has built-in sun protection, it can still get fatal skin cancers.",
    sources: ["American Academy of Dermatology"],
    actionableTip:
      "Make it a daily habit! Put on a cheap, comfortable SPF 30 lotion every morning after you brush your teeth, regardless of the weather.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by dermatological guidelines - UV-A radiation penetrates cloud cover and causes cumulative DNA damage across all Fitzpatrick skin types.",
  },
  {
    id: "m-wound-breathe",
    bodyPartId: "skin",
    myth: "You should take the bandage off a deep cut overnight to 'let it breathe' and scab over faster.",
    reality:
      "A dry, crusty scab actually blocks new skin cells from growing. Wounds heal twice as fast, and leave much smaller scars, when they are kept perfectly moist and covered.",
    sources: ["American Academy of Dermatology"],
    actionableTip:
      "Wash the cut, apply a thin layer of plain petroleum jelly (like Vaseline), and put a fresh bandage on it every day until it heals completely.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by wound care consensus - Moist wound environments facilitate epidermal cell migration and angiogenesis while preventing necrosis.",
  },
  {
    id: "m-hydrogen-peroxide",
    bodyPartId: "skin",
    myth: "Pouring bubbling hydrogen peroxide or rubbing alcohol into an open cut is the best way to clean out germs.",
    reality:
      "These harsh chemicals are basically bleach for your body. They kill the germs, but they also massacre your own healthy skin cells, which drastically delays healing.",
    sources: ["Cleveland Clinic"],
    actionableTip:
      "Hold the cut under running tap water for a full minute, and gently wash around it with normal hand soap. That's all you need!",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by dermatological guidelines - Hydrogen peroxide is cytotoxic to fibroblasts, the cells responsible for wound repair.",
  },
  {
    id: "m-acne-chocolate",
    bodyPartId: "skin",
    myth: "Eating greasy pizza and chocolate bars directly causes teenage acne.",
    reality:
      "Acne is almost entirely driven by genetics and intense teenage hormones telling your skin to make too much oil. A candy bar does not shoot straight to your forehead.",
    sources: ["American Academy of Dermatology"],
    actionableTip:
      "Wash your face twice a day with a gentle cleanser containing Salicylic Acid. Don't torture yourself by banning all your favorite foods.",
    confidenceLevel: "MODERATE",
    evidenceStatement:
      "✅ EVIDENCE: Supported by AAD Guidelines - While high-glycemic diets may mildly exacerbate inflammation, genetics and androgens are the primary pathogenesis.",
  },
  {
    id: "m-dim-light",
    bodyPartId: "eyes",
    myth: "Reading in dim light or in the dark will permanently damage your eyes.",
    reality:
      "Reading in dim light might cause temporary eye strain and headaches because your eye muscles work harder to focus, but it does not cause any permanent damage or weaken your eyesight.",
    sources: ["Harvard Medical School", "American Academy of Ophthalmology"],
    actionableTip:
      "Use a reading lamp directed at your pages to avoid fatigue, and rest your eyes with the 20-20-20 rule if you feel strain.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by AAO Guidelines - Lack of light does not alter the physical shape or function of the eyes.",
  },
  {
    id: "m-head-heat",
    bodyPartId: "brain",
    myth: "You lose up to 80% of your body heat through your head, so you must always wear a hat in cold weather.",
    reality:
      "You only lose about 7% to 10% of your body heat through your head—which is roughly proportional to its surface area compared to the rest of your body.",
    sources: [
      "BMJ (British Medical Journal)",
      "U.S. Army Research Institute of Environmental Medicine",
    ],
    actionableTip:
      "Dress in warm layers all over. Covering your torso and limbs is far more important for preventing hypothermia than just wearing a beanie.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by BMJ clinical review - Head heat loss is proportional to exposed surface area, not disproportionately elevated.",
  },
  {
    id: "m-knuckle-cracking",
    bodyPartId: "hands",
    myth: "Cracking your knuckles causes arthritis in your fingers.",
    reality:
      "The sound of cracking knuckles is just gas bubbles popping in the joint fluid. Studies show it does not cause arthritis, though chronic cracking might reduce grip strength.",
    sources: ["Harvard Medical School", "Journal of Family Practice"],
    actionableTip:
      "If you feel the urge to crack your knuckles, try stretching your fingers or squeezing a stress ball instead.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by multiple prospective studies, including one famous doctor who cracked the knuckles of only one hand for 50 years with zero differences in arthritis.",
  },
  {
    id: "m-toothpaste-burn",
    bodyPartId: "skin",
    myth: "Smearing white toothpaste on a fresh kitchen burn cools it down and prevents blisters.",
    reality:
      "Toothpaste contains abrasive chemicals like calcium carbonate, sodium lauryl sulfate, and mint that trap heat inside the burn and irritate the skin, frequently leading to chemical irritation and infection.",
    sources: ["American Burn Association"],
    actionableTip:
      "Flush the area under cool running tap water for 15 minutes immediately. Keep it clean and dry.",
    dangerAlert:
      "🚨 DANGEROUS MISINFORMATION: Never put toothpaste, butter, oil, or ice on a burn. They cook the tissue deeper. Run cool water for 15 minutes.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by American Burn Association Guidelines. Immediate cooling with running tap water (15°C) for 20 minutes minimizes tissue damage.",
  },
  {
    id: "m-shivering-fever",
    bodyPartId: "brain",
    myth: "Shivering during a high fever means you should bundle up in thick blankets and sweaters.",
    reality:
      "Shivering is the brain's thermostat instructing the body to raise its temperature. Wrapping up in blankets traps heat and can dangerously drive body temperatures up to hyperpyrexia (above 103°F or 39.4°C), increasing the risk of febrile seizures, especially in children.",
    sources: ["Indian Academy of Pediatrics (IAP)", "World Health Organization (WHO)"],
    actionableTip:
      "Wear a single layer of light cotton clothing, keep the room ventilated, and use room-temperature sponge baths (not cold water) to cool down.",
    dangerAlert:
      "🚨 EMERGENCY WARNING: If a fever exceeds 103°F (39.4°C) or is accompanied by confusion, stiff neck, or seizures, call 112 / 108 immediately.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by Indian Academy of Pediatrics (IAP) & WHO fever management protocols.",
  },
  {
    id: "m-cold-water-fats",
    bodyPartId: "stomach",
    myth: "Drinking ice-cold water after a meal solidifies the fats you ate and causes stomach cancer.",
    reality:
      "The human body maintains a core temperature of 37°C. Cold water warms to body temperature within minutes of swallowing and has no effect on solidifying dietary fats or causing gastrointestinal cancers.",
    sources: ["World Health Organization (WHO)", "Indian Council of Medical Research (ICMR)"],
    actionableTip:
      "Drink water whenever you are thirsty. Water temperature does not affect digestion or cause cancer; staying hydrated is what matters.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by WHO and Gastroenterology clinical consensus.",
  },
  {
    id: "m-detox-cleanses",
    bodyPartId: "liver",
    myth: "Drinking detox juices and herbal teas is necessary to flush toxins out of your body.",
    reality:
      "Your liver and kidneys act as highly advanced, 24/7 detox systems. No commercial juice, powder, or herbal tea can cleanse your organs; in fact, many detox teas contain dangerous laxatives that cause dehydration and electrolyte loss.",
    sources: ["National Institutes of Health (NIH)", "Indian Council of Medical Research (ICMR)"],
    actionableTip:
      "Skip expensive detox products. Support your liver and kidneys naturally by drinking plenty of water, getting 7-8 hours of sleep, and eating fresh vegetables.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by National Institutes of Health (NIH) and Indian Council of Medical Research (ICMR).",
  },
  {
    id: "m-nosebleed-tilt",
    bodyPartId: "mouth",
    myth: "Tilting your head backward is the best way to stop a sudden bloody nose.",
    reality:
      "Tilting your head back makes the blood run down your throat into your stomach or lungs, which causes coughing, choking, or vomiting.",
    sources: ["American Academy of Otolaryngology"],
    actionableTip:
      "Lean slightly forward and pinch the soft part of your nose just below the bony bridge for 10 full minutes without releasing pressure.",
    dangerAlert:
      "🚨 EMERGENCY WARNING: Call 112 / 108 or go to the ER if a nosebleed doesn't stop after 20 minutes of firm pinching.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by American Academy of Otolaryngology guidelines.",
  },
  {
    id: "m-carotid-pulse-both",
    bodyPartId: "heart",
    myth: "When checking an unconscious person's neck pulse, pressing both carotid arteries simultaneously gives you twice as accurate a reading.",
    reality:
      "Compressing both carotid arteries simultaneously cuts off bilateral blood supply to the brain and stimulates baroreceptors in the carotid sinuses, which can induce sudden bradycardia, asystole, or severe cerebral ischemia.",
    sources: [
      "American Heart Association (AHA) Basic Life Support Guidelines",
      "Resuscitation Council UK",
    ],
    actionableTip:
      "Always locate and gently palpate only ONE carotid artery at a time in the groove between the windpipe and neck muscle using the pads of two fingers.",
    dangerAlert:
      "🚨 CAROTID OCCLUSION: Never compress both sides of the neck at once. Bilateral occlusion can halt cerebral perfusion in seconds.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: AHA BLS Protocols & Neurological Practice Guidelines - Bilateral carotid compression causes acute hypoperfusion and reflex syncope.",
  },
  {
    id: "m-fentanyl-touch-overdose",
    bodyPartId: "brain",
    myth: "Accidentally brushing against or touching powdered fentanyl on a surface will cause an instantaneous, fatal opioid overdose through intact skin.",
    reality:
      "Dry pharmaceutical and illicit fentanyl cannot rapidly cross intact skin; passive transdermal absorption of dry powder is exceptionally slow and requires hours of specialized lipid matrix formulation. Touching drug packaging or powder cannot cause acute overdose.",
    sources: [
      "American College of Medical Toxicology (ACMT)",
      "American Academy of Clinical Toxicology (AACT)",
    ],
    actionableTip:
      "If you suspect you touched fentanyl residue, wash hands thoroughly with cool water and soap. Avoid alcohol hand sanitizers, as alcohol increases transdermal permeability.",
    dangerAlert:
      "🚨 CRITICAL MISINFORMATION: Unfounded panic over touch-overdoses delays the immediate administration of life-saving Naloxone (Narcan) to true overdose victims.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by ACMT/AACT Joint Position Statement on Fentanyl Exposure.",
  },
  {
    id: "m-ipecac-ingestion-vomit",
    bodyPartId: "stomach",
    myth: "If someone accidentally swallows liquid bleach, caustic cleaner, or unknown household chemicals, you should force them to vomit immediately.",
    reality:
      "Forcing vomiting after ingesting caustic acids or alkalis re-exposes the esophagus, pharynx, and vocal cords to a second chemical burn, drastically increasing the danger of esophageal perforation and fatal aspiration into the lungs.",
    sources: [
      "American Academy of Pediatrics (AAP)",
      "American Association of Poison Control Centers (AAPCC)",
    ],
    actionableTip:
      "Call your local Poison Control Center (US: 1-800-222-1222, India: 1800-116-117) or emergency services (911 / 112) immediately. Keep the chemical container on hand for EMS.",
    dangerAlert:
      "🚨 CHEMICAL CORROSION: Never induce vomiting for swallowed caustic chemicals, button batteries, or hydrocarbons. It causes catastrophic airway burns.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: AAP Policy Statement - Emetics like Syrup of Ipecac are contraindicated in caustic chemical ingestion due to high aspiration morbidity.",
  },
  {
    id: "m-sunburn-vinegar-spray",
    bodyPartId: "skin",
    myth: "Spraying pure apple cider vinegar onto a severe, blistering sunburn soothes inflammation and speeds up skin barrier healing.",
    reality:
      "Vinegar is dilute acetic acid. Spraying acid onto second-degree sunburned skin with compromised epidermal barriers causes intense chemical irritation, heightens pain, and damages denuded tissues, elevating the risk of bacterial superinfection.",
    sources: ["American Academy of Dermatology (AAD)", "British Association of Dermatologists"],
    actionableTip:
      "Apply cool (not freezing) compresses, pure aloe vera gel, or fragrance-free ceramide moisturizers to damp skin, stay hydrated, and use ibuprofen for inflammation.",
    dangerAlert:
      "🔴 ACID IRRITATION: Applying acidic substances to blistering sunburns induces chemical burn irritation on already compromised tissue.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by AAD Photomedicine Clinical Guidelines.",
  },
  {
    id: "m-blood-blue-inside",
    bodyPartId: "heart",
    myth: "Deoxygenated blood inside human veins is royal blue until it exits the body and comes into contact with ambient room air.",
    reality:
      "Human blood is ALWAYS red. Oxygenated arterial blood is bright scarlet, while deoxygenated venous blood returning to the heart is deep dark maroon-burgundy. Veins appear blue through the skin strictly due to an optical physics effect: higher-energy blue light is scattered and reflected back to your eyes by superficial dermal layers, while longer red wavelengths penetrate deeper.",
    sources: ["American Society of Hematology", "Journal of Applied Optics"],
    actionableTip:
      "Remember that true blue discoloration of lips or nail beds (cyanosis) indicates systemic oxygen starvation, not that your internal blood has transformed color.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Hematological consensus and spectroscopic analysis of hemoglobin absorbance curves.",
  },
  {
    id: "m-sugar-child-hyperactivity",
    bodyPartId: "brain",
    myth: "Giving children sugary snacks or candy triggers uncontrollable chemical hyperactivity and ADHD-like behavior spikes.",
    reality:
      "Extensive double-blind, placebo-controlled clinical trials have demonstrated that refined sugar does not provoke hyperactive behavior in children. The perceived hyperactivity is driven by environmental excitement (parties, holidays) and confirmed parental expectancy bias.",
    sources: [
      "Journal of the American Medical Association (JAMA)",
      "National Institutes of Health (NIH)",
    ],
    actionableTip:
      "Moderate children's sugar intake to protect metabolic health and prevent dental cavities, but do not attribute normal excited behavior to a 'sugar rush.'",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Landmark JAMA meta-analysis (Wolraich et al.) evaluating 23 randomized controlled trials found no significant effect of sucrose on child behavior.",
  },
  {
    id: "m-holding-sneeze-safe",
    bodyPartId: "throat",
    myth: "Pinching your nose shut and clamping your mouth closed to stifle a loud sneeze is completely safe and courteous.",
    reality:
      "Sneezing creates airway velocity up to 100 mph. Clamping both nose and mouth forces immense pneumatic pressure (20 to 24 times normal) back into the nasopharynx and Eustachian tubes, risking tympanic membrane rupture, pharyngeal soft-tissue tearing, and inner ear trauma.",
    sources: ["BMJ Case Reports", "American Rhinologic Society"],
    actionableTip:
      "Always sneeze freely into the crook of your sleeve or a disposable tissue. Never clamp your nostrils closed while sneezing.",
    dangerAlert:
      "⚠️ PNEUMATIC TRAUMA: Suppressing a violent sneeze can cause pharyngeal perforation, cervical emphysema, or eardrum rupture.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by otolaryngologic clinical reviews and documented BMJ trauma reports.",
  },
  {
    id: "m-antibiotics-viral-pharyngitis",
    bodyPartId: "throat",
    myth: "Every severe sore throat where swallowing is painful requires an immediate prescription of Amoxicillin or Azithromycin.",
    reality:
      "Over 85% to 90% of adult sore throats (and >70% in children) are caused by viral pathogens such as rhinovirus, adenovirus, or Epstein-Barr virus. Antibiotics are completely ineffective against viruses; taking them drives global antimicrobial resistance, destroys beneficial gut flora, and causes allergic reactions.",
    sources: [
      "Centers for Disease Control and Prevention (CDC)",
      "Infectious Diseases Society of America (IDSA)",
    ],
    actionableTip:
      "Request a rapid Strep A throat swab or culture before starting antibiotics. Manage viral pharyngitis with warm saline gargles, honey, and systemic anti-inflammatories.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by IDSA Guidelines for the Diagnosis and Management of Group A Streptococcal Pharyngitis.",
  },
  {
    id: "m-sweat-toxins-armpits",
    bodyPartId: "skin",
    myth: "Sweating heavily during hot yoga or in infrared saunas is the human body's primary method for eliminating heavy metals and metabolic toxins.",
    reality:
      "Human sweat is 99% water with trace electrolytes and tiny amounts of urea. Over 99.9% of biological detoxification is performed by phase I/II enzyme systems in the liver and continuous filtration by renal nephrons in the kidneys. Sweat exists almost exclusively for evaporative thermoregulation.",
    sources: ["National Institutes of Health (NIH)", "Journal of Human Environmental Toxicology"],
    actionableTip:
      "Use heat exposure and exercise for cardiovascular fitness and mental well-being, but maintain hydration with electrolytes; rely on your liver and kidneys for natural detoxification.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Systematic reviews show sweat contains biologically negligible trace concentrations of toxins compared to urinary and biliary excretion.",
  },
  {
    id: "m-swallowed-gum-seven-years",
    bodyPartId: "stomach",
    myth: "Chewing gum that is accidentally swallowed sticks to your stomach lining and takes 7 whole years to be digested.",
    reality:
      "While synthetic gum resin base cannot be broken down by gastric digestive enzymes, it does not adhere to the slick mucus lining of the digestive tract. Normal peristaltic contractions transport the gum smoothly through the intestines, excreting it in stool within 24 to 72 hours just like insoluble plant fiber.",
    sources: ["Mayo Clinic", "American College of Gastroenterology"],
    actionableTip:
      "Dispose of gum properly in trash bins, but if you inadvertently swallow a piece, there is zero medical danger and no need for laxatives.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Mayo Clinic Clinical Review on Gastrointestinal Transit Times.",
  },
  {
    id: "m-raw-meat-black-eye",
    bodyPartId: "eyes",
    myth: "Pressing a cold, raw beef steak onto a bruised black eye reduces swelling and heals tissue faster than modern first aid.",
    reality:
      "Raw slaughterhouse meat harbors high counts of virulent bacteria including Salmonella, E. coli, and Campylobacter. Placing raw meat against micro-abrasions around an inflamed eye introduces immense risk of periorbital cellulitis and corneal ulceration. The cooling effect is the sole benefit, easily achieved with safe ice.",
    sources: ["American Academy of Ophthalmology (AAO)"],
    actionableTip:
      "Wrap an ice pack or bag of frozen vegetables in a clean cloth towel and apply gently for 15 minutes per hour. Never place uncooked animal products on bruised or broken skin.",
    dangerAlert:
      "⚠️ OCULAR INFECTION: Applying raw meat to ocular tissues risks aggressive bacterial infections that can threaten eyesight.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: AAO Eye Trauma Guidelines.",
  },
  {
    id: "m-coffee-stunts-growth",
    bodyPartId: "bones",
    myth: "Drinking coffee or caffeinated beverages during childhood and teenage years permanently stunts bone growth and final adult height.",
    reality:
      "There is zero clinical evidence that moderate caffeine intake stunts skeletal growth. Bone elongation is determined by genetic programming, growth hormone, IGF-1, and balanced overall nutrition. Caffeine only impacts bone density if an individual entirely replaces dietary calcium (such as milk) with caffeinated beverages.",
    sources: ["Harvard T.H. Chan School of Public Health", "American Academy of Pediatrics (AAP)"],
    actionableTip:
      "Ensure children and teens get 8 to 10 hours of sleep and adequate dietary calcium and Vitamin D; limit caffeine primarily to avoid sleep disruption and jitters.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Longitudinal cohort studies tracking adolescent growth found no association between caffeine consumption and peak adult height.",
  },
  {
    id: "m-sitting-too-close-tv",
    bodyPartId: "eyes",
    myth: "Sitting close to the television or holding a phone near your face causes irreversible anatomical damage to your retinas and optic nerve.",
    reality:
      "Sitting near a modern screen does not cause structural ocular disease or permanent visual impairment. Young children naturally focus comfortably on near objects without eyestrain due to flexible crystalline lenses. In many cases, sitting unusually close to screens is a symptom of existing, uncorrected myopia rather than its cause.",
    sources: ["American Academy of Ophthalmology (AAO)"],
    actionableTip:
      "Practice the 20-20-20 rule (every 20 minutes look 20 feet away for 20 seconds) to prevent transient digital eye strain, and schedule routine pediatric visual acuity exams.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: AAO Pediatric Eye Care Consensus - Modern displays emit harmless non-ionizing radiation that causes no retinopathic injury.",
  },
  {
    id: "m-iron-cast-pan-anemia",
    bodyPartId: "large-intestine",
    myth: "Cooking all your meals in an unseasoned cast-iron skillet provides all the bioavailable iron needed to cure clinical iron-deficiency anemia.",
    reality:
      "While acidic foods cooked in cast iron leach minor quantities of elemental non-heme iron, this inorganic iron has very low intestinal bioavailability (often <2-5%). True clinical anemia requires diagnostic investigation into blood loss causes and therapeutic elemental iron dosing prescribed by a physician.",
    sources: ["World Health Organization (WHO)", "American Journal of Clinical Nutrition"],
    actionableTip:
      "If lab tests show low serum ferritin or hemoglobin, consult your physician for targeted iron therapies paired with Vitamin C rather than relying solely on cookware.",
    confidenceLevel: "MODERATE",
    evidenceStatement:
      "✅ EVIDENCE: WHO Guidelines on Anemia Management - Leached iron from cookware is erratic in quantity and inadequate for replenishing depleted iron stores.",
  },
  {
    id: "m-eating-carrots-night-vision",
    bodyPartId: "eyes",
    myth: "Eating large quantities of carrots will dramatically enhance your night vision and grant the ability to see in total darkness.",
    reality:
      "This belief originated as British World War II military disinformation to conceal the invention of airborne radar from the enemy. While the beta-carotene in carrots provides essential Vitamin A for retinal rhodopsin synthesis, consuming amounts above baseline dietary requirements does not confer supranormal visual acuity.",
    sources: ["American Academy of Ophthalmology (AAO)", "Smithsonian Institution Archives"],
    actionableTip:
      "Eat a colorful variety of vegetables—including dark leafy greens rich in lutein and zeaxanthin—to support macular health, without expecting superhuman night sight.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Nutritional ophthalmology consensus - Beta-carotene resolves visual deficits from deficiency but cannot elevate normal visual function.",
  },
  {
    id: "m-daily-aspirin-everyone",
    bodyPartId: "heart",
    myth: "Every healthy person reaching the age of 40 or 50 should automatically take a daily baby aspirin to prevent their first heart attack.",
    reality:
      "Major updated guidelines from the USPSTF and AHA/ACC advise against routine daily aspirin for primary prevention in healthy older adults without known vascular disease. In people without established atherosclerosis, the risk of severe gastrointestinal hemorrhage and intracranial bleeding outweighs the minor cardiovascular benefit.",
    sources: [
      "U.S. Preventive Services Task Force (USPSTF)",
      "American Heart Association (AHA) / American College of Cardiology (ACC)",
    ],
    actionableTip:
      "Do not start a daily aspirin regimen on your own. Only take daily aspirin if specifically prescribed by your doctor for secondary prevention following a previous heart attack or stroke.",
    dangerAlert:
      "⚠️ BLEEDING RISK: Unsupervised daily aspirin in low-risk individuals significantly increases hemorrhagic stroke and major GI bleeding rates.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: 2022 USPSTF Recommendation Statement & 2019 ACC/AHA Primary Prevention Guidelines.",
  },
  {
    id: "m-cracking-back-paralysis",
    bodyPartId: "spine-thoracic",
    myth: "Vigorously twisting your torso until your back pops forces slipped and herniated spinal discs back into alignment.",
    reality:
      "The audible pop during spinal manipulation represents cavitation—nitrogen gas bubbles forming and collapsing within facet joint synovial fluid. A herniated disc involves cartilaginous nucleus pulposus extrusion, which is physically unaffected by gas cavitation. Violent, ballistic self-manipulation can worsen disc tears and facet impingement.",
    sources: ["North American Spine Society (NASS)", "Spine Journal"],
    actionableTip:
      "Focus on active core-stabilization exercises (like the McGill Big 3) and brisk walking for back comfort rather than aggressive ballistic twisting.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: NASS Clinical Guidelines for Lumbar Disc Herniation Management.",
  },
  {
    id: "m-electrolyte-drinks-sedentary",
    bodyPartId: "kidneys",
    myth: "Drinking commercial neon electrolyte sports beverages during regular sedentary desk work is vital to avoid dehydration.",
    reality:
      "Commercial sports beverages are formulated to replenish sodium, potassium, and rapid glucose in endurance athletes performing vigorous, sweat-heavy workouts exceeding 60 to 90 minutes. For desk work, these drinks deliver excessive simple sugars (up to 30-35 grams per bottle) and sodium, promoting weight gain and tooth enamel erosion.",
    sources: [
      "American College of Sports Medicine (ACSM)",
      "Centers for Disease Control and Prevention (CDC)",
    ],
    actionableTip:
      "Drink clean tap or filtered water as your primary beverage during sedentary work. Eat whole fruits and vegetables for natural electrolytes.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: ACSM Position Stand on Exercise and Fluid Replacement.",
  },
  {
    id: "m-eating-late-weight-gain",
    bodyPartId: "stomach",
    myth: "Any food consumed past 8:00 PM is automatically stored as body fat because human metabolic rates halt during sleep.",
    reality:
      "Your basal metabolic rate continues around the clock to support respiration, cellular protein synthesis, and brain activity. Fat storage is dictated by cumulative net energy balance over days, not by a nocturnal clock cutoff. However, late meals frequently involve energy-dense snacking and can provoke nocturnal acid reflux.",
    sources: ["Endocrine Society", "American Journal of Clinical Nutrition"],
    actionableTip:
      "Finish eating 2 to 3 hours before sleep primarily to optimize deep sleep architecture and prevent gastroesophageal reflux, rather than out of fear of magical calorie doubling.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Metabolic chamber clinical trials demonstrate equivalent 24-hour energy expenditure irrespective of isocaloric evening versus daytime meal distribution.",
  },
  {
    id: "m-ice-bath-muscle-hypertrophy",
    bodyPartId: "muscles",
    myth: "Immersing yourself in an ice bath immediately after heavy resistance training maximizes long-term muscle growth and hypertrophy.",
    reality:
      "While cold water immersion reduces acute delayed-onset muscle soreness and localized swelling, it blunts the natural post-exercise inflammatory signaling cascades (including mTOR pathway activation and satellite cell proliferation) essential for long-term muscular hypertrophy and strength adaptations.",
    sources: ["Journal of Physiology", "Sports Medicine"],
    actionableTip:
      "Reserve immediate post-workout ice baths for tournament scenarios where 24-hour rapid recovery trumps adaptation. For hypertrophy, allow natural recovery with proper protein intake.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Roberts et al. (J Physiol) and Peake et al. randomized trials confirming post-exercise cold immersion attenuates anabolic muscle signaling.",
  },
  {
    id: "m-knuckle-cracking-expanded",
    bodyPartId: "hands",
    myth: "Cracking your knuckles causes arthritis, swollen fingers, and weakened hand grip.",
    reality:
      "The popping sound when you crack your fingers is simply tiny bubbles of dissolved nitrogen gas collapsing inside your natural joint lubricating fluid. It does not cause arthritis or damage your cartilage. A famous doctor even cracked the knuckles of his left hand for sixty years while leaving his right hand alone, and x-rays showed zero difference between both hands.",
    sources: ["Harvard Medical School", "American College of Rheumatology"],
    actionableTip:
      "Cracking your joints occasionally is harmless, but if cracking causes physical pain, swelling, or feels loose, have an orthopedic doctor check for joint inflammation or ligament sprains.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Unger et al. (2008 Ignobel Medical Prize study) and prospective observational trials show equal rates of osteoarthritis in habitual knuckle crackers versus non-crackers.",
  },
  {
    id: "m-eight-glasses-water",
    bodyPartId: "kidneys",
    myth: "Every single person must drink at least 8 large glasses of plain water every day, not counting food or other drinks.",
    reality:
      "The '8 glasses a day' rule has no scientific origin. Around 20% to 30% of your daily hydration comes naturally from water-dense foods like cucumbers, tomatoes, oranges, watermelon, lentils, and soups. Coffee, tea, and milk also count toward hydration. Forcing yourself to drink gallons of water when you are not thirsty can dilute your blood sodium to dangerously low levels.",
    sources: ["National Academies of Sciences, Engineering, and Medicine", "Mayo Clinic"],
    actionableTip:
      "Trust your natural thirst mechanism. Simply check the color of your urine: a pale yellow color like lemonade means you are well hydrated, while dark amber means drink a glass of water.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Dietary Reference Intakes (DRI) reports confirm total fluid requirements include dietary moisture from food; mandatory standalone water quotas lack clinical trial support.",
  },
  {
    id: "m-wet-hair-cold",
    bodyPartId: "sinuses",
    myth: "Going outside with wet hair or walking barefoot on cold tile floors gives you a cold or chest flu.",
    reality:
      "Colds and flu are caused exclusively by living respiratory viruses, not by cool weather, damp hair, or cold floorboards. Viruses spread when an infected person sneezes or touches a surface, and you breathe it in or touch your eyes. People get more colds in the winter simply because we spend more time indoors close together with closed windows, giving viruses easy targets.",
    sources: [
      "Centers for Disease Control and Prevention (CDC)",
      "National Institutes of Health (NIH)",
    ],
    actionableTip:
      "To protect yourself from colds, wash your hands with soap before eating, avoid touching your eyes and nose in crowded public spaces, and open windows for fresh ventilation.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Human volunteer challenge trials by the UK Common Cold Research Unit showed exposure to cold air or damp conditions did not increase viral infection rates compared to warm controls.",
  },
  {
    id: "m-detox-footpads-teas",
    bodyPartId: "liver",
    myth: "Detox foot pads, herbal cleanse teas, and charcoal drinks suck heavy metals and stored toxins out through your skin and bowels.",
    reality:
      "Your body already possesses two high-performance 24/7 detox systems: your liver and your kidneys. Detox foot pads turn dark brown simply because sweat and moisture from your foot react with wood vinegar powder inside the pad. Commercial detox teas are often just strong laxatives and diuretics that make you lose water weight and deplete healthy electrolytes.",
    sources: ["Federal Trade Commission (FTC)", "British Dietetic Association (BDA)"],
    actionableTip:
      "Save your money. The best way to help your body naturally clean itself is drinking adequate water, eating fiber-rich vegetables, and cutting down on alcohol and cigarettes.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: FTC legal enforcement orders penalized commercial detox pad marketers for deceptive claims; laboratory audits found zero biological toxins in used pads.",
  },
  {
    id: "m-chewing-gum-digest",
    bodyPartId: "stomach",
    myth: "If you accidentally swallow chewing gum, it sits undigested inside your stomach for 7 whole years.",
    reality:
      "While your stomach acid cannot break down the synthetic rubber base of chewing gum, your stomach does not keep it trapped. Your stomach and intestinal muscles squeeze and push it through your digestive tract just like corn kernels or fruit seeds, and it passes harmlessly in your stool within 2 to 3 days.",
    sources: ["American Academy of Pediatrics (AAP)", "Cleveland Clinic"],
    actionableTip:
      "Do not panic if you accidentally swallow a single piece of gum. However, never swallow large wads of gum or give gum to toddlers who could choke on it or create an intestinal blockage.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Pediatric gastrointestinal reviews confirm swallowed gum traverses the normal gastrointestinal transit cycle within 40-72 hours without mucosal adhesion.",
  },
  {
    id: "m-sugar-hyperactivity-kids",
    bodyPartId: "brain",
    myth: "Eating candy, soda, or cake immediately makes children hyperactive, wild, and out of control.",
    reality:
      "Extensive blind clinical studies where parents and children did not know whether foods had real sugar or artificial sweetener showed zero change in children's behavior or attention spans. The wild behavior at birthday parties or holidays is caused by the excitement of celebrations, party games, friends, and sensory excitement, not the sugar itself.",
    sources: [
      "Journal of the American Medical Association (JAMA)",
      "American Academy of Pediatrics",
    ],
    actionableTip:
      "Limit sugary treats for genuine health reasons (protecting teeth and preventing diabetes and obesity), rather than worrying that a birthday cupcake will make your child misbehave.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Wolraich et al. landmark double-blind meta-analysis (JAMA) demonstrated dietary sucrose does not affect the cognitive performance or behavior of children.",
  },
  {
    id: "m-valsalva-equalize",
    bodyPartId: "ears",
    myth: "Blowing your nose as hard as you can or tilting your head sideways is the best way to pop blocked ears during airplane descents or scuba diving.",
    reality:
      "Forceful nose blowing can generate excessive pressure that ruptures your delicate eardrum or forces infectious mucus backward into the Eustachian tube. Safe methods include gentle swallowing, yawning, or the Valsalva maneuver (pinching nostrils, closing mouth, and exhaling very gently).",
    sources: [
      "American Academy of Otolaryngology-Head and Neck Surgery (AAO-HNS)",
      "Divers Alert Network (DAN)",
    ],
    actionableTip:
      "Chew gum, sip water, or pinch your nose and blow out very softly with the force of a gentle sigh to equalize middle ear pressure.",
    dangerAlert:
      "🚨 Never blow forcefully against pinched nostrils; sudden barotrauma can perforate the tympanic membrane or cause inner ear perilymph fistula.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Supported by AAO-HNS Clinical Guidelines on Barotrauma - Gentle Eustachian tube opening techniques prevent middle ear effusion and structural barotrauma.",
  },
  {
    id: "m-potato-scald-burn",
    bodyPartId: "skin",
    myth: "Putting raw sliced potatoes, flour, or baking soda paste directly onto a severe kitchen scald cools the skin and stops blistering.",
    reality:
      "Raw food and dry powders trap searing heat inside deep dermal tissues and introduce soil bacteria directly into compromised skin, causing severe wound infections. The only evidence-based first aid is running cool (not ice-cold) tap water over the burn for 10 to 20 minutes.",
    sources: ["World Health Organization (WHO) Burn Guidelines", "American Burn Association (ABA)"],
    actionableTip:
      "Immediately cool the burn under gently flowing cool tap water for 15-20 minutes. Cover loosely with sterile cling film or a clean cloth and seek medical care for blisters larger than a coin.",
    dangerAlert:
      "🚨 URGENT WARNING: Never put food, grease, or baking soda on burns. They trap heat and cause severe bacterial wound infections.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Systematic reviews by the Cochrane Collaboration confirm cool running water (10-20 mins) minimizes tissue necrosis and improves clinical re-epithelialization.",
  },
  {
    id: "m-vitaminc-cure-cold",
    bodyPartId: "throat",
    myth: "Taking massive megadoses of Vitamin C (2,000 to 5,000 mg) completely protects you from catching winter colds and flus.",
    reality:
      "Large-scale Cochrane systematic reviews spanning over 11,000 participants show that high-dose Vitamin C does not prevent common colds in the general public. It only marginally reduces symptom duration by about 8% (roughly half a day), while mega-dosing can trigger acute osmotic diarrhea and painful kidney stones.",
    sources: ["Cochrane Database of Systematic Reviews", "Harvard Medical School"],
    actionableTip:
      "Get your Vitamin C from whole foods like oranges, bell peppers, kiwi, and broccoli. Avoid taking more than 2,000 mg of supplements per day to protect your kidneys and gut.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Cochrane Review (Hemilä & Chalker) confirms prophylactic vitamin C does not reduce cold incidence in normal community populations.",
  },
  {
    id: "m-sanitizer-superbugs",
    bodyPartId: "hands",
    myth: "Using alcohol-based hand sanitizer frequently creates antibiotic-resistant 'superbug' bacteria in your home.",
    reality:
      "Alcohol-based hand rubs (60% to 70% ethanol or isopropanol) kill microbes through non-specific physical protein denaturation and cell membrane dissolution—like dropping an anvil on a cell. Because the mechanism is physical cell destruction rather than biochemical inhibition, bacteria cannot develop genetic antibiotic resistance against alcohol.",
    sources: [
      "Centers for Disease Control and Prevention (CDC)",
      "World Health Organization (WHO)",
    ],
    actionableTip:
      "Use an alcohol rub with at least 60% alcohol when soap and water are not available. Rub hands together covering all surfaces until completely dry (about 20 seconds).",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: CDC/WHO Hand Hygiene Guidelines demonstrate mechanical membrane lysis by alcohol prevents development of acquired bacterial resistance mechanisms.",
  },
  {
    id: "m-watermelon-seed-sprout",
    bodyPartId: "stomach",
    myth: "Swallowing watermelon seeds or apple seeds will cause them to take root and sprout inside your warm stomach.",
    reality:
      "Seeds require oxygen, moist soil, and specific environmental triggers to germinate. The human stomach is a completely dark, intensely acidic chamber (pH 1.5 to 2.0) with powerful digestive enzymes that sterilize seeds and push them out through normal bowel movements within 24 to 48 hours.",
    sources: ["Mayo Clinic Gastroenterology", "Cleveland Clinic"],
    actionableTip:
      "Swallowing accidental fruit seeds is completely harmless for adults and older children. However, keep hard pits and small seeds away from infants who could choke on them.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Medical physiology confirms human gastric acidity and lack of oxygen prevent botanical seed germination.",
  },
  {
    id: "m-water-cramps-workout",
    bodyPartId: "muscles",
    myth: "Drinking plain tap water during intense workouts causes debilitating muscle cramps by diluting your body's salt.",
    reality:
      "Exercise-associated muscle cramps are primarily caused by neuromuscular fatigue and nervous system motor-neuron hyper-excitability from repetitive muscle contraction, not simple hydration dilution. Drinking plain water to stay hydrated is essential for regulating core body temperature and cardiovascular performance.",
    sources: ["American College of Sports Medicine (ACSM)", "British Journal of Sports Medicine"],
    actionableTip:
      "Pace your physical exertion, perform active dynamic warm-ups, and drink fluid according to thirst during exercise. If training intensely for over 60 minutes in hot weather, include electrolyte fluids.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: ACSM Position Stand shows neuromuscular fatigue theory is the primary etiology for exercise-associated muscle cramping (EAMC).",
  },
  {
    id: "m-negative-calorie-celery",
    bodyPartId: "stomach",
    myth: "Chewing and digesting celery burns significantly more calories than the celery contains, making it a 'negative calorie' fat-burning food.",
    reality:
      "While celery is mostly water and dietary fiber, the thermic effect of food (the metabolic energy your body expends to chew, digest, and absorb it) accounts for only 10% to 15% of the food's total caloric content. A stalk containing 10 calories still provides roughly 8 to 9 net calories to your body.",
    sources: ["Academy of Nutrition and Dietetics", "Mayo Clinic"],
    actionableTip:
      "Eat crunchy raw vegetables like celery, cucumber, and carrots as high-fiber, nutrient-dense snacks that keep you full without excessive calories, but do not rely on mythical 'negative calorie' math.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Nutritional metabolic chamber studies confirm thermic effect of food (TEF) never exceeds total caloric substrate value.",
  },
  {
    id: "m-tattoo-mri-forbidden",
    bodyPartId: "skin",
    myth: "Having permanent tattoos completely disqualifies you from ever having an MRI scan because the ink will rip out through your skin.",
    reality:
      "Millions of people with decorative tattoos safely undergo MRI scans every year. Modern cosmetic inks rarely contain iron oxide compounds in quantities that react with magnetic fields. In rare cases (less than 0.1%), minor local tingling or mild heating can occur, which technicians manage with cold compresses.",
    sources: [
      "US Food and Drug Administration (FDA)",
      "Radiological Society of North America (RSNA)",
    ],
    actionableTip:
      "Always inform your MRI technologist if you have tattoos or permanent makeup so they can monitor you, but never skip a medically necessary diagnostic MRI scan out of fear.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: FDA Center for Devices and Radiological Health safety guidelines confirm tattooing is not an absolute contraindication for diagnostic magnetic resonance imaging.",
  },
  {
    id: "m-toe-popping-flatfeet",
    bodyPartId: "feet",
    myth: "Cracking your toes stretches your foot ligaments, weakens your arch, and causes painful flat feet.",
    reality:
      "Toe popping occurs when synovial fluid inside the toe joints undergoes rapid pressure shifts, causing microscopic nitrogen gas bubbles to form and collapse (cavitation). This process does not alter the structural strength of the plantar fascia, bone geometry, or longitudinal arch integrity.",
    sources: [
      "American Podiatric Medical Association (APMA)",
      "Orthopaedic Journal of Sports Medicine",
    ],
    actionableTip:
      "Gentle joint cavitation is harmless, but if popping is accompanied by sharp pain, redness, or joint swelling, consult a podiatrist to check for arthritis or turf toe.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Biomechanical imaging confirms joint cavitation involves synovial gas bubble dynamics without ligamentous strain or arch collapse.",
  },
  {
    id: "m-alcohol-baby-gums",
    bodyPartId: "jaw",
    myth: "Rubbing a drop of whiskey, brandy, or rubbing alcohol onto a baby's gums is a safe, time-tested home remedy to soothe teething pain.",
    reality:
      "Even minuscule quantities of alcohol are potent central nervous system depressants in infants, carrying risks of seizures, hypoglycemia, breathing depression, and liver toxicity. Pediatricians strongly advise against any oral alcohol or topical benzocaine gels in babies.",
    sources: ["American Academy of Pediatrics (AAP)", "US Food and Drug Administration (FDA)"],
    actionableTip:
      "Give your teething baby a firm chilled rubber or silicone teething ring, or gently massage their gums with a clean, cool finger.",
    dangerAlert:
      "🚨 DANGEROUS MISINFORMATION ALERT: Never apply alcohol or numbing gels containing benzocaine to infant gums. Alcohol can cause fatal respiratory depression and toxic seizures in babies.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: AAP guidelines explicitly prohibit ethanol and topical anesthetics for infant teething due to systemic toxicity and methemoglobinemia risks.",
  },
  {
    id: "m-milk-mucus-phlegm",
    bodyPartId: "throat",
    myth: "Drinking cow's milk stimulates excessive thick phlegm and mucus production in your respiratory airways when you have a cold.",
    reality:
      "Multiple double-blind clinical trials show milk consumption does not increase respiratory secretions or nasal mucus weight. Milk is an emulsion of water, fats, and proteins that temporarily mixes with saliva, creating a slightly thicker sensory coating in the mouth and throat that people mistake for mucus.",
    sources: [
      "American Review of Respiratory Disease",
      "Australasian Society of Clinical Immunology and Allergy",
    ],
    actionableTip:
      "You do not need to cut out milk, yogurt, or dairy during a cold unless you have a diagnosed dairy allergy or personal intolerance. Dairy provides easy-to-digest calories and hydration.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Pinnock et al. double-blind crossover trials confirmed milk consumption has no correlation with measured nasal secretion weight or pulmonary mucus volume.",
  },
  {
    id: "m-onion-sock-absorb-flu",
    bodyPartId: "feet",
    myth: "Putting sliced raw onions in your socks overnight or placing cut onions in your bedroom sucks airborne flu viruses and toxins right out of your body.",
    reality:
      "Viruses require living mammalian host cells to bind, enter, and replicate; a dead cut vegetable possesses no electromagnetic, gravitational, or biochemical draw to attract airborne microscopic pathogens. The strong aroma comes from sulfur compounds (syn-propanethial-S-oxide) that irritate eyes, not toxic absorption.",
    sources: [
      "Centers for Disease Control and Prevention (CDC)",
      "National Center for Complementary and Integrative Health (NCCIH)",
    ],
    actionableTip:
      "Wash hands frequently with soap, ensure good room ventilation, get an annual influenza vaccination, and stay home to rest when you are sick.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Virology research proves viral replication requires active cellular receptor binding (e.g., sialic acid); allium plants exert zero external suction or antiviral absorption.",
  },
  {
    id: "m-plants-bedroom-suffocation",
    bodyPartId: "lung-left",
    myth: "Keeping houseplants or fresh flowers in your bedroom is dangerous because they absorb all your oxygen while you sleep and cause nocturnal suffocation.",
    reality:
      "While green plants switch from photosynthesis to cellular respiration in the dark (releasing small amounts of CO2 and consuming tiny amounts of O2), the volume of oxygen consumed by a dozen potted plants is negligible. A sleeping human or small household pet consumes hundreds of times more oxygen.",
    sources: ["NASA Clean Air Study", "Royal Horticultural Society"],
    actionableTip:
      "Keep houseplants in your bedroom if you enjoy them; they help brighten living spaces and regulate indoor humidity without any risk to your breathing.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Physiological atmospheric modeling demonstrates biological oxygen consumption of household flora is physiologically insignificant to human respiration.",
  },
  {
    id: "m-sauna-burns-fat",
    bodyPartId: "skin",
    myth: "Sitting in a scorching dry sauna or steam room melts and burns away stubborn subcutaneous body fat.",
    reality:
      "The immediate weight loss observed on the bathroom scale after 20 minutes in a sauna is 100% water loss from active sweat gland perspiration. Fat loss requires a sustained caloric deficit through metabolic cellular oxidation; the water weight returns as soon as you rehydrate.",
    sources: ["American College of Sports Medicine (ACSM)", "Harvard Health Publishing"],
    actionableTip:
      "Enjoy the sauna for cardiovascular relaxation, mild blood pressure reduction, and muscle recovery, but drink 16 to 24 ounces of water afterward to replace lost fluids.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: ACSM exercise physiology demonstrates sweat-induced weight loss represents acute fluid compartment depletion, not lipid oxidation.",
  },
  {
    id: "m-turkey-tryptophan-coma",
    bodyPartId: "brain",
    myth: "Eating roasted turkey causes intense holiday drowsiness because turkey contains massive, unique amounts of the sleep chemical L-tryptophan.",
    reality:
      "Turkey has approximately the same amount of tryptophan per ounce as common chicken, beef, cheddar cheese, or soybeans. Post-feast sleepiness is primarily triggered by heavy carbohydrate and high-calorie consumption, which diverts significant blood flow to the digestive tract and elevates serotonin indirectly through insulin spikes.",
    sources: ["Johns Hopkins Medicine", "Tufts University School of Medicine"],
    actionableTip:
      "To avoid the afternoon holiday food coma, balance your plate with lean protein and leafy vegetables, avoid overloading on refined starches, and take a gentle 15-minute walk after eating.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Nutritional biochemical analyses confirm turkey tryptophan levels (0.24 g/100g) are comparable to standard poultry, dairy, and red meat.",
  },
  {
    id: "m-copper-magnets-arthritis",
    bodyPartId: "wrists",
    myth: "Wearing copper bracelets or magnetic wristbands pulls inflammation out of your joints and heals chronic osteoarthritis.",
    reality:
      "Extensive randomized, double-blind, sham-controlled clinical trials demonstrate copper jewelry and static magnetic bands provide zero objective reduction in joint cartilage inflammation or pain beyond the psychological placebo effect. Copper is not absorbed transdermally in therapeutic doses.",
    sources: [
      "National Institute for Health and Care Excellence (NICE)",
      "Arthritis Research UK / BMJ",
    ],
    actionableTip:
      "Focus on proven arthritis management: low-impact aerobic exercise, resistance training to support surrounding joints, weight management, and evidence-backed physical therapy.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Richmond et al. randomized double-blind placebo-controlled trial (PLOS ONE) proved copper bracelets and magnetic devices produce zero clinical improvement in rheumatoid or osteoarthritis.",
  },
  {
    id: "m-hot-lemon-sterilize-virus",
    bodyPartId: "throat",
    myth: "Drinking boiling hot water with lemon kills respiratory viruses in your throat before they can travel down into your lungs.",
    reality:
      "Respiratory viruses enter mucosal epithelial cells within seconds to minutes of inhalation. Drinking hot liquids cannot reach cells already infected with intracellular viral loads, and boiling fluids can scald delicate esophageal tissues. Warm fluids only provide soothing symptomatic relief for inflamed nerve endings.",
    sources: ["World Health Organization (WHO)", "American Academy of Family Physicians (AAFP)"],
    actionableTip:
      "Sip soothing warm teas with honey to coat an irritated throat, but do not drink scalding liquids or expect citric acid to sterilize an active viral infection.",
    dangerAlert:
      "⚠️ Scalding drinks above 149°F (65°C) can cause thermal esophageal injury and increase long-term cellular irritation risks.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Virology and mucosal immunology demonstrate intracellular viral replication cannot be aborted by oral liquids or topical citric acid.",
  },
  {
    id: "m-mayo-lice-cure",
    bodyPartId: "skin",
    myth: "Smearing thick mayonnaise, butter, or olive oil over your child's scalp overnight completely suffocates head lice and clears the infestation.",
    reality:
      "Head lice can enter a low-oxygen metabolic state, closing their respiratory breathing pores (spiracles) and surviving without ambient air for over 8 hours. While kitchen oils make the hair slippery, they fail to kill microscopic nits (lice eggs), leading to rapid recurrence.",
    sources: [
      "Centers for Disease Control and Prevention (CDC)",
      "American Academy of Pediatrics (AAP)",
    ],
    actionableTip:
      "Use clinically approved pediculicides or non-toxic silicone-based dimethicone lotions, which physically coat and suffocate lice within minutes, combined with fine-toothed metal nit combing.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Pediatric dermatology clinical trials confirm household condiments achieve inadequate spiracle occlusion and zero ovicidal activity against lice eggs.",
  },
  {
    id: "m-neck-cracking-spine-toxins",
    bodyPartId: "spine-cervical",
    myth: "Forcefully cracking your neck releases trapped metabolic toxins from your spinal vertebrae into your lymphatic system.",
    reality:
      "The loud popping sound during neck manipulation is simply the rapid depressurization and collapse of microscopic gas bubbles within the synovial fluid of cervical facet joints. Spinal joints do not store 'toxins,' and aggressive, high-velocity twisting carries a rare but serious risk of injuring the vertebral arteries that feed your brain.",
    sources: ["American Heart Association (AHA) Stroke Council", "Spine Journal"],
    actionableTip:
      "Relieve neck stiffness with gentle chin tucks, upper back stretches, and posture adjustments. Never forcefully twist or whip your neck to force popping sounds.",
    dangerAlert:
      "🚨 Seek immediate emergency care if neck manipulation is followed by dizziness, visual disturbances, slurred speech, or unilateral arm numbness (signs of vertebral artery dissection).",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: AHA Scientific Statement on Cervical Spine Manipulation identifies mechanical cavitation acoustics and cautions against aggressive high-velocity rotational thrusts.",
  },
  {
    id: "m-stout-beer-breastmilk",
    bodyPartId: "liver",
    myth: "Drinking dark stout beer or ale stimulates hormones and dramatically increases breast milk production in nursing mothers.",
    reality:
      "Alcohol actually inhibits the secretion of oxytocin from the pituitary gland, which reduces the letdown reflex and decreases total milk output by roughly 20%. While barley contains trace beta-glucans, alcohol passes directly into breast milk at levels matching maternal blood, which can disrupt infant sleep and motor development.",
    sources: [
      "American Academy of Pediatrics (AAP)",
      "Centers for Disease Control and Prevention (CDC)",
    ],
    actionableTip:
      "Support healthy lactation through frequent nursing or pumping, staying well-hydrated with water, and consuming nutritious whole grains like oatmeal.",
    dangerAlert:
      "⚠️ Alcohol passes freely into breast milk. If consuming an occasional alcoholic drink, wait at least 2 hours per drink before nursing.",
    confidenceLevel: "HIGH",
    evidenceStatement:
      "✅ EVIDENCE: Mennella et al. clinical lactation studies demonstrate maternal alcohol ingestion reduces infant milk intake by 20% and disrupts neonatal sleep-wake cycles.",
  },
];
