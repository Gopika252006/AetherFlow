import React from 'react';

const COMPANIES = [
  'OpenAI',
  'Snowflake',
  'Databricks',
  'Stripe',
  'Vercel',
  'Supabase',
  'Linear',
  'Pinecone',
  'OpenAI',
  'Snowflake',
  'Databricks',
  'Stripe',
  'Vercel',
  'Supabase',
  'Linear',
  'Pinecone',
];

export default function TrustedCompanies() {
  return (
    <section className="py-12 bg-brand-dark border-y border-brand-border/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <h2 className="text-center text-xs font-heading font-medium tracking-widest text-brand-light/40 uppercase">
          Trusted by high-performance data teams worldwide
        </h2>
      </div>
      
      {/* Marquee Wrapper */}
      <div className="relative w-full flex items-center overflow-hidden py-4 select-none">
        {/* Left Gradient Fade */}
        <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none"></div>
        {/* Right Gradient Fade */}
        <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Inner Container */}
        <div className="flex gap-20 whitespace-nowrap animate-marquee">
          {COMPANIES.map((company, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 text-brand-light/50 font-heading font-bold text-lg hover:text-brand-yellow hover:scale-105 transition-all duration-300 cursor-default"
            >
              <span className="text-brand-orange/60">◆</span>
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
