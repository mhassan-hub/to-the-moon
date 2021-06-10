import Phaser from "phaser";
import {
  collisionObtain,
  collisionDestroy,
  playerCollisionAction,
} from "./collision";
import { setInvincibility, increaseLives } from "./powerups";
import {
  scoreIncreaseBitcoin,
  scoreIncreaseDogecoin,
  scoreIncreaseEthereum,
  scoreIncreaseLitecoin,
} from "./score";

export default function addPhysics(scene) {
  scene.physics.add.overlap(
    scene.player,
    scene.bitcoin,
    collisionObtain,
    scoreIncreaseBitcoin,
    scene
  );

  scene.physics.add.overlap(
    scene.player,
    scene.ethereum,
    collisionObtain,
    scoreIncreaseEthereum,
    scene
  );

  scene.physics.add.overlap(
    scene.player,
    scene.litecoin,
    collisionObtain,
    scoreIncreaseLitecoin,
    scene
  );

  scene.physics.add.overlap(
    scene.player,
    scene.dogecoin,
    collisionObtain,
    scoreIncreaseDogecoin,
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

  scene.physics.add.overlap(
    scene.player,
    scene.maximumFlurryIcon,
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
