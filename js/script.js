let menuToggle = document.querySelector('.menu-toggle');
let navRight = document.querySelector('.nav-right');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navRight.classList.toggle('active');
})

