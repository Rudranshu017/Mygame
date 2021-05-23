var gameState = 0;
var player
var playerSelection

function preload() {}
function setup() {
  createCanvas(displayWidth, displayHeight);
}
function draw() {
 
  if(gameState === 0) {
    background("green");
    text("dummy text", 800, 100)
    text("Choose the Player 1,2 or 3", 800, 200)
    text("Press Space To Start The Game", 800, 300)
    if(keyDown("1")) {
      playerSelection = 1
    }
    if(keyDown("2")) {
      playerSelection = 2
    }
    if(keyDown("3")) {
      playerSelection = 3
    }
    if(playerSelection === 1) {
      fill("yellow")
      circle(125, 415, 50)
      player = createSprite(1200, 500, 50, 50)
      player.shapeColor = "red"
    }
    if(playerSelection === 2) {
      fill("yellow")
      circle(485, 415, 50)
      player = createSprite(1200, 500, 50, 50)
      player.shapeColor = "white"
    }
    if(playerSelection === 3) {
      fill("yellow")
      circle(875, 415, 50)
      player = createSprite(1200, 500, 50, 50)
      player.shapeColor = "black"
    }
    if(keyDown("4")) {
      console.log("label 2")
      gameState = 1
    }
  }
   if(gameState === 1) {
     background("orange")
   }
  drawSprites();
}
