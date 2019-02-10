var drawing = true;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	rectMode(CENTER);
	fill(0, 0, 1000, 3);
    noStroke();
	rect(width / 2, height / 2, width, height);
    
    colorMode(RGB, 255);
	noFill();
    stroke(255,255,255, 500);

    drawRectangle();

}

function drawRectangle() {
    if(drawing){
        push();
        translate(mouseX, mouseY);
        rotate(radians(mouseX));
        rect(0, 0, mouseX/5, mouseY/5);
        pop();
    }
}

function mousePressed() {
    drawing = !drawing;
    strokeWeight(random(20));
}

function mouseWheel() {
       
}

function windowResized() {
    resizeCanvas (windowWidth, windowHeight); 
}