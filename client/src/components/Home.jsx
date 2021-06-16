import React from "react";
import Button from '@material-ui/core/Button';
import "./Home.css"
import NavBar from "./NavBar";

export default function Home() {

  const killSession = () => {
    sessionStorage.clear()
    window.location.reload() 
  }

  return (
  <div>
    <NavBar/>
    <header className="App-header">
    <img className="img-fluid" src="https://i.imgur.com/P6XZIMs.png" alt="homescreen"/>
    <div class='overlay'>
      <div class= "header-text">
        <h1 color="secondary">To The Moon</h1>
          <Button 
          href="/game"
          className="createGameButton" variant="contained" color="secondary">Create Game</Button>
      </div>
    </div>
    </header>
    </div>
  );
}
