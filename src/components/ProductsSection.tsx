import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS_DATA, HERO_IMAGES } from '../data/mockData';
import { Search, Download, ArrowRight, Shield, Filter, FileText, Check } from 'lucide-react';

interface ProductsSectionProps {
  onViewBrochure: (product: Product) => void;
  onRequestQuote: (productName: string) => void;
  selectedProductId?: string;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onViewBrochure,
  onRequestQuote,
  selectedProductId,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Structural Steel',
    'Rail & Track',
    'Plates & Coils',
    'Rebars & TMT',
    'Wire Rods',
    'Special Alloys',
  ];

  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesQuery =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.grades.some((g) => g.toLowerCase().includes(searchQuery.toLowerCase())) ||
      product.standards.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      product.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="products" className="py-20 lg:py-28 bg-slate-900/50 border-t border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-orange-500">
              <span className="w-2 h-2 rounded-sm bg-orange-600"></span>
              <span>Metallurgical Solutions & Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
              Engineered for Critical Tolerances and Enduring Load
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              Explore Vanguard's comprehensive portfolio of structural steel, head-hardened railway tracks, heavy API plates, and high-tensile earthquake-resistant rebars.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search grade or standard..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 transition-colors font-mono"
            />
          </div>
        </div>

        {/* Category Filter Controls (§1.A of frontend-design allows segmented filter controls with functional click handlers) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === cat
                  ? 'bg-orange-600 text-white font-semibold shadow-md shadow-orange-950/40'
                  : 'bg-slate-950/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProducts.map((product) => {
            const isHighlighted = selectedProductId === product.id;
            return (
              <div
                key={product.id}
                className={`p-6 sm:p-8 bg-slate-950/80 border rounded-2xl flex flex-col justify-between transition-all duration-200 group ${
                  isHighlighted
                    ? 'border-orange-500 ring-2 ring-orange-500/20 shadow-2xl'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="space-y-4">
                  {/* Category Kicker */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-orange-400 uppercase tracking-wider">
                      {product.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      EN 10204 3.1 Certified
                    </span>
                  </div>

                  {/* Title and Subtitle */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-orange-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 font-sans">
                      {product.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    {product.description}
                  </p>

                  {/* Dimensions Envelope */}
                  <div className="p-3 bg-slate-900/80 border border-slate-800/80 rounded-lg text-xs font-mono space-y-1">
                    <div className="text-slate-400 text-[11px] uppercase tracking-wide">Dimensional Envelope:</div>
                    <div className="text-slate-200">{product.dimensions}</div>
                  </div>

                  {/* Standards & Available Grades (unboxed typography with subtle dividers) */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs text-slate-400 font-medium">Available Grades:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {product.grades.map((grade, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-mono px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-300 rounded"
                        >
                          {grade}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Spec Snapshot Table */}
                  <div className="pt-2">
                    <div className="text-xs text-slate-400 font-medium mb-1.5">Key Mechanical Benchmarks:</div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {product.specTable.slice(0, 4).map((spec, idx) => (
                        <div key={idx} className="p-2 bg-slate-900/50 border border-slate-800/60 rounded">
                          <div className="text-[11px] text-slate-400 truncate">{spec.property}</div>
                          <div className="font-mono text-orange-400 font-semibold mt-0.5">{spec.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => onViewBrochure(product)}
                    className="px-4 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors inline-flex items-center gap-1.5"
                  >
                    <FileText className="w-4 h-4 text-orange-500" />
                    <span>Technical Datasheet</span>
                  </button>

                  <button
                    onClick={() => onRequestQuote(product.name)}
                    className="px-4 py-2 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-md shadow-orange-950/40"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-slate-400 bg-slate-950 border border-slate-800 rounded-xl">
            No products matched your search. Clear filters or search term to see all categories.
          </div>
        )}

      </div>
    </section>
  );
};
