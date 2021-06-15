import Link from "@material-ui/core/Link";
import React from "react";
import { useState } from "react";
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
          className="createGameButton" variant="outlined" color="secondary">Create Game</Button>
      </div>
    </div>
       {/* {sessionStorage.length > 0 &&
       `Welcome ${sessionStorage.userID}`}
      <div className="buttonContainer">
        <span className= "button-bar">
         
          {sessionStorage.length === 0 &&
          <Link to="/login">
            <Button variant="contained" color="primary">Log in</Button>
          </Link>}
          <Link to="/register">
            <Button variant="contained" color="primary">Register</Button>            
          </Link>
           {sessionStorage.length > 0 &&         
            <Button onClick={killSession}>Log Out</Button>}
          <Link to="/about">
            <Button variant="contained" color="primary">About</Button>
          </Link>
          <Link to="/leaderboard">
            <Button variant="contained" color="primary">Leaderboard</Button>
          </Link>
        </span>
      </div> */}
    </header>
    </div>
  );
}
