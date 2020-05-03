function setup() {

  createCanvas(750, 500)
  ball = new Ball(400,200,30, 0.7)

}


function draw() {
  background(100)

  stroke(0)
  ball.update()
  ball.show()
}
