export function setInvincibility() {
  this.invincibility = true;
  this.invincibleSound = this.sound.add("invincibleSound", { volume: 0.1 });
  this.invincibleSound.play();
  setTimeout(() => {
    this.invincibility = false;
    this.invincibleSound.stop();
  }, 5000);
}

export function scoreIncreseBitcoin() {
  this.playerScore += 10;
  this.playerScoreLabel.text = this.playerScore;
}
