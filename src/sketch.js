let font;
const project = { name: "#0001" };
const fontSize = 20;
let centerX;
let centerY;
let cnv;
let shapeVerts;
const resolution = 20;

function preload() {
	font = loadFont("assets/fonts/sourcesanspro-regular-webfont.ttf");
}

function setup() {
	cnv = createCanvas(500, 500);
	cnv.mouseClicked(buildVerts);
	centerX = width / 2;
	centerY = height / 2;
	background(150);
	textFont(font);
	textSize(fontSize);
	textAlign(LEFT, TOP);
	text(project.name, 10, 10, 150, 20);

	shapeVerts = buildVerts();
}

function draw() {
	shapeVerts = buildVerts();
	stroke(random(0, 255), random(0, 255), random(0, 255));
	// noStroke();
	noFill();
	// draw the form
	beginShape();
	curveVertex(
		shapeVerts[resolution - 1].x + centerX,
		shapeVerts[resolution - 1].y + centerY,
	); // Start point of shape is last in vers array, this create an overlap
	for (let i = 0; i < resolution; i++) {
		curveVertex(shapeVerts[i].x + centerX, shapeVerts[i].y + centerY);
	}
	curveVertex(shapeVerts[0].x + centerX, shapeVerts[0].y + centerY);
	curveVertex(shapeVerts[1].x + centerX, shapeVerts[1].y + centerY);
	endShape();
}

function buildVerts() {
	// config
	const radius = 150;
	const resAngle = radians(360 / resolution);
	// create verts for shape
	const shapeVerts = [];
	for (let i = 0; i <= resolution; i++) {
		shapeVerts.push({
			x: cos(resAngle * i) * radius,
			y: sin(resAngle * i) * radius,
		});
	}

	// randomize verts
	for (let i = 0; i < shapeVerts.length; i++) {
		shapeVerts[i].x += random(-20, 20);
		shapeVerts[i].y += random(-20, 20);
	}
	return shapeVerts;
}
