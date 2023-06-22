var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
  


function createSawBlade(x,y)
{ 
  var hitZoneSize = 25;
  var damageFromObstacle = 10;
  var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);

  sawBladeHitZone.x = x;
sawBladeHitZone.y = y;
game.addGameItem(sawBladeHitZone);

var obstacleImage = draw.bitmap("img/sawblade.png");
obstacleImage.x = -25
obstacleImage.y = -25
sawBladeHitZone.addChild(obstacleImage);

sawBladeHitZone.velocityX = -10

}

    





function createEnemy(x,y) {
  var enemy = game.createGameItem("enemy", 25);
  var redSquare = draw.rect(50, 50, "red");
  redSquare.x = -25;
  redSquare.y = -25;
  enemy.addChild(redSquare);
  
  var eye = draw.bitmap('img/eye2.png')
  eye.x = -25
  eye.y = -25
  eye.scaleX = 0.03;
  eye.scaleY = 0.04;
  
  
  enemy.addChild(eye)
  
  enemy.x = x
  enemy.y = y
  
  enemy.velocityX = -10
  enemy.rotationalVelocity = -0.01
  enemy.velocityY = 1.75
  
  enemy.onPlayerCollision = function () {game.changeIntegrity(-10)};
  
  enemy.onProjectileCollision = function () {game.increaseScore(100);
    enemy.fadeOut();}
  
  game.addGameItem(enemy);

  
}
var timer = 2000
function run () {
  if (timer >= 50) {timer-35}
  var spawnChance = Math.floor(Math.random()*6)
  console.log(spawnChance)
  if (spawnChance == 3) {
  createEnemy(2500,40) }
  else if (spawnChance ==4) {
    var randomThing = Math.floor(Math.random()*2)
    console.log(randomThing)
if (randomThing == 1) {
  createSawBlade(2500,groundY)
}
else {createSawBlade(2500,groundY-120)}
}
}
setInterval(run,timer)

function createMarker () {

  var end = draw.rect(30,30,'Black')
  end.y = groundY
  end.x = 500
  

  }
createMarker()
    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
