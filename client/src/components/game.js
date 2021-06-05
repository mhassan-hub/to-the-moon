import React from "react";
import Phaser from "phaser";
import Menu from "./scenes/Menu";
import Win from "./scenes/Win";
import { render } from "@testing-library/react";

export default class Game extends React.Component {
  componentDidMount() {
    const config = {
      scale: {
        parent: document.getElementById("game"),
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      type: Phaser.AUTO,
      backgroundColor: "#616161",
      pixelArt: true,
      physics: {
        default: "arcade",
      },
      scene: [Menu, Win],
    };
    this.game = new Phaser.Game(config);
  }

  render() {
    return <div id="game" />;
  }
}
