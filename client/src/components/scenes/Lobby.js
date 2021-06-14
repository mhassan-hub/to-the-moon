import Phaser from "phaser";
import socketIOClient, { io, Socket } from "socket.io-client";
import readyButton from "./helpers/selectPlayer";
const ENDPOINT = "http://127.0.0.1:8080";

export default class Lobby extends Phaser.Scene {
  constructor(props) {
    super("Lobby");

    this.props = props;
    console.log(this.props.socket);
    // console.log("this is our params:", props.match.params)
  }

  preload() {
    // console.log("in the preload:", this.props)
    // this.load.audio("audioSound", "assets/Demon.mp3");
    this.load.image("background", "assets/starfield.png");
    this.load.image("bitcoinShip", "assets/bitcoin_fighter.png");
    this.load.image("liteCoinShip", "assets/lite_fighter.png");
    this.load.image("ethereumShip", "assets/ethereum_fighter.png");
    this.load.image("dogeShip", "assets/doge_fighter.png");
  }

  create() {
    const self = this;
    let { width, height } = this.sys.game.canvas;

    this.add.image(400, 300, "background");
    this.background = this.add
      .tileSprite(0, 0, 0, 0, "background")
      .setOrigin(0);

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
    // const heart = this.add.image(400,400, "heart").setScale(1)
    // Create the initial ships for player selection

    const bitcoinShip = this.add
      .image(width / 4 - 150, height / 2, "bitcoinShip")
      .setScale(1.2)
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true })
      .on("pointerover", () => {
        if (ethereumShip.alpha === 0.1) {
        } else {
          ethereumShip.setScale(1.2);
          bitcoinShip.setScale(2.5);
          liteCoinShip.setScale(1.2);
          dogeShip.setScale(1.2);
        }
      })
      .on("pointerdown", () => {
        // save the user selection to a ship variable and a key variable
        if (bitcoinShip.alpha === 0.1) {
        } else {
          bitcoinShipOutline.setVisible(true);
          litecoinShipOutline.setVisible(false);
          ethereumShipOutline.setVisible(false);
          dogeShipOutline.setVisible(false);
          this.ship = bitcoinShip;
          this.playerChoice = "bitcoinShip";
          this.props.socket.emit("shipchoice", "bitcoinShip");
          liteCoinShip.setScale(1.2);
          ethereumShip.setScale(1.2);
          dogeShip.setScale(1.2);
        }
      });

    const liteCoinShip = this.add
      .image(width / 2 - 150, height / 2, "liteCoinShip")
      .setScale(1.2)
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true })
      .on("pointerover", () => {
        if (liteCoinShip.alpha === 0.1) {
        } else {
          ethereumShip.setScale(1.2);
          bitcoinShip.setScale(1.2);
          liteCoinShip.setScale(2.5);
          dogeShip.setScale(1.2);
        }
      })
      .on("pointerdown", () => {
        if (liteCoinShip.alpha === 0.1) {
        } else {
          bitcoinShipOutline.setVisible(false);
          ethereumShipOutline.setVisible(false);
          dogeShipOutline.setVisible(false);
          litecoinShipOutline.setVisible(true);
          this.ship = liteCoinShip;
          this.playerChoice = "liteCoinShip";
          this.props.socket.emit("shipchoice", "liteCoinShip");
          bitcoinShip.setScale(1.2);
          ethereumShip.setScale(1.2);
          dogeShip.setScale(1.2);
        }
      });

    const ethereumShip = this.add
      .image((width / 4) * 3 - 150, height / 2, "ethereumShip")
      .setScale(1.2)
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true })
      .on("pointerover", () => {
        if (ethereumShip.alpha === 0.1) {
        } else {
          ethereumShip.setScale(2.5);
          bitcoinShip.setScale(1.2);
          liteCoinShip.setScale(1.2);
          dogeShip.setScale(1.2);
        }
      })
      .on("pointerdown", () => {
        if (ethereumShip.alpha === 0.1) {
        } else {
          bitcoinShipOutline.setVisible(false);
          dogeShipOutline.setVisible(false);
          litecoinShipOutline.setVisible(false);
          ethereumShipOutline.setVisible(true);
          this.ship = ethereumShip;
          this.playerChoice = "ethereumShip";
          this.props.socket.emit("shipchoice", "ethereumShip");
          bitcoinShip.setScale(1.2);
          liteCoinShip.setScale(1.2);
          dogeShip.setScale(1.2);
        }
      });

    const dogeShip = this.add
      .image(width - 150, height / 2, "dogeShip")
      .setScale(1.2)
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true })
      .on("pointerover", () => {
        if (dogeShip.alpha === 0.1) {
        } else {
          dogeShip.setScale(2.5);
          bitcoinShip.setScale(1.2);
          liteCoinShip.setScale(1.2);
          ethereumShip.setScale(1.2);
        }
      })
      .on("pointerdown", () => {
        if (dogeShip.alpha === 0.1) {
        } else {
          bitcoinShipOutline.setVisible(false);
          ethereumShipOutline.setVisible(false);
          litecoinShipOutline.setVisible(false);
          dogeShipOutline.setVisible(true);
          this.ship = dogeShip;
          this.playerChoice = "dogeShip";
          this.props.socket.emit("shipchoice", "dogeShip");
          bitcoinShip.setScale(1.2);
          liteCoinShip.setScale(1.2);
          ethereumShip.setScale(1.2);
        }
      });
    const setEnemy = (enemy) => {
      this.playertwo = enemy;
    };
    this.add
      .text(width * 0.5, height * 0.1, `Pick your ship and ready up!`, {
        fontSize: 36,
      })
      .setOrigin(0.5);

    this.props.socket.on("shipchoicepicked", function (data) {
      switch (data) {
        case "bitcoinShip":
          bitcoinShip.setScale(2.5);
          bitcoinShip.alpha = 0.1;
          liteCoinShip.setScale(1.2);
          ethereumShip.setScale(1.2);
          dogeShip.setScale(1.2);
          ethereumShip.alpha = 1;
          liteCoinShip.alpha = 1;
          dogeShip.alpha = 1;
          break;
        case "liteCoinShip":
          liteCoinShip.setScale(2.5);
          liteCoinShip.alpha = 0.1;
          bitcoinShip.setScale(1.2);
          ethereumShip.setScale(1.2);
          dogeShip.setScale(1.2);
          ethereumShip.alpha = 1;
          bitcoinShip.alpha = 1;
          dogeShip.alpha = 1;
          break;
        case "ethereumShip":
          ethereumShip.setScale(2.5);
          ethereumShip.alpha = 0.1;
          bitcoinShip.setScale(1.2);
          liteCoinShip.setScale(1.2);
          dogeShip.setScale(1.2);
          bitcoinShip.alpha = 1;
          liteCoinShip.alpha = 1;
          dogeShip.alpha = 1;
          break;
        case "dogeShip":
          dogeShip.setScale(2.5);
          dogeShip.alpha = 0.1;
          bitcoinShip.setScale(1.2);
          liteCoinShip.setScale(1.2);
          ethereumShip.setScale(1.2);
          ethereumShip.alpha = 1;
          liteCoinShip.alpha = 1;
          bitcoinShip.alpha = 1;
          break;
      }

      self.playertwo = data;
    });
    this.props.socket.on("readyButton", () => {
      this.scene.start("Main", {
        player: this.playerChoice,
        playertwo: self.playertwo,
      });
      this.scene.stop("Lobby");
    });
  }

  update() {
    this.background.tilePositionY -= 3;
    // reassign scale if another ship has been selected
    // bitcoinShip.setScale(1.2);
    // liteCoinShip.setScale(1.2);
    // ethereumShip.setScale(1.2);
    // dogeShip.setScale(1.2);

    // if the player made a choice show the ready up button and scale the ship bigger

    if (this.playerChoice) {
      this.ship.setScale(2.5);
      readyButton(this.playerChoice, "liteCoinShip", this, () => {
        this.props.socket.emit("gamelaunch", "launch game");
      });
    }

    // this.props.socket.on("playerchoicepicked", (data) => {
    // })
  }
}
