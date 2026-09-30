const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const menuOpenIcon = menuToggle.querySelector('img[alt="Open menu"]');
const menuCloseIcon = menuToggle.querySelector('img[alt="Close menu"]');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
    nav.classList.toggle('above');
    menuCloseIcon.classList.toggle('hide');
    menuOpenIcon.classList.toggle('hide');
});