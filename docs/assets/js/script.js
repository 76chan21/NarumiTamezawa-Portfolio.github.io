document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const burgerMenu = document.querySelector(".burgerMenu");
    const closeBurger = document.querySelector(".closeBurger");
    const burgerBack = document.querySelector(".burgerBack");

    if (burger) {
        burger.addEventListener("click", function () {
            burgerMenu.classList.add("slide");
            burger.style.display = "none";
            closeBurger.style.display = "block";
            burgerBack.classList.add("burgerOpen");
        });

        closeBurger.addEventListener("click", function () {
            burgerMenu.classList.remove("slide");
            burgerBack.classList.remove("burgerOpen");
            burger.style.display = "block";
            closeBurger.style.display = "none";
        });
    }
});

AOS.init();