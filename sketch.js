var hr;
var min;
var sec;
var secAngle, minAngle, hrAngle;


function setup() {
  createCanvas(800,400);
}

function draw() {
  background(0); 


  translate(400, 200);
  rotate(-90);

  hr = hour();
  min = minute();
  sec = second();

  noFill();

  strokeWeight(8);


  stroke(255, 0, 0);
  secAngle = map(sec, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secAngle);

  stroke(255, 165, 0);
  minAngle = map(min, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minAngle);

  stroke(255, 255, 0);
  hrAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hrAngle);

  push();
  rotate(secAngle);
  stroke(255, 0, 0);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minAngle);
  stroke(255, 165, 0);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hrAngle);
  stroke(255, 255, 0);
  line(0, 0, 50, 0);
  pop();

  drawSprites();
}