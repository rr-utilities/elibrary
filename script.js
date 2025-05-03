document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel");
    const carouselContainer = document.getElementById("carousel-container");
    let currentIndex = 0;
    const items = document.querySelectorAll(".carousel-item");
    const totalItems = items.length;

    function moveCarousel() {
        currentIndex = (currentIndex + 1) % totalItems;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Nach 5 Sekunden
    let carouselInterval = setInterval(moveCarousel, 5000);

    carouselContainer.addEventListener("mouseenter", function () {
        clearInterval(carouselInterval);
    });

    carouselContainer.addEventListener("mouseleave", function () {
        carouselInterval = setInterval(moveCarousel, 5000);
    });

    document.getElementById("prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    });

    document.getElementById("next").addEventListener("click", () => {
        moveCarousel();
    });
});