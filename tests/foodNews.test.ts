import { describe, it, expect } from "vitest";
import rawNewsData from "../src/data/food_regulatory_news.json";
import { useFoodRegulatoryNewsStore } from "../src/store/useFoodRegulatoryNewsStore";

describe("Automated Food Regulatory News Integrity", () => {
  it("validates food regulatory news database entries", () => {
    expect(rawNewsData.length).toBeGreaterThanOrEqual(10);

    const validActionTypes = [
      "FINE_PENALTY",
      "BAN_RECALL",
      "MISLEADING_CLAIM",
      "ADULTERATION_BUST",
      "STANDARDS_DIRECTIVE",
    ];

    const validCategories = [
      "grain_flour",
      "dairy_paneer",
      "baby_food",
      "sugar_confectionery",
      "spices_condiments",
      "beverages",
      "cooking_oil",
    ];

    for (const item of rawNewsData) {
      expect(item.id).toBeTruthy();
      expect(item.title.length).toBeGreaterThanOrEqual(5);
      expect(item.authority.length).toBeGreaterThan(3);
      expect(validActionTypes).toContain(item.actionType);
      expect(item.penaltyAmount.length).toBeGreaterThan(3);
      expect(validCategories).toContain(item.productCategory);
      expect(item.kitchenTableExplanation.length).toBeGreaterThan(20);
      expect(item.actionableAdvice.length).toBeGreaterThan(15);
      expect(item.source.length).toBeGreaterThan(2);
      expect(item.publishedAt).toBeTruthy();
      expect(item.isVerified).toBe(true);
    }
  });

  it("verifies the Britannia CCPA 62% whole wheat bread fine is present", () => {
    const britanniaCase = rawNewsData.find(
      (item) => item.id.includes("britannia") || item.title.toLowerCase().includes("britannia"),
    );
    expect(britanniaCase).toBeDefined();
    expect(britanniaCase?.penaltyAmount).toContain("1 Lakh");
    expect(britanniaCase?.authority).toContain("CCPA");
  });

  it("filters food regulatory news in Zustand store", () => {
    const store = useFoodRegulatoryNewsStore.getState();
    expect(store.items.length).toBeGreaterThan(0);

    // Test fines filter
    store.setSelectedCategory("fines");
    const fineItems = useFoodRegulatoryNewsStore.getState().filteredItems;
    for (const item of fineItems) {
      expect(item.actionType).toBe("FINE_PENALTY");
    }

    // Test search filter
    store.setSelectedCategory("all");
    store.setSearchQuery("Britannia");
    const searchedItems = useFoodRegulatoryNewsStore.getState().filteredItems;
    expect(searchedItems.length).toBeGreaterThan(0);
    expect(
      searchedItems.some(
        (i) => i.title.includes("Britannia") || i.productName.includes("Britannia"),
      ),
    ).toBe(true);

    // Reset store
    store.setSearchQuery("");
    store.setSelectedCategory("all");
  });
});
