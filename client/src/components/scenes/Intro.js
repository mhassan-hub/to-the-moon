import Phaser from "phaser";

export default class Intro extends Phaser.Scene {
  constructor(props) {
    super("Intro");
    this.props = props; 
  }
  
  preload() {

  this.load.image("background", "assets/starfield.png");
  this.load.audio("theme", "assets/starwars.mp3");
  }

  create() {
  
  let { width, height } = this.sys.game.canvas;

  this.add.image(400, 300, "background");
  this.background = this.add
    .tileSprite(0, 0, 0, 0, "background")
    .setOrigin(0);

  this.music = this.sound.add("theme", { volume: 0.1, loop: true});
  this.music.play();

  this.title = this.add.text(0, 0, "To The Moon!",{
    fontSize: "50px",
    color: "#FFFF00",
    fontFamily: ""
    })
    .setScale(70)
    .setOrigin(0.5,0.5);
    
  this.description = this.add.text(0,800,`The evil forces of Elon Musk have 


invaded space. Their sights are set 


on stopping any crypto trying to reach


the moon. Your job is to secure access


to the moon.`, {
    fontSize: "15px",
    color: "#FFFF00",
    })
    .setScale(3)
    .setOrigin(0,0);
    

    

  this.tweens = this.tweens.add({
      
    targets: this.title,
    scale: 0.8,
    ease: "Linear",
    duration: 8000,
    onUpdate: () => {
    this.title.setX(width /2)
    this.title.setY(height /2)
      
  },
  })
  
  this.input.on("pointerdown", () => {
    this.props.socket.emit("skipScene", "skip intro scene");
  });

  this.props.socket.on("skip", () => {
    this.music.stop();
    this.scene.start("Lobby");      
    this.scene.stop("Intro");
   })  
  };

  update() {
   
  this.time.addEvent({
    delay: 8000,
    callback: () => {
      this.title.destroy();
      this.description.y -= 1;
    }
  });
    
  this.background.tilePositionY -= 3;
    
  }
}