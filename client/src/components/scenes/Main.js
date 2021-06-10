import Phaser from "phaser";
import preloadAssets from "./helpers/preloadAssets";
import {
  checkAsteroidPos,
  enemyPos,
  checkEnemyPos,
  checkCoinPos,
} from "./helpers/position";
import { spawnCoins } from "./helpers/powerups";
import { shoot, enemyShoot } from "./helpers/shoot";
import { setEnemyCollision, setAsteroidCollision } from "./helpers/collision";
// const rp = require('request-promise');
import Button from "./helpers/button";
import addPhysics from "./helpers/addPhysics";
import { createGroup } from "./helpers/groups";
export default class Main extends Phaser.Scene {
  constructor() {
    super("Main");
  }

  init(data) {
    this.playerScore = 0;
    this.playerLives = 3;
    this.invincibility = false;
    this.continiuosShot = false;
    this.finishLine = -5000;
    this.playerChoice = data.player;
  }

  //Preload all assets to load files from asset folder
  preload() {
    preloadAssets(this);
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
    // this.moon = this.add.image(400, 0, "moon")
    // // this.moon.visible = false;

    this.progressBar2 = this.add.graphics({ x: 700, y: 280 });
    this.progressBox2 = this.add.graphics({ x: 700, y: 280 });
    this.progressBox2.fillStyle(0x222222, 0.8);
    this.progressBox2.fillRect(245, 270, 40, -310);
    this.add.image(965, 235, "moon").setScale(0.1);

    //sets player and player physics

    this.player = this.physics.add.sprite(
      width / 2,
      height,
      `${this.playerChoice}`
    );
    this.player.setCollideWorldBounds(true, 1, 1);
    this.player.setDrag(200, 200);

    this.enemy = this.physics.add.sprite(500, 0, "enemyshooter");
    this.enemy.setVelocityX(Phaser.Math.Between(-100, 100));
    this.enemy.setVelocityY(Phaser.Math.Between(100, 150));
    this.enemy.body.enable = false;
    this.enemy.visible = false;

    this.time.addEvent({
      delay: 5000,
      callback: () => {
        this.enemy.body.enable = true;
        this.enemy.visible = true;
      },
      callbackScope: this,
      loop: false,
    });

  

    this.enemies = this.physics.add.group({
      key: "enemy",
      frameQuantity: 1,  
      immovable: true,
      // repeat: Math.ceil(2 * (this.progress + 1)),
      setXY: {
        x: Math.floor(Math.random() * 800),
        y: 50,
        stepX: Phaser.Math.Between(10, 750),
        stepY: Phaser.Math.Between(15, 300),
      },
    });

    this.time.addEvent({
      delay: -this.finishLine / 2,
      callback: () => {
        this.enemies.createMultiple({
          key: "enemy",
          repeat: 3,
          setXY: {
            x: Math.floor(Math.random() * 800),
            y: 0,
            stepX: Phaser.Math.Between(10, 750),
            stepY: Phaser.Math.Between(15, 30),
          },
        });
        this.enemies.setVelocityX(Phaser.Math.Between(-100, 100));
        this.enemies.setVelocityY(Phaser.Math.Between(100, 150));
      },
      callbackScope: this,
      loop: false,
    });

    //creates asteroid group and sets asteroid physics
    this.asteroids = this.physics.add.group({
      key: "asteroid",
      // repeat: 2,
      setCircle: 300,
      immovable: true,
      setXY: {
        x: Math.floor(Math.random() * 800),
        y: 0,
        stepX: Phaser.Math.Between(10, 750),
        stepY: Phaser.Math.Between(15, 300),
      },
    });

    //creates bitcoin group and sets asteroid physics
    this.bitcoin = this.physics.add.group({
      key: "bitcoin",
      frameQuantity: 1,
      immovable: true,
      setXY: {
        x: Math.floor(Math.random() * 800),
        y: 0,
        stepX: Phaser.Math.Between(10, 750),
        stepY: Phaser.Math.Between(15, 300),
      },
    });
    createGroup(this.bitcoin, "bitcoin", this);
    createGroup(this.ethereum, "ethereum", this);
    createGroup(this.litecoin, "litecoin", this);
    createGroup(this.dogecoin, "dogecoin", this);

    if (this.bitcoin) {
      spawnCoins(this.bitcoin, "bitcoin", 20, this);
    }
    if (this.ethereum) {
      spawnCoins(this.ethereum, "ethereum", 10, this);
    }
    if (this.litecoin) {
      spawnCoins(this.litecoin, "litecoin", 4, this);
    }
    if (this.dogecoin) {
      spawnCoins(this.dogecoin, "dogecoin", 2, this);
    }

    // add physics overlaps
    addPhysics(this);

    //Overhead score and lives text
    const textStyle = {
      fontSize: 24,
      color: "#FFFF00",
    };
    this.playerScoreLabel = this.add.text(
      5,
      5,
      `Score:${this.playerScore}`,
      textStyle
    );
    this.playerLifeLabel = this.add.text(
      5,
      40,
      `Lives: ${this.playerLives}`,
      textStyle
    );

    const pause = new Button(width - 30, 10, 0.8, "Pause", this, () => {
      this.scene.launch("Pause");
      this.scene.pause();
    });

    //Creates music file to play in background and plays it
    // this.music = this.sound.add("audioSound", { volume: 0.9, loop: true });
    // this.music.play();

    //keybindings
    this.cursors = this.input.keyboard.createCursorKeys();

    this.key = this.input.keyboard.on("keydown-SPACE", shoot, this);

    setAsteroidCollision(this.asteroids);
    if (this.bitcoin) {
      setAsteroidCollision(this.bitcoin);
    }
    if (this.ethereum) {
      setAsteroidCollision(this.ethereum);
    }
    if (this.litecoin) {
      setAsteroidCollision(this.litecoin);
    }
    if (this.dogecoin) {
      setAsteroidCollision(this.dogecoin);
    }
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

    this.anims.create({
      key: "sparks",
      frames: this.anims.generateFrameNumbers("sparkle", {
        start: 5,
        end: 8,
      }),
      frameRate: 15,
      hideOnComplete: true,
      setCircle: 300,
    });

    // if(this.enemy.body.enable) {

    this.time.addEvent({
      delay: 2000,
      callback: enemyShoot,
      callbackScope: this,
      loop: true,
    });
    // }
  }

