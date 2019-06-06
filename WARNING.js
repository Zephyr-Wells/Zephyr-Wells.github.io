var on = false;

function setup() {
  createCanvas(1430, 830);
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