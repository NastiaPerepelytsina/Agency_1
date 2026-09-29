const burgerBtn = document.querySelector('#burgerBtn');
const menuList = document.querySelector('#menuList');

if (burgerBtn && menuList) {
    burgerBtn.addEventListener('click', () => {
        menuList.classList.toggle('active');
    });
}