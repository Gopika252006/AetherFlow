import React, { useState } from 'react';
import { Cube16SolidIcon, Cog8ToothIcon, ArrowTrendingUpIcon, LinkSolidIcon, ChevronDownIcon, ChevronUpIcon } from './Icons';

const CARDS = [
  {
    id: 1,
    title: 'Cognitive Core Sync',
    tag: 'PIPELINES',
    icon: Cube16SolidIcon,
    shortDesc: 'Automated schema mapping and sub-millisecond data replication.',
    longDesc: 'Our ingestion engine automatically maps incoming relational and non-relational schemas, performing structural transforms in memory. It detects modifications in real-time, synchronizing pipelines without locks or latency.',
    detail: 'Supports Postgres, Snowflake, Kafka, BigQuery',
    badge: '99.99% Uptime'
  },
  {
    id: 2,
    title: 'Stream Analyzer',
    tag: 'ANALYTICS',
    icon: ArrowTrendingUpIcon,
    shortDesc: 'Statistical anomaly radar checking millions of metrics per second.',
    longDesc: 'A continuous anomaly detection radar analyzes stream variables using dynamic isolation forests. It identifies outliers and alerts engineering before databases fail.',
    detail: 'Latency: 0.4ms | Alerting SLA: <1s',
    badge: 'ML Radar Active'
  },
  {
    id: 3,
    title: 'Global Edge Mesh',
    tag: 'NETWORKING',
    icon: LinkSolidIcon,
    shortDesc: 'Ultra-low latency regional node router.',
    longDesc: 'Synchronize pipelines globally. Uses edge routing networks to replicate and distribute database events across AWS, GCP, and Azure datacenters with automatic partition recovery.',
    detail: '12 active global cloud gateways',
    badge: 'Multi-Cloud'
  },
  {
    id: 4,
    title: 'Self-Healing Engines',
    tag: 'AUTOMATION',
    icon: Cog8ToothIcon,
    shortDesc: 'Automatic datatype repair and recovery.',
    longDesc: 'When source databases update schemas unexpectedly, our self-healing engine translates mismatching JSON objects, repairs broken keys, and alerts your team with recommended fixes.',
    detail: 'Corrects 92% of datatype mismatch anomalies',
    badge: 'Self-Healing'
  }
];

