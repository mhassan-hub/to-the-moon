import { Link, useHistory } from "react-router-dom";
import Button from "./Button";
import "../App.css";
import { enemyShoot } from "./scenes/helpers/shoot";
import { useState } from 'react'
import axios from 'axios'


export default function Register(props) {

  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  })
  console.log()

  // const [value , setValue] = useState("")
  
  const history = useHistory()
  const register = () => {
    axios.post("http://localhost:3000/users", {user: {username: state.username, email: state.email, password: state.password, password_confirmation: state.passwordConfirmation }})
    .then(response => {
      history.push('/home')
      console.log("email", state.email)
    })
    .catch(error => console.log('api errors:', error))
  }

  const handleChange = (event) => {
    const {name, value} = event.target
    setState((prev) => ({...prev, [name]: value}))
    // setState({value: event.target.value})
  };

  return (

    
    <div className="Register">
    <input 
    placeholder="username"
    type="text"
    name="username"
    value={state.username}
    onChange={handleChange}
    />
      <input 
    placeholder="email"
    type="text"
    name="email"
    value={state.email}
    onChange={handleChange}
    />
      <input 
    placeholder="password"
    type="password"
    name="password"
    value={state.password}
    onChange={handleChange}
    />
     <input 
    placeholder="password_confirmation"
    type="password"
    name="passwordConfirmation"
    value={state.passwordConfirmation}
    onChange={handleChange}
    />
    <button placeholder="submit" type="submit" onClick={() => register()}>
        Register
        <Button />
      </button>     
  </div>
  );
}
