let basketValue = 0;
const basketValueDisplay = document.querySelector("#basketValue");

addToBasket = async () => {
    const displayedHeroName = document.querySelector(".modal__title").innerText;
    const displayedHero = await getHero(api + displayedHeroName);

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

        basketValue = parseInt(displayedHero.price) + basketValue

        basketValueDisplay.innerHTML = basketValue + " zł"

        localStorage.setItem("basketValue", basketValue);
        localStorage.setItem(displayedHero.name, displayedHero.price)

        const heroData = {
            name: displayedHero.name,
            description: displayedHero.description,
            image: displayedHero.image,
            price: displayedHero.price,
            isAvailable: false,
        }

        await putHero(heroData, api + displayedHeroName)
    }
    else {
        alert("Nie można dodać do koszyka");
    }

    await removeFromBasket()
}

const removeFromBasket = async () => {

    const heroes = await getHero(api);

    for (let i = 0; i < heroes.length; i++) {
        if (document.querySelector('#basket__itemButton' + heroes[i].name))
            document.querySelector('#basket__itemButton' + heroes[i].name).onclick = () => {

                document.querySelector('#basket' + heroes[i].name).remove();
                heroes[i].isAvailable = true;
                basketValue = basketValue - parseInt(heroes[i].price)
                basketValueDisplay.innerHTML = basketValue + " zł"

                localStorage.setItem("basketValue", basketValue);
                localStorage.removeItem(heroes[i].name)

                const heroData = {
                    name: heroes[i].name,
                    description: heroes[i].description,
                    image: heroes[i].image,
                    price: heroes[i].price,
                    isAvailable: true,
                }
        
                putHero(heroData, api + heroes[i].name)
            }
    }
}