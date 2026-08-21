// assets/js/main.js — Consolidated scripts for KijaniPulse

document.addEventListener('DOMContentLoaded', function () {

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
        const icon = menuToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        }
      });
    });
  }

  // Dynamic year in footer
  document.querySelectorAll('.current-year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Back to top button
  const btn = document.createElement('button');
  btn.innerHTML = '↑';
  btn.className = 'fixed bottom-6 right-6 bg-emerald-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-2xl opacity-0 pointer-events-none hover:bg-emerald-700 transition-all duration-300 z-50';
  btn.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(btn);

  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
      btn.style.transform = 'translateY(0)';
    } else {
      btn.style.opacity = '0';
      btn.style.pointerEvents = 'none';
      btn.style.transform = 'translateY(20px)';
    }
  });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Animate cards on scroll
  const cards = document.querySelectorAll('.card-hover');
  if (cards.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(function (card) {
      card.style.transition = 'all 0.6s ease';
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      observer.observe(card);
    });
  }

  console.log('%c✅ KijaniPulse — Ready for Green Action 🌍', 'color: #10b981; font-size: 14px;');
});
