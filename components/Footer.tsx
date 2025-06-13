"use client";

import { useTranslation } from 'react-i18next';
import { LanguageToggle } from './LanguageToggle';
import { LegalModal } from './LegalModal';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Linkedin, Instagram, Mail } from 'lucide-react';
import { TikTokIcon } from './TikTokIcon';

export function Footer() {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    console.log("Footer: Scrolling to section:", id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSocialClick = (platform: string) => {
    console.log("Social media clicked:", platform);
    const socialLinks = {
      LinkedIn: 'https://linkedin.com/company/pixan-ai',
      Instagram: 'https://instagram.com/pixan.ai',
      TikTok: 'https://tiktok.com/@pixan.ai',
      Email: 'mailto:hola@pixanai.com'
    };
    
    if (socialLinks[platform as keyof typeof socialLinks]) {
      window.open(socialLinks[platform as keyof typeof socialLinks], '_blank');
    }
  };

  return (
    <footer className="bg-pixan-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <h3 className="text-3xl font-bold text-pixan-white text-glow">
                Pixan AI
              </h3>
            </div>
            <p className="text-pixan-white/70 text-lg mb-6 max-w-md leading-relaxed">
              {t('footer.description')}
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleSocialClick('LinkedIn')}
                className="glass-morphism hover:bg-white/10 text-pixan-white border-white/20 p-2 group"
              >
                <Linkedin className="w-5 h-5 transition-all duration-200 group-hover:fill-current" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleSocialClick('Instagram')}
                className="glass-morphism hover:bg-white/10 text-pixan-white border-white/20 p-2 group"
              >
                <Instagram className="w-5 h-5 transition-all duration-200 group-hover:fill-current" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleSocialClick('TikTok')}
                className="glass-morphism hover:bg-white/10 text-pixan-white border-white/20 p-2 group"
              >
                <TikTokIcon className="w-5 h-5 transition-all duration-200 group-hover:fill-current" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleSocialClick('Email')}
                className="glass-morphism hover:bg-white/10 text-pixan-white border-white/20 p-2 group"
              >
                <Mail className="w-5 h-5 transition-all duration-200 group-hover:fill-current" />
              </Button>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold text-pixan-white mb-4">
              Navegación
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-pixan-white/70 hover:text-pixan-purple transition-colors"
                >
                  {t('footer.links.services')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('blog')}
                  className="text-pixan-white/70 hover:text-pixan-purple transition-colors"
                >
                  {t('footer.links.blog')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-pixan-white/70 hover:text-pixan-purple transition-colors"
                >
                  {t('footer.links.contact')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-pixan-white/70 hover:text-pixan-purple transition-colors"
                >
                  {t('footer.links.about')}
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Language */}
          <div>
            <h4 className="text-lg font-semibold text-pixan-white mb-4">
              Legal
            </h4>
            <ul className="space-y-3 mb-6">
              <li>
                <LegalModal type="privacy">
                  <button className="text-pixan-white/70 hover:text-pixan-purple transition-colors">
                    {t('footer.links.privacy')}
                  </button>
                </LegalModal>
              </li>
              <li>
                <LegalModal type="terms">
                  <button className="text-pixan-white/70 hover:text-pixan-purple transition-colors">
                    {t('footer.links.terms')}
                  </button>
                </LegalModal>
              </li>
            </ul>
            
            {/* Language Toggle */}
            <div>
              <h5 className="text-sm font-medium text-pixan-white/80 mb-2">
                Idioma / Language
              </h5>
              <LanguageToggle />
            </div>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-pixan-white/60 text-sm mb-4 md:mb-0">
            {t('footer.rights')}
          </p>
          
          <div className="flex items-center space-x-6 text-sm text-pixan-white/60">
            <span>hola@pixanai.com</span>
            <span>+52 55 1234 5678</span>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-pixan-black to-transparent pointer-events-none" />
    </footer>
  );
}