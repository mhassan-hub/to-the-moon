import { Route, Switch, useHistory, withRouter} from "react-router-dom";
import React from "react";
import Game from "./components/Game";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import About from "./components/About";
import {useState, useEffect} from "react";
import socketIOClient, { io } from "socket.io-client";
import Button from "./components/Button";
import {createBrowserHistory} from "history";
import "./App.css";
import Rules from "./components/Rules";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Leaderboard from "./components/Leaderboard";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#FFBF00",
    },
    primary: {
      light: "#8561c5",
      main: "#482880",
      dark: "#482880",
      contrastText: "#482880",
    },
    secondary: {
      light: "#ffcf33",
      main: "#ffc400",
      dark: "#b28900",
      contrastText: "#482880",
    },
    text: {
      primary: "#ffc400",
      secondary: "#ffc400",
      disabled: "#ffc400",
    },
  },
  props: {
    StyledTableCell: {
      varient: "contained",
      color: "primary",
    },
  },
});
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
 
  socket.on("launch", () => {
    
    
    history.push("/game")
    console.log(socket)
    
  })

  
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
   
  }
 


  const randomLink = () => {
    let r = Math.random().toString(36).substring(7);
    return r;
  }
  const generatedLink = randomLink()
  console.log(window.location.pathname);
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
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
          <Route path="/rules">
              <Rules />
          </Route>
          <Route exact path="/">
            <Home  readyCheck={readyCheck} ready={ready} setReady={setReady} startGame={startGame} socket={socket}/>
          </Route>
       </Switch >
         
    </div>
    </ThemeProvider>
  );
}

export default withRouter(App);

