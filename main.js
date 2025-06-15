// Language translations
const translations = {
  en: {
    heroSub: "We craft AI agents & automations that free time and amplify human value.",
    howTitle: "How it works",
    hw1: "Kick-off call",
    hw1Text: "Scope & requirements capture.",
    hw2: "Proposal & quote",
    hw2Text: "Fixed scope, timeline & pricing.",
    hw3: "Rapid MVP",
    hw3Text: "Working version in days for validation.",
    hw4: "Full build",
    hw4Text: "End-to-end development & integration.",
    hw5: "Initial test",
    hw5Text: "A/B test & fine-tuning with live data.",
    hw6: "Continuous improvement",
    hw6Text: "Support, metrics & monthly optimisation.",
    servicesTitle: "Featured Services",
    sv1: "Process automation",
    sv1Text: "End-to-end backend & RPA flows to remove repetition.",
    sv2: "Omnichannel AI agents",
    sv2Text: "WhatsApp, web & enterprise chat.",
    sv3: "AI-powered systems",
    sv3Text: "Apps that think & decide in real-time.",
    sv4: "AI in your workflow",
    sv4Text: "Embed ML models in your current stack.",
    sv5: "Automation audits",
    sv5Text: "Map & ROI internal opportunities.",
    sv6: "AI content for social",
    sv6Text: "Auto-generated, on-brand posts.",
    sv7: "AI-built websites",
    sv7Text: "Landing pages in hours.",
    faqTitle: "Frequently Asked Questions",
    q1: "How long does a typical project take?",
    a1: "From 2 weeks for simple solutions to 2 months for complex systems. We always deliver incremental value.",
    q2: "How does pricing work?",
    a2: "We offer project-based fees or monthly subscriptions based on your needs. Contact us for a personalized quote.",
    q3: "Do I need technical skills?",
    a3: "No. We handle all the technical aspects. We just need to understand your process and business goals.",
    q4: "Can you integrate my tools?",
    a4: "Yes. We work with most popular tools and APIs. If there's a way to connect it, we'll make it happen.",
    q5: "Is my data secure?",
    a5: "Absolutely. We follow security best practices and comply with GDPR. Your data always belongs to you.",
    q6: "Do you offer ongoing support?",
    a6: "Yes. We offer support and maintenance plans to ensure your solution evolves with your business.",
    contactTitle: "Contact",
    formName: "Name",
    formEmail: "Email",
    formReason: "Reason",
    formReasonAI: "AI Consultation",
    formReasonAutomation: "Automation",
    formReasonOther: "Other",
    formMessage: "Message",
    formSubmit: "Submit",
    navHome: "Home",
    navServices: "Services",
    navContact: "Contact",
    navPrivacy: "Privacy",
    navTerms: "Terms",
    privacyTitle: "Privacy Policy",
    privacyContent: "<p>At Pixan AI, we respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and protect your information.</p><p>For more information, please contact us directly.</p>",
    termsTitle: "Terms and Conditions",
    termsContent: "<p>By using our services, you agree to these terms and conditions. We reserve the right to modify these terms at any time.</p><p>For more information, please contact us directly.</p>",
    cta: "Book call",
    h1s1: "Automation with soul",
    p1s1: "AI & workflows that free your time.",
    h1s2: "Turn data into decisions",
    p1s2: "Embedding AI in every workflow.",
    h1s3: "Empower your team 24/7",
    p1s3: "AI agents that serve & learn nonstop.",
    // New services mosaic translations
    servTitle: "Our services",
    sv1t: "Process automation",
    sv1d: "We orchestrate end-to-end backend & RPA flows to remove repetition.",
    sv2t: "Smart scheduling",
    sv2d: "Booking systems for clinics & law firms with reminders and payments.",
    sv3t: "Omnichannel AI agents",
    sv3d: "WhatsApp, web & enterprise chatbots trained on your data.",
    sv4t: "AI-driven platforms",
    sv4d: "Apps that think & decide in real time.",
    sv5t: "AI social content",
    sv5d: "Auto-generated, on-brand posts to grow socials effortlessly.",
    sv6t: "AI-built websites",
    sv6d: "Optimised landing pages in hours, not days."
  },
  es: {
    heroSub: "Creamos agentes IA y automatizaciones que liberan tiempo y multiplican el valor humano.",
    howTitle: "Cómo funciona",
    hw1: "Agendamiento inicial",
    hw1Text: "Reunión de valoración y captura de requisitos.",
    hw2: "Propuesta & cotización",
    hw2Text: "Diseño de alcance, tiempos y precio fijo.",
    hw3: "MVP rápido",
    hw3Text: "Versión funcional en días para validar.",
    hw4: "Implementación a medida",
    hw4Text: "Desarrollo e integración completa.",
    hw5: "Prueba inicial",
    hw5Text: "Test A/B y ajuste fino con datos reales.",
    hw6: "Mejora continua",
    hw6Text: "Soporte, métricas y optimización mensual.",
    servicesTitle: "Servicios destacados",
    sv1: "Automatización de procesos",
    sv1Text: "Flujos backend y RPA de extremo a extremo.",
    sv2: "Agentes IA omnicanal",
    sv2Text: "WhatsApp, web y entornos empresariales.",
    sv3: "Sistemas impulsados por IA",
    sv3Text: "Apps que piensan y deciden en tiempo real.",
    sv4: "IA en tus procesos",
    sv4Text: "Insertamos modelos ML en tu stack actual.",
    sv5: "Auditoría de automatización",
    sv5Text: "Mapeo y ROI de oportunidades internas.",
    sv6: "Contenido IA para redes",
    sv6Text: "Posts automáticos, 100 % on-brand.",
    sv7: "Webs generadas con IA",
    sv7Text: "Landing pages listas en horas.",
    faqTitle: "Preguntas frecuentes",
    q1: "¿Cuánto tarda un proyecto típico?",
    a1: "Desde 2 semanas para soluciones simples hasta 2 meses para sistemas complejos. Siempre entregamos valor incremental.",
    q2: "¿Cómo funciona la tarifa?",
    a2: "Ofrecemos tarifas por proyecto o suscripciones mensuales según tus necesidades. Contacta para un presupuesto personalizado.",
    q3: "¿Necesito conocimientos técnicos?",
    a3: "No. Nos encargamos de toda la parte técnica. Solo necesitamos entender tu proceso y objetivos de negocio.",
    q4: "¿Pueden integrar mis herramientas?",
    a4: "Sí. Trabajamos con la mayoría de herramientas populares y APIs. Si existe una forma de conectarlo, lo haremos.",
    q5: "¿Es seguro?",
    a5: "Absolutamente. Seguimos las mejores prácticas de seguridad y cumplimos con GDPR. Tus datos siempre te pertenecen.",
    q6: "¿Ofrecen soporte continuo?",
    a6: "Sí. Ofrecemos planes de soporte y mantenimiento para asegurar que tu solución evolucione con tu negocio.",
    contactTitle: "Contacto",
    formName: "Nombre",
    formEmail: "Email",
    formReason: "Motivo",
    formReasonAI: "Consulta IA",
    formReasonAutomation: "Automatización",
    formReasonOther: "Otro",
    formMessage: "Mensaje",
    formSubmit: "Enviar",
    navHome: "Inicio",
    navServices: "Servicios",
    navContact: "Contacto",
    navPrivacy: "Privacidad",
    navTerms: "Términos",
    privacyTitle: "Política de Privacidad",
    privacyContent: "<p>En Pixan AI respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política explica cómo recopilamos, usamos y protegemos tu información.</p><p>Para más información, contáctanos directamente.</p>",
    termsTitle: "Términos y Condiciones",
    termsContent: "<p>Al utilizar nuestros servicios, aceptas estos términos y condiciones. Nos reservamos el derecho de modificar estos términos en cualquier momento.</p><p>Para más información, contáctanos directamente.</p>",
    cta: "Agenda llamada",
    h1s1: "Automatiza con alma",
    p1s1: "IA y procesos que liberan tu tiempo.",
    h1s2: "Convierte datos en decisiones",
    p1s2: "Integramos inteligencia artificial en cada flujo.",
    h1s3: "Impulsa tu equipo 24/7",
    p1s3: "Agentes IA que atienden y aprenden sin parar.",
    // New services mosaic translations
    servTitle: "Nuestros servicios",
    sv1t: "Automatización de procesos",
    sv1d: "Orquestamos flujos backend y RPA end-to-end para eliminar tareas repetitivas.",
    sv2t: "Agendamiento inteligente",
    sv2d: "Sistemas de citas para clínicas y despachos con recordatorios y pagos.",
    sv3t: "Agentes IA omnicanal",
    sv3d: "Chatbots en WhatsApp, web y apps empresariales, entrenados en tu data.",
    sv4t: "Plataformas impulsadas IA",
    sv4d: "Aplicaciones que piensan y deciden en tiempo real.",
    sv5t: "Contenido IA para redes",
    sv5d: "Posts automáticos y on-brand para crecer en social media sin esfuerzo.",
    sv6t: "Sitios web generados IA",
    sv6d: "Landing pages optimizadas en horas, no días."
  }
};

