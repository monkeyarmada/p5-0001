let font;
const fontSize = 32;
let centerX;
let centerY;
function preload() {
	font = loadFont("assets/fonts/sourcesanspro-regular-webfont.ttf");
}

function setup() {
	createCanvas(1024, 768);
	centerX = width / 2;
	centerY = height / 2;
	textFont(font);
	textSize(fontSize);
	textAlign(CENTER, CENTER);
}

function draw() {
	background(220);
	text("Hello, World!", centerX, centerY);
}
