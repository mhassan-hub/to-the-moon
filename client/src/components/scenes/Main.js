import Phaser from "phaser";

export default class Main extends Phaser.Scene {
  constructor() {
    super("Main");
  }

  init() {
    this.playerScore = 0;
    this.playerLives = 3;
    // this.doubleFire = false;
    this.invincibility = false
  }

  //Preload all assets to load files from asset folder
  preload() {
    this.load.audio("audioSound", "assets/Demon.mp3");
    this.load.audio("laserSound", "assets/laser-sound.mp3");
    this.load.audio("coinSound", "assets/coin.wav")
    this.load.audio("explosionSound", "assets/explosion.wav")
    this.load.image("enemy", "assets/alienspaceship.png");
    this.load.image("enemyshooter", "assets/alienshooterspaceship.png")
    this.load.image("enemylaser", "assets/enemylaser.png");
    this.load.image("asteroid", "assets/Asteroid.png");
    this.load.image("ship", "assets/fighter.png");
    this.load.image("background", "assets/starfield.png");
    this.load.image("laser", "assets/laser.png");
    this.load.image("bitcoin", "assets/btc.png")
    this.load.image("burger", "assets/SpaceBurger.png");
    this.load.spritesheet("explosion", "assets/explosion.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.image("doubleShoot", "assets/doubleshot.png")
    this.load.image("healthIcon", "assets/heart.png")
    this.load.image("invincibilityIcon", "assets/star.png")
    this.load.audio('invincibleSound', "assets/battle.wav")
  }

  //After loading assets create() will generate asset instances in game
  create() {
    //width and height from canvas for easy manipulations
    let { width, height } = this.sys.game.canvas;

    //sets background image
    this.add.image(400, 300, "background");
    this.background = this.add
      .tileSprite(0, 0, 0, 0, "background")
      .setOrigin(0);

    this.burger = this.add.image(400, 0, "burger").setScale(0.1);
    this.burger.visible = false;
    //sets player and player physics
    this.player = this.physics.add.sprite(width / 2, height, "ship");
    this.player.setCollideWorldBounds(true, 1, 1);
    this.player.setDrag(200, 200);

 
    
    this.enemy = this.physics.add.sprite(500 , 0, "enemyshooter");
    this.enemy.setVelocityX(Phaser.Math.Between(-100, 100));
    this.enemy.setVelocityY(Phaser.Math.Between(100, 150));

    this.enemies = this.physics.add.group({
      key: "enemy",     
      frameQuantity: 3,
      immovable: true,
      setXY: {
        x: Math.floor(Math.random() * 800),
        y: 50,
        stepX: Phaser.Math.Between(10, 750),
        stepY: Phaser.Math.Between(15, 300),
      },
    })

   
    
    //creates asteroid group and sets asteroid physics
    this.asteroids = this.physics.add.group({
      key: "asteroid",
      repeat: 2,
      setCircle: 300,
      immovable: true,
      setXY: {
        x: Math.floor(Math.random() * 800),
        y: 0,
        stepX: Phaser.Math.Between(10, 750),
        stepY: Phaser.Math.Between(15, 300),
      },
    });

     //creates asteroid group and sets asteroid physics
     this.bitcoins = this.physics.add.group({
      key: "bitcoin",
      repeat: 5,
      immovable: true,
      setXY: {
        x: Math.floor(Math.random() * 800),
        y: 0,
        stepX: Phaser.Math.Between(10, 750),
        stepY: Phaser.Math.Between(15, 300),
      },
    })

    this.healthIcon = this.physics.add.sprite(200,300, "healthIcon")

    this.invincibilityIcon = this.physics.add.sprite(500,800, "invincibilityIcon")
    .setScale(5)

    // this.doubleFireIcon = this.physics.add.sprite (200, 300, "doubleShoot")

    this.physics.add.overlap(
      this.player,
      this.bitcoins,
      collisionObtain,
      scoreIncreseBitcoin,
      this
    );

    // this.physics.add.overlap(
    //   this.player,
    //   this.doubleFireIcon,
    //   setDoubleFire,
    //   null,
    //   this
    // )

    this.physics.add.overlap(
      this.player,
      this.healthIcon,
      collisionObtain,
      increaseLives,
      this
    )

    this.physics.add.overlap(
      this.player,
      this.invincibilityIcon,
      collisionObtain,
      setInvincibility,
      this
    )
    

    //Creates asteroid physics collider between player and asteroids
    this.physics.add.overlap(
      this.player,
      this.asteroids,
      collisionDestroy,
      decreaseLives,
      this
    );

    //Creates physics collider between enemy and player
    this.physics.add.overlap(
      this.player,
      this.enemies,
      collisionDestroy,
      decreaseLives,
      this
    );

    //Creates physics collider between enemy and shooting enemy
    this.physics.add.overlap(
      this.player,
      this.enemy,
      collisionDestroy,
      decreaseLives,
      this
    );


    //Overhead display text
    const textStyle = {
      fontSize: 32,
      color: "#FFFF00",
    };
    this.playerScoreLabel = this.add.text(5, 5, this.playerScore, textStyle);
    this.playerLifeLabel = this.add.text(995, 5, this.playerLives, textStyle);

    //Creates music file to play in background and plays it
    // this.music = this.sound.add("audioSound", { volume: 0.9, loop: true });
    // this.music.play();

    //keybindings
    this.cursors = this.input.keyboard.createCursorKeys();
    this.input.keyboard.on("keydown-SPACE", shoot, this);

    setAsteroidCollision(this.asteroids);
    setAsteroidCollision(this.bitcoins)
    setEnemyCollision(this.enemies)
    

    //Creates explosion animation when asteroids are destroyed.
    this.anims.create({
      key: "explode",
      frames: this.anims.generateFrameNumbers("explosion", {
        start: 1,
        end: 6,
      }),
      frameRate: 15,
      hideOnComplete: true,
      setCircle: 300,
    });

    //Function which dictates asteroid velocity after creation/re-enablement
    function setAsteroidCollision(asteroids) {
      asteroids.children.iterate(function (asteroid) {
        let xVel = Phaser.Math.Between(-100, 100);
        let yVel = Phaser.Math.Between(100, 150);
        asteroids.setVelocity(xVel, yVel);
      });
    }

    //Function which dictates enemy spaceship velocity after creation
      function setEnemyCollision(enemies) {
      enemies.children.iterate(function (enemy) {
        let xVel = Phaser.Math.Between(-100, 100);
        let yVel = Phaser.Math.Between(100, 150);
        enemies.setVelocity(xVel, yVel);
      });
    }

    //Function to shoot down asteroids and enemies.
    function shoot() {
      this.laser = this.physics.add
        .image(this.player.x-2, this.player.y-40, "laser")
        .setScale(0.25)

      this.laser.setVelocityY(-900);
      this.laserSound = this.sound.add("laserSound", { volume: 0.1 });
      this.laserSound.play();
      this.physics.add.collider(
        this.laser,
        this.asteroids,
        collisionDestroy,
        scoreIncreseAsteroid,
        this
      );
      this.physics.add.collider(
        this.laser,
        this.enemies,
        collisionDestroy,
        scoreIncreseAsteroid,
        this
      ); 
      this.physics.add.collider(
        this.laser,
        this.enemy,
        collisionDestroy,
        scoreIncreseAsteroid,
        this
      );     
      if(this.laser.y > 800) {
        this.laser.destroy()
      }
    }
     
    function enemyShoot() {
      this.enemyLaser = this.physics.add
        .image(this.enemy.x, this.enemy.y, "enemylaser")
        .setScale(0.25);
      this.enemyLaser.setVelocityY(800);
      this.enemyLaserSound = this.sound.add("laserSound", { volume: 0.1 });
      this.enemyLaserSound.play();
      this.physics.add.collider(
        this.player,
        this.enemyLaser,
        collisionDestroy,
        decreaseLives,
        this
        );
    }

    // function doubleShoot() {
    //   this.laser1 = this.physics.add
    //     .image(this.player.x-20, this.player.y-40, "laser")
    //     .setScale(0.25)

    //   this.laser1.setVelocityY(-900);
    //   this.laserSound1 = this.sound.add("laserSound", { volume: 0.1 });
    //   this.laserSound1.play();
    //   this.physics.add.collider(
    //     this.laser1,
    //     this.asteroids,
    //     collisionDestroy,
    //     scoreIncreseAsteroid,
    //     this
    //   )

    //   this.laser2 = this.physics.add
    //     .image(this.player.x+16, this.player.y-40, "laser")
    //     .setScale(0.25)

    //   this.laser2.setVelocityY(-900);
    //   this.laserSound2 = this.sound.add("laserSound", { volume: 0.1 });
    //   this.laserSound2.play();
    //   this.physics.add.collider(
    //     this.laser2,
    //     this.asteroids,
    //     collisionDestroy,
    //     scoreIncreseAsteroid,
    //     this
    //   )
    // }

    // function shotSelector() {
    //   if (this.doubleFire) {
    //     doubleShoot()
    //   }
    //   else {
    //     shoot()
    //   }
    // }

    // function setDoubleFire() {
    //   this.doubleFire = true
    // }
    this.time.addEvent({ delay: 2000, callback: enemyShoot, callbackScope: this, loop: true })
    

    function decreaseLives() {
      if(!this.invincibility){
      this.playerLives--;
      this.playerLifeLabel.text = this.playerLives;
      }
    }

    function setInvincibility() {
      this.invincibility = true
      this.invincibleSound = this.sound.add("invincibleSound", { volume: 0.1});
      this.invincibleSound.play();
      setTimeout(()=>{
        this.invincibility = false
        this.invincibleSound.stop()
      }, 5000)
    }

    function increaseLives() {
      this.playerLives++;
      this.playerLifeLabel.text = this.playerLives;
    }

    function scoreIncreseAsteroid() {
      this.playerScore += 100;
      this.playerScoreLabel.text = this.playerScore;
    }

    function scoreIncreseBitcoin() {
      this.playerScore += 10;
      this.playerScoreLabel.text = this.playerScore;
    }

    //Function which handles game logic surrounding collision and destructions
    function collisionDestroy(collisionObject, asteroid) {
      const explosion = this.add
        .sprite(asteroid.x, asteroid.y, "explosion")
        .setScale(5);
      explosion.play("explode");
      asteroid.disableBody(true, true);
      this.explosionSound = this.sound.add("explosionSound", { volume: 0.1 });
      this.explosionSound.play();
      const checkPlayerInvinc = (collisionObject === this.player && this.invincibility)
      if (!checkPlayerInvinc || collisionObject === this.laser) {
      collisionObject.disableBody(true, true);
      collisionObject.enableBody(true, width / 2, height, true, true);}
      let x = Phaser.Math.Between(0, 580);
      asteroid.enableBody(true, x, 0, true, true);
      let xVel = Phaser.Math.Between(-100, 100);
      let yVel = Phaser.Math.Between(100, 150);
      asteroid.setVelocity(xVel, yVel);
    }

    function collisionObtain(player, powerUp) {
      powerUp.disableBody(true, true)
      this.coinSound = this.sound.add("coinSound", { volume: 0.1 });
      this.coinSound.play();
      let x = Phaser.Math.Between(0, 580);
      powerUp.enableBody(true, x, 0, true, true);
      let xVel = Phaser.Math.Between(100, 300);
      let yVel = Phaser.Math.Between(150, 400);
      powerUp.setVelocity(xVel, yVel);
  }


  }

  update() {

    
    //scrolling background image for infinite loop
    this.background.tilePositionY -= 3;
    if (
      this.background.tilePositionY > -2000 &&
      this.background.tilePositionY < -1000
    ) {
      this.burger.visible = true;
      this.burger.y += 3;
    }
    //After a certain distance go to the winning screen
    if (this.background.tilePositionY < -8000) {
      this.scene.start("Win", {
        lives: this.playerLives,
        score: this.playerScore,
      });
      this.scene.stop("Main");
    }

    if (this.playerLives === 0) {
      this.scene.start("Lose", {
        lives: this.playerLives,
        score: this.playerScore,
      });
      this.scene.stop("Main");
    }
    // timedEvent = this.time.delayedCall(
    //   5000,
    //   () => {
    //     this.scene.start("Win");
    //     this.scene.stop("Main");
    //   },
    //   this
    // );

    /** @type {Phaser.Phyics.Arcade.StaticBody} */

    //keybinding listeners for player movement
    if (this.cursors.up.isDown) {
      this.player.y -= 10;
    } else if (this.cursors.down.isDown) {
      this.player.y += 10;
    } else if (this.cursors.left.isDown) {
      this.player.x -= 10;
    } else if (this.cursors.right.isDown) {
      this.player.x += 10;
    }

    checkAsteroidPos(this.asteroids);
    checkAsteroidPos(this.bitcoins)
    checkEnemyPos(this.enemies)
    enemyPos(this.enemy)
   

    //Function which constantly updates asteroid positions to reset their position if off canvas
    function checkAsteroidPos(asteroids) {
      asteroids.children.iterate(function (asteroid) {
        if (asteroid.y > 800) {
          resetPos(asteroid);
        }
      });
    }

    //Function which resets asteroid positions if they are off canvas
    function resetPos(asteroid) {
      asteroid.y = 0;
      let random = Phaser.Math.Between(15, 599);
      asteroid.x = random;
    }

    //function which "revives" shooter enemy constantly 
    function enemyPos(enemy){
      if (enemy.y > 800 || enemy.x < 0 ) {
        resetPos(enemy)
      }
    }

    //Function which constantly updates enemy positions to reset their position if off canvas
    function checkEnemyPos(enemies) {
      enemies.children.iterate(function (enemy) {
        if (enemy.y > 800) {
          resetPos(enemy);
        }
      });
    }
  }
}