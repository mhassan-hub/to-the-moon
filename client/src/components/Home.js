import { Link } from "react-router-dom";
import React from "react";
import Button from "./Button";
import "../App.css";

export default function Home() {

  const killSession = () => {
    sessionStorage.clear()
    window.location.reload() 
  }

  return (
    <header className="App-header">
      <img
        src="https://www.clipartmax.com/png/middle/6-63877_ship-anchor-free-a-cartoon-moon-rocket-cartoon-rocket-ship.png"
        className="App-logo"
        alt="rocketship"
      />
      <h1>To The Moon!</h1>
      <h3>Leaderboard</h3>
       {sessionStorage.length > 0 &&
       `Welcome ${sessionStorage.userID}`}
      <div className="buttonContainer">
        <span>
          <Link to="/game">
            <Button>Create Game</Button>
          </Link>
          {sessionStorage.length === 0 &&
          <Link to="/login">
            <Button>Log in</Button>
          </Link>}
          <Link to="/register">
            <Button>Register</Button>            
          </Link>
           {sessionStorage.length > 0 &&         
            <Button onClick={killSession}>Log Out</Button>}
          <Link to="/about">
            <Button>About Us</Button>
          </Link>
        </span>
      </div>
    </header>
  );
}
