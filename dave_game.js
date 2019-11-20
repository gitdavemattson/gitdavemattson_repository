var playerx = 100;
var playery = 300;
var mousex = 0;
var mousey = 0;
var myXs = [];
var myYs = [];
var mySizes = [];
var myReds = [];
var myGreens = [];
var myBlues = [];
var myMovements = [];
var newObstX;
var newObstY;

function setup()
{
  createCanvas(800, 600);
  generateMovements();
  generateArrays();

}

function draw()
{
    // Map Generation //
    background(0, 256, 200);
    generateMap();

    // PLayer //
    createPlayer();
    playerControls();

    // Obstacles //
    generateObstacles();
    moveObstHorizontal(0);
    moveObstVertical(1);
    moveObstAll(2);
    moveObstHorizontal(3);
    moveObstVertical(4);
    moveObstAll(5);
    moveObstHorizontal(6);
    moveObstVertical(7);
    moveObstAll(8);
    moveObstAll(9);
    generateObstClick(256, 256, 0, 100);

    // Exit and Winning Notification //
    youWin();

}


// New Functions for Streamlining //
// Map Generation Funtions //
function generateMap()
{
  fill(0, 200, 256);
  rect(0, 580, 800, 20);
  rect(0, 0, 800, 20);
  rect(0, 0, 20, 600);
  rect(780, 0, 20, 260);
  rect(780, 340, 20, 260);

}

// Player Functions //
function createPlayer ()
{
  fill(150, 0, 256);
  circle(playerx, playery, 30);
}

function playerControls()
{
  if (keyIsDown(83))
  {
    playery += 4;
  }
  else if (keyIsDown(87))
  {
    playery -= 4;
  }

  if (keyIsDown(68))
  {
    playerx += 4;
  }
  else if (keyIsDown(65))
  {
    playerx -= 4;
  }
}

// Array Function //
function generateArrays()
{
  for(var i = 0; i < 10; i++)
  {
      myXs[i] = getRandomX(800);
      myYs[i] = getRandomY(600);
      mySizes[i] = getRandomSize(100);
      myReds[i] = Math.floor(Math.random()*256);
      myGreens[i] = Math.floor(Math.random()*256);
      myBlues[i] = Math.floor(Math.random()*256);

  }

}

// Obstacles + Movements Functions//
function generateObstacles()
{
  for(var i = 0; i < myXs.length; i++)
      {
            fill(myReds[i], myGreens[i], myBlues[i]);
            square(myXs[i], myYs[i], mySizes[i]);
      }

}

function generateMovements()
{
  for(var i = 0; i < 20; i++)
  {
    myMovements[i] = Math.floor(Math.random() * 10) + 1;
  }

}

function moveObstHorizontal(e)
{
  if(myXs[e] >= 800)
    {
        myXs[e] = 0;

  }else if (myXs[e] <= 0)
    {
        myXs[e] = 800;

    }

  if(myYs[e] >= 600 || myYs[e] <= 0)
    {
        myMovements[e+10] *= -1;
    }
      myXs[e] += myMovements[e];
      myYs[e] += myMovements[e+10];

}

function moveObstVertical(e)
{
  if(myYs[e] >= 600)
    {
        myYs[e] = 0;

  }else if (myYs[e] <= 0)
    {
        myYs[e] = 600;

    }

  if(myXs[e] >= 800 || myXs[e] <= 0)
    {
        myMovements[e] *= -1;
    }
      myXs[e] += myMovements[e];
      myYs[e] += myMovements[e+10];

}

function moveObstAll(e)
{
  if(myXs[e] >= 800)
    {
        myXs[e] = 0;

  }else if (myXs[e] <= 0)
    {
        myXs[e] = 800;

      }
  if(myYs[e] >= 600)
    {
        myYs[e] = 0;

  }else if (myYs[e] <= 0)
    {
        myYs[e] = 600;

    }
      myXs[e] += myMovements[e];
      myYs[e] += myMovements[e+10];

}

function generateObstClick(r, g, b, diameter)
{
  fill(r, g, b);
  circle(newObstX, newObstY, diameter);
}

// Win Functions //
function youWin()
{
  if(playerx >= 790 && playery >= 260 && playery <= 340)
  {
    fill(0)
    textSize(60);
    text("You Win!", 300, 330);
  }else{
    fill(0)
    textSize(10);
    text("Game in progres...", 20, 30);
  }
}

// Mouse Functions //
function mouseClicked()
{
    newObstX = mouseX;
    newObstY = mouseY;
}

function mouseMoved()
{
  mousex = mouseX;
  mousey = mouseY;

}

// Math Functions //
function getRandomX(x)
{
  return Math.floor(Math.random()*x)+10;
}

function getRandomY(y)
{
  return Math.floor(Math.random()*y) + 10;
}

function getRandomSize(size)
{
  return Math.floor(Math.random()*size)+10
}
