export default class Button {
  constructor(x, y, scale, label, scene, callback) {
    const button = scene.add
      .text(x, y, label)
      .setOrigin(0.5)
      .setPadding(10)
      .setScale(scale)
      .setStyle({
        backgroundColor: "#111",
      })
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => callback())
      .on("pointerover", () => button.setStyle({ fill: "#f39c12" }))
      .on("pointerout", () => button.setStyle({ fill: "#FFF" }));
  }
}
