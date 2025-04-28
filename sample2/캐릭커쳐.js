function setup() {
  createCanvas(400, 400);
}

function draw() {
background('#f0f0f0');
  
//옷
noStroke();
fill('#4d4c50');
rect(202,360,70,80);
quad(167,325,60,360,60,400,167,400);
quad(235,325,350,360,350,400,235,400);
  
//목
stroke(3);
fill('#ddbcab');
rect(202,290,70,70);
arc(202,324,70,50,radians(0),radians(180));
  
//귀
stroke(3);
fill('#e6cdc1');
arc(140,195,40,50,radians(90),radians(270));
arc(260,200,50,50,radians(270),radians(90));
  
noStroke();
fill('#d8af9d');
ellipse(140,195,25);
ellipse(260,200,30);
  
//얼굴
stroke(3);
fill('#e6cdc1');
arc(200,200,130,180,radians(0),radians(360));
  
//코
stroke(3);
noFill();
triangle(200,200,188,225,212,225);
  
stroke(3);
fill('#000000');
arc(195,225,5,8,radians(180),radians(360));
arc(205,225,5,8,radians(180),radians(360));
  
//입술
let mouthY = 250;
stroke(3);
fill('#dba5a3');
  
if (keyIsPressed && key === 'o') { //윗입술
  line(200,241,195,239);
  line(200,241,205,239);
  line(195,239,180,246);
  line(205,239,220,246);
} else {
  line(200,245,195,243);
  line(200,245,205,243);
  line(195,243,180,250);
  line(205,243,220,250);
}


if (keyIsPressed && key === 'o') { //아랫입술
  arc(200, mouthY + 4, 40, 18, radians(0), radians(180));
  line(180, 246, 220, 246);
  line(180, 255, 220, 255);

  rectMode(CORNER);
  fill('#c37d78');
  rect(180, 246, 40, 9);

  fill('#a96755');
  arc(200, 255, 20, 8, radians(180), radians(360));
} else {
  arc(200, mouthY, 40, 18, radians(0), radians(180));
  line(180, 251, 220, 251);
}
//눈 
stroke(3);
fill('#ffffff');
ellipse(230,185,25,14);
fill('#ffffff');
ellipse(170,185,25,14);

//눈동자
let left_pupilX = constrain(mouseX,165,175);
let left_pupilY = constrain(mouseY,184,186);
let right_pupilX = constrain(mouseX,225,235);
let right_pupilY = constrain(mouseY,184,186);
fill('#000000');
  
if (keyIsPressed && key === 'o') {
  ellipse(170, 185, 8);
  ellipse(230, 185, 8);
} else {
  if (mouseIsPressed) {
    ellipse(left_pupilX, left_pupilY, 10);
    ellipse(right_pupilX, right_pupilY, 10);
  } else {
    ellipse(170, 185, 12);
    ellipse(230, 185, 12);
  }
}
  
  

  
//눈썹     
stroke(3);
rectMode(CENTER);
if (keyIsPressed && key === 'o') { 
  rect(225,155,25,5,5);
  rect(175,155,25,5,5);
} else {
  rect(225,165,25,5,5);
  rect(175,165,25,5,5);
}
  
  
//머리카락
stroke(3);
rect(145,132,60,80,30,15);
rect(255,140,60,75,15,30,15,15);
  
rect(162,98,70,45,30,10);
rect(232,98,70,45,10,30,10,10);

}
function keyPressed() {
  if (key === 'i') {
  saveGif("GIF", 10); 
  }
}
