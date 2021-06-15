import Phaser from "phaser";
import playerTwo from "../Main"
import { setInvincibility, increaseLives, maximumFlurry, disableShot, disableMovement } from "./powerups";

export function collisionDestroy(collisionObject, asteroid) {
  const respawnTimer = 1000;
  const explosion = this.add
    .sprite(asteroid.x, asteroid.y, "explosion")
    .setScale(5);
  explosion.play("explode");
  asteroid.disableBody(true, true);

  if (Phaser.Math.Between(1, 30) === 1) {
    this.healthIcon = this.physics.add
      .sprite(asteroid.x, asteroid.y, "healthIcon")
      .setScale(1);
    this.physics.add.overlap(
      this.player,
      this.healthIcon,
      collisionObtainPowerUp,
      increaseLives,
      this
    );
  }
  if (Phaser.Math.Between(51, 80) === 51) {
    this.invincibilityIcon = this.physics.add
      .image(asteroid.x, asteroid.y, "invincibilityIcon")
      .setScale(0.5);

    this.physics.add.overlap(
      this.player,
      this.invincibilityIcon,
      collisionObtainPowerUp,
      setInvincibility,
      this
    );
  }
  if (Phaser.Math.Between(151, 180) === 151) {
    this.maximumFlurryIcon = this.physics.add.image(
      asteroid.x,
      asteroid.y,
      "maximumFlurryIcon"
    );

    this.physics.add.overlap(
      this.player,
      this.maximumFlurryIcon,
      collisionObtainPowerUp,
      maximumFlurry,
      this
    );
  }
  if (Phaser.Math.Between(181, 200) === 181) {
    this.disableShotIcon = this.physics.add.image(
      asteroid.x,
      asteroid.y,
      "disableShotIcon"
    );

    this.physics.add.overlap(
      this.player,
      this.disableShotIcon,
      collisionObtainDebuff,
      disableShot,
      this
    );
    }
    if (Phaser.Math.Between(201, 220) === 201) {
      this.disableMovementIcon = this.physics.add.image(
        asteroid.x,
        asteroid.y,
        "disableMovementIcon"
      );
  
      this.physics.add.overlap(
        this.player,
        this.disableMovementIcon,
        collisionObtainDebuff,
        disableMovement,
        this
      );
      }
    
  
  this.explosionSound = this.sound.add("explosionSound", { volume: 0.1 });
  this.explosionSound.play();

  const checkPlayerInvinc =
    collisionObject === this.player && this.invincibility;

  if (!checkPlayerInvinc || collisionObject === this.laser) {
    collisionObject.disableBody(true, true);
    this.time.delayedCall(
      respawnTimer,
      () => {
        if(collisionObject === this.player) {
        collisionObject.enableBody(true, this.player.x, this.player.y, true, true);
        }
      },
      this
    );
    }
  this.time.delayedCall(
    respawnTimer,
    () => {
      let x = Phaser.Math.Between(0, 580);
      asteroid.enableBody(true, x, 0, true, true);
      let xVel = Phaser.Math.Between(-100, 100);
      let yVel = Phaser.Math.Between(100, 150);
      asteroid.setVelocity(xVel, yVel);
    },
    this
  );
  }

//Function which dictates asteroid velocity after creation/re-enablement
export function setAsteroidCollision(asteroids) {
  asteroids.children.iterate(function (asteroid) {
    let xVel = Phaser.Math.Between(-100, 100);
    let yVel = Phaser.Math.Between(100, 150);
    asteroids.setVelocity(xVel, yVel);
  });
}

//Function which dictates enemy spaceship velocity after creation
export function setEnemyCollision(enemies) {
  enemies.children.iterate(function (enemy) {
    let xVel = Phaser.Math.Between(-100, 100);
    let yVel = Phaser.Math.Between(100, 150);
    enemies.setVelocity(xVel, yVel);
  });
}

//Function which handles game logic surrounding collision and destructions
export function collisionObtainCoin(player, coin) {
  const sparkle = this.add.sprite(player.x, player.y, "sparkle").setScale(1);
  sparkle.play("sparks");
  this.coinSound = this.sound.add("coinSound", { volume: 0.1 });
  this.coinSound.play();
  coin.disableBody(true, true);
}

export function collisionObtainPowerUp(player, powerUp) {
  const sparkle = this.add.sprite(player.x, player.y, "sparkle").setScale(1);
  sparkle.play("itemSparks");
  this.powerUpSound = this.sound.add("powerUpSound", { volume: 0.1 });
  this.powerUpSound.play();

  powerUp.disableBody(true, true);
}

export function collisionObtainDebuff(player, powerUp) {
  const sparkle = this.add.sprite(player.x, player.y, "sparkle").setScale(1);
  sparkle.play("itemSparks");
  this.debuff = this.sound.add("debuff", { volume: 0.1 });
  this.debuff.play();

  powerUp.disableBody(true, true);
}

export function playerCollisionAction() {
  if (!this.invincibility) {
    this.playerLives--;
    this.playerLifeLabel.text = `Lives: ${this.playerLives}`;
  }
  if (this.invincibility) {
    this.playerScore += 50;
    this.playerScoreLabel.text = `Score:${this.playerScore}`;
  }
}

export function collectPower() {
  console.log("pick up")
}

export function respawn() {
  // this.invincibleSound = this.sound.add("invincibleSound", { volume: 0.1 });
  this.invincibility = true;
  // this.invincibleSound.play();

  const flash = this.tweens.add({
    targets: this.player,
    alpha: 0,
    ease: "Cubic.easeOut",
    duration: 20,
    repeat: 25,
    yoyo: true,
  });

  setTimeout(() => {
    this.invincibility = false;
    this.invincibleSound.stop();
  }, 1000);
}
