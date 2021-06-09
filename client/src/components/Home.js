import { Link } from "react-router-dom";
import React, {Component, useEffect, useState} from "react";
import axios from "axios";
import Button from "./Button";
import forceUpdate from 'react'
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
          <Link to="/login">
            <Button>Log in</Button>
          </Link>
          <Link to="/register">
            <Button>Register</Button>            
          </Link>          
            <Button onClick={killSession}>Log Out</Button>
          <Link to="/about">
            <Button>About Us</Button>
          </Link>
        </span>
      </div>
    </header>
  );
}
