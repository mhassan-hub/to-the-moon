import { collisionDestroy, playerCollisionAction } from "./collision";

// let { width, height } = this.sys.game.canvas;

export function shoot() {
  this.laser = this.physics.add
    .image(this.player.x - 2, this.player.y - 40, "laser")
    .setScale(0.25);

  this.laser.setVelocityY(-900);
  this.laserSound = this.sound.add("laserSound", { volume: 0.1 });
  this.laserSound.play();
  this.physics.add.collider(
    this.laser,
    this.asteroids,
    collisionDestroy,
    scoreIncreaseAsteroid,
    this
  );
  this.physics.add.collider(
    this.laser,
    this.enemies,
    collisionDestroy,
    scoreIncreaseAsteroid,
    this
  );
  this.physics.add.collider(
    this.laser,
    this.enemy,
    collisionDestroy,
    scoreIncreaseAsteroid,
    this
  );
  if (this.laser.y > 800) {
    this.laser.destroy();
  }
}

export function scoreIncreaseAsteroid() {
  this.playerScore += 100;
  this.playerScoreLabel.text = this.playerScore;
}

//Function to shoot down asteroids and enemies.

export function enemyShoot() {
  this.enemyLaser = this.physics.add
    .image(this.enemy.x, this.enemy.y, "enemylaser")
    .setScale(0.25);
  this.enemyLaser.setVelocityY(800);
  this.enemyLaserSound = this.sound.add("laserSound", { volume: 0.1 });
  this.enemyLaserSound.play();
  this.physics.add.collider(
    this.player,
    this.enemyLaser,
    collisionDestroy,
    playerCollisionAction,
    this
  );
}

export function increaseLives() {
  this.playerLives++;
  this.playerLifeLabel.text = this.playerLives;
}