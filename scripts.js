clickedHero = null;
heroShown = null;
basketValue = null;
basketContent = null

window.onload = function () {

    localStorage.clear();
    superman = {
        name: 'Superman',
        description: 'Hero description lorem....',
        image: './images/superman.jpg',
        price: '3500',
        isAvailable: true
    }

    hulk = {
        name: 'Hulk',
        description: 'Hero description lorem....',
        image: './images/hulk.jpg',
        price: '2500',
        isAvailable: true
    }

    thor = {
        name: 'Thor',
        description: 'Hero description lorem....',
        image: './images/thor.jpg',
        price: '55000',
        isAvailable: true
    }

    ironman = {
        name: 'Ironman',
        description: 'Hero description lorem....',
        image: './images/ironman.jpg',
        price: '75000',
        isAvailable: false
    }

    potter = {
        name: 'Potter',
        description: 'Hero description lorem....',
        image: './images/potter.jpg',
        price: '125000',
        isAvailable: true
    }

    batman = {
        name: 'Batman',
        description: 'Hero description lorem....',
        image: './images/batman.jpg',
        price: '2000',
        isAvailable: true
    }

    document.getElementById("heroes").innerHTML = 
    '<div class="hero">\
        <img class="clickableImg" src="'+superman.image+'" id="superman">\
        <p class="thick">'+superman.name+'</p>\
        <p class="normal">Cena wynajmu '+superman.price+' zł/h</p>\
    </div>\
    <div class="hero">\
        <img class="clickableImg" src="'+hulk.image+'" id="hulk">\
        <p class="thick">'+hulk.name+'</p>\
        <p class="normal">Cena wynajmu '+hulk.price+' zł/h</p>\
    </div>\
    <div class="hero">\
        <img class="clickableImg" src="'+thor.image+'" id="thor">\
        <p class="thick">'+thor.name+'</p>\
        <p class="normal">Cena wynajmu '+thor.price+' zł/h</p>\
    </div>\
    <div class="hero">\
        <img class="clickableImg" src="'+ironman.image+'" id="ironman">\
        <p class="thick">'+ironman.name+'</p>\
        <p class="normal">Cena wynajmu '+ironman.price+' zł/h</p>\
    </div>\
    <div class="hero">\
    <img class="clickableImg" src="'+potter.image+'" id="potter">\
        <p class="thick">'+potter.name+'</p>\
        <p class="normal">Cena wynajmu '+potter.price+' zł/h</p>\
    </div>\
    <div class="hero"><img class="clickableImg" src="'+batman.image+'" id="batman">\
        <p class="thick">'+batman.name+'</p>\
        <p class="normal">Cena wynajmu '+batman.price+' zł/h</p>\
    </div>';
 
    document.getElementById("superman").onclick = function () {
        clickedHero = "superman";
        heroShown = superman;
        displayHeroDetails();
        openModal();
        modal.style.display = "block";
    }

    document.getElementById("hulk").onclick = function () {
        clickedHero = "hulk";
        heroShown = hulk;
        displayHeroDetails();
        openModal();
        modal.style.display = "block";        
    }

    document.getElementById("thor").onclick = function () {
        clickedHero = "thor";
        heroShown = thor;
        displayHeroDetails();
        openModal();
        modal.style.display = "block";
    }

    document.getElementById("ironman").onclick = function () {
        clickedHero = "ironman";
        heroShown = ironman;
        displayHeroDetails();
        openModal();
        modal.style.display = "block";
    }

    document.getElementById("potter").onclick = function () {
        clickedHero = "potter";
        heroShown = potter;
        displayHeroDetails();
        openModal();
        modal.style.display = "block";
    }

    document.getElementById("batman").onclick = function () {
        clickedHero = "batman";
        heroShown = batman;
        displayHeroDetails();
        openModal();
        modal.style.display = "block";
    }
    
};

clearDB = function() {
    console.log("cleardb")
    return fetch("http://localhost:3000/heroes", {
        method: 'delete'
      }).then(response =>
        response.json().then(json => {
          return json;
        })
      );
}

deleteHeroFromDB = function() {
    console.log("deleteHeroFromDB")
    const url = 'http://localhost:3000/heroes/'+document.getElementById("heroName").value;
    return fetch(url, {
        method: 'delete'
      }).then(response =>
        response.json().then(json => {
          return json;
        })
      );
}

addHeroToDB = function() {
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
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
}

editHeroInDB = function() {
    console.log("editHeroDB")
    const url = 'http://localhost:3000/heroes/'+document.getElementById("heroName").value;

    const data = {      
        name: document.getElementById("heroName").value,
        image: document.getElementById("heroPic").value,
        price: document.getElementById("heroPrice").value
    };

    fetch(url, {
      method: 'PUT', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', JSON.stringify(response)));
}

loadHeroes = function (){

    console.log("loadHeroes")
    const url = 'http://localhost:3000/heroes';

    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        // console.log(JSON.stringify(myJson));
        // console.log(myJson.length)
        for (i=0;i<myJson.length;i++){
            document.getElementById("heroes").innerHTML += 
            '<div class="hero">\
                <img class="clickableImg" src="'+myJson[i].image+'" id="superman">\
                <p class="thick">'+myJson[i].name+'</p>\
                <p class="normal">Cena wynajmu '+myJson[i].price+' zł/h</p>\
            </div>\
            '
        }
      });
}

heroesToSelect = function() {
    console.log("heroesToSelect")
    const url = 'http://localhost:3000/heroes';

    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        // console.log(JSON.stringify(myJson));
        // console.log(myJson.length)
        document.getElementById("heroesSelect").innerHTML = ''
        for (i=0;i<myJson.length;i++){
            document.getElementById("heroesSelect").innerHTML += 
            '<option id="heroName">\
                '+myJson[i].name+'\
            </option>\
            '
        }
      });
}


