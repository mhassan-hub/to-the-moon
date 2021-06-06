import Phaser from "phaser";

export default class Win extends Phaser.Scene {
  constructor() {
    super("Win");
  }

  init(data) {
    this.lives = data.lives;
    this.score = data.score;
  }

  preload() {
    // this.load.audio("audioSound", "assets/Demon.mp3");
    this.load.image("ship", "assets/fighter.png");
    this.load.image("background1", "assets/Moon.jpeg");
  }

  create() {
    let { width, height } = this.sys.game.canvas;
    this.add.image(0, 0, "background1").setOrigin(0).setScale(3.5);

    // this.add.image(0, 0, 0, 0, "background1").setOrigin(0);

    this.add
      .text(
        width * 0.5,
        height * 0.1,
        `Congratulations, you reached the MOON! with a score of ${this.score}, and ${this.lives} lives`,
        {
          fontSize: 36,
        }
      )
      .setOrigin(0.5);
  }
}