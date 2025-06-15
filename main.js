// Language translations
const translations = {
  en: {
    heroSub: "We craft AI agents & automations that free time and amplify human value.",
    howTitle: "How it works",
    s1Title: "Submit your request",
    s1Text: "No tech jargon required.",
    s2Title: "We design the solution",
    s2Text: "Tailored to you.",
    s3Title: "We implement & measure",
    s3Text: "Iterate as needed.",
    servicesTitle: "Featured Services",
    service1: "Process automation",
    service2: "AI chatbots",
    service3: "No-code integrations",
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
    navContact: "Contact",
    navPrivacy: "Privacy",
    navTerms: "Terms",
    privacyTitle: "Privacy Policy",
    privacyContent: "<p>At Pixan AI, we respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and protect your information.</p><p>For more information, please contact us directly.</p>",
    termsTitle: "Terms and Conditions",
    termsContent: "<p>By using our services, you agree to these terms and conditions. We reserve the right to modify these terms at any time.</p><p>For more information, please contact us directly.</p>"
  },
  es: {
    heroSub: "Creamos agentes IA y automatizaciones que liberan tiempo y multiplican el valor humano.",
    howTitle: "Cómo funciona",
    s1Title: "Envía tu reto",
    s1Text: "Describe tu proceso y objetivo.",
    s2Title: "Diseñamos la solución",
    s2Text: "A medida.",
    s3Title: "Implementamos & medimos",
    s3Text: "Itera ilimitadamente.",
    servicesTitle: "Servicios destacados",
    service1: "Automatización de procesos",
    service2: "Chatbots IA",
    service3: "Integraciones nocode",
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
    navContact: "Contacto",
    navPrivacy: "Privacidad",
    navTerms: "Términos",
    privacyTitle: "Política de Privacidad",
    privacyContent: "<p>En Pixan AI respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política explica cómo recopilamos, usamos y protegemos tu información.</p><p>Para más información, contáctanos directamente.</p>",
    termsTitle: "Términos y Condiciones",
    termsContent: "<p>Al utilizar nuestros servicios, aceptas estos términos y condiciones. Nos reservamos el derecho de modificar estos términos en cualquier momento.</p><p>Para más información, contáctanos directamente.</p>"
  }
};

// DOM Elements
const langButtons = document.querySelectorAll('[data-lang]');
const scrollLinks = document.querySelectorAll('[data-scroll]');
const modalOpenButtons = document.querySelectorAll('[data-modal-open]');
const modalCloseButtons = document.querySelectorAll('[data-modal-close]');
const starfieldCanvas = document.getElementById('starfield');

// Language switcher
function setLanguage(lang) {
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

// Initialize language from localStorage or default to Spanish
function initLanguage() {
  const savedLang = localStorage.getItem('pixanLang') || 'es';
  setLanguage(savedLang);
}

// Smooth scroll
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

// Modal handlers
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.showModal();
}

function closeModal(modal) {
  modal.close();
}

// Starfield animation
function initStarfield() {
  if (!starfieldCanvas) return;
  
  const ctx = starfieldCanvas.getContext('2d');
  const stars = [];
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Skip animation if user prefers reduced motion
  if (prefersReducedMotion) {
    drawStaticStarfield();
    return;
  }
  
  // Set canvas size
  function resizeCanvas() {
    starfieldCanvas.width = window.innerWidth;
    starfieldCanvas.height = window.innerHeight;
    initStars();
  }
  
  // Create stars
  function initStars() {
    stars.length = 0;
    const density = Math.floor((starfieldCanvas.width * starfieldCanvas.height) / 10000);
    
    for (let i = 0; i < density; i++) {
      stars.push({
        x: Math.random() * starfieldCanvas.width,
        y: Math.random() * starfieldCanvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random(),
        speed: Math.random() * 0.05
      });
    }
  }
  
  // Draw static starfield for reduced motion
  function drawStaticStarfield() {
    resizeCanvas();
    ctx.fillStyle = 'rgba(14, 17, 33, 1)';
    ctx.fillRect(0, 0, starfieldCanvas.width, starfieldCanvas.height);
    
    for (let i = 0; i < stars.length; i++) {
      const star = stars[i];
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      ctx.fill();
    }
  }
  
  // Animate stars
  function animateStars() {
    ctx.fillStyle = 'rgba(14, 17, 33, 0.1)';
    ctx.fillRect(0, 0, starfieldCanvas.width, starfieldCanvas.height);
    
    for (let i = 0; i < stars.length; i++) {
      const star = stars[i];
      
      // Move star
      star.y += star.speed;
      
      // Reset if off screen
      if (star.y > starfieldCanvas.height) {
        star.y = 0;
        star.x = Math.random() * starfieldCanvas.width;
      }
      
      // Draw star
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      ctx.fill();
    }
    
    requestAnimationFrame(animateStars);
  }
  
  // Initialize
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  animateStars();
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
  
  // Initialize starfield
  initStarfield();
});
