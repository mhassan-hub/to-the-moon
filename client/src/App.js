import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Game from "./components/Game";
import Login from "./components/Login"
import Home from "./components/Home";
import Register from "./components/Register"
import About from "./components/About";
import "./App.css";

function App() {



  // handleLogin = (data) => {
  //   this.setState({
  //     isLoggedIn: true,
  //     user: data.user
  //   })
  // }
  // handleLogout = () => {
  //   this.setState({
  //   isLoggedIn: false,
  //   user: {}
  //   })
  // }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/about">
            <About />
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
