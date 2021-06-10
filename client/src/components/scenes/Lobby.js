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
    console.log(1024, 768);

    this.bitcoin = this.physics.add
      .image(1024 / 4 - 150, 768 / 2, "bitcoinShip")
      .setScale(1.2)
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        this.bitcoin.setScale(2.5);

        this.playerChoice = "bitcoinShip";
        readyButton(this.playerChoice, this);
      });

    this.liteCoin = this.physics.add
      .image(1024 / 2 - 150, 768 / 2, "liteCoinShip")
      .setScale(1.2)
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        this.liteCoin.setScale(2.5);
        this.playerChoice = "liteCoinShip";
        readyButton(this.playerChoice, this);
      });

    this.ethereum = this.physics.add
      .image((1024 / 4) * 3 - 150, 768 / 2, "ethereumShip")
      .setScale(1.2)
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        this.ethereum.setScale(2.5);
        this.playerChoice = "ethereumShip";
        readyButton(this.playerChoice, this);
      });

    this.doge = this.physics.add
      .image(1024 - 150, 768 / 2, "dogeShip")
      .setScale(1.2)
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        this.doge.setScale(2.5);
        this.playerChoice = "dogeShip";
        readyButton(this.playerChoice, this);
      });

    this.add
      .text(1024 * 0.5, 768 * 0.1, `Pick your ship and ready up!`, {
        fontSize: 36,
      })
      .setOrigin(0.5);
  }
  update() {
    if (this.playerChoice) {
      readyButton(this.playerChoice, this);
    }
  }
}