openModal = function() {    
    // Get the modal const
    modal = document.getElementById('myModal');

    // Get the hero that opens the modal const 
    heroModal = document.getElementById(clickedHero);

    // Get the <span> element that closes the modal const
    span = document.getElementsByClassName("modal__close")[0];
    // let
    buttonModal = document.getElementById("buttonModal");

    // When the user clicks the button, open the modal 
    // heroModal.onclick = function () {
    //     modal.style.display = "block";
    // }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks on the button, close the modal
    // buttonModal.onclick = function () {
    //     modal.style.display = "none";
    // }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    document.getElementById("buttonModal").onclick = function () {
        addToBasket();
    }    
};

displayHeroDetails = function () {
    document.getElementById("heroWindow").innerHTML = 
    '<div id="myModal" class="modal">\
        <div class="modal__content">\
            <div class="modal__pic"> \
                <img src="'+heroShown.image+'" class="modal__pic--size">\
            </div>\
            <div class="modal__right">\
                <div class="modal__title">\
                    <p>'+heroShown.name+'</p>\
                </div>\
                <div class="modal__titleBorder"></div>\
                <div class="modal__description">\
                    <p>'+heroShown.description+'</p>\
                </div>\
                <div class="modal__price">\
                    <p>WYNAJEM: '+heroShown.price+' ZŁ/H<p>\
                </div>\
                <div id="buttonModal">\
                    <button id="buttonModal" class="modal__button">DODAJ DO KOSZYKA</button>\
                </div>\
            </div>\
            <span align="right" class="modal__close">&times;</span>\
        </div>\
    </div>';
}

addToBasket = function () {

    if(heroShown.isAvailable == true)
    {
        document.getElementById("basket__content").innerHTML += 
        '<div id="'+heroShown.name+'" class="basket__item">\
            <div>\
                <img class="basket__itemPic" src="'+heroShown.image+'">\
            </div>\
            <div class="basket__right">\
                <div class="basket__itemHeader">\
                    <p>'+heroShown.name+'</p>\
                </div>\
                <div class="basket__itemDescription">\
                    <p>'+heroShown.description+'</p>\
                </div>\
                <div>\
                    <button id="basket__itemButton'+heroShown.name+'" class="basket__itemButton">USUŃ Z KOSZYKA | &times;</button>\
                </div>\
            </div>\
        </div>'

        heroShown.isAvailable = false;
        basketValue = parseInt(heroShown.price) + basketValue
        console.log(heroShown.name + " " + heroShown.isAvailable)
        console.log(basketValue)
        document.getElementById("basketValue").innerHTML = basketValue + " zł"
        localStorage.setItem("basketValue", basketValue);
        localStorage.setItem(heroShown.name, heroShown)
    }
    else
    {
        alert("Nie można dodać do koszyka");
    }
    modal.style.display = "none";
    
    if(document.getElementById("basket__itemButtonSuperman"))
    document.getElementById("basket__itemButtonSuperman").onclick = function () {
        let elem = document.querySelector('#Superman');
        elem.parentNode.removeChild(elem);
        superman.isAvailable = true;
        basketValue = basketValue - parseInt(superman.price)
        document.getElementById("basketValue").innerHTML = basketValue + " zł"
        localStorage.setItem("basketValue", basketValue);
        localStorage.removeItem(superman.name)
    }
    if(document.getElementById("basket__itemButtonHulk"))
    document.getElementById("basket__itemButtonHulk").onclick = function () {
        let elem = document.querySelector('#Hulk');
        elem.parentNode.removeChild(elem);
        hulk.isAvailable = true;
        basketValue = basketValue - parseInt(hulk.price)
        document.getElementById("basketValue").innerHTML = basketValue + " zł"
        localStorage.setItem("basketValue", basketValue);
        localStorage.removeItem(hulk.name)
    }
    if(document.getElementById("basket__itemButtonThor"))
    document.getElementById("basket__itemButtonThor").onclick = function () {
        let elem = document.querySelector('#Thor');
        elem.parentNode.removeChild(elem);
        thor.isAvailable = true;
        basketValue = basketValue - parseInt(thor.price)
        document.getElementById("basketValue").innerHTML = basketValue + " zł"
        localStorage.setItem("basketValue", basketValue);
        localStorage.removeItem(thor.name)
    }
    if(document.getElementById("basket__itemButtonIronman"))
    document.getElementById("basket__itemButtonIronman").onclick = function () {
        let elem = document.querySelector('#Ironman');
        elem.parentNode.removeChild(elem);
        ironman.isAvailable = true;
        basketValue = basketValue - parseInt(ironman.price)
        document.getElementById("basketValue").innerHTML = basketValue + " zł"
        localStorage.setItem("basketValue", basketValue);
        localStorage.removeItem(ironman.name)
    }
    if(document.getElementById("basket__itemButtonPotter"))
    document.getElementById("basket__itemButtonPotter").onclick = function () {
        let elem = document.querySelector('#Potter');
        elem.parentNode.removeChild(elem);
        potter.isAvailable = true;
        basketValue = basketValue - parseInt(potter.price)
        document.getElementById("basketValue").innerHTML = basketValue + " zł"
        localStorage.setItem("basketValue", basketValue);
        localStorage.removeItem(potter.name)
    }
    if(document.getElementById("basket__itemButtonBatman"))
    document.getElementById("basket__itemButtonBatman").onclick = function () {
        let elem = document.querySelector('#Batman');
        elem.parentNode.removeChild(elem);
        batman.isAvailable = true;
        basketValue = basketValue - parseInt(batman.price)
        localStorage.setItem("basketValue", basketValue);
        localStorage.removeItem(batman.name)
    } 
};


