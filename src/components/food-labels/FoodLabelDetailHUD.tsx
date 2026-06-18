import { useFoodLabelStore } from '@/store/useFoodLabelStore';
import { X, AlertCircle, Eye, Beaker, ShoppingCart } from 'lucide-react';

export function FoodLabelDetailHUD() {
  const { entries, selectedEntryId, selectEntry } = useFoodLabelStore();

  const entry = entries.find((e) => e.id === selectedEntryId);
  if (!entry) return null;

  return (
    <div className="w-full h-full bg-black/40 border border-white/10 rounded-xl overflow-hidden backdrop-blur-md flex flex-col relative">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FC3D21]/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Header */}
      <div className="p-6 md:p-8 border-b border-white/5 relative z-10">
        <button
          onClick={() => selectEntry(null)}
          className="absolute top-4 right-4 p-2 text-[#8A8F98] hover:text-white hover:bg-white/5 rounded-full transition-colors lg:hidden"
        >
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-space font-bold uppercase tracking-wider text-[#EAEAEA] pr-8">
          <span className="text-[#8A8F98] text-sm tracking-widest mr-2">MARKETING CLAIM:</span>
          "{entry.marketing_claim}"
        </h2>
        
        <div className="mt-4 p-3 bg-black/40 border border-[#222222] rounded-md font-mono text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#FC3D21] shrink-0" />
          <div>
            <span className="text-[#8A8F98]">Hidden Truth:</span>
            <span className="text-[#EAEAEA] ml-2">{entry.real_meaning}</span>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8 space-y-8 relative z-10">
        
        {/* Biological Impact */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <Beaker className="w-5 h-5 text-[#00E5C4]" />
            <h3 className="text-lg font-space font-bold text-[#EAEAEA] uppercase tracking-wide">
              Biological Impact
            </h3>
          </div>
          <div className="bg-white/[0.02] border border-white/5 rounded-lg p-5">
            <p className="text-[#8A8F98] leading-relaxed">
              {entry.biological_impact}
            </p>
          </div>
        </section>

        {/* How to Spot */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <Eye className="w-5 h-5 text-[#FFD60A]" />
            <h3 className="text-lg font-space font-bold text-[#EAEAEA] uppercase tracking-wide">
              How to Spot the Lie
            </h3>
          </div>
          <div className="bg-[#FFD60A]/5 border border-[#FFD60A]/20 rounded-lg p-5">
            <p className="text-[#EAEAEA] font-mono leading-relaxed">
              {entry.how_to_spot}
            </p>
          </div>
        </section>

        {/* Common Products */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <ShoppingCart className="w-5 h-5 text-[#8A8F98]" />
            <h3 className="text-sm font-bold text-[#8A8F98] uppercase tracking-widest">
              Common Offending Products
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {entry.common_products.map((prod) => (
              <span
                key={prod}
                className="px-3 py-1.5 bg-black/40 border border-[#222222] rounded-md text-sm text-[#8A8F98]"
              >
                {prod}
              </span>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
