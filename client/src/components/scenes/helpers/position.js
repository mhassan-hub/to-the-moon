import Phaser from "phaser";

//Function which constantly updates asteroid positions to reset their position if off canvas
export function checkAsteroidPos(asteroids, scene) {
  asteroids.children.iterate(function (asteroid) {
    if (asteroid.y > 800) {
      // resetPos(asteroid);
      scene.time.addEvent({
        delay: 2000,
        callback: resetPos(asteroid),
        callbackScope: scene,
        loop: false,
      });
    }
  });
}

//Function which resets asteroid positions if they are off canvas
export function resetPos(asteroid) {
  asteroid.y = 0;
  let random = Phaser.Math.Between(15, 599);
  asteroid.x = random;
}

export function checkCoinPos(coins, scene) {
  coins.children.iterate(function (coin) {
    if (coin.y > 800) {
      scene.time.addEvent({
        delay: 2000,
        callback: () => {
          coin.destroy();
        },
        callbackScope: scene,
        loop: false,
      });
    }
  });
}

//function which "revives" shooter enemy constantly
export function enemyPos(enemy, scene) {
  if (enemy.y > 800 || enemy.x < 0) {
    // resetPos(enemy);
    scene.time.addEvent({
      delay: 2000,
      callback: resetPos(enemy),
      callbackScope: scene,
      loop: false,
    });
  }
}

//Function which constantly updates enemy positions to reset their position if off canvas
export function checkEnemyPos(enemies, scene) {
  enemies.children.iterate(function (enemy) {
    if (enemy.y > 800) {
      // resetPos(enemy);
      scene.time.addEvent({
        delay: 2000,
        callback: resetPos(enemy),
        callbackScope: scene,
        loop: false,
      });
    }
  });
}
