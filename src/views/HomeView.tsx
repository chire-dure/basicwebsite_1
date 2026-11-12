import React from 'react';
import { Calendar, Star, CheckCircle, Shield, Award, Users, ChevronRight, Phone } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { specialistsData } from '../data/specialistsData';
import { ServiceCard } from '../components/ServiceCard';
import { BookingForm } from '../components/BookingForm';
import { InsuranceAndPayments } from '../components/InsuranceAndPayments';
import { ClinicBranchesLogistics } from '../components/ClinicBranchesLogistics';

interface HomeViewProps {
  onSelectService: (serviceId: string) => void;
  onNavigateServices: () => void;
  onNavigateTeam: () => void;
  onBookClick: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectService,
  onNavigateServices,
  onNavigateTeam,
  onBookClick
}) => {

  return (
    <div className="bg-[#0b1f31] text-slate-100" style={{ backgroundColor: '#0b1f31' }}>
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#05111D] via-[#081829] to-[#0C2036] text-white overflow-hidden pt-12 pb-24 border-b border-[#BF9B5A]/25">
        {/* Glow and background textures */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-radial from-[#2ABEAA]/12 via-[#BF9B5A]/8 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-10 w-32 h-32 text-6xl opacity-15 select-none animate-float">
          🦷
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#D4B578] uppercase tracking-wider">
              <span className="w-6 h-px bg-[#BF9B5A]" />
              <span>Metro Manila's Premier Dental Destination</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif-luxury font-bold tracking-tight text-white leading-[1.08]">
              Your Smile Deserves <br />
              the <i className="text-[#D4B578] font-normal">Best</i>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Experience world-class dentistry in the heart of Metro Manila. From routine hygiene and dental implants to advanced smile makeovers, your comfort is our priority.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onBookClick}
                className="px-7 py-4 rounded-full bg-[#BF9B5A] text-[#0B1D30] font-bold text-base tracking-wide hover:bg-[#D4B578] transition-all duration-200 shadow-xl shadow-[#BF9B5A]/25 flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Appointment</span>
                <span className="text-[#0B1D30]">→</span>
              </button>

              <button
                onClick={onNavigateServices}
                className="px-7 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 font-medium text-base transition-colors"
              >
                Explore Services (9)
              </button>
            </div>

            {/* Clinic Stats Strip */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-700/60 mt-10">
              <div>
                <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white tabular-nums">
                  2026+
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Happy Smiles</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white tabular-nums">
                  5,000+
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Procedures Completed</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#D4B578] tabular-nums flex items-center gap-1">
                  <span>4.9★</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Google Patient Rating</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white tabular-nums">
                  2
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Makati & QC Clinics</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SHOWCASE SECTION */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#BF9B5A] uppercase tracking-wider mb-2">
              <span className="w-6 h-px bg-[#BF9B5A]" />
              <span>Comprehensive Dental Care</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white">
              Expert Dental Solutions
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              Tailored treatments designed for lasting health and aesthetics, delivered with precision and care. Click any service card to open its dedicated page and view clinical steps.
            </p>
          </div>

          <button
            onClick={onNavigateServices}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#BF9B5A] text-[#D4B578] hover:bg-[#BF9B5A] hover:text-[#0B1D30] font-bold text-xs transition-colors whitespace-nowrap self-start md:self-auto cursor-pointer"
          >
            <span>View All 9 Services Directory</span>
            <span>↗</span>
          </button>
        </div>

        {/* 9 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={onSelectService}
            />
          ))}
        </div>
      </section>

      {/* OUR SPECIALISTS SECTION */}
      <section id="team" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#BF9B5A] uppercase tracking-wider mb-2">
            <span className="w-6 h-px bg-[#BF9B5A]" />
            <span>Our Specialist Team</span>
            <span className="w-6 h-px bg-[#BF9B5A]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white">
            Meet the Experts Behind Your Smile
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            Our team of highly-trained specialists is dedicated to providing pain-free, world-class dental care with empathy and technical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialistsData.map((doc) => (
            <div
              key={doc.id}
              className="bg-[#BF9B5A] rounded-3xl border-2 border-[#D8BC82] p-8 text-center flex flex-col justify-between hover:shadow-2xl hover:shadow-[#BF9B5A]/35 hover:-translate-y-2 transition-all duration-300 group"
              style={{ backgroundColor: '#BF9B5A' }}
            >
              <div>
                <div className="w-20 h-20 rounded-full bg-[#0B1D30] border-2 border-[#D8BC82] flex items-center justify-center text-4xl mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#0B1D30]/20">
                  {doc.avatarEmoji}
                </div>

                <h3 className="text-2xl font-serif-luxury font-bold text-[#0B1D30] group-hover:text-black mb-1 transition-colors">
                  {doc.name}
                </h3>

                <span className="inline-block text-[11px] font-mono-code text-[#0B1D30] font-bold tracking-wider mb-4 bg-[#0B1D30]/15 px-3 py-1 rounded-full">
                  {doc.badge}
                </span>

                <p className="text-xs sm:text-sm text-[#0B1D30]/90 leading-relaxed mb-6 font-normal">
                  {doc.bio}
                </p>
              </div>

              <div className="border-t border-[#0B1D30]/20 pt-4 text-xs text-left">
                <div className="text-[11px] font-mono-code text-[#0B1D30]/80 font-bold mb-1">Credentials:</div>
                <div className="text-xs font-bold text-[#0B1D30] mb-3">{doc.education}</div>
                <div className="flex flex-wrap gap-1">
                  {doc.specialties.map((spec, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-[#0B1D30]/15 text-[#0B1D30] font-semibold text-[10px]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onNavigateTeam}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#BF9B5A] text-[#D4B578] hover:bg-[#BF9B5A] hover:text-[#0B1D30] font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-lg hover:shadow-[#BF9B5A]/25"
          >
            <span>Explore Full Team Credentials, Clinic Standards & HMO Guide</span>
            <span>→</span>
          </button>
        </div>
      </section>

      {/* PATIENT TESTIMONIALS */}
      <section className="py-20 bg-[#0e2438] border-y border-slate-700/60 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-mono-code text-[#D4B578] uppercase tracking-wider block mb-1">
              Patient Experiences
            </span>
            <h3 className="text-3xl font-serif-luxury font-bold text-white">
              Loved by Smiles Across Metro Manila
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#132c44] border border-slate-700/60">
              <div className="flex items-center gap-1 text-[#BF9B5A] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-200 italic mb-4 leading-relaxed">
                "I used to be terrified of dental visits. Dr. Ivan Escudero and his team performed my dental implants completely pain-free. Now I smile with 100% confidence!"
              </p>
              <div className="text-xs font-bold text-[#D4B578]">Camille M. · Makati Patient</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#132c44] border border-slate-700/60">
              <div className="flex items-center gap-1 text-[#BF9B5A] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-200 italic mb-4 leading-relaxed">
                "The cosmetic veneers Dr. Maria Santos made for me look so natural! Everyone compliments my smile without realizing I got dental work done. Exceptional artistry."
              </p>
              <div className="text-xs font-bold text-[#D4B578]">Lorenzo G. · Quezon City Patient</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#132c44] border border-slate-700/60">
              <div className="flex items-center gap-1 text-[#BF9B5A] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-200 italic mb-4 leading-relaxed">
                "Brought my 6-year-old daughter for her first checkup with Dr. Anna Reyes. She was so gentle and playful that my daughter actually asked when we can come back!"
              </p>
              <div className="text-xs font-bold text-[#D4B578]">Beatriz S. · Family Patient</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION (The Clinic Advantage) */}
      <section id="why-us" className="py-24 bg-[#081829] border-b border-slate-700/60 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono-code text-[#2ABEAA] uppercase tracking-wider">
                <span className="w-6 h-px bg-[#2ABEAA]" />
                <span>The Clinic Advantage</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white leading-tight">
                Why Choose <i className="text-[#D4B578]">Your Dental Business?</i>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                We combine artistic precision with medical excellence to provide an unmatched patient experience across Metro Manila.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-[#2ABEAA]/20 text-[#2ABEAA] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">State-of-the-Art Equipment</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Digital panoramic X-rays, 3D intraoral scanners, and advanced soft-tissue laser tech for pinpoint accuracy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-[#BF9B5A]/20 text-[#D4B578] flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">Experienced Specialist Team</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Multiple dental disciplines under one roof—implantology, orthodontics, cosmetics, and endodontics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-[#2ABEAA]/20 text-[#2ABEAA] flex items-center justify-center shrink-0 mt-0.5">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">Patient-First Comfort Philosophy</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Constant comfort checks throughout every procedure, anxiety-free sedation, and clear explanations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-[#BF9B5A]/20 text-[#D4B578] flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">Transparent Care & Estimates</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      No surprise charges. You receive a complete treatment roadmap with itemized costs before any work begins.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Trust Showcase */}
            <div className="lg:col-span-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/15 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6 text-center flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center text-center border-b border-white/10 pb-5 w-full">
                <div className="w-14 h-14 rounded-2xl bg-[#BF9B5A]/20 flex items-center justify-center text-3xl mx-auto mb-3 shadow-inner">
                  ✨
                </div>
                <span className="text-xs font-mono-code text-[#D4B578] uppercase tracking-wider block">
                  Clinic Standards
                </span>
                <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-white mt-1 text-center">
                  Uncompromising Sterilization & Safety
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-center max-w-md mx-auto">
                Our clinics follow hospital-grade autoclave sterilization protocols. Each instrument is individually sealed, tracked, and opened in front of the patient.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 w-full max-w-md mx-auto text-center">
                <div className="bg-[#0B1D30]/80 p-4 rounded-2xl border border-white/10 text-center flex flex-col items-center justify-center">
                  <div className="text-2xl font-serif-luxury font-bold text-[#D4B578]">100%</div>
                  <div className="text-xs text-slate-300 mt-0.5">Autoclaved & Monitored</div>
                </div>
                <div className="bg-[#0B1D30]/80 p-4 rounded-2xl border border-white/10 text-center flex flex-col items-center justify-center">
                  <div className="text-2xl font-serif-luxury font-bold text-[#2ABEAA]">0 Phobia</div>
                  <div className="text-xs text-slate-300 mt-0.5">Gentle Care Protocol</div>
                </div>
              </div>

              <div className="pt-2 w-full max-w-md mx-auto flex justify-center">
                <button
                  onClick={onBookClick}
                  className="w-full py-3.5 rounded-full bg-[#BF9B5A] text-[#0B1D30] font-bold text-xs uppercase tracking-wider hover:bg-[#D4B578] transition-colors text-center cursor-pointer shadow-lg shadow-[#BF9B5A]/20"
                >
                  Schedule Your First Visit ↗
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCREDITED HMO INSURANCE & 0% PAYMENT PLANS */}
      <InsuranceAndPayments />

      {/* CLINIC HOURS, BRANCH LOCATIONS & PARKING / COMMUTE LOGISTICS */}
      <ClinicBranchesLogistics />

      {/* APPOINTMENT BOOKING SECTION */}
      <section id="book" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column Booking Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#BF9B5A] uppercase tracking-wider">
              <span className="w-6 h-px bg-[#BF9B5A]" />
              <span>Your Next Chapter Starts Here</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white leading-tight">
              Let’s Make Room for a <i className="text-[#D4B578]">Brighter Smile.</i>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Tell us a little about yourself and the care you’re looking for. Our team will follow up to help arrange a visit that works for you.
            </p>

            <div className="space-y-3 pt-2 bg-[#081829] rounded-2xl p-4 border border-slate-700/80 shadow-inner">
              <div className="flex items-center gap-3 text-sm text-white">
                <CheckCircle className="w-4 h-4 text-[#2ABEAA] shrink-0" />
                <span className="text-white font-medium">Personalised appointment assistance</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white">
                <CheckCircle className="w-4 h-4 text-[#2ABEAA] shrink-0" />
                <span className="text-white font-medium">Flexible scheduling, Monday to Saturday</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white">
                <CheckCircle className="w-4 h-4 text-[#2ABEAA] shrink-0" />
                <span className="text-white font-medium">Choose your preferred branch and service</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white">
                <CheckCircle className="w-4 h-4 text-[#2ABEAA] shrink-0" />
                <span className="text-white font-medium">Friendly support before your first visit</span>
              </div>
            </div>

            {/* Prefer to call card */}
            <div className="p-5 rounded-2xl bg-[#081829] border border-slate-700/70 text-white flex items-center gap-4 mt-6">
              <div className="w-12 h-12 rounded-xl bg-[#BF9B5A]/20 flex items-center justify-center text-xl text-[#D4B578] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-200">Prefer to call us directly?</div>
                <a
                  href="tel:09626292510"
                  className="text-lg font-serif-luxury font-bold text-[#D4B578] hover:text-white hover:underline transition-colors"
                >
                  0962 629 2510
                </a>
              </div>
            </div>
          </div>

          {/* Right Column Booking Form Card */}
          <div className="lg:col-span-7">
            <BookingForm />
          </div>
        </div>
      </section>
    </div>
  );
};
