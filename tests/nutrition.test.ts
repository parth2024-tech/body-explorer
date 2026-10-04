import { describe, it, expect } from "vitest";

// Clinical nutrition benchmark calculator helper
export function calculateNutritionTargets(
  bodyWeight: number,
  activityFactor: "sedentary" | "moderate" | "active" = "moderate",
) {
  // Adult safety clamping
  const weight = Math.max(30, Math.min(200, bodyWeight || 70));

  let proteinRange: [number, number]; // g/day
  let waterLitersRange: [string, string]; // L/day

  if (activityFactor === "sedentary") {
    proteinRange = [Math.round(weight * 0.8), Math.round(weight * 1.0)];
    waterLitersRange = [((weight * 30) / 1000).toFixed(1), ((weight * 35) / 1000).toFixed(1)];
  } else if (activityFactor === "active") {
    proteinRange = [Math.round(weight * 1.4), Math.round(weight * 1.8)];
    waterLitersRange = [((weight * 38) / 1000).toFixed(1), ((weight * 45) / 1000).toFixed(1)];
  } else {
    // moderate
    proteinRange = [Math.round(weight * 1.0), Math.round(weight * 1.3)];
    waterLitersRange = [((weight * 33) / 1000).toFixed(1), ((weight * 38) / 1000).toFixed(1)];
  }

  // Dietary fiber reference range (Institute of Medicine)
  const fiberRange: [number, number] = [25, 38];

  return {
    weightClamped: weight,
    proteinRange,
    waterLitersRange,
    fiberRange,
  };
}

describe("Clinical Nutrition Benchmarks", () => {
  it("calculates accurate protein ranges for a 70kg moderate adult", () => {
    const targets = calculateNutritionTargets(70, "moderate");
    // 70 * 1.0 = 70g, 70 * 1.3 = 91g
    expect(targets.proteinRange[0]).toBe(70);
    expect(targets.proteinRange[1]).toBe(91);
  });

  it("calculates protein ranges for active athletic adults", () => {
    const targets = calculateNutritionTargets(70, "active");
    // 70 * 1.4 = 98g, 70 * 1.8 = 126g
    expect(targets.proteinRange[0]).toBe(98);
    expect(targets.proteinRange[1]).toBe(126);
  });

  it("calculates baseline hydration ranges per body mass", () => {
    const targets = calculateNutritionTargets(70, "moderate");
    // 70 * 33ml = 2.3L, 70 * 38ml = 2.7L
    expect(targets.waterLitersRange[0]).toBe("2.3");
    expect(targets.waterLitersRange[1]).toBe("2.7");
  });

  it("clamps unphysiological extreme weights to safe adult bounds", () => {
    const low = calculateNutritionTargets(10, "moderate");
    expect(low.weightClamped).toBe(30);

    const high = calculateNutritionTargets(350, "moderate");
    expect(high.weightClamped).toBe(200);
  });

  it("provides standard Institute of Medicine fiber reference interval", () => {
    const targets = calculateNutritionTargets(70, "moderate");
    expect(targets.fiberRange[0]).toBe(25);
    expect(targets.fiberRange[1]).toBe(38);
  });
});

import {
  FOOD_FACTS,
  FOOD_SYNERGIES,
  DRUG_FOOD_WARNINGS,
  NUTRITION_LEVELS,
  NUTRITION_LEVEL_TIPS_FACTS,
} from "../src/data/nutrition";

describe("Nutrition Level Small Facts and Tips Integrity", () => {
  it("contains 24 curated facts and tips across all 4 nutrition levels", () => {
    expect(NUTRITION_LEVEL_TIPS_FACTS.length).toBe(24);
  });

  it("ensures each level has both facts and actionable tips in plain language", () => {
    for (const lvl of [1, 2, 3, 4] as const) {
      const items = NUTRITION_LEVEL_TIPS_FACTS.filter((t) => t.level === lvl);
      expect(items.length).toBeGreaterThanOrEqual(6);
      expect(items.some((t) => t.type === "fact")).toBe(true);
      expect(items.some((t) => t.type === "tip")).toBe(true);
    }
  });

  it("validates bilingual clarity and takeaway for each fact and tip", () => {
    for (const item of NUTRITION_LEVEL_TIPS_FACTS) {
      expect(item.id).toBeTruthy();
      expect([1, 2, 3, 4]).toContain(item.level);
      expect(["fact", "tip"]).toContain(item.type);
      expect(item.title.en.length).toBeGreaterThan(5);
      expect(item.title.hi.length).toBeGreaterThan(5);
      expect(item.content.en.length).toBeGreaterThan(15);
      expect(item.content.hi.length).toBeGreaterThan(15);
      expect(item.takeaway.en.length).toBeGreaterThan(10);
      expect(item.takeaway.hi.length).toBeGreaterThan(10);
      expect(item.readingGrade).toMatch(/Grade 6/);
    }
  });
});

