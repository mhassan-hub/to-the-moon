import Phaser from "phaser";
import Button from "./helpers/button";

export default class Win extends Phaser.Scene {
  constructor(props) {
    super("Lose");
    this.props = props
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

    // Adding a restart button
    const restartButton = new Button(
      width * 0.75,
      height / 2,
      2.5,
      "Restart Game",
      this,
      () => {
        this.scene.start("Main");
        this.scene.stop("Win");
      }
    );

    const homeButton = new Button(
      width * 0.25,
      height / 2,
      2.5,
      "Back to home",
      this,
      () => {
        this.scene.stop("Win");
        this.props.socket.emit("redirect", "redirect")
        window.location.replace("/");
        
      }
    );

    this.add
      .text(
        width * 0.5,
        height * 0.1,
        `Hahaha you died! with a score of ${this.score}`,
        {
          fontSize: 36,
        }
      )
      .setOrigin(0.5);
  }
}
