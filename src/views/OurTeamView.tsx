import React from 'react';
import { ArrowLeft, Users, Shield, CheckCircle, Award, Star, Phone, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { specialistsData } from '../data/specialistsData';
import { InsuranceAndPayments } from '../components/InsuranceAndPayments';
import { BookingForm } from '../components/BookingForm';

interface OurTeamViewProps {
  onBackToHome: () => void;
  onNavigateServices: () => void;
  onBookClick: () => void;
  onSelectService: (serviceId: string) => void;
}

export const OurTeamView: React.FC<OurTeamViewProps> = ({
  onBackToHome,
  onNavigateServices,
  onBookClick,
  onSelectService
}) => {
  return (
    <div className="bg-[#0b1f31] text-slate-100 min-h-screen">
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
            <span className="text-[#D4B578] font-semibold">Our Team & Clinical Standards</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#team"
              className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#BF9B5A] text-slate-300 hover:text-[#D4B578] transition-colors"
            >
              Specialists
            </a>
            <a
              href="#why-us"
              className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#BF9B5A] text-slate-300 hover:text-[#D4B578] transition-colors"
            >
              Why Choose Us
            </a>
            <a
              href="#hmo-insurance"
              className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#BF9B5A] text-slate-300 hover:text-[#D4B578] transition-colors"
            >
              HMO & 0% Plans
            </a>
            <button
              onClick={onBookClick}
              className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-[#BF9B5A] text-[#0B1D30] hover:bg-[#D4B578] transition-colors shadow-sm ml-1"
            >
              Book Visit
            </button>
          </div>
        </div>
      </div>

      {/* HERO BANNER FOR OUR TEAM PAGE */}
      <section className="relative bg-gradient-to-b from-[#05111D] via-[#081829] to-[#0b1f31] pt-14 pb-16 border-b border-[#BF9B5A]/20 overflow-hidden">
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#BF9B5A]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#D4B578] uppercase tracking-wider">
              <span className="w-6 h-px bg-[#BF9B5A]" />
              <span>World-Class Dental Specialists</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold text-white tracking-tight leading-tight">
              Meet the Masters Behind Your <i className="text-[#D4B578] font-normal">Confidence</i>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Led by Dr. Ivan Mark Escudero, our multi-disciplinary team brings together decades of post-graduate surgical, cosmetic, and pediatric mastery under strict hospital-grade sterilization standards.
            </p>
          </div>
        </div>
      </section>

      {/* 1. SECTION: OUR SPECIALISTS (GOLD CARDS) */}
      <section id="team" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#BF9B5A] uppercase tracking-wider mb-2">
            <span className="w-6 h-px bg-[#BF9B5A]" />
            <span>Dedicated Practitioners</span>
            <span className="w-6 h-px bg-[#BF9B5A]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white">
            Specialist Dental Practitioners
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            Each doctor focuses deeply on their certified area of expertise, guaranteeing you receive the highest standard of modern clinical care.
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
                <div className="w-24 h-24 rounded-full bg-[#0B1D30] border-2 border-[#D8BC82] flex items-center justify-center text-5xl mx-auto mb-6 group-hover:scale-105 transition-transform shadow-xl shadow-[#0B1D30]/25">
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
                <div className="text-[11px] font-mono-code text-[#0B1D30]/80 font-bold mb-1">Credentials & Education:</div>
                <div className="text-xs font-bold text-[#0B1D30] mb-3">{doc.education}</div>

                <div className="text-[11px] font-mono-code text-[#0B1D30]/80 font-bold mb-1.5">Specialties:</div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {doc.specialties.map((spec, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-[#0B1D30]/15 text-[#0B1D30] font-semibold text-[10px]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <button
                  onClick={onBookClick}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#0B1D30] text-[#D4B578] hover:text-white font-bold text-xs uppercase tracking-wider transition-colors text-center cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book with {doc.name.split(' ')[1]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. SECTION: WHY CHOOSE US & CLINICAL STANDARDS */}
      <section id="why-us" className="py-24 bg-[#081829] border-y border-slate-700/60 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono-code text-[#2ABEAA] uppercase tracking-wider">
                <span className="w-6 h-px bg-[#2ABEAA]" />
                <span>The Clinic Advantage</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white leading-tight">
                Why Choose <i className="text-[#D4B578]">Our Dental Team?</i>
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
                  Schedule Your Consultation ↗
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION: ACCREDITED HMO INSURANCE & 0% PAYMENT PLANS */}
      <InsuranceAndPayments />

      {/* 4. SECTION: APPOINTMENT BOOKING WITH OUR TEAM */}
      <section id="book" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#BF9B5A] uppercase tracking-wider">
              <span className="w-6 h-px bg-[#BF9B5A]" />
              <span>Reserve With Our Specialists</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white leading-tight">
              Begin Your Journey to a <i className="text-[#D4B578]">Flawless Smile.</i>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Choose your preferred doctor, select your dental treatment, and let our front desk concierge confirm your appointment and coordinate your HMO clearance or 0% installment plan.
            </p>

            <div className="space-y-3 pt-2 bg-[#081829] rounded-2xl p-4 border border-slate-700/80 shadow-inner">
              <div className="flex items-center gap-3 text-sm text-white">
                <CheckCircle className="w-4 h-4 text-[#2ABEAA] shrink-0" />
                <span className="text-white font-medium">Direct specialist consultation</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white">
                <CheckCircle className="w-4 h-4 text-[#2ABEAA] shrink-0" />
                <span className="text-white font-medium">HMO Letter of Authorization (LOA) assistance</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white">
                <CheckCircle className="w-4 h-4 text-[#2ABEAA] shrink-0" />
                <span className="text-white font-medium">0% Credit card installment terms at reception</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#081829] border border-slate-700/70 text-white flex items-center gap-4 mt-6">
              <div className="w-12 h-12 rounded-xl bg-[#BF9B5A]/20 flex items-center justify-center text-xl text-[#D4B578] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-200">Have questions for our team?</div>
                <a
                  href="tel:09626292510"
                  className="text-lg font-serif-luxury font-bold text-[#D4B578] hover:text-white hover:underline transition-colors"
                >
                  0962 629 2510
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <BookingForm />
          </div>
        </div>
      </section>
    </div>
  );
};