describe("Indian Food Facts Clinical Database Integrity", () => {
  it("contains all 24 curated Indian superfoods and staples", () => {
    expect(FOOD_FACTS.length).toBe(24);
  });

  it("enforces the 6-part fixed card format and clinical safety criteria on every entry", () => {
    for (const item of FOOD_FACTS) {
      // 1. Identification & Evidence
      expect(item.id).toBeTruthy();
      expect(item.foodName).toBeTruthy();
      expect(item.hindiName).toBeTruthy();
      expect(item.evidenceTier).toMatch(/^Tier (1 Gold|2 Silver)/);
      expect(item.sourceUrl).toMatch(/^https:\/\//);
      expect(item.lastReviewed.length).toBeGreaterThan(5);

      // 2. What it contains (Plain language)
      expect(item.whatItContains.length).toBeGreaterThan(10);
      expect(item.hi.whatItContains.length).toBeGreaterThan(10);

      // 3. Proven benefit
      expect(item.provenBenefit.length).toBeGreaterThan(10);
      expect(item.hi.provenBenefit.length).toBeGreaterThan(10);

      // 4. Myth check (Claim vs Reality)
      expect(item.mythCheck.claim.length).toBeGreaterThan(5);
      expect(item.mythCheck.reality.length).toBeGreaterThan(10);
      expect(item.hi.mythClaim.length).toBeGreaterThan(5);
      expect(item.hi.mythReality.length).toBeGreaterThan(10);

      // 5. Who should limit it (Safety contraindications)
      expect(item.whoShouldLimit.length).toBeGreaterThan(0);
      expect(item.hi.whoShouldLimit.length).toBeGreaterThan(0);

      // 6. Best pairing & Indian context serving
      expect(item.bestPairing.length).toBeGreaterThan(10);
      expect(item.indianServingContext.length).toBeGreaterThan(10);
      expect(item.hi.bestPairing.length).toBeGreaterThan(10);

      // 7. Clinical Triad: Do / Don't / Ask a doctor if
      expect(item.guidance.do.length).toBeGreaterThan(5);
      expect(item.guidance.dont.length).toBeGreaterThan(5);
      expect(item.guidance.askDoctorIf.length).toBeGreaterThan(5);
      expect(item.hi.do.length).toBeGreaterThan(5);
      expect(item.hi.dont.length).toBeGreaterThan(5);
      expect(item.hi.askDoctorIf.length).toBeGreaterThan(5);

      // 8. Situational Context Tag
      expect(item.situationTag.length).toBeGreaterThan(5);
    }
  });

  it("ensures drug-nutrient warnings cite clinical interaction risks", () => {
    expect(DRUG_FOOD_WARNINGS.length).toBeGreaterThanOrEqual(4);
    for (const warning of DRUG_FOOD_WARNINGS) {
      expect(warning.food).toBeTruthy();
      expect(warning.medicationClass).toBeTruthy();
      expect(["CRITICAL", "HIGH", "MODERATE"]).toContain(warning.riskSeverity);
      expect(warning.clinicalConsequence).toBeTruthy();
      expect(warning.doctorDirective).toBeTruthy();
    }
  });

  it("ensures bioavailability synergies have evidence explanations", () => {
    expect(FOOD_SYNERGIES.length).toBeGreaterThanOrEqual(4);
    for (const syn of FOOD_SYNERGIES) {
      expect(syn.foodA).toBeTruthy();
      expect(syn.foodB).toBeTruthy();
      expect(syn.synergyOutcome).toBeTruthy();
      expect(syn.multiplier).toBeTruthy();
      expect(syn.mechanism.length).toBeGreaterThan(10);
      expect(syn.culinaryIdea.length).toBeGreaterThan(10);
    }
  });

  it("ensures nutrition level benchmarks cover all 4 dietary tiers", () => {
    const levels = Object.values(NUTRITION_LEVELS);
    expect(levels.length).toBe(4);
    for (const lvl of levels) {
      expect(lvl.title).toBeTruthy();
      expect(lvl.description).toBeTruthy();
      expect(lvl.targetShare).toBeTruthy();
    }
  });
});
