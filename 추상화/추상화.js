function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    
    //사각형 배경
    
    rectMode(CORNER);
    noStroke();
    fill('#f6b855');
    rect(0,0,200,200);
    
    noStroke();
    fill('#f6a55a');
    rect(200,0,200,200);
    
    noStroke();
    fill('#65a1ef');
    rect(200,200,200,200);
    
    noStroke();
    fill('#394bed');
    rect(0,200,200,100);
    
    noStroke();
    fill('#4c95ef');
    rect(0,300,200,100);
    
    
    //노을
    
    noStroke();
    fill('#ff7f50');
    arc(200,200,460,460,radians(180),radians(225));
    
    noStroke();
    fill('#ff6347');
    arc(200,200,400,400,radians(225),radians(270));
    
    noStroke();
    fill('#f26b54');
    arc(200,200,350,350,radians(270),radians(360));
    
    noStroke();
    fill('#f69191');
    triangle(200,200,375,200,200,375);
    
    
    //태양
    
    stroke(0);
    strokeWeight(4);
    fill('#ff4646');
    arc(200,200,200,200,radians(180),radians(270));
    
    stroke(0);
    fill('#ff5050');
    arc(200,200,150,150,radians(270),radians(360));
    
    noStroke();
    fill('#ff6b6b');
    arc(200,200,180,180,radians(0),radians(90));
    
    noStroke();
    fill('#ff6161');
    arc(200,200,230,230,radians(90),radians(180));
    
    stroke(0);
    line(200,100,200,125);
    
    stroke(0);
    line(100,200,275,200);
    
    
    //외부테두리
    
    rectMode(CENTER);
    strokeWeight(6);
    noFill();
    rect(200,200,394,394);
    
    
  }