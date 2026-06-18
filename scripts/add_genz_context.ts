import fs from 'fs';

const filePath = './src/data/diseases.ts';
let content = fs.readFileSync(filePath, 'utf8');

const genZSlang = {
  "Asthma": "Your lungs are basically acting dramatic and ghosting your air supply. Not a vibe.",
  "Fatty Liver Disease (NAFLD)": "Your liver has been binge-watching Netflix and snacking too much. Needs a serious detox era.",
  "GERD (Acid Reflux)": "Your stomach acid said 'I'm coming over' when nobody invited it. Toxic behavior.",
  "Migraine": "Your brain is throwing a massive tantrum with main character energy. 0/10 do not recommend.",
  "Celiac Disease": "Your immune system beefs with bread. Gluten is officially canceled.",
  "Osteoarthritis": "Your joints have left the chat. They're basically grinding like bad brakes on a scooter.",
  "Glaucoma": "Your eye pressure is acting sus and slowly stealing your peripheral vision.",
  "Hypertension (High Blood Pressure)": "Your blood is rushing through your veins with zero chill. Major red flag.",
  "Carpal Tunnel Syndrome": "Your wrists are screaming 'touch grass' after too much doomscrolling or gaming.",
  "Kidney Stones": "Your kidneys made literal rocks. The pain is not giving.",
  "Atrial Fibrillation (AFib)": "Your heart is glitching out of its regular rhythm. Needs a hard reset.",
  "Irritable Bowel Syndrome (IBS)": "Your gut is having a chaotic era. Completely unpredictable energy.",
  "Melanoma": "That sus mole needs an immediate vibe check from a dermatologist.",
  "Tinnitus": "Your ears are playing a high-pitched sound on loop and you can't hit skip.",
  "Sciatica": "The nerve in your lower back is throwing a tantrum all the way down your leg.",
  "Type 2 Diabetes": "Your body's insulin response left the chat. Sugar processing is glitching.",
  "Osteoporosis": "Your bones are losing their density and becoming fragile AF. Need calcium stat.",
  "Chronic Sinusitis": "Your face cavities are blocked and inflamed. A total congestion nightmare.",
  "Plantar Fasciitis": "Your heel feels like it's stepping on Lego every morning. Huge L.",
  "Sleep Apnea": "Your throat keeps hitting pause on your breathing while you sleep. Nightmare rotation.",
  "Rheumatoid Arthritis": "Your immune system is friendly-firing your own joints. Super toxic.",
  "Ulcerative Colitis": "Your large intestine is permanently angry and inflamed. Truly a bad time.",
  "Psoriasis": "Your skin cells are speedrunning their life cycle, leaving flaky patches.",
  "Multiple Sclerosis (MS)": "Your immune system is chewing on your nerves' Wi-Fi cables.",
  "Chronic Kidney Disease": "Your body's built-in water filters are slowly clocking out.",
  "Peptic Ulcer Disease": "Your stomach lining literally has potholes. The burning is real.",
  "Macular Degeneration": "Your central vision is getting nerfed as you age.",
  "Hypothyroidism": "Your thyroid is moving at 0.5x speed. Fatigue is the main character.",
  "Heart Failure": "Your heart's pumping power got severely nerfed and can't keep up.",
  "Chronic Obstructive Pulmonary Disease (COPD)": "Your lungs are perma-blocked and breathing feels like a massive chore."
};

for (const [name, slang] of Object.entries(genZSlang)) {
  const regex = new RegExp(`(name:\\s*"${name.replace(/([()])/g, '\\$1')}",\\s*[\\s\\S]*?bodyPartId:\\s*"[^"]+",)`);
  content = content.replace(regex, `$1\n    genZContext: "${slang}",`);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Added Gen Z contexts!');
