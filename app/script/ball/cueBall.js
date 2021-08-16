class CueBall extends Ball {
  constructor(x, y) {
    super(x, y, data.cueBall.colour);
  }

  shoot(velocity) {
    this.velocity = velocity;
  }
}
