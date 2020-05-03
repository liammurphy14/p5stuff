class Ball {
  constructor(posX, posY, size) {
    this.posX = posX;
    this.posY = posY;
    this.size = size;

    this.vX = 6
    this.vY = 0

    this.aY = 0.1
    this.aX = 0

    this.r = 0
    this.rV = 0.1
  }


  collide(wall, dir) {
      this.pos
  }

  update() {
    this.posX += this.vX
    this.posY += this.vY
    this.r += this.rV

    this.vX += this.aX
    this.vY += this.aY

    this.vX *= 0.999
    this.vY *= 0.999

    if (this.posY >= height - this.size/2) {
      this.posY = height - this.size/2
      this.vY = -this.vY * 0.95
      this.vX = this.rV * this.size/2
      this.rV = this.rV * 0.95
    }

    if (this.posX >= width - this.size/2) {
      this.posX = width - this.size/2
      this.vX = -this.vX * 0.9
      this.vY = -this.rV * this.size/2
      this.rV = this.rV * 0.9
    }
  }

  show() {
    push()
    translate(this.posX, this.posY)
    rotate(this.r)

    ellipse(0, 0, this.size)
    line(0, -this.size/2, 0, this.size/2)
    line(-this.size/2, 0, this.size/2, 0)

    pop()
  }
}
