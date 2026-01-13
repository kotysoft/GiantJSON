/* Documentation JavaScript */

document.addEventListener('DOMContentLoaded', function () {
    sortArticlesByDate();
    initSearch();
    initFilters();
    initTableOfContents();
    initReadingProgress();
    initMobileSidebar();
    initPlayStoreTracking();
});

/* Sort article cards by date, newest first */
function sortArticlesByDate() {
    const grid = document.getElementById('articles-grid');
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll('.docs-card'));
    if (cards.length < 2) return;

    // Parse date from card meta (format: "Jan 13, 2026")
    function parseDate(card) {
        const metaSpans = card.querySelectorAll('.docs-card-meta span');
        if (metaSpans.length < 2) return new Date(0);

        const dateText = metaSpans[1].textContent.trim();
        const parsed = new Date(dateText);
        return isNaN(parsed.getTime()) ? new Date(0) : parsed;
    }

    // Sort newest first
    cards.sort((a, b) => parseDate(b) - parseDate(a));

    // Reorder in DOM
    cards.forEach(card => grid.appendChild(card));
}

/* Search functionality for index page */
function initSearch() {
    const searchInput = document.querySelector('.docs-search-input');
    const cards = document.querySelectorAll('.docs-card');

    if (!searchInput || !cards.length) return;

    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase().trim();

        cards.forEach(card => {
            const title = card.querySelector('h2')?.textContent.toLowerCase() || '';
            const description = card.querySelector('p')?.textContent.toLowerCase() || '';
            const category = card.querySelector('.docs-card-category')?.textContent.toLowerCase() || '';

            const matches = title.includes(query) ||
                description.includes(query) ||
                category.includes(query);

            card.style.display = matches ? '' : 'none';
        });
    });
}

/* Category filter buttons */
function initFilters() {
    const filterBtns = document.querySelectorAll('.docs-filter-btn');
    const cards = document.querySelectorAll('.docs-card');

    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const category = this.dataset.category;

            cards.forEach(card => {
                if (category === 'all') {
                    card.style.display = '';
                } else {
                    const cardCategory = card.dataset.category;
                    card.style.display = cardCategory === category ? '' : 'none';
                }
            });
        });
    });
}

/* Auto-generate table of contents from headings */
function initTableOfContents() {
    const toc = document.querySelector('.docs-toc');
    const articleBody = document.querySelector('.docs-article-body');

    if (!toc || !articleBody) return;

    const headings = articleBody.querySelectorAll('h2, h3');

    headings.forEach((heading, index) => {
        // Add ID to heading if not present
        if (!heading.id) {
            heading.id = `section-${index}`;
        }

        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${heading.id}`;
        a.textContent = heading.textContent;

        if (heading.tagName === 'H3') {
            a.classList.add('docs-toc-h3');
        }

        li.appendChild(a);
        toc.appendChild(li);
    });

    // Highlight current section on scroll
    const tocLinks = toc.querySelectorAll('a');

    if (tocLinks.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    tocLinks.forEach(link => link.classList.remove('active'));
                    const activeLink = toc.querySelector(`a[href="#${entry.target.id}"]`);
                    if (activeLink) activeLink.classList.add('active');
                }
            });
        }, {
            rootMargin: '-80px 0px -80% 0px'
        });

        headings.forEach(heading => observer.observe(heading));
    }
}

/* Reading progress indicator */
function initReadingProgress() {
    const progressBar = document.querySelector('.docs-progress');
    const articleBody = document.querySelector('.docs-article-body');

    if (!progressBar || !articleBody) return;

    function updateProgress() {
        const articleRect = articleBody.getBoundingClientRect();
        const articleTop = articleRect.top + window.scrollY;
        const articleHeight = articleRect.height;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        const progress = Math.max(0, Math.min(100,
            ((scrollY - articleTop + windowHeight * 0.3) / articleHeight) * 100
        ));

        progressBar.style.width = `${progress}%`;
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
}

/* Mobile sidebar toggle */
function initMobileSidebar() {
    const sidebar = document.querySelector('.docs-sidebar');
    const toggleBtn = document.querySelector('.docs-sidebar-toggle');

    if (!sidebar || !toggleBtn) return;

    toggleBtn.addEventListener('click', function () {
        sidebar.classList.toggle('open');

        // Update icon
        const isOpen = sidebar.classList.contains('open');
        this.innerHTML = isOpen
            ? '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>'
            : '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"/></svg>';
    });

    // Close sidebar when clicking a link on mobile
    sidebar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 1024) {
                sidebar.classList.remove('open');
            }
        });
    });
}

/* Track Play Store link clicks */
function initPlayStoreTracking() {
    document.querySelectorAll('a[href*="play.google.com"]').forEach(link => {
        link.addEventListener('click', () => {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'play_store_click', {
                    'event_category': 'conversion',
                    'event_label': 'Docs Play Store Click',
                    'page_location': window.location.href
                });
            }
        });
    });
}

/* Calculate estimated read time */
function getReadTime(text) {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
}
