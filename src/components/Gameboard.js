import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const Gameboard = (props) => {
  const [pokemonIdArray, setPokemonIdArray] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [pokemonClickedArray, setPokemonClickedArray] = useState([]);
  const pokemonMax = 50;
  //apiHandler.getPokemon(56).then((x) => console.log(x));

  useEffect(() => {
    //random array of 8 integers between 1 and 1+pokemonMax
    setPokemonIdArray(
      Array(8)
        .fill()
        .map(() => Math.round(Math.random() * pokemonMax + 1))
    );
  }, []);

  function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(pokemonMax) + 1);
  }

  function updateCards() {
    //console.log()
    setPokemonIdArray(pokemonIdArray.map((x) => getRandomInt(30)));
  }

  function handleClick(event) {
    updateScore(event.currentTarget.id);
    updateCards();
  }

  function updatePokemonClickedArray(id) {
    setPokemonClickedArray([...pokemonClickedArray, id]);
  }

  function updateScore(id) {
    if (arrayHasDuplicates(id) === true) {
      if (topScore < currentScore) {
        setTopScore(currentScore);
      }
      setCurrentScore(0);
      setPokemonClickedArray([]);
    } else {
      setCurrentScore(currentScore + 1);
      updatePokemonClickedArray(id);
      console.log(pokemonClickedArray);
    }
  }

  function arrayHasDuplicates(id) {
    return pokemonClickedArray.indexOf(id) === -1 ? false : true;
  }

  return (
    <div className="gameboard-score-container">
      <div className="score">
        Current Score: {currentScore} Top Score: {topScore}
      </div>
      <div className="gameboard">
        {pokemonIdArray.map((num) => {
          return (
            <PokemonCard id={num} onClick={handleClick} key={Math.random()} />
          );
        })}
      </div>
    </div>
  );
};

export default Gameboard;
