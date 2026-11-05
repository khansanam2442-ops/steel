import React, { useState } from 'react';
import { ArrowRight, Play, Shield, Award, ChevronRight, Sparkles, Building, Flame } from 'lucide-react';
import { HERO_IMAGES, COMPANY_STATS } from '../data/mockData';

interface HeroProps {
  onExploreProducts: () => void;
  onOpenVirtualTour: () => void;
  onRequestQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onOpenVirtualTour,
  onRequestQuote,
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides = [
    {
      image: HERO_IMAGES.steelMill,
      tag: 'Integrated Metallurgy & Heavy Engineering',
      title: 'FORGING THE FOUNDATIONS OF A MODERN WORLD',
      subtitle: 'From ultra-high-speed rail tracks and seismic skyscrapers to cryogenic subsea pipelines, Vanguard manufactures the highest-integrity structural steel on Earth.',
    },
    {
      image: HERO_IMAGES.plantDawn,
      tag: 'Mine-To-Metal Industrial Supremacy',
      title: 'PIONEERING CLEAN INDUSTRIAL SCALE AT 12.5 MTPA',
      subtitle: 'Operating world-class blast furnaces and green-hydrogen direct reduction shafts with zero effluent discharge and integrated captive power.',
    },
    {
      image: HERO_IMAGES.bridgeInfrastructure,
      tag: 'Nation-Building Landmark Infrastructure',
      title: 'CONNECTING CONTINENTS WITH SEAMLESS STEEL',
      subtitle: 'Supplying 260-metre continuous weld-free head-hardened rails and long-span cable-stayed bridge girders engineered for century-long endurance.',
    },
  ];

  const active = slides[currentSlide];

  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-slate-950">
      {/* Background Media Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={active.image}
          alt={active.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-all duration-1000 ease-out brightness-[0.65] contrast-[1.1]"
        />
        {/* Measured Scrim Overlays (§1.F of frontend-design) */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40"></div>
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-slate-950/40 to-slate-950/80"></div>
      </div>

      {/* Hero Content Block */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12 lg:py-20">
        <div className="max-w-4xl space-y-6">
          
          {/* Natural human editorial kicker without mechanical comment slashes or pulsing dots */}
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-orange-400 uppercase">
            <span className="w-2 h-2 rounded-sm bg-orange-500"></span>
            <span>{active.tag}</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span className="text-slate-400">ISO 9001 / 14001 / 45001 Certified</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-[1.08] text-balance">
            {active.title}
          </h1>

          {/* Value proposition subtext */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-sans leading-relaxed max-w-2xl font-light">
            {active.subtitle}
          </p>

          {/* Action Callouts */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreProducts}
              className="px-6 py-3.5 text-sm font-bold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-all shadow-xl shadow-orange-950/60 hover:shadow-orange-600/30 inline-flex items-center gap-2"
            >
              <span>Explore Product Catalogue</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenVirtualTour}
              className="px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 backdrop-blur-md rounded-lg transition-all inline-flex items-center gap-2.5"
            >
              <Play className="w-4 h-4 text-orange-400 fill-orange-400/20" />
              <span>Watch Industrial Film</span>
            </button>

            <button
              onClick={onRequestQuote}
              className="px-5 py-3.5 text-sm font-medium text-slate-300 hover:text-white underline decoration-slate-600 hover:decoration-orange-500 underline-offset-4 transition-colors"
            >
              Commercial RFQ Desk
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="pt-6 flex items-center gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 transition-all rounded-full ${
                  currentSlide === idx ? 'w-10 bg-orange-500' : 'w-3 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Jump to hero slide ${idx + 1}`}
              />
            ))}
            <span className="text-xs font-mono text-slate-400 ml-2">
              0{currentSlide + 1} / 0{slides.length}
            </span>
          </div>

        </div>
      </div>

      {/* Industrial Impact Strip (4-column row below hero as per frontend design guideline) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 bg-slate-900/90 border border-slate-800 rounded-xl backdrop-blur-xl shadow-2xl">
          {COMPANY_STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1 p-2">
              <div className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-orange-400 uppercase tracking-wide">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 font-sans">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
