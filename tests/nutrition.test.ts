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
