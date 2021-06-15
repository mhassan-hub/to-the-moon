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

    const bitcoinShipOutline = this.add
      .image(width / 4 - 150, height / 2, "bitcoinShip")
      .setScale(2.7)
      .setOrigin(0.5)
      .setTintFill("0xffc400")
      .setVisible(false);

    const ethereumShipOutline = this.add
      .image((width / 4) * 3 - 150, height / 2, "ethereumShip")
      .setScale(2.7)
      .setOrigin(0.5)
      .setTintFill("0xffc400")
      .setVisible(false);

    const litecoinShipOutline = this.add
      .image(width / 2 - 150, height / 2, "liteCoinShip")
      .setScale(2.7)
      .setOrigin(0.5)
      .setTintFill("0xffc400")
      .setVisible(false);

    const dogeShipOutline = this.add
      .image(width - 150, height / 2, "dogeShip")
      .setScale(2.7)
      .setOrigin(0.5)
      .setTintFill("0xffc400")
      .setVisible(false);

    const bitcoinShip = this.add
      .image(width / 4 - 150, height / 2, "bitcoinShip")
      .setScale(1.2)
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true })
      .on("pointerover", () => {
        ethereumShip.setScale(1.2);
        bitcoinShip.setScale(2.5);
        liteCoinShip.setScale(1.2);
        dogeShip.setScale(1.2);
      })
      .on("pointerdown", () => {
        // save the user selection to a ship variable and a key variable

        bitcoinShipOutline.setVisible(true);
        litecoinShipOutline.setVisible(false);
        ethereumShipOutline.setVisible(false);
        dogeShipOutline.setVisible(false);

        this.ship = bitcoinShip;
        this.playerChoice = "bitcoinShip";
        liteCoinShip.setScale(1.2);
        ethereumShip.setScale(1.2);
        dogeShip.setScale(1.2);
      });

    const liteCoinShip = this.add
      .image(width / 2 - 150, height / 2, "liteCoinShip")
      .setScale(1.2)
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true })
      .on("pointerover", () => {
        ethereumShip.setScale(1.2);
        bitcoinShip.setScale(1.2);
        liteCoinShip.setScale(2.5);
        dogeShip.setScale(1.2);
      })
      .on("pointerdown", () => {
        bitcoinShipOutline.setVisible(false);
        ethereumShipOutline.setVisible(false);
        dogeShipOutline.setVisible(false);
        litecoinShipOutline.setVisible(true);
        this.ship = liteCoinShip;
        this.playerChoice = "liteCoinShip";
        bitcoinShip.setScale(1.2);
        ethereumShip.setScale(1.2);
        dogeShip.setScale(1.2);
      });

    const ethereumShip = this.add
      .image((width / 4) * 3 - 150, height / 2, "ethereumShip")
      .setScale(1.2)
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true })
      .on("pointerover", () => {
        ethereumShip.setScale(2.5);
        bitcoinShip.setScale(1.2);
        liteCoinShip.setScale(1.2);
        dogeShip.setScale(1.2);
      })
      .on("pointerdown", () => {
        bitcoinShipOutline.setVisible(false);
        dogeShipOutline.setVisible(false);
        litecoinShipOutline.setVisible(false);
        ethereumShipOutline.setVisible(true);
        this.ship = ethereumShip;
        this.playerChoice = "ethereumShip";
      });

    const dogeShip = this.add
      .image(width - 150, height / 2, "dogeShip")
      .setScale(1.2)
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true })
      .on("pointerover", () => {
        dogeShip.setScale(2.5);
        bitcoinShip.setScale(1.2);
        liteCoinShip.setScale(1.2);
        ethereumShip.setScale(1.2);
      })
      .on("pointerdown", () => {
        bitcoinShipOutline.setVisible(false);
        ethereumShipOutline.setVisible(false);
        litecoinShipOutline.setVisible(false);
        dogeShipOutline.setVisible(true);
        this.ship = dogeShip;
        this.playerChoice = "dogeShip";
      });

    this.add
      .text(width * 0.5, height * 0.1, `Pick your ship and ready up!`, {
        fontSize: 36,
      })
      .setOrigin(0.5);

    switch (this.playerChoice) {
      case "bitcoinShip":
        bitcoinShip.setScale(2.5);
        liteCoinShip.setScale(1.2);
        ethereumShip.setScale(1.2);
        dogeShip.setScale(1.2);
        break;
      case "liteCoinShip":
        liteCoinShip.setScale(2.5);
        bitcoinShip.setScale(1.2);
        ethereumShip.setScale(1.2);
        dogeShip.setScale(1.2);
        break;
      case "ethereumShip":
        ethereumShip.setScale(2.5);
        bitcoinShip.setScale(1.2);
        liteCoinShip.setScale(1.2);
        dogeShip.setScale(1.2);
        break;
      case "dogeShip":
        dogeShip.setScale(2.5);
        bitcoinShip.setScale(1.2);
        liteCoinShip.setScale(1.2);
        ethereumShip.setScale(1.2);
        break;
      default:
    }
  }

  update() {
    this.background.tilePositionY -= 3;

    // if the player made a choice show the ready up button and scale the ship bigger
    if (this.playerChoice) {
      this.ship.setScale(2.5);
      readyButton(this.playerChoice, this);
    }
  }
}
