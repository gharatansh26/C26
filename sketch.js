const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;

function setup(){
    var canvas = createCanvas(1535,750);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(760,200,50,50);   
    box2=new Box(755,50,70,140);


    ground1=new Ground(750,734,1535,30);
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    box1.display();
    box2.display();
    ground1.display();
}

