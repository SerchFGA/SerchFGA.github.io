import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: {
    translation: {
      // Navigation
      "nav.services": "Servicios",
      "nav.blog": "Blog",
      "nav.contact": "Contacto",
      
      // Hero Section
      "hero.title": "Automatiza con alma",
      "hero.subtitle": "Agencia de automatizaciones y agentes AI para pymes",
      "hero.cta.primary": "Agenda tu demo",
      "hero.cta.secondary": "Habla con nuestro agente AI",
      
      // Services Section
      "services.title": "Nuestros Servicios",
      "services.subtitle": "Soluciones de automatización diseñadas para impulsar tu negocio",
      "services.automation.title": "Automatización de procesos",
      "services.automation.description": "Optimiza flujos de trabajo repetitivos y libera tiempo valioso para tu equipo.",
      "services.chatbots.title": "Chatbots y asistentes IA",
      "services.chatbots.description": "Asistentes inteligentes que atienden a tus clientes 24/7 con respuestas personalizadas.",
      "services.scheduling.title": "Sistemas de agendamiento",
      "services.scheduling.description": "Gestión automática de citas y calendarios que se sincroniza con todos tus sistemas.",
      "services.integrations.title": "Integraciones no-code",
      "services.integrations.description": "Conecta todas tus herramientas sin necesidad de desarrollo técnico complejo.",
      
      // CTA Section
      "cta.counter": "+1200 horas ahorradas",
      "cta.title": "Ahorramos tiempo y dinero a tu equipo",
      "cta.description": "Nuestras automatizaciones han ayudado a más de 50 empresas a optimizar sus procesos y enfocar su energía en lo que realmente importa: hacer crecer su negocio.",
      "cta.button": "Agenda tu demo",
      
      // Blog Section
      "blog.title": "Últimas publicaciones",
      "blog.subtitle": "Mantente al día con las últimas tendencias en automatización e IA",
      "blog.readMore": "Leer más",
      "blog.viewAll": "Ver todos los artículos",
      
      // Contact Section
      "contact.title": "¿Listo para automatizar?",
      "contact.subtitle": "Cuéntanos sobre tu proyecto y descubre cómo podemos ayudarte",
      "contact.form.name": "Nombre",
      "contact.form.email": "Email",
      "contact.form.company": "Empresa",
      "contact.form.message": "Mensaje",
      "contact.form.submit": "Enviar mensaje",
      "contact.form.placeholder.name": "Tu nombre completo",
      "contact.form.placeholder.email": "tu@email.com",
      "contact.form.placeholder.company": "Nombre de tu empresa",
      "contact.form.placeholder.message": "Cuéntanos sobre tu proyecto...",
      
      // Footer
      "footer.description": "Automatizaciones con alma para empresas que quieren crecer sin límites.",
      "footer.links.services": "Servicios",
      "footer.links.about": "Nosotros",
      "footer.links.blog": "Blog",
      "footer.links.contact": "Contacto",
      "footer.links.privacy": "Privacidad",
      "footer.links.terms": "Términos",
      "footer.rights": "© 2024 Pixan AI. Todos los derechos reservados.",
    }
  },
  en: {
    translation: {
      // Navigation
      "nav.services": "Services",
      "nav.blog": "Blog",
      "nav.contact": "Contact",
      
      // Hero Section
      "hero.title": "Automation with soul",
      "hero.subtitle": "AI automation agency for SMBs",
      "hero.cta.primary": "Book your demo",
      "hero.cta.secondary": "Chat with our AI agent",
      
      // Services Section
      "services.title": "Our Services",
      "services.subtitle": "Automation solutions designed to boost your business",
      "services.automation.title": "Process automation",
      "services.automation.description": "Optimize repetitive workflows and free up valuable time for your team.",
      "services.chatbots.title": "AI chatbots & assistants",
      "services.chatbots.description": "Intelligent assistants that serve your customers 24/7 with personalized responses.",
      "services.scheduling.title": "Scheduling systems",
      "services.scheduling.description": "Automatic appointment and calendar management that syncs with all your systems.",
      "services.integrations.title": "No-code integrations",
      "services.integrations.description": "Connect all your tools without the need for complex technical development.",
      
      // CTA Section
      "cta.counter": "+1200 hours saved",
      "cta.title": "We save your team's time & money",
      "cta.description": "Our automations have helped over 50 companies optimize their processes and focus their energy on what really matters: growing their business.",
      "cta.button": "Book your demo",
      
      // Blog Section
      "blog.title": "Latest posts",
      "blog.subtitle": "Stay up to date with the latest automation and AI trends",
      "blog.readMore": "Read more",
      "blog.viewAll": "View all articles",
      
      // Contact Section
      "contact.title": "Ready to automate?",
      "contact.subtitle": "Tell us about your project and discover how we can help you",
      "contact.form.name": "Name",
      "contact.form.email": "Email",
      "contact.form.company": "Company",
      "contact.form.message": "Message",
      "contact.form.submit": "Send message",
      "contact.form.placeholder.name": "Your full name",
      "contact.form.placeholder.email": "your@email.com",
      "contact.form.placeholder.company": "Your company name",
      "contact.form.placeholder.message": "Tell us about your project...",
      
      // Footer
      "footer.description": "Automation with soul for companies that want to grow without limits.",
      "footer.links.services": "Services",
      "footer.links.about": "About",
      "footer.links.blog": "Blog",
      "footer.links.contact": "Contact",
      "footer.links.privacy": "Privacy",
      "footer.links.terms": "Terms",
      "footer.rights": "© 2024 Pixan AI. All rights reserved.",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;