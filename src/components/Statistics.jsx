import React, { useRef, useState, useEffect } from 'react';

const STATS = [
  { 
    label: 'Data Pipelines', 
    className: 'counter-projects', 
    suffix: '+', 
    desc: 'Autonomous active streams' 
  },
  { 
    label: 'Revenue Impact', 
    className: 'counter-revenue', 
    prefix: '$', 
    suffix: 'M+', 
    desc: 'Compute cost savings generated' 
  },
  { 
    label: 'Global Enterprises', 
    className: 'counter-customers', 
    suffix: '+', 
    desc: 'Companies running AetherFlow' 
  },
  { 
    label: 'AI Agents Deployed', 
    className: 'counter-models', 
    suffix: '+', 
    desc: 'Continuous anomaly detectors' 
  },
  { 
    label: 'Processing Efficiency', 
    className: 'counter-automation', 
    suffix: '%', 
    desc: 'Average sync rate acceleration' 
  }
];

export default function Statistics() {
  const sectionRef = useRef(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasLoaded(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-24 bg-brand-dark border-b border-brand-border/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 dot-background opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Metric boxes container */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {STATS.map((stat, index) => (
            <div 
              key={index} 
              className="text-left space-y-2 group p-4 rounded-xl hover:bg-brand-teal/5 transition-colors duration-300"
            >
              <span className="block text-xs font-heading font-semibold text-brand-orange uppercase tracking-wider">
                {stat.label}
              </span>
              
              <div className="text-3xl md:text-5xl font-heading font-extrabold text-brand-light flex items-baseline">
                {stat.prefix && <span className="mr-1 text-2xl md:text-3xl text-brand-light/60">{stat.prefix}</span>}
                <span className={`${stat.className} ${hasLoaded ? 'start-counting' : ''}`}>
                  {/* Fallback for servers / non-JS browsers or quick read */}
                  {!hasLoaded && '0'}
                </span>
                <span className="text-brand-yellow ml-0.5">{stat.suffix}</span>
              </div>
              
              <p className="text-xs text-brand-light/50 font-body leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
