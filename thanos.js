let humans = [];
let numHumans = 100000;
let count = 10;

function setup() {
  createCanvas(1100, 1100);

  for (let i = 0; i < numHumans; i++) {
    let x = random(width);
    let y = random(height);
    let h = new Human(x, y);
    humans.push(h);
  }
}

function draw() {
  background(0);
  snap();
  count++;

  for (let i = 0; i < humans.length; i++) {
    humans[i].update();
    humans[i].draw();
  }
}

class Human {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 0.5;
  }

  update() {
    if (this.x <= 0) {
      this.x += 2;
    } else if (this.x >= width) {
      this.x -= 2;
    } else {
      this.x += random(-2, 2);
    }

    if (this.y <= 0) {
      this.y += 2;
    } else if (this.y >= height) {
      this.y -= 2;
    }
  }

  draw() {
    fill(255);
    stroke(255);
    ellipse(this.x, this.y, this.r);
  }
}

function snap() {
  if (mouseIsPressed) {
    if (count >= 10) {
      humans.splice(0, humans.length / 2);
      count = 0;
    }
  }
}