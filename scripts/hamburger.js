const hamburger = document.querySelector("#hamburgerMenu");
const openNav = () => {
    hamburger.style.width = "100%";
}

const closeNav = () => {
    hamburger.style.width = "0";
}

document.querySelector(".header__hamburger").addEventListener("click", () => {
    openNav();
    console.log('open')
})

document.querySelector(".closebtn").addEventListener("click", () => {
    closeNav();
    console.log('close')
})

document.querySelector("#clearDB").addEventListener("click", () => {
    deleteAllHeroes();
})

document.querySelector("#hamburgerClearDB").addEventListener("click", () => {
    deleteAllHeroes();
    closeNav()
})