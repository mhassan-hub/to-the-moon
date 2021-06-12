import Button from "./button";
export default function readyButton(choice, scope, ships) {
  new Button(1024 * 0.5, 768 / 1.4, 2.5, "Ready up", scope, () => {
    scope.scene.start("Main", { player: choice, ships: ships });
    scope.scene.stop("Lobby");
  });
}
