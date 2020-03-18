const api = 'http://localhost:3000/heroes/'

const getHeroes = async () => {
    try {
        const response = await fetch(api);
        return await response.json();
    }
    catch (error) {
        throw Error(error)
    }
}

const deleteHeroes = async (url) => {
    try {
        await fetch(url, {
            method: 'DELETE'
        });
    }
    catch (error) {
        throw Error(error)
    }
}

const clearDB = async () => {
    deleteHeroes(api)
}

const deleteHero = async () => {
    deleteHeroes(api + document.querySelector("#heroesSelect").value)
}

const postHero = async () => {
    try {
        const data = {
            name: document.getElementById("heroName").value,
            image: document.getElementById("heroPic").value,
            price: document.getElementById("heroPrice").value,
            description: document.getElementById("heroDescription").value,
            isAvailable: true,
        };

        await fetch(api, {
            method: 'POST', 
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

const putHero = async () => {
    try {
        const data = {
            name: document.getElementById("heroName").value,
            image: document.getElementById("heroPic").value,
            price: document.getElementById("heroPrice").value,
            description: document.getElementById("heroDescription").value,
            isAvailable: true,
        };

        const url = api + document.querySelector("#heroesSelect").value;

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
    const heroesInDB = await getHeroes();

    for (i = 0; i < heroesInDB.length; i++) {
        document.getElementById("heroesSelect").innerHTML +=
            '<option id="heroName">\
            '+ heroesInDB[i].name + '\
        </option>\
        '
    }
}

const loadHeroes = async () => {
    const heroesInDB = await getHeroes();

    for (i = 0; i < heroesInDB.length; i++) {
        document.querySelector("#heroes").innerHTML +=
            '<div class="hero">\
            <img class="hero__image" src="'+ heroesInDB[i].image + '" id="' + heroesInDB[i].name + '">\
            <p class="thick">'+ heroesInDB[i].name + '</p>\
            <p class="normal">Cena wynajmu '+ heroesInDB[i].price + ' zł/h</p>\
        </div>'
    }
}