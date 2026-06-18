import { Search, PackageX } from 'lucide-react';
import { useFoodLabelStore } from '@/store/useFoodLabelStore';

export function FoodLabelSearchPanel() {
  const {
    searchQuery,
    setSearchQuery,
    filteredEntries,
    selectedEntryId,
    selectEntry,
  } = useFoodLabelStore();

  return (
    <div className="flex flex-col h-full bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden backdrop-blur-sm">
      <div className="p-4 border-b border-white/5 bg-black/20">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A8F98]" />
          <input
            type="text"
            placeholder="Search claims or products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-black/40 border border-[#222222] rounded-md py-2.5 pl-10 pr-4 text-sm text-[#EAEAEA] placeholder:text-[#8A8F98] focus:outline-none focus:border-[#FC3D21]/50 transition-colors"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {filteredEntries.length === 0 ? (
          <div className="p-8 text-center text-[#8A8F98] text-sm">
            <PackageX className="w-8 h-8 mx-auto mb-3 opacity-50" />
            No deceptive claims found for your search.
          </div>
        ) : (
          <div className="divide-y divide-white/5">
            {filteredEntries.map((entry) => {
              const isSelected = selectedEntryId === entry.id;
              
              return (
                <button
                  key={entry.id}
                  onClick={() => selectEntry(entry.id)}
                  className={`w-full text-left p-4 hover:bg-white/5 transition-colors ${
                    isSelected ? 'bg-[#FC3D21]/10 border-l-2 border-[#FC3D21]' : 'border-l-2 border-transparent'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-[#EAEAEA] font-space uppercase tracking-wide truncate">
                        Label Claim: "{entry.marketing_claim}"
                      </div>
                      <div className="text-xs text-[#8A8F98] mt-1 font-mono truncate">
                        Hidden Truth: {entry.real_meaning}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold uppercase tracking-wider ${
                      entry.risk_level === 'CRITICAL' ? 'bg-[#FC3D21]/20 text-[#FC3D21] border border-[#FC3D21]/30' :
                      entry.risk_level === 'HIGH' ? 'bg-[#FF9500]/20 text-[#FF9500] border border-[#FF9500]/30' :
                      'bg-[#FFD60A]/20 text-[#FFD60A] border border-[#FFD60A]/30'
                    }`}>
                      {entry.risk_level} DECEPTION
                    </span>
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
