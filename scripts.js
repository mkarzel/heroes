clickedHero = null;
heroShown = null;

window.onload = function () {
    
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
        <img class="clickable-img" src="'+superman.image+'" id="superman">\
        <p class="thick">'+superman.name+'</p>\
        <p class="normal">Cena wynajmu '+superman.price+' zł/h</p>\
    </div>\
    <div class="hero">\
        <img class="clickable-img" src="'+hulk.image+'" id="hulk">\
        <p class="thick">'+hulk.name+'</p>\
        <p class="normal">Cena wynajmu '+hulk.price+' zł/h</p>\
    </div>\
    <div class="hero">\
        <img class="clickable-img" src="'+thor.image+'" id="thor">\
        <p class="thick">'+thor.name+'</p>\
        <p class="normal">Cena wynajmu '+thor.price+' zł/h</p>\
    </div>\
    <div class="hero">\
        <img class="clickable-img" src="'+ironman.image+'" id="ironman">\
        <p class="thick">'+ironman.name+'</p>\
        <p class="normal">Cena wynajmu '+ironman.price+' zł/h</p>\
    </div>\
    <div class="hero"><img class="clickable-img" src="'+potter.image+'" id="potter">\
        <p class="thick">'+potter.name+'</p>\
        <p class="normal">Cena wynajmu '+potter.price+' zł/h</p>\
    </div>\
    <div class="hero"><img class="clickable-img" src="'+batman.image+'" id="batman">\
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

openModal = function() {    
    // Get the modal const
    modal = document.getElementById('myModal');

    // Get the hero that opens the modal const 
    heroModal = document.getElementById(clickedHero);

    // Get the <span> element that closes the modal const
    span = document.getElementsByClassName("close")[0];
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
        <div class="modal-content">\
            <div class="modal-pic"> \
                <img src="'+heroShown.image+'" width="400px" height="400px">\
            </div>\
            <div class="modal-right">\
                <div class="modal-title">\
                    <p>'+heroShown.name+'</p>\
                </div>\
                <div class="modal-title-border"></div>\
                <div class="modal-description">\
                    <p>'+heroShown.description+'</p>\
                </div>\
                <div class="modal-price">\
                    <p>WYNAJEM: '+heroShown.price+' ZŁ/H<p>\
                </div>\
                <div id="buttonModal">\
                    <button id="buttonModal" class="modal-button">DODAJ DO KOSZYKA</button>\
                </div>\
            </div>\
            <span align="right" class="close">&times;</span>\
        </div>\
    </div>';
}

addToBasket = function () {

    if(heroShown.isAvailable == true)
    {
        document.getElementById("basket-content").innerHTML += 
        '<div id="'+heroShown.name+'" class="basket-item">\
            <div>\
                <img class="basket-item-pic" src="'+heroShown.image+'">\
            </div>\
            <div class="basket-right">\
                <div class="basket-item-header">\
                    <p>'+heroShown.name+'</p>\
                </div>\
                <div class="basket-item-description">\
                    <p>'+heroShown.description+'</p>\
                </div>\
                <div>\
                    <button id="basketButton'+heroShown.name+'" class="basket-item-button">USUŃ Z KOSZYKA | &times;</button>\
                </div>\
            </div>\
        </div>'

        heroShown.isAvailable = false;
        console.log(heroShown.name + " " + heroShown.isAvailable)
    }
    else
    {
        alert("Nie można dodać do koszyka");
    }
    modal.style.display = "none";
    
    if(document.getElementById("basketButtonSuperman"))
    document.getElementById("basketButtonSuperman").onclick = function () {
        let elem = document.querySelector('#Superman');
        elem.parentNode.removeChild(elem);
        superman.isAvailable = true;
    }
    if(document.getElementById("basketButtonHulk"))
    document.getElementById("basketButtonHulk").onclick = function () {
        let elem = document.querySelector('#Hulk');
        elem.parentNode.removeChild(elem);
        hulk.isAvailable = true;
    }
    if(document.getElementById("basketButtonThor"))
    document.getElementById("basketButtonThor").onclick = function () {
        let elem = document.querySelector('#Thor');
        elem.parentNode.removeChild(elem);
        thor.isAvailable = true;
    }
    if(document.getElementById("basketButtonIronman"))
    document.getElementById("basketButtonIronman").onclick = function () {
        let elem = document.querySelector('#Ironman');
        elem.parentNode.removeChild(elem);
        ironman.isAvailable = true;
    }
    if(document.getElementById("basketButtonPotter"))
    document.getElementById("basketButtonPotter").onclick = function () {
        let elem = document.querySelector('#Potter');
        elem.parentNode.removeChild(elem);
        potter.isAvailable = true;
    }
    if(document.getElementById("basketButtonBatman"))
    document.getElementById("basketButtonBatman").onclick = function () {
        let elem = document.querySelector('#Batman');
        elem.parentNode.removeChild(elem);
        batman.isAvailable = true;
    } 
};


