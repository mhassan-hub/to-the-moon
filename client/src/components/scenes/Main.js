import Phaser from "phaser";
import preloadAssets from "./helpers/preloadAssets";
import { checkAsteroidPos, enemyPos, checkEnemyPos } from "./helpers/position";
import { shoot, enemyShoot } from "./helpers/shoot";
import { setEnemyCollision, setAsteroidCollision } from "./helpers/collision";
import Button from "./helpers/button";
import addPhysics from "./helpers/addPhysics";
export default class Main extends Phaser.Scene {
  constructor() {
    super("Main");
  }

  init(data) {
    this.playerScore = 0;
    this.playerLives = 3;
    this.invincibility = false;
    this.finishLine = -10000;
    this.playerChoise = data.player;
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

    //sets player and player physics

    this.player = this.physics.add.sprite(
      width / 2,
      height,
      `${this.playerChoise}`
    );
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

    //creates bitcoins group and sets asteroid physics
    this.bitcoins = this.physics.add.group({
      key: "bitcoin",
      repeat: 1,
      immovable: true,
      setXY: {
        x: Math.floor(Math.random() * 800),
        y: 0,
        stepX: Phaser.Math.Between(10, 750),
        stepY: Phaser.Math.Between(15, 300),
      },
    });

    this.ethereum = this.physics.add.group({
      key: "ethereum",
      repeat: 1,
      immovable: true,
      setXY: {
        x: Math.floor(Math.random() * 800),
        y: 0,
        stepX: Phaser.Math.Between(10, 750),
        stepY: Phaser.Math.Between(15, 300),
      },
    });

    this.litecoins = this.physics.add.group({
      key: "litecoin",
      repeat: 1,
      immovable: true,
      setXY: {
        x: Math.floor(Math.random() * 800),
        y: 0,
        stepX: Phaser.Math.Between(10, 750),
        stepY: Phaser.Math.Between(15, 300),
      },
    });

    this.dogecoins = this.physics.add.group({
      key: "dogecoin",
      repeat: 1,
      immovable: true,
      setXY: {
        x: Phaser.Math.Between(10, 850),
        y: 0,
        stepX: Phaser.Math.Between(10, 850),
        stepY: Phaser.Math.Between(15, 300),
      },
    });

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
    setAsteroidCollision(this.bitcoins);
    setAsteroidCollision(this.ethereum);
    setAsteroidCollision(this.litecoins);
    setAsteroidCollision(this.dogecoins);
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
    checkAsteroidPos(this.bitcoins, this);
    checkAsteroidPos(this.litecoins, this);
    checkAsteroidPos(this.dogecoins, this);
    checkAsteroidPos(this.ethereum, this);
    checkEnemyPos(this.enemies, this);
    enemyPos(this.enemy, this);
  }
}
