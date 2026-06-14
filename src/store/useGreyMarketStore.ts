import { create } from 'zustand';
import { type MoleculeEntry } from '../data/grey_market_db'; // I'll define this type

export interface MoleculeEntry {
  molecule: string;
  brand_names_india: string[];
  risk_level: 'CRITICAL' | 'HIGH' | 'UNDER-REVIEW';
  status_global: {
    US: string;
    EU: string;
    UK: string;
    Australia: string;
  };
  status_india: string;
  target_organ_id: string;
  mechanism: string;
  how_to_spot: string;
  safer_alternatives: string[];
  cdsco_ref: string;
}

interface GreyMarketState {
  selectedMolecule: MoleculeEntry | null;
  searchTerm: string;
  activeFilters: string[]; // e.g. ['CRITICAL', 'HIGH']
  setSelectedMolecule: (molecule: MoleculeEntry | null) => void;
  setSearchTerm: (term: string) => void;
  toggleFilter: (filter: string) => void;
}

export const useGreyMarketStore = create<GreyMarketState>((set) => ({
  selectedMolecule: null,
  searchTerm: '',
  activeFilters: [],
  setSelectedMolecule: (molecule) => set({ selectedMolecule: molecule }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  toggleFilter: (filter) =>
    set((state) => ({
      activeFilters: state.activeFilters.includes(filter)
        ? state.activeFilters.filter((f) => f !== filter)
        : [...state.activeFilters, filter],
    })),
}));
