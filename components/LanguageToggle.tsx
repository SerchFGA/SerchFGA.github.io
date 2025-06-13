"use client";

import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className = "" }: LanguageToggleProps) {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    console.log("Toggling language from", i18n.language);
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
    console.log("Language changed to", newLang);
    
    // Update document lang attribute for accessibility
    document.documentElement.lang = newLang;
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className={`glass-morphism hover:bg-white/10 text-pixan-white border-white/20 ${className}`}
      aria-label={`Switch to ${i18n.language === 'es' ? 'English' : 'Español'}`}
    >
      <Globe className="w-4 h-4 mr-2" />
      <span className="font-medium">
        {i18n.language === 'es' ? 'EN' : 'ES'}
      </span>
    </Button>
  );
}