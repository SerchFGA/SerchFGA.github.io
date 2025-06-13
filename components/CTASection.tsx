"use client";

import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CountUp from 'react-countup';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function CTASection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [startCounter, setStartCounter] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    console.log("Initializing CTA section with animated counter");

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const ctx = gsap.context(() => {
      // Animate section elements
      const ctaContent = sectionRef.current?.querySelector('.cta-content');
      if (ctaContent && !prefersReducedMotion) {
        gsap.fromTo(
          ctaContent,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
              onEnter: () => setStartCounter(true),
            },
          }
        );
      } else if (ctaContent) {
        // For reduced motion, just trigger counter
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 80%",
          onEnter: () => setStartCounter(true),
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const handleBookDemo = () => {
    console.log("CTA Book demo button clicked");
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{
        background: 'radial-gradient(circle at center, #4b2a9a 0%, #14192b 100%)',
      }}
    >
      {/* Animated noise layer */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/6 w-40 h-40 bg-pixan-purple/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-56 h-56 bg-pixan-violet/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pixan-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="cta-content text-center">
          {/* Animated Counter */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center p-8 glass-morphism rounded-2xl border border-white/20 mb-6">
              <span className="text-5xl sm:text-6xl font-bold text-pixan-white text-glow">
                +<span className={!prefersReducedMotion ? 'animate-glitch' : ''}>
                  {startCounter ? (
                    <CountUp
                      end={1200}
                      duration={3}
                      separator=","
                      preserveValue
                    />
                  ) : (
                    '0'
                  )}
                </span>
              </span>
            </div>
            <p className="text-2xl sm:text-3xl font-semibold text-pixan-white/90">
              {t('cta.counter')}
            </p>
          </div>

          {/* Main Content */}
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-pixan-white mb-6 text-glow">
            {t('cta.title')}
          </h2>
          
          <p className="text-xl text-pixan-white/80 max-w-4xl mx-auto mb-10 leading-relaxed">
            {t('cta.description')}
          </p>

          {/* CTA Button */}
          <Button
            onClick={handleBookDemo}
            size="lg"
            className="bg-white text-pixan-navy hover:bg-pixan-white/90 font-bold px-10 py-5 text-xl rounded-full hover-lift transition-all duration-300 group shadow-2xl"
          >
            {t('cta.button')}
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}