document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.feature-card, .benefit-card, .testimonial-card');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };
    
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            
            entry.target.classList.add('animated');
            
            // If this is a feature card, animate its connector after a delay
            if (entry.target.classList.contains('feature-card') && entry.target.querySelector('.connector')) {
                setTimeout(() => {
                    entry.target.querySelector('.connector').classList.add('animated');
                }, 500);
            }
            
            observer.unobserve(entry.target);
        });
    }, observerOptions);
    
    animateElements.forEach(element => {
        element.classList.add('fade-in');
        appearOnScroll.observe(element);
    });
    
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        if (scrollPosition < window.innerHeight) {
            hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        }
    });
});