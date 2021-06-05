import Phaser from "phaser";



export default class Menu extends Phaser.Scene {
  constructor() {
    super("Menu");
  }

  

  preload() {
    // this.load.audio("audioSound", "assets/Demon Slayer Kimetsu no Yaiba.mp3");
    this.load.image("asteroid", "assets/Asteroid.png")
    this.load.image("ship", "assets/fighter.png");
    this.load.image("background", "assets/starfield.png")
  }
  create() {
    this.add.image(400, 300, 'background')
    this.background = this.add.tileSprite(0, 0, 0, 0, 'background').setOrigin(0);
    this.asteroid = this.physics.add.sprite(300,600, "asteroid")
    this.physics.add.existing(this.asteroid, true)
    this.player = this.physics.add.sprite(100, 450, 'ship');
    this.player.setCollideWorldBounds(true);
  
   

    this.physics.add.collider(this.player, this.asteroid)

    // this.music = this.sound.add("audioSound", { volume: 0.1, loop: true});
    // this.music.play();

    this.cursors = this.input.keyboard.createCursorKeys()
  }

  update() {
  
    this.background.tilePositionY -= 3
   

    /** @type {Phaser.Phyics.Arcade.StaticBody} */
    const body = this.player.body

    if(this.cursors.up.isDown) {
      this.player.y -= 10
      
      body.updateFromGameObject()
      
    }
    else if(this.cursors.down.isDown) {
      this.player.y += 10
      
      body.updateFromGameObject()
    }
    else if(this.cursors.left.isDown) {
      this.player.x -= 10
      
      body.updateFromGameObject()
    }
    else if(this.cursors.right.isDown) {
      this.player.x += 10
      
      body.updateFromGameObject()
    }
  }

}