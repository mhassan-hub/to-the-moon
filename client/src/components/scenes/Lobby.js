import Phaser from "phaser";
import Button from "./helpers/button";

export default class Lobby extends Phaser.Scene {
  constructor() {
    super("Lobby");
  }

  // init(data) {}

  preload() {
    // this.load.audio("audioSound", "assets/Demon.mp3");

    this.load.image("background", "assets/starfield.png");
    this.load.image("ship", "assets/fighter.png");
  }

  create() {
    let { width, height } = this.sys.game.canvas;
    this.add.image(0, 0, "background");

    const homeButton = new Button(
      width * 0.25,
      height / 2,
      2.5,
      "Readys",
      this,
      () => {
        this.scene.start("Main");
        this.scene.stop("Lobby");
      }
    );

    this.add
      .text(width * 0.5, height * 0.1, `Pick your ship and ready up!`, {
        fontSize: 36,
      })
      .setOrigin(0.5);
  }
}
