var time = 0;
var flowerSeconds = 0;
var timeSpeed = 1;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);
  textFont("monospace");
  flowerSeconds = hour() * 3600 + minute() * 60 + second();
}

function draw() {
  var dt = deltaTime / 1000;
  time += dt;

  if (mouseIsPressed) {
    timeSpeed = min(timeSpeed + dt * 22, 280);
  } else {
    timeSpeed = lerp(timeSpeed, 1, 0.035);
  }

  flowerSeconds = (flowerSeconds + dt * timeSpeed) % 86400;

  var h = floor(flowerSeconds / 3600);
  var m = floor((flowerSeconds % 3600) / 60);
  var s = floor(flowerSeconds % 60);

  background(225, 55, 8);

  drawGrid();
  drawStem(flowerSeconds);
  drawFlower(h, m, s);
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

function drawStem(clockTime) {
  var sway = sin(time * 55 + clockTime * 0.12) * 8;

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

function drawFlower(h, m, s) {
  var distanceFromFlower = dist(mouseX, mouseY, width / 2, 260);
  var mouseBloom = map(constrain(distanceFromFlower, 0, 280), 0, 280, 1.22, 0.86);
  var secondPulse = 1 + sin(time * 90 + flowerSeconds * 6) * 0.05;
  var open = mouseBloom * secondPulse;
  var secondAngle = (flowerSeconds % 60) * 6;
  var minuteAngle = ((flowerSeconds / 60) % 60) * 6;
  var hourAngle = ((flowerSeconds / 3600) % 12) * 30;
  var spin = timeSpeed * 0.35;

  push();
  translate(width / 2, 260);
  scale(open);

  drawingContext.shadowBlur = 20 + sin(time * 90) * 8;
  drawingContext.shadowColor = "rgba(0, 220, 255, 0.75)";

  noFill();
  stroke(190, 80, 100, 75);
  strokeWeight(2);
  for (var r = 95; r <= 245; r += 30) {
    ellipse(0, 0, r, r);
  }

  push();
  rotate(secondAngle + spin);
  for (var a = 0; a < 360; a += 12) {
    push();
    rotate(a);
    stroke(200, 70, 100, 42);
    strokeWeight(1);
    line(0, 0, 0, -175);
    pop();
  }
  pop();

  noStroke();

  push();
  rotate(secondAngle + spin);
  for (var b = 0; b < 360; b += 15) {
    push();
    rotate(b);
    var isSecondPetal = b === 0;
    fill(192, 80, 100, isSecondPetal ? 70 : 25);
    triangle(-18, -36, 18, -36, 0, -205);
    fill(315, 70, 100, isSecondPetal ? 72 : 34);
    ellipse(0, -118, isSecondPetal ? 44 : 34, isSecondPetal ? 205 : 180);
    pop();
  }
  pop();

  push();
  rotate(minuteAngle - spin * 0.45);
  for (var c = 0; c < 360; c += 30) {
    push();
    rotate(c + 15);
    var isMinutePetal = c === 0;
    fill(260, 85, 100, isMinutePetal ? 78 : 50);
    rectMode(CENTER);
    rect(0, -98, isMinutePetal ? 34 : 28, isMinutePetal ? 138 : 118);
    fill(55, 80, 100, isMinutePetal ? 68 : 42);
    triangle(0, -180, -22, -92, 22, -92);
    pop();
  }
  pop();

  push();
  rotate(hourAngle + spin * 0.18);
  for (var d = 0; d < 360; d += 30) {
    push();
    rotate(d);
    fill(185, 75, 100, d === 0 ? 82 : 28);
    ellipse(0, -66, d === 0 ? 30 : 22, d === 0 ? 100 : 78);
    pop();
  }
  pop();

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
