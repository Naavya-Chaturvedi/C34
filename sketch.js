//step1-name spacing/nickname
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,ball;
var box1;

function setup() {
  createCanvas(1200,600);

  //step2
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
  //step3
  

  //step6 - tweaking the values of the properties
  b1 = new Box(1000,100,100,100);
  b2 = new Box(1000,100,100,100);
  b3 = new Box(1000,100,100,100);
  b4 = new Box(1000,100,100,100);

  b5 = new Box(800,100,100,100);
  b6 = new Box(800,100,100,100);
  b7 = new Box(800,100,100,100);
  b8 = new Box(800,100,100,100);
  b9 = new Box(800,100,100,100);

  ball = new Ball(400,300)

  chain = new Chain(ball.body,{x:400,y:50})

  //Engine.run(myEngine)
}

function draw() {
  background("black");  
  


  //step4
  Engine.update(engine);

  //step5 displaying the body/box
  //fill("skyblue");
  ground.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  ball.display();
  chain.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});

}