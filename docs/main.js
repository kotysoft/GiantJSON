'use strict';

document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initLightbox();
    initTracking();
    initWebtools();
});

/* ------------------------------------------ */
/* Web Tools — card click to preview           */
/* ------------------------------------------ */

function initWebtools() {
    const toolsGrid = document.getElementById('wt-tools');
    const preview = document.getElementById('wt-preview');
    if (!toolsGrid || !preview) return;

    const cards = toolsGrid.querySelectorAll('.wt-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const imgSrc = card.dataset.wtImg;
            const imgAlt = card.dataset.wtAlt;
            if (!imgSrc) return;

            cards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');

            preview.style.opacity = '0';
            setTimeout(() => {
                preview.src = imgSrc;
                preview.alt = imgAlt;
                preview.style.opacity = '1';
            }, 150);
        });
    });
}

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
        '.wt-card',
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
        '.screenshot-phone, .mode-screenshot img, .analysis-card-screenshot img, .screenshot-webtools'
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
        { id: 'hero-play-btn', category: 'engagement', label: 'hero_play_store', isPlayStore: true },
        { id: 'cta-play-btn', category: 'engagement', label: 'cta_play_store', isPlayStore: true },
        { id: 'cta-docs-btn', category: 'engagement', label: 'cta_docs', isPlayStore: false },
        { id: 'cta-github-btn', category: 'engagement', label: 'cta_github_issues', isPlayStore: false },
    ];

    trackMap.forEach(({ id, category, label, isPlayStore }) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.addEventListener('click', () => {
            // Google Analytics
            gtag('event', 'click', { event_category: category, event_label: label });

            // Reddit Pixel - Track Play Store clicks as conversions
            if (isPlayStore && typeof rdt !== 'undefined') {
                const conversionId = generateConversionId(label);
                rdt('track', 'SignUp', {
                    conversionId: conversionId
                });
            }
        });
    });
}

/**
 * Generate unique conversion ID for deduplication
 * Format: timestamp_location_random
 */
function generateConversionId(location) {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 9);
    return `${timestamp}_${location}_${random}`;
}
