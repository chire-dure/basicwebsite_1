import React, { useState } from 'react';
import { ArrowLeft, Search, Sparkles, Filter } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { ServiceCategory } from '../types/service';
import { ServiceCard } from '../components/ServiceCard';

interface ServicesDirectoryViewProps {
  onBackToHome: () => void;
  onSelectService: (serviceId: string) => void;
  onBookClick: () => void;
}

export const ServicesDirectoryView: React.FC<ServicesDirectoryViewProps> = ({
  onBackToHome,
  onSelectService,
  onBookClick
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Preventive Care',
    'Aesthetic & Smile',
    'Restorative & Surgical',
    'Comfort & Specialized'
  ];

  const filteredServices = servicesData.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.procedures.some((p) => p.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory =
      selectedCategory === 'All' || service.category === (selectedCategory as ServiceCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#0b1f31] text-slate-100" style={{ backgroundColor: '#0b1f31' }}>
      {/* TOP HEADER / BREADCRUMB STRIP */}
      <div className="bg-[#061523] border-b border-slate-700/60 sticky top-20 z-30 backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs sm:text-sm">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#D4B578] font-medium transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-[#D4B578] font-semibold">Services Directory (9 Treatments)</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1.5">
              {categories.slice(0, 4).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#BF9B5A] text-[#0B1D30] font-bold'
                      : 'bg-white/5 border border-white/10 text-slate-300 hover:text-[#D4B578] hover:border-[#BF9B5A]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <button
              onClick={onBookClick}
              className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-[#BF9B5A] text-[#0B1D30] hover:bg-[#D4B578] transition-colors shadow-sm ml-1 cursor-pointer"
            >
              Book Visit
            </button>
          </div>
        </div>
      </div>

      {/* Directory Header Banner */}
      <header className="bg-[#081829] text-white py-14 sm:py-16 border-b border-[#BF9B5A]/25 relative overflow-hidden">
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#2ABEAA]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#BF9B5A]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#D4B578] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Comprehensive Dental Portfolio · {servicesData.length} Active Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold text-white leading-tight">
              Thoughtful care for every kind of smile.
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Explore our dental services and learn what you can discuss with your dentist. Click any service to open its dedicated page with procedure details, clinical steps, and appointment scheduling.
            </p>
          </div>

          {/* Search and Category Control Bar */}
          <div className="mt-10 pt-8 border-t border-slate-700/60 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search treatments, keywords, procedures..."
                className="w-full bg-[#061624] border border-slate-700 focus:border-[#BF9B5A] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none transition-colors"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0 mr-1" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#BF9B5A] text-[#0B1D30] font-bold'
                      : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Services Grid Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between text-xs text-slate-300 mb-8 pb-4 border-b border-slate-700/60">
          <span>
            Showing <strong className="text-white font-bold">{filteredServices.length}</strong> of{' '}
            {servicesData.length} services
          </span>
        </div>

        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelect={onSelectService}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#EEE5D8] p-8">
            <div className="text-4xl mb-3">🔍</div>
            <h3 className="text-xl font-serif-luxury font-bold text-[#0B1D30] mb-2">
              No matching services found
            </h3>
            <p className="text-xs text-[#6B7E8F] max-w-md mx-auto mb-6">
              We couldn't find any dental service matching "{searchTerm}". Try clearing your search or switching categories.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="px-5 py-2.5 rounded-full bg-[#0B1D30] text-white text-xs font-bold hover:bg-[#132840] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Booking Promotion Card */}
        <div className="mt-16 bg-[#132840] rounded-3xl p-8 sm:p-12 text-white border border-[#BF9B5A]/30 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-xl">
            <span className="text-xs font-mono-code text-[#D4B578] uppercase tracking-wider block mb-2">
              Unsure which treatment is right for you?
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white mb-2">
              Let our dentists examine and recommend the ideal care plan.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Schedule a comprehensive examination at our Makati or Quezon City branch. We take the time to listen, diagnose, and explain every option transparently.
            </p>
          </div>
          <button
            onClick={onBookClick}
            className="px-6 py-3.5 rounded-full bg-[#BF9B5A] text-[#0B1D30] font-bold text-sm tracking-wide hover:bg-[#D4B578] transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            Book a General Checkup ↗
          </button>
        </div>
      </main>
    </div>
  );
};
