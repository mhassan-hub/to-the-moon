import Game from "./components/game";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "./components/Button";

function App() {
  const [state, setState] = useState(false);

  // useEffect(() => {
  //   axios.get("http://localhost:3000/users").then((result) => {
  //     console.log(result);
  //   });
  // }, []);

  function startGame() {
    return setState(true);
  }
  return (
    <div className="App">
      {state ? (
        <Game />
      ) : (
        <header className="App-header">
          {/* <img
          src="https://i.pinimg.com/originals/f6/20/a1/f620a179ca1acfd15a0754701677fb58.jpg"
          className="background"
          alt="background"
        ></img> */}
          <img
            src="https://www.clipartmax.com/png/middle/6-63877_ship-anchor-free-a-cartoon-moon-rocket-cartoon-rocket-ship.png"
            className="App-logo"
            alt="rocketship"
          />
          <h1>To The Moon!</h1>
          <h3>Description</h3>

          <div className="buttonContainer">
            <Button
              onClick={() => {
                console.log("About us");
              }}
            >
              About us
            </Button>
            <Button onClick={() => startGame()}>Create Game</Button>
            {/* {state ? <Game /> : console.log(false)} */}
          </div>
        </header>
      )}
    </div>
  );
}

export default App;
