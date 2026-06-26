import React from 'react';
import { ArrowTrendingUpIcon, Cog8ToothIcon, LinkSolidIcon } from './Icons';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden grid-background">
      {/* Glow Shapes */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] glow-shape-teal rounded-full -translate-x-1/2 -translate-y-1/2 -z-10 animate-pulse-subtle"></div>
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] glow-shape-orange rounded-full translate-x-1/2 -translate-y-1/2 -z-10 opacity-70"></div>
      <div className="absolute bottom-10 left-1/2 w-[700px] h-[400px] glow-shape-yellow rounded-full -translate-x-1/2 -z-10 opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side Info */}
        <div className="lg:col-span-6 space-y-8 text-left z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-border/10 text-xs font-medium text-brand-orange tracking-wider uppercase font-heading">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping"></span>
            AetherFlow Engine 2.0
          </div>
          
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand-light leading-tight tracking-tight">
            Automate Your <br />
            Data Pipeline With <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-orange">
              Autonomous AI
            </span>
          </h1>
          
          <p className="text-lg text-brand-light/75 max-w-xl font-body leading-relaxed">
            Ingest, clean, transform, and synchronize multi-source enterprise data streams at scale with our sub-millisecond AI-native automation engine.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="#cta" 
              className="relative group overflow-hidden px-7 py-4 rounded-lg bg-brand-yellow text-brand-dark font-bold text-base transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_4px_25px_rgba(255,200,1,0.25)] hover:shadow-[0_4px_30px_rgba(255,200,1,0.45)]"
            >
              Start Free Trial
            </a>
            
            <a 
              href="#demo" 
              className="px-7 py-4 rounded-lg bg-transparent text-brand-light border border-brand-border/20 font-semibold text-base hover:bg-brand-light/5 hover:border-brand-light/20 transition-all duration-300 active:scale-[0.98]"
            >
              Watch Live Demo
            </a>
          </div>

          <div className="flex items-center gap-6 pt-4 border-t border-brand-border/5 text-xs text-brand-light/50 font-heading uppercase tracking-widest">
            <div className="flex items-center gap-1.5">
              <span className="text-brand-yellow">✓</span> SOC2 COMPLIANT
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-brand-yellow">✓</span> ZERO-LANTENCY GUARANTEE
            </div>
          </div>
        </div>

        {/* Right Side Mockup */}
        <div className="lg:col-span-6 w-full flex justify-center z-10 relative">
          <div className="relative w-full max-w-lg glass-panel rounded-2xl p-4 md:p-6 shadow-2xl border border-brand-border/10 overflow-hidden group">
            {/* Top Bar controls */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-brand-border/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-brand-orange"></span>
                <span className="w-3 h-3 rounded-full bg-brand-yellow"></span>
                <span className="w-3 h-3 rounded-full bg-brand-teal"></span>
              </div>
              <span className="text-xs font-heading font-medium text-brand-light/40">aetherflow-worker-01</span>
              <div className="w-4 h-4 rounded bg-brand-light/5 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></span>
              </div>
            </div>

            {/* Pipeline mock content */}
            <div className="space-y-4 text-left">
              {/* Stat card header */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 rounded-lg bg-brand-dark/50 border border-brand-border/5">
                  <span className="block text-[10px] uppercase font-heading text-brand-light/40">Processing Rate</span>
                  <span className="text-lg font-heading font-bold text-brand-light">12,492 <span className="text-xs text-brand-light/50">r/s</span></span>
                </div>
                <div className="p-3 rounded-lg bg-brand-dark/50 border border-brand-border/5">
                  <span className="block text-[10px] uppercase font-heading text-brand-light/40">Sync Accuracy</span>
                  <span className="text-lg font-heading font-bold text-brand-orange">99.98%</span>
                </div>
              </div>

              {/* Dynamic code logs */}
              <div className="p-4 rounded-lg bg-brand-dark/95 border border-brand-border/10 font-heading text-xs space-y-2 overflow-x-auto no-scrollbar max-h-48">
                <div className="flex items-center justify-between text-brand-light/40">
                  <span>[09:42:01.002] INGESTING STREAM...</span>
                  <span className="text-[10px] text-brand-yellow font-bold uppercase">Success</span>
                </div>
                <div className="text-brand-light/80">
                  <span className="text-brand-yellow">❯</span> AI parsing nested schema details
                </div>
                <div className="text-brand-light/60">
                  <span className="text-brand-orange">❯</span> Normalizing ISO dates and keys... [24.1k nodes]
                </div>
                <div className="flex items-center justify-between text-brand-light/30">
                  <span>[09:42:01.218] INDEXING LOGS...</span>
                  <span className="text-brand-teal/80">Synced</span>
                </div>
                <div className="text-brand-light/50">
                  <span className="text-brand-yellow">❯</span> Broadcast webhook triggers: 12 recipients
                </div>
              </div>

              {/* Progress visualizer */}
              <div className="p-3.5 rounded-lg bg-brand-dark/50 border border-brand-border/5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Cog8ToothIcon className="w-5 h-5 text-brand-yellow animate-spin" />
                  <span className="font-heading font-bold text-brand-light/80">Anomaly Detection Active</span>
                </div>
                <span className="font-heading text-brand-yellow">0.8ms latency</span>
              </div>
            </div>

            {/* Subtle light reflections inside mockup */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 blur-2xl group-hover:bg-brand-orange/15 transition-all duration-300"></div>
          </div>

          {/* Floating cards */}
          <div className="absolute -top-6 -right-6 glass-panel border border-brand-border/20 rounded-xl p-3 shadow-xl flex items-center gap-3 animate-bounce [animation-duration:8s] select-none hover:scale-105 transition-all duration-200">
            <div className="p-2 rounded bg-brand-orange/10 text-brand-orange">
              <ArrowTrendingUpIcon className="w-5 h-5" />
            </div>
            <div className="text-left leading-tight">
              <span className="block text-[10px] text-brand-light/50 font-heading uppercase">Throughput</span>
              <span className="font-heading font-bold text-xs text-brand-light">+248% increase</span>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 glass-panel border border-brand-border/20 rounded-xl p-3 shadow-xl flex items-center gap-3 animate-bounce [animation-duration:12s] select-none hover:scale-105 transition-all duration-200">
            <div className="p-2 rounded bg-brand-yellow/10 text-brand-yellow">
              <LinkSolidIcon className="w-5 h-5" />
            </div>
            <div className="text-left leading-tight">
              <span className="block text-[10px] text-brand-light/50 font-heading uppercase">Active Connectors</span>
              <span className="font-heading font-bold text-xs text-brand-light">128 Database Nodes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
