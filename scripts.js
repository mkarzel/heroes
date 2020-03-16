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

const hamburger = document.querySelector("#hamburgerMenu");
const openNav = () => {
    hamburger.style.width = "100%";
}

const closeNav = () => {
    hamburger.style.width = "0";
}

const displayHeroes = () => {

    localStorage.clear();

    for (let i = 0; i < heroes.length; i++) {
        document.querySelector("#heroes").innerHTML +=
            '<div class="hero">\
            <img class="hero__image" src="'+ heroes[i].image + '" id="' + heroes[i].name + '">\
            <p class="thick">'+ heroes[i].name + '</p>\
            <p class="normal">Cena wynajmu '+ heroes[i].price + ' zł/h</p>\
        </div>';
    }

    const heroModal = document.querySelector('#heroModal');
    for (let i = 0; i < heroes.length; i++) {
        document.querySelector('#' + heroes[i].name).onclick = () => {
            heroModal.innerHTML =
                '<div class="modal__content">\
                    <img src="'+ heroes[i].image + '" class="modal__pic">\
                    <div class="modal__infoContainer">\
                        <div>\
                            <div class="modal__title">\
                                '+ heroes[i].name + '\
                            </div>\
                            <div class="modal__titleBorder"></div>\
                            <div class="modal__description">\
                                '+ heroes[i].description + '\
                            </div>\
                            <div class="modal__price">\
                                WYNAJEM: '+ heroes[i].price + ' ZŁ/H\
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
    }
};

const openHeroModal = () => {
    const heroModal = document.querySelector('#heroModal');

    heroModal.innerHTML =
        '<div class="modal__content">\
            <img src="'+ displayedHero.image + '" class="modal__pic">\
            <div class="modal__infoContainer">\
                <div>\
                    <div class="modal__title">\
                        '+ displayedHero.name + '\
                    </div>\
                    <div class="modal__titleBorder"></div>\
                    <div class="modal__description">\
                        '+ displayedHero.description + '\
                    </div>\
                    <div class="modal__price">\
                        WYNAJEM: '+ displayedHero.price + ' ZŁ/H\
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
};

clearDB = function () {
    console.log("cleardb")
    return fetch("http://localhost:3000/heroes", {
        method: 'delete'
    }).then(response =>
        response.json().then(json => {
            return json;
        })
    );
}

deleteHeroFromDB = function () {
    console.log("deleteHeroFromDB")
    const url = 'http://localhost:3000/heroes/' + document.getElementById("heroName").value;
    return fetch(url, {
        method: 'delete'
    }).then(response =>
        response.json().then(json => {
            return json;
        })
    );
}

addHeroToDB = function () {
    console.log("addHeroDB")
    const url = 'http://localhost:3000/heroes';
    const data = {
        name: document.getElementById("heroName").value,
        image: document.getElementById("heroPic").value,
        price: document.getElementById("heroPrice").value
    };

    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
}

editHeroInDB = function () {
    console.log("editHeroDB")
    const url = 'http://localhost:3000/heroes/' + document.getElementById("heroName").value;

    const data = {
        name: document.getElementById("heroName").value,
        image: document.getElementById("heroPic").value,
        price: document.getElementById("heroPrice").value
    };

    fetch(url, {
        method: 'PUT', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', JSON.stringify(response)));
}

loadHeroes = function () {

    console.log("loadHeroes")
    const url = 'http://localhost:3000/heroes';

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            // console.log(JSON.stringify(myJson));
            // console.log(myJson.length)
            for (i = 0; i < myJson.length; i++) {
                document.getElementById("heroes").innerHTML +=
                    '<div class="hero">\
                <img class="hero__image" src="'+ myJson[i].image + '" id="superman">\
                <p class="thick">'+ myJson[i].name + '</p>\
                <p class="normal">Cena wynajmu '+ myJson[i].price + ' zł/h</p>\
            </div>\
            '
            }
        });
}

heroesToSelect = function () {
    console.log("heroesToSelect")
    const url = 'http://localhost:3000/heroes';

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            // console.log(JSON.stringify(myJson));
            // console.log(myJson.length)
            document.getElementById("heroesSelect").innerHTML = ''
            for (i = 0; i < myJson.length; i++) {
                document.getElementById("heroesSelect").innerHTML +=
                    '<option id="heroName">\
                '+ myJson[i].name + '\
            </option>\
            '
            }
        });
}

let basketValue = 0;
const basketValueDisplay = document.querySelector("#basketValue");

addToBasket = () => {
    const displayedHeroName = document.querySelector(".modal__title").innerText;
    let displayedHero;

    for (let i = 0; i < heroes.length; i++) {
        if (displayedHeroName == heroes[i].name)
            displayedHero = heroes[i]
    }

    if (displayedHero.isAvailable === true) {
        document.querySelector(".basket__content").innerHTML +=
            '<div id="basket' + displayedHero.name + '" class="basket__item">\
            <img class="basket__picSide" src="'+ displayedHero.image + '">\
            <div class="basket__textSide">\
                <div>\
                    <div class="basket__itemHeader">\
                        '+ displayedHero.name + '\
                    </div>\
                    <div class="basket__itemDescription">\
                        <p>'+ displayedHero.description + '</p>\
                    </div>\
                </div>\
                <button id="basket__itemButton'+ displayedHero.name + '" class="basket__itemButton">USUŃ&nbspZ&nbspKOSZYKA&nbsp|&nbsp&times;</button>\
            </div>\
        </div>'

        displayedHero.isAvailable = false;

        basketValue = parseInt(displayedHero.price) + basketValue

        basketValueDisplay.innerHTML = basketValue + " zł"

        localStorage.setItem("basketValue", basketValue);
        localStorage.setItem(displayedHero.name, displayedHero.price)
    }
    else {
        alert("Nie można dodać do koszyka");
    }

    removeFromBasket()
}

const removeFromBasket = () => {
    for (let i = 0; i < heroes.length; i++) {
        if (document.querySelector('#basket__itemButton' + heroes[i].name))
            document.querySelector('#basket__itemButton' + heroes[i].name).onclick = () => {

                document.querySelector('#basket' + heroes[i].name).remove();
                heroes[i].isAvailable = true;
                basketValue = basketValue - parseInt(heroes[i].price)
                basketValueDisplay.innerHTML = basketValue + " zł"

                localStorage.setItem("basketValue", basketValue);
                localStorage.removeItem(heroes[i].name)
            }
    }
}