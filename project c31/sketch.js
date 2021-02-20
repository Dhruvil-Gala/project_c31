
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var drops=[];
var maxdrops=100;

var thunder1,thunder2,thunder3,thunder4;
var thunder;
var  thunderCreatedFrame;

function preload()
{
thunder1=loadImage("1.png");	
thunder2=loadImage("2.png");	
thunder3=loadImage("3.png");	
thunder4=loadImage("4.png");	

}

function setup() {
	createCanvas(1200, 600);

 
	engine = Engine.create();
	world = engine.world;
  man=new Man(600,385);
  if (frameCount %10===0){
	//Create the Bodies Here.
  for (  var i=0;i< 100;i++){
   
  
     drops.push(new Drops(random(0,1200),random(0,600)));
  } 
}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  

man.display();
  
  
for(var z=0;z< drops.length-1;z++){
drops[z].display();
}
  thundering();




  drawSprites();
 
}

function thundering(){
  rand=Math.round(random(1,4));
  if(frameCount%80===0){
    thunderCreatedFrame=frameCount;
    thunder=createSprite(random(10,570),random(10,30),10,10);
    switch(rand){
     case 1:thunder.addImage(thunder1);
     break;
     case 2:thunder.addImage(thunder2);
     break;
     default: break;
    }
  
  
  thunder.scale=random(0.3,0.6)
  

  }
  if(frameCount%80===30 && thunder){
    thunder.destroy();
  }
  
}