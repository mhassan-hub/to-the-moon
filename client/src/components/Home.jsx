import { Link, Route, useHistory, withRouter  } from "react-router-dom";
import React from "react";
import { useState, useEffect} from "react";
import "../App.css";
import socketIOClient, { io } from "socket.io-client";
import Game from "./Game"
import Button from '@material-ui/core/Button';
import "./Home.css"
import NavBar from "./NavBar";
const ENDPOINT = "http://127.0.0.1:8080";



function Home ({readyCheck, startGame, socket}) {

  const [response, setResponse] = useState("");
  const [url, setUrl] = useState("");
  const [ready, setReady] = useState(false);


  const killSession = () => {
    sessionStorage.clear()
    window.location.reload() 
  }

  
  useEffect(() => {
  socket.on("ready", (arg) => {
    console.log(arg)
  })
  socket.on("start game", () => {
    setReady(true)
  })
  socket.on("redirect", () =>{
    setReady(true)
  })
  }, [])

  

  return (
    
    <div>
    <NavBar/>
    <header className="App-header">
              
    <img className="img-fluid" src="https://i.imgur.com/P6XZIMs.png" alt="homescreen"/>
    <div class='overlay'>
      <div class= "header-text">
        <h1 color="secondary">To The Moon</h1>
         
         <Button onClick={() => readyCheck()}>Ready</Button>
         {ready && <Button onClick={() => startGame()}
          href="/game"
          className="createGameButton" variant="contained" color="secondary">Create Game</Button>}
      </div>
    </div>
    </header>
    </div>



 
  );
}

export default withRouter(Home)