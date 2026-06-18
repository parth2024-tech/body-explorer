import { useFoodLabelStore } from '@/store/useFoodLabelStore';
import { AlertTriangle, Printer, Search } from 'lucide-react';
import { FoodLabelCard } from './FoodLabelCard';

export function FoodLabelsIndex() {
  const { entries, searchQuery, setSearchQuery, filteredEntries } = useFoodLabelStore();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#030303] text-[#EAEAEA] font-sans selection:bg-[#FC3D21]/30">
      
      {/* Disclaimer Banner */}
      <div className="w-full bg-[#FC3D21]/10 border-b border-[#FC3D21]/30 px-4 py-2 flex items-start gap-3 sm:items-center justify-center print:hidden">
        <AlertTriangle className="w-5 h-5 text-[#FC3D21] shrink-0" />
        <p className="text-xs font-mono text-[#FC3D21] leading-snug max-w-4xl">
          <strong className="uppercase tracking-wider">Disclaimer:</strong> This index exposes common FMCG (Fast-Moving Consumer Goods) marketing tactics based on nutritional science. It does not target specific brands, but rather universal misleading labeling practices. Always read the ingredient list.
        </p>
      </div>

      <div className="max-w-[1600px] mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* Header */}
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 relative">
          {/* Decorative ambient light */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#00E5C4]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-space font-extrabold uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#8A8F98]">
              Food Label <span className="text-[#00E5C4]">X-Ray</span>
            </h1>
            <p className="text-[#8A8F98] mt-4 font-mono text-sm max-w-2xl leading-relaxed">
              Supermarket shelves are filled with deceptive "health" claims. Learn how to X-Ray the front label and read the hidden chemical truths on the back of the packet. Click "Scan" on any label below to reveal its biological impact.
            </p>
          </div>
          
          <div className="shrink-0 flex flex-col sm:flex-row items-end sm:items-center gap-4 relative z-10">
            {/* Search Bar */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A8F98]" />
              <input
                type="text"
                placeholder="Search claims or products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/[0.03] border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-[#EAEAEA] placeholder:text-[#8A8F98] focus:outline-none focus:border-[#00E5C4]/50 focus:bg-white/[0.05] transition-all"
              />
            </div>
            
            <button 
              onClick={handlePrint}
              className="shrink-0 flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-mono transition-colors print:hidden"
            >
              <Printer className="w-4 h-4" /> Print Guide
            </button>
          </div>
        </header>

        {/* X-Ray Grid */}
        <div className="print:hidden">
          {filteredEntries.length === 0 ? (
            <div className="w-full border border-white/5 rounded-xl border-dashed flex flex-col items-center justify-center text-center p-16 bg-white/[0.02]">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-[#8A8F98]" />
              </div>
              <h3 className="text-xl font-space font-bold text-[#EAEAEA] mb-2 uppercase tracking-wide">No Deceptive Claims Found</h3>
              <p className="text-[#8A8F98] text-sm max-w-md font-mono">
                Try searching for something else like "Sugar", "Multigrain", or "Protein".
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-max">
              {filteredEntries.map((entry) => (
                <div key={entry.id} className="h-fit">
                  <FoodLabelCard label={entry} />
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Print-only layout */}
      <div className="hidden print:block p-8 text-black bg-white min-h-screen">
        <h1 className="text-3xl font-bold border-b-2 border-black pb-4 mb-6">Food Label X-Ray - Survival Guide</h1>
        {entries.map(entry => (
          <div key={entry.id} className="mb-8 border-b border-gray-300 pb-6">
             <h2 className="text-xl font-bold uppercase mb-2">Claim: "{entry.marketing_claim}"</h2>
             <p className="mb-2"><strong>Hidden Truth:</strong> {entry.real_meaning}</p>
             <p className="mb-2"><strong>Biological Impact:</strong> {entry.biological_impact}</p>
             <p className="mb-2"><strong>How to Spot:</strong> {entry.how_to_spot}</p>
             <p className="text-sm text-gray-600 mt-2"><strong>Found in:</strong> {entry.common_products.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
