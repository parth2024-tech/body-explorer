import { create } from 'zustand';
import foodLabelsData from '../data/food_labels_db.json';

export interface FoodLabelEntry {
  id: string;
  marketing_claim: string;
  real_meaning: string;
  risk_level: string;
  biological_impact: string;
  how_to_spot: string;
  common_products: string[];
}

interface FoodLabelState {
  entries: FoodLabelEntry[];
  selectedEntryId: string | null;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectEntry: (id: string | null) => void;
  filteredEntries: FoodLabelEntry[];
}

export const useFoodLabelStore = create<FoodLabelState>((set, get) => ({
  entries: foodLabelsData as FoodLabelEntry[],
  selectedEntryId: null,
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  selectEntry: (id) => set({ selectedEntryId: id }),
  get filteredEntries() {
    const { entries, searchQuery } = get();
    if (!searchQuery) return entries;
    const lowerQ = searchQuery.toLowerCase();
    return entries.filter(
      (e) =>
        e.marketing_claim.toLowerCase().includes(lowerQ) ||
        e.real_meaning.toLowerCase().includes(lowerQ) ||
        e.common_products.some((p) => p.toLowerCase().includes(lowerQ))
    );
  },
}));
