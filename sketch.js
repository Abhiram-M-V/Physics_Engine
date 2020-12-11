const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine,world,ground,ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var ground_options = {
    isStatic : true
  } 
  ground = Bodies.rectangle(200,390,200,20,ground_options);
  var ball_bounce = {
    restitution : 1.0
  }
  ball = Bodies.circle(200,100,20,ball_bounce)
  World.add(world,ground);
  World.add(world,ball);
}
 
function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  rect(ground.position.x,ground.position.y,400,20);
  drawSprites();
} 