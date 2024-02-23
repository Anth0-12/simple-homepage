let btnMenu = document.querySelector(".btnMenu");
let menu = document.querySelector(".menu");
let btnCroix = document.querySelector(".croix");

btnMenu.addEventListener("click", function () {
    menu.style.display = "flex";
    menu.style.position = "absolute";
    menu.style.top = "0";
    menu.style.right = "0";
});

btnCroix.addEventListener("click", function () {
    menu.style.display = "none";
});