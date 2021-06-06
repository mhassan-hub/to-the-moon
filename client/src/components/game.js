import React from "react";
import Phaser from "phaser";
import Menu from "./scenes/Menu";
import Win from "./scenes/Win";
import Lose from "./scenes/Lose";
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
      backgroundColor: "#000000",
      pixelArt: true,
      physics: {
        default: "arcade",
      },
      scene: [Menu, Win, Lose],
    };
    this.game = new Phaser.Game(config);
  }

  render() {
    return (
      <div className="display">
        <div id="game"> </div>
      </div>
    );
  }
}
