import { createFileRoute } from "@tanstack/react-router";
import { GreyMarketIndex } from "@/components/grey-market/GreyMarketIndex";

export const Route = createFileRoute("/grey-market")({
  head: () => ({
    meta: [
      {
        title: "Regulatory Watch & Recall Observatory | The Body Atlas",
      },
      {
        name: "description",
        content:
          "Evidence-graded observatory tracking regulatory safety alerts, import recalls, and prescription ingredient watchlists across US FDA, EFSA, and FSSAI.",
      },
      {
        property: "og:title",
        content: "Regulatory Watch & Recall Observatory | The Body Atlas",
      },
      {
        property: "og:description",
        content:
          "Cross-border statutory safety alerts, banned substances, and prescription ingredient search.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: GreyMarketRoute,
});

function GreyMarketRoute() {
  return <GreyMarketIndex />;
}
