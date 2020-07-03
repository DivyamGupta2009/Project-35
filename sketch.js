var canvas, backgroundImg;
var gameState = 0;
var playerCount, database, form, player, game;

function setup(){
  database = firebase.database();
  console.log(database);
  canvas = createCanvas(500,500);
game = new Game();
game.getState();
game.start();
  
}

function draw(){
  textSize(13);
  text("What is your nationality?", 100, 200);
  text("Will children be worse off if they don't work?", 100, 230);
  text("What do you think are the reasons of the child labour phenomenan?", 100, 260);
  text("If children don't work, will their families starve?", 100, 310);
  text("Is child labour phenomenan serious in your hometown?", 100, 340);
  text("Will child labour decrease as poor countries develop?", 100, 370);
  text("What kind of industry mostly appear child labouring in your country?", 100, 400);
  drawSprites();
}