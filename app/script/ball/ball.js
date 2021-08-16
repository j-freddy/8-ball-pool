class Ball {
  radius = 13.5;
  friction = 0.985; // friction coefficient, 1 = smooth, 0 = sticky
  minSpeed = 0.1;
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

  get speed() {
    return this.velocity.magnitude;
  }

  handleWallCollision(walls) {
    walls.forEach(wall => {
      // Commented for "RIGHT" but same idea for other directions
      if (wall.bounceDirection == "RIGHT") {
        // Check if ball has collided with wall
        if (this.x - this.radius < wall.x + wall.width) {
          // Move ball out of wall
          while (this.x - this.radius < wall.x + wall.width) {
            this.x++;
          }
          // Change ball direction
          this.velocity.flipX();
          // Record collision
        }
      } else if (wall.bounceDirection == "DOWN") {
        if (this.y - this.radius < wall.y + wall.height) {
          while (this.y - this.radius < wall.y + wall.height) {
            this.y++;
          }

          this.velocity.flipY();
        }
      } else if (wall.bounceDirection == "LEFT") {
        if (this.x + this.radius > wall.x) {
          while (this.x + this.radius > wall.x) {
            this.x--;
          }

          this.velocity.flipX();
        }
      } else if (wall.bounceDirection == "UP") {
        if (this.y + this.radius > wall.y) {
          while (this.y + this.radius > wall.y) {
            this.y--;
          }

          this.velocity.flipY();
        }
      }
    });
  }

  update(walls) {
    this.handleWallCollision(walls);

    this.pos.add(this.velocity);
    this.velocity.scale(this.friction);

    if (this.speed < this.minSpeed) {
      this.velocity = new Vector(0, 0);
    }
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
