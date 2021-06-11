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
  // if(this.playerChoice === )
  if (this.playerChoice === "bitcoinShip") {
    console.log(this.playerChoice);
    this.playerScore += 2000;
    this.playerScoreLabel.text = `Score: ${this.playerScore}`;
  } else {
    this.playerScore += 1000;
    this.playerScoreLabel.text = `Score: ${this.playerScore}`;
  }
}

export function scoreIncreaseLitecoin() {
  console.log(this.playerChoice);
  if (this.playerChoice === "liteCoinShip") {
    this.playerScore += 400;
    this.playerScoreLabel.text = `Score: ${this.playerScore}`;
  } else {
    this.playerScore += 200;
    this.playerScoreLabel.text = `Score: ${this.playerScore}`;
  }
}
export function scoreIncreaseDogecoin() {
  if (this.playerChoice === "dogeShip") {
    this.playerScore += 200;
    this.playerScoreLabel.text = `Score: ${this.playerScore}`;
  } else {
    this.playerScore += 100;
    this.playerScoreLabel.text = `Score: ${this.playerScore}`;
  }
}
export function scoreIncreaseEthereum() {
  if (this.playerChoice === "ethereumShip") {
    this.playerScore += 1000;
    this.playerScoreLabel.text = `Score: ${this.playerScore}`;
  } else {
    this.playerScore += 500;
    this.playerScoreLabel.text = `Score: ${this.playerScore}`;
  }
}
