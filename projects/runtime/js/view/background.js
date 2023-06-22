var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
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
        var tree
        var buildings = []
        // TODO (several):
      
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'rgb(145,0,33)');
            background.addChild(backgroundFill);
            
            // TODO 2: - Add a moon and starfield
            var eye = draw.bitmap("img/eye2.png")
            eye.x = 1600;
            eye.y = 50;
            eye.scaleX = 0.2;
            eye.scaleY = 0.2;
            background.addChild(eye);

          

            for (let i = 0; i < 100; i++) 
            {
              
                let dust = draw.circle(1.5,'Gray')

                background.addChild(dust)


                dust.x = Math.random(0)*canvasWidth
                dust.y = Math.random(0)*groundY
                
            }
            
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (let i = 0; i<7; i++) {
                var randomSpace = Math.random(0)*80
                var randomHeight = (Math.random(0)*350)+100;
                var buildingHeight = randomHeight
                var randomWidth = (Math.random(0)*10)+75;
                var building = draw.rect(randomWidth, buildingHeight, "#4c1130", "Black",2.5);
                building.x = (200 * i)+randomSpace;
                building.y = (groundY-buildingHeight);
                background.addChild(building);
                buildings.push(building)

            }
            // TODO 3: Part 1 - Add a tree
            tree = draw.bitmap("img/tree.png");
            tree.x = 200;
            tree.y = groundY-230;
            background.addChild(tree);
            

        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            tree.x = tree.x -3
            
            if (tree.x <= -250) {tree.x = canvasWidth}
            for (let i = 0; i < buildings.length; i++) {
                if (buildings[i] !== null) {
                buildings[i].x --
                if (buildings[i].x <= -75) {buildings[i].x = canvasWidth}
                }
            }
            
            // TODO 4: Part 2 - Parallax
            

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
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
