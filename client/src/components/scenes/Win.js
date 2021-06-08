import Phaser from "phaser";
import Button from "./helpers/button";

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
    this.load.image("restartButton", "assets/button.png");
    this.load.image("burger", "assets/SpaceBurger.png");
  }

  create() {
    let { width, height } = this.sys.game.canvas;
    this.add.image(0, 0, "background1").setOrigin(0).setScale(3.5);
    this.burger = this.add.image(800, 200, "burger").setScale(0.2);
    // restart button
    const restartButton = new Button(
      width * 0.75,
      height / 2,
      "Restart Game",
      this,
      () => {
        this.scene.start("Main");
        this.scene.stop("Win");
      }
    );

    // back to home button
    const homeButton = new Button(
      width * 0.25,
      height / 2,
      "Back to home",
      this,
      () => {
        this.scene.stop("Win");
        window.location.replace("http://localhost:3000/");
      }
    );
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