// DOM Elements
const langButtons = document.querySelectorAll('[data-lang]');
const scrollLinks = document.querySelectorAll('[data-scroll]');
const modalOpenButtons = document.querySelectorAll('[data-modal-open]');
const modalCloseButtons = document.querySelectorAll('[data-modal-close]');
const timelineSteps = document.querySelectorAll('.timeline-step');
const burger = document.getElementById('burger');
const overlay = document.getElementById('overlay');
const topbar = document.querySelector('.topbar');

/**
 * Cambia el idioma de la página y actualiza los textos.
 */
function setLanguage(lang) {
  // Update document title based on language
  document.title = lang === 'es' 
    ? "Pixan AI | Automatización y agentes IA con alma" 
    : "Pixan AI | AI Automation and agents with soul";
  
  // Update meta description based on language
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.content = lang === 'es'
      ? "Pixan AI - Automatización y agentes IA con alma para PyMES. Optimiza procesos, implementa chatbots inteligentes y transforma tu negocio con soluciones a medida."
      : "Pixan AI - AI automation and agents with soul for SMBs. Optimize processes, implement intelligent chatbots, and transform your business with tailored solutions.";
  }
  
  // Save to localStorage
  localStorage.setItem('pixanLang', lang);
  
  // Update active button
  langButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  
  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      if (key.includes('Content')) {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
  
  // Update document language
  document.documentElement.lang = lang;
}

