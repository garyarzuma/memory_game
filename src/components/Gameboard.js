import React, { useState } from "react";
import apiHandler from "./apiHandler";

const WorkExp = (props) => {
  apiHandler.getPokemon(56).then((x) => console.log(x));
  apiHandler.getPokemon(98).then((x) => console.log(x));
  return <div className="gameboard"></div>;
};

export default WorkExp;
