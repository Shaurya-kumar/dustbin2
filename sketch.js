const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var dustl,dustr,dustb;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,650,800,20);

	dustl = new Box(600,550,10,185);
	dustr = new Box(750,550,10,185);
  dustb = new Box(675,640,150,10);
  
  paper = new Paper(100,100,70);
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  paper.scale = 0.1;
  
  drawSprites();

  paper.display();
  ground.display();
  dustl.display(); 
  dustr.display(); 
  dustb.display(); 
  

  Engine.update(engine);

  if(keyDown(UP_ARROW)){

  Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-60})



  }
 
}



