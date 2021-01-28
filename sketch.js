function setup() {
  createCanvas(800,400);
  gameobject2=createSprite(400,100);
  gameobject2.shapeColor="red";
 gameobject2.debug=true
 gameobject1=createSprite(400,300);
  gameobject1.shapeColor="red";
  gameobject1.debug=true
gameobject2.velocityY=3;
gameobject1.velocityY=-3;

}

function draw() {
  background(255,255,0);  
bounceOff(gameobject1,gameobject2);


 
  
  drawSprites();
}
  