var background = function (window) {
    'use strict';

    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;

    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function (app, ground) {
        /* Error Checking - DO NOT DELETE */
        if (!app) {
            throw new Error("Invalid app argument");
        }
        if (!ground || typeof (ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;

        // container which will be returned
        var background;

        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):


        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        var tree = draw.bitmap("img/runtimeBeach/tree.png");
        var building = draw.bitmap("img/runtimeBeach/wave.png")
        var buildings = []
        var sand = draw.bitmap("img/runtimeBeach/sand.jpg")
        var water = draw.bitmap("img/runtimeBeach/water.jpg")
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth, canvasHeight, '#87CEEB');
            background.addChild(backgroundFill);

            // TODO 2: - Add a moon and starfield

            var moon = draw.bitmap("img/runtimeBeach/sun.png");
            moon.x = 900;
            moon.y = 0;
            moon.scaleX = 1.5;
            moon.scaleY = 1.5;
            background.addChild(moon);

           
            sand.x = 0
            sand.y = 520
            sand.scaleX = 1.5
            background.addChild(sand);

            water.x = 0
            water.scaleX = 5
            water.y = 270
            water.scaleY = 0.7
            background.addChild(water)



            for (var i = 1; i <= 100; i++) {
                var circle = draw.circle(1, "white", "yellow", 2);
                circle.x = canvasWidth * Math.random();
                circle.y = groundY * Math.random();
                background.addChild(circle);
            }



            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?

         
            for (var i = 0; i < 5; ++i) {
                var buildingHeight = 300;
                 building = draw.bitmap("img/runtimeBeach/wave.png")
                building.x = 3000 * i;
                building.y = groundY-400;
                background.addChild(building);
                buildings.push(building);
              }

            // TODO 3: Part 1 - Add a tree

            tree.scaleX = 2
            tree.scaleY = 2
            tree.x = 2200;
            tree.y = groundY-400;
            background.addChild(tree);;

        

        } // end of render function - DO NOT DELETE


        // Perform background animation
        // called on each timer "tick" - 60 times per second
       
       
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;

            // TODO 3: Part 2 - Move the tree!
           

            tree.x = tree.x-1
            if (tree.x < -500) {tree.x = 2300}
            
            sand.x = sand.x-0.5
            if (sand.x < -160) {sand.x = 0}
    

            // TODO 4: Part 2 - Parallax
            
            for (var i = 0; i <= buildings.length-1 ; i++) {
                buildings[i].x = buildings[i].x+1
                if (buildings[i].x > 2300) {buildings[i].x = -2300

                }
            }

        } // end of update function - DO NOT DELETE



        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;

        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);

        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
