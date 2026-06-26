import React from 'react';
import { Cube16SolidIcon, LinkIcon } from './Icons';

export default function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Subscription simulated! Thank you for signing up.');
  };

  return (
    <footer className="bg-brand-dark border-t border-brand-border/10 py-16 text-left relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 relative z-10">
        
        {/* Column 1: Brand details (Col 4) */}
        <div className="md:col-span-4 space-y-6">
          <a href="#" className="flex items-center gap-2 font-heading font-bold text-xl text-brand-light tracking-tight group">
            <Cube16SolidIcon className="w-6 h-6 text-brand-yellow transition-transform duration-300 group-hover:rotate-12" />
            <span>Aether<span className="text-brand-yellow">Flow</span></span>
          </a>
          <p className="text-xs text-brand-light/60 font-body leading-relaxed max-w-sm">
            Autonomous data synchronization and schema alignment engine built for sub-millisecond enterprise pipelines.
          </p>
        </div>

        {/* Column 2: Navigation Links (Col 2) */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-xs font-heading font-bold text-brand-light/40 uppercase tracking-wider">Company</h4>
          <ul className="space-y-2 text-xs font-body">
            <li><a href="#" className="text-brand-light/70 hover:text-brand-yellow transition-colors">About Us</a></li>
            <li><a href="#" className="text-brand-light/70 hover:text-brand-yellow transition-colors">Careers</a></li>
            <li><a href="#" className="text-brand-light/70 hover:text-brand-yellow transition-colors">Blog</a></li>
            <li><a href="#" className="text-brand-light/70 hover:text-brand-yellow transition-colors">Customers</a></li>
          </ul>
        </div>

        {/* Column 3: Resource Links (Col 2) */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-xs font-heading font-bold text-brand-light/40 uppercase tracking-wider">Resources</h4>
          <ul className="space-y-2 text-xs font-body">
            <li>
              <a href="#" className="text-brand-light/70 hover:text-brand-yellow transition-colors inline-flex items-center gap-1">
                Documentation <LinkIcon className="w-3.5 h-3.5 text-brand-light/40" />
              </a>
            </li>
            <li>
              <a href="#" className="text-brand-light/70 hover:text-brand-yellow transition-colors inline-flex items-center gap-1">
                API Reference <LinkIcon className="w-3.5 h-3.5 text-brand-light/40" />
              </a>
            </li>
            <li><a href="#" className="text-brand-light/70 hover:text-brand-yellow transition-colors">System Status</a></li>
            <li><a href="#" className="text-brand-light/70 hover:text-brand-yellow transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter Form (Col 4) */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-xs font-heading font-bold text-brand-light/40 uppercase tracking-wider">Newsletter</h4>
          <p className="text-xs text-brand-light/60 font-body leading-relaxed">
            Get technical updates, benchmark studies, and product announcements.
          </p>
          
          <form onSubmit={handleSubscribe} className="flex gap-2 w-full pt-1">
            <input 
              type="email" 
              required
              aria-label="Email Address for newsletter"
              placeholder="name@company.com" 
              className="flex-1 px-3 py-2 text-xs rounded bg-brand-dark/50 border border-brand-border/10 focus:border-brand-yellow/50 focus:outline-none text-brand-light font-body"
            />
            <button 
              type="submit" 
              className="px-4 py-2 bg-brand-light text-brand-dark font-heading font-bold text-xs rounded hover:bg-brand-yellow hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Row: Copyright & Social Links with Tooltips */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-brand-border/5 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
        <span className="text-[11px] font-heading text-brand-light/35">
          © {new Date().getFullYear()} AetherFlow Inc. All rights reserved.
        </span>

        <div className="flex items-center gap-6">
          {/* Twitter social link + tooltip */}
          <div className="relative group/tooltip">
            <a 
              href="https://twitter.com/aetherflow" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-describedby="tooltip-twitter"
              className="text-xs font-heading font-semibold text-brand-light/50 hover:text-brand-yellow transition-colors focus:text-brand-yellow focus:outline-none"
            >
              Twitter
            </a>
            <span 
              id="tooltip-twitter"
              role="tooltip" 
              className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-brand-light text-brand-dark text-[9px] font-heading font-bold rounded opacity-0 group-hover/tooltip:opacity-100 group-focus-within/tooltip:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap shadow-xl"
            >
              Follow AetherFlow on X
            </span>
          </div>

          {/* GitHub social link + tooltip */}
          <div className="relative group/tooltip">
            <a 
              href="https://github.com/aetherflow" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-describedby="tooltip-github"
              className="text-xs font-heading font-semibold text-brand-light/50 hover:text-brand-yellow transition-colors focus:text-brand-yellow focus:outline-none"
            >
              GitHub
            </a>
            <span 
              id="tooltip-github"
              role="tooltip" 
              className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-brand-light text-brand-dark text-[9px] font-heading font-bold rounded opacity-0 group-hover/tooltip:opacity-100 group-focus-within/tooltip:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap shadow-xl"
            >
              Access Open Source Repo
            </span>
          </div>

          {/* Discord social link + tooltip */}
          <div className="relative group/tooltip">
            <a 
              href="https://discord.gg/aetherflow" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-describedby="tooltip-discord"
              className="text-xs font-heading font-semibold text-brand-light/50 hover:text-brand-yellow transition-colors focus:text-brand-yellow focus:outline-none"
            >
              Discord
            </a>
            <span 
              id="tooltip-discord"
              role="tooltip" 
              className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-brand-light text-brand-dark text-[9px] font-heading font-bold rounded opacity-0 group-hover/tooltip:opacity-100 group-focus-within/tooltip:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap shadow-xl"
            >
              Join Developer Server
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
