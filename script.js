/**
 * Maynd.ma Landing Page JavaScript
 * Handles navigation, tabs, form submission, animations, and language switching
 */

// DOM Elements
const navbar = document.querySelector('.navbar');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const clientTabs = document.querySelectorAll('.client-tab');
const clientContents = document.querySelectorAll('.client-content');
const contactForm = document.querySelector('.contact-form');
const langButtons = document.querySelectorAll('.lang-btn');

// Language Translations
const translations = {
  ar: {
    nav_features: 'المميزات', nav_pricing: 'الأسعار', nav_clients: 'العملاء', nav_contact: 'اتصل بنا', nav_get_started: 'ابدأ الآن',
    hero_badge: 'إدارة التراخيص الممتازة', hero_title_1: 'التحكم.', hero_title_2: 'الأمان.', hero_title_3: 'الإدارة.',
    hero_subtitle: 'الحل النهائي لإدارة التراخيص للشركات المغربية. تتبع وصحح وإدارة جميع تراخيص البرمجيات الخاصة بك في مكان واحد.',
    hero_watch_demo: 'شاهد العرض التوضيحي', hero_book_consultation: 'حجز استشارة',
    hero_clients: 'عميل نشط', hero_licenses: 'ترخيص مدار', hero_support: 'دعم فني', hero_uptime: 'وقت تشغيل',
    hero_dashboard: 'لوحة التحكم', hero_licenses_short: 'تراخيص', hero_devices: 'أجهزة',
    features_tag: 'المميزات', features_title: 'كل ما تحتاجه لإدارة التراخيص',
    features_subtitle: 'منصتنا الشاملة توفر جميع الأدوات التي تحتاجها لإدارة تراخيص البرمجيات والأجهزة والمستخدمين بكفاءة.',
    feature_1_title: 'إدارة التراخيص', feature_1_desc: 'إنشاء وتفعيل وتعليق وإلغاء التراخيص بسهولة. تتبع استخدام وتواريخ انتهاء الصلاحية تلقائيًا.',
    feature_2_title: 'تتبع الأجهزة', feature_2_desc: 'مراقبة جميع الأجهزة المسجلة، حالتها، ومعلومات الأجهزة. الحصول على تنبيهات للوصول غير المصرح به.',
    feature_3_title: 'إدارة المستخدمين', feature_3_desc: 'إدارة مستخدمي الإدارة بمستويات إذن مختلفة. سجل كامل لجميع أنشطة المستخدمين.',
    feature_4_title: 'إدارة نماذج الذكاء الاصطناعي', feature_4_desc: 'التحكم ونشر نماذج الذكاء الاصطناعي عبر بنيتك التحتية. مراقبة استخدام ومقاييس الأداء.',
    feature_5_title: 'الأمان المؤسسي', feature_5_desc: 'تشفير من مستوى البنك، حد المعدل، والمصادقة متعددة العوامل. بياناتك محمية دائمًا.',
    feature_6_title: 'تصميم متجاوب', feature_6_desc: 'وصول إلى لوحة التحكم من أي مكان. تصميم متجاوب يعمل على سطح المكتب، الجهاز اللوحي، والجوال.',
    feature_learn_more: 'المزيد',
    pricing_tag: 'الأسعار', pricing_title: 'أسعار بسيطة وشفافة', pricing_subtitle: 'اختر الخطة التي تناسب احتياجات عملك. جميع الخطط تتضمن إعداد مجاني وتوجيه.',
    pricing_currency: 'MAD', pricing_monthly: '/شهر', pricing_starter: 'البداية', pricing_starter_desc: 'مثالي للشركات الصغيرة والمتوسطة',
    pricing_professional: 'المحترفة', pricing_professional_desc: 'مثالي للشركات المتنامية', pricing_enterprise: 'المؤسسية',
    pricing_enterprise_desc: 'حلول مخصصة للمؤسسات الكبيرة', pricing_get_started: 'ابدأ الآن',
    pricing_feature_1: 'إدارة 50 ترخيص', pricing_feature_2: 'تتبع 100 جهاز', pricing_feature_3: '5 مستخدمين إداريين',
    pricing_feature_4: 'دعم عبر البريد الإلكتروني', pricing_feature_5: 'إدارة 500 ترخيص', pricing_feature_6: 'تتبع 1000 جهاز',
    pricing_feature_7: '20 مستخدم إداري', pricing_feature_8: 'دعم أولوية', pricing_feature_9: 'تراخيص غير محدودة',
    pricing_feature_10: 'أجهزة غير محدودة', pricing_feature_11: 'مستخدمين غير محدودين', pricing_feature_12: 'دعم 24/7',
    clients_tag: 'العملاء', clients_title: 'شركاء نجاحنا', clients_subtitle: 'نفتخر بخدمتنا لأكبر الشركات في المغرب عبر مختلف القطاعات',
    clients_by_industry: 'حسب القطاع', clients_featured: 'عملاء مميزون', clients_by_roles: 'حسب الأدوار',
    industry_banking: 'المصارف والمالية', industry_telecom: 'الاتصالات', industry_insurance: 'التأمين', industry_healthcare: 'الرعاية الصحية',
    industry_education: 'التعليم', industry_government: 'الحكومة', industry_transport: 'النقل', industry_agriculture: 'الزراعة',
    role_cto: 'مدير تكنولوجيا المعلومات', role_it_director: 'مدير قسم تكنولوجيا المعلومات', role_system_admin: 'مسؤول النظام', role_ciso: 'ضابط الأمن السيبراني',
    cta_title: 'جاهز لبدء رحلة إدارة التراخيص؟', cta_subtitle: 'انضم إلى أكثر من 500 شركة مغربية تثق بنا لإدارة تراخيصها',
    cta_get_started: 'ابدأ الآن', cta_watch_demo: 'شاهد العرض التوضيحي',
    contact_title: 'اتصل بنا', contact_subtitle: 'نحن هنا لمساعدتك في أي استفسارات أو احتياجات لديك. لا تتردد في الاتصال بنا.',
    contact_address: 'الرباط، المغرب', contact_phone: '+212 5 37 77 00 00', contact_email: 'contact@maynd.ma',
    contact_form_title: 'أرسل لنا رسالة', contact_name: 'الاسم الكامل', contact_email_label: 'البريد الإلكتروني',
    contact_phone_label: 'رقم الهاتف', contact_company: 'الشركة', contact_message: 'الرسالة',
    contact_send: 'إرسال الرسالة', contact_success: 'شكراً لك! تم إرسال رسالتك بنجاح.', contact_error: 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.',
    footer_description: 'الحل الرائد لإدارة التراخيص في المغرب، مصمم خصيصاً لاحتياجات الشركات المغربية.',
    footer_links: 'روابط سريعة', footer_legal: 'قانوني', footer_support: 'الدعم',
    footer_features: 'المميزات', footer_pricing: 'الأسعار', footer_clients: 'العملاء', footer_contact: 'اتصل بنا',
    footer_privacy: 'سياسة الخصوصية', footer_terms: 'شروط الاستخدام', footer_cookies: 'سياسة الكوكيز',
    footer_help: 'مركز المساعدة', footer_docs: 'التوثيق', footer_community: 'المجتمع', footer_rights: 'جميع الحقوق محفوظة.'
  },
  fr: {
    nav_features: 'Fonctionnalités', nav_pricing: 'Tarifs', nav_clients: 'Clients', nav_contact: 'Contact', nav_get_started: 'Commencer',
    hero_badge: 'Gestion de licences premium', hero_title_1: 'Contrôle.', hero_title_2: 'Sécurité.', hero_title_3: 'Gestion.',
    hero_subtitle: 'La solution ultime de gestion des licences pour les entreprises marocaines. Suivez, validez et gérez toutes vos licences logicielles en un seul endroit.',
    hero_watch_demo: 'Regarder la démo', hero_book_consultation: 'Réserver une consultation',
    hero_clients: 'Clients actifs', hero_licenses: 'Licences gérées', hero_support: 'Support 24/7', hero_uptime: 'Temps de disponibilité',
    hero_dashboard: 'Tableau de bord', hero_licenses_short: 'Licences', hero_devices: 'Appareils',
    features_tag: 'Fonctionnalités', features_title: 'Tout ce dont vous avez besoin pour gérer les licences',
    features_subtitle: 'Notre plateforme complète fournit tous les outils dont vous avez besoin pour gérer efficacement vos licences logicielles, appareils et utilisateurs.',
    feature_1_title: 'Gestion des licences', feature_1_desc: 'Créez, activez, suspendez et révoquez des licences en toute simplicité. Suivez l'utilisation et les dates d'expiration automatiquement.',
    feature_2_title: 'Suivi des appareils', feature_2_desc: 'Surveillez tous les appareils enregistrés, leur statut et les informations matérielles. Recevez des alertes pour les accès non autorisés.',
    feature_3_title: 'Gestion des utilisateurs', feature_3_desc: 'Gérez les utilisateurs administrateurs avec différents niveaux de permission. Historique complet de toutes les activités des utilisateurs.',
    feature_4_title: 'Gestion des modèles IA', feature_4_desc: 'Contrôlez et déployez des modèles d'IA sur votre infrastructure. Surveillez l'utilisation et les métriques de performance.',
    feature_5_title: 'Sécurité entreprise', feature_5_desc: 'Chiffrement de niveau bancaire, limitation de débit et authentification multifacteur. Vos données sont toujours protégées.',
    feature_6_title: 'Design responsive', feature_6_desc: 'Accédez à votre tableau de bord de n'importe où. Design responsive qui fonctionne sur bureau, tablette et mobile.',
    feature_learn_more: 'En savoir plus',
    pricing_tag: 'Tarifs', pricing_title: 'Tarification simple et transparente', pricing_subtitle: 'Choisissez le forfait qui correspond aux besoins de votre entreprise. Tous les forfaits incluent une installation gratuite et un accompagnement.',
    pricing_currency: 'MAD', pricing_monthly: '/mois', pricing_starter: 'Débutant', pricing_starter_desc: 'Idéal pour les petites et moyennes entreprises',
    pricing_professional: 'Professionnel', pricing_professional_desc: 'Idéal pour les entreprises en croissance', pricing_enterprise: 'Entreprise',
    pricing_enterprise_desc: 'Solutions sur mesure pour les grandes entreprises', pricing_get_started: 'Commencer',
    pricing_feature_1: 'Gestion de 50 licences', pricing_feature_2: 'Suivi de 100 appareils', pricing_feature_3: '5 utilisateurs administrateurs',
    pricing_feature_4: 'Support par e-mail', pricing_feature_5: 'Gestion de 500 licences', pricing_feature_6: 'Suivi de 1000 appareils',
    pricing_feature_7: '20 utilisateurs administrateurs', pricing_feature_8: 'Support prioritaire', pricing_feature_9: 'Licences illimitées',
    pricing_feature_10: 'Appareils illimités', pricing_feature_11: 'Utilisateurs illimités', pricing_feature_12: 'Support 24/7',
    clients_tag: 'Clients', clients_title: 'Nos partenaires de réussite', clients_subtitle: 'Nous sommes fiers de servir les plus grandes entreprises du Maroc dans divers secteurs',
    clients_by_industry: 'Par secteur', clients_featured: 'Clients en vedette', clients_by_roles: 'Par rôles',
    industry_banking: 'Banque et Finance', industry_telecom: 'Télécommunications', industry_insurance: 'Assurance', industry_healthcare: 'Santé',
    industry_education: 'Éducation', industry_government: 'Gouvernement', industry_transport: 'Transport', industry_agriculture: 'Agriculture',
    role_cto: 'CTO', role_it_director: 'Directeur IT', role_system_admin: 'Administrateur Système', role_ciso: 'Responsable Sécurité',
    cta_title: 'Prêt à commencer votre parcours de gestion des licences ?', cta_subtitle: 'Rejoignez plus de 500 entreprises marocaines qui nous font confiance pour gérer leurs licences',
    cta_get_started: 'Commencer', cta_watch_demo: 'Regarder la démo',
    contact_title: 'Contactez-nous', contact_subtitle: 'Nous sommes là pour vous aider avec toutes vos questions ou besoins. N'hésitez pas à nous contacter.',
    contact_address: 'Rabat, Maroc', contact_phone: '+212 5 37 77 00 00', contact_email: 'contact@maynd.ma',
    contact_form_title: 'Envoyez-nous un message', contact_name: 'Nom complet', contact_email_label: 'Adresse e-mail',
    contact_phone_label: 'Numéro de téléphone', contact_company: 'Entreprise', contact_message: 'Message',
    contact_send: 'Envoyer le message', contact_success: 'Merci ! Votre message a été envoyé avec succès.', contact_error: 'Une erreur est survenue lors de l'envoi. Veuillez réessayer.',
    footer_description: 'La solution leader de gestion des licences au Maroc, spécialement conçue pour les besoins des entreprises marocaines.',
    footer_links: 'Liens rapides', footer_legal: 'Juridique', footer_support: 'Support',
    footer_features: 'Fonctionnalités', footer_pricing: 'Tarifs', footer_clients: 'Clients', footer_contact: 'Contact',
    footer_privacy: 'Politique de confidentialité', footer_terms: 'Conditions d'utilisation', footer_cookies: 'Politique des cookies',
    footer_help: 'Centre d'aide', footer_docs: 'Documentation', footer_community: 'Communauté', footer_rights: 'Tous droits réservés.'
  },
  en: {
    nav_features: 'Features', nav_pricing: 'Pricing', nav_clients: 'Clients', nav_contact: 'Contact', nav_get_started: 'Get Started',
    hero_badge: 'Premium License Management', hero_title_1: 'Control.', hero_title_2: 'Secure.', hero_title_3: 'Manage.',
    hero_subtitle: 'The ultimate license management solution for Moroccan businesses. Track, validate, and manage all your software licenses in one place.',
    hero_watch_demo: 'Watch Demo', hero_book_consultation: 'Book Consultation',
    hero_clients: 'Active Clients', hero_licenses: 'Licenses Managed', hero_support: 'Support', hero_uptime: 'Uptime',
    hero_dashboard: 'Dashboard', hero_licenses_short: 'Licenses', hero_devices: 'Devices',
    features_tag: 'Features', features_title: 'Everything You Need to Manage Licenses',
    features_subtitle: 'Our comprehensive platform provides all the tools you need to efficiently manage your software licenses, devices, and users.',
    feature_1_title: 'License Management', feature_1_desc: 'Create, activate, suspend, and revoke licenses with ease. Track usage and expiration dates automatically.',
    feature_2_title: 'Device Tracking', feature_2_desc: 'Monitor all registered devices, their status, and hardware information. Get alerts for unauthorized access.',
    feature_3_title: 'User Management', feature_3_desc: 'Manage admin users with different permission levels. Full audit trail of all user activities.',
    feature_4_title: 'AI Model Management', feature_4_desc: 'Control and deploy AI models across your infrastructure. Monitor usage and performance metrics.',
    feature_5_title: 'Enterprise Security', feature_5_desc: 'Bank-grade encryption, rate limiting, and multi-factor authentication. Your data is always protected.',
    feature_6_title: 'Responsive Design', feature_6_desc: 'Access your dashboard from anywhere. Fully responsive design works on desktop, tablet, and mobile.',
    feature_learn_more: 'Learn more',
    pricing_tag: 'Pricing', pricing_title: 'Simple, Transparent Pricing', pricing_subtitle: 'Choose the plan that fits your business needs. All plans include free setup and onboarding.',
    pricing_currency: 'MAD', pricing_monthly: '/month', pricing_starter: 'Starter', pricing_starter_desc: 'Ideal for small and medium businesses',
    pricing_professional: 'Professional', pricing_professional_desc: 'Ideal for growing businesses', pricing_enterprise: 'Enterprise',
    pricing_enterprise_desc: 'Custom solutions for large enterprises', pricing_get_started: 'Get Started',
    pricing_feature_1: 'Manage 50 licenses', pricing_feature_2: 'Track 100 devices', pricing_feature_3: '5 admin users',
    pricing_feature_4: 'Email support', pricing_feature_5: 'Manage 500 licenses', pricing_feature_6: 'Track 1000 devices',
    pricing_feature_7: '20 admin users', pricing_feature_8: 'Priority support', pricing_feature_9: 'Unlimited licenses',
    pricing_feature_10: 'Unlimited devices', pricing_feature_11: 'Unlimited users', pricing_feature_12: '24/7 support',
    clients_tag: 'Clients', clients_title: 'Our Success Partners', clients_subtitle: 'We are proud to serve the largest companies in Morocco across various sectors',
    clients_by_industry: 'By Industry', clients_featured: 'Featured Clients', clients_by_roles: 'By Roles',
    industry_banking: 'Banking & Finance', industry_telecom: 'Telecommunications', industry_insurance: 'Insurance', industry_healthcare: 'Healthcare',
    industry_education: 'Education', industry_government: 'Government', industry_transport: 'Transport', industry_agriculture: 'Agriculture',
    role_cto: 'CTO', role_it_director: 'IT Director', role_system_admin: 'System Administrator', role_ciso: 'Security Officer',
    cta_title: 'Ready to Start Your License Management Journey?', cta_subtitle: 'Join over 500 Moroccan companies who trust us to manage their licenses',
    cta_get_started: 'Get Started', cta_watch_demo: 'Watch Demo',
    contact_title: 'Contact Us', contact_subtitle: 'We are here to help you with any questions or needs you may have. Feel free to reach out.',
    contact_address: 'Rabat, Morocco', contact_phone: '+212 5 37 77 00 00', contact_email: 'contact@maynd.ma',
    contact_form_title: 'Send Us a Message', contact_name: 'Full Name', contact_email_label: 'Email Address',
    contact_phone_label: 'Phone Number', contact_company: 'Company', contact_message: 'Message',
    contact_send: 'Send Message', contact_success: 'Thank you! Your message has been sent successfully.', contact_error: 'An error occurred while sending. Please try again.',
    footer_description: 'The leading license management solution in Morocco, specially designed for the needs of Moroccan businesses.',
    footer_links: 'Quick Links', footer_legal: 'Legal', footer_support: 'Support',
    footer_features: 'Features', footer_pricing: 'Pricing', footer_clients: 'Clients', footer_contact: 'Contact',
    footer_privacy: 'Privacy Policy', footer_terms: 'Terms of Service', footer_cookies: 'Cookie Policy',
    footer_help: 'Help Center', footer_docs: 'Documentation', footer_community: 'Community', footer_rights: 'All rights reserved.'
  }
};

