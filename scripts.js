let displayedHero = null;
basketValue = null;
basketContent = null
const heroModal = document.querySelector('#heroModal');
let heroes = [
    {
        name: 'Superman',
        description: 'Hero description lorem....',
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

const openNav = () => {
    document.querySelector("#hamburgerMenu").style.width = "100%";
}

const closeNav = () => {
    document.querySelector("#hamburgerMenu").style.width = "0";
}

window.onload = () => {

    localStorage.clear();

    for (let i = 0; i < heroes.length; i++) {
        document.querySelector("#heroes").innerHTML +=
            '<div class="hero">\
            <img class="hero__image" src="'+ heroes[i].image + '" id="' + heroes[i].name + '">\
            <p class="thick">'+ heroes[i].name + '</p>\
            <p class="normal">Cena wynajmu '+ heroes[i].price + ' zł/h</p>\
        </div>';
    }

    for (let i = 0; i < heroes.length; i++) {
        document.getElementById(heroes[i].name).onclick = () => {
            displayedHero = heroes[i];
            openHeroModal();
            heroModal.style.display = "block";
        }
    }
};

const openHeroModal = () => {

    document.querySelector("#heroModal").innerHTML =
        '<div class="modal__content">\
            <div class="modal__pic"> \
                <img src="'+ displayedHero.image + '" class="modal__pic">\
            </div>\
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
                    <button class="modal__button">DODAJ DO KOSZYKA</button>\
                </div>\
            </div>\
            <div "modal__close">\
                <img src="./images/close.png" alt="close" class="modal__close"/>\
            </div>\
        </div>';

   
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

addToBasket = function () {

    if (displayedHero.isAvailable == true) {
        document.getElementById("basket__content").innerHTML +=
            '<div id="' + displayedHero.name + '" class="basket__item">\
            <div>\
                <img class="basket__itemPic" src="'+ displayedHero.image + '">\
            </div>\
            <div class="basket__right">\
                <div class="basket__itemHeader">\
                    <p>'+ displayedHero.name + '</p>\
                </div>\
                <div class="basket__itemDescription">\
                    <p>'+ displayedHero.description + '</p>\
                </div>\
                <div>\
                    <button id="basket__itemButton'+ displayedHero.name + '" class="basket__itemButton">USUŃ Z KOSZYKA | &times;</button>\
                </div>\
            </div>\
        </div>'

        displayedHero.isAvailable = false;
        basketValue = parseInt(displayedHero.price) + basketValue
        console.log(displayedHero.name + " " + displayedHero.isAvailable)
        console.log(basketValue)
        document.getElementById("basketValue").innerHTML = basketValue + " zł"
        localStorage.setItem("basketValue", basketValue);
        localStorage.setItem(displayedHero.name, displayedHero)
    }
    else {
        alert("Nie można dodać do koszyka");
    }
    heroModal.style.display = "none";

    if (document.getElementById("basket__itemButtonSuperman"))
        document.getElementById("basket__itemButtonSuperman").onclick = function () {
            let elem = document.querySelector('#Superman');
            elem.parentNode.removeChild(elem);
            superman.isAvailable = true;
            basketValue = basketValue - parseInt(superman.price)
            document.getElementById("basketValue").innerHTML = basketValue + " zł"
            localStorage.setItem("basketValue", basketValue);
            localStorage.removeItem(superman.name)
        }
    if (document.getElementById("basket__itemButtonHulk"))
        document.getElementById("basket__itemButtonHulk").onclick = function () {
            let elem = document.querySelector('#Hulk');
            elem.parentNode.removeChild(elem);
            hulk.isAvailable = true;
            basketValue = basketValue - parseInt(hulk.price)
            document.getElementById("basketValue").innerHTML = basketValue + " zł"
            localStorage.setItem("basketValue", basketValue);
            localStorage.removeItem(hulk.name)
        }
    if (document.getElementById("basket__itemButtonThor"))
        document.getElementById("basket__itemButtonThor").onclick = function () {
            let elem = document.querySelector('#Thor');
            elem.parentNode.removeChild(elem);
            thor.isAvailable = true;
            basketValue = basketValue - parseInt(thor.price)
            document.getElementById("basketValue").innerHTML = basketValue + " zł"
            localStorage.setItem("basketValue", basketValue);
            localStorage.removeItem(thor.name)
        }
    if (document.getElementById("basket__itemButtonIronman"))
        document.getElementById("basket__itemButtonIronman").onclick = function () {
            let elem = document.querySelector('#Ironman');
            elem.parentNode.removeChild(elem);
            ironman.isAvailable = true;
            basketValue = basketValue - parseInt(ironman.price)
            document.getElementById("basketValue").innerHTML = basketValue + " zł"
            localStorage.setItem("basketValue", basketValue);
            localStorage.removeItem(ironman.name)
        }
    if (document.getElementById("basket__itemButtonPotter"))
        document.getElementById("basket__itemButtonPotter").onclick = function () {
            let elem = document.querySelector('#Potter');
            elem.parentNode.removeChild(elem);
            potter.isAvailable = true;
            basketValue = basketValue - parseInt(potter.price)
            document.getElementById("basketValue").innerHTML = basketValue + " zł"
            localStorage.setItem("basketValue", basketValue);
            localStorage.removeItem(potter.name)
        }
    if (document.getElementById("basket__itemButtonBatman"))
        document.getElementById("basket__itemButtonBatman").onclick = function () {
            let elem = document.querySelector('#Batman');
            elem.parentNode.removeChild(elem);
            batman.isAvailable = true;
            basketValue = basketValue - parseInt(batman.price)
            localStorage.setItem("basketValue", basketValue);
            localStorage.removeItem(batman.name)
        }
};
