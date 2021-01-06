const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,stand,stand1,stand2,polygon;
var ground,polygon_img,slingshot;

var score=0;

function preload() {
    polygon_img=loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(400,100,50,);
    box1 = new Block(330,235,30,40);
    box2 = new Block(360,235,30,40);
    box3 = new Block(390,235,30,40);
    box4 = new Block(420,235,30,40);
    box5 = new Block(450,235,30,40);
    box6 = new Block(360,195,30,40);
    box7 = new Block(390,195,30,40);
    box8 = new Block(420,195,30,40);
    box9 = new Block(390,155,30,40);
    box10 = new Block(930,235,30,40);
    box11 = new Block(960,235,30,40);
    box12 = new Block(990,235,30,40);
    box13 = new Block(1020,195,30,40);
    box14 = new Block(1050,235,30,40);
    box15 = new Block(960,195,30,40);
    box16 = new Block(990,195,30,40);
    box17 = new Block(1020,195,30,40);
    box18 = new Block(990,155,30,40);
    
    this.polygon=Bodies.circle(50,200,20);
    World.add(world,this.polygon);
    
    slingshot = new slingshot(this.polygon,{x:100,y:200});

    stand=new Ground(1000,380,100000,20);
    stand1=new Ground(1000,250,200,15);
    stand2=new Ground(400,350,200,15);

}

function draw(){
    Engine.update(engine);
        background("white");
        textSize("20");
        fill("Orange");
        text("Drag The Hexagonal Shape And Release It Launch It At The Blocks",1100,300);

        text("Press Space To Get A Second Chance",1000,350);
        textSize("20");
        fill("Orange");

        text("SCORE:"+score,750,40);
        textSize("20");
        fill("Orange");




    
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
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    polygon_img.display();
    stand.display();
    stand1.display();
    stand2.display();
    slingshot.display();
    
    box1.score();
    box2.score();
    ground.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();

    imageMode(CENTER);
    image(polygon_img,this.polygon.position.x,this.polygon.position.y,40,40);

    slingshot.display();
}
function KeyPressed(){
    if(keyCode===32){
        slingshot.attach(this.polygon,{x:mouseX,y:mouseY});
    }
}

function mouseDragged(){
    if(gameState!=="launched")
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
    gameState="launched"
}
