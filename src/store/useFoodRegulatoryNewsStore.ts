import { create } from "zustand";
import rawNewsData from "../data/food_regulatory_news.json";
import { FoodRegulatoryNewsItem } from "@/lib/api/foodNews.functions";

interface FoodRegulatoryNewsState {
  items: FoodRegulatoryNewsItem[];
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  isScanning: boolean;
  scanLiveFeeds: () => Promise<void>;
  lastScannedAt: string | null;
  filteredItems: FoodRegulatoryNewsItem[];
}

function computeFiltered(
  items: FoodRegulatoryNewsItem[],
  selectedCategory: string,
  searchQuery: string,
): FoodRegulatoryNewsItem[] {
  return items.filter((item) => {
    // Category filter
    if (selectedCategory === "fines" && item.actionType !== "FINE_PENALTY") {
      return false;
    }
    if (
      selectedCategory !== "all" &&
      selectedCategory !== "fines" &&
      item.productCategory !== selectedCategory
    ) {
      return false;
    }

    // Search query filter
    if (!searchQuery) return true;
    const lower = searchQuery.toLowerCase();
    const inTitle = item.title.toLowerCase().includes(lower);
    const inAuthority = item.authority.toLowerCase().includes(lower);
    const inProduct = item.productName.toLowerCase().includes(lower);
    const inFinding = item.investigationFinding.toLowerCase().includes(lower);
    const inPenalty = item.penaltyAmount.toLowerCase().includes(lower);
    const inSource = item.source.toLowerCase().includes(lower);

    return inTitle || inAuthority || inProduct || inFinding || inPenalty || inSource;
  });
}

const initialItems = rawNewsData as FoodRegulatoryNewsItem[];

export const useFoodRegulatoryNewsStore = create<FoodRegulatoryNewsState>((set) => ({
  items: initialItems,
  selectedCategory: "all",
  setSelectedCategory: (cat) =>
    set((state) => ({
      selectedCategory: cat,
      filteredItems: computeFiltered(state.items, cat, state.searchQuery),
    })),
  searchQuery: "",
  setSearchQuery: (q) =>
    set((state) => ({
      searchQuery: q,
      filteredItems: computeFiltered(state.items, state.selectedCategory, q),
    })),
  isScanning: false,
  lastScannedAt: new Date().toISOString(),
  filteredItems: initialItems,

  scanLiveFeeds: async () => {
    set({ isScanning: true });
    try {
      // Simulate/trigger live feed detection latency
      await new Promise((r) => setTimeout(r, 600));
      const freshItems = rawNewsData as FoodRegulatoryNewsItem[];
      set((state) => ({
        items: freshItems,
        lastScannedAt: new Date().toISOString(),
        isScanning: false,
        filteredItems: computeFiltered(freshItems, state.selectedCategory, state.searchQuery),
      }));
    } catch {
      set({ isScanning: false });
    }
  },
}));
