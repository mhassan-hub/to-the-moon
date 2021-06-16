import Phaser from "phaser";
import Button from "./helpers/button";

export default class Pause extends Phaser.Scene {
  constructor() {
    super("Pause");
  }

  init(data) {
    this.music = data.music;
  }

  preload() {
    this.load.image("background", "assets/starfield.png");
  }

  create() {
    let { width, height } = this.sys.game.canvas;
    this.add.image(0, 0, "background").setOrigin(0.5);
    this.burger = this.add.image(800, 200, "burger").setScale(0.2);
    // restart button
    new Button(width * 0.5, height * 0.5, 2.5, "Resume Game", this, () => {
      this.scene.resume("Main");
      this.music.resume();
      this.scene.stop("Pause");
    });
    this.add
      .text(width * 0.5, height * 0.1, `Game is paused`, {
        fontSize: 36,
      })
      .setOrigin(0.5);
  }
}
