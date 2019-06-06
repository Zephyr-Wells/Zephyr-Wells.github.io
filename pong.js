var p1 = {
  x: 25,
  y: 0,
  ySpeed: 15,
  width: 15,
  height: 100,
  score: 0
};

var p2 = {
  x: 0,
  y: 0,
  width: 15,
  height: 100,
  score: 0
};

var ball = {
  x: 300,
  y: 300,
  xSpeed: 10,
  ySpeed: 0,
  r: 20
};

count = 0;

function setup() {
  createCanvas(1430, 846);
  ball.ySpeed = random(-7, 7);
  p1.y = height/2;
  p2.x = width-25;
  p2.y = height/2;
}

function draw() {
  rectMode(CENTER);
  background(0);
  p2.y = mouseY;
  collide();
  score();

  ball.x += ball.xSpeed;
  ball.y += ball.ySpeed;

  rect(p1.x, p1.y, p1.width, p1.height);
  rect(p2.x, p2.y, p2.width, p2.height);
  ellipse(ball.x, ball.y, ball.r);

  if (keyIsPressed) {
    if (key == 'w') {
      p1.y -= p1.ySpeed;
    } else if (key == 's') {
      p1.y += p1.ySpeed;
    }
  }

  textAlign(CENTER);
  textSize(20);
  fill(255);
  text(p1.score, 30, height - 30);
  text(p2.score, width - 30, height - 30);

  stroke(255);
  strokeWeight(3);
  line(width / 2, 0, width / 2, height);
  noStroke();

  textSize(50);
  textAlign(CENTER);
  if (count == 1 || count == 2 || count == 3 || count == 4) {
    text('PING', width / 4, 100);
  }
  if (count == 2 || count == 3 || count == 4) {
    text('PONG', width / 2 + width / 4, 100);
  }
  if (count == 3 || count == 4) {
    text('RALLY', width / 4, height - 100);
  }
  if (count == 4) {
    text('ON', width / 2 + width / 4, height - 100);
  }
}

function collide() {
  if (ball.x <= 40 && ball.y >= p1.y - 50 && ball.y <= p1.y + 50 || ball.x >= width-40 && ball.y >= p2.y - 50 && ball.y <= p2.y + 50) {
    ball.xSpeed *= -1.1;
    ball.ySpeed = random(-7, 7);
    count++;
  }

  if (ball.y <= ball.r || ball.y + ball.r >= height) {
    ball.ySpeed *= -1;
  }
}

function score() {
  if (ball.x <= 0) {
    p2.score++;
    ball.x = width / 2;
    ball.y = height / 2;
    ball.xSpeed = -10;
    ball.ySpeed = 0;
    count = 0;
  } else if (ball.x >= width) {
    p1.score++;
    ball.x = width / 2;
    ball.y = height / 2;
    ball.xSpeed = 10;
    ball.ySpeed = 0;
    count = 0;
  }
}