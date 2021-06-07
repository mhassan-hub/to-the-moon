import Phaser from "phaser";
import { collisionDestroy } from "./helpers/collision";
import { checkAsteroidPos, enemyPos, checkEnemyPos } from "./helpers/position";
import {
  shoot,
  enemyShoot,
  increaseLives,
  decreaseLives,
} from "./helpers/shoot";
import { setInvincibility, scoreIncreseBitcoin } from "./helpers/powerups";

import {
  collisionObtain,
  setEnemyCollision,
  setAsteroidCollision,
} from "./helpers/collision";

export default class Main extends Phaser.Scene {
  constructor() {
    super("Main");
  }

  init() {
    this.playerScore = 0;
    this.playerLives = 3;
    // this.doubleFire = false;
    this.invincibility = false;
  }

  //Preload all assets to load files from asset folder
  preload() {
    this.load.audio("audioSound", "assets/Demon.mp3");
    this.load.audio("laserSound", "assets/laser-sound.mp3");
    this.load.audio("coinSound", "assets/coin.wav");
    this.load.audio("explosionSound", "assets/explosion.wav");
    this.load.image("enemy", "assets/alienspaceship.png");
    this.load.image("enemyshooter", "assets/alienshooterspaceship.png");
    this.load.image("enemylaser", "assets/enemylaser.png");
    this.load.image("asteroid", "assets/Asteroid.png");
    this.load.image("ship", "assets/fighter.png");
    this.load.image("background", "assets/starfield.png");
    this.load.image("laser", "assets/laser.png");
    this.load.image("bitcoin", "assets/btc.png");
    this.load.image("burger", "assets/SpaceBurger.png");
    this.load.spritesheet("explosion", "assets/explosion.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.image("doubleShoot", "assets/doubleshot.png");
    this.load.image("healthIcon", "assets/heart.png");
    this.load.image("invincibilityIcon", "assets/star.png");
    this.load.audio("invincibleSound", "assets/battle.wav");
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

    this.enemy = this.physics.add.sprite(500, 0, "enemyshooter");
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
    });

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
    });

    this.healthIcon = this.physics.add.sprite(200, 300, "healthIcon");

    this.invincibilityIcon = this.physics.add
      .sprite(500, 800, "invincibilityIcon")
      .setScale(5);

    // this.doubleFireIcon = this.physics.add.sprite (200, 300, "doubleShoot")

    this.physics.add.overlap(
      this.player,
      this.bitcoins,
      collisionObtain,
      scoreIncreseBitcoin,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.healthIcon,
      collisionObtain,
      increaseLives,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.invincibilityIcon,
      collisionObtain,
      setInvincibility,
      this
    );

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
    setAsteroidCollision(this.bitcoins);
    setEnemyCollision(this.enemies);

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

    this.time.addEvent({
      delay: 2000,
      callback: enemyShoot,
      callbackScope: this,
      loop: true,
    });
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
    checkAsteroidPos(this.bitcoins);
    checkEnemyPos(this.enemies);
    enemyPos(this.enemy);
  }
}
