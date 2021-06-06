import Game from "./game";
import "../App.css";
import axios from "axios";
import Button from "./Button";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

export default function Home() {
  return (
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
        <span>
          <Link to="/game">
            <Button>Create Game</Button>
          </Link>
          <Link to="/about">
            <Button>About Us</Button>
          </Link>
          <Link to="/home">
            <Button>Home</Button>
          </Link>
        </span>
      </div>
    </header>
  );
}
