// Swiper Initialization
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true //This will pause autoplay when the slider is hovered
    },
    coverflowEffect: {
        rotate: 50,
        stretch: -10,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const watchNowBtn7 = document.getElementById('watch-now-btn7'); 

// Add event listener to the first button
watchNowBtn7.addEventListener('click', function() {
    window.open('family7vd.mp4', '_blank'); 
});

const watchNowBtn8 = document.getElementById('watch-now-btn8'); 

// Add event listener to the second button
watchNowBtn8.addEventListener('click', function() {
    window.open('family8vd.mp4', '_blank'); 
});

const watchNowBtn9 = document.getElementById('watch-now-btn9'); 

// Add event listener to the second button
watchNowBtn9.addEventListener('click', function() {
    window.open('family9vd.mp4', '_blank'); 
});