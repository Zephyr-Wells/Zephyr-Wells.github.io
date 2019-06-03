var seeThru = 500;

function setup() {
  print("hello")
  createCanvas(1430, 830);
}

function draw() {
  background(220);
  textSize(50);
  textAlign(CENTER);
  fill('black');
  text('ZEPHYR PAGE', width/2, height/2);
  fill(220, 220, 220, seeThru);
  rect(0, 0, width, height);
  textSize(10);
  fill('black');
  for (var i=0; i<250; i++) {
    text('ZEPHYR PAGE', random(width), random(height));
  }
  
  seeThru--;
}