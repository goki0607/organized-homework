// define array of objects and variables
var circleItems = [];
var squareItems = [];
var quadItems = [];
var mixedItems = []
var xColorMap, mode;

function setup()
{
  createCanvas(640, 480);
  noStroke();
  background(255);
  // create default mode
  mode = 1;
}

function draw() 
{
  // display all objects that have been created
  displayCircles();
  displayRectangles();
  displayQuads();
  displayMixedItems();
  // map mouseX to greyScale of rect
  xColorMap = map(mouseX, 0, width, 0, 255);
  // create rect for effect
  fill(xColorMap, 10);
  rect(0, 0, width, height);

}

function Item()
{
  // constrcutor
  this.xPos = mouseX;
  this.yPos = mouseY;
  this.diameter = random(30);
  this.xSpeed = random(6);
  this.ySpeed = random(6);
  this.col = color(random(255), random(255), random(255));
  
  // move function, makes the objects move
  this.move = function()
  {
    if (this.xPos > width || this.xPos < 0) 
    {
      this.xSpeed *= -1;
    }
    if (this.yPos > height || this.yPos < 0)
    {
      this.ySpeed *= -1;
    }
    this.xPos += this.xSpeed;
    this.yPos += this.ySpeed;
  };
  
  // creates an ellipse
  this.displayCircle = function()
  {
    fill(this.col);
    ellipse(this.xPos, this.yPos, this.diameter, this.diameter);
  };
  
  // creates a rectangle
  this.displayRectangle = function()
  {
    fill(this.col);
    rect(this.xPos, this.yPos, random(0, 30), random(0, 30));
  };
  
  // creates a quadrilateral
  this.displayQuad = function()
  {
    fill(this.col);
    quad(this.xPos, this.yPos, this.xPos + this.diameter, this.yPos + this.diameter, this.xPos - this.diameter, this.yPos - this.diameter, random(width), random(height));
  }
}

// add new object to list every time mouse is clicked
function mouseClicked()
{
  if (mode == 1)
  {
    circleItems.push(new Item());
  }
  else if (mode == 2)
  {
    squareItems.push(new Item());
  }
  else if (mode == 3)
  {
    quadItems.push(new Item());
  }
  else if (mode == 4)
  {
    mixedItems.push(new Item());
  }
}

// conditionals for when the keys are pressed, removes or changes mode
function keyPressed()
{
  if (keyCode == BACKSPACE)
  {
    if (mode == 1)
    {
      circleItems.pop();
    }
    else if (mode == 2)
    {
      squareItems.pop();
    }
    else if (mode == 3)
    {
      quadItems.pop();
    }
    else if (mode == 4)
    {
      mixedItems.pop();
    }
  }
  else if (key === '1')
  {
    mode = 1;
  }
  else if (key === '2')
  {
    mode = 2;
  }
  else if (key === '3')
  {
    mode = 3;
  }
  else if (key === '4')
  {
    mode = 4;
  }
}

// necessary functions to keep displaying the items
function displayCircles()
{
 for (var i = 0; i < circleItems.length; i++) 
  {
    circleItems[i].move();
    circleItems[i].displayCircle();
  }
}

function displayRectangles()
{
  for (var i = 0; i < squareItems.length; i++) 
  {
    squareItems[i].move();
    squareItems[i].displayRectangle();
  }
}

function displayQuads()
{
  for (var i = 0; i < quadItems.length; i++) 
  {
    quadItems[i].move();
    quadItems[i].displayQuad();
  }
}

function displayMixedItems()
{
  for (var i = 0; i < mixedItems.length; i++)
  {
    mixedItems[i].move();
    mixedItems[i].displayCircle();
    mixedItems[i].displayRectangle();
  }
}
