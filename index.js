const navEl = document.querySelector('.nav');
const hamburgerEL = document.querySelector('.hamburger');

hamburgerEL.addEventListener('click', () => {
navEl.classList.toggle('nav--open');
hamburgerEL.classList.toggle('hamburger--open');

});

