export function scoreIncreaseAsteroid() {
  this.playerScore += 100;
  this.playerScoreLabel.text = `Score:${this.playerScore}`;
}

export function scoreIncreaseBitcoin() {
  // rp(requestOptions).then(response => {
  //   console.log('API call response:', response);
  // }).catch((err) => {
  //   console.log('API call error:', err.message);
  // });
  this.playerScore += 1000;
  this.playerScoreLabel.text = `Score: ${this.playerScore}`;
}

export function scoreIncreaseLitecoin() {
  this.playerScore += 300;
  this.playerScoreLabel.text = `Score: ${this.playerScore}`;
}
export function scoreIncreaseDogecoin() {
  this.playerScore += 50;
  this.playerScoreLabel.text = `Score: ${this.playerScore}`;
}
export function scoreIncreaseEthereum() {
  this.playerScore += 700;
  this.playerScoreLabel.text = `Score: ${this.playerScore}`;
}
