var world,engine;
var particles,plinko;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plinkos = [];
var divisions = [];
var particles = [];
var divisionsHeight = 150;

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(1200,600);

  ground = new Ground(599,590,1200,30);

  for(var k=0; k<=width; k=k+80){
    divisions.push(new Division(k,height-divisionsHeight/2,10,divisionsHeight));
  }

  for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j ,75))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,125))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,175))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,225))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,275))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,325))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,375))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,425))
  }
  //plinko1 = new Plinko();
}

function draw() {

  if(frameCount % 60 === 0){
    particle = new Particle(random(120, 500), 0, 7, random(0, 360));
    particles.push(particle);
  }

  background(0); 
  Engine.update(engine);

  for(var k=0; k<divisions.length; k++){
    divisions[k].display();
  }

  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }

  for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
  }

  ground.display();

}