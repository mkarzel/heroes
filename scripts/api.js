const clearDB = async () => {
    try {
        console.log("cleardb")
        const url = 'http://localhost:3000/heroes'

        await fetch(url, {
            method: 'DELETE'
        });
        // return await response.json();
    }
    catch (error) {
        throw Error(error)
    }
}

const deleteHeroFromDB = async () => {
    try {
        console.log("deleteHeroFromDB")
        const url = 'http://localhost:3000/heroes/' + document.querySelector("#heroesSelect").value;

        await fetch(url, {
            method: 'DELETE'
        });
    }
    catch (error) {
        throw Error(error)
    }
}

const loadHeroes = async () => {
    try {
        console.log("loadHeroes")
        const url = 'http://localhost:3000/heroes';

        const response = await fetch(url);
        const heroesToLoad = await response.json();

        for (i = 0; i < heroesToLoad.length; i++) {
            document.querySelector("#heroes").innerHTML +=
                '<div class="hero">\
            <img class="hero__image" src="'+ heroesToLoad[i].image + '" id="' + heroesToLoad[i].name + '">\
            <p class="thick">'+ heroesToLoad[i].name + '</p>\
            <p class="normal">Cena wynajmu '+ heroesToLoad[i].price + ' zł/h</p>\
        </div>'
        }
    }
    catch (error) {
        throw Error(error)
    }
}

const addHeroToDB = async () => {
    try {
        console.log("addHeroDB")
        const url = 'http://localhost:3000/heroes';
        const data = {
            name: document.getElementById("heroName").value,
            image: document.getElementById("heroPic").value,
            price: document.getElementById("heroPrice").value
        };
        await fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    catch (error) {
        throw Error(error)
    }
}

const editHeroInDB = async () => {
    try {
        console.log("editHeroDB")
        const url = 'http://localhost:3000/heroes/' + document.querySelector("#heroesSelect").value;
        const data = {
            name: document.querySelector("#heroesSelect").value,
            image: document.getElementById("heroPic").value,
            price: document.getElementById("heroPrice").value,
        };
        await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    catch (error) {
        throw Error(error)
    }
}

const heroesToSelect = async () => {
    try {
        console.log("heroesToSelect")
        const url = 'http://localhost:3000/heroes';

        const response = await fetch(url);
        const heroesToEdit = await response.json();

        for (i = 0; i < heroesToEdit.length; i++) {
            document.getElementById("heroesSelect").innerHTML +=
                '<option id="heroName">\
                '+ heroesToEdit[i].name + '\
            </option>\
            '
        }
    }
    catch (error) {
        throw Error(error)
    }
}

