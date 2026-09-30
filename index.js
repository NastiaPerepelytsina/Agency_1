const menu = document.getElementById("mainMenu");
const burger = document.getElementById("burgerBtn");

burger.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    burger.setAttribute("aria-expanded", isOpen);
});
