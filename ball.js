class Ball {
  constructor(posX, posY, size, bounce) {
    this.pos = createVector(posX, posY)
    this.v = createVector(0,-9)
    this.a = createVector(0,0.2)
    this.size = size
    this.bounce = bounce
    //this.rV = 0.1
  }

  update() {
    this.pos.add(this.v)
    this.v.add(this.a)
    //console.log(this.pos.y)
    if (this.pos.y >= height - this.size/2) {
      this.pos.y = height - this.size/2
      this.v.y = -this.v.y * this.bounce
      //this.v.x = this.rV * this.size/2
      //this.rV = this.rV * 0.95
    }

    if (this.pos.x >= width - this.size/2) {
      this.pos.x = width - this.size/2
      this.v.x = -this.v.x * this.bounce
      //this.v.y = -this.rV * this.size/2
      //this.rV = this.rV * 0.9
    }

    if (this.pos.y <= 0 + this.size/2) {
      this.pos.y = 0 + this.size/2
      this.v.y = -this.v.y * this.bounce
      //this.v.x = this.rV * this.size/2
      //this.rV = this.rV * 0.95
    }

    if (this.pos.x <= 0 + this.size/2) {
      this.pos.x = 0 + this.size/2
      this.v.x = -this.v.x * this.bounce
      //this.v.y = -this.rV * this.size/2
      //this.rV = this.rV * 0.9
    }

  }

  show() {
    ellipse(this.pos.x, this.pos.y, this.size)
  }
}
