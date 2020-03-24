const heroesToSelect = async () => {
    const heroes = await getHero(api);

    for (i = 0; i < heroes.length; i++) {
        document.querySelector("#heroesSelect").innerHTML +=
            '<option id="heroName">\
            '+ heroes[i].name + '\
        </option>\
        '
    }
}

window.onload = async () => {
    if(document.querySelector("#heroesSelect"))
    await heroesToSelect()
}

if (document.querySelector("#deleteHeroSubmit"))
document.querySelector("#deleteHeroSubmit").addEventListener("click", () => {
    deleteHero();
})

if (document.querySelector("#editHeroSubmit"))
document.querySelector("#editHeroSubmit").addEventListener("click", () => {
    editHero();
})

if(document.querySelector("#addHeroSubmit"))
document.querySelector("#addHeroSubmit").addEventListener("click", () => {
    addHero();
})

