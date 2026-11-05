import React, { useState } from 'react';
import { ShieldCheck, Compass, Target, Award, Users, Globe, Building2, Flame, ChevronRight } from 'lucide-react';
import { LEADERSHIP_TEAM, MILESTONES } from '../data/mockData';

export const AboutSection: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(MILESTONES.length - 1);

  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-950 border-t border-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-orange-500">
            <span className="w-2 h-2 rounded-sm bg-orange-600"></span>
            <span>Corporate Identity & Purpose</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
            Pioneering Heavy Metallurgy with Sovereign Industrial Purpose
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Founded with an enduring commitment to industrial self-reliance, Vanguard Steel has evolved from a pioneering coal-based direct reduction plant into one of the globe’s most technologically advanced integrated steel enterprises. We engineer structural backbones that empower high-speed mobility, resilient urban skylines, and green energy futures.
          </p>
        </div>

        {/* Vision, Mission, and Core Values (Clean layout with subtle hairline borders) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-xl space-y-4 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-orange-600/10 border border-orange-500/30 flex items-center justify-center text-orange-500">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold font-display text-white">Our Vision</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              To be the world’s most trusted and sustainable steel conglomerate, celebrated for engineering breakthrough metallurgy, setting environmental benchmarks, and elevating communities.
            </p>
          </div>

          <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-xl space-y-4 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-orange-600/10 border border-orange-500/30 flex items-center justify-center text-orange-500">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold font-display text-white">Our Mission</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Deliver unmatched value to global infrastructure through continuous product innovation, world-record rolling capabilities, zero-waste circularity, and ethical corporate governance.
            </p>
          </div>

          <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-xl space-y-4 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-orange-600/10 border border-orange-500/30 flex items-center justify-center text-orange-500">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold font-display text-white">Pillars of Excellence</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Mine-to-metal vertical integration, zero-compromise safety standards, patent-holding metallurgy research, and responsible capital allocation for long-term shareholder returns.
            </p>
          </div>
        </div>

        {/* Interactive Milestones Timeline */}
        <div className="p-8 sm:p-10 bg-slate-900/40 border border-slate-800 rounded-2xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">Historical Trajectory</span>
              <h3 className="text-2xl font-bold font-display text-white mt-1">Four Decades of Industrial Milestones</h3>
            </div>
            <div className="text-xs text-slate-400 font-mono">
              Click any year to explore breakthrough accomplishments
            </div>
          </div>

          {/* Year Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {MILESTONES.map((item, idx) => (
              <button
                key={item.year}
                onClick={() => setSelectedMilestone(idx)}
                className={`px-4 py-2 text-xs font-mono rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  selectedMilestone === idx
                    ? 'bg-orange-600 text-white font-bold shadow-lg shadow-orange-950/50'
                    : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {item.year}
              </button>
            ))}
          </div>

          {/* Active Milestone Card */}
          <div className="p-6 bg-slate-950/80 border border-slate-800 rounded-xl grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-slate-800 pb-4 md:pb-0 md:pr-6">
              <div className="text-4xl font-extrabold font-display text-orange-500">
                {MILESTONES[selectedMilestone].year}
              </div>
              <div className="text-xs font-mono text-slate-400 mt-1 uppercase">
                Era Milestone
              </div>
            </div>
            <div className="md:col-span-3 space-y-2">
              <h4 className="text-xl font-bold text-white font-display">
                {MILESTONES[selectedMilestone].title}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {MILESTONES[selectedMilestone].desc}
              </p>
            </div>
          </div>
        </div>

        {/* Corporate Leadership Team */}
        <div className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">Executive Stewardship</span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">Board of Directors & Senior Leadership</h3>
            <p className="text-sm text-slate-400">
              Steered by visionary industrialists and seasoned metallurgy executives committed to transparent governance and long-term enterprise value.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_TEAM.map((exec, idx) => (
              <div
                key={idx}
                className="p-6 bg-slate-900/60 border border-slate-800 rounded-xl flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors"
              >
                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center font-display font-bold text-lg text-orange-400">
                    {exec.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white font-display">{exec.name}</h4>
                    <div className="text-xs font-medium text-orange-400 mt-0.5">{exec.role}</div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pt-2">
                    {exec.bio}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono">
                  {exec.credentials}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
