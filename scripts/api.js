const api = 'http://localhost:3000/heroes/'

const getHero = async (url) => {
    try {
        const response = await fetch(url);
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

const deleteAllHeroes = async () => {
    deleteHeroes(api)
}

const deleteHero = async () => {
    const url = api + document.querySelector("#heroesSelect").value;
    deleteHeroes(url)
}

const addHero = async () => {
    const data = {
        name: document.querySelector("#heroName").value,
        description: document.querySelector("#heroDescription").value,
        image: document.querySelector("#heroPic").value,
        price: document.querySelector("#heroPrice").value,
        isAvailable: true,
    };

    await postHero(data)
}

const postHero = async (data) => {
    try {
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

const editHero = async () => {
    const data = {
        name: document.querySelector("#heroesSelect").value,
        description: document.querySelector("#heroDescription").value,
        image: document.querySelector("#heroPic").value,
        price: document.querySelector("#heroPrice").value,
        isAvailable: true,
    };
    const url = api + document.querySelector("#heroesSelect").value;

    await putHero(data, url)
}

const putHero = async (data, url) => {
    try {
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
