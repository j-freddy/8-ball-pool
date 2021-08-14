class Ball {
	radius = 13.5;
	colour;
	pos;

	constructor(pos, colour="#000") {
		this.colour = colour;
		this.pos = pos;
	}

	get x() {
		return this.pos.x;
	}

	get y() {
		return this.pos.y;
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
