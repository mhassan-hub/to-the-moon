import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HomeIcon } from "@material-ui/icons/Home";
import "./NavBar.css";

export default function NavBar() {
  const killSession = () => {
    sessionStorage.clear();
    window.location.reload();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <div className="div-navbar-buttons">
          <div className="div-buttons-left">
            <Typography href="/" variant="h6">
              To The Moon
            </Typography>
          </div>
          <div className="div-buttons-right">
            {sessionStorage.length === 0 && (
              <div>
                <Button className="nav-button" href="/"></Button>
                <HomeIcon />
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
