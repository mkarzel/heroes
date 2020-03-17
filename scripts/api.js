
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

