import React, { useState, useEffect } from 'react';
import { Search, X, ArrowUpRight, FileText, Factory, Building2, Package } from 'lucide-react';
import { PRODUCTS_DATA, LANDMARK_PROJECTS, PLANT_FACILITIES, INVESTOR_REPORTS } from '../data/mockData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection: (sectionId: string) => void;
  onSelectProduct: (productId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigateSection,
  onSelectProduct
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // toggle handled by parent
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  const matchedProducts = q ? PRODUCTS_DATA.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.grades.some(g => g.toLowerCase().includes(q)) ||
    p.standards.some(s => s.toLowerCase().includes(q)) ||
    p.category.toLowerCase().includes(q)
  ) : PRODUCTS_DATA.slice(0, 3);

  const matchedProjects = q ? LANDMARK_PROJECTS.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.highlight.toLowerCase().includes(q)
  ) : LANDMARK_PROJECTS.slice(0, 2);

  const matchedFacilities = q ? PLANT_FACILITIES.filter(f =>
    f.name.toLowerCase().includes(f) ||
    f.type.toLowerCase().includes(q) ||
    f.location.toLowerCase().includes(q)
  ) : [];

  const matchedReports = q ? INVESTOR_REPORTS.filter(r =>
    r.title.toLowerCase().includes(q) ||
    r.type.toLowerCase().includes(q) ||
    r.fiscalPeriod.toLowerCase().includes(q)
  ) : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-900/90 gap-3">
          <Search className="w-5 h-5 text-orange-500 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products (e.g., 1080HH rail, universal beam, X70), facilities, or reports..."
            className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none font-sans"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-white rounded"
              aria-label="Clear query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-mono text-slate-400 bg-slate-800 border border-slate-700 rounded hover:text-white"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="overflow-y-auto p-4 space-y-5 text-xs">
          {/* Products */}
          {matchedProducts.length > 0 && (
            <div>
              <div className="flex items-center justify-between text-slate-400 font-mono uppercase tracking-wider mb-2 px-2">
                <span className="flex items-center gap-1.5">
                  <Package className="w-3.5 h-3.5 text-orange-500" />
                  Products & Metallurgy
                </span>
                <span>{matchedProducts.length}</span>
              </div>
              <div className="space-y-1">
                {matchedProducts.map(prod => (
                  <button
                    key={prod.id}
                    onClick={() => {
                      onSelectProduct(prod.id);
                      onNavigateSection('products');
                      onClose();
                    }}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-slate-800/80 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-slate-200 group-hover:text-white text-sm">
                        {prod.name}
                      </div>
                      <div className="text-slate-400 text-xs mt-0.5">
                        {prod.category} · {prod.grades.slice(0, 3).join(', ')}
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-orange-400 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Landmark Infrastructure */}
          {matchedProjects.length > 0 && (
            <div>
              <div className="flex items-center justify-between text-slate-400 font-mono uppercase tracking-wider mb-2 px-2">
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-orange-500" />
                  Landmark Projects
                </span>
                <span>{matchedProjects.length}</span>
              </div>
              <div className="space-y-1">
                {matchedProjects.map(proj => (
                  <button
                    key={proj.id}
                    onClick={() => {
                      onNavigateSection('infrastructure');
                      onClose();
                    }}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-slate-800/80 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-slate-200 group-hover:text-white text-sm">
                        {proj.title}
                      </div>
                      <div className="text-slate-400 text-xs mt-0.5">
                        {proj.category} · {proj.location} · {proj.steelSupplied}
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-orange-400 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Plant Facilities */}
          {matchedFacilities.length > 0 && (
            <div>
              <div className="flex items-center justify-between text-slate-400 font-mono uppercase tracking-wider mb-2 px-2">
                <span className="flex items-center gap-1.5">
                  <Factory className="w-3.5 h-3.5 text-orange-500" />
                  Plant Facilities
                </span>
                <span>{matchedFacilities.length}</span>
              </div>
              <div className="space-y-1">
                {matchedFacilities.map(fac => (
                  <button
                    key={fac.id}
                    onClick={() => {
                      onNavigateSection('manufacturing');
                      onClose();
                    }}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-slate-800/80 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-slate-200 group-hover:text-white text-sm">
                        {fac.name}
                      </div>
                      <div className="text-slate-400 text-xs mt-0.5">
                        {fac.type} · Capacity: {fac.capacity}
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-orange-400 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Investor Reports */}
          {matchedReports.length > 0 && (
            <div>
              <div className="flex items-center justify-between text-slate-400 font-mono uppercase tracking-wider mb-2 px-2">
                <span className="flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-orange-500" />
                  Investor Filings & Reports
                </span>
                <span>{matchedReports.length}</span>
              </div>
              <div className="space-y-1">
                {matchedReports.map((rep, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      onNavigateSection('investors');
                      onClose();
                    }}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-slate-800/80 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-slate-200 group-hover:text-white text-sm">
                        {rep.title}
                      </div>
                      <div className="text-slate-400 text-xs mt-0.5">
                        {rep.type} · {rep.fiscalPeriod} ({rep.fileSize})
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-orange-400 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {matchedProducts.length === 0 && matchedProjects.length === 0 && (
            <div className="text-center py-8 text-slate-500">
              No results found for "{query}". Try searching for "rails", "plates", "rebar", or "Angul".
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span>Search suggestions:</span>
            <button onClick={() => setQuery('1080HH')} className="underline hover:text-slate-300">1080HH</button>
            <button onClick={() => setQuery('Universal')} className="underline hover:text-slate-300">Universal Beams</button>
            <button onClick={() => setQuery('Green Hydrogen')} className="underline hover:text-slate-300">Green Hydrogen</button>
          </div>
          <span className="font-mono">Vanguard Enterprise Index</span>
        </div>
      </div>
    </div>
  );
};
