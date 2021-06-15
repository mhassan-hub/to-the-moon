import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import './Register.css'
import NavBar from "./NavBar";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        To-The-Moon
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register(props) {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    error: "",
  });

  const history = useHistory();

  const register = () => {
    axios
      .post("http://localhost:3000/users", {
        user: {
          username: state.username,
          email: state.email,
          password: state.password,
          password_confirmation: state.passwordConfirmation,
        },
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.status === 500) {
          setState({
            error: true,
            username: "",
            email: "",
            password: "",
            password_confirmation: "",
          });
        } else {
          sessionStorage.setItem("userID", state.username);
          history.push("/home");
        }
      })
      .catch((error) => console.log("api errors:", error));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <NavBar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <div className="icons">
            <AccountCircleOutlinedIcon color="secondary" fontSize="large" />
          </div>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              value={state.username}
              onChange={handleChange}
              autoFocus
              color="secondary"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              value={state.email}
              onChange={handleChange}
              autoFocus
              color="secondary"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={state.password}
              onChange={handleChange}
              color="secondary"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="passwordConfirmation"
              label="Password Confirmation"
              type="password"
              id="passwordConfirmation"
              value={state.passwordConfirmation}
              onChange={handleChange}
              color="secondary"
            />

            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => register()}
            >
              Register
            </Button>
            <Grid container>
              <Grid item>
                <Link color="secondary" href="/login" variant="body2">
                  {"Already have an account? Log in!"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
