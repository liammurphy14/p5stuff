class Ball {


  constructor(posX, posY, size, bounce) {
    this.pos = createVector(posX, posY)
    this.v = createVector(6,0)
    this.a = createVector(0,0.1)
    this.size = size
    this.bounce = bounce
    this.r = 0
    this.rV = 0.1
    this.rA = 0
  }

  spinUp(drA) {
    //console.log("spin")
    this.rA += drA
  }

  jump() {
    this.v.y = -7
  }

  update() {
    //console.log(this.rA)
    this.pos.add(this.v)
    this.v.add(a)
    this.r += this.rV
    this.rV += this.rA
    this.dR = 0.6
    this.dT = 0.4
    if (this.pos.y >= height - this.size/2) {
      // snap to collision height
      this.pos.y = height - this.size/2
      // bounce
      this.v.y = -this.v.y * this.bounce
      // calculate difference in speed of rotation and speed of orthogonal translation
      this.dV = (this.rV * this.size/2) - this.v.x
      //console.log(this.dV)
      // adjust rotation based on collision
      this.rV -= (this.dV*this.dR/ (this.size/2))
      // adjust perpendicular velocity based on rotation
      this.v.x += this.dV * this.dT
    }

    if (this.pos.x >= width - this.size/2) {
      this.pos.x = width - this.size/2
      this.v.x = -this.v.x * this.bounce

      this.dV = -(this.rV * this.size/2) - this.v.y
      //console.log(this.dV)
      this.rV += (this.dV*this.dR/ (this.size/2))
      this.v.y += this.dV * this.dT

    }

    if (this.pos.y <= 0 + this.size/2) {
      this.pos.y = 0 + this.size/2
      this.v.y = -this.v.y * this.bounce

      // calculate difference in speed of rotation and speed of orthogonal translation
      this.dV = -(this.rV * this.size/2) - this.v.x
      console.log(this.dV)
      // adjust rotation based on collision
      this.rV += (this.dV*this.dR/ (this.size/2))
      // adjust perpendicular velocity based on rotation
      this.v.x += this.dV * this.dT
    }

    if (this.pos.x <= 0 + this.size/2) {
      this.pos.x = 0 + this.size/2
      this.v.x = -this.v.x * this.bounce

      this.dV = (this.rV * this.size/2) - this.v.y
      //console.log(this.dV)
      this.rV -= (this.dV*this.dR/ (this.size/2))
      this.v.y += this.dV * this.dT
    }

  }

  show() {
    push()
    translate(this.pos.x, this.pos.y)
    rotate(this.r)
    ellipse(0,0, this.size)

    line(0, -this.size/2, 0, this.size/2)
    line(-this.size/2, 0, this.size/2, 0)

    pop()
  }
}
