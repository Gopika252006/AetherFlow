import React, { useState, memo } from 'react';
import { ChevronDownIcon } from './Icons';

// Regional Currency Matrix
const CURRENCY_MATRIX = {
  USD: { symbol: '$', multiplier: 1.0, name: 'USD (United States Dollar)' },
  EUR: { symbol: '€', multiplier: 0.9, name: 'EUR (Euro)' },
  INR: { symbol: '₹', multiplier: 80.0, name: 'INR (Indian Rupee)' }
};

// Base Monthly USD Prices
const BASE_PRICING = {
  starter: 49,
  professional: 149,
  enterprise: 499
};

const PLAN_FEATURES = {
  starter: [
    'Up to 3 active data streams',
    '1.2ms average latency overhead',
    '10 GB monthly sync volume',
    'Standard schema automation',
    'Email support (24hr SLA)'
  ],
  professional: [
    'Unlimited data streams',
    '0.4ms latency priority paths',
    '250 GB monthly sync volume',
    'Adaptive anomaly radar',
    'Self-healing schemas active',
    'Priority Slack support (2hr SLA)'
  ],
  enterprise: [
    'Unlimited streams & gateways',
    'Sub-millisecond global route mesh',
    'Unlimited sync volume',
    'Dedicated AI agent orchestration',
    'Custom schema repair pipelines',
    'Dedicated support engineer (24/7)'
  ]
};

