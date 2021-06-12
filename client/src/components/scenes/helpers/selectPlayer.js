
import Button from "./button";
export default function readyButton(choice, playertwo ,scope, callback) {
  new Button(1024 * 0.5, 768 / 1.4, 2.5, "Ready up", scope, () => {
    callback()
    console.log(playertwo)
    scope.scene.start("Main", { player: choice, playertwo: playertwo });
    scope.scene.stop("Lobby");
  });
}
