
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1520,750);


	engine = Engine.create();
	world = engine.world;
 

	  //Create the Bodies Here.
    ground1 = new Ground(760,180,100,20);
    

    bob1 = new Bob(1000,100,50,50);
    chain1 = new Chain(ground1.body,bob1.body);
	  Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("peachPuff");
  bob1.display();
  drawSprites();
  text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY);
  ground1.display();
  chain1.display();
}