// Current language (default: Arabic)
let currentLanguage = 'ar';

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Set default language to Arabic
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', currentLanguage === 'ar');
    
    // Update language buttons
    updateLanguageButtons();
    
    // Apply translations
    applyTranslations();
    
    // Update feature card arrows for RTL
    updateRTLStyles();
    
    // Initialize all functionality
    initLanguageSwitcher();
    initNavigation();
    initClientTabs();
    initContactForm();
    initScrollAnimations();
    initSmoothScroll();
    
    // Load saved language preference
    const savedLang = localStorage.getItem('maynd-lang');
    if (savedLang && ['ar', 'fr', 'en'].includes(savedLang)) {
        setLanguage(savedLang);
    }
});

/**
 * Language Switcher functionality
 */
function initLanguageSwitcher() {
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const newLang = btn.dataset.lang;
            setLanguage(newLang);
        });
    });
}

/**
 * Set the language and update the page
 */
function setLanguage(lang) {
    currentLanguage = lang;
    
    // Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', lang === 'ar');
    
    // Update language buttons
    updateLanguageButtons();
    
    // Apply translations
    applyTranslations();
    
    // Update form input directions
    updateFormDirections();
    
    // Update RTL-specific styles
    updateRTLStyles();
    
    // Save preference
    localStorage.setItem('maynd-lang', lang);
}

