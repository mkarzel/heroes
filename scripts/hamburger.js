const hamburger = document.querySelector("#hamburgerMenu");
const openNav = () => {
    hamburger.style.width = "100%";
}

const closeNav = () => {
    hamburger.style.width = "0";
}

document.querySelector(".header__hamburger").addEventListener("click", () => {
    openNav();
})

document.querySelector(".closebtn").addEventListener("click", () => {
    closeNav();
})

document.querySelector("#clearDB").addEventListener("click", () => {
    deleteAllHeroes();
})

document.querySelector("#hamburgerClearDB").addEventListener("click", () => {
    deleteAllHeroes();
    closeNav()
})