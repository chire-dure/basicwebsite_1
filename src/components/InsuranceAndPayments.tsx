import React, { useState } from 'react';
import { Shield, CreditCard, CheckCircle2, ChevronRight, HelpCircle, FileText, Sparkles, Building, Wallet } from 'lucide-react';

interface HMOProvider {
  id: string;
  name: string;
  tag: string;
  popular: boolean;
  coverageNotes: string[];
  requiresLoa: boolean;
  logoEmoji: string;
}

export const InsuranceAndPayments: React.FC = () => {
  const [selectedHmo, setSelectedHmo] = useState<string>('maxicare');

  const hmoProviders: HMOProvider[] = [
    {
      id: 'maxicare',
      name: 'Maxicare HealthCare',
      tag: 'Platinum / Gold / Silver / Corporate',
      popular: true,
      logoEmoji: '🛡️',
      requiresLoa: true,
      coverageNotes: [
        '100% Covered: Annual Oral Prophylaxis (Deep Dental Cleaning)',
        '100% Covered: Comprehensive Oral Examination & Treatment Planning',
        '100% Covered: Emergency Relief of Pain & Temporary Fillings',
        '10% – 20% Special Clinic Discount on Light-Cure Fillings & Restorations',
        'Direct LOA generation at clinic reception with your Maxicare Member Card'
      ]
    },
    {
      id: 'intellicare',
      name: 'Intellicare Network',
      tag: 'Direct Corporate & Individual',
      popular: true,
      logoEmoji: '🏢',
      requiresLoa: true,
      coverageNotes: [
        '100% Covered: Free Annual Dental Checkup & Hygiene Prophylaxis',
        '100% Covered: Simple Tooth Extractions & Emergency Desensitization',
        'Subsidized Periapical Diagnostic X-Rays',
        'Direct digital authorization via clinic front desk portal'
      ]
    },
    {
      id: 'medicard',
      name: 'MediCard Philippines',
      tag: 'Prescription & Dental Care Rider',
      popular: true,
      logoEmoji: '⚕️',
      requiresLoa: true,
      coverageNotes: [
        '100% Covered: Routine Consultation & Prophylaxis (Cleaning)',
        '100% Covered: Palliative Emergency Dental Treatment',
        '15% Preferred discount on composite resin tooth restorations',
        'Accepts MediCard Member Online App QR authorization'
      ]
    },
    {
      id: 'philhealth',
      name: 'PhilHealth Konsulta',
      tag: 'Government Accredited Provider',
      popular: false,
      logoEmoji: '🇵🇭',
      requiresLoa: false,
      coverageNotes: [
        'PhilHealth Konsulta Benefit: Routine preventive oral exam',
        'Accredited for Covered Surgical Tooth Extraction & Minor Oral Surgery',
        'Simple paperwork assistance handled directly by our clinic admin'
      ]
    },
    {
      id: 'avega',
      name: 'Avega Managed Care',
      tag: 'Executive & Corporate Tier',
      popular: false,
      logoEmoji: '🌟',
      requiresLoa: true,
      coverageNotes: [
        '100% Covered: Annual Cleaning & Fluoride Treatment',
        'Unlimited Specialist Consultations across disciplines',
        'Priority front desk check-in with physical/virtual card'
      ]
    },
    {
      id: 'carelon',
      name: 'Carelon Health / Pacific Cross',
      tag: 'Comprehensive Healthcare Plan',
      popular: false,
      logoEmoji: '🌐',
      requiresLoa: true,
      coverageNotes: [
        'Direct billing coordination for eligible outpatient dental riders',
        'Emergency trauma tooth care & reimbursement documentation support',
        'International patient insurance claim assistance provided'
      ]
    }
  ];

  const activeProvider = hmoProviders.find((h) => h.id === selectedHmo) || hmoProviders[0];

  const banks = [
    { name: 'BDO Unibank', terms: '0% Interest up to 24 mos', icon: '🏦' },
    { name: 'BPI (Bank of the PI)', terms: '0% Special Installment (SIP)', icon: '🏛️' },
    { name: 'Metrobank', terms: '0% 3, 6, 12 mos', icon: '💳' },
    { name: 'Security Bank', terms: 'ChargeNow, Pay Later', icon: '🔒' },
    { name: 'RCBC Bankard', terms: '0% Flexi-Payment', icon: '⭐' }
  ];

  const cashlessOptions = [
    { name: 'GCash QR', desc: 'Scan to pay instantly', color: 'bg-[#007DFE]' },
    { name: 'Maya / Maya Credit', desc: '0% micro-installments', color: 'bg-[#00D06C]' },
    { name: 'Apple Pay / Google Pay', desc: 'Tap-to-pay NFC terminal', color: 'bg-slate-700' },
    { name: 'Direct Bank Transfer', desc: 'InstaPay / PESONet transfer', color: 'bg-[#0B1D30]' }
  ];

  return (
    <section id="hmo-insurance" className="py-24 bg-[#081829] border-b border-slate-700/60 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#BF9B5A]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#2ABEAA]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#D4B578] uppercase tracking-wider mb-2">
            <Shield className="w-3.5 h-3.5 text-[#BF9B5A]" />
            <span>Accredited HMO Partners & 0% Payment Plans</span>
            <Shield className="w-3.5 h-3.5 text-[#BF9B5A]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white leading-tight">
            Seamless Direct Billing & Flexible Plans
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            World-class dentistry should never be held back by complicated financing. We coordinate directly with top Philippine health maintenance organizations and offer 0% credit card installment plans.
          </p>
        </div>

        {/* Two-Column Showcase: Left = HMO Direct Billing, Right = 0% Bank Installments */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: HMO PARTNERS DIRECT BILLING (7 cols) */}
          <div className="lg:col-span-7 bg-[#0B1D30] rounded-3xl border border-[#BF9B5A]/30 p-6 sm:p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-slate-700/80 mb-6">
                <div>
                  <span className="text-[11px] font-mono-code text-[#BF9B5A] uppercase tracking-wider font-bold">
                    Partner Network
                  </span>
                  <h3 className="text-2xl font-serif-luxury font-bold text-white mt-0.5">
                    Accredited HMO Providers
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full font-mono-code">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Direct LOA Processing</span>
                </div>
              </div>

              {/* HMO Selection Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
                {hmoProviders.map((provider) => {
                  const isSelected = selectedHmo === provider.id;
                  return (
                    <button
                      key={provider.id}
                      onClick={() => setSelectedHmo(provider.id)}
                      className={`p-3 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-[#BF9B5A] text-[#0B1D30] border-[#BF9B5A] shadow-md font-bold'
                          : 'bg-[#061523] text-slate-200 border-slate-700/60 hover:border-[#BF9B5A]/50 hover:bg-[#0c1f33]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xl">{provider.logoEmoji}</span>
                        {provider.popular && (
                          <span
                            className={`text-[9px] uppercase px-1.5 py-0.2 rounded font-mono-code font-bold ${
                              isSelected ? 'bg-[#0B1D30] text-[#BF9B5A]' : 'bg-[#BF9B5A]/20 text-[#D4B578]'
                            }`}
                          >
                            Top Choice
                          </span>
                        )}
                      </div>
                      <div className={`text-xs font-bold truncate ${isSelected ? 'text-[#0B1D30]' : 'text-white'}`}>
                        {provider.name}
                      </div>
                      <div
                        className={`text-[10px] truncate ${
                          isSelected ? 'text-[#0B1D30]/80' : 'text-slate-400'
                        }`}
                      >
                        {provider.tag}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Provider Details Card */}
              <div className="bg-[#061523] rounded-2xl p-5 border border-slate-700/80 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{activeProvider.logoEmoji}</span>
                    <h4 className="text-base font-serif-luxury font-bold text-white">
                      {activeProvider.name} Coverage Guide
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono-code text-[#D4B578] bg-[#BF9B5A]/15 px-2.5 py-0.5 rounded-full border border-[#BF9B5A]/30 font-semibold">
                    {activeProvider.tag}
                  </span>
                </div>

                <div className="space-y-2.5">
                  {activeProvider.coverageNotes.map((note, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#2ABEAA] shrink-0 mt-0.5" />
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* How to avail strip */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#D4B578] shrink-0" />
                <div>
                  <span className="font-semibold text-white">How to avail at reception:</span>
                  <div className="text-[11px] text-slate-300">
                    Present your physical or digital HMO card + 1 valid government ID. Our reception coordinates your LOA instantly.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: 0% CREDIT CARD & PAYMENT INSTALLMENTS (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* 0% Installment Card */}
            <div className="bg-[#0B1D30] rounded-3xl border border-[#BF9B5A]/30 p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/80 mb-5">
                <div>
                  <span className="text-[11px] font-mono-code text-[#BF9B5A] uppercase tracking-wider font-bold">
                    Flexible Financing
                  </span>
                  <h3 className="text-2xl font-serif-luxury font-bold text-white mt-0.5">
                    0% Credit Card Plans
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#BF9B5A]/20 flex items-center justify-center text-xl text-[#D4B578]">
                  <CreditCard className="w-5 h-5" />
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                High-end cosmetic dentistry, dental implants, and clear aligners are easily broken down into manageable monthly installments with zero interest.
              </p>

              {/* Bank partners list */}
              <div className="space-y-2 mb-6">
                {banks.map((b, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#061523] border border-slate-700/70 text-xs"
                  >
                    <div className="flex items-center gap-2.5 font-semibold text-white">
                      <span>{b.icon}</span>
                      <span>{b.name}</span>
                    </div>
                    <span className="text-[11px] font-mono-code text-[#D4B578] font-bold bg-[#BF9B5A]/15 px-2 py-0.5 rounded">
                      {b.terms}
                    </span>
                  </div>
                ))}
              </div>

              {/* Cashless E-Wallets Strip */}
              <div className="border-t border-slate-700/80 pt-5">
                <span className="text-[11px] font-mono-code text-slate-400 uppercase tracking-wider block mb-3 font-semibold">
                  Also Accepted: Cashless E-Wallets
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {cashlessOptions.map((opt, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-[#061523] border border-slate-700/60 flex items-center gap-2 text-xs"
                    >
                      <Wallet className="w-4 h-4 text-[#2ABEAA] shrink-0" />
                      <div className="min-w-0">
                        <div className="font-semibold text-white truncate text-[11px]">{opt.name}</div>
                        <div className="text-[9px] text-slate-400 truncate">{opt.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* No Hidden Surcharge Guarantee */}
              <div className="mt-5 p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-2.5 text-xs text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  <strong>Strict 0% Surcharge Policy:</strong> We never add 3%-5% merchant terminal fees to your bill.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
