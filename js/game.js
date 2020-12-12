// create a new scene
let gameScene = new Phaser.Scene('Game');

// initiate scene parameters
gameScene.init = function(){
  // player speed
  this.playerSpeed = 3;

    // enemy speed
    this.enemyMinSpeed = 1;
    this.enemyMaxSpeed = 4.5;
    
    // boundaries
    this.enemyMinY = 80;
    this.enemyMaxY = 280;
};
 
// load assets
gameScene.preload = function(){
  // load images
  this.load.image('background', './assets/background.png');
  this.load.image('player', './assets/player.png');
  this.load.image('enemy', './assets/dragon.png');
  this.load.image('goal', './assets/treasure.png');
};
 
// called once after the preload ends
gameScene.create = function(){
  // create bg sprite
  let bg = this.add.sprite(0, 0, 'background');
  
 
  // change the origin to the top-left corner
  bg.setOrigin(0, 0);
  
  // create the player
  this.player = this.add.sprite(40, this.sys.game.config.height / 2, 'player');
  
  // we are reducing the width by 50%, and we are doubling the height
  this.player.setScale(0.5);
  
  // goal
  this.goal = this.add.sprite(this.sys.game.config.width - 80, this.sys.game.config.height / 2, 'goal');
  this.goal.setScale(0.6);

  // enemy
  this.enemy = this.add.sprite(120, this.sys.game.config.height / 2, 'enemy');
  this.enemy.flipX = true;
  this.enemy.setScale(0.6);
  
  // set enemy speed
  let dir = Math.random() < 0.5 ? 1 : -1;
  let speed = this.enemyMinSpeed + Math.random() * (this.enemyMaxSpeed - this.enemyMinSpeed);
  this.enemy.speed = dir * speed;
};

// this is called up to 60 times per second
gameScene.update = function(){
  
  // check for active input
  if(this.input.activePointer.isDown) {
    // player walks
    this.player.x += this.playerSpeed;
  }
  
  // treasure overlap check
  let playerRect = this.player.getBounds();
  let treasureRect = this.goal.getBounds();
  
  if(Phaser.Geom.Intersects.RectangleToRectangle(playerRect, treasureRect)) {
    console.log('reached goal!');
    
    // restart the Scene
    this.scene.restart();
    return;
  }

    // enemy movement
    this.enemy.y += this.enemy.speed;
  
    // check we haven't passed min or max Y
    let conditionUp = this.enemy.speed < 0 && this.enemy.y <= this.enemyMinY;
    let conditionDown = this.enemy.speed > 0 && this.enemy.y >= this.enemyMaxY;
    
    // if we passed the upper or lower limit, reverse 
    if(conditionUp || conditionDown) {
      this.enemy.speed *= -1;
    }
  
};
 
// set the configuration of the game
let config = {
  type: Phaser.AUTO, // Phaser will use WebGL if available, if not it will use Canvas
  width: 640,
  height: 360,
  scene: gameScene
};
 
// create a new game, pass the configuration
let game = new Phaser.Game(config);