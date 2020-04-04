const heroesSelect = document.querySelector("#heroesSelect")

const heroesToSelect = async () => {
    const heroes = await getHero(api);

    for (i = 0; i < heroes.length; i++) {
        const newOption = document.createElement("option")
        newOption.setAttribute("id","heroName")
        heroesSelect.appendChild(newOption)
        newOption.innerText = heroes[i].name
    }
}

const clearInputs = () => {
    const inputs = document.querySelectorAll(".form__input")
    for (i=0; i < inputs.length; i++){
        inputs[i].value = null
    }
}

window.onload = async () => {
    if(heroesSelect){
        await heroesToSelect()
    }   
}

if (document.querySelector("#deleteHeroSubmit"))
document.querySelector("#deleteHeroSubmit").addEventListener("click", () => {
    deleteHero();
    heroesSelect.remove(heroesSelect.selectedIndex)
})

if (document.querySelector("#editHeroSubmit"))
document.querySelector("#editHeroSubmit").addEventListener("click", () => {
    editHero();
    clearInputs();
})

if(document.querySelector("#addHeroSubmit"))
document.querySelector("#addHeroSubmit").addEventListener("click", () => {
    addHero();
    clearInputs();
})

