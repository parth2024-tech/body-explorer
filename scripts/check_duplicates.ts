import { FACTS } from "../src/data/content.ts";

console.log(`Total facts loaded: ${FACTS.length}`);

const seenTexts = new Map();
const seenIds = new Map();
const exactDuplicates = [];
const duplicateIds = [];

FACTS.forEach(fact => {
  if (!fact || !fact.text) return;
  const text = fact.text.toLowerCase().trim();
  if (seenTexts.has(text)) {
    exactDuplicates.push({ id1: seenTexts.get(text).id, id2: fact.id, text: fact.text });
  } else {
    seenTexts.set(text, fact);
  }
  
  if (seenIds.has(fact.id)) {
    duplicateIds.push(fact.id);
  } else {
    seenIds.set(fact.id, true);
  }
});

console.log(`Duplicate IDs found: ${duplicateIds.length}`);
if (duplicateIds.length > 0) console.log(duplicateIds);

console.log(`Exact text duplicates found: ${exactDuplicates.length}`);
if (exactDuplicates.length > 0) {
    exactDuplicates.forEach(d => console.log(`- "${d.text}"\n  (IDs: ${d.id1}, ${d.id2})`));
}

// Simple fuzzy matching (similar start/end)
const fuzzyDuplicates = [];
const factsArray = Array.from(seenTexts.values());
for (let i = 0; i < factsArray.length; i++) {
  for (let j = i + 1; j < factsArray.length; j++) {
    const f1 = factsArray[i].text.toLowerCase();
    const f2 = factsArray[j].text.toLowerCase();
    
    // If they share more than 80% of words
    const words1 = new Set(f1.split(/\s+/));
    const words2 = new Set(f2.split(/\s+/));
    const intersection = new Set([...words1].filter(x => words2.has(x)));
    
    const overlap = intersection.size / Math.max(words1.size, words2.size);
    if (overlap > 0.8 && f1 !== f2) {
      fuzzyDuplicates.push({ f1: factsArray[i], f2: factsArray[j], overlap });
    }
  }
}

console.log(`Fuzzy duplicates found: ${fuzzyDuplicates.length}`);
fuzzyDuplicates.forEach(d => {
  console.log(`\nMatch (${Math.round(d.overlap*100)}%):`);
  console.log(`1: [${d.f1.id}] ${d.f1.text}`);
  console.log(`2: [${d.f2.id}] ${d.f2.text}`);
});
