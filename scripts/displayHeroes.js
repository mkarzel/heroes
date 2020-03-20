// let heroes = [
//     {
//         name: 'Superman',
//         description: 'Hero description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//         image: './images/superman.jpg',
//         price: '3500',
//         isAvailable: true
//     },
//     {
//         name: 'Hulk',
//         description: 'Hero description lorem....',
//         image: './images/hulk.jpg',
//         price: '2500',
//         isAvailable: true
//     },
//     {
//         name: 'Thor',
//         description: 'Hero description lorem....',
//         image: './images/thor.jpg',
//         price: '55000',
//         isAvailable: true
//     },
//     {
//         name: 'Ironman',
//         description: 'Hero description lorem....',
//         image: './images/ironman.jpg',
//         price: '75000',
//         isAvailable: false
//     },
//     {
//         name: 'Potter',
//         description: 'Hero description lorem....',
//         image: './images/potter.jpg',
//         price: '125000',
//         isAvailable: true
//     },
//     {
//         name: 'Batman',
//         description: 'Hero description lorem....',
//         image: './images/batman.jpg',
//         price: '2000',
//         isAvailable: true
//     }
// ]

// const displayHeroes = () => {

//     localStorage.clear();

//     for (let i = 0; i < heroes.length; i++) {
//         document.querySelector("#heroes").innerHTML +=
//             '<div class="hero">\
//             <img class="hero__image" src="'+ heroes[i].image + '" id="' + heroes[i].name + '">\
//             <p class="thick">'+ heroes[i].name + '</p>\
//             <p class="normal">Cena wynajmu '+ heroes[i].price + ' zł/h</p>\
//         </div>';
//     }

//     const heroModal = document.querySelector('#heroModal');
//     for (let i = 0; i < heroes.length; i++) {
//         document.querySelector('#' + heroes[i].name).onclick = () => {
//             heroModal.innerHTML =
//                 '<div class="modal__content">\
//                     <img src="'+ heroes[i].image + '" class="modal__pic">\
//                     <div class="modal__infoContainer">\
//                         <div>\
//                             <div class="modal__title">\
//                                 '+ heroes[i].name + '\
//                             </div>\
//                             <div class="modal__titleBorder"></div>\
//                             <div class="modal__description">\
//                                 '+ heroes[i].description + '\
//                             </div>\
//                             <div class="modal__price">\
//                                 WYNAJEM: '+ heroes[i].price + ' ZŁ/H\
//                             </div>\
//                         </div>\
//                         <div>\
//                             <button class="modal__button">DODAJ&nbspDO&nbspKOSZYKA</button>\
//                         </div>\
//                     </div>\
//                     <img src="./images/close.png" alt="close" class="modal__close"/>\
//                 </div>';

//             heroModal.style.display = "block";

//             const closeButton = document.querySelector(".modal__close");
//             closeButton.onclick = () => {
//                 heroModal.style.display = "none";
//             }

//             window.onclick = (event) => {
//                 if (event.target === heroModal) {
//                     heroModal.style.display = "none";
//                 }
//             }

//             const addToBasketButton = document.querySelector(".modal__button");
//             addToBasketButton.onclick = () => {
//                 addToBasket();
//                 heroModal.style.display = "none";
//             }
//         }
//     }
// };

const heroesToSelect = async () => {
    const heroes = await getHero(api);

    for (i = 0; i < heroes.length; i++) {
        document.querySelector("#heroesSelect").innerHTML +=
            '<option id="heroName">\
            '+ heroes[i].name + '\
        </option>\
        '
    }
}

const loadHeroes = async () => {
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

const loadHeroModal = async (id) => {

    const hero = await getHero(api + id);
    const heroModal = document.querySelector('#heroModal');

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