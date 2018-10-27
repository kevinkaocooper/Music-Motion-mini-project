var splash;

function preload() {
  soundFormats('mp3', 'ogg');
  splash = loadSound('splash.mp3');
}

var x = 70;
var y = 40;
var xSpeed = 3;
var ySpeed = 5;

function setup() {
	createCanvas(600, 600);
	noStroke();
}

function draw() {
	background(220);
	x += xSpeed;

	if (x > width || x < 0) {
		xSpeed = xSpeed * -1;
	  splash.play();
	}
	//ellipse(x, height/2, 40, 40);

	y += ySpeed;

	if (y > height || y < 0) {
		ySpeed = ySpeed * -1;
		splash.play();
	}

	red = map(y, 0, height, 255, 0);
	opacity = map(x, 0, width, 0, 100);
	//fill(red,0,0);
	fill(red, red / 2, 0, opacity);

	//ellipse(y, height/2, 40, 40);
	ellipse(x, y, 40, 40);
}
