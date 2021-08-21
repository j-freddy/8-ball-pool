class Wall {
  bounceDirection;
  pos; // top left corner
  dimension;

  constructor(bounceDirection, x, y, width, height) {
    this.bounceDirection = bounceDirection;
    this.pos = new Vector(x, y);
    this.dimension = new Vector(width, height);
  }

  get x() {
    return this.pos.x;
  }

  get y() {
    return this.pos.y;
  }

  get width() {
    return this.dimension.x;
  }

  get height() {
    return this.dimension.y;
  }

  isCollideWithBall(ball) {
    // Adapted from
    // http://jeffreythompson.org/collision-detection/circle-rect.php

    let cornerPos = ball.pos.copy();

    if (ball.x < this.x) {
      cornerPos.x = this.x;
    } else if (ball.x > this.x + this.width) {
      cornerPos.x = this.x + this.width;
    }

    if (ball.y < this.y) {
      cornerPos.y = this.y;
    } else if (ball.y > this.y + this.height) {
      cornerPos.y = this.y + this.height;
    }

    let delta = Vector.subtract(ball.pos, cornerPos);
    return delta.magnitude <= ball.radius;
  }

  draw(scale=1) {
    ctx.save();
    ctx.fillStyle = data.wall.colour;
    ctx.fillRect(this.x*scale, this.y*scale, this.width*scale,
                 this.height*scale);
    ctx.restore();
  }
}
