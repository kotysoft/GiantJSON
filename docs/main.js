/* Main JavaScript for Giant JSON Viewer website */

document.addEventListener('DOMContentLoaded', function () {
    initScrollAnimations();
    initLightbox();
});

/* Scroll-triggered fade-in animations with staggered delays */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.feature-card, .mode-card, .tool-card, .export-feature, .analysis-feature'
    );

    animatedElements.forEach(el => {
        el.classList.add('fade-in');
    });

    // Group elements by their parent to create staggered effect
    const groups = {};
    animatedElements.forEach(el => {
        const parent = el.parentElement;
        if (!groups[parent]) {
            groups[parent] = [];
        }
        groups[parent].push(el);
    });

    // Apply staggered delays within each group
    Object.values(groups).forEach(group => {
        group.forEach((el, index) => {
            el.style.transitionDelay = `${index * 0.1}s`;
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

/* Lightbox for fullscreen screenshot viewing */
function initLightbox() {
    // Create lightbox overlay
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close" aria-label="Close">&times;</button>
            <img class="lightbox-image" src="" alt="">
        </div>
    `;
    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    // Add click handlers to all screenshot images
    const screenshots = document.querySelectorAll('.mode-screenshot img, .analysis-screenshot img');
    screenshots.forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', function () {
            lightboxImage.src = this.src;
            lightboxImage.alt = this.alt;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close lightbox on overlay click
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox || e.target === closeBtn) {
            closeLightbox();
        }
    });

    // Close on escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}