export default function BentoGrid() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] glow-shape-teal rounded-full translate-x-1/3 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-16 space-y-4">
          <span className="text-xs font-heading font-semibold text-brand-orange uppercase tracking-widest">
            Bento Grid Platform Details
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-light">
            Engineered For Complex Operations
          </h2>
          <p className="text-brand-light/70 font-body text-base">
            Hover the components on desktop or tap on mobile to explore our automated pipelines.
          </p>
        </div>

        {/* ========================================== */}
        {/* DESKTOP BENTO GRID (Visible md and up)    */}
        {/* ========================================== */}
        <div className="hidden md:grid grid-cols-3 gap-6 auto-rows-[280px]">
          {/* Card 1: Large (2 Columns, Row 1) */}
          <div 
            onMouseEnter={() => setActiveIndex(0)}
            className={`col-span-2 row-span-1 rounded-2xl p-8 glass-panel border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
              activeIndex === 0 ? 'border-brand-yellow/30 bg-brand-teal/20 shadow-[0_10px_30px_rgba(17,76,90,0.3)]' : 'border-brand-border/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded bg-brand-teal/20 text-brand-yellow">
                  <Cube16SolidIcon className="w-6 h-6" />
                </div>
                <span className="text-xs font-heading font-semibold tracking-wider text-brand-yellow">{CARDS[0].tag}</span>
              </div>
              <span className="text-xs font-heading text-brand-light/40 bg-brand-light/5 px-2.5 py-1 rounded">{CARDS[0].badge}</span>
            </div>
            
            <div className="space-y-2 mt-4 text-left">
              <h3 className="text-2xl font-heading font-bold text-brand-light">{CARDS[0].title}</h3>
              <p className="text-sm text-brand-light/75 font-body leading-relaxed max-w-xl">
                {activeIndex === 0 ? CARDS[0].longDesc : CARDS[0].shortDesc}
              </p>
            </div>
            
            <div className="mt-4 flex items-center justify-between border-t border-brand-border/5 pt-3 text-xs text-brand-light/50 font-heading">
              <span>{CARDS[0].detail}</span>
              <span className="text-brand-orange">Hovering Active</span>
            </div>
          </div>

          {/* Card 2: Small (1 Column, Row 1) */}
          <div 
            onMouseEnter={() => setActiveIndex(1)}
            className={`col-span-1 row-span-1 rounded-2xl p-8 glass-panel border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
              activeIndex === 1 ? 'border-brand-yellow/30 bg-brand-teal/20 shadow-[0_10px_30px_rgba(17,76,90,0.3)]' : 'border-brand-border/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded bg-brand-teal/20 text-brand-yellow">
                  <ArrowTrendingUpIcon className="w-6 h-6" />
                </div>
                <span className="text-xs font-heading font-semibold tracking-wider text-brand-yellow">{CARDS[1].tag}</span>
              </div>
            </div>

            <div className="space-y-2 mt-4 text-left">
              <h3 className="text-xl font-heading font-bold text-brand-light">{CARDS[1].title}</h3>
              <p className="text-sm text-brand-light/75 font-body leading-relaxed">
                {activeIndex === 1 ? CARDS[1].longDesc : CARDS[1].shortDesc}
              </p>
            </div>

            <div className="mt-4 border-t border-brand-border/5 pt-3 text-[10px] text-brand-light/50 font-heading">
              {CARDS[1].detail}
            </div>
          </div>

          {/* Card 3: Small (1 Column, Row 2) */}
          <div 
            onMouseEnter={() => setActiveIndex(2)}
            className={`col-span-1 row-span-1 rounded-2xl p-8 glass-panel border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
              activeIndex === 2 ? 'border-brand-yellow/30 bg-brand-teal/20 shadow-[0_10px_30px_rgba(17,76,90,0.3)]' : 'border-brand-border/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded bg-brand-teal/20 text-brand-yellow">
                  <LinkSolidIcon className="w-6 h-6" />
                </div>
                <span className="text-xs font-heading font-semibold tracking-wider text-brand-yellow">{CARDS[2].tag}</span>
              </div>
            </div>

            <div className="space-y-2 mt-4 text-left">
              <h3 className="text-xl font-heading font-bold text-brand-light">{CARDS[2].title}</h3>
              <p className="text-sm text-brand-light/75 font-body leading-relaxed">
                {activeIndex === 2 ? CARDS[2].longDesc : CARDS[2].shortDesc}
              </p>
            </div>

            <div className="mt-4 border-t border-brand-border/5 pt-3 text-[10px] text-brand-light/50 font-heading">
              {CARDS[2].detail}
            </div>
          </div>

          {/* Card 4: Large (2 Columns, Row 2) */}
          <div 
            onMouseEnter={() => setActiveIndex(3)}
            className={`col-span-2 row-span-1 rounded-2xl p-8 glass-panel border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
              activeIndex === 3 ? 'border-brand-yellow/30 bg-brand-teal/20 shadow-[0_10px_30px_rgba(17,76,90,0.3)]' : 'border-brand-border/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded bg-brand-teal/20 text-brand-yellow">
                  <Cog8ToothIcon className="w-6 h-6" />
                </div>
                <span className="text-xs font-heading font-semibold tracking-wider text-brand-yellow">{CARDS[3].tag}</span>
              </div>
              <span className="text-xs font-heading text-brand-light/40 bg-brand-light/5 px-2.5 py-1 rounded">{CARDS[3].badge}</span>
            </div>

            <div className="space-y-2 mt-4 text-left">
              <h3 className="text-2xl font-heading font-bold text-brand-light">{CARDS[3].title}</h3>
              <p className="text-sm text-brand-light/75 font-body leading-relaxed max-w-xl">
                {activeIndex === 3 ? CARDS[3].longDesc : CARDS[3].shortDesc}
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-brand-border/5 pt-3 text-xs text-brand-light/50 font-heading">
              <span>{CARDS[3].detail}</span>
              <span className="text-brand-orange">Hovering Active</span>
            </div>
          </div>
        </div>

        {/* ========================================== */}
        {/* MOBILE ACCORDION (Visible below md)        */}
        {/* ========================================== */}
        <div className="block md:hidden space-y-4">
          {CARDS.map((card, idx) => {
            const isOpen = activeIndex === idx;
            const IconComp = card.icon;
            
            return (
              <div 
                key={card.id}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-brand-yellow/40 bg-brand-teal/15' : 'border-brand-border/10 bg-brand-teal/5'
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setActiveIndex(isOpen ? 0 : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded transition-colors ${isOpen ? 'bg-brand-yellow/10 text-brand-yellow' : 'bg-brand-teal/20 text-brand-light/70'}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-heading font-medium tracking-wider text-brand-yellow/70">{card.tag}</span>
                      <h3 className="text-base font-heading font-bold text-brand-light">{card.title}</h3>
                    </div>
                  </div>
                  <div>
                    {isOpen ? (
                      <ChevronUpIcon className="w-5 h-5 text-brand-yellow" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5 text-brand-light/65" />
                    )}
                  </div>
                </button>

                {/* Accordion Body */}
                <div 
                  className={`transition-all duration-300 ease-in-out px-6 ${
                    isOpen ? 'max-h-[300px] pb-6 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                  style={{ transitionProperty: 'max-height, opacity' }}
                >
                  <div className="space-y-4 border-t border-brand-border/5 pt-4 text-left">
                    <p className="text-sm text-brand-light/75 font-body leading-relaxed">
                      {card.longDesc}
                    </p>
                    <div className="bg-brand-dark/50 p-3 rounded-lg border border-brand-border/5 flex items-center justify-between text-[11px] font-heading text-brand-light/60">
                      <span>{card.detail}</span>
                      <span className="text-brand-orange">{card.badge}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
