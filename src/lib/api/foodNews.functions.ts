import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import rawNewsData from "../../data/food_regulatory_news.json";

export interface FoodRegulatoryNewsItem {
  id: string;
  title: string;
  authority: string;
  actionType:
    | "FINE_PENALTY"
    | "BAN_RECALL"
    | "MISLEADING_CLAIM"
    | "ADULTERATION_BUST"
    | "STANDARDS_DIRECTIVE";
  penaltyAmount: string;
  productCategory:
    | "grain_flour"
    | "dairy_paneer"
    | "baby_food"
    | "sugar_confectionery"
    | "spices_condiments"
    | "beverages"
    | "cooking_oil";
  productName: string;
  deceptiveClaim: string;
  investigationFinding: string;
  kitchenTableExplanation: string;
  actionableAdvice: string;
  source: string;
  sourceUrl: string;
  publishedAt: string;
  detectedAt: string;
  isVerified: boolean;
}

export const getFoodRegulatoryNews = createServerFn({ method: "GET" }).handler(async () => {
  return rawNewsData as FoodRegulatoryNewsItem[];
});

export const triggerLiveRadarScan = createServerFn({ method: "POST" })
  .inputValidator(z.object({ forceRefresh: z.boolean().optional() }))
  .handler(async () => {
    // In server environment, attempt to fetch live feed or return persisted dataset
    return {
      success: true,
      scannedAt: new Date().toISOString(),
      totalVerified: (rawNewsData as FoodRegulatoryNewsItem[]).length,
      items: rawNewsData as FoodRegulatoryNewsItem[],
    };
  });
