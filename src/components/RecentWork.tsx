import React, { useState } from 'react';
import { SHOWCASE_IMAGES, ALL_SERVICES_MATRIX, DETAILED_PROJECTS } from '../data/content';
import { ShowcaseProject } from '../types';
import { ArrowUpRight, Sparkles, ExternalLink } from 'lucide-react';

interface RecentWorkProps {
  onSelectProject: (project: ShowcaseProject) => void;
}

export const RecentWork: React.FC<RecentWorkProps> = ({ onSelectProject }) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  return (
    <section id="work" className="py-16 md:py-24">
      
      {/* 1. Large Showcase Marquee Banner */}
      <div className="rounded-[36px] bg-[#121212] border border-white/10 text-white p-6 sm:p-10 md:p-14 overflow-hidden relative shadow-2xl">
        
        {/* Infinite Image Carousel */}
        <div className="relative -mx-6 sm:-mx-10 md:-mx-14 pb-8 overflow-hidden">
          <div className="animate-marquee-slow flex gap-6">
            {[...SHOWCASE_IMAGES, ...SHOWCASE_IMAGES].map((imgUrl, index) => (
              <div
                key={index}
                onClick={() => {
                  const proj = DETAILED_PROJECTS[index % DETAILED_PROJECTS.length];
                  onSelectProject(proj);
                }}
                className="w-72 sm:w-96 md:w-[480px] h-48 sm:h-64 md:h-72 rounded-2xl overflow-hidden shrink-0 border border-white/10 shadow-lg cursor-pointer transform hover:scale-[1.02] transition-transform group"
              >
                <img
                  src={imgUrl}
                  alt={`Design work ${index + 1}`}
                  className="w-full h-full object-cover group-hover:brightness-110 transition-all"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Hunt / Awards Bar & CTA */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Awards Badges */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row gap-4">
            
            {/* Buy Me A Coffee Award */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex-1 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] font-bold text-sm">
                  ☕
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Buy Me A Coffee</div>
                  <div className="text-[11px] text-neutral-400">Fintech Product of the Year</div>
                </div>
              </div>
            </div>

            {/* Switchboard Award */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex-1 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm">
                  ⚡
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Switchboard</div>
                  <div className="text-[11px] text-neutral-400">Remote Work Product of the Year</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Text & CTA */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F5F5F5]">Recent work</h3>
              <p className="text-sm text-neutral-400 mt-1">
                We’re talking “Product of the Year” good.
              </p>
            </div>

            <button
              onClick={() => onSelectProject(DETAILED_PROJECTS[0])}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4AF37] text-[#0A0A0A] font-bold text-sm hover:bg-[#c29e28] transition-all shadow-md active:scale-95"
            >
              <span>See recent work</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

      {/* 2. Apps, Websites, Logos & More Grid */}
      <div className="mt-10 rounded-[36px] bg-[#151515] border border-white/5 p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Interactive Tag Cloud */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-2.5">
              {ALL_SERVICES_MATRIX.map((service, idx) => {
                const isSelected = selectedTag === service;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedTag(isSelected ? null : service)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-xs ${
                      isSelected
                        ? 'bg-[#D4AF37] text-[#0A0A0A] scale-105 shadow-md'
                        : 'bg-[#222222] text-neutral-300 hover:bg-[#2c2c2c] hover:text-white border border-white/5'
                    }`}
                  >
                    {service}
                  </button>
                );
              })}
            </div>

            {selectedTag && (
              <div className="mt-4 p-3.5 rounded-xl bg-[#0A0A0A] border border-[#D4AF37]/30 text-xs text-neutral-300 flex items-center gap-2.5 animate-fadeIn">
                <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Showing capabilities for <strong className="text-white">{selectedTag}</strong>: High-fidelity deliverables, Figma design files &amp; revisions included.</span>
              </div>
            )}
          </div>

          {/* Right: Pitch Heading */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5F5F5] leading-snug">
              Apps, websites, logos &amp; more
            </h3>
            <p className="mt-3 text-base text-neutral-400 font-medium">
              All the things you need under one roof.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};
