document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.testimonials-track');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.carousel-arrow.prev');
    const nextBtn = document.querySelector('.carousel-arrow.next');
    const progressBar = document.querySelector('.carousel-progress-bar');

    if (!track || cards.length === 0) return;

    let currentIndex = 0;
    const totalSlides = cards.length;

    function getCardsPerView() {
        return window.innerWidth > 1024 ? 2 : 1;
    }

    function getMaxIndex() {
        return Math.max(0, totalSlides - getCardsPerView());
    }

    function updateCarousel() {
        const cardsPerView = getCardsPerView();
        const cardWidth = cards[0].offsetWidth;
        const gap = 24; // 1.5rem
        const offset = currentIndex * (cardWidth + gap);
        track.style.transform = `translateX(-${offset}px)`;

        // Update progress bar
        const maxIndex = getMaxIndex();
        const progress = maxIndex > 0 ? ((currentIndex + 1) / totalSlides) * 100 : 100;
        progressBar.style.width = `${progress}%`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = Math.max(0, currentIndex - 1);
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = Math.min(getMaxIndex(), currentIndex + 1);
        updateCarousel();
    });

    // Auto-advance
    let interval = setInterval(() => {
        if (currentIndex >= getMaxIndex()) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        updateCarousel();
    }, 5000);

    // Pause on hover
    const cardsContainer = document.querySelector('.testimonials-cards');
    cardsContainer.addEventListener('mouseenter', () => clearInterval(interval));
    cardsContainer.addEventListener('mouseleave', () => {
        interval = setInterval(() => {
            if (currentIndex >= getMaxIndex()) {
                currentIndex = 0;
            } else {
                currentIndex++;
            }
            updateCarousel();
        }, 5000);
    });

    // Handle resize
    window.addEventListener('resize', () => {
        currentIndex = Math.min(currentIndex, getMaxIndex());
        updateCarousel();
    });

    updateCarousel();
});
