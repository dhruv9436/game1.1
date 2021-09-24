
var PLAY = 1;
var END = 0;
var gameState = PLAY;



var path,boy,mask,soap,covid;
var pathImg,boyImg,maskimg,soapimg,covidimg;
var treasureCollection =200;
var cashG,diamondsG,jwelleryG,swordGroup;

function preload(){
  pathImg = loadImage("road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  maskimg = loadImage("images/mask.png");
 // diamondsImg = loadImage("diamonds.png");
  soapimg = loadImage("images/soap.png");
  covidimg = loadImage("images/covid.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(400,400);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(70,330,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
maskG=new Group();
soapG=new Group();
covidGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createmask();
    createsoap();
    createcovid();

    if (maskG.isTouching(boy)) {
      maskG.destroyEach();
      treasureCollection=treasureCollection + 20;
    }
    else if (soapG.isTouching(boy)) {
      soapG.destroyEach();
      treasureCollection=treasureCollection + 10;
      
    
      
    }else
      if(covidGroup.isTouching(boy)) {
       // gameState=END;
       treasureCollection=treasureCollection -50 ;
       // boy.addAnimation("SahilRunning",endImg);
        //boy.x=width/2;
        //boy.y=height/2;
        //boy.scale=0.6;
        
       // maskG.destroyEach();
       // soapG.destroyEach();
        covidGroup.destroyEach();
        
       // maskG.setVelocityYEach(0);
        //soapG.setVelocityYEach(0);       
        //covidGroup.setVelocityYEach(0);
     
    }
    else
      if(treasureCollection==0) {
        gameState=END;
      }
    }
    if (gameState===END){
      // treasureCollection=treasureCollection -50 ;
        boy.addAnimation("SahilRunning",endImg);
        boy.x=width/2;
        boy.y=height/2;
        boy.scale=0.6;
        
        maskG.destroyEach();
        soapG.destroyEach();
        covidGroup.destroyEach();
        
        maskG.setVelocityYEach(0);
        soapG.setVelocityYEach(0);       
        covidGroup.setVelocityYEach(0);

    }
    

  drawSprites();
  textSize(20);
  fill("pink");
  text("Health: "+ treasureCollection,150,30);
  }

  
function createmask() {
  if (World.frameCount % 150 == 0) {
  var mask = createSprite(Math.round(random(50, 350),40, 10, 10));
  mask.addImage(maskimg);
  mask.scale=0.4;
  mask.velocityY = 3;
  mask.lifetime = 150;
  maskG.add(mask);
  }
}

function createsoap() {
  if (World.frameCount % 180 == 0) {
  var soap = createSprite(Math.round(random(50, 350),40, 10, 10));
  soap.addImage(soapimg);
  soap.scale=0.3;
  soap.velocityY = 3;
  soap.lifetime = 150;
  soapG.add(soap);
}
}



function createcovid(){
  if (World.frameCount % 200 == 0) {
  var covid = createSprite(Math.round(random(50, 350),40, 10, 10));
  covid.addImage(covidimg);
  covid.scale=0.5;
  covid.velocityY = 3;
  covid.lifetime = 150;
  covidGroup.add(covid);
  }
}