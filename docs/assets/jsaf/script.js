const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burgerMenu");
const closeBurger = document.querySelector(".closeBurger");
const burgerBack = document.querySelector(".burgerBack");

console.log(burger);

burger.addEventListener("click", function () {
    console.log("clicked");
    // show the menu
    // burger menu display
    burgerMenu.classList.add("slide");
    burger.style.display = "none";
    closeBurger.style.display = "block";
    burgerBack.classList.add("burgerOpen");
});

// close the menu
closeBurger.addEventListener("click", function () {
    // show the menu
    // burger menu display
    burgerMenu.classList.remove("slide");
    burgerBack.classList.remove("burgerOpen");

    // hide the burger icon & show the close icon
    burger.style.display = "block";
    closeBurger.style.display = "none";
})