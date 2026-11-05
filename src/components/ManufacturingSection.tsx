import React, { useState } from 'react';
import { MANUFACTURING_STEPS, PLANT_FACILITIES, HERO_IMAGES } from '../data/mockData';
import { Factory, ShieldCheck, Cpu, Flame, Layers, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ManufacturingSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [activeFacilityId, setActiveFacilityId] = useState<string>(PLANT_FACILITIES[0].id);

  const activeStep = MANUFACTURING_STEPS[activeStepIndex];
  const activeFacility = PLANT_FACILITIES.find(f => f.id === activeFacilityId) || PLANT_FACILITIES[0];

  return (
    <section id="manufacturing" className="py-20 lg:py-28 bg-slate-950 text-slate-100 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-orange-500">
            <span className="w-2 h-2 rounded-sm bg-orange-600"></span>
            <span>Mine-to-Metal Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
            Integrated Heavy Industrial Scale and Uncompromising Purity
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
            Vanguard operates a fully integrated manufacturing ecosystem spanning captive iron ore beneficiation, 4,500m³ blast furnaces, clean synthesis gas DRI, ultra-clean secondary refining, and world-renowned universal rolling mills.
          </p>
        </div>

        {/* Cinematic Plant Visual Banner */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl h-80 sm:h-96">
          <img
            src={HERO_IMAGES.plantDawn}
            alt="Vanguard Steel Integrated Mega Plant"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center brightness-90 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">Flagship Manufacturing Nexus</span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">Angul 12.0 MTPA Mega Steel Complex</h3>
              <p className="text-xs text-slate-300 max-w-xl">
                Home to India’s largest 4,500m³ blast furnace, 5-metre wide plate mill, and direct-reduction syngas infrastructure.
              </p>
            </div>
            <div className="shrink-0 px-4 py-2 bg-slate-900/90 border border-slate-700 rounded-lg text-xs font-mono text-slate-200">
              Zero Effluent Discharge Certified
            </div>
          </div>
        </div>

        {/* 6-Step Interactive Mine-to-Metal Process */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">Production Lifecycle</span>
              <h3 className="text-2xl font-bold font-display text-white mt-1">The 6 Stages of Steelmaking Excellence</h3>
            </div>
            <div className="text-xs text-slate-400 font-mono">
              Select any stage to inspect chemical & mechanical processing
            </div>
          </div>

          {/* Stepper Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {MANUFACTURING_STEPS.map((s, idx) => (
              <button
                key={s.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3.5 rounded-xl text-left border transition-all ${
                  activeStepIndex === idx
                    ? 'bg-orange-600/10 border-orange-500 text-white shadow-lg shadow-orange-950/40'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between font-mono text-xs mb-1.5">
                  <span className={activeStepIndex === idx ? 'text-orange-400 font-bold' : 'text-slate-500'}>
                    Stage {s.step}
                  </span>
                </div>
                <div className="text-xs font-semibold font-display line-clamp-1">
                  {s.title.split(':')[0]}
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Details Container */}
          <div className="p-8 bg-slate-900/80 border border-slate-800 rounded-2xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-black font-display text-orange-500">
                  {activeStep.step}
                </span>
                <h4 className="text-2xl font-bold font-display text-white">
                  {activeStep.title}
                </h4>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeStep.summary}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed font-mono pt-1">
                {activeStep.detail}
              </p>
            </div>

            <div className="p-5 bg-slate-950/80 border border-slate-800 rounded-xl space-y-3">
              <div className="text-xs font-mono text-orange-400 uppercase tracking-wider">
                Engineering Benchmark
              </div>
              <div className="text-sm font-semibold text-white">
                {activeStep.stats}
              </div>
              <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Monitored with SCADA 4.0 telemetry</span>
              </div>
            </div>
          </div>
        </div>

        {/* Manufacturing Facilities Tabs / Cards */}
        <div className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">Global Assets</span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">Mega Steel Complexes & Specialized Mills</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLANT_FACILITIES.map((facility) => {
              const isSelected = activeFacilityId === facility.id;
              return (
                <div
                  key={facility.id}
                  onClick={() => setActiveFacilityId(facility.id)}
                  className={`p-6 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between space-y-4 ${
                    isSelected
                      ? 'bg-slate-900 border-orange-500 shadow-xl'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-orange-400">{facility.location}</span>
                      <span className="text-slate-400">{facility.capacity}</span>
                    </div>

                    <h4 className="text-lg font-bold font-display text-white">
                      {facility.name}
                    </h4>

                    <div className="text-xs font-medium text-slate-300">
                      {facility.type}
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {facility.description}
                    </p>

                    <div className="pt-2 space-y-1">
                      <div className="text-[11px] font-mono text-slate-400 uppercase">Key Units:</div>
                      <div className="flex flex-wrap gap-1">
                        {facility.keyUnits.map((unit, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-mono px-2 py-0.5 bg-slate-950 border border-slate-800 rounded text-slate-300"
                          >
                            {unit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 text-xs font-semibold text-orange-400 flex items-center gap-1">
                    <span>Explore facility specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
