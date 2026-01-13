document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    let currentLang = document.documentElement.lang;

    const translatableElements = {
        'nav-services': document.querySelector('#nav-services a'),
        'nav-solutions': document.querySelector('#nav-solutions a'),
        'nav-about': document.querySelector('#nav-about a'),
        'nav-contact': document.querySelector('#nav-contact a'),
        'hero-title': document.getElementById('hero-title'),
        'hero-subtitle': document.getElementById('hero-subtitle'),
        'services-title': document.getElementById('services-title'),
        'service-1-title': document.getElementById('service-1-title'),
        'service-2-title': document.getElementById('service-2-title'),
        'service-3-title': document.getElementById('service-3-title'),
        'solutions-title': document.getElementById('solutions-title'),
        'solution-1-title': document.getElementById('solution-1-title'),
        'solution-2-title': document.getElementById('solution-2-title'),
        'solution-3-title': document.getElementById('solution-3-title'),
        'solution-4-title': document.getElementById('solution-4-title'),
        'contact-title': document.getElementById('contact-title'),
        'contact-name-label': document.getElementById('contact-name-label'),
        'contact-email-label': document.getElementById('contact-email-label'),
        'contact-message-label': document.getElementById('contact-message-label'),
        'contact-submit-button': document.getElementById('contact-submit-button'),
        'footer-text': document.getElementById('footer-text'),
    };

    function toggleLanguage() {
        const newLang = currentLang === 'ko' ? 'en' : 'ko';
        document.documentElement.lang = newLang;
        currentLang = newLang;

        for (const id in translatableElements) {
            const element = translatableElements[id];
            if (element) {
                element.textContent = element.dataset[newLang];
            }
        }

        langToggle.textContent = newLang === 'ko' ? 'EN' : 'KO';
    }

    langToggle.addEventListener('click', toggleLanguage);
});
