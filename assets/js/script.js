// assets/js/script.js

// Additional interactive features for KijaniPulse

document.addEventListener('DOMContentLoaded', function() {

    // Navbar mobile menu (if you add a hamburger later)
    console.log('%c✅ KijaniPulse Script Loaded - Ready for Green Action 🌍', 'color: #10b981; font-size: 14px;');

    // Back to top button functionality
    function createBackToTopButton() {
        const btn = document.createElement('button');
        btn.innerHTML = '↑';
        btn.className = 'fixed bottom-6 right-6 bg-emerald-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-2xl opacity-0 hover:bg-emerald-700 transition-all duration-300 z-50';
        document.body.appendChild(btn);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                btn.style.opacity = '1';
                btn.style.transform = 'translateY(0)';
            } else {
                btn.style.opacity = '0';
                btn.style.transform = 'translateY(20px)';
            }
        });

        btn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    createBackToTopButton();

    // Animate cards on scroll
    const cards = document.querySelectorAll('.card-hover');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        card.style.transition = 'all 0.6s ease';
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        observer.observe(card);
    });

    // Year in footer (dynamic)
    const footerYear = document.querySelector('.current-year');
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }
});