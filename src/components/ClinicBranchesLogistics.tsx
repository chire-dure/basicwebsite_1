import React, { useState } from 'react';
import { MapPin, Clock, Car, Navigation, Phone, ExternalLink, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';

interface BranchInfo {
  id: string;
  name: string;
  city: string;
  badge: string;
  address: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  phone: string;
  parking: string[];
  transit: string[];
  googleMapsUrl: string;
  wazeUrl: string;
}

export const ClinicBranchesLogistics: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'makati' | 'qc'>('all');

  const branches: BranchInfo[] = [
    {
      id: 'makati',
      name: 'Makati Central Flagship Clinic',
      city: 'Makati City',
      badge: 'Flagship Suite',
      address: 'Unit 402, Ayala Triangle Towers, Paseo de Roxas, Makati City, Metro Manila',
      hours: {
        weekdays: 'Monday – Friday: 9:00 AM – 7:00 PM',
        saturday: 'Saturday: 9:00 AM – 6:00 PM',
        sunday: 'Sunday: By Appointment (Emergency Care)'
      },
      phone: '0962 629 2510',
      parking: [
        '3 Levels of safe, monitored basement parking (Basement 1 & 2)',
        '2-Hour Free Parking Validation stamped at clinic reception',
        'Direct elevator access from B2 lobby straight to clinic 4th floor'
      ],
      transit: [
        '7-minute covered scenic walk from Ayala MRT-3 Station & One Ayala Terminal',
        'Designated Grab / Taxi pickup and drop-off bay at Paseo entrance lobby',
        'Wheelchair and stroller ramp accessible entrance'
      ],
      googleMapsUrl: 'https://maps.google.com/?q=Ayala+Triangle+Makati',
      wazeUrl: 'https://waze.com/ul?q=Ayala%20Triangle%20Makati'
    },
    {
      id: 'qc',
      name: 'Quezon City North Clinic',
      city: 'Diliman, Quezon City',
      badge: 'North Metro Suite',
      address: '2nd Floor, Grand Morato Building, Tomas Morato Ave cor Scout Gandia, Diliman, Quezon City',
      hours: {
        weekdays: 'Monday – Friday: 9:30 AM – 6:30 PM',
        saturday: 'Saturday: 9:30 AM – 6:00 PM',
        sunday: 'Sunday: Closed for Medical Autoclave Sanitization'
      },
      phone: '0962 629 2510',
      parking: [
        'Dedicated street-level ground floor parking slots reserved for dental patients',
        'Full-time building security guard assists with parking guidance',
        'Direct street access to building lobby elevator'
      ],
      transit: [
        'Easily accessible from Quezon Avenue MRT Station & E. Rodriguez jeepney routes',
        'Exact Grab & Waze pinned location: "Grand Morato Building"',
        'Surrounded by cafes, pharmacies, and dining for waiting family members'
      ],
      googleMapsUrl: 'https://maps.google.com/?q=Tomas+Morato+Quezon+City',
      wazeUrl: 'https://waze.com/ul?q=Tomas%20Morato%20Quezon%20City'
    }
  ];

  const displayedBranches =
    activeTab === 'all'
      ? branches
      : branches.filter((b) => b.id === activeTab);

  return (
    <section id="branches-logistics" className="py-24 bg-[#071524] border-b border-slate-700/60 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#BF9B5A]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#D4B578] uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#BF9B5A]" />
            <span>Clinic Hours, Locations & Commute Logistics</span>
            <MapPin className="w-3.5 h-3.5 text-[#BF9B5A]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white leading-tight">
            Visit Our Metro Manila Clinics
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Thoughtfully located across Metro Manila with reserved patient parking, 2-hour validations, covered elevator access, and rapid public transit connections.
          </p>

          {/* Filter Tabs */}
          <div className="inline-flex items-center gap-1.5 p-1 bg-[#0B1D30] border border-slate-700/80 rounded-2xl mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-[#BF9B5A] text-[#0B1D30]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              All 2 Locations
            </button>
            <button
              onClick={() => setActiveTab('makati')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'makati'
                  ? 'bg-[#BF9B5A] text-[#0B1D30]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Makati Central
            </button>
            <button
              onClick={() => setActiveTab('qc')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'qc'
                  ? 'bg-[#BF9B5A] text-[#0B1D30]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Quezon City North
            </button>
          </div>
        </div>

        {/* Branch Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {displayedBranches.map((branch) => (
            <div
              key={branch.id}
              className="bg-[#0B1D30] rounded-3xl border border-[#BF9B5A]/30 p-7 sm:p-9 shadow-xl flex flex-col justify-between hover:border-[#BF9B5A]/60 transition-all duration-300"
            >
              <div>
                {/* Top Badge & City */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#D4B578] bg-[#BF9B5A]/15 px-3 py-1 rounded-full border border-[#BF9B5A]/30">
                    {branch.badge}
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Open Mon – Sat</span>
                  </span>
                </div>

                {/* Branch Name & Address */}
                <h3 className="text-2xl font-serif-luxury font-bold text-white mb-2">
                  {branch.name}
                </h3>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                  <MapPin className="w-4 h-4 text-[#BF9B5A] shrink-0 mt-0.5" />
                  <span>{branch.address}</span>
                </div>

                {/* Operating Hours Box */}
                <div className="p-4 rounded-2xl bg-[#061523] border border-slate-700/70 mb-6">
                  <div className="flex items-center gap-2 text-xs font-mono-code text-[#D4B578] font-bold uppercase tracking-wider mb-2.5">
                    <Clock className="w-3.5 h-3.5 text-[#BF9B5A]" />
                    <span>Operating Hours</span>
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-200">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Weekdays:</span>
                      <span className="font-semibold text-white">{branch.hours.weekdays.replace('Monday – Friday: ', '')}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Saturdays:</span>
                      <span className="font-semibold text-white">{branch.hours.saturday.replace('Saturday: ', '')}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Sundays:</span>
                      <span className="text-[#D4B578]">{branch.hours.sunday.replace('Sunday: ', '')}</span>
                    </div>
                  </div>
                </div>

                {/* Parking Guide */}
                <div className="space-y-2 mb-5">
                  <div className="flex items-center gap-2 text-xs font-mono-code text-[#2ABEAA] font-bold uppercase tracking-wider">
                    <Car className="w-3.5 h-3.5" />
                    <span>Parking & Valet Access</span>
                  </div>
                  {branch.parking.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2ABEAA] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Transit & Commute */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs font-mono-code text-[#D4B578] font-bold uppercase tracking-wider">
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Commute & Transit Directions</span>
                  </div>
                  {branch.transit.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#BF9B5A] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action CTAs: Maps, Waze, Call */}
              <div className="pt-5 border-t border-slate-700/80 flex flex-wrap items-center gap-2.5">
                <a
                  href={branch.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 min-w-[130px] py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors border border-white/10"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#BF9B5A]" />
                  <span>Google Maps ↗</span>
                </a>

                <a
                  href={branch.wazeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 min-w-[110px] py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors border border-white/10"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#2ABEAA]" />
                  <span>Waze Pin ↗</span>
                </a>

                <a
                  href={`tel:${branch.phone.replace(/\s+/g, '')}`}
                  className="py-2.5 px-3.5 rounded-xl bg-[#BF9B5A] text-[#0B1D30] font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-[#D4B578] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Branch</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 24/7 Dental Emergency On-Call Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#12283E] via-[#0B1D30] to-[#0A1A2A] border border-[#BF9B5A]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl shrink-0 border border-amber-500/30">
              🚨
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-lg font-serif-luxury font-bold text-white">
                  Dental Emergency or Severe Toothache?
                </h4>
                <span className="text-[10px] font-mono-code uppercase font-bold text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/30">
                  Priority On-Call
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                If you have experienced sudden trauma, severe facial swelling, or knocked-out permanent teeth outside standard hours, our dental team responds directly on Viber and WhatsApp.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:09626292510"
              className="px-5 py-3 rounded-full bg-[#BF9B5A] text-[#0B1D30] font-bold text-xs uppercase tracking-wider hover:bg-[#D4B578] transition-all flex items-center gap-2 shadow-lg shadow-[#BF9B5A]/20"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call 0962 629 2510</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
