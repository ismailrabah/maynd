/**
 * LocalMind.ma - Multilingual Landing Page
 */

const navbar = document.querySelector('.navbar');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.querySelector('.contact-form');
const langButtons = document.querySelectorAll('.lang-btn');

// Compact translations
const T = {
  ar: {
    nav: ['المميزات','الحلول','الأسعار','كيف يعمل','اتصل بنا','اطلب الآن'],
    hero: ['خصوصية 100%','بدون انترنت','مصنوع بالمغرب','الذكاء الاصطناعي','المحلي للمحترفين','حل ذكاء اصطناعي كامل يعمل بدون انترنت على جهازك المحلي. لا سحابة. لا رسوم شهرية. لا تسريب للبيانات.','اطلب فلاش USB','شاهد العرض','موثوق من قبل','شركة مغربية'],
    trust: ['100% بدون انترنت','يعمل تماماً بدون اتصال','0 MAD','لا رسوم شهرية','2 ثواني','استجابة فورية','مشفّر','بياناتك آمنة'],
    features: ['المميزات الرئيسية','لماذا تختار LocalMind؟','الحل الوحيد في المغرب الذي يوفر ذكاء اصطناعي كامل بدون انترنت','تثبيت فوري','قم بتثبيت التطبيق من فلاش USB في دقائق بدون إعداد معقد','معالجة الوثائق','استخراج النصوص من PDFs، الصور، وجداول Excel','محادثة ذكية','اسأل عن وثائقك واحصل على إجابات دقيقة','بحث متقدم','ابحث في آلاف الوثائق بدقة عالية','حماية تامة','لا يتم إرسال أي بيانات إلى السحابة','مخصص للمغرب','يدعم الدارجة والعربية الفصحى'],
    solutions: ['الحلول','قطاعات مستهدفة','حلول مخصصة لكل قطاع من قطاعات السوق المغربية','رئيسي','ثانوي','المكاتب المحاسبية','استخراج الفواتير، تحليل البيانات المالية، توليد التقارير الضريبية','العيادات الطبية','تلخيص سجلات المرضى، تحليل الاستمارات الطبية','المكاتب القانونية','تحليل بنود العقود، الإجابة عن أسئلة قانونية','اطلب الآن','المزيد'],
    steps: ['كيف يعمل','عملية بسيطة','من الطلب إلى الاستخدام في 3 خطوات','اطلب فلاش USB','اختر الحزمة المناسبة','تفعيل الترخيص','تثبيت مرة واحدة','ابدأ الاستخدام','استخدم بدون قيود'],
    pricing: ['الأسعار','أسعار شفافة','دفع مرة واحدة. لا رسوم شهرية.','للمحترفين','المحترف','مثالي للمكاتب الصغيرة','الأعمال','الأكثر مبيعاً','مثالي للمكاتب الكبيرة','المؤسسات','حلول مخصصة','اطلب الآن','اتصل بنا','نموذج 7B','50 وثيقة/يوم','دعم PDF','تحديثات سنة','نموذج 14B','معالجة غير محدودة','دعم جميع الملفات','تحديثات مدى الحياة','نموذج 32B','تثبيت على خادم','دعم 24/7','تدريب مخصص'],
    usb: ['فلاش USB','ما الذي تحصل عليه','فلاش USB 128GB','سعة كبيرة للتطبيق والنماذج','التطبيق الكامل','جاهز للتثبيت على Windows/Linux','نماذج الذكاء الاصطناعي','مخصصة للمغرب تدعم العربية','وثائق ودعم','دليل المستخدم + دعم فني'],
    testimonials: ['آراء العملاء','ما يقوله عملاؤنا',""LocalMind غير طريقة عملنا تماماً. الآن يمكننا معالجة الفواتير في ثوانٍ."",""الحل المثالي للمكاتب الطبية. بيئة آمنة بدون تسريب البيانات."",""استخدام LocalMind جعلنا أكثر كفاءة."",'أحمد بن علي','أحمد بن علي, مكتب محاسبي','فاطمة الزهراء','فاطمة الزهراء, عيادة طبية','محمد اليازيدي','محمد اليازيدي, مكتب قانوني'],
    cta: ['جاهز لتجربة الذكاء الاصطناعي المحلي؟','انضم إلى أكثر من 500 مكتب في المغرب','اطلب الآن','حجز عرض توضيحي','✅ ضمان 30 يوم | ✅ دعم فني | ✅ تسليم 48 ساعة'],
    contact: ['اتصل بنا','نحن هنا لمساعدتك','الهاتف','البريد الإلكتروني','العنوان','الرباط، المغرب','sales@localmind.ma','+212 5 37 77 00 00','اطلب استشارة مجانية','الاسم الكامل','اسم الشركة','البريد الإلكتروني','رقم الهاتف','القطاع','الرسالة','إرسال الطلب','شكراً لك! تم استلام طلبك.','حدث خطأ. يرجى المحاولة مرة أخرى.'],
    footer: ['الحل الرائد للذكاء الاصطناعي المحلي في المغرب','منتجاتنا','الحلول','الدعم','قانوني','جميع الحقوق محفوظة.','مصنوع في المغرب','المحترف','الأعمال','المؤسسي','المكاتب المحاسبية','العيادات الطبية','المكاتب القانونية','اتصل بنا','الأسئلة الشائعة','سياسة الخصوصية','شروط الاستخدام'],
    sectors: ['المكاتب المحاسبية','العيادات الطبية','المكاتب القانونية','آخر','اختر القطاع'],
    packages: ['المحترف (8,900 MAD)','الأعمال (19,900 MAD)','المؤسسي (39,900 MAD)','اختر الحزمة']
  },
  fr: {
    nav: ['Fonctionnalités','Solutions','Tarifs','Fonctionnement','Contact','Commander'],
    hero: ['Confidentialité 100%','Hors ligne','Fabriqué au Maroc',"L'IA locale","pour les professionnels marocains","Solution d'IA complète fonctionnant hors ligne. Pas de cloud. Pas de frais mensuels.",'Commander clé USB','Voir la démo','De confiance pour plus de','entreprises marocaines'],
    trust: ['100% Hors ligne','Fonctionne sans connexion','0 MAD','Pas de frais mensuels','2 secondes','Réponse instantanée','Chiffré','Vos données sont sécurisées'],
    features: ['Fonctionnalités','Pourquoi choisir LocalMind ?','La seule solution au Maroc offrant une IA complète hors ligne','Installation instantanée','Installez depuis la clé USB en quelques minutes','Traitement de documents','Extraction de texte depuis PDFs, images et Excel','Conversation intelligente','Posez des questions sur vos documents','Recherche avancée','Recherchez dans des milliers de documents','Protection totale','Aucune donnée nest envoyée vers le cloud','Adapté au Maroc','Formé sur la terminologie marocaine'],
    solutions: ['Solutions','Secteurs cibles','Des solutions adaptées à chaque secteur','Principal','Secondaire','Cabinets comptables','Extraction de factures, analyse financière, génération de rapports','Cliniques médicales','Résumé des dossiers patients, analyse des formulaires médicaux','Cabinets juridiques','Analyse des clauses contractuelles, réponses aux questions juridiques','Commander','En savoir plus'],
    steps: ['Comment ça marche','Processus simple','En 3 étapes faciles','Commander clé USB','Choisissez le pack adapté','Activer la licence','Installation unique','Commencer à utiliser','Utilisez sans limites'],
    pricing: ['Tarifs','Tarification transparente','Paiement unique.','Pour les professionnels','Professionnel','Idéal pour les petits cabinets','Business','Le plus populaire','Idéal pour les grands cabinets','Entreprises','Solutions sur mesure','Commander','Contactez-nous','Modèle 7B','50 docs/jour','Support PDF','Mises à jour 1 an','Modèle 14B','Traitement illimité','Support tous fichiers','Mises à jour à vie','Modèle 32B',"Installation sur serveur","Support 24/7','Formation personnalisée'],
    usb: ['Clé USB','Ce que vous recevez','Clé USB 128GB','Espace suffisant','Application complète','Prête à installer','Modèles IA','Personnalisés pour le Maroc','Documentation','Guide + support technique'],
    testimonials: ['Témoignages','Ce que disent nos clients',""LocalMind a transformé notre façon de travailler."",""La solution idéale pour les cabinets médicaux."",""LocalMind nous a rendus plus efficaces."",'Ahmed Ben Ali','Ahmed Ben Ali, Cabinet comptable','Fatima Zahra','Fatima Zahra, Clinique médicale','Mohamed Yazidi','Mohamed Yazidi, Cabinet juridique'],
    cta: ['Prêt à vivre la révolution de l'IA locale ?','Rejoignez plus de 500 cabinets au Maroc','Commander maintenant','Réserver une démo','✅ Garantie 30 jours | ✅ Support technique | ✅ Livraison sous 48h'],
    contact: ['Contactez-nous','Nous sommes là pour vous aider','Téléphone','Email','Adresse','Rabat, Maroc','sales@localmind.ma','+212 5 37 77 00 00','Demander une consultation gratuite','Nom complet','Nom de l'entreprise','Adresse email','Numéro de téléphone','Secteur','Message','Envoyer la demande','Merci ! Votre demande a été reçue.','Une erreur est survenue.'],
    footer: ['La solution leader de l'IA locale au Maroc.','Nos produits','Solutions','Support','Juridique','Tous droits réservés.','Fabriqué au Maroc','Professionnel','Business','Entreprise','Cabinets comptables','Cliniques médicales','Cabinets juridiques','Contactez-nous','FAQ','Politique de confidentialité','Conditions d'utilisation'],
    sectors: ['Cabinets comptables','Cliniques médicales','Cabinets juridiques','Autre','Sélectionner le secteur'],
    packages: ['Professionnel (8 900 MAD)','Business (19 900 MAD)','Entreprise (39 900 MAD)','Sélectionner le pack']
  },
  en: {
    nav: ['Features','Solutions','Pricing','How It Works','Contact','Order Now'],
    hero: ['100% Private','Offline','Made in Morocco','Local AI','for Moroccan Professionals','Complete AI solution that works offline. No cloud. No monthly fees. No data leaks.','Order USB','Watch Demo','Trusted by over','Moroccan companies'],
    trust: ['100% Offline','Works without connection','0 MAD','No monthly fees','2 seconds','Instant response','Encrypted','Your data is secure'],
    features: ['Key Features','Why Choose LocalMind?','The only solution in Morocco offering complete offline AI','Instant Installation','Install from USB in minutes','Document Processing','Extract text from PDFs, images, and Excel','Smart Conversation','Ask questions about your documents','Advanced Search','Search through thousands of documents','Complete Protection','No data sent to cloud','Morocco-Specific','Trained on Moroccan terminology'],
    solutions: ['Solutions','Target Sectors','Tailored solutions for each sector','Primary','Secondary','Accounting Firms','Invoice extraction, financial analysis, tax report generation','Medical Clinics','Patient record summarization, medical form analysis','Law Firms','Contract clause analysis, legal Q&A','Order Now','Learn More'],
    steps: ['How It Works','Simple Process','In 3 easy steps','Order USB','Choose the right package','Activate License','Install once','Start Using','Use without limits'],
    pricing: ['Pricing','Transparent Pricing','One-time payment.','For Professionals','Professional','Ideal for small firms','Business','Most Popular','Ideal for large firms','Enterprise','Custom solutions','Order Now','Contact Us','7B Model','50 docs/day','PDF support','1 year updates','14B Model','Unlimited processing','All file types support','Lifetime updates','32B Model','Server installation','24/7 support','Custom training'],
    usb: ['USB Drive','What You Get','128GB USB Drive','Ample space','Complete Application','Ready to install','AI Models','Morocco-customized','Documentation','Guide + technical support'],
    testimonials: ['Testimonials','What Our Clients Say',""LocalMind transformed our workflow."",""The ideal solution for medical practices."",""LocalMind made us more efficient."",'Ahmed Ben Ali','Ahmed Ben Ali, Accounting Firm','Fatima Zahra','Fatima Zahra, Medical Clinic','Mohamed Yazidi','Mohamed Yazidi, Law Firm'],
    cta: ['Ready to experience the Local AI revolution?','Join over 500 firms in Morocco','Order Now','Book a Demo','✅ 30-day money-back | ✅ Technical support | ✅ Delivery within 48h'],
    contact: ['Contact Us','We are here to help you','Phone','Email','Address','Rabat, Morocco','sales@localmind.ma','+212 5 37 77 00 00','Request a Free Consultation','Full Name','Company Name','Email Address','Phone Number','Sector','Message','Send Request','Thank you! Your request has been received.','An error occurred. Please try again.'],
    footer: ['The leading local AI solution in Morocco.','Our Products','Solutions','Support','Legal','All rights reserved.','Made in Morocco','Professional','Business','Enterprise','Accounting Firms','Medical Clinics','Law Firms','Contact Us','FAQ','Privacy Policy','Terms of Service'],
    sectors: ['Accounting Firms','Medical Clinics','Law Firms','Other','Select Sector'],
    packages: ['Professional (8,900 MAD)','Business (19,900 MAD)','Enterprise (39,900 MAD)','Select Package']
  }
};

let currentLanguage = 'ar';

// Mapping of data-i18n keys to translation arrays
const keyMap = {
  nav_features: [0,0], nav_solutions: [0,1], nav_pricing: [0,2], nav_how_it_works: [0,3], nav_contact: [0,4], nav_order: [0,5],
  hero_badge_1: [1,0], hero_badge_2: [1,1], hero_badge_3: [1,2], hero_title_1: [1,3], hero_title_2: [1,4],
  hero_subtitle: [1,5], hero_order_usb: [1,6], hero_watch_demo: [1,7], hero_trusted_by: [1,8], hero_companies: [1,9],
  trust_100_offline: [2,0], trust_100_offline_desc: [2,1], trust_0_mad: [2,2], trust_0_mad_desc: [2,3],
  trust_2_sec: [2,4], trust_2_sec_desc: [2,5], trust_encrypted: [2,6], trust_encrypted_desc: [2,7]
};

function getTranslation(key) {
  const mapping = keyMap[key];
  if (mapping) {
    return T[currentLanguage][Object.keys(T[currentLanguage])[mapping[0]]][mapping[1]];
  }
  return key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = getTranslation(el.dataset.i18n);
  });
}

function setLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl', lang === 'ar');
  langButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  applyTranslations();
  updateFormDirections();
  localStorage.setItem('localmind-lang', lang);
}

