import { createServerFn } from "@tanstack/react-start";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Simple in-memory cache to prevent duplicate Gemini calls
const cache = new Map<string, any>();

export const generateToxicologyReport = createServerFn({ method: "POST" })
  .validator((molecule: string) => molecule)
  .handler(async ({ data: molecule }) => {
    if (cache.has(molecule)) {
      return cache.get(molecule);
    }

    const apiKey = process.env.GEMINI_API_KEY || (import.meta as any).env?.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("Gemini API key is missing. Please set GEMINI_API_KEY in your environment.");
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `You are an expert toxicologist and regulatory pharmacologist.
Generate a deep-dive toxicology report for the molecule: ${molecule}.
Focus on why it was banned or restricted internationally.

Provide a JSON response with exactly this structure:
{
  "pharmacokinetics": "Brief explanation of how the body processes it",
  "toxicity_mechanism": "The exact mechanism of harm (e.g. hepatotoxicity, cardiotoxicity)",
  "clinical_signs": ["Sign 1", "Sign 2", "Sign 3"],
  "regulatory_history": "Brief history of its ban in US/EU/UK"
}
Return ONLY the raw JSON string without markdown blocks.`;

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.2,
        responseMimeType: "application/json",
      }
    });

    const responseText = result.response.text();
    const cleanedText = responseText.replace(/^```json/i, '').replace(/^```/, '').replace(/```$/, '').trim();
    const parsed = JSON.parse(cleanedText);
    
    cache.set(molecule, parsed);
    return parsed;
  });
