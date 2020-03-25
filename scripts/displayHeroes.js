const loadHeroes = async () => {
    localStorage.clear();
    const heroes = await getHero(api);

    for (i = 0; i < heroes.length; i++) {
        document.querySelector("#heroes").innerHTML +=
            '<div class="hero">\
            <img class="hero__image" src="'+ heroes[i].image + '" id="' + heroes[i].name + '">\
            <p class="thick">'+ heroes[i].name + '</p>\
            <p class="normal">Cena wynajmu '+ heroes[i].price + ' zł/h</p>\
        </div>'
    }

    const images = document.querySelectorAll('.hero__image')
    for (let i = 0; i < images.length; i++) {
        images[i].onclick = () => {
            loadHeroModal(images[i].id)
        }
    }
}

window.onload = async () => {
    await loadHeroes()
}

const loadHeroModal = async (id) => {

    const hero = await getHero(api + id);
    const heroModal = document.querySelector('.modal');

    heroModal.innerHTML =
        '<div class="modal__content">\
                    <img src="'+ hero.image + '" class="modal__pic">\
                    <div class="modal__infoContainer">\
                        <div>\
                            <div class="modal__title">\
                                '+ hero.name + '\
                            </div>\
                            <div class="modal__titleBorder"></div>\
                            <div class="modal__description">\
                                '+ hero.description + '\
                            </div>\
                            <div class="modal__price">\
                                WYNAJEM: '+ hero.price + ' ZŁ/H\
                            </div>\
                        </div>\
                        <div>\
                            <button class="modal__button">DODAJ&nbspDO&nbspKOSZYKA</button>\
                        </div>\
                    </div>\
                    <img src="./images/close.png" alt="close" class="modal__close"/>\
                </div>';

    heroModal.style.display = "block";

    const closeButton = document.querySelector(".modal__close");
    closeButton.onclick = () => {
        heroModal.style.display = "none";
    }

    window.onclick = (event) => {
        if (event.target === heroModal) {
            heroModal.style.display = "none";
        }
    }

    const addToBasketButton = document.querySelector(".modal__button");
    addToBasketButton.onclick = () => {
        addToBasket();
        heroModal.style.display = "none";
    }
}