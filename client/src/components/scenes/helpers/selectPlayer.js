import Button from "./button";
export default function readyButton(choice, scope) {
  new Button(1024 * 0.5, 768 / 1.4, 2.5, "Ready up", scope, () => {
    scope.scene.start("Main", { player: choice });
    scope.scene.stop("Lobby");
  });
}
