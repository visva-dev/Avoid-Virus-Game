// Create a new Scene
let gameScene = new Phaser.Scene('Game');

// load assets
gameScene.preload = function(){
  // load images
  this.load.image('background', './assets/background.png');
  this.load.image('player', './assets/player.png');
  this.load.image('enemy', './assets/dragon.png');
};
 
// called once after the preload ends
gameScene.create = function() {
  // create bg sprite
  let bg = this.add.sprite(0, 0, 'background');
 
  // place sprite in the center
  bg.setPosition(640/2, 360/2);
 
  let gameW = this.sys.game.config.width;
  let gameH = this.sys.game.config.height;
  
  let player = this.add.sprite(40, 310, 'player');

  // create an enemy
  let enemy1 = this.add.sprite(150, 80, 'enemy');

  //create a second enemy
  let enemy2 = this.add.sprite(270, 80, 'enemy');
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