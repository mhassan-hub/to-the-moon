import Phaser from "phaser";
import Button from "./helpers/button";
import axios from "axios"
import { useHistory } from "react-router-dom"

export default class Win extends Phaser.Scene {
  constructor(props) {
    super("Win");
    this.props = props
  }

  init(data) {
    this.lives = data.lives;   
    this.score = data.score;

  }
  
  preload() {
    // this.load.audio("audioSound", "assets/Demon.mp3");
    this.load.image("ship", "assets/fighter.png");
    this.load.image("moon", "assets/finishMoon.png");
    this.load.image("restartButton", "assets/button.png");
    this.load.image("background", "assets/starfield.png");
    this.load.image("congrats", "assets/congrats8bit.png")
    this.load.audio("victory", "assets/Victory!.wav")
    
  }

  submitScore() {
    
    axios.post("http://localhost:3000/submit_score", {id: sessionStorage.getItem('userID'), high_score: this.score })
    .then(response => {
      
      if (response.data.status === 200 ) {
        
      }

      else {
        console.log(response.data.errors)
      }
      
    })
    .catch(error => console.log('api errors:', error))
  }

  create() {
    this.music = this.sound.add("victory", {volume: 0.1, });
    this.music.play();
    this.submitScore()
    let { width, height } = this.sys.game.canvas;
    this.add.image(400, 300, "background");
    this.background = this.add
    .tileSprite(0, 0, 0, 0, "background")
    .setOrigin(0);
    this.add.image(250, 15, "moon").setOrigin(0, 0).setScale(0.7);
    this.add.image(450, 280,"congrats").setOrigin(0.35, 0.55).setScale(0.8);
    // restart button
    new Button(width * 0.75, height * 0.85, 2.5, "Restart Game", this, () => {
      this.scene.start("Main");
      this.scene.stop("Win");
    });

    // back to home button
    new Button(width * 0.25, height *0.85, 2.5, "Back to home", this, () => {
      this.scene.stop("Win");
      this.props.socket.emit("redirect", "redirect")
      window.location.replace("/");
      
    
    });
    this.add
      .text(
        width * 0.50,
        height * 0.75,
        `FINAL SCORE: ${this.score}`,
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

