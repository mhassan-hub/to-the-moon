import React from "react";
import Phaser from "phaser";
import Main from "./scenes/Main";
import Win from "./scenes/Win";
import Lose from "./scenes/Lose";

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
      scene: [Main, Win, Lose],
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
