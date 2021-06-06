import Phaser from "phaser";

export default class Menu extends Phaser.Scene {
  constructor() {
    super("Menu");
  }

  init() {
    this.playerScore = 0;
    this.playerLives = 3;
  }

  //Preload all assets to load files from asset folder
  preload() {
    this.load.audio("audioSound", "assets/Demon.mp3");
    this.load.audio("laserSound", "laser-sound.mp3");
    this.load.image("asteroid", "assets/Asteroid.png");
    this.load.image("ship", "assets/fighter.png");
    this.load.image("background", "assets/starfield.png");
    this.load.image("laser", "assets/laser.png");
    this.load.spritesheet("explosion", "assets/explosion.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
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

    //sets player and player physics
    this.player = this.physics.add.sprite(width / 2, height, "ship");
    this.player.setCollideWorldBounds(true, 1, 1);
    this.player.setDrag(200, 200);

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

    //Creates asteroid physics collider between player and asteroids
    this.physics.add.overlap(
      this.player,
      this.asteroids,
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
    this.music = this.sound.add("audioSound", { volume: 0.1, loop: true });
    // this.music.play();

    //keybindings
    this.cursors = this.input.keyboard.createCursorKeys();
    this.input.keyboard.on("keydown-SPACE", shoot, this);

    setAsteroidCollision(this.asteroids);

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

    //Function to shoot down asteroids.
    function shoot() {
      this.laser = this.physics.add
        .image(this.player.x, this.player.y, "laser")
        .setScale(0.25);
      this.laser.setVelocityY(-900);
      // this.laserSound = this.sound.add("laserSound", { volume: 0.1});
      // this.laserSound.play()
      this.physics.add.collider(
        this.laser,
        this.asteroids,
        collisionDestroy,
        increaseScore,
        this
      );
    }

    function decreaseLives() {
      this.playerLives--;
      this.playerLifeLabel.text = this.playerLives;
    }

    function increaseScore() {
      this.playerScore += 100;
      this.playerScoreLabel.text = this.playerScore;
    }

    //Function which handles game logic surrounding collision and destructions
    function collisionDestroy(collisionObject, asteroid) {
      const explosion = this.add
        .sprite(asteroid.x, asteroid.y, "explosion")
        .setScale(5);
      explosion.play("explode");
      asteroid.disableBody(true, true);
      collisionObject.disableBody(true, true);
      collisionObject.enableBody(true, width / 2, height, true, true);
      let x = Phaser.Math.Between(0, 580);
      asteroid.enableBody(true, x, 0, true, true);
      let xVel = Phaser.Math.Between(-100, 100);
      let yVel = Phaser.Math.Between(100, 150);
      asteroid.setVelocity(xVel, yVel);
    }
  }

  update() {
    //scrolling background image for infinite loop
    this.background.tilePositionY -= 3;

    //After a certain distance go to the winning screen
    if (this.background.tilePositionY < -20000) {
      this.scene.start("Win", {
        lives: this.playerLives,
        score: this.playerScore,
      });
      this.scene.stop("Menu");
    }

    if (this.playerLives === 0) {
      this.scene.start("Lose", {
        lives: this.playerLives,
        score: this.playerScore,
      });
      this.scene.stop("Menu");
    }
    // timedEvent = this.time.delayedCall(
    //   5000,
    //   () => {
    //     this.scene.start("Win");
    //     this.scene.stop("Menu");
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
  }
}
