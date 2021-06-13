import Phaser from "phaser";
import Button from "./helpers/button";


export default class Win extends Phaser.Scene {
  constructor() {
    super("Lose");
  }

  init(data) {
    this.lives = data.lives;   
    this.score = data.score;
    this.player = data.player;
  }
  
  preload() {
    // this.load.audio("audioSound", "assets/Demon.mp3");
    this.load.image("ship", "assets/fighter.png");
    this.load.image("moon", "assets/finishMoon.png");
    this.load.image("restartButton", "assets/button.png");
    this.load.image("background", "assets/starfield.png");
    this.load.image("congrats", "assets/congrats8bit.png")
    this.load.audio("defeat", "assets/GameOver.mp3")
    
  }

  create() {
    this.player = this.physics.add.sprite(
      width/2,
      height,
      `${this.playerChoice}`
    );
    // this.player.setVelocityX
    this.music = this.sound.add("defeat", {volume: 0.1, });
    this.music.play()
    let { width, height } = this.sys.game.canvas;
    this.add.image(400, 300, "background");
    this.background = this.add
    .tileSprite(0, 0, 0, 0, "background")
    .setOrigin(0);
    // restart button
    new Button(width * 0.75, height * 0.8, 2.5, "Restart Game", this, () => {
      this.scene.start("Main");
      this.scene.stop("Lose");
    });

    // back to home button
    new Button(width * 0.25, height *0.8, 2.5, "Back to home", this, () => {
      this.scene.stop("Lose");
      window.location.replace("http://localhost:3002/");
    });
    this.add
      .text(
        width * 0.49,
        height * 0.65,
        `GAME OVER`,
        {
          color: '#ffe100' ,
          font: "bold 45px Courier",

        }
      )
      .setOrigin(0.5);

    }
    update() {
    this.background.tilePositionY -= 3;
  }
}

