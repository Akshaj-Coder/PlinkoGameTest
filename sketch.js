const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;

var ground;
var border;

var division1, division2, division3;


var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,700);
  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground(470,695,1000,20);


  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
  }

  for (var j = 40; j <=width; j +=50) {
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 15; j <=width-10; j+=50) {
    plinkos.push(new Plinko(j,175));
  }

  
}

function draw() {
  background(0);  

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  if (frameCount%60 === 0) {
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
  }


  ground.display();
  


  drawSprites();
}