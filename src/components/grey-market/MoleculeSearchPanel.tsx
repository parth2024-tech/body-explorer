import { useGreyMarketStore, type MoleculeEntry } from '@/store/useGreyMarketStore';
import greyMarketDb from '@/data/grey_market_db.json';
import { Search } from 'lucide-react';

const RISK_LEVELS = ['CRITICAL', 'HIGH', 'UNDER-REVIEW'];

export function MoleculeSearchPanel() {
  const { searchTerm, setSearchTerm, activeFilters, toggleFilter, selectedMolecule, setSelectedMolecule } = useGreyMarketStore();

  const db = greyMarketDb as MoleculeEntry[];

  const filteredMolecules = db.filter((entry) => {
    // 1. Filter by Risk Level
    if (activeFilters.length > 0 && !activeFilters.includes(entry.risk_level)) {
      return false;
    }
    // 2. Filter by Search Term
    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      const matchName = entry.molecule.toLowerCase().includes(lowerTerm);
      const matchBrand = entry.brand_names_india.some(b => b.toLowerCase().includes(lowerTerm));
      if (!matchName && !matchBrand) return false;
    }
    return true;
  });

  const getRiskBadgeStyles = (level: string) => {
    if (level === 'CRITICAL') return 'text-[#FF3B30] bg-[#FF3B30]/15 border-[#FF3B30]/30';
    if (level === 'HIGH') return 'text-[#FF9500] bg-[#FF9500]/15 border-[#FF9500]/30';
    return 'text-[#0A84FF] bg-[#0A84FF]/15 border-[#0A84FF]/30';
  };

  return (
    <div className="w-full h-full bg-[#0F0F0F] border border-[#222222] rounded-lg flex flex-col overflow-hidden">
      
      {/* Search Input */}
      <div className="p-4 border-b border-[#222222]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A8F98]" />
          <input
            type="text"
            placeholder="Search molecule or brand..."
            className="w-full bg-[#030303] border border-[#222222] rounded-md pl-9 pr-3 py-2 text-sm text-[#EAEAEA] placeholder:text-[#8A8F98] focus:outline-none focus:border-[#FC3D21] transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2 mt-3">
          {RISK_LEVELS.map((level) => {
            const isActive = activeFilters.includes(level);
            return (
              <button
                key={level}
                onClick={() => toggleFilter(level)}
                className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-1 rounded border transition-colors ${
                  isActive ? getRiskBadgeStyles(level) : 'text-[#8A8F98] border-[#222222] bg-[#030303] hover:border-[#8A8F98]'
                }`}
              >
                {level}
              </button>
            );
          })}
        </div>
      </div>

      {/* Molecule List */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
        {filteredMolecules.length === 0 ? (
          <div className="p-6 text-center text-sm text-[#8A8F98]">No molecules found matching your search.</div>
        ) : (
          <div className="flex flex-col">
            {filteredMolecules.map((entry, idx) => {
              const isSelected = selectedMolecule?.molecule === entry.molecule;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedMolecule(entry)}
                  className={`w-full text-left p-4 border-b border-[#222222]/50 transition-colors flex items-start justify-between gap-3 ${
                    isSelected ? 'bg-[#FC3D21]/10 border-l-2 border-l-[#FC3D21]' : 'hover:bg-[#1A1A1A] border-l-2 border-l-transparent'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-[#EAEAEA] font-space uppercase tracking-wide truncate">
                      Product Name: {entry.brand_names_india.join(', ')}
                    </div>
                    <div className="text-xs text-[#8A8F98] mt-1 font-mono truncate">
                      Chemical Name: {entry.molecule}
                    </div>
                  </div>
                  <div className={`shrink-0 text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${getRiskBadgeStyles(entry.risk_level)}`}>
                    {entry.risk_level}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
}
