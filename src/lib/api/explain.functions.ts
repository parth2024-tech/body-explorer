import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const SYSTEM_PROMPT = `You are an educational anatomy assistant for "The Living Body Atlas."
The user describes a physical sensation or experience in plain language.

STRICT RULES:
- NEVER use the word "diagnosis" or "diagnose"
- NEVER say the user "has" a condition
- Frame responses as "body systems that are often involved in experiences like this"
- Always return valid JSON only, no markdown
- Always include exactly 3 educational facts and exactly 3 doctor questions
- Use organ IDs from this list: brain, frontal-lobe, temporal-lobe, eyes, ears, sinuses, jaw, throat, heart, lung-left, lung-right, liver, stomach, small-intestine, large-intestine, kidneys, bladder, spine-cervical, spine-thoracic, spine-lumbar, shoulders, elbows, wrists, hands, hips, knees, ankles, feet, skin, bones

Return JSON: { "organs": string[], "facts": string[], "doctorQuestions": string[] }`;

const inputSchema = z.object({
  description: z.string().min(3).max(2000),
});

export type ExplainResult = {
  organs: string[];
  facts: string[];
  doctorQuestions: string[];
};

function mockResponse(input: string): ExplainResult {
  const lower = input.toLowerCase();
  if (lower.includes("head") || lower.includes("migraine")) {
    return {
      organs: ["brain", "sinuses", "eyes", "spine-cervical"],
      facts: [
        "Tension headaches often involve muscles and fascia around the skull — the brain itself has no pain receptors.",
        "The trigeminal nerve connects your brainstem to your face and is involved in many headache types.",
        "Dehydration can temporarily change brain fluid balance, which some people experience as head pressure.",
      ],
      doctorQuestions: [
        "My headaches occur at a specific frequency — should I be concerned about the pattern?",
        "Could my headaches be related to neck posture or vision strain?",
        "What warning signs would make a headache an emergency?",
      ],
    };
  }
  if (lower.includes("stomach") || lower.includes("digest") || lower.includes("nausea") || lower.includes("gut")) {
    return {
      organs: ["stomach", "small-intestine", "large-intestine", "liver"],
      facts: [
        "Your gut contains hundreds of millions of neurons — sometimes called the 'second brain'.",
        "Stomach discomfort after eating can involve the stomach, gallbladder, or pancreas depending on timing and location.",
        "The vagus nerve links your gut and brain, which is why stress can affect digestion.",
      ],
      doctorQuestions: [
        "My stomach discomfort happens at specific times — what might that suggest?",
        "Should I be tested for common digestive triggers?",
        "What dietary changes might help narrow down the cause?",
      ],
    };
  }
  if (lower.includes("back") || lower.includes("spine") || lower.includes("lumbar")) {
    return {
      organs: ["spine-lumbar", "spine-thoracic", "kidneys", "hips"],
      facts: [
        "Most lower back discomfort is muscular or posture-related rather than structural damage.",
        "Sitting increases disc pressure compared to standing, which is why desk work can aggravate back sensations.",
        "Kidney-related discomfort can sometimes feel like back pain but often occurs higher on the flank.",
      ],
      doctorQuestions: [
        "My back sensation is in a specific location — does that help identify involved structures?",
        "When should I consider imaging versus starting with physical therapy?",
        "Could my back sensation be referred from another organ?",
      ],
    };
  }
  return {
    organs: ["brain", "heart", "skin"],
    facts: [
      "Your body systems are interconnected — sensations in one area often involve multiple systems.",
      "The nervous, immune, and endocrine systems form a network that influences how you experience physical sensations.",
      "Stress activates the HPA axis, which can manifest as physical sensations in many body regions.",
    ],
    doctorQuestions: [
      "I've been experiencing this for a while — what initial evaluation would you recommend?",
      "Could this be related to stress, sleep, or lifestyle factors?",
      "What should I track before my next visit to help you understand the pattern?",
    ],
  };
}

async function callClaude(description: string): Promise<ExplainResult> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return mockResponse(description);

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: description }],
    }),
  });

  if (!response.ok) {
    console.error("Claude API error:", await response.text());
    return mockResponse(description);
  }

  const data = await response.json();
  const text = data.content?.[0]?.text ?? "";
  const parsed = JSON.parse(text) as ExplainResult;
  return parsed;
}

export const explainSymptom = createServerFn({ method: "POST" })
  .validator(inputSchema)
  .handler(async ({ data }): Promise<ExplainResult> => {
    return callClaude(data.description);
  });
