function setup() {
    createCanvas(800,400);
    fixrect=createSprite(400,200);
    fixrect.shapeColor="red";
    fixrect.debug=true
    movingrect=createSprite(100,200);
    movingrect.shapeColor="red";
    movingrect.debug=true
  
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
    movingrect.x=mouseX
    movingrect.y=mouseY
//isTouching();
bounceOff(gameobject2,gameobject1);
if(isTouching(fixrect,movingrect)){   
   fixrect.shapeColor="green";
movingrect.shapeColor="green";


} 
else{
  movingrect.shapeColor="red";
  fixrect.shapeColor="red";
}   
drawSprites();
  }
  