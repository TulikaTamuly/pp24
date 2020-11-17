
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;
    ball_options={
		restitution:0.5
	}
	ground_options={
		isStatic:true
	}
	//Create the Bodies Here.
	ball=Bodies.circle(100,380,20,ball_options)
	
	World.add(world,ball)
	ground=Bodies.rectangle(400,400,800,20,ground_options)
	World.add(world,ground)
    box1=new box(500,350,20,100)
	box2=new box(600,350,20,100)
	box3=new box(550,390,120,20)
	Matter.Body.setVelocity(ball,{x:10,y:-10})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  console.log(mouseX   ,mouseY)
  background(0);
  
  box1.display()
  box2.display()
  box3.display()
  circle(ball.position.x,ball.position.y,40)
  rect(ground.position.x,ground.position.y,800,20)
  drawSprites();
 
}



