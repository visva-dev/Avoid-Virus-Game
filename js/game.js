// Create a new Scene
let gameScene = new Phaser.Scene('Game');
// Set the configuration of the game
let config = {
  type: Phaser.AUTO, // Phaser will use WebGL if available, if not then it will use Canvas
  width: 640,
  height: 360,
  scene: gameScene,
};
// Create a new game, pass the configuration
let game = new Phaser.Game(config);