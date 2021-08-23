class CueBall extends Ball {
  constructor(x, y) {
    super(x, y, data.cueBall.colour);
  }

  reset() {
    this.pos = new Vector(canvas.width/2, canvas.height/2);
    this.velocity = new Vector(0, 0);
    this.potted = false;
  }

  shoot(velocity) {
    this.velocity = velocity;
  }
}
