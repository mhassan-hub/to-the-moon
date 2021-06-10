import Phaser from "phaser";
import {
  collisionObtain,
  collisionDestroy,
  playerCollisionAction,
} from "./collision";
import {
  scoreIncreaseBitcoin,
  setInvincibility,
  increaseLives,
} from "./powerups";

export default function addPhysics(scene) {
  scene.physics.add.overlap(
    scene.player,
    scene.bitcoins,
    collisionObtain,
    scoreIncreaseBitcoin,
    scene
  );

  scene.physics.add.overlap(
    scene.player,
    scene.ethereum,
    collisionObtain,
    scoreIncreaseBitcoin,
    scene
  );

  scene.physics.add.overlap(
    scene.player,
    scene.litecoins,
    collisionObtain,
    scoreIncreaseBitcoin,
    scene
  );

  scene.physics.add.overlap(
    scene.player,
    scene.dogecoins,
    collisionObtain,
    scoreIncreaseBitcoin,
    scene
  );

  scene.physics.add.overlap(
    scene.player,
    scene.healthIcon,
    collisionObtain,
    increaseLives,
    scene
  );

  scene.physics.add.overlap(
    scene.player,
    scene.invincibilityIcon,
    collisionObtain,
    setInvincibility,
    scene
  );

  //Creates asteroid physics collider between player and asteroids
  scene.physics.add.overlap(
    scene.player,
    scene.asteroids,
    collisionDestroy,
    playerCollisionAction,
    scene
  );

  //Creates physics collider between enemy and player
  scene.physics.add.overlap(
    scene.player,
    scene.enemies,
    collisionDestroy,
    playerCollisionAction,
    scene
  );

  //Creates physics collider between enemy and shooting enemy
  scene.physics.add.overlap(
    scene.player,
    scene.enemy,
    collisionDestroy,
    playerCollisionAction,
    scene
  );
}
