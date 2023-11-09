const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let currentSlide = 0;

function goToSlide(slideIndex) {
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    currentSlide = slideIndex;
    slider.style.transform = `translateX(-${currentSlide * (100 / slides.length)}%)`;
}

prevButton.addEventListener('click', () => {
    goToSlide(currentSlide - 1);
});

nextButton.addEventListener('click', () => {
    goToSlide(currentSlide + 1);
});

// Função para lidar com o clique no botão personalizado
function navigateToSlide(slideIndex) {
    goToSlide(slideIndex);
}

// Inicie o slider com o primeiro slide
goToSlide(0);
