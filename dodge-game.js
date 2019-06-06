var px = 200;
var py;
var pxSpeed = 0;
var e1x;
var e1y = 0;
var e1ySpeed = 3;
var e2x;
var e2y = 0;
var e2ySpeed = 3;
var e3x;
var e3y = 0;
var e3ySpeed = 3;
var e4x;
var e4y = 0;
var e4ySpeed = 3;
var e5x;
var e5y = 0;
var e5ySpeed = 3;
var e6x;
var e6y = 0;
var e6ySpeed = 3;
var e7x;
var e7y = 0;
var e7ySpeed = 3;
var e8x;
var e8y = 0;
var e8ySpeed = 3;
var e9x;
var e9y = 0;
var e9ySpeed = 3;
var e10x;
var e10y = 0;
var e10ySpeed = 3;
var scoreCount = 0;
var score;
var lifeCount = 3;

function setup() {
  createCanvas(1430, 778);
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

  if(frameCount >= 168) {
      rect(e6x, e6y, 50, 50);
  }

    if(frameCount >= 196) {
        rect(e7x, e7y, 50, 50);
    }

    if(frameCount >= 224) {
        rect(e8x, e8y, 50, 50);
    }

    if(frameCount >= 252) {
        rect(e9x, e9y, 50, 50);
    }

    if(frameCount >= 280) {
        rect(e10x, e10y, 50, 50);
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

  if(frameCount >= 168) {
      e6y += e6ySpeed;
  }

  if(frameCount >= 196) {
      e7y += e7ySpeed;
  }

  if(frameCount >= 224) {
      e8y += e8ySpeed;
  }

  if(frameCount >= 252) {
      e9y += e9ySpeed;
  }

  if(frameCount >= 280) {
      e10y += e10ySpeed;
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

    if(e6y > height) {
        e6y = 0;
        e6x = random(25, width-25);
        scoreCount++
    }

    if(e7y > height) {
        e7y = 0;
        e7x = random(25, width-25);
        scoreCount++
    }

    if(e8y > height) {
        e8y = 0;
        e8x = random(25, width-25);
        scoreCount++
    }

    if(e9y > height) {
        e9y = 0;
        e9x = random(25, width-25);
        scoreCount++
    }

    if(e10y > height) {
        e10y = 0;
        e10x = random(25, width-25);
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
      e6ySpeed = 0;
      e7ySpeed = 0;
      e8ySpeed = 0;
      e9ySpeed = 0;
      e10ySpeed = 0;
    
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
      e6ySpeed = 0;
      e7ySpeed = 0;
      e8ySpeed = 0;
      e9ySpeed = 0;
      e10ySpeed = 0;
    
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
      e6ySpeed = 0;
      e7ySpeed = 0;
      e8ySpeed = 0;
      e9ySpeed = 0;
      e10ySpeed = 0;
    
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
      e6ySpeed = 0;
      e7ySpeed = 0;
      e8ySpeed = 0;
      e9ySpeed = 0;
      e10ySpeed = 0;
    
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
      e6ySpeed = 0;
      e7ySpeed = 0;
      e8ySpeed = 0;
      e9ySpeed = 0;
      e10ySpeed = 0;
    
    textAlign(CENTER);
    textSize(75);
    text('YOU LOST', width/2, height/2);
  }
    if(abs(px-e6x) <= 50 && abs(py-e6y) <= 50) {
        pxSpeed = 0;
        e1ySpeed = 0;
        e2ySpeed = 0;
        e3ySpeed = 0;
        e4ySpeed = 0;
        e5ySpeed = 0;
        e6ySpeed = 0;
        e7ySpeed = 0;
        e8ySpeed = 0;
        e9ySpeed = 0;
        e10ySpeed = 0;

        textAlign(CENTER);
        textSize(75);
        text('YOU LOST', width/2, height/2);
    }
    if(abs(px-e7x) <= 50 && abs(py-e7y) <= 50) {
        pxSpeed = 0;
        e1ySpeed = 0;
        e2ySpeed = 0;
        e3ySpeed = 0;
        e4ySpeed = 0;
        e5ySpeed = 0;
        e6ySpeed = 0;
        e7ySpeed = 0;
        e8ySpeed = 0;
        e9ySpeed = 0;
        e10ySpeed = 0;

        textAlign(CENTER);
        textSize(75);
        text('YOU LOST', width/2, height/2);
    }
    if(abs(px-e8x) <= 50 && abs(py-e8y) <= 50) {
        pxSpeed = 0;
        e1ySpeed = 0;
        e2ySpeed = 0;
        e3ySpeed = 0;
        e4ySpeed = 0;
        e5ySpeed = 0;
        e6ySpeed = 0;
        e7ySpeed = 0;
        e8ySpeed = 0;
        e9ySpeed = 0;
        e10ySpeed = 0;

        textAlign(CENTER);
        textSize(75);
        text('YOU LOST', width/2, height/2);
    }
    if(abs(px-e9x) <= 50 && abs(py-e9y) <= 50) {
        pxSpeed = 0;
        e1ySpeed = 0;
        e2ySpeed = 0;
        e3ySpeed = 0;
        e4ySpeed = 0;
        e5ySpeed = 0;
        e6ySpeed = 0;
        e7ySpeed = 0;
        e8ySpeed = 0;
        e9ySpeed = 0;
        e10ySpeed = 0;

        textAlign(CENTER);
        textSize(75);
        text('YOU LOST', width/2, height/2);
    }
    if(abs(px-e10x) <= 50 && abs(py-e10y) <= 50) {
        pxSpeed = 0;
        e1ySpeed = 0;
        e2ySpeed = 0;
        e3ySpeed = 0;
        e4ySpeed = 0;
        e5ySpeed = 0;
        e6ySpeed = 0;
        e7ySpeed = 0;
        e8ySpeed = 0;
        e9ySpeed = 0;
        e10ySpeed = 0;

        textAlign(CENTER);
        textSize(75);
        text('YOU LOST', width/2, height/2);
    }
  
  if (px <=0) {
    px = width-3;
  } else if (px >= width) {
    px = 3;
  }
  
  score.html('SCORE: ' + scoreCount);
}