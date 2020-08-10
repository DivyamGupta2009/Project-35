var canvas;
var gameState = 0;
var playerCount, database, form, player;

function setup(){
  database = firebase.database();
  canvas = createCanvas(500,500);  
  form = new Form();
  form.display()
}

function draw(){
  drawSprites();
}