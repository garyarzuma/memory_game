import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const Gameboard = (props) => {
  const [pokemonIdArray, setPokemonIdArray] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [pokemonClickedArray, setPokemonClickedArray] = useState([]);
  const pokemonMax = 149;

  useEffect(() => {
    //random array of 8 integers between 1 and 1+pokemonMax
    updateCards();
  }, []);

  function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(pokemonMax) + 1);
  }

  function updateCards() {
    let array = [];
    let randNum = getRandomInt(pokemonMax);
    for (let i = 0; i < 6; i++) {
      while (array.indexOf(randNum) !== -1) {
        randNum = getRandomInt(pokemonMax);
      }
      array.push(randNum);
    }
    setPokemonIdArray(array);
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
    }
  }

  function arrayHasDuplicates(id) {
    return pokemonClickedArray.indexOf(id) === -1 ? false : true;
  }

  return (
    <div className="gameboard-score-container">
      <div className="score">
        <span className="current-score">Current Score: {currentScore}</span>
        <span className="top-score">Top Score: {topScore}</span>
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
