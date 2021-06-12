import Phaser from 'phaser'
export function fighterGenerator(name, scene, key, xval, ) {

  name = scene.physics.add.sprite(
    xval,
    786,
    key
  );
  name.setCollideWorldBounds(true, 1, 1);
  name.setDrag(200, 200);
  name.setVelocityX(Phaser.Math.Between(-100, 100));
  name.setVelocityY(Phaser.Math.Between(100, 150));
}