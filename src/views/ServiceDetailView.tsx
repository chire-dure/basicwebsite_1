import React, { useEffect, useRef, useState } from 'react';
import { 
  CheckCircle, 
  Clock, 
  UserCheck, 
  Sparkles, 
  HelpCircle, 
  ChevronDown, 
  ShieldCheck, 
  HeartPulse, 
  CheckCircle2,
  Calendar,
  Image as ImageIcon,
  BarChart3,
  Layers,
  ArrowLeft
} from 'lucide-react';
import { ServiceItem } from '../types/service';
import { BookingForm } from '../components/BookingForm';

interface ServiceDetailViewProps {
  service: ServiceItem;
  onBackToHome: () => void;
  onNavigateServices: () => void;
  onSelectService: (serviceId: string) => void;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  service,
  onBackToHome,
  onNavigateServices,
  onSelectService
}) => {
  const bookingRef = useRef<HTMLDivElement>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [visualMode, setVisualMode] = useState<'photo' | 'specs' | 'minimal'>('photo');

  // Scroll to top when service changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setOpenFaqIndex(0);
  }, [service.id]);

  const scrollToBooking = () => {
    if (bookingRef.current) {
      bookingRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0b1f31] text-slate-100 flex flex-col selection:bg-[#BF9B5A]/30">
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
            <button
              onClick={onNavigateServices}
              className="text-slate-300 hover:text-[#D4B578] font-medium transition-colors cursor-pointer"
            >
              Services
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-[#D4B578] font-semibold truncate max-w-[180px] sm:max-w-none">{service.title}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onNavigateServices}
              className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#BF9B5A] text-slate-300 hover:text-[#D4B578] transition-colors cursor-pointer"
            >
              All 9 Services
            </button>
            <button
              onClick={scrollToBooking}
              className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-[#BF9B5A] text-[#0B1D30] hover:bg-[#D4B578] transition-colors shadow-sm ml-1 cursor-pointer"
            >
              Book This Service
            </button>
          </div>
        </div>
      </div>

      {/* HERO SECTION matching original zip layout */}
      <header className="relative bg-[#081829] text-white py-16 sm:py-24 border-b border-slate-700/60 overflow-hidden">
        {/* Subtle grid and ambient backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(42,190,170,0.12),transparent_35%),radial-gradient(circle_at_5%_90%,rgba(191,155,90,0.12),transparent_38%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 text-xs font-mono-code text-[#D4B578] uppercase tracking-wider">
                <span className="w-7 h-[1px] bg-[#BF9B5A]" />
                <span>Personalized dental care</span>
              </div>

              {/* H1 with italic gold styling */}
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold text-white leading-[1.08] tracking-tight [&_em]:text-[#D4B578] [&_em]:font-normal [&_em]:not-italic"
                dangerouslySetInnerHTML={{
                  __html: service.h1Html || service.subtitle || service.title
                }}
              />

              {/* Intro text from original zip */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl">
                {service.intro}
              </p>

              {/* Quick Spec Tags */}
              <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-slate-300">
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                  <Clock className="w-3.5 h-3.5 text-[#D4B578]" />
                  <span>{service.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                  <UserCheck className="w-3.5 h-3.5 text-[#2ABEAA]" />
                  <span>Lead Specialist: {service.specialistName}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4B578]" />
                  <span>Hospital-Grade Sterilization</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={scrollToBooking}
                  className="px-7 py-3.5 rounded-full bg-[#BF9B5A] text-[#0B1D30] font-bold text-xs uppercase tracking-wider hover:bg-[#D4B578] hover:-translate-y-0.5 transition-all shadow-lg shadow-[#BF9B5A]/20 cursor-pointer"
                >
                  Request a Consultation ↗
                </button>
                <button
                  onClick={onNavigateServices}
                  className="px-6 py-3.5 rounded-full border border-white/30 text-white font-medium text-xs hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Explore All 9 Services
                </button>
              </div>
            </div>

            {/* Right Showcase Component (Upgraded from Template Placeholder) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              {/* Component Mode Switcher Pill */}
              <div className="flex items-center gap-1 bg-[#061624] p-1 rounded-full border border-slate-700/80 mb-3 text-[11px] font-mono-code">
                <button
                  onClick={() => setVisualMode('photo')}
                  className={`px-3 py-1 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                    visualMode === 'photo'
                      ? 'bg-[#BF9B5A] text-[#0B1D30] font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Real clinical and aesthetic photography"
                >
                  <ImageIcon className="w-3 h-3" />
                  <span>Clinical Photo</span>
                </button>
                <button
                  onClick={() => setVisualMode('specs')}
                  className={`px-3 py-1 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                    visualMode === 'specs'
                      ? 'bg-[#BF9B5A] text-[#0B1D30] font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Treatment clinical specification metrics"
                >
                  <BarChart3 className="w-3 h-3" />
                  <span>Clinical Specs</span>
                </button>
                <button
                  onClick={() => setVisualMode('minimal')}
                  className={`px-3 py-1 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                    visualMode === 'minimal'
                      ? 'bg-[#BF9B5A] text-[#0B1D30] font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Original starter template graphic"
                >
                  <Layers className="w-3 h-3" />
                  <span>Template Art</span>
                </button>
              </div>

              {/* Main Showcase Box */}
              <div className="w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 p-6 sm:p-8 flex flex-col items-center justify-center relative shadow-2xl overflow-hidden group">
                {/* Concentric Golden Rings */}
                <div className="absolute w-64 h-64 rounded-full border border-[#BF9B5A]/35 shadow-[0_0_0_28px_rgba(191,155,90,0.04),0_0_0_56px_rgba(191,155,90,0.03)] pointer-events-none" />

                {visualMode === 'photo' && (
                  <div className="relative w-full h-full rounded-2xl overflow-hidden flex flex-col justify-between p-4 border border-white/15 shadow-inner">
                    {/* Background Treatment Image */}
                    <img 
                      src={service.imageUrl || 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80'} 
                      alt={service.title} 
                      className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.78] contrast-105 group-hover:scale-105 transition-transform duration-700 pointer-events-none" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D30] via-[#0B1D30]/40 to-transparent pointer-events-none" />

                    {/* Top Floating Badge */}
                    <div className="relative z-10 self-start bg-[#0B1D30]/85 backdrop-blur-md border border-[#BF9B5A]/40 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#2ABEAA]" />
                      <span className="text-[10px] font-mono-code text-[#D4B578] uppercase font-bold tracking-wider">
                        {service.badgeLabel || 'PDA Accredited Protocol'}
                      </span>
                    </div>

                    {/* Bottom Floating Info Pill */}
                    <div className="relative z-10 bg-[#0B1D30]/90 backdrop-blur-md border border-white/15 rounded-xl p-3.5 shadow-xl w-full">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-white font-bold font-serif-luxury text-sm">{service.title}</span>
                        <span className="text-[11px] text-[#D4B578] font-mono-code">{service.duration}</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-tight">
                        Lead: <strong className="text-white">{service.specialistName}</strong> · {service.specialistTitle}
                      </p>
                    </div>
                  </div>
                )}

                {visualMode === 'specs' && (
                  <div className="relative z-10 w-full h-full flex flex-col justify-between p-4 bg-[#0e2438]/90 backdrop-blur-md rounded-2xl border border-slate-700/80">
                    <div>
                      <div className="flex items-center justify-between border-b border-slate-700/60 pb-2 mb-3">
                        <span className="text-xs font-mono-code text-[#D4B578] uppercase font-bold tracking-wider">
                          Clinical Key Metrics
                        </span>
                        <span className="text-lg">{service.emoji}</span>
                      </div>
                      
                      <div className="space-y-2.5 text-xs">
                        <div className="flex items-center justify-between bg-white/5 p-2 rounded-lg">
                          <span className="text-slate-400">Duration</span>
                          <span className="font-semibold text-white">{service.duration}</span>
                        </div>
                        <div className="flex items-center justify-between bg-white/5 p-2 rounded-lg">
                          <span className="text-slate-400">Target Category</span>
                          <span className="font-semibold text-[#D4B578]">{service.category}</span>
                        </div>
                        <div className="flex items-center justify-between bg-white/5 p-2 rounded-lg">
                          <span className="text-slate-400">Comfort Level</span>
                          <span className="font-semibold text-[#2ABEAA]">Topical / Pain-Free</span>
                        </div>
                        <div className="flex items-center justify-between bg-white/5 p-2 rounded-lg">
                          <span className="text-slate-400">Sterilization</span>
                          <span className="font-semibold text-white">Class-B Autoclave</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#BF9B5A]/15 border border-[#BF9B5A]/30 p-2.5 rounded-xl text-center">
                      <span className="text-[11px] text-slate-200 block">
                        Supervised by <strong className="text-white">{service.specialistName}</strong>
                      </span>
                    </div>
                  </div>
                )}

                {visualMode === 'minimal' && (
                  <>
                    {/* Original Template Emoji Display */}
                    <div className="relative z-10 text-8xl sm:text-9xl filter drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-300 select-none mb-6">
                      {service.emoji}
                    </div>

                    {/* Original Art Badge Label */}
                    <div className="relative z-10 bg-[#0B1D30]/90 backdrop-blur-md border border-white/15 rounded-xl px-5 py-3 text-center shadow-lg w-full max-w-xs">
                      <span className="text-xs font-mono-code text-[#D4B578] uppercase tracking-wider block">
                        {service.artLabel}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ELABORATED SECTION 1: IN-DEPTH CLINICAL OVERVIEW & COMPREHENSIVE NARRATIVE */}
      <section className="py-20 bg-[#0b1f31] border-b border-slate-700/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 8 Cols: Detailed Educational Paragraphs */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono-code text-[#BF9B5A] uppercase tracking-wider">
                <span className="w-6 h-px bg-[#BF9B5A]" />
                <span>Clinical Overview & Treatment Science</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white leading-tight">
                Understanding <span className="text-[#D4B578]">{service.title}</span>
              </h2>

              {/* Substantive Elaborated Paragraphs */}
              <div className="space-y-6 pt-2">
                {service.overviewParagraphs.map((paragraph, idx) => (
                  <p 
                    key={idx} 
                    className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Clinical Procedures Performed Under This Service */}
              <div className="pt-6">
                <h3 className="text-xs font-mono-code uppercase tracking-wider text-[#D4B578] mb-4">
                  Clinical Modalities & Diagnostics Included
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.procedures.map((proc, pIdx) => (
                    <div 
                      key={pIdx} 
                      className="flex items-start gap-3 bg-[#0e2438] p-3.5 rounded-xl border border-slate-700/60"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#2ABEAA] mt-0.5 shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-200 leading-snug">{proc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Clinical Snapshot & Candidacy Card */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              <div className="bg-[#0e2438] rounded-2xl border border-slate-700/60 p-6 sm:p-7 shadow-xl">
                <div className="flex items-center gap-2 text-xs font-mono-code text-[#BF9B5A] uppercase tracking-wider mb-4">
                  <Sparkles className="w-4 h-4 text-[#BF9B5A]" />
                  <span>Clinical Snapshot</span>
                </div>

                <div className="space-y-5 text-sm">
                  <div>
                    <span className="text-xs font-mono-code text-slate-400 block uppercase">Typical Appointment</span>
                    <span className="text-base font-semibold text-white">{service.duration}</span>
                  </div>

                  <div className="border-t border-slate-700/60 pt-4">
                    <span className="text-xs font-mono-code text-slate-400 block uppercase">Supervising Clinician</span>
                    <span className="text-base font-semibold text-white block">{service.specialistName}</span>
                    <span className="text-xs text-[#D4B578]">{service.specialistTitle}</span>
                  </div>

                  <div className="border-t border-slate-700/60 pt-4">
                    <span className="text-xs font-mono-code text-slate-400 block uppercase">Primary Indication</span>
                    <p className="text-xs text-slate-300 leading-relaxed mt-1">
                      {service.idealFor}
                    </p>
                  </div>

                  <div className="border-t border-slate-700/60 pt-4">
                    <button
                      onClick={scrollToBooking}
                      className="w-full py-3 rounded-xl bg-[#BF9B5A] text-[#0B1D30] font-bold text-xs uppercase tracking-wider hover:bg-[#D4B578] transition-all cursor-pointer shadow-md text-center block"
                    >
                      Schedule Consultation ↗
                    </button>
                  </div>
                </div>
              </div>

              {/* Safety & Comfort Reassurance Box */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-2">
                <div className="font-semibold text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2ABEAA]" />
                  <span>Biological Preservation Promise</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  We practice conservative biomimetic dentistry, preserving maximum healthy tooth structure, enamel integrity, and tissue vitality at every stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ELABORATED SECTION 2: WHEN IS THIS TREATMENT RECOMMENDED? (Symptoms & Signs) */}
      {service.symptomsAndSigns && (
        <section className="py-20 bg-[#081829] border-b border-slate-700/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-2 text-xs font-mono-code text-[#BF9B5A] uppercase tracking-wider mb-2">
                <span className="w-6 h-px bg-[#BF9B5A]" />
                <span>Clinical Candidacy</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white mb-4">
                {service.symptomsAndSigns.heading}
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                {service.symptomsAndSigns.intro}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.symptomsAndSigns.items.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-[#0e2438] rounded-2xl border border-slate-700/60 p-7 hover:border-[#BF9B5A]/50 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <span className="inline-block text-[11px] font-mono-code uppercase tracking-wider text-[#D4B578] bg-[#D4B578]/10 px-3 py-1 rounded-full mb-3 border border-[#D4B578]/20">
                    {item.badge}
                  </span>
                  <h3 className="text-xl font-serif-luxury font-bold text-white mb-2 group-hover:text-[#D4B578] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3: Original 3-Step Feature Process (01 / ASSESS, 02 / PLAN, 03 / CARE) */}
      <section className="py-20 bg-[#0b1f31] border-b border-slate-700/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#BF9B5A] uppercase tracking-wider mb-2">
              <span className="w-6 h-px bg-[#BF9B5A]" />
              <span>Your visit</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white mb-4">
              What we can discuss together
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Your dentist will assess your needs and explain appropriate options before recommending treatment. Every plan depends on your oral health and individual circumstances.
            </p>
          </div>

          {/* 3-Column Feature Grid matching original zip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {service.features.map((feature, idx) => (
              <article
                key={idx}
                className="bg-white rounded-2xl border border-[#EEE5D8] p-8 text-left transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group"
              >
                <div className="text-xs font-mono-code text-[#BF9B5A] font-bold tracking-wider mb-4">
                  {feature.step}
                </div>
                <h3 className="text-2xl font-serif-luxury font-bold text-[#0B1D30] group-hover:text-[#BF9B5A] transition-colors mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {feature.desc}
                </p>
              </article>
            ))}
          </div>

          {/* Clinical Note Callout matching original zip */}
          <div className="p-6 rounded-r-xl rounded-l-xs bg-[#0e2438] border-l-4 border-[#BF9B5A] text-slate-300 text-sm leading-relaxed border-t border-r border-b border-slate-700/50">
            <p>
              <strong className="text-white font-semibold">Please note:</strong> This page provides general information only and is not a diagnosis or guarantee of a particular outcome. A licensed dental professional must determine whether a treatment is appropriate for you.
            </p>
          </div>
        </div>
      </section>

      {/* ELABORATED SECTION 4: STEP-BY-STEP PROCEDURE WALKTHROUGH */}
      {service.detailedPhases && (
        <section className="py-20 bg-[#081829] border-b border-slate-700/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-2 text-xs font-mono-code text-[#BF9B5A] uppercase tracking-wider mb-2">
                <span className="w-6 h-px bg-[#BF9B5A]" />
                <span>Procedure Narrative</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white mb-4">
                What to Expect During Your Appointment
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                We believe anxiousness disappears when you know exactly what is going to happen. Here is how your appointment unfolds in descriptive detail:
              </p>
            </div>

            <div className="space-y-6">
              {service.detailedPhases.map((phase, pIdx) => (
                <div 
                  key={pIdx}
                  className="bg-[#0e2438] rounded-2xl border border-slate-700/60 p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start hover:border-[#BF9B5A]/40 transition-colors"
                >
                  <div className="shrink-0">
                    <span className="inline-block px-4 py-2 rounded-xl bg-[#BF9B5A]/15 border border-[#BF9B5A]/30 text-xs font-mono-code text-[#D4B578] font-bold">
                      {phase.phase}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif-luxury font-bold text-white">
                      {phase.title}
                    </h3>
                    <p className="text-base text-slate-200 leading-relaxed font-normal">
                      {phase.narrative}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ELABORATED SECTION 5: RECOVERY, AFTERCARE & HOME MAINTENANCE */}
      {service.recoveryAndCare && (
        <section className="py-20 bg-[#0b1f31] border-b border-slate-700/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-2 text-xs font-mono-code text-[#BF9B5A] uppercase tracking-wider">
                  <span className="w-6 h-px bg-[#BF9B5A]" />
                  <span>Healing & Long-Term Results</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white leading-tight">
                  {service.recoveryAndCare.heading}
                </h2>
                
                <div className="space-y-4 text-base text-slate-200 leading-relaxed">
                  {service.recoveryAndCare.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="bg-[#0e2438] rounded-2xl border border-slate-700/60 p-7 sm:p-8 space-y-4">
                  <h3 className="text-xs font-mono-code text-[#D4B578] uppercase tracking-wider flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-[#2ABEAA]" />
                    <span>Essential Post-Care Guidelines</span>
                  </h3>
                  
                  <div className="space-y-3.5 pt-2">
                    {service.recoveryAndCare.tips.map((tip, tIdx) => (
                      <div key={tIdx} className="flex items-start gap-3 text-sm text-slate-200">
                        <CheckCircle className="w-4 h-4 text-[#2ABEAA] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ELABORATED SECTION 6: SERVICE FREQUENTLY ASKED QUESTIONS */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 bg-[#081829] border-b border-slate-700/60">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="flex items-center justify-center gap-2 text-xs font-mono-code text-[#BF9B5A] uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4 text-[#BF9B5A]" />
                <span>Patient Clarifications</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base text-slate-300">
                Detailed answers to help you make well-informed decisions regarding your oral care.
              </p>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-[#0e2438] rounded-2xl border border-slate-700/60 overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-700/20 transition-colors"
                    >
                      <span className="text-lg font-serif-luxury font-bold text-white">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#D4B578] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-200 leading-relaxed border-t border-slate-700/40">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* QUESTIONS SECTION matching original zip */}
      <section className="py-16 bg-white text-[#0B1D30] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#BF9B5A] uppercase tracking-wider mb-2">
              <span className="w-6 h-px bg-[#BF9B5A]" />
              <span>The next step</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#0B1D30] mb-2">
              {service.questionsTitle || `Questions about ${service.title.toLowerCase()}?`}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {service.questionsDesc || 'Send an appointment request and the clinic can discuss your concerns, available services, and the next steps with you.'}
            </p>
          </div>

          <button
            onClick={scrollToBooking}
            className="px-8 py-4 rounded-full bg-[#BF9B5A] text-[#0B1D30] font-bold text-xs uppercase tracking-wider hover:bg-[#D4B578] transition-colors self-start md:self-auto cursor-pointer shadow-lg shadow-[#BF9B5A]/20"
          >
            Book a Consultation ↗
          </button>
        </div>
      </section>

      {/* IN-PAGE CONSULTATION BOOKING SECTION */}
      <section ref={bookingRef} id="booking-area" className="py-20 bg-[#0b1f31] border-b border-slate-700/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono-code text-[#BF9B5A] uppercase tracking-wider">
                <span className="w-6 h-px bg-[#BF9B5A]" />
                <span>Schedule Your Visit</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white leading-tight">
                Request a Consultation for <i className="text-[#D4B578]">{service.title}</i>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Choose your preferred clinic branch and date. Our clinical coordinator will reach out to confirm your slot and discuss any preparations.
              </p>

              <div className="p-6 rounded-2xl bg-[#0e2438] border border-slate-700/60 space-y-3">
                <div className="text-xs font-mono-code text-[#D4B578] uppercase tracking-wider">
                  Clinic Consultation Guarantee
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-[#2ABEAA] shrink-0" />
                  <span>Itemized treatment plan before any procedure</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-[#2ABEAA] shrink-0" />
                  <span>Makati Central & Quezon City North locations</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-[#2ABEAA] shrink-0" />
                  <span>Full sterile precautions with hospital-grade autoclave</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <BookingForm initialServiceTitle={service.title} />
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BANNER matching original zip */}
      <div className="bg-[#081829] text-white py-16 border-b border-slate-700/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white mb-2">
              Let’s talk about your smile.
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Start with a conversation and get guidance tailored to your dental needs.
            </p>
          </div>
          <button
            onClick={scrollToBooking}
            className="px-7 py-3.5 rounded-full bg-[#BF9B5A] text-[#0B1D30] font-bold text-xs uppercase tracking-wider hover:bg-[#D4B578] transition-colors self-start md:self-auto cursor-pointer shadow-lg shadow-[#BF9B5A]/20"
          >
            Request an Appointment ↗
          </button>
        </div>
      </div>
    </div>
  );
};
