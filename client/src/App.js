import Game from "./components/game";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "./components/Button";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

function App() {
  // useEffect(() => {
  //   axios.get("http://localhost:3000/users").then((result) => {
  //     console.log(result);
  //   });
  // }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/game">
            <Game />
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
