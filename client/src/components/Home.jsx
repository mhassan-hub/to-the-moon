import { Link } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
// import "../App.css";
import "./Home.css"
import NavBar from "./NavBar";
// import socketIOClient, { io } from "socket.io-client";
// const ENDPOINT = "http://127.0.0.1:8080";

export default function Home() {

  const [response, setResponse] = useState("");

  const killSession = () => {
    sessionStorage.clear()
    window.location.reload() 
  }

  
  // useEffect(() => {
  //   const socket = socketIOClient(ENDPOINT);
  //   let data = "Grigor"

  //   socket.emit('hello', "hello is sent")
  //   return () => socket.disconnect();
  // }, []);



  return (
  <div>
    <NavBar/>
    <header className="App-header">
    <img className="img-fluid" src="https://i.imgur.com/P6XZIMs.png"/>
    <div class='overlay'>
      <div class= "header-text">
    <h1>To The Moon</h1>

      </div>
    </div>
       {/* {sessionStorage.length > 0 &&
       `Welcome ${sessionStorage.userID}`}
      <div className="buttonContainer">
        <span className= "button-bar">
          <Link to="/game">
            <Button variant="contained" color="primary">Create Game</Button>
          </Link>
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
