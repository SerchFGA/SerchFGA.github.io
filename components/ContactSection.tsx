"use client";

import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from "sonner";
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

export function ContactSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    console.log("Initializing contact section animations");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        formRef.current,
        {
          opacity: 0,
          y: 60,
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
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted with data:", formData);

    if (!validateForm()) {
      console.log("Form validation failed:", errors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Form submission successful:", formData);
      
      toast.success("¡Mensaje enviado exitosamente! Te contactaremos pronto.", {
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
      
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Error al enviar el mensaje. Por favor intenta nuevamente.", {
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-24 bg-gradient-to-b from-pixan-navy to-pixan-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-pixan-white mb-4 text-glow">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-pixan-white/80 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="md:col-span-1">
            <div className="bg-surface-variant/25 rounded-2xl p-6 flex flex-col gap-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pixan-violet/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-pixan-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-pixan-white mb-1">Email</h3>
                  <p className="text-pixan-white/70">hola@pixanai.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pixan-violet/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-pixan-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-pixan-white mb-1">Teléfono</h3>
                  <p className="text-pixan-white/70">+52 55 1234 5678</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pixan-violet/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-pixan-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-pixan-white mb-1">Ubicación</h3>
                  <p className="text-pixan-white/70">Ciudad de México, México</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className="md:col-span-1">
            <Card className="bg-white rounded-2xl shadow-xl/10 border-none">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {t('contact.form.submit')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-gray-900 mb-2 block font-medium">
                        {t('contact.form.name')} *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder={t('contact.form.placeholder.name')}
                        className={`bg-gray-50 ring-1 ring-primary/30 focus:ring-2 focus:ring-primary text-gray-900 placeholder-gray-500 ${
                          errors.name ? 'border-red-500' : ''
                        }`}
                        disabled={isSubmitting}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-gray-900 mb-2 block font-medium">
                        {t('contact.form.email')} *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder={t('contact.form.placeholder.email')}
                        className={`bg-gray-50 ring-1 ring-primary/30 focus:ring-2 focus:ring-primary text-gray-900 placeholder-gray-500 ${
                          errors.email ? 'border-red-500' : ''
                        }`}
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-gray-900 mb-2 block font-medium">
                      {t('contact.form.company')} *
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder={t('contact.form.placeholder.company')}
                      className={`bg-gray-50 ring-1 ring-primary/30 focus:ring-2 focus:ring-primary text-gray-900 placeholder-gray-500 ${
                        errors.company ? 'border-red-500' : ''
                      }`}
                      disabled={isSubmitting}
                    />
                    {errors.company && (
                      <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-900 mb-2 block font-medium">
                      {t('contact.form.message')} *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder={t('contact.form.placeholder.message')}
                      rows={5}
                      className={`bg-gray-50 ring-1 ring-primary/30 focus:ring-2 focus:ring-primary text-gray-900 placeholder-gray-500 resize-none ${
                        errors.message ? 'border-red-500' : ''
                      }`}
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-pixan-violet hover:bg-pixan-purple text-white font-semibold py-4 px-8 rounded-full hover-lift transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                        Enviando...
                      </div>
                    ) : (
                      <>
                        {t('contact.form.submit')}
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}