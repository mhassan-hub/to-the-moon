const rp = require('request-promise');
export const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  qs: {
    'start': '1',
    'limit': '5000',
    'convert': 'USD'
  },
  headers: {
    'X-CMC_PRO_API_KEY': process.env.X_CMC_PRO_API_KEY
  },
  json: true,
  gzip: true
};
export function setInvincibility() {
  if(!this.invincibility) {
  this.invincibleSound = this.sound.add
  ("invincibleSound", { volume: 0.1});
  this.invincibility = true
  this.invincibleSound.play();

  const flash = this.tweens.add({
    targets: this.player,
    alpha: 0,
    ease: 'Cubic.easeOut',  
    duration: 40,
    repeat: 100,
    yoyo: true
  })
  
  setTimeout(()=>{
    this.invincibility = false
    this.invincibleSound.stop()
  }, 8000)
}}

export function scoreIncreaseBitcoin() {
  rp(requestOptions).then(response => {
    console.log('API call response:', response);
  }).catch((err) => {
    console.log('API call error:', err.message);
  });
  this.playerScore += 1000;
  this.playerScoreLabel.text = this.playerScore;
}

export function scoreIncreaseLitecoin() {
  this.playerScore += 300;
  this.playerScoreLabel.text = this.playerScore;
}
export function scoreIncreaseDogecoin() {
  this.playerScore += 50;
  this.playerScoreLabel.text = this.playerScore;
}
export function scoreIncreaseEthereum() {
  this.playerScore += 700;
  this.playerScoreLabel.text = this.playerScore;
}



