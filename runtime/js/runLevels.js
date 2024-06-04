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
    game.setDebugMode(false);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
 
    


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

}



function createEnemy (x,y) {

  

var enemy = game.createGameItem("enemy", 25);
var redSquare = draw.bitmap("img/runtimeBeach/crabEnemy.png");
redSquare.x = -100;
redSquare.y = -30;


enemy.onPlayerCollision = function () {game.changeIntegrity(-10)}

enemy.onProjectileCollision = function () {game.increaseScore(100);
  enemy.shrink();}

redSquare.scaleX = 0.3
redSquare.scaleY = 0.3



enemy.addChild(redSquare);

enemy.velocityX = -15
enemy.rotationalVelocity = 15
enemy.x = x;
enemy.y = y;

game.addGameItem(enemy);

}

function createReward (x,y) {

var reward = game.createGameItem("reward", 25);
var rewards = draw.bitmap("img/runtimeBeach/sandDollar.png");
rewards.x = -20;
rewards.y = -30;


reward.onPlayerCollision = function () {game.increaseScore(100); reward.shrink()}

reward.onProjectileCollision = function () {game.increaseScore(100);
  reward.shrink();}

rewards.scaleX = 0.1
rewards.scaleY = 0.1



reward.addChild(rewards);

reward.velocityX = -10
reward.x = 2500;
reward.y = groundY - 50;

reward.x = x
reward.y = y

game.addGameItem(reward);
}


function createMarker (x,y) {

  var reward = game.createGameItem("marker", 25);
  var rewards = draw.bitmap("img/runtimeBeach/finish.png");
  rewards.x = -20;
  rewards.y = -350;
  
  reward.onPlayerCollision = function () {startLevel(); reward.shrink()}
  
  reward.onProjectileCollision = function () {startLevel();
    reward.shrink();}
  
  rewards.scaleX = 0.3
  rewards.scaleY = 0.3
  
  
  
  reward.addChild(rewards);
  
  reward.velocityX = -1
  reward.x = x;
  reward.y = y;
  
  game.addGameItem(reward);
  }





    function startLevel() {
      // TODO 13 goes below here
var levelgit add .
console.log(currentLevel)
level = levelData[currentLevel]
currentLevel = currentLevel+1

var levelObjects = level.gameItems

for (i = 0; i <= levelObjects.length; i++) {
  if (levelObjects[i].type === "sawblade") {
createObstacle(levelObjects[i].x,levelObjects[i].y)
  }
  if (levelObjects[i].type === "enemy") {
   createEnemy(levelObjects[i].x,levelObjects[i].y)
  }
  if (levelObjects[i].type === "marker") {
    createMarker(levelObjects[i].x,levelObjects[i].y)
   }

   if (levelObjects[i].type === "reward") {
    createReward(levelObjects[i].x,levelObjects[i].y)
   }
 
}


      


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
