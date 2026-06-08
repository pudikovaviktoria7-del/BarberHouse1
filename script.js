document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll(
        '.card, .gallery-item, .page-title, .page-subtitle, .contact-item, .hero__title, .hero__subtitle, .hero__actions, .form-box, .map-dummy'
    );

    elementsToAnimate.forEach((el) => {
        el.classList.add('fade-in-hidden');
        observer.observe(el);
    });
    });