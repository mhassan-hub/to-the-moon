import Phaser from "phaser";



export default class Menu extends Phaser.Scene {
  constructor() {
    super("Menu");
  }

  

  preload() {
    // this.load.audio("audioSound", "assets/Demon.mp3");
    this.load.image("asteroid", "assets/Asteroid.png")
    this.load.image("ship", "assets/fighter.png");
    this.load.image("background", "assets/starfield.png")
  }
  create() {
    this.add.image(400, 300, 'background')
    this.background = this.add.tileSprite(0, 0, 0, 0, 'background').setOrigin(0);
    this.player = this.physics.add.sprite(500, 700, 'ship');
    // this.asteroid = this.physics.add.sprite(Math.floor(Math.random() * 800) ,0, "asteroid")
    // this.physics.add.existing(this.asteroid, true)
    
    this.player.setCollideWorldBounds(true);

    const asteroids = this.physics.add.group({
      key: 'asteroid',
      repeat: 3,
      setXY: {
        x:(Math.floor(Math.random() * 800)), y: 0, stepX: Phaser.Math.Between(10, 750), stepY: Phaser.Math.Between(15, 300)
      }
    })

    function bounce (player, asteroid) {
      asteroid.destroy()
      
      setTimeout( () => {
        player.setPosition(500,700)}, 300
      )
    }
    

    this.physics.add.collider(this.player, asteroids)
    // this.physics.add.collider(this.player, this.asteroids, ()=>{
    //   bounce(this.player, this.asteroids)
    // }
    // )
    // this.onCollide = true;

    // this.music = this.sound.add("audioSound", { volume: 0.1, loop: true});
    // this.music.play();

    this.cursors = this.input.keyboard.createCursorKeys()

    setObjVelocity(asteroids)

    function setObjVelocity (asteroids) {
      asteroids.children.iterate(function(asteroid) {
          let xVel = Phaser.Math.Between(-100, 100)
          let yVel = Phaser.Math.Between(150,200)
          asteroids.setVelocity(xVel,yVel)
      })
    }

  }

  update() {
  
    console.log(this.asteroids)

    this.background.tilePositionY -= 3
    // this.asteroids.y += 2
    // // this.asteroid.velocity.y -= 3
    // // 1 in 10 chance for creating an astroid
    // if (Math.floor(10000 * Math.random()) === 1) {
    //   // this.asteroid = this.physics.add.sprite((Math.floor(800 * Math.random())), 100, "asteroid")
    //   const asteroid = this.asteroids.getChildren()

    //   asteroid.setVelocity(400,300)
    //   asteroid.y += 2
    // }

    /** @type {Phaser.Phyics.Arcade.StaticBody} */

    if(this.cursors.up.isDown) {
      this.player.y -= 10
      
    }
    else if(this.cursors.down.isDown) {
      this.player.y += 10
      
    }
    else if(this.cursors.left.isDown) {
      this.player.x -= 10

    }
    else if(this.cursors.right.isDown) {
      this.player.x += 10
      

    }
  }

  


}