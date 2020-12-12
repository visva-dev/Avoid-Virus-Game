// Create a new Scene
let gameScene = new Phaser.Scene('Game');

// load assets
gameScene.preload = function(){
  // load images
  this.load.image('background', './assets/background.png');
  this.load.image('player', './assets/player.png');
};
 
// called once after the preload ends
gameScene.create = function() {
  // create bg sprite
  let bg = this.add.sprite(0, 0, 'background');
 
  // place sprite in the center
  bg.setPosition(640/2, 360/2);
 
  let gameW = this.sys.game.config.width;
  let gameH = this.sys.game.config.height;
  
  let player = this.add.sprite(70, 180, 'player');
};

// Set the configuration of the game
let config = {
  type: Phaser.AUTO, // Phaser will use WebGL if available, if not then it will use Canvas
  width: 640,
  height: 360,
  scene: gameScene,
};
// Create a new game, pass the configuration
let game = new Phaser.Game(config);