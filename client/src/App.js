import { Router, Redirect, Route, Switch, useHistory, withRouter} from "react-router-dom";
import React from "react";
import Game from "./components/Game";
import Login from "./components/Login"
import Home from "./components/Home";
import Register from "./components/Register";
import About from "./components/About";
import Leaderboard from "./components/Leaderboard";
import {useState, useEffect} from "react";
import socketIOClient, { io } from "socket.io-client";
import Button from "./components/Button";
import {createBrowserHistory} from "history";
import "./App.css";
const ENDPOINT = "http://127.0.0.1:8080";



function App() {
  const [gameID, setGameID] = useState(null);
  const [socket, setSocket] = useState(socketIOClient(ENDPOINT));
  const [ready, setReady] = useState(false);
  
  const history = useHistory()

useEffect(()=> {
  

  console.log(socket)
  setSocket(socket)
   socket.on('connect', () => {
    console.log("im connected");
     
  });
  socket.on("ready", (arg) => {
    console.log(arg)
  })
  socket.on("start game", () => {
    setReady(true)
  })
  socket.on("launch", () => {
    
    
    history.push("/game")
    console.log(socket)
    
  })

  // socket.on("launchGame2", () => {
  //   console.log(history);
  //   history.push("/game")
  // })
    return () => {
      socket.disconnect()
    }
  
}, [])
 
 const historyPush = () => {
  window.location.replace("/game");
 }

  const readyCheck = () => {
    socket.emit("ready", () => {
      console.log("player is ready")
    })
  }

  const startGame = () => {
    socket.emit("initiallaunch", history)
    // console.log(window.location)
  }
  // const startGameP2 = () => {
  //   socket.emit("launchGame2", () => {
  //    history.push("/game")
  //   })
  // }


  const randomLink = () => {
    let r = Math.random().toString(36).substring(7);
    return r;
  }
  const generatedLink = randomLink()
  console.log(window.location.pathname);
  return (
 
    <div>

       
          <Switch>

          <Route exact path="/leaderboard">
            <Leaderboard />
          </Route> 

          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route> 

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/game">
            <Game setGameID={setGameID} generatedLink={generatedLink} gameID={gameID} socket={socket}/>
          </Route>
       
          <Route exact path="/">
            <Home  readyCheck={readyCheck} ready={ready} startGame={startGame}/>
          </Route>
       </Switch >
          
    </div>
  );
}

export default withRouter(App);

