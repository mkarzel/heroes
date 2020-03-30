const loadHeroes = async () => {
    localStorage.clear();
    const heroes = await getHero(api);

    for (i = 0; i < heroes.length; i++) {
        const heroDiv = document.createElement("div")
        heroDiv.setAttribute("class", "hero")

        const heroImg = document.createElement("img")
        heroImg.setAttribute("class", "hero__image")
        heroImg.setAttribute("src", heroes[i].image)
        heroImg.setAttribute("id", heroes[i].name)
        
        const pThick = document.createElement("p")
        pThick.setAttribute("class", "thick")
        pThick.innerText = heroes[i].name

        const pNormal = document.createElement("p")
        pNormal.setAttribute("class", "normal")
        pNormal.innerText = 'Cena wynajmu '+ heroes[i].price + ' zł/h'

        document.querySelector("#heroes").appendChild(heroDiv)
        heroDiv.appendChild(heroImg)
        heroDiv.appendChild(pThick)
        heroDiv.appendChild(pNormal)
    }

    const images = document.querySelectorAll('.hero__image')
    for (let i = 0; i < images.length; i++) {
        images[i].onclick = () => {
            loadHeroModal(images[i].id)
        }
    }
}

window.onload = async () => {
    await loadHeroes()
}

const loadHeroModal = async (id) => {

    const hero = await getHero(api + id);

    const heroModal = document.querySelector('.modal');
    const content = document.createElement("div")
    content.setAttribute("class","modal__content")
    const heroImg = document.createElement("img")
    heroImg.setAttribute("class", "modal__pic")
    heroImg.setAttribute("src", hero.image)
    const infoContainer = document.createElement("div")
    infoContainer.setAttribute("class", "modal__infoContainer")
    const wrapper = document.createElement("div")
    const title = document.createElement("div")
    title.setAttribute("class", "modal__title")
    title.innerText = hero.name
    const titleBorder = document.createElement("div")
    titleBorder.setAttribute("class", "modal__titleBorder")
    const description = document.createElement("div")
    description.setAttribute("class", "modal__description")
    description.innerText = hero.description
    const price = document.createElement("div")
    price.setAttribute("class", "modal__price")
    price.innerText = 'WYNAJEM: '+ hero.price + ' ZŁ/H'
    const button = document.createElement("button")
    button.setAttribute("class", "modal__button")
    button.innerText = "DODAJ DO KOSZYKA"
    const closeImg = document.createElement("img")
    closeImg.setAttribute("src", "./images/close.png")
    closeImg.setAttribute("alt", "close")
    closeImg.setAttribute("class", "modal__close")

    heroModal.appendChild(content)
    content.appendChild(heroImg)
    content.appendChild(infoContainer)
    infoContainer.appendChild(wrapper)
    wrapper.appendChild(title)
    wrapper.appendChild(titleBorder)
    wrapper.appendChild(description)
    wrapper.appendChild(price)
    infoContainer.appendChild(button)
    content.appendChild(closeImg)

    heroModal.style.display = "block";

    closeImg.onclick = () => {
        heroModal.style.display = "none";
        heroModal.innerHTML = ""
    }

    window.onclick = (event) => {
        if (event.target === heroModal) {
            heroModal.style.display = "none";
            heroModal.innerHTML = ""
        }
    }

    button.onclick = () => {
        addToBasket();
        heroModal.style.display = "none";
        heroModal.innerHTML = ""
    }
    
}