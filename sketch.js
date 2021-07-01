var fixedRect, movingRect;
var r1, r2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  r1 = createSprite(200,200,50,50);
  r1.velocityY = -2;
  r1.shapeColor = "green";
  r2 = createSprite(200,100,50,50);
  r2.shapeColor="blue";
  r2.velocityY = 2;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  /*isTouching(movingRect,r1);
 if( isTouching(movingRect,r2)){
movingRect.shapeColor = "red";
r2.shapeColor = "red";
 }
else{
movingRect.shapeColor = "green"
r2.shapeColor = "green"
}*/
bounceOff(r1,r2);
  drawSprites();

}
