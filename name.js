let input, button, greeting;

function setup() {
  // create canvas
  createCanvas(1440, 846);
	background(0);
  
  inputName = createInput();
  greetingName = createElement('h2', 'What is your name?');
  
  inputFood = createInput();
  greetingFood = createElement('h2', 'What is your favorite food?');
  
  inputName.position(20, 65);
  inputFood.position(20, 150);

  button = createButton('submit');
  button.position(60, 200);
  button.mousePressed(greet);
  
  greetingName.position(20, 5);
  greetingFood.position(20, 90);

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
  
  for (let i = 0; i < 20; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text('Your name is ' + name + ' and you like ' + food + '!', 0, 0);
    pop();
  }
}