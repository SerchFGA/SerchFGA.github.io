"use client";

import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Bot, Calendar, Workflow } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function ServicesSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    console.log("Initializing services section animations");

    const ctx = gsap.context(() => {
      // Animate cards with stagger effect
      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const services = [
    {
      icon: Zap,
      title: t('services.automation.title'),
      description: t('services.automation.description'),
      gradient: 'from-yellow-500/20 to-orange-500/20',
    },
    {
      icon: Bot,
      title: t('services.chatbots.title'),
      description: t('services.chatbots.description'),
      gradient: 'from-blue-500/20 to-purple-500/20',
    },
    {
      icon: Calendar,
      title: t('services.scheduling.title'),
      description: t('services.scheduling.description'),
      gradient: 'from-green-500/20 to-teal-500/20',
    },
    {
      icon: Workflow,
      title: t('services.integrations.title'),
      description: t('services.integrations.description'),
      gradient: 'from-pink-500/20 to-rose-500/20',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="py-24 bg-gradient-to-b from-pixan-navy to-pixan-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-pixan-white mb-4 text-glow">
            {t('services.title')}
          </h2>
          <p className="text-xl text-pixan-white/80 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div
                key={index}
                ref={addToRefs}
                className="group"
              >
                <Card className="h-full bg-[rgba(255,255,255,0.07)] text-on-surface/90 border-white/10 hover:ring-primary/30 hover:translate-y-[-4px] transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-br ${service.gradient} p-4 mb-4 opacity-90 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-pixan-white mx-auto" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-pixan-white group-hover:text-pixan-purple transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-pixan-white/70 text-center leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}