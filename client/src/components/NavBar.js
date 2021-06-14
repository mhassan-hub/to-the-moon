import react from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import { useState, useEffect } from "react";

export default function NavBar() { 

  const [response, setResponse] = useState("");

  const killSession = () => {
    sessionStorage.clear()
    window.location.reload() 
  }
  
  return(<AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className="Home" color="inherit" aria-label="home">
    </IconButton>
    <Typography href="/" variant="h6">To The Moon</Typography>
    {sessionStorage.length === 0 &&
    <div>
    <Link href="/login">
    <Button variant="inherit" color="secondary">Log in</Button>
    </Link>
    <Link href="/register">
    <Button variant="inherit" color="secondary">Register</Button>            
    </Link>
    </div>}
    {sessionStorage.length > 0 &&         
    <Button onClick={killSession}>Log Out</Button>}
    <Link href="/about">
    <Button variant="inherit" color="secondary">About</Button>
    </Link>
    <Link href="/leaderboard">
    <Button variant="inherit" color="secondary">Leaderboard</Button>
    </Link>
  </Toolbar>
</AppBar>)
}