/**
 * Inicializa el idioma al cargar la página.
 */
function initLanguage() {
  const savedLang = localStorage.getItem('pixanLang') || 'es';
  setLanguage(savedLang);
}

/**
 * Realiza scroll suave a un elemento o abre el modal de contacto.
 */
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  } else if (target === '#contact') {
    // If contact is not a section but a modal
    document.getElementById('contact').showModal();
  }
}

/**
 * Abre un modal por id.
 */
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.showModal();
}

/**
 * Cierra un modal.
 */
function closeModal(modal) {
  modal.close();
}

/**
 * Inicializa la animación de la línea de tiempo (timeline).
 */
function initTimelineAnimation() {
  if (!timelineSteps.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        // Add delay for each step to create a cascade effect
        const step = entry.target.getAttribute('data-step');
        entry.target.style.transitionDelay = `${(step - 1) * 0.15}s`;
      }
    });
  }, { threshold: 0.2 });
  
  timelineSteps.forEach(step => {
    observer.observe(step);
  });
}

/* HERO carousel – slide effect with drag */
function initSwiper() {
  const swiper = new Swiper('.swiper', {
    // horizontal slide is default; omit 'effect'
    speed: 700,
    loop: true,
    autoplay: { delay: 6000, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true },
    grabCursor: true,          // nice hand cursor
    simulateTouch: true,       // enable mouse drag
    threshold: 10,             // drag sensitivity
    resistanceRatio: 0.6
  });
}

