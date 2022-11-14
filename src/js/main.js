const burger = document.querySelector('.js-burger-btn');
const header = document.querySelector('.header-js');
const searchBtn = document.querySelector('.js-search-btn');

burger.addEventListener('click', () => {
    header.classList.toggle('active');
});

