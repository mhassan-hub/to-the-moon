import { Link } from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Button from "./Button";
import "../App.css";

export default function Home() {
  const [state, setState] = useState({
  username: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  isLoggedIn: false
})

const loginRequest = () => {
    // e.preventDefault();
    axios.post("http://localhost:3000/login", {user: {username: state.username, password: state.password}})
    .then(response => {

      if (response.data.logged_in) {
        setState(prev => ({...prev, isLoggedIn: true}))
      }
      console.log(response.data);
    })
    .catch(error => console.log('api errors:', error))
}

      
  console.log(state.isLoggedIn);

  const handleChange = (event) => {
    const {name, value} = event.target
    setState((prev) => ({...prev, [name]: value}))
  };

  return (
    <header className="App-header">
      <img
        src="https://www.clipartmax.com/png/middle/6-63877_ship-anchor-free-a-cartoon-moon-rocket-cartoon-rocket-ship.png"
        className="App-logo"
        alt="rocketship"
      />
      <h1>To The Moon!</h1>
      <h3>Leaderboard</h3>
     {!state.isLoggedIn &&
      <div>
        <input 
        placeholder="username"
        type="text"
        name="username"
        value={state.username}
        onChange={handleChange}
        />
          <input 
        placeholder="password"
        type="password"
        name="password"
        value={state.password}
        onChange={handleChange}
        />
        <button placeholder="submit" type="submit" onClick={() => loginRequest()}>
            Log In
            <Button state={state} setState={setState}
            username={state.username}/>
          </button>     
      </div>
}
      <div className="buttonContainer">
        <span>
          <Link to="/game">
            <Button />Create Game
          </Link>
          <Link to="/register">
            <Button state={state} setState={setState}
            username= {state.username}/>Register
          </Link>
          <Link to="/about">
            <Button />About Us
          </Link>
        </span>
      </div>
    </header>
  );
}
