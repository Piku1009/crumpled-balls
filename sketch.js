
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var part1,part2,part3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(50,630,50);
	ground = new Ground(400,680,800,20);
	
  boxPosition=500;
  boxY=610;


  boxleftSprite=createSprite(boxPosition, boxY, 20,100);
  boxleftSprite.shapeColor=color(255,0,0);

  boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
  World.add(world,boxLeftBody);

  boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
  boxBase.shapeColor=color(255,0,0);

  boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
  World.add(world, boxBottomBody);

  boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
  boxleftSprite.shapeColor=color(255,0,0);

  boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
  World.add(world, boxRightBody);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ball.display();
  keyPressed();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
  if(keyWentDown("UP_ARROW")){
      Matter.Body.applyForce(ball.body,ball.body.position,{x:400,y:-400});
  }
}


