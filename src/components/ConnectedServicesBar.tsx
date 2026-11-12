import React, { useState } from 'react';
import { Search, Sparkles, ChevronRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { ServiceCategory } from '../types/service';

interface ConnectedServicesBarProps {
  currentServiceId?: string;
  onSelectService: (serviceId: string) => void;
  title?: string;
  subtitle?: string;
  condensed?: boolean;
}

export const ConnectedServicesBar: React.FC<ConnectedServicesBarProps> = ({
  currentServiceId,
  onSelectService,
  title = 'Connected Clinic Services',
  subtitle = 'Instantly explore and load our 9 specialized treatments',
  condensed = false
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories: string[] = [
    'All',
    'Preventive Care',
    'Aesthetic & Smile',
    'Restorative & Surgical',
    'Comfort & Specialized'
  ];

  const filteredServices = servicesData.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.procedures.some((p) => p.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory =
      selectedCategory === 'All' || service.category === (selectedCategory as ServiceCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-[#132840] border border-[#BF9B5A]/25 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#2ABEAA]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#BF9B5A]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header and Live Status */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-700/60">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono-code text-[#D4B578] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Service Hub · {servicesData.length} Current Services Loaded</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white">
            {title}
          </h2>
          <p className="text-sm text-slate-300 mt-1 max-w-xl">
            {subtitle}
          </p>
        </div>

        {/* Quick Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search treatments, e.g. whitening, implants..."
            className="w-full bg-[#0B1D30] border border-slate-700 focus:border-[#BF9B5A] rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Category Filter Buttons */}
      {!condensed && (
        <div className="relative z-10 flex items-center gap-2 overflow-x-auto py-4 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#BF9B5A] text-[#0B1D30] font-bold shadow-sm'
                  : 'bg-[#0B1D30]/60 text-slate-300 hover:text-white hover:bg-[#0B1D30] border border-slate-700/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Service Switcher Grid / Strip */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
        {filteredServices.map((service) => {
          const isActive = currentServiceId === service.id;
          return (
            <button
              key={service.id}
              onClick={() => onSelectService(service.id)}
              className={`group text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between gap-3 ${
                isActive
                  ? 'bg-[#BF9B5A]/20 border-[#BF9B5A] text-white ring-1 ring-[#BF9B5A]'
                  : 'bg-[#0B1D30]/80 hover:bg-[#0B1D30] border-slate-700/70 hover:border-[#BF9B5A]/60 text-slate-200 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-2xl p-1.5 rounded-lg bg-white/5 group-hover:scale-110 transition-transform">
                  {service.emoji}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-semibold truncate group-hover:text-[#D4B578] transition-colors">
                      {service.title}
                    </h4>
                    {isActive && (
                      <span className="text-[10px] font-mono-code uppercase px-1.5 py-0.5 rounded bg-[#BF9B5A] text-[#0B1D30] font-bold shrink-0">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 truncate">
                    {service.subtitle}
                  </p>
                </div>
              </div>
              <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                isActive ? 'text-[#BF9B5A] translate-x-1' : 'text-slate-500 group-hover:text-slate-300 group-hover:translate-x-0.5'
              }`} />
            </button>
          );
        })}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-8 text-slate-400 text-sm">
          No services match "{searchTerm}". Try another keyword or reset the category.
        </div>
      )}
    </div>
  );
};
