const navbar = document.querySelector('.menu-icon');
const mobile_menu = document.querySelector('.menu-icon-active');
const menu = document.querySelector('.nav-links');

// Responsive Nav Bar
navbar.addEventListener('click', () => {
    navbar.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    menu.classList.toggle('active');
});

mobile_menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    menu.classList.toggle('active');
});