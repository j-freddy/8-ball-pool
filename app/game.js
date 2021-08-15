class Game {
	scale = 1;
	cuePower = 0.02;
	cueBall;

	constructor() {
		this.cueBall = new CueBall(new Vector(0, 0));
		this.startEventHandlers();
	}

	update() {
		this.cueBall.update(this.scale);
	}

	draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.save();
		ctx.fillStyle = "#bdd5ea"
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.restore();

		this.cueBall.draw(this.scale);
	}

	startEventHandlers() {
		canvas.addEventListener("click", (e) => {
			let cursorPos = new Vector(e.offsetX, e.offsetY);
			this.cueBall.shoot(
				Vector.scale(
					Vector.subtract(cursorPos, this.cueBall.pos),
					this.cuePower / this.scale
				)
			);
		});
	}
}
