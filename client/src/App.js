import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Game from "./components/Game";
import Login from "./components/Login"
import Home from "./components/Home";
import Register from "./components/Register"
import About from "./components/About";

import Leaderboard from "./components/Leaderboard"
import Button from '@material-ui/core/Button';

function App() {

  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <Router>
        <Switch>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/leaderboard">
            <Leaderboard />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
