import { Link, useHistory } from "react-router-dom";
import Button from "./Button";
import "../App.css";
import { useState } from 'react'
import axios from 'axios'


export default function Register(props) {

  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    error: ""
  })
   
  const history = useHistory()
  const register = () => {
    axios.post("http://localhost:3000/users", {user: {username: state.username, email: state.email, password: state.password, password_confirmation: state.passwordConfirmation }})
    .then(response => {
      
      console.log(response.data)
      if(response.data.status === 500) {
        setState({ error: true, username: "", email: "", password: "", password_confirmation: ""})
      } else {
      sessionStorage.setItem('userID', response.data.user.id)
      sessionStorage.setItem('username', response.data.user.username)
      history.push('/')
      }    
    })
    .catch(error => console.log('api errors:', error))
  }

  const handleChange = (event) => {
    const {name, value} = event.target
    setState((prev) => ({...prev, [name]: value}))
    
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
    <Button onClick={() => register()}>Register</Button>
  
    <Link to="/">
      <Button>Home</Button>
    </Link>    
    {state.error && <span>Input Error</span>} 
  </div>
  );
}