  update() {

   
    //scrolling background image for infinite loop

    this.background.tilePositionY -= 3;
    this.progress =
      Math.round((this.background.tilePositionY / this.finishLine) * 100) / 100;

    this.progressBar2.fillStyle(0x16cc41, 1);
    this.progressBar2.fillRect(250, 265, 30, -300 * this.progress);

    if (this.continiuosShot) {
      this.time.addEvent({
        delay: 100,
        callback: shoot,
        callbackScope: this,
        loop: false,
      });
    }

    //After a certain distance go to the winning screen
    if (this.background.tilePositionY < this.finishLine) {
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

    // this.enemies.quantity = Math.ceil(2 * (this.progress + 1));
    // console.log(this.enemies.frameQuantity);
    /** @type {Phaser.Phyics.Arcade.StaticBody} */

    //keybinding listeners for player movement
    if (this.cursors.up.isDown) {
      this.player.y -= 10;
    }
    if (this.cursors.down.isDown) {
      this.player.y += 10;
    }

    if (this.cursors.left.isDown) {
      this.player.x -= 10;
    }

    if (this.cursors.right.isDown) {
      this.player.x += 10;
    }

    checkAsteroidPos(this.asteroids, this);
    if (this.bitcoin) {
      checkCoinPos(this.bitcoin, this);
    }
    if (this.litecoin) {
      checkAsteroidPos(this.litecoin, this);
    }
    if (this.dogecoin) {
      checkAsteroidPos(this.dogecoin, this);
    }
    if (this.ethereum) {
      checkAsteroidPos(this.ethereum, this);
    }
    checkEnemyPos(this.enemies, this);
    if (this.enemy.body.enable === true) {
      enemyPos(this.enemy, this);
    }
  }

  
}