/* Burger menu */
function initBurgerMenu() {
  if (!burger || !overlay) return;
  
  burger.onclick = () => overlay.classList.add('open');
  
  const closeBtn = overlay.querySelector('.close');
  if (closeBtn) {
    closeBtn.onclick = () => overlay.classList.remove('open');
  }
  
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('open');
  });
  
  // Close overlay when clicking on links
  overlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      overlay.classList.remove('open');
    });
  });
  
  // Close overlay on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      overlay.classList.remove('open');
    }
  });
}

/* Sticky header bg */
function initStickyHeader() {
  if (!topbar) return;
  
  window.addEventListener('scroll', () => {
    topbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

/* === Services Lightbox === */
function initServicesLightbox() {
  const cards = document.querySelectorAll('.services .card');
  const dialog = document.getElementById('svcBox');
  const imgBox = document.getElementById('svcImg');
  const titleBx = document.getElementById('svcTitle');
  const descBx = document.getElementById('svcDesc');
  let idx = 0;

  const svcData = [
    { key: 'sv1', img: 'https://images.unsplash.com/photo-1581091012184-41031b3a6b07?w=1200&auto=format&fit=crop' },
    { key: 'sv2', img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&auto=format&fit=crop' },
    { key: 'sv3', img: 'https://images.unsplash.com/photo-1525186402429-b4ff38bedbec?w=1200&auto=format&fit=crop' },
    { key: 'sv4', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&auto=format&fit=crop' },
    { key: 'sv5', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop' },
    { key: 'sv6', img: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?w=1200&auto=format&fit=crop' },
  ];

  // Ensure no undefined images
  svcData.forEach(o => {
    if (!o.img) o.img = 'assets/services/placeholder.webp';
  });

  function openBox(i) {
    idx = i;
    const { key, img } = svcData[idx];
    imgBox.src = img;
    imgBox.alt = translate(`${key}t`); // Set alt text for accessibility
    titleBx.textContent = translate(`${key}t`);
    descBx.textContent = translate(`${key}d`);
    dialog.showModal();
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  }

  if (cards.length && dialog) {
    cards.forEach((c, i) => c.addEventListener('click', () => openBox(i)));
    
    const closeBtn = dialog.querySelector('.close');
    if (closeBtn) closeBtn.onclick = () => {
      dialog.close();
      document.body.style.overflow = ''; // Restore scroll
    };
    
    const prevBtn = dialog.querySelector('.prev');
    if (prevBtn) prevBtn.onclick = () => openBox((idx + 5) % 6);
    
    const nextBtn = dialog.querySelector('.next');
    if (nextBtn) nextBtn.onclick = () => openBox((idx + 1) % 6);
    
    // Reset body overflow when dialog is closed
    dialog.addEventListener('close', () => {
      document.body.style.overflow = '';
    });
  }

  /* helper uses existing i18n system */
  function translate(k) {
    const lang = document.documentElement.lang || 'es';
    return (translations[lang] || {})[k] || '';
  }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Initialize language
  initLanguage();
  
  // Language switcher
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
  
  // Smooth scroll
  scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      smoothScroll(link.dataset.scroll);
    });
  });
  
  // Modal open
  modalOpenButtons.forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.modalOpen));
  });
  
  // Modal close
  modalCloseButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('dialog');
      if (modal) closeModal(modal);
    });
  });
  
  // Close modal when clicking outside
  document.querySelectorAll('dialog').forEach(dialog => {
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) closeModal(dialog);
    });
  });
  
  // Initialize timeline animation
  initTimelineAnimation();
  
  // Initialize Swiper
  initSwiper();
  
  // Initialize burger menu
  initBurgerMenu();
  
  // Initialize sticky header
  initStickyHeader();
  
  // Initialize services lightbox
  initServicesLightbox();

  // Add event listeners to dialogs
  const dialogs = document.querySelectorAll('dialog.svc-modal');
  dialogs.forEach(d => {
    d.addEventListener('show', () => document.body.style.overflow = 'hidden');
    d.addEventListener('close', () => document.body.style.overflow = '');
  });
});
