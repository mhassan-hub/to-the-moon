import { Link } from "react-router-dom";
import Button from "./Button";
import "../App.css";

export default function Home() {
  return (
    <header className="App-header">
      <img
        src="https://www.clipartmax.com/png/middle/6-63877_ship-anchor-free-a-cartoon-moon-rocket-cartoon-rocket-ship.png"
        className="App-logo"
        alt="rocketship"
      />
      <h1>To The Moon!</h1>
      <h3>Leaderboard</h3>

      <div className="buttonContainer">
        <span>
          <Link to="/game">
            <Button>Create Game</Button>
          </Link>
          <Link to="/about">
            <Button>About Us</Button>
          </Link>
        </span>
      </div>
    </header>
  );
}
