import { Link, useHistory } from "react-router-dom";
import Button from "./Button";
import "../App.css";
import { enemyShoot } from "./scenes/helpers/shoot";
import { useState } from 'react'
import axios from 'axios'

export default function Login() {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    userId: undefined
  })

  const history = useHistory()

  const loginRequest = () => {
    
    axios.post("http://localhost:3000/login", {user: {username: state.username, password: state.password}})
    .then(response => {
      
      if (response.data.logged_in) {
        
        sessionStorage.setItem('userID', response.data.user.id)
        history.push("/")
      }
      
    })
}

  const handleChange = (event) => {
    const {name, value} = event.target
    setState((prev) => ({...prev, [name]: value}))
  };

  return (
    <div className="Login">
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
        
    <Button onClick={() => loginRequest()}> Log In </Button>

      <Link to="/">
        <Button>Home</Button>
      </Link>
    </div>
  );
}

      
