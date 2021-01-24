import React, { useEffect, useState } from "react";
import apiHandler from "./apiHandler";

const PokemanCard = (props) => {
  const [pokemonObject, setPokemonObject] = useState("test");

  useEffect(() => {
    apiHandler.getPokemon(props.id).then((x) => setPokemonObject(x));
  }, [props.id]);

  if (!pokemonObject) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="pokemon-card" onClick={props.onClick} id={props.id}>
        <img className="pokemon-image" src={pokemonObject.img} alt={props.id} />
        <div className="pokemon-info">
          <div className="pokemon-name">{pokemonObject.name}</div>
          <div className="pokemon-id">#{pokemonObject.id}</div>
        </div>
        <div className="pokemon-type" id={pokemonObject.types}>
          {pokemonObject.types}
        </div>
      </div>
    );
  }
};

export default PokemanCard;
