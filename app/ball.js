class Ball {
	radius = 13.5;
	friction = 0.98; // friction coefficient, 1 = smooth, 0 = sticky
	minSpeed = 0.1;
	colour;
	pos;
	velocity;

	constructor(pos, colour="#000") {
		this.colour = colour;
		this.pos = pos;
		this.velocity = new Vector(3, 4);
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

	update(scale=1) {
		console.log(this.speed);

		this.pos.add(Vector.scale(this.velocity, scale));
		this.velocity.scale(this.friction);

		if (this.speed < this.minSpeed * scale) {
			this.velocity = new Vector(0, 0);
		}
	}

	draw(scale=1) {
		ctx.save();
		ctx.fillStyle = this.colour;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius * scale, 0, 2*Math.PI);
		ctx.fill();
		ctx.restore();
	}
}
