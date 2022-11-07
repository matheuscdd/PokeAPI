async function consomePokeAPI() {
    const load = document.querySelector("#loading");

    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const pokemonsDaAPI = await response.json();
        data = pokemonsDaAPI.results;
        insertDynamicList(data);
        return pokemonsDaAPI;
    } catch(error) {
        console.log(error);
    } finally {
        load.remove();
    }





}

consomePokeAPI();