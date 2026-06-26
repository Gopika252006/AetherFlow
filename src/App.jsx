import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedCompanies from './components/TrustedCompanies';
import Features from './components/Features';
import BentoGrid from './components/BentoGrid';
import DashboardPreview from './components/DashboardPreview';
import Statistics from './components/Statistics';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { ChevronUpSolidIcon } from './components/Icons';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-brand-light bg-brand-dark flex flex-col justify-between overflow-x-hidden selection:bg-brand-yellow selection:text-brand-dark">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Structural Layout */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Trusted Companies */}
        <TrustedCompanies />

        {/* Features Section */}
        <Features />

        {/* Premium Bento Grid Section */}
        <BentoGrid />

        {/* Interactive Dashboard telemetry Section */}
        <DashboardPreview />

        {/* Performance Statistics Section */}
        <Statistics />

        {/* Dynamic Pricing Matrix Section */}
        <Pricing />

        {/* Review Testimonials Section */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Final CTA conversion banner */}
        <CTA />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Back to Top floating button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 p-3 rounded-lg bg-brand-yellow text-brand-dark hover:scale-110 active:scale-95 transition-all duration-200 shadow-2xl z-50 border border-brand-yellow/30 animate-fade-in"
          aria-label="Scroll to top"
        >
          <ChevronUpSolidIcon className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
