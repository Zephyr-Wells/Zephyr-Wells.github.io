let on = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (on) {
    background(255);
  }
  
  if (!on) {
    background(0);
  }
  
  on = !on;
}