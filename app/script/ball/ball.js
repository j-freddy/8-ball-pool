class Ball {
  radius = data.ball.radius;
  friction = data.ball.friction;
  minSpeed = data.ball.minSpeed;
  colour;
  pos;
  velocity;

  constructor(x, y, colour="#000") {
    this.colour = colour;
    this.pos = new Vector(x, y);
    this.velocity = new Vector(0, 0);
  }

  get x() {
    return this.pos.x;
  }

  get y() {
    return this.pos.y;
  }

  set x(x) {
    this.pos.x = x;
  }

  set y(y) {
    this.pos.y = y;
  }

  get diameter() {
    return this.radius*2;
  }

  get speed() {
    return this.velocity.magnitude;
  }

  isTouchingBall(ball) {
    return this.pos.distanceFrom(ball.pos) < this.diameter;
  }

  removeBallOverlap(ball) {
    let delta = Vector.subtract(ball.pos, this.pos);
    let posChange = Vector.scale(delta, (this.diameter - delta.magnitude) / delta.magnitude * 0.5);

    this.pos.subtract(posChange);
    ball.pos.add(posChange);
  }

  handleWallCollision(walls) {

    walls.forEach(wall => {
      // Commented for "RIGHT" but same idea for other directions
      if (wall.bounceDirection == "RIGHT") {
        // Check if ball has collided with wall
        if (wall.isCollideWithBall(this)) {
          // Move ball out of wall
          this.x = this.radius + wall.x + wall.width;
          // Change ball direction
          this.velocity.flipX();
        }
      } else if (wall.bounceDirection == "DOWN") {
        if (wall.isCollideWithBall(this)) {
          this.y = this.radius + wall.y + wall.height;
          this.velocity.flipY();
        }
      } else if (wall.bounceDirection == "LEFT") {
        if (wall.isCollideWithBall(this)) {
          this.x = wall.x - this.radius
          this.velocity.flipX();
        }
      } else if (wall.bounceDirection == "UP") {
        if (wall.isCollideWithBall(this)) {
          this.y = wall.y - this.radius
          this.velocity.flipY();
        }
      }
    });
  }

  handleBallCollision(balls) {
    balls.forEach(ball => {
      if (ball !== this) {
        if (this.isTouchingBall(ball)) {
          this.removeBallOverlap(ball);

          // Adapted from
          // https://www.vobarian.com/collisions/2dcollisions2.pdf

          let unitNormal = Vector.subtract(ball.pos, this.pos).asUnitVector();
          let unitTangent = new Vector(-unitNormal.y, unitNormal.x);

          let meDotNormal = Vector.dotProduct(unitNormal, this.velocity);
          let meDotTangent = Vector.dotProduct(unitTangent, this.velocity);
          let otherDotNormal = Vector.dotProduct(unitNormal, ball.velocity);
          let otherDotTangent = Vector.dotProduct(unitTangent, ball.velocity);

          this.velocity
            = Vector.add(
                Vector.scale(unitNormal, otherDotNormal),
                Vector.scale(unitTangent, meDotTangent)
              );

          ball.velocity
            = Vector.add(
                Vector.scale(unitNormal, meDotNormal),
                Vector.scale(unitTangent, otherDotTangent)
              );
        }
      }
    });
  }

  // Do not change ball positions in update
  update(walls, balls) {
    this.handleWallCollision(walls);
    this.handleBallCollision(balls);

    this.velocity.scale(this.friction);

    if (this.speed < this.minSpeed) {
      this.velocity = new Vector(0, 0);
    }
  }

  move() {
    this.pos.add(this.velocity);
  }

  draw(scale=1) {
    ctx.save();
    ctx.fillStyle = this.colour;
    ctx.beginPath();
    ctx.arc(this.x*scale, this.y*scale, this.radius*scale, 0, 2*Math.PI);
    ctx.fill();
    ctx.restore();
  }
}
