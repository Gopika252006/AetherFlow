import React from 'react';
import { ChartPieIcon, Cog8ToothIcon, ArrowPathIcon } from './Icons';

const FEATURES = [
  {
    icon: ChartPieIcon,
    title: 'Adaptive Analytics',
    description: 'Transform complex event data streams into structured metrics tables in real-time. Machine learning filters anomalies and predicts anomalies before they manifest.',
    tag: 'INTELLIGENCE'
  },
  {
    icon: Cog8ToothIcon,
    title: 'Autonomous Tuning',
    description: 'Our cognitive engine adjusts batch size, partitioning, and concurrency levels dynamically based on stream velocity, saving up to 60% on compute overhead.',
    tag: 'OPTIMIZATION'
  },
  {
    icon: ArrowPathIcon,
    title: 'Zero-Copy Pipelines',
    description: 'Synchronize relational databases, warehouse targets, and analytics backends seamlessly without storing temporary copies or introducing pipeline latency.',
    tag: 'WORKFLOWS'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-brand-dark/50">
      {/* Glow Shape */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[500px] glow-shape-teal rounded-full -translate-x-1/2 -translate-y-1/2 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-16 space-y-4">
          <span className="text-xs font-heading font-semibold text-brand-yellow uppercase tracking-widest">
            Core Engine Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-light">
            Engineered For Ultra-High Data Velocity
          </h2>
          <p className="text-brand-light/70 font-body text-base">
            Powering low-latency synchronization and self-healing pipelines for critical workloads.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feat, index) => {
            const IconComponent = feat.icon;
            return (
              <div 
                key={index}
                className="group relative rounded-2xl p-8 glass-panel border border-brand-border/10 transition-all duration-200 hover:-translate-y-1.5 hover:border-brand-yellow/30 hover:shadow-[0_15px_40px_-15px_rgba(255,200,1,0.15)] flex flex-col justify-between"
              >
                <div>
                  {/* Top Row with Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-brand-teal/20 text-brand-yellow border border-brand-border/5 group-hover:border-brand-yellow/20 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-heading font-medium tracking-widest text-brand-light/40">
                      {feat.tag}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-heading font-bold text-brand-light mb-3 group-hover:text-brand-yellow transition-colors duration-200">
                    {feat.title}
                  </h3>
                  
                  <p className="text-brand-light/75 font-body text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                {/* Bottom Border Accent decoration */}
                <div className="mt-8 pt-4 border-t border-brand-border/5 flex items-center gap-1.5 text-xs font-heading font-semibold text-brand-orange group-hover:text-brand-yellow transition-colors duration-200 cursor-pointer">
                  <span>Learn more</span>
                  <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">➔</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
