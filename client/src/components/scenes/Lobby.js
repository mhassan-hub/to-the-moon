import Phaser from "phaser";
import readyButton from "./helpers/selectPlayer";

export default class Lobby extends Phaser.Scene {
  constructor() {
    super("Lobby");
  }

  preload() {
    // this.load.audio("audioSound", "assets/Demon.mp3");
    this.load.image("background", "assets/starfield.png");
    this.load.image("bitcoinShip", "assets/bitcoin_fighter.png");
    this.load.image("liteCoinShip", "assets/lite_fighter.png");
    this.load.image("ethereumShip", "assets/ethereum_fighter.png");
    this.load.image("dogeShip", "assets/doge_fighter.png");
  }

  create() {
    this.add.image(400, 300, "background");
    this.background = this.add
      .tileSprite(0, 0, 0, 0, "background")
      .setOrigin(0);

    let { width, height } = this.sys.game.canvas;

    // Create the initial ships for player selection

    this.bitcoinShip = this.add
      .image(width / 4 - 150, height / 2, "bitcoinShip")
      .setScale(1.2)
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        // save the user selection to a ship variable and a key variable
        this.ship = this.bitcoinShip;
        this.playerChoice = "bitcoinShip";
      });

    this.liteCoinShip = this.add
      .image(width / 2 - 150, height / 2, "liteCoinShip")
      .setScale(1.2)
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        this.ship = this.liteCoinShip;
        this.playerChoice = "liteCoinShip";
      });

    this.ethereumShip = this.add
      .image((width / 4) * 3 - 150, height / 2, "ethereumShip")
      .setScale(1.2)
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        this.ship = this.ethereumShip;
        this.playerChoice = "ethereumShip";
      });

    this.dogeShip = this.add
      .image(width - 150, height / 2, "dogeShip")
      .setScale(1.2)
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        this.ship = this.dogeShip;
        this.playerChoice = "dogeShip";
      });

    this.add
      .text(width * 0.5, height * 0.1, `Pick your ship and ready up!`, {
        fontSize: 36,
      })
      .setOrigin(0.5);
  }
  update() {
    this.background.tilePositionY -= 3;
    // reassign scale if another ship has been selected
    this.bitcoinShip.setScale(1.2);
    this.liteCoinShip.setScale(1.2);
    this.ethereumShip.setScale(1.2);
    this.dogeShip.setScale(1.2);

    // if the player made a choice show the ready up button and scale the ship bigger
    if (this.playerChoice) {
      this.ship.setScale(2.5);
      readyButton(this.playerChoice, this, this.ships);
    }
  }
}