function updateFormDirections() {
  document.querySelectorAll('input, textarea, select').forEach(input => {
    input.dir = currentLanguage === 'ar' ? 'auto' : 'ltr';
  });
}

function initLanguageSwitcher() {
  langButtons.forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));
}

function initNavigation() {
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
  }
  if (navbar) {
    window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 50));
  }
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  });
}

function initContactForm() {
  if (!contactForm) return;
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const successMessage = contactForm.querySelector('.success-message');
    const errorMessage = contactForm.querySelector('.error-message');
    if (successMessage) successMessage.classList.remove('show');
    if (errorMessage) errorMessage.classList.remove('show');
    const originalText = submitBtn.innerHTML;
    const loadingText = {ar: 'جاري الإرسال...', fr: 'Envoi en cours...', en: 'Sending...'}[currentLanguage];
    submitBtn.innerHTML = '<span class="loading"></span> ' + loadingText;
    submitBtn.disabled = true;
    try {
      await new Promise(r => setTimeout(r, 1500));
      if (successMessage) successMessage.classList.add('show');
      contactForm.reset();
      const successText = {ar: '<i class="fas fa-check"></i> تم الإرسال!', fr: '<i class="fas fa-check"></i> Message envoyé !', en: '<i class="fas fa-check"></i> Message Sent!'}[currentLanguage];
      submitBtn.innerHTML = successText;
      setTimeout(() => { submitBtn.innerHTML = originalText; submitBtn.disabled = false; if (successMessage) successMessage.classList.remove('show'); }, 3000);
    } catch (error) { if (errorMessage) errorMessage.classList.add('show'); submitBtn.innerHTML = originalText; submitBtn.disabled = false; }
  });
  contactForm.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => { input.classList.remove('error'); const err = input.parentElement.querySelector('.error-message'); if (err) err.remove(); });
  });
}

