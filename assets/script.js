// Werbung
function switchContainer(containerId) {
    document.querySelectorAll('.content-container').forEach(container => container.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.getElementById(containerId).classList.add('active');
    document.querySelector(`[onclick="switchContainer('${containerId}')"]`).classList.add('active');
}

// Karusell
function togglePanel(button) {
    const wrapper = button.closest('.book-panel-wrapper');
    const panel = wrapper.querySelector('.side-panel');
    const book = wrapper.querySelector('.book');

    const isOpen = panel.classList.contains('open');

    document.querySelectorAll('.side-panel.open').forEach(p => {
        p.classList.remove('open');
        p.style.height = '';
    });

    if (!isOpen) {
        panel.classList.add('open');
        panel.style.height = book.offsetHeight + 'px';
    }
    }
    
    function scrollCarousel(direction) {
    const carousel = document.getElementById('carousel');
    const scrollAmount = 300;
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}