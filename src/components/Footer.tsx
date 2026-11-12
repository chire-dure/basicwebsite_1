import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, Facebook, Instagram } from 'lucide-react';
import { servicesData } from '../data/servicesData';

interface FooterProps {
  onNavigateHome: () => void;
  onNavigateServices: () => void;
  onNavigateTeam?: () => void;
  onSelectService: (serviceId: string) => void;
  onBookClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateHome,
  onNavigateServices,
  onNavigateTeam,
  onSelectService,
  onBookClick
}) => {
  return (
    <footer className="bg-[#071522] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#132840] border border-[#BF9B5A]/40 flex items-center justify-center text-xl">
                🦷
              </div>
              <div className="text-xl font-bold font-serif-luxury tracking-wide text-white">
                YOUR <span className="text-[#D4B578]">DENTAL</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Experience world-class dentistry in the heart of Metro Manila. Led by Dr. Ivan Mark Escudero, our dedicated specialists deliver pain-free, precision dental care.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/ivanmark.escudero.75"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800/80 hover:bg-[#1877F2] text-slate-200 hover:text-white border border-slate-700/80 hover:border-[#1877F2] flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-sm"
                aria-label="Facebook Profile"
              >
                <Facebook className="w-5 h-5 fill-current" />
              </a>
              <a
                href="https://www.instagram.com/nihexist/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800/80 hover:bg-gradient-to-tr hover:from-[#FD1D1D] hover:via-[#E1306C] hover:to-[#833AB4] text-slate-200 hover:text-white border border-slate-700/80 hover:border-pink-500 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-sm"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif-luxury font-bold text-lg mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button
                  onClick={onNavigateHome}
                  className="hover:text-[#D4B578] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateServices}
                  className="hover:text-[#D4B578] transition-colors"
                >
                  All Services Directory
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateTeam || onNavigateHome}
                  className="hover:text-[#D4B578] transition-colors text-left"
                >
                  Our Specialists
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateTeam || onNavigateHome}
                  className="hover:text-[#D4B578] transition-colors text-left"
                >
                  The Clinic Advantage & Safety
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateTeam || onNavigateHome}
                  className="hover:text-[#D4B578] transition-colors text-left"
                >
                  HMO Insurance & 0% Plans
                </button>
              </li>
              <li>
                <a
                  href="#branches-logistics"
                  onClick={onNavigateHome}
                  className="hover:text-[#D4B578] transition-colors"
                >
                  Branches & Parking Guide
                </a>
              </li>
              <li>
                <button
                  onClick={onBookClick}
                  className="hover:text-[#D4B578] transition-colors font-medium text-slate-300"
                >
                  Request Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Connected Services List */}
          <div>
            <h4 className="text-white font-serif-luxury font-bold text-lg mb-4">
              Current Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {servicesData.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onSelectService(s.id)}
                    className="hover:text-[#D4B578] transition-colors text-left flex items-center gap-1.5"
                  >
                    <span>{s.emoji}</span>
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={onNavigateServices}
                  className="text-[#D4B578] hover:underline flex items-center gap-1 pt-1 font-semibold"
                >
                  <span>View All 9 Services</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Locations */}
          <div>
            <h4 className="text-white font-serif-luxury font-bold text-lg mb-4">
              Clinic Contact
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#BF9B5A] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-200">Patient Hotline</div>
                  <a href="tel:09626292510" className="hover:text-white font-mono-code">
                    0962 629 2510
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#BF9B5A] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-200">Inquiries</div>
                  <a href="mailto:hello@yourdental.ph" className="hover:text-white">
                    hello@yourdental.ph
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#2ABEAA] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-200">Metro Manila Branches</div>
                  <div>Makati Central · Quezon City North</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Your Dental Business. All Rights Reserved.</p>
          <p className="flex items-center gap-1 text-slate-400">
            Crafted for Metro Manila smiles · Dr. Ivan Mark Escudero
          </p>
        </div>
      </div>
    </footer>
  );
};
