import { create } from 'zustand';

export interface MoleculeEntry {
  id: number;
  category: 'food' | 'drug';
  icon: string;
  product: string;
  molecule: string;
  subtitle: string;
  brands: string[];
  risk: 'CRITICAL' | 'HIGH' | 'UNDER-REVIEW';
  organ: string;
  summary: string;
  mechanism: string;
  status_global: Record<string, string>;
  status_india: string;
  how_to_spot: string;
  alternatives: string[];
  ref: string;
  confidenceLevel?: 'HIGH' | 'MODERATE' | 'LOW' | 'INSUFFICIENT';
  evidenceStatement?: string;
  clinicalDisclaimer?: string;
}

interface GreyMarketState {
  searchTerm: string;
  categoryFilter: 'all' | 'food' | 'drug';
  riskFilters: string[]; // e.g. ['CRITICAL', 'HIGH']
  sortBy: 'risk' | 'az' | 'cat';
  setSearchTerm: (term: string) => void;
  setCategoryFilter: (cat: 'all' | 'food' | 'drug') => void;
  toggleRiskFilter: (risk: string) => void;
  setSortBy: (sort: 'risk' | 'az' | 'cat') => void;
}

export const useGreyMarketStore = create<GreyMarketState>((set) => ({
  searchTerm: '',
  categoryFilter: 'all',
  riskFilters: [],
  sortBy: 'risk',
  setSearchTerm: (term) => set({ searchTerm: term }),
  setCategoryFilter: (cat) => set({ categoryFilter: cat }),
  toggleRiskFilter: (risk) =>
    set((state) => ({
      riskFilters: state.riskFilters.includes(risk)
        ? state.riskFilters.filter((r) => r !== risk)
        : [...state.riskFilters, risk],
    })),
  setSortBy: (sort) => set({ sortBy: sort }),
}));
