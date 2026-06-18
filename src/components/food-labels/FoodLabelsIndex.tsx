import { FoodLabelSearchPanel } from './FoodLabelSearchPanel';
import { FoodLabelDetailHUD } from './FoodLabelDetailHUD';
import { useFoodLabelStore } from '@/store/useFoodLabelStore';
import { AlertTriangle, Printer } from 'lucide-react';

export function FoodLabelsIndex() {
  const selectedEntryId = useFoodLabelStore((s) => s.selectedEntryId);

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
        <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-space font-bold uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-[#8A8F98]">
              Food Label X-Ray
            </h1>
            <p className="text-[#8A8F98] mt-2 font-mono text-sm max-w-2xl">
              Supermarket shelves are filled with deceptive "health" claims. Learn how to X-Ray the front label and read the hidden chemical truths on the back of the packet.
            </p>
          </div>
          <button 
            onClick={handlePrint}
            className="shrink-0 flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md text-sm font-mono transition-colors print:hidden"
          >
            <Printer className="w-4 h-4" /> Print Guide
          </button>
        </header>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-220px)] min-h-[800px]">
          
          {/* Column 1: Search & Index */}
          <div className="lg:col-span-4 h-full print:hidden">
            <FoodLabelSearchPanel />
          </div>

          {/* Column 2: Detail HUD */}
          <div className="lg:col-span-8 h-full relative print:hidden">
            {selectedEntryId ? (
              <FoodLabelDetailHUD />
            ) : (
              <div className="w-full h-full border border-white/5 rounded-xl border-dashed flex flex-col items-center justify-center text-center p-8 bg-white/[0.02]">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-8 h-8 text-[#8A8F98]" />
                </div>
                <h3 className="text-lg font-space font-bold text-[#EAEAEA] mb-2 uppercase">No Label Selected</h3>
                <p className="text-[#8A8F98] text-sm max-w-md">
                  Select a deceptive marketing claim from the index to uncover its real biological impact and learn how to spot it.
                </p>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Print-only layout */}
      <div className="hidden print:block p-8 text-black bg-white min-h-screen">
        <h1 className="text-3xl font-bold border-b-2 border-black pb-4 mb-6">Food Label X-Ray - Survival Guide</h1>
        {useFoodLabelStore.getState().entries.map(entry => (
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
