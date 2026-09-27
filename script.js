const logo = document.querySelector('.logo');
const menu = document.querySelector('#mainMenu');

logo.addEventListener('mouseenter', () => {
    menu.classList.add('open');
});

document.addEventListener('click', (event) => {
    if (!menu.contains(event.target)) {
        menu.classList.remove('open');
    }
});