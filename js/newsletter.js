function initNewsletterForm() {
    const form = document.querySelector('.newsletter-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        
        // Add your newsletter subscription logic here
        console.log('Newsletter subscription for:', email);
        
        // Show success message
        const message = document.createElement('div');
        message.className = 'success-message';
        message.textContent = 'Thank you for subscribing!';
        form.appendChild(message);
        form.reset();
    });
}