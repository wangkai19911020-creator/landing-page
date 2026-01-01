// Consumer Smart - Main JS
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  for (const anchor of anchorLinks) {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href && href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  }

  // Add fade-in animation on scroll for elements
  const animTargets = [
    ...document.querySelectorAll('.trending-item'),
    ...document.querySelectorAll('.feature-card'),
    ...document.querySelectorAll('.team-member')
  ];

  // Fallback: if IntersectionObserver is not available, show everything immediately
  if (!('IntersectionObserver' in window)) {
    for (const el of animTargets) el.classList.add('visible');
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }
  }, observerOptions);

  for (const el of animTargets) observer.observe(el);
});
