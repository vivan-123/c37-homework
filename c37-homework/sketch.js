var canvas;
var car;

function setup()
{
  canvas = createCanvas(displayWidth,displayHeight);
  car = createSprite(displayWidth/2,displayHeight/3,50,50);
  //var randomn = random(10,40);
  //var s;
}


function draw()
{
  background("white");

  camera.position.x = displayWidth/2;
  camera.position.y = car.y;
  
  if(keyDown(UP_ARROW))
  { 
    car.y = car.y - 1;
    var o = createSprite(car.x - 70, car.y + 20,30,30);
  }
  //s = createSprite(randomn,randomn,randomn,randomn)
  text ("This line is being drawn to show that the object is moving",car.x+20,car.y-40)
  drawSprites();

}
