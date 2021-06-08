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

export function scoreIncreaseBitcoin() {
  this.playerScore += 10;
  this.playerScoreLabel.text = `Score:${this.playerScore}`;
}
