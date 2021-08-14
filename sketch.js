const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var polygon;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    slab1 = new Ground(600,300,300,20);

    polygon = new Box(200,50,70,70);
    box1 = new Box(620,100,70,70);
    box2 = new Box(660,140,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
     box5 = new Box(810,160,70,70);
     box6 = new Box(400,320,70,70);
     box7 = new Box(800,320,70,70);
     box8 = new Box(70,320,70,70);
     box9 = new Box(340,320,70,70);
     box10 = new Box(720,320,70,70);
    
    

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(polygon.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
   box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    polygon.show();
    slab1.display();
   

    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode===32){
        slingshot.join(polygon.body)
    }
}