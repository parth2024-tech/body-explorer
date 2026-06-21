import { type MythBusted } from "./content";

export const MYTHS: MythBusted[] = [
  // ━━━ EMERGENCY & RED FLAGS (HIGH PRIORITY) ━━━
  {
    id: "m-cpr-movie",
    bodyPartId: "heart",
    myth: "CPR will quickly wake up someone whose heart has stopped, just like in the movies.",
    reality: "CPR almost never restarts a heart on its own. Its only job is to pump oxygen to the brain to keep the person alive until an ambulance gets there with a defibrillator.",
    sources: ["American Heart Association (AHA)", "Red Cross"],
    actionableTip: "Learn Hands-Only CPR! Push hard and fast in the center of the chest to the beat of 'Stayin' Alive'. Don't stop until paramedics arrive.",
    dangerAlert: "🚨 CALL 112 IMMEDIATELY before starting CPR. Time is the only thing that saves a brain without oxygen.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by AHA Guidelines 2020 - CPR survival rates depend on uninterrupted compressions and rapid defibrillation.",
    clinicalDisclaimer: "📍 IMPORTANT: This is for educational purposes. Take an official CPR course to be prepared for real emergencies."
  },
  {
    id: "m-defib-flatline",
    bodyPartId: "heart",
    myth: "You use a defibrillator to shock a 'flatlined' heart back to life.",
    reality: "A defibrillator cannot restart a flatline (asystole). It is actually used to STOP a heart that is twitching out of control, so the body's natural pacemaker can reboot it.",
    sources: ["Advanced Cardiovascular Life Support (ACLS) Guidelines"],
    actionableTip: "If you find an AED (Automated External Defibrillator) on the wall during an emergency, just open it! It will literally talk out loud and tell you exactly what to do step-by-step.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by ACLS Protocols - Defibrillation is only effective for Ventricular Fibrillation (VF) or Pulseless Ventricular Tachycardia (pVT)."
  },
  {
    id: "m-poison-milk",
    bodyPartId: "stomach",
    myth: "If a child swallows a poisonous cleaning chemical, make them drink milk to coat their stomach or make them throw up.",
    reality: "Drinking milk can actually force the stomach to absorb toxic chemicals much faster. Throwing up a burning chemical will severely burn their throat a second time.",
    sources: ["Poison Control Center", "American Academy of Pediatrics"],
    actionableTip: "Do not give them anything to eat or drink. Find the bottle they swallowed from so you can read the label to the emergency operator.",
    dangerAlert: "🚨 URGENT WARNING: Call Poison Control IMMEDIATELY at 1-800-222-1222. Never induce vomiting unless explicitly told to by a doctor.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by National Capital Poison Center - Emesis (vomiting) is contraindicated for corrosive ingestions."
  },
  {
    id: "m-snakebite-suck",
    bodyPartId: "leg",
    myth: "If you get bitten by a venomous snake, you should cut the wound and suck the venom out.",
    reality: "Sucking out venom is a Hollywood myth. It just puts dirty mouth bacteria into the wound and risks poisoning the person trying to suck it out. Venom moves into the blood too fast to catch.",
    sources: ["Centers for Disease Control and Prevention (CDC)"],
    actionableTip: "Take off rings or tight clothing before swelling starts. Keep the bitten arm or leg completely still, and stay as calm as possible to slow your heart rate.",
    dangerAlert: "🚨 DANGEROUS MISINFORMATION ALERT: Never cut the wound, suck venom, apply ice, or use a tourniquet. These will cause you to lose your limb.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by CDC Snakebite Guidelines - Incision and suction cause tissue necrosis and do not effectively remove venom."
  },
  {
    id: "m-seizure-spoon",
    bodyPartId: "mouth",
    myth: "If someone is having a seizure, you must put a wallet or spoon in their mouth so they don't swallow their tongue.",
    reality: "It is physically impossible to swallow your own tongue. Forcing an object into a seizing person's mouth will only break their teeth or cause them to choke.",
    sources: ["Epilepsy Foundation"],
    actionableTip: "Gently roll the person onto their side so they can breathe easily, put something soft like a jacket under their head, and time the seizure with your watch.",
    dangerAlert: "⚠️ DANGEROUS MISINFORMATION: Do not hold them down or force their mouth open. Call 112 if the seizure lasts longer than 5 minutes.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by Epilepsy Foundation First Aid Protocols - Inserting objects causes severe maxillofacial trauma."
  },

  // ━━━ BRAIN & NEUROLOGY ━━━
  {
    id: "m-brain-10percent",
    bodyPartId: "brain",
    myth: "Humans only use 10% of their brains.",
    reality: "You use 100% of your brain. Brain scans prove that almost every part of your brain is constantly active, even when you are fast asleep.",
    sources: ["Johns Hopkins Medicine", "Scientific American"],
    actionableTip: "To keep your brain sharp, try learning a complex new skill like juggling or a new language, which forces different areas to connect.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by Functional MRI (fMRI) studies showing widespread metabolic activity across all brain regions continuously."
  },
  {
    id: "m-sugar-hyper",
    bodyPartId: "brain",
    myth: "Eating too much sugar makes children hyperactive and bounce off the walls.",
    reality: "Sugar does not cause hyperactivity. Kids usually act crazy because they are at exciting places where sugar happens to be served—like birthday parties or holidays.",
    sources: ["JAMA (Journal of the American Medical Association)"],
    actionableTip: "If your child gets out of control at a party, it's the excitement and lack of sleep, not the cake. Give them a quiet cool-down period.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by double-blind placebo-controlled trials (JAMA 1995) showing sugar does not affect behavior or cognitive performance in children."
  },
  {
    id: "m-sleepwalker-wake",
    bodyPartId: "brain",
    myth: "Waking a sleepwalker will give them a heart attack or cause brain damage.",
    reality: "It is perfectly safe to gently wake a sleepwalker. They will just be very confused for a minute. Letting them wander around the house is much more dangerous.",
    sources: ["National Sleep Foundation"],
    actionableTip: "If you find a sleepwalker, gently guide them back to their bed by the elbow. If they resist, then wake them up using a loud, calm voice from a distance.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by Sleep Medicine clinical guidelines - Wandering injuries far outweigh the temporary confusion of waking."
  },
  {
    id: "m-alcohol-cells",
    bodyPartId: "brain",
    myth: "Drinking alcohol permanently kills your brain cells.",
    reality: "Moderate drinking doesn't kill brain cells. Heavy drinking damages the 'wires' (dendrites) that connect the cells, making it hard to think, but the cells themselves survive.",
    sources: ["National Institute on Alcohol Abuse and Alcoholism (NIAAA)"],
    actionableTip: "Protect your brain wires! If you drink, stick to the guidelines: no more than 1 drink a day for women, and 2 for men.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by neurohistological studies showing dendritic damage, not neuronal death, in non-Korsakoff alcoholics."
  },

  // ━━━ HEART & BLOOD ━━━
  {
    id: "m-blood-blue",
    bodyPartId: "blood",
    myth: "Blood is blue inside your veins until it touches oxygen outside your body.",
    reality: "Human blood is always red. Your veins only look blue from the outside because human skin scatters light like a prism, making dark red look blue.",
    sources: ["American Red Cross"],
    actionableTip: "When you get blood drawn, it's dark red because it's returning to the lungs for a refill. Bright red blood means it just came from the lungs!",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by basic human physiology - Hemoglobin is bright red when oxygenated and dark red when deoxygenated."
  },
  {
    id: "m-heartattack-chest",
    bodyPartId: "heart",
    myth: "A heart attack always starts with crushing, unbearable chest pain.",
    reality: "Many people, especially women, never feel chest pain during a heart attack. They might just feel extremely tired, nauseous, or have bad pain in their jaw or back.",
    sources: ["American Heart Association (AHA)"],
    actionableTip: "If you suddenly break out in a cold sweat, feel like you're going to throw up, and can't catch your breath, don't wait for chest pain to start.",
    dangerAlert: "🚨 URGENT WARNING: Call 112 immediately if you have unexplained jaw pain with shortness of breath. Women often dismiss this as the flu.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by AHA Clinical Guidelines - Atypical presentation is common in women, diabetics, and the elderly."
  },
  {
    id: "m-cholesterol-eggs",
    bodyPartId: "heart",
    myth: "Eating eggs will clog your arteries because they are full of cholesterol.",
    reality: "The cholesterol you eat in food doesn't directly become cholesterol in your blood. Your liver makes most of your blood cholesterol in response to eating bad trans fats and too much sugar.",
    sources: ["Harvard T.H. Chan School of Public Health"],
    actionableTip: "Enjoy your eggs! Boiling or poaching them is incredibly healthy. Just skip the side of greasy bacon and buttered white toast.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by USDA Dietary Guidelines (2015 update) removing dietary cholesterol limits due to lack of correlation with serum cholesterol."
  },

  // ━━━ DIGESTION & METABOLISM ━━━
  {
    id: "m-gum-7years",
    bodyPartId: "stomach",
    myth: "If you swallow a piece of chewing gum, it sits in your stomach for seven years.",
    reality: "Gum does not stick to your stomach walls. Your body can't digest the rubbery part, so it simply pushes it out when you go to the bathroom a few days later.",
    sources: ["Mayo Clinic"],
    actionableTip: "While swallowing one piece of gum is fine, don't let kids swallow huge handfuls, as it can occasionally cause a blockage in small intestines.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by gastroenterology consensus - Synthetic rubber bases pass harmlessly through the GI tract via normal peristalsis."
  },
  {
    id: "m-spicy-ulcer",
    bodyPartId: "stomach",
    myth: "Eating too much spicy food or stressing out will give you a stomach ulcer.",
    reality: "Spicy food and stress never cause ulcers. 80% of stomach ulcers are caused by a specific bacteria called H. pylori, and the rest are caused by taking too many painkillers like ibuprofen.",
    sources: ["Nobel Prize in Medicine (2005)", "Cleveland Clinic"],
    actionableTip: "If your stomach constantly burns after eating, ask your doctor to test you for H. pylori. It can be completely cured with a week of antibiotics!",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by the 2005 Nobel Prize discovery proving Helicobacter pylori as the primary etiology of peptic ulcer disease."
  },
  {
    id: "m-detox-juice",
    bodyPartId: "liver",
    myth: "Drinking expensive juice cleanses will flush harmful 'toxins' out of your liver and body.",
    reality: "Your liver and kidneys are the ultimate, perfect detox machines. They clean your blood 24 hours a day for free. Juice cleanses just starve you and remove the healthy fiber from the fruit.",
    sources: ["Mayo Clinic"],
    actionableTip: "Save your money! Drink a glass of water and eat an apple. Whole fruits with their skin on (fiber) actually help your liver work better.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by Hepatology consensus - There is zero clinical evidence that commercial 'cleanses' aid hepatic detoxification pathways."
  },
  {
    id: "m-sugar-diabetes",
    bodyPartId: "pancreas",
    myth: "Eating too many sugary sweets directly causes diabetes.",
    reality: "Eating a candy bar does not give you diabetes. Type 1 is a genetic disease, and Type 2 is a mix of family history and carrying too much overall body weight, which stops your insulin from working.",
    sources: ["American Diabetes Association (ADA)"],
    actionableTip: "Instead of totally banning sugar, focus on eating smaller portion sizes and going for a 15-minute walk after dinner to help your body process your food.",
    dangerAlert: "⚠️ SEE A DOCTOR WITHIN A WEEK if you are constantly thirsty, peeing all the time, and feeling exhausted—these are actual signs of diabetes.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by ADA Guidelines - Type 2 Diabetes etiology is primarily driven by insulin resistance secondary to adiposity and genetics."
  },
  {
    id: "m-organic-nutrition",
    bodyPartId: "stomach",
    myth: "Organic fruits and vegetables have way more vitamins than regular ones.",
    reality: "Multiple massive studies show organic and regular vegetables have the exact same amount of vitamins. 'Organic' just means the farmer used different types of bug spray.",
    sources: ["Stanford University Medical Center"],
    actionableTip: "Buy whatever fits your budget! Eating cheap, regular broccoli is infinitely better for your body than skipping vegetables because organic is too expensive.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by Stanford Meta-analysis (2012) showing no significant difference in vitamin content between organic and conventional produce."
  },

  // ━━━ IMMUNE SYSTEM & INFECTIONS ━━━
  {
    id: "m-cold-weather",
    bodyPartId: "immune",
    myth: "Going outside with wet hair in the winter will give you a cold or pneumonia.",
    reality: "You can only catch a cold from a virus, not from cold air or wet hair. We get sick more in winter simply because we are trapped indoors breathing the same recycled air as sick people.",
    sources: ["National Institutes of Health (NIH)"],
    actionableTip: "To avoid winter colds, wash your hands the second you get home, and crack a window open for 5 minutes a day to let fresh air circulate.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by Virology consensus - Rhinoviruses and influenza are the sole causative agents of the common cold and flu."
  },
  {
    id: "m-antibiotic-flu",
    bodyPartId: "immune",
    myth: "If you have a really bad flu or cold, you should demand antibiotics from your doctor to get better.",
    reality: "Antibiotics ONLY kill bacteria. Colds and the flu are caused by viruses. Taking antibiotics for a virus is like using a fire extinguisher on a flooded house—it does absolutely nothing.",
    sources: ["Centers for Disease Control and Prevention (CDC)"],
    actionableTip: "For a virus, you just have to treat the symptoms. Drink hot tea with honey, use a humidifier, and take ibuprofen for body aches.",
    dangerAlert: "🚨 DANGEROUS MISINFORMATION: Taking unnecessary antibiotics creates 'superbugs'—mutant bacteria that no medicine can kill.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by CDC Antimicrobial Stewardship Guidelines - Antibiotics exhibit zero efficacy against viral pathogens."
  },
  {
    id: "m-starve-fever",
    bodyPartId: "immune",
    myth: "You should 'feed a cold and starve a fever' to force the sickness out.",
    reality: "Running a fever requires a massive amount of energy from your body. Starving yourself when you have a fever will only make you weaker and delay your healing.",
    sources: ["Johns Hopkins Medicine"],
    actionableTip: "When you have a fever, eat light, easy-to-digest foods like chicken soup or toast, and drink massive amounts of water or electrolyte drinks.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by clinical nutrition guidelines - Elevated basal metabolic rate during pyrexia (fever) increases caloric and hydration demands."
  },
  {
    id: "m-green-snot",
    bodyPartId: "nose",
    myth: "If your snot turns green or yellow, it means you have a severe bacterial infection and need medicine.",
    reality: "Green snot is totally normal! It just means your white blood cells have rushed into your nose to fight the germs. It happens with normal, harmless viruses too.",
    sources: ["CDC"],
    actionableTip: "Use a simple saline nasal spray to flush out the thick mucus. If the green snot lasts for more than 10 days straight with severe face pain, then call a doctor.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by CDC guidelines on Acute Rhinosinusitis - Purulent (green/yellow) nasal discharge is not a reliable indicator of bacterial infection."
  },
  {
    id: "m-vaccine-sick",
    bodyPartId: "immune",
    myth: "Getting a flu shot actually gives you a mini version of the flu.",
    reality: "The flu shot is made of dead, chopped-up virus pieces. It is biologically impossible for a dead virus to come back to life and infect you.",
    sources: ["WHO", "CDC"],
    actionableTip: "If you feel tired or have a sore arm the day after a shot, celebrate! That is just physical proof your immune system is successfully building weapons to protect you.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by global immunological consensus - Inactivated viral vaccines cannot replicate to cause pathogenesis."
  },

  // ━━━ SKIN, EYES, & BONES ━━━
  {
    id: "m-read-dark",
    bodyPartId: "eyes",
    myth: "Reading a book in dim light will permanently ruin your eyesight.",
    reality: "Reading in the dark makes your eye muscles work harder, which can give you a headache or make your eyes feel tired. But it causes absolutely zero permanent damage to your vision.",
    sources: ["American Academy of Ophthalmology"],
    actionableTip: "If your eyes hurt while reading, just turn on a lamp or close your eyes for five minutes. Your vision will bounce right back to normal.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by Ophthalmology consensus - Low-light accommodation causes transient asthenopia (eye strain), not structural myopia."
  },
  {
    id: "m-shave-thick",
    bodyPartId: "skin",
    myth: "If you shave your leg or facial hair, it will grow back thicker, darker, and faster.",
    reality: "Hair naturally tapers to a soft point at the end. When you shave, you cut it straight across the thickest part. As it grows, the blunt edge just feels rougher and looks darker.",
    sources: ["Mayo Clinic"],
    actionableTip: "Shave whenever you want! If you hate the blunt, prickly feeling of shaved hair growing back, consider waxing, which pulls the hair out by the root.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by dermatological studies confirming that shaving does not alter the follicular growth cycle or keratinocyte thickness."
  },
  {
    id: "m-burn-butter",
    bodyPartId: "skin",
    myth: "You should quickly smear butter, oil, or raw ice on a bad kitchen burn.",
    reality: "Butter and oil act like a blanket, trapping the extreme heat inside your skin and cooking it further. Ice is so brutally cold it can cause frostbite on top of the burn.",
    sources: ["American Burn Association"],
    actionableTip: "Turn on the sink and run cool (not freezing) water over the burn for 10 to 15 straight minutes. This pulls the heat out safely.",
    dangerAlert: "🚨 URGENT WARNING: Go to the ER immediately if a burn blisters and is larger than your hand, or if it is on your face.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by Burn Life Support protocols - Immediate cooling with running tap water (15°C) for 20 minutes minimizes tissue damage."
  },
  {
    id: "m-knuckle-arthritis",
    bodyPartId: "bones",
    myth: "Cracking your knuckles damages your cartilage and will give you severe arthritis when you are older.",
    reality: "The 'pop' you hear is just a tiny, harmless bubble of nitrogen gas bursting inside the joint fluid. It does not scrape your bones or cause arthritis.",
    sources: ["Harvard Medical School"],
    actionableTip: "Crack away! But if a joint ever hurts or swells up immediately after you crack it, you should have a doctor look at it.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by long-term radiographic studies showing no correlation between habitual knuckle-cracking and osteoarthritis."
  },
  {
    id: "m-sunscreen-cloudy",
    bodyPartId: "skin",
    myth: "You don't need to put on sunscreen if it is cloudy outside or if you have dark skin.",
    reality: "Clouds only block 20% of UV rays. The other 80% pass right through and burn you. And while dark skin has built-in sun protection, it can still get fatal skin cancers.",
    sources: ["American Academy of Dermatology"],
    actionableTip: "Make it a daily habit! Put on a cheap, comfortable SPF 30 lotion every morning after you brush your teeth, regardless of the weather.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by dermatological guidelines - UV-A radiation penetrates cloud cover and causes cumulative DNA damage across all Fitzpatrick skin types."
  },
  {
    id: "m-wound-breathe",
    bodyPartId: "skin",
    myth: "You should take the bandage off a deep cut overnight to 'let it breathe' and scab over faster.",
    reality: "A dry, crusty scab actually blocks new skin cells from growing. Wounds heal twice as fast, and leave much smaller scars, when they are kept perfectly moist and covered.",
    sources: ["American Academy of Dermatology"],
    actionableTip: "Wash the cut, apply a thin layer of plain petroleum jelly (like Vaseline), and put a fresh bandage on it every day until it heals completely.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by wound care consensus - Moist wound environments facilitate epidermal cell migration and angiogenesis while preventing necrosis."
  },
  {
    id: "m-hydrogen-peroxide",
    bodyPartId: "skin",
    myth: "Pouring bubbling hydrogen peroxide or rubbing alcohol into an open cut is the best way to clean out germs.",
    reality: "These harsh chemicals are basically bleach for your body. They kill the germs, but they also massacre your own healthy skin cells, which drastically delays healing.",
    sources: ["Cleveland Clinic"],
    actionableTip: "Hold the cut under running tap water for a full minute, and gently wash around it with normal hand soap. That's all you need!",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by dermatological guidelines - Hydrogen peroxide is cytotoxic to fibroblasts, the cells responsible for wound repair."
  },
  {
    id: "m-acne-chocolate",
    bodyPartId: "skin",
    myth: "Eating greasy pizza and chocolate bars directly causes teenage acne.",
    reality: "Acne is almost entirely driven by genetics and intense teenage hormones telling your skin to make too much oil. A candy bar does not shoot straight to your forehead.",
    sources: ["American Academy of Dermatology"],
    actionableTip: "Wash your face twice a day with a gentle cleanser containing Salicylic Acid. Don't torture yourself by banning all your favorite foods.",
    confidenceLevel: "MODERATE",
    evidenceStatement: "✅ EVIDENCE: Supported by AAD Guidelines - While high-glycemic diets may mildly exacerbate inflammation, genetics and androgens are the primary pathogenesis."
  },
  {
    id: "m-dim-light",
    bodyPartId: "eyes",
    myth: "Reading in dim light or in the dark will permanently damage your eyes.",
    reality: "Reading in dim light might cause temporary eye strain and headaches because your eye muscles work harder to focus, but it does not cause any permanent damage or weaken your eyesight.",
    sources: ["Harvard Medical School", "American Academy of Ophthalmology"],
    actionableTip: "Use a reading lamp directed at your pages to avoid fatigue, and rest your eyes with the 20-20-20 rule if you feel strain.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by AAO Guidelines - Lack of light does not alter the physical shape or function of the eyes."
  },
  {
    id: "m-head-heat",
    bodyPartId: "brain",
    myth: "You lose up to 80% of your body heat through your head, so you must always wear a hat in cold weather.",
    reality: "You only lose about 7% to 10% of your body heat through your head—which is roughly proportional to its surface area compared to the rest of your body.",
    sources: ["BMJ (British Medical Journal)", "U.S. Army Research Institute of Environmental Medicine"],
    actionableTip: "Dress in warm layers all over. Covering your torso and limbs is far more important for preventing hypothermia than just wearing a beanie.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by BMJ clinical review - Head heat loss is proportional to exposed surface area, not disproportionately elevated."
  },
  {
    id: "m-knuckle-cracking",
    bodyPartId: "hands",
    myth: "Cracking your knuckles causes arthritis in your fingers.",
    reality: "The sound of cracking knuckles is just gas bubbles popping in the joint fluid. Studies show it does not cause arthritis, though chronic cracking might reduce grip strength.",
    sources: ["Harvard Medical School", "Journal of Family Practice"],
    actionableTip: "If you feel the urge to crack your knuckles, try stretching your fingers or squeezing a stress ball instead.",
    confidenceLevel: "HIGH",
    evidenceStatement: "✅ EVIDENCE: Supported by multiple prospective studies, including one famous doctor who cracked the knuckles of only one hand for 50 years with zero differences in arthritis."
  }
];

