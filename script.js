document.addEventListener('DOMContentLoaded', () => {

    const fadeElements = document.querySelectorAll('.scroll-fade');

    if (fadeElements.length) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        };

        const intersectionObserver = new IntersectionObserver(observerCallback, observerOptions);
        fadeElements.forEach(el => intersectionObserver.observe(el));
    }


    // --- Mobile Nav Toggle ---
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const closeIcon = document.querySelector('.close-icon');

    if (mobileNavToggle && mainNav && hamburgerIcon && closeIcon) {
        mobileNavToggle.addEventListener('click', () => {
            const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';

            mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
            mainNav.classList.toggle('mobile-nav-open');
            mobileNavToggle.classList.toggle('is-active'); // For styling the button itself

            // Toggle icon visibility
            if (mainNav.classList.contains('mobile-nav-open')) {
                hamburgerIcon.style.display = 'none';
                closeIcon.style.display = 'inline';
            } else {
                hamburgerIcon.style.display = 'inline';
                closeIcon.style.display = 'none';
            }
        });
    }
    // --- End Mobile Nav Toggle ---

});