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
          name: _.upperFirst(pokemonJSON.name), //uses lodash upperFirst method to capitilize first character of name
          id: pokemonJSON.id,
          types: _.upperFirst(pokemonJSON.types[0].type.name),
          img: pokemonJSON.sprites.other["official-artwork"].front_default,
        };
        return pokemonObject;
      }
      throw new Error("Pokemon not found!");
    } catch (error) {
      console.log(error);
      //displayToDom.handleError();
    }
  }
  return { getPokemon };
})();

export default apiHandler;
