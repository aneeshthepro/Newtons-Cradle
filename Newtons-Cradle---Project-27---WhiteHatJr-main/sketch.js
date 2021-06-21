const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

const MouseConstraint = Matter.MouseConstraint;

var world, engine, canvas;
var bob1, bob2, bob3, bob4, bob5, bob6;
var sling1, sling2, sling3, sling4, sling5, sling6;
var mConstraint;

function setup() {
  canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  bob1 = new Bob(250, 400, "red");
  bob2 = new Bob(310, 400, "orange");
  bob3 = new Bob(370, 400,"yellow");
  bob4 = new Bob(430, 400, "green ");
  bob5 = new Bob(490, 400, "blue");
  bob6 = new Bob (550,400, "purple");

  sling1 = new Sling(bob1.body, { x: 250, y: 150 });
  sling2 = new Sling(bob2.body, { x: 310, y: 150 });
  sling3 = new Sling(bob3.body, { x: 370, y: 150 });
  sling4 = new Sling(bob4.body, { x: 430, y: 150 });
  sling5 = new Sling(bob5.body, { x: 490, y: 150 });
  sling6 = new Sling(bob6.body, { x: 550, y: 150 });
}

function draw() {
  background(0);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  sling6.display();
}

function mouseDragged() {
  Matter.Body.setPosition(bob1.body, { x: mouseX, y: mouseY });
}