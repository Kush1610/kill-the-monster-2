const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var Start=0;
var Play=1;
var Gamestate=Start;
var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;
var dis

function preload() {
  bg = loadImage("bg.jpg");
  bg2 = loadImage("bg2.jpg");
  fightImg = loadImage("fight.png");
}

function setup() {
  createCanvas(1200, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(450, 640, 1200, 170);

  hero = new Hero(300,800,250);
  rope = new Rope(hero.body, { x: 400, y: 50 });
  monster = new Monster(1000,590,300);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(800, 100, 70, 70);
  box3 = new Box(800, 100, 70, 70);
  box4 = new Box(800, 100, 70, 70);
  box5 = new Box(600, 100, 70, 70);
  box6 = new Box(600, 100, 70, 70);
  box7 = new Box(600, 100, 70, 70);
  box8 = new Box(600, 100, 70, 70);

  fight=createSprite(600, 630, 70,70);
	fight.addImage(fightImg)
	fight.scale=1.2
	fight.visible=true

}

function draw() {

  if(Gamestate===Start)
  {
    background(bg2);
    Engine.update(engine);
    drawSprites();

    if(mousePressedOver(fight))
    {
       Gamestate=Play
       fight.visible=false
    }

  }

  if(Gamestate===Play)
  {
  
      background(bg);
      Engine.update(engine);
      ground.display();
      box1.display();
      box2.display();
      box3.display();
      box4.display()
      box5.display();
      box6.display()
      box7.display();
      box8.display()
    
      rope.display();
      hero.display();
    
      monster.display();
  }

}


function mouseDragged()
{
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}