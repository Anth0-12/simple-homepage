let background = document.querySelector("body");
let slogan = document.querySelector(".slogan");
let title = document.querySelector("h1");
let dark = document.querySelector(".dark");
let light = document.querySelector(".light");
let moon = document.querySelector(".moon");
let sun = document.querySelector(".sun");
let logoImg = document.querySelector(".logoImg");
let links = document.querySelectorAll(".link");


let isDarkClicked = false;

dark.addEventListener("click", function () {

    if (isDarkClicked = true) {
        background.style.backgroundColor = "#111729";
        dark.style.backgroundColor = "#F2F9FE";
        moon.src = 'img/Moon_fill.svg';
        light.style.backgroundColor = "transparent";
        sun.src = 'img/Sun_fill_light.svg';
        slogan.style.color = "#F2F9FE";
        title.style.color = "#F2F9FE";
        logoImg.src = 'img/alarado_light.svg';

        // Ajoutez des écouteurs d'événements pour chaque lien
        links.forEach(function(link) {
            link.addEventListener("mouseover", function () {
                link.style.color = "#F2F9FE";
            });

            link.addEventListener("mouseout", function () {
                link.style.color = "#909193";
            });
        });
    }
});

light.addEventListener("click", function ()  {
    background.style.backgroundColor = "#F2F9FE";
    dark.style.backgroundColor = "transparent";
    moon.src = 'img/Moon_fill_light.svg';
    light.style.backgroundColor = "#F2F9FE";
    sun.src = 'img/Sun_fill.svg';
    slogan.style.color = "#111729";
    title.style.color = "#111729";
    logoImg.src = 'img/alarado-icon-homepage.svg';

    links.forEach(function(link) {
        link.addEventListener("mouseover", function () {
            link.style.color = "#111729";
        });

        link.addEventListener("mouseout", function () {
            link.style.color = "#909193";
        });
    });
});
