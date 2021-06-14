import Phaser from "phaser";
import Button from "./helpers/button";

export default class Pause extends Phaser.Scene {
  constructor() {
    super("Pause");
  }

  preload() {
    this.load.image("background", "assets/starfield.png");
  }

  create() {
    let { width, height } = this.sys.game.canvas;
    this.add.image(0, 0, "background").setOrigin(0.5);
    this.burger = this.add.image(width / 2, height / 2, "burger").setScale(1);
    // restart button
    new Button(width * 0.5, height * 0.85, 2.5, "Resume Game", this, () => {
      this.scene.resume("Main");
      this.scene.stop("Pause");
    });
    this.add
      .text(width * 0.5, height * 0.1, `Game Paused`, {
        fontSize: 36,
      })
      .setOrigin(0.5);
  }
}
