var input, button, greeting;

function setup() {
  // create canvas
  createCanvas(1440, 846);
	background(0);
  
  inputName = createInput();
  greetingName = createElement('h2', 'What is your name?');
  
  inputFood = createInput();
  greetingFood = createElement('h2', 'What is your favorite food?');
  
  inputName.position(100, 100);
  inputFood.position(100, 200);

  button = createButton('submit');
  button.position(100, 250);
  button.mousePressed(greet);
  
  greetingName.position(100, 105);
  greetingFood.position(100, 200);

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  const name = inputName.value();
  const food = inputFood.value();
  greetingName.html('Hello ' + name + '!');
  greetingFood.html('I also like ' + food + '!');
  inputName.value('');
  inputFood.value('');
  
  for (var i = 0; i < 100; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text('Your name is ' + name + ' and you like ' + food + '!', 0, 0);
    pop();
  }
}