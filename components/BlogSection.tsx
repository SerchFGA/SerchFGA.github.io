"use client";

import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function BlogSection() {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    console.log("Initializing blog section animations");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
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

  // Sample blog posts with bilingual content
  const blogPosts = [
    {
      id: 1,
      title: i18n.language === 'es' 
        ? "5 Automatizaciones que todo SMB necesita en 2024"
        : "5 Automations Every SMB Needs in 2024",
      excerpt: i18n.language === 'es'
        ? "Descubre las automatizaciones más efectivas para pequeñas y medianas empresas que están revolucionando la productividad."
        : "Discover the most effective automations for small and medium businesses that are revolutionizing productivity.",
      date: i18n.language === 'es' ? "15 Nov 2024" : "Nov 15, 2024",
      readTime: i18n.language === 'es' ? "5 min" : "5 min",
      category: i18n.language === 'es' ? "Automatización" : "Automation",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&crop=center"
    },
    {
      id: 2,
      title: i18n.language === 'es'
        ? "ChatGPT vs Asistentes Personalizados: ¿Cuál elegir?"
        : "ChatGPT vs Custom Assistants: Which to Choose?",
      excerpt: i18n.language === 'es'
        ? "Comparamos las ventajas de usar ChatGPT genérico versus desarrollar un asistente AI personalizado para tu negocio."
        : "We compare the advantages of using generic ChatGPT versus developing a custom AI assistant for your business.",
      date: i18n.language === 'es' ? "10 Nov 2024" : "Nov 10, 2024",
      readTime: i18n.language === 'es' ? "7 min" : "7 min",
      category: i18n.language === 'es' ? "IA" : "AI",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&crop=center"
    },
    {
      id: 3,
      title: i18n.language === 'es'
        ? "ROI Real: Casos de éxito en automatización"
        : "Real ROI: Automation Success Stories",
      excerpt: i18n.language === 'es'
        ? "Casos reales de empresas que han implementado automatizaciones y los resultados concretos que obtuvieron."
        : "Real cases of companies that have implemented automations and the concrete results they achieved.",
      date: i18n.language === 'es' ? "5 Nov 2024" : "Nov 5, 2024",
      readTime: i18n.language === 'es' ? "6 min" : "6 min",
      category: i18n.language === 'es' ? "Casos de Éxito" : "Success Stories",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center"
    },
  ];

  const handleReadMore = (postId: number) => {
    console.log("Read more clicked for post:", postId);
    // In a real app, this would navigate to the full blog post
    alert(`Navigate to blog post ${postId}`);
  };

  const handleViewAll = () => {
    console.log("View all blog posts clicked");
    // In a real app, this would navigate to the blog page
    alert("Navigate to blog page");
  };

  return (
    <section 
      ref={sectionRef}
      id="blog" 
      className="py-24 bg-gradient-to-b from-pixan-black to-pixan-navy"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-pixan-white mb-4 text-glow">
            {t('blog.title')}
          </h2>
          <p className="text-xl text-pixan-white/80 max-w-3xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              ref={addToRefs}
              className="group"
            >
              <Card className="h-full bg-[rgba(255,255,255,0.08)] backdrop-blur-lg ring-1 ring-white/5 hover:ring-pixan-purple/30 transition-all duration-300 hover-lift overflow-hidden">
                {/* Blog Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader>
                  {/* Category and Meta Info */}
                  <div className="flex items-center justify-between text-sm text-pixan-white/60 mb-2">
                    <span className="bg-primary/15 text-primary px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg font-semibold text-on-surface/95 group-hover:text-pixan-purple transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-on-surface/80 mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  
                  <Button
                    onClick={() => handleReadMore(post.id)}
                    variant="ghost"
                    className="text-pixan-purple hover:text-pixan-white hover:bg-pixan-purple/20 p-0 h-auto font-medium group/btn"
                  >
                    {t('blog.readMore')}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            onClick={handleViewAll}
            variant="outline"
            size="lg"
            className="border-2 border-pixan-purple text-pixan-white hover:bg-pixan-purple/10 font-semibold px-8 py-4 rounded-full glass-morphism hover-lift transition-all duration-300 group"
          >
            {t('blog.viewAll')}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}