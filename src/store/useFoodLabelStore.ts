import { create } from "zustand";
import foodLabelsData from "../data/food_labels_db.json";
import { shuffleArray } from "@/lib/shuffle";

export interface RegulatoryCase {
  authority: string;
  penalty: string;
  productName: string;
  year?: string;
  verdict: string;
}

export interface FoodLabelEntry {
  id: string;
  marketing_claim: string;
  real_meaning: string;
  risk_level: string;
  biological_impact: string;
  how_to_spot: string;
  common_products: string[];
  confidenceLevel?: "HIGH" | "MODERATE" | "LOW" | "INSUFFICIENT";
  evidenceStatement?: string;
  clinicalDisclaimer?: string;
  category?:
    "regulatory_action" | "grain_flour" | "sugar_sweetener" | "oil_fat" | "beverage_health";
  regulatoryCase?: RegulatoryCase;
}

interface FoodLabelState {
  entries: FoodLabelEntry[];
  selectedEntryId: string | null;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectEntry: (id: string | null) => void;
  shuffleEntries: () => void;
  filteredEntries: FoodLabelEntry[];
}

export const useFoodLabelStore = create<FoodLabelState>((set, get) => ({
  entries: foodLabelsData as FoodLabelEntry[],
  selectedEntryId: null,
  selectedCategory: "all",
  setSelectedCategory: (cat) => set({ selectedCategory: cat }),
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
  selectEntry: (id) => set({ selectedEntryId: id }),
  shuffleEntries: () => set((state) => ({ entries: shuffleArray(state.entries) })),
  get filteredEntries() {
    const { entries, searchQuery, selectedCategory } = get();

    return entries.filter((e) => {
      // Category filter
      if (selectedCategory === "regulatory" && !e.regulatoryCase) {
        return false;
      }
      if (selectedCategory === "grains" && e.category !== "grain_flour") {
        return false;
      }
      if (selectedCategory === "sugar" && e.category !== "sugar_sweetener") {
        return false;
      }
      if (selectedCategory === "beverage" && e.category !== "beverage_health") {
        return false;
      }

      // Search query filter
      if (!searchQuery) return true;
      const lowerQ = searchQuery.toLowerCase();
      const inClaim = e.marketing_claim.toLowerCase().includes(lowerQ);
      const inMeaning = e.real_meaning.toLowerCase().includes(lowerQ);
      const inProducts = e.common_products.some((p) => p.toLowerCase().includes(lowerQ));
      const inRegulatory = e.regulatoryCase
        ? e.regulatoryCase.authority.toLowerCase().includes(lowerQ) ||
          e.regulatoryCase.productName.toLowerCase().includes(lowerQ) ||
          e.regulatoryCase.verdict.toLowerCase().includes(lowerQ)
        : false;

      return inClaim || inMeaning || inProducts || inRegulatory;
    });
  },
}));
