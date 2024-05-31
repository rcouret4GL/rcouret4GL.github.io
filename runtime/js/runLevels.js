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
 
    
createObstacle(800,550)

function createObstacle (x,y) {
  var hitZoneSize = 25;
  var damageFromObstacle = 10;
  var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
  sawBladeHitZone.x = x;
  sawBladeHitZone.y = y;
  game.addGameItem(sawBladeHitZone);

  var obstacleImage2 = draw.bitmap("img/runtimeBeach/urchin.png");
sawBladeHitZone.addChild(obstacleImage2);
obstacleImage2.y = -hitZoneSize-40
obstacleImage2.x = -hitZoneSize-50
obstacleImage2.scaleX = 0.3
obstacleImage2.scaleY = 0.3




var enemy = game.createGameItem("enemy", 25);
var redSquare = draw.bitmap("img/runtimeBeach/crabEnemy.png");
redSquare.x = -100;
redSquare.y = -30;

redSquare.scaleX = 0.3
redSquare.scaleY = 0.3



enemy.addChild(redSquare);

enemy.velocityX = -15
enemy.rotationalVelocity = 15
enemy.x = 2000;
enemy.y = groundY - 50;

game.addGameItem(enemy);
}


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