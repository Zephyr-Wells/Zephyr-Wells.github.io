let px = 200;
let py;
let pxSpeed = 0;
let e1x;
let e1y = 0;
let e1ySpeed = 3;
let e2x;
let e2y = 0;
let e2ySpeed = 3;
let e3x;
let e3y = 0;
let e3ySpeed = 3;
let e4x;
let e4y = 0;
let e4ySpeed = 3;
let e5x;
let e5y = 0;
let e5ySpeed = 3;
let scoreCount = 0;
let score;
let lifeCount = 3;

function setup() {
  createCanvas(400, 400);
  e1x = random(0, width);
  e2x = random(0, width);
  e3x = random(0, width);
  e4x = random(0, width);
  e5x = random(0, width);
  py = height - 25;
  score = createElement('h2', 'SCORE: ' + scoreCount);
}

function draw() {
  background('lightblue');
  
  rectMode(CENTER);
  
  fill('green');
  rect(px, py, 50, 50);
  
  fill('red');
  if(frameCount >= 28) {
  rect(e1x, e1y, 50, 50);
  }
  
  if(frameCount >= 56) {
  rect(e2x, e2y, 50, 50);
  }
  
  if(frameCount >= 84) {
  rect(e3x, e3y, 50, 50);
  }
  if(frameCount >= 112) {
  rect(e4x, e4y, 50, 50);
  }
  
  if(frameCount >= 140) {
  rect(e5x, e5y, 50, 50);
  }
  
  
  if(frameCount >= 28) {
  e1y += e1ySpeed;
  }
  
  if(frameCount >= 56) {
  e2y += e2ySpeed;
  }
  
  if(frameCount >= 84) {
  e3y += e3ySpeed;
  }
  
  if(frameCount >= 112) {
  e4y += e4ySpeed;
  }
  
  if(frameCount >= 140) {
  e5y += e5ySpeed;
  }
  
  px += pxSpeed;
  
  if(keyCode == RIGHT_ARROW) {
    pxSpeed = 2;
  } else if(keyCode == LEFT_ARROW) {
    pxSpeed = -2;
  }
  
  
  if(e1y > height) {
    e1y = 0;
    e1x = random(25, width-25);
    scoreCount++
  }
  
  if(e2y > height) {
    e2y = 0;
    e2x = random(25, width-25);
    scoreCount++
  }
  
  if(e3y > height) {
    e3y = 0;
    e3x = random(25, width-25);
    scoreCount++
  }
  
  if(e4y > height) {
    e4y = 0;
    e4x = random(25, width-25);
    scoreCount++
  }
  
  if(e5y > height) {
    e5y = 0;
    e5x = random(25, width-25);
    scoreCount++
  }
  
  fill('black');
  
  if(abs(px-e1x) <= 50 && abs(py-e1y) <= 50) {
    pxSpeed = 0;
    e1ySpeed = 0;
    e2ySpeed = 0;
    e3ySpeed = 0;
    e4ySpeed = 0;
    e5ySpeed = 0;
    
    textAlign(CENTER);
    textSize(75);
    text('YOU LOST', 200, 200);
  }
  if(abs(px-e2x) <= 50 && abs(py-e2y) <= 50) {
    pxSpeed = 0;
    e1ySpeed = 0;
    e2ySpeed = 0;
    e3ySpeed = 0;
    e4ySpeed = 0;
    e5ySpeed = 0;
    
    textAlign(CENTER);
    textSize(75);
    text('YOU LOST', 200, 200);
  }
  if(abs(px-e3x) <= 50 && abs(py-e3y) <= 50) {
    pxSpeed = 0;
    e1ySpeed = 0;
    e2ySpeed = 0;
    e3ySpeed = 0;
    e4ySpeed = 0;
    e5ySpeed = 0;
    
    textAlign(CENTER);
    textSize(75);
    text('YOU LOST', 200, 200);
  }
  if(abs(px-e4x) <= 50 && abs(py-e4y) <= 50) {
    pxSpeed = 0;
    e1ySpeed = 0;
    e2ySpeed = 0;
    e3ySpeed = 0;
    e4ySpeed = 0;
    e5ySpeed = 0;
    
    textAlign(CENTER);
    textSize(75);
    text('YOU LOST', 200, 200);
  }
  if(abs(px-e5x) <= 50 && abs(py-e5y) <= 50) {
    pxSpeed = 0;
    e1ySpeed = 0;
    e2ySpeed = 0;
    e3ySpeed = 0;
    e4ySpeed = 0;
    e5ySpeed = 0;
    
    textAlign(CENTER);
    textSize(75);
    text('YOU LOST', 200, 200);
  }
  
  if (px <=0) {
    px = width-3;
  } else if (px >= width) {
    px = 0+3;
  }
  
  score.html('SCORE: ' + scoreCount);
}