function validateField(field) {
  const value = field.value.trim();
  let isValid = true, errorMessage = '';
  if (field.required && !value) {
    isValid = false;
    errorMessage = {ar: 'هذا الحقل إجباري', fr: 'Ce champ est obligatoire', en: 'This field is required'}[currentLanguage];
  }
  if (field.type === 'email' && value && !/^[^s@]+@[^s@]+.[^s@]+$/.test(value)) {
    isValid = false;
    errorMessage = {ar: 'يرجى إدخال عنوان بريد إلكتروني صالح', fr: 'Veuillez entrer une adresse e-mail valide', en: 'Please enter a valid email address'}[currentLanguage];
  }
  if (!isValid) {
    field.classList.add('error');
    const existingError = field.parentElement.querySelector('.error-message');
    if (existingError) existingError.remove();
    const errorEl = document.createElement('span');
    errorEl.className = 'error-message';
    errorEl.textContent = errorMessage;
    errorEl.style.cssText = 'color: var(--danger); font-size: 0.875rem; margin-top: 0.25rem; display: block;';
    field.parentElement.appendChild(errorEl);
  } else {
    field.classList.remove('error');
    const existingError = field.parentElement.querySelector('.error-message');
    if (existingError) existingError.remove();
  }
  return isValid;
}

function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.feature-card, .pricing-card, .solution-card, .testimonial-card, .step, .section-header');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('reveal', 'active'); });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  animatedElements.forEach(el => { el.classList.add('reveal'); observer.observe(el); });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = 'rtl';
  document.body.classList.add('rtl');
  updateLanguageButtons();
  applyTranslations();
  updateFormDirections();
  initLanguageSwitcher();
  initNavigation();
  initContactForm();
  initScrollAnimations();
  initSmoothScroll();
  const savedLang = localStorage.getItem('localmind-lang');
  if (savedLang && ['ar', 'fr', 'en'].includes(savedLang)) setLanguage(savedLang);
});

function updateLanguageButtons() {
  langButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === currentLanguage));
}