var mario;
var gravity = 9.8 / 30.0;
var backgroundImage;
var marioRight;
var marioLeft;
var marioJumpRight;
var marioJumpLeft;
var marioRunRight;
var marioRunLeft;
var goombaImage;
var groundOffset = 155;
var goombaArray = [];
var numGoombas = 3;
var health = 100;
var score = 0;

class Character {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.ySpeed = 0;
    this.xSpeed = 0;
    this.width = width;
    this.color = "blue";
    this.isGoomba = false;
    this.isJumping = false;
    this.isRight = true;
    this.isRunning = false;
    this.isAlive = true;
    this.targetX = random() * width;
  }

  update() {
    if (this.y + this.width * 0.5 >= (height - groundOffset) && this.ySpeed > 0) {
      this.ySpeed = this.ySpeed * (-0.4);
      this.y = height - this.width * 0.5 - groundOffset;
      this.isJumping = false;
    }
    this.ySpeed += gravity;
    this.y += this.ySpeed;

    if (this.isGoomba == false) {
      this.xSpeed *= 0.8;
    }
    this.x += this.xSpeed;
    
    if (this.x  + this.width <= 0) {
      this.x = width;
    } else if (this.x >= width) {
      this.x = 0;
    }
  }

  moveGoomba() {
    var differenceX = this.targetX - this.x;
    this.xSpeed += differenceX * 0.00009

    if (random() >= 0.98) {
      this.targetX = random() * width;
      this.ySpeed -= 5;
    }

    this.isTouchingMario();
  }

  isTouchingMario() {
    if (mario.x + mario.width >= this.x &&
      mario.x < this.x + this.width &&
      mario.y + mario.width >= this.y &&
      mario.y < this.y + this.width) {

      if (mario.x + mario.width / 2 < this.x + this.width / 2) {
        mario.xSpeed -= 5;
      } else if (mario.x + mario.width / 2 > this.x + this.width / 2) {
        mario.xSpeed += 5;
      }

      if (mario.y - this.y < -30) {
        this.isAlive = false;
        mario.ySpeed -= 10;
        score++;
        mario.isJumping = false;
      } else {
        health -= 5;
      }
    }
  }

  draw() {
    if (this.isGoomba) {
      image(goomba, this.x, this.y, this.width, this.width);

    } else if (mario.isRight && mario.isJumping) {
      image(marioJumpRight, mario.x, mario.y, mario.width, mario.width);
    } else if (mario.isRight == false && mario.isJumping) {
      image(marioJumpLeft, mario.x, mario.y, mario.width, mario.width);
    } else if (mario.isRight && mario.isJumping == false && mario.isRunning == false) {
      image(marioRight, mario.x, mario.y, mario.width, mario.width);
    } else if (mario.isRight == false && mario.isJumping == false && mario.isRunning == false) {
      image(marioLeft, mario.x, mario.y, mario.width, mario.width);
    } else if (mario.isRight && mario.isJumping == false && mario.isRunning) {
      image(marioJumpRight, mario.x, mario.y, mario.width, mario.width)
    } else if (mario.isRight == false && mario.isJumping == false && mario.isRunning) {
      image(marioJumpLeft, mario.x, mario.y, mario.width, mario.width);
    }

    if (mario.xSpeed == 0) {
      mario.isRunning = false;
    }
  }
}

function setup() {
  createCanvas(1430, 830);
   // createCanvas(600, 400);
  mario = new Character(200, 200, 60);
  backgroundImage = loadImage("./mario background.png");
  marioRight = loadImage("./mario standing right.png");
  marioLeft = loadImage("./mario standing left.png");
  marioJumpRight = loadImage("./mario jumping right.png");
  marioJumpLeft = loadImage("./mario jumping left.png");
  goomba = loadImage("./goomba.png");

  for (var i = 0; i < numGoombas; i++) {
    var g = new Character(random(0, width), 500, 60);
    g.isGoomba = true;
    goombaArray.push(g);
  }
}

function draw() {
  background(0, 200, 150);
  image(backgroundImage, 0, 0, width, height)

  stroke(0);
  strokeWeight(2);
  fill(0);
  rect(10, 10, 200, 20);
  fill(255, 0, 0);
  rect(10, 10, health * 2, 20);
  fill(255);
  textAlign(CENTER);
  textSize(13);
  text(health, 10 + health, 45);

  fill(255);
  textSize(20);
  text(score, width - 40, 10, 40, 20);


  if (keyIsDown(LEFT_ARROW)) {
    //move left
    mario.xSpeed -= 1.0;
    mario.isRight = false;
    mario.isRunning = true;
  }

  if (!keyIsDown(LEFT_ARROW) && !keyIsDown(RIGHT_ARROW)) {
    mario.isRunning = false;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    mario.xSpeed += 1.0;
    mario.isRight = true;
    mario.isRunning = true;
  }

  mario.update();
  mario.draw();

  var anyGoombaAlive = false;

  for (var i = 0; i < goombaArray.length; i++) {
    if (goombaArray[i].isAlive) {
      anyGoombaAlive = true;
      goombaArray[i].update();
      goombaArray[i].moveGoomba();
      goombaArray[i].draw();
    }
  }

  if (anyGoombaAlive == false) {
    numGoombas++;
    for (var i = 0; i < numGoombas; i++) {
      var g = new Character(random(0, width), 500, 60);
      g.isGoomba = true;
      goombaArray.push(g);
    }
    
    if (health <= 90) {
      health += 10;
    } else if (health > 90) {
      health = 100;
    }
  }

  if (health <= 0) {
    mario.x = 10;
    mario.xSpeed = 0;
    mario.isJumping = true;
    
    for (var i=0; i<goombaArray.length; i++) {
      goombaArray[i].x = 300;
      goombaArray[i].xSpeed = 0;
    }
    
    background(0);

    fill('white');
    textAlign(LEFT);

    textSize(50);
    text("GAME OVER", 20, height / 2);

    textSize(25);
    text("FINAL SCORE: " + score, 22, height / 2 + 40);
  }
}

function keyPressed() {
  if (key == " ") {
    //JUMP!
    if (mario.isJumping == false) {
      mario.ySpeed -= 10.0;
    }
    mario.isJumping = true;
  }
  mario.isRunning = true;
}