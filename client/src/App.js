import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Game from "./components/Game";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import About from "./components/About";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Leaderboard from "./components/Leaderboard";
import Button from "@material-ui/core/Button";

const theme = createMuiTheme({

  palette: {
    background: {
      default: "#FFBF00",
    },
    primary: {
      light: "#8561c5",
      main: "#482880",
      dark: "#482880",
      contrastText: "#482880",
    },
    secondary: {
      light: "#ffcf33",
      main: "#ffc400",
      dark: "#b28900",
      contrastText: "#482880",
    },
    text: {
      primary: "#ffc400",
      secondary: "#ffc400",
      disabled:  "#ffc400",
    }
  },
  props: {
    StyledTableCell: {
      varient: "contained",
      color: "primary",
    },
  },
});

function App() {
  return (
    <ThemeProvider  theme={theme}>
      <CssBaseline />
      <div className="App">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
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
    </ThemeProvider>
  );
}

export default App;
