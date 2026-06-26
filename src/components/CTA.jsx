import React from 'react';

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[400px] glow-shape-teal rounded-full -translate-x-1/2 -translate-y-1/2 -z-10 opacity-30"></div>
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] glow-shape-orange rounded-full -z-10 opacity-10"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="rounded-3xl p-10 md:p-16 glass-panel border border-brand-border/10 text-center space-y-8 relative overflow-hidden shadow-2xl">
          {/* Inner Grid Pattern Decoration */}
          <div className="absolute inset-0 grid-background opacity-[0.06] pointer-events-none"></div>

          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/10 text-[10px] font-heading font-extrabold tracking-wider text-brand-yellow border border-brand-yellow/20 uppercase">
            🚀 Accelerate pipelines now
          </span>

          <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-light leading-tight max-w-2xl mx-auto">
            Ready to Automate Your Data Architecture?
          </h2>

          <p className="text-base text-brand-light/70 font-body max-w-xl mx-auto leading-relaxed">
            Join enterprise engineering teams who have unlocked 60% compute reductions and sub-millisecond sync latencies.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a 
              href="#cta-trial" 
              className="px-8 py-4 rounded-lg bg-brand-yellow text-brand-dark font-heading font-extrabold text-sm hover:scale-[1.03] active:scale-[0.98] transition-transform shadow-[0_0_20px_rgba(255,200,1,0.2)]"
            >
              Start Free 14-Day Trial
            </a>
            
            <a 
              href="#contact-sales" 
              className="px-8 py-4 rounded-lg bg-transparent text-brand-light border border-brand-border/20 font-heading font-bold text-sm hover:bg-brand-light/5 hover:border-brand-light/20 transition-all active:scale-[0.98]"
            >
              Talk to an Architect
            </a>
          </div>

          <div className="pt-6 flex justify-center gap-8 text-[11px] font-heading text-brand-light/40 uppercase tracking-widest">
            <span>No credit card required</span>
            <span>•</span>
            <span>Deploy in 10 minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
