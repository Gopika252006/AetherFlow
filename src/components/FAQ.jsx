import React, { useState } from 'react';
import { ChevronDownIcon } from './Icons';

const FAQS = [
  {
    question: "How does the autonomous schema self-healing work?",
    answer: "AetherFlow continuously listens to schema metadata changes at the source. If a column is added or a datatype is modified (e.g., changing an integer to a float), our transformer automatically catches the type mismatch, queues the data record safely, adjusts the target destination schema to prevent crashes, and notifies your database administration slack channel."
  },
  {
    question: "What source database engines do you support?",
    answer: "We support PostgreSQL, MySQL, MongoDB, Kafka clusters, AWS S3 buckets, Snowflake Warehouses, Google BigQuery, and standard Salesforce webhooks. New connectors can be written via our custom JSON schema wizard."
  },
  {
    question: "Is there a penalty for changing currency rates?",
    answer: "No. Currency rates are updated in real-time dynamically using our regional matrix. Your billing is locked to the currency selected during contract initialization, ensuring absolute stability."
  },
  {
    question: "How secure is my data during synchronization?",
    answer: "Extremely secure. AetherFlow is SOC2 Type II certified. All data in transit is encrypted using TLS 1.3, and we support zero-copy pipelines where customer records are processed in volatile memory and never written to permanent disk storage within our network."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-background opacity-15 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-heading font-semibold text-brand-yellow uppercase tracking-widest bg-brand-teal/20 px-3 py-1.5 rounded-full border border-brand-border/10">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-light">
            Questions & Insights
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen ? 'border-brand-yellow/30 bg-brand-teal/10 shadow-lg' : 'border-brand-border/10 bg-brand-teal/5 hover:border-brand-border/20'
                }`}
              >
                {/* Header Toggle button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-sm md:text-base text-brand-light group-hover:text-brand-yellow transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDownIcon 
                    className={`w-5 h-5 text-brand-light/50 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-brand-yellow' : ''
                    }`} 
                  />
                </button>

                {/* Answer Box */}
                <div 
                  className={`transition-all duration-300 ease-in-out px-6 overflow-hidden ${
                    isOpen ? 'max-h-[300px] pb-6 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                  style={{ transitionProperty: 'max-height, opacity' }}
                >
                  <p className="text-sm text-brand-light/75 font-body leading-relaxed border-t border-brand-border/5 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
