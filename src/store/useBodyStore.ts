import { create } from "zustand";
import type { Category } from "@/data/content";

interface BodyState {
  selectedPartId: string | null;
  activeCategory: Category;
  setSelectedPart: (id: string | null) => void;
  setCategory: (c: Category) => void;
  closePanel: () => void;
}

export const useBodyStore = create<BodyState>((set) => ({
  selectedPartId: null,
  activeCategory: "weird_wild",
  setSelectedPart: (id) => set({ selectedPartId: id, activeCategory: "weird_wild" }),
  setCategory: (c) => set({ activeCategory: c }),
  closePanel: () => set({ selectedPartId: null }),
}));
