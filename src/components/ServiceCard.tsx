import React from 'react';
import { ServiceItem } from '../types/service';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  onSelect: (serviceId: string) => void;
  featured?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect }) => {
  return (
    <article
      onClick={() => onSelect(service.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(service.id);
        }
      }}
      className="group relative text-left bg-[#BF9B5A] rounded-2xl border-2 border-[#D8BC82] p-7 sm:p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#BF9B5A]/35 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1D30]"
      style={{ backgroundColor: '#BF9B5A' }}
    >
      <div>
        {/* Top meta tags */}
        <div className="flex items-center justify-between gap-2 mb-5">
          <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#0B1D30] bg-[#0B1D30]/15 px-3 py-1 rounded-full">
            {service.category}
          </span>
          {service.badgeLabel && (
            <span className="text-[10px] font-mono-code font-bold text-[#0B1D30] bg-white/40 px-2.5 py-0.5 rounded-full border border-[#0B1D30]/20 flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-[#0B1D30]" />
              <span>{service.badgeLabel}</span>
            </span>
          )}
        </div>

        {/* Service Icon Box in deep luxury navy */}
        <div className="w-14 h-14 rounded-2xl bg-[#0B1D30] text-[#BF9B5A] flex items-center justify-center text-3xl mb-5 shadow-md shadow-[#0B1D30]/20 group-hover:scale-105 transition-transform duration-300">
          {service.emoji}
        </div>

        {/* Title in readable deep navy */}
        <h3 className="text-2xl font-serif-luxury font-bold text-[#0B1D30] group-hover:text-black transition-colors mb-1.5 leading-tight">
          {service.title}
        </h3>

        {/* Subtitle */}
        <p className="text-xs font-semibold text-[#0B1D30]/80 uppercase tracking-wide mb-3">
          {service.subtitle}
        </p>

        {/* Description in readable high-contrast dark navy */}
        <p className="text-sm text-[#0B1D30]/90 leading-relaxed mb-6 font-normal">
          {service.shortDesc}
        </p>
      </div>

      {/* Action CTA Link */}
      <div className="pt-4 border-t border-[#0B1D30]/20 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B1D30] group-hover:text-black transition-colors">
          <span>View Procedure Details</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
        </span>
        <span className="inline-flex items-center gap-1 text-[11px] font-mono-code text-[#0B1D30]/80 font-bold bg-[#0B1D30]/10 px-2.5 py-1 rounded-md">
          <Clock className="w-3 h-3 text-[#0B1D30]" />
          <span>{service.duration}</span>
        </span>
      </div>

      {/* Luxury gold hover sheen reflection */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full blur-2xl pointer-events-none transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500" />
      <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#0B1D30] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </article>
  );
};
