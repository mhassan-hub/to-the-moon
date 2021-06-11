import Phaser from "phaser";
import {scoreIncreaseDogecoin} from "./score";
import {collisionObtain} from "./collision";

export function createGroup(name, coinKey, scene) {
  console.log(`here doing ${name}`);
  name = scene.physics.add.group({
    key: coinKey,
    frameQuantity: 1,
    immovable: true,
    setXY: {
      x: Math.floor(Math.random() * 800),
      y: 0,
      stepX: Phaser.Math.Between(10, 750),
      stepY: Phaser.Math.Between(15, 300),
    },
  });
  name.setVelocityX(Phaser.Math.Between(-100, 100));
  name.setVelocityY(Phaser.Math.Between(100, 150));
  scene.physics.add.overlap(
    scene.player,
    scene.dogecoin,
    collisionObtain,
    scoreIncreaseDogecoin,
    scene
  );
}
