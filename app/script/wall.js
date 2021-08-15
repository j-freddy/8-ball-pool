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

	isTouchingBall(ball) {
		switch(this.bounceDirection) {
			case "RIGHT":
				return ball.x - ball.radius < this.x + this.width;
			case "DOWN":
				return ball.y - ball.radius < this.y + this.height;
			case "LEFT":
				return ball.x + ball.radius > this.x;
			case "UP":
				return ball.y + ball.radius > this.y;
		}
	}

	draw(scale=1) {
		ctx.save();
		ctx.fillStyle = "#577399";
		ctx.fillRect(this.x*scale, this.y*scale, this.width*scale,
								 this.height*scale);
		ctx.restore();
	}
}
