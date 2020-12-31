const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pinkos = [];
    var divisions = [];
    var particles = [];
    
    var divisionHeight = 30;


function setup(){
    var canvas = createCanvas(800,480);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    
}




function draw(){
    background(0,0,0);
    Engine.update(engine);

    
    
    for(var k = 0;k <= width ; k = k +80){
      divisions.push(new Division(k , height - divisionHeight/2,10,divisionHeight));
    
    }
   
    ground.display();
       
}

