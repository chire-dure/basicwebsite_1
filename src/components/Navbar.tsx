import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigateHome: () => void;
  onNavigateServices: () => void;
  onNavigateTeam: () => void;
  onBookClick: () => void;
  onSelectService: (serviceId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigateHome,
  onNavigateServices,
  onNavigateTeam,
  onBookClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (action: () => void) => {
    action();
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0B1D30]/95 backdrop-blur-md border-b border-[#BF9B5A]/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNav(onNavigateHome)}
            className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BF9B5A]"
            aria-label="Go to homepage"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#132840] to-[#0B1D30] border border-[#BF9B5A]/30 flex items-center justify-center text-xl shadow-sm group-hover:border-[#BF9B5A] transition-colors">
              🦷
            </div>
            <div className="text-xl font-bold font-serif-luxury tracking-wide text-white whitespace-nowrap">
              YOUR <span className="text-[#D4B578]">DENTAL</span>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-200">
            <button
              onClick={() => handleNav(onNavigateHome)}
              className={`hover:text-[#D4B578] transition-colors whitespace-nowrap py-1 ${
                currentView === 'home' ? 'text-[#D4B578] font-semibold' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNav(onNavigateServices)}
              className={`hover:text-[#D4B578] transition-colors whitespace-nowrap py-1 ${
                currentView === 'services' || currentView === 'service-detail'
                  ? 'text-[#D4B578] font-semibold'
                  : ''
              }`}
            >
              Services
            </button>
            <button
              onClick={() => handleNav(onNavigateTeam)}
              className={`hover:text-[#D4B578] transition-colors whitespace-nowrap py-1 cursor-pointer ${
                currentView === 'team' ? 'text-[#D4B578] font-semibold' : ''
              }`}
            >
              Our Team
            </button>
          </nav>

          {/* Zone 3: Primary Action CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={onBookClick}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#BF9B5A] text-[#0B1D30] font-bold text-sm tracking-wide hover:bg-[#D4B578] hover:shadow-lg hover:shadow-[#BF9B5A]/20 transition-all duration-200 active:scale-95 whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Mobile menu toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#BF9B5A]/20 bg-[#0B1D30] px-4 pt-3 pb-6 space-y-3">
          <button
            onClick={() => handleNav(onNavigateHome)}
            className="w-full text-left py-2 px-3 rounded-lg text-slate-200 hover:bg-white/5 hover:text-[#D4B578] font-medium"
          >
            Home
          </button>
          <button
            onClick={() => handleNav(onNavigateServices)}
            className="w-full text-left py-2 px-3 rounded-lg text-slate-200 hover:bg-white/5 hover:text-[#D4B578] font-medium"
          >
            All Services Directory (9 Services)
          </button>
          <button
            onClick={() => handleNav(onNavigateTeam)}
            className={`w-full text-left py-2 px-3 rounded-lg font-medium transition-colors ${
              currentView === 'team'
                ? 'bg-[#BF9B5A]/20 text-[#D4B578] font-semibold'
                : 'text-slate-200 hover:bg-white/5 hover:text-[#D4B578]'
            }`}
          >
            Our Specialists & Clinical Standards
          </button>
          <div className="pt-2 border-t border-slate-700/50 flex flex-col gap-2">
            <a
              href="tel:09626292510"
              className="w-full text-center py-2.5 px-4 rounded-xl border border-[#BF9B5A]/40 text-[#D4B578] font-medium text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Clinic: 0962 629 2510
            </a>
            <button
              onClick={() => handleNav(onBookClick)}
              className="w-full py-2.5 px-4 rounded-xl bg-[#BF9B5A] text-[#0B1D30] font-bold text-sm text-center flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
