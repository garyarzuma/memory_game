import _ from "lodash";

const apiHandler = (() => {
  async function getPokemon(id) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        mode: "cors",
      });
      const pokemonJSON = await response.json();
      if (response.status !== 404) {
        const pokemonObject = {
          name: pokemonJSON.name.toUpperCase(),
          id: pokemonJSON.id,
          types: _.upperFirst(pokemonJSON.types[0].type.name), //uses lodash upperFirst method to capitilize first character of name
          img: pokemonJSON.sprites.other["official-artwork"].front_default,
        };
        return pokemonObject; //returns a promise
      }
      throw new Error("Pokemon not found!");
    } catch (error) {
      console.log(error);
    }
  }
  return { getPokemon };
})();

export default apiHandler;
