import Phaser from "phaser";
import readyButton from "./helpers/selectPlayer";

export default class Lobby extends Phaser.Scene {
  constructor() {
    super("Lobby");
  }

  // init(data) {}

  preload() {
    // this.load.audio("audioSound", "assets/Demon.mp3");
    this.load.image("background", "assets/starfield.png");
    this.load.image("bitcoinShip", "assets/bitcoin_fighter.png");
    this.load.image("liteCoinShip", "assets/lite_fighter.png");
    this.load.image("ethereumShip", "assets/ethereum_fighter.png");
    this.load.image("dogeShip", "assets/doge_fighter.png");
  }

  create() {
    this.add.image(0, 0, "background");
    let { width, height } = this.sys.game.canvas;

    this.bitcoin = this.physics.add
      .image(width / 4 - 150, height / 2, "bitcoinShip")
      .setScale(1.2)
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        this.ship = this.bitcoin;
        this.playerChoice = "bitcoinShip";
      });

    this.liteCoin = this.physics.add
      .image(width / 2 - 150, height / 2, "liteCoinShip")
      .setScale(1.2)
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        this.ship = this.liteCoin;
        this.playerChoice = "liteCoinShip";
      });

    this.ethereum = this.physics.add
      .image((width / 4) * 3 - 150, height / 2, "ethereumShip")
      .setScale(1.2)
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        // this.ethereum.setScale(2.5);
        this.ship = this.ethereum;
        this.playerChoice = "ethereumShip";
      });

    this.doge = this.physics.add
      .image(width - 150, height / 2, "dogeShip")
      .setScale(1.2)
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        // this.doge.setScale(2.5);
        this.ship = this.doge;
        this.playerChoice = "dogeShip";
        // readyButton(this.playerChoice, this);
      });

    this.add
      .text(width * 0.5, height * 0.1, `Pick your ship and ready up!`, {
        fontSize: 36,
      })
      .setOrigin(0.5);
  }
  update() {
    this.bitcoin.setScale(1.2);
    this.liteCoin.setScale(1.2);
    this.ethereum.setScale(1.2);
    this.doge.setScale(1.2);

    if (this.playerChoice) {
      this.ship.setScale(2.5);
      readyButton(this.playerChoice, this);
    }
  }
}
