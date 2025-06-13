"use client";

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { LanguageToggle } from './LanguageToggle';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    console.log("Scrolling to section:", id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-morphism shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-pixan-white text-glow hover:text-pixan-purple transition-colors"
            >
              Pixan AI
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-pixan-white hover:text-pixan-purple transition-colors font-medium"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-pixan-white hover:text-pixan-purple transition-colors font-medium"
            >
              {t('nav.blog')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-pixan-white hover:text-pixan-purple transition-colors font-medium"
            >
              {t('nav.contact')}
            </button>
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-pixan-white hover:text-pixan-purple"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="glass-morphism rounded-lg mt-2 py-4 px-4 space-y-4">
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-pixan-white hover:text-pixan-purple transition-colors font-medium py-2"
              >
                {t('nav.services')}
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="block w-full text-left text-pixan-white hover:text-pixan-purple transition-colors font-medium py-2"
              >
                {t('nav.blog')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-pixan-white hover:text-pixan-purple transition-colors font-medium py-2"
              >
                {t('nav.contact')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}