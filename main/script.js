// index

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

// suche

const input = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");

input.addEventListener("input", () => {
    const query = input.value.toLowerCase().trim();

    if (!query) {
    resultsDiv.innerHTML = "";
    return;
    }

    const filtered = werke.filter(w =>
    w.titel.toLowerCase().includes(query) ||
    w.ort.toLowerCase().includes(query) ||
    w.beschreibung.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
    resultsDiv.innerHTML = "<p>Keine Ergebnisse gefunden.</p>";
    return;
    }

    resultsDiv.innerHTML = filtered.map(w => `
    <div class="result-item">
        <h5>${w.titel}</h5>
        <div><strong>Ort:</strong> ${w.ort}</div>
        <div>${w.beschreibung}</div>
    </div>
    `).join("");
});

// news

function openNews(element) {
    document.getElementById("overlay-img").src = element.querySelector(".news-image").src;
    document.getElementById("overlay-title").innerText = element.querySelector("h1").innerText;
    document.getElementById("overlay-date").innerText = element.querySelector(".news-date").innerText;
    document.getElementById("overlay-description").innerText = element.querySelector(".news-description").innerText;

    document.getElementById("news-overlay").style.display = "flex";
}

function closeNews() {
    document.getElementById("news-overlay").style.display = "none";
}