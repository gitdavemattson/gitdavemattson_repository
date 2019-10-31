var xOne = 90;
var yOne = 200;
var xTwo = 310;
var yTwo = 200;
var xThree = 150;
var yThree = 200;
var xFour = 250;
var yFour = 200;
var xFive = 100;
var yFive = 50;
var sizeText = 20;
var sizeTextChange = 20;
var movementOne;
var movementTwo;
var movementThree;
var movementFour;
var movementFive;


function setup(){
  createCanvas(400, 400);
  movementOne = Math.floor(Math.random() * 10) + 1;
  movementTwo = Math.floor(Math.random() * -10) - 1;
  movementThree = Math.floor(Math.random() * 10) + 1;
  movementFour = Math.floor(Math.random() * -10) - 1;
  movementFive = Math.floor(Math.random() * 10) + 1;
}

function draw(){
  background(256, 100, 256);
  rect(163,200,75,200);
  ellipse(xOne, yOne, 50, 75);
  ellipse(xTwo, yTwo, 50, 75);
  rect(xFive, yFive, 200, 150)
  ellipse(200, 200, 200, 250);
  circle(xThree, yThree, 75);
  circle(xFour, yFour, 75);
  triangle(200, 190, 215, 250, 185, 250);
  line(150, 275, 250, 275);
  stroke(0, 256, 256);
  point(90,200);
  point(310, 200);
  textSize(sizeText);
  text('"DaveMM Basic Shape Boy Ed."', 10, 25);
  text('By: David M. Mattson', 200, 375);

  // horizontal movement loops //
  if(xOne >= 400 || xOne <= 0)
    {
       movementOne *= -1;
    }
      xOne += movementOne;

  if(xTwo >= 400 || xTwo <= 0)
    {
        movementTwo *= -1;
    }
      xTwo += movementTwo;

  // vertical movement Loops //
  if(yThree >= 400 || yThree <= 0)
    {
       movementThree *= -1;
    }
      yThree += movementThree;

  if(yFour >= 400 || yFour <= 0)
    {
        movementFour *= -1;
    }
      yFour += movementFour;

  // diagonal movement loops //
  if(xFive >= 400 || xFive <= 0)
    {
       movementFive *= -1;
    }
      xFive += movementFive;

  if(yFive >= 400 || yFive <= 0)
    {
        movementFive *= -1;
    }
      yFive += movementFive;

  // text size change loops //
  if(sizeText >= 100 || sizeText <= 20)
    {
       sizeTextChange *= -1;
    }
      sizeText += sizeTextChange;



}
