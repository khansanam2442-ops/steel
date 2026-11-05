import React from 'react';
import { Product } from '../types';
import { X, Printer, Download, CheckCircle, Shield, FileText, ArrowRight } from 'lucide-react';

interface BrochureModalProps {
  product: Product | null;
  onClose: () => void;
  onRequestQuote: (productName: string) => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ product, onClose, onRequestQuote }) => {
  if (!product) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleSimulateDownload = () => {
    // Generate text/csv data or trigger download blob
    const content = `VANGUARD STEEL & INFRASTRUCTURE LIMITED
PRODUCT TECHNICAL DATASHEET: ${product.name}
Category: ${product.category}
Standards: ${product.standards.join(', ')}
Grades Available: ${product.grades.join(', ')}
Dimensions: ${product.dimensions}

SPECIFICATION TABLE:
${product.specTable.map(s => `${s.property}: ${s.value}`).join('\n')}

APPLICATIONS:
${product.applications.map(a => `• ${a}`).join('\n')}

KEY FEATURES:
${product.keyFeatures.map(f => `• ${f}`).join('\n')}

Corporate Contact: corporate@vanguardsteel.com | www.vanguardsteel.com
Quality Compliance: ISO 9001:2015, ISO 14001:2015, ISO 45001:2018`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${product.id}-technical-datasheet.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-xl shadow-2xl text-slate-100 p-6 sm:p-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Actions */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-sm bg-orange-600"></span>
            <span className="text-xs uppercase tracking-widest text-orange-500 font-semibold font-mono">
              Official Technical Datasheet
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors inline-flex items-center gap-1.5 text-xs font-medium"
              title="Print Datasheet"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={handleSimulateDownload}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors inline-flex items-center gap-1.5 text-xs font-medium"
              title="Download Datasheet File"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download Data</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Datasheet Body */}
        <div className="mt-6 space-y-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">{product.category}</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
                {product.name}
              </h2>
              <p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
                {product.description}
              </p>
            </div>
            <div className="shrink-0 p-3.5 bg-slate-950/60 border border-slate-800 rounded-lg text-xs space-y-1.5 min-w-[200px]">
              <div className="text-slate-400 font-medium">Compliance Standards:</div>
              <div className="text-orange-400 font-mono font-medium">{product.standards.join(', ')}</div>
              <div className="text-slate-400 pt-1 font-medium">Mill Certification:</div>
              <div className="text-slate-200 font-mono">EN 10204 Type 3.1 / 3.2</div>
            </div>
          </div>

          {/* Grades and Dimensions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-950/40 border border-slate-800 rounded-lg">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Available Steel Grades</h4>
              <div className="flex flex-wrap gap-1.5">
                {product.grades.map((grade, idx) => (
                  <span key={idx} className="text-xs font-mono px-2 py-1 bg-slate-800/80 text-slate-200 border border-slate-700/60 rounded">
                    {grade}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-4 bg-slate-950/40 border border-slate-800 rounded-lg">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Rolling Dimensional Envelope</h4>
              <p className="text-xs font-mono text-slate-200 leading-relaxed">
                {product.dimensions}
              </p>
            </div>
          </div>

          {/* Specification Table */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-orange-500" />
              Guaranteed Mechanical & Physical Properties
            </h4>
            <div className="overflow-x-auto border border-slate-800 rounded-lg">
              <table className="w-full text-left text-xs font-sans">
                <thead className="bg-slate-950 text-slate-400 uppercase font-mono tracking-wider border-b border-slate-800">
                  <tr>
                    <th className="px-4 py-3">Metallurgical Property</th>
                    <th className="px-4 py-3 text-right">Guaranteed Test Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {product.specTable.map((spec, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-4 py-2.5 font-medium text-slate-300">{spec.property}</td>
                      <td className="px-4 py-2.5 text-right font-mono text-orange-400 font-semibold">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Applications & Engineered Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">Key Technical Advantages</h4>
              <ul className="space-y-2">
                {product.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">Major Industrial Applications</h4>
              <ul className="space-y-2">
                {product.applications.map((app, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <ArrowRight className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer / Direct Action */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Need customized metallurgical chemistry or non-standard profiles?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onRequestQuote(product.name);
                onClose();
              }}
              className="w-full sm:w-auto px-5 py-2 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors shadow-lg shadow-orange-950/50 inline-flex items-center justify-center gap-1.5"
            >
              Request Commercial Quote
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
