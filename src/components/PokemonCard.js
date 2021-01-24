import React, { useEffect, useState } from "react";
import apiHandler from "./apiHandler";

const PokemanCard = (props) => {
  const [pokemonObject, setPokemonObject] = useState("test");

  useEffect(() => {
    apiHandler.getPokemon(props.id).then((x) => setPokemonObject(x));
  }, []);

  if (!pokemonObject) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="pokemon-card">
        <img src={pokemonObject.img} alt={props.id} />
        <div className="pokemon-name">{pokemonObject.name}</div>
        <div className="pokemon-id">#{pokemonObject.id}</div>
        <div className="pokemon-type">{pokemonObject.types}</div>
      </div>
    );
  }
};

export default PokemanCard;
