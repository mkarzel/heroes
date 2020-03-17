let heroes = [
    {
        name: 'Superman',
        description: 'Hero description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: './images/superman.jpg',
        price: '3500',
        isAvailable: true
    },
    {
        name: 'Hulk',
        description: 'Hero description lorem....',
        image: './images/hulk.jpg',
        price: '2500',
        isAvailable: true
    },
    {
        name: 'Thor',
        description: 'Hero description lorem....',
        image: './images/thor.jpg',
        price: '55000',
        isAvailable: true
    },
    {
        name: 'Ironman',
        description: 'Hero description lorem....',
        image: './images/ironman.jpg',
        price: '75000',
        isAvailable: false
    },
    {
        name: 'Potter',
        description: 'Hero description lorem....',
        image: './images/potter.jpg',
        price: '125000',
        isAvailable: true
    },
    {
        name: 'Batman',
        description: 'Hero description lorem....',
        image: './images/batman.jpg',
        price: '2000',
        isAvailable: true
    }
]

// const openHeroModal = () => {
//     const heroModal = document.querySelector('#heroModal');

//     heroModal.innerHTML =
//         '<div class="modal__content">\
//             <img src="'+ displayedHero.image + '" class="modal__pic">\
//             <div class="modal__infoContainer">\
//                 <div>\
//                     <div class="modal__title">\
//                         '+ displayedHero.name + '\
//                     </div>\
//                     <div class="modal__titleBorder"></div>\
//                     <div class="modal__description">\
//                         '+ displayedHero.description + '\
//                     </div>\
//                     <div class="modal__price">\
//                         WYNAJEM: '+ displayedHero.price + ' ZŁ/H\
//                     </div>\
//                 </div>\
//                 <div>\
//                     <button class="modal__button">DODAJ&nbspDO&nbspKOSZYKA</button>\
//                 </div>\
//             </div>\
//             <img src="./images/close.png" alt="close" class="modal__close"/>\
//         </div>';

//     heroModal.style.display = "block";

//     const closeButton = document.querySelector(".modal__close");
//     closeButton.onclick = () => {
//         heroModal.style.display = "none";
//     }

//     window.onclick = (event) => {
//         if (event.target === heroModal) {
//             heroModal.style.display = "none";
//         }
//     }

//     const addToBasketButton = document.querySelector(".modal__button");
//     addToBasketButton.onclick = () => {
//         addToBasket();
//         heroModal.style.display = "none";
//     }
// };
