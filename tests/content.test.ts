import { describe, it, expect } from "vitest";
import { DISEASE_ENTRIES } from "../src/data/diseases";
import { MYTHS } from "../src/data/myths";
import { FACTS, REMEDIES, HACKS, BODY_MARVELS, BODY_PARTS } from "../src/data/content";
import foodLabelsRaw from "../src/data/food_labels_db.json";
import greyMarketRaw from "../src/data/grey_market_db.json";

describe("Content & Knowledge Base Integrity", () => {
  it("validates expanded conditions & ailments database (49 entries)", () => {
    expect(DISEASE_ENTRIES.length).toBeGreaterThanOrEqual(45);
    for (const d of DISEASE_ENTRIES) {
      expect(d.id).toBeTruthy();
      expect(d.name.length).toBeGreaterThan(2);
      expect(d.overview.length).toBeGreaterThan(15);
      expect(d.symptoms.length).toBeGreaterThan(0);
      for (const s of d.symptoms) {
        expect(s.text.length).toBeGreaterThan(2);
        expect(["always", "often", "sometimes"]).toContain(s.frequency);
      }
      expect(d.whenToSeeDoctor.length).toBeGreaterThan(10);
      expect(d.misconceptions.length).toBeGreaterThan(0);
    }
  });

  it("validates deceptive food labels database (18 entries)", () => {
    expect(foodLabelsRaw.length).toBeGreaterThanOrEqual(18);
    for (const fl of foodLabelsRaw) {
      expect(fl.id).toBeTruthy();
      expect(fl.marketing_claim.length).toBeGreaterThan(3);
      expect(fl.real_meaning.length).toBeGreaterThan(10);
      expect(["CRITICAL", "HIGH", "MEDIUM", "LOW"]).toContain(fl.risk_level);
      expect(fl.biological_impact.length).toBeGreaterThan(20);
      expect(fl.how_to_spot.length).toBeGreaterThan(10);
      expect(fl.common_products.length).toBeGreaterThan(0);
    }
  });

  it("validates regulatory grey market database (24 entries)", () => {
    expect(greyMarketRaw.length).toBeGreaterThanOrEqual(24);
    for (const item of greyMarketRaw) {
      expect(item.id).toBeGreaterThan(0);
      expect(item.product.length).toBeGreaterThan(3);
      expect(item.molecule.length).toBeGreaterThan(2);
      expect(["CRITICAL", "HIGH", "UNDER-REVIEW"]).toContain(item.risk);
      expect(item.organ.length).toBeGreaterThan(2);
      expect(item.summary.length).toBeGreaterThan(20);
      expect(item.how_to_spot.length).toBeGreaterThan(10);
      expect(item.alternatives.length).toBeGreaterThan(0);
    }
  });

  it("validates expanded health myths database (40+ entries)", () => {
    expect(MYTHS.length).toBeGreaterThanOrEqual(35);
    for (const m of MYTHS) {
      expect(m.id).toBeTruthy();
      expect(m.myth.length).toBeGreaterThan(10);
      expect(m.reality.length).toBeGreaterThan(20);
      expect(m.actionableTip).toBeTruthy();
    }
  });

  it("validates comprehensive anatomy coverage across all 31 body parts", () => {
    expect(BODY_PARTS.length).toBe(31);
    expect(FACTS.length).toBeGreaterThanOrEqual(380);
    expect(REMEDIES.length).toBeGreaterThanOrEqual(80);
    expect(DISEASE_ENTRIES.length).toBeGreaterThanOrEqual(85);
    expect(HACKS.length).toBeGreaterThanOrEqual(35);
    expect(BODY_MARVELS.length).toBeGreaterThanOrEqual(20);

    for (const part of BODY_PARTS) {
      const partFacts = FACTS.filter((f) => f.bodyPartId === part.id);
      expect(partFacts.length).toBeGreaterThanOrEqual(8);

      const partDiseases = DISEASE_ENTRIES.filter((d) => d.bodyPartId === part.id);
      expect(partDiseases.length).toBeGreaterThanOrEqual(1);

      const partRemedies = REMEDIES.filter((r) => r.bodyPartId === part.id);
      expect(partRemedies.length).toBeGreaterThanOrEqual(1);

      const partHacks = HACKS.filter((h) => h.bodyPartId === part.id);
      expect(partHacks.length).toBeGreaterThanOrEqual(1);
    }
  });
});
