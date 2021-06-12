import Phaser from "phaser";
import {
  collisionObtainPowerUp,
  collisionObtainCoin,
  collisionDestroy,
  playerCollisionAction,
} from "./collision";
import { setInvincibility, increaseLives, maximumFlurry, disableShot } from "./powerups";
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
    collisionObtainCoin,
    scoreIncreaseBitcoin,
    scene
  );

  scene.physics.add.overlap(
    scene.player,
    scene.ethereum,
    collisionObtainCoin,
    scoreIncreaseEthereum,
    scene
  );

  scene.physics.add.overlap(
    scene.player,
    scene.litecoin,
    collisionObtainCoin,
    scoreIncreaseLitecoin,
    scene
  );

  scene.physics.add.overlap(
    scene.player,
    scene.dogecoin,
    collisionObtainCoin,
    scoreIncreaseDogecoin,
    scene
  );

  // scene.physics.add.overlap(
  //   scene.player,
  //   scene.healthIcon,
  //   collisionObtainPowerUp,
  //   increaseLives,
  //   scene
  // );

  // scene.physics.add.overlap(
  //   scene.player,
  //   scene.invincibilityIcon,
  //   collisionObtainPowerUp,
  //   setInvincibility,
  //   scene
  // );

  // scene.physics.add.overlap(
  //   scene.player,
  //   scene.maximumFlurryIcon,
  //   collisionObtainPowerUp,
  //   maximumFlurry,
  //   scene
  // );

  // scene.physics.add.overlap(
  //   scene.player,
  //   scene.disableShotIcon,
  //   collisionObtainPowerUp,
  //   disableShot,
  //   scene
  // );

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
