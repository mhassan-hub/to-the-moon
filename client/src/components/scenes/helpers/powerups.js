// const rp = require('request-promise');
// export const requestOptions = {
//   method: 'GET',
//   uri: process.env.URL,
//   qs: {
//     'start': '1',
//     'limit': '5000',
//     'convert': 'USD'
//   },
//   headers: {
//     'X-CMC_PRO_API_KEY': process.env.X_CMC_PRO_API_KEY
//   },
//   json: true,
//   gzip: true
// };
import Phaser from "phaser";
export function setInvincibility() {
  if (!this.invincibility) {
    this.invincibleSound = this.sound.add("invincibleSound", { volume: 0.1 });
    this.invincibility = true;
    this.invincibleSound.play();

    this.tweens.add({
      targets: this.player,
      alpha: 0,
      ease: "Cubic.easeOut",
      duration: 40,
      repeat: 100,
      yoyo: true,
    });

    setTimeout(() => {
      this.invincibility = false;
      this.invincibleSound.stop();
    }, 8000);
  }
}

export function maximumFlurry() {
  if (!this.continiuosShot) {
    this.invincibleSound = this.sound.add("invincibleSound", { volume: 0.1 });
    this.continiuosShot = true;
    this.invincibleSound.play();

    setTimeout(() => {
      this.continiuosShot = false;
      this.invincibleSound.stop();
    }, 8000);
  }
}

export function increaseLives() {
  this.playerLives++;
  this.playerLifeLabel.text = `Lives: ${this.playerLives}`;
}

export function spawnCoins(coin, coinKey, probability, scene) {
  scene.time.addEvent({
    delay: 1000,
    callback: () => {
      if (Phaser.Math.Between(1, probability) === 1) {
        coin.createMultiple({
          key: coinKey,
          repeat: 1,
          setXY: {
            x: Math.floor(Math.random() * 800),
            y: 0,
            stepX: Phaser.Math.Between(10, 750),
            stepY: Phaser.Math.Between(15, 30),
          },
        });
        coin.setVelocityX(Phaser.Math.Between(-100, 100));
        coin.setVelocityY(Phaser.Math.Between(100, 150));
      }
    },
    callBackScope: scene,
    loop: true,
  });
}
