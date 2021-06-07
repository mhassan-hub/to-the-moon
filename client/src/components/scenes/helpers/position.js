import Phaser from "phaser";

//Function which constantly updates asteroid positions to reset their position if off canvas
export function checkAsteroidPos(asteroids) {
  asteroids.children.iterate(function (asteroid) {
    if (asteroid.y > 800) {
      resetPos(asteroid);
    }
  });
}

//Function which resets asteroid positions if they are off canvas
export function resetPos(asteroid) {
  asteroid.y = 0;
  let random = Phaser.Math.Between(15, 599);
  asteroid.x = random;
}

//function which "revives" shooter enemy constantly
export function enemyPos(enemy) {
  if (enemy.y > 800 || enemy.x < 0) {
    resetPos(enemy);
  }
}

//Function which constantly updates enemy positions to reset their position if off canvas
export function checkEnemyPos(enemies) {
  enemies.children.iterate(function (enemy) {
    if (enemy.y > 800) {
      resetPos(enemy);
    }
  });
}
