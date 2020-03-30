let basketValue = 0;
const basketValueDisplay = document.querySelector("#basketValue");

addToBasket = async () => {
    const displayedHeroName = document.querySelector(".modal__title").innerText;
    const displayedHero = await getHero(api + displayedHeroName);

    const basketItemDiv = document.createElement("div")
    basketItemDiv.setAttribute("id", "basket" + displayedHero.name)
    basketItemDiv.setAttribute("class", "basket__item")

    const basketPic = document.createElement("img")
    basketPic.setAttribute("class", "basket__picSide")
    basketPic.setAttribute("src", displayedHero.image)

    const basketTextSideDiv = document.createElement("div")
    basketTextSideDiv.setAttribute("class", "basket__textSide")

    const basketItemWrapper = document.createElement("div")

    const basketItemHeader = document.createElement("div")
    basketItemHeader.setAttribute("class", "basket__itemHeader")
    basketItemHeader.innerText = displayedHero.name

    const basketItemDescription = document.createElement("div")
    basketItemDescription.setAttribute("class", "basket__itemDescription")

    const paragraph = document.createElement("p")
    paragraph.innerText = displayedHero.description
    basketItemDescription.appendChild(paragraph)

    const basketItemButton = document.createElement("button")
    basketItemButton.setAttribute("id", "basket__itemButton" + displayedHero.name)
    basketItemButton.setAttribute("class", "basket__itemButton")
    basketItemButton.innerText = "USUŃ Z KOSZYKA"

    if (displayedHero.isAvailable === true && !document.querySelector('#basket' + displayedHero.name)) {
        document.querySelector(".basket__content").appendChild(basketItemDiv)
        basketItemDiv.appendChild(basketPic)
        basketItemDiv.appendChild(basketTextSideDiv)
        basketTextSideDiv.appendChild(basketItemWrapper)
        basketItemWrapper.appendChild(basketItemHeader)
        basketItemWrapper.appendChild(basketItemDescription)
        basketTextSideDiv.appendChild(basketItemButton)

        basketValue = parseInt(displayedHero.price) + basketValue
        basketValueDisplay.innerHTML = basketValue + " zł"

        localStorage.setItem("basketValue", basketValue);
        localStorage.setItem(displayedHero.name, displayedHero.price)
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
                
                basketValue = basketValue - parseInt(heroes[i].price)
                basketValueDisplay.innerHTML = basketValue + " zł"

                localStorage.setItem("basketValue", basketValue);
                localStorage.removeItem(heroes[i].name)
            }
    }
}