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
export function setInvincibility() {
  if (!this.invincibility) {
    this.invincibleSound = this.sound.add("invincibleSound", { volume: 0.1 });
    this.invincibility = true;
    this.invincibleSound.play();

    const flash = this.tweens.add({
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

export function increaseLives() {
  this.playerLives++;
  this.playerLifeLabel.text = `Lives: ${this.playerLives}`;
}
