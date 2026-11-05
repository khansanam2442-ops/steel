import React, { useState } from 'react';
import { LANDMARK_PROJECTS, HERO_IMAGES } from '../data/mockData';
import { Building2, Train, Compass, Shield, ArrowRight, Zap, Check } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Rail Transit',
    'Bridges & Highways',
    'Energy & Power',
    'Skyscrapers'
  ];

  const filteredProjects = activeCategory === 'All'
    ? LANDMARK_PROJECTS
    : LANDMARK_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="infrastructure" className="py-20 lg:py-28 bg-slate-900/40 border-t border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-orange-500">
              <span className="w-2 h-2 rounded-sm bg-orange-600"></span>
              <span>Nation-Building Footprint</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
              Engineering the World's Most Daring Megastructures
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              From the world’s highest railway arch bridge to high-speed bullet train corridors and marine expressway links, Vanguard structural steel enables feats of extreme civil engineering.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === cat
                    ? 'bg-orange-600 text-white font-semibold shadow-md shadow-orange-950/40'
                    : 'bg-slate-950/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Megastructure Showcase Banner */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl h-80 sm:h-[420px] group">
          <img
            src={HERO_IMAGES.bridgeInfrastructure}
            alt="Trans-Harbour High-Speed Viaduct"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 max-w-2xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-orange-400">
              <span>National High-Speed Infrastructure</span>
              <span>·</span>
              <span>508 km Corridor</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              Bullet Train Rail Corridor & Elevated Viaducts
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              185,000 Metric Tonnes of Vanguard 60E1 1080 Head-Hardened continuous 260m rails and earthquake-class Fe 550D reinforcement rebars supporting 320 km/h commercial transit.
            </p>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 bg-slate-950/80 border border-slate-800 rounded-2xl flex flex-col justify-between space-y-5 hover:border-slate-700 transition-colors group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-orange-400">{project.category}</span>
                  <span className="text-slate-400">{project.year}</span>
                </div>

                <h4 className="text-xl font-bold font-display text-white group-hover:text-orange-400 transition-colors">
                  {project.title}
                </h4>

                <div className="text-xs text-slate-400 font-mono">
                  Location: <span className="text-slate-200">{project.location}</span>
                </div>

                <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-xs space-y-1">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Volume Supplied:</div>
                  <div className="font-semibold text-orange-400 font-mono">{project.steelSupplied}</div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {project.description}
                </p>

                <div className="pt-2 space-y-1.5">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Custom Steel Grades:</div>
                  <div className="flex flex-wrap gap-1">
                    {project.gradesUsed.map((grade, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 bg-slate-900 border border-slate-800 rounded text-slate-300"
                      >
                        {grade}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 text-xs font-medium text-slate-400 group-hover:text-white transition-colors flex items-center justify-between">
                <span>{project.highlight}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
