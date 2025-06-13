"use client";

import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function HeroSection() {
  const { t } = useTranslation();

  const handleBookDemo = () => {
    console.log("Book demo button clicked");
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleChatWithAI = () => {
    console.log("Chat with AI button clicked");
    // Here you would integrate with your AI chat system
    // For now, just show an alert
    alert("AI Chat integration would be implemented here");
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-pixan-white leading-tight">
            <span className="block text-glow">
              {t('hero.title')}
            </span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-pixan-white/90 font-medium max-w-4xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </h2>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button
              onClick={handleBookDemo}
              size="lg"
              className="bg-pixan-violet hover:bg-pixan-purple text-white font-semibold px-8 py-4 text-lg rounded-full hover-lift box-glow transition-all duration-300 group"
            >
              {t('hero.cta.primary')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              onClick={handleChatWithAI}
              variant="outline"
              size="lg"
              className="bg-[rgba(255,255,255,0.08)] rounded-full px-6 text-primary border border-primary/30 hover:bg-primary/90 hover:text-white font-semibold py-4 text-lg transition-all duration-300 group backdrop-blur-md"
            >
              <MessageCircle className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              {t('hero.cta.secondary')}
            </Button>
          </div>
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-pixan-violet/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-pixan-purple/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/6 w-16 h-16 bg-pixan-violet/30 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-pixan-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-pixan-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}