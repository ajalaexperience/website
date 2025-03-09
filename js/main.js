document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initNavigation();
    initNewsletterForm();
    
    // Make logo clickable to scroll to top
    const logo = document.getElementById('logo');
    if (logo) {
        logo.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Add cursor pointer to indicate it's clickable
        logo.style.cursor = 'pointer';
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});