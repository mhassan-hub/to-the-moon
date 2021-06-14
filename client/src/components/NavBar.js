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

  return (
    <AppBar className="navbar" color="primary" position="sticky">
      <Toolbar>
        <div className="div-navbar-buttons">
          <div className="div-buttons-left">
            <h6 className='title'>
              To The Moon
            </h6>
          </div>
          <div className="div-buttons-right">
            {sessionStorage.length === 0 && (
              <div>
                <Button className="nav-button" href="/">
                <HomeIcon />
                </Button>
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
