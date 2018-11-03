var ball = [];
var x = [];
var y = [];
var xSpeed = [];
var ySpeed = [];
var moveV
var moveH;
var r;
var opacity;
var sizeX;
var sizeY;
var s = '    keep pressing\n              &\n wait for the sound';
var circle1;
var circle2;
var circle3;
var r = 200;
var g = 230;
var b = 204;
var colChange = [180, 200, 230, 250];



function preload() {
  soundFormats('mp3', 'ogg');
  sounds1 = loadSound('sound/chime1.mp3');
  sounds2 = loadSound('sound/chime2.mp3');
}

function setup() {
  createCanvas(400, 400);
  frameRate(40);
  noStroke();
}

function mousePressed() {

  moveV = random(1, -1);
  moveH = random(1, -1);

  x.push(mouseX);
  y.push(mouseY);
  xSpeed.push(random(moveV));
  ySpeed.push(random(moveH));

  if (mouseX < width && mouseY < height) {
    s = '';
  }

}

function draw() {

  background(204, 230, 255);

  for (var i = 0; i < x.length; i++) {

    col = map(y[i], 100, 0, 200, 0, true);
    opacity = map(x[i], 0, 400, 0, 400, true);
    fill(col, 250, opacity);
    noStroke();
    ellipse(x[i], y[i], 50);

    x[i] += xSpeed[i];

    if (x[i] > width - 20 || x[i] < 20) {
      xSpeed[i] = xSpeed[i] * -1;
      sounds1.play();
      r = random(colChange);
      g = random(colChange);
      b = random(colChange);
    }

    y[i] += ySpeed[i];

    if (y[i] > height - 20 || y[i] < 20) {
      ySpeed[i] = ySpeed[i] * -1;
      sounds2.play();
      r = random(colChange);
      g = random(colChange);
      b = random(colChange);
    }
  }

  circle1: {
    noFill();
    strokeWeight(100);
    stroke(255, g, 204);
    ellipse(200, 200, 460, 460);
  }

  circle2: {
    noFill();
    strokeWeight(100);
    stroke(r, 230, 204);
    ellipse(200, 200, 520, 520);
  }

  circle3: {
    noFill();
    strokeWeight(100);
    stroke(225, 240, b);
    ellipse(200, 200, 580, 580);
  }

  noStroke();
  fill(255);
  textSize(20);
  textLeading(28);
  text(s, 120, 180);

}