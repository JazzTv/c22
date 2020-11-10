const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, box;
var ground;
var ball;

function setup() {
  createCanvas(600,600);

  engine = Engine.create();
  world = engine.world;

  var box_options={restitution:1}
  box = Bodies.rectangle(200,100,50,50,box_options);

  World.add(world,box);

  var ground_options={
                    isStatic:true
                      }
  ground = Bodies.rectangle(width/2,height - 10,width,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(580,470,10,{restitution: 2});
  World.add(world,ball);

  console.log(box);
  
}

function draw() {
  background(220,255,255);  

  Engine.update(engine)

  rectMode(CENTER)
  rect(box.position.x,box.position.y,50,50);
  rect(ground.position.x,ground.position.y,width,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10,10);
}