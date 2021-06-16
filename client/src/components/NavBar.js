import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import "./NavBar.css";

export default function NavBar() {
  const killSession = () => {
    sessionStorage.clear();
    window.location.reload();
  };
  let userName = "";
  if (sessionStorage.length > 0) {
    userName = sessionStorage.getItem("username").toUpperCase();
  }
  return (
    <AppBar className="navbar" color="secondary" position="sticky">
      <Toolbar>
        <div className="div-navbar-buttons">
          <div className="div-buttons-left">
            <h6 className="title">To The Moon</h6>
          </div>
          <div className="div-buttons-right">
            {userName && `WELCOME ${userName}`}
            <Button className="nav-button" href="/">
              <HomeIcon />
            </Button>
            {!userName && (
              <div>
                <Button className="nav-button" href="/login" variant="inherit">
                  Log in
                </Button>
                <Button
                  className="nav-button"
                  href="/register"
                  variant="inherit"
                >
                  Register
                </Button>
              </div>
            )}
            {sessionStorage.length > 0 && (
              <Button className="nav-button" onClick={killSession}>
                Log Out
              </Button>
            )}
            <Button
              className="nav-button"
              href="/rules"
              variant="inherit"
              color="secondary"
            >
              Rules
            </Button>
            <Button
              className="nav-button"
              href="/about"
              variant="inherit"
              color="secondary"
            >
              About
            </Button>
            <Button
              className="nav-button"
              href="/leaderboard"
              variant="inherit"
              color="secondary"
            >
              Leaderboard
            </Button>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
