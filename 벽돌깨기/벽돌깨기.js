//공
let xPos, xDir;
let yPos, yDir;
let diam;
let speed;

let padX;
let padWidth;

function setup() {
  createCanvas(600, 600);
  speed = 8;
  xPos = width/2;
  xDir = speed;
  yPos = height/2;
  yDir = speed;
  diam = 50;
  
  padWidth = 200;
}

function draw() {
  background(220);
  
  //공
  fill(255, 0, 0);
  ellipse(xPos, yPos, diam, diam);
  xPos = xPos + xDir;
  yPos = yPos + yDir;
  
  //pad
  padX = mouseX - padWidth/2;
  fill('#000000');
  rect(padX, height-20, padWidth, 20);
  
  //공 bouncing
  if ( xPos - diam/2 < 0)  xDir = xDir * -1; 
  if ( xPos + diam/2 > width)  xDir *= -1;

  if ( yPos - diam/2 < 0)  yDir *= -1; 
  if ( yPos + diam/2 > height)  yDir *= -1;
  
  if ( xPos > padX && xPos < padX + padWidth && yPos > height - 30 - diam/2) {
         yDir *= -1;
  }
  
  
}