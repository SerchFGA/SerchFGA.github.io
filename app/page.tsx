"use client";

import { useEffect } from 'react';
import '@/lib/i18n';
import { ParticleBackground } from '@/components/ParticleBackground';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { CTASection } from '@/components/CTASection';
import { BlogSection } from '@/components/BlogSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    console.log("Pixan AI landing page initialized");
    
    // Set initial document language
    document.documentElement.lang = 'es';
    
    // Add performance monitoring
    if (typeof window !== 'undefined') {
      const startTime = performance.now();
      
      window.addEventListener('load', () => {
        const loadTime = performance.now() - startTime;
        console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-pixan-navy text-pixan-white">
      {/* WebGL Particle Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <ServicesSection />
        <CTASection />
        <BlogSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
