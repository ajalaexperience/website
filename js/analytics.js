// User behavior tracking
document.addEventListener('DOMContentLoaded', function() {
    // Track CTA clicks
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent;
            const buttonHref = this.getAttribute('href');
            
            // Send event to Google Analytics
            gtag('event', 'click', {
                'event_category': 'CTA',
                'event_label': buttonText,
                'value': buttonHref
            });
        });
    });
    
    // Track section visibility
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id || entry.target.className;
                
                // Send event to Google Analytics
                gtag('event', 'section_view', {
                    'event_category': 'Engagement',
                    'event_label': sectionId
                });
                
                // Unobserve after first view
                sectionObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Track form submissions
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            gtag('event', 'form_submission', {
                'event_category': 'Newsletter',
                'event_label': 'Subscription'
            });
        });
    }
});