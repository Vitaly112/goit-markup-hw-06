document.addEventListener('DOMContentLoaded', function() {
    const heroButton = document.querySelector('.hero-button');
    const modalButton = document.querySelector('.modal-botton');
    const backdrop = document.querySelector('.backdrop');
    const modal = document.querySelector('.modal');

    heroButton.addEventListener('click', function() {
        backdrop.classList.add('is-open');
    });

    modalButton.addEventListener('click', function() {
        backdrop.classList.remove('is-open');
    });
    backdrop.addEventListener('click', function(event) {
    // Перевірка, чи клік відбувся поза модальним вікном
    if (event.target === backdrop) {
        backdrop.classList.remove('is-open');
    }
    });
//     modal.addEventListener('click', function() {
//     backdrop.classList.add('is-open');
// });
});
