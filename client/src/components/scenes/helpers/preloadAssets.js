export default function preloadAssets(scene) {
  scene.load.audio("audioSound", "assets/bgm.mp3");
  scene.load.audio("laserSound", "assets/laser-sound.mp3");
  scene.load.audio("coinSound", "assets/coin.wav");
  scene.load.audio("explosionSound", "assets/explosion.wav");
  scene.load.image("enemy", "assets/alienspaceship.png");
  scene.load.image("enemyshooter", "assets/alienshooterspaceship.png");
  scene.load.image("enemylaser", "assets/enemylaser.png");
  scene.load.image("asteroid", "assets/Asteroid.png");
  scene.load.image("ship", "assets/fighter.png");
  scene.load.image("background", "assets/starfield.png");
  scene.load.image("laser", "assets/laser.png");
  scene.load.image("bitcoin", "assets/btc.png");
  scene.load.image("burger", "assets/SpaceBurger.png");
  scene.load.spritesheet("explosion", "assets/explosion.png", {
    frameWidth: 32,
    frameHeight: 32,
  });
  scene.load.image("doubleShoot", "assets/doubleshot.png");
  scene.load.image("healthIcon", "assets/heart.png");
  scene.load.image("invincibilityIcon", "assets/star.png");
  scene.load.audio("invincibleSound", "assets/invincible.mp3");
}
