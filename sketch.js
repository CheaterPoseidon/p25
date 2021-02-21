var paper1
var DustBinSide1,DustBinSide2
var DustBinBottom
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
function preload()
{
	
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1= new Paper(200,200,140)
	
	DustBinSide1= new DustbinSide(500,605,20,100)
	
	DustBinSide2= new DustbinSide(720,605,20,100)
	
	DustBinBottom= new DustbinSide(610,655,220,20)
	
	ground=new Ground(400,675,800,20)
	Engine.run(engine);
  
}


function draw() {


  rectMode(CENTER);
  background(150);
  DustBinSide1.display()
  DustBinSide2.display()
  DustBinBottom.display()
  ground.display()
  paper1.display()
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW) {
			 Matter.Body.applyForce(paper1.body,paper1.body.position,{x:80	,y:-150});
		 }
	 }



