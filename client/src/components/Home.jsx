import { Link, Route, useHistory, withRouter  } from "react-router-dom";
import React from "react";
import { useState, useEffect} from "react";
import Button from "./Button";
import "../App.css";
import socketIOClient, { io } from "socket.io-client";
import Game from "./Game"
const ENDPOINT = "http://127.0.0.1:8080";

function Home ({readyCheck, ready, startGame}) {

  const [response, setResponse] = useState("");
  const [url, setUrl] = useState("");


  const killSession = () => {
    sessionStorage.clear()
    window.location.reload() 
  }

  
  // function joinGame(gameID)  {
  //    socket.emit("join", gameID)
  // } 

  

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
          <Link to={`/game`}>
            {/* <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} /> */}
            <Button >Join Game</Button>
          </Link>
          {/* {ready && <Link to={`/game`}> */}
           {ready && <Button onClick={() => startGame()}>Create Game</Button>}
          {/* </Link>} */}
          <Button onClick={() => readyCheck()}>Ready</Button>         
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
          <Link to="/leaderboard">
            <Button>Leaderboard</Button>
          </Link>
        </span>
      </div>
    </header>
  );
}

export default withRouter(Home)