import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import Button from "./components/Button";

function App() {
  useEffect(() => {
    axios.get("http://localhost:3000/users").then((result) => {console.log(result) 
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://i.pinimg.com/originals/f6/20/a1/f620a179ca1acfd15a0754701677fb58.jpg" className="background" alt="background"></img>
        <img src="https://www.clipartmax.com/png/middle/6-63877_ship-anchor-free-a-cartoon-moon-rocket-cartoon-rocket-ship.png" className="App-logo" alt="rocketship"/>
        <h1>
          To The Moon!
        </h1>
        <h3>Description</h3>

      <div className="buttonContainer">
      <Button onClick={() => {
        console.log("start")
      }}>
        About us</Button>
      <Button>Create Game</Button>
      </div>
      </header>
    </div>
  );
}

export default App;
