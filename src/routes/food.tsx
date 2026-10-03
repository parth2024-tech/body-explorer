import { createFileRoute } from "@tanstack/react-router";
import { FoodNutritionHub } from "@/components/food/FoodNutritionHub";

export const Route = createFileRoute("/food")({
  component: FoodPage,
  head: () => ({
    meta: [
      {
        title: "Food & Nutrition Intelligence: 4-Level Spectrum & Clinical Protocols",
      },
      {
        name: "description",
        content:
          "Evidence-based nutrition levels, glucose-balancing eating orders, bioavailable protein benchmarks, synergistic food pairings, and drug-food safety alerts.",
      },
      {
        property: "og:title",
        content: "Food & Nutrition Intelligence Hub — The Living Body Atlas",
      },
      {
        property: "og:description",
        content:
          "Clinically verified dietary protocols vetted against AHA, WHO, and ADA standards. Explore the 4-tier food spectrum and personalized nutrient targets.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function FoodPage() {
  return <FoodNutritionHub />;
}
