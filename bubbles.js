var bubbles = [];
var numBubbles = 100;
var overlapping

function setup() {
  createCanvas(1440, 846);
  
  for (var i = 0; i < numBubbles; i++) {
    var r = random(20, 60);
    var x = random(r, width-r);
    var y = random(r, height-r);
    var b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}


function draw() {
  background(0);
  for (b of bubbles) {
    b.move();
    b.show();

    overlapping = false;
    for (other of bubbles) {
      if (b != other && b.intersect(other)) {
        overlapping = true;
      }
    }
    if (overlapping == true) {
    b.color = "white";
      b.stroke = "black";
  } else {
    b.color = "black";
    b.stroke = "white";
  }
  }
    
  for (var i = 0; i < bubbles.length; i++) {
    if (dist(bubbles[i].x, bubbles[i].y, mouseX, mouseY) <= bubbles[i].r) {
      if (mouseIsPressed) {
        bubbles.splice(i, 1);
        numBubbles--;
      }
    }
  }

  fill('white');
  noStroke();
  textSize(15);
  textAlign(CENTER);
  text(numBubbles, width - 20, height - 20);

  if (numBubbles == 0) {
    fill('black');
    rect(0, 0, width, height);

    fill(random(255), random(255), random(255));
    textSize(50);
    text("No More Bubbles!", width / 2, height / 2);
  }
}


class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = "black";
    this.stroke = "white";
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
    if (this.contains == true) {
      bubbles.splice(this, 1);
    }

    if (this.x + this.r >= width) {
        this.x -= 2;
    } else if (this.x - this.r <= 0) {
        this.x += 2;
    } else if (this.y + this.r >= height) {
        this.y -= 2;
    } else if (this.y - this.r <= 0) {
        this.y += 2;
    }
  }

  show() {
    fill(this.color);
    strokeWeight(4);
    stroke(this.stroke);
    ellipse(this.x, this.y, this.r * 2);
  }

  intersect(other) {
    var d = dist(this.x, this.y, other.x, other.y);
    if (d <= this.r + other.r) {
      return true;
    } else {
      return false;
    }
  }
}