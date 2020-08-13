var canvas;
var gameState = 0;
var playerCount, database, formObj, player;

function setup(){
  database = firebase.database();
  canvas = createCanvas(500,500);  
  formObj = new Form();
  formObj.display();
}

function draw(){
  drawSprites();
}