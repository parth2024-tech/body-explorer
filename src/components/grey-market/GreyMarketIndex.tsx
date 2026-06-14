import { MoleculeSearchPanel } from './MoleculeSearchPanel';
import { MoleculeDetailHUD } from './MoleculeDetailHUD';
import { PrescriptionScanner } from './PrescriptionScanner';
import { useGreyMarketStore } from '@/store/useGreyMarketStore';
import { AlertTriangle, Printer } from 'lucide-react';

export function GreyMarketIndex() {
  const selectedMolecule = useGreyMarketStore((s) => s.selectedMolecule);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#030303] text-[#EAEAEA] font-sans selection:bg-[#FC3D21]/30">
      
      {/* Permanent Amber Disclaimer Banner */}
      <div className="w-full bg-[#FF9500]/10 border-b border-[#FF9500]/30 px-4 py-2 flex items-start gap-3 sm:items-center justify-center print:hidden">
        <AlertTriangle className="w-5 h-5 text-[#FF9500] shrink-0" />
        <p className="text-xs font-mono text-[#FF9500] leading-snug max-w-4xl">
          <strong className="uppercase tracking-wider">Disclaimer:</strong> This tool aggregates global pharmacovigilance data for molecules circulating in the Indian market. It is for educational and regulatory intelligence purposes only. Do not stop or alter any prescribed medication without consulting a licensed physician.
        </p>
      </div>

      <div className="max-w-[1600px] mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* Header */}
        <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-space font-bold uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-[#8A8F98]">
              The Grey Market Index
            </h1>
            <p className="text-[#8A8F98] mt-2 font-mono text-sm max-w-2xl">
              A real-time intelligence database tracking molecules banned or heavily restricted in the US, EU, and UK, but still legally or illegally circulating in the Indian pharmaceutical market.
            </p>
          </div>
          <button 
            onClick={handlePrint}
            className="shrink-0 flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md text-sm font-mono transition-colors print:hidden"
          >
            <Printer className="w-4 h-4" /> Print Report
          </button>
        </header>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-220px)] min-h-[800px]">
          
          {/* Left Column: Scanner & Search */}
          <div className="lg:col-span-4 flex flex-col gap-6 h-full print:hidden">
            <PrescriptionScanner />
            <div className="flex-1 overflow-hidden">
              <MoleculeSearchPanel />
            </div>
          </div>

          {/* Right Column: Detail HUD */}
          <div className="lg:col-span-8 h-full relative">
            {selectedMolecule ? (
              <MoleculeDetailHUD />
            ) : (
              <div className="w-full h-full border border-white/5 rounded-xl border-dashed flex flex-col items-center justify-center text-center p-8 bg-white/[0.02] print:hidden">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-8 h-8 text-[#8A8F98]" />
                </div>
                <h3 className="text-lg font-space font-bold text-[#EAEAEA] mb-2 uppercase">No Molecule Selected</h3>
                <p className="text-[#8A8F98] text-sm">
                  Select a molecule from the index or scan a prescription to view its detailed toxicological profile and regulatory status.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Print-only layout */}
      <div className="hidden print:block p-8 text-black bg-white min-h-screen">
        <h1 className="text-3xl font-bold border-b-2 border-black pb-4 mb-6">The Grey Market Index - Toxicology Report</h1>
        {selectedMolecule ? (
          <div>
            <h2 className="text-2xl font-bold mb-2 uppercase">{selectedMolecule.brand_names_india.join(', ')}</h2>
            <p className="mb-4"><strong>Chemical Name:</strong> {selectedMolecule.molecule}</p>
            
            <h3 className="text-xl font-bold mt-6 mb-2 border-b border-gray-300 pb-1">Regulatory Status</h3>
            <p><strong>India:</strong> {selectedMolecule.status_india} (Ref: {selectedMolecule.cdsco_ref})</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {Object.entries(selectedMolecule.status_global).map(([country, status]) => (
                <div key={country} className="p-3 border border-gray-300 rounded">
                  <strong>{country}</strong>: {status}
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold mt-6 mb-2 border-b border-gray-300 pb-1">Mechanism of Harm</h3>
            <p>{selectedMolecule.mechanism}</p>

            <h3 className="text-xl font-bold mt-6 mb-2 border-b border-gray-300 pb-1">How to Spot</h3>
            <p>{selectedMolecule.how_to_spot}</p>

            <h3 className="text-xl font-bold mt-6 mb-2 border-b border-gray-300 pb-1">Safer Alternatives</h3>
            <ul className="list-disc pl-5 mt-2">
              {selectedMolecule.safer_alternatives.map(alt => (
                <li key={alt}>{alt}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No specific molecule selected for reporting.</p>
        )}
        <div className="mt-12 text-sm text-gray-500 border-t border-gray-300 pt-4">
          Disclaimer: This tool aggregates global pharmacovigilance data for molecules circulating in the Indian market. It is for educational and regulatory intelligence purposes only. Do not stop or alter any prescribed medication without consulting a licensed physician.
        </div>
      </div>
    </div>
  );
}
