function setup() {
    createCanvas(1000, 1000, WEBGL);
    background(220);
  }
  
  function draw() {
    push();
    stroke(220);
    rotate(PI / -2.0);
    translate(0, -150);
    cone(400, 200);
    pop();

    push();
    stroke(220);
    rotate(PI / 2.0);
    translate(0, -150);
    cone(400, 200);
    pop();

    push();
    if (mouseIsPressed === true) {
    push();
        fill(0);
        sphere(60);
        translate(-110, -170);
        sphere(60);
        translate(-110, -170);
        sphere(60);
        translate(330, 510);
        sphere(60);
        translate(110, 170);
        sphere(60);
    pop();
    } else {
    push();
        sphere(60);
        translate(-110, -170);
        sphere(60);
        translate(-110, -170);
        sphere(60);
        translate(330, 510);
        sphere(60);
        translate(110, 170);
        sphere(60);
    pop();
    }
    pop();

    /*if (mouseIsPressed === true) {
        ellipse(100, 100, 30, 100);
    } else {
        rect(100, 100, 50, 50);
    }
    pop();

    print(mouseIsPressed); */
    }
  


  function keyPressed(){
    if (key == 's'){
        saveCanvas("sketch-15", "png");
    }
}