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
    this.load.image("background1", "assets/Moon.jpeg");
    this.load.image("restartButton", "assets/button.png");
  }

  submitScore() {
    
    axios.post("http://localhost:3000/submit_score", {id: sessionStorage.getItem('userID'), high_score: this.score })
    .then(response => {
      
      if (response.data.status === 200 ) {
        
        console.log("saved score")
      }

      else {
        console.log(response.data.errors)
      }
      
    })
    .catch(error => console.log('api errors:', error))
  }

  create() {
    this.submitScore()
    let { width, height } = this.sys.game.canvas;
    this.add.image(0, 0, "background1").setOrigin(0).setScale(3.5);
    // restart button
    new Button(width * 0.75, height / 2, 2.5, "Restart Game", this, () => {
      this.scene.start("Main");
      this.scene.stop("Win");
    });

    // back to home button
    new Button(width * 0.25, height / 2, 2.5, "Back to home", this, () => {
      this.scene.stop("Win");
      this.props.socket.emit("redirect", "redirect")
      window.location.replace("/");
      
    
    });
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

