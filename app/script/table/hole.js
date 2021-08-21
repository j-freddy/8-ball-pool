class Hole {
  radius = data.hole.radius;
  pos;

  constructor(x, y) {
    this.pos = new Vector(x, y);
  }

  get x() {
    return this.pos.x;
  }

  get y() {
    return this.pos.y;
  }

  draw(scale=1) {
    ctx.save();
    ctx.fillStyle = data.hole.colour;
    ctx.beginPath();
    ctx.arc(this.x*scale, this.y*scale, this.radius*scale, 0, 2*Math.PI);
    ctx.fill();
    ctx.restore();
  }
}