/**
 * Update language buttons active state
 */
function updateLanguageButtons() {
    langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLanguage);
    });
}

/**
 * Apply translations to all elements with data-i18n attributes
 */
function applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.dataset.i18n;
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

/**
 * Update form input directions based on language
 */
function updateFormDirections() {
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.dir = currentLanguage === 'ar' ? 'auto' : 'ltr';
    });
}

/**
 * Update RTL-specific styles
 */
function updateRTLStyles() {
    const isRTL = currentLanguage === 'ar';
    
    // Update feature card arrows for RTL
    const arrows = document.querySelectorAll('.feature-link i');
    arrows.forEach(arrow => {
        arrow.className = isRTL ? 'fas fa-arrow-left' : 'fas fa-arrow-right';
    });
}

/**
 * Navigation functionality
 */
function initNavigation() {
    // Mobile menu toggle
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }

    // Navbar scroll effect
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Close mobile menu when clicking a link
    const navLinksAll = document.querySelectorAll('.nav-links a');
    navLinksAll.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
}

/**
 * Client tabs functionality
 */
function initClientTabs() {
    if (clientTabs.length > 0 && clientContents.length > 0) {
        // Set first tab as active by default
        clientTabs[0].classList.add('active');
        clientContents[0].classList.add('active');

        clientTabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs and contents
                clientTabs.forEach(t => t.classList.remove('active'));
                clientContents.forEach(c => c.classList.remove('active'));

                // Add active class to clicked tab and corresponding content
                tab.classList.add('active');
                clientContents[index].classList.add('active');
            });
        });
    }
}

