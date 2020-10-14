const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine,world,box;



function setup() {
  createCanvas(400,400);
  
  engine= Engine.create();
  world= engine.world;
  box= Bodies.rectangle(300,200,100,200);
  World.add(world,box);
  console.log(box);
  console.log(box.position.x);
  console.log(box.position.y);
 
  
}

function draw() {
  background("lightblue"); 
  Engine.update(engine); 
  rectMode(CENTER);
  rect(box.position.x,box.position.y,30,100);
}