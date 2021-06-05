import Phaser from "phaser";

export default class Win extends Phaser.Scene {
  constructor() {
    super("Win");
  }

  preload() {
    // this.load.audio("audioSound", "assets/Demon.mp3");
    this.load.image("ship", "assets/fighter.png");
    this.load.image("background1", "assets/Moon.jpeg");
  }

  create() {
    let { width, height } = this.sys.game.canvas;
    this.add.image(400, 300, "background1").setOrigin(0);

    // this.add.image(0, 0, 0, 0, "background1").setOrigin(0);

    this.add
      .text(
        width * 0.5,
        height * 0.25,
        "Congratulations, you reached the MOON!",
        {
          fontSize: 36,
        }
      )
      .setOrigin(0.5);
    console.log(width);
  }
}
