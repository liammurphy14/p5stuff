let spinControl = 0.01

function setup() {

  createCanvas(750, 500)

  gravX = createSlider(-1, 1, 0, 0.05);
  gravX.position(10, 10);
  gravX.style('width', '150px');

  gravY = createSlider(-1, 1, 0.2, 0.05);
  gravY.position(10, 30);
  gravY.style('width', '150px');

  ball = new Ball(100,400,60, 0.49)

  a = createVector(gravX.value(), gravY.value())

}

function keyPressed() {
  //console.log(keyCode)
  if (keyCode == RIGHT_ARROW) {
    //console.log("Right pressed")
    ball.spinUp(spinControl)
  }
  if (keyCode == LEFT_ARROW) {
    //console.log("Left pressed")
    ball.spinUp(-spinControl)
  }
  if (keyCode == 32) {
    ball.jump()
  }
}

function keyReleased() {
  if (keyCode == RIGHT_ARROW) {
    //console.log("Right released")
    ball.spinUp(-spinControl)
  }
  if (keyCode == LEFT_ARROW) {
    //console.log("Left released")
    ball.spinUp(spinControl)
  }
}

function draw() {
  a.set(gravX.value(), gravY.value())
  background(100)

  stroke(0)
  ball.update()
  ball.show()
}
