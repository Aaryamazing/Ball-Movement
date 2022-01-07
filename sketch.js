var ball 
function setup() {
  createCanvas(600,600);
ball=createSprite (300,300,20,20)
ball.shapeColor = ("black")
}

function draw() 
{
  background("cyan");
drawSprites()
if(keyIsDown(LEFT_ARROW)){
  ball.x -= 5
}
if(keyIsDown(RIGHT_ARROW)){
  ball.x += 5
}
if(keyIsDown(UP_ARROW)){
  ball.y -= 5
}
if(keyIsDown(DOWN_ARROW)){
  ball.y += 5
}
}




