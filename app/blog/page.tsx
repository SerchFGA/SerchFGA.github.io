"use client";

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '@/lib/i18n';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function BlogPage() {
  const { t } = useTranslation();

  useEffect(() => {
    console.log("Blog page initialized");
  }, []);

  const handleGoBack = () => {
    console.log("Navigating back to home");
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-pixan-navy text-pixan-white">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Button
              onClick={handleGoBack}
              variant="ghost"
              className="mb-8 text-pixan-white hover:text-pixan-purple"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Button>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-pixan-white mb-4 text-glow">
              {t('blog.title')}
            </h1>
            <p className="text-xl text-pixan-white/80 max-w-3xl mx-auto">
              {t('blog.subtitle')}
            </p>
          </div>

          <div className="text-center py-24">
            <div className="glass-morphism rounded-lg p-12 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-pixan-white mb-4">
                Blog en construcción
              </h2>
              <p className="text-pixan-white/70 mb-8">
                Estamos preparando contenido increíble sobre automatización e IA para empresas. 
                ¡Pronto tendremos artículos disponibles!
              </p>
              <Button
                onClick={handleGoBack}
                className="bg-pixan-violet hover:bg-pixan-purple text-white"
              >
                Volver al inicio
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}