import React, { useState, useEffect } from 'react';
import { Cube16SolidIcon, XMarkIcon } from './Icons';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-4 glass-panel border-b border-brand-border/10 shadow-lg' 
        : 'py-6 bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 font-heading font-bold text-xl text-brand-light tracking-tight group">
          <Cube16SolidIcon className="w-6 h-6 text-brand-yellow transition-transform duration-300 group-hover:rotate-12" />
          <span>Aether<span className="text-brand-yellow">Flow</span></span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <a href="#" className="text-brand-light/70 hover:text-brand-light transition-colors relative group py-2">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#features" className="text-brand-light/70 hover:text-brand-light transition-colors relative group py-2">
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#pricing" className="text-brand-light/70 hover:text-brand-light transition-colors relative group py-2">
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#faq" className="text-brand-light/70 hover:text-brand-light transition-colors relative group py-2">
            FAQ
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="text-brand-light/70 hover:text-brand-light transition-colors relative group py-2">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a 
            href="#cta" 
            className="relative group overflow-hidden px-5 py-2.5 rounded-lg bg-brand-light text-brand-dark font-semibold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] inline-block shadow-[0_0_15px_rgba(241,246,244,0.1)] hover:shadow-[0_0_20px_rgba(255,200,1,0.2)]"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-brand-dark">Get Started</span>
            <span className="absolute inset-0 bg-brand-yellow transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></span>
            <span className="absolute inset-0 bg-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-brand-light hover:text-brand-yellow transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 glass-panel border-b border-brand-border/10 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-[320px] opacity-100 py-4 shadow-xl' : 'max-h-0 opacity-0 py-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col px-6 gap-4 text-sm font-medium">
          <a href="#" className="text-brand-light/75 hover:text-brand-light py-1.5 transition-colors border-b border-brand-border/5" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#features" className="text-brand-light/75 hover:text-brand-light py-1.5 transition-colors border-b border-brand-border/5" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#pricing" className="text-brand-light/75 hover:text-brand-light py-1.5 transition-colors border-b border-brand-border/5" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          <a href="#faq" className="text-brand-light/75 hover:text-brand-light py-1.5 transition-colors border-b border-brand-border/5" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <a href="#contact" className="text-brand-light/75 hover:text-brand-light py-1.5 transition-colors border-b border-brand-border/5" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <a 
            href="#cta" 
            className="mt-2 text-center bg-brand-yellow text-brand-dark py-2.5 rounded-lg font-semibold active:scale-[0.98] transition-transform" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}
