import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

const TESTIMONIALS = [
  {
    quote: "AetherFlow cut our compute footprint by 58% in the first week. The autonomous schema healing alone has saved us dozens of developer hours that were previously spent writing ad-hoc repair scripts.",
    name: "Sarah Jenkins",
    role: "VP of Data Infrastructure",
    company: "Fintech Unicorn",
    initials: "SJ"
  },
  {
    quote: "Replicating postgres streams to Snowflake used to introduce up to 15 minutes of pipeline lag. With AetherFlow's sub-millisecond edge routing, we are operating in pure real-time under extreme loads.",
    name: "Marcus Aurelius",
    role: "Director of Pipeline Reliability",
    company: "NoveFlow Analytics",
    initials: "MA"
  },
  {
    quote: "Our data streams are incredibly erratic, but the anomaly detection radar isolates invalid schema shapes in flight. We haven't had a single downstream database crash since deploying their Professional plan.",
    name: "Li Wei",
    role: "Principal AI Architect",
    company: "DeepData Corp",
    initials: "LW"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1); // Default to middle card

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-brand-dark/50 border-t border-brand-border/5 relative overflow-hidden">
      {/* Glow Shape */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] glow-shape-orange rounded-full -translate-x-1/2 -z-10 opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-heading font-semibold text-brand-orange uppercase tracking-widest">
              Customer Feedback
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-light">
              Proven at Scale by Data leaders
            </h2>
            <p className="text-brand-light/70 font-body text-base">
              See how scaling technical teams optimize overhead and pipeline reliability.
            </p>
          </div>

          {/* Paginate Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-lg glass-panel border border-brand-border/10 hover:border-brand-yellow/30 text-brand-light hover:text-brand-yellow active:scale-95 transition-all"
              aria-label="Previous Testimonial"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <span className="text-xs font-heading text-brand-light/45">
              0{activeIndex + 1} / 0{TESTIMONIALS.length}
            </span>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-lg glass-panel border border-brand-border/10 hover:border-brand-yellow/30 text-brand-light hover:text-brand-yellow active:scale-95 transition-all"
              aria-label="Next Testimonial"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop Layout (3 Cards, highlighted active) */}
        <div className="hidden md:grid grid-cols-3 gap-8 items-stretch">
          {TESTIMONIALS.map((test, index) => {
            const isActive = index === activeIndex;
            return (
              <div 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`p-8 rounded-2xl glass-panel border transition-all duration-300 flex flex-col justify-between text-left cursor-pointer ${
                  isActive 
                    ? 'border-brand-yellow/50 bg-brand-teal/20 shadow-2xl scale-[1.02] -translate-y-1' 
                    : 'border-brand-border/10 hover:border-brand-border/20'
                }`}
              >
                <div className="space-y-6">
                  <span className={`block font-heading text-4xl font-extrabold select-none leading-none ${isActive ? 'text-brand-yellow' : 'text-brand-light/20'}`}>
                    “
                  </span>
                  <p className="text-brand-light/85 font-body text-sm leading-relaxed">
                    {test.quote}
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-8 pt-4 border-t border-brand-border/5">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-heading font-bold text-sm transition-colors ${
                    isActive ? 'bg-brand-yellow/15 text-brand-yellow' : 'bg-brand-teal/30 text-brand-light/50'
                  }`}>
                    {test.initials}
                  </div>
                  <div>
                    <span className="block font-heading font-bold text-xs text-brand-light">{test.name}</span>
                    <span className="block text-[10px] text-brand-light/50 font-body">{test.role}, <span className="text-brand-orange/80">{test.company}</span></span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Slide Layout */}
        <div className="block md:hidden">
          <div 
            className="p-8 rounded-2xl glass-panel border border-brand-yellow/30 bg-brand-teal/10 flex flex-col justify-between text-left transition-all duration-300"
          >
            <div className="space-y-6">
              <span className="block font-heading text-4xl text-brand-yellow font-extrabold select-none leading-none">
                “
              </span>
              <p className="text-brand-light/85 font-body text-sm leading-relaxed">
                {TESTIMONIALS[activeIndex].quote}
              </p>
            </div>

            <div className="flex items-center gap-4 mt-8 pt-4 border-t border-brand-border/5">
              <div className="w-10 h-10 rounded-lg bg-brand-yellow/10 text-brand-yellow flex items-center justify-center font-heading font-bold text-sm">
                {TESTIMONIALS[activeIndex].initials}
              </div>
              <div>
                <span className="block font-heading font-bold text-xs text-brand-light">{TESTIMONIALS[activeIndex].name}</span>
                <span className="block text-[10px] text-brand-light/50 font-body">{TESTIMONIALS[activeIndex].role}, <span className="text-brand-orange/80">{TESTIMONIALS[activeIndex].company}</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