/**
 * Contact form functionality
 */
function initContactForm() {
    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const successMessage = contactForm.querySelector('.success-message');
        const errorMessage = contactForm.querySelector('.error-message');

        // Hide previous messages
        if (successMessage) successMessage.classList.remove('show');
        if (errorMessage) errorMessage.classList.remove('show');

        // Show loading state
        const originalText = submitBtn.innerHTML;
        const loadingText = currentLanguage === 'ar' ? 'جاري الإرسال...' : 
                          currentLanguage === 'fr' ? 'Envoi en cours...' : 'Sending...';
        submitBtn.innerHTML = '<span class="loading"></span> ' + loadingText;
        submitBtn.disabled = true;

        try {
            // Simulate form submission (replace with actual API call)
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Show success message
            if (successMessage) {
                successMessage.classList.add('show');
                contactForm.reset();
            }

            const successText = currentLanguage === 'ar' ? '<i class="fas fa-check"></i> تم الإرسال!' :
                               currentLanguage === 'fr' ? '<i class="fas fa-check"></i> Message envoyé !' :
                               '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.innerHTML = successText;
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                if (successMessage) successMessage.classList.remove('show');
            }, 3000);

        } catch (error) {
            // Show error message
            if (errorMessage) {
                errorMessage.classList.add('show');
            }
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });

    // Real-time form validation
    const formInputs = contactForm.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateField(input);
        });

        input.addEventListener('input', () => {
            // Clear error on input
            input.classList.remove('error');
            const errorElement = input.parentElement.querySelector('.error-message');
            if (errorElement) errorElement.remove();
        });
    });
}

