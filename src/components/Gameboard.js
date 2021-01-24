import React, { useState } from "react";
import PokemonCard from "./PokemonCard";

const Gameboard = (props) => {
  const [pokemonId, setPokemonId] = useState(1);
  //apiHandler.getPokemon(56).then((x) => console.log(x));

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  return (
    <div className="gameboard">
      <PokemonCard id={pokemonId + getRandomInt(900)} />
      <PokemonCard id={pokemonId + getRandomInt(900)} />
      <PokemonCard id={pokemonId + getRandomInt(900)} />
      <PokemonCard id={pokemonId + getRandomInt(900)} />
      <PokemonCard id={pokemonId + getRandomInt(900)} />
      <PokemonCard id={pokemonId + getRandomInt(900)} />
    </div>
  );
};

export default Gameboard;
