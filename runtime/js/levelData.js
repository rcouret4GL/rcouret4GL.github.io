var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 0,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 2300, y: groundY -10},
          { type: "sawblade", x: 2500, y: groundY },
          { type: "reward", x: 3800, y: groundY -40 },
          { type: "reward", x: 6000, y: groundY -40 },


          { type: "enemy", x: 4000, y: groundY -40},
          { type: "sawblade", x: 2800, y: groundY },
          { type: "sawblade", x: 3500, y: groundY },
          { type: "sawblade", x: 3800, y: groundY },
          { type: "sawblade", x: 5000, y: groundY },
          { type: "sawblade", x: 7000, y: groundY },
          { type: "marker", x: 4000, y: groundY },

          { type: "enemy", x: 8000, y: groundY -40},

          { type: "enemy", x: 12000, y: groundY -40},

          { type: "enemy", x: 20000, y: groundY -40},

          { type: "enemy", x: 30000, y: groundY -40},
          
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "enemy", x: 400, y: groundY },
          { type: "sawblade", x: 600, y: groundY },
          { type: "enemy", x: 900, y: groundY },
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
