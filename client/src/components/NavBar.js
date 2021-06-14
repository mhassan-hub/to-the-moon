import react from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from "react-router-dom";

export default function NavBar() { 
  
  return(<AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className="Home" color="inherit" aria-label="home">
    </IconButton>
    <Typography variant="h6">
      To The Moon
    </Typography>
    <Button color="inherit">Login</Button>
    <Link to="/">
        <Button color="inherit">Home</Button>
      </Link>
  </Toolbar>
</AppBar>)
}