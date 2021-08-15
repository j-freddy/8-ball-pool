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

	get speed() {
		return this.velocity.magnitude;
	}

	// Returns true if ball has collided against at least 1 wall
	handleWallCollision(walls) {
		let collision = false;

		walls.forEach(wall => {
			if (wall.isTouchingBall(this)) {
				if (wall.bounceDirection === "LEFT" ||
					  wall.bounceDirection === "RIGHT") {
					this.velocity.flipX();
				}

				if (wall.bounceDirection === "UP" ||
					  wall.bounceDirection === "DOWN") {
					this.velocity.flipY();
				}

				collision = true;
			}
		});

		return collision;
	}

	update(walls) {
		let hasCollided = this.handleWallCollision(walls);

		this.pos.add(this.velocity);
		// Make collision elastic so ball does not get stuck in wall
		if (!hasCollided) {
			this.velocity.scale(this.friction);
		}

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
