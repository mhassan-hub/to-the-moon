import Phaser from "phaser";



export default class Menu extends Phaser.Scene {
  constructor() {
    super("Menu");  
  }

  
  

  preload() {
    this.load.audio("audioSound", "assets/Demon.mp3");
    this.load.image("asteroid", "assets/Asteroid.png")
    this.load.image("ship", "assets/fighter.png");
    this.load.image("background", "assets/starfield.png")
    this.load.spritesheet('explosion', "assets/explosion.png",{
      frameWidth : 16,
      frameHeight : 16,
    })
   
  }

 

  create() {
    this.add.image(400, 300, 'background')
    this.background = this.add.tileSprite(0, 0, 0, 0, 'background').setOrigin(0);
    // this.asteroid = this.physics.add.sprite(300,600, "asteroid")
    // this.physics.add.existing(this.asteroid, true)
    this.player = this.physics.add.sprite(100, 450, 'ship');
    
    this.player.setCollideWorldBounds(true, 1, 1);
    this.player.setDrag(200,200)
    
    this.asteroids = this.physics.add.group({
      key: 'asteroid',
      repeat: 2,
      setCircle: 300,
      
      setXY: {
        x:(Math.floor(Math.random() * 800)), y: 0, stepX: Phaser.Math.Between(10, 750), stepY: Phaser.Math.Between(15, 300)
      }
    })
   

    this.physics.add.collider(this.player, this.asteroids, destroyShip, null, this)

    this.music = this.sound.add("audioSound", { volume: 0.1, loop: true});
    // this.music.play();

    this.cursors = this.input.keyboard.createCursorKeys()

    setObjVelocity(this.asteroids)

    this.anims.create({
      key : 'explode',
      frames : this.anims.generateFrameNumbers('explosion'),
      frameRate : 20,
      hideOnComplete : true
    })

    function setObjVelocity (asteroids) {
      asteroids.children.iterate(function(asteroid) {
          let xVel = Phaser.Math.Between(-100, 100)
          let yVel = Phaser.Math.Between(100,150)
          asteroids.setVelocity(xVel,yVel)
      })
    }
    
    function destroyShip(player, asteroid){
      const explosion = this.add.sprite(asteroid.x, asteroid.y, "explosion").setScale(10)
      explosion.play('explode')
      asteroid.disableBody(true,true)
      
      let x = Phaser.Math.Between(0, 580)
      asteroid.enableBody(true, x, 0, true, true)
      let xVel = Phaser.Math.Between(-100, 100)
      let yVel = Phaser.Math.Between(100,150)
      asteroid.setVelocity(xVel,yVel)
    }
   

  }



  update() {
  
  

    this.background.tilePositionY -= 3
   

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
    checkAsteroidPos(this.asteroids)

    function checkAsteroidPos(asteroids){
      asteroids.children.iterate(function(asteroid) {
      if(asteroid.y > 800) {
        resetPos(asteroid)
      }
      })
    }
    
    function resetPos(asteroid) {
      asteroid.y = 0
      let random = Phaser.Math.Between(15, 599)
      asteroid.x = random
      
    }
  }
 
  

}

