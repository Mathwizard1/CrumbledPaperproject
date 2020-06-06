
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
var engine,world,ground,s1,s2,s3;

function setup() {
  createCanvas(1000,500);
  engine=Engine.create();
  world=engine.world;

  ground = Bodies.rectangle(width/2,height-15,width,15,{isStatic:true});
  World.add(world,ground);

  ball = Bodies.circle(100,400,25,{isStatic:false,restitution:0.3,friction:0.5,density:1.2});
  World.add(world,ball);

  s1=Bodies.rectangle(740,height-70,20,100,{isStatic:true});
  World.add(world,s1);

  s2=Bodies.rectangle(825,height-30,150,20,{isStatic:true});
  World.add(world,s2);

  s3=Bodies.rectangle(900,height-70,20,100,{isStatic:true});
  World.add(world,s3);
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);

  fill(color(255,255,255));{
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,width,15);
  noFill();}

  fill(color(251,236,93));{
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25);
  noFill();}

  fill(color(128,0,128));
  noStroke();
  rect(s1.position.x,s1.position.y,20,100);
  rect(s2.position.x,s2.position.y,150,20);
  rect(s3.position.x,s3.position.y,20,100);
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball,ball.position,{x:0,y:-50});
  }
  if(keyCode===RIGHT_ARROW){
    Matter.Body.applyForce(ball,ball.position,{x:50,y:0});
  }
}