import { createFileRoute } from "@tanstack/react-router";
import { FoodNutritionHub } from "@/components/food/FoodNutritionHub";

export const Route = createFileRoute("/food")({
  component: FoodPage,
  head: () => ({
    meta: [
      {
        title: "Food & Nutrition Directory — The Living Body Atlas",
      },
      {
        name: "description",
        content:
          "Evidence-based Indian food guide, proven benefits, practical kitchen tips, food synergies, and drug-food safety alerts all in one place.",
      },
      {
        property: "og:title",
        content: "Food & Nutrition Directory — The Living Body Atlas",
      },
      {
        property: "og:description",
        content:
          "Clinically verified dietary guide vetted against ICMR-NIN and WHO standards. Explore 36 power foods, kitchen tips, synergies, and safety alerts all in one place.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function FoodPage() {
  return <FoodNutritionHub />;
}
