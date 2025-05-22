document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".scroll-fade");

  if (fadeElements.length) {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const intersectionObserver = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    fadeElements.forEach((el) => intersectionObserver.observe(el));
  }

  // --- Mobile Nav Toggle ---
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const mainNav = document.querySelector(".main-nav");
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const closeIcon = document.querySelector(".close-icon");

  if (mobileNavToggle && mainNav && hamburgerIcon && closeIcon) {
    const closeMobileMenu = () => {
      mobileNavToggle.setAttribute("aria-expanded", "false");
      mainNav.classList.add("hidden");
      mainNav.classList.remove("mobile-nav-open");
      hamburgerIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    };

    mobileNavToggle.addEventListener("click", () => {
      const isExpanded =
        mobileNavToggle.getAttribute("aria-expanded") === "true";
      if (!isExpanded) {
        // If it was closed, now open it
        mobileNavToggle.setAttribute("aria-expanded", "true");
        mainNav.classList.remove("hidden");
        mainNav.classList.add("mobile-nav-open");
        hamburgerIcon.classList.add("hidden");
        closeIcon.classList.remove("hidden");
      } else {
        // If it was open, now close it
        closeMobileMenu();
      }
    });

    // Add event listeners to nav links to close menu on click
    const navLinks = mainNav.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (mainNav.classList.contains("mobile-nav-open")) {
          closeMobileMenu();
        }
      });
    });
  }
  // --- End Mobile Nav Toggle ---
});
