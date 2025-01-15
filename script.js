$(document).ready(function() {
    let currentIndex = 0;
    const slides = $('.slide');
    const totalSlides = slides.length;

    function moveSlide(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = totalSlides - 3;
        } else if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }
        updateSlider();
    }

    function updateSlider() {
        const offset = -currentIndex * 50; // Move the carousel by 100% of the width of one slide
        $('.carousel-inner').css('transform', `translateX(${offset}%)`);
    }

    // Next slide
    $('.next').click(function() {
        moveSlide(1);
    });

    // Previous slide
    $('.prev').click(function() {
        moveSlide(-1);
    });
});