/**
 * Validate a single form field
 */
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    // Required validation
    if (field.required && !value) {
        isValid = false;
        errorMessage = currentLanguage === 'ar' ? 'هذا الحقل إجباري' : 
                      currentLanguage === 'fr' ? 'Ce champ est obligatoire' : 
                      'This field is required';
    }

    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = currentLanguage === 'ar' ? 'يرجى إدخال عنوان بريد إلكتروني صالح' : 
                          currentLanguage === 'fr' ? 'Veuillez entrer une adresse e-mail valide' : 
                          'Please enter a valid email address';
        }
    }

    // Update field state
    if (!isValid) {
        field.classList.add('error');
        // Remove existing error message
        const existingError = field.parentElement.querySelector('.error-message');
        if (existingError) existingError.remove();
        
        // Add new error message
        const errorEl = document.createElement('span');
        errorEl.className = 'error-message';
        errorEl.textContent = errorMessage;
        errorEl.style.cssText = 'color: var(--danger); font-size: var(--font-size-sm); margin-top: var(--spacing-xs); display: block;';
        field.parentElement.appendChild(errorEl);
    } else {
        field.classList.remove('error');
        const existingError = field.parentElement.querySelector('.error-message');
        if (existingError) existingError.remove();
    }

    return isValid;
}

/**
 * Scroll animations using Intersection Observer
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.feature-card, .pricing-card, .client-card, .stat, .section-header');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal', 'active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}