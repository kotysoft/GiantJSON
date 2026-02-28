'use strict';

document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initLightbox();
    initTracking();
});

/* ------------------------------------------ */
/* Scroll Animations                           */
/* ------------------------------------------ */

function initScrollAnimations() {
    const animatableSelectors = [
        '.feature-card',
        '.persona-card',
        '.mode-card',
        '.tool-card',
        '.api-feature-group',
        '.feature-row',
        '.analysis-card',
        '.format-badge',
    ];

    const elements = document.querySelectorAll(animatableSelectors.join(', '));

    elements.forEach(el => {
        el.classList.add('fade-in');
        // Stagger siblings within same parent
        const siblings = Array.from(el.parentElement.children).filter(
            c => c.classList.contains(el.className.split(' ')[0])
        );
        const idx = siblings.indexOf(el);
        el.style.transitionDelay = `${idx * 0.08}s`;
    });

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach(el => observer.observe(el));
}

/* ------------------------------------------ */
/* Lightbox                                    */
/* ------------------------------------------ */

function initLightbox() {
    // Build the lightbox DOM
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close" aria-label="Close image">&times;</button>
            <img class="lightbox-image" src="" alt="">
        </div>
    `;
    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    // Attach click to all clickable screenshots
    const screenshots = document.querySelectorAll(
        '.screenshot-phone, .mode-screenshot img, .analysis-card-screenshot img'
    );

    screenshots.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImage.src = img.src;
            lightboxImage.alt = img.alt;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', e => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeLightbox();
    });
}

/* ------------------------------------------ */
/* Analytics Tracking                          */
/* ------------------------------------------ */

function initTracking() {
    if (typeof gtag === 'undefined') return;

    const trackMap = [
        { id: 'hero-play-btn', category: 'engagement', label: 'hero_play_store' },
        { id: 'hero-docs-btn', category: 'engagement', label: 'hero_docs' },
        { id: 'cta-play-btn', category: 'engagement', label: 'cta_play_store' },
        { id: 'cta-docs-btn', category: 'engagement', label: 'cta_docs' },
        { id: 'cta-github-btn', category: 'engagement', label: 'cta_github_issues' },
    ];

    trackMap.forEach(({ id, category, label }) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.addEventListener('click', () => {
            gtag('event', 'click', { event_category: category, event_label: label });
        });
    });
}
