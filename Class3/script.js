var time = 0;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  var dt = deltaTime / 1000;
  time += dt;

  background(225, 55, 8);

  drawGrid();
  drawStem();
  drawFlower();
}

function drawGrid() {
  stroke(190, 70, 65, 15);
  strokeWeight(1);

  for (var x = 0; x <= width; x += 30) {
    line(x, 0, x, height);
  }

  for (var y = 0; y <= height; y += 30) {
    line(0, y, width, y);
  }

  noFill();
  stroke(190, 80, 95, 25);
  for (var r = 120; r < 560; r += 80) {
    ellipse(width / 2, height / 2, r, r);
  }
}

function drawStem() {
  var sway = sin(time * 55) * 8;

  stroke(155, 95, 80, 75);
  strokeWeight(10);
  line(300, 520, 300 + sway, 335);

  stroke(185, 85, 100, 90);
  strokeWeight(2);
  line(292, 520, 292 + sway, 345);
  line(308, 520, 308 + sway, 345);

  for (var i = 0; i < 7; i++) {
    var y = 505 - i * 24;
    var branch = 34 + i * 2;

    stroke(185, 80, 100, 70);
    line(300, y, 300 - branch + sway * 0.4, y - 18);
    line(300, y, 300 + branch + sway * 0.4, y - 18);
  }
}

function drawFlower() {
  var open = 1 + sin(time * 70) * 0.08;
  var spin = time * 10;

  push();
  translate(width / 2, 260);
  rotate(spin);
  scale(open);

  drawingContext.shadowBlur = 20 + sin(time * 90) * 8;
  drawingContext.shadowColor = "rgba(0, 220, 255, 0.75)";

  noFill();
  stroke(190, 80, 100, 75);
  strokeWeight(2);
  for (var r = 95; r <= 245; r += 30) {
    ellipse(0, 0, r, r);
  }

  for (var a = 0; a < 360; a += 12) {
    push();
    rotate(a);
    stroke(200, 70, 100, 42);
    strokeWeight(1);
    line(0, 0, 0, -175);
    pop();
  }

  noStroke();
  for (var b = 0; b < 360; b += 15) {
    push();
    rotate(b);
    fill(192, 80, 100, 25);
    triangle(-18, -36, 18, -36, 0, -205);
    fill(315, 70, 100, 34);
    ellipse(0, -118, 34, 180);
    pop();
  }

  for (var c = 0; c < 360; c += 30) {
    push();
    rotate(c + 15);
    fill(260, 85, 100, 50);
    rectMode(CENTER);
    rect(0, -98, 28, 118);
    fill(55, 80, 100, 42);
    triangle(0, -170, -22, -92, 22, -92);
    pop();
  }

  drawingContext.shadowBlur = 14;
  drawingContext.shadowColor = "rgba(255, 0, 190, 0.85)";

  fill(315, 80, 100, 76);
  ellipse(0, 0, 86, 86);

  fill(185, 40, 100, 90);
  ellipse(0, 0, 54, 54);

  fill(55, 75, 100, 100);
  ellipse(0, 0, 22, 22);

  drawingContext.shadowBlur = 0;
  pop();
}
