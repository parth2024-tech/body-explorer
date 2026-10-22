import { describe, it, expect } from "vitest";
import {
  FOOD_MISTAKES_CATALOG,
  INDIAN_FOOD_MYTHS,
  FOOD_MYTH_QUIZ_QUESTIONS,
  SPECIAL_CIRCUMSTANCES,
} from "../src/data/foodMistakes";

describe("Food Mistakes Intelligence Database Integrity", () => {
  it("validates food mistakes catalog completeness and schema", () => {
    expect(FOOD_MISTAKES_CATALOG.length).toBeGreaterThanOrEqual(12);

    const ids = new Set<string>();
    const phases = new Set<string>();
    const riskLevels = new Set<string>();

    for (const item of FOOD_MISTAKES_CATALOG) {
      expect(item.id).toBeTruthy();
      expect(ids.has(item.id)).toBe(false);
      ids.add(item.id);

      expect(["before", "during", "after"]).toContain(item.phase);
      phases.add(item.phase);

      expect(["genuine_risk", "context_dependent", "popular_myth"]).toContain(item.riskLevel);
      riskLevels.add(item.riskLevel);

      expect(item.mistake.length).toBeGreaterThan(10);
      expect(item.whyItMatters.length).toBeGreaterThan(20);
      expect(item.betterPractice.length).toBeGreaterThan(20);
      expect(item.plainSummary.length).toBeGreaterThan(15);
      expect(item.clinicalNote.length).toBeGreaterThan(15);
    }

    // Verify all 3 eating phases are covered
    expect(phases.has("before")).toBe(true);
    expect(phases.has("during")).toBe(true);
    expect(phases.has("after")).toBe(true);

    // Verify all 3 risk levels are utilized
    expect(riskLevels.has("genuine_risk")).toBe(true);
    expect(riskLevels.has("context_dependent")).toBe(true);
    expect(riskLevels.has("popular_myth")).toBe(true);
  });

  it("validates Indian food myths debunker collection", () => {
    expect(INDIAN_FOOD_MYTHS.length).toBeGreaterThanOrEqual(5);

    const mythIds = new Set<string>();
    for (const myth of INDIAN_FOOD_MYTHS) {
      expect(myth.id).toBeTruthy();
      expect(mythIds.has(myth.id)).toBe(false);
      mythIds.add(myth.id);

      expect(myth.myth.length).toBeGreaterThan(10);
      expect(myth.reality.length).toBeGreaterThan(15);
      expect(myth.scientificExplanation.length).toBeGreaterThan(25);
      expect(myth.actionableVerdict.length).toBeGreaterThan(15);
      expect(["myth_busted", "context_matters", "partially_true"]).toContain(myth.verdictType);
      expect(myth.foodConcerned.length).toBeGreaterThan(2);
    }
  });

  it("validates interactive food myth quiz questions", () => {
    expect(FOOD_MYTH_QUIZ_QUESTIONS.length).toBeGreaterThanOrEqual(5);

    const quizIds = new Set<string>();
    for (const q of FOOD_MYTH_QUIZ_QUESTIONS) {
      expect(q.id).toBeTruthy();
      expect(quizIds.has(q.id)).toBe(false);
      quizIds.add(q.id);

      expect(q.question.length).toBeGreaterThan(15);
      expect(q.options).toHaveLength(3);
      expect(q.options).toContain("Fact");
      expect(q.options).toContain("Myth");
      expect(q.options).toContain("Context-dependent");
      expect(q.options).toContain(q.correctAnswer);
      expect(q.explanation.length).toBeGreaterThan(25);
      expect(q.practicalTakeaway.length).toBeGreaterThan(15);
    }
  });

  it("validates clinical special circumstances matrix", () => {
    expect(SPECIAL_CIRCUMSTANCES.length).toBeGreaterThanOrEqual(5);

    const condIds = new Set<string>();
    for (const item of SPECIAL_CIRCUMSTANCES) {
      expect(item.id).toBeTruthy();
      expect(condIds.has(item.id)).toBe(false);
      condIds.add(item.id);

      expect(item.condition.length).toBeGreaterThan(3);
      expect(item.iconName.length).toBeGreaterThan(2);
      expect(item.criticalMistake.length).toBeGreaterThan(15);
      expect(item.smartHabit.length).toBeGreaterThan(15);
      expect(item.whyItMatters.length).toBeGreaterThan(20);
    }
  });
});
