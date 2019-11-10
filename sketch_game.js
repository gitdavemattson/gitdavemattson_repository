var playerx = 100;
var playery = 300;
var diameter = 30;
var mousex = 0;
var mousey = 0;
var obstOneX = 100;
var obstOneY = 100;
var obstTwoX = 700;
var obstTwoY = 500;
var obstThreeX = 400;
var obstThreeY = 300;
var newObstX;
var newObstY;
var movementOne;
var movementTwo;
var movementThree;
var movementFour;
var movementFive;
var movementSix;


function setup()
{
  createCanvas(800, 600);
  movementOne = Math.floor(Math.random() * 10) + 1;
  movementTwo = Math.floor(Math.random() * -10) - 1;
  movementThree = Math.floor(Math.random() * 10) + 1;
  movementFour = Math.floor(Math.random() * -10) - 1;
  movementFive = Math.floor(Math.random() * 10) + 1;
  movementSix = Math.floor(Math.random() * -10) - 1;

}

function draw()
{
    // general setup stuff //
    background(0, 256, 200);
    fill(150, 0, 256);
    circle(playerx, playery, diameter);
    ellipse(mousex, mousey, 10, 10);

    // walls //
    fill(0, 200, 256);
    rect(0, 580, 800, 20);
    rect(0, 0, 800, 20);
    rect(0, 0, 20, 600);
    rect(780, 0, 20, 260);
    rect(780, 340, 20, 260);

    // obstacles //
    fill(256, 0, 0);
    square(obstOneX, obstOneY, 80);
    fill(0, 256, 0);
    square(obstTwoX, obstTwoY, 40);
    fill(0, 0, 256);
    square(obstThreeX, obstThreeY, 60);
    fill(0, 200, 256);
    square(newObstX, newObstY, 100);

    // movement and such //
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

    // obstacle movement //
    // Obstacle 1 //
    if(obstOneX >= 800)
      {
          obstOneX = 0;

    }else if (obstOneX <= 0)
      {
          obstOneX = 800;

      }

    if(obstOneY >= 600 || obstOneY <= 0)
      {
          movementTwo *= -1;
      }
        obstOneX += movementOne;
        obstOneY += movementTwo;

    // Obstacle 2 //
    if(obstTwoY >= 600)
      {
          obstTwoY = 0;

    }else if (obstTwoY <= 0)
      {
          obstTwoY = 600;

      }

    if(obstTwoX >= 800 || obstTwoX <= 0)
      {
          movementFour *= -1;
      }
        obstTwoX += movementFour;
        obstTwoY += movementThree;

    // Obstacle 3 //
    if(obstThreeX >= 800)
      {
          obstThreeX = 0;

    }else if (obstThreeX <= 0)
      {
          obstThreeX = 800;

        }
    if(obstThreeY >= 600)
      {
          obstThreeY = 0;

    }else if (obstThreeY <= 0)
      {
          obstThreeY = 600;

      }
        obstThreeX += movementFive;
        obstThreeY += movementSix;

    // Exit and Winning Notification //
    if(playerx >= 790 && playery >= 260 && playery <= 340)
    {
      fill(0)
      textSize(60);
      text("You Win!", 20, 80);
    }else{
      fill(0)
      textSize(10);
      text("Game in progres...", 20, 30);
    }

}

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
