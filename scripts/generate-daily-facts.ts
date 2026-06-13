import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FACTS_FILE = path.join(__dirname, "../src/data/generated-facts.json");

// Ensure the API key exists
if (!process.env.GEMINI_API_KEY) {
  console.error("❌ Missing GEMINI_API_KEY environment variable. Cannot generate facts.");
  process.exit(1);
}

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const VALID_BODY_PARTS = [
  "brain", "heart", "lungs", "liver", "kidneys", "stomach", "small-intestine", 
  "large-intestine", "pancreas", "spleen", "gallbladder", "bladder", "skin", 
  "bones", "muscles", "eyes", "ears", "nose", "tongue", "teeth", "hair", "nails"
];

const prompt = `Generate an array of 20 random, fascinating, medically-accurate human body facts.
Try to distribute them across various body parts and categories.

Each fact must follow this exact JSON interface:
{
  "id": string; // e.g., "gen-1234-5678"
  "bodyPartId": string; // MUST be one of: ${VALID_BODY_PARTS.join(", ")}
  "category": "weird_wild" | "health_tip" | "what_damages_it" | "superfood" | "record_breaker";
  "rarity": "common" | "surprising" | "mind_blowing" | "almost_unknown";
  "text": string; // The fact itself (1-2 sentences)
}

Output ONLY valid JSON. Your response should start with '[' and end with ']'. Do not include any markdown formatting like \`\`\`json.`;

async function main() {
  console.log("🤖 Generating 20 new daily facts using Gemini...");
  
  try {
    // For facts generation, gemini-2.5-flash is extremely fast, cheap/free, and smart enough
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.9,
        // Enforce JSON output for more reliable parsing
        responseMimeType: "application/json",
      }
    });

    const responseText = result.response.text();
    
    // Attempt to parse the JSON
    let newFacts = [];
    try {
      newFacts = JSON.parse(responseText.trim());
    } catch (parseErr) {
      console.error("❌ Failed to parse Gemini's response as JSON:", parseErr);
      console.error("Raw response:", responseText);
      process.exit(1);
    }

    if (!Array.isArray(newFacts)) {
      console.error("❌ Response was not a JSON array.");
      process.exit(1);
    }

    console.log(`✅ Successfully generated ${newFacts.length} new facts.`);

    // Read existing facts
    let existingFacts = [];
    if (fs.existsSync(FACTS_FILE)) {
      try {
        existingFacts = JSON.parse(fs.readFileSync(FACTS_FILE, "utf-8"));
      } catch (err) {
        console.warn("⚠️ Could not read existing facts, starting fresh.");
      }
    }

    // Append new facts
    const combinedFacts = [...existingFacts, ...newFacts];

    // Write back to file
    fs.writeFileSync(FACTS_FILE, JSON.stringify(combinedFacts, null, 2));
    
    console.log(`💾 Saved! Total facts in generated-facts.json is now ${combinedFacts.length}.`);
    
  } catch (error) {
    console.error("❌ Failed to communicate with Gemini API:", error);
    process.exit(1);
  }
}

main();
