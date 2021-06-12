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

    this.continiuosShot = true;

    setTimeout(() => {
      this.continiuosShot = false;
    }, 8000);
  }
}

export function disableShot() {
  if (!this.disableShot) {

    this.disableShot = true;

    setTimeout(() => {
      this.disableShot = false;
    }, 10000);
  }
}

export function disableMovement() {
  if (!this.disableMovement) {
    console.log("the function runs")
    this.disableMovement = true;

    setTimeout(() => {
      this.disableMovement = false;
    }, 10000);
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
