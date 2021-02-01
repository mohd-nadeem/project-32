const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1, ground2, ground;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18;
var polygon, slingShot, polygonImg;
var bg = "bg.png";
var backgroundImg
var score = 0;

function preload() {
  polygonImg = loadImage("hexagon.png");
  getBackground();
}

function setup() {
  createCanvas(1200, 400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);

  ground = new Ground(600, 395, 1200, 10)
  ground1 = new Ground(605, 360, 170, 10);
  ground2 = new Ground(1000, 280, 170, 10);

  block1 = new Box(545, 320, 30, 40);
  block2 = new Box(575, 320, 30, 40);
  block3 = new Box(605, 320, 30, 40);
  block4 = new Box(635, 320, 30, 40);
  block5 = new Box(665, 320, 30, 40);
  block6 = new Box(605, 280, 30, 40);
  block7 = new Box(575, 280, 30, 40);
  block8 = new Box(635, 280, 30, 40);
  block9 = new Box(605, 240, 30, 40);
  block10 = new Box(1000, 240, 30, 40);
  block11 = new Box(1030, 240, 30, 40);
  block12 = new Box(1060, 240, 30, 40);
  block13 = new Box(970, 240, 30, 40);
  block14 = new Box(940, 240, 30, 40);
  block15 = new Box(1000, 200, 30, 40);
  block16 = new Box(1030, 200, 30, 40);
  block17 = new Box(970, 200, 30, 40);
  block18 = new Box(1000, 160, 30, 40);

  polygon = Bodies.circle(50, 200, 20);
  World.add(world, polygon);

  slingShot = new Slingshot(polygon, { x: 100, y: 200 });

}

function draw() {
  if (backgroundImg)
    background(backgroundImg);

  imageMode(CENTER);
  image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);


  textSize(35);
  fill("white");
  text("Score :" + score, 750, 40);

  ground.display();
  ground1.display();
  ground2.display();

  block1.display();
  block1.score();

  block2.display();
  block2.score();

  block3.display();
  block3.score();

  block4.display();
  block4.score();

  block5.display();
  block5.score();

  block6.display();
  block6.score();

  block7.display();
  block7.score();

  block8.display();
  block8.score();

  block9.display();
  block9.score();

  block10.display();
  block10.score();

  block11.display();
  block11.score();

  block12.display();
  block12.score();

  block13.display();
  block13.score();

  block14.display();
  block14.score();

  block15.display();
  block15.score();

  block16.display();
  block16.score();

  block17.display();
  block17.score();

  block18.display();
  block18.score();

  slingShot.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon, { x: mouseX, y: mouseY });
}


function mouseReleased() {
  slingShot.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    slingShot.attach(polygon)
  }
}

async function getBackground() {
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var rJSON = await response.json();

  var dt = rJSON.datetime;
  var hour = dt.slice(11, 13);

  if (hour >= 06 && hour <= 18) {
    bg = "bg2.jpg";
  }
  else {

    bg = "bg.png";


  }
  backgroundImg = loadImage(bg);
}