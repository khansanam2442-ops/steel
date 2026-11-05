import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, ShieldCheck, Flame, Phone, Settings, ArrowRight } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenSearch: () => void;
  onOpenAdmin: () => void;
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenSearch,
  onOpenAdmin,
  onOpenQuote,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products', hasMega: true },
    { id: 'manufacturing', label: 'Manufacturing', hasMega: true },
    { id: 'infrastructure', label: 'Projects' },
    { id: 'sustainability', label: 'Sustainability' },
    { id: 'investors', label: 'Investors' },
    { id: 'media', label: 'Media' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-xl py-3'
          : 'bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-transparent border-b border-slate-800/40 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar contract: 3 zones separated by gap-8 */}
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
            }}
            className="flex items-center gap-2.5 text-slate-100 group shrink-0"
          >
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-orange-500 to-amber-700 flex items-center justify-center shadow-md shadow-orange-950/40 group-hover:scale-105 transition-transform">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-extrabold text-xl tracking-tight text-white whitespace-nowrap">
              VANGUARD <span className="text-orange-500 font-semibold">STEEL</span>
            </span>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <div
                key={link.id}
                className="relative"
                onMouseEnter={() => link.hasMega && setActiveMegaMenu(link.id)}
                onMouseLeave={() => link.hasMega && setActiveMegaMenu(null)}
              >
                <button
                  onClick={() => onNavigate(link.id)}
                  className={`flex items-center gap-1 hover:text-white transition-colors py-2 whitespace-nowrap shrink-0 text-xs xl:text-sm font-medium tracking-wide ${
                    activeSection === link.id ? 'text-orange-500 font-semibold' : 'text-slate-300'
                  }`}
                >
                  {link.label}
                  {link.hasMega && (
                    <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                  )}
                </button>

                {/* Mega Menu Dropdown */}
                {link.hasMega && activeMegaMenu === link.id && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-96 z-50">
                    <div className="p-4 bg-slate-900 border border-slate-700/80 rounded-xl shadow-2xl backdrop-blur-xl">
                      {link.id === 'products' && (
                        <div className="space-y-3">
                          <div className="text-[11px] font-mono text-orange-400 uppercase tracking-widest border-b border-slate-800 pb-1.5">
                            Product Catalogue
                          </div>
                          <div className="grid grid-cols-1 gap-2 text-xs">
                            <button
                              onClick={() => {
                                onNavigate('products');
                                setActiveMegaMenu(null);
                              }}
                              className="text-left p-2 rounded hover:bg-slate-800/80 text-slate-200 hover:text-white transition-colors"
                            >
                              <div className="font-semibold text-slate-100">Universal Beams & Heavy Columns</div>
                              <div className="text-[11px] text-slate-400">Parallel flange sections for high-rise infrastructure</div>
                            </button>
                            <button
                              onClick={() => {
                                onNavigate('products');
                                setActiveMegaMenu(null);
                              }}
                              className="text-left p-2 rounded hover:bg-slate-800/80 text-slate-200 hover:text-white transition-colors"
                            >
                              <div className="font-semibold text-slate-100">Head-Hardened Rails (1080HH)</div>
                              <div className="text-[11px] text-slate-400">260m continuous rails for bullet train & freight</div>
                            </button>
                            <button
                              onClick={() => {
                                onNavigate('products');
                                setActiveMegaMenu(null);
                              }}
                              className="text-left p-2 rounded hover:bg-slate-800/80 text-slate-200 hover:text-white transition-colors"
                            >
                              <div className="font-semibold text-slate-100">Wide Heavy Plates (API & Naval)</div>
                              <div className="text-[11px] text-slate-400">Up to 5m width for offshore pipelines and pressure vessels</div>
                            </button>
                            <button
                              onClick={() => {
                                onNavigate('products');
                                setActiveMegaMenu(null);
                              }}
                              className="text-left p-2 rounded hover:bg-slate-800/80 text-slate-200 hover:text-white transition-colors"
                            >
                              <div className="font-semibold text-slate-100">High-Ductility TMT Rebars (550D)</div>
                              <div className="text-[11px] text-slate-400">Earthquake-resistant virgin steel reinforcement</div>
                            </button>
                          </div>
                        </div>
                      )}

                      {link.id === 'manufacturing' && (
                        <div className="space-y-3">
                          <div className="text-[11px] font-mono text-orange-400 uppercase tracking-widest border-b border-slate-800 pb-1.5">
                            Mine-to-Metal Operations
                          </div>
                          <div className="grid grid-cols-1 gap-2 text-xs">
                            <button
                              onClick={() => {
                                onNavigate('manufacturing');
                                setActiveMegaMenu(null);
                              }}
                              className="text-left p-2 rounded hover:bg-slate-800/80 text-slate-200 hover:text-white transition-colors"
                            >
                              <div className="font-semibold text-slate-100">6-Step Metallurgy Flow</div>
                              <div className="text-[11px] text-slate-400">Captive iron ore to universal beam rolling</div>
                            </button>
                            <button
                              onClick={() => {
                                onNavigate('manufacturing');
                                setActiveMegaMenu(null);
                              }}
                              className="text-left p-2 rounded hover:bg-slate-800/80 text-slate-200 hover:text-white transition-colors"
                            >
                              <div className="font-semibold text-slate-100">Angul Mega Steelworks</div>
                              <div className="text-[11px] text-slate-400">6.0 MTPA flagship blast furnace & plate mill</div>
                            </button>
                            <button
                              onClick={() => {
                                onNavigate('manufacturing');
                                setActiveMegaMenu(null);
                              }}
                              className="text-left p-2 rounded hover:bg-slate-800/80 text-slate-200 hover:text-white transition-colors"
                            >
                              <div className="font-semibold text-slate-100">Raigarh Rail & Structural Mill</div>
                              <div className="text-[11px] text-slate-400">World-record 260m long continuous rail rolling</div>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Zone 3: 1 primary action + subtle search & admin triggers */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors"
              title="Search Products & Reports (Press / or Ctrl+K)"
              aria-label="Search website"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Corporate Admin CMS Trigger */}
            <button
              onClick={onOpenAdmin}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 rounded-lg border border-slate-800 transition-colors"
              title="Open Corporate Management CMS"
            >
              <Settings className="w-3.5 h-3.5 text-orange-500" />
              <span className="font-mono text-[11px]">CMS</span>
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenQuote}
              className="px-4 py-2 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors shadow-md shadow-orange-950/40 whitespace-nowrap shrink-0 inline-flex items-center gap-1.5"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white lg:hidden rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 pb-6 border-t border-slate-800 animate-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-2 gap-2 text-sm font-medium">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2.5 rounded-lg transition-colors ${
                    activeSection === link.id
                      ? 'bg-orange-600/10 text-orange-400 font-semibold'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  onOpenSearch();
                  setMobileMenuOpen(false);
                }}
                className="w-1/2 flex items-center justify-center gap-2 py-2 px-3 text-xs text-slate-300 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800"
              >
                <Search className="w-4 h-4 text-orange-500" />
                <span>Search</span>
              </button>
              <button
                onClick={() => {
                  onOpenAdmin();
                  setMobileMenuOpen(false);
                }}
                className="w-1/2 flex items-center justify-center gap-2 py-2 px-3 text-xs text-slate-300 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800"
              >
                <Settings className="w-4 h-4 text-orange-500" />
                <span>Corporate CMS</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
