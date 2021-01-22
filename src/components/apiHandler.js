const apiHandler = (() => {
  async function getPokemon(id) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        mode: "cors",
      });
      const pokemonJSON = await response.json();
      console.log(pokemonJSON);
      if (response.status !== 404) {
        const pokemonObject = {
          name: pokemonJSON.name,
          id: pokemonJSON.id,
          types: pokemonJSON.types[0].type.name,
          img: pokemonJSON.sprites.other["official-artwork"].front_default,
        };
        return pokemonObject;
      }
      throw new Error("Location not found!");
    } catch (error) {
      console.log(error);
      //displayToDom.handleError();
    }
  }
  return { getPokemon };
})();

export default apiHandler;
