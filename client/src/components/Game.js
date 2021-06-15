import React from "react";
import Phaser from "phaser";
import Main from "./scenes/Main";
import Win from "./scenes/Win";
import Lose from "./scenes/Lose";
import Pause from "./scenes/Pause";
import Lobby from "./scenes/Lobby";
import Intro from "./scenes/Intro"
// import {useParams, useHistory} from "react-router-dom";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // const {id} = useParams();
    // const history = useHistory()
    // if(id) {
    //   history.push(`/game/${id}`)
    // }
    const config = {
      scale: {
        parent: document.getElementById("game"),
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      type: Phaser.AUTO,
      backgroundColor: "#000000",
      pixelArt: true,
      fps: {
        target: 30,
      },
      physics: {
        default: "arcade",
      },
      scene: [
        new Intro(this.props),
        new Lobby(this.props),
        new Main(this.props),
        new Win(this.props),
        new Lose(this.props),
        new Pause(this.props),
      ],
    };
    this.game = new Phaser.Game(config);
  }
  render() {
    return (
      <div className="display">
        <div id="game"> </div>
      </div>
    );
  }
}
