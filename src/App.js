import "./styles/App.css";
import Gameboard from "./components/Gameboard";

function App() {
  return (
    <div className="App">
      <h1>
        <img
          src="/images/Pokemon_logo.png"
          alt="Pokemon!"
          className="pokemon-logo"
        ></img>
      </h1>
      <h3>
        Get points by clicking on an image, but don't click on any more than
        once!
      </h3>

      <Gameboard />
    </div>
  );
}

export default App;