// Wrap component in memo to avoid parent rerenders
const Pricing = memo(function Pricing() {
  const [currency, setCurrency] = useState('USD');
  const [billing, setBilling] = useState('monthly'); // 'monthly' or 'annual'
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Dynamic pricing calculations
  const calculatePrice = (planKey) => {
    const base = BASE_PRICING[planKey];
    const { multiplier } = CURRENCY_MATRIX[currency];
    
    // Base monthly rate * regional multiplier
    let calculatedRate = base * multiplier;
    
    // Apply 20% discount if billing is annual
    if (billing === 'annual') {
      calculatedRate = calculatedRate * 0.8;
    }
    
    // Round to clean integer
    return Math.round(calculatedRate);
  };

  const handleCurrencySelect = (currCode) => {
    setCurrency(currCode);
    setDropdownOpen(false);
  };

  return (
    <section id="pricing" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Subtle Glow background */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] glow-shape-teal rounded-full translate-x-1/2 -translate-y-1/2 -z-10 opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-left">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-heading font-semibold text-brand-yellow uppercase tracking-widest">
              Flexible Compute Scaling
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-light">
              Clear, Computed Pricing
            </h2>
            <p className="text-brand-light/70 font-body text-base">
              Dynamically calculated rates based on regional currencies and billing frequencies.
            </p>
          </div>

          {/* Controls: Currency Dropdown & Billing Toggle */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Currency Select Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="px-4 py-2.5 rounded-lg glass-panel border border-brand-border/10 text-sm font-heading font-semibold text-brand-light flex items-center gap-2 hover:border-brand-yellow/30 transition-colors"
                aria-expanded={dropdownOpen}
                aria-haspopup="listbox"
              >
                <span>{CURRENCY_MATRIX[currency].symbol} {currency}</span>
                <ChevronDownIcon className={`w-4 h-4 text-brand-light/60 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <ul className="absolute right-0 mt-2 w-56 rounded-lg glass-panel border border-brand-border/15 py-1.5 shadow-2xl z-20 animate-fade-in text-left">
                  {Object.keys(CURRENCY_MATRIX).map((key) => (
                    <li key={key}>
                      <button
                        onClick={() => handleCurrencySelect(key)}
                        className={`w-full px-4 py-2 text-xs font-heading font-medium text-left hover:bg-brand-teal/20 transition-colors ${
                          currency === key ? 'text-brand-yellow font-bold' : 'text-brand-light/75'
                        }`}
                      >
                        {CURRENCY_MATRIX[key].name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Billing Toggle (Monthly / Annual) */}
            <div className="p-1 rounded-lg bg-brand-dark/60 border border-brand-border/10 flex items-center">
              <button 
                onClick={() => setBilling('monthly')}
                className={`px-4 py-1.5 rounded-md text-xs font-heading font-bold transition-all ${
                  billing === 'monthly' 
                    ? 'bg-brand-teal/40 text-brand-yellow shadow-md' 
                    : 'text-brand-light/60 hover:text-brand-light'
                }`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setBilling('annual')}
                className={`px-4 py-1.5 rounded-md text-xs font-heading font-bold transition-all flex items-center gap-1.5 ${
                  billing === 'annual' 
                    ? 'bg-brand-teal/40 text-brand-yellow shadow-md' 
                    : 'text-brand-light/60 hover:text-brand-light'
                }`}
              >
                Annual
                <span className="text-[10px] text-brand-orange bg-brand-orange/10 px-1 py-0.5 rounded font-heading font-extrabold uppercase">
                  -20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Starter */}
          <div className="rounded-2xl p-8 glass-panel border border-brand-border/10 hover:border-brand-border/25 transition-all duration-300 flex flex-col justify-between text-left">
            <div>
              <span className="text-[10px] font-heading font-bold text-brand-light/40 uppercase tracking-widest">
                Tier 01
              </span>
              <h3 className="text-xl font-heading font-bold text-brand-light mt-1">Starter</h3>
              <p className="text-xs text-brand-light/60 font-body mt-2">
                Ideal for testing workflows and sandbox setups.
              </p>
              
              <div className="my-8">
                <span className="text-4xl font-heading font-extrabold text-brand-light">
                  {CURRENCY_MATRIX[currency].symbol}{calculatePrice('starter')}
                </span>
                <span className="text-xs font-heading text-brand-light/40 ml-1">/ month</span>
                {billing === 'annual' && (
                  <span className="block text-[10px] font-heading text-brand-orange mt-1">Billed annually</span>
                )}
              </div>

              <hr className="border-brand-border/5 mb-8" />

              <ul className="space-y-4 text-xs font-body text-brand-light/80">
                {PLAN_FEATURES.starter.map((f, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <span className="text-brand-yellow">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <a 
              href="#cta" 
              className="mt-8 w-full text-center py-3 rounded-lg bg-brand-light/5 text-brand-light hover:bg-brand-light/10 font-heading font-bold text-sm border border-brand-border/10 hover:border-brand-border/20 transition-all duration-200"
            >
              Get Started
            </a>
          </div>

          {/* Card 2: Professional (Highlighted) */}
          <div className="rounded-2xl p-8 bg-brand-teal/15 border-2 border-brand-yellow shadow-2xl hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between text-left relative">
            <span className="absolute top-0 right-8 -translate-y-1/2 bg-brand-yellow text-brand-dark px-3 py-1 rounded-full text-[10px] font-heading font-bold uppercase tracking-wider shadow-lg">
              Most Popular
            </span>
            
            <div>
              <span className="text-[10px] font-heading font-bold text-brand-yellow uppercase tracking-widest">
                Tier 02
              </span>
              <h3 className="text-xl font-heading font-bold text-brand-light mt-1">Professional</h3>
              <p className="text-xs text-brand-light/60 font-body mt-2">
                Optimal for production data streams and scaling operations.
              </p>
              
              <div className="my-8">
                <span className="text-4xl font-heading font-extrabold text-brand-light">
                  {CURRENCY_MATRIX[currency].symbol}{calculatePrice('professional')}
                </span>
                <span className="text-xs font-heading text-brand-light/40 ml-1">/ month</span>
                {billing === 'annual' && (
                  <span className="block text-[10px] font-heading text-brand-orange mt-1">Billed annually</span>
                )}
              </div>

              <hr className="border-brand-border/10 mb-8" />

              <ul className="space-y-4 text-xs font-body text-brand-light/95">
                {PLAN_FEATURES.professional.map((f, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <span className="text-brand-yellow">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <a 
              href="#cta" 
              className="mt-8 w-full text-center py-3 rounded-lg bg-brand-yellow text-brand-dark font-heading font-extrabold text-sm hover:shadow-[0_0_20px_rgba(255,200,1,0.3)] transition-all duration-200"
            >
              Start Professional Trial
            </a>
          </div>

          {/* Card 3: Enterprise */}
          <div className="rounded-2xl p-8 glass-panel border border-brand-border/10 hover:border-brand-border/25 transition-all duration-300 flex flex-col justify-between text-left">
            <div>
              <span className="text-[10px] font-heading font-bold text-brand-light/40 uppercase tracking-widest">
                Tier 03
              </span>
              <h3 className="text-xl font-heading font-bold text-brand-light mt-1">Enterprise</h3>
              <p className="text-xs text-brand-light/60 font-body mt-2">
                Engineered for massive transaction levels and global scale.
              </p>
              
              <div className="my-8">
                <span className="text-4xl font-heading font-extrabold text-brand-light">
                  {CURRENCY_MATRIX[currency].symbol}{calculatePrice('enterprise')}
                </span>
                <span className="text-xs font-heading text-brand-light/40 ml-1">/ month</span>
                {billing === 'annual' && (
                  <span className="block text-[10px] font-heading text-brand-orange mt-1">Billed annually</span>
                )}
              </div>

              <hr className="border-brand-border/5 mb-8" />

              <ul className="space-y-4 text-xs font-body text-brand-light/80">
                {PLAN_FEATURES.enterprise.map((f, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <span className="text-brand-yellow">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <a 
              href="#cta" 
              className="mt-8 w-full text-center py-3 rounded-lg bg-brand-light/5 text-brand-light hover:bg-brand-light/10 font-heading font-bold text-sm border border-brand-border/10 hover:border-brand-border/20 transition-all duration-200"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Pricing;
