 var backgroundImage;
var bowImage;
var redImage;
var pinkImage;
var blueImage,greenImage, greenImage,arrowImage;
var score;
function preload(){
 //load your images here 
bowImage=loadImage("bow0.png")
backgroundImage=loadImage("background0.png")
  redImage=loadImage("red_balloon0.png")
  pinkImage=loadImage("pink_balloon0.png")
  blueImage=loadImage("blue_balloon0.png")
  greenImage=loadImage("green_balloon0.png")
  arrowImage=loadImage("arrow0.png")
}

function setup() {
  background("white")
  createCanvas(600, 600);
  background=createSprite(0,0,600,600)
  background.addImage(backgroundImage)
  background.scale=2.7;
  bow=createSprite(480,100,20,15)
  bow.addImage(bowImage)
  score=0;
 redG=new Group()
  greenG=new Group()
  blueG=new Group()
  pinkG=new Group()
  arrowG=new Group()
  
}

function draw() {
  background.velocityX=-3;
  if(background.x<0){
    background.x=background.width/2
  }
  if(keyDown("space")){
    createArrow();
  }
  var rand=Math.round(random(1,4))
  if(frameCount%80===0){
    if(rand===1){
      redballoon();
    }
    else if(rand===2){
      greenballoon();
    }
    else if(rand===3){
      blueballoon();
    }
      else {
        pinkballoon();
      }
  }
  if(arrowG.isTouching(redG)){
    redG.destroyEach();
    arrowG.destroyEach();
    score++
  }
  if(arrowG.isTouching(greenG)){
    greenG.destroyEach();
    arrowG.destroyEach();
    score++
  }
  if(arrowG.isTouching(blueG)){
    blueG.destroyEach();
    arrowG.destroyEach();
    score++
  }
  if(arrowG.isTouching(pinkG)){
    pinkG.destroyEach();
    arrowG.destroyEach();
    score++
  }
  bow.y=World.mouseY
  //add code here
  drawSprites();
text("Score: "+score,480,60)
}

function createArrow(){
  arrow=createSprite(400,100)
  arrow.addImage(arrowImage)
  arrow.velocityX=-5;
  arrow.y=bow.y;
  arrow.scale=0.5;
  arrowG.add(arrow)
}
function redballoon(){
  var rand=Math.round(random(50,400))
  red=createSprite(0,rand)
  red.addImage(redImage);
  red.velocityX=3;
  red.scale=0.1;
  red.lifetime=150;
  redG.add(red)
}
function greenballoon(){
  var rand=Math.round(random(50,400))
  green=createSprite(0,rand)
  green.addImage(greenImage);
  green.velocityX=3;
  green.scale=0.1;
  green.lifetime=150;
  greenG.add(green)
}
function blueballoon(){
  var rand=Math.round(random(50,400))
  blue=createSprite(0,rand)
  blue.addImage(blueImage);
  blue.velocityX=3;
  blue.scale=0.1;
  blue.lifetime=150;
  blueG.add(blue)
}
function pinkballoon(){
  var rand=Math.round(random(50,400))
  pink=createSprite(0,rand)
  pink.addImage(pinkImage);
  pink.velocityX=3;
  pink.lifetime=150;
  pinkG.add(pink)
}
