import Main from "../Main";

export default function preloadAssets(scene) {
  scene.load.audio("audioSound", "assets/bgm.mp3");
  scene.load.audio("moon", "assets/moon.png");
  scene.load.audio("laserSound", "assets/laser-sound.mp3");
  scene.load.audio("coinSound", "assets/coin.wav");
  scene.load.audio("explosionSound", "assets/explosion.wav");
  scene.load.image("enemy", "assets/alienspaceship.png");
  scene.load.image("enemyshooter", "assets/elon.png");
  scene.load.image("enemylaser", "assets/enemylaser.png");
  scene.load.image("asteroid", "assets/Asteroid.png");
  scene.load.image("maximumFlurryIcon", "assets/hodl.png");
  scene.load.image("background", "assets/starfield.png");
  scene.load.image("background", "assets/starfield.png");
  scene.load.image("bitcoinShip", "assets/bitcoin_fighter.png");
  scene.load.image("liteCoinShip", "assets/lite_fighter.png");
  scene.load.image("ethereumShip", "assets/ethereum_fighter.png");
  scene.load.image("dogeShip", "assets/doge_fighter.png");
  scene.load.image("laser", "assets/laser.png");
  scene.load.image("bitcoin", "assets/btc.png");
  scene.load.image("ethereum", "assets/eth.png");
  scene.load.image("litecoin", "assets/lite.png");
  scene.load.image("dogecoin", "assets/doge.png");
  scene.load.image("burger", "assets/SpaceBurger.png");
  scene.load.image("moon", "assets/moon.png");
  scene.load.spritesheet("explosion", "assets/explosion.png", {
    frameWidth: 32,
    frameHeight: 32,
  });
  scene.load.spritesheet("sparkle", "assets/sparkle.png", {
    frameWidth: 32,
    frameHeight: 32,
  });
  scene.load.image("doubleShoot", "assets/doubleshot.png");
  scene.load.image("healthIcon", "assets/heart.png");
  scene.load.image("invincibilityIcon", "assets/WSB.png");
  scene.load.audio("invincibleSound", "assets/invincible.mp3");
  let width = scene.cameras.main.width;
  let height = scene.cameras.main.height;
  let progressBar = scene.add.graphics({ x: 105, y: 175 });
  let progressBox = scene.add.graphics({ x: 105, y: 175 });
  progressBox.fillStyle(0x222222, 0.8);
  progressBox.fillRect(240, 270, 320, 50);
  let loadText = scene.make.text({
    x: width / 2,
    y: height / 2,
    text: "Loading...",
    style: {
      font: "30px",
    },
  });

  loadText.setOrigin(0.5, 0.5);
  scene.load.on("progress", function (value) {
    progressBar.clear();
    progressBar.fillStyle(0xffffff, 1);
    progressBar.fillRect(250, 280, 300 * value, 30);
  });

  scene.load.on("fileprogress", function () {});
  scene.load.on("complete", function () {
    progressBar.destroy();
    progressBox.destroy();
  });
}
