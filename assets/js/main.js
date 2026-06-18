// assets/js/main.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('%cKijaniPulse Network - Website Loaded Successfully 🌱', 'color: #10b981; font-weight: bold;');

    // Simple form submission alert (you can connect to Google Forms or EmailJS later)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Thank you! Your message has been received. 🌍");
            form.reset();
        });
    });
});